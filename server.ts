// Virtual entry point for the app
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import * as remixBuild from 'virtual:remix/server-build';
import {storefrontRedirect} from '@shopify/hydrogen';
import {createRequestHandler} from '@shopify/remix-oxygen';
import {createAppLoadContext} from '~/lib/context';

// Définir les types pour la fonction vercelHandler
import type {IncomingMessage, ServerResponse} from 'http';

/**
 * Export a fetch handler in module format.
 */
export default {
  async fetch(
    request: Request,
    env: Env,
    executionContext: ExecutionContext,
  ): Promise<Response> {
    try {
      const appLoadContext = await createAppLoadContext(
        request,
        env,
        executionContext,
      );

      /**
       * Create a Remix request handler and pass
       * Hydrogen's Storefront client to the loader context.
       */
      const handleRequest = createRequestHandler({
        build: remixBuild,
        mode: process.env.NODE_ENV,
        getLoadContext: () => appLoadContext,
      });

      const response = await handleRequest(request);

      if (appLoadContext.session.isPending) {
        response.headers.set(
          'Set-Cookie',
          await appLoadContext.session.commit(),
        );
      }

      if (response.status === 404) {
        /**
         * Check for redirects only when there's a 404 from the app.
         * If the redirect doesn't exist, then `storefrontRedirect`
         * will pass through the 404 response.
         */
        return storefrontRedirect({
          request,
          response,
          storefront: appLoadContext.storefront,
        });
      }

      return response;
    } catch (error) {
      console.error(error);
      return new Response('An unexpected error occurred', {status: 500});
    }
  },
};

// Créer une fonction de gestionnaire pour Vercel
export async function vercelHandler(
  request: IncomingMessage,
  response: ServerResponse
): Promise<void> {
  try {
    // Convertir la requête Node.js en requête Fetch
    const url = new URL(
      request.url || '/',
      `http://${request.headers.host || 'localhost'}`
    );
    
    const fetchRequest = new Request(url.toString(), {
      method: request.method || 'GET',
      headers: new Headers(request.headers as any),
      // Si nécessaire, ajouter le corps de la requête
    });

    // Créer un contexte de chargement pour l'application
    const env = process.env;
    const appLoadContext = await createAppLoadContext(
      fetchRequest,
      { env } as any,
      { waitUntil: (promise: Promise<any>) => promise } as any
    );

    // Créer le gestionnaire de requêtes Remix
    const handleRequest = createRequestHandler({
      build: remixBuild,
      mode: process.env.NODE_ENV,
      getLoadContext: () => appLoadContext,
    });

    // Traiter la requête
    const fetchResponse = await handleRequest(fetchRequest);

    // Configurer l'en-tête et le statut de la réponse
    for (const [key, value] of fetchResponse.headers.entries()) {
      response.setHeader(key, value);
    }
    response.statusCode = fetchResponse.status;
    
    // Envoyer le corps de la réponse
    const body = await fetchResponse.text();
    response.end(body);
  } catch (error) {
    console.error(error);
    response.statusCode = 500;
    response.end('An unexpected error occurred');
  }
}