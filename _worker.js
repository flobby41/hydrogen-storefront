import {createRequestHandler} from '@shopify/remix-oxygen';
import {createStorefrontClient} from '@shopify/hydrogen';
// Importer directement depuis dist/server/index.js
import * as build from './dist/server/index.js';

export default {
  async fetch(request, env, ctx) {
    try {
      const client = createStorefrontClient({
        storeDomain: env.PUBLIC_STORE_DOMAIN,
        storefrontApiToken: env.PUBLIC_STOREFRONT_API_TOKEN,
        // Ne pas exposer de jetons privés ici pour mock.shop
      });

      const handler = createRequestHandler(build, {
        mode: process.env.NODE_ENV,
        getLoadContext: () => ({
          env, 
          context: ctx, 
          storefront: client,
          session: {
            secret: env.SESSION_SECRET || '2939230293hdhdas'
          }
        }),
      });

      return handler(request);
    } catch (error) {
      console.error(error);
      return new Response('An unexpected error occurred', {status: 500});
    }
  },
}; 