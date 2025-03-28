var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// dist/server/index.js
var _v = Object.defineProperty;
var ih = /* @__PURE__ */ __name((t) => {
  throw TypeError(t);
}, "ih");
var kv = /* @__PURE__ */ __name((t, n, o) => n in t ? _v(t, n, { enumerable: true, configurable: true, writable: true, value: o }) : t[n] = o, "kv");
var os = /* @__PURE__ */ __name((t, n, o) => kv(t, typeof n != "symbol" ? n + "" : n, o), "os");
var sh = /* @__PURE__ */ __name((t, n, o) => n.has(t) || ih("Cannot " + o), "sh");
var wn = /* @__PURE__ */ __name((t, n, o) => (sh(t, n, "read from private field"), o ? o.call(t) : n.get(t)), "wn");
var qc = /* @__PURE__ */ __name((t, n, o) => n.has(t) ? ih("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(t) : n.set(t, o), "qc");
var Wc = /* @__PURE__ */ __name((t, n, o, i) => (sh(t, n, "write to private field"), i ? i.call(t, o) : n.set(t, o), o), "Wc");
function Pv(t, n) {
  for (var o = 0; o < n.length; o++) {
    const i = n[o];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const s in i) if (s !== "default" && !(s in t)) {
        const u = Object.getOwnPropertyDescriptor(i, s);
        u && Object.defineProperty(t, s, u.get ? u : { enumerable: true, get: /* @__PURE__ */ __name(() => i[s], "get") });
      }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
__name(Pv, "Pv");
function jv(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
__name(jv, "jv");
var Qc = { exports: {} };
var as = {};
var Gc = { exports: {} };
var Me = {};
var lh;
function Rv() {
  if (lh) return Me;
  lh = 1;
  var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), S = Symbol.iterator;
  function j(b) {
    return b === null || typeof b != "object" ? null : (b = S && b[S] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  __name(j, "j");
  var R = { isMounted: /* @__PURE__ */ __name(function() {
    return false;
  }, "isMounted"), enqueueForceUpdate: /* @__PURE__ */ __name(function() {
  }, "enqueueForceUpdate"), enqueueReplaceState: /* @__PURE__ */ __name(function() {
  }, "enqueueReplaceState"), enqueueSetState: /* @__PURE__ */ __name(function() {
  }, "enqueueSetState") }, P = Object.assign, I = {};
  function L(b, Z, Ce) {
    this.props = b, this.context = Z, this.refs = I, this.updater = Ce || R;
  }
  __name(L, "L");
  L.prototype.isReactComponent = {}, L.prototype.setState = function(b, Z) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, Z, "setState");
  }, L.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function U() {
  }
  __name(U, "U");
  U.prototype = L.prototype;
  function q(b, Z, Ce) {
    this.props = b, this.context = Z, this.refs = I, this.updater = Ce || R;
  }
  __name(q, "q");
  var Y = q.prototype = new U();
  Y.constructor = q, P(Y, L.prototype), Y.isPureReactComponent = true;
  var G = Array.isArray, ye = Object.prototype.hasOwnProperty, Q = { current: null }, J = { key: true, ref: true, __self: true, __source: true };
  function ce(b, Z, Ce) {
    var ke, be = {}, Ne = null, He = null;
    if (Z != null) for (ke in Z.ref !== void 0 && (He = Z.ref), Z.key !== void 0 && (Ne = "" + Z.key), Z) ye.call(Z, ke) && !J.hasOwnProperty(ke) && (be[ke] = Z[ke]);
    var Fe = arguments.length - 2;
    if (Fe === 1) be.children = Ce;
    else if (1 < Fe) {
      for (var Ue = Array(Fe), Je = 0; Je < Fe; Je++) Ue[Je] = arguments[Je + 2];
      be.children = Ue;
    }
    if (b && b.defaultProps) for (ke in Fe = b.defaultProps, Fe) be[ke] === void 0 && (be[ke] = Fe[ke]);
    return { $$typeof: t, type: b, key: Ne, ref: He, props: be, _owner: Q.current };
  }
  __name(ce, "ce");
  function ve(b, Z) {
    return { $$typeof: t, type: b.type, key: Z, ref: b.ref, props: b.props, _owner: b._owner };
  }
  __name(ve, "ve");
  function $e(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }
  __name($e, "$e");
  function Ie(b) {
    var Z = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(Ce) {
      return Z[Ce];
    });
  }
  __name(Ie, "Ie");
  var Ae = /\/+/g;
  function fe(b, Z) {
    return typeof b == "object" && b !== null && b.key != null ? Ie("" + b.key) : Z.toString(36);
  }
  __name(fe, "fe");
  function _e(b, Z, Ce, ke, be) {
    var Ne = typeof b;
    (Ne === "undefined" || Ne === "boolean") && (b = null);
    var He = false;
    if (b === null) He = true;
    else switch (Ne) {
      case "string":
      case "number":
        He = true;
        break;
      case "object":
        switch (b.$$typeof) {
          case t:
          case n:
            He = true;
        }
    }
    if (He) return He = b, be = be(He), b = ke === "" ? "." + fe(He, 0) : ke, G(be) ? (Ce = "", b != null && (Ce = b.replace(Ae, "$&/") + "/"), _e(be, Z, Ce, "", function(Je) {
      return Je;
    })) : be != null && ($e(be) && (be = ve(be, Ce + (!be.key || He && He.key === be.key ? "" : ("" + be.key).replace(Ae, "$&/") + "/") + b)), Z.push(be)), 1;
    if (He = 0, ke = ke === "" ? "." : ke + ":", G(b)) for (var Fe = 0; Fe < b.length; Fe++) {
      Ne = b[Fe];
      var Ue = ke + fe(Ne, Fe);
      He += _e(Ne, Z, Ce, Ue, be);
    }
    else if (Ue = j(b), typeof Ue == "function") for (b = Ue.call(b), Fe = 0; !(Ne = b.next()).done; ) Ne = Ne.value, Ue = ke + fe(Ne, Fe++), He += _e(Ne, Z, Ce, Ue, be);
    else if (Ne === "object") throw Z = String(b), Error("Objects are not valid as a React child (found: " + (Z === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : Z) + "). If you meant to render a collection of children, use an array instead.");
    return He;
  }
  __name(_e, "_e");
  function Re(b, Z, Ce) {
    if (b == null) return b;
    var ke = [], be = 0;
    return _e(b, ke, "", "", function(Ne) {
      return Z.call(Ce, Ne, be++);
    }), ke;
  }
  __name(Re, "Re");
  function De(b) {
    if (b._status === -1) {
      var Z = b._result;
      Z = Z(), Z.then(function(Ce) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = Ce);
      }, function(Ce) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = Ce);
      }), b._status === -1 && (b._status = 0, b._result = Z);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  __name(De, "De");
  var Oe = { current: null }, ne = { transition: null }, ue = { ReactCurrentDispatcher: Oe, ReactCurrentBatchConfig: ne, ReactCurrentOwner: Q };
  function oe() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  __name(oe, "oe");
  return Me.Children = { map: Re, forEach: /* @__PURE__ */ __name(function(b, Z, Ce) {
    Re(b, function() {
      Z.apply(this, arguments);
    }, Ce);
  }, "forEach"), count: /* @__PURE__ */ __name(function(b) {
    var Z = 0;
    return Re(b, function() {
      Z++;
    }), Z;
  }, "count"), toArray: /* @__PURE__ */ __name(function(b) {
    return Re(b, function(Z) {
      return Z;
    }) || [];
  }, "toArray"), only: /* @__PURE__ */ __name(function(b) {
    if (!$e(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  }, "only") }, Me.Component = L, Me.Fragment = o, Me.Profiler = s, Me.PureComponent = q, Me.StrictMode = i, Me.Suspense = h, Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ue, Me.act = oe, Me.cloneElement = function(b, Z, Ce) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var ke = P({}, b.props), be = b.key, Ne = b.ref, He = b._owner;
    if (Z != null) {
      if (Z.ref !== void 0 && (Ne = Z.ref, He = Q.current), Z.key !== void 0 && (be = "" + Z.key), b.type && b.type.defaultProps) var Fe = b.type.defaultProps;
      for (Ue in Z) ye.call(Z, Ue) && !J.hasOwnProperty(Ue) && (ke[Ue] = Z[Ue] === void 0 && Fe !== void 0 ? Fe[Ue] : Z[Ue]);
    }
    var Ue = arguments.length - 2;
    if (Ue === 1) ke.children = Ce;
    else if (1 < Ue) {
      Fe = Array(Ue);
      for (var Je = 0; Je < Ue; Je++) Fe[Je] = arguments[Je + 2];
      ke.children = Fe;
    }
    return { $$typeof: t, type: b.type, key: be, ref: Ne, props: ke, _owner: He };
  }, Me.createContext = function(b) {
    return b = { $$typeof: c, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: u, _context: b }, b.Consumer = b;
  }, Me.createElement = ce, Me.createFactory = function(b) {
    var Z = ce.bind(null, b);
    return Z.type = b, Z;
  }, Me.createRef = function() {
    return { current: null };
  }, Me.forwardRef = function(b) {
    return { $$typeof: f, render: b };
  }, Me.isValidElement = $e, Me.lazy = function(b) {
    return { $$typeof: C, _payload: { _status: -1, _result: b }, _init: De };
  }, Me.memo = function(b, Z) {
    return { $$typeof: v, type: b, compare: Z === void 0 ? null : Z };
  }, Me.startTransition = function(b) {
    var Z = ne.transition;
    ne.transition = {};
    try {
      b();
    } finally {
      ne.transition = Z;
    }
  }, Me.unstable_act = oe, Me.useCallback = function(b, Z) {
    return Oe.current.useCallback(b, Z);
  }, Me.useContext = function(b) {
    return Oe.current.useContext(b);
  }, Me.useDebugValue = function() {
  }, Me.useDeferredValue = function(b) {
    return Oe.current.useDeferredValue(b);
  }, Me.useEffect = function(b, Z) {
    return Oe.current.useEffect(b, Z);
  }, Me.useId = function() {
    return Oe.current.useId();
  }, Me.useImperativeHandle = function(b, Z, Ce) {
    return Oe.current.useImperativeHandle(b, Z, Ce);
  }, Me.useInsertionEffect = function(b, Z) {
    return Oe.current.useInsertionEffect(b, Z);
  }, Me.useLayoutEffect = function(b, Z) {
    return Oe.current.useLayoutEffect(b, Z);
  }, Me.useMemo = function(b, Z) {
    return Oe.current.useMemo(b, Z);
  }, Me.useReducer = function(b, Z, Ce) {
    return Oe.current.useReducer(b, Z, Ce);
  }, Me.useRef = function(b) {
    return Oe.current.useRef(b);
  }, Me.useState = function(b) {
    return Oe.current.useState(b);
  }, Me.useSyncExternalStore = function(b, Z, Ce) {
    return Oe.current.useSyncExternalStore(b, Z, Ce);
  }, Me.useTransition = function() {
    return Oe.current.useTransition();
  }, Me.version = "18.3.1", Me;
}
__name(Rv, "Rv");
var uh;
function xs() {
  return uh || (uh = 1, Gc.exports = Rv()), Gc.exports;
}
__name(xs, "xs");
var ch;
function $v() {
  if (ch) return as;
  ch = 1;
  var t = xs(), n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: true, ref: true, __self: true, __source: true };
  function c(f, h, v) {
    var C, S = {}, j = null, R = null;
    v !== void 0 && (j = "" + v), h.key !== void 0 && (j = "" + h.key), h.ref !== void 0 && (R = h.ref);
    for (C in h) i.call(h, C) && !u.hasOwnProperty(C) && (S[C] = h[C]);
    if (f && f.defaultProps) for (C in h = f.defaultProps, h) S[C] === void 0 && (S[C] = h[C]);
    return { $$typeof: n, type: f, key: j, ref: R, props: S, _owner: s.current };
  }
  __name(c, "c");
  return as.Fragment = o, as.jsx = c, as.jsxs = c, as;
}
__name($v, "$v");
var dh;
function Iv() {
  return dh || (dh = 1, Qc.exports = $v()), Qc.exports;
}
__name(Iv, "Iv");
var y = Iv();
var $ = xs();
var Tv = jv($);
var Av = Pv({ __proto__: null, default: Tv }, [$]);
var Yc = { exports: {} };
var Zt = {};
var Jc = { exports: {} };
var Kc = {};
var fh;
function Ov() {
  return fh || (fh = 1, function(t) {
    function n(ne, ue) {
      var oe = ne.length;
      ne.push(ue);
      e: for (; 0 < oe; ) {
        var b = oe - 1 >>> 1, Z = ne[b];
        if (0 < s(Z, ue)) ne[b] = ue, ne[oe] = Z, oe = b;
        else break e;
      }
    }
    __name(n, "n");
    function o(ne) {
      return ne.length === 0 ? null : ne[0];
    }
    __name(o, "o");
    function i(ne) {
      if (ne.length === 0) return null;
      var ue = ne[0], oe = ne.pop();
      if (oe !== ue) {
        ne[0] = oe;
        e: for (var b = 0, Z = ne.length, Ce = Z >>> 1; b < Ce; ) {
          var ke = 2 * (b + 1) - 1, be = ne[ke], Ne = ke + 1, He = ne[Ne];
          if (0 > s(be, oe)) Ne < Z && 0 > s(He, be) ? (ne[b] = He, ne[Ne] = oe, b = Ne) : (ne[b] = be, ne[ke] = oe, b = ke);
          else if (Ne < Z && 0 > s(He, oe)) ne[b] = He, ne[Ne] = oe, b = Ne;
          else break e;
        }
      }
      return ue;
    }
    __name(i, "i");
    function s(ne, ue) {
      var oe = ne.sortIndex - ue.sortIndex;
      return oe !== 0 ? oe : ne.id - ue.id;
    }
    __name(s, "s");
    if (typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      t.unstable_now = function() {
        return u.now();
      };
    } else {
      var c = Date, f = c.now();
      t.unstable_now = function() {
        return c.now() - f;
      };
    }
    var h = [], v = [], C = 1, S = null, j = 3, R = false, P = false, I = false, L = typeof setTimeout == "function" ? setTimeout : null, U = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Y(ne) {
      for (var ue = o(v); ue !== null; ) {
        if (ue.callback === null) i(v);
        else if (ue.startTime <= ne) i(v), ue.sortIndex = ue.expirationTime, n(h, ue);
        else break;
        ue = o(v);
      }
    }
    __name(Y, "Y");
    function G(ne) {
      if (I = false, Y(ne), !P) if (o(h) !== null) P = true, De(ye);
      else {
        var ue = o(v);
        ue !== null && Oe(G, ue.startTime - ne);
      }
    }
    __name(G, "G");
    function ye(ne, ue) {
      P = false, I && (I = false, U(ce), ce = -1), R = true;
      var oe = j;
      try {
        for (Y(ue), S = o(h); S !== null && (!(S.expirationTime > ue) || ne && !Ie()); ) {
          var b = S.callback;
          if (typeof b == "function") {
            S.callback = null, j = S.priorityLevel;
            var Z = b(S.expirationTime <= ue);
            ue = t.unstable_now(), typeof Z == "function" ? S.callback = Z : S === o(h) && i(h), Y(ue);
          } else i(h);
          S = o(h);
        }
        if (S !== null) var Ce = true;
        else {
          var ke = o(v);
          ke !== null && Oe(G, ke.startTime - ue), Ce = false;
        }
        return Ce;
      } finally {
        S = null, j = oe, R = false;
      }
    }
    __name(ye, "ye");
    var Q = false, J = null, ce = -1, ve = 5, $e = -1;
    function Ie() {
      return !(t.unstable_now() - $e < ve);
    }
    __name(Ie, "Ie");
    function Ae() {
      if (J !== null) {
        var ne = t.unstable_now();
        $e = ne;
        var ue = true;
        try {
          ue = J(true, ne);
        } finally {
          ue ? fe() : (Q = false, J = null);
        }
      } else Q = false;
    }
    __name(Ae, "Ae");
    var fe;
    if (typeof q == "function") fe = /* @__PURE__ */ __name(function() {
      q(Ae);
    }, "fe");
    else if (typeof MessageChannel < "u") {
      var _e = new MessageChannel(), Re = _e.port2;
      _e.port1.onmessage = Ae, fe = /* @__PURE__ */ __name(function() {
        Re.postMessage(null);
      }, "fe");
    } else fe = /* @__PURE__ */ __name(function() {
      L(Ae, 0);
    }, "fe");
    function De(ne) {
      J = ne, Q || (Q = true, fe());
    }
    __name(De, "De");
    function Oe(ne, ue) {
      ce = L(function() {
        ne(t.unstable_now());
      }, ue);
    }
    __name(Oe, "Oe");
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(ne) {
      ne.callback = null;
    }, t.unstable_continueExecution = function() {
      P || R || (P = true, De(ye));
    }, t.unstable_forceFrameRate = function(ne) {
      0 > ne || 125 < ne ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ve = 0 < ne ? Math.floor(1e3 / ne) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return j;
    }, t.unstable_getFirstCallbackNode = function() {
      return o(h);
    }, t.unstable_next = function(ne) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var ue = 3;
          break;
        default:
          ue = j;
      }
      var oe = j;
      j = ue;
      try {
        return ne();
      } finally {
        j = oe;
      }
    }, t.unstable_pauseExecution = function() {
    }, t.unstable_requestPaint = function() {
    }, t.unstable_runWithPriority = function(ne, ue) {
      switch (ne) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ne = 3;
      }
      var oe = j;
      j = ne;
      try {
        return ue();
      } finally {
        j = oe;
      }
    }, t.unstable_scheduleCallback = function(ne, ue, oe) {
      var b = t.unstable_now();
      switch (typeof oe == "object" && oe !== null ? (oe = oe.delay, oe = typeof oe == "number" && 0 < oe ? b + oe : b) : oe = b, ne) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return Z = oe + Z, ne = { id: C++, callback: ue, priorityLevel: ne, startTime: oe, expirationTime: Z, sortIndex: -1 }, oe > b ? (ne.sortIndex = oe, n(v, ne), o(h) === null && ne === o(v) && (I ? (U(ce), ce = -1) : I = true, Oe(G, oe - b))) : (ne.sortIndex = Z, n(h, ne), P || R || (P = true, De(ye))), ne;
    }, t.unstable_shouldYield = Ie, t.unstable_wrapCallback = function(ne) {
      var ue = j;
      return function() {
        var oe = j;
        j = ue;
        try {
          return ne.apply(this, arguments);
        } finally {
          j = oe;
        }
      };
    };
  }(Kc)), Kc;
}
__name(Ov, "Ov");
var ph;
function Lv() {
  return ph || (ph = 1, Jc.exports = Ov()), Jc.exports;
}
__name(Lv, "Lv");
var hh;
function Dv() {
  if (hh) return Zt;
  hh = 1;
  var t = xs(), n = Lv();
  function o(e) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, a = 1; a < arguments.length; a++) r += "&args[]=" + encodeURIComponent(arguments[a]);
    return "Minified React error #" + e + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  __name(o, "o");
  var i = /* @__PURE__ */ new Set(), s = {};
  function u(e, r) {
    c(e, r), c(e + "Capture", r);
  }
  __name(u, "u");
  function c(e, r) {
    for (s[e] = r, e = 0; e < r.length; e++) i.add(r[e]);
  }
  __name(c, "c");
  var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), h = Object.prototype.hasOwnProperty, v = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, C = {}, S = {};
  function j(e) {
    return h.call(S, e) ? true : h.call(C, e) ? false : v.test(e) ? S[e] = true : (C[e] = true, false);
  }
  __name(j, "j");
  function R(e, r, a, l) {
    if (a !== null && a.type === 0) return false;
    switch (typeof r) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return l ? false : a !== null ? !a.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return false;
    }
  }
  __name(R, "R");
  function P(e, r, a, l) {
    if (r === null || typeof r > "u" || R(e, r, a, l)) return true;
    if (l) return false;
    if (a !== null) switch (a.type) {
      case 3:
        return !r;
      case 4:
        return r === false;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return false;
  }
  __name(P, "P");
  function I(e, r, a, l, d, g, E) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = l, this.attributeNamespace = d, this.mustUseProperty = a, this.propertyName = e, this.type = r, this.sanitizeURL = g, this.removeEmptyString = E;
  }
  __name(I, "I");
  var L = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    L[e] = new I(e, 0, false, e, null, false, false);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var r = e[0];
    L[r] = new I(r, 1, false, e[1], null, false, false);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    L[e] = new I(e, 2, false, e.toLowerCase(), null, false, false);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    L[e] = new I(e, 2, false, e, null, false, false);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    L[e] = new I(e, 3, false, e.toLowerCase(), null, false, false);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    L[e] = new I(e, 3, true, e, null, false, false);
  }), ["capture", "download"].forEach(function(e) {
    L[e] = new I(e, 4, false, e, null, false, false);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    L[e] = new I(e, 6, false, e, null, false, false);
  }), ["rowSpan", "start"].forEach(function(e) {
    L[e] = new I(e, 5, false, e.toLowerCase(), null, false, false);
  });
  var U = /[\-:]([a-z])/g;
  function q(e) {
    return e[1].toUpperCase();
  }
  __name(q, "q");
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var r = e.replace(U, q);
    L[r] = new I(r, 1, false, e, null, false, false);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var r = e.replace(U, q);
    L[r] = new I(r, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var r = e.replace(U, q);
    L[r] = new I(r, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    L[e] = new I(e, 1, false, e.toLowerCase(), null, false, false);
  }), L.xlinkHref = new I("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false), ["src", "href", "action", "formAction"].forEach(function(e) {
    L[e] = new I(e, 1, false, e.toLowerCase(), null, true, true);
  });
  function Y(e, r, a, l) {
    var d = L.hasOwnProperty(r) ? L[r] : null;
    (d !== null ? d.type !== 0 : l || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (P(r, a, d, l) && (a = null), l || d === null ? j(r) && (a === null ? e.removeAttribute(r) : e.setAttribute(r, "" + a)) : d.mustUseProperty ? e[d.propertyName] = a === null ? d.type === 3 ? false : "" : a : (r = d.attributeName, l = d.attributeNamespace, a === null ? e.removeAttribute(r) : (d = d.type, a = d === 3 || d === 4 && a === true ? "" : "" + a, l ? e.setAttributeNS(l, r, a) : e.setAttribute(r, a))));
  }
  __name(Y, "Y");
  var G = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ye = Symbol.for("react.element"), Q = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), ce = Symbol.for("react.strict_mode"), ve = Symbol.for("react.profiler"), $e = Symbol.for("react.provider"), Ie = Symbol.for("react.context"), Ae = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), _e = Symbol.for("react.suspense_list"), Re = Symbol.for("react.memo"), De = Symbol.for("react.lazy"), Oe = Symbol.for("react.offscreen"), ne = Symbol.iterator;
  function ue(e) {
    return e === null || typeof e != "object" ? null : (e = ne && e[ne] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  __name(ue, "ue");
  var oe = Object.assign, b;
  function Z(e) {
    if (b === void 0) try {
      throw Error();
    } catch (a) {
      var r = a.stack.trim().match(/\n( *(at )?)/);
      b = r && r[1] || "";
    }
    return `
` + b + e;
  }
  __name(Z, "Z");
  var Ce = false;
  function ke(e, r) {
    if (!e || Ce) return "";
    Ce = true;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = /* @__PURE__ */ __name(function() {
        throw Error();
      }, "r"), Object.defineProperty(r.prototype, "props", { set: /* @__PURE__ */ __name(function() {
        throw Error();
      }, "set") }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (W) {
          var l = W;
        }
        Reflect.construct(e, [], r);
      } else {
        try {
          r.call();
        } catch (W) {
          l = W;
        }
        e.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (W) {
          l = W;
        }
        e();
      }
    } catch (W) {
      if (W && l && typeof W.stack == "string") {
        for (var d = W.stack.split(`
`), g = l.stack.split(`
`), E = d.length - 1, O = g.length - 1; 1 <= E && 0 <= O && d[E] !== g[O]; ) O--;
        for (; 1 <= E && 0 <= O; E--, O--) if (d[E] !== g[O]) {
          if (E !== 1 || O !== 1) do
            if (E--, O--, 0 > O || d[E] !== g[O]) {
              var D = `
` + d[E].replace(" at new ", " at ");
              return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), D;
            }
          while (1 <= E && 0 <= O);
          break;
        }
      }
    } finally {
      Ce = false, Error.prepareStackTrace = a;
    }
    return (e = e ? e.displayName || e.name : "") ? Z(e) : "";
  }
  __name(ke, "ke");
  function be(e) {
    switch (e.tag) {
      case 5:
        return Z(e.type);
      case 16:
        return Z("Lazy");
      case 13:
        return Z("Suspense");
      case 19:
        return Z("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ke(e.type, false), e;
      case 11:
        return e = ke(e.type.render, false), e;
      case 1:
        return e = ke(e.type, true), e;
      default:
        return "";
    }
  }
  __name(be, "be");
  function Ne(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case J:
        return "Fragment";
      case Q:
        return "Portal";
      case ve:
        return "Profiler";
      case ce:
        return "StrictMode";
      case fe:
        return "Suspense";
      case _e:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Ie:
        return (e.displayName || "Context") + ".Consumer";
      case $e:
        return (e._context.displayName || "Context") + ".Provider";
      case Ae:
        var r = e.render;
        return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Re:
        return r = e.displayName || null, r !== null ? r : Ne(e.type) || "Memo";
      case De:
        r = e._payload, e = e._init;
        try {
          return Ne(e(r));
        } catch {
        }
    }
    return null;
  }
  __name(Ne, "Ne");
  function He(e) {
    var r = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = r.render, e = e.displayName || e.name || "", r.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ne(r);
      case 8:
        return r === ce ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  __name(He, "He");
  function Fe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  __name(Fe, "Fe");
  function Ue(e) {
    var r = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  __name(Ue, "Ue");
  function Je(e) {
    var r = Ue(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, r), l = "" + e[r];
    if (!e.hasOwnProperty(r) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var d = a.get, g = a.set;
      return Object.defineProperty(e, r, { configurable: true, get: /* @__PURE__ */ __name(function() {
        return d.call(this);
      }, "get"), set: /* @__PURE__ */ __name(function(E) {
        l = "" + E, g.call(this, E);
      }, "set") }), Object.defineProperty(e, r, { enumerable: a.enumerable }), { getValue: /* @__PURE__ */ __name(function() {
        return l;
      }, "getValue"), setValue: /* @__PURE__ */ __name(function(E) {
        l = "" + E;
      }, "setValue"), stopTracking: /* @__PURE__ */ __name(function() {
        e._valueTracker = null, delete e[r];
      }, "stopTracking") };
    }
  }
  __name(Je, "Je");
  function ht(e) {
    e._valueTracker || (e._valueTracker = Je(e));
  }
  __name(ht, "ht");
  function $r(e) {
    if (!e) return false;
    var r = e._valueTracker;
    if (!r) return true;
    var a = r.getValue(), l = "";
    return e && (l = Ue(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (r.setValue(e), true) : false;
  }
  __name($r, "$r");
  function it(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  __name(it, "it");
  function Mt(e, r) {
    var a = r.checked;
    return oe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: a ?? e._wrapperState.initialChecked });
  }
  __name(Mt, "Mt");
  function Fo(e, r) {
    var a = r.defaultValue == null ? "" : r.defaultValue, l = r.checked != null ? r.checked : r.defaultChecked;
    a = Fe(r.value != null ? r.value : a), e._wrapperState = { initialChecked: l, initialValue: a, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  __name(Fo, "Fo");
  function Tn(e, r) {
    r = r.checked, r != null && Y(e, "checked", r, false);
  }
  __name(Tn, "Tn");
  function zo(e, r) {
    Tn(e, r);
    var a = Fe(r.value), l = r.type;
    if (a != null) l === "number" ? (a === 0 && e.value === "" || e.value != a) && (e.value = "" + a) : e.value !== "" + a && (e.value = "" + a);
    else if (l === "submit" || l === "reset") {
      e.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ir(e, r.type, a) : r.hasOwnProperty("defaultValue") && Ir(e, r.type, Fe(r.defaultValue)), r.checked == null && r.defaultChecked != null && (e.defaultChecked = !!r.defaultChecked);
  }
  __name(zo, "zo");
  function An(e, r, a) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var l = r.type;
      if (!(l !== "submit" && l !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + e._wrapperState.initialValue, a || r === e.value || (e.value = r), e.defaultValue = r;
    }
    a = e.name, a !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, a !== "" && (e.name = a);
  }
  __name(An, "An");
  function Ir(e, r, a) {
    (r !== "number" || it(e.ownerDocument) !== e) && (a == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + a && (e.defaultValue = "" + a));
  }
  __name(Ir, "Ir");
  var gr = Array.isArray;
  function Tr(e, r, a, l) {
    if (e = e.options, r) {
      r = {};
      for (var d = 0; d < a.length; d++) r["$" + a[d]] = true;
      for (a = 0; a < e.length; a++) d = r.hasOwnProperty("$" + e[a].value), e[a].selected !== d && (e[a].selected = d), d && l && (e[a].defaultSelected = true);
    } else {
      for (a = "" + Fe(a), r = null, d = 0; d < e.length; d++) {
        if (e[d].value === a) {
          e[d].selected = true, l && (e[d].defaultSelected = true);
          return;
        }
        r !== null || e[d].disabled || (r = e[d]);
      }
      r !== null && (r.selected = true);
    }
  }
  __name(Tr, "Tr");
  function Ft(e, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(o(91));
    return oe({}, r, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  __name(Ft, "Ft");
  function mt(e, r) {
    var a = r.value;
    if (a == null) {
      if (a = r.children, r = r.defaultValue, a != null) {
        if (r != null) throw Error(o(92));
        if (gr(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        r = a;
      }
      r == null && (r = ""), a = r;
    }
    e._wrapperState = { initialValue: Fe(a) };
  }
  __name(mt, "mt");
  function Ho(e, r) {
    var a = Fe(r.value), l = Fe(r.defaultValue);
    a != null && (a = "" + a, a !== e.value && (e.value = a), r.defaultValue == null && e.defaultValue !== a && (e.defaultValue = a)), l != null && (e.defaultValue = "" + l);
  }
  __name(Ho, "Ho");
  function Bo(e) {
    var r = e.textContent;
    r === e._wrapperState.initialValue && r !== "" && r !== null && (e.value = r);
  }
  __name(Bo, "Bo");
  function Vo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  __name(Vo, "Vo");
  function lo(e, r) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Vo(r) : e === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  __name(lo, "lo");
  var Ar, qo = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, a, l, d) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(r, a, l, d);
      });
    } : e;
  }(function(e, r) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = r;
    else {
      for (Ar = Ar || document.createElement("div"), Ar.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Ar.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; r.firstChild; ) e.appendChild(r.firstChild);
    }
  });
  function Xr(e, r) {
    if (r) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = r;
        return;
      }
    }
    e.textContent = r;
  }
  __name(Xr, "Xr");
  var On = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, Wo = ["Webkit", "ms", "Moz", "O"];
  Object.keys(On).forEach(function(e) {
    Wo.forEach(function(r) {
      r = r + e.charAt(0).toUpperCase() + e.substring(1), On[r] = On[e];
    });
  });
  function Ln(e, r, a) {
    return r == null || typeof r == "boolean" || r === "" ? "" : a || typeof r != "number" || r === 0 || On.hasOwnProperty(e) && On[e] ? ("" + r).trim() : r + "px";
  }
  __name(Ln, "Ln");
  function Ta(e, r) {
    e = e.style;
    for (var a in r) if (r.hasOwnProperty(a)) {
      var l = a.indexOf("--") === 0, d = Ln(a, r[a], l);
      a === "float" && (a = "cssFloat"), l ? e.setProperty(a, d) : e[a] = d;
    }
  }
  __name(Ta, "Ta");
  var Pi = oe({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function Qo(e, r) {
    if (r) {
      if (Pi[e] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(o(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(o(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(o(62));
    }
  }
  __name(Qo, "Qo");
  function Go(e, r) {
    if (e.indexOf("-") === -1) return typeof r.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  __name(Go, "Go");
  var Yo = null;
  function _t(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  __name(_t, "_t");
  var Dn = null, or = null, ze = null;
  function Zr(e) {
    if (e = Bi(e)) {
      if (typeof Dn != "function") throw Error(o(280));
      var r = e.stateNode;
      r && (r = Gs(r), Dn(e.stateNode, e.type, r));
    }
  }
  __name(Zr, "Zr");
  function Nn(e) {
    or ? ze ? ze.push(e) : ze = [e] : or = e;
  }
  __name(Nn, "Nn");
  function en() {
    if (or) {
      var e = or, r = ze;
      if (ze = or = null, Zr(e), r) for (e = 0; e < r.length; e++) Zr(r[e]);
    }
  }
  __name(en, "en");
  function ar(e, r) {
    return e(r);
  }
  __name(ar, "ar");
  function bn() {
  }
  __name(bn, "bn");
  var ir = false;
  function Jo(e, r, a) {
    if (ir) return e(r, a);
    ir = true;
    try {
      return ar(e, r, a);
    } finally {
      ir = false, (or !== null || ze !== null) && (bn(), en());
    }
  }
  __name(Jo, "Jo");
  function Or(e, r) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = Gs(a);
    if (l === null) return null;
    a = l[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = false;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(o(231, r, typeof a));
    return a;
  }
  __name(Or, "Or");
  var Un = false;
  if (f) try {
    var tn = {};
    Object.defineProperty(tn, "passive", { get: /* @__PURE__ */ __name(function() {
      Un = true;
    }, "get") }), window.addEventListener("test", tn, tn), window.removeEventListener("test", tn, tn);
  } catch {
    Un = false;
  }
  function Aa(e, r, a, l, d, g, E, O, D) {
    var W = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(a, W);
    } catch (te) {
      this.onError(te);
    }
  }
  __name(Aa, "Aa");
  var rn = false, uo = null, co = false, nn = null, Oa = { onError: /* @__PURE__ */ __name(function(e) {
    rn = true, uo = e;
  }, "onError") };
  function fo(e, r, a, l, d, g, E, O, D) {
    rn = false, uo = null, Aa.apply(Oa, arguments);
  }
  __name(fo, "fo");
  function Ko(e, r, a, l, d, g, E, O, D) {
    if (fo.apply(this, arguments), rn) {
      if (rn) {
        var W = uo;
        rn = false, uo = null;
      } else throw Error(o(198));
      co || (co = true, nn = W);
    }
  }
  __name(Ko, "Ko");
  function Lr(e) {
    var r = e, a = e;
    if (e.alternate) for (; r.return; ) r = r.return;
    else {
      e = r;
      do
        r = e, (r.flags & 4098) !== 0 && (a = r.return), e = r.return;
      while (e);
    }
    return r.tag === 3 ? a : null;
  }
  __name(Lr, "Lr");
  function on(e) {
    if (e.tag === 13) {
      var r = e.memoizedState;
      if (r === null && (e = e.alternate, e !== null && (r = e.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  __name(on, "on");
  function La(e) {
    if (Lr(e) !== e) throw Error(o(188));
  }
  __name(La, "La");
  function Xo(e) {
    var r = e.alternate;
    if (!r) {
      if (r = Lr(e), r === null) throw Error(o(188));
      return r !== e ? null : e;
    }
    for (var a = e, l = r; ; ) {
      var d = a.return;
      if (d === null) break;
      var g = d.alternate;
      if (g === null) {
        if (l = d.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (d.child === g.child) {
        for (g = d.child; g; ) {
          if (g === a) return La(d), e;
          if (g === l) return La(d), r;
          g = g.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== l.return) a = d, l = g;
      else {
        for (var E = false, O = d.child; O; ) {
          if (O === a) {
            E = true, a = d, l = g;
            break;
          }
          if (O === l) {
            E = true, l = d, a = g;
            break;
          }
          O = O.sibling;
        }
        if (!E) {
          for (O = g.child; O; ) {
            if (O === a) {
              E = true, a = g, l = d;
              break;
            }
            if (O === l) {
              E = true, l = g, a = d;
              break;
            }
            O = O.sibling;
          }
          if (!E) throw Error(o(189));
        }
      }
      if (a.alternate !== l) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? e : r;
  }
  __name(Xo, "Xo");
  function Mn(e) {
    return e = Xo(e), e !== null ? an(e) : null;
  }
  __name(Mn, "Mn");
  function an(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var r = an(e);
      if (r !== null) return r;
      e = e.sibling;
    }
    return null;
  }
  __name(an, "an");
  var Fn = n.unstable_scheduleCallback, Zo = n.unstable_cancelCallback, Da = n.unstable_shouldYield, Na = n.unstable_requestPaint, Ge = n.unstable_now, xt = n.unstable_getCurrentPriorityLevel, po = n.unstable_ImmediatePriority, ho = n.unstable_UserBlockingPriority, sn = n.unstable_NormalPriority, ba = n.unstable_LowPriority, Dr = n.unstable_IdlePriority, sr = null, Dt = null;
  function zn(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function") try {
      Dt.onCommitFiberRoot(sr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  __name(zn, "zn");
  var dt = Math.clz32 ? Math.clz32 : ra, ea = Math.log, ta = Math.LN2;
  function ra(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ea(e) / ta | 0) | 0;
  }
  __name(ra, "ra");
  var Nr = 64, Hn = 4194304;
  function ln(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  __name(ln, "ln");
  function un(e, r) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var l = 0, d = e.suspendedLanes, g = e.pingedLanes, E = a & 268435455;
    if (E !== 0) {
      var O = E & ~d;
      O !== 0 ? l = ln(O) : (g &= E, g !== 0 && (l = ln(g)));
    } else E = a & ~d, E !== 0 ? l = ln(E) : g !== 0 && (l = ln(g));
    if (l === 0) return 0;
    if (r !== 0 && r !== l && (r & d) === 0 && (d = l & -l, g = r & -r, d >= g || d === 16 && (g & 4194240) !== 0)) return r;
    if ((l & 4) !== 0 && (l |= a & 16), r = e.entangledLanes, r !== 0) for (e = e.entanglements, r &= l; 0 < r; ) a = 31 - dt(r), d = 1 << a, l |= e[a], r &= ~d;
    return l;
  }
  __name(un, "un");
  function p(e, r) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  __name(p, "p");
  function x(e, r) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, d = e.expirationTimes, g = e.pendingLanes; 0 < g; ) {
      var E = 31 - dt(g), O = 1 << E, D = d[E];
      D === -1 ? ((O & a) === 0 || (O & l) !== 0) && (d[E] = p(O, r)) : D <= r && (e.expiredLanes |= O), g &= ~O;
    }
  }
  __name(x, "x");
  function k(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  __name(k, "k");
  function A() {
    var e = Nr;
    return Nr <<= 1, (Nr & 4194240) === 0 && (Nr = 64), e;
  }
  __name(A, "A");
  function H(e) {
    for (var r = [], a = 0; 31 > a; a++) r.push(e);
    return r;
  }
  __name(H, "H");
  function M(e, r, a) {
    e.pendingLanes |= r, r !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, r = 31 - dt(r), e[r] = a;
  }
  __name(M, "M");
  function K(e, r) {
    var a = e.pendingLanes & ~r;
    e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= r, e.mutableReadLanes &= r, e.entangledLanes &= r, r = e.entanglements;
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < a; ) {
      var d = 31 - dt(a), g = 1 << d;
      r[d] = 0, l[d] = -1, e[d] = -1, a &= ~g;
    }
  }
  __name(K, "K");
  function se(e, r) {
    var a = e.entangledLanes |= r;
    for (e = e.entanglements; a; ) {
      var l = 31 - dt(a), d = 1 << l;
      d & r | e[l] & r && (e[l] |= r), a &= ~d;
    }
  }
  __name(se, "se");
  var le = 0;
  function Ee(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  __name(Ee, "Ee");
  var Te, We, zt, Ht, kt, br = false, Bt = [], Vt = null, Pt = null, lr = null, qt = /* @__PURE__ */ new Map(), cn = /* @__PURE__ */ new Map(), dn = [], Eu = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Os(e, r) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vt = null;
        break;
      case "dragenter":
      case "dragleave":
        Pt = null;
        break;
      case "mouseover":
      case "mouseout":
        lr = null;
        break;
      case "pointerover":
      case "pointerout":
        qt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        cn.delete(r.pointerId);
    }
  }
  __name(Os, "Os");
  function na(e, r, a, l, d, g) {
    return e === null || e.nativeEvent !== g ? (e = { blockedOn: r, domEventName: a, eventSystemFlags: l, nativeEvent: g, targetContainers: [d] }, r !== null && (r = Bi(r), r !== null && We(r)), e) : (e.eventSystemFlags |= l, r = e.targetContainers, d !== null && r.indexOf(d) === -1 && r.push(d), e);
  }
  __name(na, "na");
  function _u(e, r, a, l, d) {
    switch (r) {
      case "focusin":
        return Vt = na(Vt, e, r, a, l, d), true;
      case "dragenter":
        return Pt = na(Pt, e, r, a, l, d), true;
      case "mouseover":
        return lr = na(lr, e, r, a, l, d), true;
      case "pointerover":
        var g = d.pointerId;
        return qt.set(g, na(qt.get(g) || null, e, r, a, l, d)), true;
      case "gotpointercapture":
        return g = d.pointerId, cn.set(g, na(cn.get(g) || null, e, r, a, l, d)), true;
    }
    return false;
  }
  __name(_u, "_u");
  function yr(e) {
    var r = da(e.target);
    if (r !== null) {
      var a = Lr(r);
      if (a !== null) {
        if (r = a.tag, r === 13) {
          if (r = on(a), r !== null) {
            e.blockedOn = r, kt(e.priority, function() {
              zt(a);
            });
            return;
          }
        } else if (r === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  __name(yr, "yr");
  function mo(e) {
    if (e.blockedOn !== null) return false;
    for (var r = e.targetContainers; 0 < r.length; ) {
      var a = aa(e.domEventName, e.eventSystemFlags, r[0], e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(a.type, a);
        Yo = l, a.target.dispatchEvent(l), Yo = null;
      } else return r = Bi(a), r !== null && We(r), e.blockedOn = a, false;
      r.shift();
    }
    return true;
  }
  __name(mo, "mo");
  function oa(e, r, a) {
    mo(e) && a.delete(r);
  }
  __name(oa, "oa");
  function Qe() {
    br = false, Vt !== null && mo(Vt) && (Vt = null), Pt !== null && mo(Pt) && (Pt = null), lr !== null && mo(lr) && (lr = null), qt.forEach(oa), cn.forEach(oa);
  }
  __name(Qe, "Qe");
  function Ur(e, r) {
    e.blockedOn === r && (e.blockedOn = null, br || (br = true, n.unstable_scheduleCallback(n.unstable_NormalPriority, Qe)));
  }
  __name(Ur, "Ur");
  function fn(e) {
    function r(d) {
      return Ur(d, e);
    }
    __name(r, "r");
    if (0 < Bt.length) {
      Ur(Bt[0], e);
      for (var a = 1; a < Bt.length; a++) {
        var l = Bt[a];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (Vt !== null && Ur(Vt, e), Pt !== null && Ur(Pt, e), lr !== null && Ur(lr, e), qt.forEach(r), cn.forEach(r), a = 0; a < dn.length; a++) l = dn[a], l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < dn.length && (a = dn[0], a.blockedOn === null); ) yr(a), a.blockedOn === null && dn.shift();
  }
  __name(fn, "fn");
  var vr = G.ReactCurrentBatchConfig, ur = true;
  function Ua(e, r, a, l) {
    var d = le, g = vr.transition;
    vr.transition = null;
    try {
      le = 1, Ma(e, r, a, l);
    } finally {
      le = d, vr.transition = g;
    }
  }
  __name(Ua, "Ua");
  function Bn(e, r, a, l) {
    var d = le, g = vr.transition;
    vr.transition = null;
    try {
      le = 4, Ma(e, r, a, l);
    } finally {
      le = d, vr.transition = g;
    }
  }
  __name(Bn, "Bn");
  function Ma(e, r, a, l) {
    if (ur) {
      var d = aa(e, r, a, l);
      if (d === null) Du(e, r, l, go, a), Os(e, l);
      else if (_u(d, e, r, a, l)) l.stopPropagation();
      else if (Os(e, l), r & 4 && -1 < Eu.indexOf(e)) {
        for (; d !== null; ) {
          var g = Bi(d);
          if (g !== null && Te(g), g = aa(e, r, a, l), g === null && Du(e, r, l, go, a), g === d) break;
          d = g;
        }
        d !== null && l.stopPropagation();
      } else Du(e, r, l, null, a);
    }
  }
  __name(Ma, "Ma");
  var go = null;
  function aa(e, r, a, l) {
    if (go = null, e = _t(l), e = da(e), e !== null) if (r = Lr(e), r === null) e = null;
    else if (a = r.tag, a === 13) {
      if (e = on(r), e !== null) return e;
      e = null;
    } else if (a === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      e = null;
    } else r !== e && (e = null);
    return go = e, null;
  }
  __name(aa, "aa");
  function ji(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (xt()) {
          case po:
            return 1;
          case ho:
            return 4;
          case sn:
          case ba:
            return 16;
          case Dr:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  __name(ji, "ji");
  var Mr = null, Fa = null, za = null;
  function Ls() {
    if (za) return za;
    var e, r = Fa, a = r.length, l, d = "value" in Mr ? Mr.value : Mr.textContent, g = d.length;
    for (e = 0; e < a && r[e] === d[e]; e++) ;
    var E = a - e;
    for (l = 1; l <= E && r[a - l] === d[g - l]; l++) ;
    return za = d.slice(e, 1 < l ? 1 - l : void 0);
  }
  __name(Ls, "Ls");
  function Vn(e) {
    var r = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && r === 13 && (e = 13)) : e = r, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  __name(Vn, "Vn");
  function ia() {
    return true;
  }
  __name(ia, "ia");
  function sa() {
    return false;
  }
  __name(sa, "sa");
  function St(e) {
    function r(a, l, d, g, E) {
      this._reactName = a, this._targetInst = d, this.type = l, this.nativeEvent = g, this.target = E, this.currentTarget = null;
      for (var O in e) e.hasOwnProperty(O) && (a = e[O], this[O] = a ? a(g) : g[O]);
      return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === false) ? ia : sa, this.isPropagationStopped = sa, this;
    }
    __name(r, "r");
    return oe(r.prototype, { preventDefault: /* @__PURE__ */ __name(function() {
      this.defaultPrevented = true;
      var a = this.nativeEvent;
      a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = false), this.isDefaultPrevented = ia);
    }, "preventDefault"), stopPropagation: /* @__PURE__ */ __name(function() {
      var a = this.nativeEvent;
      a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = true), this.isPropagationStopped = ia);
    }, "stopPropagation"), persist: /* @__PURE__ */ __name(function() {
    }, "persist"), isPersistent: ia }), r;
  }
  __name(St, "St");
  var yo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: /* @__PURE__ */ __name(function(e) {
    return e.timeStamp || Date.now();
  }, "timeStamp"), defaultPrevented: 0, isTrusted: 0 }, qn = St(yo), la = oe({}, yo, { view: 0, detail: 0 }), Ri = St(la), vo, Wn, pn, ua = oe({}, la, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Wa, button: 0, buttons: 0, relatedTarget: /* @__PURE__ */ __name(function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, "relatedTarget"), movementX: /* @__PURE__ */ __name(function(e) {
    return "movementX" in e ? e.movementX : (e !== pn && (pn && e.type === "mousemove" ? (vo = e.screenX - pn.screenX, Wn = e.screenY - pn.screenY) : Wn = vo = 0, pn = e), vo);
  }, "movementX"), movementY: /* @__PURE__ */ __name(function(e) {
    return "movementY" in e ? e.movementY : Wn;
  }, "movementY") }), $i = St(ua), Ds = oe({}, ua, { dataTransfer: 0 }), Ii = St(Ds), Nt = oe({}, la, { relatedTarget: 0 }), Ha = St(Nt), Ti = oe({}, yo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ku = St(Ti), Ns = oe({}, yo, { clipboardData: /* @__PURE__ */ __name(function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  }, "clipboardData") }), Ba = St(Ns), bs = oe({}, yo, { data: 0 }), Ai = St(bs), Va = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, qa = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Us = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ms(e) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(e) : (e = Us[e]) ? !!r[e] : false;
  }
  __name(Ms, "Ms");
  function Wa() {
    return Ms;
  }
  __name(Wa, "Wa");
  var Oi = oe({}, la, { key: /* @__PURE__ */ __name(function(e) {
    if (e.key) {
      var r = Va[e.key] || e.key;
      if (r !== "Unidentified") return r;
    }
    return e.type === "keypress" ? (e = Vn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? qa[e.keyCode] || "Unidentified" : "";
  }, "key"), code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Wa, charCode: /* @__PURE__ */ __name(function(e) {
    return e.type === "keypress" ? Vn(e) : 0;
  }, "charCode"), keyCode: /* @__PURE__ */ __name(function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, "keyCode"), which: /* @__PURE__ */ __name(function(e) {
    return e.type === "keypress" ? Vn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, "which") }), Fs = St(Oi), m = oe({}, ua, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), w = St(m), _ = oe({}, la, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Wa }), T = St(_), V = oe({}, yo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), z = St(V), X = oe({}, ua, { deltaX: /* @__PURE__ */ __name(function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  }, "deltaX"), deltaY: /* @__PURE__ */ __name(function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  }, "deltaY"), deltaZ: 0, deltaMode: 0 }), ae = St(X), Se = [9, 13, 27, 32], Le = f && "CompositionEvent" in window, Pe = null;
  f && "documentMode" in document && (Pe = document.documentMode);
  var Ye = f && "TextEvent" in window && !Pe, jt = f && (!Le || Pe && 8 < Pe && 11 >= Pe), Wt = " ", Qt = false;
  function ca(e, r) {
    switch (e) {
      case "keyup":
        return Se.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  __name(ca, "ca");
  function Li(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  __name(Li, "Li");
  var hn = false;
  function Sy(e, r) {
    switch (e) {
      case "compositionend":
        return Li(r);
      case "keypress":
        return r.which !== 32 ? null : (Qt = true, Wt);
      case "textInput":
        return e = r.data, e === Wt && Qt ? null : e;
      default:
        return null;
    }
  }
  __name(Sy, "Sy");
  function Cy(e, r) {
    if (hn) return e === "compositionend" || !Le && ca(e, r) ? (e = Ls(), za = Fa = Mr = null, hn = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return jt && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  __name(Cy, "Cy");
  var Ey = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function rf(e) {
    var r = e && e.nodeName && e.nodeName.toLowerCase();
    return r === "input" ? !!Ey[e.type] : r === "textarea";
  }
  __name(rf, "rf");
  function nf(e, r, a, l) {
    Nn(l), r = qs(r, "onChange"), 0 < r.length && (a = new qn("onChange", "change", null, a, l), e.push({ event: a, listeners: r }));
  }
  __name(nf, "nf");
  var Di = null, Ni = null;
  function _y(e) {
    Cf(e, 0);
  }
  __name(_y, "_y");
  function zs(e) {
    var r = Ka(e);
    if ($r(r)) return e;
  }
  __name(zs, "zs");
  function ky(e, r) {
    if (e === "change") return r;
  }
  __name(ky, "ky");
  var of = false;
  if (f) {
    var Pu;
    if (f) {
      var ju = "oninput" in document;
      if (!ju) {
        var af = document.createElement("div");
        af.setAttribute("oninput", "return;"), ju = typeof af.oninput == "function";
      }
      Pu = ju;
    } else Pu = false;
    of = Pu && (!document.documentMode || 9 < document.documentMode);
  }
  function sf() {
    Di && (Di.detachEvent("onpropertychange", lf), Ni = Di = null);
  }
  __name(sf, "sf");
  function lf(e) {
    if (e.propertyName === "value" && zs(Ni)) {
      var r = [];
      nf(r, Ni, e, _t(e)), Jo(_y, r);
    }
  }
  __name(lf, "lf");
  function Py(e, r, a) {
    e === "focusin" ? (sf(), Di = r, Ni = a, Di.attachEvent("onpropertychange", lf)) : e === "focusout" && sf();
  }
  __name(Py, "Py");
  function jy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return zs(Ni);
  }
  __name(jy, "jy");
  function Ry(e, r) {
    if (e === "click") return zs(r);
  }
  __name(Ry, "Ry");
  function $y(e, r) {
    if (e === "input" || e === "change") return zs(r);
  }
  __name($y, "$y");
  function Iy(e, r) {
    return e === r && (e !== 0 || 1 / e === 1 / r) || e !== e && r !== r;
  }
  __name(Iy, "Iy");
  var Fr = typeof Object.is == "function" ? Object.is : Iy;
  function bi(e, r) {
    if (Fr(e, r)) return true;
    if (typeof e != "object" || e === null || typeof r != "object" || r === null) return false;
    var a = Object.keys(e), l = Object.keys(r);
    if (a.length !== l.length) return false;
    for (l = 0; l < a.length; l++) {
      var d = a[l];
      if (!h.call(r, d) || !Fr(e[d], r[d])) return false;
    }
    return true;
  }
  __name(bi, "bi");
  function uf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  __name(uf, "uf");
  function cf(e, r) {
    var a = uf(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = e + a.textContent.length, e <= r && l >= r) return { node: a, offset: r - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = uf(a);
    }
  }
  __name(cf, "cf");
  function df(e, r) {
    return e && r ? e === r ? true : e && e.nodeType === 3 ? false : r && r.nodeType === 3 ? df(e, r.parentNode) : "contains" in e ? e.contains(r) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(r) & 16) : false : false;
  }
  __name(df, "df");
  function ff() {
    for (var e = window, r = it(); r instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof r.contentWindow.location.href == "string";
      } catch {
        a = false;
      }
      if (a) e = r.contentWindow;
      else break;
      r = it(e.document);
    }
    return r;
  }
  __name(ff, "ff");
  function Ru(e) {
    var r = e && e.nodeName && e.nodeName.toLowerCase();
    return r && (r === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || r === "textarea" || e.contentEditable === "true");
  }
  __name(Ru, "Ru");
  function Ty(e) {
    var r = ff(), a = e.focusedElem, l = e.selectionRange;
    if (r !== a && a && a.ownerDocument && df(a.ownerDocument.documentElement, a)) {
      if (l !== null && Ru(a)) {
        if (r = l.start, e = l.end, e === void 0 && (e = r), "selectionStart" in a) a.selectionStart = r, a.selectionEnd = Math.min(e, a.value.length);
        else if (e = (r = a.ownerDocument || document) && r.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var d = a.textContent.length, g = Math.min(l.start, d);
          l = l.end === void 0 ? g : Math.min(l.end, d), !e.extend && g > l && (d = l, l = g, g = d), d = cf(a, g);
          var E = cf(a, l);
          d && E && (e.rangeCount !== 1 || e.anchorNode !== d.node || e.anchorOffset !== d.offset || e.focusNode !== E.node || e.focusOffset !== E.offset) && (r = r.createRange(), r.setStart(d.node, d.offset), e.removeAllRanges(), g > l ? (e.addRange(r), e.extend(E.node, E.offset)) : (r.setEnd(E.node, E.offset), e.addRange(r)));
        }
      }
      for (r = [], e = a; e = e.parentNode; ) e.nodeType === 1 && r.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof a.focus == "function" && a.focus(), a = 0; a < r.length; a++) e = r[a], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  __name(Ty, "Ty");
  var Ay = f && "documentMode" in document && 11 >= document.documentMode, Qa = null, $u = null, Ui = null, Iu = false;
  function pf(e, r, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Iu || Qa == null || Qa !== it(l) || (l = Qa, "selectionStart" in l && Ru(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), Ui && bi(Ui, l) || (Ui = l, l = qs($u, "onSelect"), 0 < l.length && (r = new qn("onSelect", "select", null, r, a), e.push({ event: r, listeners: l }), r.target = Qa)));
  }
  __name(pf, "pf");
  function Hs(e, r) {
    var a = {};
    return a[e.toLowerCase()] = r.toLowerCase(), a["Webkit" + e] = "webkit" + r, a["Moz" + e] = "moz" + r, a;
  }
  __name(Hs, "Hs");
  var Ga = { animationend: Hs("Animation", "AnimationEnd"), animationiteration: Hs("Animation", "AnimationIteration"), animationstart: Hs("Animation", "AnimationStart"), transitionend: Hs("Transition", "TransitionEnd") }, Tu = {}, hf = {};
  f && (hf = document.createElement("div").style, "AnimationEvent" in window || (delete Ga.animationend.animation, delete Ga.animationiteration.animation, delete Ga.animationstart.animation), "TransitionEvent" in window || delete Ga.transitionend.transition);
  function Bs(e) {
    if (Tu[e]) return Tu[e];
    if (!Ga[e]) return e;
    var r = Ga[e], a;
    for (a in r) if (r.hasOwnProperty(a) && a in hf) return Tu[e] = r[a];
    return e;
  }
  __name(Bs, "Bs");
  var mf = Bs("animationend"), gf = Bs("animationiteration"), yf = Bs("animationstart"), vf = Bs("transitionend"), wf = /* @__PURE__ */ new Map(), xf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function wo(e, r) {
    wf.set(e, r), u(r, [e]);
  }
  __name(wo, "wo");
  for (var Au = 0; Au < xf.length; Au++) {
    var Ou = xf[Au], Oy = Ou.toLowerCase(), Ly = Ou[0].toUpperCase() + Ou.slice(1);
    wo(Oy, "on" + Ly);
  }
  wo(mf, "onAnimationEnd"), wo(gf, "onAnimationIteration"), wo(yf, "onAnimationStart"), wo("dblclick", "onDoubleClick"), wo("focusin", "onFocus"), wo("focusout", "onBlur"), wo(vf, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Mi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Dy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mi));
  function Sf(e, r, a) {
    var l = e.type || "unknown-event";
    e.currentTarget = a, Ko(l, r, void 0, e), e.currentTarget = null;
  }
  __name(Sf, "Sf");
  function Cf(e, r) {
    r = (r & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], d = l.event;
      l = l.listeners;
      e: {
        var g = void 0;
        if (r) for (var E = l.length - 1; 0 <= E; E--) {
          var O = l[E], D = O.instance, W = O.currentTarget;
          if (O = O.listener, D !== g && d.isPropagationStopped()) break e;
          Sf(d, O, W), g = D;
        }
        else for (E = 0; E < l.length; E++) {
          if (O = l[E], D = O.instance, W = O.currentTarget, O = O.listener, D !== g && d.isPropagationStopped()) break e;
          Sf(d, O, W), g = D;
        }
      }
    }
    if (co) throw e = nn, co = false, nn = null, e;
  }
  __name(Cf, "Cf");
  function Ze(e, r) {
    var a = r[zu];
    a === void 0 && (a = r[zu] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (Ef(r, e, 2, false), a.add(l));
  }
  __name(Ze, "Ze");
  function Lu(e, r, a) {
    var l = 0;
    r && (l |= 4), Ef(a, e, l, r);
  }
  __name(Lu, "Lu");
  var Vs = "_reactListening" + Math.random().toString(36).slice(2);
  function Fi(e) {
    if (!e[Vs]) {
      e[Vs] = true, i.forEach(function(a) {
        a !== "selectionchange" && (Dy.has(a) || Lu(a, false, e), Lu(a, true, e));
      });
      var r = e.nodeType === 9 ? e : e.ownerDocument;
      r === null || r[Vs] || (r[Vs] = true, Lu("selectionchange", false, r));
    }
  }
  __name(Fi, "Fi");
  function Ef(e, r, a, l) {
    switch (ji(r)) {
      case 1:
        var d = Ua;
        break;
      case 4:
        d = Bn;
        break;
      default:
        d = Ma;
    }
    a = d.bind(null, r, a, e), d = void 0, !Un || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (d = true), l ? d !== void 0 ? e.addEventListener(r, a, { capture: true, passive: d }) : e.addEventListener(r, a, true) : d !== void 0 ? e.addEventListener(r, a, { passive: d }) : e.addEventListener(r, a, false);
  }
  __name(Ef, "Ef");
  function Du(e, r, a, l, d) {
    var g = l;
    if ((r & 1) === 0 && (r & 2) === 0 && l !== null) e: for (; ; ) {
      if (l === null) return;
      var E = l.tag;
      if (E === 3 || E === 4) {
        var O = l.stateNode.containerInfo;
        if (O === d || O.nodeType === 8 && O.parentNode === d) break;
        if (E === 4) for (E = l.return; E !== null; ) {
          var D = E.tag;
          if ((D === 3 || D === 4) && (D = E.stateNode.containerInfo, D === d || D.nodeType === 8 && D.parentNode === d)) return;
          E = E.return;
        }
        for (; O !== null; ) {
          if (E = da(O), E === null) return;
          if (D = E.tag, D === 5 || D === 6) {
            l = g = E;
            continue e;
          }
          O = O.parentNode;
        }
      }
      l = l.return;
    }
    Jo(function() {
      var W = g, te = _t(a), re = [];
      e: {
        var ee = wf.get(e);
        if (ee !== void 0) {
          var de = qn, he = e;
          switch (e) {
            case "keypress":
              if (Vn(a) === 0) break e;
            case "keydown":
            case "keyup":
              de = Fs;
              break;
            case "focusin":
              he = "focus", de = Ha;
              break;
            case "focusout":
              he = "blur", de = Ha;
              break;
            case "beforeblur":
            case "afterblur":
              de = Ha;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              de = $i;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              de = Ii;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              de = T;
              break;
            case mf:
            case gf:
            case yf:
              de = ku;
              break;
            case vf:
              de = z;
              break;
            case "scroll":
              de = Ri;
              break;
            case "wheel":
              de = ae;
              break;
            case "copy":
            case "cut":
            case "paste":
              de = Ba;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              de = w;
          }
          var me = (r & 4) !== 0, lt = !me && e === "scroll", F = me ? ee !== null ? ee + "Capture" : null : ee;
          me = [];
          for (var N = W, B; N !== null; ) {
            B = N;
            var ie = B.stateNode;
            if (B.tag === 5 && ie !== null && (B = ie, F !== null && (ie = Or(N, F), ie != null && me.push(zi(N, ie, B)))), lt) break;
            N = N.return;
          }
          0 < me.length && (ee = new de(ee, he, null, a, te), re.push({ event: ee, listeners: me }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (ee = e === "mouseover" || e === "pointerover", de = e === "mouseout" || e === "pointerout", ee && a !== Yo && (he = a.relatedTarget || a.fromElement) && (da(he) || he[Qn])) break e;
          if ((de || ee) && (ee = te.window === te ? te : (ee = te.ownerDocument) ? ee.defaultView || ee.parentWindow : window, de ? (he = a.relatedTarget || a.toElement, de = W, he = he ? da(he) : null, he !== null && (lt = Lr(he), he !== lt || he.tag !== 5 && he.tag !== 6) && (he = null)) : (de = null, he = W), de !== he)) {
            if (me = $i, ie = "onMouseLeave", F = "onMouseEnter", N = "mouse", (e === "pointerout" || e === "pointerover") && (me = w, ie = "onPointerLeave", F = "onPointerEnter", N = "pointer"), lt = de == null ? ee : Ka(de), B = he == null ? ee : Ka(he), ee = new me(ie, N + "leave", de, a, te), ee.target = lt, ee.relatedTarget = B, ie = null, da(te) === W && (me = new me(F, N + "enter", he, a, te), me.target = B, me.relatedTarget = lt, ie = me), lt = ie, de && he) t: {
              for (me = de, F = he, N = 0, B = me; B; B = Ya(B)) N++;
              for (B = 0, ie = F; ie; ie = Ya(ie)) B++;
              for (; 0 < N - B; ) me = Ya(me), N--;
              for (; 0 < B - N; ) F = Ya(F), B--;
              for (; N--; ) {
                if (me === F || F !== null && me === F.alternate) break t;
                me = Ya(me), F = Ya(F);
              }
              me = null;
            }
            else me = null;
            de !== null && _f(re, ee, de, me, false), he !== null && lt !== null && _f(re, lt, he, me, true);
          }
        }
        e: {
          if (ee = W ? Ka(W) : window, de = ee.nodeName && ee.nodeName.toLowerCase(), de === "select" || de === "input" && ee.type === "file") var ge = ky;
          else if (rf(ee)) if (of) ge = $y;
          else {
            ge = jy;
            var we = Py;
          }
          else (de = ee.nodeName) && de.toLowerCase() === "input" && (ee.type === "checkbox" || ee.type === "radio") && (ge = Ry);
          if (ge && (ge = ge(e, W))) {
            nf(re, ge, a, te);
            break e;
          }
          we && we(e, ee, W), e === "focusout" && (we = ee._wrapperState) && we.controlled && ee.type === "number" && Ir(ee, "number", ee.value);
        }
        switch (we = W ? Ka(W) : window, e) {
          case "focusin":
            (rf(we) || we.contentEditable === "true") && (Qa = we, $u = W, Ui = null);
            break;
          case "focusout":
            Ui = $u = Qa = null;
            break;
          case "mousedown":
            Iu = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Iu = false, pf(re, a, te);
            break;
          case "selectionchange":
            if (Ay) break;
          case "keydown":
          case "keyup":
            pf(re, a, te);
        }
        var xe;
        if (Le) e: {
          switch (e) {
            case "compositionstart":
              var je = "onCompositionStart";
              break e;
            case "compositionend":
              je = "onCompositionEnd";
              break e;
            case "compositionupdate":
              je = "onCompositionUpdate";
              break e;
          }
          je = void 0;
        }
        else hn ? ca(e, a) && (je = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (je = "onCompositionStart");
        je && (jt && a.locale !== "ko" && (hn || je !== "onCompositionStart" ? je === "onCompositionEnd" && hn && (xe = Ls()) : (Mr = te, Fa = "value" in Mr ? Mr.value : Mr.textContent, hn = true)), we = qs(W, je), 0 < we.length && (je = new Ai(je, e, null, a, te), re.push({ event: je, listeners: we }), xe ? je.data = xe : (xe = Li(a), xe !== null && (je.data = xe)))), (xe = Ye ? Sy(e, a) : Cy(e, a)) && (W = qs(W, "onBeforeInput"), 0 < W.length && (te = new Ai("onBeforeInput", "beforeinput", null, a, te), re.push({ event: te, listeners: W }), te.data = xe));
      }
      Cf(re, r);
    });
  }
  __name(Du, "Du");
  function zi(e, r, a) {
    return { instance: e, listener: r, currentTarget: a };
  }
  __name(zi, "zi");
  function qs(e, r) {
    for (var a = r + "Capture", l = []; e !== null; ) {
      var d = e, g = d.stateNode;
      d.tag === 5 && g !== null && (d = g, g = Or(e, a), g != null && l.unshift(zi(e, g, d)), g = Or(e, r), g != null && l.push(zi(e, g, d))), e = e.return;
    }
    return l;
  }
  __name(qs, "qs");
  function Ya(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  __name(Ya, "Ya");
  function _f(e, r, a, l, d) {
    for (var g = r._reactName, E = []; a !== null && a !== l; ) {
      var O = a, D = O.alternate, W = O.stateNode;
      if (D !== null && D === l) break;
      O.tag === 5 && W !== null && (O = W, d ? (D = Or(a, g), D != null && E.unshift(zi(a, D, O))) : d || (D = Or(a, g), D != null && E.push(zi(a, D, O)))), a = a.return;
    }
    E.length !== 0 && e.push({ event: r, listeners: E });
  }
  __name(_f, "_f");
  var Ny = /\r\n?/g, by = /\u0000|\uFFFD/g;
  function kf(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ny, `
`).replace(by, "");
  }
  __name(kf, "kf");
  function Ws(e, r, a) {
    if (r = kf(r), kf(e) !== r && a) throw Error(o(425));
  }
  __name(Ws, "Ws");
  function Qs() {
  }
  __name(Qs, "Qs");
  var Nu = null, bu = null;
  function Uu(e, r) {
    return e === "textarea" || e === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  __name(Uu, "Uu");
  var Mu = typeof setTimeout == "function" ? setTimeout : void 0, Uy = typeof clearTimeout == "function" ? clearTimeout : void 0, Pf = typeof Promise == "function" ? Promise : void 0, My = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pf < "u" ? function(e) {
    return Pf.resolve(null).then(e).catch(Fy);
  } : Mu;
  function Fy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  __name(Fy, "Fy");
  function Fu(e, r) {
    var a = r, l = 0;
    do {
      var d = a.nextSibling;
      if (e.removeChild(a), d && d.nodeType === 8) if (a = d.data, a === "/$") {
        if (l === 0) {
          e.removeChild(d), fn(r);
          return;
        }
        l--;
      } else a !== "$" && a !== "$?" && a !== "$!" || l++;
      a = d;
    } while (a);
    fn(r);
  }
  __name(Fu, "Fu");
  function xo(e) {
    for (; e != null; e = e.nextSibling) {
      var r = e.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = e.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return e;
  }
  __name(xo, "xo");
  function jf(e) {
    e = e.previousSibling;
    for (var r = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (r === 0) return e;
          r--;
        } else a === "/$" && r++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  __name(jf, "jf");
  var Ja = Math.random().toString(36).slice(2), mn = "__reactFiber$" + Ja, Hi = "__reactProps$" + Ja, Qn = "__reactContainer$" + Ja, zu = "__reactEvents$" + Ja, zy = "__reactListeners$" + Ja, Hy = "__reactHandles$" + Ja;
  function da(e) {
    var r = e[mn];
    if (r) return r;
    for (var a = e.parentNode; a; ) {
      if (r = a[Qn] || a[mn]) {
        if (a = r.alternate, r.child !== null || a !== null && a.child !== null) for (e = jf(e); e !== null; ) {
          if (a = e[mn]) return a;
          e = jf(e);
        }
        return r;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  __name(da, "da");
  function Bi(e) {
    return e = e[mn] || e[Qn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  __name(Bi, "Bi");
  function Ka(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  __name(Ka, "Ka");
  function Gs(e) {
    return e[Hi] || null;
  }
  __name(Gs, "Gs");
  var Hu = [], Xa = -1;
  function So(e) {
    return { current: e };
  }
  __name(So, "So");
  function et(e) {
    0 > Xa || (e.current = Hu[Xa], Hu[Xa] = null, Xa--);
  }
  __name(et, "et");
  function Ke(e, r) {
    Xa++, Hu[Xa] = e.current, e.current = r;
  }
  __name(Ke, "Ke");
  var Co = {}, Rt = So(Co), Gt = So(false), fa = Co;
  function Za(e, r) {
    var a = e.type.contextTypes;
    if (!a) return Co;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === r) return l.__reactInternalMemoizedMaskedChildContext;
    var d = {}, g;
    for (g in a) d[g] = r[g];
    return l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = r, e.__reactInternalMemoizedMaskedChildContext = d), d;
  }
  __name(Za, "Za");
  function Yt(e) {
    return e = e.childContextTypes, e != null;
  }
  __name(Yt, "Yt");
  function Ys() {
    et(Gt), et(Rt);
  }
  __name(Ys, "Ys");
  function Rf(e, r, a) {
    if (Rt.current !== Co) throw Error(o(168));
    Ke(Rt, r), Ke(Gt, a);
  }
  __name(Rf, "Rf");
  function $f(e, r, a) {
    var l = e.stateNode;
    if (r = r.childContextTypes, typeof l.getChildContext != "function") return a;
    l = l.getChildContext();
    for (var d in l) if (!(d in r)) throw Error(o(108, He(e) || "Unknown", d));
    return oe({}, a, l);
  }
  __name($f, "$f");
  function Js(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Co, fa = Rt.current, Ke(Rt, e), Ke(Gt, Gt.current), true;
  }
  __name(Js, "Js");
  function If(e, r, a) {
    var l = e.stateNode;
    if (!l) throw Error(o(169));
    a ? (e = $f(e, r, fa), l.__reactInternalMemoizedMergedChildContext = e, et(Gt), et(Rt), Ke(Rt, e)) : et(Gt), Ke(Gt, a);
  }
  __name(If, "If");
  var Gn = null, Ks = false, Bu = false;
  function Tf(e) {
    Gn === null ? Gn = [e] : Gn.push(e);
  }
  __name(Tf, "Tf");
  function By(e) {
    Ks = true, Tf(e);
  }
  __name(By, "By");
  function Eo() {
    if (!Bu && Gn !== null) {
      Bu = true;
      var e = 0, r = le;
      try {
        var a = Gn;
        for (le = 1; e < a.length; e++) {
          var l = a[e];
          do
            l = l(true);
          while (l !== null);
        }
        Gn = null, Ks = false;
      } catch (d) {
        throw Gn !== null && (Gn = Gn.slice(e + 1)), Fn(po, Eo), d;
      } finally {
        le = r, Bu = false;
      }
    }
    return null;
  }
  __name(Eo, "Eo");
  var ei = [], ti = 0, Xs = null, Zs = 0, wr = [], xr = 0, pa = null, Yn = 1, Jn = "";
  function ha(e, r) {
    ei[ti++] = Zs, ei[ti++] = Xs, Xs = e, Zs = r;
  }
  __name(ha, "ha");
  function Af(e, r, a) {
    wr[xr++] = Yn, wr[xr++] = Jn, wr[xr++] = pa, pa = e;
    var l = Yn;
    e = Jn;
    var d = 32 - dt(l) - 1;
    l &= ~(1 << d), a += 1;
    var g = 32 - dt(r) + d;
    if (30 < g) {
      var E = d - d % 5;
      g = (l & (1 << E) - 1).toString(32), l >>= E, d -= E, Yn = 1 << 32 - dt(r) + d | a << d | l, Jn = g + e;
    } else Yn = 1 << g | a << d | l, Jn = e;
  }
  __name(Af, "Af");
  function Vu(e) {
    e.return !== null && (ha(e, 1), Af(e, 1, 0));
  }
  __name(Vu, "Vu");
  function qu(e) {
    for (; e === Xs; ) Xs = ei[--ti], ei[ti] = null, Zs = ei[--ti], ei[ti] = null;
    for (; e === pa; ) pa = wr[--xr], wr[xr] = null, Jn = wr[--xr], wr[xr] = null, Yn = wr[--xr], wr[xr] = null;
  }
  __name(qu, "qu");
  var cr = null, dr = null, tt = false, zr = null;
  function Of(e, r) {
    var a = _r(5, null, null, 0);
    a.elementType = "DELETED", a.stateNode = r, a.return = e, r = e.deletions, r === null ? (e.deletions = [a], e.flags |= 16) : r.push(a);
  }
  __name(Of, "Of");
  function Lf(e, r) {
    switch (e.tag) {
      case 5:
        var a = e.type;
        return r = r.nodeType !== 1 || a.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (e.stateNode = r, cr = e, dr = xo(r.firstChild), true) : false;
      case 6:
        return r = e.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (e.stateNode = r, cr = e, dr = null, true) : false;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (a = pa !== null ? { id: Yn, overflow: Jn } : null, e.memoizedState = { dehydrated: r, treeContext: a, retryLane: 1073741824 }, a = _r(18, null, null, 0), a.stateNode = r, a.return = e, e.child = a, cr = e, dr = null, true) : false;
      default:
        return false;
    }
  }
  __name(Lf, "Lf");
  function Wu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  __name(Wu, "Wu");
  function Qu(e) {
    if (tt) {
      var r = dr;
      if (r) {
        var a = r;
        if (!Lf(e, r)) {
          if (Wu(e)) throw Error(o(418));
          r = xo(a.nextSibling);
          var l = cr;
          r && Lf(e, r) ? Of(l, a) : (e.flags = e.flags & -4097 | 2, tt = false, cr = e);
        }
      } else {
        if (Wu(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, tt = false, cr = e;
      }
    }
  }
  __name(Qu, "Qu");
  function Df(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    cr = e;
  }
  __name(Df, "Df");
  function el(e) {
    if (e !== cr) return false;
    if (!tt) return Df(e), tt = true, false;
    var r;
    if ((r = e.tag !== 3) && !(r = e.tag !== 5) && (r = e.type, r = r !== "head" && r !== "body" && !Uu(e.type, e.memoizedProps)), r && (r = dr)) {
      if (Wu(e)) throw Nf(), Error(o(418));
      for (; r; ) Of(e, r), r = xo(r.nextSibling);
    }
    if (Df(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, r = 0; e; ) {
          if (e.nodeType === 8) {
            var a = e.data;
            if (a === "/$") {
              if (r === 0) {
                dr = xo(e.nextSibling);
                break e;
              }
              r--;
            } else a !== "$" && a !== "$!" && a !== "$?" || r++;
          }
          e = e.nextSibling;
        }
        dr = null;
      }
    } else dr = cr ? xo(e.stateNode.nextSibling) : null;
    return true;
  }
  __name(el, "el");
  function Nf() {
    for (var e = dr; e; ) e = xo(e.nextSibling);
  }
  __name(Nf, "Nf");
  function ri() {
    dr = cr = null, tt = false;
  }
  __name(ri, "ri");
  function Gu(e) {
    zr === null ? zr = [e] : zr.push(e);
  }
  __name(Gu, "Gu");
  var Vy = G.ReactCurrentBatchConfig;
  function Vi(e, r, a) {
    if (e = a.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (a._owner) {
        if (a = a._owner, a) {
          if (a.tag !== 1) throw Error(o(309));
          var l = a.stateNode;
        }
        if (!l) throw Error(o(147, e));
        var d = l, g = "" + e;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === g ? r.ref : (r = /* @__PURE__ */ __name(function(E) {
          var O = d.refs;
          E === null ? delete O[g] : O[g] = E;
        }, "r"), r._stringRef = g, r);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!a._owner) throw Error(o(290, e));
    }
    return e;
  }
  __name(Vi, "Vi");
  function tl(e, r) {
    throw e = Object.prototype.toString.call(r), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : e));
  }
  __name(tl, "tl");
  function bf(e) {
    var r = e._init;
    return r(e._payload);
  }
  __name(bf, "bf");
  function Uf(e) {
    function r(F, N) {
      if (e) {
        var B = F.deletions;
        B === null ? (F.deletions = [N], F.flags |= 16) : B.push(N);
      }
    }
    __name(r, "r");
    function a(F, N) {
      if (!e) return null;
      for (; N !== null; ) r(F, N), N = N.sibling;
      return null;
    }
    __name(a, "a");
    function l(F, N) {
      for (F = /* @__PURE__ */ new Map(); N !== null; ) N.key !== null ? F.set(N.key, N) : F.set(N.index, N), N = N.sibling;
      return F;
    }
    __name(l, "l");
    function d(F, N) {
      return F = To(F, N), F.index = 0, F.sibling = null, F;
    }
    __name(d, "d");
    function g(F, N, B) {
      return F.index = B, e ? (B = F.alternate, B !== null ? (B = B.index, B < N ? (F.flags |= 2, N) : B) : (F.flags |= 2, N)) : (F.flags |= 1048576, N);
    }
    __name(g, "g");
    function E(F) {
      return e && F.alternate === null && (F.flags |= 2), F;
    }
    __name(E, "E");
    function O(F, N, B, ie) {
      return N === null || N.tag !== 6 ? (N = Mc(B, F.mode, ie), N.return = F, N) : (N = d(N, B), N.return = F, N);
    }
    __name(O, "O");
    function D(F, N, B, ie) {
      var ge = B.type;
      return ge === J ? te(F, N, B.props.children, ie, B.key) : N !== null && (N.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === De && bf(ge) === N.type) ? (ie = d(N, B.props), ie.ref = Vi(F, N, B), ie.return = F, ie) : (ie = kl(B.type, B.key, B.props, null, F.mode, ie), ie.ref = Vi(F, N, B), ie.return = F, ie);
    }
    __name(D, "D");
    function W(F, N, B, ie) {
      return N === null || N.tag !== 4 || N.stateNode.containerInfo !== B.containerInfo || N.stateNode.implementation !== B.implementation ? (N = Fc(B, F.mode, ie), N.return = F, N) : (N = d(N, B.children || []), N.return = F, N);
    }
    __name(W, "W");
    function te(F, N, B, ie, ge) {
      return N === null || N.tag !== 7 ? (N = Ca(B, F.mode, ie, ge), N.return = F, N) : (N = d(N, B), N.return = F, N);
    }
    __name(te, "te");
    function re(F, N, B) {
      if (typeof N == "string" && N !== "" || typeof N == "number") return N = Mc("" + N, F.mode, B), N.return = F, N;
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case ye:
            return B = kl(N.type, N.key, N.props, null, F.mode, B), B.ref = Vi(F, null, N), B.return = F, B;
          case Q:
            return N = Fc(N, F.mode, B), N.return = F, N;
          case De:
            var ie = N._init;
            return re(F, ie(N._payload), B);
        }
        if (gr(N) || ue(N)) return N = Ca(N, F.mode, B, null), N.return = F, N;
        tl(F, N);
      }
      return null;
    }
    __name(re, "re");
    function ee(F, N, B, ie) {
      var ge = N !== null ? N.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number") return ge !== null ? null : O(F, N, "" + B, ie);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case ye:
            return B.key === ge ? D(F, N, B, ie) : null;
          case Q:
            return B.key === ge ? W(F, N, B, ie) : null;
          case De:
            return ge = B._init, ee(F, N, ge(B._payload), ie);
        }
        if (gr(B) || ue(B)) return ge !== null ? null : te(F, N, B, ie, null);
        tl(F, B);
      }
      return null;
    }
    __name(ee, "ee");
    function de(F, N, B, ie, ge) {
      if (typeof ie == "string" && ie !== "" || typeof ie == "number") return F = F.get(B) || null, O(N, F, "" + ie, ge);
      if (typeof ie == "object" && ie !== null) {
        switch (ie.$$typeof) {
          case ye:
            return F = F.get(ie.key === null ? B : ie.key) || null, D(N, F, ie, ge);
          case Q:
            return F = F.get(ie.key === null ? B : ie.key) || null, W(N, F, ie, ge);
          case De:
            var we = ie._init;
            return de(F, N, B, we(ie._payload), ge);
        }
        if (gr(ie) || ue(ie)) return F = F.get(B) || null, te(N, F, ie, ge, null);
        tl(N, ie);
      }
      return null;
    }
    __name(de, "de");
    function he(F, N, B, ie) {
      for (var ge = null, we = null, xe = N, je = N = 0, vt = null; xe !== null && je < B.length; je++) {
        xe.index > je ? (vt = xe, xe = null) : vt = xe.sibling;
        var Ve = ee(F, xe, B[je], ie);
        if (Ve === null) {
          xe === null && (xe = vt);
          break;
        }
        e && xe && Ve.alternate === null && r(F, xe), N = g(Ve, N, je), we === null ? ge = Ve : we.sibling = Ve, we = Ve, xe = vt;
      }
      if (je === B.length) return a(F, xe), tt && ha(F, je), ge;
      if (xe === null) {
        for (; je < B.length; je++) xe = re(F, B[je], ie), xe !== null && (N = g(xe, N, je), we === null ? ge = xe : we.sibling = xe, we = xe);
        return tt && ha(F, je), ge;
      }
      for (xe = l(F, xe); je < B.length; je++) vt = de(xe, F, je, B[je], ie), vt !== null && (e && vt.alternate !== null && xe.delete(vt.key === null ? je : vt.key), N = g(vt, N, je), we === null ? ge = vt : we.sibling = vt, we = vt);
      return e && xe.forEach(function(Ao) {
        return r(F, Ao);
      }), tt && ha(F, je), ge;
    }
    __name(he, "he");
    function me(F, N, B, ie) {
      var ge = ue(B);
      if (typeof ge != "function") throw Error(o(150));
      if (B = ge.call(B), B == null) throw Error(o(151));
      for (var we = ge = null, xe = N, je = N = 0, vt = null, Ve = B.next(); xe !== null && !Ve.done; je++, Ve = B.next()) {
        xe.index > je ? (vt = xe, xe = null) : vt = xe.sibling;
        var Ao = ee(F, xe, Ve.value, ie);
        if (Ao === null) {
          xe === null && (xe = vt);
          break;
        }
        e && xe && Ao.alternate === null && r(F, xe), N = g(Ao, N, je), we === null ? ge = Ao : we.sibling = Ao, we = Ao, xe = vt;
      }
      if (Ve.done) return a(F, xe), tt && ha(F, je), ge;
      if (xe === null) {
        for (; !Ve.done; je++, Ve = B.next()) Ve = re(F, Ve.value, ie), Ve !== null && (N = g(Ve, N, je), we === null ? ge = Ve : we.sibling = Ve, we = Ve);
        return tt && ha(F, je), ge;
      }
      for (xe = l(F, xe); !Ve.done; je++, Ve = B.next()) Ve = de(xe, F, je, Ve.value, ie), Ve !== null && (e && Ve.alternate !== null && xe.delete(Ve.key === null ? je : Ve.key), N = g(Ve, N, je), we === null ? ge = Ve : we.sibling = Ve, we = Ve);
      return e && xe.forEach(function(Ev) {
        return r(F, Ev);
      }), tt && ha(F, je), ge;
    }
    __name(me, "me");
    function lt(F, N, B, ie) {
      if (typeof B == "object" && B !== null && B.type === J && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case ye:
            e: {
              for (var ge = B.key, we = N; we !== null; ) {
                if (we.key === ge) {
                  if (ge = B.type, ge === J) {
                    if (we.tag === 7) {
                      a(F, we.sibling), N = d(we, B.props.children), N.return = F, F = N;
                      break e;
                    }
                  } else if (we.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === De && bf(ge) === we.type) {
                    a(F, we.sibling), N = d(we, B.props), N.ref = Vi(F, we, B), N.return = F, F = N;
                    break e;
                  }
                  a(F, we);
                  break;
                } else r(F, we);
                we = we.sibling;
              }
              B.type === J ? (N = Ca(B.props.children, F.mode, ie, B.key), N.return = F, F = N) : (ie = kl(B.type, B.key, B.props, null, F.mode, ie), ie.ref = Vi(F, N, B), ie.return = F, F = ie);
            }
            return E(F);
          case Q:
            e: {
              for (we = B.key; N !== null; ) {
                if (N.key === we) if (N.tag === 4 && N.stateNode.containerInfo === B.containerInfo && N.stateNode.implementation === B.implementation) {
                  a(F, N.sibling), N = d(N, B.children || []), N.return = F, F = N;
                  break e;
                } else {
                  a(F, N);
                  break;
                }
                else r(F, N);
                N = N.sibling;
              }
              N = Fc(B, F.mode, ie), N.return = F, F = N;
            }
            return E(F);
          case De:
            return we = B._init, lt(F, N, we(B._payload), ie);
        }
        if (gr(B)) return he(F, N, B, ie);
        if (ue(B)) return me(F, N, B, ie);
        tl(F, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" ? (B = "" + B, N !== null && N.tag === 6 ? (a(F, N.sibling), N = d(N, B), N.return = F, F = N) : (a(F, N), N = Mc(B, F.mode, ie), N.return = F, F = N), E(F)) : a(F, N);
    }
    __name(lt, "lt");
    return lt;
  }
  __name(Uf, "Uf");
  var ni = Uf(true), Mf = Uf(false), rl = So(null), nl = null, oi = null, Yu = null;
  function Ju() {
    Yu = oi = nl = null;
  }
  __name(Ju, "Ju");
  function Ku(e) {
    var r = rl.current;
    et(rl), e._currentValue = r;
  }
  __name(Ku, "Ku");
  function Xu(e, r, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & r) !== r ? (e.childLanes |= r, l !== null && (l.childLanes |= r)) : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r), e === a) break;
      e = e.return;
    }
  }
  __name(Xu, "Xu");
  function ai(e, r) {
    nl = e, Yu = oi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & r) !== 0 && (Jt = true), e.firstContext = null);
  }
  __name(ai, "ai");
  function Sr(e) {
    var r = e._currentValue;
    if (Yu !== e) if (e = { context: e, memoizedValue: r, next: null }, oi === null) {
      if (nl === null) throw Error(o(308));
      oi = e, nl.dependencies = { lanes: 0, firstContext: e };
    } else oi = oi.next = e;
    return r;
  }
  __name(Sr, "Sr");
  var ma = null;
  function Zu(e) {
    ma === null ? ma = [e] : ma.push(e);
  }
  __name(Zu, "Zu");
  function Ff(e, r, a, l) {
    var d = r.interleaved;
    return d === null ? (a.next = a, Zu(r)) : (a.next = d.next, d.next = a), r.interleaved = a, Kn(e, l);
  }
  __name(Ff, "Ff");
  function Kn(e, r) {
    e.lanes |= r;
    var a = e.alternate;
    for (a !== null && (a.lanes |= r), a = e, e = e.return; e !== null; ) e.childLanes |= r, a = e.alternate, a !== null && (a.childLanes |= r), a = e, e = e.return;
    return a.tag === 3 ? a.stateNode : null;
  }
  __name(Kn, "Kn");
  var _o = false;
  function ec(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  __name(ec, "ec");
  function zf(e, r) {
    e = e.updateQueue, r.updateQueue === e && (r.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  __name(zf, "zf");
  function Xn(e, r) {
    return { eventTime: e, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  __name(Xn, "Xn");
  function ko(e, r, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Be & 2) !== 0) {
      var d = l.pending;
      return d === null ? r.next = r : (r.next = d.next, d.next = r), l.pending = r, Kn(e, a);
    }
    return d = l.interleaved, d === null ? (r.next = r, Zu(l)) : (r.next = d.next, d.next = r), l.interleaved = r, Kn(e, a);
  }
  __name(ko, "ko");
  function ol(e, r, a) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (a & 4194240) !== 0)) {
      var l = r.lanes;
      l &= e.pendingLanes, a |= l, r.lanes = a, se(e, a);
    }
  }
  __name(ol, "ol");
  function Hf(e, r) {
    var a = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var d = null, g = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var E = { eventTime: a.eventTime, lane: a.lane, tag: a.tag, payload: a.payload, callback: a.callback, next: null };
          g === null ? d = g = E : g = g.next = E, a = a.next;
        } while (a !== null);
        g === null ? d = g = r : g = g.next = r;
      } else d = g = r;
      a = { baseState: l.baseState, firstBaseUpdate: d, lastBaseUpdate: g, shared: l.shared, effects: l.effects }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = r : e.next = r, a.lastBaseUpdate = r;
  }
  __name(Hf, "Hf");
  function al(e, r, a, l) {
    var d = e.updateQueue;
    _o = false;
    var g = d.firstBaseUpdate, E = d.lastBaseUpdate, O = d.shared.pending;
    if (O !== null) {
      d.shared.pending = null;
      var D = O, W = D.next;
      D.next = null, E === null ? g = W : E.next = W, E = D;
      var te = e.alternate;
      te !== null && (te = te.updateQueue, O = te.lastBaseUpdate, O !== E && (O === null ? te.firstBaseUpdate = W : O.next = W, te.lastBaseUpdate = D));
    }
    if (g !== null) {
      var re = d.baseState;
      E = 0, te = W = D = null, O = g;
      do {
        var ee = O.lane, de = O.eventTime;
        if ((l & ee) === ee) {
          te !== null && (te = te.next = { eventTime: de, lane: 0, tag: O.tag, payload: O.payload, callback: O.callback, next: null });
          e: {
            var he = e, me = O;
            switch (ee = r, de = a, me.tag) {
              case 1:
                if (he = me.payload, typeof he == "function") {
                  re = he.call(de, re, ee);
                  break e;
                }
                re = he;
                break e;
              case 3:
                he.flags = he.flags & -65537 | 128;
              case 0:
                if (he = me.payload, ee = typeof he == "function" ? he.call(de, re, ee) : he, ee == null) break e;
                re = oe({}, re, ee);
                break e;
              case 2:
                _o = true;
            }
          }
          O.callback !== null && O.lane !== 0 && (e.flags |= 64, ee = d.effects, ee === null ? d.effects = [O] : ee.push(O));
        } else de = { eventTime: de, lane: ee, tag: O.tag, payload: O.payload, callback: O.callback, next: null }, te === null ? (W = te = de, D = re) : te = te.next = de, E |= ee;
        if (O = O.next, O === null) {
          if (O = d.shared.pending, O === null) break;
          ee = O, O = ee.next, ee.next = null, d.lastBaseUpdate = ee, d.shared.pending = null;
        }
      } while (true);
      if (te === null && (D = re), d.baseState = D, d.firstBaseUpdate = W, d.lastBaseUpdate = te, r = d.shared.interleaved, r !== null) {
        d = r;
        do
          E |= d.lane, d = d.next;
        while (d !== r);
      } else g === null && (d.shared.lanes = 0);
      va |= E, e.lanes = E, e.memoizedState = re;
    }
  }
  __name(al, "al");
  function Bf(e, r, a) {
    if (e = r.effects, r.effects = null, e !== null) for (r = 0; r < e.length; r++) {
      var l = e[r], d = l.callback;
      if (d !== null) {
        if (l.callback = null, l = a, typeof d != "function") throw Error(o(191, d));
        d.call(l);
      }
    }
  }
  __name(Bf, "Bf");
  var qi = {}, gn = So(qi), Wi = So(qi), Qi = So(qi);
  function ga(e) {
    if (e === qi) throw Error(o(174));
    return e;
  }
  __name(ga, "ga");
  function tc(e, r) {
    switch (Ke(Qi, r), Ke(Wi, e), Ke(gn, qi), e = r.nodeType, e) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : lo(null, "");
        break;
      default:
        e = e === 8 ? r.parentNode : r, r = e.namespaceURI || null, e = e.tagName, r = lo(r, e);
    }
    et(gn), Ke(gn, r);
  }
  __name(tc, "tc");
  function ii() {
    et(gn), et(Wi), et(Qi);
  }
  __name(ii, "ii");
  function Vf(e) {
    ga(Qi.current);
    var r = ga(gn.current), a = lo(r, e.type);
    r !== a && (Ke(Wi, e), Ke(gn, a));
  }
  __name(Vf, "Vf");
  function rc(e) {
    Wi.current === e && (et(gn), et(Wi));
  }
  __name(rc, "rc");
  var ot = So(0);
  function il(e) {
    for (var r = e; r !== null; ) {
      if (r.tag === 13) {
        var a = r.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || a.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === e) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === e) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  __name(il, "il");
  var nc = [];
  function oc() {
    for (var e = 0; e < nc.length; e++) nc[e]._workInProgressVersionPrimary = null;
    nc.length = 0;
  }
  __name(oc, "oc");
  var sl = G.ReactCurrentDispatcher, ac = G.ReactCurrentBatchConfig, ya = 0, at = null, ft = null, gt = null, ll = false, Gi = false, Yi = 0, qy = 0;
  function $t() {
    throw Error(o(321));
  }
  __name($t, "$t");
  function ic(e, r) {
    if (r === null) return false;
    for (var a = 0; a < r.length && a < e.length; a++) if (!Fr(e[a], r[a])) return false;
    return true;
  }
  __name(ic, "ic");
  function sc(e, r, a, l, d, g) {
    if (ya = g, at = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, sl.current = e === null || e.memoizedState === null ? Yy : Jy, e = a(l, d), Gi) {
      g = 0;
      do {
        if (Gi = false, Yi = 0, 25 <= g) throw Error(o(301));
        g += 1, gt = ft = null, r.updateQueue = null, sl.current = Ky, e = a(l, d);
      } while (Gi);
    }
    if (sl.current = dl, r = ft !== null && ft.next !== null, ya = 0, gt = ft = at = null, ll = false, r) throw Error(o(300));
    return e;
  }
  __name(sc, "sc");
  function lc() {
    var e = Yi !== 0;
    return Yi = 0, e;
  }
  __name(lc, "lc");
  function yn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return gt === null ? at.memoizedState = gt = e : gt = gt.next = e, gt;
  }
  __name(yn, "yn");
  function Cr() {
    if (ft === null) {
      var e = at.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ft.next;
    var r = gt === null ? at.memoizedState : gt.next;
    if (r !== null) gt = r, ft = e;
    else {
      if (e === null) throw Error(o(310));
      ft = e, e = { memoizedState: ft.memoizedState, baseState: ft.baseState, baseQueue: ft.baseQueue, queue: ft.queue, next: null }, gt === null ? at.memoizedState = gt = e : gt = gt.next = e;
    }
    return gt;
  }
  __name(Cr, "Cr");
  function Ji(e, r) {
    return typeof r == "function" ? r(e) : r;
  }
  __name(Ji, "Ji");
  function uc(e) {
    var r = Cr(), a = r.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var l = ft, d = l.baseQueue, g = a.pending;
    if (g !== null) {
      if (d !== null) {
        var E = d.next;
        d.next = g.next, g.next = E;
      }
      l.baseQueue = d = g, a.pending = null;
    }
    if (d !== null) {
      g = d.next, l = l.baseState;
      var O = E = null, D = null, W = g;
      do {
        var te = W.lane;
        if ((ya & te) === te) D !== null && (D = D.next = { lane: 0, action: W.action, hasEagerState: W.hasEagerState, eagerState: W.eagerState, next: null }), l = W.hasEagerState ? W.eagerState : e(l, W.action);
        else {
          var re = { lane: te, action: W.action, hasEagerState: W.hasEagerState, eagerState: W.eagerState, next: null };
          D === null ? (O = D = re, E = l) : D = D.next = re, at.lanes |= te, va |= te;
        }
        W = W.next;
      } while (W !== null && W !== g);
      D === null ? E = l : D.next = O, Fr(l, r.memoizedState) || (Jt = true), r.memoizedState = l, r.baseState = E, r.baseQueue = D, a.lastRenderedState = l;
    }
    if (e = a.interleaved, e !== null) {
      d = e;
      do
        g = d.lane, at.lanes |= g, va |= g, d = d.next;
      while (d !== e);
    } else d === null && (a.lanes = 0);
    return [r.memoizedState, a.dispatch];
  }
  __name(uc, "uc");
  function cc(e) {
    var r = Cr(), a = r.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, d = a.pending, g = r.memoizedState;
    if (d !== null) {
      a.pending = null;
      var E = d = d.next;
      do
        g = e(g, E.action), E = E.next;
      while (E !== d);
      Fr(g, r.memoizedState) || (Jt = true), r.memoizedState = g, r.baseQueue === null && (r.baseState = g), a.lastRenderedState = g;
    }
    return [g, l];
  }
  __name(cc, "cc");
  function qf() {
  }
  __name(qf, "qf");
  function Wf(e, r) {
    var a = at, l = Cr(), d = r(), g = !Fr(l.memoizedState, d);
    if (g && (l.memoizedState = d, Jt = true), l = l.queue, dc(Yf.bind(null, a, l, e), [e]), l.getSnapshot !== r || g || gt !== null && gt.memoizedState.tag & 1) {
      if (a.flags |= 2048, Ki(9, Gf.bind(null, a, l, d, r), void 0, null), yt === null) throw Error(o(349));
      (ya & 30) !== 0 || Qf(a, r, d);
    }
    return d;
  }
  __name(Wf, "Wf");
  function Qf(e, r, a) {
    e.flags |= 16384, e = { getSnapshot: r, value: a }, r = at.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, at.updateQueue = r, r.stores = [e]) : (a = r.stores, a === null ? r.stores = [e] : a.push(e));
  }
  __name(Qf, "Qf");
  function Gf(e, r, a, l) {
    r.value = a, r.getSnapshot = l, Jf(r) && Kf(e);
  }
  __name(Gf, "Gf");
  function Yf(e, r, a) {
    return a(function() {
      Jf(r) && Kf(e);
    });
  }
  __name(Yf, "Yf");
  function Jf(e) {
    var r = e.getSnapshot;
    e = e.value;
    try {
      var a = r();
      return !Fr(e, a);
    } catch {
      return true;
    }
  }
  __name(Jf, "Jf");
  function Kf(e) {
    var r = Kn(e, 1);
    r !== null && qr(r, e, 1, -1);
  }
  __name(Kf, "Kf");
  function Xf(e) {
    var r = yn();
    return typeof e == "function" && (e = e()), r.memoizedState = r.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ji, lastRenderedState: e }, r.queue = e, e = e.dispatch = Gy.bind(null, at, e), [r.memoizedState, e];
  }
  __name(Xf, "Xf");
  function Ki(e, r, a, l) {
    return e = { tag: e, create: r, destroy: a, deps: l, next: null }, r = at.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, at.updateQueue = r, r.lastEffect = e.next = e) : (a = r.lastEffect, a === null ? r.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, r.lastEffect = e)), e;
  }
  __name(Ki, "Ki");
  function Zf() {
    return Cr().memoizedState;
  }
  __name(Zf, "Zf");
  function ul(e, r, a, l) {
    var d = yn();
    at.flags |= e, d.memoizedState = Ki(1 | r, a, void 0, l === void 0 ? null : l);
  }
  __name(ul, "ul");
  function cl(e, r, a, l) {
    var d = Cr();
    l = l === void 0 ? null : l;
    var g = void 0;
    if (ft !== null) {
      var E = ft.memoizedState;
      if (g = E.destroy, l !== null && ic(l, E.deps)) {
        d.memoizedState = Ki(r, a, g, l);
        return;
      }
    }
    at.flags |= e, d.memoizedState = Ki(1 | r, a, g, l);
  }
  __name(cl, "cl");
  function ep(e, r) {
    return ul(8390656, 8, e, r);
  }
  __name(ep, "ep");
  function dc(e, r) {
    return cl(2048, 8, e, r);
  }
  __name(dc, "dc");
  function tp(e, r) {
    return cl(4, 2, e, r);
  }
  __name(tp, "tp");
  function rp(e, r) {
    return cl(4, 4, e, r);
  }
  __name(rp, "rp");
  function np(e, r) {
    if (typeof r == "function") return e = e(), r(e), function() {
      r(null);
    };
    if (r != null) return e = e(), r.current = e, function() {
      r.current = null;
    };
  }
  __name(np, "np");
  function op(e, r, a) {
    return a = a != null ? a.concat([e]) : null, cl(4, 4, np.bind(null, r, e), a);
  }
  __name(op, "op");
  function fc() {
  }
  __name(fc, "fc");
  function ap(e, r) {
    var a = Cr();
    r = r === void 0 ? null : r;
    var l = a.memoizedState;
    return l !== null && r !== null && ic(r, l[1]) ? l[0] : (a.memoizedState = [e, r], e);
  }
  __name(ap, "ap");
  function ip(e, r) {
    var a = Cr();
    r = r === void 0 ? null : r;
    var l = a.memoizedState;
    return l !== null && r !== null && ic(r, l[1]) ? l[0] : (e = e(), a.memoizedState = [e, r], e);
  }
  __name(ip, "ip");
  function sp(e, r, a) {
    return (ya & 21) === 0 ? (e.baseState && (e.baseState = false, Jt = true), e.memoizedState = a) : (Fr(a, r) || (a = A(), at.lanes |= a, va |= a, e.baseState = true), r);
  }
  __name(sp, "sp");
  function Wy(e, r) {
    var a = le;
    le = a !== 0 && 4 > a ? a : 4, e(true);
    var l = ac.transition;
    ac.transition = {};
    try {
      e(false), r();
    } finally {
      le = a, ac.transition = l;
    }
  }
  __name(Wy, "Wy");
  function lp() {
    return Cr().memoizedState;
  }
  __name(lp, "lp");
  function Qy(e, r, a) {
    var l = $o(e);
    if (a = { lane: l, action: a, hasEagerState: false, eagerState: null, next: null }, up(e)) cp(r, a);
    else if (a = Ff(e, r, a, l), a !== null) {
      var d = Ut();
      qr(a, e, l, d), dp(a, r, l);
    }
  }
  __name(Qy, "Qy");
  function Gy(e, r, a) {
    var l = $o(e), d = { lane: l, action: a, hasEagerState: false, eagerState: null, next: null };
    if (up(e)) cp(r, d);
    else {
      var g = e.alternate;
      if (e.lanes === 0 && (g === null || g.lanes === 0) && (g = r.lastRenderedReducer, g !== null)) try {
        var E = r.lastRenderedState, O = g(E, a);
        if (d.hasEagerState = true, d.eagerState = O, Fr(O, E)) {
          var D = r.interleaved;
          D === null ? (d.next = d, Zu(r)) : (d.next = D.next, D.next = d), r.interleaved = d;
          return;
        }
      } catch {
      } finally {
      }
      a = Ff(e, r, d, l), a !== null && (d = Ut(), qr(a, e, l, d), dp(a, r, l));
    }
  }
  __name(Gy, "Gy");
  function up(e) {
    var r = e.alternate;
    return e === at || r !== null && r === at;
  }
  __name(up, "up");
  function cp(e, r) {
    Gi = ll = true;
    var a = e.pending;
    a === null ? r.next = r : (r.next = a.next, a.next = r), e.pending = r;
  }
  __name(cp, "cp");
  function dp(e, r, a) {
    if ((a & 4194240) !== 0) {
      var l = r.lanes;
      l &= e.pendingLanes, a |= l, r.lanes = a, se(e, a);
    }
  }
  __name(dp, "dp");
  var dl = { readContext: Sr, useCallback: $t, useContext: $t, useEffect: $t, useImperativeHandle: $t, useInsertionEffect: $t, useLayoutEffect: $t, useMemo: $t, useReducer: $t, useRef: $t, useState: $t, useDebugValue: $t, useDeferredValue: $t, useTransition: $t, useMutableSource: $t, useSyncExternalStore: $t, useId: $t, unstable_isNewReconciler: false }, Yy = { readContext: Sr, useCallback: /* @__PURE__ */ __name(function(e, r) {
    return yn().memoizedState = [e, r === void 0 ? null : r], e;
  }, "useCallback"), useContext: Sr, useEffect: ep, useImperativeHandle: /* @__PURE__ */ __name(function(e, r, a) {
    return a = a != null ? a.concat([e]) : null, ul(4194308, 4, np.bind(null, r, e), a);
  }, "useImperativeHandle"), useLayoutEffect: /* @__PURE__ */ __name(function(e, r) {
    return ul(4194308, 4, e, r);
  }, "useLayoutEffect"), useInsertionEffect: /* @__PURE__ */ __name(function(e, r) {
    return ul(4, 2, e, r);
  }, "useInsertionEffect"), useMemo: /* @__PURE__ */ __name(function(e, r) {
    var a = yn();
    return r = r === void 0 ? null : r, e = e(), a.memoizedState = [e, r], e;
  }, "useMemo"), useReducer: /* @__PURE__ */ __name(function(e, r, a) {
    var l = yn();
    return r = a !== void 0 ? a(r) : r, l.memoizedState = l.baseState = r, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: r }, l.queue = e, e = e.dispatch = Qy.bind(null, at, e), [l.memoizedState, e];
  }, "useReducer"), useRef: /* @__PURE__ */ __name(function(e) {
    var r = yn();
    return e = { current: e }, r.memoizedState = e;
  }, "useRef"), useState: Xf, useDebugValue: fc, useDeferredValue: /* @__PURE__ */ __name(function(e) {
    return yn().memoizedState = e;
  }, "useDeferredValue"), useTransition: /* @__PURE__ */ __name(function() {
    var e = Xf(false), r = e[0];
    return e = Wy.bind(null, e[1]), yn().memoizedState = e, [r, e];
  }, "useTransition"), useMutableSource: /* @__PURE__ */ __name(function() {
  }, "useMutableSource"), useSyncExternalStore: /* @__PURE__ */ __name(function(e, r, a) {
    var l = at, d = yn();
    if (tt) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else {
      if (a = r(), yt === null) throw Error(o(349));
      (ya & 30) !== 0 || Qf(l, r, a);
    }
    d.memoizedState = a;
    var g = { value: a, getSnapshot: r };
    return d.queue = g, ep(Yf.bind(null, l, g, e), [e]), l.flags |= 2048, Ki(9, Gf.bind(null, l, g, a, r), void 0, null), a;
  }, "useSyncExternalStore"), useId: /* @__PURE__ */ __name(function() {
    var e = yn(), r = yt.identifierPrefix;
    if (tt) {
      var a = Jn, l = Yn;
      a = (l & ~(1 << 32 - dt(l) - 1)).toString(32) + a, r = ":" + r + "R" + a, a = Yi++, 0 < a && (r += "H" + a.toString(32)), r += ":";
    } else a = qy++, r = ":" + r + "r" + a.toString(32) + ":";
    return e.memoizedState = r;
  }, "useId"), unstable_isNewReconciler: false }, Jy = { readContext: Sr, useCallback: ap, useContext: Sr, useEffect: dc, useImperativeHandle: op, useInsertionEffect: tp, useLayoutEffect: rp, useMemo: ip, useReducer: uc, useRef: Zf, useState: /* @__PURE__ */ __name(function() {
    return uc(Ji);
  }, "useState"), useDebugValue: fc, useDeferredValue: /* @__PURE__ */ __name(function(e) {
    var r = Cr();
    return sp(r, ft.memoizedState, e);
  }, "useDeferredValue"), useTransition: /* @__PURE__ */ __name(function() {
    var e = uc(Ji)[0], r = Cr().memoizedState;
    return [e, r];
  }, "useTransition"), useMutableSource: qf, useSyncExternalStore: Wf, useId: lp, unstable_isNewReconciler: false }, Ky = { readContext: Sr, useCallback: ap, useContext: Sr, useEffect: dc, useImperativeHandle: op, useInsertionEffect: tp, useLayoutEffect: rp, useMemo: ip, useReducer: cc, useRef: Zf, useState: /* @__PURE__ */ __name(function() {
    return cc(Ji);
  }, "useState"), useDebugValue: fc, useDeferredValue: /* @__PURE__ */ __name(function(e) {
    var r = Cr();
    return ft === null ? r.memoizedState = e : sp(r, ft.memoizedState, e);
  }, "useDeferredValue"), useTransition: /* @__PURE__ */ __name(function() {
    var e = cc(Ji)[0], r = Cr().memoizedState;
    return [e, r];
  }, "useTransition"), useMutableSource: qf, useSyncExternalStore: Wf, useId: lp, unstable_isNewReconciler: false };
  function Hr(e, r) {
    if (e && e.defaultProps) {
      r = oe({}, r), e = e.defaultProps;
      for (var a in e) r[a] === void 0 && (r[a] = e[a]);
      return r;
    }
    return r;
  }
  __name(Hr, "Hr");
  function pc(e, r, a, l) {
    r = e.memoizedState, a = a(l, r), a = a == null ? r : oe({}, r, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  __name(pc, "pc");
  var fl = { isMounted: /* @__PURE__ */ __name(function(e) {
    return (e = e._reactInternals) ? Lr(e) === e : false;
  }, "isMounted"), enqueueSetState: /* @__PURE__ */ __name(function(e, r, a) {
    e = e._reactInternals;
    var l = Ut(), d = $o(e), g = Xn(l, d);
    g.payload = r, a != null && (g.callback = a), r = ko(e, g, d), r !== null && (qr(r, e, d, l), ol(r, e, d));
  }, "enqueueSetState"), enqueueReplaceState: /* @__PURE__ */ __name(function(e, r, a) {
    e = e._reactInternals;
    var l = Ut(), d = $o(e), g = Xn(l, d);
    g.tag = 1, g.payload = r, a != null && (g.callback = a), r = ko(e, g, d), r !== null && (qr(r, e, d, l), ol(r, e, d));
  }, "enqueueReplaceState"), enqueueForceUpdate: /* @__PURE__ */ __name(function(e, r) {
    e = e._reactInternals;
    var a = Ut(), l = $o(e), d = Xn(a, l);
    d.tag = 2, r != null && (d.callback = r), r = ko(e, d, l), r !== null && (qr(r, e, l, a), ol(r, e, l));
  }, "enqueueForceUpdate") };
  function fp(e, r, a, l, d, g, E) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, g, E) : r.prototype && r.prototype.isPureReactComponent ? !bi(a, l) || !bi(d, g) : true;
  }
  __name(fp, "fp");
  function pp(e, r, a) {
    var l = false, d = Co, g = r.contextType;
    return typeof g == "object" && g !== null ? g = Sr(g) : (d = Yt(r) ? fa : Rt.current, l = r.contextTypes, g = (l = l != null) ? Za(e, d) : Co), r = new r(a, g), e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = fl, e.stateNode = r, r._reactInternals = e, l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = d, e.__reactInternalMemoizedMaskedChildContext = g), r;
  }
  __name(pp, "pp");
  function hp(e, r, a, l) {
    e = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(a, l), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(a, l), r.state !== e && fl.enqueueReplaceState(r, r.state, null);
  }
  __name(hp, "hp");
  function hc(e, r, a, l) {
    var d = e.stateNode;
    d.props = a, d.state = e.memoizedState, d.refs = {}, ec(e);
    var g = r.contextType;
    typeof g == "object" && g !== null ? d.context = Sr(g) : (g = Yt(r) ? fa : Rt.current, d.context = Za(e, g)), d.state = e.memoizedState, g = r.getDerivedStateFromProps, typeof g == "function" && (pc(e, r, g, a), d.state = e.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (r = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), r !== d.state && fl.enqueueReplaceState(d, d.state, null), al(e, a, d, l), d.state = e.memoizedState), typeof d.componentDidMount == "function" && (e.flags |= 4194308);
  }
  __name(hc, "hc");
  function si(e, r) {
    try {
      var a = "", l = r;
      do
        a += be(l), l = l.return;
      while (l);
      var d = a;
    } catch (g) {
      d = `
Error generating stack: ` + g.message + `
` + g.stack;
    }
    return { value: e, source: r, stack: d, digest: null };
  }
  __name(si, "si");
  function mc(e, r, a) {
    return { value: e, source: null, stack: a ?? null, digest: r ?? null };
  }
  __name(mc, "mc");
  function gc(e, r) {
    try {
      console.error(r.value);
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  __name(gc, "gc");
  var Xy = typeof WeakMap == "function" ? WeakMap : Map;
  function mp(e, r, a) {
    a = Xn(-1, a), a.tag = 3, a.payload = { element: null };
    var l = r.value;
    return a.callback = function() {
      wl || (wl = true, Tc = l), gc(e, r);
    }, a;
  }
  __name(mp, "mp");
  function gp(e, r, a) {
    a = Xn(-1, a), a.tag = 3;
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var d = r.value;
      a.payload = function() {
        return l(d);
      }, a.callback = function() {
        gc(e, r);
      };
    }
    var g = e.stateNode;
    return g !== null && typeof g.componentDidCatch == "function" && (a.callback = function() {
      gc(e, r), typeof l != "function" && (jo === null ? jo = /* @__PURE__ */ new Set([this]) : jo.add(this));
      var E = r.stack;
      this.componentDidCatch(r.value, { componentStack: E !== null ? E : "" });
    }), a;
  }
  __name(gp, "gp");
  function yp(e, r, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Xy();
      var d = /* @__PURE__ */ new Set();
      l.set(r, d);
    } else d = l.get(r), d === void 0 && (d = /* @__PURE__ */ new Set(), l.set(r, d));
    d.has(a) || (d.add(a), e = fv.bind(null, e, r, a), r.then(e, e));
  }
  __name(yp, "yp");
  function vp(e) {
    do {
      var r;
      if ((r = e.tag === 13) && (r = e.memoizedState, r = r !== null ? r.dehydrated !== null : true), r) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  __name(vp, "vp");
  function wp(e, r, a, l, d) {
    return (e.mode & 1) === 0 ? (e === r ? e.flags |= 65536 : (e.flags |= 128, a.flags |= 131072, a.flags &= -52805, a.tag === 1 && (a.alternate === null ? a.tag = 17 : (r = Xn(-1, 1), r.tag = 2, ko(a, r, 1))), a.lanes |= 1), e) : (e.flags |= 65536, e.lanes = d, e);
  }
  __name(wp, "wp");
  var Zy = G.ReactCurrentOwner, Jt = false;
  function bt(e, r, a, l) {
    r.child = e === null ? Mf(r, null, a, l) : ni(r, e.child, a, l);
  }
  __name(bt, "bt");
  function xp(e, r, a, l, d) {
    a = a.render;
    var g = r.ref;
    return ai(r, d), l = sc(e, r, a, l, g, d), a = lc(), e !== null && !Jt ? (r.updateQueue = e.updateQueue, r.flags &= -2053, e.lanes &= ~d, Zn(e, r, d)) : (tt && a && Vu(r), r.flags |= 1, bt(e, r, l, d), r.child);
  }
  __name(xp, "xp");
  function Sp(e, r, a, l, d) {
    if (e === null) {
      var g = a.type;
      return typeof g == "function" && !Uc(g) && g.defaultProps === void 0 && a.compare === null && a.defaultProps === void 0 ? (r.tag = 15, r.type = g, Cp(e, r, g, l, d)) : (e = kl(a.type, null, l, r, r.mode, d), e.ref = r.ref, e.return = r, r.child = e);
    }
    if (g = e.child, (e.lanes & d) === 0) {
      var E = g.memoizedProps;
      if (a = a.compare, a = a !== null ? a : bi, a(E, l) && e.ref === r.ref) return Zn(e, r, d);
    }
    return r.flags |= 1, e = To(g, l), e.ref = r.ref, e.return = r, r.child = e;
  }
  __name(Sp, "Sp");
  function Cp(e, r, a, l, d) {
    if (e !== null) {
      var g = e.memoizedProps;
      if (bi(g, l) && e.ref === r.ref) if (Jt = false, r.pendingProps = l = g, (e.lanes & d) !== 0) (e.flags & 131072) !== 0 && (Jt = true);
      else return r.lanes = e.lanes, Zn(e, r, d);
    }
    return yc(e, r, a, l, d);
  }
  __name(Cp, "Cp");
  function Ep(e, r, a) {
    var l = r.pendingProps, d = l.children, g = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ke(ui, fr), fr |= a;
    else {
      if ((a & 1073741824) === 0) return e = g !== null ? g.baseLanes | a : a, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, r.updateQueue = null, Ke(ui, fr), fr |= e, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, l = g !== null ? g.baseLanes : a, Ke(ui, fr), fr |= l;
    }
    else g !== null ? (l = g.baseLanes | a, r.memoizedState = null) : l = a, Ke(ui, fr), fr |= l;
    return bt(e, r, d, a), r.child;
  }
  __name(Ep, "Ep");
  function _p(e, r) {
    var a = r.ref;
    (e === null && a !== null || e !== null && e.ref !== a) && (r.flags |= 512, r.flags |= 2097152);
  }
  __name(_p, "_p");
  function yc(e, r, a, l, d) {
    var g = Yt(a) ? fa : Rt.current;
    return g = Za(r, g), ai(r, d), a = sc(e, r, a, l, g, d), l = lc(), e !== null && !Jt ? (r.updateQueue = e.updateQueue, r.flags &= -2053, e.lanes &= ~d, Zn(e, r, d)) : (tt && l && Vu(r), r.flags |= 1, bt(e, r, a, d), r.child);
  }
  __name(yc, "yc");
  function kp(e, r, a, l, d) {
    if (Yt(a)) {
      var g = true;
      Js(r);
    } else g = false;
    if (ai(r, d), r.stateNode === null) hl(e, r), pp(r, a, l), hc(r, a, l, d), l = true;
    else if (e === null) {
      var E = r.stateNode, O = r.memoizedProps;
      E.props = O;
      var D = E.context, W = a.contextType;
      typeof W == "object" && W !== null ? W = Sr(W) : (W = Yt(a) ? fa : Rt.current, W = Za(r, W));
      var te = a.getDerivedStateFromProps, re = typeof te == "function" || typeof E.getSnapshotBeforeUpdate == "function";
      re || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (O !== l || D !== W) && hp(r, E, l, W), _o = false;
      var ee = r.memoizedState;
      E.state = ee, al(r, l, E, d), D = r.memoizedState, O !== l || ee !== D || Gt.current || _o ? (typeof te == "function" && (pc(r, a, te, l), D = r.memoizedState), (O = _o || fp(r, a, O, l, ee, D, W)) ? (re || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = l, r.memoizedState = D), E.props = l, E.state = D, E.context = W, l = O) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), l = false);
    } else {
      E = r.stateNode, zf(e, r), O = r.memoizedProps, W = r.type === r.elementType ? O : Hr(r.type, O), E.props = W, re = r.pendingProps, ee = E.context, D = a.contextType, typeof D == "object" && D !== null ? D = Sr(D) : (D = Yt(a) ? fa : Rt.current, D = Za(r, D));
      var de = a.getDerivedStateFromProps;
      (te = typeof de == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (O !== re || ee !== D) && hp(r, E, l, D), _o = false, ee = r.memoizedState, E.state = ee, al(r, l, E, d);
      var he = r.memoizedState;
      O !== re || ee !== he || Gt.current || _o ? (typeof de == "function" && (pc(r, a, de, l), he = r.memoizedState), (W = _o || fp(r, a, W, l, ee, he, D) || false) ? (te || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(l, he, D), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(l, he, D)), typeof E.componentDidUpdate == "function" && (r.flags |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof E.componentDidUpdate != "function" || O === e.memoizedProps && ee === e.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || O === e.memoizedProps && ee === e.memoizedState || (r.flags |= 1024), r.memoizedProps = l, r.memoizedState = he), E.props = l, E.state = he, E.context = D, l = W) : (typeof E.componentDidUpdate != "function" || O === e.memoizedProps && ee === e.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || O === e.memoizedProps && ee === e.memoizedState || (r.flags |= 1024), l = false);
    }
    return vc(e, r, a, l, g, d);
  }
  __name(kp, "kp");
  function vc(e, r, a, l, d, g) {
    _p(e, r);
    var E = (r.flags & 128) !== 0;
    if (!l && !E) return d && If(r, a, false), Zn(e, r, g);
    l = r.stateNode, Zy.current = r;
    var O = E && typeof a.getDerivedStateFromError != "function" ? null : l.render();
    return r.flags |= 1, e !== null && E ? (r.child = ni(r, e.child, null, g), r.child = ni(r, null, O, g)) : bt(e, r, O, g), r.memoizedState = l.state, d && If(r, a, true), r.child;
  }
  __name(vc, "vc");
  function Pp(e) {
    var r = e.stateNode;
    r.pendingContext ? Rf(e, r.pendingContext, r.pendingContext !== r.context) : r.context && Rf(e, r.context, false), tc(e, r.containerInfo);
  }
  __name(Pp, "Pp");
  function jp(e, r, a, l, d) {
    return ri(), Gu(d), r.flags |= 256, bt(e, r, a, l), r.child;
  }
  __name(jp, "jp");
  var wc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function xc(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  __name(xc, "xc");
  function Rp(e, r, a) {
    var l = r.pendingProps, d = ot.current, g = false, E = (r.flags & 128) !== 0, O;
    if ((O = E) || (O = e !== null && e.memoizedState === null ? false : (d & 2) !== 0), O ? (g = true, r.flags &= -129) : (e === null || e.memoizedState !== null) && (d |= 1), Ke(ot, d & 1), e === null) return Qu(r), e = r.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : e.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (E = l.children, e = l.fallback, g ? (l = r.mode, g = r.child, E = { mode: "hidden", children: E }, (l & 1) === 0 && g !== null ? (g.childLanes = 0, g.pendingProps = E) : g = Pl(E, l, 0, null), e = Ca(e, l, a, null), g.return = r, e.return = r, g.sibling = e, r.child = g, r.child.memoizedState = xc(a), r.memoizedState = wc, e) : Sc(r, E));
    if (d = e.memoizedState, d !== null && (O = d.dehydrated, O !== null)) return ev(e, r, E, l, O, d, a);
    if (g) {
      g = l.fallback, E = r.mode, d = e.child, O = d.sibling;
      var D = { mode: "hidden", children: l.children };
      return (E & 1) === 0 && r.child !== d ? (l = r.child, l.childLanes = 0, l.pendingProps = D, r.deletions = null) : (l = To(d, D), l.subtreeFlags = d.subtreeFlags & 14680064), O !== null ? g = To(O, g) : (g = Ca(g, E, a, null), g.flags |= 2), g.return = r, l.return = r, l.sibling = g, r.child = l, l = g, g = r.child, E = e.child.memoizedState, E = E === null ? xc(a) : { baseLanes: E.baseLanes | a, cachePool: null, transitions: E.transitions }, g.memoizedState = E, g.childLanes = e.childLanes & ~a, r.memoizedState = wc, l;
    }
    return g = e.child, e = g.sibling, l = To(g, { mode: "visible", children: l.children }), (r.mode & 1) === 0 && (l.lanes = a), l.return = r, l.sibling = null, e !== null && (a = r.deletions, a === null ? (r.deletions = [e], r.flags |= 16) : a.push(e)), r.child = l, r.memoizedState = null, l;
  }
  __name(Rp, "Rp");
  function Sc(e, r) {
    return r = Pl({ mode: "visible", children: r }, e.mode, 0, null), r.return = e, e.child = r;
  }
  __name(Sc, "Sc");
  function pl(e, r, a, l) {
    return l !== null && Gu(l), ni(r, e.child, null, a), e = Sc(r, r.pendingProps.children), e.flags |= 2, r.memoizedState = null, e;
  }
  __name(pl, "pl");
  function ev(e, r, a, l, d, g, E) {
    if (a) return r.flags & 256 ? (r.flags &= -257, l = mc(Error(o(422))), pl(e, r, E, l)) : r.memoizedState !== null ? (r.child = e.child, r.flags |= 128, null) : (g = l.fallback, d = r.mode, l = Pl({ mode: "visible", children: l.children }, d, 0, null), g = Ca(g, d, E, null), g.flags |= 2, l.return = r, g.return = r, l.sibling = g, r.child = l, (r.mode & 1) !== 0 && ni(r, e.child, null, E), r.child.memoizedState = xc(E), r.memoizedState = wc, g);
    if ((r.mode & 1) === 0) return pl(e, r, E, null);
    if (d.data === "$!") {
      if (l = d.nextSibling && d.nextSibling.dataset, l) var O = l.dgst;
      return l = O, g = Error(o(419)), l = mc(g, l, void 0), pl(e, r, E, l);
    }
    if (O = (E & e.childLanes) !== 0, Jt || O) {
      if (l = yt, l !== null) {
        switch (E & -E) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        d = (d & (l.suspendedLanes | E)) !== 0 ? 0 : d, d !== 0 && d !== g.retryLane && (g.retryLane = d, Kn(e, d), qr(l, e, d, -1));
      }
      return bc(), l = mc(Error(o(421))), pl(e, r, E, l);
    }
    return d.data === "$?" ? (r.flags |= 128, r.child = e.child, r = pv.bind(null, e), d._reactRetry = r, null) : (e = g.treeContext, dr = xo(d.nextSibling), cr = r, tt = true, zr = null, e !== null && (wr[xr++] = Yn, wr[xr++] = Jn, wr[xr++] = pa, Yn = e.id, Jn = e.overflow, pa = r), r = Sc(r, l.children), r.flags |= 4096, r);
  }
  __name(ev, "ev");
  function $p(e, r, a) {
    e.lanes |= r;
    var l = e.alternate;
    l !== null && (l.lanes |= r), Xu(e.return, r, a);
  }
  __name($p, "$p");
  function Cc(e, r, a, l, d) {
    var g = e.memoizedState;
    g === null ? e.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: l, tail: a, tailMode: d } : (g.isBackwards = r, g.rendering = null, g.renderingStartTime = 0, g.last = l, g.tail = a, g.tailMode = d);
  }
  __name(Cc, "Cc");
  function Ip(e, r, a) {
    var l = r.pendingProps, d = l.revealOrder, g = l.tail;
    if (bt(e, r, l.children, a), l = ot.current, (l & 2) !== 0) l = l & 1 | 2, r.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = r.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && $p(e, a, r);
        else if (e.tag === 19) $p(e, a, r);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === r) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === r) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      l &= 1;
    }
    if (Ke(ot, l), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (d) {
      case "forwards":
        for (a = r.child, d = null; a !== null; ) e = a.alternate, e !== null && il(e) === null && (d = a), a = a.sibling;
        a = d, a === null ? (d = r.child, r.child = null) : (d = a.sibling, a.sibling = null), Cc(r, false, d, a, g);
        break;
      case "backwards":
        for (a = null, d = r.child, r.child = null; d !== null; ) {
          if (e = d.alternate, e !== null && il(e) === null) {
            r.child = d;
            break;
          }
          e = d.sibling, d.sibling = a, a = d, d = e;
        }
        Cc(r, true, a, null, g);
        break;
      case "together":
        Cc(r, false, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  __name(Ip, "Ip");
  function hl(e, r) {
    (r.mode & 1) === 0 && e !== null && (e.alternate = null, r.alternate = null, r.flags |= 2);
  }
  __name(hl, "hl");
  function Zn(e, r, a) {
    if (e !== null && (r.dependencies = e.dependencies), va |= r.lanes, (a & r.childLanes) === 0) return null;
    if (e !== null && r.child !== e.child) throw Error(o(153));
    if (r.child !== null) {
      for (e = r.child, a = To(e, e.pendingProps), r.child = a, a.return = r; e.sibling !== null; ) e = e.sibling, a = a.sibling = To(e, e.pendingProps), a.return = r;
      a.sibling = null;
    }
    return r.child;
  }
  __name(Zn, "Zn");
  function tv(e, r, a) {
    switch (r.tag) {
      case 3:
        Pp(r), ri();
        break;
      case 5:
        Vf(r);
        break;
      case 1:
        Yt(r.type) && Js(r);
        break;
      case 4:
        tc(r, r.stateNode.containerInfo);
        break;
      case 10:
        var l = r.type._context, d = r.memoizedProps.value;
        Ke(rl, l._currentValue), l._currentValue = d;
        break;
      case 13:
        if (l = r.memoizedState, l !== null) return l.dehydrated !== null ? (Ke(ot, ot.current & 1), r.flags |= 128, null) : (a & r.child.childLanes) !== 0 ? Rp(e, r, a) : (Ke(ot, ot.current & 1), e = Zn(e, r, a), e !== null ? e.sibling : null);
        Ke(ot, ot.current & 1);
        break;
      case 19:
        if (l = (a & r.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (l) return Ip(e, r, a);
          r.flags |= 128;
        }
        if (d = r.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Ke(ot, ot.current), l) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ep(e, r, a);
    }
    return Zn(e, r, a);
  }
  __name(tv, "tv");
  var Tp, Ec, Ap, Op;
  Tp = /* @__PURE__ */ __name(function(e, r) {
    for (var a = r.child; a !== null; ) {
      if (a.tag === 5 || a.tag === 6) e.appendChild(a.stateNode);
      else if (a.tag !== 4 && a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === r) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === r) return;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
  }, "Tp"), Ec = /* @__PURE__ */ __name(function() {
  }, "Ec"), Ap = /* @__PURE__ */ __name(function(e, r, a, l) {
    var d = e.memoizedProps;
    if (d !== l) {
      e = r.stateNode, ga(gn.current);
      var g = null;
      switch (a) {
        case "input":
          d = Mt(e, d), l = Mt(e, l), g = [];
          break;
        case "select":
          d = oe({}, d, { value: void 0 }), l = oe({}, l, { value: void 0 }), g = [];
          break;
        case "textarea":
          d = Ft(e, d), l = Ft(e, l), g = [];
          break;
        default:
          typeof d.onClick != "function" && typeof l.onClick == "function" && (e.onclick = Qs);
      }
      Qo(a, l);
      var E;
      a = null;
      for (W in d) if (!l.hasOwnProperty(W) && d.hasOwnProperty(W) && d[W] != null) if (W === "style") {
        var O = d[W];
        for (E in O) O.hasOwnProperty(E) && (a || (a = {}), a[E] = "");
      } else W !== "dangerouslySetInnerHTML" && W !== "children" && W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && W !== "autoFocus" && (s.hasOwnProperty(W) ? g || (g = []) : (g = g || []).push(W, null));
      for (W in l) {
        var D = l[W];
        if (O = d != null ? d[W] : void 0, l.hasOwnProperty(W) && D !== O && (D != null || O != null)) if (W === "style") if (O) {
          for (E in O) !O.hasOwnProperty(E) || D && D.hasOwnProperty(E) || (a || (a = {}), a[E] = "");
          for (E in D) D.hasOwnProperty(E) && O[E] !== D[E] && (a || (a = {}), a[E] = D[E]);
        } else a || (g || (g = []), g.push(W, a)), a = D;
        else W === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, O = O ? O.__html : void 0, D != null && O !== D && (g = g || []).push(W, D)) : W === "children" ? typeof D != "string" && typeof D != "number" || (g = g || []).push(W, "" + D) : W !== "suppressContentEditableWarning" && W !== "suppressHydrationWarning" && (s.hasOwnProperty(W) ? (D != null && W === "onScroll" && Ze("scroll", e), g || O === D || (g = [])) : (g = g || []).push(W, D));
      }
      a && (g = g || []).push("style", a);
      var W = g;
      (r.updateQueue = W) && (r.flags |= 4);
    }
  }, "Ap"), Op = /* @__PURE__ */ __name(function(e, r, a, l) {
    a !== l && (r.flags |= 4);
  }, "Op");
  function Xi(e, r) {
    if (!tt) switch (e.tailMode) {
      case "hidden":
        r = e.tail;
        for (var a = null; r !== null; ) r.alternate !== null && (a = r), r = r.sibling;
        a === null ? e.tail = null : a.sibling = null;
        break;
      case "collapsed":
        a = e.tail;
        for (var l = null; a !== null; ) a.alternate !== null && (l = a), a = a.sibling;
        l === null ? r || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
    }
  }
  __name(Xi, "Xi");
  function It(e) {
    var r = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (r) for (var d = e.child; d !== null; ) a |= d.lanes | d.childLanes, l |= d.subtreeFlags & 14680064, l |= d.flags & 14680064, d.return = e, d = d.sibling;
    else for (d = e.child; d !== null; ) a |= d.lanes | d.childLanes, l |= d.subtreeFlags, l |= d.flags, d.return = e, d = d.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, r;
  }
  __name(It, "It");
  function rv(e, r, a) {
    var l = r.pendingProps;
    switch (qu(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return It(r), null;
      case 1:
        return Yt(r.type) && Ys(), It(r), null;
      case 3:
        return l = r.stateNode, ii(), et(Gt), et(Rt), oc(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (el(r) ? r.flags |= 4 : e === null || e.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, zr !== null && (Lc(zr), zr = null))), Ec(e, r), It(r), null;
      case 5:
        rc(r);
        var d = ga(Qi.current);
        if (a = r.type, e !== null && r.stateNode != null) Ap(e, r, a, l, d), e.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!l) {
            if (r.stateNode === null) throw Error(o(166));
            return It(r), null;
          }
          if (e = ga(gn.current), el(r)) {
            l = r.stateNode, a = r.type;
            var g = r.memoizedProps;
            switch (l[mn] = r, l[Hi] = g, e = (r.mode & 1) !== 0, a) {
              case "dialog":
                Ze("cancel", l), Ze("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ze("load", l);
                break;
              case "video":
              case "audio":
                for (d = 0; d < Mi.length; d++) Ze(Mi[d], l);
                break;
              case "source":
                Ze("error", l);
                break;
              case "img":
              case "image":
              case "link":
                Ze("error", l), Ze("load", l);
                break;
              case "details":
                Ze("toggle", l);
                break;
              case "input":
                Fo(l, g), Ze("invalid", l);
                break;
              case "select":
                l._wrapperState = { wasMultiple: !!g.multiple }, Ze("invalid", l);
                break;
              case "textarea":
                mt(l, g), Ze("invalid", l);
            }
            Qo(a, g), d = null;
            for (var E in g) if (g.hasOwnProperty(E)) {
              var O = g[E];
              E === "children" ? typeof O == "string" ? l.textContent !== O && (g.suppressHydrationWarning !== true && Ws(l.textContent, O, e), d = ["children", O]) : typeof O == "number" && l.textContent !== "" + O && (g.suppressHydrationWarning !== true && Ws(l.textContent, O, e), d = ["children", "" + O]) : s.hasOwnProperty(E) && O != null && E === "onScroll" && Ze("scroll", l);
            }
            switch (a) {
              case "input":
                ht(l), An(l, g, true);
                break;
              case "textarea":
                ht(l), Bo(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof g.onClick == "function" && (l.onclick = Qs);
            }
            l = d, r.updateQueue = l, l !== null && (r.flags |= 4);
          } else {
            E = d.nodeType === 9 ? d : d.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Vo(a)), e === "http://www.w3.org/1999/xhtml" ? a === "script" ? (e = E.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof l.is == "string" ? e = E.createElement(a, { is: l.is }) : (e = E.createElement(a), a === "select" && (E = e, l.multiple ? E.multiple = true : l.size && (E.size = l.size))) : e = E.createElementNS(e, a), e[mn] = r, e[Hi] = l, Tp(e, r, false, false), r.stateNode = e;
            e: {
              switch (E = Go(a, l), a) {
                case "dialog":
                  Ze("cancel", e), Ze("close", e), d = l;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ze("load", e), d = l;
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < Mi.length; d++) Ze(Mi[d], e);
                  d = l;
                  break;
                case "source":
                  Ze("error", e), d = l;
                  break;
                case "img":
                case "image":
                case "link":
                  Ze("error", e), Ze("load", e), d = l;
                  break;
                case "details":
                  Ze("toggle", e), d = l;
                  break;
                case "input":
                  Fo(e, l), d = Mt(e, l), Ze("invalid", e);
                  break;
                case "option":
                  d = l;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!l.multiple }, d = oe({}, l, { value: void 0 }), Ze("invalid", e);
                  break;
                case "textarea":
                  mt(e, l), d = Ft(e, l), Ze("invalid", e);
                  break;
                default:
                  d = l;
              }
              Qo(a, d), O = d;
              for (g in O) if (O.hasOwnProperty(g)) {
                var D = O[g];
                g === "style" ? Ta(e, D) : g === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, D != null && qo(e, D)) : g === "children" ? typeof D == "string" ? (a !== "textarea" || D !== "") && Xr(e, D) : typeof D == "number" && Xr(e, "" + D) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (s.hasOwnProperty(g) ? D != null && g === "onScroll" && Ze("scroll", e) : D != null && Y(e, g, D, E));
              }
              switch (a) {
                case "input":
                  ht(e), An(e, l, false);
                  break;
                case "textarea":
                  ht(e), Bo(e);
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + Fe(l.value));
                  break;
                case "select":
                  e.multiple = !!l.multiple, g = l.value, g != null ? Tr(e, !!l.multiple, g, false) : l.defaultValue != null && Tr(e, !!l.multiple, l.defaultValue, true);
                  break;
                default:
                  typeof d.onClick == "function" && (e.onclick = Qs);
              }
              switch (a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = true;
                  break e;
                default:
                  l = false;
              }
            }
            l && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return It(r), null;
      case 6:
        if (e && r.stateNode != null) Op(e, r, e.memoizedProps, l);
        else {
          if (typeof l != "string" && r.stateNode === null) throw Error(o(166));
          if (a = ga(Qi.current), ga(gn.current), el(r)) {
            if (l = r.stateNode, a = r.memoizedProps, l[mn] = r, (g = l.nodeValue !== a) && (e = cr, e !== null)) switch (e.tag) {
              case 3:
                Ws(l.nodeValue, a, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== true && Ws(l.nodeValue, a, (e.mode & 1) !== 0);
            }
            g && (r.flags |= 4);
          } else l = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(l), l[mn] = r, r.stateNode = l;
        }
        return It(r), null;
      case 13:
        if (et(ot), l = r.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (tt && dr !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) Nf(), ri(), r.flags |= 98560, g = false;
          else if (g = el(r), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!g) throw Error(o(318));
              if (g = r.memoizedState, g = g !== null ? g.dehydrated : null, !g) throw Error(o(317));
              g[mn] = r;
            } else ri(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            It(r), g = false;
          } else zr !== null && (Lc(zr), zr = null), g = true;
          if (!g) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = a, r) : (l = l !== null, l !== (e !== null && e.memoizedState !== null) && l && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (e === null || (ot.current & 1) !== 0 ? pt === 0 && (pt = 3) : bc())), r.updateQueue !== null && (r.flags |= 4), It(r), null);
      case 4:
        return ii(), Ec(e, r), e === null && Fi(r.stateNode.containerInfo), It(r), null;
      case 10:
        return Ku(r.type._context), It(r), null;
      case 17:
        return Yt(r.type) && Ys(), It(r), null;
      case 19:
        if (et(ot), g = r.memoizedState, g === null) return It(r), null;
        if (l = (r.flags & 128) !== 0, E = g.rendering, E === null) if (l) Xi(g, false);
        else {
          if (pt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = r.child; e !== null; ) {
            if (E = il(e), E !== null) {
              for (r.flags |= 128, Xi(g, false), l = E.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), r.subtreeFlags = 0, l = a, a = r.child; a !== null; ) g = a, e = l, g.flags &= 14680066, E = g.alternate, E === null ? (g.childLanes = 0, g.lanes = e, g.child = null, g.subtreeFlags = 0, g.memoizedProps = null, g.memoizedState = null, g.updateQueue = null, g.dependencies = null, g.stateNode = null) : (g.childLanes = E.childLanes, g.lanes = E.lanes, g.child = E.child, g.subtreeFlags = 0, g.deletions = null, g.memoizedProps = E.memoizedProps, g.memoizedState = E.memoizedState, g.updateQueue = E.updateQueue, g.type = E.type, e = E.dependencies, g.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), a = a.sibling;
              return Ke(ot, ot.current & 1 | 2), r.child;
            }
            e = e.sibling;
          }
          g.tail !== null && Ge() > ci && (r.flags |= 128, l = true, Xi(g, false), r.lanes = 4194304);
        }
        else {
          if (!l) if (e = il(E), e !== null) {
            if (r.flags |= 128, l = true, a = e.updateQueue, a !== null && (r.updateQueue = a, r.flags |= 4), Xi(g, true), g.tail === null && g.tailMode === "hidden" && !E.alternate && !tt) return It(r), null;
          } else 2 * Ge() - g.renderingStartTime > ci && a !== 1073741824 && (r.flags |= 128, l = true, Xi(g, false), r.lanes = 4194304);
          g.isBackwards ? (E.sibling = r.child, r.child = E) : (a = g.last, a !== null ? a.sibling = E : r.child = E, g.last = E);
        }
        return g.tail !== null ? (r = g.tail, g.rendering = r, g.tail = r.sibling, g.renderingStartTime = Ge(), r.sibling = null, a = ot.current, Ke(ot, l ? a & 1 | 2 : a & 1), r) : (It(r), null);
      case 22:
      case 23:
        return Nc(), l = r.memoizedState !== null, e !== null && e.memoizedState !== null !== l && (r.flags |= 8192), l && (r.mode & 1) !== 0 ? (fr & 1073741824) !== 0 && (It(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : It(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, r.tag));
  }
  __name(rv, "rv");
  function nv(e, r) {
    switch (qu(r), r.tag) {
      case 1:
        return Yt(r.type) && Ys(), e = r.flags, e & 65536 ? (r.flags = e & -65537 | 128, r) : null;
      case 3:
        return ii(), et(Gt), et(Rt), oc(), e = r.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (r.flags = e & -65537 | 128, r) : null;
      case 5:
        return rc(r), null;
      case 13:
        if (et(ot), e = r.memoizedState, e !== null && e.dehydrated !== null) {
          if (r.alternate === null) throw Error(o(340));
          ri();
        }
        return e = r.flags, e & 65536 ? (r.flags = e & -65537 | 128, r) : null;
      case 19:
        return et(ot), null;
      case 4:
        return ii(), null;
      case 10:
        return Ku(r.type._context), null;
      case 22:
      case 23:
        return Nc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  __name(nv, "nv");
  var ml = false, Tt = false, ov = typeof WeakSet == "function" ? WeakSet : Set, pe = null;
  function li(e, r) {
    var a = e.ref;
    if (a !== null) if (typeof a == "function") try {
      a(null);
    } catch (l) {
      st(e, r, l);
    }
    else a.current = null;
  }
  __name(li, "li");
  function _c(e, r, a) {
    try {
      a();
    } catch (l) {
      st(e, r, l);
    }
  }
  __name(_c, "_c");
  var Lp = false;
  function av(e, r) {
    if (Nu = ur, e = ff(), Ru(e)) {
      if ("selectionStart" in e) var a = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        a = (a = e.ownerDocument) && a.defaultView || window;
        var l = a.getSelection && a.getSelection();
        if (l && l.rangeCount !== 0) {
          a = l.anchorNode;
          var d = l.anchorOffset, g = l.focusNode;
          l = l.focusOffset;
          try {
            a.nodeType, g.nodeType;
          } catch {
            a = null;
            break e;
          }
          var E = 0, O = -1, D = -1, W = 0, te = 0, re = e, ee = null;
          t: for (; ; ) {
            for (var de; re !== a || d !== 0 && re.nodeType !== 3 || (O = E + d), re !== g || l !== 0 && re.nodeType !== 3 || (D = E + l), re.nodeType === 3 && (E += re.nodeValue.length), (de = re.firstChild) !== null; ) ee = re, re = de;
            for (; ; ) {
              if (re === e) break t;
              if (ee === a && ++W === d && (O = E), ee === g && ++te === l && (D = E), (de = re.nextSibling) !== null) break;
              re = ee, ee = re.parentNode;
            }
            re = de;
          }
          a = O === -1 || D === -1 ? null : { start: O, end: D };
        } else a = null;
      }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (bu = { focusedElem: e, selectionRange: a }, ur = false, pe = r; pe !== null; ) if (r = pe, e = r.child, (r.subtreeFlags & 1028) !== 0 && e !== null) e.return = r, pe = e;
    else for (; pe !== null; ) {
      r = pe;
      try {
        var he = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (he !== null) {
              var me = he.memoizedProps, lt = he.memoizedState, F = r.stateNode, N = F.getSnapshotBeforeUpdate(r.elementType === r.type ? me : Hr(r.type, me), lt);
              F.__reactInternalSnapshotBeforeUpdate = N;
            }
            break;
          case 3:
            var B = r.stateNode.containerInfo;
            B.nodeType === 1 ? B.textContent = "" : B.nodeType === 9 && B.documentElement && B.removeChild(B.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(o(163));
        }
      } catch (ie) {
        st(r, r.return, ie);
      }
      if (e = r.sibling, e !== null) {
        e.return = r.return, pe = e;
        break;
      }
      pe = r.return;
    }
    return he = Lp, Lp = false, he;
  }
  __name(av, "av");
  function Zi(e, r, a) {
    var l = r.updateQueue;
    if (l = l !== null ? l.lastEffect : null, l !== null) {
      var d = l = l.next;
      do {
        if ((d.tag & e) === e) {
          var g = d.destroy;
          d.destroy = void 0, g !== void 0 && _c(r, a, g);
        }
        d = d.next;
      } while (d !== l);
    }
  }
  __name(Zi, "Zi");
  function gl(e, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var a = r = r.next;
      do {
        if ((a.tag & e) === e) {
          var l = a.create;
          a.destroy = l();
        }
        a = a.next;
      } while (a !== r);
    }
  }
  __name(gl, "gl");
  function kc(e) {
    var r = e.ref;
    if (r !== null) {
      var a = e.stateNode;
      switch (e.tag) {
        case 5:
          e = a;
          break;
        default:
          e = a;
      }
      typeof r == "function" ? r(e) : r.current = e;
    }
  }
  __name(kc, "kc");
  function Dp(e) {
    var r = e.alternate;
    r !== null && (e.alternate = null, Dp(r)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (r = e.stateNode, r !== null && (delete r[mn], delete r[Hi], delete r[zu], delete r[zy], delete r[Hy])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  __name(Dp, "Dp");
  function Np(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  __name(Np, "Np");
  function bp(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Np(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  __name(bp, "bp");
  function Pc(e, r, a) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, r ? a.nodeType === 8 ? a.parentNode.insertBefore(e, r) : a.insertBefore(e, r) : (a.nodeType === 8 ? (r = a.parentNode, r.insertBefore(e, a)) : (r = a, r.appendChild(e)), a = a._reactRootContainer, a != null || r.onclick !== null || (r.onclick = Qs));
    else if (l !== 4 && (e = e.child, e !== null)) for (Pc(e, r, a), e = e.sibling; e !== null; ) Pc(e, r, a), e = e.sibling;
  }
  __name(Pc, "Pc");
  function jc(e, r, a) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, r ? a.insertBefore(e, r) : a.appendChild(e);
    else if (l !== 4 && (e = e.child, e !== null)) for (jc(e, r, a), e = e.sibling; e !== null; ) jc(e, r, a), e = e.sibling;
  }
  __name(jc, "jc");
  var Ct = null, Br = false;
  function Po(e, r, a) {
    for (a = a.child; a !== null; ) Up(e, r, a), a = a.sibling;
  }
  __name(Po, "Po");
  function Up(e, r, a) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function") try {
      Dt.onCommitFiberUnmount(sr, a);
    } catch {
    }
    switch (a.tag) {
      case 5:
        Tt || li(a, r);
      case 6:
        var l = Ct, d = Br;
        Ct = null, Po(e, r, a), Ct = l, Br = d, Ct !== null && (Br ? (e = Ct, a = a.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(a) : e.removeChild(a)) : Ct.removeChild(a.stateNode));
        break;
      case 18:
        Ct !== null && (Br ? (e = Ct, a = a.stateNode, e.nodeType === 8 ? Fu(e.parentNode, a) : e.nodeType === 1 && Fu(e, a), fn(e)) : Fu(Ct, a.stateNode));
        break;
      case 4:
        l = Ct, d = Br, Ct = a.stateNode.containerInfo, Br = true, Po(e, r, a), Ct = l, Br = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Tt && (l = a.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
          d = l = l.next;
          do {
            var g = d, E = g.destroy;
            g = g.tag, E !== void 0 && ((g & 2) !== 0 || (g & 4) !== 0) && _c(a, r, E), d = d.next;
          } while (d !== l);
        }
        Po(e, r, a);
        break;
      case 1:
        if (!Tt && (li(a, r), l = a.stateNode, typeof l.componentWillUnmount == "function")) try {
          l.props = a.memoizedProps, l.state = a.memoizedState, l.componentWillUnmount();
        } catch (O) {
          st(a, r, O);
        }
        Po(e, r, a);
        break;
      case 21:
        Po(e, r, a);
        break;
      case 22:
        a.mode & 1 ? (Tt = (l = Tt) || a.memoizedState !== null, Po(e, r, a), Tt = l) : Po(e, r, a);
        break;
      default:
        Po(e, r, a);
    }
  }
  __name(Up, "Up");
  function Mp(e) {
    var r = e.updateQueue;
    if (r !== null) {
      e.updateQueue = null;
      var a = e.stateNode;
      a === null && (a = e.stateNode = new ov()), r.forEach(function(l) {
        var d = hv.bind(null, e, l);
        a.has(l) || (a.add(l), l.then(d, d));
      });
    }
  }
  __name(Mp, "Mp");
  function Vr(e, r) {
    var a = r.deletions;
    if (a !== null) for (var l = 0; l < a.length; l++) {
      var d = a[l];
      try {
        var g = e, E = r, O = E;
        e: for (; O !== null; ) {
          switch (O.tag) {
            case 5:
              Ct = O.stateNode, Br = false;
              break e;
            case 3:
              Ct = O.stateNode.containerInfo, Br = true;
              break e;
            case 4:
              Ct = O.stateNode.containerInfo, Br = true;
              break e;
          }
          O = O.return;
        }
        if (Ct === null) throw Error(o(160));
        Up(g, E, d), Ct = null, Br = false;
        var D = d.alternate;
        D !== null && (D.return = null), d.return = null;
      } catch (W) {
        st(d, r, W);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Fp(r, e), r = r.sibling;
  }
  __name(Vr, "Vr");
  function Fp(e, r) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Vr(r, e), vn(e), l & 4) {
          try {
            Zi(3, e, e.return), gl(3, e);
          } catch (me) {
            st(e, e.return, me);
          }
          try {
            Zi(5, e, e.return);
          } catch (me) {
            st(e, e.return, me);
          }
        }
        break;
      case 1:
        Vr(r, e), vn(e), l & 512 && a !== null && li(a, a.return);
        break;
      case 5:
        if (Vr(r, e), vn(e), l & 512 && a !== null && li(a, a.return), e.flags & 32) {
          var d = e.stateNode;
          try {
            Xr(d, "");
          } catch (me) {
            st(e, e.return, me);
          }
        }
        if (l & 4 && (d = e.stateNode, d != null)) {
          var g = e.memoizedProps, E = a !== null ? a.memoizedProps : g, O = e.type, D = e.updateQueue;
          if (e.updateQueue = null, D !== null) try {
            O === "input" && g.type === "radio" && g.name != null && Tn(d, g), Go(O, E);
            var W = Go(O, g);
            for (E = 0; E < D.length; E += 2) {
              var te = D[E], re = D[E + 1];
              te === "style" ? Ta(d, re) : te === "dangerouslySetInnerHTML" ? qo(d, re) : te === "children" ? Xr(d, re) : Y(d, te, re, W);
            }
            switch (O) {
              case "input":
                zo(d, g);
                break;
              case "textarea":
                Ho(d, g);
                break;
              case "select":
                var ee = d._wrapperState.wasMultiple;
                d._wrapperState.wasMultiple = !!g.multiple;
                var de = g.value;
                de != null ? Tr(d, !!g.multiple, de, false) : ee !== !!g.multiple && (g.defaultValue != null ? Tr(d, !!g.multiple, g.defaultValue, true) : Tr(d, !!g.multiple, g.multiple ? [] : "", false));
            }
            d[Hi] = g;
          } catch (me) {
            st(e, e.return, me);
          }
        }
        break;
      case 6:
        if (Vr(r, e), vn(e), l & 4) {
          if (e.stateNode === null) throw Error(o(162));
          d = e.stateNode, g = e.memoizedProps;
          try {
            d.nodeValue = g;
          } catch (me) {
            st(e, e.return, me);
          }
        }
        break;
      case 3:
        if (Vr(r, e), vn(e), l & 4 && a !== null && a.memoizedState.isDehydrated) try {
          fn(r.containerInfo);
        } catch (me) {
          st(e, e.return, me);
        }
        break;
      case 4:
        Vr(r, e), vn(e);
        break;
      case 13:
        Vr(r, e), vn(e), d = e.child, d.flags & 8192 && (g = d.memoizedState !== null, d.stateNode.isHidden = g, !g || d.alternate !== null && d.alternate.memoizedState !== null || (Ic = Ge())), l & 4 && Mp(e);
        break;
      case 22:
        if (te = a !== null && a.memoizedState !== null, e.mode & 1 ? (Tt = (W = Tt) || te, Vr(r, e), Tt = W) : Vr(r, e), vn(e), l & 8192) {
          if (W = e.memoizedState !== null, (e.stateNode.isHidden = W) && !te && (e.mode & 1) !== 0) for (pe = e, te = e.child; te !== null; ) {
            for (re = pe = te; pe !== null; ) {
              switch (ee = pe, de = ee.child, ee.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Zi(4, ee, ee.return);
                  break;
                case 1:
                  li(ee, ee.return);
                  var he = ee.stateNode;
                  if (typeof he.componentWillUnmount == "function") {
                    l = ee, a = ee.return;
                    try {
                      r = l, he.props = r.memoizedProps, he.state = r.memoizedState, he.componentWillUnmount();
                    } catch (me) {
                      st(l, a, me);
                    }
                  }
                  break;
                case 5:
                  li(ee, ee.return);
                  break;
                case 22:
                  if (ee.memoizedState !== null) {
                    Bp(re);
                    continue;
                  }
              }
              de !== null ? (de.return = ee, pe = de) : Bp(re);
            }
            te = te.sibling;
          }
          e: for (te = null, re = e; ; ) {
            if (re.tag === 5) {
              if (te === null) {
                te = re;
                try {
                  d = re.stateNode, W ? (g = d.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none") : (O = re.stateNode, D = re.memoizedProps.style, E = D != null && D.hasOwnProperty("display") ? D.display : null, O.style.display = Ln("display", E));
                } catch (me) {
                  st(e, e.return, me);
                }
              }
            } else if (re.tag === 6) {
              if (te === null) try {
                re.stateNode.nodeValue = W ? "" : re.memoizedProps;
              } catch (me) {
                st(e, e.return, me);
              }
            } else if ((re.tag !== 22 && re.tag !== 23 || re.memoizedState === null || re === e) && re.child !== null) {
              re.child.return = re, re = re.child;
              continue;
            }
            if (re === e) break e;
            for (; re.sibling === null; ) {
              if (re.return === null || re.return === e) break e;
              te === re && (te = null), re = re.return;
            }
            te === re && (te = null), re.sibling.return = re.return, re = re.sibling;
          }
        }
        break;
      case 19:
        Vr(r, e), vn(e), l & 4 && Mp(e);
        break;
      case 21:
        break;
      default:
        Vr(r, e), vn(e);
    }
  }
  __name(Fp, "Fp");
  function vn(e) {
    var r = e.flags;
    if (r & 2) {
      try {
        e: {
          for (var a = e.return; a !== null; ) {
            if (Np(a)) {
              var l = a;
              break e;
            }
            a = a.return;
          }
          throw Error(o(160));
        }
        switch (l.tag) {
          case 5:
            var d = l.stateNode;
            l.flags & 32 && (Xr(d, ""), l.flags &= -33);
            var g = bp(e);
            jc(e, g, d);
            break;
          case 3:
          case 4:
            var E = l.stateNode.containerInfo, O = bp(e);
            Pc(e, O, E);
            break;
          default:
            throw Error(o(161));
        }
      } catch (D) {
        st(e, e.return, D);
      }
      e.flags &= -3;
    }
    r & 4096 && (e.flags &= -4097);
  }
  __name(vn, "vn");
  function iv(e, r, a) {
    pe = e, zp(e);
  }
  __name(iv, "iv");
  function zp(e, r, a) {
    for (var l = (e.mode & 1) !== 0; pe !== null; ) {
      var d = pe, g = d.child;
      if (d.tag === 22 && l) {
        var E = d.memoizedState !== null || ml;
        if (!E) {
          var O = d.alternate, D = O !== null && O.memoizedState !== null || Tt;
          O = ml;
          var W = Tt;
          if (ml = E, (Tt = D) && !W) for (pe = d; pe !== null; ) E = pe, D = E.child, E.tag === 22 && E.memoizedState !== null ? Vp(d) : D !== null ? (D.return = E, pe = D) : Vp(d);
          for (; g !== null; ) pe = g, zp(g), g = g.sibling;
          pe = d, ml = O, Tt = W;
        }
        Hp(e);
      } else (d.subtreeFlags & 8772) !== 0 && g !== null ? (g.return = d, pe = g) : Hp(e);
    }
  }
  __name(zp, "zp");
  function Hp(e) {
    for (; pe !== null; ) {
      var r = pe;
      if ((r.flags & 8772) !== 0) {
        var a = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Tt || gl(5, r);
              break;
            case 1:
              var l = r.stateNode;
              if (r.flags & 4 && !Tt) if (a === null) l.componentDidMount();
              else {
                var d = r.elementType === r.type ? a.memoizedProps : Hr(r.type, a.memoizedProps);
                l.componentDidUpdate(d, a.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
              }
              var g = r.updateQueue;
              g !== null && Bf(r, g, l);
              break;
            case 3:
              var E = r.updateQueue;
              if (E !== null) {
                if (a = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    a = r.child.stateNode;
                    break;
                  case 1:
                    a = r.child.stateNode;
                }
                Bf(r, E, a);
              }
              break;
            case 5:
              var O = r.stateNode;
              if (a === null && r.flags & 4) {
                a = O;
                var D = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    D.autoFocus && a.focus();
                    break;
                  case "img":
                    D.src && (a.src = D.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var W = r.alternate;
                if (W !== null) {
                  var te = W.memoizedState;
                  if (te !== null) {
                    var re = te.dehydrated;
                    re !== null && fn(re);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(o(163));
          }
          Tt || r.flags & 512 && kc(r);
        } catch (ee) {
          st(r, r.return, ee);
        }
      }
      if (r === e) {
        pe = null;
        break;
      }
      if (a = r.sibling, a !== null) {
        a.return = r.return, pe = a;
        break;
      }
      pe = r.return;
    }
  }
  __name(Hp, "Hp");
  function Bp(e) {
    for (; pe !== null; ) {
      var r = pe;
      if (r === e) {
        pe = null;
        break;
      }
      var a = r.sibling;
      if (a !== null) {
        a.return = r.return, pe = a;
        break;
      }
      pe = r.return;
    }
  }
  __name(Bp, "Bp");
  function Vp(e) {
    for (; pe !== null; ) {
      var r = pe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var a = r.return;
            try {
              gl(4, r);
            } catch (D) {
              st(r, a, D);
            }
            break;
          case 1:
            var l = r.stateNode;
            if (typeof l.componentDidMount == "function") {
              var d = r.return;
              try {
                l.componentDidMount();
              } catch (D) {
                st(r, d, D);
              }
            }
            var g = r.return;
            try {
              kc(r);
            } catch (D) {
              st(r, g, D);
            }
            break;
          case 5:
            var E = r.return;
            try {
              kc(r);
            } catch (D) {
              st(r, E, D);
            }
        }
      } catch (D) {
        st(r, r.return, D);
      }
      if (r === e) {
        pe = null;
        break;
      }
      var O = r.sibling;
      if (O !== null) {
        O.return = r.return, pe = O;
        break;
      }
      pe = r.return;
    }
  }
  __name(Vp, "Vp");
  var sv = Math.ceil, yl = G.ReactCurrentDispatcher, Rc = G.ReactCurrentOwner, Er = G.ReactCurrentBatchConfig, Be = 0, yt = null, ut = null, Et = 0, fr = 0, ui = So(0), pt = 0, es = null, va = 0, vl = 0, $c = 0, ts = null, Kt = null, Ic = 0, ci = 1 / 0, eo = null, wl = false, Tc = null, jo = null, xl = false, Ro = null, Sl = 0, rs = 0, Ac = null, Cl = -1, El = 0;
  function Ut() {
    return (Be & 6) !== 0 ? Ge() : Cl !== -1 ? Cl : Cl = Ge();
  }
  __name(Ut, "Ut");
  function $o(e) {
    return (e.mode & 1) === 0 ? 1 : (Be & 2) !== 0 && Et !== 0 ? Et & -Et : Vy.transition !== null ? (El === 0 && (El = A()), El) : (e = le, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ji(e.type)), e);
  }
  __name($o, "$o");
  function qr(e, r, a, l) {
    if (50 < rs) throw rs = 0, Ac = null, Error(o(185));
    M(e, a, l), ((Be & 2) === 0 || e !== yt) && (e === yt && ((Be & 2) === 0 && (vl |= a), pt === 4 && Io(e, Et)), Xt(e, l), a === 1 && Be === 0 && (r.mode & 1) === 0 && (ci = Ge() + 500, Ks && Eo()));
  }
  __name(qr, "qr");
  function Xt(e, r) {
    var a = e.callbackNode;
    x(e, r);
    var l = un(e, e === yt ? Et : 0);
    if (l === 0) a !== null && Zo(a), e.callbackNode = null, e.callbackPriority = 0;
    else if (r = l & -l, e.callbackPriority !== r) {
      if (a != null && Zo(a), r === 1) e.tag === 0 ? By(Wp.bind(null, e)) : Tf(Wp.bind(null, e)), My(function() {
        (Be & 6) === 0 && Eo();
      }), a = null;
      else {
        switch (Ee(l)) {
          case 1:
            a = po;
            break;
          case 4:
            a = ho;
            break;
          case 16:
            a = sn;
            break;
          case 536870912:
            a = Dr;
            break;
          default:
            a = sn;
        }
        a = eh(a, qp.bind(null, e));
      }
      e.callbackPriority = r, e.callbackNode = a;
    }
  }
  __name(Xt, "Xt");
  function qp(e, r) {
    if (Cl = -1, El = 0, (Be & 6) !== 0) throw Error(o(327));
    var a = e.callbackNode;
    if (di() && e.callbackNode !== a) return null;
    var l = un(e, e === yt ? Et : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || r) r = _l(e, l);
    else {
      r = l;
      var d = Be;
      Be |= 2;
      var g = Gp();
      (yt !== e || Et !== r) && (eo = null, ci = Ge() + 500, xa(e, r));
      do
        try {
          cv();
          break;
        } catch (O) {
          Qp(e, O);
        }
      while (true);
      Ju(), yl.current = g, Be = d, ut !== null ? r = 0 : (yt = null, Et = 0, r = pt);
    }
    if (r !== 0) {
      if (r === 2 && (d = k(e), d !== 0 && (l = d, r = Oc(e, d))), r === 1) throw a = es, xa(e, 0), Io(e, l), Xt(e, Ge()), a;
      if (r === 6) Io(e, l);
      else {
        if (d = e.current.alternate, (l & 30) === 0 && !lv(d) && (r = _l(e, l), r === 2 && (g = k(e), g !== 0 && (l = g, r = Oc(e, g))), r === 1)) throw a = es, xa(e, 0), Io(e, l), Xt(e, Ge()), a;
        switch (e.finishedWork = d, e.finishedLanes = l, r) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Sa(e, Kt, eo);
            break;
          case 3:
            if (Io(e, l), (l & 130023424) === l && (r = Ic + 500 - Ge(), 10 < r)) {
              if (un(e, 0) !== 0) break;
              if (d = e.suspendedLanes, (d & l) !== l) {
                Ut(), e.pingedLanes |= e.suspendedLanes & d;
                break;
              }
              e.timeoutHandle = Mu(Sa.bind(null, e, Kt, eo), r);
              break;
            }
            Sa(e, Kt, eo);
            break;
          case 4:
            if (Io(e, l), (l & 4194240) === l) break;
            for (r = e.eventTimes, d = -1; 0 < l; ) {
              var E = 31 - dt(l);
              g = 1 << E, E = r[E], E > d && (d = E), l &= ~g;
            }
            if (l = d, l = Ge() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * sv(l / 1960)) - l, 10 < l) {
              e.timeoutHandle = Mu(Sa.bind(null, e, Kt, eo), l);
              break;
            }
            Sa(e, Kt, eo);
            break;
          case 5:
            Sa(e, Kt, eo);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Xt(e, Ge()), e.callbackNode === a ? qp.bind(null, e) : null;
  }
  __name(qp, "qp");
  function Oc(e, r) {
    var a = ts;
    return e.current.memoizedState.isDehydrated && (xa(e, r).flags |= 256), e = _l(e, r), e !== 2 && (r = Kt, Kt = a, r !== null && Lc(r)), e;
  }
  __name(Oc, "Oc");
  function Lc(e) {
    Kt === null ? Kt = e : Kt.push.apply(Kt, e);
  }
  __name(Lc, "Lc");
  function lv(e) {
    for (var r = e; ; ) {
      if (r.flags & 16384) {
        var a = r.updateQueue;
        if (a !== null && (a = a.stores, a !== null)) for (var l = 0; l < a.length; l++) {
          var d = a[l], g = d.getSnapshot;
          d = d.value;
          try {
            if (!Fr(g(), d)) return false;
          } catch {
            return false;
          }
        }
      }
      if (a = r.child, r.subtreeFlags & 16384 && a !== null) a.return = r, r = a;
      else {
        if (r === e) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === e) return true;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return true;
  }
  __name(lv, "lv");
  function Io(e, r) {
    for (r &= ~$c, r &= ~vl, e.suspendedLanes |= r, e.pingedLanes &= ~r, e = e.expirationTimes; 0 < r; ) {
      var a = 31 - dt(r), l = 1 << a;
      e[a] = -1, r &= ~l;
    }
  }
  __name(Io, "Io");
  function Wp(e) {
    if ((Be & 6) !== 0) throw Error(o(327));
    di();
    var r = un(e, 0);
    if ((r & 1) === 0) return Xt(e, Ge()), null;
    var a = _l(e, r);
    if (e.tag !== 0 && a === 2) {
      var l = k(e);
      l !== 0 && (r = l, a = Oc(e, l));
    }
    if (a === 1) throw a = es, xa(e, 0), Io(e, r), Xt(e, Ge()), a;
    if (a === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = r, Sa(e, Kt, eo), Xt(e, Ge()), null;
  }
  __name(Wp, "Wp");
  function Dc(e, r) {
    var a = Be;
    Be |= 1;
    try {
      return e(r);
    } finally {
      Be = a, Be === 0 && (ci = Ge() + 500, Ks && Eo());
    }
  }
  __name(Dc, "Dc");
  function wa(e) {
    Ro !== null && Ro.tag === 0 && (Be & 6) === 0 && di();
    var r = Be;
    Be |= 1;
    var a = Er.transition, l = le;
    try {
      if (Er.transition = null, le = 1, e) return e();
    } finally {
      le = l, Er.transition = a, Be = r, (Be & 6) === 0 && Eo();
    }
  }
  __name(wa, "wa");
  function Nc() {
    fr = ui.current, et(ui);
  }
  __name(Nc, "Nc");
  function xa(e, r) {
    e.finishedWork = null, e.finishedLanes = 0;
    var a = e.timeoutHandle;
    if (a !== -1 && (e.timeoutHandle = -1, Uy(a)), ut !== null) for (a = ut.return; a !== null; ) {
      var l = a;
      switch (qu(l), l.tag) {
        case 1:
          l = l.type.childContextTypes, l != null && Ys();
          break;
        case 3:
          ii(), et(Gt), et(Rt), oc();
          break;
        case 5:
          rc(l);
          break;
        case 4:
          ii();
          break;
        case 13:
          et(ot);
          break;
        case 19:
          et(ot);
          break;
        case 10:
          Ku(l.type._context);
          break;
        case 22:
        case 23:
          Nc();
      }
      a = a.return;
    }
    if (yt = e, ut = e = To(e.current, null), Et = fr = r, pt = 0, es = null, $c = vl = va = 0, Kt = ts = null, ma !== null) {
      for (r = 0; r < ma.length; r++) if (a = ma[r], l = a.interleaved, l !== null) {
        a.interleaved = null;
        var d = l.next, g = a.pending;
        if (g !== null) {
          var E = g.next;
          g.next = d, l.next = E;
        }
        a.pending = l;
      }
      ma = null;
    }
    return e;
  }
  __name(xa, "xa");
  function Qp(e, r) {
    do {
      var a = ut;
      try {
        if (Ju(), sl.current = dl, ll) {
          for (var l = at.memoizedState; l !== null; ) {
            var d = l.queue;
            d !== null && (d.pending = null), l = l.next;
          }
          ll = false;
        }
        if (ya = 0, gt = ft = at = null, Gi = false, Yi = 0, Rc.current = null, a === null || a.return === null) {
          pt = 1, es = r, ut = null;
          break;
        }
        e: {
          var g = e, E = a.return, O = a, D = r;
          if (r = Et, O.flags |= 32768, D !== null && typeof D == "object" && typeof D.then == "function") {
            var W = D, te = O, re = te.tag;
            if ((te.mode & 1) === 0 && (re === 0 || re === 11 || re === 15)) {
              var ee = te.alternate;
              ee ? (te.updateQueue = ee.updateQueue, te.memoizedState = ee.memoizedState, te.lanes = ee.lanes) : (te.updateQueue = null, te.memoizedState = null);
            }
            var de = vp(E);
            if (de !== null) {
              de.flags &= -257, wp(de, E, O, g, r), de.mode & 1 && yp(g, W, r), r = de, D = W;
              var he = r.updateQueue;
              if (he === null) {
                var me = /* @__PURE__ */ new Set();
                me.add(D), r.updateQueue = me;
              } else he.add(D);
              break e;
            } else {
              if ((r & 1) === 0) {
                yp(g, W, r), bc();
                break e;
              }
              D = Error(o(426));
            }
          } else if (tt && O.mode & 1) {
            var lt = vp(E);
            if (lt !== null) {
              (lt.flags & 65536) === 0 && (lt.flags |= 256), wp(lt, E, O, g, r), Gu(si(D, O));
              break e;
            }
          }
          g = D = si(D, O), pt !== 4 && (pt = 2), ts === null ? ts = [g] : ts.push(g), g = E;
          do {
            switch (g.tag) {
              case 3:
                g.flags |= 65536, r &= -r, g.lanes |= r;
                var F = mp(g, D, r);
                Hf(g, F);
                break e;
              case 1:
                O = D;
                var N = g.type, B = g.stateNode;
                if ((g.flags & 128) === 0 && (typeof N.getDerivedStateFromError == "function" || B !== null && typeof B.componentDidCatch == "function" && (jo === null || !jo.has(B)))) {
                  g.flags |= 65536, r &= -r, g.lanes |= r;
                  var ie = gp(g, O, r);
                  Hf(g, ie);
                  break e;
                }
            }
            g = g.return;
          } while (g !== null);
        }
        Jp(a);
      } catch (ge) {
        r = ge, ut === a && a !== null && (ut = a = a.return);
        continue;
      }
      break;
    } while (true);
  }
  __name(Qp, "Qp");
  function Gp() {
    var e = yl.current;
    return yl.current = dl, e === null ? dl : e;
  }
  __name(Gp, "Gp");
  function bc() {
    (pt === 0 || pt === 3 || pt === 2) && (pt = 4), yt === null || (va & 268435455) === 0 && (vl & 268435455) === 0 || Io(yt, Et);
  }
  __name(bc, "bc");
  function _l(e, r) {
    var a = Be;
    Be |= 2;
    var l = Gp();
    (yt !== e || Et !== r) && (eo = null, xa(e, r));
    do
      try {
        uv();
        break;
      } catch (d) {
        Qp(e, d);
      }
    while (true);
    if (Ju(), Be = a, yl.current = l, ut !== null) throw Error(o(261));
    return yt = null, Et = 0, pt;
  }
  __name(_l, "_l");
  function uv() {
    for (; ut !== null; ) Yp(ut);
  }
  __name(uv, "uv");
  function cv() {
    for (; ut !== null && !Da(); ) Yp(ut);
  }
  __name(cv, "cv");
  function Yp(e) {
    var r = Zp(e.alternate, e, fr);
    e.memoizedProps = e.pendingProps, r === null ? Jp(e) : ut = r, Rc.current = null;
  }
  __name(Yp, "Yp");
  function Jp(e) {
    var r = e;
    do {
      var a = r.alternate;
      if (e = r.return, (r.flags & 32768) === 0) {
        if (a = rv(a, r, fr), a !== null) {
          ut = a;
          return;
        }
      } else {
        if (a = nv(a, r), a !== null) {
          a.flags &= 32767, ut = a;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          pt = 6, ut = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        ut = r;
        return;
      }
      ut = r = e;
    } while (r !== null);
    pt === 0 && (pt = 5);
  }
  __name(Jp, "Jp");
  function Sa(e, r, a) {
    var l = le, d = Er.transition;
    try {
      Er.transition = null, le = 1, dv(e, r, a, l);
    } finally {
      Er.transition = d, le = l;
    }
    return null;
  }
  __name(Sa, "Sa");
  function dv(e, r, a, l) {
    do
      di();
    while (Ro !== null);
    if ((Be & 6) !== 0) throw Error(o(327));
    a = e.finishedWork;
    var d = e.finishedLanes;
    if (a === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, a === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var g = a.lanes | a.childLanes;
    if (K(e, g), e === yt && (ut = yt = null, Et = 0), (a.subtreeFlags & 2064) === 0 && (a.flags & 2064) === 0 || xl || (xl = true, eh(sn, function() {
      return di(), null;
    })), g = (a.flags & 15990) !== 0, (a.subtreeFlags & 15990) !== 0 || g) {
      g = Er.transition, Er.transition = null;
      var E = le;
      le = 1;
      var O = Be;
      Be |= 4, Rc.current = null, av(e, a), Fp(a, e), Ty(bu), ur = !!Nu, bu = Nu = null, e.current = a, iv(a), Na(), Be = O, le = E, Er.transition = g;
    } else e.current = a;
    if (xl && (xl = false, Ro = e, Sl = d), g = e.pendingLanes, g === 0 && (jo = null), zn(a.stateNode), Xt(e, Ge()), r !== null) for (l = e.onRecoverableError, a = 0; a < r.length; a++) d = r[a], l(d.value, { componentStack: d.stack, digest: d.digest });
    if (wl) throw wl = false, e = Tc, Tc = null, e;
    return (Sl & 1) !== 0 && e.tag !== 0 && di(), g = e.pendingLanes, (g & 1) !== 0 ? e === Ac ? rs++ : (rs = 0, Ac = e) : rs = 0, Eo(), null;
  }
  __name(dv, "dv");
  function di() {
    if (Ro !== null) {
      var e = Ee(Sl), r = Er.transition, a = le;
      try {
        if (Er.transition = null, le = 16 > e ? 16 : e, Ro === null) var l = false;
        else {
          if (e = Ro, Ro = null, Sl = 0, (Be & 6) !== 0) throw Error(o(331));
          var d = Be;
          for (Be |= 4, pe = e.current; pe !== null; ) {
            var g = pe, E = g.child;
            if ((pe.flags & 16) !== 0) {
              var O = g.deletions;
              if (O !== null) {
                for (var D = 0; D < O.length; D++) {
                  var W = O[D];
                  for (pe = W; pe !== null; ) {
                    var te = pe;
                    switch (te.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Zi(8, te, g);
                    }
                    var re = te.child;
                    if (re !== null) re.return = te, pe = re;
                    else for (; pe !== null; ) {
                      te = pe;
                      var ee = te.sibling, de = te.return;
                      if (Dp(te), te === W) {
                        pe = null;
                        break;
                      }
                      if (ee !== null) {
                        ee.return = de, pe = ee;
                        break;
                      }
                      pe = de;
                    }
                  }
                }
                var he = g.alternate;
                if (he !== null) {
                  var me = he.child;
                  if (me !== null) {
                    he.child = null;
                    do {
                      var lt = me.sibling;
                      me.sibling = null, me = lt;
                    } while (me !== null);
                  }
                }
                pe = g;
              }
            }
            if ((g.subtreeFlags & 2064) !== 0 && E !== null) E.return = g, pe = E;
            else e: for (; pe !== null; ) {
              if (g = pe, (g.flags & 2048) !== 0) switch (g.tag) {
                case 0:
                case 11:
                case 15:
                  Zi(9, g, g.return);
              }
              var F = g.sibling;
              if (F !== null) {
                F.return = g.return, pe = F;
                break e;
              }
              pe = g.return;
            }
          }
          var N = e.current;
          for (pe = N; pe !== null; ) {
            E = pe;
            var B = E.child;
            if ((E.subtreeFlags & 2064) !== 0 && B !== null) B.return = E, pe = B;
            else e: for (E = N; pe !== null; ) {
              if (O = pe, (O.flags & 2048) !== 0) try {
                switch (O.tag) {
                  case 0:
                  case 11:
                  case 15:
                    gl(9, O);
                }
              } catch (ge) {
                st(O, O.return, ge);
              }
              if (O === E) {
                pe = null;
                break e;
              }
              var ie = O.sibling;
              if (ie !== null) {
                ie.return = O.return, pe = ie;
                break e;
              }
              pe = O.return;
            }
          }
          if (Be = d, Eo(), Dt && typeof Dt.onPostCommitFiberRoot == "function") try {
            Dt.onPostCommitFiberRoot(sr, e);
          } catch {
          }
          l = true;
        }
        return l;
      } finally {
        le = a, Er.transition = r;
      }
    }
    return false;
  }
  __name(di, "di");
  function Kp(e, r, a) {
    r = si(a, r), r = mp(e, r, 1), e = ko(e, r, 1), r = Ut(), e !== null && (M(e, 1, r), Xt(e, r));
  }
  __name(Kp, "Kp");
  function st(e, r, a) {
    if (e.tag === 3) Kp(e, e, a);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Kp(r, e, a);
        break;
      } else if (r.tag === 1) {
        var l = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (jo === null || !jo.has(l))) {
          e = si(a, e), e = gp(r, e, 1), r = ko(r, e, 1), e = Ut(), r !== null && (M(r, 1, e), Xt(r, e));
          break;
        }
      }
      r = r.return;
    }
  }
  __name(st, "st");
  function fv(e, r, a) {
    var l = e.pingCache;
    l !== null && l.delete(r), r = Ut(), e.pingedLanes |= e.suspendedLanes & a, yt === e && (Et & a) === a && (pt === 4 || pt === 3 && (Et & 130023424) === Et && 500 > Ge() - Ic ? xa(e, 0) : $c |= a), Xt(e, r);
  }
  __name(fv, "fv");
  function Xp(e, r) {
    r === 0 && ((e.mode & 1) === 0 ? r = 1 : (r = Hn, Hn <<= 1, (Hn & 130023424) === 0 && (Hn = 4194304)));
    var a = Ut();
    e = Kn(e, r), e !== null && (M(e, r, a), Xt(e, a));
  }
  __name(Xp, "Xp");
  function pv(e) {
    var r = e.memoizedState, a = 0;
    r !== null && (a = r.retryLane), Xp(e, a);
  }
  __name(pv, "pv");
  function hv(e, r) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode, d = e.memoizedState;
        d !== null && (a = d.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(r), Xp(e, a);
  }
  __name(hv, "hv");
  var Zp;
  Zp = /* @__PURE__ */ __name(function(e, r, a) {
    if (e !== null) if (e.memoizedProps !== r.pendingProps || Gt.current) Jt = true;
    else {
      if ((e.lanes & a) === 0 && (r.flags & 128) === 0) return Jt = false, tv(e, r, a);
      Jt = (e.flags & 131072) !== 0;
    }
    else Jt = false, tt && (r.flags & 1048576) !== 0 && Af(r, Zs, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var l = r.type;
        hl(e, r), e = r.pendingProps;
        var d = Za(r, Rt.current);
        ai(r, a), d = sc(null, r, l, e, d, a);
        var g = lc();
        return r.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Yt(l) ? (g = true, Js(r)) : g = false, r.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, ec(r), d.updater = fl, r.stateNode = d, d._reactInternals = r, hc(r, l, e, a), r = vc(null, r, l, true, g, a)) : (r.tag = 0, tt && g && Vu(r), bt(null, r, d, a), r = r.child), r;
      case 16:
        l = r.elementType;
        e: {
          switch (hl(e, r), e = r.pendingProps, d = l._init, l = d(l._payload), r.type = l, d = r.tag = gv(l), e = Hr(l, e), d) {
            case 0:
              r = yc(null, r, l, e, a);
              break e;
            case 1:
              r = kp(null, r, l, e, a);
              break e;
            case 11:
              r = xp(null, r, l, e, a);
              break e;
            case 14:
              r = Sp(null, r, l, Hr(l.type, e), a);
              break e;
          }
          throw Error(o(306, l, ""));
        }
        return r;
      case 0:
        return l = r.type, d = r.pendingProps, d = r.elementType === l ? d : Hr(l, d), yc(e, r, l, d, a);
      case 1:
        return l = r.type, d = r.pendingProps, d = r.elementType === l ? d : Hr(l, d), kp(e, r, l, d, a);
      case 3:
        e: {
          if (Pp(r), e === null) throw Error(o(387));
          l = r.pendingProps, g = r.memoizedState, d = g.element, zf(e, r), al(r, l, null, a);
          var E = r.memoizedState;
          if (l = E.element, g.isDehydrated) if (g = { element: l, isDehydrated: false, cache: E.cache, pendingSuspenseBoundaries: E.pendingSuspenseBoundaries, transitions: E.transitions }, r.updateQueue.baseState = g, r.memoizedState = g, r.flags & 256) {
            d = si(Error(o(423)), r), r = jp(e, r, l, a, d);
            break e;
          } else if (l !== d) {
            d = si(Error(o(424)), r), r = jp(e, r, l, a, d);
            break e;
          } else for (dr = xo(r.stateNode.containerInfo.firstChild), cr = r, tt = true, zr = null, a = Mf(r, null, l, a), r.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (ri(), l === d) {
              r = Zn(e, r, a);
              break e;
            }
            bt(e, r, l, a);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Vf(r), e === null && Qu(r), l = r.type, d = r.pendingProps, g = e !== null ? e.memoizedProps : null, E = d.children, Uu(l, d) ? E = null : g !== null && Uu(l, g) && (r.flags |= 32), _p(e, r), bt(e, r, E, a), r.child;
      case 6:
        return e === null && Qu(r), null;
      case 13:
        return Rp(e, r, a);
      case 4:
        return tc(r, r.stateNode.containerInfo), l = r.pendingProps, e === null ? r.child = ni(r, null, l, a) : bt(e, r, l, a), r.child;
      case 11:
        return l = r.type, d = r.pendingProps, d = r.elementType === l ? d : Hr(l, d), xp(e, r, l, d, a);
      case 7:
        return bt(e, r, r.pendingProps, a), r.child;
      case 8:
        return bt(e, r, r.pendingProps.children, a), r.child;
      case 12:
        return bt(e, r, r.pendingProps.children, a), r.child;
      case 10:
        e: {
          if (l = r.type._context, d = r.pendingProps, g = r.memoizedProps, E = d.value, Ke(rl, l._currentValue), l._currentValue = E, g !== null) if (Fr(g.value, E)) {
            if (g.children === d.children && !Gt.current) {
              r = Zn(e, r, a);
              break e;
            }
          } else for (g = r.child, g !== null && (g.return = r); g !== null; ) {
            var O = g.dependencies;
            if (O !== null) {
              E = g.child;
              for (var D = O.firstContext; D !== null; ) {
                if (D.context === l) {
                  if (g.tag === 1) {
                    D = Xn(-1, a & -a), D.tag = 2;
                    var W = g.updateQueue;
                    if (W !== null) {
                      W = W.shared;
                      var te = W.pending;
                      te === null ? D.next = D : (D.next = te.next, te.next = D), W.pending = D;
                    }
                  }
                  g.lanes |= a, D = g.alternate, D !== null && (D.lanes |= a), Xu(g.return, a, r), O.lanes |= a;
                  break;
                }
                D = D.next;
              }
            } else if (g.tag === 10) E = g.type === r.type ? null : g.child;
            else if (g.tag === 18) {
              if (E = g.return, E === null) throw Error(o(341));
              E.lanes |= a, O = E.alternate, O !== null && (O.lanes |= a), Xu(E, a, r), E = g.sibling;
            } else E = g.child;
            if (E !== null) E.return = g;
            else for (E = g; E !== null; ) {
              if (E === r) {
                E = null;
                break;
              }
              if (g = E.sibling, g !== null) {
                g.return = E.return, E = g;
                break;
              }
              E = E.return;
            }
            g = E;
          }
          bt(e, r, d.children, a), r = r.child;
        }
        return r;
      case 9:
        return d = r.type, l = r.pendingProps.children, ai(r, a), d = Sr(d), l = l(d), r.flags |= 1, bt(e, r, l, a), r.child;
      case 14:
        return l = r.type, d = Hr(l, r.pendingProps), d = Hr(l.type, d), Sp(e, r, l, d, a);
      case 15:
        return Cp(e, r, r.type, r.pendingProps, a);
      case 17:
        return l = r.type, d = r.pendingProps, d = r.elementType === l ? d : Hr(l, d), hl(e, r), r.tag = 1, Yt(l) ? (e = true, Js(r)) : e = false, ai(r, a), pp(r, l, d), hc(r, l, d, a), vc(null, r, l, true, e, a);
      case 19:
        return Ip(e, r, a);
      case 22:
        return Ep(e, r, a);
    }
    throw Error(o(156, r.tag));
  }, "Zp");
  function eh(e, r) {
    return Fn(e, r);
  }
  __name(eh, "eh");
  function mv(e, r, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  __name(mv, "mv");
  function _r(e, r, a, l) {
    return new mv(e, r, a, l);
  }
  __name(_r, "_r");
  function Uc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  __name(Uc, "Uc");
  function gv(e) {
    if (typeof e == "function") return Uc(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ae) return 11;
      if (e === Re) return 14;
    }
    return 2;
  }
  __name(gv, "gv");
  function To(e, r) {
    var a = e.alternate;
    return a === null ? (a = _r(e.tag, r, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = r, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 14680064, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, r = e.dependencies, a.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a;
  }
  __name(To, "To");
  function kl(e, r, a, l, d, g) {
    var E = 2;
    if (l = e, typeof e == "function") Uc(e) && (E = 1);
    else if (typeof e == "string") E = 5;
    else e: switch (e) {
      case J:
        return Ca(a.children, d, g, r);
      case ce:
        E = 8, d |= 8;
        break;
      case ve:
        return e = _r(12, a, r, d | 2), e.elementType = ve, e.lanes = g, e;
      case fe:
        return e = _r(13, a, r, d), e.elementType = fe, e.lanes = g, e;
      case _e:
        return e = _r(19, a, r, d), e.elementType = _e, e.lanes = g, e;
      case Oe:
        return Pl(a, d, g, r);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case $e:
            E = 10;
            break e;
          case Ie:
            E = 9;
            break e;
          case Ae:
            E = 11;
            break e;
          case Re:
            E = 14;
            break e;
          case De:
            E = 16, l = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return r = _r(E, a, r, d), r.elementType = e, r.type = l, r.lanes = g, r;
  }
  __name(kl, "kl");
  function Ca(e, r, a, l) {
    return e = _r(7, e, l, r), e.lanes = a, e;
  }
  __name(Ca, "Ca");
  function Pl(e, r, a, l) {
    return e = _r(22, e, l, r), e.elementType = Oe, e.lanes = a, e.stateNode = { isHidden: false }, e;
  }
  __name(Pl, "Pl");
  function Mc(e, r, a) {
    return e = _r(6, e, null, r), e.lanes = a, e;
  }
  __name(Mc, "Mc");
  function Fc(e, r, a) {
    return r = _r(4, e.children !== null ? e.children : [], e.key, r), r.lanes = a, r.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, r;
  }
  __name(Fc, "Fc");
  function yv(e, r, a, l, d) {
    this.tag = r, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = H(0), this.expirationTimes = H(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = H(0), this.identifierPrefix = l, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
  }
  __name(yv, "yv");
  function zc(e, r, a, l, d, g, E, O, D) {
    return e = new yv(e, r, a, O, D), r === 1 ? (r = 1, g === true && (r |= 8)) : r = 0, g = _r(3, null, null, r), e.current = g, g.stateNode = e, g.memoizedState = { element: l, isDehydrated: a, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ec(g), e;
  }
  __name(zc, "zc");
  function vv(e, r, a) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Q, key: l == null ? null : "" + l, children: e, containerInfo: r, implementation: a };
  }
  __name(vv, "vv");
  function th(e) {
    if (!e) return Co;
    e = e._reactInternals;
    e: {
      if (Lr(e) !== e || e.tag !== 1) throw Error(o(170));
      var r = e;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Yt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var a = e.type;
      if (Yt(a)) return $f(e, a, r);
    }
    return r;
  }
  __name(th, "th");
  function rh(e, r, a, l, d, g, E, O, D) {
    return e = zc(a, l, true, e, d, g, E, O, D), e.context = th(null), a = e.current, l = Ut(), d = $o(a), g = Xn(l, d), g.callback = r ?? null, ko(a, g, d), e.current.lanes = d, M(e, d, l), Xt(e, l), e;
  }
  __name(rh, "rh");
  function jl(e, r, a, l) {
    var d = r.current, g = Ut(), E = $o(d);
    return a = th(a), r.context === null ? r.context = a : r.pendingContext = a, r = Xn(g, E), r.payload = { element: e }, l = l === void 0 ? null : l, l !== null && (r.callback = l), e = ko(d, r, E), e !== null && (qr(e, d, E, g), ol(e, d, E)), E;
  }
  __name(jl, "jl");
  function Rl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  __name(Rl, "Rl");
  function nh(e, r) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < r ? a : r;
    }
  }
  __name(nh, "nh");
  function Hc(e, r) {
    nh(e, r), (e = e.alternate) && nh(e, r);
  }
  __name(Hc, "Hc");
  function wv() {
    return null;
  }
  __name(wv, "wv");
  var oh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Bc(e) {
    this._internalRoot = e;
  }
  __name(Bc, "Bc");
  $l.prototype.render = Bc.prototype.render = function(e) {
    var r = this._internalRoot;
    if (r === null) throw Error(o(409));
    jl(e, r, null, null);
  }, $l.prototype.unmount = Bc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var r = e.containerInfo;
      wa(function() {
        jl(null, e, null, null);
      }), r[Qn] = null;
    }
  };
  function $l(e) {
    this._internalRoot = e;
  }
  __name($l, "$l");
  $l.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var r = Ht();
      e = { blockedOn: null, target: e, priority: r };
      for (var a = 0; a < dn.length && r !== 0 && r < dn[a].priority; a++) ;
      dn.splice(a, 0, e), a === 0 && yr(e);
    }
  };
  function Vc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  __name(Vc, "Vc");
  function Il(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  __name(Il, "Il");
  function ah() {
  }
  __name(ah, "ah");
  function xv(e, r, a, l, d) {
    if (d) {
      if (typeof l == "function") {
        var g = l;
        l = /* @__PURE__ */ __name(function() {
          var W = Rl(E);
          g.call(W);
        }, "l");
      }
      var E = rh(r, l, e, 0, null, false, false, "", ah);
      return e._reactRootContainer = E, e[Qn] = E.current, Fi(e.nodeType === 8 ? e.parentNode : e), wa(), E;
    }
    for (; d = e.lastChild; ) e.removeChild(d);
    if (typeof l == "function") {
      var O = l;
      l = /* @__PURE__ */ __name(function() {
        var W = Rl(D);
        O.call(W);
      }, "l");
    }
    var D = zc(e, 0, false, null, null, false, false, "", ah);
    return e._reactRootContainer = D, e[Qn] = D.current, Fi(e.nodeType === 8 ? e.parentNode : e), wa(function() {
      jl(r, D, a, l);
    }), D;
  }
  __name(xv, "xv");
  function Tl(e, r, a, l, d) {
    var g = a._reactRootContainer;
    if (g) {
      var E = g;
      if (typeof d == "function") {
        var O = d;
        d = /* @__PURE__ */ __name(function() {
          var D = Rl(E);
          O.call(D);
        }, "d");
      }
      jl(r, E, e, d);
    } else E = xv(a, r, e, d, l);
    return Rl(E);
  }
  __name(Tl, "Tl");
  Te = /* @__PURE__ */ __name(function(e) {
    switch (e.tag) {
      case 3:
        var r = e.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var a = ln(r.pendingLanes);
          a !== 0 && (se(r, a | 1), Xt(r, Ge()), (Be & 6) === 0 && (ci = Ge() + 500, Eo()));
        }
        break;
      case 13:
        wa(function() {
          var l = Kn(e, 1);
          if (l !== null) {
            var d = Ut();
            qr(l, e, 1, d);
          }
        }), Hc(e, 1);
    }
  }, "Te"), We = /* @__PURE__ */ __name(function(e) {
    if (e.tag === 13) {
      var r = Kn(e, 134217728);
      if (r !== null) {
        var a = Ut();
        qr(r, e, 134217728, a);
      }
      Hc(e, 134217728);
    }
  }, "We"), zt = /* @__PURE__ */ __name(function(e) {
    if (e.tag === 13) {
      var r = $o(e), a = Kn(e, r);
      if (a !== null) {
        var l = Ut();
        qr(a, e, r, l);
      }
      Hc(e, r);
    }
  }, "zt"), Ht = /* @__PURE__ */ __name(function() {
    return le;
  }, "Ht"), kt = /* @__PURE__ */ __name(function(e, r) {
    var a = le;
    try {
      return le = e, r();
    } finally {
      le = a;
    }
  }, "kt"), Dn = /* @__PURE__ */ __name(function(e, r, a) {
    switch (r) {
      case "input":
        if (zo(e, a), r = a.name, a.type === "radio" && r != null) {
          for (a = e; a.parentNode; ) a = a.parentNode;
          for (a = a.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < a.length; r++) {
            var l = a[r];
            if (l !== e && l.form === e.form) {
              var d = Gs(l);
              if (!d) throw Error(o(90));
              $r(l), zo(l, d);
            }
          }
        }
        break;
      case "textarea":
        Ho(e, a);
        break;
      case "select":
        r = a.value, r != null && Tr(e, !!a.multiple, r, false);
    }
  }, "Dn"), ar = Dc, bn = wa;
  var Sv = { usingClientEntryPoint: false, Events: [Bi, Ka, Gs, Nn, en, Dc] }, ns = { findFiberByHostInstance: da, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Cv = { bundleType: ns.bundleType, version: ns.version, rendererPackageName: ns.rendererPackageName, rendererConfig: ns.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: G.ReactCurrentDispatcher, findHostInstanceByFiber: /* @__PURE__ */ __name(function(e) {
    return e = Mn(e), e === null ? null : e.stateNode;
  }, "findHostInstanceByFiber"), findFiberByHostInstance: ns.findFiberByHostInstance || wv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Al.isDisabled && Al.supportsFiber) try {
      sr = Al.inject(Cv), Dt = Al;
    } catch {
    }
  }
  return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sv, Zt.createPortal = function(e, r) {
    var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Vc(r)) throw Error(o(200));
    return vv(e, r, null, a);
  }, Zt.createRoot = function(e, r) {
    if (!Vc(e)) throw Error(o(299));
    var a = false, l = "", d = oh;
    return r != null && (r.unstable_strictMode === true && (a = true), r.identifierPrefix !== void 0 && (l = r.identifierPrefix), r.onRecoverableError !== void 0 && (d = r.onRecoverableError)), r = zc(e, 1, false, null, null, a, false, l, d), e[Qn] = r.current, Fi(e.nodeType === 8 ? e.parentNode : e), new Bc(r);
  }, Zt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var r = e._reactInternals;
    if (r === void 0) throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = Mn(r), e = e === null ? null : e.stateNode, e;
  }, Zt.flushSync = function(e) {
    return wa(e);
  }, Zt.hydrate = function(e, r, a) {
    if (!Il(r)) throw Error(o(200));
    return Tl(null, e, r, true, a);
  }, Zt.hydrateRoot = function(e, r, a) {
    if (!Vc(e)) throw Error(o(405));
    var l = a != null && a.hydratedSources || null, d = false, g = "", E = oh;
    if (a != null && (a.unstable_strictMode === true && (d = true), a.identifierPrefix !== void 0 && (g = a.identifierPrefix), a.onRecoverableError !== void 0 && (E = a.onRecoverableError)), r = rh(r, null, e, 1, a ?? null, d, false, g, E), e[Qn] = r.current, Fi(e), l) for (e = 0; e < l.length; e++) a = l[e], d = a._getVersion, d = d(a._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [a, d] : r.mutableSourceEagerHydrationData.push(a, d);
    return new $l(r);
  }, Zt.render = function(e, r, a) {
    if (!Il(r)) throw Error(o(200));
    return Tl(null, e, r, false, a);
  }, Zt.unmountComponentAtNode = function(e) {
    if (!Il(e)) throw Error(o(40));
    return e._reactRootContainer ? (wa(function() {
      Tl(null, null, e, false, function() {
        e._reactRootContainer = null, e[Qn] = null;
      });
    }), true) : false;
  }, Zt.unstable_batchedUpdates = Dc, Zt.unstable_renderSubtreeIntoContainer = function(e, r, a, l) {
    if (!Il(a)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return Tl(e, r, a, false, l);
  }, Zt.version = "18.3.1-next-f1338f8080-20240426", Zt;
}
__name(Dv, "Dv");
var mh;
function Nv() {
  if (mh) return Yc.exports;
  mh = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
    } catch (n) {
      console.error(n);
    }
  }
  __name(t, "t");
  return t(), Yc.exports = Dv(), Yc.exports;
}
__name(Nv, "Nv");
Nv();
function wt() {
  return wt = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var o = arguments[n];
      for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
    }
    return t;
  }, wt.apply(this, arguments);
}
__name(wt, "wt");
var Jl;
(function(t) {
  t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE";
})(Jl || (Jl = {}));
function qe(t, n) {
  if (t === false || t === null || typeof t > "u") throw new Error(n);
}
__name(qe, "qe");
function kd(t, n) {
  if (!t) {
    typeof console < "u" && console.warn(n);
    try {
      throw new Error(n);
    } catch {
    }
  }
}
__name(kd, "kd");
function gh(t, n, o, i) {
  return wt({ pathname: t, search: "", hash: "" }, typeof n == "string" ? ja(n) : n, { state: o, key: n && n.key || i });
}
__name(gh, "gh");
function Uo(t) {
  let { pathname: n = "/", search: o = "", hash: i = "" } = t;
  return o && o !== "?" && (n += o.charAt(0) === "?" ? o : "?" + o), i && i !== "#" && (n += i.charAt(0) === "#" ? i : "#" + i), n;
}
__name(Uo, "Uo");
function ja(t) {
  let n = {};
  if (t) {
    let o = t.indexOf("#");
    o >= 0 && (n.hash = t.substr(o), t = t.substr(0, o));
    let i = t.indexOf("?");
    i >= 0 && (n.search = t.substr(i), t = t.substr(0, i)), t && (n.pathname = t);
  }
  return n;
}
__name(ja, "ja");
var rt;
(function(t) {
  t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error";
})(rt || (rt = {}));
var bv = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function Uv(t) {
  return t.index === true;
}
__name(Uv, "Uv");
function Pd(t, n, o, i) {
  return o === void 0 && (o = []), i === void 0 && (i = {}), t.map((s, u) => {
    let c = [...o, String(u)], f = typeof s.id == "string" ? s.id : c.join("-");
    if (qe(s.index !== true || !s.children, "Cannot specify children on an index route"), qe(!i[f], 'Found a route id collision on id "' + f + `".  Route id's must be globally unique within Data Router usages`), Uv(s)) {
      let h = wt({}, s, n(s), { id: f });
      return i[f] = h, h;
    } else {
      let h = wt({}, s, n(s), { id: f, children: void 0 });
      return i[f] = h, s.children && (h.children = Pd(s.children, n, c, i)), h;
    }
  });
}
__name(Pd, "Pd");
function wi(t, n, o) {
  return o === void 0 && (o = "/"), Mv(t, n, o);
}
__name(wi, "wi");
function Mv(t, n, o, i) {
  let s = typeof n == "string" ? ja(n) : n, u = jr(s.pathname || "/", o);
  if (u == null) return null;
  let c = Dm(t);
  zv(c);
  let f = null;
  for (let h = 0; f == null && h < c.length; ++h) {
    let v = Xv(u);
    f = Jv(c[h], v);
  }
  return f;
}
__name(Mv, "Mv");
function Fv(t, n) {
  let { route: o, pathname: i, params: s } = t;
  return { id: o.id, pathname: i, params: s, data: n[o.id], handle: o.handle };
}
__name(Fv, "Fv");
function Dm(t, n, o, i) {
  n === void 0 && (n = []), o === void 0 && (o = []), i === void 0 && (i = "");
  let s = /* @__PURE__ */ __name((u, c, f) => {
    let h = { relativePath: f === void 0 ? u.path || "" : f, caseSensitive: u.caseSensitive === true, childrenIndex: c, route: u };
    h.relativePath.startsWith("/") && (qe(h.relativePath.startsWith(i), 'Absolute route path "' + h.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), h.relativePath = h.relativePath.slice(i.length));
    let v = Cn([i, h.relativePath]), C = o.concat(h);
    u.children && u.children.length > 0 && (qe(u.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + v + '".')), Dm(u.children, n, C, v)), !(u.path == null && !u.index) && n.push({ path: v, score: Gv(v, u.index), routesMeta: C });
  }, "s");
  return t.forEach((u, c) => {
    var f;
    if (u.path === "" || !((f = u.path) != null && f.includes("?"))) s(u, c);
    else for (let h of Nm(u.path)) s(u, c, h);
  }), n;
}
__name(Dm, "Dm");
function Nm(t) {
  let n = t.split("/");
  if (n.length === 0) return [];
  let [o, ...i] = n, s = o.endsWith("?"), u = o.replace(/\?$/, "");
  if (i.length === 0) return s ? [u, ""] : [u];
  let c = Nm(i.join("/")), f = [];
  return f.push(...c.map((h) => h === "" ? u : [u, h].join("/"))), s && f.push(...c), f.map((h) => t.startsWith("/") && h === "" ? "/" : h);
}
__name(Nm, "Nm");
function zv(t) {
  t.sort((n, o) => n.score !== o.score ? o.score - n.score : Yv(n.routesMeta.map((i) => i.childrenIndex), o.routesMeta.map((i) => i.childrenIndex)));
}
__name(zv, "zv");
var Hv = /^:[\w-]+$/;
var Bv = 3;
var Vv = 2;
var qv = 1;
var Wv = 10;
var Qv = -2;
var yh = /* @__PURE__ */ __name((t) => t === "*", "yh");
function Gv(t, n) {
  let o = t.split("/"), i = o.length;
  return o.some(yh) && (i += Qv), n && (i += Vv), o.filter((s) => !yh(s)).reduce((s, u) => s + (Hv.test(u) ? Bv : u === "" ? qv : Wv), i);
}
__name(Gv, "Gv");
function Yv(t, n) {
  return t.length === n.length && t.slice(0, -1).every((i, s) => i === n[s]) ? t[t.length - 1] - n[n.length - 1] : 0;
}
__name(Yv, "Yv");
function Jv(t, n, o) {
  let { routesMeta: i } = t, s = {}, u = "/", c = [];
  for (let f = 0; f < i.length; ++f) {
    let h = i[f], v = f === i.length - 1, C = u === "/" ? n : n.slice(u.length) || "/", S = hd({ path: h.relativePath, caseSensitive: h.caseSensitive, end: v }, C), j = h.route;
    if (!S) return null;
    Object.assign(s, S.params), c.push({ params: s, pathname: Cn([u, S.pathname]), pathnameBase: tw(Cn([u, S.pathnameBase])), route: j }), S.pathnameBase !== "/" && (u = Cn([u, S.pathnameBase]));
  }
  return c;
}
__name(Jv, "Jv");
function hd(t, n) {
  typeof t == "string" && (t = { path: t, caseSensitive: false, end: true });
  let [o, i] = Kv(t.path, t.caseSensitive, t.end), s = n.match(o);
  if (!s) return null;
  let u = s[0], c = u.replace(/(.)\/+$/, "$1"), f = s.slice(1);
  return { params: i.reduce((v, C, S) => {
    let { paramName: j, isOptional: R } = C;
    if (j === "*") {
      let I = f[S] || "";
      c = u.slice(0, u.length - I.length).replace(/(.)\/+$/, "$1");
    }
    const P = f[S];
    return R && !P ? v[j] = void 0 : v[j] = (P || "").replace(/%2F/g, "/"), v;
  }, {}), pathname: u, pathnameBase: c, pattern: t };
}
__name(hd, "hd");
function Kv(t, n, o) {
  n === void 0 && (n = false), o === void 0 && (o = true), kd(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
  let i = [], s = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (c, f, h) => (i.push({ paramName: f, isOptional: h != null }), h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return t.endsWith("*") ? (i.push({ paramName: "*" }), s += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? s += "\\/*$" : t !== "" && t !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, n ? void 0 : "i"), i];
}
__name(Kv, "Kv");
function Xv(t) {
  try {
    return t.split("/").map((n) => decodeURIComponent(n).replace(/\//g, "%2F")).join("/");
  } catch (n) {
    return kd(false, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + n + ").")), t;
  }
}
__name(Xv, "Xv");
function jr(t, n) {
  if (n === "/") return t;
  if (!t.toLowerCase().startsWith(n.toLowerCase())) return null;
  let o = n.endsWith("/") ? n.length - 1 : n.length, i = t.charAt(o);
  return i && i !== "/" ? null : t.slice(o) || "/";
}
__name(jr, "jr");
function Zv(t, n) {
  n === void 0 && (n = "/");
  let { pathname: o, search: i = "", hash: s = "" } = typeof t == "string" ? ja(t) : t;
  return { pathname: o ? o.startsWith("/") ? o : ew(o, n) : n, search: rw(i), hash: nw(s) };
}
__name(Zv, "Zv");
function ew(t, n) {
  let o = n.replace(/\/+$/, "").split("/");
  return t.split("/").forEach((s) => {
    s === ".." ? o.length > 1 && o.pop() : s !== "." && o.push(s);
  }), o.length > 1 ? o.join("/") : "/";
}
__name(ew, "ew");
function Xc(t, n, o, i) {
  return "Cannot include a '" + t + "' character in a manually specified " + ("`to." + n + "` field [" + JSON.stringify(i) + "].  Please separate it out to the ") + ("`to." + o + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
__name(Xc, "Xc");
function bm(t) {
  return t.filter((n, o) => o === 0 || n.route.path && n.route.path.length > 0);
}
__name(bm, "bm");
function jd(t, n) {
  let o = bm(t);
  return n ? o.map((i, s) => s === o.length - 1 ? i.pathname : i.pathnameBase) : o.map((i) => i.pathnameBase);
}
__name(jd, "jd");
function Rd(t, n, o, i) {
  i === void 0 && (i = false);
  let s;
  typeof t == "string" ? s = ja(t) : (s = wt({}, t), qe(!s.pathname || !s.pathname.includes("?"), Xc("?", "pathname", "search", s)), qe(!s.pathname || !s.pathname.includes("#"), Xc("#", "pathname", "hash", s)), qe(!s.search || !s.search.includes("#"), Xc("#", "search", "hash", s)));
  let u = t === "" || s.pathname === "", c = u ? "/" : s.pathname, f;
  if (c == null) f = o;
  else {
    let S = n.length - 1;
    if (!i && c.startsWith("..")) {
      let j = c.split("/");
      for (; j[0] === ".."; ) j.shift(), S -= 1;
      s.pathname = j.join("/");
    }
    f = S >= 0 ? n[S] : "/";
  }
  let h = Zv(s, f), v = c && c !== "/" && c.endsWith("/"), C = (u || c === ".") && o.endsWith("/");
  return !h.pathname.endsWith("/") && (v || C) && (h.pathname += "/"), h;
}
__name(Rd, "Rd");
var Cn = /* @__PURE__ */ __name((t) => t.join("/").replace(/\/\/+/g, "/"), "Cn");
var tw = /* @__PURE__ */ __name((t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"), "tw");
var rw = /* @__PURE__ */ __name((t) => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t, "rw");
var nw = /* @__PURE__ */ __name((t) => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t, "nw");
var $d = /* @__PURE__ */ __name(function(n, o) {
  o === void 0 && (o = {});
  let i = typeof o == "number" ? { status: o } : o, s = new Headers(i.headers);
  return s.has("Content-Type") || s.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(n), wt({}, i, { headers: s }));
}, "$d");
var ow = class {
  static {
    __name(this, "ow");
  }
  constructor(n, o) {
    this.type = "DataWithResponseInit", this.data = n, this.init = o || null;
  }
};
function aw(t, n) {
  return new ow(t, typeof n == "number" ? { status: n } : n);
}
__name(aw, "aw");
var iw = class extends Error {
  static {
    __name(this, "iw");
  }
};
var sw = /* @__PURE__ */ __name(function(n, o) {
  o === void 0 && (o = 302);
  let i = o;
  typeof i == "number" ? i = { status: i } : typeof i.status > "u" && (i.status = 302);
  let s = new Headers(i.headers);
  return s.set("Location", n), new Response(null, wt({}, i, { headers: s }));
}, "sw");
var fs = class {
  static {
    __name(this, "fs");
  }
  constructor(n, o, i, s) {
    s === void 0 && (s = false), this.status = n, this.statusText = o || "", this.internal = s, i instanceof Error ? (this.data = i.toString(), this.error = i) : this.data = i;
  }
};
function Ot(t) {
  return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t;
}
__name(Ot, "Ot");
var Um = ["post", "put", "patch", "delete"];
var lw = new Set(Um);
var uw = ["get", ...Um];
var cw = new Set(uw);
var dw = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
var fw = { state: "idle", location: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 };
var Mm = { state: "idle", data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 };
var pw = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 };
var hw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var mw = /* @__PURE__ */ __name((t) => ({ hasErrorBoundary: !!t.hasErrorBoundary }), "mw");
var Kl = Symbol("deferred");
function gw(t, n) {
  qe(t.length > 0, "You must provide a non-empty routes array to createStaticHandler");
  let o = {}, i = (n ? n.basename : null) || "/", s;
  if (n != null && n.mapRouteProperties) s = n.mapRouteProperties;
  else if (n != null && n.detectErrorBoundary) {
    let R = n.detectErrorBoundary;
    s = /* @__PURE__ */ __name((P) => ({ hasErrorBoundary: R(P) }), "s");
  } else s = mw;
  let u = wt({ v7_relativeSplatPath: false, v7_throwAbortReason: false }, n ? n.future : null), c = Pd(t, s, void 0, o);
  async function f(R, P) {
    let { requestContext: I, skipLoaderErrorBubbling: L, dataStrategy: U } = P === void 0 ? {} : P, q = new URL(R.url), Y = R.method, G = gh("", Uo(q), null, "default"), ye = wi(c, G, i);
    if (!Sh(Y) && Y !== "HEAD") {
      let J = Wr(405, { method: Y }), { matches: ce, route: ve } = wh(c);
      return { basename: i, location: G, matches: ce, loaderData: {}, actionData: null, errors: { [ve.id]: J }, statusCode: J.status, loaderHeaders: {}, actionHeaders: {}, activeDeferreds: null };
    } else if (!ye) {
      let J = Wr(404, { pathname: G.pathname }), { matches: ce, route: ve } = wh(c);
      return { basename: i, location: G, matches: ce, loaderData: {}, actionData: null, errors: { [ve.id]: J }, statusCode: J.status, loaderHeaders: {}, actionHeaders: {}, activeDeferreds: null };
    }
    let Q = await v(R, G, ye, I, U || null, L === true, null);
    return Lo(Q) ? Q : wt({ location: G, basename: i }, Q);
  }
  __name(f, "f");
  async function h(R, P) {
    let { routeId: I, requestContext: L, dataStrategy: U } = P === void 0 ? {} : P, q = new URL(R.url), Y = R.method, G = gh("", Uo(q), null, "default"), ye = wi(c, G, i);
    if (!Sh(Y) && Y !== "HEAD" && Y !== "OPTIONS") throw Wr(405, { method: Y });
    if (!ye) throw Wr(404, { pathname: G.pathname });
    let Q = I ? ye.find(($e) => $e.route.id === I) : Ch(ye, G);
    if (I && !Q) throw Wr(403, { pathname: G.pathname, routeId: I });
    if (!Q) throw Wr(404, { pathname: G.pathname });
    let J = await v(R, G, ye, L, U || null, false, Q);
    if (Lo(J)) return J;
    let ce = J.errors ? Object.values(J.errors)[0] : void 0;
    if (ce !== void 0) throw ce;
    if (J.actionData) return Object.values(J.actionData)[0];
    if (J.loaderData) {
      var ve;
      let $e = Object.values(J.loaderData)[0];
      return (ve = J.activeDeferreds) != null && ve[Q.route.id] && ($e[Kl] = J.activeDeferreds[Q.route.id]), $e;
    }
  }
  __name(h, "h");
  async function v(R, P, I, L, U, q, Y) {
    qe(R.signal, "query()/queryRoute() requests must contain an AbortController signal");
    try {
      if (Tw(R.method.toLowerCase())) return await C(R, I, Y || Ch(I, P), L, U, q, Y != null);
      let G = await S(R, I, L, U, q, Y);
      return Lo(G) ? G : wt({}, G, { actionData: null, actionHeaders: {} });
    } catch (G) {
      if (jw(G) && Lo(G.result)) {
        if (G.type === rt.error) throw G.result;
        return G.result;
      }
      if (Iw(G)) return G;
      throw G;
    }
  }
  __name(v, "v");
  async function C(R, P, I, L, U, q, Y) {
    let G;
    if (!I.route.action && !I.route.lazy) {
      let J = Wr(405, { method: R.method, pathname: new URL(R.url).pathname, routeId: I.route.id });
      if (Y) throw J;
      G = { type: rt.error, error: J };
    } else G = (await j("action", R, [I], P, Y, L, U))[I.route.id], R.signal.aborted && vh(R, Y, u);
    if (Hm(G)) throw new Response(null, { status: G.response.status, headers: { Location: G.response.headers.get("Location") } });
    if (zm(G)) {
      let J = Wr(400, { type: "defer-action" });
      if (Y) throw J;
      G = { type: rt.error, error: J };
    }
    if (Y) {
      if (gi(G)) throw G.error;
      return { matches: [I], loaderData: {}, actionData: { [I.route.id]: G.data }, errors: null, statusCode: 200, loaderHeaders: {}, actionHeaders: {}, activeDeferreds: null };
    }
    let ye = new Request(R.url, { headers: R.headers, redirect: R.redirect, signal: R.signal });
    if (gi(G)) {
      let J = q ? I : Fm(P, I.route.id), ce = await S(ye, P, L, U, q, null, [J.route.id, G]);
      return wt({}, ce, { statusCode: Ot(G.error) ? G.error.status : G.statusCode != null ? G.statusCode : 500, actionData: null, actionHeaders: wt({}, G.headers ? { [I.route.id]: G.headers } : {}) });
    }
    let Q = await S(ye, P, L, U, q, null);
    return wt({}, Q, { actionData: { [I.route.id]: G.data } }, G.statusCode ? { statusCode: G.statusCode } : {}, { actionHeaders: G.headers ? { [I.route.id]: G.headers } : {} });
  }
  __name(C, "C");
  async function S(R, P, I, L, U, q, Y) {
    let G = q != null;
    if (G && !(q != null && q.route.loader) && !(q != null && q.route.lazy)) throw Wr(400, { method: R.method, pathname: new URL(R.url).pathname, routeId: q == null ? void 0 : q.route.id });
    let Q = (q ? [q] : Y && gi(Y[1]) ? ww(P, Y[0]) : P).filter((Ie) => Ie.route.loader || Ie.route.lazy);
    if (Q.length === 0) return { matches: P, loaderData: P.reduce((Ie, Ae) => Object.assign(Ie, { [Ae.route.id]: null }), {}), errors: Y && gi(Y[1]) ? { [Y[0]]: Y[1].error } : null, statusCode: 200, loaderHeaders: {}, activeDeferreds: null };
    let J = await j("loader", R, Q, P, G, I, L);
    R.signal.aborted && vh(R, G, u);
    let ce = /* @__PURE__ */ new Map(), ve = Pw(P, J, Y, ce, U), $e = new Set(Q.map((Ie) => Ie.route.id));
    return P.forEach((Ie) => {
      $e.has(Ie.route.id) || (ve.loaderData[Ie.route.id] = null);
    }), wt({}, ve, { matches: P, activeDeferreds: ce.size > 0 ? Object.fromEntries(ce.entries()) : null });
  }
  __name(S, "S");
  async function j(R, P, I, L, U, q, Y) {
    let G = await Cw(Y || Sw, R, null, P, I, L, null, o, s, q), ye = {};
    return await Promise.all(L.map(async (Q) => {
      if (!(Q.route.id in G)) return;
      let J = G[Q.route.id];
      if (Rw(J)) {
        let ce = J.result;
        throw kw(ce, P, Q.route.id, L, i, u.v7_relativeSplatPath);
      }
      if (Lo(J.result) && U) throw J;
      ye[Q.route.id] = await _w(J);
    })), ye;
  }
  __name(j, "j");
  return { dataRoutes: c, query: f, queryRoute: h };
}
__name(gw, "gw");
function yw(t, n, o) {
  return wt({}, n, { statusCode: Ot(o) ? o.status : 500, errors: { [n._deepestRenderedBoundaryId || t[0].id]: o } });
}
__name(yw, "yw");
function vh(t, n, o) {
  if (o.v7_throwAbortReason && t.signal.reason !== void 0) throw t.signal.reason;
  let i = n ? "queryRoute" : "query";
  throw new Error(i + "() call aborted: " + t.method + " " + t.url);
}
__name(vh, "vh");
function vw(t, n, o, i, s, u, c, f) {
  let h, v;
  h = n, v = n[n.length - 1];
  let C = Rd(s || ".", jd(h, u), jr(t.pathname, o) || t.pathname, f === "path");
  if (s == null && (C.search = t.search, C.hash = t.hash), (s == null || s === "" || s === ".") && v) {
    let S = Bm(C.search);
    if (v.route.index && !S) C.search = C.search ? C.search.replace(/^\?/, "?index&") : "?index";
    else if (!v.route.index && S) {
      let j = new URLSearchParams(C.search), R = j.getAll("index");
      j.delete("index"), R.filter((I) => I).forEach((I) => j.append("index", I));
      let P = j.toString();
      C.search = P ? "?" + P : "";
    }
  }
  return o !== "/" && (C.pathname = C.pathname === "/" ? o : Cn([o, C.pathname])), Uo(C);
}
__name(vw, "vw");
function ww(t, n, o) {
  o === void 0 && (o = false);
  let i = t.findIndex((s) => s.route.id === n);
  return i >= 0 ? t.slice(0, o ? i + 1 : i) : t;
}
__name(ww, "ww");
async function xw(t, n, o) {
  if (!t.lazy) return;
  let i = await t.lazy();
  if (!t.lazy) return;
  let s = o[t.id];
  qe(s, "No route found in manifest");
  let u = {};
  for (let c in i) {
    let h = s[c] !== void 0 && c !== "hasErrorBoundary";
    kd(!h, 'Route "' + s.id + '" has a static property "' + c + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + c + '" will be ignored.')), !h && !bv.has(c) && (u[c] = i[c]);
  }
  Object.assign(s, u), Object.assign(s, wt({}, n(s), { lazy: void 0 }));
}
__name(xw, "xw");
async function Sw(t) {
  let { matches: n } = t, o = n.filter((s) => s.shouldLoad);
  return (await Promise.all(o.map((s) => s.resolve()))).reduce((s, u, c) => Object.assign(s, { [o[c].route.id]: u }), {});
}
__name(Sw, "Sw");
async function Cw(t, n, o, i, s, u, c, f, h, v) {
  let C = u.map((R) => R.route.lazy ? xw(R.route, h, f) : void 0), S = u.map((R, P) => {
    let I = C[P], L = s.some((q) => q.route.id === R.route.id);
    return wt({}, R, { shouldLoad: L, resolve: /* @__PURE__ */ __name(async (q) => (q && i.method === "GET" && (R.route.lazy || R.route.loader) && (L = true), L ? Ew(n, i, R, I, q, v) : Promise.resolve({ type: rt.data, result: void 0 })), "resolve") });
  }), j = await t({ matches: S, request: i, params: u[0].params, fetcherKey: c, context: v });
  try {
    await Promise.all(C);
  } catch {
  }
  return j;
}
__name(Cw, "Cw");
async function Ew(t, n, o, i, s, u) {
  let c, f, h = /* @__PURE__ */ __name((v) => {
    let C, S = new Promise((P, I) => C = I);
    f = /* @__PURE__ */ __name(() => C(), "f"), n.signal.addEventListener("abort", f);
    let j = /* @__PURE__ */ __name((P) => typeof v != "function" ? Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + t + '" [routeId: ' + o.route.id + "]"))) : v({ request: n, params: o.params, context: u }, ...P !== void 0 ? [P] : []), "j"), R = (async () => {
      try {
        return { type: "data", result: await (s ? s((I) => j(I)) : j()) };
      } catch (P) {
        return { type: "error", result: P };
      }
    })();
    return Promise.race([R, S]);
  }, "h");
  try {
    let v = o.route[t];
    if (i) if (v) {
      let C, [S] = await Promise.all([h(v).catch((j) => {
        C = j;
      }), i]);
      if (C !== void 0) throw C;
      c = S;
    } else if (await i, v = o.route[t], v) c = await h(v);
    else if (t === "action") {
      let C = new URL(n.url), S = C.pathname + C.search;
      throw Wr(405, { method: n.method, pathname: S, routeId: o.route.id });
    } else return { type: rt.data, result: void 0 };
    else if (v) c = await h(v);
    else {
      let C = new URL(n.url), S = C.pathname + C.search;
      throw Wr(404, { pathname: S });
    }
    qe(c.result !== void 0, "You defined " + (t === "action" ? "an action" : "a loader") + " for route " + ('"' + o.route.id + "\" but didn't return anything from your `" + t + "` ") + "function. Please return a value or `null`.");
  } catch (v) {
    return { type: rt.error, result: v };
  } finally {
    f && n.signal.removeEventListener("abort", f);
  }
  return c;
}
__name(Ew, "Ew");
async function _w(t) {
  let { result: n, type: o } = t;
  if (Lo(n)) {
    let S;
    try {
      let j = n.headers.get("Content-Type");
      j && /\bapplication\/json\b/.test(j) ? n.body == null ? S = null : S = await n.json() : S = await n.text();
    } catch (j) {
      return { type: rt.error, error: j };
    }
    return o === rt.error ? { type: rt.error, error: new fs(n.status, n.statusText, S), statusCode: n.status, headers: n.headers } : { type: rt.data, data: S, statusCode: n.status, headers: n.headers };
  }
  if (o === rt.error) {
    if (xh(n)) {
      var i, s;
      if (n.data instanceof Error) {
        var u, c;
        return { type: rt.error, error: n.data, statusCode: (u = n.init) == null ? void 0 : u.status, headers: (c = n.init) != null && c.headers ? new Headers(n.init.headers) : void 0 };
      }
      return { type: rt.error, error: new fs(((i = n.init) == null ? void 0 : i.status) || 500, void 0, n.data), statusCode: Ot(n) ? n.status : void 0, headers: (s = n.init) != null && s.headers ? new Headers(n.init.headers) : void 0 };
    }
    return { type: rt.error, error: n, statusCode: Ot(n) ? n.status : void 0 };
  }
  if ($w(n)) {
    var f, h;
    return { type: rt.deferred, deferredData: n, statusCode: (f = n.init) == null ? void 0 : f.status, headers: ((h = n.init) == null ? void 0 : h.headers) && new Headers(n.init.headers) };
  }
  if (xh(n)) {
    var v, C;
    return { type: rt.data, data: n.data, statusCode: (v = n.init) == null ? void 0 : v.status, headers: (C = n.init) != null && C.headers ? new Headers(n.init.headers) : void 0 };
  }
  return { type: rt.data, data: n };
}
__name(_w, "_w");
function kw(t, n, o, i, s, u) {
  let c = t.headers.get("Location");
  if (qe(c, "Redirects returned/thrown from loaders/actions must have a Location header"), !hw.test(c)) {
    let f = i.slice(0, i.findIndex((h) => h.route.id === o) + 1);
    c = vw(new URL(n.url), f, s, true, c, u), t.headers.set("Location", c);
  }
  return t;
}
__name(kw, "kw");
function Pw(t, n, o, i, s) {
  let u = {}, c = null, f, h = false, v = {}, C = o && gi(o[1]) ? o[1].error : void 0;
  return t.forEach((S) => {
    if (!(S.route.id in n)) return;
    let j = S.route.id, R = n[j];
    if (qe(!Hm(R), "Cannot handle redirect results in processLoaderData"), gi(R)) {
      let P = R.error;
      if (C !== void 0 && (P = C, C = void 0), c = c || {}, s) c[j] = P;
      else {
        let I = Fm(t, j);
        c[I.route.id] == null && (c[I.route.id] = P);
      }
      u[j] = void 0, h || (h = true, f = Ot(R.error) ? R.error.status : 500), R.headers && (v[j] = R.headers);
    } else zm(R) ? (i.set(j, R.deferredData), u[j] = R.deferredData.data, R.statusCode != null && R.statusCode !== 200 && !h && (f = R.statusCode), R.headers && (v[j] = R.headers)) : (u[j] = R.data, R.statusCode && R.statusCode !== 200 && !h && (f = R.statusCode), R.headers && (v[j] = R.headers));
  }), C !== void 0 && o && (c = { [o[0]]: C }, u[o[0]] = void 0), { loaderData: u, errors: c, statusCode: f || 200, loaderHeaders: v };
}
__name(Pw, "Pw");
function Fm(t, n) {
  return (n ? t.slice(0, t.findIndex((i) => i.route.id === n) + 1) : [...t]).reverse().find((i) => i.route.hasErrorBoundary === true) || t[0];
}
__name(Fm, "Fm");
function wh(t) {
  let n = t.length === 1 ? t[0] : t.find((o) => o.index || !o.path || o.path === "/") || { id: "__shim-error-route__" };
  return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: n }], route: n };
}
__name(wh, "wh");
function Wr(t, n) {
  let { pathname: o, routeId: i, method: s, type: u, message: c } = n === void 0 ? {} : n, f = "Unknown Server Error", h = "Unknown @remix-run/router error";
  return t === 400 ? (f = "Bad Request", s && o && i ? h = "You made a " + s + ' request to "' + o + '" but ' + ('did not provide a `loader` for route "' + i + '", ') + "so there is no way to handle the request." : u === "defer-action" ? h = "defer() is not supported in actions" : u === "invalid-body" && (h = "Unable to encode submission body")) : t === 403 ? (f = "Forbidden", h = 'Route "' + i + '" does not match URL "' + o + '"') : t === 404 ? (f = "Not Found", h = 'No route matches URL "' + o + '"') : t === 405 && (f = "Method Not Allowed", s && o && i ? h = "You made a " + s.toUpperCase() + ' request to "' + o + '" but ' + ('did not provide an `action` for route "' + i + '", ') + "so there is no way to handle the request." : s && (h = 'Invalid request method "' + s.toUpperCase() + '"')), new fs(t || 500, f, new Error(h), true);
}
__name(Wr, "Wr");
function jw(t) {
  return t != null && typeof t == "object" && "type" in t && "result" in t && (t.type === rt.data || t.type === rt.error);
}
__name(jw, "jw");
function Rw(t) {
  return Lo(t.result) && dw.has(t.result.status);
}
__name(Rw, "Rw");
function zm(t) {
  return t.type === rt.deferred;
}
__name(zm, "zm");
function gi(t) {
  return t.type === rt.error;
}
__name(gi, "gi");
function Hm(t) {
  return (t && t.type) === rt.redirect;
}
__name(Hm, "Hm");
function xh(t) {
  return typeof t == "object" && t != null && "type" in t && "data" in t && "init" in t && t.type === "DataWithResponseInit";
}
__name(xh, "xh");
function $w(t) {
  let n = t;
  return n && typeof n == "object" && typeof n.data == "object" && typeof n.subscribe == "function" && typeof n.cancel == "function" && typeof n.resolveData == "function";
}
__name($w, "$w");
function Lo(t) {
  return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.headers == "object" && typeof t.body < "u";
}
__name(Lo, "Lo");
function Iw(t) {
  if (!Lo(t)) return false;
  let n = t.status, o = t.headers.get("Location");
  return n >= 300 && n <= 399 && o != null;
}
__name(Iw, "Iw");
function Sh(t) {
  return cw.has(t.toLowerCase());
}
__name(Sh, "Sh");
function Tw(t) {
  return lw.has(t.toLowerCase());
}
__name(Tw, "Tw");
function Bm(t) {
  return new URLSearchParams(t).getAll("index").some((n) => n === "");
}
__name(Bm, "Bm");
function Ch(t, n) {
  let o = typeof n == "string" ? ja(n).search : n.search;
  if (t[t.length - 1].route.index && Bm(o || "")) return t[t.length - 1];
  let i = bm(t);
  return i[i.length - 1];
}
__name(Ch, "Ch");
function Xl() {
  return Xl = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var o = arguments[n];
      for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
    }
    return t;
  }, Xl.apply(this, arguments);
}
__name(Xl, "Xl");
var Si = $.createContext(null);
var Ss = $.createContext(null);
var Zl = $.createContext(null);
var Kr = $.createContext(null);
var Id = $.createContext(null);
var Pn = $.createContext({ outlet: null, matches: [], isDataRoute: false });
var Vm = $.createContext(null);
function Td(t, n) {
  let { relative: o } = n === void 0 ? {} : n;
  Cs() || qe(false);
  let { basename: i, navigator: s } = $.useContext(Kr), { hash: u, pathname: c, search: f } = _s(t, { relative: o }), h = c;
  return i !== "/" && (h = c === "/" ? i : Cn([i, c])), s.createHref({ pathname: h, search: f, hash: u });
}
__name(Td, "Td");
function Cs() {
  return $.useContext(Id) != null;
}
__name(Cs, "Cs");
function tr() {
  return Cs() || qe(false), $.useContext(Id).location;
}
__name(tr, "tr");
function qm(t) {
  $.useContext(Kr).static || $.useLayoutEffect(t);
}
__name(qm, "qm");
function Es() {
  let { isDataRoute: t } = $.useContext(Pn);
  return t ? Qw() : Aw();
}
__name(Es, "Es");
function Aw() {
  Cs() || qe(false);
  let t = $.useContext(Si), { basename: n, future: o, navigator: i } = $.useContext(Kr), { matches: s } = $.useContext(Pn), { pathname: u } = tr(), c = JSON.stringify(jd(s, o.v7_relativeSplatPath)), f = $.useRef(false);
  return qm(() => {
    f.current = true;
  }), $.useCallback(function(v, C) {
    if (C === void 0 && (C = {}), !f.current) return;
    if (typeof v == "number") {
      i.go(v);
      return;
    }
    let S = Rd(v, JSON.parse(c), u, C.relative === "path");
    t == null && n !== "/" && (S.pathname = S.pathname === "/" ? n : Cn([n, S.pathname])), (C.replace ? i.replace : i.push)(S, C.state, C);
  }, [n, i, c, u, t]);
}
__name(Aw, "Aw");
var Wm = $.createContext(null);
function Qm() {
  return $.useContext(Wm);
}
__name(Qm, "Qm");
function Ow(t) {
  let n = $.useContext(Pn).outlet;
  return n && $.createElement(Wm.Provider, { value: t }, n);
}
__name(Ow, "Ow");
function _s(t, n) {
  let { relative: o } = n === void 0 ? {} : n, { future: i } = $.useContext(Kr), { matches: s } = $.useContext(Pn), { pathname: u } = tr(), c = JSON.stringify(jd(s, i.v7_relativeSplatPath));
  return $.useMemo(() => Rd(t, JSON.parse(c), u, o === "path"), [t, c, u, o]);
}
__name(_s, "_s");
function Lw(t, n, o, i) {
  Cs() || qe(false);
  let { navigator: s, static: u } = $.useContext(Kr), { matches: c } = $.useContext(Pn), f = c[c.length - 1], h = f ? f.params : {};
  f && f.pathname;
  let v = f ? f.pathnameBase : "/";
  f && f.route;
  let C = tr(), S;
  S = C;
  let j = S.pathname || "/", R = j;
  if (v !== "/") {
    let L = v.replace(/^\//, "").split("/");
    R = "/" + j.replace(/^\//, "").split("/").slice(L.length).join("/");
  }
  let P = !u && o && o.matches && o.matches.length > 0 ? o.matches : wi(t, { pathname: R });
  return Mw(P && P.map((L) => Object.assign({}, L, { params: Object.assign({}, h, L.params), pathname: Cn([v, s.encodeLocation ? s.encodeLocation(L.pathname).pathname : L.pathname]), pathnameBase: L.pathnameBase === "/" ? v : Cn([v, s.encodeLocation ? s.encodeLocation(L.pathnameBase).pathname : L.pathnameBase]) })), c, o, i);
}
__name(Lw, "Lw");
function Dw() {
  let t = Ad(), n = Ot(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t), o = t instanceof Error ? t.stack : null, s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return $.createElement($.Fragment, null, $.createElement("h2", null, "Unexpected Application Error!"), $.createElement("h3", { style: { fontStyle: "italic" } }, n), o ? $.createElement("pre", { style: s }, o) : null, null);
}
__name(Dw, "Dw");
var Nw = $.createElement(Dw, null);
var bw = class extends $.Component {
  static {
    __name(this, "bw");
  }
  constructor(n) {
    super(n), this.state = { location: n.location, revalidation: n.revalidation, error: n.error };
  }
  static getDerivedStateFromError(n) {
    return { error: n };
  }
  static getDerivedStateFromProps(n, o) {
    return o.location !== n.location || o.revalidation !== "idle" && n.revalidation === "idle" ? { error: n.error, location: n.location, revalidation: n.revalidation } : { error: n.error !== void 0 ? n.error : o.error, location: o.location, revalidation: n.revalidation || o.revalidation };
  }
  componentDidCatch(n, o) {
    console.error("React Router caught the following error during render", n, o);
  }
  render() {
    return this.state.error !== void 0 ? $.createElement(Pn.Provider, { value: this.props.routeContext }, $.createElement(Vm.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
  }
};
function Uw(t) {
  let { routeContext: n, match: o, children: i } = t, s = $.useContext(Si);
  return s && s.static && s.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = o.route.id), $.createElement(Pn.Provider, { value: n }, i);
}
__name(Uw, "Uw");
function Mw(t, n, o, i) {
  var s;
  if (n === void 0 && (n = []), o === void 0 && (o = null), i === void 0 && (i = null), t == null) {
    var u;
    if (!o) return null;
    if (o.errors) t = o.matches;
    else if ((u = i) != null && u.v7_partialHydration && n.length === 0 && !o.initialized && o.matches.length > 0) t = o.matches;
    else return null;
  }
  let c = t, f = (s = o) == null ? void 0 : s.errors;
  if (f != null) {
    let C = c.findIndex((S) => S.route.id && (f == null ? void 0 : f[S.route.id]) !== void 0);
    C >= 0 || qe(false), c = c.slice(0, Math.min(c.length, C + 1));
  }
  let h = false, v = -1;
  if (o && i && i.v7_partialHydration) for (let C = 0; C < c.length; C++) {
    let S = c[C];
    if ((S.route.HydrateFallback || S.route.hydrateFallbackElement) && (v = C), S.route.id) {
      let { loaderData: j, errors: R } = o, P = S.route.loader && j[S.route.id] === void 0 && (!R || R[S.route.id] === void 0);
      if (S.route.lazy || P) {
        h = true, v >= 0 ? c = c.slice(0, v + 1) : c = [c[0]];
        break;
      }
    }
  }
  return c.reduceRight((C, S, j) => {
    let R, P = false, I = null, L = null;
    o && (R = f && S.route.id ? f[S.route.id] : void 0, I = S.route.errorElement || Nw, h && (v < 0 && j === 0 ? (Gw("route-fallback"), P = true, L = null) : v === j && (P = true, L = S.route.hydrateFallbackElement || null)));
    let U = n.concat(c.slice(0, j + 1)), q = /* @__PURE__ */ __name(() => {
      let Y;
      return R ? Y = I : P ? Y = L : S.route.Component ? Y = $.createElement(S.route.Component, null) : S.route.element ? Y = S.route.element : Y = C, $.createElement(Uw, { match: S, routeContext: { outlet: C, matches: U, isDataRoute: o != null }, children: Y });
    }, "q");
    return o && (S.route.ErrorBoundary || S.route.errorElement || j === 0) ? $.createElement(bw, { location: o.location, revalidation: o.revalidation, component: I, error: R, children: q(), routeContext: { outlet: null, matches: U, isDataRoute: true } }) : q();
  }, null);
}
__name(Mw, "Mw");
var Gm = function(t) {
  return t.UseBlocker = "useBlocker", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t;
}(Gm || {});
var Rr = function(t) {
  return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t;
}(Rr || {});
function Fw(t) {
  let n = $.useContext(Si);
  return n || qe(false), n;
}
__name(Fw, "Fw");
function Ci(t) {
  let n = $.useContext(Ss);
  return n || qe(false), n;
}
__name(Ci, "Ci");
function zw(t) {
  let n = $.useContext(Pn);
  return n || qe(false), n;
}
__name(zw, "zw");
function ks(t) {
  let n = zw(), o = n.matches[n.matches.length - 1];
  return o.route.id || qe(false), o.route.id;
}
__name(ks, "ks");
function Hw() {
  return ks(Rr.UseRouteId);
}
__name(Hw, "Hw");
function Ei() {
  return Ci(Rr.UseNavigation).navigation;
}
__name(Ei, "Ei");
function Ym() {
  let { matches: t, loaderData: n } = Ci(Rr.UseMatches);
  return $.useMemo(() => t.map((o) => Fv(o, n)), [t, n]);
}
__name(Ym, "Ym");
function Bw() {
  let t = Ci(Rr.UseLoaderData), n = ks(Rr.UseLoaderData);
  if (t.errors && t.errors[n] != null) {
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + n + ")");
    return;
  }
  return t.loaderData[n];
}
__name(Bw, "Bw");
function Vw(t) {
  return Ci(Rr.UseRouteLoaderData).loaderData[t];
}
__name(Vw, "Vw");
function qw() {
  let t = Ci(Rr.UseActionData), n = ks(Rr.UseLoaderData);
  return t.actionData ? t.actionData[n] : void 0;
}
__name(qw, "qw");
function Ad() {
  var t;
  let n = $.useContext(Vm), o = Ci(Rr.UseRouteError), i = ks(Rr.UseRouteError);
  return n !== void 0 ? n : (t = o.errors) == null ? void 0 : t[i];
}
__name(Ad, "Ad");
function Jm() {
  let t = $.useContext(Zl);
  return t == null ? void 0 : t._data;
}
__name(Jm, "Jm");
function Ww() {
  let t = $.useContext(Zl);
  return t == null ? void 0 : t._error;
}
__name(Ww, "Ww");
function Qw() {
  let { router: t } = Fw(Gm.UseNavigateStable), n = ks(Rr.UseNavigateStable), o = $.useRef(false);
  return qm(() => {
    o.current = true;
  }), $.useCallback(function(s, u) {
    u === void 0 && (u = {}), o.current && (typeof s == "number" ? t.navigate(s) : t.navigate(s, Xl({ fromRouteId: n }, u)));
  }, [t, n]);
}
__name(Qw, "Qw");
var Eh = {};
function Gw(t, n, o) {
  Eh[t] || (Eh[t] = true);
}
__name(Gw, "Gw");
function eu(t) {
  return Ow(t.context);
}
__name(eu, "eu");
function Yw(t) {
  let { basename: n = "/", children: o = null, location: i, navigationType: s = Jl.Pop, navigator: u, static: c = false, future: f } = t;
  Cs() && qe(false);
  let h = n.replace(/^\/*/, "/"), v = $.useMemo(() => ({ basename: h, navigator: u, static: c, future: Xl({ v7_relativeSplatPath: false }, f) }), [h, f, u, c]);
  typeof i == "string" && (i = ja(i));
  let { pathname: C = "/", search: S = "", hash: j = "", state: R = null, key: P = "default" } = i, I = $.useMemo(() => {
    let L = jr(C, h);
    return L == null ? null : { location: { pathname: L, search: S, hash: j, state: R, key: P }, navigationType: s };
  }, [h, C, S, j, R, P, s]);
  return I == null ? null : $.createElement(Kr.Provider, { value: v }, $.createElement(Id.Provider, { children: o, value: I }));
}
__name(Yw, "Yw");
function Jw(t) {
  let { children: n, errorElement: o, resolve: i } = t;
  return $.createElement(Xw, { resolve: i, errorElement: o }, $.createElement(Zw, null, n));
}
__name(Jw, "Jw");
var kr = function(t) {
  return t[t.pending = 0] = "pending", t[t.success = 1] = "success", t[t.error = 2] = "error", t;
}(kr || {});
var Kw = new Promise(() => {
});
var Xw = class extends $.Component {
  static {
    __name(this, "Xw");
  }
  constructor(n) {
    super(n), this.state = { error: null };
  }
  static getDerivedStateFromError(n) {
    return { error: n };
  }
  componentDidCatch(n, o) {
    console.error("<Await> caught the following error during render", n, o);
  }
  render() {
    let { children: n, errorElement: o, resolve: i } = this.props, s = null, u = kr.pending;
    if (!(i instanceof Promise)) u = kr.success, s = Promise.resolve(), Object.defineProperty(s, "_tracked", { get: /* @__PURE__ */ __name(() => true, "get") }), Object.defineProperty(s, "_data", { get: /* @__PURE__ */ __name(() => i, "get") });
    else if (this.state.error) {
      u = kr.error;
      let c = this.state.error;
      s = Promise.reject().catch(() => {
      }), Object.defineProperty(s, "_tracked", { get: /* @__PURE__ */ __name(() => true, "get") }), Object.defineProperty(s, "_error", { get: /* @__PURE__ */ __name(() => c, "get") });
    } else i._tracked ? (s = i, u = "_error" in s ? kr.error : "_data" in s ? kr.success : kr.pending) : (u = kr.pending, Object.defineProperty(i, "_tracked", { get: /* @__PURE__ */ __name(() => true, "get") }), s = i.then((c) => Object.defineProperty(i, "_data", { get: /* @__PURE__ */ __name(() => c, "get") }), (c) => Object.defineProperty(i, "_error", { get: /* @__PURE__ */ __name(() => c, "get") })));
    if (u === kr.error && s._error instanceof iw) throw Kw;
    if (u === kr.error && !o) throw s._error;
    if (u === kr.error) return $.createElement(Zl.Provider, { value: s, children: o });
    if (u === kr.success) return $.createElement(Zl.Provider, { value: s, children: n });
    throw s;
  }
};
function Zw(t) {
  let { children: n } = t, o = Jm(), i = typeof n == "function" ? n(o) : n;
  return $.createElement($.Fragment, null, i);
}
__name(Zw, "Zw");
function ex(t) {
  let n = { hasErrorBoundary: t.ErrorBoundary != null || t.errorElement != null };
  return t.Component && Object.assign(n, { element: $.createElement(t.Component), Component: void 0 }), t.HydrateFallback && Object.assign(n, { hydrateFallbackElement: $.createElement(t.HydrateFallback), HydrateFallback: void 0 }), t.ErrorBoundary && Object.assign(n, { errorElement: $.createElement(t.ErrorBoundary), ErrorBoundary: void 0 }), n;
}
__name(ex, "ex");
function Jr() {
  return Jr = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var o = arguments[n];
      for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
    }
    return t;
  }, Jr.apply(this, arguments);
}
__name(Jr, "Jr");
function Od(t, n) {
  if (t == null) return {};
  var o = {}, i = Object.keys(t), s, u;
  for (u = 0; u < i.length; u++) s = i[u], !(n.indexOf(s) >= 0) && (o[s] = t[s]);
  return o;
}
__name(Od, "Od");
var Fl = "get";
var Zc = "application/x-www-form-urlencoded";
function fu(t) {
  return t != null && typeof t.tagName == "string";
}
__name(fu, "fu");
function tx(t) {
  return fu(t) && t.tagName.toLowerCase() === "button";
}
__name(tx, "tx");
function rx(t) {
  return fu(t) && t.tagName.toLowerCase() === "form";
}
__name(rx, "rx");
function nx(t) {
  return fu(t) && t.tagName.toLowerCase() === "input";
}
__name(nx, "nx");
function ox(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
__name(ox, "ox");
function ax(t, n) {
  return t.button === 0 && (!n || n === "_self") && !ox(t);
}
__name(ax, "ax");
var Ol = null;
function ix() {
  if (Ol === null) try {
    new FormData(document.createElement("form"), 0), Ol = false;
  } catch {
    Ol = true;
  }
  return Ol;
}
__name(ix, "ix");
var sx = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function ed(t) {
  return t != null && !sx.has(t) ? null : t;
}
__name(ed, "ed");
function lx(t, n) {
  let o, i, s, u, c;
  if (rx(t)) {
    let f = t.getAttribute("action");
    i = f ? jr(f, n) : null, o = t.getAttribute("method") || Fl, s = ed(t.getAttribute("enctype")) || Zc, u = new FormData(t);
  } else if (tx(t) || nx(t) && (t.type === "submit" || t.type === "image")) {
    let f = t.form;
    if (f == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let h = t.getAttribute("formaction") || f.getAttribute("action");
    if (i = h ? jr(h, n) : null, o = t.getAttribute("formmethod") || f.getAttribute("method") || Fl, s = ed(t.getAttribute("formenctype")) || ed(f.getAttribute("enctype")) || Zc, u = new FormData(f, t), !ix()) {
      let { name: v, type: C, value: S } = t;
      if (C === "image") {
        let j = v ? v + "." : "";
        u.append(j + "x", "0"), u.append(j + "y", "0");
      } else v && u.append(v, S);
    }
  } else {
    if (fu(t)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    o = Fl, i = null, s = Zc, c = t;
  }
  return u && s === "text/plain" && (c = u, u = void 0), { action: i, method: o.toLowerCase(), encType: s, formData: u, body: c };
}
__name(lx, "lx");
var ux = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"];
var cx = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"];
var dx = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"];
var fx = "6";
try {
  window.__reactRouterVersion = fx;
} catch {
}
var Km = $.createContext({ isTransitioning: false });
var Xm = $.createContext(/* @__PURE__ */ new Map());
var px = "useId";
var _h = Av[px];
var hx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
var mx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var Zm = $.forwardRef(function(n, o) {
  let { onClick: i, relative: s, reloadDocument: u, replace: c, state: f, target: h, to: v, preventScrollReset: C, viewTransition: S } = n, j = Od(n, ux), { basename: R } = $.useContext(Kr), P, I = false;
  if (typeof v == "string" && mx.test(v) && (P = v, hx)) try {
    let Y = new URL(window.location.href), G = v.startsWith("//") ? new URL(Y.protocol + v) : new URL(v), ye = jr(G.pathname, R);
    G.origin === Y.origin && ye != null ? v = ye + G.search + G.hash : I = true;
  } catch {
  }
  let L = Td(v, { relative: s }), U = yx(v, { replace: c, state: f, target: h, preventScrollReset: C, relative: s, viewTransition: S });
  function q(Y) {
    i && i(Y), Y.defaultPrevented || U(Y);
  }
  __name(q, "q");
  return $.createElement("a", Jr({}, j, { href: P || L, onClick: I || u ? i : q, ref: o, target: h }));
});
var gx = $.forwardRef(function(n, o) {
  let { "aria-current": i = "page", caseSensitive: s = false, className: u = "", end: c = false, style: f, to: h, viewTransition: v, children: C } = n, S = Od(n, cx), j = _s(h, { relative: S.relative }), R = tr(), P = $.useContext(Ss), { navigator: I, basename: L } = $.useContext(Kr), U = P != null && kx(j) && v === true, q = I.encodeLocation ? I.encodeLocation(j).pathname : j.pathname, Y = R.pathname, G = P && P.navigation && P.navigation.location ? P.navigation.location.pathname : null;
  s || (Y = Y.toLowerCase(), G = G ? G.toLowerCase() : null, q = q.toLowerCase()), G && L && (G = jr(G, L) || G);
  const ye = q !== "/" && q.endsWith("/") ? q.length - 1 : q.length;
  let Q = Y === q || !c && Y.startsWith(q) && Y.charAt(ye) === "/", J = G != null && (G === q || !c && G.startsWith(q) && G.charAt(q.length) === "/"), ce = { isActive: Q, isPending: J, isTransitioning: U }, ve = Q ? i : void 0, $e;
  typeof u == "function" ? $e = u(ce) : $e = [u, Q ? "active" : null, J ? "pending" : null, U ? "transitioning" : null].filter(Boolean).join(" ");
  let Ie = typeof f == "function" ? f(ce) : f;
  return $.createElement(Zm, Jr({}, S, { "aria-current": ve, className: $e, ref: o, style: Ie, to: h, viewTransition: v }), typeof C == "function" ? C(ce) : C);
});
var eg = $.forwardRef((t, n) => {
  let { fetcherKey: o, navigate: i, reloadDocument: s, replace: u, state: c, method: f = Fl, action: h, onSubmit: v, relative: C, preventScrollReset: S, viewTransition: j } = t, R = Od(t, dx), P = rg(), I = xx(h, { relative: C }), L = f.toLowerCase() === "get" ? "get" : "post", U = /* @__PURE__ */ __name((q) => {
    if (v && v(q), q.defaultPrevented) return;
    q.preventDefault();
    let Y = q.nativeEvent.submitter, G = (Y == null ? void 0 : Y.getAttribute("formmethod")) || f;
    P(Y || q.currentTarget, { fetcherKey: o, method: G, navigate: i, replace: u, state: c, relative: C, preventScrollReset: S, viewTransition: j });
  }, "U");
  return $.createElement("form", Jr({ ref: n, method: L, action: I, onSubmit: s ? v : U }, R));
});
var xi;
(function(t) {
  t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher", t.useViewTransitionState = "useViewTransitionState";
})(xi || (xi = {}));
var ps;
(function(t) {
  t.UseFetcher = "useFetcher", t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration";
})(ps || (ps = {}));
function pu(t) {
  let n = $.useContext(Si);
  return n || qe(false), n;
}
__name(pu, "pu");
function Ld(t) {
  let n = $.useContext(Ss);
  return n || qe(false), n;
}
__name(Ld, "Ld");
function yx(t, n) {
  let { target: o, replace: i, state: s, preventScrollReset: u, relative: c, viewTransition: f } = n === void 0 ? {} : n, h = Es(), v = tr(), C = _s(t, { relative: c });
  return $.useCallback((S) => {
    if (ax(S, o)) {
      S.preventDefault();
      let j = i !== void 0 ? i : Uo(v) === Uo(C);
      h(t, { replace: j, state: s, preventScrollReset: u, relative: c, viewTransition: f });
    }
  }, [v, h, C, i, s, o, t, u, c, f]);
}
__name(yx, "yx");
function vx() {
  if (typeof document > "u") throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
__name(vx, "vx");
var wx = 0;
var tg = /* @__PURE__ */ __name(() => "__" + String(++wx) + "__", "tg");
function rg() {
  let { router: t } = pu(xi.UseSubmit), { basename: n } = $.useContext(Kr), o = Hw();
  return $.useCallback(function(i, s) {
    s === void 0 && (s = {}), vx();
    let { action: u, method: c, encType: f, formData: h, body: v } = lx(i, n);
    if (s.navigate === false) {
      let C = s.fetcherKey || tg();
      t.fetch(C, o, s.action || u, { preventScrollReset: s.preventScrollReset, formData: h, body: v, formMethod: s.method || c, formEncType: s.encType || f, flushSync: s.flushSync });
    } else t.navigate(s.action || u, { preventScrollReset: s.preventScrollReset, formData: h, body: v, formMethod: s.method || c, formEncType: s.encType || f, replace: s.replace, state: s.state, fromRouteId: o, flushSync: s.flushSync, viewTransition: s.viewTransition });
  }, [t, n, o]);
}
__name(rg, "rg");
function xx(t, n) {
  let { relative: o } = n === void 0 ? {} : n, { basename: i } = $.useContext(Kr), s = $.useContext(Pn);
  s || qe(false);
  let [u] = s.matches.slice(-1), c = Jr({}, _s(t || ".", { relative: o })), f = tr();
  if (t == null) {
    c.search = f.search;
    let h = new URLSearchParams(c.search), v = h.getAll("index");
    if (v.some((S) => S === "")) {
      h.delete("index"), v.filter((j) => j).forEach((j) => h.append("index", j));
      let S = h.toString();
      c.search = S ? "?" + S : "";
    }
  }
  return (!t || t === ".") && u.route.index && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (c.pathname = c.pathname === "/" ? i : Cn([i, c.pathname])), Uo(c);
}
__name(xx, "xx");
function Sx(t) {
  var n;
  let { key: o } = t === void 0 ? {} : t, { router: i } = pu(xi.UseFetcher), s = Ld(ps.UseFetcher), u = $.useContext(Xm), c = $.useContext(Pn), f = (n = c.matches[c.matches.length - 1]) == null ? void 0 : n.route.id;
  u || qe(false), c || qe(false), f == null && qe(false);
  let h = _h ? _h() : "", [v, C] = $.useState(o || h);
  o && o !== v ? C(o) : v || C(tg()), $.useEffect(() => (i.getFetcher(v), () => {
    i.deleteFetcher(v);
  }), [i, v]);
  let S = $.useCallback((q, Y) => {
    f || qe(false), i.fetch(v, f, q, Y);
  }, [v, f, i]), j = rg(), R = $.useCallback((q, Y) => {
    j(q, Jr({}, Y, { navigate: false, fetcherKey: v }));
  }, [v, j]), P = $.useMemo(() => $.forwardRef((Y, G) => $.createElement(eg, Jr({}, Y, { navigate: false, fetcherKey: v, ref: G }))), [v]), I = s.fetchers.get(v) || Mm, L = u.get(v);
  return $.useMemo(() => Jr({ Form: P, submit: R, load: S }, I, { data: L }), [P, R, S, I, L]);
}
__name(Sx, "Sx");
function Cx() {
  let t = Ld(ps.UseFetchers);
  return Array.from(t.fetchers.entries()).map((n) => {
    let [o, i] = n;
    return Jr({}, i, { key: o });
  });
}
__name(Cx, "Cx");
var kh = "react-router-scroll-positions";
var Ll = {};
function Ex(t) {
  let { getKey: n, storageKey: o } = t === void 0 ? {} : t, { router: i } = pu(xi.UseScrollRestoration), { restoreScrollPosition: s, preventScrollReset: u } = Ld(ps.UseScrollRestoration), { basename: c } = $.useContext(Kr), f = tr(), h = Ym(), v = Ei();
  $.useEffect(() => (window.history.scrollRestoration = "manual", () => {
    window.history.scrollRestoration = "auto";
  }), []), _x($.useCallback(() => {
    if (v.state === "idle") {
      let C = (n ? n(f, h) : null) || f.key;
      Ll[C] = window.scrollY;
    }
    try {
      sessionStorage.setItem(o || kh, JSON.stringify(Ll));
    } catch {
    }
    window.history.scrollRestoration = "auto";
  }, [o, n, v.state, f, h])), typeof document < "u" && ($.useLayoutEffect(() => {
    try {
      let C = sessionStorage.getItem(o || kh);
      C && (Ll = JSON.parse(C));
    } catch {
    }
  }, [o]), $.useLayoutEffect(() => {
    let C = n && c !== "/" ? (j, R) => n(Jr({}, j, { pathname: jr(j.pathname, c) || j.pathname }), R) : n, S = i == null ? void 0 : i.enableScrollRestoration(Ll, () => window.scrollY, C);
    return () => S && S();
  }, [i, c, n]), $.useLayoutEffect(() => {
    if (s !== false) {
      if (typeof s == "number") {
        window.scrollTo(0, s);
        return;
      }
      if (f.hash) {
        let C = document.getElementById(decodeURIComponent(f.hash.slice(1)));
        if (C) {
          C.scrollIntoView();
          return;
        }
      }
      u !== true && window.scrollTo(0, 0);
    }
  }, [f, s, u]));
}
__name(Ex, "Ex");
function _x(t, n) {
  let { capture: o } = {};
  $.useEffect(() => {
    let i = o != null ? { capture: o } : void 0;
    return window.addEventListener("pagehide", t, i), () => {
      window.removeEventListener("pagehide", t, i);
    };
  }, [t, o]);
}
__name(_x, "_x");
function kx(t, n) {
  n === void 0 && (n = {});
  let o = $.useContext(Km);
  o == null && qe(false);
  let { basename: i } = pu(xi.useViewTransitionState), s = _s(t, { relative: n.relative });
  if (!o.isTransitioning) return false;
  let u = jr(o.currentLocation.pathname, i) || o.currentLocation.pathname, c = jr(o.nextLocation.pathname, i) || o.nextLocation.pathname;
  return hd(s.pathname, c) != null || hd(s.pathname, u) != null;
}
__name(kx, "kx");
var Dl = {};
var Ph;
function Px() {
  if (Ph) return Dl;
  Ph = 1, Dl.parse = o, Dl.serialize = i;
  var t = Object.prototype.toString, n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function o(h, v) {
    if (typeof h != "string") throw new TypeError("argument str must be a string");
    for (var C = {}, S = v || {}, j = S.decode || s, R = 0; R < h.length; ) {
      var P = h.indexOf("=", R);
      if (P === -1) break;
      var I = h.indexOf(";", R);
      if (I === -1) I = h.length;
      else if (I < P) {
        R = h.lastIndexOf(";", P - 1) + 1;
        continue;
      }
      var L = h.slice(R, P).trim();
      if (C[L] === void 0) {
        var U = h.slice(P + 1, I).trim();
        U.charCodeAt(0) === 34 && (U = U.slice(1, -1)), C[L] = f(U, j);
      }
      R = I + 1;
    }
    return C;
  }
  __name(o, "o");
  function i(h, v, C) {
    var S = C || {}, j = S.encode || u;
    if (typeof j != "function") throw new TypeError("option encode is invalid");
    if (!n.test(h)) throw new TypeError("argument name is invalid");
    var R = j(v);
    if (R && !n.test(R)) throw new TypeError("argument val is invalid");
    var P = h + "=" + R;
    if (S.maxAge != null) {
      var I = S.maxAge - 0;
      if (isNaN(I) || !isFinite(I)) throw new TypeError("option maxAge is invalid");
      P += "; Max-Age=" + Math.floor(I);
    }
    if (S.domain) {
      if (!n.test(S.domain)) throw new TypeError("option domain is invalid");
      P += "; Domain=" + S.domain;
    }
    if (S.path) {
      if (!n.test(S.path)) throw new TypeError("option path is invalid");
      P += "; Path=" + S.path;
    }
    if (S.expires) {
      var L = S.expires;
      if (!c(L) || isNaN(L.valueOf())) throw new TypeError("option expires is invalid");
      P += "; Expires=" + L.toUTCString();
    }
    if (S.httpOnly && (P += "; HttpOnly"), S.secure && (P += "; Secure"), S.partitioned && (P += "; Partitioned"), S.priority) {
      var U = typeof S.priority == "string" ? S.priority.toLowerCase() : S.priority;
      switch (U) {
        case "low":
          P += "; Priority=Low";
          break;
        case "medium":
          P += "; Priority=Medium";
          break;
        case "high":
          P += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (S.sameSite) {
      var q = typeof S.sameSite == "string" ? S.sameSite.toLowerCase() : S.sameSite;
      switch (q) {
        case true:
          P += "; SameSite=Strict";
          break;
        case "lax":
          P += "; SameSite=Lax";
          break;
        case "strict":
          P += "; SameSite=Strict";
          break;
        case "none":
          P += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return P;
  }
  __name(i, "i");
  function s(h) {
    return h.indexOf("%") !== -1 ? decodeURIComponent(h) : h;
  }
  __name(s, "s");
  function u(h) {
    return encodeURIComponent(h);
  }
  __name(u, "u");
  function c(h) {
    return t.call(h) === "[object Date]" || h instanceof Date;
  }
  __name(c, "c");
  function f(h, v) {
    try {
      return v(h);
    } catch {
      return h;
    }
  }
  __name(f, "f");
  return Dl;
}
__name(Px, "Px");
var jh = Px();
var Rh = {};
function ng(t, n) {
  !t && !Rh[n] && (Rh[n] = true, console.warn(n));
}
__name(ng, "ng");
var jx = /* @__PURE__ */ __name(({ sign: t, unsign: n }) => (o, i = {}) => {
  let { secrets: s = [], ...u } = { path: "/", sameSite: "lax", ...i };
  return Lx(o, u.expires), { get name() {
    return o;
  }, get isSigned() {
    return s.length > 0;
  }, get expires() {
    return typeof u.maxAge < "u" ? new Date(Date.now() + u.maxAge * 1e3) : u.expires;
  }, async parse(c, f) {
    if (!c) return null;
    let h = jh.parse(c, { ...u, ...f });
    return o in h ? h[o] === "" ? "" : await Ix(n, h[o], s) : null;
  }, async serialize(c, f) {
    return jh.serialize(o, c === "" ? "" : await $x(t, c, s), { ...u, ...f });
  } };
}, "jx");
var Rx = /* @__PURE__ */ __name((t) => t != null && typeof t.name == "string" && typeof t.isSigned == "boolean" && typeof t.parse == "function" && typeof t.serialize == "function", "Rx");
async function $x(t, n, o) {
  let i = Tx(n);
  return o.length > 0 && (i = await t(i, o[0])), i;
}
__name($x, "$x");
async function Ix(t, n, o) {
  if (o.length > 0) {
    for (let i of o) {
      let s = await t(n, i);
      if (s !== false) return $h(s);
    }
    return null;
  }
  return $h(n);
}
__name(Ix, "Ix");
function Tx(t) {
  return btoa(Ox(encodeURIComponent(JSON.stringify(t))));
}
__name(Tx, "Tx");
function $h(t) {
  try {
    return JSON.parse(decodeURIComponent(Ax(atob(t))));
  } catch {
    return {};
  }
}
__name($h, "$h");
function Ax(t) {
  let n = t.toString(), o = "", i = 0, s, u;
  for (; i < n.length; ) s = n.charAt(i++), /[\w*+\-./@]/.exec(s) ? o += s : (u = s.charCodeAt(0), u < 256 ? o += "%" + Ih(u, 2) : o += "%u" + Ih(u, 4).toUpperCase());
  return o;
}
__name(Ax, "Ax");
function Ih(t, n) {
  let o = t.toString(16);
  for (; o.length < n; ) o = "0" + o;
  return o;
}
__name(Ih, "Ih");
function Ox(t) {
  let n = t.toString(), o = "", i = 0, s, u;
  for (; i < n.length; ) {
    if (s = n.charAt(i++), s === "%") {
      if (n.charAt(i) === "u") {
        if (u = n.slice(i + 1, i + 5), /^[\da-f]{4}$/i.exec(u)) {
          o += String.fromCharCode(parseInt(u, 16)), i += 5;
          continue;
        }
      } else if (u = n.slice(i, i + 2), /^[\da-f]{2}$/i.exec(u)) {
        o += String.fromCharCode(parseInt(u, 16)), i += 2;
        continue;
      }
    }
    o += s;
  }
  return o;
}
__name(Ox, "Ox");
function Lx(t, n) {
  ng(!n, `The "${t}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`);
}
__name(Lx, "Lx");
var En = function(t) {
  return t.Development = "development", t.Production = "production", t.Test = "test", t;
}({});
function Dx(t) {
  return t === En.Development || t === En.Production || t === En.Test;
}
__name(Dx, "Dx");
function hu(t, n) {
  if (t instanceof Error && n !== En.Development) {
    let o = new Error("Unexpected Server Error");
    return o.stack = void 0, o;
  }
  return t;
}
__name(hu, "hu");
function tu(t, n) {
  return Object.entries(t).reduce((o, [i, s]) => Object.assign(o, { [i]: hu(s, n) }), {});
}
__name(tu, "tu");
function mu(t, n) {
  let o = hu(t, n);
  return { message: o.message, stack: o.stack };
}
__name(mu, "mu");
function Th(t, n) {
  if (!t) return null;
  let o = Object.entries(t), i = {};
  for (let [s, u] of o) if (Ot(u)) i[s] = { ...u, __type: "RouteErrorResponse" };
  else if (u instanceof Error) {
    let c = hu(u, n);
    i[s] = { message: c.message, stack: c.stack, __type: "Error", ...c.name !== "Error" ? { __subType: c.name } : {} };
  } else i[s] = u;
  return i;
}
__name(Th, "Th");
var gu = /* @__PURE__ */ __name((t, n = {}) => $d(t, n), "gu");
var kn = /* @__PURE__ */ __name((t, n = 302) => sw(t, n), "kn");
function Nx(t) {
  let n = t;
  return n && typeof n == "object" && typeof n.data == "object" && typeof n.subscribe == "function" && typeof n.cancel == "function" && typeof n.resolveData == "function";
}
__name(Nx, "Nx");
function _n(t) {
  return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.headers == "object" && typeof t.body < "u";
}
__name(_n, "_n");
var bx = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function yu(t) {
  return bx.has(t);
}
__name(yu, "yu");
function md(t) {
  return yu(t.status);
}
__name(md, "md");
function Ux(t) {
  return t != null && typeof t.then == "function" && t._tracked === true;
}
__name(Ux, "Ux");
var Mx = "__deferred_promise:";
function Fx(t, n, o) {
  let i = new TextEncoder();
  return new ReadableStream({ async start(u) {
    let c = {}, f = [];
    for (let [v, C] of Object.entries(t.data)) Ux(C) ? (c[v] = `${Mx}${v}`, (typeof C._data < "u" || typeof C._error < "u") && f.push(v)) : c[v] = C;
    u.enqueue(i.encode(JSON.stringify(c) + `

`));
    for (let v of f) Ah(u, i, v, t.data[v], o);
    let h = t.subscribe((v, C) => {
      C && Ah(u, i, C, t.data[C], o);
    });
    await t.resolveData(n), h(), u.close();
  } });
}
__name(Fx, "Fx");
function Ah(t, n, o, i, s) {
  "_error" in i ? t.enqueue(n.encode("error:" + JSON.stringify({ [o]: i._error instanceof Error ? mu(i._error, s) : i._error }) + `

`)) : t.enqueue(n.encode("data:" + JSON.stringify({ [o]: i._data ?? null }) + `

`));
}
__name(Ah, "Ah");
var zx = -1;
var Hx = -2;
var Bx = -3;
var Vx = -4;
var og = -5;
var qx = -6;
var Wx = -7;
var Qx = "B";
var Gx = "D";
var zl = "E";
var Oh = "M";
var Yx = "N";
var Hl = "P";
var Jx = "R";
var Lh = "S";
var Kx = "Y";
var Xx = "U";
var Dh = "Z";
function Pr(t) {
  const { indices: n } = this, o = n.get(t);
  if (o) return [o];
  if (t === void 0) return Wx;
  if (t === null) return og;
  if (Number.isNaN(t)) return Hx;
  if (t === Number.POSITIVE_INFINITY) return qx;
  if (t === Number.NEGATIVE_INFINITY) return Bx;
  if (t === 0 && 1 / t < 0) return Vx;
  const i = this.index++;
  return n.set(t, i), Zx.call(this, t, i), i;
}
__name(Pr, "Pr");
function Zx(t, n) {
  const { deferred: o, plugins: i, postPlugins: s } = this, u = this.stringified, c = [[t, n]];
  for (; c.length > 0; ) {
    const [f, h] = c.pop(), v = /* @__PURE__ */ __name((S) => Object.keys(S).map((j) => `"_${Pr.call(this, j)}":${Pr.call(this, S[j])}`).join(","), "v");
    let C = null;
    switch (typeof f) {
      case "boolean":
      case "number":
      case "string":
        u[h] = JSON.stringify(f);
        break;
      case "bigint":
        u[h] = `["${Qx}","${f}"]`;
        break;
      case "symbol": {
        const S = Symbol.keyFor(f);
        S ? u[h] = `["${Kx}",${JSON.stringify(S)}]` : C = new Error("Cannot encode symbol unless created with Symbol.for()");
        break;
      }
      case "object": {
        if (!f) {
          u[h] = `${og}`;
          break;
        }
        const S = Array.isArray(f);
        let j = false;
        if (!S && i) for (const R of i) {
          const P = R(f);
          if (Array.isArray(P)) {
            j = true;
            const [I, ...L] = P;
            u[h] = `[${JSON.stringify(I)}`, L.length > 0 && (u[h] += `,${L.map((U) => Pr.call(this, U)).join(",")}`), u[h] += "]";
            break;
          }
        }
        if (!j) {
          let R = S ? "[" : "{";
          if (S) {
            for (let P = 0; P < f.length; P++) R += (P ? "," : "") + (P in f ? Pr.call(this, f[P]) : zx);
            u[h] = `${R}]`;
          } else f instanceof Date ? u[h] = `["${Gx}",${f.getTime()}]` : f instanceof URL ? u[h] = `["${Xx}",${JSON.stringify(f.href)}]` : f instanceof RegExp ? u[h] = `["${Jx}",${JSON.stringify(f.source)},${JSON.stringify(f.flags)}]` : f instanceof Set ? f.size > 0 ? u[h] = `["${Lh}",${[...f].map((P) => Pr.call(this, P)).join(",")}]` : u[h] = `["${Lh}"]` : f instanceof Map ? f.size > 0 ? u[h] = `["${Oh}",${[...f].flatMap(([P, I]) => [Pr.call(this, P), Pr.call(this, I)]).join(",")}]` : u[h] = `["${Oh}"]` : f instanceof Promise ? (u[h] = `["${Hl}",${h}]`, o[h] = f) : f instanceof Error ? (u[h] = `["${zl}",${JSON.stringify(f.message)}`, f.name !== "Error" && (u[h] += `,${JSON.stringify(f.name)}`), u[h] += "]") : Object.getPrototypeOf(f) === null ? u[h] = `["${Yx}",{${v(f)}}]` : t0(f) ? u[h] = `{${v(f)}}` : C = new Error("Cannot encode object with prototype");
        }
        break;
      }
      default: {
        const S = Array.isArray(f);
        let j = false;
        if (!S && i) for (const R of i) {
          const P = R(f);
          if (Array.isArray(P)) {
            j = true;
            const [I, ...L] = P;
            u[h] = `[${JSON.stringify(I)}`, L.length > 0 && (u[h] += `,${L.map((U) => Pr.call(this, U)).join(",")}`), u[h] += "]";
            break;
          }
        }
        j || (C = new Error("Cannot encode function or unexpected type"));
      }
    }
    if (C) {
      let S = false;
      if (s) for (const j of s) {
        const R = j(f);
        if (Array.isArray(R)) {
          S = true;
          const [P, ...I] = R;
          u[h] = `[${JSON.stringify(P)}`, I.length > 0 && (u[h] += `,${I.map((L) => Pr.call(this, L)).join(",")}`), u[h] += "]";
          break;
        }
      }
      if (!S) throw C;
    }
  }
}
__name(Zx, "Zx");
var e0 = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function t0(t) {
  const n = Object.getPrototypeOf(t);
  return n === Object.prototype || n === null || Object.getOwnPropertyNames(n).sort().join("\0") === e0;
}
__name(t0, "t0");
function r0(t, n) {
  const { plugins: o, postPlugins: i, signal: s } = n ?? {}, u = { deferred: {}, index: 0, indices: /* @__PURE__ */ new Map(), stringified: [], plugins: o, postPlugins: i, signal: s }, c = new TextEncoder();
  let f = 0;
  return new ReadableStream({ async start(v) {
    const C = Pr.call(u, t);
    if (Array.isArray(C)) throw new Error("This should never happen");
    C < 0 ? v.enqueue(c.encode(`${C}
`)) : (v.enqueue(c.encode(`[${u.stringified.join(",")}]
`)), f = u.stringified.length - 1);
    const S = /* @__PURE__ */ new WeakSet();
    for (; Object.keys(u.deferred).length > 0; ) {
      for (const [j, R] of Object.entries(u.deferred)) S.has(R) || S.add(u.deferred[Number(j)] = n0(R, u.signal).then((P) => {
        const I = Pr.call(u, P);
        if (Array.isArray(I)) v.enqueue(c.encode(`${Hl}${j}:[["${Dh}",${I[0]}]]
`)), u.index++, f++;
        else if (I < 0) v.enqueue(c.encode(`${Hl}${j}:${I}
`));
        else {
          const L = u.stringified.slice(f + 1).join(",");
          v.enqueue(c.encode(`${Hl}${j}:[${L}]
`)), f = u.stringified.length - 1;
        }
      }, (P) => {
        (!P || typeof P != "object" || !(P instanceof Error)) && (P = new Error("An unknown error occurred"));
        const I = Pr.call(u, P);
        if (Array.isArray(I)) v.enqueue(c.encode(`${zl}${j}:[["${Dh}",${I[0]}]]
`)), u.index++, f++;
        else if (I < 0) v.enqueue(c.encode(`${zl}${j}:${I}
`));
        else {
          const L = u.stringified.slice(f + 1).join(",");
          v.enqueue(c.encode(`${zl}${j}:[${L}]
`)), f = u.stringified.length - 1;
        }
      }).finally(() => {
        delete u.deferred[Number(j)];
      }));
      await Promise.race(Object.values(u.deferred));
    }
    await Promise.all(Object.values(u.deferred)), v.close();
  } });
}
__name(r0, "r0");
function n0(t, n) {
  if (!n) return t;
  if (n.aborted) return Promise.reject(n.reason || new Error("Signal was aborted."));
  const o = new Promise((i, s) => {
    n.addEventListener("abort", (u) => {
      s(n.reason || new Error("Signal was aborted."));
    }), t.then(i).catch(s);
  });
  return o.catch(() => {
  }), Promise.race([o, t]);
}
__name(n0, "n0");
var fi = { exports: {} };
var Nh;
function o0() {
  if (Nh) return fi.exports;
  Nh = 1;
  var t = { decodeValues: true, map: false, silent: false };
  function n(c) {
    return typeof c == "string" && !!c.trim();
  }
  __name(n, "n");
  function o(c, f) {
    var h = c.split(";").filter(n), v = h.shift(), C = i(v), S = C.name, j = C.value;
    f = f ? Object.assign({}, t, f) : t;
    try {
      j = f.decodeValues ? decodeURIComponent(j) : j;
    } catch (P) {
      console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + j + "'. Set options.decodeValues to false to disable this feature.", P);
    }
    var R = { name: S, value: j };
    return h.forEach(function(P) {
      var I = P.split("="), L = I.shift().trimLeft().toLowerCase(), U = I.join("=");
      L === "expires" ? R.expires = new Date(U) : L === "max-age" ? R.maxAge = parseInt(U, 10) : L === "secure" ? R.secure = true : L === "httponly" ? R.httpOnly = true : L === "samesite" ? R.sameSite = U : L === "partitioned" ? R.partitioned = true : R[L] = U;
    }), R;
  }
  __name(o, "o");
  function i(c) {
    var f = "", h = "", v = c.split("=");
    return v.length > 1 ? (f = v.shift(), h = v.join("=")) : h = c, { name: f, value: h };
  }
  __name(i, "i");
  function s(c, f) {
    if (f = f ? Object.assign({}, t, f) : t, !c) return f.map ? {} : [];
    if (c.headers) if (typeof c.headers.getSetCookie == "function") c = c.headers.getSetCookie();
    else if (c.headers["set-cookie"]) c = c.headers["set-cookie"];
    else {
      var h = c.headers[Object.keys(c.headers).find(function(C) {
        return C.toLowerCase() === "set-cookie";
      })];
      !h && c.headers.cookie && !f.silent && console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), c = h;
    }
    if (Array.isArray(c) || (c = [c]), f.map) {
      var v = {};
      return c.filter(n).reduce(function(C, S) {
        var j = o(S, f);
        return C[j.name] = j, C;
      }, v);
    } else return c.filter(n).map(function(C) {
      return o(C, f);
    });
  }
  __name(s, "s");
  function u(c) {
    if (Array.isArray(c)) return c;
    if (typeof c != "string") return [];
    var f = [], h = 0, v, C, S, j, R;
    function P() {
      for (; h < c.length && /\s/.test(c.charAt(h)); ) h += 1;
      return h < c.length;
    }
    __name(P, "P");
    function I() {
      return C = c.charAt(h), C !== "=" && C !== ";" && C !== ",";
    }
    __name(I, "I");
    for (; h < c.length; ) {
      for (v = h, R = false; P(); ) if (C = c.charAt(h), C === ",") {
        for (S = h, h += 1, P(), j = h; h < c.length && I(); ) h += 1;
        h < c.length && c.charAt(h) === "=" ? (R = true, h = j, f.push(c.substring(v, S)), v = h) : h = S + 1;
      } else h += 1;
      (!R || h >= c.length) && f.push(c.substring(v, c.length));
    }
    return f;
  }
  __name(u, "u");
  return fi.exports = s, fi.exports.parse = s, fi.exports.parseString = o, fi.exports.splitCookiesString = u, fi.exports;
}
__name(o0, "o0");
var a0 = o0();
function Dd(t, n) {
  let o = n.errors ? n.matches.findIndex((u) => n.errors[u.route.id]) : -1, i = o >= 0 ? n.matches.slice(0, o + 1) : n.matches, s;
  if (o >= 0) {
    let { actionHeaders: u, actionData: c, loaderHeaders: f, loaderData: h } = n;
    n.matches.slice(o).some((v) => {
      let C = v.route.id;
      return u[C] && (!c || c[C] === void 0) ? s = u[C] : f[C] && h[C] === void 0 && (s = f[C]), s != null;
    });
  }
  return i.reduce((u, c, f) => {
    let { id: h } = c.route, v = t.routes[h].module, C = n.loaderHeaders[h] || new Headers(), S = n.actionHeaders[h] || new Headers(), j = s != null && f === i.length - 1, R = j && s !== C && s !== S;
    if (v.headers == null) {
      let I = new Headers(u);
      return R && Ea(s, I), Ea(S, I), Ea(C, I), I;
    }
    let P = new Headers(v.headers ? typeof v.headers == "function" ? v.headers({ loaderHeaders: C, parentHeaders: u, actionHeaders: S, errorHeaders: j ? s : void 0 }) : v.headers : void 0);
    return R && Ea(s, P), Ea(S, P), Ea(C, P), Ea(u, P), P;
  }, new Headers());
}
__name(Dd, "Dd");
function Ea(t, n) {
  let o = t.get("Set-Cookie");
  if (o) {
    var i;
    let s = a0.splitCookiesString(o), u = new Set((i = n.getSetCookie) === null || i === void 0 ? void 0 : i.call(n));
    s.forEach((c) => {
      u.has(c) || n.append("Set-Cookie", c);
    });
  }
}
__name(Ea, "Ea");
var hs = Symbol("SingleFetchRedirect");
var ms = 202;
function ag({ isActionDataRequest: t, loadRouteIds: n } = {}) {
  return async ({ request: o, matches: i }) => {
    if (t && o.method === "GET") return {};
    let s = n ? i.filter((c) => n.includes(c.route.id)) : i;
    return (await Promise.all(s.map((c) => c.resolve()))).reduce((c, f, h) => Object.assign(c, { [s[h].route.id]: f }), {});
  };
}
__name(ag, "ag");
async function i0(t, n, o, i, s, u, c) {
  try {
    let f = new Request(s, { method: i.method, body: i.body, headers: i.headers, signal: i.signal, ...i.body ? { duplex: "half" } : void 0 }), h = await o.query(f, { requestContext: u, skipLoaderErrorBubbling: true, dataStrategy: ag({ isActionDataRequest: true }) });
    if (_n(h)) return { result: gs(h.status, h.headers, t.basename), headers: h.headers, status: ms };
    let v = h, C = Dd(t, v);
    if (yu(v.statusCode) && C.has("Location")) return { result: gs(v.statusCode, C, t.basename), headers: C, status: ms };
    v.errors && (Object.values(v.errors).forEach((j) => {
      (!Ot(j) || j.error) && c(j);
    }), v.errors = tu(v.errors, n));
    let S;
    return v.errors ? S = { error: Object.values(v.errors)[0] } : S = { data: Object.values(v.actionData || {})[0] }, { result: S, headers: C, status: v.statusCode };
  } catch (f) {
    return c(f), { result: { error: f }, headers: new Headers(), status: 500 };
  }
}
__name(i0, "i0");
async function s0(t, n, o, i, s, u, c) {
  try {
    var f;
    let h = new Request(s, { headers: i.headers, signal: i.signal }), v = ((f = new URL(i.url).searchParams.get("_routes")) === null || f === void 0 ? void 0 : f.split(",")) || void 0, C = await o.query(h, { requestContext: u, skipLoaderErrorBubbling: true, dataStrategy: ag({ loadRouteIds: v }) });
    if (_n(C)) return { result: { [hs]: gs(C.status, C.headers, t.basename) }, headers: C.headers, status: ms };
    let S = C, j = Dd(t, S);
    if (yu(S.statusCode) && j.has("Location")) return { result: { [hs]: gs(S.statusCode, j, t.basename) }, headers: j, status: ms };
    S.errors && (Object.values(S.errors).forEach((I) => {
      (!Ot(I) || I.error) && c(I);
    }), S.errors = tu(S.errors, n));
    let R = {};
    return (v ? S.matches.filter((I) => I.route.loader && v.includes(I.route.id)) : S.matches).forEach((I) => {
      var L, U;
      let q = (L = S.loaderData) === null || L === void 0 ? void 0 : L[I.route.id], Y = (U = S.errors) === null || U === void 0 ? void 0 : U[I.route.id];
      Y !== void 0 ? R[I.route.id] = { error: Y } : q !== void 0 && (R[I.route.id] = { data: q });
    }), { result: R, headers: j, status: S.statusCode };
  } catch (h) {
    return c(h), { result: { root: { error: h } }, headers: new Headers(), status: 500 };
  }
}
__name(s0, "s0");
function gs(t, n, o) {
  let i = n.get("Location");
  return o && (i = jr(i, o) || i), { redirect: i, status: t, revalidate: n.has("X-Remix-Revalidate") || n.has("Set-Cookie"), reload: n.has("X-Remix-Reload-Document"), replace: n.has("X-Remix-Replace") };
}
__name(gs, "gs");
function ru(t, n, o, i) {
  let s = new AbortController(), u = setTimeout(() => s.abort(new Error("Server Timeout")), typeof o == "number" ? o : 4950);
  return n.addEventListener("abort", () => clearTimeout(u)), r0(t, { signal: s.signal, plugins: [(c) => {
    if (c instanceof Error) {
      let { name: f, message: h, stack: v } = i === En.Production ? hu(c, i) : c;
      return ["SanitizedError", f, h, v];
    }
    if (c instanceof fs) {
      let { data: f, status: h, statusText: v } = c;
      return ["ErrorResponse", f, h, v];
    }
    if (c && typeof c == "object" && hs in c) return ["SingleFetchRedirect", c[hs]];
  }], postPlugins: [(c) => {
    if (c && typeof c == "object") return ["SingleFetchClassInstance", Object.fromEntries(Object.entries(c))];
  }, () => ["SingleFetchFallback"]] });
}
__name(ru, "ru");
function er(t, n) {
  return aw(t, n);
}
__name(er, "er");
function l0(t) {
  return Object.keys(t).reduce((n, o) => (n[o] = t[o].module, n), {});
}
__name(l0, "l0");
function bh(t, n) {
  if (t === false || t === null || typeof t > "u") throw console.error("The following error is a bug in Remix; please open an issue! https://github.com/remix-run/remix/issues/new"), new Error(n);
}
__name(bh, "bh");
function gd(t, n, o) {
  let i = wi(t, n, o);
  return i ? i.map((s) => ({ params: s.params, pathname: s.pathname, route: s.route })) : null;
}
__name(gd, "gd");
async function u0({ loadContext: t, action: n, params: o, request: i, routeId: s, singleFetch: u }) {
  let c = await n({ request: u ? sg(nu(i)) : ig(nu(i)), context: t, params: o });
  if (c === void 0) throw new Error(`You defined an action for route "${s}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);
  return u || _n(c) ? c : gu(c);
}
__name(u0, "u0");
async function c0({ loadContext: t, loader: n, params: o, request: i, routeId: s, singleFetch: u }) {
  let c = await n({ request: u ? sg(nu(i)) : ig(nu(i)), context: t, params: o });
  if (c === void 0) throw new Error(`You defined a loader for route "${s}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);
  return Nx(c) ? c.init && yu(c.init.status || 200) ? kn(new Headers(c.init.headers).get("Location"), c.init) : c : u || _n(c) ? c : gu(c);
}
__name(c0, "c0");
function nu(t) {
  let n = new URL(t.url), o = n.searchParams.getAll("index");
  n.searchParams.delete("index");
  let i = [];
  for (let u of o) u && i.push(u);
  for (let u of i) n.searchParams.append("index", u);
  let s = { method: t.method, body: t.body, headers: t.headers, signal: t.signal };
  return s.body && (s.duplex = "half"), new Request(n.href, s);
}
__name(nu, "nu");
function ig(t) {
  let n = new URL(t.url);
  n.searchParams.delete("_data");
  let o = { method: t.method, body: t.body, headers: t.headers, signal: t.signal };
  return o.body && (o.duplex = "half"), new Request(n.href, o);
}
__name(ig, "ig");
function sg(t) {
  let n = new URL(t.url);
  n.searchParams.delete("_routes");
  let o = { method: t.method, body: t.body, headers: t.headers, signal: t.signal };
  return o.body && (o.duplex = "half"), new Request(n.href, o);
}
__name(sg, "sg");
function lg(t) {
  let n = {};
  return Object.values(t).forEach((o) => {
    let i = o.parentId || "";
    n[i] || (n[i] = []), n[i].push(o);
  }), n;
}
__name(lg, "lg");
function ug(t, n = "", o = lg(t)) {
  return (o[n] || []).map((i) => ({ ...i, children: ug(t, i.id, o) }));
}
__name(ug, "ug");
function cg(t, n, o = "", i = lg(t)) {
  return (i[o] || []).map((s) => {
    let u = { hasErrorBoundary: s.id === "root" || s.module.ErrorBoundary != null, id: s.id, path: s.path, loader: s.module.loader ? (c, f) => c0({ request: c.request, params: c.params, loadContext: c.context, loader: s.module.loader, routeId: s.id, singleFetch: n.v3_singleFetch === true }) : void 0, action: s.module.action ? (c, f) => u0({ request: c.request, params: c.params, loadContext: c.context, action: s.module.action, routeId: s.id, singleFetch: n.v3_singleFetch === true }) : void 0, handle: s.module.handle };
    return s.index ? { index: true, ...u } : { caseSensitive: s.caseSensitive, children: cg(t, n, s.id, i), ...u };
  });
}
__name(cg, "cg");
var d0 = { "&": "\\u0026", ">": "\\u003e", "<": "\\u003c", "\u2028": "\\u2028", "\u2029": "\\u2029" };
var f0 = /[&><\u2028\u2029]/g;
function p0(t) {
  return t.replace(f0, (n) => d0[n]);
}
__name(p0, "p0");
function Uh(t) {
  return p0(JSON.stringify(t));
}
__name(Uh, "Uh");
var h0 = "__remix_devServerHooks";
function Mh() {
  return globalThis[h0];
}
__name(Mh, "Mh");
function m0(t, n) {
  return `\u26A0\uFE0F REMIX FUTURE CHANGE: Externally-accessed resource routes will no longer be able to return raw JavaScript objects or \`null\` in React Router v7 when Single Fetch becomes the default. You can prepare for this change at your convenience by wrapping the data returned from your \`${t}\` function in the \`${n}\` route with \`json()\`.  For instructions on making this change, see https://remix.run/docs/en/v2.13.1/guides/single-fetch#resource-routes`;
}
__name(m0, "m0");
var dg = /* @__PURE__ */ new Set([100, 101, 204, 205, 304]);
function Fh(t, n) {
  var o, i;
  let s = ug(t.routes), u = cg(t.routes, t.future), c = Dx(n) ? n : En.Production, f = gw(u, { basename: t.basename, future: { v7_relativeSplatPath: ((o = t.future) === null || o === void 0 ? void 0 : o.v3_relativeSplatPath) === true, v7_throwAbortReason: ((i = t.future) === null || i === void 0 ? void 0 : i.v3_throwAbortReason) === true } }), h = t.entry.module.handleError || ((v, { request: C }) => {
    c !== En.Test && !C.signal.aborted && console.error(Ot(v) && v.error ? v.error : v);
  });
  return { routes: s, dataRoutes: u, serverMode: c, staticHandler: f, errorHandler: h };
}
__name(Fh, "Fh");
var g0 = /* @__PURE__ */ __name((t, n) => {
  let o, i, s, u, c;
  return async function(h, v = {}) {
    if (o = typeof t == "function" ? await t() : t, n ?? (n = o.mode), typeof t == "function") {
      let q = Fh(o, n);
      i = q.routes, s = q.serverMode, u = q.staticHandler, c = q.errorHandler;
    } else if (!i || !s || !u || !c) {
      let q = Fh(o, n);
      i = q.routes, s = q.serverMode, u = q.staticHandler, c = q.errorHandler;
    }
    let C = new URL(h.url), S = {}, j = /* @__PURE__ */ __name((q) => {
      if (n === En.Development) {
        var Y, G;
        (Y = Mh()) === null || Y === void 0 || (G = Y.processRequestError) === null || G === void 0 || G.call(Y, q);
      }
      c(q, { context: v, params: S, request: h });
    }, "j"), R = `${o.basename ?? "/"}/__manifest`.replace(/\/+/g, "/");
    if (C.pathname === R) try {
      return await y0(o, i, C);
    } catch (q) {
      return j(q), new Response("Unknown Server Error", { status: 500 });
    }
    let P = gd(i, C.pathname, o.basename);
    P && P.length > 0 && Object.assign(S, P[0].params);
    let I;
    if (C.searchParams.has("_data")) {
      o.future.v3_singleFetch && j(new Error("Warning: Single fetch-enabled apps should not be making ?_data requests, this is likely to break in the future"));
      let q = C.searchParams.get("_data");
      I = await v0(s, o, u, q, h, v, j), o.entry.module.handleDataRequest && (I = await o.entry.module.handleDataRequest(I, { context: v, params: S, request: h }), md(I) && (I = hg(I, o.basename)));
    } else if (o.future.v3_singleFetch && C.pathname.endsWith(".data")) {
      let q = new URL(h.url);
      q.pathname = q.pathname.replace(/\.data$/, "").replace(/^\/_root$/, "/");
      let Y = gd(i, q.pathname, o.basename);
      if (I = await w0(s, o, u, h, q, v, j), o.entry.module.handleDataRequest && (I = await o.entry.module.handleDataRequest(I, { context: v, params: Y ? Y[0].params : {}, request: h }), md(I))) {
        let G = gs(I.status, I.headers, o.basename);
        h.method === "GET" && (G = { [hs]: G });
        let ye = new Headers(I.headers);
        return ye.set("Content-Type", "text/x-script"), new Response(ru(G, h.signal, o.entry.module.streamTimeout, s), { status: ms, headers: ye });
      }
    } else if (P && P[P.length - 1].route.module.default == null && P[P.length - 1].route.module.ErrorBoundary == null) I = await S0(s, o, u, P.slice(-1)[0].route.id, h, v, j);
    else {
      var L, U;
      let q = n === En.Development ? await ((L = Mh()) === null || L === void 0 || (U = L.getCriticalCss) === null || U === void 0 ? void 0 : U.call(L, o, C.pathname)) : void 0;
      I = await x0(s, o, u, h, v, j, q);
    }
    return h.method === "HEAD" ? new Response(null, { headers: I.headers, status: I.status, statusText: I.statusText }) : I;
  };
}, "g0");
async function y0(t, n, o) {
  if (t.assets.version !== o.searchParams.get("version")) return new Response(null, { status: 204, headers: { "X-Remix-Reload-Document": "true" } });
  let i = {};
  if (o.searchParams.has("p")) {
    let s = /* @__PURE__ */ new Set();
    o.searchParams.getAll("p").forEach((u) => {
      u.startsWith("/") || (u = `/${u}`);
      let c = u.split("/").slice(1);
      c.forEach((f, h) => {
        let v = c.slice(0, h + 1).join("/");
        s.add(`/${v}`);
      });
    });
    for (let u of s) {
      let c = gd(n, u, t.basename);
      if (c) for (let f of c) {
        let h = f.route.id;
        i[h] = t.assets.routes[h];
      }
    }
    return gu(i, { headers: { "Cache-Control": "public, max-age=31536000, immutable" } });
  }
  return new Response("Invalid Request", { status: 400 });
}
__name(y0, "y0");
async function v0(t, n, o, i, s, u, c) {
  try {
    let f = await o.queryRoute(s, { routeId: i, requestContext: u });
    if (md(f)) return hg(f, n.basename);
    if (Kl in f) {
      let h = f[Kl], v = Fx(h, s.signal, t), C = h.init || {}, S = new Headers(C.headers);
      return S.set("Content-Type", "text/remix-deferred"), S.set("X-Remix-Response", "yes"), C.headers = S, new Response(v, C);
    }
    return f = yd(f, "X-Remix-Response", "yes"), f;
  } catch (f) {
    if (_n(f)) return yd(f, "X-Remix-Catch", "yes");
    if (Ot(f)) return c(f), fg(f, t);
    let h = f instanceof Error || f instanceof DOMException ? f : new Error("Unexpected Server Error");
    return c(h), $d(mu(h, t), { status: 500, headers: { "X-Remix-Error": "yes" } });
  }
}
__name(v0, "v0");
async function w0(t, n, o, i, s, u, c) {
  let { result: f, headers: h, status: v } = i.method !== "GET" ? await i0(n, t, o, i, s, u, c) : await s0(n, t, o, i, s, u, c), C = new Headers(h);
  return C.set("X-Remix-Response", "yes"), dg.has(v) ? new Response(null, { status: v, headers: C }) : (C.set("Content-Type", "text/x-script"), new Response(ru(f, i.signal, n.entry.module.streamTimeout, t), { status: v || 200, headers: C }));
}
__name(w0, "w0");
async function x0(t, n, o, i, s, u, c) {
  let f;
  try {
    f = await o.query(i, { requestContext: s });
  } catch (j) {
    return u(j), new Response(null, { status: 500 });
  }
  if (_n(f)) return f;
  let h = Dd(n, f);
  if (dg.has(f.statusCode)) return new Response(null, { status: f.statusCode, headers: h });
  f.errors && (Object.values(f.errors).forEach((j) => {
    (!Ot(j) || j.error) && u(j);
  }), f.errors = tu(f.errors, t));
  let v = { loaderData: f.loaderData, actionData: f.actionData, errors: Th(f.errors, t) }, C = { manifest: n.assets, routeModules: l0(n.routes), staticHandlerContext: f, criticalCss: c, serverHandoffString: Uh({ basename: n.basename, criticalCss: c, future: n.future, isSpaMode: n.isSpaMode, ...n.future.v3_singleFetch ? null : { state: v } }), ...n.future.v3_singleFetch ? { serverHandoffStream: ru(v, i.signal, n.entry.module.streamTimeout, t), renderMeta: {} } : null, future: n.future, isSpaMode: n.isSpaMode, serializeError: /* @__PURE__ */ __name((j) => mu(j, t), "serializeError") }, S = n.entry.module.default;
  try {
    return await S(i, f.statusCode, h, C, s);
  } catch (j) {
    u(j);
    let R = j;
    if (_n(j)) try {
      let I = await C0(j);
      R = new fs(j.status, j.statusText, I);
    } catch {
    }
    f = yw(o.dataRoutes, f, R), f.errors && (f.errors = tu(f.errors, t));
    let P = { loaderData: f.loaderData, actionData: f.actionData, errors: Th(f.errors, t) };
    C = { ...C, staticHandlerContext: f, serverHandoffString: Uh({ basename: n.basename, future: n.future, isSpaMode: n.isSpaMode, ...n.future.v3_singleFetch ? null : { state: P } }), ...n.future.v3_singleFetch ? { serverHandoffStream: ru(P, i.signal, n.entry.module.streamTimeout, t), renderMeta: {} } : null };
    try {
      return await S(i, f.statusCode, h, C, s);
    } catch (I) {
      return u(I), pg(I, t);
    }
  }
}
__name(x0, "x0");
async function S0(t, n, o, i, s, u, c) {
  try {
    let f = await o.queryRoute(s, { routeId: i, requestContext: u });
    return typeof f == "object" && f !== null && bh(!(Kl in f), `You cannot return a \`defer()\` response from a Resource Route.  Did you forget to export a default UI component from the "${i}" route?`), n.future.v3_singleFetch && !_n(f) && (console.warn(m0(s.method === "GET" ? "loader" : "action", i)), f = gu(f)), bh(_n(f), "Expected a Response to be returned from queryRoute"), f;
  } catch (f) {
    return _n(f) ? yd(f, "X-Remix-Catch", "yes") : Ot(f) ? (f && c(f), fg(f, t)) : (c(f), pg(f, t));
  }
}
__name(S0, "S0");
function fg(t, n) {
  return $d(mu(t.error || new Error("Unexpected Server Error"), n), { status: t.status, statusText: t.statusText, headers: { "X-Remix-Error": "yes" } });
}
__name(fg, "fg");
function pg(t, n) {
  let o = "Unexpected Server Error";
  return n !== En.Production && (o += `

${String(t)}`), new Response(o, { status: 500, headers: { "Content-Type": "text/plain" } });
}
__name(pg, "pg");
function C0(t) {
  let n = t.headers.get("Content-Type");
  return n && /\bapplication\/json\b/.test(n) ? t.body == null ? null : t.json() : t.text();
}
__name(C0, "C0");
function hg(t, n) {
  let o = new Headers(t.headers), i = o.get("Location");
  return o.set("X-Remix-Redirect", n && jr(i, n) || i), o.set("X-Remix-Status", String(t.status)), o.delete("Location"), t.headers.get("Set-Cookie") !== null && o.set("X-Remix-Revalidate", "yes"), new Response(null, { status: 204, headers: o });
}
__name(hg, "hg");
function yd(t, n, o) {
  let i = new Headers(t.headers);
  return i.set(n, o), new Response(t.body, { status: t.status, statusText: t.statusText, headers: i, duplex: t.body ? "half" : void 0 });
}
__name(yd, "yd");
function td(t) {
  return `__flash_${t}__`;
}
__name(td, "td");
var E0 = /* @__PURE__ */ __name((t = {}, n = "") => {
  let o = new Map(Object.entries(t));
  return { get id() {
    return n;
  }, get data() {
    return Object.fromEntries(o);
  }, has(i) {
    return o.has(i) || o.has(td(i));
  }, get(i) {
    if (o.has(i)) return o.get(i);
    let s = td(i);
    if (o.has(s)) {
      let u = o.get(s);
      return o.delete(s), u;
    }
  }, set(i, s) {
    o.set(i, s);
  }, flash(i, s) {
    o.set(td(i), s);
  }, unset(i) {
    o.delete(i);
  } };
}, "E0");
function _0(t) {
  ng(t.isSigned, `The "${t.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`);
}
__name(_0, "_0");
var k0 = /* @__PURE__ */ __name((t) => ({ cookie: n } = {}) => {
  let o = Rx(n) ? n : t((n == null ? void 0 : n.name) || "__session", n);
  return _0(o), { async getSession(i, s) {
    return E0(i && await o.parse(i, s) || {});
  }, async commitSession(i, s) {
    let u = await o.serialize(i.data, s);
    if (u.length > 4096) throw new Error("Cookie length will exceed browser maximum. Length: " + u.length);
    return u;
  }, async destroySession(i, s) {
    return o.serialize("", { ...s, maxAge: void 0, expires: /* @__PURE__ */ new Date(0) });
  } };
}, "k0");
function ct() {
  return ct = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var o = arguments[n];
      for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
    }
    return t;
  }, ct.apply(this, arguments);
}
__name(ct, "ct");
function Ps(t, n) {
  if (t === false || t === null || typeof t > "u") throw new Error(n);
}
__name(Ps, "Ps");
async function P0(t, n) {
  if (t.id in n) return n[t.id];
  try {
    let o = await import(t.module);
    return n[t.id] = o, o;
  } catch (o) {
    return console.error(`Error loading route module \`${t.module}\`, reloading page...`), console.error(o), window.__remixContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
__name(P0, "P0");
function j0(t, n, o) {
  let i = t.map((u) => {
    var c;
    let f = n[u.route.id], h = o.routes[u.route.id];
    return [h.css ? h.css.map((v) => ({ rel: "stylesheet", href: v })) : [], (f == null || (c = f.links) === null || c === void 0 ? void 0 : c.call(f)) || []];
  }).flat(2), s = A0(t, o);
  return gg(i, s);
}
__name(j0, "j0");
function mg(t) {
  return t != null && typeof t.page == "string";
}
__name(mg, "mg");
function R0(t) {
  return t == null ? false : t.href == null ? t.rel === "preload" && typeof t.imageSrcSet == "string" && typeof t.imageSizes == "string" : typeof t.rel == "string" && typeof t.href == "string";
}
__name(R0, "R0");
async function $0(t, n, o) {
  let i = await Promise.all(t.map(async (s) => {
    let u = await P0(n.routes[s.route.id], o);
    return u.links ? u.links() : [];
  }));
  return gg(i.flat(1).filter(R0).filter((s) => s.rel === "stylesheet" || s.rel === "preload").map((s) => s.rel === "stylesheet" ? { ...s, rel: "prefetch", as: "style" } : { ...s, rel: "prefetch" }));
}
__name($0, "$0");
function zh(t, n, o, i, s, u, c) {
  let f = yg(t), h = /* @__PURE__ */ __name((S, j) => o[j] ? S.route.id !== o[j].route.id : true, "h"), v = /* @__PURE__ */ __name((S, j) => {
    var R;
    return o[j].pathname !== S.pathname || ((R = o[j].route.path) === null || R === void 0 ? void 0 : R.endsWith("*")) && o[j].params["*"] !== S.params["*"];
  }, "v");
  return c === "data" && (u.v3_singleFetch || s.search !== f.search) ? n.filter((S, j) => {
    if (!i.routes[S.route.id].hasLoader) return false;
    if (h(S, j) || v(S, j)) return true;
    let P = u.v3_singleFetch || s.search !== f.search;
    if (S.route.shouldRevalidate) {
      var I;
      let L = S.route.shouldRevalidate({ currentUrl: new URL(s.pathname + s.search + s.hash, window.origin), currentParams: ((I = o[0]) === null || I === void 0 ? void 0 : I.params) || {}, nextUrl: new URL(t, window.origin), nextParams: S.params, defaultShouldRevalidate: P });
      if (typeof L == "boolean") return L;
    }
    return P;
  }) : n.filter((S, j) => {
    let R = i.routes[S.route.id];
    return (c === "assets" || R.hasLoader) && (h(S, j) || v(S, j));
  });
}
__name(zh, "zh");
function I0(t, n, o) {
  let i = yg(t);
  return Nd(n.filter((s) => o.routes[s.route.id].hasLoader && !o.routes[s.route.id].hasClientLoader).map((s) => {
    let { pathname: u, search: c } = i, f = new URLSearchParams(c);
    return f.set("_data", s.route.id), `${u}?${f}`;
  }));
}
__name(I0, "I0");
function T0(t, n) {
  return Nd(t.map((o) => {
    let i = n.routes[o.route.id], s = [i.module];
    return i.imports && (s = s.concat(i.imports)), s;
  }).flat(1));
}
__name(T0, "T0");
function A0(t, n) {
  return Nd(t.map((o) => {
    let i = n.routes[o.route.id], s = [i.module];
    return i.imports && (s = s.concat(i.imports)), s;
  }).flat(1));
}
__name(A0, "A0");
function Nd(t) {
  return [...new Set(t)];
}
__name(Nd, "Nd");
function O0(t) {
  let n = {}, o = Object.keys(t).sort();
  for (let i of o) n[i] = t[i];
  return n;
}
__name(O0, "O0");
function gg(t, n) {
  let o = /* @__PURE__ */ new Set(), i = new Set(n);
  return t.reduce((s, u) => {
    if (n && !mg(u) && u.as === "script" && u.href && i.has(u.href)) return s;
    let f = JSON.stringify(O0(u));
    return o.has(f) || (o.add(f), s.push({ key: f, link: u })), s;
  }, []);
}
__name(gg, "gg");
function yg(t) {
  let n = ja(t);
  return n.search === void 0 && (n.search = ""), n;
}
__name(yg, "yg");
var L0 = { "&": "\\u0026", ">": "\\u003e", "<": "\\u003c", "\u2028": "\\u2028", "\u2029": "\\u2029" };
var D0 = /[&><\u2028\u2029]/g;
function us(t) {
  return t.replace(D0, (n) => L0[n]);
}
__name(us, "us");
function Hh(t) {
  return { __html: t };
}
__name(Hh, "Hh");
function vg({ context: t, identifier: n, reader: o, textDecoder: i, nonce: s }) {
  if (!t.renderMeta || !t.renderMeta.didRenderScripts) return null;
  t.renderMeta.streamCache || (t.renderMeta.streamCache = {});
  let { streamCache: u } = t.renderMeta, c = u[n];
  if (c || (c = u[n] = o.read().then((C) => {
    u[n].result = { done: C.done, value: i.decode(C.value, { stream: true }) };
  }).catch((C) => {
    u[n].error = C;
  })), c.error) throw c.error;
  if (c.result === void 0) throw c;
  let { done: f, value: h } = c.result, v = h ? $.createElement("script", { nonce: s, dangerouslySetInnerHTML: { __html: `window.__remixContext.streamController.enqueue(${us(JSON.stringify(h))});` } }) : null;
  return f ? $.createElement($.Fragment, null, v, $.createElement("script", { nonce: s, dangerouslySetInnerHTML: { __html: "window.__remixContext.streamController.close();" } })) : $.createElement($.Fragment, null, v, $.createElement($.Suspense, null, $.createElement(vg, { context: t, identifier: n + 1, reader: o, textDecoder: i, nonce: s })));
}
__name(vg, "vg");
function N0(t) {
  let n = typeof t == "string" ? new URL(t, window.location.origin) : t;
  return n.pathname === "/" ? n.pathname = "_root.data" : n.pathname = `${n.pathname.replace(/\/$/, "")}.data`, n;
}
__name(N0, "N0");
var b0 = class extends $.Component {
  static {
    __name(this, "b0");
  }
  constructor(n) {
    super(n), this.state = { error: n.error || null, location: n.location };
  }
  static getDerivedStateFromError(n) {
    return { error: n };
  }
  static getDerivedStateFromProps(n, o) {
    return o.location !== n.location ? { error: n.error || null, location: n.location } : { error: n.error || o.error, location: o.location };
  }
  render() {
    return this.state.error ? $.createElement(wg, { error: this.state.error, isOutsideRemixApp: true }) : this.props.children;
  }
};
function wg({ error: t, isOutsideRemixApp: n }) {
  console.error(t);
  let o = $.createElement("script", { dangerouslySetInnerHTML: { __html: `
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      ` } });
  if (Ot(t)) return $.createElement(vd, { title: "Unhandled Thrown Response!" }, $.createElement("h1", { style: { fontSize: "24px" } }, t.status, " ", t.statusText), o);
  let i;
  if (t instanceof Error) i = t;
  else {
    let s = t == null ? "Unknown Error" : typeof t == "object" && "toString" in t ? t.toString() : JSON.stringify(t);
    i = new Error(s);
  }
  return $.createElement(vd, { title: "Application Error!", isOutsideRemixApp: n }, $.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"), $.createElement("pre", { style: { padding: "2rem", background: "hsla(10, 50%, 50%, 0.1)", color: "red", overflow: "auto" } }, i.stack), o);
}
__name(wg, "wg");
function vd({ title: t, renderScripts: n, isOutsideRemixApp: o, children: i }) {
  var s;
  let { routeModules: u } = Ra();
  return (s = u.root) !== null && s !== void 0 && s.Layout && !o ? i : $.createElement("html", { lang: "en" }, $.createElement("head", null, $.createElement("meta", { charSet: "utf-8" }), $.createElement("meta", { name: "viewport", content: "width=device-width,initial-scale=1,viewport-fit=cover" }), $.createElement("title", null, t)), $.createElement("body", null, $.createElement("main", { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } }, i, n ? $.createElement(Eg, null) : null)));
}
__name(vd, "vd");
function U0() {
  return $.createElement(vd, { title: "Loading...", renderScripts: true }, $.createElement("script", { dangerouslySetInnerHTML: { __html: `
              console.log(
                "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://remix.run/route/hydrate-fallback " +
                "for more information."
              );
            ` } }));
}
__name(U0, "U0");
function M0(t) {
  let n = {};
  return Object.values(t).forEach((o) => {
    let i = o.parentId || "";
    n[i] || (n[i] = []), n[i].push(o);
  }), n;
}
__name(M0, "M0");
function F0(t, n, o) {
  let i = z0(n), s = n.HydrateFallback && (!o || t.id === "root") ? n.HydrateFallback : t.id === "root" ? U0 : void 0, u = n.ErrorBoundary ? n.ErrorBoundary : t.id === "root" ? () => $.createElement(wg, { error: Ad() }) : void 0;
  return t.id === "root" && n.Layout ? { ...i ? { element: $.createElement(n.Layout, null, $.createElement(i, null)) } : { Component: i }, ...u ? { errorElement: $.createElement(n.Layout, null, $.createElement(u, null)) } : { ErrorBoundary: u }, ...s ? { hydrateFallbackElement: $.createElement(n.Layout, null, $.createElement(s, null)) } : { HydrateFallback: s } } : { Component: i, ErrorBoundary: u, HydrateFallback: s };
}
__name(F0, "F0");
function xg(t, n, o, i, s = "", u = M0(t), c = Promise.resolve({ Component: /* @__PURE__ */ __name(() => null, "Component") })) {
  return (u[s] || []).map((f) => {
    let h = n[f.id];
    Ps(h, "No `routeModule` available to create server routes");
    let v = { ...F0(f, h, i), caseSensitive: f.caseSensitive, id: f.id, index: f.index, path: f.path, handle: h.handle, lazy: i ? () => c : void 0, loader: f.hasLoader || f.hasClientLoader ? () => null : void 0 }, C = xg(t, n, o, i, f.id, u, c);
    return C.length > 0 && (v.children = C), v;
  });
}
__name(xg, "xg");
function z0(t) {
  if (t.default == null) return;
  if (!(typeof t.default == "object" && Object.keys(t.default).length === 0)) return t.default;
}
__name(z0, "z0");
function H0(t, n, o) {
  return o && t.id !== "root" || n.clientLoader != null && (n.clientLoader.hydrate === true || t.hasLoader !== true);
}
__name(H0, "H0");
function B0(t, n) {
  return t.v3_lazyRouteDiscovery === true && !n;
}
__name(B0, "B0");
function V0(t, n) {
  let o = new Set(n.state.matches.map((c) => c.route.id)), i = n.state.location.pathname.split("/").filter(Boolean), s = ["/"];
  for (i.pop(); i.length > 0; ) s.push(`/${i.join("/")}`), i.pop();
  s.forEach((c) => {
    let f = wi(n.routes, c, n.basename);
    f && f.forEach((h) => o.add(h.route.id));
  });
  let u = [...o].reduce((c, f) => Object.assign(c, { [f]: t.routes[f] }), {});
  return { ...t, routes: u };
}
__name(V0, "V0");
function Sg() {
  let t = $.useContext(Si);
  return Ps(t, "You must render this element inside a <DataRouterContext.Provider> element"), t;
}
__name(Sg, "Sg");
function vu() {
  let t = $.useContext(Ss);
  return Ps(t, "You must render this element inside a <DataRouterStateContext.Provider> element"), t;
}
__name(vu, "vu");
var bd = $.createContext(void 0);
bd.displayName = "Remix";
function Ra() {
  let t = $.useContext(bd);
  return Ps(t, "You must render this element inside a <Remix> element"), t;
}
__name(Ra, "Ra");
function Cg(t, n) {
  let [o, i] = $.useState(false), [s, u] = $.useState(false), { onFocus: c, onBlur: f, onMouseEnter: h, onMouseLeave: v, onTouchStart: C } = n, S = $.useRef(null);
  $.useEffect(() => {
    if (t === "render" && u(true), t === "viewport") {
      let P = /* @__PURE__ */ __name((L) => {
        L.forEach((U) => {
          u(U.isIntersecting);
        });
      }, "P"), I = new IntersectionObserver(P, { threshold: 0.5 });
      return S.current && I.observe(S.current), () => {
        I.disconnect();
      };
    }
  }, [t]);
  let j = /* @__PURE__ */ __name(() => {
    t === "intent" && i(true);
  }, "j"), R = /* @__PURE__ */ __name(() => {
    t === "intent" && (i(false), u(false));
  }, "R");
  return $.useEffect(() => {
    if (o) {
      let P = setTimeout(() => {
        u(true);
      }, 100);
      return () => {
        clearTimeout(P);
      };
    }
  }, [o]), [s, S, { onFocus: is(c, j), onBlur: is(f, R), onMouseEnter: is(h, j), onMouseLeave: is(v, R), onTouchStart: is(C, j) }];
}
__name(Cg, "Cg");
var Ud = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Md(t, n, o) {
  return t === "render" && !n && !o ? "true" : void 0;
}
__name(Md, "Md");
var io = $.forwardRef(({ to: t, prefetch: n = "none", discover: o = "render", ...i }, s) => {
  let u = typeof t == "string" && Ud.test(t), c = Td(t), [f, h, v] = Cg(n, i);
  return $.createElement($.Fragment, null, $.createElement(gx, ct({}, i, v, { ref: kg(s, h), to: t, "data-discover": Md(o, u, i.reloadDocument) })), f && !u ? $.createElement(zd, { page: c }) : null);
});
io.displayName = "NavLink";
var Xe = $.forwardRef(({ to: t, prefetch: n = "none", discover: o = "render", ...i }, s) => {
  let u = typeof t == "string" && Ud.test(t), c = Td(t), [f, h, v] = Cg(n, i);
  return $.createElement($.Fragment, null, $.createElement(Zm, ct({}, i, v, { ref: kg(s, h), to: t, "data-discover": Md(o, u, i.reloadDocument) })), f && !u ? $.createElement(zd, { page: c }) : null);
});
Xe.displayName = "Link";
var js = $.forwardRef(({ discover: t = "render", ...n }, o) => {
  let i = typeof n.action == "string" && Ud.test(n.action);
  return $.createElement(eg, ct({}, n, { ref: o, "data-discover": Md(t, i, n.reloadDocument) }));
});
js.displayName = "Form";
function is(t, n) {
  return (o) => {
    t && t(o), o.defaultPrevented || n(o);
  };
}
__name(is, "is");
function Fd(t, n, o) {
  if (o && !Bl) return [t[0]];
  if (n) {
    let i = t.findIndex((s) => n[s.route.id] !== void 0);
    return t.slice(0, i + 1);
  }
  return t;
}
__name(Fd, "Fd");
function q0() {
  let { isSpaMode: t, manifest: n, routeModules: o, criticalCss: i } = Ra(), { errors: s, matches: u } = vu(), c = Fd(u, s, t), f = $.useMemo(() => j0(c, o, n), [c, o, n]);
  return $.createElement($.Fragment, null, i ? $.createElement("style", { dangerouslySetInnerHTML: { __html: i } }) : null, f.map(({ key: h, link: v }) => mg(v) ? $.createElement(zd, ct({ key: h }, v)) : $.createElement("link", ct({ key: h }, v))));
}
__name(q0, "q0");
function zd({ page: t, ...n }) {
  let { router: o } = Sg(), i = $.useMemo(() => wi(o.routes, t, o.basename), [o.routes, t, o.basename]);
  return i ? $.createElement(Q0, ct({ page: t, matches: i }, n)) : (console.warn(`Tried to prefetch ${t} but no routes matched.`), null);
}
__name(zd, "zd");
function W0(t) {
  let { manifest: n, routeModules: o } = Ra(), [i, s] = $.useState([]);
  return $.useEffect(() => {
    let u = false;
    return $0(t, n, o).then((c) => {
      u || s(c);
    }), () => {
      u = true;
    };
  }, [t, n, o]), i;
}
__name(W0, "W0");
function Q0({ page: t, matches: n, ...o }) {
  let i = tr(), { future: s, manifest: u, routeModules: c } = Ra(), { loaderData: f, matches: h } = vu(), v = $.useMemo(() => zh(t, n, h, u, i, s, "data"), [t, n, h, u, i, s]), C = $.useMemo(() => {
    if (!s.v3_singleFetch) return I0(t, v, u);
    if (t === i.pathname + i.search + i.hash) return [];
    let P = /* @__PURE__ */ new Set(), I = false;
    if (n.forEach((U) => {
      var q;
      u.routes[U.route.id].hasLoader && (!v.some((Y) => Y.route.id === U.route.id) && U.route.id in f && (q = c[U.route.id]) !== null && q !== void 0 && q.shouldRevalidate || u.routes[U.route.id].hasClientLoader ? I = true : P.add(U.route.id));
    }), P.size === 0) return [];
    let L = N0(t);
    return I && P.size > 0 && L.searchParams.set("_routes", n.filter((U) => P.has(U.route.id)).map((U) => U.route.id).join(",")), [L.pathname + L.search];
  }, [s.v3_singleFetch, f, i, u, v, n, t, c]), S = $.useMemo(() => zh(t, n, h, u, i, s, "assets"), [t, n, h, u, i, s]), j = $.useMemo(() => T0(S, u), [S, u]), R = W0(S);
  return $.createElement($.Fragment, null, C.map((P) => $.createElement("link", ct({ key: P, rel: "prefetch", as: "fetch", href: P }, o))), j.map((P) => $.createElement("link", ct({ key: P, rel: "modulepreload", href: P }, o))), R.map(({ key: P, link: I }) => $.createElement("link", ct({ key: P }, I))));
}
__name(Q0, "Q0");
function G0() {
  let { isSpaMode: t, routeModules: n } = Ra(), { errors: o, matches: i, loaderData: s } = vu(), u = tr(), c = Fd(i, o, t), f = null;
  o && (f = o[c[c.length - 1].route.id]);
  let h = [], v = null, C = [];
  for (let S = 0; S < c.length; S++) {
    let j = c[S], R = j.route.id, P = s[R], I = j.params, L = n[R], U = [], q = { id: R, data: P, meta: [], params: j.params, pathname: j.pathname, handle: j.route.handle, error: f };
    if (C[S] = q, L != null && L.meta ? U = typeof L.meta == "function" ? L.meta({ data: P, params: I, location: u, matches: C, error: f }) : Array.isArray(L.meta) ? [...L.meta] : L.meta : v && (U = [...v]), U = U || [], !Array.isArray(U)) throw new Error("The route at " + j.route.path + ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`);
    q.meta = U, C[S] = q, h = [...U], v = h;
  }
  return $.createElement($.Fragment, null, h.flat().map((S) => {
    if (!S) return null;
    if ("tagName" in S) {
      let { tagName: j, ...R } = S;
      if (!Y0(j)) return console.warn(`A meta object uses an invalid tagName: ${j}. Expected either 'link' or 'meta'`), null;
      let P = j;
      return $.createElement(P, ct({ key: JSON.stringify(R) }, R));
    }
    if ("title" in S) return $.createElement("title", { key: "title" }, String(S.title));
    if ("charset" in S && (S.charSet ?? (S.charSet = S.charset), delete S.charset), "charSet" in S && S.charSet != null) return typeof S.charSet == "string" ? $.createElement("meta", { key: "charSet", charSet: S.charSet }) : null;
    if ("script:ld+json" in S) try {
      let j = JSON.stringify(S["script:ld+json"]);
      return $.createElement("script", { key: `script:ld+json:${j}`, type: "application/ld+json", dangerouslySetInnerHTML: { __html: j } });
    } catch {
      return null;
    }
    return $.createElement("meta", ct({ key: JSON.stringify(S) }, S));
  }));
}
__name(G0, "G0");
function Y0(t) {
  return typeof t == "string" && /^(meta|link)$/.test(t);
}
__name(Y0, "Y0");
function _i(t) {
  return $.createElement(Jw, t);
}
__name(_i, "_i");
var Bl = false;
function Eg(t) {
  let { manifest: n, serverHandoffString: o, abortDelay: i, serializeError: s, isSpaMode: u, future: c, renderMeta: f } = Ra(), { router: h, static: v, staticContext: C } = Sg(), { matches: S } = vu(), j = B0(c, u);
  f && (f.didRenderScripts = true);
  let R = Fd(S, null, u);
  $.useEffect(() => {
    Bl = true;
  }, []);
  let P = /* @__PURE__ */ __name((Q, J) => {
    let ce;
    return s && J instanceof Error ? ce = s(J) : ce = J, `${JSON.stringify(Q)}:__remixContext.p(!1, ${us(JSON.stringify(ce))})`;
  }, "P"), I = /* @__PURE__ */ __name((Q, J, ce) => {
    let ve;
    try {
      ve = JSON.stringify(ce);
    } catch ($e) {
      return P(J, $e);
    }
    return `${JSON.stringify(J)}:__remixContext.p(${us(ve)})`;
  }, "I"), L = /* @__PURE__ */ __name((Q, J, ce) => {
    let ve;
    return s && ce instanceof Error ? ve = s(ce) : ve = ce, `__remixContext.r(${JSON.stringify(Q)}, ${JSON.stringify(J)}, !1, ${us(JSON.stringify(ve))})`;
  }, "L"), U = /* @__PURE__ */ __name((Q, J, ce) => {
    let ve;
    try {
      ve = JSON.stringify(ce);
    } catch ($e) {
      return L(Q, J, $e);
    }
    return `__remixContext.r(${JSON.stringify(Q)}, ${JSON.stringify(J)}, ${us(ve)})`;
  }, "U"), q = [], Y = $.useMemo(() => {
    var Q;
    let J = c.v3_singleFetch ? "window.__remixContext.stream = new ReadableStream({start(controller){window.__remixContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());" : "", ce = C ? `window.__remixContext = ${o};${J}` : " ", ve = c.v3_singleFetch || C == null ? void 0 : C.activeDeferreds;
    ce += ve ? ["__remixContext.p = function(v,e,p,x) {", "  if (typeof e !== 'undefined') {", `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`, "    p=Promise.reject(x);", "  } else {", "    p=Promise.resolve(v);", "  }", "  return p;", "};", "__remixContext.n = function(i,k) {", "  __remixContext.t = __remixContext.t || {};", "  __remixContext.t[i] = __remixContext.t[i] || {};", "  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});", typeof i == "number" ? `setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${i});` : "", "  return p;", "};", "__remixContext.r = function(i,k,v,e,p,x) {", "  p = __remixContext.t[i][k];", "  if (typeof e !== 'undefined') {", `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`, "    p.e(x);", "  } else {", "    p.r(v);", "  }", "};"].join(`
`) + Object.entries(ve).map(([Ie, Ae]) => {
      let fe = new Set(Ae.pendingKeys), _e = Ae.deferredKeys.map((Re) => {
        if (fe.has(Re)) return q.push($.createElement(Bh, { key: `${Ie} | ${Re}`, deferredData: Ae, routeId: Ie, dataKey: Re, scriptProps: t, serializeData: U, serializeError: L })), `${JSON.stringify(Re)}:__remixContext.n(${JSON.stringify(Ie)}, ${JSON.stringify(Re)})`;
        {
          let De = Ae.data[Re];
          return typeof De._error < "u" ? P(Re, De._error) : I(Ie, Re, De._data);
        }
      }).join(`,
`);
      return `Object.assign(__remixContext.state.loaderData[${JSON.stringify(Ie)}], {${_e}});`;
    }).join(`
`) + (q.length > 0 ? `__remixContext.a=${q.length};` : "") : "";
    let $e = v ? `${(Q = n.hmr) !== null && Q !== void 0 && Q.runtime ? `import ${JSON.stringify(n.hmr.runtime)};` : ""}${j ? "" : `import ${JSON.stringify(n.url)}`};
${R.map((Ie, Ae) => `import * as route${Ae} from ${JSON.stringify(n.routes[Ie.route.id].module)};`).join(`
`)}
${j ? `window.__remixManifest = ${JSON.stringify(V0(n, h), null, 2)};` : ""}
window.__remixRouteModules = {${R.map((Ie, Ae) => `${JSON.stringify(Ie.route.id)}:route${Ae}`).join(",")}};

import(${JSON.stringify(n.entry.module)});` : " ";
    return $.createElement($.Fragment, null, $.createElement("script", ct({}, t, { suppressHydrationWarning: true, dangerouslySetInnerHTML: Hh(ce), type: void 0 })), $.createElement("script", ct({}, t, { suppressHydrationWarning: true, dangerouslySetInnerHTML: Hh($e), type: "module", async: true })));
  }, []);
  if (!v && typeof __remixContext == "object" && __remixContext.a) for (let Q = 0; Q < __remixContext.a; Q++) q.push($.createElement(Bh, { key: Q, scriptProps: t, serializeData: U, serializeError: L }));
  let G = R.map((Q) => {
    let J = n.routes[Q.route.id];
    return (J.imports || []).concat([J.module]);
  }).flat(1), ye = Bl ? [] : n.entry.imports.concat(G);
  return Bl ? null : $.createElement($.Fragment, null, j ? null : $.createElement("link", { rel: "modulepreload", href: n.url, crossOrigin: t.crossOrigin }), $.createElement("link", { rel: "modulepreload", href: n.entry.module, crossOrigin: t.crossOrigin }), K0(ye).map((Q) => $.createElement("link", { key: Q, rel: "modulepreload", href: Q, crossOrigin: t.crossOrigin })), Y, q);
}
__name(Eg, "Eg");
function Bh({ dataKey: t, deferredData: n, routeId: o, scriptProps: i, serializeData: s, serializeError: u }) {
  return typeof document > "u" && n && t && o && Ps(n.pendingKeys.includes(t), `Deferred data for route ${o} with key ${t} was not pending but tried to render a script for it.`), $.createElement($.Suspense, { fallback: typeof document > "u" && n && t && o ? null : $.createElement("script", ct({}, i, { async: true, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: " " } })) }, typeof document > "u" && n && t && o ? $.createElement(_i, { resolve: n.data[t], errorElement: $.createElement(J0, { dataKey: t, routeId: o, scriptProps: i, serializeError: u }), children: /* @__PURE__ */ __name((c) => $.createElement("script", ct({}, i, { async: true, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: s(o, t, c) } })), "children") }) : $.createElement("script", ct({}, i, { async: true, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: " " } })));
}
__name(Bh, "Bh");
function J0({ dataKey: t, routeId: n, scriptProps: o, serializeError: i }) {
  let s = Ww();
  return $.createElement("script", ct({}, o, { suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: i(n, t, s) } }));
}
__name(J0, "J0");
function K0(t) {
  return [...new Set(t)];
}
__name(K0, "K0");
function Lt() {
  return Bw();
}
__name(Lt, "Lt");
function X0(t) {
  return Vw(t);
}
__name(X0, "X0");
function _g() {
  return qw();
}
__name(_g, "_g");
function Hd(t = {}) {
  return Sx(t);
}
__name(Hd, "Hd");
function kg(...t) {
  return (n) => {
    t.forEach((o) => {
      typeof o == "function" ? o(n) : o != null && (o.current = n);
    });
  };
}
__name(kg, "kg");
var Vh = "positions";
function Z0({ getKey: t, ...n }) {
  let { isSpaMode: o } = Ra(), i = tr(), s = Ym();
  Ex({ getKey: t, storageKey: Vh });
  let u = $.useMemo(() => {
    if (!t) return null;
    let f = t(i, s);
    return f !== i.key ? f : null;
  }, []);
  if (o) return null;
  let c = ((f, h) => {
    if (!window.history.state || !window.history.state.key) {
      let v = Math.random().toString(32).slice(2);
      window.history.replaceState({ key: v }, "");
    }
    try {
      let C = JSON.parse(sessionStorage.getItem(f) || "{}")[h || window.history.state.key];
      typeof C == "number" && window.scrollTo(0, C);
    } catch (v) {
      console.error(v), sessionStorage.removeItem(f);
    }
  }).toString();
  return $.createElement("script", ct({}, n, { suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: `(${c})(${JSON.stringify(Vh)}, ${JSON.stringify(u)})` } }));
}
__name(Z0, "Z0");
function eS({ context: t, router: n, hydrate: o = true, nonce: i }) {
  n && t || qe(false);
  let s = { router: n, navigator: nS(), static: true, staticContext: t, basename: t.basename || "/" }, u = /* @__PURE__ */ new Map(), c = "";
  if (o !== false) {
    let h = { loaderData: t.loaderData, actionData: t.actionData, errors: rS(t.errors) };
    c = `window.__staticRouterHydrationData = JSON.parse(${lS(JSON.stringify(JSON.stringify(h)))});`;
  }
  let { state: f } = s.router;
  return $.createElement($.Fragment, null, $.createElement(Si.Provider, { value: s }, $.createElement(Ss.Provider, { value: f }, $.createElement(Xm.Provider, { value: u }, $.createElement(Km.Provider, { value: { isTransitioning: false } }, $.createElement(Yw, { basename: s.basename, location: f.location, navigationType: f.historyAction, navigator: s.navigator, static: s.static, future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath } }, $.createElement(tS, { routes: n.routes, future: n.future, state: f })))))), c ? $.createElement("script", { suppressHydrationWarning: true, nonce: i, dangerouslySetInnerHTML: { __html: c } }) : null);
}
__name(eS, "eS");
function tS({ routes: t, future: n, state: o }) {
  return Lw(t, void 0, o, n);
}
__name(tS, "tS");
function rS(t) {
  if (!t) return null;
  let n = Object.entries(t), o = {};
  for (let [i, s] of n) Ot(s) ? o[i] = { ...s, __type: "RouteErrorResponse" } : s instanceof Error ? o[i] = { message: s.message, __type: "Error", ...s.name !== "Error" ? { __subType: s.name } : {} } : o[i] = s;
  return o;
}
__name(rS, "rS");
function nS() {
  return { createHref: Pg, encodeLocation: jg, push(t) {
    throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(t)})\` somewhere in your app.`);
  }, replace(t) {
    throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(t)}, { replace: true })\` somewhere in your app.`);
  }, go(t) {
    throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${t})\` somewhere in your app.`);
  }, back() {
    throw new Error("You cannot use navigator.back() on the server because it is a stateless environment.");
  }, forward() {
    throw new Error("You cannot use navigator.forward() on the server because it is a stateless environment.");
  } };
}
__name(nS, "nS");
function oS(t, n, o = {}) {
  let i = {}, s = Pd(t, ex, void 0, i), u = n.matches.map((f) => {
    let h = i[f.route.id] || f.route;
    return { ...f, route: h };
  }), c = /* @__PURE__ */ __name((f) => `You cannot use router.${f}() on the server because it is a stateless environment`, "c");
  return { get basename() {
    return n.basename;
  }, get future() {
    var f, h;
    return { v7_fetcherPersist: false, v7_normalizeFormMethod: false, v7_partialHydration: ((f = o.future) == null ? void 0 : f.v7_partialHydration) === true, v7_prependBasename: false, v7_relativeSplatPath: ((h = o.future) == null ? void 0 : h.v7_relativeSplatPath) === true, v7_skipActionErrorRevalidation: false };
  }, get state() {
    return { historyAction: Jl.Pop, location: n.location, matches: u, loaderData: n.loaderData, actionData: n.actionData, errors: n.errors, initialized: true, navigation: fw, restoreScrollPosition: null, preventScrollReset: false, revalidation: "idle", fetchers: /* @__PURE__ */ new Map(), blockers: /* @__PURE__ */ new Map() };
  }, get routes() {
    return s;
  }, get window() {
  }, initialize() {
    throw c("initialize");
  }, subscribe() {
    throw c("subscribe");
  }, enableScrollRestoration() {
    throw c("enableScrollRestoration");
  }, navigate() {
    throw c("navigate");
  }, fetch() {
    throw c("fetch");
  }, revalidate() {
    throw c("revalidate");
  }, createHref: Pg, encodeLocation: jg, getFetcher() {
    return Mm;
  }, deleteFetcher() {
    throw c("deleteFetcher");
  }, dispose() {
    throw c("dispose");
  }, getBlocker() {
    return pw;
  }, deleteBlocker() {
    throw c("deleteBlocker");
  }, patchRoutes() {
    throw c("patchRoutes");
  }, _internalFetchControllers: /* @__PURE__ */ new Map(), _internalActiveDeferreds: /* @__PURE__ */ new Map(), _internalSetRoutes() {
    throw c("_internalSetRoutes");
  } };
}
__name(oS, "oS");
function Pg(t) {
  return typeof t == "string" ? t : Uo(t);
}
__name(Pg, "Pg");
function jg(t) {
  let n = typeof t == "string" ? t : Uo(t);
  n = n.replace(/ $/, "%20");
  let o = aS.test(n) ? new URL(n) : new URL(n, "http://localhost");
  return { pathname: o.pathname, search: o.search, hash: o.hash };
}
__name(jg, "jg");
var aS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var iS = { "&": "\\u0026", ">": "\\u003e", "<": "\\u003c", "\u2028": "\\u2028", "\u2029": "\\u2029" };
var sS = /[&><\u2028\u2029]/g;
function lS(t) {
  return t.replace(sS, (n) => iS[n]);
}
__name(lS, "lS");
function uS({ context: t, url: n, abortDelay: o, nonce: i }) {
  typeof n == "string" && (n = new URL(n));
  let { manifest: s, routeModules: u, criticalCss: c, serverHandoffString: f } = t, h = xg(s.routes, u, t.future, t.isSpaMode);
  t.staticHandlerContext.loaderData = { ...t.staticHandlerContext.loaderData };
  for (let C of t.staticHandlerContext.matches) {
    let S = C.route.id, j = u[S], R = t.manifest.routes[S];
    j && H0(R, j, t.isSpaMode) && (j.HydrateFallback || !R.hasLoader) && (t.staticHandlerContext.loaderData[S] = void 0);
  }
  let v = oS(h, t.staticHandlerContext, { future: { v7_partialHydration: true, v7_relativeSplatPath: t.future.v3_relativeSplatPath } });
  return $.createElement($.Fragment, null, $.createElement(bd.Provider, { value: { manifest: s, routeModules: u, criticalCss: c, serverHandoffString: f, future: t.future, isSpaMode: t.isSpaMode, serializeError: t.serializeError, abortDelay: o, renderMeta: t.renderMeta } }, $.createElement(b0, { location: v.state.location }, $.createElement(eS, { router: v, context: t.staticHandlerContext, hydrate: false }))), t.future.v3_singleFetch && t.serverHandoffStream ? $.createElement($.Suspense, null, $.createElement(vg, { context: t, identifier: 0, reader: t.serverHandoffStream.getReader(), textDecoder: new TextDecoder(), nonce: i })) : null);
}
__name(uS, "uS");
var cS = " daum[ /]| deusu/| yadirectfetcher|(?:^|[^g])news(?!sapphire)|(?<! (?:channel/|google/))google(?!(app|/google| pixel))|(?<! cu)bots?(?:\\b|_)|(?<!(?:lib))http|(?<![hg]m)score|@[a-z][\\w-]+\\.|\\(\\)|\\.com\\b|\\btime/|\\||^<|^[\\w \\.\\-\\(?:\\):%]+(?:/v?\\d+(?:\\.\\d+)?(?:\\.\\d{1,10})*?)?(?:,|$)|^[^ ]{50,}$|^\\d+\\b|^\\w*search\\b|^\\w+/[\\w\\(\\)]*$|^active|^ad muncher|^amaya|^avsdevicesdk/|^biglotron|^bot|^bw/|^clamav[ /]|^client/|^cobweb/|^custom|^ddg[_-]android|^discourse|^dispatch/\\d|^downcast/|^duckduckgo|^email|^facebook|^getright/|^gozilla/|^hobbit|^hotzonu|^hwcdn/|^igetter/|^jeode/|^jetty/|^jigsaw|^microsoft bits|^movabletype|^mozilla/\\d\\.\\d\\s[\\w\\.-]+$|^mozilla/\\d\\.\\d\\s\\(compatible;?(?:\\s\\w+\\/\\d+\\.\\d+)?\\)$|^navermailapp|^netsurf|^offline|^openai/|^owler|^php|^postman|^python|^rank|^read|^reed|^rest|^rss|^snapchat|^space bison|^svn|^swcd |^taringa|^thumbor/|^track|^w3c|^webbandit/|^webcopier|^wget|^whatsapp|^wordpress|^xenu link sleuth|^yahoo|^yandex|^zdm/\\d|^zoom marketplace/|^{{.*}}$|adscanner/|analyzer|archive|ask jeeves/teoma|audit|bit\\.ly/|bluecoat drtr|browsex|burpcollaborator|capture|catch|check\\b|checker|chrome-lighthouse|chromeframe|classifier|cloudflare|convertify|cookiehubscan|crawl|cypress/|dareboost|datanyze|dejaclick|detect|dmbrowser|download|evc-batch/|exaleadcloudview|feed|firephp|functionize|gomezagent|headless|httrack|hubspot marketing grader|hydra|ibisbrowser|infrawatch|insight|inspect|iplabel|ips-agent|java(?!;)|jsjcw_scanner|library|linkcheck|mail\\.ru/|manager|measure|neustar wpm|node|nutch|offbyone|optimize|pageburst|pagespeed|parser|perl|phantomjs|pingdom|powermarks|preview|proxy|ptst[ /]\\d|retriever|rexx;|rigor|rss\\b|scanner\\.|scrape|server|sogou|sparkler/|speedcurve|spider|splash|statuscake|supercleaner|synapse|synthetic|tools|torrent|transcoder|url|validator|virtuoso|wappalyzer|webglance|webkit2png|whatcms/|zgrab";
var dS = /bot|crawl|http|lighthouse|scan|search|spider/i;
var ss;
function fS() {
  if (ss instanceof RegExp) return ss;
  try {
    ss = new RegExp(cS, "i");
  } catch {
    ss = dS;
  }
  return ss;
}
__name(fS, "fS");
function pS(t) {
  return !!t && fS().test(t);
}
__name(pS, "pS");
var Oo = {};
var _a = {};
var qh;
function hS() {
  if (qh) return _a;
  qh = 1;
  var t = xs();
  function n(p) {
    for (var x = "https://reactjs.org/docs/error-decoder.html?invariant=" + p, k = 1; k < arguments.length; k++) x += "&args[]=" + encodeURIComponent(arguments[k]);
    return "Minified React error #" + p + "; visit " + x + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  __name(n, "n");
  var o = Object.prototype.hasOwnProperty, i = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, s = {}, u = {};
  function c(p) {
    return o.call(u, p) ? true : o.call(s, p) ? false : i.test(p) ? u[p] = true : (s[p] = true, false);
  }
  __name(c, "c");
  function f(p, x, k, A, H, M, K) {
    this.acceptsBooleans = x === 2 || x === 3 || x === 4, this.attributeName = A, this.attributeNamespace = H, this.mustUseProperty = k, this.propertyName = p, this.type = x, this.sanitizeURL = M, this.removeEmptyString = K;
  }
  __name(f, "f");
  var h = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(p) {
    h[p] = new f(p, 0, false, p, null, false, false);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(p) {
    var x = p[0];
    h[x] = new f(x, 1, false, p[1], null, false, false);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(p) {
    h[p] = new f(p, 2, false, p.toLowerCase(), null, false, false);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(p) {
    h[p] = new f(p, 2, false, p, null, false, false);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(p) {
    h[p] = new f(p, 3, false, p.toLowerCase(), null, false, false);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(p) {
    h[p] = new f(p, 3, true, p, null, false, false);
  }), ["capture", "download"].forEach(function(p) {
    h[p] = new f(p, 4, false, p, null, false, false);
  }), ["cols", "rows", "size", "span"].forEach(function(p) {
    h[p] = new f(p, 6, false, p, null, false, false);
  }), ["rowSpan", "start"].forEach(function(p) {
    h[p] = new f(p, 5, false, p.toLowerCase(), null, false, false);
  });
  var v = /[\-:]([a-z])/g;
  function C(p) {
    return p[1].toUpperCase();
  }
  __name(C, "C");
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(p) {
    var x = p.replace(v, C);
    h[x] = new f(x, 1, false, p, null, false, false);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(p) {
    var x = p.replace(v, C);
    h[x] = new f(x, 1, false, p, "http://www.w3.org/1999/xlink", false, false);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(p) {
    var x = p.replace(v, C);
    h[x] = new f(x, 1, false, p, "http://www.w3.org/XML/1998/namespace", false, false);
  }), ["tabIndex", "crossOrigin"].forEach(function(p) {
    h[p] = new f(p, 1, false, p.toLowerCase(), null, false, false);
  }), h.xlinkHref = new f("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false), ["src", "href", "action", "formAction"].forEach(function(p) {
    h[p] = new f(p, 1, false, p.toLowerCase(), null, true, true);
  });
  var S = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, j = ["Webkit", "ms", "Moz", "O"];
  Object.keys(S).forEach(function(p) {
    j.forEach(function(x) {
      x = x + p.charAt(0).toUpperCase() + p.substring(1), S[x] = S[p];
    });
  });
  var R = /["'&<>]/;
  function P(p) {
    if (typeof p == "boolean" || typeof p == "number") return "" + p;
    p = "" + p;
    var x = R.exec(p);
    if (x) {
      var k = "", A, H = 0;
      for (A = x.index; A < p.length; A++) {
        switch (p.charCodeAt(A)) {
          case 34:
            x = "&quot;";
            break;
          case 38:
            x = "&amp;";
            break;
          case 39:
            x = "&#x27;";
            break;
          case 60:
            x = "&lt;";
            break;
          case 62:
            x = "&gt;";
            break;
          default:
            continue;
        }
        H !== A && (k += p.substring(H, A)), H = A + 1, k += x;
      }
      p = H !== A ? k + p.substring(H, A) : k;
    }
    return p;
  }
  __name(P, "P");
  var I = /([A-Z])/g, L = /^ms-/, U = Array.isArray;
  function q(p, x) {
    return { insertionMode: p, selectedValue: x };
  }
  __name(q, "q");
  function Y(p, x, k) {
    switch (x) {
      case "select":
        return q(1, k.value != null ? k.value : k.defaultValue);
      case "svg":
        return q(2, null);
      case "math":
        return q(3, null);
      case "foreignObject":
        return q(1, null);
      case "table":
        return q(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return q(5, null);
      case "colgroup":
        return q(7, null);
      case "tr":
        return q(6, null);
    }
    return 4 <= p.insertionMode || p.insertionMode === 0 ? q(1, null) : p;
  }
  __name(Y, "Y");
  var G = /* @__PURE__ */ new Map();
  function ye(p, x, k) {
    if (typeof k != "object") throw Error(n(62));
    x = true;
    for (var A in k) if (o.call(k, A)) {
      var H = k[A];
      if (H != null && typeof H != "boolean" && H !== "") {
        if (A.indexOf("--") === 0) {
          var M = P(A);
          H = P(("" + H).trim());
        } else {
          M = A;
          var K = G.get(M);
          K !== void 0 || (K = P(M.replace(I, "-$1").toLowerCase().replace(L, "-ms-")), G.set(M, K)), M = K, H = typeof H == "number" ? H === 0 || o.call(S, A) ? "" + H : H + "px" : P(("" + H).trim());
        }
        x ? (x = false, p.push(' style="', M, ":", H)) : p.push(";", M, ":", H);
      }
    }
    x || p.push('"');
  }
  __name(ye, "ye");
  function Q(p, x, k, A) {
    switch (k) {
      case "style":
        ye(p, x, A);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < k.length) || k[0] !== "o" && k[0] !== "O" || k[1] !== "n" && k[1] !== "N") {
      if (x = h.hasOwnProperty(k) ? h[k] : null, x !== null) {
        switch (typeof A) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!x.acceptsBooleans) return;
        }
        switch (k = x.attributeName, x.type) {
          case 3:
            A && p.push(" ", k, '=""');
            break;
          case 4:
            A === true ? p.push(" ", k, '=""') : A !== false && p.push(" ", k, '="', P(A), '"');
            break;
          case 5:
            isNaN(A) || p.push(" ", k, '="', P(A), '"');
            break;
          case 6:
            !isNaN(A) && 1 <= A && p.push(" ", k, '="', P(A), '"');
            break;
          default:
            x.sanitizeURL && (A = "" + A), p.push(" ", k, '="', P(A), '"');
        }
      } else if (c(k)) {
        switch (typeof A) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (x = k.toLowerCase().slice(0, 5), x !== "data-" && x !== "aria-") return;
        }
        p.push(" ", k, '="', P(A), '"');
      }
    }
  }
  __name(Q, "Q");
  function J(p, x, k) {
    if (x != null) {
      if (k != null) throw Error(n(60));
      if (typeof x != "object" || !("__html" in x)) throw Error(n(61));
      x = x.__html, x != null && p.push("" + x);
    }
  }
  __name(J, "J");
  function ce(p) {
    var x = "";
    return t.Children.forEach(p, function(k) {
      k != null && (x += k);
    }), x;
  }
  __name(ce, "ce");
  function ve(p, x, k, A) {
    p.push(Ae(k));
    var H = k = null, M;
    for (M in x) if (o.call(x, M)) {
      var K = x[M];
      if (K != null) switch (M) {
        case "children":
          k = K;
          break;
        case "dangerouslySetInnerHTML":
          H = K;
          break;
        default:
          Q(p, A, M, K);
      }
    }
    return p.push(">"), J(p, H, k), typeof k == "string" ? (p.push(P(k)), null) : k;
  }
  __name(ve, "ve");
  var $e = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ie = /* @__PURE__ */ new Map();
  function Ae(p) {
    var x = Ie.get(p);
    if (x === void 0) {
      if (!$e.test(p)) throw Error(n(65, p));
      x = "<" + p, Ie.set(p, x);
    }
    return x;
  }
  __name(Ae, "Ae");
  function fe(p, x, k, A, H) {
    switch (x) {
      case "select":
        p.push(Ae("select"));
        var M = null, K = null;
        for (Te in k) if (o.call(k, Te)) {
          var se = k[Te];
          if (se != null) switch (Te) {
            case "children":
              M = se;
              break;
            case "dangerouslySetInnerHTML":
              K = se;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              Q(p, A, Te, se);
          }
        }
        return p.push(">"), J(p, K, M), M;
      case "option":
        K = H.selectedValue, p.push(Ae("option"));
        var le = se = null, Ee = null, Te = null;
        for (M in k) if (o.call(k, M)) {
          var We = k[M];
          if (We != null) switch (M) {
            case "children":
              se = We;
              break;
            case "selected":
              Ee = We;
              break;
            case "dangerouslySetInnerHTML":
              Te = We;
              break;
            case "value":
              le = We;
            default:
              Q(p, A, M, We);
          }
        }
        if (K != null) if (k = le !== null ? "" + le : ce(se), U(K)) {
          for (A = 0; A < K.length; A++) if ("" + K[A] === k) {
            p.push(' selected=""');
            break;
          }
        } else "" + K === k && p.push(' selected=""');
        else Ee && p.push(' selected=""');
        return p.push(">"), J(p, Te, se), se;
      case "textarea":
        p.push(Ae("textarea")), Te = K = M = null;
        for (se in k) if (o.call(k, se) && (le = k[se], le != null)) switch (se) {
          case "children":
            Te = le;
            break;
          case "value":
            M = le;
            break;
          case "defaultValue":
            K = le;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(n(91));
          default:
            Q(p, A, se, le);
        }
        if (M === null && K !== null && (M = K), p.push(">"), Te != null) {
          if (M != null) throw Error(n(92));
          if (U(Te) && 1 < Te.length) throw Error(n(93));
          M = "" + Te;
        }
        return typeof M == "string" && M[0] === `
` && p.push(`
`), M !== null && p.push(P("" + M)), null;
      case "input":
        p.push(Ae("input")), le = Te = se = M = null;
        for (K in k) if (o.call(k, K) && (Ee = k[K], Ee != null)) switch (K) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(n(399, "input"));
          case "defaultChecked":
            le = Ee;
            break;
          case "defaultValue":
            se = Ee;
            break;
          case "checked":
            Te = Ee;
            break;
          case "value":
            M = Ee;
            break;
          default:
            Q(p, A, K, Ee);
        }
        return Te !== null ? Q(p, A, "checked", Te) : le !== null && Q(p, A, "checked", le), M !== null ? Q(p, A, "value", M) : se !== null && Q(p, A, "value", se), p.push("/>"), null;
      case "menuitem":
        p.push(Ae("menuitem"));
        for (var zt in k) if (o.call(k, zt) && (M = k[zt], M != null)) switch (zt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(n(400));
          default:
            Q(p, A, zt, M);
        }
        return p.push(">"), null;
      case "title":
        p.push(Ae("title")), M = null;
        for (We in k) if (o.call(k, We) && (K = k[We], K != null)) switch (We) {
          case "children":
            M = K;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(n(434));
          default:
            Q(p, A, We, K);
        }
        return p.push(">"), M;
      case "listing":
      case "pre":
        p.push(Ae(x)), K = M = null;
        for (le in k) if (o.call(k, le) && (se = k[le], se != null)) switch (le) {
          case "children":
            M = se;
            break;
          case "dangerouslySetInnerHTML":
            K = se;
            break;
          default:
            Q(p, A, le, se);
        }
        if (p.push(">"), K != null) {
          if (M != null) throw Error(n(60));
          if (typeof K != "object" || !("__html" in K)) throw Error(n(61));
          k = K.__html, k != null && (typeof k == "string" && 0 < k.length && k[0] === `
` ? p.push(`
`, k) : p.push("" + k));
        }
        return typeof M == "string" && M[0] === `
` && p.push(`
`), M;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        p.push(Ae(x));
        for (var Ht in k) if (o.call(k, Ht) && (M = k[Ht], M != null)) switch (Ht) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(n(399, x));
          default:
            Q(p, A, Ht, M);
        }
        return p.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return ve(p, k, x, A);
      case "html":
        return H.insertionMode === 0 && p.push("<!DOCTYPE html>"), ve(p, k, x, A);
      default:
        if (x.indexOf("-") === -1 && typeof k.is != "string") return ve(p, k, x, A);
        p.push(Ae(x)), K = M = null;
        for (Ee in k) if (o.call(k, Ee) && (se = k[Ee], se != null)) switch (Ee) {
          case "children":
            M = se;
            break;
          case "dangerouslySetInnerHTML":
            K = se;
            break;
          case "style":
            ye(p, A, se);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            c(Ee) && typeof se != "function" && typeof se != "symbol" && p.push(" ", Ee, '="', P(se), '"');
        }
        return p.push(">"), J(p, K, M), M;
    }
  }
  __name(fe, "fe");
  function _e(p, x, k) {
    if (p.push('<!--$?--><template id="'), k === null) throw Error(n(395));
    return p.push(k), p.push('"></template>');
  }
  __name(_e, "_e");
  function Re(p, x, k, A) {
    switch (k.insertionMode) {
      case 0:
      case 1:
        return p.push('<div hidden id="'), p.push(x.segmentPrefix), x = A.toString(16), p.push(x), p.push('">');
      case 2:
        return p.push('<svg aria-hidden="true" style="display:none" id="'), p.push(x.segmentPrefix), x = A.toString(16), p.push(x), p.push('">');
      case 3:
        return p.push('<math aria-hidden="true" style="display:none" id="'), p.push(x.segmentPrefix), x = A.toString(16), p.push(x), p.push('">');
      case 4:
        return p.push('<table hidden id="'), p.push(x.segmentPrefix), x = A.toString(16), p.push(x), p.push('">');
      case 5:
        return p.push('<table hidden><tbody id="'), p.push(x.segmentPrefix), x = A.toString(16), p.push(x), p.push('">');
      case 6:
        return p.push('<table hidden><tr id="'), p.push(x.segmentPrefix), x = A.toString(16), p.push(x), p.push('">');
      case 7:
        return p.push('<table hidden><colgroup id="'), p.push(x.segmentPrefix), x = A.toString(16), p.push(x), p.push('">');
      default:
        throw Error(n(397));
    }
  }
  __name(Re, "Re");
  function De(p, x) {
    switch (x.insertionMode) {
      case 0:
      case 1:
        return p.push("</div>");
      case 2:
        return p.push("</svg>");
      case 3:
        return p.push("</math>");
      case 4:
        return p.push("</table>");
      case 5:
        return p.push("</tbody></table>");
      case 6:
        return p.push("</tr></table>");
      case 7:
        return p.push("</colgroup></table>");
      default:
        throw Error(n(397));
    }
  }
  __name(De, "De");
  var Oe = /[<\u2028\u2029]/g;
  function ne(p) {
    return JSON.stringify(p).replace(Oe, function(x) {
      switch (x) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  __name(ne, "ne");
  function ue(p, x) {
    return x = x === void 0 ? "" : x, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: x + "P:", segmentPrefix: x + "S:", boundaryPrefix: x + "B:", idPrefix: x, nextSuspenseID: 0, sentCompleteSegmentFunction: false, sentCompleteBoundaryFunction: false, sentClientRenderFunction: false, generateStaticMarkup: p };
  }
  __name(ue, "ue");
  function oe(p, x, k, A) {
    return k.generateStaticMarkup ? (p.push(P(x)), false) : (x === "" ? p = A : (A && p.push("<!-- -->"), p.push(P(x)), p = true), p);
  }
  __name(oe, "oe");
  var b = Object.assign, Z = Symbol.for("react.element"), Ce = Symbol.for("react.portal"), ke = Symbol.for("react.fragment"), be = Symbol.for("react.strict_mode"), Ne = Symbol.for("react.profiler"), He = Symbol.for("react.provider"), Fe = Symbol.for("react.context"), Ue = Symbol.for("react.forward_ref"), Je = Symbol.for("react.suspense"), ht = Symbol.for("react.suspense_list"), $r = Symbol.for("react.memo"), it = Symbol.for("react.lazy"), Mt = Symbol.for("react.scope"), Fo = Symbol.for("react.debug_trace_mode"), Tn = Symbol.for("react.legacy_hidden"), zo = Symbol.for("react.default_value"), An = Symbol.iterator;
  function Ir(p) {
    if (p == null) return null;
    if (typeof p == "function") return p.displayName || p.name || null;
    if (typeof p == "string") return p;
    switch (p) {
      case ke:
        return "Fragment";
      case Ce:
        return "Portal";
      case Ne:
        return "Profiler";
      case be:
        return "StrictMode";
      case Je:
        return "Suspense";
      case ht:
        return "SuspenseList";
    }
    if (typeof p == "object") switch (p.$$typeof) {
      case Fe:
        return (p.displayName || "Context") + ".Consumer";
      case He:
        return (p._context.displayName || "Context") + ".Provider";
      case Ue:
        var x = p.render;
        return p = p.displayName, p || (p = x.displayName || x.name || "", p = p !== "" ? "ForwardRef(" + p + ")" : "ForwardRef"), p;
      case $r:
        return x = p.displayName || null, x !== null ? x : Ir(p.type) || "Memo";
      case it:
        x = p._payload, p = p._init;
        try {
          return Ir(p(x));
        } catch {
        }
    }
    return null;
  }
  __name(Ir, "Ir");
  var gr = {};
  function Tr(p, x) {
    if (p = p.contextTypes, !p) return gr;
    var k = {}, A;
    for (A in p) k[A] = x[A];
    return k;
  }
  __name(Tr, "Tr");
  var Ft = null;
  function mt(p, x) {
    if (p !== x) {
      p.context._currentValue2 = p.parentValue, p = p.parent;
      var k = x.parent;
      if (p === null) {
        if (k !== null) throw Error(n(401));
      } else {
        if (k === null) throw Error(n(401));
        mt(p, k);
      }
      x.context._currentValue2 = x.value;
    }
  }
  __name(mt, "mt");
  function Ho(p) {
    p.context._currentValue2 = p.parentValue, p = p.parent, p !== null && Ho(p);
  }
  __name(Ho, "Ho");
  function Bo(p) {
    var x = p.parent;
    x !== null && Bo(x), p.context._currentValue2 = p.value;
  }
  __name(Bo, "Bo");
  function Vo(p, x) {
    if (p.context._currentValue2 = p.parentValue, p = p.parent, p === null) throw Error(n(402));
    p.depth === x.depth ? mt(p, x) : Vo(p, x);
  }
  __name(Vo, "Vo");
  function lo(p, x) {
    var k = x.parent;
    if (k === null) throw Error(n(402));
    p.depth === k.depth ? mt(p, k) : lo(p, k), x.context._currentValue2 = x.value;
  }
  __name(lo, "lo");
  function Ar(p) {
    var x = Ft;
    x !== p && (x === null ? Bo(p) : p === null ? Ho(x) : x.depth === p.depth ? mt(x, p) : x.depth > p.depth ? Vo(x, p) : lo(x, p), Ft = p);
  }
  __name(Ar, "Ar");
  var qo = { isMounted: /* @__PURE__ */ __name(function() {
    return false;
  }, "isMounted"), enqueueSetState: /* @__PURE__ */ __name(function(p, x) {
    p = p._reactInternals, p.queue !== null && p.queue.push(x);
  }, "enqueueSetState"), enqueueReplaceState: /* @__PURE__ */ __name(function(p, x) {
    p = p._reactInternals, p.replace = true, p.queue = [x];
  }, "enqueueReplaceState"), enqueueForceUpdate: /* @__PURE__ */ __name(function() {
  }, "enqueueForceUpdate") };
  function Xr(p, x, k, A) {
    var H = p.state !== void 0 ? p.state : null;
    p.updater = qo, p.props = k, p.state = H;
    var M = { queue: [], replace: false };
    p._reactInternals = M;
    var K = x.contextType;
    if (p.context = typeof K == "object" && K !== null ? K._currentValue2 : A, K = x.getDerivedStateFromProps, typeof K == "function" && (K = K(k, H), H = K == null ? H : b({}, H, K), p.state = H), typeof x.getDerivedStateFromProps != "function" && typeof p.getSnapshotBeforeUpdate != "function" && (typeof p.UNSAFE_componentWillMount == "function" || typeof p.componentWillMount == "function")) if (x = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), x !== p.state && qo.enqueueReplaceState(p, p.state, null), M.queue !== null && 0 < M.queue.length) if (x = M.queue, K = M.replace, M.queue = null, M.replace = false, K && x.length === 1) p.state = x[0];
    else {
      for (M = K ? x[0] : p.state, H = true, K = K ? 1 : 0; K < x.length; K++) {
        var se = x[K];
        se = typeof se == "function" ? se.call(p, M, k, A) : se, se != null && (H ? (H = false, M = b({}, M, se)) : b(M, se));
      }
      p.state = M;
    }
    else M.queue = null;
  }
  __name(Xr, "Xr");
  var On = { id: 1, overflow: "" };
  function Wo(p, x, k) {
    var A = p.id;
    p = p.overflow;
    var H = 32 - Ln(A) - 1;
    A &= ~(1 << H), k += 1;
    var M = 32 - Ln(x) + H;
    if (30 < M) {
      var K = H - H % 5;
      return M = (A & (1 << K) - 1).toString(32), A >>= K, H -= K, { id: 1 << 32 - Ln(x) + H | k << H | A, overflow: M + p };
    }
    return { id: 1 << M | k << H | A, overflow: p };
  }
  __name(Wo, "Wo");
  var Ln = Math.clz32 ? Math.clz32 : Qo, Ta = Math.log, Pi = Math.LN2;
  function Qo(p) {
    return p >>>= 0, p === 0 ? 32 : 31 - (Ta(p) / Pi | 0) | 0;
  }
  __name(Qo, "Qo");
  function Go(p, x) {
    return p === x && (p !== 0 || 1 / p === 1 / x) || p !== p && x !== x;
  }
  __name(Go, "Go");
  var Yo = typeof Object.is == "function" ? Object.is : Go, _t = null, Dn = null, or = null, ze = null, Zr = false, Nn = false, en = 0, ar = null, bn = 0;
  function ir() {
    if (_t === null) throw Error(n(321));
    return _t;
  }
  __name(ir, "ir");
  function Jo() {
    if (0 < bn) throw Error(n(312));
    return { memoizedState: null, queue: null, next: null };
  }
  __name(Jo, "Jo");
  function Or() {
    return ze === null ? or === null ? (Zr = false, or = ze = Jo()) : (Zr = true, ze = or) : ze.next === null ? (Zr = false, ze = ze.next = Jo()) : (Zr = true, ze = ze.next), ze;
  }
  __name(Or, "Or");
  function Un() {
    Dn = _t = null, Nn = false, or = null, bn = 0, ze = ar = null;
  }
  __name(Un, "Un");
  function tn(p, x) {
    return typeof x == "function" ? x(p) : x;
  }
  __name(tn, "tn");
  function Aa(p, x, k) {
    if (_t = ir(), ze = Or(), Zr) {
      var A = ze.queue;
      if (x = A.dispatch, ar !== null && (k = ar.get(A), k !== void 0)) {
        ar.delete(A), A = ze.memoizedState;
        do
          A = p(A, k.action), k = k.next;
        while (k !== null);
        return ze.memoizedState = A, [A, x];
      }
      return [ze.memoizedState, x];
    }
    return p = p === tn ? typeof x == "function" ? x() : x : k !== void 0 ? k(x) : x, ze.memoizedState = p, p = ze.queue = { last: null, dispatch: null }, p = p.dispatch = uo.bind(null, _t, p), [ze.memoizedState, p];
  }
  __name(Aa, "Aa");
  function rn(p, x) {
    if (_t = ir(), ze = Or(), x = x === void 0 ? null : x, ze !== null) {
      var k = ze.memoizedState;
      if (k !== null && x !== null) {
        var A = k[1];
        e: if (A === null) A = false;
        else {
          for (var H = 0; H < A.length && H < x.length; H++) if (!Yo(x[H], A[H])) {
            A = false;
            break e;
          }
          A = true;
        }
        if (A) return k[0];
      }
    }
    return p = p(), ze.memoizedState = [p, x], p;
  }
  __name(rn, "rn");
  function uo(p, x, k) {
    if (25 <= bn) throw Error(n(301));
    if (p === _t) if (Nn = true, p = { action: k, next: null }, ar === null && (ar = /* @__PURE__ */ new Map()), k = ar.get(x), k === void 0) ar.set(x, p);
    else {
      for (x = k; x.next !== null; ) x = x.next;
      x.next = p;
    }
  }
  __name(uo, "uo");
  function co() {
    throw Error(n(394));
  }
  __name(co, "co");
  function nn() {
  }
  __name(nn, "nn");
  var Oa = { readContext: /* @__PURE__ */ __name(function(p) {
    return p._currentValue2;
  }, "readContext"), useContext: /* @__PURE__ */ __name(function(p) {
    return ir(), p._currentValue2;
  }, "useContext"), useMemo: rn, useReducer: Aa, useRef: /* @__PURE__ */ __name(function(p) {
    _t = ir(), ze = Or();
    var x = ze.memoizedState;
    return x === null ? (p = { current: p }, ze.memoizedState = p) : x;
  }, "useRef"), useState: /* @__PURE__ */ __name(function(p) {
    return Aa(tn, p);
  }, "useState"), useInsertionEffect: nn, useLayoutEffect: /* @__PURE__ */ __name(function() {
  }, "useLayoutEffect"), useCallback: /* @__PURE__ */ __name(function(p, x) {
    return rn(function() {
      return p;
    }, x);
  }, "useCallback"), useImperativeHandle: nn, useEffect: nn, useDebugValue: nn, useDeferredValue: /* @__PURE__ */ __name(function(p) {
    return ir(), p;
  }, "useDeferredValue"), useTransition: /* @__PURE__ */ __name(function() {
    return ir(), [false, co];
  }, "useTransition"), useId: /* @__PURE__ */ __name(function() {
    var p = Dn.treeContext, x = p.overflow;
    p = p.id, p = (p & ~(1 << 32 - Ln(p) - 1)).toString(32) + x;
    var k = fo;
    if (k === null) throw Error(n(404));
    return x = en++, p = ":" + k.idPrefix + "R" + p, 0 < x && (p += "H" + x.toString(32)), p + ":";
  }, "useId"), useMutableSource: /* @__PURE__ */ __name(function(p, x) {
    return ir(), x(p._source);
  }, "useMutableSource"), useSyncExternalStore: /* @__PURE__ */ __name(function(p, x, k) {
    if (k === void 0) throw Error(n(407));
    return k();
  }, "useSyncExternalStore") }, fo = null, Ko = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Lr(p) {
    return console.error(p), null;
  }
  __name(Lr, "Lr");
  function on() {
  }
  __name(on, "on");
  function La(p, x, k, A, H, M, K, se, le) {
    var Ee = [], Te = /* @__PURE__ */ new Set();
    return x = { destination: null, responseState: x, progressiveChunkSize: A === void 0 ? 12800 : A, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Te, pingedTasks: Ee, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: H === void 0 ? Lr : H, onAllReady: on, onShellReady: K === void 0 ? on : K, onShellError: on, onFatalError: on }, k = Mn(x, 0, null, k, false, false), k.parentFlushed = true, p = Xo(x, p, null, k, Te, gr, null, On), Ee.push(p), x;
  }
  __name(La, "La");
  function Xo(p, x, k, A, H, M, K, se) {
    p.allPendingTasks++, k === null ? p.pendingRootTasks++ : k.pendingTasks++;
    var le = { node: x, ping: /* @__PURE__ */ __name(function() {
      var Ee = p.pingedTasks;
      Ee.push(le), Ee.length === 1 && Dt(p);
    }, "ping"), blockedBoundary: k, blockedSegment: A, abortSet: H, legacyContext: M, context: K, treeContext: se };
    return H.add(le), le;
  }
  __name(Xo, "Xo");
  function Mn(p, x, k, A, H, M) {
    return { status: 0, id: -1, index: x, parentFlushed: false, chunks: [], children: [], formatContext: A, boundary: k, lastPushedText: H, textEmbedded: M };
  }
  __name(Mn, "Mn");
  function an(p, x) {
    if (p = p.onError(x), p != null && typeof p != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof p + '" instead');
    return p;
  }
  __name(an, "an");
  function Fn(p, x) {
    var k = p.onShellError;
    k(x), k = p.onFatalError, k(x), p.destination !== null ? (p.status = 2, p.destination.destroy(x)) : (p.status = 1, p.fatalError = x);
  }
  __name(Fn, "Fn");
  function Zo(p, x, k, A, H) {
    for (_t = {}, Dn = x, en = 0, p = k(A, H); Nn; ) Nn = false, en = 0, bn += 1, ze = null, p = k(A, H);
    return Un(), p;
  }
  __name(Zo, "Zo");
  function Da(p, x, k, A) {
    var H = k.render(), M = A.childContextTypes;
    if (M != null) {
      var K = x.legacyContext;
      if (typeof k.getChildContext != "function") A = K;
      else {
        k = k.getChildContext();
        for (var se in k) if (!(se in M)) throw Error(n(108, Ir(A) || "Unknown", se));
        A = b({}, K, k);
      }
      x.legacyContext = A, xt(p, x, H), x.legacyContext = K;
    } else xt(p, x, H);
  }
  __name(Da, "Da");
  function Na(p, x) {
    if (p && p.defaultProps) {
      x = b({}, x), p = p.defaultProps;
      for (var k in p) x[k] === void 0 && (x[k] = p[k]);
      return x;
    }
    return x;
  }
  __name(Na, "Na");
  function Ge(p, x, k, A, H) {
    if (typeof k == "function") if (k.prototype && k.prototype.isReactComponent) {
      H = Tr(k, x.legacyContext);
      var M = k.contextType;
      M = new k(A, typeof M == "object" && M !== null ? M._currentValue2 : H), Xr(M, k, A, H), Da(p, x, M, k);
    } else {
      M = Tr(k, x.legacyContext), H = Zo(p, x, k, A, M);
      var K = en !== 0;
      if (typeof H == "object" && H !== null && typeof H.render == "function" && H.$$typeof === void 0) Xr(H, k, A, M), Da(p, x, H, k);
      else if (K) {
        A = x.treeContext, x.treeContext = Wo(A, 1, 0);
        try {
          xt(p, x, H);
        } finally {
          x.treeContext = A;
        }
      } else xt(p, x, H);
    }
    else if (typeof k == "string") {
      switch (H = x.blockedSegment, M = fe(H.chunks, k, A, p.responseState, H.formatContext), H.lastPushedText = false, K = H.formatContext, H.formatContext = Y(K, k, A), ho(p, x, M), H.formatContext = K, k) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          H.chunks.push("</", k, ">");
      }
      H.lastPushedText = false;
    } else {
      switch (k) {
        case Tn:
        case Fo:
        case be:
        case Ne:
        case ke:
          xt(p, x, A.children);
          return;
        case ht:
          xt(p, x, A.children);
          return;
        case Mt:
          throw Error(n(343));
        case Je:
          e: {
            k = x.blockedBoundary, H = x.blockedSegment, M = A.fallback, A = A.children, K = /* @__PURE__ */ new Set();
            var se = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: K, errorDigest: null }, le = Mn(p, H.chunks.length, se, H.formatContext, false, false);
            H.children.push(le), H.lastPushedText = false;
            var Ee = Mn(p, 0, null, H.formatContext, false, false);
            Ee.parentFlushed = true, x.blockedBoundary = se, x.blockedSegment = Ee;
            try {
              if (ho(p, x, A), p.responseState.generateStaticMarkup || Ee.lastPushedText && Ee.textEmbedded && Ee.chunks.push("<!-- -->"), Ee.status = 1, Dr(se, Ee), se.pendingTasks === 0) break e;
            } catch (Te) {
              Ee.status = 4, se.forceClientRender = true, se.errorDigest = an(p, Te);
            } finally {
              x.blockedBoundary = k, x.blockedSegment = H;
            }
            x = Xo(p, M, k, le, K, x.legacyContext, x.context, x.treeContext), p.pingedTasks.push(x);
          }
          return;
      }
      if (typeof k == "object" && k !== null) switch (k.$$typeof) {
        case Ue:
          if (A = Zo(p, x, k.render, A, H), en !== 0) {
            k = x.treeContext, x.treeContext = Wo(k, 1, 0);
            try {
              xt(p, x, A);
            } finally {
              x.treeContext = k;
            }
          } else xt(p, x, A);
          return;
        case $r:
          k = k.type, A = Na(k, A), Ge(p, x, k, A, H);
          return;
        case He:
          if (H = A.children, k = k._context, A = A.value, M = k._currentValue2, k._currentValue2 = A, K = Ft, Ft = A = { parent: K, depth: K === null ? 0 : K.depth + 1, context: k, parentValue: M, value: A }, x.context = A, xt(p, x, H), p = Ft, p === null) throw Error(n(403));
          A = p.parentValue, p.context._currentValue2 = A === zo ? p.context._defaultValue : A, p = Ft = p.parent, x.context = p;
          return;
        case Fe:
          A = A.children, A = A(k._currentValue2), xt(p, x, A);
          return;
        case it:
          H = k._init, k = H(k._payload), A = Na(k, A), Ge(p, x, k, A, void 0);
          return;
      }
      throw Error(n(130, k == null ? k : typeof k, ""));
    }
  }
  __name(Ge, "Ge");
  function xt(p, x, k) {
    if (x.node = k, typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Z:
          Ge(p, x, k.type, k.props, k.ref);
          return;
        case Ce:
          throw Error(n(257));
        case it:
          var A = k._init;
          k = A(k._payload), xt(p, x, k);
          return;
      }
      if (U(k)) {
        po(p, x, k);
        return;
      }
      if (k === null || typeof k != "object" ? A = null : (A = An && k[An] || k["@@iterator"], A = typeof A == "function" ? A : null), A && (A = A.call(k))) {
        if (k = A.next(), !k.done) {
          var H = [];
          do
            H.push(k.value), k = A.next();
          while (!k.done);
          po(p, x, H);
        }
        return;
      }
      throw p = Object.prototype.toString.call(k), Error(n(31, p === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : p));
    }
    typeof k == "string" ? (A = x.blockedSegment, A.lastPushedText = oe(x.blockedSegment.chunks, k, p.responseState, A.lastPushedText)) : typeof k == "number" && (A = x.blockedSegment, A.lastPushedText = oe(x.blockedSegment.chunks, "" + k, p.responseState, A.lastPushedText));
  }
  __name(xt, "xt");
  function po(p, x, k) {
    for (var A = k.length, H = 0; H < A; H++) {
      var M = x.treeContext;
      x.treeContext = Wo(M, A, H);
      try {
        ho(p, x, k[H]);
      } finally {
        x.treeContext = M;
      }
    }
  }
  __name(po, "po");
  function ho(p, x, k) {
    var A = x.blockedSegment.formatContext, H = x.legacyContext, M = x.context;
    try {
      return xt(p, x, k);
    } catch (le) {
      if (Un(), typeof le == "object" && le !== null && typeof le.then == "function") {
        k = le;
        var K = x.blockedSegment, se = Mn(p, K.chunks.length, null, K.formatContext, K.lastPushedText, true);
        K.children.push(se), K.lastPushedText = false, p = Xo(p, x.node, x.blockedBoundary, se, x.abortSet, x.legacyContext, x.context, x.treeContext).ping, k.then(p, p), x.blockedSegment.formatContext = A, x.legacyContext = H, x.context = M, Ar(M);
      } else throw x.blockedSegment.formatContext = A, x.legacyContext = H, x.context = M, Ar(M), le;
    }
  }
  __name(ho, "ho");
  function sn(p) {
    var x = p.blockedBoundary;
    p = p.blockedSegment, p.status = 3, sr(this, x, p);
  }
  __name(sn, "sn");
  function ba(p, x, k) {
    var A = p.blockedBoundary;
    p.blockedSegment.status = 3, A === null ? (x.allPendingTasks--, x.status !== 2 && (x.status = 2, x.destination !== null && x.destination.push(null))) : (A.pendingTasks--, A.forceClientRender || (A.forceClientRender = true, p = k === void 0 ? Error(n(432)) : k, A.errorDigest = x.onError(p), A.parentFlushed && x.clientRenderedBoundaries.push(A)), A.fallbackAbortableTasks.forEach(function(H) {
      return ba(H, x, k);
    }), A.fallbackAbortableTasks.clear(), x.allPendingTasks--, x.allPendingTasks === 0 && (A = x.onAllReady, A()));
  }
  __name(ba, "ba");
  function Dr(p, x) {
    if (x.chunks.length === 0 && x.children.length === 1 && x.children[0].boundary === null) {
      var k = x.children[0];
      k.id = x.id, k.parentFlushed = true, k.status === 1 && Dr(p, k);
    } else p.completedSegments.push(x);
  }
  __name(Dr, "Dr");
  function sr(p, x, k) {
    if (x === null) {
      if (k.parentFlushed) {
        if (p.completedRootSegment !== null) throw Error(n(389));
        p.completedRootSegment = k;
      }
      p.pendingRootTasks--, p.pendingRootTasks === 0 && (p.onShellError = on, x = p.onShellReady, x());
    } else x.pendingTasks--, x.forceClientRender || (x.pendingTasks === 0 ? (k.parentFlushed && k.status === 1 && Dr(x, k), x.parentFlushed && p.completedBoundaries.push(x), x.fallbackAbortableTasks.forEach(sn, p), x.fallbackAbortableTasks.clear()) : k.parentFlushed && k.status === 1 && (Dr(x, k), x.completedSegments.length === 1 && x.parentFlushed && p.partialBoundaries.push(x)));
    p.allPendingTasks--, p.allPendingTasks === 0 && (p = p.onAllReady, p());
  }
  __name(sr, "sr");
  function Dt(p) {
    if (p.status !== 2) {
      var x = Ft, k = Ko.current;
      Ko.current = Oa;
      var A = fo;
      fo = p.responseState;
      try {
        var H = p.pingedTasks, M;
        for (M = 0; M < H.length; M++) {
          var K = H[M], se = p, le = K.blockedSegment;
          if (le.status === 0) {
            Ar(K.context);
            try {
              xt(se, K, K.node), se.responseState.generateStaticMarkup || le.lastPushedText && le.textEmbedded && le.chunks.push("<!-- -->"), K.abortSet.delete(K), le.status = 1, sr(se, K.blockedBoundary, le);
            } catch (kt) {
              if (Un(), typeof kt == "object" && kt !== null && typeof kt.then == "function") {
                var Ee = K.ping;
                kt.then(Ee, Ee);
              } else {
                K.abortSet.delete(K), le.status = 4;
                var Te = K.blockedBoundary, We = kt, zt = an(se, We);
                if (Te === null ? Fn(se, We) : (Te.pendingTasks--, Te.forceClientRender || (Te.forceClientRender = true, Te.errorDigest = zt, Te.parentFlushed && se.clientRenderedBoundaries.push(Te))), se.allPendingTasks--, se.allPendingTasks === 0) {
                  var Ht = se.onAllReady;
                  Ht();
                }
              }
            } finally {
            }
          }
        }
        H.splice(0, M), p.destination !== null && Nr(p, p.destination);
      } catch (kt) {
        an(p, kt), Fn(p, kt);
      } finally {
        fo = A, Ko.current = k, k === Oa && Ar(x);
      }
    }
  }
  __name(Dt, "Dt");
  function zn(p, x, k) {
    switch (k.parentFlushed = true, k.status) {
      case 0:
        var A = k.id = p.nextSegmentId++;
        return k.lastPushedText = false, k.textEmbedded = false, p = p.responseState, x.push('<template id="'), x.push(p.placeholderPrefix), p = A.toString(16), x.push(p), x.push('"></template>');
      case 1:
        k.status = 2;
        var H = true;
        A = k.chunks;
        var M = 0;
        k = k.children;
        for (var K = 0; K < k.length; K++) {
          for (H = k[K]; M < H.index; M++) x.push(A[M]);
          H = dt(p, x, H);
        }
        for (; M < A.length - 1; M++) x.push(A[M]);
        return M < A.length && (H = x.push(A[M])), H;
      default:
        throw Error(n(390));
    }
  }
  __name(zn, "zn");
  function dt(p, x, k) {
    var A = k.boundary;
    if (A === null) return zn(p, x, k);
    if (A.parentFlushed = true, A.forceClientRender) return p.responseState.generateStaticMarkup || (A = A.errorDigest, x.push("<!--$!-->"), x.push("<template"), A && (x.push(' data-dgst="'), A = P(A), x.push(A), x.push('"')), x.push("></template>")), zn(p, x, k), p = p.responseState.generateStaticMarkup ? true : x.push("<!--/$-->"), p;
    if (0 < A.pendingTasks) {
      A.rootSegmentID = p.nextSegmentId++, 0 < A.completedSegments.length && p.partialBoundaries.push(A);
      var H = p.responseState, M = H.nextSuspenseID++;
      return H = H.boundaryPrefix + M.toString(16), A = A.id = H, _e(x, p.responseState, A), zn(p, x, k), x.push("<!--/$-->");
    }
    if (A.byteSize > p.progressiveChunkSize) return A.rootSegmentID = p.nextSegmentId++, p.completedBoundaries.push(A), _e(x, p.responseState, A.id), zn(p, x, k), x.push("<!--/$-->");
    if (p.responseState.generateStaticMarkup || x.push("<!--$-->"), k = A.completedSegments, k.length !== 1) throw Error(n(391));
    return dt(p, x, k[0]), p = p.responseState.generateStaticMarkup ? true : x.push("<!--/$-->"), p;
  }
  __name(dt, "dt");
  function ea(p, x, k) {
    return Re(x, p.responseState, k.formatContext, k.id), dt(p, x, k), De(x, k.formatContext);
  }
  __name(ea, "ea");
  function ta(p, x, k) {
    for (var A = k.completedSegments, H = 0; H < A.length; H++) ra(p, x, k, A[H]);
    if (A.length = 0, p = p.responseState, A = k.id, k = k.rootSegmentID, x.push(p.startInlineScript), p.sentCompleteBoundaryFunction ? x.push('$RC("') : (p.sentCompleteBoundaryFunction = true, x.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), A === null) throw Error(n(395));
    return k = k.toString(16), x.push(A), x.push('","'), x.push(p.segmentPrefix), x.push(k), x.push('")<\/script>');
  }
  __name(ta, "ta");
  function ra(p, x, k, A) {
    if (A.status === 2) return true;
    var H = A.id;
    if (H === -1) {
      if ((A.id = k.rootSegmentID) === -1) throw Error(n(392));
      return ea(p, x, A);
    }
    return ea(p, x, A), p = p.responseState, x.push(p.startInlineScript), p.sentCompleteSegmentFunction ? x.push('$RS("') : (p.sentCompleteSegmentFunction = true, x.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), x.push(p.segmentPrefix), H = H.toString(16), x.push(H), x.push('","'), x.push(p.placeholderPrefix), x.push(H), x.push('")<\/script>');
  }
  __name(ra, "ra");
  function Nr(p, x) {
    try {
      var k = p.completedRootSegment;
      if (k !== null && p.pendingRootTasks === 0) {
        dt(p, x, k), p.completedRootSegment = null;
        var A = p.responseState.bootstrapChunks;
        for (k = 0; k < A.length - 1; k++) x.push(A[k]);
        k < A.length && x.push(A[k]);
      }
      var H = p.clientRenderedBoundaries, M;
      for (M = 0; M < H.length; M++) {
        var K = H[M];
        A = x;
        var se = p.responseState, le = K.id, Ee = K.errorDigest, Te = K.errorMessage, We = K.errorComponentStack;
        if (A.push(se.startInlineScript), se.sentClientRenderFunction ? A.push('$RX("') : (se.sentClientRenderFunction = true, A.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), le === null) throw Error(n(395));
        if (A.push(le), A.push('"'), Ee || Te || We) {
          A.push(",");
          var zt = ne(Ee || "");
          A.push(zt);
        }
        if (Te || We) {
          A.push(",");
          var Ht = ne(Te || "");
          A.push(Ht);
        }
        if (We) {
          A.push(",");
          var kt = ne(We);
          A.push(kt);
        }
        if (!A.push(")<\/script>")) {
          p.destination = null, M++, H.splice(0, M);
          return;
        }
      }
      H.splice(0, M);
      var br = p.completedBoundaries;
      for (M = 0; M < br.length; M++) if (!ta(p, x, br[M])) {
        p.destination = null, M++, br.splice(0, M);
        return;
      }
      br.splice(0, M);
      var Bt = p.partialBoundaries;
      for (M = 0; M < Bt.length; M++) {
        var Vt = Bt[M];
        e: {
          H = p, K = x;
          var Pt = Vt.completedSegments;
          for (se = 0; se < Pt.length; se++) if (!ra(H, K, Vt, Pt[se])) {
            se++, Pt.splice(0, se);
            var lr = false;
            break e;
          }
          Pt.splice(0, se), lr = true;
        }
        if (!lr) {
          p.destination = null, M++, Bt.splice(0, M);
          return;
        }
      }
      Bt.splice(0, M);
      var qt = p.completedBoundaries;
      for (M = 0; M < qt.length; M++) if (!ta(p, x, qt[M])) {
        p.destination = null, M++, qt.splice(0, M);
        return;
      }
      qt.splice(0, M);
    } finally {
      p.allPendingTasks === 0 && p.pingedTasks.length === 0 && p.clientRenderedBoundaries.length === 0 && p.completedBoundaries.length === 0 && x.push(null);
    }
  }
  __name(Nr, "Nr");
  function Hn(p, x) {
    try {
      var k = p.abortableTasks;
      k.forEach(function(A) {
        return ba(A, p, x);
      }), k.clear(), p.destination !== null && Nr(p, p.destination);
    } catch (A) {
      an(p, A), Fn(p, A);
    }
  }
  __name(Hn, "Hn");
  function ln() {
  }
  __name(ln, "ln");
  function un(p, x, k, A) {
    var H = false, M = null, K = "", se = { push: /* @__PURE__ */ __name(function(Ee) {
      return Ee !== null && (K += Ee), true;
    }, "push"), destroy: /* @__PURE__ */ __name(function(Ee) {
      H = true, M = Ee;
    }, "destroy") }, le = false;
    if (p = La(p, ue(k, x ? x.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, ln, void 0, function() {
      le = true;
    }), Dt(p), Hn(p, A), p.status === 1) p.status = 2, se.destroy(p.fatalError);
    else if (p.status !== 2 && p.destination === null) {
      p.destination = se;
      try {
        Nr(p, se);
      } catch (Ee) {
        an(p, Ee), Fn(p, Ee);
      }
    }
    if (H) throw M;
    if (!le) throw Error(n(426));
    return K;
  }
  __name(un, "un");
  return _a.renderToNodeStream = function() {
    throw Error(n(207));
  }, _a.renderToStaticMarkup = function(p, x) {
    return un(p, x, true, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, _a.renderToStaticNodeStream = function() {
    throw Error(n(208));
  }, _a.renderToString = function(p, x) {
    return un(p, x, false, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, _a.version = "18.3.1", _a;
}
__name(hS, "hS");
var Nl = {};
var Wh;
function mS() {
  if (Wh) return Nl;
  Wh = 1;
  var t = xs();
  function n(m) {
    for (var w = "https://reactjs.org/docs/error-decoder.html?invariant=" + m, _ = 1; _ < arguments.length; _++) w += "&args[]=" + encodeURIComponent(arguments[_]);
    return "Minified React error #" + m + "; visit " + w + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  __name(n, "n");
  var o = null, i = 0;
  function s(m, w) {
    if (w.length !== 0) if (512 < w.length) 0 < i && (m.enqueue(new Uint8Array(o.buffer, 0, i)), o = new Uint8Array(512), i = 0), m.enqueue(w);
    else {
      var _ = o.length - i;
      _ < w.length && (_ === 0 ? m.enqueue(o) : (o.set(w.subarray(0, _), i), m.enqueue(o), w = w.subarray(_)), o = new Uint8Array(512), i = 0), o.set(w, i), i += w.length;
    }
  }
  __name(s, "s");
  function u(m, w) {
    return s(m, w), true;
  }
  __name(u, "u");
  function c(m) {
    o && 0 < i && (m.enqueue(new Uint8Array(o.buffer, 0, i)), o = null, i = 0);
  }
  __name(c, "c");
  var f = new TextEncoder();
  function h(m) {
    return f.encode(m);
  }
  __name(h, "h");
  function v(m) {
    return f.encode(m);
  }
  __name(v, "v");
  function C(m, w) {
    typeof m.error == "function" ? m.error(w) : m.close();
  }
  __name(C, "C");
  var S = Object.prototype.hasOwnProperty, j = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, R = {}, P = {};
  function I(m) {
    return S.call(P, m) ? true : S.call(R, m) ? false : j.test(m) ? P[m] = true : (R[m] = true, false);
  }
  __name(I, "I");
  function L(m, w, _, T, V, z, X) {
    this.acceptsBooleans = w === 2 || w === 3 || w === 4, this.attributeName = T, this.attributeNamespace = V, this.mustUseProperty = _, this.propertyName = m, this.type = w, this.sanitizeURL = z, this.removeEmptyString = X;
  }
  __name(L, "L");
  var U = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(m) {
    U[m] = new L(m, 0, false, m, null, false, false);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(m) {
    var w = m[0];
    U[w] = new L(w, 1, false, m[1], null, false, false);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(m) {
    U[m] = new L(m, 2, false, m.toLowerCase(), null, false, false);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(m) {
    U[m] = new L(m, 2, false, m, null, false, false);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(m) {
    U[m] = new L(m, 3, false, m.toLowerCase(), null, false, false);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(m) {
    U[m] = new L(m, 3, true, m, null, false, false);
  }), ["capture", "download"].forEach(function(m) {
    U[m] = new L(m, 4, false, m, null, false, false);
  }), ["cols", "rows", "size", "span"].forEach(function(m) {
    U[m] = new L(m, 6, false, m, null, false, false);
  }), ["rowSpan", "start"].forEach(function(m) {
    U[m] = new L(m, 5, false, m.toLowerCase(), null, false, false);
  });
  var q = /[\-:]([a-z])/g;
  function Y(m) {
    return m[1].toUpperCase();
  }
  __name(Y, "Y");
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(m) {
    var w = m.replace(q, Y);
    U[w] = new L(w, 1, false, m, null, false, false);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(m) {
    var w = m.replace(q, Y);
    U[w] = new L(w, 1, false, m, "http://www.w3.org/1999/xlink", false, false);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(m) {
    var w = m.replace(q, Y);
    U[w] = new L(w, 1, false, m, "http://www.w3.org/XML/1998/namespace", false, false);
  }), ["tabIndex", "crossOrigin"].forEach(function(m) {
    U[m] = new L(m, 1, false, m.toLowerCase(), null, false, false);
  }), U.xlinkHref = new L("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false), ["src", "href", "action", "formAction"].forEach(function(m) {
    U[m] = new L(m, 1, false, m.toLowerCase(), null, true, true);
  });
  var G = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, ye = ["Webkit", "ms", "Moz", "O"];
  Object.keys(G).forEach(function(m) {
    ye.forEach(function(w) {
      w = w + m.charAt(0).toUpperCase() + m.substring(1), G[w] = G[m];
    });
  });
  var Q = /["'&<>]/;
  function J(m) {
    if (typeof m == "boolean" || typeof m == "number") return "" + m;
    m = "" + m;
    var w = Q.exec(m);
    if (w) {
      var _ = "", T, V = 0;
      for (T = w.index; T < m.length; T++) {
        switch (m.charCodeAt(T)) {
          case 34:
            w = "&quot;";
            break;
          case 38:
            w = "&amp;";
            break;
          case 39:
            w = "&#x27;";
            break;
          case 60:
            w = "&lt;";
            break;
          case 62:
            w = "&gt;";
            break;
          default:
            continue;
        }
        V !== T && (_ += m.substring(V, T)), V = T + 1, _ += w;
      }
      m = V !== T ? _ + m.substring(V, T) : _;
    }
    return m;
  }
  __name(J, "J");
  var ce = /([A-Z])/g, ve = /^ms-/, $e = Array.isArray, Ie = v("<script>"), Ae = v("<\/script>"), fe = v('<script src="'), _e = v('<script type="module" src="'), Re = v('" async=""><\/script>'), De = /(<\/|<)(s)(cript)/gi;
  function Oe(m, w, _, T) {
    return "" + w + (_ === "s" ? "\\u0073" : "\\u0053") + T;
  }
  __name(Oe, "Oe");
  function ne(m, w, _, T, V) {
    m = m === void 0 ? "" : m, w = w === void 0 ? Ie : v('<script nonce="' + J(w) + '">');
    var z = [];
    if (_ !== void 0 && z.push(w, h(("" + _).replace(De, Oe)), Ae), T !== void 0) for (_ = 0; _ < T.length; _++) z.push(fe, h(J(T[_])), Re);
    if (V !== void 0) for (T = 0; T < V.length; T++) z.push(_e, h(J(V[T])), Re);
    return { bootstrapChunks: z, startInlineScript: w, placeholderPrefix: v(m + "P:"), segmentPrefix: v(m + "S:"), boundaryPrefix: m + "B:", idPrefix: m, nextSuspenseID: 0, sentCompleteSegmentFunction: false, sentCompleteBoundaryFunction: false, sentClientRenderFunction: false };
  }
  __name(ne, "ne");
  function ue(m, w) {
    return { insertionMode: m, selectedValue: w };
  }
  __name(ue, "ue");
  function oe(m) {
    return ue(m === "http://www.w3.org/2000/svg" ? 2 : m === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  __name(oe, "oe");
  function b(m, w, _) {
    switch (w) {
      case "select":
        return ue(1, _.value != null ? _.value : _.defaultValue);
      case "svg":
        return ue(2, null);
      case "math":
        return ue(3, null);
      case "foreignObject":
        return ue(1, null);
      case "table":
        return ue(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return ue(5, null);
      case "colgroup":
        return ue(7, null);
      case "tr":
        return ue(6, null);
    }
    return 4 <= m.insertionMode || m.insertionMode === 0 ? ue(1, null) : m;
  }
  __name(b, "b");
  var Z = v("<!-- -->");
  function Ce(m, w, _, T) {
    return w === "" ? T : (T && m.push(Z), m.push(h(J(w))), true);
  }
  __name(Ce, "Ce");
  var ke = /* @__PURE__ */ new Map(), be = v(' style="'), Ne = v(":"), He = v(";");
  function Fe(m, w, _) {
    if (typeof _ != "object") throw Error(n(62));
    w = true;
    for (var T in _) if (S.call(_, T)) {
      var V = _[T];
      if (V != null && typeof V != "boolean" && V !== "") {
        if (T.indexOf("--") === 0) {
          var z = h(J(T));
          V = h(J(("" + V).trim()));
        } else {
          z = T;
          var X = ke.get(z);
          X !== void 0 || (X = v(J(z.replace(ce, "-$1").toLowerCase().replace(ve, "-ms-"))), ke.set(z, X)), z = X, V = typeof V == "number" ? V === 0 || S.call(G, T) ? h("" + V) : h(V + "px") : h(J(("" + V).trim()));
        }
        w ? (w = false, m.push(be, z, Ne, V)) : m.push(He, z, Ne, V);
      }
    }
    w || m.push(ht);
  }
  __name(Fe, "Fe");
  var Ue = v(" "), Je = v('="'), ht = v('"'), $r = v('=""');
  function it(m, w, _, T) {
    switch (_) {
      case "style":
        Fe(m, w, T);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < _.length) || _[0] !== "o" && _[0] !== "O" || _[1] !== "n" && _[1] !== "N") {
      if (w = U.hasOwnProperty(_) ? U[_] : null, w !== null) {
        switch (typeof T) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!w.acceptsBooleans) return;
        }
        switch (_ = h(w.attributeName), w.type) {
          case 3:
            T && m.push(Ue, _, $r);
            break;
          case 4:
            T === true ? m.push(Ue, _, $r) : T !== false && m.push(Ue, _, Je, h(J(T)), ht);
            break;
          case 5:
            isNaN(T) || m.push(Ue, _, Je, h(J(T)), ht);
            break;
          case 6:
            !isNaN(T) && 1 <= T && m.push(Ue, _, Je, h(J(T)), ht);
            break;
          default:
            w.sanitizeURL && (T = "" + T), m.push(Ue, _, Je, h(J(T)), ht);
        }
      } else if (I(_)) {
        switch (typeof T) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (w = _.toLowerCase().slice(0, 5), w !== "data-" && w !== "aria-") return;
        }
        m.push(Ue, h(_), Je, h(J(T)), ht);
      }
    }
  }
  __name(it, "it");
  var Mt = v(">"), Fo = v("/>");
  function Tn(m, w, _) {
    if (w != null) {
      if (_ != null) throw Error(n(60));
      if (typeof w != "object" || !("__html" in w)) throw Error(n(61));
      w = w.__html, w != null && m.push(h("" + w));
    }
  }
  __name(Tn, "Tn");
  function zo(m) {
    var w = "";
    return t.Children.forEach(m, function(_) {
      _ != null && (w += _);
    }), w;
  }
  __name(zo, "zo");
  var An = v(' selected=""');
  function Ir(m, w, _, T) {
    m.push(mt(_));
    var V = _ = null, z;
    for (z in w) if (S.call(w, z)) {
      var X = w[z];
      if (X != null) switch (z) {
        case "children":
          _ = X;
          break;
        case "dangerouslySetInnerHTML":
          V = X;
          break;
        default:
          it(m, T, z, X);
      }
    }
    return m.push(Mt), Tn(m, V, _), typeof _ == "string" ? (m.push(h(J(_))), null) : _;
  }
  __name(Ir, "Ir");
  var gr = v(`
`), Tr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ft = /* @__PURE__ */ new Map();
  function mt(m) {
    var w = Ft.get(m);
    if (w === void 0) {
      if (!Tr.test(m)) throw Error(n(65, m));
      w = v("<" + m), Ft.set(m, w);
    }
    return w;
  }
  __name(mt, "mt");
  var Ho = v("<!DOCTYPE html>");
  function Bo(m, w, _, T, V) {
    switch (w) {
      case "select":
        m.push(mt("select"));
        var z = null, X = null;
        for (Pe in _) if (S.call(_, Pe)) {
          var ae = _[Pe];
          if (ae != null) switch (Pe) {
            case "children":
              z = ae;
              break;
            case "dangerouslySetInnerHTML":
              X = ae;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              it(m, T, Pe, ae);
          }
        }
        return m.push(Mt), Tn(m, X, z), z;
      case "option":
        X = V.selectedValue, m.push(mt("option"));
        var Se = ae = null, Le = null, Pe = null;
        for (z in _) if (S.call(_, z)) {
          var Ye = _[z];
          if (Ye != null) switch (z) {
            case "children":
              ae = Ye;
              break;
            case "selected":
              Le = Ye;
              break;
            case "dangerouslySetInnerHTML":
              Pe = Ye;
              break;
            case "value":
              Se = Ye;
            default:
              it(m, T, z, Ye);
          }
        }
        if (X != null) if (_ = Se !== null ? "" + Se : zo(ae), $e(X)) {
          for (T = 0; T < X.length; T++) if ("" + X[T] === _) {
            m.push(An);
            break;
          }
        } else "" + X === _ && m.push(An);
        else Le && m.push(An);
        return m.push(Mt), Tn(m, Pe, ae), ae;
      case "textarea":
        m.push(mt("textarea")), Pe = X = z = null;
        for (ae in _) if (S.call(_, ae) && (Se = _[ae], Se != null)) switch (ae) {
          case "children":
            Pe = Se;
            break;
          case "value":
            z = Se;
            break;
          case "defaultValue":
            X = Se;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(n(91));
          default:
            it(m, T, ae, Se);
        }
        if (z === null && X !== null && (z = X), m.push(Mt), Pe != null) {
          if (z != null) throw Error(n(92));
          if ($e(Pe) && 1 < Pe.length) throw Error(n(93));
          z = "" + Pe;
        }
        return typeof z == "string" && z[0] === `
` && m.push(gr), z !== null && m.push(h(J("" + z))), null;
      case "input":
        m.push(mt("input")), Se = Pe = ae = z = null;
        for (X in _) if (S.call(_, X) && (Le = _[X], Le != null)) switch (X) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(n(399, "input"));
          case "defaultChecked":
            Se = Le;
            break;
          case "defaultValue":
            ae = Le;
            break;
          case "checked":
            Pe = Le;
            break;
          case "value":
            z = Le;
            break;
          default:
            it(m, T, X, Le);
        }
        return Pe !== null ? it(m, T, "checked", Pe) : Se !== null && it(m, T, "checked", Se), z !== null ? it(m, T, "value", z) : ae !== null && it(m, T, "value", ae), m.push(Fo), null;
      case "menuitem":
        m.push(mt("menuitem"));
        for (var jt in _) if (S.call(_, jt) && (z = _[jt], z != null)) switch (jt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(n(400));
          default:
            it(m, T, jt, z);
        }
        return m.push(Mt), null;
      case "title":
        m.push(mt("title")), z = null;
        for (Ye in _) if (S.call(_, Ye) && (X = _[Ye], X != null)) switch (Ye) {
          case "children":
            z = X;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(n(434));
          default:
            it(m, T, Ye, X);
        }
        return m.push(Mt), z;
      case "listing":
      case "pre":
        m.push(mt(w)), X = z = null;
        for (Se in _) if (S.call(_, Se) && (ae = _[Se], ae != null)) switch (Se) {
          case "children":
            z = ae;
            break;
          case "dangerouslySetInnerHTML":
            X = ae;
            break;
          default:
            it(m, T, Se, ae);
        }
        if (m.push(Mt), X != null) {
          if (z != null) throw Error(n(60));
          if (typeof X != "object" || !("__html" in X)) throw Error(n(61));
          _ = X.__html, _ != null && (typeof _ == "string" && 0 < _.length && _[0] === `
` ? m.push(gr, h(_)) : m.push(h("" + _)));
        }
        return typeof z == "string" && z[0] === `
` && m.push(gr), z;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        m.push(mt(w));
        for (var Wt in _) if (S.call(_, Wt) && (z = _[Wt], z != null)) switch (Wt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(n(399, w));
          default:
            it(m, T, Wt, z);
        }
        return m.push(Fo), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Ir(m, _, w, T);
      case "html":
        return V.insertionMode === 0 && m.push(Ho), Ir(m, _, w, T);
      default:
        if (w.indexOf("-") === -1 && typeof _.is != "string") return Ir(m, _, w, T);
        m.push(mt(w)), X = z = null;
        for (Le in _) if (S.call(_, Le) && (ae = _[Le], ae != null)) switch (Le) {
          case "children":
            z = ae;
            break;
          case "dangerouslySetInnerHTML":
            X = ae;
            break;
          case "style":
            Fe(m, T, ae);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            I(Le) && typeof ae != "function" && typeof ae != "symbol" && m.push(Ue, h(Le), Je, h(J(ae)), ht);
        }
        return m.push(Mt), Tn(m, X, z), z;
    }
  }
  __name(Bo, "Bo");
  var Vo = v("</"), lo = v(">"), Ar = v('<template id="'), qo = v('"></template>'), Xr = v("<!--$-->"), On = v('<!--$?--><template id="'), Wo = v('"></template>'), Ln = v("<!--$!-->"), Ta = v("<!--/$-->"), Pi = v("<template"), Qo = v('"'), Go = v(' data-dgst="');
  v(' data-msg="'), v(' data-stck="');
  var Yo = v("></template>");
  function _t(m, w, _) {
    if (s(m, On), _ === null) throw Error(n(395));
    return s(m, _), u(m, Wo);
  }
  __name(_t, "_t");
  var Dn = v('<div hidden id="'), or = v('">'), ze = v("</div>"), Zr = v('<svg aria-hidden="true" style="display:none" id="'), Nn = v('">'), en = v("</svg>"), ar = v('<math aria-hidden="true" style="display:none" id="'), bn = v('">'), ir = v("</math>"), Jo = v('<table hidden id="'), Or = v('">'), Un = v("</table>"), tn = v('<table hidden><tbody id="'), Aa = v('">'), rn = v("</tbody></table>"), uo = v('<table hidden><tr id="'), co = v('">'), nn = v("</tr></table>"), Oa = v('<table hidden><colgroup id="'), fo = v('">'), Ko = v("</colgroup></table>");
  function Lr(m, w, _, T) {
    switch (_.insertionMode) {
      case 0:
      case 1:
        return s(m, Dn), s(m, w.segmentPrefix), s(m, h(T.toString(16))), u(m, or);
      case 2:
        return s(m, Zr), s(m, w.segmentPrefix), s(m, h(T.toString(16))), u(m, Nn);
      case 3:
        return s(m, ar), s(m, w.segmentPrefix), s(m, h(T.toString(16))), u(m, bn);
      case 4:
        return s(m, Jo), s(m, w.segmentPrefix), s(m, h(T.toString(16))), u(m, Or);
      case 5:
        return s(m, tn), s(m, w.segmentPrefix), s(m, h(T.toString(16))), u(m, Aa);
      case 6:
        return s(m, uo), s(m, w.segmentPrefix), s(m, h(T.toString(16))), u(m, co);
      case 7:
        return s(m, Oa), s(m, w.segmentPrefix), s(m, h(T.toString(16))), u(m, fo);
      default:
        throw Error(n(397));
    }
  }
  __name(Lr, "Lr");
  function on(m, w) {
    switch (w.insertionMode) {
      case 0:
      case 1:
        return u(m, ze);
      case 2:
        return u(m, en);
      case 3:
        return u(m, ir);
      case 4:
        return u(m, Un);
      case 5:
        return u(m, rn);
      case 6:
        return u(m, nn);
      case 7:
        return u(m, Ko);
      default:
        throw Error(n(397));
    }
  }
  __name(on, "on");
  var La = v('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Xo = v('$RS("'), Mn = v('","'), an = v('")<\/script>'), Fn = v('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Zo = v('$RC("'), Da = v('","'), Na = v('")<\/script>'), Ge = v('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), xt = v('$RX("'), po = v('"'), ho = v(")<\/script>"), sn = v(","), ba = /[<\u2028\u2029]/g;
  function Dr(m) {
    return JSON.stringify(m).replace(ba, function(w) {
      switch (w) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  __name(Dr, "Dr");
  var sr = Object.assign, Dt = Symbol.for("react.element"), zn = Symbol.for("react.portal"), dt = Symbol.for("react.fragment"), ea = Symbol.for("react.strict_mode"), ta = Symbol.for("react.profiler"), ra = Symbol.for("react.provider"), Nr = Symbol.for("react.context"), Hn = Symbol.for("react.forward_ref"), ln = Symbol.for("react.suspense"), un = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), k = Symbol.for("react.scope"), A = Symbol.for("react.debug_trace_mode"), H = Symbol.for("react.legacy_hidden"), M = Symbol.for("react.default_value"), K = Symbol.iterator;
  function se(m) {
    if (m == null) return null;
    if (typeof m == "function") return m.displayName || m.name || null;
    if (typeof m == "string") return m;
    switch (m) {
      case dt:
        return "Fragment";
      case zn:
        return "Portal";
      case ta:
        return "Profiler";
      case ea:
        return "StrictMode";
      case ln:
        return "Suspense";
      case un:
        return "SuspenseList";
    }
    if (typeof m == "object") switch (m.$$typeof) {
      case Nr:
        return (m.displayName || "Context") + ".Consumer";
      case ra:
        return (m._context.displayName || "Context") + ".Provider";
      case Hn:
        var w = m.render;
        return m = m.displayName, m || (m = w.displayName || w.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
      case p:
        return w = m.displayName || null, w !== null ? w : se(m.type) || "Memo";
      case x:
        w = m._payload, m = m._init;
        try {
          return se(m(w));
        } catch {
        }
    }
    return null;
  }
  __name(se, "se");
  var le = {};
  function Ee(m, w) {
    if (m = m.contextTypes, !m) return le;
    var _ = {}, T;
    for (T in m) _[T] = w[T];
    return _;
  }
  __name(Ee, "Ee");
  var Te = null;
  function We(m, w) {
    if (m !== w) {
      m.context._currentValue = m.parentValue, m = m.parent;
      var _ = w.parent;
      if (m === null) {
        if (_ !== null) throw Error(n(401));
      } else {
        if (_ === null) throw Error(n(401));
        We(m, _);
      }
      w.context._currentValue = w.value;
    }
  }
  __name(We, "We");
  function zt(m) {
    m.context._currentValue = m.parentValue, m = m.parent, m !== null && zt(m);
  }
  __name(zt, "zt");
  function Ht(m) {
    var w = m.parent;
    w !== null && Ht(w), m.context._currentValue = m.value;
  }
  __name(Ht, "Ht");
  function kt(m, w) {
    if (m.context._currentValue = m.parentValue, m = m.parent, m === null) throw Error(n(402));
    m.depth === w.depth ? We(m, w) : kt(m, w);
  }
  __name(kt, "kt");
  function br(m, w) {
    var _ = w.parent;
    if (_ === null) throw Error(n(402));
    m.depth === _.depth ? We(m, _) : br(m, _), w.context._currentValue = w.value;
  }
  __name(br, "br");
  function Bt(m) {
    var w = Te;
    w !== m && (w === null ? Ht(m) : m === null ? zt(w) : w.depth === m.depth ? We(w, m) : w.depth > m.depth ? kt(w, m) : br(w, m), Te = m);
  }
  __name(Bt, "Bt");
  var Vt = { isMounted: /* @__PURE__ */ __name(function() {
    return false;
  }, "isMounted"), enqueueSetState: /* @__PURE__ */ __name(function(m, w) {
    m = m._reactInternals, m.queue !== null && m.queue.push(w);
  }, "enqueueSetState"), enqueueReplaceState: /* @__PURE__ */ __name(function(m, w) {
    m = m._reactInternals, m.replace = true, m.queue = [w];
  }, "enqueueReplaceState"), enqueueForceUpdate: /* @__PURE__ */ __name(function() {
  }, "enqueueForceUpdate") };
  function Pt(m, w, _, T) {
    var V = m.state !== void 0 ? m.state : null;
    m.updater = Vt, m.props = _, m.state = V;
    var z = { queue: [], replace: false };
    m._reactInternals = z;
    var X = w.contextType;
    if (m.context = typeof X == "object" && X !== null ? X._currentValue : T, X = w.getDerivedStateFromProps, typeof X == "function" && (X = X(_, V), V = X == null ? V : sr({}, V, X), m.state = V), typeof w.getDerivedStateFromProps != "function" && typeof m.getSnapshotBeforeUpdate != "function" && (typeof m.UNSAFE_componentWillMount == "function" || typeof m.componentWillMount == "function")) if (w = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), w !== m.state && Vt.enqueueReplaceState(m, m.state, null), z.queue !== null && 0 < z.queue.length) if (w = z.queue, X = z.replace, z.queue = null, z.replace = false, X && w.length === 1) m.state = w[0];
    else {
      for (z = X ? w[0] : m.state, V = true, X = X ? 1 : 0; X < w.length; X++) {
        var ae = w[X];
        ae = typeof ae == "function" ? ae.call(m, z, _, T) : ae, ae != null && (V ? (V = false, z = sr({}, z, ae)) : sr(z, ae));
      }
      m.state = z;
    }
    else z.queue = null;
  }
  __name(Pt, "Pt");
  var lr = { id: 1, overflow: "" };
  function qt(m, w, _) {
    var T = m.id;
    m = m.overflow;
    var V = 32 - cn(T) - 1;
    T &= ~(1 << V), _ += 1;
    var z = 32 - cn(w) + V;
    if (30 < z) {
      var X = V - V % 5;
      return z = (T & (1 << X) - 1).toString(32), T >>= X, V -= X, { id: 1 << 32 - cn(w) + V | _ << V | T, overflow: z + m };
    }
    return { id: 1 << z | _ << V | T, overflow: m };
  }
  __name(qt, "qt");
  var cn = Math.clz32 ? Math.clz32 : Os, dn = Math.log, Eu = Math.LN2;
  function Os(m) {
    return m >>>= 0, m === 0 ? 32 : 31 - (dn(m) / Eu | 0) | 0;
  }
  __name(Os, "Os");
  function na(m, w) {
    return m === w && (m !== 0 || 1 / m === 1 / w) || m !== m && w !== w;
  }
  __name(na, "na");
  var _u = typeof Object.is == "function" ? Object.is : na, yr = null, mo = null, oa = null, Qe = null, Ur = false, fn = false, vr = 0, ur = null, Ua = 0;
  function Bn() {
    if (yr === null) throw Error(n(321));
    return yr;
  }
  __name(Bn, "Bn");
  function Ma() {
    if (0 < Ua) throw Error(n(312));
    return { memoizedState: null, queue: null, next: null };
  }
  __name(Ma, "Ma");
  function go() {
    return Qe === null ? oa === null ? (Ur = false, oa = Qe = Ma()) : (Ur = true, Qe = oa) : Qe.next === null ? (Ur = false, Qe = Qe.next = Ma()) : (Ur = true, Qe = Qe.next), Qe;
  }
  __name(go, "go");
  function aa() {
    mo = yr = null, fn = false, oa = null, Ua = 0, Qe = ur = null;
  }
  __name(aa, "aa");
  function ji(m, w) {
    return typeof w == "function" ? w(m) : w;
  }
  __name(ji, "ji");
  function Mr(m, w, _) {
    if (yr = Bn(), Qe = go(), Ur) {
      var T = Qe.queue;
      if (w = T.dispatch, ur !== null && (_ = ur.get(T), _ !== void 0)) {
        ur.delete(T), T = Qe.memoizedState;
        do
          T = m(T, _.action), _ = _.next;
        while (_ !== null);
        return Qe.memoizedState = T, [T, w];
      }
      return [Qe.memoizedState, w];
    }
    return m = m === ji ? typeof w == "function" ? w() : w : _ !== void 0 ? _(w) : w, Qe.memoizedState = m, m = Qe.queue = { last: null, dispatch: null }, m = m.dispatch = za.bind(null, yr, m), [Qe.memoizedState, m];
  }
  __name(Mr, "Mr");
  function Fa(m, w) {
    if (yr = Bn(), Qe = go(), w = w === void 0 ? null : w, Qe !== null) {
      var _ = Qe.memoizedState;
      if (_ !== null && w !== null) {
        var T = _[1];
        e: if (T === null) T = false;
        else {
          for (var V = 0; V < T.length && V < w.length; V++) if (!_u(w[V], T[V])) {
            T = false;
            break e;
          }
          T = true;
        }
        if (T) return _[0];
      }
    }
    return m = m(), Qe.memoizedState = [m, w], m;
  }
  __name(Fa, "Fa");
  function za(m, w, _) {
    if (25 <= Ua) throw Error(n(301));
    if (m === yr) if (fn = true, m = { action: _, next: null }, ur === null && (ur = /* @__PURE__ */ new Map()), _ = ur.get(w), _ === void 0) ur.set(w, m);
    else {
      for (w = _; w.next !== null; ) w = w.next;
      w.next = m;
    }
  }
  __name(za, "za");
  function Ls() {
    throw Error(n(394));
  }
  __name(Ls, "Ls");
  function Vn() {
  }
  __name(Vn, "Vn");
  var ia = { readContext: /* @__PURE__ */ __name(function(m) {
    return m._currentValue;
  }, "readContext"), useContext: /* @__PURE__ */ __name(function(m) {
    return Bn(), m._currentValue;
  }, "useContext"), useMemo: Fa, useReducer: Mr, useRef: /* @__PURE__ */ __name(function(m) {
    yr = Bn(), Qe = go();
    var w = Qe.memoizedState;
    return w === null ? (m = { current: m }, Qe.memoizedState = m) : w;
  }, "useRef"), useState: /* @__PURE__ */ __name(function(m) {
    return Mr(ji, m);
  }, "useState"), useInsertionEffect: Vn, useLayoutEffect: /* @__PURE__ */ __name(function() {
  }, "useLayoutEffect"), useCallback: /* @__PURE__ */ __name(function(m, w) {
    return Fa(function() {
      return m;
    }, w);
  }, "useCallback"), useImperativeHandle: Vn, useEffect: Vn, useDebugValue: Vn, useDeferredValue: /* @__PURE__ */ __name(function(m) {
    return Bn(), m;
  }, "useDeferredValue"), useTransition: /* @__PURE__ */ __name(function() {
    return Bn(), [false, Ls];
  }, "useTransition"), useId: /* @__PURE__ */ __name(function() {
    var m = mo.treeContext, w = m.overflow;
    m = m.id, m = (m & ~(1 << 32 - cn(m) - 1)).toString(32) + w;
    var _ = sa;
    if (_ === null) throw Error(n(404));
    return w = vr++, m = ":" + _.idPrefix + "R" + m, 0 < w && (m += "H" + w.toString(32)), m + ":";
  }, "useId"), useMutableSource: /* @__PURE__ */ __name(function(m, w) {
    return Bn(), w(m._source);
  }, "useMutableSource"), useSyncExternalStore: /* @__PURE__ */ __name(function(m, w, _) {
    if (_ === void 0) throw Error(n(407));
    return _();
  }, "useSyncExternalStore") }, sa = null, St = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function yo(m) {
    return console.error(m), null;
  }
  __name(yo, "yo");
  function qn() {
  }
  __name(qn, "qn");
  function la(m, w, _, T, V, z, X, ae, Se) {
    var Le = [], Pe = /* @__PURE__ */ new Set();
    return w = { destination: null, responseState: w, progressiveChunkSize: T === void 0 ? 12800 : T, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Pe, pingedTasks: Le, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: V === void 0 ? yo : V, onAllReady: z === void 0 ? qn : z, onShellReady: X === void 0 ? qn : X, onShellError: ae === void 0 ? qn : ae, onFatalError: Se === void 0 ? qn : Se }, _ = vo(w, 0, null, _, false, false), _.parentFlushed = true, m = Ri(w, m, null, _, Pe, le, null, lr), Le.push(m), w;
  }
  __name(la, "la");
  function Ri(m, w, _, T, V, z, X, ae) {
    m.allPendingTasks++, _ === null ? m.pendingRootTasks++ : _.pendingTasks++;
    var Se = { node: w, ping: /* @__PURE__ */ __name(function() {
      var Le = m.pingedTasks;
      Le.push(Se), Le.length === 1 && Ai(m);
    }, "ping"), blockedBoundary: _, blockedSegment: T, abortSet: V, legacyContext: z, context: X, treeContext: ae };
    return V.add(Se), Se;
  }
  __name(Ri, "Ri");
  function vo(m, w, _, T, V, z) {
    return { status: 0, id: -1, index: w, parentFlushed: false, chunks: [], children: [], formatContext: T, boundary: _, lastPushedText: V, textEmbedded: z };
  }
  __name(vo, "vo");
  function Wn(m, w) {
    if (m = m.onError(w), m != null && typeof m != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof m + '" instead');
    return m;
  }
  __name(Wn, "Wn");
  function pn(m, w) {
    var _ = m.onShellError;
    _(w), _ = m.onFatalError, _(w), m.destination !== null ? (m.status = 2, C(m.destination, w)) : (m.status = 1, m.fatalError = w);
  }
  __name(pn, "pn");
  function ua(m, w, _, T, V) {
    for (yr = {}, mo = w, vr = 0, m = _(T, V); fn; ) fn = false, vr = 0, Ua += 1, Qe = null, m = _(T, V);
    return aa(), m;
  }
  __name(ua, "ua");
  function $i(m, w, _, T) {
    var V = _.render(), z = T.childContextTypes;
    if (z != null) {
      var X = w.legacyContext;
      if (typeof _.getChildContext != "function") T = X;
      else {
        _ = _.getChildContext();
        for (var ae in _) if (!(ae in z)) throw Error(n(108, se(T) || "Unknown", ae));
        T = sr({}, X, _);
      }
      w.legacyContext = T, Nt(m, w, V), w.legacyContext = X;
    } else Nt(m, w, V);
  }
  __name($i, "$i");
  function Ds(m, w) {
    if (m && m.defaultProps) {
      w = sr({}, w), m = m.defaultProps;
      for (var _ in m) w[_] === void 0 && (w[_] = m[_]);
      return w;
    }
    return w;
  }
  __name(Ds, "Ds");
  function Ii(m, w, _, T, V) {
    if (typeof _ == "function") if (_.prototype && _.prototype.isReactComponent) {
      V = Ee(_, w.legacyContext);
      var z = _.contextType;
      z = new _(T, typeof z == "object" && z !== null ? z._currentValue : V), Pt(z, _, T, V), $i(m, w, z, _);
    } else {
      z = Ee(_, w.legacyContext), V = ua(m, w, _, T, z);
      var X = vr !== 0;
      if (typeof V == "object" && V !== null && typeof V.render == "function" && V.$$typeof === void 0) Pt(V, _, T, z), $i(m, w, V, _);
      else if (X) {
        T = w.treeContext, w.treeContext = qt(T, 1, 0);
        try {
          Nt(m, w, V);
        } finally {
          w.treeContext = T;
        }
      } else Nt(m, w, V);
    }
    else if (typeof _ == "string") {
      switch (V = w.blockedSegment, z = Bo(V.chunks, _, T, m.responseState, V.formatContext), V.lastPushedText = false, X = V.formatContext, V.formatContext = b(X, _, T), Ti(m, w, z), V.formatContext = X, _) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          V.chunks.push(Vo, h(_), lo);
      }
      V.lastPushedText = false;
    } else {
      switch (_) {
        case H:
        case A:
        case ea:
        case ta:
        case dt:
          Nt(m, w, T.children);
          return;
        case un:
          Nt(m, w, T.children);
          return;
        case k:
          throw Error(n(343));
        case ln:
          e: {
            _ = w.blockedBoundary, V = w.blockedSegment, z = T.fallback, T = T.children, X = /* @__PURE__ */ new Set();
            var ae = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: X, errorDigest: null }, Se = vo(m, V.chunks.length, ae, V.formatContext, false, false);
            V.children.push(Se), V.lastPushedText = false;
            var Le = vo(m, 0, null, V.formatContext, false, false);
            Le.parentFlushed = true, w.blockedBoundary = ae, w.blockedSegment = Le;
            try {
              if (Ti(m, w, T), Le.lastPushedText && Le.textEmbedded && Le.chunks.push(Z), Le.status = 1, Ba(ae, Le), ae.pendingTasks === 0) break e;
            } catch (Pe) {
              Le.status = 4, ae.forceClientRender = true, ae.errorDigest = Wn(m, Pe);
            } finally {
              w.blockedBoundary = _, w.blockedSegment = V;
            }
            w = Ri(m, z, _, Se, X, w.legacyContext, w.context, w.treeContext), m.pingedTasks.push(w);
          }
          return;
      }
      if (typeof _ == "object" && _ !== null) switch (_.$$typeof) {
        case Hn:
          if (T = ua(m, w, _.render, T, V), vr !== 0) {
            _ = w.treeContext, w.treeContext = qt(_, 1, 0);
            try {
              Nt(m, w, T);
            } finally {
              w.treeContext = _;
            }
          } else Nt(m, w, T);
          return;
        case p:
          _ = _.type, T = Ds(_, T), Ii(m, w, _, T, V);
          return;
        case ra:
          if (V = T.children, _ = _._context, T = T.value, z = _._currentValue, _._currentValue = T, X = Te, Te = T = { parent: X, depth: X === null ? 0 : X.depth + 1, context: _, parentValue: z, value: T }, w.context = T, Nt(m, w, V), m = Te, m === null) throw Error(n(403));
          T = m.parentValue, m.context._currentValue = T === M ? m.context._defaultValue : T, m = Te = m.parent, w.context = m;
          return;
        case Nr:
          T = T.children, T = T(_._currentValue), Nt(m, w, T);
          return;
        case x:
          V = _._init, _ = V(_._payload), T = Ds(_, T), Ii(m, w, _, T, void 0);
          return;
      }
      throw Error(n(130, _ == null ? _ : typeof _, ""));
    }
  }
  __name(Ii, "Ii");
  function Nt(m, w, _) {
    if (w.node = _, typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Dt:
          Ii(m, w, _.type, _.props, _.ref);
          return;
        case zn:
          throw Error(n(257));
        case x:
          var T = _._init;
          _ = T(_._payload), Nt(m, w, _);
          return;
      }
      if ($e(_)) {
        Ha(m, w, _);
        return;
      }
      if (_ === null || typeof _ != "object" ? T = null : (T = K && _[K] || _["@@iterator"], T = typeof T == "function" ? T : null), T && (T = T.call(_))) {
        if (_ = T.next(), !_.done) {
          var V = [];
          do
            V.push(_.value), _ = T.next();
          while (!_.done);
          Ha(m, w, V);
        }
        return;
      }
      throw m = Object.prototype.toString.call(_), Error(n(31, m === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : m));
    }
    typeof _ == "string" ? (T = w.blockedSegment, T.lastPushedText = Ce(w.blockedSegment.chunks, _, m.responseState, T.lastPushedText)) : typeof _ == "number" && (T = w.blockedSegment, T.lastPushedText = Ce(w.blockedSegment.chunks, "" + _, m.responseState, T.lastPushedText));
  }
  __name(Nt, "Nt");
  function Ha(m, w, _) {
    for (var T = _.length, V = 0; V < T; V++) {
      var z = w.treeContext;
      w.treeContext = qt(z, T, V);
      try {
        Ti(m, w, _[V]);
      } finally {
        w.treeContext = z;
      }
    }
  }
  __name(Ha, "Ha");
  function Ti(m, w, _) {
    var T = w.blockedSegment.formatContext, V = w.legacyContext, z = w.context;
    try {
      return Nt(m, w, _);
    } catch (Se) {
      if (aa(), typeof Se == "object" && Se !== null && typeof Se.then == "function") {
        _ = Se;
        var X = w.blockedSegment, ae = vo(m, X.chunks.length, null, X.formatContext, X.lastPushedText, true);
        X.children.push(ae), X.lastPushedText = false, m = Ri(m, w.node, w.blockedBoundary, ae, w.abortSet, w.legacyContext, w.context, w.treeContext).ping, _.then(m, m), w.blockedSegment.formatContext = T, w.legacyContext = V, w.context = z, Bt(z);
      } else throw w.blockedSegment.formatContext = T, w.legacyContext = V, w.context = z, Bt(z), Se;
    }
  }
  __name(Ti, "Ti");
  function ku(m) {
    var w = m.blockedBoundary;
    m = m.blockedSegment, m.status = 3, bs(this, w, m);
  }
  __name(ku, "ku");
  function Ns(m, w, _) {
    var T = m.blockedBoundary;
    m.blockedSegment.status = 3, T === null ? (w.allPendingTasks--, w.status !== 2 && (w.status = 2, w.destination !== null && w.destination.close())) : (T.pendingTasks--, T.forceClientRender || (T.forceClientRender = true, m = _ === void 0 ? Error(n(432)) : _, T.errorDigest = w.onError(m), T.parentFlushed && w.clientRenderedBoundaries.push(T)), T.fallbackAbortableTasks.forEach(function(V) {
      return Ns(V, w, _);
    }), T.fallbackAbortableTasks.clear(), w.allPendingTasks--, w.allPendingTasks === 0 && (T = w.onAllReady, T()));
  }
  __name(Ns, "Ns");
  function Ba(m, w) {
    if (w.chunks.length === 0 && w.children.length === 1 && w.children[0].boundary === null) {
      var _ = w.children[0];
      _.id = w.id, _.parentFlushed = true, _.status === 1 && Ba(m, _);
    } else m.completedSegments.push(w);
  }
  __name(Ba, "Ba");
  function bs(m, w, _) {
    if (w === null) {
      if (_.parentFlushed) {
        if (m.completedRootSegment !== null) throw Error(n(389));
        m.completedRootSegment = _;
      }
      m.pendingRootTasks--, m.pendingRootTasks === 0 && (m.onShellError = qn, w = m.onShellReady, w());
    } else w.pendingTasks--, w.forceClientRender || (w.pendingTasks === 0 ? (_.parentFlushed && _.status === 1 && Ba(w, _), w.parentFlushed && m.completedBoundaries.push(w), w.fallbackAbortableTasks.forEach(ku, m), w.fallbackAbortableTasks.clear()) : _.parentFlushed && _.status === 1 && (Ba(w, _), w.completedSegments.length === 1 && w.parentFlushed && m.partialBoundaries.push(w)));
    m.allPendingTasks--, m.allPendingTasks === 0 && (m = m.onAllReady, m());
  }
  __name(bs, "bs");
  function Ai(m) {
    if (m.status !== 2) {
      var w = Te, _ = St.current;
      St.current = ia;
      var T = sa;
      sa = m.responseState;
      try {
        var V = m.pingedTasks, z;
        for (z = 0; z < V.length; z++) {
          var X = V[z], ae = m, Se = X.blockedSegment;
          if (Se.status === 0) {
            Bt(X.context);
            try {
              Nt(ae, X, X.node), Se.lastPushedText && Se.textEmbedded && Se.chunks.push(Z), X.abortSet.delete(X), Se.status = 1, bs(ae, X.blockedBoundary, Se);
            } catch (Qt) {
              if (aa(), typeof Qt == "object" && Qt !== null && typeof Qt.then == "function") {
                var Le = X.ping;
                Qt.then(Le, Le);
              } else {
                X.abortSet.delete(X), Se.status = 4;
                var Pe = X.blockedBoundary, Ye = Qt, jt = Wn(ae, Ye);
                if (Pe === null ? pn(ae, Ye) : (Pe.pendingTasks--, Pe.forceClientRender || (Pe.forceClientRender = true, Pe.errorDigest = jt, Pe.parentFlushed && ae.clientRenderedBoundaries.push(Pe))), ae.allPendingTasks--, ae.allPendingTasks === 0) {
                  var Wt = ae.onAllReady;
                  Wt();
                }
              }
            } finally {
            }
          }
        }
        V.splice(0, z), m.destination !== null && Oi(m, m.destination);
      } catch (Qt) {
        Wn(m, Qt), pn(m, Qt);
      } finally {
        sa = T, St.current = _, _ === ia && Bt(w);
      }
    }
  }
  __name(Ai, "Ai");
  function Va(m, w, _) {
    switch (_.parentFlushed = true, _.status) {
      case 0:
        var T = _.id = m.nextSegmentId++;
        return _.lastPushedText = false, _.textEmbedded = false, m = m.responseState, s(w, Ar), s(w, m.placeholderPrefix), m = h(T.toString(16)), s(w, m), u(w, qo);
      case 1:
        _.status = 2;
        var V = true;
        T = _.chunks;
        var z = 0;
        _ = _.children;
        for (var X = 0; X < _.length; X++) {
          for (V = _[X]; z < V.index; z++) s(w, T[z]);
          V = qa(m, w, V);
        }
        for (; z < T.length - 1; z++) s(w, T[z]);
        return z < T.length && (V = u(w, T[z])), V;
      default:
        throw Error(n(390));
    }
  }
  __name(Va, "Va");
  function qa(m, w, _) {
    var T = _.boundary;
    if (T === null) return Va(m, w, _);
    if (T.parentFlushed = true, T.forceClientRender) T = T.errorDigest, u(w, Ln), s(w, Pi), T && (s(w, Go), s(w, h(J(T))), s(w, Qo)), u(w, Yo), Va(m, w, _);
    else if (0 < T.pendingTasks) {
      T.rootSegmentID = m.nextSegmentId++, 0 < T.completedSegments.length && m.partialBoundaries.push(T);
      var V = m.responseState, z = V.nextSuspenseID++;
      V = v(V.boundaryPrefix + z.toString(16)), T = T.id = V, _t(w, m.responseState, T), Va(m, w, _);
    } else if (T.byteSize > m.progressiveChunkSize) T.rootSegmentID = m.nextSegmentId++, m.completedBoundaries.push(T), _t(w, m.responseState, T.id), Va(m, w, _);
    else {
      if (u(w, Xr), _ = T.completedSegments, _.length !== 1) throw Error(n(391));
      qa(m, w, _[0]);
    }
    return u(w, Ta);
  }
  __name(qa, "qa");
  function Us(m, w, _) {
    return Lr(w, m.responseState, _.formatContext, _.id), qa(m, w, _), on(w, _.formatContext);
  }
  __name(Us, "Us");
  function Ms(m, w, _) {
    for (var T = _.completedSegments, V = 0; V < T.length; V++) Wa(m, w, _, T[V]);
    if (T.length = 0, m = m.responseState, T = _.id, _ = _.rootSegmentID, s(w, m.startInlineScript), m.sentCompleteBoundaryFunction ? s(w, Zo) : (m.sentCompleteBoundaryFunction = true, s(w, Fn)), T === null) throw Error(n(395));
    return _ = h(_.toString(16)), s(w, T), s(w, Da), s(w, m.segmentPrefix), s(w, _), u(w, Na);
  }
  __name(Ms, "Ms");
  function Wa(m, w, _, T) {
    if (T.status === 2) return true;
    var V = T.id;
    if (V === -1) {
      if ((T.id = _.rootSegmentID) === -1) throw Error(n(392));
      return Us(m, w, T);
    }
    return Us(m, w, T), m = m.responseState, s(w, m.startInlineScript), m.sentCompleteSegmentFunction ? s(w, Xo) : (m.sentCompleteSegmentFunction = true, s(w, La)), s(w, m.segmentPrefix), V = h(V.toString(16)), s(w, V), s(w, Mn), s(w, m.placeholderPrefix), s(w, V), u(w, an);
  }
  __name(Wa, "Wa");
  function Oi(m, w) {
    o = new Uint8Array(512), i = 0;
    try {
      var _ = m.completedRootSegment;
      if (_ !== null && m.pendingRootTasks === 0) {
        qa(m, w, _), m.completedRootSegment = null;
        var T = m.responseState.bootstrapChunks;
        for (_ = 0; _ < T.length - 1; _++) s(w, T[_]);
        _ < T.length && u(w, T[_]);
      }
      var V = m.clientRenderedBoundaries, z;
      for (z = 0; z < V.length; z++) {
        var X = V[z];
        T = w;
        var ae = m.responseState, Se = X.id, Le = X.errorDigest, Pe = X.errorMessage, Ye = X.errorComponentStack;
        if (s(T, ae.startInlineScript), ae.sentClientRenderFunction ? s(T, xt) : (ae.sentClientRenderFunction = true, s(T, Ge)), Se === null) throw Error(n(395));
        s(T, Se), s(T, po), (Le || Pe || Ye) && (s(T, sn), s(T, h(Dr(Le || "")))), (Pe || Ye) && (s(T, sn), s(T, h(Dr(Pe || "")))), Ye && (s(T, sn), s(T, h(Dr(Ye)))), u(T, ho);
      }
      V.splice(0, z);
      var jt = m.completedBoundaries;
      for (z = 0; z < jt.length; z++) Ms(m, w, jt[z]);
      jt.splice(0, z), c(w), o = new Uint8Array(512), i = 0;
      var Wt = m.partialBoundaries;
      for (z = 0; z < Wt.length; z++) {
        var Qt = Wt[z];
        e: {
          V = m, X = w;
          var ca = Qt.completedSegments;
          for (ae = 0; ae < ca.length; ae++) if (!Wa(V, X, Qt, ca[ae])) {
            ae++, ca.splice(0, ae);
            var Li = false;
            break e;
          }
          ca.splice(0, ae), Li = true;
        }
        if (!Li) {
          m.destination = null, z++, Wt.splice(0, z);
          return;
        }
      }
      Wt.splice(0, z);
      var hn = m.completedBoundaries;
      for (z = 0; z < hn.length; z++) Ms(m, w, hn[z]);
      hn.splice(0, z);
    } finally {
      c(w), m.allPendingTasks === 0 && m.pingedTasks.length === 0 && m.clientRenderedBoundaries.length === 0 && m.completedBoundaries.length === 0 && w.close();
    }
  }
  __name(Oi, "Oi");
  function Fs(m, w) {
    try {
      var _ = m.abortableTasks;
      _.forEach(function(T) {
        return Ns(T, m, w);
      }), _.clear(), m.destination !== null && Oi(m, m.destination);
    } catch (T) {
      Wn(m, T), pn(m, T);
    }
  }
  __name(Fs, "Fs");
  return Nl.renderToReadableStream = function(m, w) {
    return new Promise(function(_, T) {
      var V, z, X = new Promise(function(Pe, Ye) {
        z = Pe, V = Ye;
      }), ae = la(m, ne(w ? w.identifierPrefix : void 0, w ? w.nonce : void 0, w ? w.bootstrapScriptContent : void 0, w ? w.bootstrapScripts : void 0, w ? w.bootstrapModules : void 0), oe(w ? w.namespaceURI : void 0), w ? w.progressiveChunkSize : void 0, w ? w.onError : void 0, z, function() {
        var Pe = new ReadableStream({ type: "bytes", pull: /* @__PURE__ */ __name(function(Ye) {
          if (ae.status === 1) ae.status = 2, C(Ye, ae.fatalError);
          else if (ae.status !== 2 && ae.destination === null) {
            ae.destination = Ye;
            try {
              Oi(ae, Ye);
            } catch (jt) {
              Wn(ae, jt), pn(ae, jt);
            }
          }
        }, "pull"), cancel: /* @__PURE__ */ __name(function() {
          Fs(ae);
        }, "cancel") }, { highWaterMark: 0 });
        Pe.allReady = X, _(Pe);
      }, function(Pe) {
        X.catch(function() {
        }), T(Pe);
      }, V);
      if (w && w.signal) {
        var Se = w.signal, Le = /* @__PURE__ */ __name(function() {
          Fs(ae, Se.reason), Se.removeEventListener("abort", Le);
        }, "Le");
        Se.addEventListener("abort", Le);
      }
      Ai(ae);
    });
  }, Nl.version = "18.3.1", Nl;
}
__name(mS, "mS");
var Qh;
function gS() {
  if (Qh) return Oo;
  Qh = 1;
  var t, n;
  return t = hS(), n = mS(), Oo.version = t.version, Oo.renderToString = t.renderToString, Oo.renderToStaticMarkup = t.renderToStaticMarkup, Oo.renderToNodeStream = t.renderToNodeStream, Oo.renderToStaticNodeStream = t.renderToStaticNodeStream, Oo.renderToReadableStream = n.renderToReadableStream, Oo;
}
__name(gS, "gS");
var yS = gS();
function so(t) {
  if (!t) {
    const n = `flattenConnection(): needs a 'connection' to flatten, but received '${t ?? ""}' instead.`;
    return console.error(n + " Returning an empty array"), [];
  }
  return "nodes" in t ? t.nodes : "edges" in t && Array.isArray(t.edges) ? t.edges.map((n) => {
    if (!(n != null && n.node)) throw new Error("flattenConnection(): Connection edges must contain nodes");
    return n.node;
  }) : [];
}
__name(so, "so");
var Vl = "2025-01";
var vS = "mock.shop";
var rd = /* @__PURE__ */ __name((t) => t.includes(vS), "rd");
function wS({ storeDomain: t, privateStorefrontToken: n, publicStorefrontToken: o, storefrontApiVersion: i = Vl, contentType: s }) {
  if (!t) throw new Error(nd + "`storeDomain` is required when creating a new Storefront client in production.");
  i !== Vl && SS(`The Storefront API version that you're using is different than the version this build of Hydrogen React is targeting.
You may run into unexpected errors if these versions don't match. Received version: "${i}"; expected version "${Vl}"`);
  const u = /* @__PURE__ */ __name((c) => {
    const f = (c == null ? void 0 : c.storeDomain) ?? t;
    return f.includes("://") ? f : `https://${f}`;
  }, "u");
  return { getShopifyDomain: u, getStorefrontApiUrl(c) {
    const f = u(c), h = f + (f.endsWith("/") ? "api" : "/api");
    return rd(f) ? h : `${h}/${(c == null ? void 0 : c.storefrontApiVersion) ?? i}/graphql.json`;
  }, getPrivateTokenHeaders(c) {
    if (!n && !(c != null && c.privateStorefrontToken) && !rd(t)) throw new Error(nd + "You did not pass in a `privateStorefrontToken` while using `createStorefrontClient()` or `getPrivateTokenHeaders()`");
    return { "content-type": ((c == null ? void 0 : c.contentType) ?? s) === "graphql" ? "application/graphql" : "application/json", "X-SDK-Variant": "hydrogen-react", "X-SDK-Variant-Source": "react", "X-SDK-Version": i, "Shopify-Storefront-Private-Token": (c == null ? void 0 : c.privateStorefrontToken) ?? n ?? "", ...c != null && c.buyerIp ? { "Shopify-Storefront-Buyer-IP": c.buyerIp } : {} };
  }, getPublicTokenHeaders(c) {
    if (!o && !(c != null && c.publicStorefrontToken) && !rd(t)) throw new Error(nd + "You did not pass in a `publicStorefrontToken` while using `createStorefrontClient()` or `getPublicTokenHeaders()`");
    const f = (c == null ? void 0 : c.contentType) ?? s ?? "json";
    return xS(f, i, (c == null ? void 0 : c.publicStorefrontToken) ?? o ?? "");
  } };
}
__name(wS, "wS");
function xS(t, n, o) {
  return { "content-type": t === "graphql" ? "application/graphql" : "application/json", "X-SDK-Variant": "hydrogen-react", "X-SDK-Variant-Source": "react", "X-SDK-Version": n, "X-Shopify-Storefront-Access-Token": o };
}
__name(xS, "xS");
var Gh = /* @__PURE__ */ new Set();
var nd = "[h2:error:createStorefrontClient] ";
var SS = /* @__PURE__ */ __name((t, n = "warn") => {
  Gh.has(t) || (console[n](`[h2:${n}:createStorefrontClient] ` + t), Gh.add(t));
}, "SS");
var CS = { storeDomain: "test", storefrontToken: "abc123", storefrontApiVersion: Vl, countryIsoCode: "US", languageIsoCode: "EN", getStorefrontApiUrl() {
  return "";
}, getPublicTokenHeaders() {
  return {};
}, getShopifyDomain() {
  return "";
} };
var ES = $.createContext(CS);
function _S() {
  const t = $.useContext(ES);
  if (!t) throw new Error("'useShop()' must be a descendent of <ShopifyProvider/>");
  return t;
}
__name(_S, "_S");
var kS = "Shopify-Storefront-Id";
var PS = "Shopify-Storefront-Y";
var jS = "Shopify-Storefront-S";
var No = "_shopify_y";
var bo = "_shopify_s";
var RS = /* @__PURE__ */ new Set(["domain", "path", "max-age", "expires", "samesite", "secure", "httponly"]);
function Rg(t) {
  let n = {}, o, i, s = 0, u = t.split(/;\s*/g), c, f;
  for (; s < u.length; s++) if (i = u[s], o = i.indexOf("="), ~o) {
    if (c = i.substring(0, o++).trim(), f = i.substring(o).trim(), f[0] === '"' && (f = f.substring(1, f.length - 1)), ~f.indexOf("%")) try {
      f = decodeURIComponent(f);
    } catch {
    }
    RS.has(i = c.toLowerCase()) ? i === "expires" ? n.expires = new Date(f) : i === "max-age" ? n.maxage = +f : n[i] = f : n[c] = f;
  } else (c = i.trim().toLowerCase()) && (c === "httponly" || c === "secure") && (n[c] = true);
  return n;
}
__name(Rg, "Rg");
function $g(t, n, o = {}) {
  let i = t + "=" + encodeURIComponent(n);
  return o.expires && (i += "; Expires=" + new Date(o.expires).toUTCString()), o.maxage != null && o.maxage >= 0 && (i += "; Max-Age=" + (o.maxage | 0)), o.domain && (i += "; Domain=" + o.domain), o.path && (i += "; Path=" + o.path), o.samesite && (i += "; SameSite=" + o.samesite), (o.secure || o.samesite === "None") && (i += "; Secure"), o.httponly && (i += "; HttpOnly"), i;
}
__name($g, "$g");
var Yh = "xxxx-4xxx-xxxx-xxxxxxxxxxxx";
function ou() {
  let t = "";
  try {
    const n = window.crypto, o = new Uint16Array(31);
    n.getRandomValues(o);
    let i = 0;
    t = Yh.replace(/[x]/g, (s) => {
      const u = o[i] % 16, c = s === "x" ? u : u & 3 | 8;
      return i++, c.toString(16);
    }).toUpperCase();
  } catch {
    t = Yh.replace(/[x]/g, (o) => {
      const i = Math.random() * 16 | 0;
      return (o === "x" ? i : i & 3 | 8).toString(16);
    }).toUpperCase();
  }
  return `${$S()}-${t}`;
}
__name(ou, "ou");
function $S() {
  let t = 0, n = 0;
  t = (/* @__PURE__ */ new Date()).getTime() >>> 0;
  try {
    n = performance.now() >>> 0;
  } catch {
    n = 0;
  }
  return Math.abs(t + n).toString(16).toLowerCase().padStart(8, "0");
}
__name($S, "$S");
function Bd(t) {
  const n = Rg(t);
  return { [No]: n[No] || "", [bo]: n[bo] || "" };
}
__name(Bd, "Bd");
var Gr = { PAGE_VIEW: "PAGE_VIEW", ADD_TO_CART: "ADD_TO_CART", PAGE_VIEW_2: "PAGE_VIEW_2", COLLECTION_VIEW: "COLLECTION_VIEW", PRODUCT_VIEW: "PRODUCT_VIEW", SEARCH_VIEW: "SEARCH_VIEW" };
var yi = { collection: "collection", product: "product", search: "search" };
var IS = { headless: "headless" };
var Jh = { hydrogen: "6167201", headless: "12875497473" };
function Sn(t, n) {
  return { schema_id: t, payload: n, metadata: { event_created_at_ms: Date.now() } };
}
__name(Sn, "Sn");
function mr(t) {
  const n = { id: "", resource: null, resourceId: null, search: "", searchParams: new URLSearchParams(), hash: "" };
  if (typeof t != "string") return n;
  try {
    const { search: o, searchParams: i, pathname: s, hash: u } = new URL(t), c = s.split("/"), f = c[c.length - 1], h = c[c.length - 2];
    return !f || !h ? n : { id: `${f}${o}${u}` || "", resource: h ?? null, resourceId: f || null, search: o, searchParams: i, hash: u };
  } catch {
    return n;
  }
}
__name(mr, "mr");
function Yr(t, n) {
  return typeof t != "object" ? {} : (Object.entries(t).forEach(([o, i]) => {
    i && (n[o] = i);
  }), n);
}
__name(Yr, "Yr");
function TS(t) {
  return typeof document > "u" ? (console.error(`${t} should only be used within the useEffect callback or event handlers`), true) : false;
}
__name(TS, "TS");
var AS = "trekkie_storefront_page_view/1.4";
var OS = "myshopify.dev";
function Kh(t) {
  const n = t, { id: o, resource: i } = mr(n.resourceId), s = i ? i.toLowerCase() : void 0;
  return [Sn(AS, Yr({ pageType: n.pageType, customerId: parseInt(mr(n.customerId).id || "0"), resourceType: s, resourceId: parseInt(o) }, LS(n)))];
}
__name(Kh, "Kh");
function LS(t) {
  return { appClientId: t.shopifySalesChannel ? Jh[t.shopifySalesChannel] : Jh.headless, isMerchantRequest: DS(t.url), hydrogenSubchannelId: t.storefrontId || t.hydrogenSubchannelId || "0", isPersistentCookie: t.hasUserConsent, uniqToken: t.uniqueToken, visitToken: t.visitToken, microSessionId: ou(), microSessionCount: 1, url: t.url, path: t.path, search: t.search, referrer: t.referrer, title: t.title, shopId: parseInt(mr(t.shopId).id), currency: t.currency, contentLanguage: t.acceptedLanguage || "en" };
}
__name(LS, "LS");
function DS(t) {
  if (typeof t != "string") return false;
  const n = new URL(t).hostname;
  return n.indexOf(OS) !== -1 || n === "localhost";
}
__name(DS, "DS");
var NS = "2025.1.3";
var no = "custom_storefront_customer_tracking/1.2";
var Ig = "page_rendered";
var Tg = "collection_page_rendered";
var Ag = "product_page_rendered";
var bS = "product_added_to_cart";
var Og = "search_submitted";
function Rs(t) {
  return { canonical_url: t.canonicalUrl || t.url, customer_id: parseInt(mr(t.customerId).id || "0") };
}
__name(Rs, "Rs");
function US(t) {
  const n = t, o = Rs(n), i = n.pageType, s = [];
  switch (s.push(Sn(no, Yr({ event_name: Ig, ...o }, oo(n)))), i) {
    case yi.collection:
      s.push(Sn(no, Yr({ event_name: Tg, ...o, collection_name: n.collectionHandle, collection_id: parseInt(mr(n.collectionId).id) }, oo(n))));
      break;
    case yi.product:
      s.push(Sn(no, Yr({ event_name: Ag, ...o, products: Vd(n.products), total_value: n.totalValue }, oo(n))));
      break;
    case yi.search:
      s.push(Sn(no, Yr({ event_name: Og, ...o, search_string: n.searchString }, oo(n))));
      break;
  }
  return s;
}
__name(US, "US");
function MS(t) {
  const n = t, o = Rs(n);
  return [Sn(no, Yr({ event_name: Ig, ...o }, oo(n)))];
}
__name(MS, "MS");
function FS(t) {
  const n = t, o = Rs(n);
  return [Sn(no, Yr({ event_name: Tg, ...o, collection_name: n.collectionHandle, collection_id: parseInt(mr(n.collectionId).id) }, oo(n)))];
}
__name(FS, "FS");
function zS(t) {
  const n = t, o = Rs(n);
  return [Sn(no, Yr({ event_name: Ag, ...o, products: Vd(n.products), total_value: n.totalValue }, oo(n)))];
}
__name(zS, "zS");
function HS(t) {
  const n = t, o = Rs(n);
  return [Sn(no, Yr({ event_name: Og, ...o, search_string: n.searchString }, oo(n)))];
}
__name(HS, "HS");
function BS(t) {
  const n = t, o = mr(n.cartId);
  return [Sn(no, Yr({ event_name: bS, customerId: n.customerId, cart_token: o != null && o.id ? `${o.id}` : null, total_value: n.totalValue, products: Vd(n.products), customer_id: parseInt(mr(n.customerId).id || "0") }, oo(n)))];
}
__name(BS, "BS");
function oo(t) {
  return { source: t.shopifySalesChannel || IS.headless, asset_version_id: t.assetVersionId || NS, hydrogenSubchannelId: t.storefrontId || t.hydrogenSubchannelId || "0", is_persistent_cookie: t.hasUserConsent, deprecated_visit_token: t.visitToken, unique_token: t.uniqueToken, event_time: Date.now(), event_id: ou(), event_source_url: t.url, referrer: t.referrer, user_agent: t.userAgent, navigation_type: t.navigationType, navigation_api: t.navigationApi, shop_id: parseInt(mr(t.shopId).id), currency: t.currency, ccpa_enforced: t.ccpaEnforced || false, gdpr_enforced: t.gdprEnforced || false, gdpr_enforced_as_string: t.gdprEnforced ? "true" : "false", analytics_allowed: t.analyticsAllowed || false, marketing_allowed: t.marketingAllowed || false, sale_of_data_allowed: t.saleOfDataAllowed || false };
}
__name(oo, "oo");
function Vd(t) {
  return t ? t.map((n) => {
    const o = Yr({ variant_gid: n.variantGid, category: n.category, sku: n.sku, product_id: parseInt(mr(n.productGid).id), variant_id: parseInt(mr(n.variantGid).id) }, { product_gid: n.productGid, name: n.name, variant: n.variantName || "", brand: n.brand, price: parseFloat(n.price), quantity: Number(n.quantity || 0) });
    return JSON.stringify(o);
  }) : [];
}
__name(Vd, "Vd");
function $s(t, n) {
  const { eventName: o, payload: i } = t;
  if (!i.hasUserConsent) return Promise.resolve();
  let s = [];
  const u = i;
  return o === Gr.PAGE_VIEW ? s = s.concat(Kh(u), US(u)) : o === Gr.ADD_TO_CART ? s = s.concat(BS(i)) : o === Gr.PAGE_VIEW_2 ? s = s.concat(Kh(u), MS(u)) : o === Gr.COLLECTION_VIEW ? s = s.concat(FS(u)) : o === Gr.PRODUCT_VIEW ? s = s.concat(zS(u)) : o === Gr.SEARCH_VIEW && (s = s.concat(HS(u))), s.length ? qS(s, n) : Promise.resolve();
}
__name($s, "$s");
function VS() {
  return typeof window > "u" || !window.navigator ? false : /Chrome-Lighthouse/.test(window.navigator.userAgent);
}
__name(VS, "VS");
var Xh = "sendShopifyAnalytics request is unsuccessful";
function qS(t, n) {
  if (VS()) return Promise.resolve();
  const o = { events: t, metadata: { event_sent_at_ms: Date.now() } };
  try {
    return fetch(n ? `https://${n}/.well-known/shopify/monorail/unstable/produce_batch` : "https://monorail-edge.shopifysvc.com/unstable/produce_batch", { method: "post", headers: { "content-type": "text/plain" }, body: JSON.stringify(o) }).then((i) => {
      if (!i.ok) throw new Error("Response failed");
      return i.text();
    }).then((i) => {
      i && JSON.parse(i).result.forEach((u) => {
        u.status !== 200 && console.error(Xh, `

`, u.message);
      });
    }).catch((i) => {
      console.error(Xh, i);
    });
  } catch {
    return Promise.resolve();
  }
}
__name(qS, "qS");
function WS() {
  if (TS("getClientBrowserParameters")) return { uniqueToken: "", visitToken: "", url: "", path: "", search: "", referrer: "", title: "", userAgent: "", navigationType: "", navigationApi: "" };
  const [t, n] = YS(), o = Bd(document.cookie);
  return { uniqueToken: o[No], visitToken: o[bo], url: location.href, path: location.pathname, search: location.search, referrer: document.referrer, title: document.title, userAgent: "Cloudflare-Workers", navigationType: t, navigationApi: n };
}
__name(WS, "WS");
function QS() {
  try {
    const t = (performance == null ? void 0 : performance.getEntriesByType) && (performance == null ? void 0 : performance.getEntriesByType("navigation"));
    if (t && t[0]) {
      const n = window.performance.getEntriesByType("navigation")[0].type;
      return n && n.toString();
    }
  } catch {
  }
}
__name(QS, "QS");
function GS() {
  var t, n;
  try {
    if (PerformanceNavigation && ((t = performance == null ? void 0 : performance.navigation) == null ? void 0 : t.type) !== null && ((n = performance == null ? void 0 : performance.navigation) == null ? void 0 : n.type) !== void 0) {
      const o = performance.navigation.type;
      switch (o) {
        case PerformanceNavigation.TYPE_NAVIGATE:
          return "navigate";
        case PerformanceNavigation.TYPE_RELOAD:
          return "reload";
        case PerformanceNavigation.TYPE_BACK_FORWARD:
          return "back_forward";
        default:
          return `unknown: ${o}`;
      }
    }
  } catch {
  }
}
__name(GS, "GS");
function YS() {
  try {
    let t = "PerformanceNavigationTiming", n = QS();
    return n || (n = GS(), t = "performance.navigation"), n ? [n, t] : ["unknown", "unknown"];
  } catch {
  }
  return ["error", "error"];
}
__name(YS, "YS");
function JS(t) {
  const { countryIsoCode: n, languageIsoCode: o } = _S(), i = o.includes("_") ? o.replace("_", "-") : `${o}-${n}`;
  if (!i) throw new Error("useMoney(): Unable to get 'locale' from 'useShop()', which means that 'locale' was not passed to '<ShopifyProvider/>'. 'locale' is required for 'useMoney()' to work");
  const s = parseFloat(t.amount), { defaultFormatter: u, nameFormatter: c, narrowSymbolFormatter: f, withoutTrailingZerosFormatter: h, withoutCurrencyFormatter: v, withoutTrailingZerosOrCurrencyFormatter: C } = $.useMemo(() => {
    const R = { style: "currency", currency: t.currencyCode };
    return { defaultFormatter: pi(i, R), nameFormatter: pi(i, { ...R, currencyDisplay: "name" }), narrowSymbolFormatter: pi(i, { ...R, currencyDisplay: "narrowSymbol" }), withoutTrailingZerosFormatter: pi(i, { ...R, minimumFractionDigits: 0, maximumFractionDigits: 0 }), withoutCurrencyFormatter: pi(i), withoutTrailingZerosOrCurrencyFormatter: pi(i, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) };
  }, [t.currencyCode, i]), S = /* @__PURE__ */ __name((R) => R.type === "currency", "S"), j = $.useMemo(() => ({ original: /* @__PURE__ */ __name(() => t, "original"), currencyCode: /* @__PURE__ */ __name(() => t.currencyCode, "currencyCode"), localizedString: /* @__PURE__ */ __name(() => u().format(s), "localizedString"), parts: /* @__PURE__ */ __name(() => u().formatToParts(s), "parts"), withoutTrailingZeros: /* @__PURE__ */ __name(() => s % 1 === 0 ? h().format(s) : u().format(s), "withoutTrailingZeros"), withoutTrailingZerosAndCurrency: /* @__PURE__ */ __name(() => s % 1 === 0 ? C().format(s) : v().format(s), "withoutTrailingZerosAndCurrency"), currencyName: /* @__PURE__ */ __name(() => {
    var R;
    return ((R = c().formatToParts(s).find(S)) == null ? void 0 : R.value) ?? t.currencyCode;
  }, "currencyName"), currencySymbol: /* @__PURE__ */ __name(() => {
    var R;
    return ((R = u().formatToParts(s).find(S)) == null ? void 0 : R.value) ?? t.currencyCode;
  }, "currencySymbol"), currencyNarrowSymbol: /* @__PURE__ */ __name(() => {
    var R;
    return ((R = f().formatToParts(s).find(S)) == null ? void 0 : R.value) ?? "";
  }, "currencyNarrowSymbol"), amount: /* @__PURE__ */ __name(() => u().formatToParts(s).filter((R) => ["decimal", "fraction", "group", "integer", "literal"].includes(R.type)).map((R) => R.value).join(""), "amount") }), [t, s, c, u, f, v, h, C]);
  return $.useMemo(() => new Proxy(j, { get: /* @__PURE__ */ __name((R, P) => {
    var I;
    return (I = Reflect.get(R, P)) == null ? void 0 : I.call(null);
  }, "get") }), [j]);
}
__name(JS, "JS");
var Zh = /* @__PURE__ */ new Map();
function pi(t, n) {
  const o = JSON.stringify([t, n]);
  return function() {
    let i = Zh.get(o);
    return i || (i = new Intl.NumberFormat(t, n), Zh.set(o, i)), i;
  };
}
__name(pi, "pi");
function At({ data: t, as: n, withoutCurrency: o, withoutTrailingZeros: i, measurement: s, measurementSeparator: u = "/", ...c }) {
  if (!KS(t)) throw new Error("<Money/> needs a valid 'data' prop that has 'amount' and 'currencyCode'");
  const f = JS(t), h = n ?? "div";
  let v = f.localizedString;
  return (o || i) && (o && !i ? v = f.amount : !o && i ? v = f.withoutTrailingZeros : v = f.withoutTrailingZerosAndCurrency), y.jsxs(h, { ...c, children: [v, s && s.referenceUnit && y.jsxs(y.Fragment, { children: [u, s.referenceUnit] })] });
}
__name(At, "At");
function KS(t) {
  return typeof t.amount == "string" && !!t.amount && typeof t.currencyCode == "string" && !!t.currencyCode;
}
__name(KS, "KS");
var od = ",";
var hi = { OPTION: ":", END_OF_PREFIX: ",", SEQUENCE_GAP: " ", RANGE: "-" };
var em = /* @__PURE__ */ (() => {
  const t = /* @__PURE__ */ new Map();
  return function(n, o) {
    var i;
    if (n.length === 0) return false;
    if (!t.has(o)) {
      const s = /* @__PURE__ */ new Set();
      for (const u of XS(o)) {
        s.add(u.join(od));
        for (let c = 0; c < u.length; c++) s.add(u.slice(0, c + 1).join(od));
      }
      t.set(o, s);
    }
    return !!((i = t.get(o)) != null && i.has(n.join(od)));
  };
})();
function XS(t) {
  if (!t) return [];
  if (t.startsWith("v1_")) return eC(ZS(t));
  throw new Error("Unsupported option value encoding");
}
__name(XS, "XS");
var ZS = /* @__PURE__ */ __name((t) => t.replace(/^v1_/, ""), "ZS");
function eC(t) {
  const n = /[ :,-]/g;
  let o = 0, i;
  const s = [], u = [];
  let c = 0, f = null;
  for (; i = n.exec(t); ) {
    const v = i[0], C = Number.parseInt(t.slice(o, i.index)) || 0;
    if (f !== null) {
      for (; f < C; f++) u[c] = f, s.push([...u]);
      f = null;
    }
    u[c] = C, v === hi.RANGE ? f = C : v === hi.OPTION ? c++ : ((v === hi.SEQUENCE_GAP || v === hi.END_OF_PREFIX && t[i.index - 1] !== hi.END_OF_PREFIX) && s.push([...u]), v === hi.END_OF_PREFIX && (u.pop(), c--)), o = n.lastIndex;
  }
  const h = t.match(/\d+$/g);
  if (h) {
    const v = parseInt(h[0]);
    if (f != null) for (; f <= v; f++) u[c] = f, s.push([...u]);
    else s.push([v]);
  }
  return s;
}
__name(eC, "eC");
function tC(t) {
  return Object.assign({}, ...t.map((n) => ({ [n.name]: Object.assign({}, ...n != null && n.optionValues ? n.optionValues.map((o, i) => ({ [o.name]: i })) : []) })));
}
__name(tC, "tC");
function au(t) {
  return Object.assign({}, ...t.map((n) => ({ [n.name]: n.value })));
}
__name(au, "au");
function ad(t) {
  return JSON.stringify(au(t));
}
__name(ad, "ad");
function Lg(t) {
  return Array.isArray(t) ? JSON.stringify(Object.assign({}, ...t.map((n) => ({ [n.name]: n.value })))) : JSON.stringify(t);
}
__name(Lg, "Lg");
function rC(t, n) {
  return Object.keys(t).map((i) => n[i] ? n[i][t[i]] : null).filter((i) => i !== null);
}
__name(rC, "rC");
function nC(t) {
  return Object.assign({}, ...t.map((n) => ({ [Lg(n.selectedOptions || [])]: n })));
}
__name(nC, "nC");
var tm = ["options", "selectedOrFirstAvailableVariant", "adjacentVariants"];
var oC = ["handle", "encodedVariantExistence", "encodedVariantAvailability"];
function Do(t) {
  return console.error(`[h2:error:getProductOptions] product.${t} is missing. Make sure you query for this field from the Storefront API.`), false;
}
__name(Do, "Do");
function Dg(t, n = false) {
  var o;
  let i = true;
  const s = Object.keys(t);
  if ((n ? [...tm, ...oC] : tm).forEach((u) => {
    s.includes(u) || (i = Do(u));
  }), t.options) {
    const u = t == null ? void 0 : t.options[0];
    if (n && !(u != null && u.name) && (i = Do("options.name")), (o = t == null ? void 0 : t.options[0]) != null && o.optionValues) {
      let c = t.options[0].optionValues[0];
      n && !(c != null && c.name) && (i = Do("options.optionValues.name")), c = t.options[0].optionValues.filter((f) => !!(f != null && f.firstSelectableVariant))[0], c != null && c.firstSelectableVariant && (i = id(c.firstSelectableVariant, "options.optionValues.firstSelectableVariant", i, n));
    } else i = Do("options.optionValues");
  }
  return t.selectedOrFirstAvailableVariant && (i = id(t.selectedOrFirstAvailableVariant, "selectedOrFirstAvailableVariant", i, n)), t.adjacentVariants && t.adjacentVariants[0] && (i = id(t.adjacentVariants[0], "adjacentVariants", i, n)), i ? t : {};
}
__name(Dg, "Dg");
function id(t, n, o, i) {
  var s;
  let u = o;
  if (i && !((s = t.product) != null && s.handle) && (u = Do(`${n}.product.handle`)), t.selectedOptions) {
    const c = t.selectedOptions[0];
    c != null && c.name || (u = Do(`${n}.selectedOptions.name`)), c != null && c.value || (u = Do(`${n}.selectedOptions.value`));
  } else u = Do(`${n}.selectedOptions`);
  return u;
}
__name(id, "id");
function aC(t) {
  const n = Dg(t);
  if (!n.options) return [];
  const o = {};
  n.options.map((s) => {
    var u;
    (u = s.optionValues) == null || u.map((c) => {
      if (c.firstSelectableVariant) {
        const f = ad(c.firstSelectableVariant.selectedOptions);
        o[f] = c.firstSelectableVariant;
      }
    });
  }), n.adjacentVariants.map((s) => {
    const u = ad(s.selectedOptions);
    o[u] = s;
  });
  const i = n.selectedOrFirstAvailableVariant;
  if (i) {
    const s = ad(i.selectedOptions);
    o[s] = i;
  }
  return Object.values(o);
}
__name(aC, "aC");
function iC(t) {
  const n = Dg(t, true);
  if (!n.options) return [];
  const { options: o, selectedOrFirstAvailableVariant: i, adjacentVariants: s, encodedVariantExistence: u, encodedVariantAvailability: c, handle: f } = n, h = i == null ? void 0 : i.selectedOptions.map((P) => P.name), v = o.filter((P) => h && h.indexOf(P.name) >= 0), C = tC(o), S = nC(i ? [i, ...s] : s), j = au(i ? i.selectedOptions : []);
  return v.map((P, I) => ({ ...P, optionValues: P.optionValues.map((L) => {
    var U;
    const q = { ...j };
    q[P.name] = L.name;
    const Y = Lg(q || []), ye = rC(q || [], C).slice(0, I + 1), Q = em(ye, u || ""), J = em(ye, c || ""), ce = S[Y] || L.firstSelectableVariant;
    let ve = {};
    ce && (ve = au(ce.selectedOptions || []));
    const $e = new URLSearchParams(ve), Ie = ((U = ce == null ? void 0 : ce.product) == null ? void 0 : U.handle) || f;
    return { ...L, variant: ce, handle: Ie, variantUriQuery: $e.toString(), selected: j[P.name] === L.name, exists: Q, available: J, isDifferentProduct: Ie !== f };
  }) }));
}
__name(iC, "iC");
var rr = $.forwardRef(({ alt: t, aspectRatio: n, crop: o = "center", data: i, decoding: s = "async", height: u = "auto", loader: c = wu, loading: f = "lazy", sizes: h, src: v, srcSetOptions: C = { intervals: 15, startingWidth: 200, incrementSize: 200, placeholderWidth: 100 }, width: S = "100%", ...j }, R) => {
  const P = $.useMemo(() => {
    const Q = i != null && i.width && (i != null && i.height) ? i == null ? void 0 : i.width : void 0, J = i != null && i.width && (i != null && i.height) ? i == null ? void 0 : i.height : void 0;
    return { width: Q, height: J, unitsMatch: !!Ng(Q, J) };
  }, [i]), I = $.useMemo(() => {
    const J = ys((S || "100%").toString()), ce = `${J.number}${J.unit}`, ve = u == null, $e = ve ? null : ys(u.toString()), Ie = $e ? `${$e.number}${$e.unit}` : "", Ae = ve ? "auto" : Ie, fe = v || (i == null ? void 0 : i.url), _e = i != null && i.altText && !t ? i == null ? void 0 : i.altText : t || "", Re = n || (P.unitsMatch ? [vs(P.width), vs(P.height)].join("/") : void 0);
    return { width: ce, height: Ae, src: fe, alt: _e, aspectRatio: Re };
  }, [S, u, v, i, t, n, P, j == null ? void 0 : j.key]), { intervals: L, startingWidth: U, incrementSize: q, placeholderWidth: Y } = C, G = $.useMemo(() => uC(S, L, U, q), [S, L, U, q]);
  return bg(I.width) ? y.jsx(sC, { aspectRatio: n, crop: o, decoding: s, height: u, imageWidths: G, loader: c, loading: f, normalizedProps: I, passthroughProps: j, ref: R, width: S, data: i }) : y.jsx(lC, { aspectRatio: n, crop: o, decoding: s, imageWidths: G, loader: c, loading: f, normalizedProps: I, passthroughProps: j, placeholderWidth: Y, ref: R, sizes: h, data: i });
});
var sC = $.forwardRef(({ aspectRatio: t, crop: n, decoding: o, height: i, imageWidths: s, loader: u = wu, loading: c, normalizedProps: f, passthroughProps: h, width: v, data: C }, S) => {
  const j = $.useMemo(() => {
    const R = vs(v), P = vs(i), I = t || (Ng(f.width, f.height) ? [R, P].join("/") : f.aspectRatio ? f.aspectRatio : void 0), L = s === void 0 ? void 0 : Mg(s, I, n, { width: (C == null ? void 0 : C.width) ?? void 0, height: (C == null ? void 0 : C.height) ?? void 0 }), U = P || (I && R ? R * (qd(I) ?? 1) : void 0), q = Ug(f.src, L, u), Y = u({ src: f.src, width: R, height: U, crop: f.height === "auto" ? void 0 : n });
    return { width: R, aspectRatio: I, height: U, srcSet: q, src: Y };
  }, [t, n, C, i, s, u, f, v]);
  return y.jsx("img", { ref: S, alt: f.alt, decoding: o, height: j.height, loading: c, src: j.src, srcSet: j.srcSet, width: j.width, style: { aspectRatio: j.aspectRatio, ...h.style }, ...h });
});
var lC = $.forwardRef(({ crop: t, decoding: n, imageWidths: o, loader: i = wu, loading: s, normalizedProps: u, passthroughProps: c, placeholderWidth: f, sizes: h, data: v }, C) => {
  const S = $.useMemo(() => {
    const j = o === void 0 ? void 0 : Mg(o, u.aspectRatio, t, { width: (v == null ? void 0 : v.width) ?? void 0, height: (v == null ? void 0 : v.height) ?? void 0 }), R = u.aspectRatio && f ? f * (qd(u.aspectRatio) ?? 1) : void 0, P = Ug(u.src, j, i), I = i({ src: u.src, width: f, height: R, crop: t });
    return { placeholderHeight: R, srcSet: P, src: I };
  }, [t, v, o, i, u, f]);
  return y.jsx("img", { ref: C, alt: u.alt, decoding: n, height: S.placeholderHeight, loading: s, sizes: h, src: S.src, srcSet: S.srcSet, width: f, ...c, style: { width: u.width, aspectRatio: u.aspectRatio, ...c.style } });
});
var rm = "https://placeholder.shopify.com";
function wu({ src: t, width: n, height: o, crop: i }) {
  if (!t) return "";
  const s = new URL(t, rm);
  return n && s.searchParams.append("width", Math.round(n).toString()), o && s.searchParams.append("height", Math.round(o).toString()), i && s.searchParams.append("crop", i), s.href.replace(rm, "");
}
__name(wu, "wu");
function Ng(t = "100%", n = "auto") {
  return ys(t.toString()).unit === ys(n.toString()).unit;
}
__name(Ng, "Ng");
function ys(t) {
  const n = t.replace(/[0-9.]/g, ""), o = parseFloat(t.replace(n, ""));
  return { unit: n === "" ? o === void 0 ? "auto" : "px" : n, number: o };
}
__name(ys, "ys");
function vs(t) {
  if (t === void 0) return;
  const { unit: n, number: o } = ys(t.toString());
  switch (n) {
    case "em":
      return o * 16;
    case "rem":
      return o * 16;
    case "px":
      return o;
    case "":
      return o;
    default:
      return;
  }
}
__name(vs, "vs");
function bg(t) {
  return typeof t == "number" || /\d(px|em|rem)$/.test(t);
}
__name(bg, "bg");
function Ug(t, n, o = wu) {
  return t ? (n == null ? void 0 : n.length) === 0 || !n ? t : n.map((i, s) => `${o({ src: t, width: i.width, height: i.height, crop: i.crop })} ${n.length === 3 ? `${s + 1}x` : `${i.width ?? 0}w`}`).join(", ") : "";
}
__name(Ug, "Ug");
function uC(t = "100%", n, o, i) {
  const s = Array.from({ length: n }, (c, f) => f * i + o), u = Array.from({ length: 3 }, (c, f) => (f + 1) * (vs(t) ?? 0));
  return bg(t) ? u : s;
}
__name(uC, "uC");
function qd(t) {
  if (!t) return;
  const [n, o] = t.split("/");
  return 1 / (Number(n) / Number(o));
}
__name(qd, "qd");
function Mg(t, n, o = "center", i) {
  if (t) return t.map((s) => ({ width: s, height: n ? s * (qd(n) ?? 1) : void 0, crop: o })).filter(({ width: s, height: u }) => !(i != null && i.width && s > i.width || i != null && i.height && u && u > i.height));
}
__name(Mg, "Mg");
var nm = {};
function cC(t, n) {
  const o = nm[t];
  if (o) return o;
  const i = new Promise((s, u) => {
    const c = document.createElement("script");
    n != null && n.module ? c.type = "module" : c.type = "text/javascript", c.src = t, c.onload = () => {
      s(true);
    }, c.onerror = () => {
      u(false);
    }, (n == null ? void 0 : n.in) === "head" ? document.head.appendChild(c) : document.body.appendChild(c);
    const f = n == null ? void 0 : n.attributes;
    f && Object.keys(f).forEach((h) => {
      c.setAttribute(h, f[h]);
    });
  });
  return nm[t] = i, i;
}
__name(cC, "cC");
function Wd(t, n) {
  const [o, i] = $.useState("loading");
  return $.useEffect(() => {
    cC(t, n).then(() => i("done")).catch(() => i("error"));
  }, [t]), o;
}
__name(Wd, "Wd");
function dC(t) {
  return $.useEffect(() => {
    const n = new URLSearchParams(au(t || [])), o = new URLSearchParams(window.location.search), i = new URLSearchParams({ ...Object.fromEntries(o), ...Object.fromEntries(n) });
    i.size > 0 && window.history.replaceState({}, "", `${window.location.pathname}?${i.toString()}`);
  }, [JSON.stringify(t)]), null;
}
__name(dC, "dC");
var fC = 60 * 60 * 24 * 360 * 1;
var pC = 60 * 30;
function hC(t) {
  const { hasUserConsent: n = false, domain: o = "", checkoutDomain: i = "" } = t || {};
  $.useEffect(() => {
    const s = Bd(document.cookie);
    let u = o || window.document.location.host;
    if (i) {
      const f = i.split(".").reverse(), h = u.split(".").reverse(), v = [];
      f.forEach((C, S) => {
        C === h[S] && v.push(C);
      }), u = v.reverse().join(".");
    }
    /^localhost/.test(u) && (u = "");
    const c = u ? /^\./.test(u) ? u : `.${u}` : "";
    n ? (bl(No, s[No] || ou(), fC, c), bl(bo, s[bo] || ou(), pC, c)) : (bl(No, "", 0, c), bl(bo, "", 0, c));
  }, [t, n, o, i]);
}
__name(hC, "hC");
function bl(t, n, o, i) {
  document.cookie = $g(t, n, { maxage: o, domain: i, samesite: "Lax", path: "/" });
}
__name(bl, "bl");
var mC = /* @__PURE__ */ __name(({ directives: t }) => {
  const n = /* @__PURE__ */ new Set(), o = [];
  return Object.entries(t).forEach(([i, s]) => {
    const u = i.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    if (n.has(u)) throw new Error(`${i} is specified more than once`);
    n.add(u), Array.isArray(s) ? s = s.join(" ") : s === true && (s = ""), s ? o.push(`${u} ${s}`) : s !== false && o.push(u);
  }), o.join("; ");
}, "mC");
function xu(t) {
  let { type: n, data: o = {}, customData: i } = t, s = tr(), { publish: u, cart: c, prevCart: f, shop: h, customData: v } = Ts(), C = s.pathname + s.search, S = { ...o, customData: { ...v, ...i }, cart: c, prevCart: f, shop: h };
  return $.useEffect(() => {
    h != null && h.shopId && (S = { ...S, url: window.location.href }, u(n, S));
  }, [u, C, h == null ? void 0 : h.shopId]), null;
}
__name(xu, "xu");
function gC(t) {
  return y.jsx(xu, { ...t, type: "page_viewed" });
}
__name(gC, "gC");
function yC(t) {
  return y.jsx(xu, { ...t, type: "product_viewed" });
}
__name(yC, "yC");
function vC(t) {
  return y.jsx(xu, { ...t, type: "collection_viewed" });
}
__name(vC, "vC");
function wC(t) {
  return y.jsx(xu, { ...t, type: "search_viewed" });
}
__name(wC, "wC");
var xn = { PAGE_VIEWED: "page_viewed", PRODUCT_VIEWED: "product_viewed", COLLECTION_VIEWED: "collection_viewed", CART_VIEWED: "cart_viewed", SEARCH_VIEWED: "search_viewed", PRODUCT_ADD_TO_CART: "product_added_to_cart" };
var xC = "https://cdn.shopify.com/shopifycloud/consent-tracking-api/v0.1/consent-tracking-api.js";
var SC = "https://cdn.shopify.com/shopifycloud/privacy-banner/storefront-banner.js";
function sd(t) {
  console.error(`[h2:error:useCustomerPrivacy] Unable to setup Customer Privacy API: Missing consent.${t} configuration.`);
}
__name(sd, "sd");
function CC(t) {
  let { withPrivacyBanner: n = false, onVisitorConsentCollected: o, onReady: i, ...s } = t;
  Wd(n ? SC : xC, { attributes: { id: "customer-privacy-api" } });
  let { observing: u, setLoaded: c } = EC({ withPrivacyBanner: n, onLoaded: i }), f = $.useMemo(() => {
    let { checkoutDomain: v, storefrontAccessToken: C } = s;
    return v || sd("checkoutDomain"), C || sd("storefrontAccessToken"), (C.startsWith("shpat_") || C.length !== 32) && console.error("[h2:error:useCustomerPrivacy] It looks like you passed a private access token, make sure to use the public token"), { checkoutRootDomain: v, storefrontAccessToken: C, storefrontRootDomain: im(v), country: s.country, locale: s.locale };
  }, [s, im, sd]);
  $.useEffect(() => {
    let v = /* @__PURE__ */ __name((C) => {
      o && o(C.detail);
    }, "v");
    return document.addEventListener("visitorConsentCollected", v), () => {
      document.removeEventListener("visitorConsentCollected", v);
    };
  }, [o]), $.useEffect(() => {
    if (!n || u.current.privacyBanner) return;
    u.current.privacyBanner = true;
    let v = window.privacyBanner || void 0;
    Object.defineProperty(window, "privacyBanner", { configurable: true, get() {
      return v;
    }, set(C) {
      if (typeof C == "object" && C !== null && "showPreferences" in C && "loadBanner" in C) {
        let S = C;
        S.loadBanner(f), v = lm({ privacyBanner: S, config: f }), c.privacyBanner(), am();
      }
    } });
  }, [n, f, lm, c.privacyBanner]), $.useEffect(() => {
    if (u.current.customerPrivacy) return;
    u.current.customerPrivacy = true;
    let v = null, C = window.Shopify || void 0;
    Object.defineProperty(window, "Shopify", { configurable: true, get() {
      return C;
    }, set(S) {
      typeof S == "object" && S !== null && Object.keys(S).length === 0 && (C = S, Object.defineProperty(window.Shopify, "customerPrivacy", { configurable: true, get() {
        return v;
      }, set(j) {
        if (typeof j == "object" && j !== null && "setTrackingConsent" in j) {
          let R = j;
          v = { ...R, setTrackingConsent: sm({ customerPrivacy: R, config: f }) }, C = { ...C, customerPrivacy: v }, c.customerPrivacy(), am();
        }
      } }));
    } });
  }, [f, sm, c.customerPrivacy]);
  let h = { customerPrivacy: iu() };
  return n && (h.privacyBanner = wd()), h;
}
__name(CC, "CC");
var om = false;
function am() {
  if (om) return;
  om = true;
  let t = new CustomEvent("shopifyCustomerPrivacyApiLoaded");
  document.dispatchEvent(t);
}
__name(am, "am");
function EC({ withPrivacyBanner: t, onLoaded: n }) {
  let o = $.useRef({ customerPrivacy: false, privacyBanner: false }), [i, s] = $.useState(t ? [false, false] : [false]), u = i.every(Boolean), c = { customerPrivacy: /* @__PURE__ */ __name(() => {
    s(t ? (f) => [true, f[1]] : () => [true]);
  }, "customerPrivacy"), privacyBanner: /* @__PURE__ */ __name(() => {
    t && s((f) => [f[0], true]);
  }, "privacyBanner") };
  return $.useEffect(() => {
    u && n && n();
  }, [u, n]), { observing: o, setLoaded: c };
}
__name(EC, "EC");
function im(t) {
  if (typeof window > "u") return;
  let n = window.document.location.host, o = t.split(".").reverse(), i = n.split(".").reverse(), s = [];
  return o.forEach((u, c) => {
    u === i[c] && s.push(u);
  }), s.reverse().join(".");
}
__name(im, "im");
function sm({ customerPrivacy: t, config: n }) {
  let o = t.setTrackingConsent, { locale: i, country: s, ...u } = n;
  function c(f, h) {
    o({ ...u, headlessStorefront: true, ...f }, h);
  }
  __name(c, "c");
  return c;
}
__name(sm, "sm");
function lm({ privacyBanner: t, config: n }) {
  let o = t.loadBanner, i = t.showPreferences;
  function s(c) {
    if (typeof c == "object") {
      o({ ...n, ...c });
      return;
    }
    o(n);
  }
  __name(s, "s");
  function u(c) {
    if (typeof c == "object") {
      i({ ...n, ...c });
      return;
    }
    i(n);
  }
  __name(u, "u");
  return { loadBanner: s, showPreferences: u };
}
__name(lm, "lm");
function iu() {
  var t;
  try {
    return window.Shopify && window.Shopify.customerPrivacy ? (t = window.Shopify) == null ? void 0 : t.customerPrivacy : null;
  } catch {
    return null;
  }
}
__name(iu, "iu");
function wd() {
  try {
    return window && (window != null && window.privacyBanner) ? window.privacyBanner : null;
  } catch {
    return null;
  }
}
__name(wd, "wd");
var _C = "2025.1.3";
function kC() {
  let t = iu();
  if (!t) throw new Error("Shopify Customer Privacy API not available. Must be used within a useEffect. Make sure to load the Shopify Customer Privacy API with useCustomerPrivacy() or <AnalyticsProvider>.");
  return t;
}
__name(kC, "kC");
function PC({ consent: t, onReady: n, domain: o }) {
  let { subscribe: i, register: s, canTrack: u } = Ts(), [c, f] = $.useState(false), [h, v] = $.useState(false), C = $.useRef(false), { checkoutDomain: S, storefrontAccessToken: j, language: R } = t, { ready: P } = s("Internal_Shopify_Analytics");
  return CC({ ...t, locale: R, checkoutDomain: S || "mock.shop", storefrontAccessToken: j || "abcdefghijklmnopqrstuvwxyz123456", onVisitorConsentCollected: /* @__PURE__ */ __name(() => v(true), "onVisitorConsentCollected"), onReady: /* @__PURE__ */ __name(() => v(true), "onReady") }), hC({ hasUserConsent: h ? u() : true, domain: o, checkoutDomain: S }), $.useEffect(() => {
    C.current || (C.current = true, i(xn.PAGE_VIEWED, RC), i(xn.PRODUCT_VIEWED, $C), i(xn.COLLECTION_VIEWED, IC), i(xn.SEARCH_VIEWED, TC), i(xn.PRODUCT_ADD_TO_CART, AC), f(true));
  }, [i]), $.useEffect(() => {
    c && h && (P(), n());
  }, [c, h, n]), null;
}
__name(PC, "PC");
function Ul(t) {
  console.error(`[h2:error:ShopifyAnalytics] Unable to send Shopify analytics: Missing shop.${t} configuration.`);
}
__name(Ul, "Ul");
function Is(t) {
  var i, s, u, c;
  let n = kC(), o = n.analyticsProcessingAllowed();
  if (!((i = t == null ? void 0 : t.shop) != null && i.shopId)) {
    Ul("shopId");
    return;
  }
  if (!((s = t == null ? void 0 : t.shop) != null && s.acceptedLanguage)) {
    Ul("acceptedLanguage");
    return;
  }
  if (!((u = t == null ? void 0 : t.shop) != null && u.currency)) {
    Ul("currency");
    return;
  }
  if (!((c = t == null ? void 0 : t.shop) != null && c.hydrogenSubchannelId)) {
    Ul("hydrogenSubchannelId");
    return;
  }
  return { shopifySalesChannel: "hydrogen", assetVersionId: _C, ...t.shop, hasUserConsent: o, ...WS(), ccpaEnforced: !n.saleOfDataAllowed(), gdprEnforced: !(n.marketingAllowed() && n.analyticsProcessingAllowed()), analyticsAllowed: n.analyticsProcessingAllowed(), marketingAllowed: n.marketingAllowed(), saleOfDataAllowed: n.saleOfDataAllowed() };
}
__name(Is, "Is");
function jC(t, n) {
  if (n === null) return;
  let o = Is(t);
  return o ? { ...o, cartId: n.id } : void 0;
}
__name(jC, "jC");
var Mo = {};
function RC(t) {
  let n = Is(t);
  n && ($s({ eventName: Gr.PAGE_VIEW_2, payload: { ...n, ...Mo } }), Mo = {});
}
__name(RC, "RC");
function $C(t) {
  let n = Is(t);
  if (n && Fg({ type: "product", products: t.products })) {
    let o = xd(t.products);
    Mo = { pageType: yi.product, resourceId: o[0].productGid }, n = { ...n, ...Mo, products: xd(t.products) }, $s({ eventName: Gr.PRODUCT_VIEW, payload: n });
  }
}
__name($C, "$C");
function IC(t) {
  let n = Is(t);
  n && (Mo = { pageType: yi.collection, resourceId: t.collection.id }, n = { ...n, ...Mo, collectionHandle: t.collection.handle, collectionId: t.collection.id }, $s({ eventName: Gr.COLLECTION_VIEW, payload: n }));
}
__name(IC, "IC");
function TC(t) {
  let n = Is(t);
  n && (Mo = { pageType: yi.search }, n = { ...n, ...Mo, searchString: t.searchTerm }, $s({ eventName: Gr.SEARCH_VIEW, payload: n }));
}
__name(TC, "TC");
function AC(t) {
  let { cart: n, currentLine: o } = t, i = jC(t, n);
  !i || !(o != null && o.id) || OC({ matchedLine: o, eventPayload: i });
}
__name(AC, "AC");
function OC({ matchedLine: t, eventPayload: n }) {
  let o = { id: t.merchandise.product.id, variantId: t.merchandise.id, title: t.merchandise.product.title, variantTitle: t.merchandise.title, vendor: t.merchandise.product.vendor, price: t.merchandise.price.amount, quantity: t.quantity, productType: t.merchandise.product.productType, sku: t.merchandise.sku };
  Fg({ type: "cart", products: [o] }) && $s({ eventName: Gr.ADD_TO_CART, payload: { ...n, products: xd([o]) } });
}
__name(OC, "OC");
function ka(t, n, o, i) {
  if (t === "cart") {
    let s = `${o ? "merchandise" : "merchandise.product"}.${n}`;
    console.error(`[h2:error:ShopifyAnalytics] Can't set up cart analytics events because the \`cart.lines[].${s}\` value is missing from your GraphQL cart query. In your project, search for where \`fragment CartLine on CartLine\` is defined and make sure \`${s}\` is part of your cart query. Check the Hydrogen Skeleton template for reference: https://github.com/Shopify/hydrogen/blob/main/templates/skeleton/app/lib/fragments.ts#L25-L56.`);
  } else {
    let s = `${i || n}`;
    console.error(`[h2:error:ShopifyAnalytics] Can't set up product view analytics events because the \`${s}\` is missing from your \`<Analytics.ProductView>\`. Make sure \`${s}\` is part of your products data prop. Check the Hydrogen Skeleton template for reference: https://github.com/Shopify/hydrogen/blob/main/templates/skeleton/app/routes/products.%24handle.tsx#L159-L165.`);
  }
}
__name(ka, "ka");
function Fg({ type: t, products: n }) {
  return !n || n.length === 0 ? (ka(t, "", false, "data.products"), false) : (n.forEach((o) => {
    if (!o.id) return ka(t, "id", false), false;
    if (!o.title) return ka(t, "title", false), false;
    if (!o.price) return ka(t, "price.amount", true, "price"), false;
    if (!o.vendor) return ka(t, "vendor", false), false;
    if (!o.variantId) return ka(t, "id", true, "variantId"), false;
    if (!o.variantTitle) return ka(t, "title", true, "variantTitle"), false;
  }), true);
}
__name(Fg, "Fg");
function xd(t) {
  return t.map((n) => {
    let o = { productGid: n.id, variantGid: n.variantId, name: n.title, variantName: n.variantTitle, brand: n.vendor, price: n.price, quantity: n.quantity || 1, category: n.productType };
    return n.sku && (o.sku = n.sku), n.productType && (o.category = n.productType), o;
  });
}
__name(xd, "xd");
function um(t) {
  console.error(`[h2:error:CartAnalytics] Can't set up cart analytics events because the \`cart.${t}\` value is missing from your GraphQL cart query. In your project, search for where \`fragment CartApiQuery on Cart\` is defined and make sure \`${t}\` is part of your cart query. Check the Hydrogen Skeleton template for reference: https://github.com/Shopify/hydrogen/blob/main/templates/skeleton/app/lib/fragments.ts#L59.`);
}
__name(um, "um");
function LC({ cart: t, setCarts: n }) {
  let { publish: o, shop: i, customData: s, canTrack: u, cart: c, prevCart: f } = Ts(), h = $.useRef(null);
  return $.useEffect(() => {
    if (t) return Promise.resolve(t).then((v) => {
      if (v && v.lines) {
        if (!v.id) {
          um("id");
          return;
        }
        if (!v.updatedAt) {
          um("updatedAt");
          return;
        }
      }
      n(({ cart: C, prevCart: S }) => (v == null ? void 0 : v.updatedAt) !== (C == null ? void 0 : C.updatedAt) ? { cart: v, prevCart: C } : { cart: C, prevCart: S });
    }), () => {
    };
  }, [n, t]), $.useEffect(() => {
    if (!c || !(c != null && c.updatedAt) || (c == null ? void 0 : c.updatedAt) === (f == null ? void 0 : f.updatedAt)) return;
    let v;
    try {
      v = JSON.parse(localStorage.getItem("cartLastUpdatedAt") || "");
    } catch {
      v = null;
    }
    if (c.id === (v == null ? void 0 : v.id) && c.updatedAt === (v == null ? void 0 : v.updatedAt)) return;
    let C = { eventTimestamp: Date.now(), cart: c, prevCart: f, shop: i, customData: s };
    if (c.updatedAt === h.current) return;
    h.current = c.updatedAt, o("cart_updated", C), localStorage.setItem("cartLastUpdatedAt", JSON.stringify({ id: c.id, updatedAt: c.updatedAt }));
    let S = f != null && f.lines ? so(f == null ? void 0 : f.lines) : [], j = c.lines ? so(c.lines) : [];
    S == null || S.forEach((R) => {
      let P = j.filter((I) => R.id === I.id);
      if ((P == null ? void 0 : P.length) === 1) {
        let I = P[0];
        R.quantity < I.quantity ? o("product_added_to_cart", { ...C, prevLine: R, currentLine: I }) : R.quantity > I.quantity && o("product_removed_from_cart", { ...C, prevLine: R, currentLine: I });
      } else o("product_removed_from_cart", { ...C, prevLine: R });
    }), j == null || j.forEach((R) => {
      let P = S.filter((I) => R.id === I.id);
      (!P || P.length === 0) && o("product_added_to_cart", { ...C, currentLine: R });
    });
  }, [c, f, o, i, s, u]), null;
}
__name(LC, "LC");
var DC = "https://cdn.shopify.com/shopifycloud/perf-kit/shopify-perf-kit-1.0.1.min.js";
function NC({ shop: t }) {
  let n = $.useRef(false), { subscribe: o, register: i } = Ts(), { ready: s } = i("Internal_Shopify_Perf_Kit"), u = Wd(DC, { attributes: { id: "perfkit", "data-application": "hydrogen", "data-shop-id": mr(t.shopId).id.toString(), "data-storefront-id": t.hydrogenSubchannelId, "data-monorail-region": "global", "data-spa-mode": "true", "data-resource-timing-sampling-rate": "100" } });
  return $.useEffect(() => {
    u !== "done" || n.current || (n.current = true, o(xn.PAGE_VIEWED, () => {
      var c;
      (c = window.PerfKit) == null || c.navigate();
    }), o(xn.PRODUCT_VIEWED, () => {
      var c;
      (c = window.PerfKit) == null || c.setPageType("product");
    }), o(xn.COLLECTION_VIEWED, () => {
      var c;
      (c = window.PerfKit) == null || c.setPageType("collection");
    }), o(xn.SEARCH_VIEWED, () => {
      var c;
      (c = window.PerfKit) == null || c.setPageType("search");
    }), o(xn.CART_VIEWED, () => {
      var c;
      (c = window.PerfKit) == null || c.setPageType("cart");
    }), s());
  }, [o, s, u]), null;
}
__name(NC, "NC");
var cm = /* @__PURE__ */ new Set();
var su = /* @__PURE__ */ __name((t) => {
  cm.has(t) || (console.warn(t), cm.add(t));
}, "su");
var dm = /* @__PURE__ */ new Set();
var fm = /* @__PURE__ */ __name((t) => {
  dm.has(t) || (console.error(new Error(t)), dm.add(t));
}, "fm");
var bC = { canTrack: /* @__PURE__ */ __name(() => false, "canTrack"), cart: null, customData: {}, prevCart: null, publish: /* @__PURE__ */ __name(() => {
}, "publish"), shop: null, subscribe: /* @__PURE__ */ __name(() => {
}, "subscribe"), register: /* @__PURE__ */ __name(() => ({ ready: /* @__PURE__ */ __name(() => {
}, "ready") }), "register"), customerPrivacy: null, privacyBanner: null };
var zg = $.createContext(bC);
var ql = /* @__PURE__ */ new Map();
var ds = {};
function Hg() {
  return Object.values(ds).every(Boolean);
}
__name(Hg, "Hg");
function pm(t, n) {
  var o;
  ql.has(t) || ql.set(t, /* @__PURE__ */ new Map()), (o = ql.get(t)) == null || o.set(n.toString(), n);
}
__name(pm, "pm");
var Wl = /* @__PURE__ */ new Map();
function hm(t, n) {
  if (!Hg()) {
    Wl.set(t, n);
    return;
  }
  Bg(t, n);
}
__name(hm, "hm");
function Bg(t, n) {
  (ql.get(t) ?? /* @__PURE__ */ new Map()).forEach((o, i) => {
    try {
      o(n);
    } catch (s) {
      typeof s == "object" && s instanceof Error ? console.error("Analytics publish error", s.message, i, s.stack) : console.error("Analytics publish error", s, i);
    }
  });
}
__name(Bg, "Bg");
function mm(t) {
  return ds.hasOwnProperty(t) || (ds[t] = false), { ready: /* @__PURE__ */ __name(() => {
    ds[t] = true, Hg() && Wl.size > 0 && (Wl.forEach((n, o) => {
      Bg(o, n);
    }), Wl.clear());
  }, "ready") };
}
__name(mm, "mm");
function gm() {
  try {
    return window.Shopify.customerPrivacy.analyticsProcessingAllowed();
  } catch {
  }
  return false;
}
__name(gm, "gm");
function ym(t, n) {
  return `[h2:error:Analytics.Provider] - ${t} is required. Make sure ${n} is defined in your environment variables. See https://h2o.fyi/analytics/consent to learn how to setup environment variables in the Shopify admin.`;
}
__name(ym, "ym");
function UC({ canTrack: t, cart: n, children: o, consent: i, customData: s = {}, shop: u = null, cookieDomain: c }) {
  var L;
  let f = $.useRef(false), { shop: h } = MC(u), [v, C] = $.useState(!!t), [S, j] = $.useState({ cart: null, prevCart: null }), [R, P] = $.useState(t ? () => t : () => gm);
  if (h) if (/\/68817551382$/.test(h.shopId)) su("[h2:error:Analytics.Provider] - Mock shop is used. Analytics will not work properly.");
  else {
    if (!i.checkoutDomain) {
      let U = ym("consent.checkoutDomain", "PUBLIC_CHECKOUT_DOMAIN");
      fm(U);
    }
    if (!i.storefrontAccessToken) {
      let U = ym("consent.storefrontAccessToken", "PUBLIC_STOREFRONT_API_TOKEN");
      fm(U);
    }
    i != null && i.country || (i.country = "US"), i != null && i.language || (i.language = "EN"), i.withPrivacyBanner === void 0 && (i.withPrivacyBanner = false);
  }
  let I = $.useMemo(() => ({ canTrack: R, ...S, customData: s, publish: R() ? hm : () => {
  }, shop: h, subscribe: pm, register: mm, customerPrivacy: iu(), privacyBanner: wd() }), [v, R, S, (L = S.cart) == null ? void 0 : L.updatedAt, S.prevCart, hm, pm, s, h, mm, JSON.stringify(ds), iu, wd]);
  return y.jsxs(zg.Provider, { value: I, children: [o, !!h && y.jsx(gC, {}), !!h && !!n && y.jsx(LC, { cart: n, setCarts: j }), !!h && i.checkoutDomain && y.jsx(PC, { consent: i, onReady: /* @__PURE__ */ __name(() => {
    f.current = true, C(true), P(t ? () => t : () => gm);
  }, "onReady"), domain: c }), !!h && y.jsx(NC, { shop: h })] });
}
__name(UC, "UC");
function Ts() {
  let t = $.useContext(zg);
  if (!t) throw new Error("[h2:error:useAnalytics] 'useAnalytics()' must be a descendent of <AnalyticsProvider/>");
  return t;
}
__name(Ts, "Ts");
function MC(t) {
  let [n, o] = $.useState(null);
  return $.useEffect(() => (Promise.resolve(t).then(o), () => {
  }), [o, t]), { shop: n };
}
__name(MC, "MC");
async function FC({ storefront: t, publicStorefrontId: n = "0" }) {
  return t.query(zC, { cache: t.CacheLong() }).then(({ shop: o, localization: i }) => ({ shopId: o.id, acceptedLanguage: i.language.isoCode, currency: i.country.currency.isoCode, hydrogenSubchannelId: n }));
}
__name(FC, "FC");
var zC = `#graphql
  query ShopData(
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    shop {
      id
    }
    localization {
      country {
        currency {
          isoCode
        }
      }
      language {
        isoCode
      }
    }
  }
`;
var Su = { CollectionView: vC, ProductView: yC, Provider: UC, SearchView: wC };
function Pa(t, n) {
  return Vg(t.headers, n);
}
__name(Pa, "Pa");
function Vg(t, n) {
  var i;
  let o = ((i = t == null ? void 0 : t.get) == null ? void 0 : i.call(t, n)) ?? (t == null ? void 0 : t[n]);
  return typeof o == "string" ? o : null;
}
__name(Vg, "Vg");
function vm(t) {
  return { requestId: t ? Pa(t, "request-id") : void 0, purpose: t ? Pa(t, "purpose") : void 0 };
}
__name(vm, "vm");
function lu(t, n = {}) {
  let o = new Error(), i = /* @__PURE__ */ __name((s, u = "Error") => {
    let c = (o.stack ?? "").split(`
`).slice(3 + (n.stackOffset ?? 0)).join(`
`).replace(/ at loader(\d+) \(/, (f, h) => f.replace(h, ""));
    return `${u}: ${s}
` + c;
  }, "i");
  return t.then((s) => {
    if (s != null && s.errors && Array.isArray(s.errors)) {
      let u = typeof n.logErrors == "function" ? n.logErrors : () => n.logErrors ?? false;
      s.errors.forEach((c) => {
        c && (c.stack = i(c.message, c.name), u(c) && console.error(c));
      });
    }
    return s;
  }).catch((s) => {
    throw s && (s.stack = i(s.message, s.name)), s;
  });
}
__name(lu, "lu");
var to = void 0;
var Cu = "public";
var HC = "private";
var qg = "no-store";
var wm = { maxAge: "max-age", staleWhileRevalidate: "stale-while-revalidate", sMaxAge: "s-maxage", staleIfError: "stale-if-error" };
function Wg(t) {
  let n = [];
  return Object.keys(t).forEach((o) => {
    o === "mode" ? n.push(t[o]) : wm[o] && n.push(`${wm[o]}=${t[o]}`);
  }), n.join(", ");
}
__name(Wg, "Wg");
function BC() {
  return { mode: qg };
}
__name(BC, "BC");
function Qd(t) {
  if (t != null && t.mode && (t == null ? void 0 : t.mode) !== Cu && (t == null ? void 0 : t.mode) !== HC) throw Error("'mode' must be either 'public' or 'private'");
}
__name(Qd, "Qd");
function Gd(t) {
  return Qd(t), { mode: Cu, maxAge: 1, staleWhileRevalidate: 9, ...t };
}
__name(Gd, "Gd");
function VC(t) {
  return Qd(t), { mode: Cu, maxAge: 3600, staleWhileRevalidate: 82800, ...t };
}
__name(VC, "VC");
function Yd(t) {
  return Qd(t), { mode: Cu, maxAge: 1, staleWhileRevalidate: 86399, ...t };
}
__name(Yd, "Yd");
function qC(t) {
  return t;
}
__name(qC, "qC");
function ws(t) {
  return String(t).includes("__proto__") ? JSON.parse(t, WC) : JSON.parse(t);
}
__name(ws, "ws");
function WC(t, n) {
  if (t !== "__proto__") return n;
}
__name(WC, "WC");
function Ql(t, n) {
  return t && n ? { ...t, ...n } : t || Yd();
}
__name(Ql, "Ql");
function Sd(t) {
  return Wg(Ql(t));
}
__name(Sd, "Sd");
async function QC(t, n) {
  if (!t) return;
  let o = await t.match(n);
  if (o) return o;
}
__name(QC, "QC");
async function GC(t, n, o, i) {
  if (!t) return;
  let s = Ql(i), u = Sd(Ql(s, { maxAge: (s.maxAge || 0) + (s.staleWhileRevalidate || 0) })), c = Sd(Ql(s));
  o.headers.set("cache-control", u), o.headers.set("real-cache-control", c), o.headers.set("cache-put-date", String(Date.now())), await t.put(n, o);
}
__name(GC, "GC");
async function YC(t, n) {
  t && await t.delete(n);
}
__name(YC, "YC");
function JC(t, n) {
  let o = t.headers.get("real-cache-control"), i = 0;
  if (o) {
    let s = o.match(/max-age=(\d*)/);
    s && s.length > 1 && (i = parseFloat(s[1]));
  }
  return [(Date.now() - Number(n)) / 1e3, i];
}
__name(JC, "JC");
function KC(t, n) {
  let o = n.headers.get("cache-put-date");
  if (!o) return false;
  let [i, s] = JC(n, o);
  return i > s;
}
__name(KC, "KC");
var Jd = { get: QC, set: GC, delete: YC, generateDefaultCacheControlHeader: Sd, isStale: KC };
function Kd(t) {
  return `https://shopify.dev/?${t}`;
}
__name(Kd, "Kd");
function XC(t) {
  return t || Yd();
}
__name(XC, "XC");
async function ZC(t, n) {
  if (!t) return;
  let o = Kd(n), i = new Request(o), s = await Jd.get(t, i);
  if (!s) return;
  let u = await s.text();
  try {
    return [ws(u), s];
  } catch {
    return [u, s];
  }
}
__name(ZC, "ZC");
async function eE(t, n, o, i) {
  if (!t) return;
  let s = Kd(n), u = new Request(s), c = new Response(JSON.stringify(o));
  await Jd.set(t, u, c, XC(i));
}
__name(eE, "eE");
function tE(t, n) {
  return Jd.isStale(new Request(Kd(t)), n);
}
__name(tE, "tE");
function rE(t) {
  let n = Array.isArray(t) ? t : [t], o = "";
  for (let i of n) i != null && (typeof i == "object" ? o += JSON.stringify(i) : o += i.toString());
  return encodeURIComponent(o);
}
__name(rE, "rE");
var ld = /* @__PURE__ */ new Set();
async function nE(t, n, { strategy: o = Gd(), cacheInstance: i, shouldCacheResult: s = /* @__PURE__ */ __name(() => true, "s"), waitUntil: u, debugInfo: c }) {
  let f = rE([...typeof t == "string" ? [t] : t]), h = /* @__PURE__ */ __name((R) => {
    var P, I, L, U;
    R.displayName, (P = R.response) == null || P.url, (I = R.response) != null && I.status, (L = R.response) != null && L.statusText, Array.from(((U = R.response) == null ? void 0 : U.headers.entries()) || []);
  }, "h"), v;
  if (!i || !o || o.mode === qg) return await n({ addDebugData: h });
  let C = /* @__PURE__ */ __name((R) => eE(i, f, { value: R, debugInfo: void 0 }, o), "C"), S = await ZC(i, f);
  if (S && typeof S[0] != "string") {
    let [{ value: R, debugInfo: P }, I] = S, L = tE(f, I) ? "STALE" : "HIT";
    if (!ld.has(f) && L === "STALE") {
      ld.add(f);
      let U = Promise.resolve().then(async () => {
        let q = Date.now();
        try {
          let Y = await n({ addDebugData: h });
          s(Y) && (await C(Y), v == null || v({ result: Y, cacheStatus: "PUT", overrideStartTime: q }));
        } catch (Y) {
          Y.message && (Y.message = "SWR in sub-request failed: " + Y.message), console.error(Y);
        } finally {
          ld.delete(f);
        }
      });
      u == null || u(U);
    }
    return R;
  }
  let j = await n({ addDebugData: h });
  if (s(j)) {
    let R = Promise.resolve().then(async () => {
      await C(j);
    });
    u == null || u(R);
  }
  return j;
}
__name(nE, "nE");
function oE(t, n) {
  return [t, { status: n.status, statusText: n.statusText, headers: Array.from(n.headers.entries()) }];
}
__name(oE, "oE");
function xm([t, n]) {
  return [t, new Response(t, n)];
}
__name(xm, "xm");
async function aE(t, n, { cacheInstance: o, cache: i, cacheKey: s = [t, n], shouldCacheResponse: u, waitUntil: c, debugInfo: f }) {
  return !i && (!n.method || n.method === "GET") && (i = Gd()), nE(s, async () => {
    let h = await fetch(t, n);
    if (!h.ok) return h;
    let v = await h.text().catch(() => "");
    try {
      v && (v = ws(v));
    } catch {
    }
    return oE(v, h);
  }, { cacheInstance: o, waitUntil: c, strategy: i ?? null, debugInfo: f, shouldCacheResult: /* @__PURE__ */ __name((h) => "ok" in h ? false : u(...xm(h)), "shouldCacheResult") }).then((h) => "ok" in h ? [null, h] : xm(h));
}
__name(aE, "aE");
var Qg = "cartFormInput";
function nt({ children: t, action: n, inputs: o, route: i, fetcherKey: s }) {
  let u = Hd({ key: s });
  return y.jsxs(u.Form, { action: i || "", method: "post", children: [(n || o) && y.jsx("input", { type: "hidden", name: Qg, value: JSON.stringify({ action: n, inputs: o }) }), typeof t == "function" ? t(u) : t] });
}
__name(nt, "nt");
nt.INPUT_NAME = Qg;
nt.ACTIONS = { AttributesUpdateInput: "AttributesUpdateInput", BuyerIdentityUpdate: "BuyerIdentityUpdate", Create: "Create", DiscountCodesUpdate: "DiscountCodesUpdate", GiftCardCodesUpdate: "GiftCardCodesUpdate", LinesAdd: "LinesAdd", LinesRemove: "LinesRemove", LinesUpdate: "LinesUpdate", NoteUpdate: "NoteUpdate", SelectedDeliveryOptionsUpdate: "SelectedDeliveryOptionsUpdate", MetafieldsSet: "MetafieldsSet", MetafieldDelete: "MetafieldDelete" };
function iE(t) {
  let n = {};
  for (let c of t.entries()) {
    let f = c[0], h = t.getAll(f);
    n[f] = h.length > 1 ? h : c[1];
  }
  let { cartFormInput: o, ...i } = n, { action: s, inputs: u } = o ? JSON.parse(String(o)) : {};
  return { action: s, inputs: { ...u, ...i } };
}
__name(iE, "iE");
nt.getFormInput = iE;
var sE = /* @__PURE__ */ __name((t) => {
  let n = Rg(Vg(t, "Cookie") || "");
  return () => n.cart ? `gid://shopify/Cart/${n.cart}` : void 0;
}, "sE");
var lE = /* @__PURE__ */ __name((t) => (n) => {
  let o = new Headers();
  return o.append("Set-Cookie", $g("cart", n.split("/").pop() || "", { path: "/", ...t })), o;
}, "lE");
var Sm = "Custom-Storefront-Request-Group-ID";
var Cm = "X-Shopify-Storefront-Access-Token";
var Em = "X-SDK-Variant";
var _m = "X-SDK-Variant-Source";
var km = "X-SDK-Version";
function uE() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `weak-${Math.random().toString(16).substring(2)}`;
}
__name(uE, "uE");
var Gg = "2025.1.3";
function uu(t) {
  return t.replace(/\s*#.*$/gm, "").replace(/\s+/gm, " ").trim();
}
__name(uu, "uu");
var cE = /(^|}\s)query[\s({]/im;
var dE = /(^|}\s)mutation[\s({]/im;
function Yg(t, n) {
  if (!cE.test(t)) throw new Error(`[h2:error:${n}] Can only execute queries`);
}
__name(Yg, "Yg");
function Jg(t, n) {
  if (!dE.test(t)) throw new Error(`[h2:error:${n}] Can only execute mutations`);
}
__name(Jg, "Jg");
var Xd = class extends Error {
  static {
    __name(this, "Xd");
  }
  constructor(n, o = {}) {
    let i = (o.clientOperation ? `[h2:error:${o.clientOperation}] ` : "") + n + (o.requestId ? ` - Request ID: ${o.requestId}` : "");
    super(i);
    os(this, "locations");
    os(this, "path");
    os(this, "extensions");
    this.name = "GraphQLError", this.extensions = o.extensions, this.locations = o.locations, this.path = o.path, this.stack = o.stack || void 0;
    try {
      this.cause = JSON.stringify({ ...typeof o.cause == "object" ? o.cause : {}, requestId: o.requestId });
    } catch {
      o.cause && (this.cause = o.cause);
    }
  }
  get [Symbol.toStringTag]() {
    return this.name;
  }
  toString() {
    let n = `${this.name}: ${this.message}`;
    if (this.path) try {
      n += ` | path: ${JSON.stringify(this.path)}`;
    } catch {
    }
    if (this.extensions) try {
      n += ` | extensions: ${JSON.stringify(this.extensions)}`;
    } catch {
    }
    return n += `
`, this.stack && (n += `${this.stack.slice(this.stack.indexOf(`
`) + 1)}
`), n;
  }
  toJSON() {
    return { name: "Error", message: "" };
  }
};
function Cd({ url: t, response: n, errors: o, type: i, query: s, queryVariables: u, ErrorConstructor: c = Error, client: f = "storefront" }) {
  var C;
  let h = (typeof o == "string" ? o : (C = o == null ? void 0 : o.map) == null ? void 0 : C.call(o, (S) => S.message).join(`
`)) || `URL: ${t}
API response error: ${n.status}`, v = new Xd(h, { query: s, queryVariables: u, cause: { errors: o }, clientOperation: `${f}.${i}`, requestId: n.headers.get("x-request-id") });
  throw new c(v.message, { cause: v.cause });
}
__name(Cd, "Cd");
var fE = { language: "EN", country: "US" };
function pE(t) {
  let { storefrontHeaders: n, cache: o, waitUntil: i, i18n: s, storefrontId: u, logErrors: c = true, ...f } = t, { getPublicTokenHeaders: h, getPrivateTokenHeaders: v, getStorefrontApiUrl: C, getShopifyDomain: S } = wS(f), j = (f.privateStorefrontToken ? v : h)({ contentType: "json", buyerIp: (n == null ? void 0 : n.buyerIp) || "" });
  if (j[Sm] = (n == null ? void 0 : n.requestGroupId) || uE(), u && (j[kS] = u), j["user-agent"] = `Hydrogen ${Gg}`, n && n.cookie) {
    let I = Bd(n.cookie ?? "");
    I[No] && (j[PS] = I[No]), I[bo] && (j[jS] = I[bo]);
  }
  let R = JSON.stringify({ "content-type": j["content-type"], "user-agent": j["user-agent"], [Em]: j[Em], [_m]: j[_m], [km]: j[km], [Cm]: j[Cm] });
  async function P({ query: I, mutation: L, variables: U, cache: q, headers: Y = [], storefrontApiVersion: G, displayName: ye, stackInfo: Q }) {
    let J = Y instanceof Headers ? Object.fromEntries(Y.entries()) : Array.isArray(Y) ? Object.fromEntries(Y) : Y, ce = I ?? L, ve = { ...U };
    s && (!(U != null && U.country) && /\$country/.test(ce) && (ve.country = s.country), !(U != null && U.language) && /\$language/.test(ce) && (ve.language = s.language));
    let $e = C({ storefrontApiVersion: G }), Ie = JSON.stringify({ query: ce, variables: ve }), Ae = { method: "POST", headers: { ...j, ...J }, body: Ie }, fe = [$e, Ae.method, R, Ae.body], [_e, Re] = await aE($e, Ae, { cacheInstance: L ? void 0 : o, cache: q || Yd(), cacheKey: fe, waitUntil: i, shouldCacheResponse: /* @__PURE__ */ __name((oe) => !(oe != null && oe.errors), "shouldCacheResponse"), debugInfo: { requestId: Ae.headers[Sm], displayName: ye, url: $e, stackInfo: Q, graphql: Ie, purpose: n == null ? void 0 : n.purpose } }), De = { url: $e, response: Re, type: L ? "mutation" : "query", query: ce, queryVariables: ve, errors: void 0 };
    if (!Re.ok) {
      let oe, b = _e;
      try {
        b ?? (b = await Re.text()), oe = ws(b);
      } catch {
        oe = [{ message: b ?? "Could not parse Storefront API response" }];
      }
      Cd({ ...De, errors: oe });
    }
    let { data: Oe, errors: ne } = _e, ue = ne == null ? void 0 : ne.map(({ message: oe, ...b }) => new Xd(oe, { ...b, clientOperation: `storefront.${De.type}`, requestId: Re.headers.get("x-request-id"), queryVariables: ve, query: ce }));
    return nr(Oe, ue);
  }
  __name(P, "P");
  return { storefront: { query(I, L) {
    I = uu(I), Yg(I, "storefront.query");
    let U = mi == null ? void 0 : mi(I);
    return lu(P({ ...L, query: I, stackInfo: to == null ? void 0 : to(U) }), { stackOffset: U, logErrors: c });
  }, mutate(I, L) {
    I = uu(I), Jg(I, "storefront.mutate");
    let U = mi == null ? void 0 : mi(I);
    return lu(P({ ...L, mutation: I, stackInfo: to == null ? void 0 : to(U) }), { stackOffset: U, logErrors: c });
  }, cache: o, CacheNone: BC, CacheLong: VC, CacheShort: Gd, CacheCustom: qC, generateCacheControlHeader: Wg, getPublicTokenHeaders: h, getPrivateTokenHeaders: v, getShopifyDomain: S, getApiUrl: C, i18n: s ?? fE } };
}
__name(pE, "pE");
var mi = void 0;
function nr(t, n) {
  return { ...t, ...n && { errors: n } };
}
__name(nr, "nr");
function hE({ storefront: t, customerAccount: n, getCartId: o, cartFragment: i }) {
  return async (s) => {
    let u = o();
    if (!u) return null;
    let [c, { cart: f, errors: h }] = await Promise.all([n ? n.isLoggedIn() : false, t.query(mE(i), { variables: { cartId: u, ...s }, cache: t.CacheNone() })]);
    if (c && (f != null && f.checkoutUrl)) {
      let v = new URL(f.checkoutUrl);
      v.searchParams.set("logged_in", "true"), f.checkoutUrl = v.toString();
    }
    return f || h ? nr(f, h) : null;
  };
}
__name(hE, "hE");
var mE = /* @__PURE__ */ __name((t = gE) => `#graphql
  query CartQuery(
    $cartId: ID!
    $numCartLines: Int = 100
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cart(id: $cartId) {
      ...CartApiQuery
    }
  }

  ${t}
`, "mE");
var gE = `#graphql
  fragment CartApiQuery on Cart {
    updatedAt
    id
    checkoutUrl
    totalQuantity
    buyerIdentity {
      countryCode
      customer {
        id
        email
        firstName
        lastName
        displayName
      }
      email
      phone
    }
    lines(first: $numCartLines) {
      edges {
        node {
          id
          quantity
          attributes {
            key
            value
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            amountPerQuantity {
              amount
              currencyCode
            }
            compareAtAmountPerQuantity {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              availableForSale
              compareAtPrice {
                ...CartApiMoney
              }
              price {
                ...CartApiMoney
              }
              requiresShipping
              title
              image {
                ...CartApiImage
              }
              product {
                handle
                title
                id
                vendor
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
    cost {
      subtotalAmount {
        ...CartApiMoney
      }
      totalAmount {
        ...CartApiMoney
      }
      totalDutyAmount {
        ...CartApiMoney
      }
      totalTaxAmount {
        ...CartApiMoney
      }
    }
    note
    attributes {
      key
      value
    }
    discountCodes {
      applicable
      code
    }
  }

  fragment CartApiMoney on MoneyV2 {
    currencyCode
    amount
  }

  fragment CartApiImage on Image {
    id
    url
    altText
    width
    height
  }
`;
var jn = `#graphql
  fragment CartApiError on CartUserError {
    message
    field
    code
  }
`;
var Rn = `#graphql
  fragment CartApiMutation on Cart {
    id
    totalQuantity
    checkoutUrl
  }
`;
var $n = `#graphql
  fragment CartApiWarning on CartWarning {
    code
    message
    target
  }
`;
function yE(t) {
  return async (n, o) => {
    let i = t.customerAccount ? await t.customerAccount.getBuyer() : void 0, { cartId: s, ...u } = o || {}, { buyerIdentity: c, ...f } = n, { cartCreate: h, errors: v } = await t.storefront.mutate(vE(t.cartFragment), { variables: { input: { ...f, buyerIdentity: { ...i, ...c } }, ...u } });
    return nr(h, v);
  };
}
__name(yE, "yE");
var vE = /* @__PURE__ */ __name((t = Rn) => `#graphql
  mutation cartCreate(
    $input: CartInput!
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartCreate(input: $input) {
      cart {
        ...CartApiMutation
        checkoutUrl
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${t}
  ${jn}
  ${$n}
`, "vE");
function wE(t) {
  return async (n, o) => {
    let { cartLinesAdd: i, errors: s } = await t.storefront.mutate(xE(t.cartFragment), { variables: { cartId: t.getCartId(), lines: n, ...o } });
    return nr(i, s);
  };
}
__name(wE, "wE");
var xE = /* @__PURE__ */ __name((t = Rn) => `#graphql
  mutation cartLinesAdd(
    $cartId: ID!
    $lines: [CartLineInput!]!
    $country: CountryCode = ZZ
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${t}
  ${jn}
  ${$n}
`, "xE");
var Kg = "__h_pending_";
function SE(t) {
  return Kg + t;
}
__name(SE, "SE");
function Ed(t) {
  return t.startsWith(Kg);
}
__name(Ed, "Ed");
function Xg(t, n) {
  if (n.some((o) => Ed(typeof o == "string" ? o : o.id))) throw new Error(`Tried to perform an action on an optimistic line. Make sure to disable your "${t}" CartForm action when the line is optimistic.`);
}
__name(Xg, "Xg");
function CE(t) {
  return async (n, o) => {
    Xg("updateLines", n);
    let { cartLinesUpdate: i, errors: s } = await t.storefront.mutate(EE(t.cartFragment), { variables: { cartId: t.getCartId(), lines: n, ...o } });
    return nr(i, s);
  };
}
__name(CE, "CE");
var EE = /* @__PURE__ */ __name((t = Rn) => `#graphql
  mutation cartLinesUpdate(
    $cartId: ID!
    $lines: [CartLineUpdateInput!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${t}
  ${jn}
  ${$n}
`, "EE");
function _E(t) {
  return async (n, o) => {
    Xg("removeLines", n);
    let { cartLinesRemove: i, errors: s } = await t.storefront.mutate(kE(t.cartFragment), { variables: { cartId: t.getCartId(), lineIds: n, ...o } });
    return nr(i, s);
  };
}
__name(_E, "_E");
var kE = /* @__PURE__ */ __name((t = Rn) => `#graphql
  mutation cartLinesRemove(
    $cartId: ID!
    $lineIds: [ID!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${t}
  ${jn}
  ${$n}
`, "kE");
function PE(t) {
  return async (n, o) => {
    let i = n.filter((c, f, h) => h.indexOf(c) === f), { cartDiscountCodesUpdate: s, errors: u } = await t.storefront.mutate(jE(t.cartFragment), { variables: { cartId: t.getCartId(), discountCodes: i, ...o } });
    return nr(s, u);
  };
}
__name(PE, "PE");
var jE = /* @__PURE__ */ __name((t = Rn) => `#graphql
  mutation cartDiscountCodesUpdate(
    $cartId: ID!
    $discountCodes: [String!]
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${t}
  ${jn}
  ${$n}
`, "jE");
function RE(t) {
  return async (n, o) => {
    n.companyLocationId && t.customerAccount && t.customerAccount.setBuyer({ companyLocationId: n.companyLocationId });
    let i = t.customerAccount ? await t.customerAccount.getBuyer() : void 0, { cartBuyerIdentityUpdate: s, errors: u } = await t.storefront.mutate($E(t.cartFragment), { variables: { cartId: t.getCartId(), buyerIdentity: { ...i, ...n }, ...o } });
    return nr(s, u);
  };
}
__name(RE, "RE");
var $E = /* @__PURE__ */ __name((t = Rn) => `#graphql
  mutation cartBuyerIdentityUpdate(
    $cartId: ID!
    $buyerIdentity: CartBuyerIdentityInput!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${t}
  ${jn}
  ${$n}
`, "$E");
function IE(t) {
  return async (n, o) => {
    let { cartNoteUpdate: i, errors: s } = await t.storefront.mutate(TE(t.cartFragment), { variables: { cartId: t.getCartId(), note: n, ...o } });
    return nr(i, s);
  };
}
__name(IE, "IE");
var TE = /* @__PURE__ */ __name((t = Rn) => `#graphql
  mutation cartNoteUpdate(
    $cartId: ID!
    $note: String!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartNoteUpdate(cartId: $cartId, note: $note) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${t}
  ${jn}
  ${$n}
`, "TE");
function AE(t) {
  return async (n, o) => {
    let { cartSelectedDeliveryOptionsUpdate: i, errors: s } = await t.storefront.mutate(OE(t.cartFragment), { variables: { cartId: t.getCartId(), selectedDeliveryOptions: n, ...o } });
    return nr(i, s);
  };
}
__name(AE, "AE");
var OE = /* @__PURE__ */ __name((t = Rn) => `#graphql
  mutation cartSelectedDeliveryOptionsUpdate(
    $cartId: ID!
    $selectedDeliveryOptions: [CartSelectedDeliveryOptionInput!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartSelectedDeliveryOptionsUpdate(cartId: $cartId, selectedDeliveryOptions: $selectedDeliveryOptions) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${t}
  ${jn}
  ${$n}
`, "OE");
function LE(t) {
  return async (n, o) => {
    let { cartAttributesUpdate: i, errors: s } = await t.storefront.mutate(DE(t.cartFragment), { variables: { cartId: (o == null ? void 0 : o.cartId) || t.getCartId(), attributes: n } });
    return nr(i, s);
  };
}
__name(LE, "LE");
var DE = /* @__PURE__ */ __name((t = Rn) => `#graphql
  mutation cartAttributesUpdate(
    $cartId: ID!
    $attributes: [AttributeInput!]!
  ) {
    cartAttributesUpdate(cartId: $cartId, attributes: $attributes) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${t}
  ${jn}
  ${$n}
`, "DE");
function NE(t) {
  return async (n, o) => {
    let i = (o == null ? void 0 : o.cartId) || t.getCartId(), s = n.map((f) => ({ ...f, ownerId: i })), { cartMetafieldsSet: u, errors: c } = await t.storefront.mutate(bE(), { variables: { metafields: s } });
    return nr({ cart: { id: i }, ...u }, c);
  };
}
__name(NE, "NE");
var bE = /* @__PURE__ */ __name(() => `#graphql
  mutation cartMetafieldsSet(
    $metafields: [CartMetafieldsSetInput!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartMetafieldsSet(metafields: $metafields) {
      userErrors {
        code
        elementIndex
        field
        message
      }
    }
  }
`, "bE");
function UE(t) {
  return async (n, o) => {
    let i = (o == null ? void 0 : o.cartId) || t.getCartId(), { cartMetafieldDelete: s, errors: u } = await t.storefront.mutate(ME(), { variables: { input: { ownerId: i, key: n } } });
    return nr({ cart: { id: i }, ...s }, u);
  };
}
__name(UE, "UE");
var ME = /* @__PURE__ */ __name(() => `#graphql
  mutation cartMetafieldDelete(
    $input: CartMetafieldDeleteInput!
  ) {
    cartMetafieldDelete(input: $input) {
      userErrors {
        code
        field
        message
      }
    }
  }
`, "ME");
function FE(t) {
  return async (n, o) => {
    let i = n.filter((c, f, h) => h.indexOf(c) === f), { cartGiftCardCodesUpdate: s, errors: u } = await t.storefront.mutate(zE(t.cartFragment), { variables: { cartId: t.getCartId(), giftCardCodes: i, ...o } });
    return nr(s, u);
  };
}
__name(FE, "FE");
var zE = /* @__PURE__ */ __name((t = Rn) => `#graphql
  mutation cartGiftCardCodesUpdate(
    $cartId: ID!
    $giftCardCodes: [String!]!
    $language: LanguageCode
    $country: CountryCode
  ) @inContext(country: $country, language: $language) {
    cartGiftCardCodesUpdate(cartId: $cartId, giftCardCodes: $giftCardCodes) {
      cart {
        ...CartApiMutation
      }
      userErrors {
        ...CartApiError
      }
      warnings {
        ...CartApiWarning
      }
    }
  }
  ${t}
  ${jn}
  ${$n}
`, "zE");
function HE(t) {
  let { getCartId: n, setCartId: o, storefront: i, customerAccount: s, cartQueryFragment: u, cartMutateFragment: c } = t, f = n(), h = /* @__PURE__ */ __name(() => f || n(), "h"), v = { storefront: i, getCartId: h, cartFragment: c, customerAccount: s }, C = yE(v), S = /* @__PURE__ */ __name(async function(...R) {
    var I;
    let P = await C(...R);
    return f = (I = P == null ? void 0 : P.cart) == null ? void 0 : I.id, P;
  }, "S"), j = { get: hE({ storefront: i, customerAccount: s, getCartId: h, cartFragment: u }), getCartId: h, setCartId: o, create: S, addLines: /* @__PURE__ */ __name(async (R, P) => {
    let I = R.map((L) => ({ attributes: L.attributes, quantity: L.quantity, merchandiseId: L.merchandiseId, sellingPlanId: L.sellingPlanId }));
    return f || P != null && P.cartId ? await wE(v)(I, P) : await S({ lines: I }, P);
  }, "addLines"), updateLines: CE(v), removeLines: _E(v), updateDiscountCodes: /* @__PURE__ */ __name(async (R, P) => f || P != null && P.cartId ? await PE(v)(R, P) : await S({ discountCodes: R }, P), "updateDiscountCodes"), updateGiftCardCodes: /* @__PURE__ */ __name(async (R, P) => f || P != null && P.cartId ? await FE(v)(R, P) : await S({ giftCardCodes: R }, P), "updateGiftCardCodes"), updateBuyerIdentity: /* @__PURE__ */ __name(async (R, P) => f || P != null && P.cartId ? await RE(v)(R, P) : await S({ buyerIdentity: R }, P), "updateBuyerIdentity"), updateNote: /* @__PURE__ */ __name(async (R, P) => f || P != null && P.cartId ? await IE(v)(R, P) : await S({ note: R }, P), "updateNote"), updateSelectedDeliveryOption: AE(v), updateAttributes: /* @__PURE__ */ __name(async (R, P) => f || P != null && P.cartId ? await LE(v)(R, P) : await S({ attributes: R }, P), "updateAttributes"), setMetafields: /* @__PURE__ */ __name(async (R, P) => f || P != null && P.cartId ? await NE(v)(R, P) : await S({ metafields: R }, P), "setMetafields"), deleteMetafield: UE(v) };
  return "customMethods" in t ? { ...j, ...t.customMethods ?? {} } : j;
}
__name(HE, "HE");
function Zg(t) {
  let n = Cx();
  if (!n || !n.length) return t;
  let o = t != null && t.lines ? structuredClone(t) : { lines: { nodes: [] } }, i = o.lines.nodes, s = false;
  for (let { formData: u } of n) {
    if (!u) continue;
    let c = nt.getFormInput(u);
    if (c.action === nt.ACTIONS.LinesAdd) for (let f of c.inputs.lines) {
      if (!f.selectedVariant) {
        console.error("[h2:error:useOptimisticCart] No selected variant was passed in the cart action. Make sure to pass the selected variant if you want to use an optimistic cart");
        continue;
      }
      let h = i.find((v) => {
        var C;
        return v.merchandise.id === ((C = f.selectedVariant) == null ? void 0 : C.id);
      });
      s = true, h ? (h.quantity = (h.quantity || 1) + (f.quantity || 1), h.isOptimistic = true) : i.unshift({ id: SE(f.selectedVariant.id), merchandise: f.selectedVariant, isOptimistic: true, quantity: f.quantity || 1 });
    }
    else if (c.action === nt.ACTIONS.LinesRemove) for (let f of c.inputs.lineIds) {
      let h = i.findIndex((v) => v.id === f);
      if (h !== -1) {
        if (Ed(i[h].id)) {
          console.error("[h2:error:useOptimisticCart] Tried to remove an optimistic line that has not been added to the cart yet");
          continue;
        }
        i.splice(h, 1), s = true;
      } else console.warn(`[h2:warn:useOptimisticCart] Tried to remove line '${f}' but it doesn't exist in the cart`);
    }
    else if (c.action === nt.ACTIONS.LinesUpdate) for (let f of c.inputs.lines) {
      let h = i.findIndex((v) => f.id === v.id);
      if (h > -1) {
        if (Ed(i[h].id)) {
          console.error("[h2:error:useOptimisticCart] Tried to update an optimistic line that has not been added to the cart yet");
          continue;
        }
        i[h].quantity = f.quantity, i[h].quantity === 0 && i.splice(h, 1), s = true;
      } else console.warn(`[h2:warn:useOptimisticCart] Tried to update line '${f.id}' but it doesn't exist in the cart`);
    }
  }
  return s && (o.isOptimistic = s), o.totalQuantity = i.reduce((u, c) => u + c.quantity, 0), o;
}
__name(Zg, "Zg");
var ud = "2025-01";
var cu = `Shopify Hydrogen ${Gg}`;
var BE = "30243aa5-17c1-465a-8493-944bcc4e88aa";
var pr = "customerAccount";
var Gl = "buyer";
var ao = class extends Response {
  static {
    __name(this, "ao");
  }
  constructor(t, n, o) {
    super(`Bad request: ${t}`, { status: 400, headers: o });
  }
};
function Yl(t, n = {}) {
  let o = n.headers ? new Headers(n.headers) : new Headers({});
  return o.set("location", t), new Response(null, { status: n.status || 302, headers: o });
}
__name(Yl, "Yl");
async function VE({ session: t, customerAccountId: n, customerAccountTokenExchangeUrl: o, httpsOrigin: i, debugInfo: s }) {
  let u = new URLSearchParams(), c = t.get(pr), f = c == null ? void 0 : c.refreshToken, h = c == null ? void 0 : c.idToken;
  if (!f) throw new ao("Unauthorized", "No refreshToken found in the session. Make sure your session is configured correctly and passed to `createCustomerAccountClient`.");
  u.append("grant_type", "refresh_token"), u.append("refresh_token", f), u.append("client_id", n);
  let v = { "content-type": "application/x-www-form-urlencoded", "User-Agent": cu, Origin: i };
  (/* @__PURE__ */ new Date()).getTime();
  let C = o, S = await fetch(C, { method: "POST", headers: v, body: u });
  if (!S.ok) {
    let I = await S.text();
    throw new Response(I, { status: S.status, headers: { "Content-Type": "text/html; charset=utf-8" } });
  }
  let { access_token: j, expires_in: R, refresh_token: P } = await S.json();
  if (!j || j.length === 0) throw new ao("Unauthorized", "Invalid access token received.");
  t.set(pr, { accessToken: j, expiresAt: new Date((/* @__PURE__ */ new Date()).getTime() + (R - 120) * 1e3).getTime() + "", refreshToken: P, idToken: h });
}
__name(VE, "VE");
function cs(t) {
  t.unset(pr), t.unset(Gl);
}
__name(cs, "cs");
async function qE({ locks: t, expiresAt: n, session: o, customerAccountId: i, customerAccountTokenExchangeUrl: s, httpsOrigin: u, debugInfo: c }) {
  if (parseInt(n, 10) - 1e3 < (/* @__PURE__ */ new Date()).getTime()) try {
    t.refresh || (t.refresh = VE({ session: o, customerAccountId: i, customerAccountTokenExchangeUrl: s, httpsOrigin: u, debugInfo: c })), await t.refresh, delete t.refresh;
  } catch (f) {
    throw cs(o), f && f.status !== 401 ? f : new ao("Unauthorized", "Login before querying the Customer Account API.");
  }
}
__name(qE, "qE");
function WE() {
  let t = GE();
  return ey(t);
}
__name(WE, "WE");
async function QE(t) {
  let n = await crypto.subtle.digest({ name: "SHA-256" }, new TextEncoder().encode(t)), o = YE(n);
  return ey(o);
}
__name(QE, "QE");
function GE() {
  let t = new Uint8Array(32);
  return crypto.getRandomValues(t), String.fromCharCode.apply(null, Array.from(t));
}
__name(GE, "GE");
function ey(t) {
  return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
__name(ey, "ey");
function YE(t) {
  let n = new Uint8Array(t), o = Array.from(n);
  return String.fromCharCode(...o);
}
__name(YE, "YE");
function JE() {
  let t = Date.now().toString(), n = Math.random().toString(36).substring(2);
  return t + n;
}
__name(JE, "JE");
async function KE(t, n, o, i, s) {
  let u = n;
  if (!t) throw new ao("Unauthorized", "oAuth access token was not provided during token exchange.");
  let c = new URLSearchParams();
  c.append("grant_type", "urn:ietf:params:oauth:grant-type:token-exchange"), c.append("client_id", u), c.append("audience", BE), c.append("subject_token", t), c.append("subject_token_type", "urn:ietf:params:oauth:token-type:access_token"), c.append("scopes", "https://api.customers.com/auth/customer.graphql");
  let f = { "content-type": "application/x-www-form-urlencoded", "User-Agent": cu, Origin: i };
  (/* @__PURE__ */ new Date()).getTime();
  let C = await (await fetch(o, { method: "POST", headers: f, body: c })).json();
  if (C.error) throw new ao(C.error_description);
  return C.access_token;
}
__name(KE, "KE");
function XE(t) {
  return ZE(t).payload.nonce;
}
__name(XE, "XE");
function ZE(t) {
  let [n, o, i] = t.split("."), s = JSON.parse(atob(n)), u = JSON.parse(atob(o));
  return { header: s, payload: u, signature: i };
}
__name(ZE, "ZE");
function ty() {
  return t_(e_());
}
__name(ty, "ty");
function e_() {
  try {
    return crypto.getRandomValues(new Uint8Array(16));
  } catch {
    return new Uint8Array(16).map(() => Math.random() * 255 | 0);
  }
}
__name(e_, "e_");
function t_(t) {
  return Array.from(t, function(n) {
    return ("0" + (n & 255).toString(16)).slice(-2);
  }).join("");
}
__name(t_, "t_");
function ry(t) {
  if (!t) return;
  let { pathname: n, search: o } = new URL(t), i = n + o, s = new URLSearchParams(o), u = s.get("return_to") || s.get("redirect");
  if (u) {
    if (ny(t, u)) return u;
    console.warn(`Cross-domain redirects are not supported. Tried to redirect from ${i} to ${u}`);
  }
}
__name(ry, "ry");
function ny(t, n) {
  try {
    return new URL(t).origin === new URL(n, t).origin;
  } catch {
    return false;
  }
}
__name(ny, "ny");
function Pm({ requestUrl: t, defaultUrl: n, redirectUrl: o }) {
  let i = t, s = jm(t, n), u = o ? jm(t, o) : s;
  return ny(t, u.toString()) ? u.toString() : (console.warn(`Cross-domain redirects are not supported. Tried to redirect from ${i} to ${u}. Default url ${s} is used instead.`), s.toString());
}
__name(Pm, "Pm");
function jm(t, n) {
  return r_(n) ? new URL(n) : new URL(n, new URL(t).origin);
}
__name(jm, "jm");
function r_(t) {
  try {
    return new URL(t), true;
  } catch {
    return false;
  }
}
__name(r_, "r_");
function n_(t, n) {
  let o = `https://shopify.com/${n}`, i = `https://shopify.com/authentication/${n}`;
  return function(s) {
    switch (s) {
      case "CA_BASE_URL":
        return o;
      case "CA_BASE_AUTH_URL":
        return i;
      case "GRAPHQL":
        return `${o}/account/customer/api/${t}/graphql`;
      case "AUTH":
        return `${i}/oauth/authorize`;
      case "LOGIN_SCOPE":
        return n ? "openid email customer-account-api:full" : "openid email https://api.customers.com/auth/customer.graphql";
      case "TOKEN_EXCHANGE":
        return `${i}/oauth/token`;
      case "LOGOUT":
        return `${i}/logout`;
    }
  };
}
__name(n_, "n_");
function o_(t, n) {
  if (!t.url) return n;
  let { pathname: o } = new URL(t.url), i = o.replace(/\.data$/, "").replace(/\/_root$/, "/").replace(/(.+)\/$/, "$1"), s = n + `?${new URLSearchParams({ return_to: i }).toString()}`;
  return Yl(s);
}
__name(o_, "o_");
function a_({ session: t, customerAccountId: n, shopId: o, customerApiVersion: i = ud, request: s, waitUntil: u, authUrl: c, customAuthStatusHandler: f, logErrors: h = true, loginPath: v = "/account/login", authorizePath: C = "/account/authorize", defaultRedirectPath: S = "/account", language: j }) {
  if (i !== ud && console.warn(`[h2:warn:createCustomerAccountClient] You are using Customer Account API version ${i} when this version of Hydrogen was built for ${ud}.`), t || console.warn("[h2:warn:createCustomerAccountClient] session is required to use Customer Account API. Ensure the session object passed in exist."), !(s != null && s.url)) throw new Error("[h2:error:createCustomerAccountClient] The request object does not contain a URL.");
  let R = f || (() => o_(s, v)), P = new URL(s.url), I = P.protocol === "http:" ? P.origin.replace("http", "https") : P.origin, L = Pm({ requestUrl: I, defaultUrl: C, redirectUrl: c }), U = n_(i, o), q = i_(U, n), Y = U("GRAPHQL"), G = {};
  async function ye({ query: fe, type: _e, variables: Re = {} }) {
    let De = await ce();
    if (!De) throw R();
    (/* @__PURE__ */ new Date()).getTime();
    let Oe = await fetch(Y, { method: "POST", headers: { "Content-Type": "application/json", "User-Agent": cu, Origin: I, Authorization: De }, body: JSON.stringify({ query: fe, variables: Re }) }), ne = await Oe.text(), ue = { url: Y, response: Oe, type: _e, query: fe, queryVariables: Re, errors: void 0, client: "customer" };
    if (!Oe.ok) {
      if (Oe.status === 401) throw cs(t), R();
      let oe;
      try {
        oe = ws(ne);
      } catch {
        oe = [{ message: ne }];
      }
      Cd({ ...ue, errors: oe });
    }
    try {
      let oe = ws(ne), { errors: b } = oe, Z = b == null ? void 0 : b.map(({ message: Ce, ...ke }) => new Xd(Ce, { ...ke, clientOperation: `customerAccount.${ue.type}`, requestId: Oe.headers.get("x-request-id"), queryVariables: Re, query: fe }));
      return { ...oe, ...b && { errors: Z } };
    } catch {
      Cd({ ...ue, errors: [{ message: ne }] });
    }
  }
  __name(ye, "ye");
  async function Q() {
    if (!o) return false;
    let fe = t.get(pr), _e = fe == null ? void 0 : fe.accessToken, Re = fe == null ? void 0 : fe.expiresAt;
    if (!_e || !Re) return false;
    let De = to == null ? void 0 : to();
    try {
      await qE({ locks: G, expiresAt: Re, session: t, customerAccountId: n, customerAccountTokenExchangeUrl: U("TOKEN_EXCHANGE"), httpsOrigin: I, debugInfo: { waitUntil: u, stackInfo: De, ...vm(s) } });
    } catch {
      return false;
    }
    return true;
  }
  __name(Q, "Q");
  async function J() {
    if (!await Q()) throw R();
  }
  __name(J, "J");
  async function ce() {
    var fe;
    if (await Q()) return (fe = t.get(pr)) == null ? void 0 : fe.accessToken;
  }
  __name(ce, "ce");
  async function ve(fe, _e) {
    return q(), fe = uu(fe), Jg(fe, "customer.mutate"), lu(ye({ query: fe, type: "mutation", ..._e }), { logErrors: h });
  }
  __name(ve, "ve");
  async function $e(fe, _e) {
    return q(), fe = uu(fe), Yg(fe, "customer.query"), lu(ye({ query: fe, type: "query", ..._e }), { logErrors: h });
  }
  __name($e, "$e");
  function Ie(fe) {
    t.set(Gl, { ...t.get(Gl), ...fe });
  }
  __name(Ie, "Ie");
  async function Ae() {
    let fe = await ce();
    if (fe) return { ...t.get(Gl), customerAccessToken: fe };
  }
  __name(Ae, "Ae");
  return { login: /* @__PURE__ */ __name(async (fe) => {
    q();
    let _e = new URL(U("AUTH")), Re = JE(), De = ty();
    _e.searchParams.set("client_id", n), _e.searchParams.set("scope", "openid email"), _e.searchParams.append("response_type", "code"), _e.searchParams.append("redirect_uri", L), _e.searchParams.set("scope", U("LOGIN_SCOPE")), _e.searchParams.append("state", Re), _e.searchParams.append("nonce", De);
    let Oe = s_({ contextLanguage: j ?? null, uiLocalesOverride: (fe == null ? void 0 : fe.uiLocales) ?? null });
    Oe != null && _e.searchParams.append("ui_locales", Oe);
    let ne = WE(), ue = await QE(ne);
    return t.set(pr, { ...t.get(pr), codeVerifier: ne, state: Re, nonce: De, redirectPath: ry(s.url) || Pa(s, "Referer") || S }), _e.searchParams.append("code_challenge", ue), _e.searchParams.append("code_challenge_method", "S256"), Yl(_e.toString());
  }, "login"), logout: /* @__PURE__ */ __name(async (fe) => {
    var Oe;
    q();
    let _e = (Oe = t.get(pr)) == null ? void 0 : Oe.idToken, Re = Pm({ requestUrl: I, defaultUrl: I, redirectUrl: fe == null ? void 0 : fe.postLogoutRedirectUri }), De = _e ? new URL(`${U("LOGOUT")}?${new URLSearchParams([["id_token_hint", _e], ["post_logout_redirect_uri", Re]]).toString()}`).toString() : Re;
    return cs(t), Yl(De, { headers: (fe == null ? void 0 : fe.headers) || {} });
  }, "logout"), isLoggedIn: Q, handleAuthStatus: J, getAccessToken: ce, getApiUrl: /* @__PURE__ */ __name(() => Y, "getApiUrl"), mutate: ve, query: $e, authorize: /* @__PURE__ */ __name(async () => {
    var Ue, Je, ht, $r;
    q();
    let fe = P.searchParams.get("code"), _e = P.searchParams.get("state");
    if (!fe || !_e) throw cs(t), new ao("Unauthorized", "No code or state parameter found in the redirect URL.");
    if (((Ue = t.get(pr)) == null ? void 0 : Ue.state) !== _e) throw cs(t), new ao("Unauthorized", "The session state does not match the state parameter. Make sure that the session is configured correctly and passed to `createCustomerAccountClient`.");
    let Re = n, De = new URLSearchParams();
    De.append("grant_type", "authorization_code"), De.append("client_id", Re), De.append("redirect_uri", L), De.append("code", fe);
    let Oe = (Je = t.get(pr)) == null ? void 0 : Je.codeVerifier;
    if (!Oe) throw new ao("Unauthorized", "No code verifier found in the session. Make sure that the session is configured correctly and passed to `createCustomerAccountClient`.");
    De.append("code_verifier", Oe);
    let ne = { "content-type": "application/x-www-form-urlencoded", "User-Agent": cu, Origin: I };
    (/* @__PURE__ */ new Date()).getTime();
    let ue = U("TOKEN_EXCHANGE"), oe = await fetch(ue, { method: "POST", headers: ne, body: De });
    if (!oe.ok) throw new Response(await oe.text(), { status: oe.status, headers: { "Content-Type": "text/html; charset=utf-8" } });
    let { access_token: b, expires_in: Z, id_token: Ce, refresh_token: ke } = await oe.json(), be = (ht = t.get(pr)) == null ? void 0 : ht.nonce, Ne = await XE(Ce);
    if (be !== Ne) throw new ao("Unauthorized", `Returned nonce does not match: ${be} !== ${Ne}`);
    let He = b;
    o || (He = await KE(b, n, U("TOKEN_EXCHANGE"), I, { ...vm(s) }));
    let Fe = ($r = t.get(pr)) == null ? void 0 : $r.redirectPath;
    return t.set(pr, { accessToken: He, expiresAt: new Date((/* @__PURE__ */ new Date()).getTime() + (Z - 120) * 1e3).getTime() + "", refreshToken: ke, idToken: Ce }), Yl(Fe || S);
  }, "authorize"), setBuyer: Ie, getBuyer: Ae, UNSTABLE_setBuyer: /* @__PURE__ */ __name((fe) => {
    su("[h2:warn:customerAccount] `customerAccount.UNSTABLE_setBuyer` is deprecated. Please use `customerAccount.setBuyer`."), Ie(fe);
  }, "UNSTABLE_setBuyer"), UNSTABLE_getBuyer: /* @__PURE__ */ __name(() => (su("[h2:warn:customerAccount] `customerAccount.UNSTABLE_getBuyer` is deprecated. Please use `customerAccount.getBuyer`."), Ae()), "UNSTABLE_getBuyer") };
}
__name(a_, "a_");
function i_(t, n) {
  return function() {
    try {
      if (!n) throw Error();
      new URL(t("CA_BASE_URL")), new URL(t("CA_BASE_AUTH_URL"));
    } catch {
      console.error(new Error("[h2:error:customerAccount] You do not have the valid credential to use Customer Account API.\nRun `h2 env pull` to link your store credentials."));
      let o = "Internal Server Error";
      throw new Response(o, { status: 500 });
    }
  };
}
__name(i_, "i_");
function s_(t) {
  let n = Rm(t.contextLanguage ?? null);
  return Rm(t.uiLocalesOverride) ?? n ?? null;
}
__name(s_, "s_");
function Rm(t) {
  if (t == null) return null;
  let n = u_(t).toLowerCase().replaceAll("_", "-").split("-"), o = n.at(0) ?? null, i = n.at(1) ?? null;
  return i ? `${o}-${i.toUpperCase()}` : o;
}
__name(Rm, "Rm");
var l_ = { PT: "PT_PT", ZH: "ZH_CN" };
function u_(t) {
  return l_[t] ?? t;
}
__name(u_, "u_");
function c_(t) {
  let { env: n, request: o, cache: i, waitUntil: s, i18n: u, session: c, logErrors: f, storefront: h = {}, customerAccount: v, cart: C = {} } = t;
  c || console.warn("[h2:warn:createHydrogenContext] A session object is required to create hydrogen context."), v != null && v.unstableB2b && su("[h2:warn:createHydrogenContext] `customerAccount.unstableB2b` is now stable. Please remove the `unstableB2b` option.");
  let { storefront: S } = pE({ cache: i, waitUntil: s, i18n: u, logErrors: f, storefrontHeaders: h.headers || d_(o), storefrontApiVersion: h.apiVersion, storefrontId: n.PUBLIC_STOREFRONT_ID, storeDomain: n.PUBLIC_STORE_DOMAIN, privateStorefrontToken: n.PRIVATE_STOREFRONT_API_TOKEN, publicStorefrontToken: n.PUBLIC_STOREFRONT_API_TOKEN }), j = a_({ session: c, request: o, waitUntil: s, logErrors: f, customerApiVersion: v == null ? void 0 : v.apiVersion, authUrl: v == null ? void 0 : v.authUrl, customAuthStatusHandler: v == null ? void 0 : v.customAuthStatusHandler, language: u == null ? void 0 : u.language, customerAccountId: n.PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID, shopId: n.SHOP_ID }), R = HE({ getCartId: C.getId || sE(o.headers), setCartId: C.setId || lE(), cartQueryFragment: C.queryFragment, cartMutateFragment: C.mutateFragment, customMethods: C.customMethods, storefront: S, customerAccount: j });
  return { storefront: S, customerAccount: j, cart: R, env: n, waitUntil: s, session: c };
}
__name(c_, "c_");
function d_(t) {
  return { requestGroupId: Pa(t, "request-id"), buyerIp: Pa(t, "oxygen-buyer-ip"), cookie: Pa(t, "cookie"), purpose: Pa(t, "purpose") };
}
__name(d_, "d_");
var oy = $.createContext(void 0);
var f_ = oy.Provider;
var ay = /* @__PURE__ */ __name(() => $.useContext(oy), "ay");
function p_(t) {
  let n = ty(), o = h_(n, t);
  return { nonce: n, header: o, NonceProvider: /* @__PURE__ */ __name(({ children: i }) => $.createElement(f_, { value: n }, i), "NonceProvider") };
}
__name(p_, "p_");
function h_(t, n) {
  let { shop: o, ...i } = n ?? {}, s = `'nonce-${t}'`, u = ["'self'", "'unsafe-inline'", "https://cdn.shopify.com"], c = ["'self'", "https://monorail-edge.shopifysvc.com"];
  o && o.checkoutDomain && c.push(`https://${o.checkoutDomain}`), o && o.storeDomain && c.push(`https://${o.storeDomain}`);
  let f = { baseUri: ["'self'"], defaultSrc: ["'self'", s, "https://cdn.shopify.com", "https://shopify.com"], frameAncestors: ["'none'"], styleSrc: u, connectSrc: c }, h = Object.assign({}, f, i);
  for (let v in f) {
    let C = i[v];
    v && C && (h[v] = m_(C, f[v]));
  }
  return h.scriptSrc instanceof Array ? h.scriptSrc = [...h.scriptSrc.filter((v) => !v.startsWith("'nonce")), s] : h.defaultSrc instanceof Array && (h.defaultSrc = [...h.defaultSrc.filter((v) => !v.startsWith("'nonce")), s]), mC({ directives: h });
}
__name(h_, "h_");
function m_(t, n) {
  let o = typeof n == "string" ? [n] : n, i = Array.isArray(t) ? t : [String(t)];
  return Array.isArray(o) ? o.every((s) => s === "'none'") ? i : [...i, ...o] : o;
}
__name(m_, "m_");
$.forwardRef((t, n) => {
  let { waitForHydration: o, src: i, ...s } = t, u = ay();
  return o ? y.jsx(g_, { src: i, options: s }) : y.jsx("script", { suppressHydrationWarning: true, ...s, src: i, nonce: u, ref: n });
});
function g_({ src: t, options: n }) {
  if (!t) throw new Error("`waitForHydration` with the Script component requires a `src` prop");
  return Wd(t, { attributes: n }), null;
}
__name(g_, "g_");
function iy({ connection: t, children: n = /* @__PURE__ */ __name(() => (console.warn("<Pagination> requires children to work properly"), null), "n"), namespace: o = "" }) {
  let [i, s] = $.useState(false), u = Ei(), c = tr();
  Es(), $.useEffect(() => {
    u.state === "idle" && s(false);
  }, [u.state]);
  let { endCursor: f, hasNextPage: h, hasPreviousPage: v, nextPageUrl: C, nodes: S, previousPageUrl: j, startCursor: R } = y_(t, o), P = $.useMemo(() => {
    var U;
    return { ...c.state, pagination: { ...((U = c.state) == null ? void 0 : U.pagination) || {}, [o]: { pageInfo: { endCursor: f, hasPreviousPage: v, hasNextPage: h, startCursor: R }, nodes: S } } };
  }, [f, h, v, R, S, o, c.state]), I = $.useMemo(() => $.forwardRef(function(U, q) {
    return h ? $.createElement(Xe, { preventScrollReset: true, ...U, to: C, state: P, replace: true, ref: q, onClick: /* @__PURE__ */ __name(() => s(true), "onClick") }) : null;
  }), [h, C, P]), L = $.useMemo(() => $.forwardRef(function(U, q) {
    return v ? $.createElement(Xe, { preventScrollReset: true, ...U, to: j, state: P, replace: true, ref: q, onClick: /* @__PURE__ */ __name(() => s(true), "onClick") }) : null;
  }), [v, j, P]);
  return n({ state: P, hasNextPage: h, hasPreviousPage: v, isLoading: i, nextPageUrl: C, nodes: S, previousPageUrl: j, NextLink: I, PreviousLink: L });
}
__name(iy, "iy");
function Ml(t, n) {
  let o = new URLSearchParams(t);
  return Object.keys((n == null ? void 0 : n.pagination) || {}).forEach((i) => {
    let s = i === "" ? "" : `${i}_`, u = `${s}cursor`, c = `${s}direction`;
    o.delete(u), o.delete(c);
  }), o.toString();
}
__name(Ml, "Ml");
function ls(t) {
  throw new Error(`The Pagination component requires ${"`" + t + "`"} to be a part of your query. See the guide on how to setup your query to include ${"`" + t + "`"}: https://shopify.dev/docs/custom-storefronts/hydrogen/data-fetching/pagination#setup-the-paginated-query`);
}
__name(ls, "ls");
function y_(t, n = "") {
  t.pageInfo || ls("pageInfo"), typeof t.pageInfo.startCursor > "u" && ls("pageInfo.startCursor"), typeof t.pageInfo.endCursor > "u" && ls("pageInfo.endCursor"), typeof t.pageInfo.hasNextPage > "u" && ls("pageInfo.hasNextPage"), typeof t.pageInfo.hasPreviousPage > "u" && ls("pageInfo.hasPreviousPage");
  let o = Ei(), i = Es(), { state: s, search: u, pathname: c } = tr(), f = n ? `${n}_cursor` : "cursor", h = n ? `${n}_direction` : "direction", v = new URLSearchParams(u).get(h) === "previous", C = $.useMemo(() => {
    var I, L, U;
    return !((I = globalThis == null ? void 0 : globalThis.window) != null && I.__hydrogenHydrated) || !((U = (L = s == null ? void 0 : s.pagination) == null ? void 0 : L[n]) != null && U.nodes) ? so(t) : v ? [...so(t), ...s.pagination[n].nodes || []] : [...s.pagination[n].nodes || [], ...so(t)];
  }, [s, t, n]), S = $.useMemo(() => {
    var ye, Q, J, ce, ve;
    let I = (ye = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : ye.__hydrogenHydrated, L = (J = (Q = s == null ? void 0 : s.pagination) == null ? void 0 : Q[n]) == null ? void 0 : J.pageInfo, U = !I || (L == null ? void 0 : L.startCursor) === void 0 ? t.pageInfo.startCursor : L.startCursor, q = !I || (L == null ? void 0 : L.endCursor) === void 0 ? t.pageInfo.endCursor : L.endCursor, Y = !I || (L == null ? void 0 : L.hasPreviousPage) === void 0 ? t.pageInfo.hasPreviousPage : L.hasPreviousPage, G = !I || (L == null ? void 0 : L.hasNextPage) === void 0 ? t.pageInfo.hasNextPage : L.hasNextPage;
    return (ve = (ce = s == null ? void 0 : s.pagination) == null ? void 0 : ce[n]) != null && ve.nodes && (v ? (U = t.pageInfo.startCursor, Y = t.pageInfo.hasPreviousPage) : (q = t.pageInfo.endCursor, G = t.pageInfo.hasNextPage)), { startCursor: U, endCursor: q, hasPreviousPage: Y, hasNextPage: G };
  }, [v, s, n, t.pageInfo.hasNextPage, t.pageInfo.hasPreviousPage, t.pageInfo.startCursor, t.pageInfo.endCursor]), j = $.useRef({ params: Ml(u, s), pathname: c });
  $.useEffect(() => {
    window.__hydrogenHydrated = true;
  }, []), $.useEffect(() => {
    let I = Ml(u, s), L = j.current.params;
    (c !== j.current.pathname || I !== L) && !(o.state === "idle" && !o.location) && (j.current = { pathname: c, params: Ml(u, s) }, i(`${c}?${Ml(u, s)}`, { replace: true, preventScrollReset: true, state: { nodes: void 0, pageInfo: void 0 } }));
  }, [c, u, s]);
  let R = $.useMemo(() => {
    let I = new URLSearchParams(u);
    return I.set(h, "previous"), S.startCursor && I.set(f, S.startCursor), `?${I.toString()}`;
  }, [u, S.startCursor]), P = $.useMemo(() => {
    let I = new URLSearchParams(u);
    return I.set(h, "next"), S.endCursor && I.set(f, S.endCursor), `?${I.toString()}`;
  }, [u, S.endCursor]);
  return { ...S, previousPageUrl: R, nextPageUrl: P, nodes: C };
}
__name(y_, "y_");
function $a(t, n = { pageBy: 20 }) {
  if (typeof (t == null ? void 0 : t.url) > "u") throw new Error("getPaginationVariables must be called with the Request object passed to your loader function");
  let { pageBy: o, namespace: i = "" } = n, s = new URLSearchParams(new URL(t.url).search), u = i ? `${i}_cursor` : "cursor", c = i ? `${i}_direction` : "direction", f = s.get(u) ?? void 0;
  return (s.get(c) === "previous" ? "previous" : "next") == "previous" ? { last: o, startCursor: f ?? null } : { first: o, endCursor: f ?? null };
}
__name($a, "$a");
function v_(t, n) {
  let o = Ei(), [i, s] = $.useState([]);
  if ($.useEffect(() => {
    Promise.resolve(n).then((u) => {
      var c, f;
      u && s(u instanceof Array ? u : ((f = (c = u.product) == null ? void 0 : c.variants) == null ? void 0 : f.nodes) || []);
    }).catch((u) => {
      reportError(new Error("[h2:error:useOptimisticVariant] An error occurred while resolving the variants for the optimistic product hook.", { cause: u }));
    });
  }, [JSON.stringify(n)]), o.state === "loading") {
    let u = new URLSearchParams(o.location.search), c = false, f = i.find((h) => h.selectedOptions ? h.selectedOptions.every((v) => u.get(v.name) === v.value) : (c || (c = true, reportError(new Error("[h2:error:useOptimisticVariant] The optimistic product hook requires your product query to include variants with the selectedOptions field."))), false));
    if (f) return { ...f, isOptimistic: true };
  }
  return t;
}
__name(v_, "v_");
var w_ = /* @__PURE__ */ __name((t) => {
  if (typeof (t == null ? void 0 : t.url) > "u") throw new TypeError(`Expected a Request instance, got ${typeof t}`);
  let n = new URL(t.url).searchParams, o = [];
  return n.forEach((i, s) => {
    o.push({ name: s, value: i });
  }), o;
}, "w_");
async function x_(t) {
  var S, j, R;
  let { storefront: n, request: o, noAdminRedirect: i, matchQueryParams: s, response: u = new Response("Not Found", { status: 404 }) } = t, c = new URL(o.url), { pathname: f, searchParams: h } = c, v = h.has("_data");
  h.delete("redirect"), h.delete("return_to"), h.delete("_data");
  let C = (s ? c.toString().replace(c.origin, "") : f).toLowerCase();
  if (c.pathname === "/admin" && !i) return dd(`${n.getShopifyDomain()}/admin`, v, h, s);
  try {
    let { urlRedirects: P } = await n.query(S_, { variables: { query: "path:" + C.replace(/\/+$/, "") } }), I = (R = (j = (S = P == null ? void 0 : P.edges) == null ? void 0 : S[0]) == null ? void 0 : j.node) == null ? void 0 : R.target;
    if (I) return dd(I, v, h, s);
    let L = ry(o.url);
    if (L) return dd(L, v, h, s);
  } catch (P) {
    console.error(`Failed to fetch redirects from Storefront API for route ${C}`, P);
  }
  return u;
}
__name(x_, "x_");
var cd = "https://example.com";
function dd(t, n, o, i) {
  let s = new URL(t, cd);
  if (!i) for (let [u, c] of o) s.searchParams.append(u, c);
  return n ? new Response(null, { status: 200, headers: { "X-Remix-Redirect": s.toString().replace(cd, ""), "X-Remix-Status": "301" } }) : new Response(null, { status: 301, headers: { location: s.toString().replace(cd, "") } });
}
__name(dd, "dd");
var S_ = `#graphql
  query redirects($query: String) {
    urlRedirects(first: 1, query: $query) {
      edges {
        node {
          target
        }
      }
    }
  }
`;
$.lazy(() => Promise.resolve().then(() => SR));
var C_ = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;
var E_ = `
</sitemapindex>`;
var $m = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`;
var Im = "</urlset>";
async function __(t) {
  let { storefront: n, request: o, types: i = ["products", "pages", "collections", "metaObjects", "articles", "blogs"], customChildSitemaps: s = [] } = t;
  if (!o || !o.url) throw new Error("A request object is required to generate a sitemap index");
  if (!n || !n.query) throw new Error("A storefront client is required to generate a sitemap index");
  let u = await n.query(D_);
  if (!u) throw console.warn("[h2:sitemap:warning] Sitemap index is available in API version 2024-10 and later"), new Response("Sitemap index not found.", { status: 404 });
  let c = new URL(o.url).origin, f = C_ + i.map((h) => {
    if (!u[h]) throw new Error(`[h2:sitemap:error] No data found for type ${h}. Check types passed to \`getSitemapIndex\``);
    return P_(h, u[h].pagesCount.count, c);
  }).join(`
`) + s.map((h) => "  <sitemap><loc>" + (c + (h.startsWith("/") ? h : "/" + h)) + "</loc></sitemap>").join(`
`) + E_;
  return new Response(f, { headers: { "Content-Type": "application/xml", "Cache-Control": `max-age=${60 * 60 * 24}` } });
}
__name(__, "__");
async function k_(t) {
  var R, P, I;
  let { storefront: n, request: o, params: i, getLink: s, locales: u = [], getChangeFreq: c, noItemsFallback: f = "/" } = t;
  if (!i) throw new Error("[h2:sitemap:error] Remix params object is required to generate a sitemap");
  if (!o || !o.url) throw new Error("A request object is required to generate a sitemap");
  if (!n || !n.query) throw new Error("A storefront client is required to generate a index");
  if (!s) throw new Error("A `getLink` function to generate each resource is required to build a sitemap");
  if (!i.type || !i.page) throw new Response("No data found", { status: 404 });
  let h = i.type, v = N_[h];
  if (!v) throw new Response("Not found", { status: 404 });
  let C = await n.query(v, { variables: { page: parseInt(i.page, 10) } });
  if (!C) throw console.warn("[h2:sitemap:warning] Sitemap is available in API version 2024-10 and later"), new Response("Sitemap not found.", { status: 404 });
  let S = new URL(o.url).origin, j = "";
  return (I = (P = (R = C == null ? void 0 : C.sitemap) == null ? void 0 : R.resources) == null ? void 0 : P.items) != null && I.length ? j = $m + C.sitemap.resources.items.map((L) => j_({ getChangeFreq: c, url: s({ type: L.type ?? h, baseUrl: S, handle: L.handle }), type: h, getLink: s, updatedAt: L.updatedAt, handle: L.handle, metaobjectType: L.type, locales: u, baseUrl: S })).join(`
`) + Im : j = $m + `
  <url><loc>${S + f}</loc></url>
` + Im, new Response(j, { headers: { "Content-Type": "application/xml", "Cache-Control": `max-age=${60 * 60 * 24}` } });
}
__name(k_, "k_");
function P_(t, n, o) {
  let i = "";
  for (let s = 1; s <= n; s++) i += `  <sitemap><loc>${o}/sitemap/${t}/${s}.xml</loc></sitemap>
`;
  return i;
}
__name(P_, "P_");
function j_({ url: t, updatedAt: n, locales: o, type: i, getLink: s, baseUrl: u, handle: c, getChangeFreq: f, metaobjectType: h }) {
  return `<url>
  <loc>${t}</loc>
  <lastmod>${n}</lastmod>
  <changefreq>${f ? f({ type: h ?? i, handle: c }) : "weekly"}</changefreq>
${o.map((v) => R_(s({ type: h ?? i, baseUrl: u, handle: c, locale: v }), v)).join(`
`)}
</url>
  `.trim();
}
__name(j_, "j_");
function R_(t, n) {
  return `  <xhtml:link rel="alternate" hreflang="${n}" href="${t}" />`;
}
__name(R_, "R_");
var $_ = `#graphql
    query SitemapProducts($page: Int!) {
      sitemap(type: PRODUCT) {
        resources(page: $page) {
          items {
            handle
            updatedAt
          }
        }
      }
    }
`;
var I_ = `#graphql
    query SitemapCollections($page: Int!) {
      sitemap(type: COLLECTION) {
        resources(page: $page) {
          items {
            handle
            updatedAt
          }
        }
      }
    }
`;
var T_ = `#graphql
    query SitemapArticles($page: Int!) {
      sitemap(type: ARTICLE) {
        resources(page: $page) {
          items {
            handle
            updatedAt
          }
        }
      }
    }
`;
var A_ = `#graphql
    query SitemapPages($page: Int!) {
      sitemap(type: PAGE) {
        resources(page: $page) {
          items {
            handle
            updatedAt
          }
        }
      }
    }
`;
var O_ = `#graphql
    query SitemapBlogs($page: Int!) {
      sitemap(type: BLOG) {
        resources(page: $page) {
          items {
            handle
            updatedAt
          }
        }
      }
    }
`;
var L_ = `#graphql
    query SitemapMetaobjects($page: Int!) {
      sitemap(type: METAOBJECT) {
        resources(page: $page) {
          items {
            handle
            updatedAt
            ... on SitemapResourceMetaobject {
              type
            }
          }
        }
      }
    }
`;
var D_ = `#graphql
query SitemapIndex {
  products: sitemap(type: PRODUCT) {
    pagesCount {
      count
    }
  }
  collections: sitemap(type: COLLECTION) {
    pagesCount {
      count
    }
  }
  articles: sitemap(type: ARTICLE) {
    pagesCount {
      count
    }
  }
  pages: sitemap(type: PAGE) {
    pagesCount {
      count
    }
  }
  blogs: sitemap(type: BLOG) {
    pagesCount {
      count
    }
  }
  metaObjects: sitemap(type: METAOBJECT) {
    pagesCount {
      count
    }
  }
}
`;
var N_ = { products: $_, articles: T_, collections: I_, pages: A_, blogs: O_, metaObjects: L_ };
async function b_(t, n, o, i, s) {
  const { nonce: u, header: c, NonceProvider: f } = p_({ shop: { checkoutDomain: s.env.PUBLIC_CHECKOUT_DOMAIN, storeDomain: s.env.PUBLIC_STORE_DOMAIN } }), h = await yS.renderToReadableStream(y.jsx(f, { children: y.jsx(uS, { context: i, url: t.url, nonce: u }) }), { nonce: u, signal: t.signal, onError(v) {
    console.error(v), n = 500;
  } });
  return pS(t.headers.get("user-agent")) && await h.allReady, o.set("Content-Type", "text/html"), o.set("Content-Security-Policy", c), new Response(h, { headers: o, status: n });
}
__name(b_, "b_");
var U_ = Object.freeze(Object.defineProperty({ __proto__: null, default: b_ }, Symbol.toStringTag, { value: "Module" }));
var M_ = "/assets/favicon-DZkC1E9c.svg";
var F_ = `#graphql
  fragment Money on MoneyV2 {
    currencyCode
    amount
  }
  fragment CartLine on CartLine {
    id
    quantity
    attributes {
      key
      value
    }
    cost {
      totalAmount {
        ...Money
      }
      amountPerQuantity {
        ...Money
      }
      compareAtAmountPerQuantity {
        ...Money
      }
    }
    merchandise {
      ... on ProductVariant {
        id
        availableForSale
        compareAtPrice {
          ...Money
        }
        price {
          ...Money
        }
        requiresShipping
        title
        image {
          id
          url
          altText
          width
          height

        }
        product {
          handle
          title
          id
          vendor
        }
        selectedOptions {
          name
          value
        }
      }
    }
  }
  fragment CartLineComponent on ComponentizableCartLine {
    id
    quantity
    attributes {
      key
      value
    }
    cost {
      totalAmount {
        ...Money
      }
      amountPerQuantity {
        ...Money
      }
      compareAtAmountPerQuantity {
        ...Money
      }
    }
    merchandise {
      ... on ProductVariant {
        id
        availableForSale
        compareAtPrice {
          ...Money
        }
        price {
          ...Money
        }
        requiresShipping
        title
        image {
          id
          url
          altText
          width
          height
        }
        product {
          handle
          title
          id
          vendor
        }
        selectedOptions {
          name
          value
        }
      }
    }
  }
  fragment CartApiQuery on Cart {
    updatedAt
    id
    appliedGiftCards {
      lastCharacters
      amountUsed {
        ...Money
      }
    }
    checkoutUrl
    totalQuantity
    buyerIdentity {
      countryCode
      customer {
        id
        email
        firstName
        lastName
        displayName
      }
      email
      phone
    }
    lines(first: $numCartLines) {
      nodes {
        ...CartLine
      }
      nodes {
        ...CartLineComponent
      }
    }
    cost {
      subtotalAmount {
        ...Money
      }
      totalAmount {
        ...Money
      }
      totalDutyAmount {
        ...Money
      }
      totalTaxAmount {
        ...Money
      }
    }
    note
    attributes {
      key
      value
    }
    discountCodes {
      code
      applicable
    }
  }
`;
var sy = `#graphql
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
  fragment ChildMenuItem on MenuItem {
    ...MenuItem
  }
  fragment ParentMenuItem on MenuItem {
    ...MenuItem
    items {
      ...ChildMenuItem
    }
  }
  fragment Menu on Menu {
    id
    items {
      ...ParentMenuItem
    }
  }
`;
var z_ = `#graphql
  fragment Shop on Shop {
    id
    name
    description
    primaryDomain {
      url
    }
    brand {
      logo {
        image {
          url
        }
      }
    }
  }
  query Header(
    $country: CountryCode
    $headerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    shop {
      ...Shop
    }
    menu(handle: $headerMenuHandle) {
      ...Menu
    }
  }
  ${sy}
`;
var H_ = `#graphql
  query Footer(
    $country: CountryCode
    $footerMenuHandle: String!
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    menu(handle: $footerMenuHandle) {
      ...Menu
    }
  }
  ${sy}
`;
var B_ = /* @__PURE__ */ __name(({ formMethod: t, currentUrl: n, nextUrl: o }) => !!(t && t !== "GET" || n.toString() === o.toString()), "B_");
function V_() {
  return [{ rel: "preconnect", href: "https://cdn.shopify.com" }, { rel: "preconnect", href: "https://shop.app" }, { rel: "icon", type: "image/svg+xml", href: M_ }];
}
__name(V_, "V_");
async function q_(t) {
  const n = Q_(t), o = await W_(t), { storefront: i, env: s } = t.context;
  return { ...n, ...o, publicStoreDomain: s.PUBLIC_STORE_DOMAIN, shop: FC({ storefront: i, publicStorefrontId: s.PUBLIC_STOREFRONT_ID }), consent: { checkoutDomain: s.PUBLIC_CHECKOUT_DOMAIN, storefrontAccessToken: s.PUBLIC_STOREFRONT_API_TOKEN, withPrivacyBanner: false, country: t.context.storefront.i18n.country, language: t.context.storefront.i18n.language } };
}
__name(q_, "q_");
async function W_({ context: t }) {
  const { storefront: n } = t, [o] = await Promise.all([n.query(z_, { cache: n.CacheLong(), variables: { headerMenuHandle: "main-menu" } })]);
  return { header: o };
}
__name(W_, "W_");
function Q_({ context: t }) {
  const { storefront: n, customerAccount: o, cart: i } = t, s = n.query(H_, { cache: n.CacheLong(), variables: { footerMenuHandle: "footer" } }).catch((u) => (console.error(u), null));
  return { cart: i.get(), isLoggedIn: o.isLoggedIn(), footer: s };
}
__name(Q_, "Q_");
function G_() {
  return y.jsx(eu, {});
}
__name(G_, "G_");
function Y_() {
  var i;
  const t = Ad();
  let n = "Unknown error", o = 500;
  return Ot(t) ? (n = ((i = t == null ? void 0 : t.data) == null ? void 0 : i.message) ?? t.data, o = t.status) : t instanceof Error && (n = t.message), y.jsxs("div", { className: "route-error", children: [y.jsx("h1", { children: "Oops" }), y.jsx("h2", { children: o }), n && y.jsx("fieldset", { children: y.jsx("pre", { children: n }) })] });
}
__name(Y_, "Y_");
var J_ = Object.freeze(Object.defineProperty({ __proto__: null, ErrorBoundary: Y_, default: G_, links: V_, loader: q_, shouldRevalidate: B_ }, Symbol.toStringTag, { value: "Module" }));
var K_ = "/assets/reset-BKioPaen.css";
var X_ = "/assets/app-CFDV3s0Q.css";
var Z_ = "/assets/tailwind-909-BPVJ.css";
function As({ children: t, heading: n, type: o }) {
  const { type: i, close: s } = In(), u = o === i;
  return $.useEffect(() => {
    const c = new AbortController();
    return u && document.addEventListener("keydown", function(h) {
      h.key === "Escape" && s();
    }, { signal: c.signal }), () => c.abort();
  }, [s, u]), y.jsxs("div", { "aria-modal": true, className: `overlay ${u ? "expanded" : ""}`, role: "dialog", children: [y.jsx("button", { className: "close-outside", onClick: s }), y.jsxs("aside", { children: [y.jsxs("header", { children: [y.jsx("h3", { children: n }), y.jsx("button", { className: "close reset", onClick: s, "aria-label": "Close", children: "\xD7" })] }), y.jsx("main", { children: t })] })] });
}
__name(As, "As");
var ly = $.createContext(null);
As.Provider = function({ children: n }) {
  const [o, i] = $.useState("closed");
  return y.jsx(ly.Provider, { value: { type: o, open: i, close: /* @__PURE__ */ __name(() => i("closed"), "close") }, children: n });
};
function In() {
  const t = $.useContext(ly);
  if (!t) throw new Error("useAside must be used within an AsideProvider");
  return t;
}
__name(In, "In");
function ek({ footer: t, header: n, publicStoreDomain: o }) {
  return y.jsx($.Suspense, { children: y.jsx(_i, { resolve: t, children: /* @__PURE__ */ __name((i) => {
    var s;
    return y.jsx("footer", { className: "footer", children: (i == null ? void 0 : i.menu) && ((s = n.shop.primaryDomain) == null ? void 0 : s.url) && y.jsx(tk, { menu: i.menu, primaryDomainUrl: n.shop.primaryDomain.url, publicStoreDomain: o }) });
  }, "children") }) });
}
__name(ek, "ek");
function tk({ menu: t, primaryDomainUrl: n, publicStoreDomain: o }) {
  return y.jsx("nav", { className: "footer-menu", role: "navigation", children: (t || rk).items.map((i) => {
    if (!i.url) return null;
    const s = i.url.includes("myshopify.com") || i.url.includes(o) || i.url.includes(n) ? new URL(i.url).pathname : i.url;
    return !s.startsWith("/") ? y.jsx("a", { href: s, rel: "noopener noreferrer", target: "_blank", children: i.title }, i.id) : y.jsx(io, { end: true, prefetch: "intent", style: nk, to: s, children: i.title }, i.id);
  }) });
}
__name(tk, "tk");
var rk = { items: [{ id: "gid://shopify/MenuItem/461633060920", resourceId: "gid://shopify/ShopPolicy/23358046264", tags: [], title: "Privacy Policy", type: "SHOP_POLICY", url: "/policies/privacy-policy", items: [] }, { id: "gid://shopify/MenuItem/461633093688", resourceId: "gid://shopify/ShopPolicy/23358013496", tags: [], title: "Refund Policy", type: "SHOP_POLICY", url: "/policies/refund-policy", items: [] }, { id: "gid://shopify/MenuItem/461633126456", resourceId: "gid://shopify/ShopPolicy/23358111800", tags: [], title: "Shipping Policy", type: "SHOP_POLICY", url: "/policies/shipping-policy", items: [] }, { id: "gid://shopify/MenuItem/461633159224", resourceId: "gid://shopify/ShopPolicy/23358079032", tags: [], title: "Terms of Service", type: "SHOP_POLICY", url: "/policies/terms-of-service", items: [] }] };
function nk({ isActive: t, isPending: n }) {
  return { fontWeight: t ? "bold" : void 0, color: n ? "grey" : "white" };
}
__name(nk, "nk");
function ok({ header: t, isLoggedIn: n, cart: o, publicStoreDomain: i }) {
  const { shop: s, menu: u } = t;
  return y.jsxs("header", { className: "header", children: [y.jsx(io, { prefetch: "intent", to: "/", style: du, end: true, children: y.jsx("strong", { children: s.name }) }), y.jsx(uy, { menu: u, viewport: "desktop", primaryDomainUrl: t.shop.primaryDomain.url, publicStoreDomain: i }), y.jsx(ak, { isLoggedIn: n, cart: o })] });
}
__name(ok, "ok");
function uy({ menu: t, primaryDomainUrl: n, viewport: o, publicStoreDomain: i }) {
  const s = `header-menu-${o}`, { close: u } = In();
  return y.jsxs("nav", { className: s, role: "navigation", children: [o === "mobile" && y.jsx(io, { end: true, onClick: u, prefetch: "intent", style: du, to: "/", children: "Home" }), (t || ck).items.map((c) => {
    if (!c.url) return null;
    const f = c.url.includes("myshopify.com") || c.url.includes(i) || c.url.includes(n) ? new URL(c.url).pathname : c.url;
    return y.jsx(io, { className: "header-menu-item", end: true, onClick: u, prefetch: "intent", style: du, to: f, children: c.title }, c.id);
  })] });
}
__name(uy, "uy");
function ak({ isLoggedIn: t, cart: n }) {
  return y.jsxs("nav", { className: "header-ctas", role: "navigation", children: [y.jsx(ik, {}), y.jsx(io, { prefetch: "intent", to: "/account", style: du, children: y.jsx($.Suspense, { fallback: "Sign in", children: y.jsx(_i, { resolve: t, errorElement: "Sign in", children: /* @__PURE__ */ __name((o) => o ? "Account" : "Sign in", "children") }) }) }), y.jsx(sk, {}), y.jsx(lk, { cart: n })] });
}
__name(ak, "ak");
function ik() {
  const { open: t } = In();
  return y.jsx("button", { className: "header-menu-mobile-toggle reset", onClick: /* @__PURE__ */ __name(() => t("mobile"), "onClick"), children: y.jsx("h3", { children: "\u2630" }) });
}
__name(ik, "ik");
function sk() {
  const { open: t } = In();
  return y.jsx("button", { className: "reset", onClick: /* @__PURE__ */ __name(() => t("search"), "onClick"), children: "Search" });
}
__name(sk, "sk");
function cy({ count: t }) {
  const { open: n } = In(), { publish: o, shop: i, cart: s, prevCart: u } = Ts();
  return y.jsxs("a", { href: "/cart", onClick: /* @__PURE__ */ __name((c) => {
    c.preventDefault(), n("cart"), o("cart_viewed", { cart: s, prevCart: u, shop: i, url: window.location.href || "" });
  }, "onClick"), children: ["Cart ", t === null ? y.jsx("span", { children: "\xA0" }) : t] });
}
__name(cy, "cy");
function lk({ cart: t }) {
  return y.jsx($.Suspense, { fallback: y.jsx(cy, { count: null }), children: y.jsx(_i, { resolve: t, children: y.jsx(uk, {}) }) });
}
__name(lk, "lk");
function uk() {
  const t = Jm(), n = Zg(t);
  return y.jsx(cy, { count: (n == null ? void 0 : n.totalQuantity) ?? 0 });
}
__name(uk, "uk");
var ck = { items: [{ id: "gid://shopify/MenuItem/461609500728", resourceId: null, tags: [], title: "Collections", type: "HTTP", url: "/collections", items: [] }, { id: "gid://shopify/MenuItem/461609533496", resourceId: null, tags: [], title: "Blog", type: "HTTP", url: "/blogs/journal", items: [] }, { id: "gid://shopify/MenuItem/461609566264", resourceId: null, tags: [], title: "Policies", type: "HTTP", url: "/policies", items: [] }, { id: "gid://shopify/MenuItem/461609599032", resourceId: "gid://shopify/Page/92591030328", tags: [], title: "About", type: "PAGE", url: "/pages/about", items: [] }] };
function du({ isActive: t, isPending: n }) {
  return { fontWeight: t ? "bold" : void 0, color: n ? "grey" : "black" };
}
__name(du, "du");
function Zd(t, n) {
  const { pathname: o } = tr();
  return $.useMemo(() => dk({ handle: t, pathname: o, searchParams: new URLSearchParams(), selectedOptions: n }), [t, n, o]);
}
__name(Zd, "Zd");
function dk({ handle: t, pathname: n, searchParams: o, selectedOptions: i }) {
  const s = /(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/g.exec(n), c = s && s.length > 0 ? `${s[0]}products/${t}` : `/products/${t}`;
  i == null || i.forEach((h) => {
    o.set(h.name, h.value);
  });
  const f = o.toString();
  return c + (f ? "?" + o.toString() : "");
}
__name(dk, "dk");
function dy({ price: t, compareAtPrice: n }) {
  return y.jsx("div", { className: "product-price", children: n ? y.jsxs("div", { className: "product-price-on-sale", children: [t ? y.jsx(At, { data: t }) : null, y.jsx("s", { children: y.jsx(At, { data: n }) })] }) : t ? y.jsx(At, { data: t }) : y.jsx("span", { children: "\xA0" }) });
}
__name(dy, "dy");
function fk({ layout: t, line: n }) {
  var C;
  const { id: o, merchandise: i } = n, { product: s, title: u, image: c, selectedOptions: f } = i, h = Zd(s.handle, f), { close: v } = In();
  return y.jsxs("li", { className: "cart-line", children: [c && y.jsx(rr, { alt: u, aspectRatio: "1/1", data: c, height: 100, loading: "lazy", width: 100 }), y.jsxs("div", { children: [y.jsx(Xe, { prefetch: "intent", to: h, onClick: /* @__PURE__ */ __name(() => {
    t === "aside" && v();
  }, "onClick"), children: y.jsx("p", { children: y.jsx("strong", { children: s.title }) }) }), y.jsx(dy, { price: (C = n == null ? void 0 : n.cost) == null ? void 0 : C.totalAmount }), y.jsx("ul", { children: f.map((S) => y.jsx("li", { children: y.jsxs("small", { children: [S.name, ": ", S.value] }) }, S.name)) }), y.jsx(pk, { line: n })] })] }, o);
}
__name(fk, "fk");
function pk({ line: t }) {
  if (!t || typeof (t == null ? void 0 : t.quantity) > "u") return null;
  const { id: n, quantity: o, isOptimistic: i } = t, s = Number(Math.max(0, o - 1).toFixed(0)), u = Number((o + 1).toFixed(0));
  return y.jsxs("div", { className: "cart-line-quantity", children: [y.jsxs("small", { children: ["Quantity: ", o, " \xA0\xA0"] }), y.jsx(Tm, { lines: [{ id: n, quantity: s }], children: y.jsx("button", { "aria-label": "Decrease quantity", disabled: o <= 1 || !!i, name: "decrease-quantity", value: s, children: y.jsx("span", { children: "\u2212 " }) }) }), "\xA0", y.jsx(Tm, { lines: [{ id: n, quantity: u }], children: y.jsx("button", { "aria-label": "Increase quantity", name: "increase-quantity", value: u, disabled: !!i, children: y.jsx("span", { children: "+" }) }) }), "\xA0", y.jsx(hk, { lineIds: [n], disabled: !!i })] });
}
__name(pk, "pk");
function hk({ lineIds: t, disabled: n }) {
  return y.jsx(nt, { route: "/cart", action: nt.ACTIONS.LinesRemove, inputs: { lineIds: t }, children: y.jsx("button", { disabled: n, type: "submit", children: "Remove" }) });
}
__name(hk, "hk");
function Tm({ children: t, lines: n }) {
  return y.jsx(nt, { route: "/cart", action: nt.ACTIONS.LinesUpdate, inputs: { lines: n }, children: t });
}
__name(Tm, "Tm");
function mk({ cart: t, layout: n }) {
  var i, s, u;
  const o = n === "page" ? "cart-summary-page" : "cart-summary-aside";
  return y.jsxs("div", { "aria-labelledby": "cart-summary", className: o, children: [y.jsx("h4", { children: "Totals" }), y.jsxs("dl", { className: "cart-subtotal", children: [y.jsx("dt", { children: "Subtotal" }), y.jsx("dd", { children: (s = (i = t.cost) == null ? void 0 : i.subtotalAmount) != null && s.amount ? y.jsx(At, { data: (u = t.cost) == null ? void 0 : u.subtotalAmount }) : "-" })] }), y.jsx(yk, { discountCodes: t.discountCodes }), y.jsx(vk, { giftCardCodes: t.appliedGiftCards }), y.jsx(gk, { checkoutUrl: t.checkoutUrl })] });
}
__name(mk, "mk");
function gk({ checkoutUrl: t }) {
  return t ? y.jsxs("div", { children: [y.jsx("a", { href: t, target: "_self", children: y.jsx("p", { children: "Continue to Checkout \u2192" }) }), y.jsx("br", {})] }) : null;
}
__name(gk, "gk");
function yk({ discountCodes: t }) {
  var o;
  const n = ((o = t == null ? void 0 : t.filter((i) => i.applicable)) == null ? void 0 : o.map(({ code: i }) => i)) || [];
  return y.jsxs("div", { children: [y.jsx("dl", { hidden: !n.length, children: y.jsxs("div", { children: [y.jsx("dt", { children: "Discount(s)" }), y.jsx(Am, { children: y.jsxs("div", { className: "cart-discount", children: [y.jsx("code", { children: n == null ? void 0 : n.join(", ") }), "\xA0", y.jsx("button", { children: "Remove" })] }) })] }) }), y.jsx(Am, { discountCodes: n, children: y.jsxs("div", { children: [y.jsx("input", { type: "text", name: "discountCode", placeholder: "Discount code" }), "\xA0", y.jsx("button", { type: "submit", children: "Apply" })] }) })] });
}
__name(yk, "yk");
function Am({ discountCodes: t, children: n }) {
  return y.jsx(nt, { route: "/cart", action: nt.ACTIONS.DiscountCodesUpdate, inputs: { discountCodes: t || [] }, children: n });
}
__name(Am, "Am");
function vk({ giftCardCodes: t }) {
  const n = $.useRef([]), o = $.useRef(null), i = (t == null ? void 0 : t.map(({ lastCharacters: c }) => `***${c}`)) || [];
  function s(c) {
    const f = c.replace(/\s/g, "");
    n.current.includes(f) || n.current.push(f), o.current.value = "";
  }
  __name(s, "s");
  function u() {
    n.current = [];
  }
  __name(u, "u");
  return y.jsxs("div", { children: [y.jsx("dl", { hidden: !i.length, children: y.jsxs("div", { children: [y.jsx("dt", { children: "Applied Gift Card(s)" }), y.jsx(Om, { children: y.jsxs("div", { className: "cart-discount", children: [y.jsx("code", { children: i == null ? void 0 : i.join(", ") }), "\xA0", y.jsx("button", { onSubmit: /* @__PURE__ */ __name(() => u, "onSubmit"), children: "Remove" })] }) })] }) }), y.jsx(Om, { giftCardCodes: n.current, saveAppliedCode: s, children: y.jsxs("div", { children: [y.jsx("input", { type: "text", name: "giftCardCode", placeholder: "Gift card code", ref: o }), "\xA0", y.jsx("button", { type: "submit", children: "Apply" })] }) })] });
}
__name(vk, "vk");
function Om({ giftCardCodes: t, saveAppliedCode: n, children: o }) {
  return y.jsx(nt, { route: "/cart", action: nt.ACTIONS.GiftCardCodesUpdate, inputs: { giftCardCodes: t || [] }, children: /* @__PURE__ */ __name((i) => {
    var u;
    const s = (u = i.formData) == null ? void 0 : u.get("giftCardCode");
    return s && n && n(s), o;
  }, "children") });
}
__name(Om, "Om");
function fy({ layout: t, cart: n }) {
  var f, h, v, C, S;
  const o = Zg(n), i = !!((h = (f = o == null ? void 0 : o.lines) == null ? void 0 : f.nodes) != null && h.length), u = `cart-main ${o && !!((C = (v = o == null ? void 0 : o.discountCodes) == null ? void 0 : v.filter((j) => j.applicable)) != null && C.length) ? "with-discount" : ""}`, c = (o == null ? void 0 : o.totalQuantity) && (o == null ? void 0 : o.totalQuantity) > 0;
  return y.jsxs("div", { className: u, children: [y.jsx(wk, { hidden: i, layout: t }), y.jsxs("div", { className: "cart-details", children: [y.jsx("div", { "aria-labelledby": "cart-lines", children: y.jsx("ul", { children: (((S = o == null ? void 0 : o.lines) == null ? void 0 : S.nodes) ?? []).map((j) => y.jsx(fk, { line: j, layout: t }, j.id)) }) }), c && y.jsx(mk, { cart: o, layout: t })] })] });
}
__name(fy, "fy");
function wk({ hidden: t = false }) {
  const { close: n } = In();
  return y.jsxs("div", { hidden: t, children: [y.jsx("br", {}), y.jsx("p", { children: "Looks like you haven\u2019t added anything yet, let\u2019s get you started!" }), y.jsx("br", {}), y.jsx(Xe, { to: "/collections", onClick: n, prefetch: "viewport", children: "Continue shopping \u2192" })] });
}
__name(wk, "wk");
var _d = "/search";
function xk({ children: t, className: n = "predictive-search-form", ...o }) {
  const i = Hd({ key: "search" }), s = $.useRef(null), u = Es(), c = In();
  function f(C) {
    var S;
    C.preventDefault(), C.stopPropagation(), (S = s == null ? void 0 : s.current) != null && S.value && s.current.blur();
  }
  __name(f, "f");
  function h() {
    var S;
    const C = (S = s == null ? void 0 : s.current) == null ? void 0 : S.value;
    u(_d + (C ? `?q=${C}` : "")), c.close();
  }
  __name(h, "h");
  function v(C) {
    i.submit({ q: C.target.value || "", limit: 5, predictive: true }, { method: "GET", action: _d });
  }
  __name(v, "v");
  return $.useEffect(() => {
    var C;
    (C = s == null ? void 0 : s.current) == null || C.setAttribute("type", "search");
  }, []), typeof t != "function" ? null : y.jsx(i.Form, { ...o, className: n, onSubmit: f, children: t({ inputRef: s, fetcher: i, fetchResults: v, goToSearch: h }) });
}
__name(xk, "xk");
function py() {
  return { total: 0, items: { articles: [], collections: [], products: [], pages: [], queries: [] } };
}
__name(py, "py");
function Ia({ baseUrl: t, trackingParams: n, params: o, term: i }) {
  let s = new URLSearchParams({ ...o, q: encodeURIComponent(i) }).toString();
  return n && (s = `${s}&${n}`), `${t}?${s}`;
}
__name(Ia, "Ia");
function hr({ children: t }) {
  const n = In(), { term: o, inputRef: i, fetcher: s, total: u, items: c } = jk();
  function f() {
    i.current && (i.current.blur(), i.current.value = "");
  }
  __name(f, "f");
  function h() {
    f(), n.close();
  }
  __name(h, "h");
  return t({ items: c, closeSearch: h, inputRef: i, state: s.state, term: o, total: u });
}
__name(hr, "hr");
hr.Articles = Sk;
hr.Collections = Ck;
hr.Pages = Ek;
hr.Products = _k;
hr.Queries = kk;
hr.Empty = Pk;
function Sk({ term: t, articles: n, closeSearch: o }) {
  return n.length ? y.jsxs("div", { className: "predictive-search-result", children: [y.jsx("h5", { children: "Articles" }), y.jsx("ul", { children: n.map((i) => {
    var u;
    const s = Ia({ baseUrl: `/blogs/${i.blog.handle}/${i.handle}`, trackingParams: i.trackingParameters, term: t.current ?? "" });
    return y.jsx("li", { className: "predictive-search-result-item", children: y.jsxs(Xe, { onClick: o, to: s, children: [((u = i.image) == null ? void 0 : u.url) && y.jsx(rr, { alt: i.image.altText ?? "", src: i.image.url, width: 50, height: 50 }), y.jsx("div", { children: y.jsx("span", { children: i.title }) })] }) }, i.id);
  }) })] }, "articles") : null;
}
__name(Sk, "Sk");
function Ck({ term: t, collections: n, closeSearch: o }) {
  return n.length ? y.jsxs("div", { className: "predictive-search-result", children: [y.jsx("h5", { children: "Collections" }), y.jsx("ul", { children: n.map((i) => {
    var u;
    const s = Ia({ baseUrl: `/collections/${i.handle}`, trackingParams: i.trackingParameters, term: t.current });
    return y.jsx("li", { className: "predictive-search-result-item", children: y.jsxs(Xe, { onClick: o, to: s, children: [((u = i.image) == null ? void 0 : u.url) && y.jsx(rr, { alt: i.image.altText ?? "", src: i.image.url, width: 50, height: 50 }), y.jsx("div", { children: y.jsx("span", { children: i.title }) })] }) }, i.id);
  }) })] }, "collections") : null;
}
__name(Ck, "Ck");
function Ek({ term: t, pages: n, closeSearch: o }) {
  return n.length ? y.jsxs("div", { className: "predictive-search-result", children: [y.jsx("h5", { children: "Pages" }), y.jsx("ul", { children: n.map((i) => {
    const s = Ia({ baseUrl: `/pages/${i.handle}`, trackingParams: i.trackingParameters, term: t.current });
    return y.jsx("li", { className: "predictive-search-result-item", children: y.jsx(Xe, { onClick: o, to: s, children: y.jsx("div", { children: y.jsx("span", { children: i.title }) }) }) }, i.id);
  }) })] }, "pages") : null;
}
__name(Ek, "Ek");
function _k({ term: t, products: n, closeSearch: o }) {
  return n.length ? y.jsxs("div", { className: "predictive-search-result", children: [y.jsx("h5", { children: "Products" }), y.jsx("ul", { children: n.map((i) => {
    var f, h;
    const s = Ia({ baseUrl: `/products/${i.handle}`, trackingParams: i.trackingParameters, term: t.current }), u = (f = i == null ? void 0 : i.selectedOrFirstAvailableVariant) == null ? void 0 : f.price, c = (h = i == null ? void 0 : i.selectedOrFirstAvailableVariant) == null ? void 0 : h.image;
    return y.jsx("li", { className: "predictive-search-result-item", children: y.jsxs(Xe, { to: s, onClick: o, children: [c && y.jsx(rr, { alt: c.altText ?? "", src: c.url, width: 50, height: 50 }), y.jsxs("div", { children: [y.jsx("p", { children: i.title }), y.jsx("small", { children: u && y.jsx(At, { data: u }) })] })] }) }, i.id);
  }) })] }, "products") : null;
}
__name(_k, "_k");
function kk({ queries: t, queriesDatalistId: n }) {
  return t.length ? y.jsx("datalist", { id: n, children: t.map((o) => o ? y.jsx("option", { value: o.text }, o.text) : null) }) : null;
}
__name(kk, "kk");
function Pk({ term: t }) {
  return t.current ? y.jsxs("p", { children: ["No results found for ", y.jsx("q", { children: t.current })] }) : null;
}
__name(Pk, "Pk");
function jk() {
  var u, c;
  const t = Hd({ key: "search" }), n = $.useRef(""), o = $.useRef(null);
  (t == null ? void 0 : t.state) === "loading" && (n.current = String(((u = t.formData) == null ? void 0 : u.get("q")) || "")), $.useEffect(() => {
    o.current || (o.current = document.querySelector('input[type="search"]'));
  }, []);
  const { items: i, total: s } = ((c = t == null ? void 0 : t.data) == null ? void 0 : c.result) ?? py();
  return { items: i, total: s, inputRef: o, term: n, fetcher: t };
}
__name(jk, "jk");
function Rk({ cart: t, children: n = null, footer: o, header: i, isLoggedIn: s, publicStoreDomain: u }) {
  return y.jsxs(As.Provider, { children: [y.jsx($k, { cart: t }), y.jsx(Ik, {}), y.jsx(Tk, { header: i, publicStoreDomain: u }), i && y.jsx(ok, { header: i, cart: t, isLoggedIn: s, publicStoreDomain: u }), y.jsx("main", { children: n }), y.jsx(ek, { footer: o, header: i, publicStoreDomain: u })] });
}
__name(Rk, "Rk");
function $k({ cart: t }) {
  return y.jsx(As, { type: "cart", heading: "CART", children: y.jsx($.Suspense, { fallback: y.jsx("p", { children: "Loading cart ..." }), children: y.jsx(_i, { resolve: t, children: /* @__PURE__ */ __name((n) => y.jsx(fy, { cart: n, layout: "aside" }), "children") }) }) });
}
__name($k, "$k");
function Ik() {
  const t = $.useId();
  return y.jsx(As, { type: "search", heading: "SEARCH", children: y.jsxs("div", { className: "predictive-search", children: [y.jsx("br", {}), y.jsx(xk, { children: /* @__PURE__ */ __name(({ fetchResults: n, goToSearch: o, inputRef: i }) => y.jsxs(y.Fragment, { children: [y.jsx("input", { name: "q", onChange: n, onFocus: n, placeholder: "Search", ref: i, type: "search", list: t }), "\xA0", y.jsx("button", { onClick: o, children: "Search" })] }), "children") }), y.jsx(hr, { children: /* @__PURE__ */ __name(({ items: n, total: o, term: i, state: s, closeSearch: u }) => {
    const { articles: c, collections: f, pages: h, products: v, queries: C } = n;
    return s === "loading" && i.current ? y.jsx("div", { children: "Loading..." }) : o ? y.jsxs(y.Fragment, { children: [y.jsx(hr.Queries, { queries: C, queriesDatalistId: t }), y.jsx(hr.Products, { products: v, closeSearch: u, term: i }), y.jsx(hr.Collections, { collections: f, closeSearch: u, term: i }), y.jsx(hr.Pages, { pages: h, closeSearch: u, term: i }), y.jsx(hr.Articles, { articles: c, closeSearch: u, term: i }), i.current && o ? y.jsx(Xe, { onClick: u, to: `${_d}?q=${i.current}`, children: y.jsxs("p", { children: ["View all results for ", y.jsx("q", { children: i.current }), "\xA0 \u2192"] }) }) : null] }) : y.jsx(hr.Empty, { term: i });
  }, "children") })] }) });
}
__name(Ik, "Ik");
function Tk({ header: t, publicStoreDomain: n }) {
  var o;
  return t.menu && ((o = t.shop.primaryDomain) == null ? void 0 : o.url) && y.jsx(As, { type: "mobile", heading: "MENU", children: y.jsx(uy, { menu: t.menu, viewport: "mobile", primaryDomainUrl: t.shop.primaryDomain.url, publicStoreDomain: n }) });
}
__name(Tk, "Tk");
function Ak() {
  const t = ay(), n = X0("root");
  return y.jsxs("html", { lang: "en", children: [y.jsxs("head", { children: [y.jsx("meta", { charSet: "utf-8" }), y.jsx("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }), y.jsx("link", { rel: "stylesheet", href: Z_ }), y.jsx("link", { rel: "stylesheet", href: K_ }), y.jsx("link", { rel: "stylesheet", href: X_ }), y.jsx(G0, {}), y.jsx(q0, {})] }), y.jsxs("body", { children: [n ? y.jsx(Su.Provider, { cart: n.cart, shop: n.shop, consent: n.consent, children: y.jsx(Rk, { ...n, children: y.jsx(eu, {}) }) }) : y.jsx(eu, {}), y.jsx(Z0, { nonce: t }), y.jsx(Eg, { nonce: t })] })] });
}
__name(Ak, "Ak");
var Ok = Object.freeze(Object.defineProperty({ __proto__: null, default: Ak }, Symbol.toStringTag, { value: "Module" }));
async function Lk({ request: t, context: n }) {
  const o = new URL(t.url), { shop: i } = await n.storefront.query(Nk), s = mr(i.id).id, u = Dk({ url: o.origin, shopId: s });
  return new Response(u, { status: 200, headers: { "Content-Type": "text/plain", "Cache-Control": `max-age=${60 * 60 * 24}` } });
}
__name(Lk, "Lk");
function Dk({ url: t, shopId: n }) {
  const o = t ? `${t}/sitemap.xml` : void 0;
  return `
User-agent: *
${fd({ sitemapUrl: o, shopId: n })}

# Google adsbot ignores robots.txt unless specifically named!
User-agent: adsbot-google
Disallow: /checkouts/
Disallow: /checkout
Disallow: /carts
Disallow: /orders
${n ? `Disallow: /${n}/checkouts` : ""}
${n ? `Disallow: /${n}/orders` : ""}
Disallow: /*?*oseid=*
Disallow: /*preview_theme_id*
Disallow: /*preview_script_id*

User-agent: Nutch
Disallow: /

User-agent: AhrefsBot
Crawl-delay: 10
${fd({ sitemapUrl: o, shopId: n })}

User-agent: AhrefsSiteAudit
Crawl-delay: 10
${fd({ sitemapUrl: o, shopId: n })}

User-agent: MJ12bot
Crawl-Delay: 10

User-agent: Pinterest
Crawl-delay: 1
`.trim();
}
__name(Dk, "Dk");
function fd({ shopId: t, sitemapUrl: n }) {
  return `Disallow: /admin
Disallow: /cart
Disallow: /orders
Disallow: /checkouts/
Disallow: /checkout
${t ? `Disallow: /${t}/checkouts` : ""}
${t ? `Disallow: /${t}/orders` : ""}
Disallow: /carts
Disallow: /account
Disallow: /collections/*sort_by*
Disallow: /*/collections/*sort_by*
Disallow: /collections/*+*
Disallow: /collections/*%2B*
Disallow: /collections/*%2b*
Disallow: /*/collections/*+*
Disallow: /*/collections/*%2B*
Disallow: /*/collections/*%2b*
Disallow: */collections/*filter*&*filter*
Disallow: /blogs/*+*
Disallow: /blogs/*%2B*
Disallow: /blogs/*%2b*
Disallow: /*/blogs/*+*
Disallow: /*/blogs/*%2B*
Disallow: /*/blogs/*%2b*
Disallow: /*?*oseid=*
Disallow: /*preview_theme_id*
Disallow: /*preview_script_id*
Disallow: /policies/
Disallow: /*/*?*ls=*&ls=*
Disallow: /*/*?*ls%3D*%3Fls%3D*
Disallow: /*/*?*ls%3d*%3fls%3d*
Disallow: /search
Allow: /search/
Disallow: /search/?*
Disallow: /apple-app-site-association
Disallow: /.well-known/shopify/monorail
${n ? `Sitemap: ${n}` : ""}`;
}
__name(fd, "fd");
var Nk = `#graphql
  query StoreRobots($country: CountryCode, $language: LanguageCode)
   @inContext(country: $country, language: $language) {
    shop {
      id
    }
  }
`;
var bk = Object.freeze(Object.defineProperty({ __proto__: null, loader: Lk }, Symbol.toStringTag, { value: "Module" }));
async function Uk({ params: t, context: n }) {
  const { language: o, country: i } = n.storefront.i18n;
  if (t.locale && t.locale.toLowerCase() !== `${o}-${i}`.toLowerCase()) throw new Response(null, { status: 404 });
  return null;
}
__name(Uk, "Uk");
var Mk = Object.freeze(Object.defineProperty({ __proto__: null, loader: Uk }, Symbol.toStringTag, { value: "Module" }));
var Fk = /* @__PURE__ */ __name(({ data: t }) => [{ title: `Hydrogen | ${(t == null ? void 0 : t.article.title) ?? ""} article` }], "Fk");
async function zk(t) {
  const n = Bk(t), o = await Hk(t);
  return { ...n, ...o };
}
__name(zk, "zk");
async function Hk({ context: t, params: n }) {
  const { blogHandle: o, articleHandle: i } = n;
  if (!i || !o) throw new Response("Not found", { status: 404 });
  const [{ blog: s }] = await Promise.all([t.storefront.query(qk, { variables: { blogHandle: o, articleHandle: i } })]);
  if (!(s != null && s.articleByHandle)) throw new Response(null, { status: 404 });
  return { article: s.articleByHandle };
}
__name(Hk, "Hk");
function Bk({ context: t }) {
  return {};
}
__name(Bk, "Bk");
function Vk() {
  const { article: t } = Lt(), { title: n, image: o, contentHtml: i, author: s } = t, u = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" }).format(new Date(t.publishedAt));
  return y.jsxs("div", { className: "article", children: [y.jsxs("h1", { children: [n, y.jsxs("div", { children: [u, " \xB7 ", s == null ? void 0 : s.name] })] }), o && y.jsx(rr, { data: o, sizes: "90vw", loading: "eager" }), y.jsx("div", { dangerouslySetInnerHTML: { __html: i }, className: "article" })] });
}
__name(Vk, "Vk");
var qk = `#graphql
  query Article(
    $articleHandle: String!
    $blogHandle: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    blog(handle: $blogHandle) {
      articleByHandle(handle: $articleHandle) {
        title
        contentHtml
        publishedAt
        author: authorV2 {
          name
        }
        image {
          id
          altText
          url
          width
          height
        }
        seo {
          description
          title
        }
      }
    }
  }
`;
var Wk = Object.freeze(Object.defineProperty({ __proto__: null, default: Vk, loader: zk, meta: Fk }, Symbol.toStringTag, { value: "Module" }));
async function Qk({ request: t, params: n, context: { storefront: o } }) {
  const i = await k_({ storefront: o, request: t, params: n, locales: ["EN-US", "EN-CA", "FR-CA"], getLink: /* @__PURE__ */ __name(({ type: s, baseUrl: u, handle: c, locale: f }) => f ? `${u}/${f}/${s}/${c}` : `${u}/${s}/${c}`, "getLink") });
  return i.headers.set("Cache-Control", `max-age=${60 * 60 * 24}`), i;
}
__name(Qk, "Qk");
var Gk = Object.freeze(Object.defineProperty({ __proto__: null, loader: Qk }, Symbol.toStringTag, { value: "Module" }));
function ki({ connection: t, children: n, resourcesClassName: o }) {
  return y.jsx(iy, { connection: t, children: /* @__PURE__ */ __name(({ nodes: i, isLoading: s, PreviousLink: u, NextLink: c }) => {
    const f = i.map((h, v) => n({ node: h, index: v }));
    return y.jsxs("div", { children: [y.jsx(u, { children: s ? "Loading..." : y.jsx("span", { children: "\u2191 Load previous" }) }), o ? y.jsx("div", { className: o, children: f }) : f, y.jsx(c, { children: s ? "Loading..." : y.jsx("span", { children: "Load more \u2193" }) })] });
  }, "children") });
}
__name(ki, "ki");
var Yk = /* @__PURE__ */ __name(({ data: t }) => [{ title: `Hydrogen | ${(t == null ? void 0 : t.blog.title) ?? ""} blog` }], "Yk");
async function Jk(t) {
  const n = Xk(t), o = await Kk(t);
  return { ...n, ...o };
}
__name(Jk, "Jk");
async function Kk({ context: t, request: n, params: o }) {
  const i = $a(n, { pageBy: 4 });
  if (!o.blogHandle) throw new Response("blog not found", { status: 404 });
  const [{ blog: s }] = await Promise.all([t.storefront.query(t1, { variables: { blogHandle: o.blogHandle, ...i } })]);
  if (!(s != null && s.articles)) throw new Response("Not found", { status: 404 });
  return { blog: s };
}
__name(Kk, "Kk");
function Xk({ context: t }) {
  return {};
}
__name(Xk, "Xk");
function Zk() {
  const { blog: t } = Lt(), { articles: n } = t;
  return y.jsxs("div", { className: "blog", children: [y.jsx("h1", { children: t.title }), y.jsx("div", { className: "blog-grid", children: y.jsx(ki, { connection: n, children: /* @__PURE__ */ __name(({ node: o, index: i }) => y.jsx(e1, { article: o, loading: i < 2 ? "eager" : "lazy" }, o.id), "children") }) })] });
}
__name(Zk, "Zk");
function e1({ article: t, loading: n }) {
  const o = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" }).format(new Date(t.publishedAt));
  return y.jsx("div", { className: "blog-article", children: y.jsxs(Xe, { to: `/blogs/${t.blog.handle}/${t.handle}`, children: [t.image && y.jsx("div", { className: "blog-article-image", children: y.jsx(rr, { alt: t.image.altText || t.title, aspectRatio: "3/2", data: t.image, loading: n, sizes: "(min-width: 768px) 50vw, 100vw" }) }), y.jsx("h3", { children: t.title }), y.jsx("small", { children: o })] }) }, t.id);
}
__name(e1, "e1");
var t1 = `#graphql
  query Blog(
    $language: LanguageCode
    $blogHandle: String!
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(language: $language) {
    blog(handle: $blogHandle) {
      title
      seo {
        title
        description
      }
      articles(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ArticleItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          hasNextPage
          endCursor
          startCursor
        }

      }
    }
  }
  fragment ArticleItem on Article {
    author: authorV2 {
      name
    }
    contentHtml
    handle
    id
    image {
      id
      altText
      url
      width
      height
    }
    publishedAt
    title
    blog {
      handle
    }
  }
`;
var r1 = Object.freeze(Object.defineProperty({ __proto__: null, default: Zk, loader: Jk, meta: Yk }, Symbol.toStringTag, { value: "Module" }));
var ef = new TextEncoder();
var n1 = /* @__PURE__ */ __name(async (t, n) => {
  let o = await hy(n, ["sign"]), i = ef.encode(t), s = await crypto.subtle.sign("HMAC", o, i), u = btoa(String.fromCharCode(...new Uint8Array(s))).replace(/=+$/, "");
  return t + "." + u;
}, "n1");
var o1 = /* @__PURE__ */ __name(async (t, n) => {
  let o = t.lastIndexOf("."), i = t.slice(0, o), s = t.slice(o + 1), u = await hy(n, ["verify"]), c = ef.encode(i), f = a1(atob(s));
  return await crypto.subtle.verify("HMAC", u, f, c) ? i : false;
}, "o1");
async function hy(t, n) {
  return await crypto.subtle.importKey("raw", ef.encode(t), { name: "HMAC", hash: "SHA-256" }, false, n);
}
__name(hy, "hy");
function a1(t) {
  let n = new Uint8Array(t.length);
  for (let o = 0; o < t.length; o++) n[o] = t.charCodeAt(o);
  return n;
}
__name(a1, "a1");
var i1 = jx({ sign: n1, unsign: o1 });
var s1 = k0(i1);
var l1 = Error.prototype.toString;
Error.prototype.toString = function() {
  return this.stack || l1.call(this);
};
function my({ build: t, mode: n, poweredByHeader: o = true, getLoadContext: i }) {
  let s = g0(t, n);
  return async (u) => {
    let c = u.method;
    if ((c === "GET" || c === "HEAD") && u.body) return new Response(`${c} requests cannot have a body`, { status: 400 });
    let f = new URL(u.url);
    if (f.pathname.includes("//")) return new Response(null, { status: 301, headers: { location: f.pathname.replace(/\/+/g, "/") } });
    let h = i ? await i(u) : void 0, v = await s(u, h);
    return o && v.headers.append("powered-by", "Shopify, Hydrogen"), v;
  };
}
__name(my, "my");
var u1 = /* @__PURE__ */ __name(({ data: t }) => [{ title: `Hydrogen | ${(t == null ? void 0 : t.collection.title) ?? ""} Collection` }], "u1");
async function c1(t) {
  const n = f1(t), o = await d1(t);
  return { ...n, ...o };
}
__name(c1, "c1");
async function d1({ context: t, params: n, request: o }) {
  const { handle: i } = n, { storefront: s } = t, u = $a(o, { pageBy: 8 });
  if (!i) throw kn("/collections");
  const [{ collection: c }] = await Promise.all([s.query(g1, { variables: { handle: i, ...u } })]);
  if (!c) throw new Response(`Collection ${i} not found`, { status: 404 });
  return { collection: c };
}
__name(d1, "d1");
function f1({ context: t }) {
  return {};
}
__name(f1, "f1");
function p1() {
  const { collection: t } = Lt();
  return y.jsxs("div", { className: "collection", children: [y.jsx("h1", { children: t.title }), y.jsx("p", { className: "collection-description", children: t.description }), y.jsx(ki, { connection: t.products, resourcesClassName: "products-grid", children: /* @__PURE__ */ __name(({ node: n, index: o }) => y.jsx(h1, { product: n, loading: o < 8 ? "eager" : void 0 }, n.id), "children") }), y.jsx(Su.CollectionView, { data: { collection: { id: t.id, handle: t.handle } } })] });
}
__name(p1, "p1");
function h1({ product: t, loading: n }) {
  const o = Zd(t.handle);
  return y.jsxs(Xe, { className: "product-item", prefetch: "intent", to: o, children: [t.featuredImage && y.jsx(rr, { alt: t.featuredImage.altText || t.title, aspectRatio: "1/1", data: t.featuredImage, loading: n, sizes: "(min-width: 45em) 400px, 100vw" }), y.jsx("h4", { children: t.title }), y.jsx("small", { children: y.jsx(At, { data: t.priceRange.minVariantPrice }) })] }, t.id);
}
__name(h1, "h1");
var m1 = `#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
  }
`;
var g1 = `#graphql
  ${m1}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
`;
var y1 = Object.freeze(Object.defineProperty({ __proto__: null, default: p1, loader: c1, meta: u1 }, Symbol.toStringTag, { value: "Module" }));
async function v1({ context: t }) {
  return t.customerAccount.authorize();
}
__name(v1, "v1");
var w1 = Object.freeze(Object.defineProperty({ __proto__: null, loader: v1 }, Symbol.toStringTag, { value: "Module" }));
async function x1(t) {
  const n = C1(t), o = await S1(t);
  return { ...n, ...o };
}
__name(x1, "x1");
async function S1({ context: t, request: n }) {
  const o = $a(n, { pageBy: 4 }), [{ collections: i }] = await Promise.all([t.storefront.query(k1, { variables: o })]);
  return { collections: i };
}
__name(S1, "S1");
function C1({ context: t }) {
  return {};
}
__name(C1, "C1");
function E1() {
  const { collections: t } = Lt();
  return y.jsxs("div", { className: "collections", children: [y.jsx("h1", { children: "Collections" }), y.jsx(ki, { connection: t, resourcesClassName: "collections-grid", children: /* @__PURE__ */ __name(({ node: n, index: o }) => y.jsx(_1, { collection: n, index: o }, n.id), "children") })] });
}
__name(E1, "E1");
function _1({ collection: t, index: n }) {
  return y.jsxs(Xe, { className: "collection-item", to: `/collections/${t.handle}`, prefetch: "intent", children: [(t == null ? void 0 : t.image) && y.jsx(rr, { alt: t.image.altText || t.title, aspectRatio: "1/1", data: t.image, loading: n < 3 ? "eager" : void 0, sizes: "(min-width: 45em) 400px, 100vw" }), y.jsx("h5", { children: t.title })] }, t.id);
}
__name(_1, "_1");
var k1 = `#graphql
  fragment Collection on Collection {
    id
    title
    handle
    image {
      id
      url
      altText
      width
      height
    }
  }
  query StoreCollections(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    collections(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...Collection
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;
var P1 = Object.freeze(Object.defineProperty({ __proto__: null, default: E1, loader: x1 }, Symbol.toStringTag, { value: "Module" }));
var j1 = /* @__PURE__ */ __name(({ data: t }) => [{ title: `Hydrogen | ${(t == null ? void 0 : t.policy.title) ?? ""}` }], "j1");
async function R1({ params: t, context: n }) {
  var u, c;
  if (!t.handle) throw new Response("No handle was passed in", { status: 404 });
  const o = t.handle.replace(/-([a-z])/g, (f, h) => h.toUpperCase()), s = (c = (await n.storefront.query(I1, { variables: { privacyPolicy: false, shippingPolicy: false, termsOfService: false, refundPolicy: false, [o]: true, language: (u = n.storefront.i18n) == null ? void 0 : u.language } })).shop) == null ? void 0 : c[o];
  if (!s) throw new Response("Could not find the policy", { status: 404 });
  return { policy: s };
}
__name(R1, "R1");
function $1() {
  const { policy: t } = Lt();
  return y.jsxs("div", { className: "policy", children: [y.jsx("br", {}), y.jsx("br", {}), y.jsx("div", { children: y.jsx(Xe, { to: "/policies", children: "\u2190 Back to Policies" }) }), y.jsx("br", {}), y.jsx("h1", { children: t.title }), y.jsx("div", { dangerouslySetInnerHTML: { __html: t.body } })] });
}
__name($1, "$1");
var I1 = `#graphql
  fragment Policy on ShopPolicy {
    body
    handle
    id
    title
    url
  }
  query Policy(
    $country: CountryCode
    $language: LanguageCode
    $privacyPolicy: Boolean!
    $refundPolicy: Boolean!
    $shippingPolicy: Boolean!
    $termsOfService: Boolean!
  ) @inContext(language: $language, country: $country) {
    shop {
      privacyPolicy @include(if: $privacyPolicy) {
        ...Policy
      }
      shippingPolicy @include(if: $shippingPolicy) {
        ...Policy
      }
      termsOfService @include(if: $termsOfService) {
        ...Policy
      }
      refundPolicy @include(if: $refundPolicy) {
        ...Policy
      }
    }
  }
`;
var T1 = Object.freeze(Object.defineProperty({ __proto__: null, default: $1, loader: R1, meta: j1 }, Symbol.toStringTag, { value: "Module" }));
function A1({ image: t }) {
  return t ? y.jsx("div", { className: "product-image", children: y.jsx(rr, { alt: t.altText || "Product Image", aspectRatio: "1/1", data: t, sizes: "(min-width: 45em) 50vw, 100vw" }, t.id) }) : y.jsx("div", { className: "product-image" });
}
__name(A1, "A1");
function O1({ analytics: t, children: n, disabled: o, lines: i, onClick: s }) {
  return y.jsx(nt, { route: "/cart", inputs: { lines: i }, action: nt.ACTIONS.LinesAdd, children: /* @__PURE__ */ __name((u) => y.jsxs(y.Fragment, { children: [y.jsx("input", { name: "analytics", type: "hidden", value: JSON.stringify(t) }), y.jsx("button", { type: "submit", onClick: s, disabled: o ?? u.state !== "idle", children: n })] }), "children") });
}
__name(O1, "O1");
function L1({ productOptions: t, selectedVariant: n }) {
  const o = Es(), { open: i } = In();
  return y.jsxs("div", { className: "product-form", children: [t.map((s) => s.optionValues.length === 1 ? null : y.jsxs("div", { className: "product-options", children: [y.jsx("h5", { children: s.name }), y.jsx("div", { className: "product-options-grid", children: s.optionValues.map((u) => {
    const { name: c, handle: f, variantUriQuery: h, selected: v, available: C, exists: S, isDifferentProduct: j, swatch: R } = u;
    return j ? y.jsx(Xe, { className: "product-options-item", prefetch: "intent", preventScrollReset: true, replace: true, to: `/products/${f}?${h}`, style: { border: v ? "1px solid black" : "1px solid transparent", opacity: C ? 1 : 0.3 }, children: y.jsx(Lm, { swatch: R, name: c }) }, s.name + c) : y.jsx("button", { type: "button", className: `product-options-item${S && !v ? " link" : ""}`, style: { border: v ? "1px solid black" : "1px solid transparent", opacity: C ? 1 : 0.3 }, disabled: !S, onClick: /* @__PURE__ */ __name(() => {
      v || o(`?${h}`, { replace: true, preventScrollReset: true });
    }, "onClick"), children: y.jsx(Lm, { swatch: R, name: c }) }, s.name + c);
  }) }), y.jsx("br", {})] }, s.name)), y.jsx(O1, { disabled: !n || !n.availableForSale, onClick: /* @__PURE__ */ __name(() => {
    i("cart");
  }, "onClick"), lines: n ? [{ merchandiseId: n.id, quantity: 1, selectedVariant: n }] : [], children: n != null && n.availableForSale ? "Add to cart" : "Sold out" })] });
}
__name(L1, "L1");
function Lm({ swatch: t, name: n }) {
  var s, u;
  const o = (u = (s = t == null ? void 0 : t.image) == null ? void 0 : s.previewImage) == null ? void 0 : u.url, i = t == null ? void 0 : t.color;
  return !o && !i ? n : y.jsx("div", { "aria-label": n, className: "product-option-label-swatch", style: { backgroundColor: i || "transparent" }, children: !!o && y.jsx("img", { src: o, alt: n }) });
}
__name(Lm, "Lm");
var D1 = /* @__PURE__ */ __name(({ data: t }) => [{ title: `Hydrogen | ${(t == null ? void 0 : t.product.title) ?? ""}` }, { rel: "canonical", href: `/products/${t == null ? void 0 : t.product.handle}` }], "D1");
async function N1(t) {
  const n = U1(t), o = await b1(t);
  return { ...n, ...o };
}
__name(N1, "N1");
async function b1({ context: t, params: n, request: o }) {
  const { handle: i } = n, { storefront: s } = t;
  if (!i) throw new Error("Expected product handle to be defined");
  const [{ product: u }] = await Promise.all([s.query(H1, { variables: { handle: i, selectedOptions: w_(o) } })]);
  if (!(u != null && u.id)) throw new Response(null, { status: 404 });
  return { product: u };
}
__name(b1, "b1");
function U1({ context: t, params: n }) {
  return {};
}
__name(U1, "U1");
function M1() {
  const { product: t } = Lt(), n = v_(t.selectedOrFirstAvailableVariant, aC(t));
  dC(n.selectedOptions);
  const o = iC({ ...t, selectedOrFirstAvailableVariant: n }), { title: i, descriptionHtml: s } = t;
  return y.jsxs("div", { className: "product", children: [y.jsx(A1, { image: n == null ? void 0 : n.image }), y.jsxs("div", { className: "product-main", children: [y.jsx("h1", { children: i }), y.jsx(dy, { price: n == null ? void 0 : n.price, compareAtPrice: n == null ? void 0 : n.compareAtPrice }), y.jsx("br", {}), y.jsx(L1, { productOptions: o, selectedVariant: n }), y.jsx("br", {}), y.jsx("br", {}), y.jsx("p", { children: y.jsx("strong", { children: "Description" }) }), y.jsx("br", {}), y.jsx("div", { dangerouslySetInnerHTML: { __html: s } }), y.jsx("br", {})] }), y.jsx(Su.ProductView, { data: { products: [{ id: t.id, title: t.title, price: (n == null ? void 0 : n.price.amount) || "0", vendor: t.vendor, variantId: (n == null ? void 0 : n.id) || "", variantTitle: (n == null ? void 0 : n.title) || "", quantity: 1 }] } })] });
}
__name(M1, "M1");
var F1 = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
`;
var z1 = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    encodedVariantExistence
    encodedVariantAvailability
    options {
      name
      optionValues {
        name
        firstSelectableVariant {
          ...ProductVariant
        }
        swatch {
          color
          image {
            previewImage {
              url
            }
          }
        }
      }
    }
    selectedOrFirstAvailableVariant(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
      ...ProductVariant
    }
    adjacentVariants (selectedOptions: $selectedOptions) {
      ...ProductVariant
    }
    seo {
      description
      title
    }
  }
  ${F1}
`;
var H1 = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${z1}
`;
var B1 = Object.freeze(Object.defineProperty({ __proto__: null, default: M1, loader: N1, meta: D1 }, Symbol.toStringTag, { value: "Module" }));
async function V1() {
  return kn("/");
}
__name(V1, "V1");
async function q1({ context: t }) {
  return t.customerAccount.logout();
}
__name(q1, "q1");
var W1 = Object.freeze(Object.defineProperty({ __proto__: null, action: q1, loader: V1 }, Symbol.toStringTag, { value: "Module" }));
var Q1 = /* @__PURE__ */ __name(() => [{ title: "Hydrogen | Products" }], "Q1");
async function G1(t) {
  const n = J1(t), o = await Y1(t);
  return { ...n, ...o };
}
__name(G1, "G1");
async function Y1({ context: t, request: n }) {
  const { storefront: o } = t, i = $a(n, { pageBy: 8 }), [{ products: s }] = await Promise.all([o.query(eP, { variables: { ...i } })]);
  return { products: s };
}
__name(Y1, "Y1");
function J1({ context: t }) {
  return {};
}
__name(J1, "J1");
function K1() {
  const { products: t } = Lt();
  return y.jsxs("div", { className: "collection", children: [y.jsx("h1", { children: "Products" }), y.jsx(ki, { connection: t, resourcesClassName: "products-grid", children: /* @__PURE__ */ __name(({ node: n, index: o }) => y.jsx(X1, { product: n, loading: o < 8 ? "eager" : void 0 }, n.id), "children") })] });
}
__name(K1, "K1");
function X1({ product: t, loading: n }) {
  const o = Zd(t.handle);
  return y.jsxs(Xe, { className: "product-item", prefetch: "intent", to: o, children: [t.featuredImage && y.jsx(rr, { alt: t.featuredImage.altText || t.title, aspectRatio: "1/1", data: t.featuredImage, loading: n, sizes: "(min-width: 45em) 400px, 100vw" }), y.jsx("h4", { children: t.title }), y.jsx("small", { children: y.jsx(At, { data: t.priceRange.minVariantPrice }) })] }, t.id);
}
__name(X1, "X1");
var Z1 = `#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
  }
`;
var eP = `#graphql
  query Catalog(
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    products(first: $first, last: $last, before: $startCursor, after: $endCursor) {
      nodes {
        ...ProductItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
  ${Z1}
`;
var tP = Object.freeze(Object.defineProperty({ __proto__: null, default: K1, loader: G1, meta: Q1 }, Symbol.toStringTag, { value: "Module" }));
async function rP({ context: t }) {
  const n = await t.storefront.query(oP), o = Object.values(n.shop || {});
  if (!o.length) throw new Response("No policies found", { status: 404 });
  return { policies: o };
}
__name(rP, "rP");
function nP() {
  const { policies: t } = Lt();
  return y.jsxs("div", { className: "policies", children: [y.jsx("h1", { children: "Policies" }), y.jsx("div", { children: t.map((n) => n ? y.jsx("fieldset", { children: y.jsx(Xe, { to: `/policies/${n.handle}`, children: n.title }) }, n.id) : null) })] });
}
__name(nP, "nP");
var oP = `#graphql
  fragment PolicyItem on ShopPolicy {
    id
    title
    handle
  }
  query Policies ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    shop {
      privacyPolicy {
        ...PolicyItem
      }
      shippingPolicy {
        ...PolicyItem
      }
      termsOfService {
        ...PolicyItem
      }
      refundPolicy {
        ...PolicyItem
      }
      subscriptionPolicy {
        id
        title
        handle
      }
    }
  }
`;
var aP = Object.freeze(Object.defineProperty({ __proto__: null, default: nP, loader: rP }, Symbol.toStringTag, { value: "Module" }));
async function iP({ request: t, context: n }) {
  return n.customerAccount.login();
}
__name(iP, "iP");
var sP = Object.freeze(Object.defineProperty({ __proto__: null, loader: iP }, Symbol.toStringTag, { value: "Module" }));
async function lP({ request: t, context: n, params: o }) {
  const { cart: i } = n, { code: s } = o, u = new URL(t.url), c = new URLSearchParams(u.search);
  let f = c.get("redirect") || c.get("return_to") || "/";
  f.includes("//") && (f = "/"), c.delete("redirect"), c.delete("return_to");
  const h = `${f}?${c}`;
  if (!s) return kn(h);
  const v = await i.updateDiscountCodes([s]), C = i.setCartId(v.cart.id);
  return kn(h, { status: 303, headers: C });
}
__name(lP, "lP");
var uP = Object.freeze(Object.defineProperty({ __proto__: null, loader: lP }, Symbol.toStringTag, { value: "Module" }));
async function cP({ request: t, context: { storefront: n } }) {
  const o = await __({ storefront: n, request: t });
  return o.headers.set("Cache-Control", `max-age=${60 * 60 * 24}`), o;
}
__name(cP, "cP");
var dP = Object.freeze(Object.defineProperty({ __proto__: null, loader: cP }, Symbol.toStringTag, { value: "Module" }));
var fP = /* @__PURE__ */ __name(({ data: t }) => [{ title: `Hydrogen | ${(t == null ? void 0 : t.page.title) ?? ""}` }], "fP");
async function pP(t) {
  const n = mP(t), o = await hP(t);
  return { ...n, ...o };
}
__name(pP, "pP");
async function hP({ context: t, params: n }) {
  if (!n.handle) throw new Error("Missing page handle");
  const [{ page: o }] = await Promise.all([t.storefront.query(yP, { variables: { handle: n.handle } })]);
  if (!o) throw new Response("Not Found", { status: 404 });
  return { page: o };
}
__name(hP, "hP");
function mP({ context: t }) {
  return {};
}
__name(mP, "mP");
function gP() {
  const { page: t } = Lt();
  return y.jsxs("div", { className: "page", children: [y.jsx("header", { children: y.jsx("h1", { children: t.title }) }), y.jsx("main", { dangerouslySetInnerHTML: { __html: t.body } })] });
}
__name(gP, "gP");
var yP = `#graphql
  query Page(
    $language: LanguageCode,
    $country: CountryCode,
    $handle: String!
  )
  @inContext(language: $language, country: $country) {
    page(handle: $handle) {
      id
      title
      body
      seo {
        description
        title
      }
    }
  }
`;
var vP = Object.freeze(Object.defineProperty({ __proto__: null, default: gP, loader: pP, meta: fP }, Symbol.toStringTag, { value: "Module" }));
var wP = /* @__PURE__ */ __name(() => [{ title: "Hydrogen | Blogs" }], "wP");
async function xP(t) {
  const n = CP(t), o = await SP(t);
  return { ...n, ...o };
}
__name(xP, "xP");
async function SP({ context: t, request: n }) {
  const o = $a(n, { pageBy: 10 }), [{ blogs: i }] = await Promise.all([t.storefront.query(_P, { variables: { ...o } })]);
  return { blogs: i };
}
__name(SP, "SP");
function CP({ context: t }) {
  return {};
}
__name(CP, "CP");
function EP() {
  const { blogs: t } = Lt();
  return y.jsxs("div", { className: "blogs", children: [y.jsx("h1", { children: "Blogs" }), y.jsx("div", { className: "blogs-grid", children: y.jsx(ki, { connection: t, children: /* @__PURE__ */ __name(({ node: n }) => y.jsx(Xe, { className: "blog", prefetch: "intent", to: `/blogs/${n.handle}`, children: y.jsx("h2", { children: n.title }) }, n.handle), "children") }) })] });
}
__name(EP, "EP");
var _P = `#graphql
  query Blogs(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    blogs(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      nodes {
        title
        handle
        seo {
          title
          description
        }
      }
    }
  }
`;
var kP = Object.freeze(Object.defineProperty({ __proto__: null, default: EP, loader: xP, meta: wP }, Symbol.toStringTag, { value: "Module" }));
var PP = `#graphql
  fragment Customer on Customer {
    id
    firstName
    lastName
    defaultAddress {
      ...Address
    }
    addresses(first: 6) {
      nodes {
        ...Address
      }
    }
  }
  fragment Address on CustomerAddress {
    id
    formatted
    firstName
    lastName
    company
    address1
    address2
    territoryCode
    zoneCode
    city
    zip
    phoneNumber
  }
`;
var jP = `#graphql
  query CustomerDetails {
    customer {
      ...Customer
    }
  }
  ${PP}
`;
function RP() {
  return true;
}
__name(RP, "RP");
async function $P({ context: t }) {
  const { data: n, errors: o } = await t.customerAccount.query(jP);
  if (o != null && o.length || !(n != null && n.customer)) throw new Error("Customer not found");
  return er({ customer: n.customer }, { headers: { "Cache-Control": "no-cache, no-store, must-revalidate" } });
}
__name($P, "$P");
function IP() {
  const { customer: t } = Lt(), n = t ? t.firstName ? `Welcome, ${t.firstName}` : "Welcome to your account." : "Account Details";
  return y.jsxs("div", { className: "account", children: [y.jsx("h1", { children: n }), y.jsx("br", {}), y.jsx(TP, {}), y.jsx("br", {}), y.jsx("br", {}), y.jsx(eu, { context: { customer: t } })] });
}
__name(IP, "IP");
function TP() {
  function t({ isActive: n, isPending: o }) {
    return { fontWeight: n ? "bold" : void 0, color: o ? "grey" : "black" };
  }
  __name(t, "t");
  return y.jsxs("nav", { role: "navigation", children: [y.jsx(io, { to: "/account/orders", style: t, children: "Orders \xA0" }), "\xA0|\xA0", y.jsx(io, { to: "/account/profile", style: t, children: "\xA0 Profile \xA0" }), "\xA0|\xA0", y.jsx(io, { to: "/account/addresses", style: t, children: "\xA0 Addresses \xA0" }), "\xA0|\xA0", y.jsx(AP, {})] });
}
__name(TP, "TP");
function AP() {
  return y.jsxs(js, { className: "account-logout", method: "POST", action: "/account/logout", children: ["\xA0", y.jsx("button", { type: "submit", children: "Sign out" })] });
}
__name(AP, "AP");
var OP = Object.freeze(Object.defineProperty({ __proto__: null, default: IP, loader: $P, shouldRevalidate: RP }, Symbol.toStringTag, { value: "Module" }));
var LP = `#graphql
  fragment OrderItem on Order {
    totalPrice {
      amount
      currencyCode
    }
    financialStatus
    fulfillments(first: 1) {
      nodes {
        status
      }
    }
    id
    number
    processedAt
  }
`;
var DP = `#graphql
  fragment CustomerOrders on Customer {
    orders(
      sortKey: PROCESSED_AT,
      reverse: true,
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...OrderItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        endCursor
        startCursor
      }
    }
  }
  ${LP}
`;
var NP = `#graphql
  ${DP}
  query CustomerOrders(
    $endCursor: String
    $first: Int
    $last: Int
    $startCursor: String
  ) {
    customer {
      ...CustomerOrders
    }
  }
`;
var bP = /* @__PURE__ */ __name(() => [{ title: "Orders" }], "bP");
async function UP({ request: t, context: n }) {
  const o = $a(t, { pageBy: 20 }), { data: i, errors: s } = await n.customerAccount.query(NP, { variables: { ...o } });
  if (s != null && s.length || !(i != null && i.customer)) throw Error("Customer orders not found");
  return { customer: i.customer };
}
__name(UP, "UP");
function MP() {
  const { customer: t } = Lt(), { orders: n } = t;
  return y.jsx("div", { className: "orders", children: n.nodes.length ? y.jsx(FP, { orders: n }) : y.jsx(gy, {}) });
}
__name(MP, "MP");
function FP({ orders: t }) {
  return y.jsx("div", { className: "acccount-orders", children: t != null && t.nodes.length ? y.jsx(ki, { connection: t, children: /* @__PURE__ */ __name(({ node: n }) => y.jsx(zP, { order: n }, n.id), "children") }) : y.jsx(gy, {}) });
}
__name(FP, "FP");
function gy() {
  return y.jsxs("div", { children: [y.jsx("p", { children: "You haven't placed any orders yet." }), y.jsx("br", {}), y.jsx("p", { children: y.jsx(Xe, { to: "/collections", children: "Start Shopping \u2192" }) })] });
}
__name(gy, "gy");
function zP({ order: t }) {
  var o;
  const n = (o = so(t.fulfillments)[0]) == null ? void 0 : o.status;
  return y.jsxs(y.Fragment, { children: [y.jsxs("fieldset", { children: [y.jsx(Xe, { to: `/account/orders/${btoa(t.id)}`, children: y.jsxs("strong", { children: ["#", t.number] }) }), y.jsx("p", { children: new Date(t.processedAt).toDateString() }), y.jsx("p", { children: t.financialStatus }), n && y.jsx("p", { children: n }), y.jsx(At, { data: t.totalPrice }), y.jsx(Xe, { to: `/account/orders/${btoa(t.id)}`, children: "View Order \u2192" })] }), y.jsx("br", {})] });
}
__name(zP, "zP");
var HP = Object.freeze(Object.defineProperty({ __proto__: null, default: MP, loader: UP, meta: bP }, Symbol.toStringTag, { value: "Module" }));
var BP = `#graphql
  fragment OrderMoney on MoneyV2 {
    amount
    currencyCode
  }
  fragment DiscountApplication on DiscountApplication {
    value {
      __typename
      ... on MoneyV2 {
        ...OrderMoney
      }
      ... on PricingPercentageValue {
        percentage
      }
    }
  }
  fragment OrderLineItemFull on LineItem {
    id
    title
    quantity
    price {
      ...OrderMoney
    }
    discountAllocations {
      allocatedAmount {
        ...OrderMoney
      }
      discountApplication {
        ...DiscountApplication
      }
    }
    totalDiscount {
      ...OrderMoney
    }
    image {
      altText
      height
      url
      id
      width
    }
    variantTitle
  }
  fragment Order on Order {
    id
    name
    statusPageUrl
    processedAt
    fulfillments(first: 1) {
      nodes {
        status
      }
    }
    totalTax {
      ...OrderMoney
    }
    totalPrice {
      ...OrderMoney
    }
    subtotal {
      ...OrderMoney
    }
    shippingAddress {
      name
      formatted(withName: true)
      formattedArea
    }
    discountApplications(first: 100) {
      nodes {
        ...DiscountApplication
      }
    }
    lineItems(first: 100) {
      nodes {
        ...OrderLineItemFull
      }
    }
  }
  query Order($orderId: ID!) {
    order(id: $orderId) {
      ... on Order {
        ...Order
      }
    }
  }
`;
var VP = /* @__PURE__ */ __name(({ data: t }) => {
  var n;
  return [{ title: `Order ${(n = t == null ? void 0 : t.order) == null ? void 0 : n.name}` }];
}, "VP");
async function qP({ params: t, context: n }) {
  var j, R;
  if (!t.id) return kn("/account/orders");
  const o = atob(t.id), { data: i, errors: s } = await n.customerAccount.query(BP, { variables: { orderId: o } });
  if (s != null && s.length || !(i != null && i.order)) throw new Error("Order not found");
  const { order: u } = i, c = so(u.lineItems), f = so(u.discountApplications), h = ((j = so(u.fulfillments)[0]) == null ? void 0 : j.status) ?? "N/A", v = (R = f[0]) == null ? void 0 : R.value, C = (v == null ? void 0 : v.__typename) === "MoneyV2" && v, S = (v == null ? void 0 : v.__typename) === "PricingPercentageValue" && (v == null ? void 0 : v.percentage);
  return { order: u, lineItems: c, discountValue: C, discountPercentage: S, fulfillmentStatus: h };
}
__name(qP, "qP");
function WP() {
  const { order: t, lineItems: n, discountValue: o, discountPercentage: i, fulfillmentStatus: s } = Lt();
  return y.jsxs("div", { className: "account-order", children: [y.jsxs("h2", { children: ["Order ", t.name] }), y.jsxs("p", { children: ["Placed on ", new Date(t.processedAt).toDateString()] }), y.jsx("br", {}), y.jsxs("div", { children: [y.jsxs("table", { children: [y.jsx("thead", { children: y.jsxs("tr", { children: [y.jsx("th", { scope: "col", children: "Product" }), y.jsx("th", { scope: "col", children: "Price" }), y.jsx("th", { scope: "col", children: "Quantity" }), y.jsx("th", { scope: "col", children: "Total" })] }) }), y.jsx("tbody", { children: n.map((u, c) => y.jsx(QP, { lineItem: u }, c)) }), y.jsxs("tfoot", { children: [(o && o.amount || i) && y.jsxs("tr", { children: [y.jsx("th", { scope: "row", colSpan: 3, children: y.jsx("p", { children: "Discounts" }) }), y.jsx("th", { scope: "row", children: y.jsx("p", { children: "Discounts" }) }), y.jsx("td", { children: i ? y.jsxs("span", { children: ["-", i, "% OFF"] }) : o && y.jsx(At, { data: o }) })] }), y.jsxs("tr", { children: [y.jsx("th", { scope: "row", colSpan: 3, children: y.jsx("p", { children: "Subtotal" }) }), y.jsx("th", { scope: "row", children: y.jsx("p", { children: "Subtotal" }) }), y.jsx("td", { children: y.jsx(At, { data: t.subtotal }) })] }), y.jsxs("tr", { children: [y.jsx("th", { scope: "row", colSpan: 3, children: "Tax" }), y.jsx("th", { scope: "row", children: y.jsx("p", { children: "Tax" }) }), y.jsx("td", { children: y.jsx(At, { data: t.totalTax }) })] }), y.jsxs("tr", { children: [y.jsx("th", { scope: "row", colSpan: 3, children: "Total" }), y.jsx("th", { scope: "row", children: y.jsx("p", { children: "Total" }) }), y.jsx("td", { children: y.jsx(At, { data: t.totalPrice }) })] })] })] }), y.jsxs("div", { children: [y.jsx("h3", { children: "Shipping Address" }), t != null && t.shippingAddress ? y.jsxs("address", { children: [y.jsx("p", { children: t.shippingAddress.name }), t.shippingAddress.formatted ? y.jsx("p", { children: t.shippingAddress.formatted }) : "", t.shippingAddress.formattedArea ? y.jsx("p", { children: t.shippingAddress.formattedArea }) : ""] }) : y.jsx("p", { children: "No shipping address defined" }), y.jsx("h3", { children: "Status" }), y.jsx("div", { children: y.jsx("p", { children: s }) })] })] }), y.jsx("br", {}), y.jsx("p", { children: y.jsx("a", { target: "_blank", href: t.statusPageUrl, rel: "noreferrer", children: "View Order Status \u2192" }) })] });
}
__name(WP, "WP");
function QP({ lineItem: t }) {
  return y.jsxs("tr", { children: [y.jsx("td", { children: y.jsxs("div", { children: [(t == null ? void 0 : t.image) && y.jsx("div", { children: y.jsx(rr, { data: t.image, width: 96, height: 96 }) }), y.jsxs("div", { children: [y.jsx("p", { children: t.title }), y.jsx("small", { children: t.variantTitle })] })] }) }), y.jsx("td", { children: y.jsx(At, { data: t.price }) }), y.jsx("td", { children: t.quantity }), y.jsx("td", { children: y.jsx(At, { data: t.totalDiscount }) })] }, t.id);
}
__name(QP, "QP");
var GP = Object.freeze(Object.defineProperty({ __proto__: null, default: WP, loader: qP, meta: VP }, Symbol.toStringTag, { value: "Module" }));
var YP = `#graphql
  mutation customerAddressUpdate(
    $address: CustomerAddressInput!
    $addressId: ID!
    $defaultAddress: Boolean
 ) {
    customerAddressUpdate(
      address: $address
      addressId: $addressId
      defaultAddress: $defaultAddress
    ) {
      customerAddress {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`;
var JP = `#graphql
  mutation customerAddressDelete(
    $addressId: ID!,
  ) {
    customerAddressDelete(addressId: $addressId) {
      deletedAddressId
      userErrors {
        code
        field
        message
      }
    }
  }
`;
var KP = `#graphql
  mutation customerAddressCreate(
    $address: CustomerAddressInput!
    $defaultAddress: Boolean
  ) {
    customerAddressCreate(
      address: $address
      defaultAddress: $defaultAddress
    ) {
      customerAddress {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`;
var XP = /* @__PURE__ */ __name(() => [{ title: "Addresses" }], "XP");
async function ZP({ context: t }) {
  return await t.customerAccount.handleAuthStatus(), {};
}
__name(ZP, "ZP");
async function ej({ request: t, context: n }) {
  var i, s, u, c, f, h, v, C, S, j, R, P, I;
  const { customerAccount: o } = n;
  try {
    const L = await t.formData(), U = L.has("addressId") ? String(L.get("addressId")) : null;
    if (!U) throw new Error("You must provide an address id.");
    if (!await o.isLoggedIn()) return er({ error: { [U]: "Unauthorized" } }, { status: 401 });
    const Y = L.has("defaultAddress") ? String(L.get("defaultAddress")) === "on" : false, G = {}, ye = ["address1", "address2", "city", "company", "territoryCode", "firstName", "lastName", "phoneNumber", "zoneCode", "zip"];
    for (const Q of ye) {
      const J = L.get(Q);
      typeof J == "string" && (G[Q] = J);
    }
    switch (t.method) {
      case "POST":
        try {
          const { data: Q, errors: J } = await o.mutate(KP, { variables: { address: G, defaultAddress: Y } });
          if (J != null && J.length) throw new Error(J[0].message);
          if ((s = (i = Q == null ? void 0 : Q.customerAddressCreate) == null ? void 0 : i.userErrors) != null && s.length) throw new Error((u = Q == null ? void 0 : Q.customerAddressCreate) == null ? void 0 : u.userErrors[0].message);
          if (!((c = Q == null ? void 0 : Q.customerAddressCreate) != null && c.customerAddress)) throw new Error("Customer address create failed.");
          return { error: null, createdAddress: (f = Q == null ? void 0 : Q.customerAddressCreate) == null ? void 0 : f.customerAddress, defaultAddress: Y };
        } catch (Q) {
          return Q instanceof Error ? er({ error: { [U]: Q.message } }, { status: 400 }) : er({ error: { [U]: Q } }, { status: 400 });
        }
      case "PUT":
        try {
          const { data: Q, errors: J } = await o.mutate(YP, { variables: { address: G, addressId: decodeURIComponent(U), defaultAddress: Y } });
          if (J != null && J.length) throw new Error(J[0].message);
          if ((v = (h = Q == null ? void 0 : Q.customerAddressUpdate) == null ? void 0 : h.userErrors) != null && v.length) throw new Error((C = Q == null ? void 0 : Q.customerAddressUpdate) == null ? void 0 : C.userErrors[0].message);
          if (!((S = Q == null ? void 0 : Q.customerAddressUpdate) != null && S.customerAddress)) throw new Error("Customer address update failed.");
          return { error: null, updatedAddress: G, defaultAddress: Y };
        } catch (Q) {
          return Q instanceof Error ? er({ error: { [U]: Q.message } }, { status: 400 }) : er({ error: { [U]: Q } }, { status: 400 });
        }
      case "DELETE":
        try {
          const { data: Q, errors: J } = await o.mutate(JP, { variables: { addressId: decodeURIComponent(U) } });
          if (J != null && J.length) throw new Error(J[0].message);
          if ((R = (j = Q == null ? void 0 : Q.customerAddressDelete) == null ? void 0 : j.userErrors) != null && R.length) throw new Error((P = Q == null ? void 0 : Q.customerAddressDelete) == null ? void 0 : P.userErrors[0].message);
          if (!((I = Q == null ? void 0 : Q.customerAddressDelete) != null && I.deletedAddressId)) throw new Error("Customer address delete failed.");
          return { error: null, deletedAddress: U };
        } catch (Q) {
          return Q instanceof Error ? er({ error: { [U]: Q.message } }, { status: 400 }) : er({ error: { [U]: Q } }, { status: 400 });
        }
      default:
        return er({ error: { [U]: "Method not allowed" } }, { status: 405 });
    }
  } catch (L) {
    return L instanceof Error ? er({ error: L.message }, { status: 400 }) : er({ error: L }, { status: 400 });
  }
}
__name(ej, "ej");
function tj() {
  const { customer: t } = Qm(), { defaultAddress: n, addresses: o } = t;
  return y.jsxs("div", { className: "account-addresses", children: [y.jsx("h2", { children: "Addresses" }), y.jsx("br", {}), o.nodes.length ? y.jsxs("div", { children: [y.jsxs("div", { children: [y.jsx("legend", { children: "Create address" }), y.jsx(rj, {})] }), y.jsx("br", {}), y.jsx("hr", {}), y.jsx("br", {}), y.jsx(nj, { addresses: o, defaultAddress: n })] }) : y.jsx("p", { children: "You have no addresses saved." })] });
}
__name(tj, "tj");
function rj() {
  const t = { address1: "", address2: "", city: "", company: "", territoryCode: "", firstName: "", id: "new", lastName: "", phoneNumber: "", zoneCode: "", zip: "" };
  return y.jsx(tf, { addressId: "NEW_ADDRESS_ID", address: t, defaultAddress: null, children: /* @__PURE__ */ __name(({ stateForMethod: n }) => y.jsx("div", { children: y.jsx("button", { disabled: n("POST") !== "idle", formMethod: "POST", type: "submit", children: n("POST") !== "idle" ? "Creating" : "Create" }) }), "children") });
}
__name(rj, "rj");
function nj({ addresses: t, defaultAddress: n }) {
  return y.jsxs("div", { children: [y.jsx("legend", { children: "Existing addresses" }), t.nodes.map((o) => y.jsx(tf, { addressId: o.id, address: o, defaultAddress: n, children: /* @__PURE__ */ __name(({ stateForMethod: i }) => y.jsxs("div", { children: [y.jsx("button", { disabled: i("PUT") !== "idle", formMethod: "PUT", type: "submit", children: i("PUT") !== "idle" ? "Saving" : "Save" }), y.jsx("button", { disabled: i("DELETE") !== "idle", formMethod: "DELETE", type: "submit", children: i("DELETE") !== "idle" ? "Deleting" : "Delete" })] }), "children") }, o.id))] });
}
__name(nj, "nj");
function tf({ addressId: t, address: n, defaultAddress: o, children: i }) {
  var v;
  const { state: s, formMethod: u } = Ei(), c = _g(), f = (v = c == null ? void 0 : c.error) == null ? void 0 : v[t], h = (o == null ? void 0 : o.id) === t;
  return y.jsx(js, { id: t, children: y.jsxs("fieldset", { children: [y.jsx("input", { type: "hidden", name: "addressId", defaultValue: t }), y.jsx("label", { htmlFor: "firstName", children: "First name*" }), y.jsx("input", { "aria-label": "First name", autoComplete: "given-name", defaultValue: (n == null ? void 0 : n.firstName) ?? "", id: "firstName", name: "firstName", placeholder: "First name", required: true, type: "text" }), y.jsx("label", { htmlFor: "lastName", children: "Last name*" }), y.jsx("input", { "aria-label": "Last name", autoComplete: "family-name", defaultValue: (n == null ? void 0 : n.lastName) ?? "", id: "lastName", name: "lastName", placeholder: "Last name", required: true, type: "text" }), y.jsx("label", { htmlFor: "company", children: "Company" }), y.jsx("input", { "aria-label": "Company", autoComplete: "organization", defaultValue: (n == null ? void 0 : n.company) ?? "", id: "company", name: "company", placeholder: "Company", type: "text" }), y.jsx("label", { htmlFor: "address1", children: "Address line*" }), y.jsx("input", { "aria-label": "Address line 1", autoComplete: "address-line1", defaultValue: (n == null ? void 0 : n.address1) ?? "", id: "address1", name: "address1", placeholder: "Address line 1*", required: true, type: "text" }), y.jsx("label", { htmlFor: "address2", children: "Address line 2" }), y.jsx("input", { "aria-label": "Address line 2", autoComplete: "address-line2", defaultValue: (n == null ? void 0 : n.address2) ?? "", id: "address2", name: "address2", placeholder: "Address line 2", type: "text" }), y.jsx("label", { htmlFor: "city", children: "City*" }), y.jsx("input", { "aria-label": "City", autoComplete: "address-level2", defaultValue: (n == null ? void 0 : n.city) ?? "", id: "city", name: "city", placeholder: "City", required: true, type: "text" }), y.jsx("label", { htmlFor: "zoneCode", children: "State / Province*" }), y.jsx("input", { "aria-label": "State/Province", autoComplete: "address-level1", defaultValue: (n == null ? void 0 : n.zoneCode) ?? "", id: "zoneCode", name: "zoneCode", placeholder: "State / Province", required: true, type: "text" }), y.jsx("label", { htmlFor: "zip", children: "Zip / Postal Code*" }), y.jsx("input", { "aria-label": "Zip", autoComplete: "postal-code", defaultValue: (n == null ? void 0 : n.zip) ?? "", id: "zip", name: "zip", placeholder: "Zip / Postal Code", required: true, type: "text" }), y.jsx("label", { htmlFor: "territoryCode", children: "Country Code*" }), y.jsx("input", { "aria-label": "territoryCode", autoComplete: "country", defaultValue: (n == null ? void 0 : n.territoryCode) ?? "", id: "territoryCode", name: "territoryCode", placeholder: "Country", required: true, type: "text", maxLength: 2 }), y.jsx("label", { htmlFor: "phoneNumber", children: "Phone" }), y.jsx("input", { "aria-label": "Phone Number", autoComplete: "tel", defaultValue: (n == null ? void 0 : n.phoneNumber) ?? "", id: "phoneNumber", name: "phoneNumber", placeholder: "+16135551111", pattern: "^\\+?[1-9]\\d{3,14}$", type: "tel" }), y.jsxs("div", { children: [y.jsx("input", { defaultChecked: h, id: "defaultAddress", name: "defaultAddress", type: "checkbox" }), y.jsx("label", { htmlFor: "defaultAddress", children: "Set as default address" })] }), f ? y.jsx("p", { children: y.jsx("mark", { children: y.jsx("small", { children: f }) }) }) : y.jsx("br", {}), i({ stateForMethod: /* @__PURE__ */ __name((C) => u === C ? s : "idle", "stateForMethod") })] }) });
}
__name(tf, "tf");
var oj = Object.freeze(Object.defineProperty({ __proto__: null, AddressForm: tf, action: ej, default: tj, loader: ZP, meta: XP }, Symbol.toStringTag, { value: "Module" }));
var aj = `#graphql
  # https://shopify.dev/docs/api/customer/latest/mutations/customerUpdate
  mutation customerUpdate(
    $customer: CustomerUpdateInput!
  ){
    customerUpdate(input: $customer) {
      customer {
        firstName
        lastName
        emailAddress {
          emailAddress
        }
        phoneNumber {
          phoneNumber
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`;
var ij = /* @__PURE__ */ __name(() => [{ title: "Profile" }], "ij");
async function sj({ context: t }) {
  return await t.customerAccount.handleAuthStatus(), {};
}
__name(sj, "sj");
async function lj({ request: t, context: n }) {
  var s, u;
  const { customerAccount: o } = n;
  if (t.method !== "PUT") return er({ error: "Method not allowed" }, { status: 405 });
  const i = await t.formData();
  try {
    const c = {}, f = ["firstName", "lastName"];
    for (const [C, S] of i.entries()) f.includes(C) && typeof S == "string" && S.length && (c[C] = S);
    const { data: h, errors: v } = await o.mutate(aj, { variables: { customer: c } });
    if (v != null && v.length) throw new Error(v[0].message);
    if (!((s = h == null ? void 0 : h.customerUpdate) != null && s.customer)) throw new Error("Customer profile update failed.");
    return { error: null, customer: (u = h == null ? void 0 : h.customerUpdate) == null ? void 0 : u.customer };
  } catch (c) {
    return er({ error: c.message, customer: null }, { status: 400 });
  }
}
__name(lj, "lj");
function uj() {
  const t = Qm(), { state: n } = Ei(), o = _g(), i = (o == null ? void 0 : o.customer) ?? (t == null ? void 0 : t.customer);
  return y.jsxs("div", { className: "account-profile", children: [y.jsx("h2", { children: "My profile" }), y.jsx("br", {}), y.jsxs(js, { method: "PUT", children: [y.jsx("legend", { children: "Personal information" }), y.jsxs("fieldset", { children: [y.jsx("label", { htmlFor: "firstName", children: "First name" }), y.jsx("input", { id: "firstName", name: "firstName", type: "text", autoComplete: "given-name", placeholder: "First name", "aria-label": "First name", defaultValue: i.firstName ?? "", minLength: 2 }), y.jsx("label", { htmlFor: "lastName", children: "Last name" }), y.jsx("input", { id: "lastName", name: "lastName", type: "text", autoComplete: "family-name", placeholder: "Last name", "aria-label": "Last name", defaultValue: i.lastName ?? "", minLength: 2 })] }), o != null && o.error ? y.jsx("p", { children: y.jsx("mark", { children: y.jsx("small", { children: o.error }) }) }) : y.jsx("br", {}), y.jsx("button", { type: "submit", disabled: n !== "idle", children: n !== "idle" ? "Updating" : "Update" })] })] });
}
__name(uj, "uj");
var cj = Object.freeze(Object.defineProperty({ __proto__: null, action: lj, default: uj, loader: sj, meta: ij }, Symbol.toStringTag, { value: "Module" }));
async function dj() {
  return kn("/account/orders");
}
__name(dj, "dj");
var fj = Object.freeze(Object.defineProperty({ __proto__: null, loader: dj }, Symbol.toStringTag, { value: "Module" }));
async function pj({ context: t }) {
  return await t.customerAccount.handleAuthStatus(), kn("/account");
}
__name(pj, "pj");
var hj = Object.freeze(Object.defineProperty({ __proto__: null, loader: pj }, Symbol.toStringTag, { value: "Module" }));
var mj = /* @__PURE__ */ __name(() => [{ title: "Hydrogen | Home" }], "mj");
async function gj(t) {
  const n = vj(t), o = await yj(t);
  return { ...n, ...o };
}
__name(gj, "gj");
async function yj({ context: t }) {
  const [{ collections: n }] = await Promise.all([t.storefront.query(Cj)]);
  return { featuredCollection: n.nodes[0] };
}
__name(yj, "yj");
function vj({ context: t }) {
  return { recommendedProducts: t.storefront.query(Ej).catch((o) => (console.error(o), null)) };
}
__name(vj, "vj");
function wj() {
  const t = Lt();
  return y.jsxs("div", { className: "home", children: [y.jsx(xj, { collection: t.featuredCollection }), y.jsx(Sj, { products: t.recommendedProducts })] });
}
__name(wj, "wj");
function xj({ collection: t }) {
  if (!t) return null;
  const n = t == null ? void 0 : t.image;
  return y.jsxs(Xe, { className: "featured-collection", to: `/collections/${t.handle}`, children: [n && y.jsx("div", { className: "featured-collection-image", children: y.jsx(rr, { data: n, sizes: "100vw" }) }), y.jsx("h1", { children: t.title })] });
}
__name(xj, "xj");
function Sj({ products: t }) {
  return y.jsxs("div", { className: "recommended-products", children: [y.jsx("h2", { children: "Recommended Products" }), y.jsx($.Suspense, { fallback: y.jsx("div", { children: "Loading..." }), children: y.jsx(_i, { resolve: t, children: /* @__PURE__ */ __name((n) => y.jsx("div", { className: "recommended-products-grid", children: n ? n.products.nodes.map((o) => y.jsxs(Xe, { className: "recommended-product", to: `/products/${o.handle}`, children: [y.jsx(rr, { data: o.images.nodes[0], aspectRatio: "1/1", sizes: "(min-width: 45em) 20vw, 50vw" }), y.jsx("h4", { children: o.title }), y.jsx("small", { children: y.jsx(At, { data: o.priceRange.minVariantPrice }) })] }, o.id)) : null }), "children") }) }), y.jsx("br", {})] });
}
__name(Sj, "Sj");
var Cj = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;
var Ej = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;
var _j = Object.freeze(Object.defineProperty({ __proto__: null, default: wj, loader: gj, meta: mj }, Symbol.toStringTag, { value: "Module" }));
function kj({ children: t, ...n }) {
  const o = $.useRef(null);
  return Pj(o), typeof t != "function" ? null : y.jsx(js, { method: "get", ...n, children: t({ inputRef: o }) });
}
__name(kj, "kj");
function Pj(t) {
  $.useEffect(() => {
    function n(o) {
      var i, s;
      o.key === "k" && o.metaKey && (o.preventDefault(), (i = t.current) == null || i.focus()), o.key === "Escape" && ((s = t.current) == null || s.blur());
    }
    __name(n, "n");
    return document.addEventListener("keydown", n), () => {
      document.removeEventListener("keydown", n);
    };
  }, [t]);
}
__name(Pj, "Pj");
function ro({ term: t, result: n, children: o }) {
  return n != null && n.total ? o({ ...n.items, term: t }) : null;
}
__name(ro, "ro");
ro.Articles = jj;
ro.Pages = Rj;
ro.Products = $j;
ro.Empty = Ij;
function jj({ term: t, articles: n }) {
  var o;
  return n != null && n.nodes.length ? y.jsxs("div", { className: "search-result", children: [y.jsx("h2", { children: "Articles" }), y.jsx("div", { children: (o = n == null ? void 0 : n.nodes) == null ? void 0 : o.map((i) => {
    const s = Ia({ baseUrl: `/blogs/${i.handle}`, trackingParams: i.trackingParameters, term: t });
    return y.jsx("div", { className: "search-results-item", children: y.jsx(Xe, { prefetch: "intent", to: s, children: i.title }) }, i.id);
  }) }), y.jsx("br", {})] }) : null;
}
__name(jj, "jj");
function Rj({ term: t, pages: n }) {
  var o;
  return n != null && n.nodes.length ? y.jsxs("div", { className: "search-result", children: [y.jsx("h2", { children: "Pages" }), y.jsx("div", { children: (o = n == null ? void 0 : n.nodes) == null ? void 0 : o.map((i) => {
    const s = Ia({ baseUrl: `/pages/${i.handle}`, trackingParams: i.trackingParameters, term: t });
    return y.jsx("div", { className: "search-results-item", children: y.jsx(Xe, { prefetch: "intent", to: s, children: i.title }) }, i.id);
  }) }), y.jsx("br", {})] }) : null;
}
__name(Rj, "Rj");
function $j({ term: t, products: n }) {
  return n != null && n.nodes.length ? y.jsxs("div", { className: "search-result", children: [y.jsx("h2", { children: "Products" }), y.jsx(iy, { connection: n, children: /* @__PURE__ */ __name(({ nodes: o, isLoading: i, NextLink: s, PreviousLink: u }) => {
    const c = o.map((f) => {
      var S, j;
      const h = Ia({ baseUrl: `/products/${f.handle}`, trackingParams: f.trackingParameters, term: t }), v = (S = f == null ? void 0 : f.selectedOrFirstAvailableVariant) == null ? void 0 : S.price, C = (j = f == null ? void 0 : f.selectedOrFirstAvailableVariant) == null ? void 0 : j.image;
      return y.jsx("div", { className: "search-results-item", children: y.jsxs(Xe, { prefetch: "intent", to: h, children: [C && y.jsx(rr, { data: C, alt: f.title, width: 50 }), y.jsxs("div", { children: [y.jsx("p", { children: f.title }), y.jsx("small", { children: v && y.jsx(At, { data: v }) })] })] }) }, f.id);
    });
    return y.jsxs("div", { children: [y.jsx("div", { children: y.jsx(u, { children: i ? "Loading..." : y.jsx("span", { children: "\u2191 Load previous" }) }) }), y.jsxs("div", { children: [c, y.jsx("br", {})] }), y.jsx("div", { children: y.jsx(s, { children: i ? "Loading..." : y.jsx("span", { children: "Load more \u2193" }) }) })] });
  }, "children") }), y.jsx("br", {})] }) : null;
}
__name($j, "$j");
function Ij() {
  return y.jsx("p", { children: "No results, try a different search." });
}
__name(Ij, "Ij");
var Tj = /* @__PURE__ */ __name(() => [{ title: "Hydrogen | Search" }], "Tj");
async function Aj({ request: t, context: n }) {
  const s = new URL(t.url).searchParams.has("predictive") ? qj({ request: t, context: n }) : Uj({ request: t, context: n });
  return s.catch((u) => (console.error(u), { term: "", result: null, error: u.message })), await s;
}
__name(Aj, "Aj");
function Oj() {
  const { type: t, term: n, result: o, error: i } = Lt();
  return t === "predictive" ? null : y.jsxs("div", { className: "search", children: [y.jsx("h1", { children: "Search" }), y.jsx(kj, { children: /* @__PURE__ */ __name(({ inputRef: s }) => y.jsxs(y.Fragment, { children: [y.jsx("input", { defaultValue: n, name: "q", placeholder: "Search\u2026", ref: s, type: "search" }), "\xA0", y.jsx("button", { type: "submit", children: "Search" })] }), "children") }), i && y.jsx("p", { style: { color: "red" }, children: i }), !n || !(o != null && o.total) ? y.jsx(ro.Empty, {}) : y.jsx(ro, { result: o, term: n, children: /* @__PURE__ */ __name(({ articles: s, pages: u, products: c, term: f }) => y.jsxs("div", { children: [y.jsx(ro.Products, { products: c, term: f }), y.jsx(ro.Pages, { pages: u, term: f }), y.jsx(ro.Articles, { articles: s, term: f })] }), "children") }), y.jsx(Su.SearchView, { data: { searchTerm: n, searchResults: o } })] });
}
__name(Oj, "Oj");
var Lj = `#graphql
  fragment SearchProduct on Product {
    __typename
    handle
    id
    publishedAt
    title
    trackingParameters
    vendor
    selectedOrFirstAvailableVariant(
      selectedOptions: []
      ignoreUnknownOptions: true
      caseInsensitiveMatch: true
    ) {
      id
      image {
        url
        altText
        width
        height
      }
      price {
        amount
        currencyCode
      }
      compareAtPrice {
        amount
        currencyCode
      }
      selectedOptions {
        name
        value
      }
      product {
        handle
        title
      }
    }
  }
`;
var Dj = `#graphql
  fragment SearchPage on Page {
     __typename
     handle
    id
    title
    trackingParameters
  }
`;
var Nj = `#graphql
  fragment SearchArticle on Article {
    __typename
    handle
    id
    title
    trackingParameters
  }
`;
var bj = `#graphql
  fragment PageInfoFragment on PageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
`;
var yy = `#graphql
  query RegularSearch(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $term: String!
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    articles: search(
      query: $term,
      types: [ARTICLE],
      first: $first,
    ) {
      nodes {
        ...on Article {
          ...SearchArticle
        }
      }
    }
    pages: search(
      query: $term,
      types: [PAGE],
      first: $first,
    ) {
      nodes {
        ...on Page {
          ...SearchPage
        }
      }
    }
    products: search(
      after: $endCursor,
      before: $startCursor,
      first: $first,
      last: $last,
      query: $term,
      sortKey: RELEVANCE,
      types: [PRODUCT],
      unavailableProducts: HIDE,
    ) {
      nodes {
        ...on Product {
          ...SearchProduct
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
  ${Lj}
  ${Dj}
  ${Nj}
  ${bj}
`;
async function Uj({ request: t, context: n }) {
  const { storefront: o } = n, i = new URL(t.url), s = $a(t, { pageBy: 8 }), u = String(i.searchParams.get("q") || ""), { errors: c, ...f } = await o.query(yy, { variables: { ...s, term: u } });
  if (!f) throw new Error("No search data returned from Shopify API");
  const h = Object.values(f).reduce((C, { nodes: S }) => C + S.length, 0), v = c ? c.map(({ message: C }) => C).join(", ") : void 0;
  return { type: "regular", term: u, error: v, result: { total: h, items: f } };
}
__name(Uj, "Uj");
var Mj = `#graphql
  fragment PredictiveArticle on Article {
    __typename
    id
    title
    handle
    blog {
      handle
    }
    image {
      url
      altText
      width
      height
    }
    trackingParameters
  }
`;
var Fj = `#graphql
  fragment PredictiveCollection on Collection {
    __typename
    id
    title
    handle
    image {
      url
      altText
      width
      height
    }
    trackingParameters
  }
`;
var zj = `#graphql
  fragment PredictivePage on Page {
    __typename
    id
    title
    handle
    trackingParameters
  }
`;
var Hj = `#graphql
  fragment PredictiveProduct on Product {
    __typename
    id
    title
    handle
    trackingParameters
    selectedOrFirstAvailableVariant(
      selectedOptions: []
      ignoreUnknownOptions: true
      caseInsensitiveMatch: true
    ) {
      id
      image {
        url
        altText
        width
        height
      }
      price {
        amount
        currencyCode
      }
    }
  }
`;
var Bj = `#graphql
  fragment PredictiveQuery on SearchQuerySuggestion {
    __typename
    text
    styledText
    trackingParameters
  }
`;
var Vj = `#graphql
  query PredictiveSearch(
    $country: CountryCode
    $language: LanguageCode
    $limit: Int!
    $limitScope: PredictiveSearchLimitScope!
    $term: String!
    $types: [PredictiveSearchType!]
  ) @inContext(country: $country, language: $language) {
    predictiveSearch(
      limit: $limit,
      limitScope: $limitScope,
      query: $term,
      types: $types,
    ) {
      articles {
        ...PredictiveArticle
      }
      collections {
        ...PredictiveCollection
      }
      pages {
        ...PredictivePage
      }
      products {
        ...PredictiveProduct
      }
      queries {
        ...PredictiveQuery
      }
    }
  }
  ${Mj}
  ${Fj}
  ${zj}
  ${Hj}
  ${Bj}
`;
async function qj({ request: t, context: n }) {
  const { storefront: o } = n, i = new URL(t.url), s = String(i.searchParams.get("q") || "").trim(), u = Number(i.searchParams.get("limit") || 10), c = "predictive";
  if (!s) return { type: c, term: s, result: py() };
  const { predictiveSearch: f, errors: h } = await o.query(Vj, { variables: { limit: u, limitScope: "EACH", term: s } });
  if (h) throw new Error(`Shopify API errors: ${h.map(({ message: C }) => C).join(", ")}`);
  if (!f) throw new Error("No predictive search data returned from Shopify API");
  const v = Object.values(f).reduce((C, S) => C + S.length, 0);
  return { type: c, term: s, result: { items: f, total: v } };
}
__name(qj, "qj");
var Wj = Object.freeze(Object.defineProperty({ __proto__: null, SEARCH_QUERY: yy, default: Oj, loader: Aj, meta: Tj }, Symbol.toStringTag, { value: "Module" }));
var Qj = /* @__PURE__ */ __name(() => [{ title: "Hydrogen | Cart" }], "Qj");
var Gj = /* @__PURE__ */ __name(({ actionHeaders: t }) => t, "Gj");
async function Yj({ request: t, context: n }) {
  var P;
  const { cart: o } = n, i = await t.formData(), { action: s, inputs: u } = nt.getFormInput(i);
  if (!s) throw new Error("No action provided");
  let c = 200, f;
  switch (s) {
    case nt.ACTIONS.LinesAdd:
      f = await o.addLines(u.lines);
      break;
    case nt.ACTIONS.LinesUpdate:
      f = await o.updateLines(u.lines);
      break;
    case nt.ACTIONS.LinesRemove:
      f = await o.removeLines(u.lineIds);
      break;
    case nt.ACTIONS.DiscountCodesUpdate: {
      const I = u.discountCode, L = I ? [I] : [];
      L.push(...u.discountCodes), f = await o.updateDiscountCodes(L);
      break;
    }
    case nt.ACTIONS.GiftCardCodesUpdate: {
      const I = u.giftCardCode, L = I ? [I] : [];
      L.push(...u.giftCardCodes), f = await o.updateGiftCardCodes(L);
      break;
    }
    case nt.ACTIONS.BuyerIdentityUpdate: {
      f = await o.updateBuyerIdentity({ ...u.buyerIdentity });
      break;
    }
    default:
      throw new Error(`${s} cart action is not defined`);
  }
  const h = (P = f == null ? void 0 : f.cart) == null ? void 0 : P.id, v = h ? o.setCartId(f.cart.id) : new Headers(), { cart: C, errors: S, warnings: j } = f, R = i.get("redirectTo") ?? null;
  return typeof R == "string" && (c = 303, v.set("Location", R)), er({ cart: C, errors: S, warnings: j, analytics: { cartId: h } }, { status: c, headers: v });
}
__name(Yj, "Yj");
async function Jj({ context: t }) {
  const { cart: n } = t;
  return await n.get();
}
__name(Jj, "Jj");
function Kj() {
  const t = Lt();
  return y.jsxs("div", { className: "cart", children: [y.jsx("h1", { children: "Cart" }), y.jsx(fy, { layout: "page", cart: t })] });
}
__name(Kj, "Kj");
var Xj = Object.freeze(Object.defineProperty({ __proto__: null, action: Yj, default: Kj, headers: Gj, loader: Jj, meta: Qj }, Symbol.toStringTag, { value: "Module" }));
async function Zj({ request: t, context: n, params: o }) {
  var R;
  const { cart: i } = n, { lines: s } = o;
  if (!s) return kn("/cart");
  const u = s.split(",").map((P) => {
    const I = P.split(":"), L = I[0], U = parseInt(I[1], 10);
    return { merchandiseId: `gid://shopify/ProductVariant/${L}`, quantity: U };
  }), c = new URL(t.url), h = new URLSearchParams(c.search).get("discount"), v = h ? [h] : [], C = await i.create({ lines: u, discountCodes: v }), S = C.cart;
  if ((R = C.errors) != null && R.length || !S) throw new Response("Link may be expired. Try checking the URL.", { status: 410 });
  const j = i.setCartId(S.id);
  if (S.checkoutUrl) return kn(S.checkoutUrl, { headers: j });
  throw new Error("No checkout URL found");
}
__name(Zj, "Zj");
function eR() {
  return null;
}
__name(eR, "eR");
var tR = Object.freeze(Object.defineProperty({ __proto__: null, default: eR, loader: Zj }, Symbol.toStringTag, { value: "Module" }));
async function rR({ request: t }) {
  throw new Response(`${new URL(t.url).pathname} not found`, { status: 404 });
}
__name(rR, "rR");
function nR() {
  return null;
}
__name(nR, "nR");
var oR = Object.freeze(Object.defineProperty({ __proto__: null, default: nR, loader: rR }, Symbol.toStringTag, { value: "Module" }));
var aR = { entry: { module: "/assets/entry.client-DOteOS92.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/components-CY5yIsQP.js"], css: [] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: true, module: "/assets/root-E8FxB0Np.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/components-CY5yIsQP.js"], css: [] }, "./layout": { id: "./layout", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: false, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/layout-CF14fsjD.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/index-DpE-rbFQ.js", "/assets/ProductPrice-CPiUbGwZ.js", "/assets/components-CY5yIsQP.js", "/assets/CartMain-Av4GmgJy.js", "/assets/search-DOeYwaXi.js", "/assets/Image-DFwxuKfj.js", "/assets/Money-DCVJuxXq.js", "/assets/variants-DMeq4Cuy.js"], css: [] }, "routes/[robots.txt]": { id: "routes/[robots.txt]", parentId: "./layout", path: "robots.txt", index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/_robots.txt_-l0sNRNKZ.js", imports: [], css: [] }, "routes/($locale)": { id: "routes/($locale)", parentId: "./layout", path: ":locale?", index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale)-l0sNRNKZ.js", imports: [], css: [] }, "routes/($locale).blogs.$blogHandle.$articleHandle": { id: "routes/($locale).blogs.$blogHandle.$articleHandle", parentId: "routes/($locale)", path: "blogs/:blogHandle/:articleHandle", index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).blogs._blogHandle._articleHandle-CLEvbZ6j.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/components-CY5yIsQP.js", "/assets/Image-DFwxuKfj.js"], css: [] }, "routes/($locale).sitemap.$type.$page[.xml]": { id: "routes/($locale).sitemap.$type.$page[.xml]", parentId: "routes/($locale)", path: "sitemap/:type/:page.xml", index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).sitemap._type._page_.xml_-l0sNRNKZ.js", imports: [], css: [] }, "routes/($locale).blogs.$blogHandle._index": { id: "routes/($locale).blogs.$blogHandle._index", parentId: "routes/($locale)", path: "blogs/:blogHandle", index: true, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).blogs._blogHandle._index-BNOAcwZG.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/PaginatedResourceSection-DA9N6Z4u.js", "/assets/components-CY5yIsQP.js", "/assets/Image-DFwxuKfj.js", "/assets/index-DpE-rbFQ.js"], css: [] }, "routes/($locale).collections.$handle": { id: "routes/($locale).collections.$handle", parentId: "routes/($locale)", path: "collections/:handle", index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).collections._handle-CY-L9okI.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/index-DpE-rbFQ.js", "/assets/variants-DMeq4Cuy.js", "/assets/PaginatedResourceSection-DA9N6Z4u.js", "/assets/components-CY5yIsQP.js", "/assets/Image-DFwxuKfj.js", "/assets/Money-DCVJuxXq.js"], css: [] }, "routes/($locale).account_.authorize": { id: "routes/($locale).account_.authorize", parentId: "routes/($locale)", path: "account/authorize", index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).account_.authorize-l0sNRNKZ.js", imports: [], css: [] }, "routes/($locale).collections._index": { id: "routes/($locale).collections._index", parentId: "routes/($locale)", path: "collections", index: true, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).collections._index-ChkRRFMI.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/PaginatedResourceSection-DA9N6Z4u.js", "/assets/components-CY5yIsQP.js", "/assets/Image-DFwxuKfj.js", "/assets/index-DpE-rbFQ.js"], css: [] }, "routes/($locale).policies.$handle": { id: "routes/($locale).policies.$handle", parentId: "routes/($locale)", path: "policies/:handle", index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).policies._handle-DqdgpC-A.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/components-CY5yIsQP.js"], css: [] }, "routes/($locale).products.$handle": { id: "routes/($locale).products.$handle", parentId: "routes/($locale)", path: "products/:handle", index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).products._handle-DFLRMIi-.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/index-DpE-rbFQ.js", "/assets/ProductPrice-CPiUbGwZ.js", "/assets/Image-DFwxuKfj.js", "/assets/components-CY5yIsQP.js", "/assets/Money-DCVJuxXq.js"], css: [] }, "routes/($locale).account_.logout": { id: "routes/($locale).account_.logout", parentId: "routes/($locale)", path: "account/logout", index: void 0, caseSensitive: void 0, hasAction: true, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).account_.logout-l0sNRNKZ.js", imports: [], css: [] }, "routes/($locale).collections.all": { id: "routes/($locale).collections.all", parentId: "routes/($locale)", path: "collections/all", index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).collections.all-Bdz5_qtq.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/variants-DMeq4Cuy.js", "/assets/PaginatedResourceSection-DA9N6Z4u.js", "/assets/components-CY5yIsQP.js", "/assets/Image-DFwxuKfj.js", "/assets/Money-DCVJuxXq.js", "/assets/index-DpE-rbFQ.js"], css: [] }, "routes/($locale).policies._index": { id: "routes/($locale).policies._index", parentId: "routes/($locale)", path: "policies", index: true, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).policies._index-3R9WGT3w.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/components-CY5yIsQP.js"], css: [] }, "routes/($locale).account_.login": { id: "routes/($locale).account_.login", parentId: "routes/($locale)", path: "account/login", index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).account_.login-l0sNRNKZ.js", imports: [], css: [] }, "routes/($locale).discount.$code": { id: "routes/($locale).discount.$code", parentId: "routes/($locale)", path: "discount/:code", index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).discount._code-l0sNRNKZ.js", imports: [], css: [] }, "routes/($locale).[sitemap.xml]": { id: "routes/($locale).[sitemap.xml]", parentId: "routes/($locale)", path: "sitemap.xml", index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale)._sitemap.xml_-l0sNRNKZ.js", imports: [], css: [] }, "routes/($locale).pages.$handle": { id: "routes/($locale).pages.$handle", parentId: "routes/($locale)", path: "pages/:handle", index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).pages._handle-CtpF1O-f.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/components-CY5yIsQP.js"], css: [] }, "routes/($locale).blogs._index": { id: "routes/($locale).blogs._index", parentId: "routes/($locale)", path: "blogs", index: true, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).blogs._index-DzOcaBOI.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/PaginatedResourceSection-DA9N6Z4u.js", "/assets/components-CY5yIsQP.js", "/assets/index-DpE-rbFQ.js"], css: [] }, "routes/($locale).account": { id: "routes/($locale).account", parentId: "routes/($locale)", path: "account", index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).account-DpSRXHxO.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/components-CY5yIsQP.js"], css: [] }, "routes/($locale).account.orders._index": { id: "routes/($locale).account.orders._index", parentId: "routes/($locale).account", path: "orders", index: true, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).account.orders._index-GO8tey_P.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/PaginatedResourceSection-DA9N6Z4u.js", "/assets/components-CY5yIsQP.js", "/assets/index-DpE-rbFQ.js", "/assets/Money-DCVJuxXq.js"], css: [] }, "routes/($locale).account.orders.$id": { id: "routes/($locale).account.orders.$id", parentId: "routes/($locale).account", path: "orders/:id", index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).account.orders._id-B_KDWvlq.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/components-CY5yIsQP.js", "/assets/Money-DCVJuxXq.js", "/assets/Image-DFwxuKfj.js"], css: [] }, "routes/($locale).account.addresses": { id: "routes/($locale).account.addresses", parentId: "routes/($locale).account", path: "addresses", index: void 0, caseSensitive: void 0, hasAction: true, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).account.addresses-SCZst75X.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/components-CY5yIsQP.js"], css: [] }, "routes/($locale).account.profile": { id: "routes/($locale).account.profile", parentId: "routes/($locale).account", path: "profile", index: void 0, caseSensitive: void 0, hasAction: true, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).account.profile-C3GSJQgK.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/components-CY5yIsQP.js"], css: [] }, "routes/($locale).account._index": { id: "routes/($locale).account._index", parentId: "routes/($locale).account", path: void 0, index: true, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).account._index-l0sNRNKZ.js", imports: [], css: [] }, "routes/($locale).account.$": { id: "routes/($locale).account.$", parentId: "routes/($locale).account", path: "*", index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).account._-l0sNRNKZ.js", imports: [], css: [] }, "routes/($locale)._index": { id: "routes/($locale)._index", parentId: "routes/($locale)", path: void 0, index: true, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale)._index-n7q6yrBN.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/components-CY5yIsQP.js", "/assets/Image-DFwxuKfj.js", "/assets/Money-DCVJuxXq.js"], css: [] }, "routes/($locale).search": { id: "routes/($locale).search", parentId: "routes/($locale)", path: "search", index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).search-DmyJqPkj.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/index-DpE-rbFQ.js", "/assets/components-CY5yIsQP.js", "/assets/search-DOeYwaXi.js", "/assets/Image-DFwxuKfj.js", "/assets/Money-DCVJuxXq.js"], css: [] }, "routes/($locale).cart": { id: "routes/($locale).cart", parentId: "routes/($locale)", path: "cart", index: void 0, caseSensitive: void 0, hasAction: true, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).cart-D-xzibFt.js", imports: ["/assets/index-J9RLQZ82.js", "/assets/CartMain-Av4GmgJy.js", "/assets/components-CY5yIsQP.js", "/assets/index-DpE-rbFQ.js", "/assets/ProductPrice-CPiUbGwZ.js", "/assets/Money-DCVJuxXq.js", "/assets/variants-DMeq4Cuy.js", "/assets/Image-DFwxuKfj.js"], css: [] }, "routes/($locale).cart.$lines": { id: "routes/($locale).cart.$lines", parentId: "routes/($locale).cart", path: ":lines", index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale).cart._lines-C6d-v1ok.js", imports: [], css: [] }, "routes/($locale).$": { id: "routes/($locale).$", parentId: "routes/($locale)", path: "*", index: void 0, caseSensitive: void 0, hasAction: false, hasLoader: true, hasClientAction: false, hasClientLoader: false, hasErrorBoundary: false, module: "/assets/(_locale)._-DtCUJE-g.js", imports: [], css: [] } }, url: "/assets/manifest-4683bfc1.js", version: "4683bfc1" };
var iR = "production";
var sR = "dist/client";
var lR = "/";
var uR = { v3_fetcherPersist: true, v3_relativeSplatPath: true, v3_throwAbortReason: true, v3_routeConfig: true, v3_singleFetch: true, v3_lazyRouteDiscovery: true, unstable_optimizeDeps: false };
var cR = false;
var dR = "/";
var fR = { module: U_ };
var pR = { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: J_ }, "./layout": { id: "./layout", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: Ok }, "routes/[robots.txt]": { id: "routes/[robots.txt]", parentId: "./layout", path: "robots.txt", index: void 0, caseSensitive: void 0, module: bk }, "routes/($locale)": { id: "routes/($locale)", parentId: "./layout", path: ":locale?", index: void 0, caseSensitive: void 0, module: Mk }, "routes/($locale).blogs.$blogHandle.$articleHandle": { id: "routes/($locale).blogs.$blogHandle.$articleHandle", parentId: "routes/($locale)", path: "blogs/:blogHandle/:articleHandle", index: void 0, caseSensitive: void 0, module: Wk }, "routes/($locale).sitemap.$type.$page[.xml]": { id: "routes/($locale).sitemap.$type.$page[.xml]", parentId: "routes/($locale)", path: "sitemap/:type/:page.xml", index: void 0, caseSensitive: void 0, module: Gk }, "routes/($locale).blogs.$blogHandle._index": { id: "routes/($locale).blogs.$blogHandle._index", parentId: "routes/($locale)", path: "blogs/:blogHandle", index: true, caseSensitive: void 0, module: r1 }, "routes/($locale).collections.$handle": { id: "routes/($locale).collections.$handle", parentId: "routes/($locale)", path: "collections/:handle", index: void 0, caseSensitive: void 0, module: y1 }, "routes/($locale).account_.authorize": { id: "routes/($locale).account_.authorize", parentId: "routes/($locale)", path: "account/authorize", index: void 0, caseSensitive: void 0, module: w1 }, "routes/($locale).collections._index": { id: "routes/($locale).collections._index", parentId: "routes/($locale)", path: "collections", index: true, caseSensitive: void 0, module: P1 }, "routes/($locale).policies.$handle": { id: "routes/($locale).policies.$handle", parentId: "routes/($locale)", path: "policies/:handle", index: void 0, caseSensitive: void 0, module: T1 }, "routes/($locale).products.$handle": { id: "routes/($locale).products.$handle", parentId: "routes/($locale)", path: "products/:handle", index: void 0, caseSensitive: void 0, module: B1 }, "routes/($locale).account_.logout": { id: "routes/($locale).account_.logout", parentId: "routes/($locale)", path: "account/logout", index: void 0, caseSensitive: void 0, module: W1 }, "routes/($locale).collections.all": { id: "routes/($locale).collections.all", parentId: "routes/($locale)", path: "collections/all", index: void 0, caseSensitive: void 0, module: tP }, "routes/($locale).policies._index": { id: "routes/($locale).policies._index", parentId: "routes/($locale)", path: "policies", index: true, caseSensitive: void 0, module: aP }, "routes/($locale).account_.login": { id: "routes/($locale).account_.login", parentId: "routes/($locale)", path: "account/login", index: void 0, caseSensitive: void 0, module: sP }, "routes/($locale).discount.$code": { id: "routes/($locale).discount.$code", parentId: "routes/($locale)", path: "discount/:code", index: void 0, caseSensitive: void 0, module: uP }, "routes/($locale).[sitemap.xml]": { id: "routes/($locale).[sitemap.xml]", parentId: "routes/($locale)", path: "sitemap.xml", index: void 0, caseSensitive: void 0, module: dP }, "routes/($locale).pages.$handle": { id: "routes/($locale).pages.$handle", parentId: "routes/($locale)", path: "pages/:handle", index: void 0, caseSensitive: void 0, module: vP }, "routes/($locale).blogs._index": { id: "routes/($locale).blogs._index", parentId: "routes/($locale)", path: "blogs", index: true, caseSensitive: void 0, module: kP }, "routes/($locale).account": { id: "routes/($locale).account", parentId: "routes/($locale)", path: "account", index: void 0, caseSensitive: void 0, module: OP }, "routes/($locale).account.orders._index": { id: "routes/($locale).account.orders._index", parentId: "routes/($locale).account", path: "orders", index: true, caseSensitive: void 0, module: HP }, "routes/($locale).account.orders.$id": { id: "routes/($locale).account.orders.$id", parentId: "routes/($locale).account", path: "orders/:id", index: void 0, caseSensitive: void 0, module: GP }, "routes/($locale).account.addresses": { id: "routes/($locale).account.addresses", parentId: "routes/($locale).account", path: "addresses", index: void 0, caseSensitive: void 0, module: oj }, "routes/($locale).account.profile": { id: "routes/($locale).account.profile", parentId: "routes/($locale).account", path: "profile", index: void 0, caseSensitive: void 0, module: cj }, "routes/($locale).account._index": { id: "routes/($locale).account._index", parentId: "routes/($locale).account", path: void 0, index: true, caseSensitive: void 0, module: fj }, "routes/($locale).account.$": { id: "routes/($locale).account.$", parentId: "routes/($locale).account", path: "*", index: void 0, caseSensitive: void 0, module: hj }, "routes/($locale)._index": { id: "routes/($locale)._index", parentId: "routes/($locale)", path: void 0, index: true, caseSensitive: void 0, module: _j }, "routes/($locale).search": { id: "routes/($locale).search", parentId: "routes/($locale)", path: "search", index: void 0, caseSensitive: void 0, module: Wj }, "routes/($locale).cart": { id: "routes/($locale).cart", parentId: "routes/($locale)", path: "cart", index: void 0, caseSensitive: void 0, module: Xj }, "routes/($locale).cart.$lines": { id: "routes/($locale).cart.$lines", parentId: "routes/($locale).cart", path: ":lines", index: void 0, caseSensitive: void 0, module: tR }, "routes/($locale).$": { id: "routes/($locale).$", parentId: "routes/($locale)", path: "*", index: void 0, caseSensitive: void 0, module: oR } };
var vy = Object.freeze(Object.defineProperty({ __proto__: null, assets: aR, assetsBuildDirectory: sR, basename: lR, entry: fR, future: uR, isSpaMode: cR, mode: iR, publicPath: dR, routes: pR }, Symbol.toStringTag, { value: "Module" }));
var vi;
var Qr;
var hR = class {
  static {
    __name(this, "hR");
  }
  constructor(n, o) {
    os(this, "isPending", false);
    qc(this, vi);
    qc(this, Qr);
    Wc(this, vi, n), Wc(this, Qr, o);
  }
  static async init(n, o) {
    const i = s1({ cookie: { name: "session", httpOnly: true, path: "/", sameSite: "lax", secrets: o } }), s = await i.getSession(n.headers.get("Cookie")).catch(() => i.getSession());
    return new this(i, s);
  }
  get has() {
    return wn(this, Qr).has;
  }
  get get() {
    return wn(this, Qr).get;
  }
  get flash() {
    return wn(this, Qr).flash;
  }
  get unset() {
    return this.isPending = true, wn(this, Qr).unset;
  }
  get set() {
    return this.isPending = true, wn(this, Qr).set;
  }
  destroy() {
    return wn(this, vi).destroySession(wn(this, Qr));
  }
  commit() {
    return this.isPending = false, wn(this, vi).commitSession(wn(this, Qr));
  }
};
vi = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap();
function mR(t) {
  var c;
  const o = ((c = new URL(t.url).pathname.split("/")[1]) == null ? void 0 : c.toUpperCase()) ?? "";
  let i = "", [s, u] = ["EN", "US"];
  return /^[A-Z]{2}-[A-Z]{2}$/i.test(o) && (i = "/" + o, [s, u] = o.split("-")), { language: s, country: u, pathPrefix: i };
}
__name(mR, "mR");
async function wy(t, n, o) {
  if (!(n != null && n.SESSION_SECRET)) throw new Error("SESSION_SECRET environment variable is not set");
  const i = o.waitUntil.bind(o), [s, u] = await Promise.all([caches.open("hydrogen"), hR.init(t, [n.SESSION_SECRET])]);
  return { ...c_({ env: n, request: t, cache: s, waitUntil: i, session: u, i18n: mR(t), cart: { queryFragment: F_ } }) };
}
__name(wy, "wy");
var gR = {};
var ER = { async fetch(t, n, o) {
  try {
    const i = await wy(t, n, o), u = await my({ build: vy, mode: "production", getLoadContext: /* @__PURE__ */ __name(() => i, "getLoadContext") })(t);
    return i.session.isPending && u.headers.set("Set-Cookie", await i.session.commit()), u.status === 404 ? x_({ request: t, response: u, storefront: i.storefront }) : u;
  } catch (i) {
    return console.error(i), new Response("An unexpected error occurred", { status: 500 });
  }
} };
async function _R(t, n) {
  try {
    const o = new URL(t.url || "/", `http://${t.headers.host || "localhost"}`), i = new Request(o.toString(), { method: t.method || "GET", headers: new Headers(t.headers) }), u = await wy(i, { env: gR }, { waitUntil: /* @__PURE__ */ __name((v) => v, "waitUntil") }), f = await my({ build: vy, mode: "production", getLoadContext: /* @__PURE__ */ __name(() => u, "getLoadContext") })(i);
    for (const [v, C] of f.headers.entries()) n.setHeader(v, C);
    n.statusCode = f.status;
    const h = await f.text();
    n.end(h);
  } catch (o) {
    console.error(o), n.statusCode = 500, n.end("An unexpected error occurred");
  }
}
__name(_R, "_R");
function yR({ headTags: t }) {
  return xy(t), null;
}
__name(yR, "yR");
var pd = "text-transform: uppercase;";
var vR = "text-transform: uppercase; font-weight: bold; text-transform: uppercase;font-weight: bold";
function xy(t) {
  console.log(" "), console.log("%cSEO Meta Tags", `${vR}`), console.log(" "), t.forEach((n) => {
    if (n.tag === "script") {
      if (console.log("%c\u2022 JSON LD ", pd), n.children) try {
        console.table(JSON.parse(n.children), ["name", "content"]);
      } catch {
        console.log(n.children);
      }
    } else {
      if (console.log(`%c\u2022 ${n.tag} `, pd), n.children) if (typeof n.children == "string") console.log(`\u21B3 ${n.children}`);
      else try {
        Object.entries(JSON.parse(n.children)).map(([o, i]) => console.log(`\u21B3 ${i}`));
      } catch {
        console.log(n.children);
      }
      if (n.props.property === "og:image:url") {
        let o = n.props.content;
        wR(o).then((i) => {
          let s = `font-size: 400px; padding: 10px; background: white url(${i}) no-repeat center; background-size: contain;`;
          console.log("%c\u2022 Share image preview", pd), console.log("%c  ", s), console.log(`\u21B3 ${o}`);
        }).catch((i) => {
          console.error(i);
        });
      }
      Object.entries(n.props).map(([o, i]) => {
        console.log(`\u21B3 ${o} \u2192 ${i}`);
      });
    }
    console.log(" ");
  });
}
__name(xy, "xy");
async function wR(t) {
  let n = await (await (await fetch(t)).blob()).arrayBuffer();
  return `data:image/png;base64,${xR(n)}`;
}
__name(wR, "wR");
function xR(t) {
  let n = "", o = new Uint8Array(t), i = o.byteLength;
  for (let s = 0; s < i; s++) n += String.fromCharCode(o[s]);
  return btoa(n);
}
__name(xR, "xR");
var SR = Object.freeze(Object.defineProperty({ __proto__: null, default: yR, logSeoTags: xy }, Symbol.toStringTag, { value: "Module" }));

// ../../../../../../opt/homebrew/lib/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../../../../opt/homebrew/lib/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-NmnM2i/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = ER;

// ../../../../../../opt/homebrew/lib/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-NmnM2i/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default,
  _R as vercelHandler
};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @remix-run/router v1.23.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
/**
* React Router v6.30.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
/**
* React Router DOM v6.30.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
/*!
* cookie
* Copyright(c) 2012-2014 Roman Shtylman
* Copyright(c) 2015 Douglas Christopher Wilson
* MIT Licensed
*/
/**
* @remix-run/server-runtime v2.16.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
/**
* @remix-run/react v2.16.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
/**
* @license React
* react-dom-server-legacy.browser.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* react-dom-server.browser.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
//! @see https://shopify.dev/docs/api/storefront/latest/queries/cart
//# sourceMappingURL=index.js.map
