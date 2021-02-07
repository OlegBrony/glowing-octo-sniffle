var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// _snowpack/env.js
var env_exports = {};
__export(env_exports, {
  MODE: () => MODE,
  NODE_ENV: () => NODE_ENV,
  SSR: () => SSR
});
var MODE = "production";
var NODE_ENV = "production";
var SSR = false;

// _snowpack/pkg/common/_commonjsHelpers-668e6127.js
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}

// _snowpack/pkg/common/index-4f86a9c5.js
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i2 = 0; i2 < 10; i2++) {
      test2["_" + String.fromCharCode(i2)] = i2;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n3) {
      return test2[n3];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s2 = 1; s2 < arguments.length; s2++) {
    from = Object(arguments[s2]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i2 = 0; i2 < symbols.length; i2++) {
        if (propIsEnumerable.call(from, symbols[i2])) {
          to[symbols[i2]] = from[symbols[i2]];
        }
      }
    }
  }
  return to;
};
var react_production_min = createCommonjsModule(function(module, exports) {
  var n3 = 60103, p3 = 60106;
  exports.Fragment = 60107;
  exports.StrictMode = 60108;
  exports.Profiler = 60114;
  var q2 = 60109, r2 = 60110, t3 = 60112;
  exports.Suspense = 60113;
  var u2 = 60115, v3 = 60116;
  if (typeof Symbol === "function" && Symbol.for) {
    var w3 = Symbol.for;
    n3 = w3("react.element");
    p3 = w3("react.portal");
    exports.Fragment = w3("react.fragment");
    exports.StrictMode = w3("react.strict_mode");
    exports.Profiler = w3("react.profiler");
    q2 = w3("react.provider");
    r2 = w3("react.context");
    t3 = w3("react.forward_ref");
    exports.Suspense = w3("react.suspense");
    u2 = w3("react.memo");
    v3 = w3("react.lazy");
  }
  var x2 = typeof Symbol === "function" && Symbol.iterator;
  function y3(a2) {
    if (a2 === null || typeof a2 !== "object")
      return null;
    a2 = x2 && a2[x2] || a2["@@iterator"];
    return typeof a2 === "function" ? a2 : null;
  }
  function z3(a2) {
    for (var b3 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c3 = 1; c3 < arguments.length; c3++)
      b3 += "&args[]=" + encodeURIComponent(arguments[c3]);
    return "Minified React error #" + a2 + "; visit " + b3 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var A2 = {isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  }}, B4 = {};
  function C(a2, b3, c3) {
    this.props = a2;
    this.context = b3;
    this.refs = B4;
    this.updater = c3 || A2;
  }
  C.prototype.isReactComponent = {};
  C.prototype.setState = function(a2, b3) {
    if (typeof a2 !== "object" && typeof a2 !== "function" && a2 != null)
      throw Error(z3(85));
    this.updater.enqueueSetState(this, a2, b3, "setState");
  };
  C.prototype.forceUpdate = function(a2) {
    this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
  };
  function D2() {
  }
  D2.prototype = C.prototype;
  function E3(a2, b3, c3) {
    this.props = a2;
    this.context = b3;
    this.refs = B4;
    this.updater = c3 || A2;
  }
  var F3 = E3.prototype = new D2();
  F3.constructor = E3;
  objectAssign(F3, C.prototype);
  F3.isPureReactComponent = true;
  var G4 = {current: null}, H4 = Object.prototype.hasOwnProperty, I4 = {key: true, ref: true, __self: true, __source: true};
  function J3(a2, b3, c3) {
    var e4, d3 = {}, k2 = null, h3 = null;
    if (b3 != null)
      for (e4 in b3.ref !== void 0 && (h3 = b3.ref), b3.key !== void 0 && (k2 = "" + b3.key), b3)
        H4.call(b3, e4) && !I4.hasOwnProperty(e4) && (d3[e4] = b3[e4]);
    var g4 = arguments.length - 2;
    if (g4 === 1)
      d3.children = c3;
    else if (1 < g4) {
      for (var f3 = Array(g4), m3 = 0; m3 < g4; m3++)
        f3[m3] = arguments[m3 + 2];
      d3.children = f3;
    }
    if (a2 && a2.defaultProps)
      for (e4 in g4 = a2.defaultProps, g4)
        d3[e4] === void 0 && (d3[e4] = g4[e4]);
    return {$$typeof: n3, type: a2, key: k2, ref: h3, props: d3, _owner: G4.current};
  }
  function K3(a2, b3) {
    return {$$typeof: n3, type: a2.type, key: b3, ref: a2.ref, props: a2.props, _owner: a2._owner};
  }
  function L3(a2) {
    return typeof a2 === "object" && a2 !== null && a2.$$typeof === n3;
  }
  function escape(a2) {
    var b3 = {"=": "=0", ":": "=2"};
    return "$" + a2.replace(/[=:]/g, function(a3) {
      return b3[a3];
    });
  }
  var M4 = /\/+/g;
  function N3(a2, b3) {
    return typeof a2 === "object" && a2 !== null && a2.key != null ? escape("" + a2.key) : b3.toString(36);
  }
  function O2(a2, b3, c3, e4, d3) {
    var k2 = typeof a2;
    if (k2 === "undefined" || k2 === "boolean")
      a2 = null;
    var h3 = false;
    if (a2 === null)
      h3 = true;
    else
      switch (k2) {
        case "string":
        case "number":
          h3 = true;
          break;
        case "object":
          switch (a2.$$typeof) {
            case n3:
            case p3:
              h3 = true;
          }
      }
    if (h3)
      return h3 = a2, d3 = d3(h3), a2 = e4 === "" ? "." + N3(h3, 0) : e4, Array.isArray(d3) ? (c3 = "", a2 != null && (c3 = a2.replace(M4, "$&/") + "/"), O2(d3, b3, c3, "", function(a3) {
        return a3;
      })) : d3 != null && (L3(d3) && (d3 = K3(d3, c3 + (!d3.key || h3 && h3.key === d3.key ? "" : ("" + d3.key).replace(M4, "$&/") + "/") + a2)), b3.push(d3)), 1;
    h3 = 0;
    e4 = e4 === "" ? "." : e4 + ":";
    if (Array.isArray(a2))
      for (var g4 = 0; g4 < a2.length; g4++) {
        k2 = a2[g4];
        var f3 = e4 + N3(k2, g4);
        h3 += O2(k2, b3, c3, f3, d3);
      }
    else if (f3 = y3(a2), typeof f3 === "function")
      for (a2 = f3.call(a2), g4 = 0; !(k2 = a2.next()).done; )
        k2 = k2.value, f3 = e4 + N3(k2, g4++), h3 += O2(k2, b3, c3, f3, d3);
    else if (k2 === "object")
      throw b3 = "" + a2, Error(z3(31, b3 === "[object Object]" ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b3));
    return h3;
  }
  function P3(a2, b3, c3) {
    if (a2 == null)
      return a2;
    var e4 = [], d3 = 0;
    O2(a2, e4, "", "", function(a3) {
      return b3.call(c3, a3, d3++);
    });
    return e4;
  }
  function Q3(a2) {
    if (a2._status === -1) {
      var b3 = a2._result;
      b3 = b3();
      a2._status = 0;
      a2._result = b3;
      b3.then(function(b4) {
        a2._status === 0 && (b4 = b4.default, a2._status = 1, a2._result = b4);
      }, function(b4) {
        a2._status === 0 && (a2._status = 2, a2._result = b4);
      });
    }
    if (a2._status === 1)
      return a2._result;
    throw a2._result;
  }
  var R2 = {current: null};
  function S4() {
    var a2 = R2.current;
    if (a2 === null)
      throw Error(z3(321));
    return a2;
  }
  var T4 = {ReactCurrentDispatcher: R2, ReactCurrentBatchConfig: {transition: 0}, ReactCurrentOwner: G4, IsSomeRendererActing: {current: false}, assign: objectAssign};
  exports.Children = {map: P3, forEach: function(a2, b3, c3) {
    P3(a2, function() {
      b3.apply(this, arguments);
    }, c3);
  }, count: function(a2) {
    var b3 = 0;
    P3(a2, function() {
      b3++;
    });
    return b3;
  }, toArray: function(a2) {
    return P3(a2, function(a3) {
      return a3;
    }) || [];
  }, only: function(a2) {
    if (!L3(a2))
      throw Error(z3(143));
    return a2;
  }};
  exports.Component = C;
  exports.PureComponent = E3;
  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T4;
  exports.cloneElement = function(a2, b3, c3) {
    if (a2 === null || a2 === void 0)
      throw Error(z3(267, a2));
    var e4 = objectAssign({}, a2.props), d3 = a2.key, k2 = a2.ref, h3 = a2._owner;
    if (b3 != null) {
      b3.ref !== void 0 && (k2 = b3.ref, h3 = G4.current);
      b3.key !== void 0 && (d3 = "" + b3.key);
      if (a2.type && a2.type.defaultProps)
        var g4 = a2.type.defaultProps;
      for (f3 in b3)
        H4.call(b3, f3) && !I4.hasOwnProperty(f3) && (e4[f3] = b3[f3] === void 0 && g4 !== void 0 ? g4[f3] : b3[f3]);
    }
    var f3 = arguments.length - 2;
    if (f3 === 1)
      e4.children = c3;
    else if (1 < f3) {
      g4 = Array(f3);
      for (var m3 = 0; m3 < f3; m3++)
        g4[m3] = arguments[m3 + 2];
      e4.children = g4;
    }
    return {
      $$typeof: n3,
      type: a2.type,
      key: d3,
      ref: k2,
      props: e4,
      _owner: h3
    };
  };
  exports.createContext = function(a2, b3) {
    b3 === void 0 && (b3 = null);
    a2 = {$$typeof: r2, _calculateChangedBits: b3, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null};
    a2.Provider = {$$typeof: q2, _context: a2};
    return a2.Consumer = a2;
  };
  exports.createElement = J3;
  exports.createFactory = function(a2) {
    var b3 = J3.bind(null, a2);
    b3.type = a2;
    return b3;
  };
  exports.createRef = function() {
    return {current: null};
  };
  exports.forwardRef = function(a2) {
    return {$$typeof: t3, render: a2};
  };
  exports.isValidElement = L3;
  exports.lazy = function(a2) {
    return {$$typeof: v3, _payload: {_status: -1, _result: a2}, _init: Q3};
  };
  exports.memo = function(a2, b3) {
    return {$$typeof: u2, type: a2, compare: b3 === void 0 ? null : b3};
  };
  exports.useCallback = function(a2, b3) {
    return S4().useCallback(a2, b3);
  };
  exports.useContext = function(a2, b3) {
    return S4().useContext(a2, b3);
  };
  exports.useDebugValue = function() {
  };
  exports.useEffect = function(a2, b3) {
    return S4().useEffect(a2, b3);
  };
  exports.useImperativeHandle = function(a2, b3, c3) {
    return S4().useImperativeHandle(a2, b3, c3);
  };
  exports.useLayoutEffect = function(a2, b3) {
    return S4().useLayoutEffect(a2, b3);
  };
  exports.useMemo = function(a2, b3) {
    return S4().useMemo(a2, b3);
  };
  exports.useReducer = function(a2, b3, c3) {
    return S4().useReducer(a2, b3, c3);
  };
  exports.useRef = function(a2) {
    return S4().useRef(a2);
  };
  exports.useState = function(a2) {
    return S4().useState(a2);
  };
  exports.version = "17.0.1";
});
var react = createCommonjsModule(function(module) {
  {
    module.exports = react_production_min;
  }
});

// _snowpack/pkg/react-dom.js
var scheduler_production_min = createCommonjsModule(function(module, exports) {
  var f3, g4, h3, k2;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p3 = Date, q2 = p3.now();
    exports.unstable_now = function() {
      return p3.now() - q2;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t3 = null, u2 = null, w3 = function() {
      if (t3 !== null)
        try {
          var a2 = exports.unstable_now();
          t3(true, a2);
          t3 = null;
        } catch (b3) {
          throw setTimeout(w3, 0), b3;
        }
    };
    f3 = function(a2) {
      t3 !== null ? setTimeout(f3, 0, a2) : (t3 = a2, setTimeout(w3, 0));
    };
    g4 = function(a2, b3) {
      u2 = setTimeout(a2, b3);
    };
    h3 = function() {
      clearTimeout(u2);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k2 = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x2 = window.setTimeout, y3 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z3 = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z3 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A2 = false, B4 = null, C = -1, D2 = 5, E3 = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E3;
    };
    k2 = function() {
    };
    exports.unstable_forceFrameRate = function(a2) {
      0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
    };
    var F3 = new MessageChannel(), G4 = F3.port2;
    F3.port1.onmessage = function() {
      if (B4 !== null) {
        var a2 = exports.unstable_now();
        E3 = a2 + D2;
        try {
          B4(true, a2) ? G4.postMessage(null) : (A2 = false, B4 = null);
        } catch (b3) {
          throw G4.postMessage(null), b3;
        }
      } else
        A2 = false;
    };
    f3 = function(a2) {
      B4 = a2;
      A2 || (A2 = true, G4.postMessage(null));
    };
    g4 = function(a2, b3) {
      C = x2(function() {
        a2(exports.unstable_now());
      }, b3);
    };
    h3 = function() {
      y3(C);
      C = -1;
    };
  }
  function H4(a2, b3) {
    var c3 = a2.length;
    a2.push(b3);
    a:
      for (; ; ) {
        var d3 = c3 - 1 >>> 1, e4 = a2[d3];
        if (e4 !== void 0 && 0 < I4(e4, b3))
          a2[d3] = b3, a2[c3] = e4, c3 = d3;
        else
          break a;
      }
  }
  function J3(a2) {
    a2 = a2[0];
    return a2 === void 0 ? null : a2;
  }
  function K3(a2) {
    var b3 = a2[0];
    if (b3 !== void 0) {
      var c3 = a2.pop();
      if (c3 !== b3) {
        a2[0] = c3;
        a:
          for (var d3 = 0, e4 = a2.length; d3 < e4; ) {
            var m3 = 2 * (d3 + 1) - 1, n3 = a2[m3], v3 = m3 + 1, r2 = a2[v3];
            if (n3 !== void 0 && 0 > I4(n3, c3))
              r2 !== void 0 && 0 > I4(r2, n3) ? (a2[d3] = r2, a2[v3] = c3, d3 = v3) : (a2[d3] = n3, a2[m3] = c3, d3 = m3);
            else if (r2 !== void 0 && 0 > I4(r2, c3))
              a2[d3] = r2, a2[v3] = c3, d3 = v3;
            else
              break a;
          }
      }
      return b3;
    }
    return null;
  }
  function I4(a2, b3) {
    var c3 = a2.sortIndex - b3.sortIndex;
    return c3 !== 0 ? c3 : a2.id - b3.id;
  }
  var L3 = [], M4 = [], N3 = 1, O2 = null, P3 = 3, Q3 = false, R2 = false, S4 = false;
  function T4(a2) {
    for (var b3 = J3(M4); b3 !== null; ) {
      if (b3.callback === null)
        K3(M4);
      else if (b3.startTime <= a2)
        K3(M4), b3.sortIndex = b3.expirationTime, H4(L3, b3);
      else
        break;
      b3 = J3(M4);
    }
  }
  function U4(a2) {
    S4 = false;
    T4(a2);
    if (!R2)
      if (J3(L3) !== null)
        R2 = true, f3(V4);
      else {
        var b3 = J3(M4);
        b3 !== null && g4(U4, b3.startTime - a2);
      }
  }
  function V4(a2, b3) {
    R2 = false;
    S4 && (S4 = false, h3());
    Q3 = true;
    var c3 = P3;
    try {
      T4(b3);
      for (O2 = J3(L3); O2 !== null && (!(O2.expirationTime > b3) || a2 && !exports.unstable_shouldYield()); ) {
        var d3 = O2.callback;
        if (typeof d3 === "function") {
          O2.callback = null;
          P3 = O2.priorityLevel;
          var e4 = d3(O2.expirationTime <= b3);
          b3 = exports.unstable_now();
          typeof e4 === "function" ? O2.callback = e4 : O2 === J3(L3) && K3(L3);
          T4(b3);
        } else
          K3(L3);
        O2 = J3(L3);
      }
      if (O2 !== null)
        var m3 = true;
      else {
        var n3 = J3(M4);
        n3 !== null && g4(U4, n3.startTime - b3);
        m3 = false;
      }
      return m3;
    } finally {
      O2 = null, P3 = c3, Q3 = false;
    }
  }
  var W4 = k2;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R2 || Q3 || (R2 = true, f3(V4));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P3;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J3(L3);
  };
  exports.unstable_next = function(a2) {
    switch (P3) {
      case 1:
      case 2:
      case 3:
        var b3 = 3;
        break;
      default:
        b3 = P3;
    }
    var c3 = P3;
    P3 = b3;
    try {
      return a2();
    } finally {
      P3 = c3;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W4;
  exports.unstable_runWithPriority = function(a2, b3) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c3 = P3;
    P3 = a2;
    try {
      return b3();
    } finally {
      P3 = c3;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b3, c3) {
    var d3 = exports.unstable_now();
    typeof c3 === "object" && c3 !== null ? (c3 = c3.delay, c3 = typeof c3 === "number" && 0 < c3 ? d3 + c3 : d3) : c3 = d3;
    switch (a2) {
      case 1:
        var e4 = -1;
        break;
      case 2:
        e4 = 250;
        break;
      case 5:
        e4 = 1073741823;
        break;
      case 4:
        e4 = 1e4;
        break;
      default:
        e4 = 5e3;
    }
    e4 = c3 + e4;
    a2 = {id: N3++, callback: b3, priorityLevel: a2, startTime: c3, expirationTime: e4, sortIndex: -1};
    c3 > d3 ? (a2.sortIndex = c3, H4(M4, a2), J3(L3) === null && a2 === J3(M4) && (S4 ? h3() : S4 = true, g4(U4, c3 - d3))) : (a2.sortIndex = e4, H4(L3, a2), R2 || Q3 || (R2 = true, f3(V4)));
    return a2;
  };
  exports.unstable_wrapCallback = function(a2) {
    var b3 = P3;
    return function() {
      var c3 = P3;
      P3 = b3;
      try {
        return a2.apply(this, arguments);
      } finally {
        P3 = c3;
      }
    };
  };
});
var scheduler = createCommonjsModule(function(module) {
  {
    module.exports = scheduler_production_min;
  }
});
function y(a2) {
  for (var b3 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c3 = 1; c3 < arguments.length; c3++)
    b3 += "&args[]=" + encodeURIComponent(arguments[c3]);
  return "Minified React error #" + a2 + "; visit " + b3 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!react)
  throw Error(y(227));
var ba = new Set();
var ca = {};
function da(a2, b3) {
  ea(a2, b3);
  ea(a2 + "Capture", b3);
}
function ea(a2, b3) {
  ca[a2] = b3;
  for (a2 = 0; a2 < b3.length; a2++)
    ba.add(b3[a2]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
var ia = Object.prototype.hasOwnProperty;
var ja = {};
var ka = {};
function la(a2) {
  if (ia.call(ka, a2))
    return true;
  if (ia.call(ja, a2))
    return false;
  if (ha.test(a2))
    return ka[a2] = true;
  ja[a2] = true;
  return false;
}
function ma(a2, b3, c3, d3) {
  if (c3 !== null && c3.type === 0)
    return false;
  switch (typeof b3) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d3)
        return false;
      if (c3 !== null)
        return !c3.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return a2 !== "data-" && a2 !== "aria-";
    default:
      return false;
  }
}
function na(a2, b3, c3, d3) {
  if (b3 === null || typeof b3 === "undefined" || ma(a2, b3, c3, d3))
    return true;
  if (d3)
    return false;
  if (c3 !== null)
    switch (c3.type) {
      case 3:
        return !b3;
      case 4:
        return b3 === false;
      case 5:
        return isNaN(b3);
      case 6:
        return isNaN(b3) || 1 > b3;
    }
  return false;
}
function B(a2, b3, c3, d3, e4, f3, g4) {
  this.acceptsBooleans = b3 === 2 || b3 === 3 || b3 === 4;
  this.attributeName = d3;
  this.attributeNamespace = e4;
  this.mustUseProperty = c3;
  this.propertyName = a2;
  this.type = b3;
  this.sanitizeURL = f3;
  this.removeEmptyString = g4;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  D[a2] = new B(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b3 = a2[0];
  D[b3] = new B(b3, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  D[a2] = new B(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  D[a2] = new B(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  D[a2] = new B(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  D[a2] = new B(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  D[a2] = new B(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  D[a2] = new B(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  D[a2] = new B(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b3 = a2.replace(oa, pa);
  D[b3] = new B(b3, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b3 = a2.replace(oa, pa);
  D[b3] = new B(b3, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b3 = a2.replace(oa, pa);
  D[b3] = new B(b3, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  D[a2] = new B(a2, 1, false, a2.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  D[a2] = new B(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function qa(a2, b3, c3, d3) {
  var e4 = D.hasOwnProperty(b3) ? D[b3] : null;
  var f3 = e4 !== null ? e4.type === 0 : d3 ? false : !(2 < b3.length) || b3[0] !== "o" && b3[0] !== "O" || b3[1] !== "n" && b3[1] !== "N" ? false : true;
  f3 || (na(b3, c3, e4, d3) && (c3 = null), d3 || e4 === null ? la(b3) && (c3 === null ? a2.removeAttribute(b3) : a2.setAttribute(b3, "" + c3)) : e4.mustUseProperty ? a2[e4.propertyName] = c3 === null ? e4.type === 3 ? false : "" : c3 : (b3 = e4.attributeName, d3 = e4.attributeNamespace, c3 === null ? a2.removeAttribute(b3) : (e4 = e4.type, c3 = e4 === 3 || e4 === 4 && c3 === true ? "" : "" + c3, d3 ? a2.setAttributeNS(d3, b3, c3) : a2.setAttribute(b3, c3))));
}
var ra = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var sa = 60103;
var ta = 60106;
var ua = 60107;
var wa = 60108;
var xa = 60114;
var ya = 60109;
var za = 60110;
var Aa = 60112;
var Ba = 60113;
var Ca = 60120;
var Da = 60115;
var Ea = 60116;
var Fa = 60121;
var Ga = 60128;
var Ha = 60129;
var Ia = 60130;
var Ja = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  E3 = Symbol.for;
  sa = E3("react.element");
  ta = E3("react.portal");
  ua = E3("react.fragment");
  wa = E3("react.strict_mode");
  xa = E3("react.profiler");
  ya = E3("react.provider");
  za = E3("react.context");
  Aa = E3("react.forward_ref");
  Ba = E3("react.suspense");
  Ca = E3("react.suspense_list");
  Da = E3("react.memo");
  Ea = E3("react.lazy");
  Fa = E3("react.block");
  E3("react.scope");
  Ga = E3("react.opaque.id");
  Ha = E3("react.debug_trace_mode");
  Ia = E3("react.offscreen");
  Ja = E3("react.legacy_hidden");
}
var E3;
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = Ka && a2[Ka] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var Ma;
function Na(a2) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c3) {
      var b3 = c3.stack.trim().match(/\n( *(at )?)/);
      Ma = b3 && b3[1] || "";
    }
  return "\n" + Ma + a2;
}
var Oa = false;
function Pa(a2, b3) {
  if (!a2 || Oa)
    return "";
  Oa = true;
  var c3 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b3)
      if (b3 = function() {
        throw Error();
      }, Object.defineProperty(b3.prototype, "props", {set: function() {
        throw Error();
      }}), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b3, []);
        } catch (k2) {
          var d3 = k2;
        }
        Reflect.construct(a2, [], b3);
      } else {
        try {
          b3.call();
        } catch (k2) {
          d3 = k2;
        }
        a2.call(b3.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k2) {
        d3 = k2;
      }
      a2();
    }
  } catch (k2) {
    if (k2 && d3 && typeof k2.stack === "string") {
      for (var e4 = k2.stack.split("\n"), f3 = d3.stack.split("\n"), g4 = e4.length - 1, h3 = f3.length - 1; 1 <= g4 && 0 <= h3 && e4[g4] !== f3[h3]; )
        h3--;
      for (; 1 <= g4 && 0 <= h3; g4--, h3--)
        if (e4[g4] !== f3[h3]) {
          if (g4 !== 1 || h3 !== 1) {
            do
              if (g4--, h3--, 0 > h3 || e4[g4] !== f3[h3])
                return "\n" + e4[g4].replace(" at new ", " at ");
            while (1 <= g4 && 0 <= h3);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c3;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? Na(a2) : "";
}
function Qa(a2) {
  switch (a2.tag) {
    case 5:
      return Na(a2.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Pa(a2.type, false), a2;
    case 11:
      return a2 = Pa(a2.type.render, false), a2;
    case 22:
      return a2 = Pa(a2.type._render, false), a2;
    case 1:
      return a2 = Pa(a2.type, true), a2;
    default:
      return "";
  }
}
function Ra(a2) {
  if (a2 == null)
    return null;
  if (typeof a2 === "function")
    return a2.displayName || a2.name || null;
  if (typeof a2 === "string")
    return a2;
  switch (a2) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof a2 === "object")
    switch (a2.$$typeof) {
      case za:
        return (a2.displayName || "Context") + ".Consumer";
      case ya:
        return (a2._context.displayName || "Context") + ".Provider";
      case Aa:
        var b3 = a2.render;
        b3 = b3.displayName || b3.name || "";
        return a2.displayName || (b3 !== "" ? "ForwardRef(" + b3 + ")" : "ForwardRef");
      case Da:
        return Ra(a2.type);
      case Fa:
        return Ra(a2._render);
      case Ea:
        b3 = a2._payload;
        a2 = a2._init;
        try {
          return Ra(a2(b3));
        } catch (c3) {
        }
    }
  return null;
}
function Sa(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a2;
    default:
      return "";
  }
}
function Ta(a2) {
  var b3 = a2.type;
  return (a2 = a2.nodeName) && a2.toLowerCase() === "input" && (b3 === "checkbox" || b3 === "radio");
}
function Ua(a2) {
  var b3 = Ta(a2) ? "checked" : "value", c3 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b3), d3 = "" + a2[b3];
  if (!a2.hasOwnProperty(b3) && typeof c3 !== "undefined" && typeof c3.get === "function" && typeof c3.set === "function") {
    var e4 = c3.get, f3 = c3.set;
    Object.defineProperty(a2, b3, {configurable: true, get: function() {
      return e4.call(this);
    }, set: function(a3) {
      d3 = "" + a3;
      f3.call(this, a3);
    }});
    Object.defineProperty(a2, b3, {enumerable: c3.enumerable});
    return {getValue: function() {
      return d3;
    }, setValue: function(a3) {
      d3 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b3];
    }};
  }
}
function Va(a2) {
  a2._valueTracker || (a2._valueTracker = Ua(a2));
}
function Wa(a2) {
  if (!a2)
    return false;
  var b3 = a2._valueTracker;
  if (!b3)
    return true;
  var c3 = b3.getValue();
  var d3 = "";
  a2 && (d3 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d3;
  return a2 !== c3 ? (b3.setValue(a2), true) : false;
}
function Xa(a2) {
  a2 = a2 || (typeof document !== "undefined" ? document : void 0);
  if (typeof a2 === "undefined")
    return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b3) {
    return a2.body;
  }
}
function Ya(a2, b3) {
  var c3 = b3.checked;
  return objectAssign({}, b3, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c3 != null ? c3 : a2._wrapperState.initialChecked});
}
function Za(a2, b3) {
  var c3 = b3.defaultValue == null ? "" : b3.defaultValue, d3 = b3.checked != null ? b3.checked : b3.defaultChecked;
  c3 = Sa(b3.value != null ? b3.value : c3);
  a2._wrapperState = {initialChecked: d3, initialValue: c3, controlled: b3.type === "checkbox" || b3.type === "radio" ? b3.checked != null : b3.value != null};
}
function $a(a2, b3) {
  b3 = b3.checked;
  b3 != null && qa(a2, "checked", b3, false);
}
function ab(a2, b3) {
  $a(a2, b3);
  var c3 = Sa(b3.value), d3 = b3.type;
  if (c3 != null)
    if (d3 === "number") {
      if (c3 === 0 && a2.value === "" || a2.value != c3)
        a2.value = "" + c3;
    } else
      a2.value !== "" + c3 && (a2.value = "" + c3);
  else if (d3 === "submit" || d3 === "reset") {
    a2.removeAttribute("value");
    return;
  }
  b3.hasOwnProperty("value") ? bb(a2, b3.type, c3) : b3.hasOwnProperty("defaultValue") && bb(a2, b3.type, Sa(b3.defaultValue));
  b3.checked == null && b3.defaultChecked != null && (a2.defaultChecked = !!b3.defaultChecked);
}
function cb(a2, b3, c3) {
  if (b3.hasOwnProperty("value") || b3.hasOwnProperty("defaultValue")) {
    var d3 = b3.type;
    if (!(d3 !== "submit" && d3 !== "reset" || b3.value !== void 0 && b3.value !== null))
      return;
    b3 = "" + a2._wrapperState.initialValue;
    c3 || b3 === a2.value || (a2.value = b3);
    a2.defaultValue = b3;
  }
  c3 = a2.name;
  c3 !== "" && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  c3 !== "" && (a2.name = c3);
}
function bb(a2, b3, c3) {
  if (b3 !== "number" || Xa(a2.ownerDocument) !== a2)
    c3 == null ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c3 && (a2.defaultValue = "" + c3);
}
function db(a2) {
  var b3 = "";
  react.Children.forEach(a2, function(a3) {
    a3 != null && (b3 += a3);
  });
  return b3;
}
function eb(a2, b3) {
  a2 = objectAssign({children: void 0}, b3);
  if (b3 = db(b3.children))
    a2.children = b3;
  return a2;
}
function fb(a2, b3, c3, d3) {
  a2 = a2.options;
  if (b3) {
    b3 = {};
    for (var e4 = 0; e4 < c3.length; e4++)
      b3["$" + c3[e4]] = true;
    for (c3 = 0; c3 < a2.length; c3++)
      e4 = b3.hasOwnProperty("$" + a2[c3].value), a2[c3].selected !== e4 && (a2[c3].selected = e4), e4 && d3 && (a2[c3].defaultSelected = true);
  } else {
    c3 = "" + Sa(c3);
    b3 = null;
    for (e4 = 0; e4 < a2.length; e4++) {
      if (a2[e4].value === c3) {
        a2[e4].selected = true;
        d3 && (a2[e4].defaultSelected = true);
        return;
      }
      b3 !== null || a2[e4].disabled || (b3 = a2[e4]);
    }
    b3 !== null && (b3.selected = true);
  }
}
function gb(a2, b3) {
  if (b3.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return objectAssign({}, b3, {value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue});
}
function hb(a2, b3) {
  var c3 = b3.value;
  if (c3 == null) {
    c3 = b3.children;
    b3 = b3.defaultValue;
    if (c3 != null) {
      if (b3 != null)
        throw Error(y(92));
      if (Array.isArray(c3)) {
        if (!(1 >= c3.length))
          throw Error(y(93));
        c3 = c3[0];
      }
      b3 = c3;
    }
    b3 == null && (b3 = "");
    c3 = b3;
  }
  a2._wrapperState = {initialValue: Sa(c3)};
}
function ib(a2, b3) {
  var c3 = Sa(b3.value), d3 = Sa(b3.defaultValue);
  c3 != null && (c3 = "" + c3, c3 !== a2.value && (a2.value = c3), b3.defaultValue == null && a2.defaultValue !== c3 && (a2.defaultValue = c3));
  d3 != null && (a2.defaultValue = "" + d3);
}
function jb(a2) {
  var b3 = a2.textContent;
  b3 === a2._wrapperState.initialValue && b3 !== "" && b3 !== null && (a2.value = b3);
}
var kb = {html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg"};
function lb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a2, b3) {
  return a2 == null || a2 === "http://www.w3.org/1999/xhtml" ? lb(b3) : a2 === "http://www.w3.org/2000/svg" && b3 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a2;
}
var nb;
var ob = function(a2) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b3, c3, d3, e4) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b3, c3, d3, e4);
    });
  } : a2;
}(function(a2, b3) {
  if (a2.namespaceURI !== kb.svg || "innerHTML" in a2)
    a2.innerHTML = b3;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b3.valueOf().toString() + "</svg>";
    for (b3 = nb.firstChild; a2.firstChild; )
      a2.removeChild(a2.firstChild);
    for (; b3.firstChild; )
      a2.appendChild(b3.firstChild);
  }
});
function pb(a2, b3) {
  if (b3) {
    var c3 = a2.firstChild;
    if (c3 && c3 === a2.lastChild && c3.nodeType === 3) {
      c3.nodeValue = b3;
      return;
    }
  }
  a2.textContent = b3;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a2) {
  rb.forEach(function(b3) {
    b3 = b3 + a2.charAt(0).toUpperCase() + a2.substring(1);
    qb[b3] = qb[a2];
  });
});
function sb(a2, b3, c3) {
  return b3 == null || typeof b3 === "boolean" || b3 === "" ? "" : c3 || typeof b3 !== "number" || b3 === 0 || qb.hasOwnProperty(a2) && qb[a2] ? ("" + b3).trim() : b3 + "px";
}
function tb(a2, b3) {
  a2 = a2.style;
  for (var c3 in b3)
    if (b3.hasOwnProperty(c3)) {
      var d3 = c3.indexOf("--") === 0, e4 = sb(c3, b3[c3], d3);
      c3 === "float" && (c3 = "cssFloat");
      d3 ? a2.setProperty(c3, e4) : a2[c3] = e4;
    }
}
var ub = objectAssign({menuitem: true}, {area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true});
function vb(a2, b3) {
  if (b3) {
    if (ub[a2] && (b3.children != null || b3.dangerouslySetInnerHTML != null))
      throw Error(y(137, a2));
    if (b3.dangerouslySetInnerHTML != null) {
      if (b3.children != null)
        throw Error(y(60));
      if (!(typeof b3.dangerouslySetInnerHTML === "object" && "__html" in b3.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (b3.style != null && typeof b3.style !== "object")
      throw Error(y(62));
  }
}
function wb(a2, b3) {
  if (a2.indexOf("-") === -1)
    return typeof b3.is === "string";
  switch (a2) {
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
function xb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return a2.nodeType === 3 ? a2.parentNode : a2;
}
var yb = null;
var zb = null;
var Ab = null;
function Bb(a2) {
  if (a2 = Cb(a2)) {
    if (typeof yb !== "function")
      throw Error(y(280));
    var b3 = a2.stateNode;
    b3 && (b3 = Db(b3), yb(a2.stateNode, a2.type, b3));
  }
}
function Eb(a2) {
  zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
}
function Fb() {
  if (zb) {
    var a2 = zb, b3 = Ab;
    Ab = zb = null;
    Bb(a2);
    if (b3)
      for (a2 = 0; a2 < b3.length; a2++)
        Bb(b3[a2]);
  }
}
function Gb(a2, b3) {
  return a2(b3);
}
function Hb(a2, b3, c3, d3, e4) {
  return a2(b3, c3, d3, e4);
}
function Ib() {
}
var Jb = Gb;
var Kb = false;
var Lb = false;
function Mb() {
  if (zb !== null || Ab !== null)
    Ib(), Fb();
}
function Nb(a2, b3, c3) {
  if (Lb)
    return a2(b3, c3);
  Lb = true;
  try {
    return Jb(a2, b3, c3);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a2, b3) {
  var c3 = a2.stateNode;
  if (c3 === null)
    return null;
  var d3 = Db(c3);
  if (d3 === null)
    return null;
  c3 = d3[b3];
  a:
    switch (b3) {
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
        (d3 = !d3.disabled) || (a2 = a2.type, d3 = !(a2 === "button" || a2 === "input" || a2 === "select" || a2 === "textarea"));
        a2 = !d3;
        break a;
      default:
        a2 = false;
    }
  if (a2)
    return null;
  if (c3 && typeof c3 !== "function")
    throw Error(y(231, b3, typeof c3));
  return c3;
}
var Pb = false;
if (fa)
  try {
    Qb = {};
    Object.defineProperty(Qb, "passive", {get: function() {
      Pb = true;
    }});
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a2) {
    Pb = false;
  }
var Qb;
function Rb(a2, b3, c3, d3, e4, f3, g4, h3, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b3.apply(c3, l2);
  } catch (n3) {
    this.onError(n3);
  }
}
var Sb = false;
var Tb = null;
var Ub = false;
var Vb = null;
var Wb = {onError: function(a2) {
  Sb = true;
  Tb = a2;
}};
function Xb(a2, b3, c3, d3, e4, f3, g4, h3, k2) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a2, b3, c3, d3, e4, f3, g4, h3, k2) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l2 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y(198));
    Ub || (Ub = true, Vb = l2);
  }
}
function Zb(a2) {
  var b3 = a2, c3 = a2;
  if (a2.alternate)
    for (; b3.return; )
      b3 = b3.return;
  else {
    a2 = b3;
    do
      b3 = a2, (b3.flags & 1026) !== 0 && (c3 = b3.return), a2 = b3.return;
    while (a2);
  }
  return b3.tag === 3 ? c3 : null;
}
function $b(a2) {
  if (a2.tag === 13) {
    var b3 = a2.memoizedState;
    b3 === null && (a2 = a2.alternate, a2 !== null && (b3 = a2.memoizedState));
    if (b3 !== null)
      return b3.dehydrated;
  }
  return null;
}
function ac(a2) {
  if (Zb(a2) !== a2)
    throw Error(y(188));
}
function bc(a2) {
  var b3 = a2.alternate;
  if (!b3) {
    b3 = Zb(a2);
    if (b3 === null)
      throw Error(y(188));
    return b3 !== a2 ? null : a2;
  }
  for (var c3 = a2, d3 = b3; ; ) {
    var e4 = c3.return;
    if (e4 === null)
      break;
    var f3 = e4.alternate;
    if (f3 === null) {
      d3 = e4.return;
      if (d3 !== null) {
        c3 = d3;
        continue;
      }
      break;
    }
    if (e4.child === f3.child) {
      for (f3 = e4.child; f3; ) {
        if (f3 === c3)
          return ac(e4), a2;
        if (f3 === d3)
          return ac(e4), b3;
        f3 = f3.sibling;
      }
      throw Error(y(188));
    }
    if (c3.return !== d3.return)
      c3 = e4, d3 = f3;
    else {
      for (var g4 = false, h3 = e4.child; h3; ) {
        if (h3 === c3) {
          g4 = true;
          c3 = e4;
          d3 = f3;
          break;
        }
        if (h3 === d3) {
          g4 = true;
          d3 = e4;
          c3 = f3;
          break;
        }
        h3 = h3.sibling;
      }
      if (!g4) {
        for (h3 = f3.child; h3; ) {
          if (h3 === c3) {
            g4 = true;
            c3 = f3;
            d3 = e4;
            break;
          }
          if (h3 === d3) {
            g4 = true;
            d3 = f3;
            c3 = e4;
            break;
          }
          h3 = h3.sibling;
        }
        if (!g4)
          throw Error(y(189));
      }
    }
    if (c3.alternate !== d3)
      throw Error(y(190));
  }
  if (c3.tag !== 3)
    throw Error(y(188));
  return c3.stateNode.current === c3 ? a2 : b3;
}
function cc(a2) {
  a2 = bc(a2);
  if (!a2)
    return null;
  for (var b3 = a2; ; ) {
    if (b3.tag === 5 || b3.tag === 6)
      return b3;
    if (b3.child)
      b3.child.return = b3, b3 = b3.child;
    else {
      if (b3 === a2)
        break;
      for (; !b3.sibling; ) {
        if (!b3.return || b3.return === a2)
          return null;
        b3 = b3.return;
      }
      b3.sibling.return = b3.return;
      b3 = b3.sibling;
    }
  }
  return null;
}
function dc(a2, b3) {
  for (var c3 = a2.alternate; b3 !== null; ) {
    if (b3 === a2 || b3 === c3)
      return true;
    b3 = b3.return;
  }
  return false;
}
var ec;
var fc;
var gc;
var hc;
var ic = false;
var jc = [];
var kc = null;
var lc = null;
var mc = null;
var nc = new Map();
var oc = new Map();
var pc = [];
var qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a2, b3, c3, d3, e4) {
  return {blockedOn: a2, domEventName: b3, eventSystemFlags: c3 | 16, nativeEvent: e4, targetContainers: [d3]};
}
function sc(a2, b3) {
  switch (a2) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b3.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b3.pointerId);
  }
}
function tc(a2, b3, c3, d3, e4, f3) {
  if (a2 === null || a2.nativeEvent !== f3)
    return a2 = rc(b3, c3, d3, e4, f3), b3 !== null && (b3 = Cb(b3), b3 !== null && fc(b3)), a2;
  a2.eventSystemFlags |= d3;
  b3 = a2.targetContainers;
  e4 !== null && b3.indexOf(e4) === -1 && b3.push(e4);
  return a2;
}
function uc(a2, b3, c3, d3, e4) {
  switch (b3) {
    case "focusin":
      return kc = tc(kc, a2, b3, c3, d3, e4), true;
    case "dragenter":
      return lc = tc(lc, a2, b3, c3, d3, e4), true;
    case "mouseover":
      return mc = tc(mc, a2, b3, c3, d3, e4), true;
    case "pointerover":
      var f3 = e4.pointerId;
      nc.set(f3, tc(nc.get(f3) || null, a2, b3, c3, d3, e4));
      return true;
    case "gotpointercapture":
      return f3 = e4.pointerId, oc.set(f3, tc(oc.get(f3) || null, a2, b3, c3, d3, e4)), true;
  }
  return false;
}
function vc(a2) {
  var b3 = wc(a2.target);
  if (b3 !== null) {
    var c3 = Zb(b3);
    if (c3 !== null) {
      if (b3 = c3.tag, b3 === 13) {
        if (b3 = $b(c3), b3 !== null) {
          a2.blockedOn = b3;
          hc(a2.lanePriority, function() {
            scheduler.unstable_runWithPriority(a2.priority, function() {
              gc(c3);
            });
          });
          return;
        }
      } else if (b3 === 3 && c3.stateNode.hydrate) {
        a2.blockedOn = c3.tag === 3 ? c3.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function xc(a2) {
  if (a2.blockedOn !== null)
    return false;
  for (var b3 = a2.targetContainers; 0 < b3.length; ) {
    var c3 = yc(a2.domEventName, a2.eventSystemFlags, b3[0], a2.nativeEvent);
    if (c3 !== null)
      return b3 = Cb(c3), b3 !== null && fc(b3), a2.blockedOn = c3, false;
    b3.shift();
  }
  return true;
}
function zc(a2, b3, c3) {
  xc(a2) && c3.delete(b3);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a2 = jc[0];
    if (a2.blockedOn !== null) {
      a2 = Cb(a2.blockedOn);
      a2 !== null && ec(a2);
      break;
    }
    for (var b3 = a2.targetContainers; 0 < b3.length; ) {
      var c3 = yc(a2.domEventName, a2.eventSystemFlags, b3[0], a2.nativeEvent);
      if (c3 !== null) {
        a2.blockedOn = c3;
        break;
      }
      b3.shift();
    }
    a2.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a2, b3) {
  a2.blockedOn === b3 && (a2.blockedOn = null, ic || (ic = true, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, Ac)));
}
function Cc(a2) {
  function b3(b4) {
    return Bc(b4, a2);
  }
  if (0 < jc.length) {
    Bc(jc[0], a2);
    for (var c3 = 1; c3 < jc.length; c3++) {
      var d3 = jc[c3];
      d3.blockedOn === a2 && (d3.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a2);
  lc !== null && Bc(lc, a2);
  mc !== null && Bc(mc, a2);
  nc.forEach(b3);
  oc.forEach(b3);
  for (c3 = 0; c3 < pc.length; c3++)
    d3 = pc[c3], d3.blockedOn === a2 && (d3.blockedOn = null);
  for (; 0 < pc.length && (c3 = pc[0], c3.blockedOn === null); )
    vc(c3), c3.blockedOn === null && pc.shift();
}
function Dc(a2, b3) {
  var c3 = {};
  c3[a2.toLowerCase()] = b3.toLowerCase();
  c3["Webkit" + a2] = "webkit" + b3;
  c3["Moz" + a2] = "moz" + b3;
  return c3;
}
var Ec = {animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd")};
var Fc = {};
var Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a2) {
  if (Fc[a2])
    return Fc[a2];
  if (!Ec[a2])
    return a2;
  var b3 = Ec[a2], c3;
  for (c3 in b3)
    if (b3.hasOwnProperty(c3) && c3 in Gc)
      return Fc[a2] = b3[c3];
  return a2;
}
var Ic = Hc("animationend");
var Jc = Hc("animationiteration");
var Kc = Hc("animationstart");
var Lc = Hc("transitionend");
var Mc = new Map();
var Nc = new Map();
var Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a2, b3) {
  for (var c3 = 0; c3 < a2.length; c3 += 2) {
    var d3 = a2[c3], e4 = a2[c3 + 1];
    e4 = "on" + (e4[0].toUpperCase() + e4.slice(1));
    Nc.set(d3, b3);
    Mc.set(d3, e4);
    da(e4, [d3]);
  }
}
var Qc = scheduler.unstable_now;
Qc();
var F = 8;
function Rc(a2) {
  if ((1 & a2) !== 0)
    return F = 15, 1;
  if ((2 & a2) !== 0)
    return F = 14, 2;
  if ((4 & a2) !== 0)
    return F = 13, 4;
  var b3 = 24 & a2;
  if (b3 !== 0)
    return F = 12, b3;
  if ((a2 & 32) !== 0)
    return F = 11, 32;
  b3 = 192 & a2;
  if (b3 !== 0)
    return F = 10, b3;
  if ((a2 & 256) !== 0)
    return F = 9, 256;
  b3 = 3584 & a2;
  if (b3 !== 0)
    return F = 8, b3;
  if ((a2 & 4096) !== 0)
    return F = 7, 4096;
  b3 = 4186112 & a2;
  if (b3 !== 0)
    return F = 6, b3;
  b3 = 62914560 & a2;
  if (b3 !== 0)
    return F = 5, b3;
  if (a2 & 67108864)
    return F = 4, 67108864;
  if ((a2 & 134217728) !== 0)
    return F = 3, 134217728;
  b3 = 805306368 & a2;
  if (b3 !== 0)
    return F = 2, b3;
  if ((1073741824 & a2) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a2;
}
function Sc(a2) {
  switch (a2) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a2) {
  switch (a2) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, a2));
  }
}
function Uc(a2, b3) {
  var c3 = a2.pendingLanes;
  if (c3 === 0)
    return F = 0;
  var d3 = 0, e4 = 0, f3 = a2.expiredLanes, g4 = a2.suspendedLanes, h3 = a2.pingedLanes;
  if (f3 !== 0)
    d3 = f3, e4 = F = 15;
  else if (f3 = c3 & 134217727, f3 !== 0) {
    var k2 = f3 & ~g4;
    k2 !== 0 ? (d3 = Rc(k2), e4 = F) : (h3 &= f3, h3 !== 0 && (d3 = Rc(h3), e4 = F));
  } else
    f3 = c3 & ~g4, f3 !== 0 ? (d3 = Rc(f3), e4 = F) : h3 !== 0 && (d3 = Rc(h3), e4 = F);
  if (d3 === 0)
    return 0;
  d3 = 31 - Vc(d3);
  d3 = c3 & ((0 > d3 ? 0 : 1 << d3) << 1) - 1;
  if (b3 !== 0 && b3 !== d3 && (b3 & g4) === 0) {
    Rc(b3);
    if (e4 <= F)
      return b3;
    F = e4;
  }
  b3 = a2.entangledLanes;
  if (b3 !== 0)
    for (a2 = a2.entanglements, b3 &= d3; 0 < b3; )
      c3 = 31 - Vc(b3), e4 = 1 << c3, d3 |= a2[c3], b3 &= ~e4;
  return d3;
}
function Wc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return a2 !== 0 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function Xc(a2, b3) {
  switch (a2) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a2 = Yc(24 & ~b3), a2 === 0 ? Xc(10, b3) : a2;
    case 10:
      return a2 = Yc(192 & ~b3), a2 === 0 ? Xc(8, b3) : a2;
    case 8:
      return a2 = Yc(3584 & ~b3), a2 === 0 && (a2 = Yc(4186112 & ~b3), a2 === 0 && (a2 = 512)), a2;
    case 2:
      return b3 = Yc(805306368 & ~b3), b3 === 0 && (b3 = 268435456), b3;
  }
  throw Error(y(358, a2));
}
function Yc(a2) {
  return a2 & -a2;
}
function Zc(a2) {
  for (var b3 = [], c3 = 0; 31 > c3; c3++)
    b3.push(a2);
  return b3;
}
function $c(a2, b3, c3) {
  a2.pendingLanes |= b3;
  var d3 = b3 - 1;
  a2.suspendedLanes &= d3;
  a2.pingedLanes &= d3;
  a2 = a2.eventTimes;
  b3 = 31 - Vc(b3);
  a2[b3] = c3;
}
var Vc = Math.clz32 ? Math.clz32 : ad;
var bd = Math.log;
var cd = Math.LN2;
function ad(a2) {
  return a2 === 0 ? 32 : 31 - (bd(a2) / cd | 0) | 0;
}
var dd = scheduler.unstable_UserBlockingPriority;
var ed = scheduler.unstable_runWithPriority;
var fd = true;
function gd(a2, b3, c3, d3) {
  Kb || Ib();
  var e4 = hd, f3 = Kb;
  Kb = true;
  try {
    Hb(e4, a2, b3, c3, d3);
  } finally {
    (Kb = f3) || Mb();
  }
}
function id(a2, b3, c3, d3) {
  ed(dd, hd.bind(null, a2, b3, c3, d3));
}
function hd(a2, b3, c3, d3) {
  if (fd) {
    var e4;
    if ((e4 = (b3 & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a2))
      a2 = rc(null, a2, b3, c3, d3), jc.push(a2);
    else {
      var f3 = yc(a2, b3, c3, d3);
      if (f3 === null)
        e4 && sc(a2, d3);
      else {
        if (e4) {
          if (-1 < qc.indexOf(a2)) {
            a2 = rc(f3, a2, b3, c3, d3);
            jc.push(a2);
            return;
          }
          if (uc(f3, a2, b3, c3, d3))
            return;
          sc(a2, d3);
        }
        jd(a2, b3, d3, null, c3);
      }
    }
  }
}
function yc(a2, b3, c3, d3) {
  var e4 = xb(d3);
  e4 = wc(e4);
  if (e4 !== null) {
    var f3 = Zb(e4);
    if (f3 === null)
      e4 = null;
    else {
      var g4 = f3.tag;
      if (g4 === 13) {
        e4 = $b(f3);
        if (e4 !== null)
          return e4;
        e4 = null;
      } else if (g4 === 3) {
        if (f3.stateNode.hydrate)
          return f3.tag === 3 ? f3.stateNode.containerInfo : null;
        e4 = null;
      } else
        f3 !== e4 && (e4 = null);
    }
  }
  jd(a2, b3, d3, e4, c3);
  return null;
}
var kd = null;
var ld = null;
var md = null;
function nd() {
  if (md)
    return md;
  var a2, b3 = ld, c3 = b3.length, d3, e4 = "value" in kd ? kd.value : kd.textContent, f3 = e4.length;
  for (a2 = 0; a2 < c3 && b3[a2] === e4[a2]; a2++)
    ;
  var g4 = c3 - a2;
  for (d3 = 1; d3 <= g4 && b3[c3 - d3] === e4[f3 - d3]; d3++)
    ;
  return md = e4.slice(a2, 1 < d3 ? 1 - d3 : void 0);
}
function od(a2) {
  var b3 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, a2 === 0 && b3 === 13 && (a2 = 13)) : a2 = b3;
  a2 === 10 && (a2 = 13);
  return 32 <= a2 || a2 === 13 ? a2 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a2) {
  function b3(b4, d3, e4, f3, g4) {
    this._reactName = b4;
    this._targetInst = e4;
    this.type = d3;
    this.nativeEvent = f3;
    this.target = g4;
    this.currentTarget = null;
    for (var c3 in a2)
      a2.hasOwnProperty(c3) && (b4 = a2[c3], this[c3] = b4 ? b4(f3) : f3[c3]);
    this.isDefaultPrevented = (f3.defaultPrevented != null ? f3.defaultPrevented : f3.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  objectAssign(b3.prototype, {preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : typeof a3.returnValue !== "unknown" && (a3.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : typeof a3.cancelBubble !== "unknown" && (a3.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd});
  return b3;
}
var sd = {eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0};
var td = rd(sd);
var ud = objectAssign({}, sd, {view: 0, detail: 0});
var vd = rd(ud);
var wd;
var xd;
var yd;
var Ad = objectAssign({}, ud, {screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return a2.relatedTarget === void 0 ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2)
    return a2.movementX;
  a2 !== yd && (yd && a2.type === "mousemove" ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
  return wd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : xd;
}});
var Bd = rd(Ad);
var Cd = objectAssign({}, Ad, {dataTransfer: 0});
var Dd = rd(Cd);
var Ed = objectAssign({}, ud, {relatedTarget: 0});
var Fd = rd(Ed);
var Gd = objectAssign({}, sd, {animationName: 0, elapsedTime: 0, pseudoElement: 0});
var Hd = rd(Gd);
var Id = objectAssign({}, sd, {clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
}});
var Jd = rd(Id);
var Kd = objectAssign({}, sd, {data: 0});
var Ld = rd(Kd);
var Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
};
var Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
};
var Od = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};
function Pd(a2) {
  var b3 = this.nativeEvent;
  return b3.getModifierState ? b3.getModifierState(a2) : (a2 = Od[a2]) ? !!b3[a2] : false;
}
function zd() {
  return Pd;
}
var Qd = objectAssign({}, ud, {key: function(a2) {
  if (a2.key) {
    var b3 = Md[a2.key] || a2.key;
    if (b3 !== "Unidentified")
      return b3;
  }
  return a2.type === "keypress" ? (a2 = od(a2), a2 === 13 ? "Enter" : String.fromCharCode(a2)) : a2.type === "keydown" || a2.type === "keyup" ? Nd[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
  return a2.type === "keypress" ? od(a2) : 0;
}, keyCode: function(a2) {
  return a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
}, which: function(a2) {
  return a2.type === "keypress" ? od(a2) : a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
}});
var Rd = rd(Qd);
var Sd = objectAssign({}, Ad, {pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0});
var Td = rd(Sd);
var Ud = objectAssign({}, ud, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd});
var Vd = rd(Ud);
var Wd = objectAssign({}, sd, {propertyName: 0, elapsedTime: 0, pseudoElement: 0});
var Xd = rd(Wd);
var Yd = objectAssign({}, Ad, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
});
var Zd = rd(Yd);
var $d = [9, 13, 27, 32];
var ae = fa && "CompositionEvent" in window;
var be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be;
var de = fa && (!ae || be && 8 < be && 11 >= be);
var ee = String.fromCharCode(32);
var fe = false;
function ge(a2, b3) {
  switch (a2) {
    case "keyup":
      return $d.indexOf(b3.keyCode) !== -1;
    case "keydown":
      return b3.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a2) {
  a2 = a2.detail;
  return typeof a2 === "object" && "data" in a2 ? a2.data : null;
}
var ie = false;
function je(a2, b3) {
  switch (a2) {
    case "compositionend":
      return he(b3);
    case "keypress":
      if (b3.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a2 = b3.data, a2 === ee && fe ? null : a2;
    default:
      return null;
  }
}
function ke(a2, b3) {
  if (ie)
    return a2 === "compositionend" || !ae && ge(a2, b3) ? (a2 = nd(), md = ld = kd = null, ie = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b3.ctrlKey || b3.altKey || b3.metaKey) || b3.ctrlKey && b3.altKey) {
        if (b3.char && 1 < b3.char.length)
          return b3.char;
        if (b3.which)
          return String.fromCharCode(b3.which);
      }
      return null;
    case "compositionend":
      return de && b3.locale !== "ko" ? null : b3.data;
    default:
      return null;
  }
}
var le = {color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true};
function me(a2) {
  var b3 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b3 === "input" ? !!le[a2.type] : b3 === "textarea" ? true : false;
}
function ne(a2, b3, c3, d3) {
  Eb(d3);
  b3 = oe(b3, "onChange");
  0 < b3.length && (c3 = new td("onChange", "change", null, c3, d3), a2.push({event: c3, listeners: b3}));
}
var pe = null;
var qe = null;
function re(a2) {
  se(a2, 0);
}
function te(a2) {
  var b3 = ue(a2);
  if (Wa(b3))
    return a2;
}
function ve(a2, b3) {
  if (a2 === "change")
    return b3;
}
var we = false;
if (fa) {
  if (fa) {
    ye2 = "oninput" in document;
    if (!ye2) {
      ze3 = document.createElement("div");
      ze3.setAttribute("oninput", "return;");
      ye2 = typeof ze3.oninput === "function";
    }
    xe3 = ye2;
  } else
    xe3 = false;
  we = xe3 && (!document.documentMode || 9 < document.documentMode);
}
var xe3;
var ye2;
var ze3;
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a2) {
  if (a2.propertyName === "value" && te(qe)) {
    var b3 = [];
    ne(b3, qe, a2, xb(a2));
    a2 = re;
    if (Kb)
      a2(b3);
    else {
      Kb = true;
      try {
        Gb(a2, b3);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a2, b3, c3) {
  a2 === "focusin" ? (Ae(), pe = b3, qe = c3, pe.attachEvent("onpropertychange", Be)) : a2 === "focusout" && Ae();
}
function De(a2) {
  if (a2 === "selectionchange" || a2 === "keyup" || a2 === "keydown")
    return te(qe);
}
function Ee(a2, b3) {
  if (a2 === "click")
    return te(b3);
}
function Fe(a2, b3) {
  if (a2 === "input" || a2 === "change")
    return te(b3);
}
function Ge(a2, b3) {
  return a2 === b3 && (a2 !== 0 || 1 / a2 === 1 / b3) || a2 !== a2 && b3 !== b3;
}
var He = typeof Object.is === "function" ? Object.is : Ge;
var Ie = Object.prototype.hasOwnProperty;
function Je(a2, b3) {
  if (He(a2, b3))
    return true;
  if (typeof a2 !== "object" || a2 === null || typeof b3 !== "object" || b3 === null)
    return false;
  var c3 = Object.keys(a2), d3 = Object.keys(b3);
  if (c3.length !== d3.length)
    return false;
  for (d3 = 0; d3 < c3.length; d3++)
    if (!Ie.call(b3, c3[d3]) || !He(a2[c3[d3]], b3[c3[d3]]))
      return false;
  return true;
}
function Ke(a2) {
  for (; a2 && a2.firstChild; )
    a2 = a2.firstChild;
  return a2;
}
function Le(a2, b3) {
  var c3 = Ke(a2);
  a2 = 0;
  for (var d3; c3; ) {
    if (c3.nodeType === 3) {
      d3 = a2 + c3.textContent.length;
      if (a2 <= b3 && d3 >= b3)
        return {node: c3, offset: b3 - a2};
      a2 = d3;
    }
    a: {
      for (; c3; ) {
        if (c3.nextSibling) {
          c3 = c3.nextSibling;
          break a;
        }
        c3 = c3.parentNode;
      }
      c3 = void 0;
    }
    c3 = Ke(c3);
  }
}
function Me(a2, b3) {
  return a2 && b3 ? a2 === b3 ? true : a2 && a2.nodeType === 3 ? false : b3 && b3.nodeType === 3 ? Me(a2, b3.parentNode) : "contains" in a2 ? a2.contains(b3) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b3) & 16) : false : false;
}
function Ne() {
  for (var a2 = window, b3 = Xa(); b3 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c3 = typeof b3.contentWindow.location.href === "string";
    } catch (d3) {
      c3 = false;
    }
    if (c3)
      a2 = b3.contentWindow;
    else
      break;
    b3 = Xa(a2.document);
  }
  return b3;
}
function Oe(a2) {
  var b3 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b3 && (b3 === "input" && (a2.type === "text" || a2.type === "search" || a2.type === "tel" || a2.type === "url" || a2.type === "password") || b3 === "textarea" || a2.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode;
var Qe = null;
var Re = null;
var Se = null;
var Te = false;
function Ue(a2, b3, c3) {
  var d3 = c3.window === c3 ? c3.document : c3.nodeType === 9 ? c3 : c3.ownerDocument;
  Te || Qe == null || Qe !== Xa(d3) || (d3 = Qe, "selectionStart" in d3 && Oe(d3) ? d3 = {start: d3.selectionStart, end: d3.selectionEnd} : (d3 = (d3.ownerDocument && d3.ownerDocument.defaultView || window).getSelection(), d3 = {anchorNode: d3.anchorNode, anchorOffset: d3.anchorOffset, focusNode: d3.focusNode, focusOffset: d3.focusOffset}), Se && Je(Se, d3) || (Se = d3, d3 = oe(Re, "onSelect"), 0 < d3.length && (b3 = new td("onSelect", "select", null, b3, c3), a2.push({event: b3, listeners: d3}), b3.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve3 = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We2 = 0; We2 < Ve3.length; We2++)
  Nc.set(Ve3[We2], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
var Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a2, b3, c3) {
  var d3 = a2.type || "unknown-event";
  a2.currentTarget = c3;
  Yb(d3, b3, void 0, a2);
  a2.currentTarget = null;
}
function se(a2, b3) {
  b3 = (b3 & 4) !== 0;
  for (var c3 = 0; c3 < a2.length; c3++) {
    var d3 = a2[c3], e4 = d3.event;
    d3 = d3.listeners;
    a: {
      var f3 = void 0;
      if (b3)
        for (var g4 = d3.length - 1; 0 <= g4; g4--) {
          var h3 = d3[g4], k2 = h3.instance, l2 = h3.currentTarget;
          h3 = h3.listener;
          if (k2 !== f3 && e4.isPropagationStopped())
            break a;
          Ze(e4, h3, l2);
          f3 = k2;
        }
      else
        for (g4 = 0; g4 < d3.length; g4++) {
          h3 = d3[g4];
          k2 = h3.instance;
          l2 = h3.currentTarget;
          h3 = h3.listener;
          if (k2 !== f3 && e4.isPropagationStopped())
            break a;
          Ze(e4, h3, l2);
          f3 = k2;
        }
    }
  }
  if (Ub)
    throw a2 = Vb, Ub = false, Vb = null, a2;
}
function G(a2, b3) {
  var c3 = $e(b3), d3 = a2 + "__bubble";
  c3.has(d3) || (af(b3, a2, 2, false), c3.add(d3));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a2) {
  a2[bf] || (a2[bf] = true, ba.forEach(function(b3) {
    Ye.has(b3) || df(b3, false, a2, null);
    df(b3, true, a2, null);
  }));
}
function df(a2, b3, c3, d3) {
  var e4 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f3 = c3;
  a2 === "selectionchange" && c3.nodeType !== 9 && (f3 = c3.ownerDocument);
  if (d3 !== null && !b3 && Ye.has(a2)) {
    if (a2 !== "scroll")
      return;
    e4 |= 2;
    f3 = d3;
  }
  var g4 = $e(f3), h3 = a2 + "__" + (b3 ? "capture" : "bubble");
  g4.has(h3) || (b3 && (e4 |= 4), af(f3, a2, e4, b3), g4.add(h3));
}
function af(a2, b3, c3, d3) {
  var e4 = Nc.get(b3);
  switch (e4 === void 0 ? 2 : e4) {
    case 0:
      e4 = gd;
      break;
    case 1:
      e4 = id;
      break;
    default:
      e4 = hd;
  }
  c3 = e4.bind(null, b3, c3, a2);
  e4 = void 0;
  !Pb || b3 !== "touchstart" && b3 !== "touchmove" && b3 !== "wheel" || (e4 = true);
  d3 ? e4 !== void 0 ? a2.addEventListener(b3, c3, {capture: true, passive: e4}) : a2.addEventListener(b3, c3, true) : e4 !== void 0 ? a2.addEventListener(b3, c3, {passive: e4}) : a2.addEventListener(b3, c3, false);
}
function jd(a2, b3, c3, d3, e4) {
  var f3 = d3;
  if ((b3 & 1) === 0 && (b3 & 2) === 0 && d3 !== null)
    a:
      for (; ; ) {
        if (d3 === null)
          return;
        var g4 = d3.tag;
        if (g4 === 3 || g4 === 4) {
          var h3 = d3.stateNode.containerInfo;
          if (h3 === e4 || h3.nodeType === 8 && h3.parentNode === e4)
            break;
          if (g4 === 4)
            for (g4 = d3.return; g4 !== null; ) {
              var k2 = g4.tag;
              if (k2 === 3 || k2 === 4) {
                if (k2 = g4.stateNode.containerInfo, k2 === e4 || k2.nodeType === 8 && k2.parentNode === e4)
                  return;
              }
              g4 = g4.return;
            }
          for (; h3 !== null; ) {
            g4 = wc(h3);
            if (g4 === null)
              return;
            k2 = g4.tag;
            if (k2 === 5 || k2 === 6) {
              d3 = f3 = g4;
              continue a;
            }
            h3 = h3.parentNode;
          }
        }
        d3 = d3.return;
      }
  Nb(function() {
    var d4 = f3, e5 = xb(c3), g5 = [];
    a: {
      var h4 = Mc.get(a2);
      if (h4 !== void 0) {
        var k3 = td, x2 = a2;
        switch (a2) {
          case "keypress":
            if (od(c3) === 0)
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            x2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            x2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (c3.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k3 = Hd;
            break;
          case Lc:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var w3 = (b3 & 4) !== 0, z3 = !w3 && a2 === "scroll", u2 = w3 ? h4 !== null ? h4 + "Capture" : null : h4;
        w3 = [];
        for (var t3 = d4, q2; t3 !== null; ) {
          q2 = t3;
          var v3 = q2.stateNode;
          q2.tag === 5 && v3 !== null && (q2 = v3, u2 !== null && (v3 = Ob(t3, u2), v3 != null && w3.push(ef(t3, v3, q2))));
          if (z3)
            break;
          t3 = t3.return;
        }
        0 < w3.length && (h4 = new k3(h4, x2, null, c3, e5), g5.push({event: h4, listeners: w3}));
      }
    }
    if ((b3 & 7) === 0) {
      a: {
        h4 = a2 === "mouseover" || a2 === "pointerover";
        k3 = a2 === "mouseout" || a2 === "pointerout";
        if (h4 && (b3 & 16) === 0 && (x2 = c3.relatedTarget || c3.fromElement) && (wc(x2) || x2[ff]))
          break a;
        if (k3 || h4) {
          h4 = e5.window === e5 ? e5 : (h4 = e5.ownerDocument) ? h4.defaultView || h4.parentWindow : window;
          if (k3) {
            if (x2 = c3.relatedTarget || c3.toElement, k3 = d4, x2 = x2 ? wc(x2) : null, x2 !== null && (z3 = Zb(x2), x2 !== z3 || x2.tag !== 5 && x2.tag !== 6))
              x2 = null;
          } else
            k3 = null, x2 = d4;
          if (k3 !== x2) {
            w3 = Bd;
            v3 = "onMouseLeave";
            u2 = "onMouseEnter";
            t3 = "mouse";
            if (a2 === "pointerout" || a2 === "pointerover")
              w3 = Td, v3 = "onPointerLeave", u2 = "onPointerEnter", t3 = "pointer";
            z3 = k3 == null ? h4 : ue(k3);
            q2 = x2 == null ? h4 : ue(x2);
            h4 = new w3(v3, t3 + "leave", k3, c3, e5);
            h4.target = z3;
            h4.relatedTarget = q2;
            v3 = null;
            wc(e5) === d4 && (w3 = new w3(u2, t3 + "enter", x2, c3, e5), w3.target = q2, w3.relatedTarget = z3, v3 = w3);
            z3 = v3;
            if (k3 && x2)
              b: {
                w3 = k3;
                u2 = x2;
                t3 = 0;
                for (q2 = w3; q2; q2 = gf(q2))
                  t3++;
                q2 = 0;
                for (v3 = u2; v3; v3 = gf(v3))
                  q2++;
                for (; 0 < t3 - q2; )
                  w3 = gf(w3), t3--;
                for (; 0 < q2 - t3; )
                  u2 = gf(u2), q2--;
                for (; t3--; ) {
                  if (w3 === u2 || u2 !== null && w3 === u2.alternate)
                    break b;
                  w3 = gf(w3);
                  u2 = gf(u2);
                }
                w3 = null;
              }
            else
              w3 = null;
            k3 !== null && hf(g5, h4, k3, w3, false);
            x2 !== null && z3 !== null && hf(g5, z3, x2, w3, true);
          }
        }
      }
      a: {
        h4 = d4 ? ue(d4) : window;
        k3 = h4.nodeName && h4.nodeName.toLowerCase();
        if (k3 === "select" || k3 === "input" && h4.type === "file")
          var J3 = ve;
        else if (me(h4))
          if (we)
            J3 = Fe;
          else {
            J3 = De;
            var K3 = Ce;
          }
        else
          (k3 = h4.nodeName) && k3.toLowerCase() === "input" && (h4.type === "checkbox" || h4.type === "radio") && (J3 = Ee);
        if (J3 && (J3 = J3(a2, d4))) {
          ne(g5, J3, c3, e5);
          break a;
        }
        K3 && K3(a2, h4, d4);
        a2 === "focusout" && (K3 = h4._wrapperState) && K3.controlled && h4.type === "number" && bb(h4, "number", h4.value);
      }
      K3 = d4 ? ue(d4) : window;
      switch (a2) {
        case "focusin":
          if (me(K3) || K3.contentEditable === "true")
            Qe = K3, Re = d4, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g5, c3, e5);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g5, c3, e5);
      }
      var Q3;
      if (ae)
        b: {
          switch (a2) {
            case "compositionstart":
              var L3 = "onCompositionStart";
              break b;
            case "compositionend":
              L3 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L3 = "onCompositionUpdate";
              break b;
          }
          L3 = void 0;
        }
      else
        ie ? ge(a2, c3) && (L3 = "onCompositionEnd") : a2 === "keydown" && c3.keyCode === 229 && (L3 = "onCompositionStart");
      L3 && (de && c3.locale !== "ko" && (ie || L3 !== "onCompositionStart" ? L3 === "onCompositionEnd" && ie && (Q3 = nd()) : (kd = e5, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K3 = oe(d4, L3), 0 < K3.length && (L3 = new Ld(L3, a2, null, c3, e5), g5.push({event: L3, listeners: K3}), Q3 ? L3.data = Q3 : (Q3 = he(c3), Q3 !== null && (L3.data = Q3))));
      if (Q3 = ce ? je(a2, c3) : ke(a2, c3))
        d4 = oe(d4, "onBeforeInput"), 0 < d4.length && (e5 = new Ld("onBeforeInput", "beforeinput", null, c3, e5), g5.push({event: e5, listeners: d4}), e5.data = Q3);
    }
    se(g5, b3);
  });
}
function ef(a2, b3, c3) {
  return {instance: a2, listener: b3, currentTarget: c3};
}
function oe(a2, b3) {
  for (var c3 = b3 + "Capture", d3 = []; a2 !== null; ) {
    var e4 = a2, f3 = e4.stateNode;
    e4.tag === 5 && f3 !== null && (e4 = f3, f3 = Ob(a2, c3), f3 != null && d3.unshift(ef(a2, f3, e4)), f3 = Ob(a2, b3), f3 != null && d3.push(ef(a2, f3, e4)));
    a2 = a2.return;
  }
  return d3;
}
function gf(a2) {
  if (a2 === null)
    return null;
  do
    a2 = a2.return;
  while (a2 && a2.tag !== 5);
  return a2 ? a2 : null;
}
function hf(a2, b3, c3, d3, e4) {
  for (var f3 = b3._reactName, g4 = []; c3 !== null && c3 !== d3; ) {
    var h3 = c3, k2 = h3.alternate, l2 = h3.stateNode;
    if (k2 !== null && k2 === d3)
      break;
    h3.tag === 5 && l2 !== null && (h3 = l2, e4 ? (k2 = Ob(c3, f3), k2 != null && g4.unshift(ef(c3, k2, h3))) : e4 || (k2 = Ob(c3, f3), k2 != null && g4.push(ef(c3, k2, h3))));
    c3 = c3.return;
  }
  g4.length !== 0 && a2.push({event: b3, listeners: g4});
}
function jf() {
}
var kf = null;
var lf = null;
function mf(a2, b3) {
  switch (a2) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b3.autoFocus;
  }
  return false;
}
function nf(a2, b3) {
  return a2 === "textarea" || a2 === "option" || a2 === "noscript" || typeof b3.children === "string" || typeof b3.children === "number" || typeof b3.dangerouslySetInnerHTML === "object" && b3.dangerouslySetInnerHTML !== null && b3.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0;
var pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a2) {
  a2.nodeType === 1 ? a2.textContent = "" : a2.nodeType === 9 && (a2 = a2.body, a2 != null && (a2.textContent = ""));
}
function rf(a2) {
  for (; a2 != null; a2 = a2.nextSibling) {
    var b3 = a2.nodeType;
    if (b3 === 1 || b3 === 3)
      break;
  }
  return a2;
}
function sf(a2) {
  a2 = a2.previousSibling;
  for (var b3 = 0; a2; ) {
    if (a2.nodeType === 8) {
      var c3 = a2.data;
      if (c3 === "$" || c3 === "$!" || c3 === "$?") {
        if (b3 === 0)
          return a2;
        b3--;
      } else
        c3 === "/$" && b3++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a2) {
  return {$$typeof: Ga, toString: a2, valueOf: a2};
}
var vf = Math.random().toString(36).slice(2);
var wf = "__reactFiber$" + vf;
var xf = "__reactProps$" + vf;
var ff = "__reactContainer$" + vf;
var yf = "__reactEvents$" + vf;
function wc(a2) {
  var b3 = a2[wf];
  if (b3)
    return b3;
  for (var c3 = a2.parentNode; c3; ) {
    if (b3 = c3[ff] || c3[wf]) {
      c3 = b3.alternate;
      if (b3.child !== null || c3 !== null && c3.child !== null)
        for (a2 = sf(a2); a2 !== null; ) {
          if (c3 = a2[wf])
            return c3;
          a2 = sf(a2);
        }
      return b3;
    }
    a2 = c3;
    c3 = a2.parentNode;
  }
  return null;
}
function Cb(a2) {
  a2 = a2[wf] || a2[ff];
  return !a2 || a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 13 && a2.tag !== 3 ? null : a2;
}
function ue(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2.stateNode;
  throw Error(y(33));
}
function Db(a2) {
  return a2[xf] || null;
}
function $e(a2) {
  var b3 = a2[yf];
  b3 === void 0 && (b3 = a2[yf] = new Set());
  return b3;
}
var zf = [];
var Af = -1;
function Bf(a2) {
  return {current: a2};
}
function H(a2) {
  0 > Af || (a2.current = zf[Af], zf[Af] = null, Af--);
}
function I(a2, b3) {
  Af++;
  zf[Af] = a2.current;
  a2.current = b3;
}
var Cf = {};
var M = Bf(Cf);
var N = Bf(false);
var Df = Cf;
function Ef(a2, b3) {
  var c3 = a2.type.contextTypes;
  if (!c3)
    return Cf;
  var d3 = a2.stateNode;
  if (d3 && d3.__reactInternalMemoizedUnmaskedChildContext === b3)
    return d3.__reactInternalMemoizedMaskedChildContext;
  var e4 = {}, f3;
  for (f3 in c3)
    e4[f3] = b3[f3];
  d3 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b3, a2.__reactInternalMemoizedMaskedChildContext = e4);
  return e4;
}
function Ff(a2) {
  a2 = a2.childContextTypes;
  return a2 !== null && a2 !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a2, b3, c3) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b3);
  I(N, c3);
}
function If(a2, b3, c3) {
  var d3 = a2.stateNode;
  a2 = b3.childContextTypes;
  if (typeof d3.getChildContext !== "function")
    return c3;
  d3 = d3.getChildContext();
  for (var e4 in d3)
    if (!(e4 in a2))
      throw Error(y(108, Ra(b3) || "Unknown", e4));
  return objectAssign({}, c3, d3);
}
function Jf(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a2);
  I(N, N.current);
  return true;
}
function Kf(a2, b3, c3) {
  var d3 = a2.stateNode;
  if (!d3)
    throw Error(y(169));
  c3 ? (a2 = If(a2, b3, Df), d3.__reactInternalMemoizedMergedChildContext = a2, H(N), H(M), I(M, a2)) : H(N);
  I(N, c3);
}
var Lf = null;
var Mf = null;
var Nf = scheduler.unstable_runWithPriority;
var Of = scheduler.unstable_scheduleCallback;
var Pf = scheduler.unstable_cancelCallback;
var Qf = scheduler.unstable_shouldYield;
var Rf = scheduler.unstable_requestPaint;
var Sf = scheduler.unstable_now;
var Tf = scheduler.unstable_getCurrentPriorityLevel;
var Uf = scheduler.unstable_ImmediatePriority;
var Vf = scheduler.unstable_UserBlockingPriority;
var Wf = scheduler.unstable_NormalPriority;
var Xf = scheduler.unstable_LowPriority;
var Yf = scheduler.unstable_IdlePriority;
var Zf = {};
var $f = Rf !== void 0 ? Rf : function() {
};
var ag = null;
var bg = null;
var cg = false;
var dg = Sf();
var O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y(332));
  }
}
function fg(a2) {
  switch (a2) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y(332));
  }
}
function gg(a2, b3) {
  a2 = fg(a2);
  return Nf(a2, b3);
}
function hg(a2, b3, c3) {
  a2 = fg(a2);
  return Of(a2, b3, c3);
}
function ig() {
  if (bg !== null) {
    var a2 = bg;
    bg = null;
    Pf(a2);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a2 = 0;
    try {
      var b3 = ag;
      gg(99, function() {
        for (; a2 < b3.length; a2++) {
          var c3 = b3[a2];
          do
            c3 = c3(true);
          while (c3 !== null);
        }
      });
      ag = null;
    } catch (c3) {
      throw ag !== null && (ag = ag.slice(a2 + 1)), Of(Uf, ig), c3;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a2, b3) {
  if (a2 && a2.defaultProps) {
    b3 = objectAssign({}, b3);
    a2 = a2.defaultProps;
    for (var c3 in a2)
      b3[c3] === void 0 && (b3[c3] = a2[c3]);
    return b3;
  }
  return b3;
}
var mg = Bf(null);
var ng = null;
var og = null;
var pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a2) {
  var b3 = mg.current;
  H(mg);
  a2.type._context._currentValue = b3;
}
function sg(a2, b3) {
  for (; a2 !== null; ) {
    var c3 = a2.alternate;
    if ((a2.childLanes & b3) === b3)
      if (c3 === null || (c3.childLanes & b3) === b3)
        break;
      else
        c3.childLanes |= b3;
    else
      a2.childLanes |= b3, c3 !== null && (c3.childLanes |= b3);
    a2 = a2.return;
  }
}
function tg(a2, b3) {
  ng = a2;
  pg = og = null;
  a2 = a2.dependencies;
  a2 !== null && a2.firstContext !== null && ((a2.lanes & b3) !== 0 && (ug = true), a2.firstContext = null);
}
function vg(a2, b3) {
  if (pg !== a2 && b3 !== false && b3 !== 0) {
    if (typeof b3 !== "number" || b3 === 1073741823)
      pg = a2, b3 = 1073741823;
    b3 = {context: a2, observedBits: b3, next: null};
    if (og === null) {
      if (ng === null)
        throw Error(y(308));
      og = b3;
      ng.dependencies = {lanes: 0, firstContext: b3, responders: null};
    } else
      og = og.next = b3;
  }
  return a2._currentValue;
}
var wg = false;
function xg(a2) {
  a2.updateQueue = {baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: {pending: null}, effects: null};
}
function yg(a2, b3) {
  a2 = a2.updateQueue;
  b3.updateQueue === a2 && (b3.updateQueue = {baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects});
}
function zg(a2, b3) {
  return {eventTime: a2, lane: b3, tag: 0, payload: null, callback: null, next: null};
}
function Ag(a2, b3) {
  a2 = a2.updateQueue;
  if (a2 !== null) {
    a2 = a2.shared;
    var c3 = a2.pending;
    c3 === null ? b3.next = b3 : (b3.next = c3.next, c3.next = b3);
    a2.pending = b3;
  }
}
function Bg(a2, b3) {
  var c3 = a2.updateQueue, d3 = a2.alternate;
  if (d3 !== null && (d3 = d3.updateQueue, c3 === d3)) {
    var e4 = null, f3 = null;
    c3 = c3.firstBaseUpdate;
    if (c3 !== null) {
      do {
        var g4 = {eventTime: c3.eventTime, lane: c3.lane, tag: c3.tag, payload: c3.payload, callback: c3.callback, next: null};
        f3 === null ? e4 = f3 = g4 : f3 = f3.next = g4;
        c3 = c3.next;
      } while (c3 !== null);
      f3 === null ? e4 = f3 = b3 : f3 = f3.next = b3;
    } else
      e4 = f3 = b3;
    c3 = {baseState: d3.baseState, firstBaseUpdate: e4, lastBaseUpdate: f3, shared: d3.shared, effects: d3.effects};
    a2.updateQueue = c3;
    return;
  }
  a2 = c3.lastBaseUpdate;
  a2 === null ? c3.firstBaseUpdate = b3 : a2.next = b3;
  c3.lastBaseUpdate = b3;
}
function Cg(a2, b3, c3, d3) {
  var e4 = a2.updateQueue;
  wg = false;
  var f3 = e4.firstBaseUpdate, g4 = e4.lastBaseUpdate, h3 = e4.shared.pending;
  if (h3 !== null) {
    e4.shared.pending = null;
    var k2 = h3, l2 = k2.next;
    k2.next = null;
    g4 === null ? f3 = l2 : g4.next = l2;
    g4 = k2;
    var n3 = a2.alternate;
    if (n3 !== null) {
      n3 = n3.updateQueue;
      var A2 = n3.lastBaseUpdate;
      A2 !== g4 && (A2 === null ? n3.firstBaseUpdate = l2 : A2.next = l2, n3.lastBaseUpdate = k2);
    }
  }
  if (f3 !== null) {
    A2 = e4.baseState;
    g4 = 0;
    n3 = l2 = k2 = null;
    do {
      h3 = f3.lane;
      var p3 = f3.eventTime;
      if ((d3 & h3) === h3) {
        n3 !== null && (n3 = n3.next = {
          eventTime: p3,
          lane: 0,
          tag: f3.tag,
          payload: f3.payload,
          callback: f3.callback,
          next: null
        });
        a: {
          var C = a2, x2 = f3;
          h3 = b3;
          p3 = c3;
          switch (x2.tag) {
            case 1:
              C = x2.payload;
              if (typeof C === "function") {
                A2 = C.call(p3, A2, h3);
                break a;
              }
              A2 = C;
              break a;
            case 3:
              C.flags = C.flags & -4097 | 64;
            case 0:
              C = x2.payload;
              h3 = typeof C === "function" ? C.call(p3, A2, h3) : C;
              if (h3 === null || h3 === void 0)
                break a;
              A2 = objectAssign({}, A2, h3);
              break a;
            case 2:
              wg = true;
          }
        }
        f3.callback !== null && (a2.flags |= 32, h3 = e4.effects, h3 === null ? e4.effects = [f3] : h3.push(f3));
      } else
        p3 = {eventTime: p3, lane: h3, tag: f3.tag, payload: f3.payload, callback: f3.callback, next: null}, n3 === null ? (l2 = n3 = p3, k2 = A2) : n3 = n3.next = p3, g4 |= h3;
      f3 = f3.next;
      if (f3 === null)
        if (h3 = e4.shared.pending, h3 === null)
          break;
        else
          f3 = h3.next, h3.next = null, e4.lastBaseUpdate = h3, e4.shared.pending = null;
    } while (1);
    n3 === null && (k2 = A2);
    e4.baseState = k2;
    e4.firstBaseUpdate = l2;
    e4.lastBaseUpdate = n3;
    Dg |= g4;
    a2.lanes = g4;
    a2.memoizedState = A2;
  }
}
function Eg(a2, b3, c3) {
  a2 = b3.effects;
  b3.effects = null;
  if (a2 !== null)
    for (b3 = 0; b3 < a2.length; b3++) {
      var d3 = a2[b3], e4 = d3.callback;
      if (e4 !== null) {
        d3.callback = null;
        d3 = c3;
        if (typeof e4 !== "function")
          throw Error(y(191, e4));
        e4.call(d3);
      }
    }
}
var Fg = new react.Component().refs;
function Gg(a2, b3, c3, d3) {
  b3 = a2.memoizedState;
  c3 = c3(d3, b3);
  c3 = c3 === null || c3 === void 0 ? b3 : objectAssign({}, b3, c3);
  a2.memoizedState = c3;
  a2.lanes === 0 && (a2.updateQueue.baseState = c3);
}
var Kg = {isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Zb(a2) === a2 : false;
}, enqueueSetState: function(a2, b3, c3) {
  a2 = a2._reactInternals;
  var d3 = Hg(), e4 = Ig(a2), f3 = zg(d3, e4);
  f3.payload = b3;
  c3 !== void 0 && c3 !== null && (f3.callback = c3);
  Ag(a2, f3);
  Jg(a2, e4, d3);
}, enqueueReplaceState: function(a2, b3, c3) {
  a2 = a2._reactInternals;
  var d3 = Hg(), e4 = Ig(a2), f3 = zg(d3, e4);
  f3.tag = 1;
  f3.payload = b3;
  c3 !== void 0 && c3 !== null && (f3.callback = c3);
  Ag(a2, f3);
  Jg(a2, e4, d3);
}, enqueueForceUpdate: function(a2, b3) {
  a2 = a2._reactInternals;
  var c3 = Hg(), d3 = Ig(a2), e4 = zg(c3, d3);
  e4.tag = 2;
  b3 !== void 0 && b3 !== null && (e4.callback = b3);
  Ag(a2, e4);
  Jg(a2, d3, c3);
}};
function Lg(a2, b3, c3, d3, e4, f3, g4) {
  a2 = a2.stateNode;
  return typeof a2.shouldComponentUpdate === "function" ? a2.shouldComponentUpdate(d3, f3, g4) : b3.prototype && b3.prototype.isPureReactComponent ? !Je(c3, d3) || !Je(e4, f3) : true;
}
function Mg(a2, b3, c3) {
  var d3 = false, e4 = Cf;
  var f3 = b3.contextType;
  typeof f3 === "object" && f3 !== null ? f3 = vg(f3) : (e4 = Ff(b3) ? Df : M.current, d3 = b3.contextTypes, f3 = (d3 = d3 !== null && d3 !== void 0) ? Ef(a2, e4) : Cf);
  b3 = new b3(c3, f3);
  a2.memoizedState = b3.state !== null && b3.state !== void 0 ? b3.state : null;
  b3.updater = Kg;
  a2.stateNode = b3;
  b3._reactInternals = a2;
  d3 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e4, a2.__reactInternalMemoizedMaskedChildContext = f3);
  return b3;
}
function Ng(a2, b3, c3, d3) {
  a2 = b3.state;
  typeof b3.componentWillReceiveProps === "function" && b3.componentWillReceiveProps(c3, d3);
  typeof b3.UNSAFE_componentWillReceiveProps === "function" && b3.UNSAFE_componentWillReceiveProps(c3, d3);
  b3.state !== a2 && Kg.enqueueReplaceState(b3, b3.state, null);
}
function Og(a2, b3, c3, d3) {
  var e4 = a2.stateNode;
  e4.props = c3;
  e4.state = a2.memoizedState;
  e4.refs = Fg;
  xg(a2);
  var f3 = b3.contextType;
  typeof f3 === "object" && f3 !== null ? e4.context = vg(f3) : (f3 = Ff(b3) ? Df : M.current, e4.context = Ef(a2, f3));
  Cg(a2, c3, e4, d3);
  e4.state = a2.memoizedState;
  f3 = b3.getDerivedStateFromProps;
  typeof f3 === "function" && (Gg(a2, b3, f3, c3), e4.state = a2.memoizedState);
  typeof b3.getDerivedStateFromProps === "function" || typeof e4.getSnapshotBeforeUpdate === "function" || typeof e4.UNSAFE_componentWillMount !== "function" && typeof e4.componentWillMount !== "function" || (b3 = e4.state, typeof e4.componentWillMount === "function" && e4.componentWillMount(), typeof e4.UNSAFE_componentWillMount === "function" && e4.UNSAFE_componentWillMount(), b3 !== e4.state && Kg.enqueueReplaceState(e4, e4.state, null), Cg(a2, c3, e4, d3), e4.state = a2.memoizedState);
  typeof e4.componentDidMount === "function" && (a2.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a2, b3, c3) {
  a2 = c3.ref;
  if (a2 !== null && typeof a2 !== "function" && typeof a2 !== "object") {
    if (c3._owner) {
      c3 = c3._owner;
      if (c3) {
        if (c3.tag !== 1)
          throw Error(y(309));
        var d3 = c3.stateNode;
      }
      if (!d3)
        throw Error(y(147, a2));
      var e4 = "" + a2;
      if (b3 !== null && b3.ref !== null && typeof b3.ref === "function" && b3.ref._stringRef === e4)
        return b3.ref;
      b3 = function(a3) {
        var b4 = d3.refs;
        b4 === Fg && (b4 = d3.refs = {});
        a3 === null ? delete b4[e4] : b4[e4] = a3;
      };
      b3._stringRef = e4;
      return b3;
    }
    if (typeof a2 !== "string")
      throw Error(y(284));
    if (!c3._owner)
      throw Error(y(290, a2));
  }
  return a2;
}
function Rg(a2, b3) {
  if (a2.type !== "textarea")
    throw Error(y(31, Object.prototype.toString.call(b3) === "[object Object]" ? "object with keys {" + Object.keys(b3).join(", ") + "}" : b3));
}
function Sg(a2) {
  function b3(b4, c4) {
    if (a2) {
      var d4 = b4.lastEffect;
      d4 !== null ? (d4.nextEffect = c4, b4.lastEffect = c4) : b4.firstEffect = b4.lastEffect = c4;
      c4.nextEffect = null;
      c4.flags = 8;
    }
  }
  function c3(c4, d4) {
    if (!a2)
      return null;
    for (; d4 !== null; )
      b3(c4, d4), d4 = d4.sibling;
    return null;
  }
  function d3(a3, b4) {
    for (a3 = new Map(); b4 !== null; )
      b4.key !== null ? a3.set(b4.key, b4) : a3.set(b4.index, b4), b4 = b4.sibling;
    return a3;
  }
  function e4(a3, b4) {
    a3 = Tg(a3, b4);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f3(b4, c4, d4) {
    b4.index = d4;
    if (!a2)
      return c4;
    d4 = b4.alternate;
    if (d4 !== null)
      return d4 = d4.index, d4 < c4 ? (b4.flags = 2, c4) : d4;
    b4.flags = 2;
    return c4;
  }
  function g4(b4) {
    a2 && b4.alternate === null && (b4.flags = 2);
    return b4;
  }
  function h3(a3, b4, c4, d4) {
    if (b4 === null || b4.tag !== 6)
      return b4 = Ug(c4, a3.mode, d4), b4.return = a3, b4;
    b4 = e4(b4, c4);
    b4.return = a3;
    return b4;
  }
  function k2(a3, b4, c4, d4) {
    if (b4 !== null && b4.elementType === c4.type)
      return d4 = e4(b4, c4.props), d4.ref = Qg(a3, b4, c4), d4.return = a3, d4;
    d4 = Vg(c4.type, c4.key, c4.props, null, a3.mode, d4);
    d4.ref = Qg(a3, b4, c4);
    d4.return = a3;
    return d4;
  }
  function l2(a3, b4, c4, d4) {
    if (b4 === null || b4.tag !== 4 || b4.stateNode.containerInfo !== c4.containerInfo || b4.stateNode.implementation !== c4.implementation)
      return b4 = Wg(c4, a3.mode, d4), b4.return = a3, b4;
    b4 = e4(b4, c4.children || []);
    b4.return = a3;
    return b4;
  }
  function n3(a3, b4, c4, d4, f4) {
    if (b4 === null || b4.tag !== 7)
      return b4 = Xg(c4, a3.mode, d4, f4), b4.return = a3, b4;
    b4 = e4(b4, c4);
    b4.return = a3;
    return b4;
  }
  function A2(a3, b4, c4) {
    if (typeof b4 === "string" || typeof b4 === "number")
      return b4 = Ug("" + b4, a3.mode, c4), b4.return = a3, b4;
    if (typeof b4 === "object" && b4 !== null) {
      switch (b4.$$typeof) {
        case sa:
          return c4 = Vg(b4.type, b4.key, b4.props, null, a3.mode, c4), c4.ref = Qg(a3, null, b4), c4.return = a3, c4;
        case ta:
          return b4 = Wg(b4, a3.mode, c4), b4.return = a3, b4;
      }
      if (Pg(b4) || La(b4))
        return b4 = Xg(b4, a3.mode, c4, null), b4.return = a3, b4;
      Rg(a3, b4);
    }
    return null;
  }
  function p3(a3, b4, c4, d4) {
    var e5 = b4 !== null ? b4.key : null;
    if (typeof c4 === "string" || typeof c4 === "number")
      return e5 !== null ? null : h3(a3, b4, "" + c4, d4);
    if (typeof c4 === "object" && c4 !== null) {
      switch (c4.$$typeof) {
        case sa:
          return c4.key === e5 ? c4.type === ua ? n3(a3, b4, c4.props.children, d4, e5) : k2(a3, b4, c4, d4) : null;
        case ta:
          return c4.key === e5 ? l2(a3, b4, c4, d4) : null;
      }
      if (Pg(c4) || La(c4))
        return e5 !== null ? null : n3(a3, b4, c4, d4, null);
      Rg(a3, c4);
    }
    return null;
  }
  function C(a3, b4, c4, d4, e5) {
    if (typeof d4 === "string" || typeof d4 === "number")
      return a3 = a3.get(c4) || null, h3(b4, a3, "" + d4, e5);
    if (typeof d4 === "object" && d4 !== null) {
      switch (d4.$$typeof) {
        case sa:
          return a3 = a3.get(d4.key === null ? c4 : d4.key) || null, d4.type === ua ? n3(b4, a3, d4.props.children, e5, d4.key) : k2(b4, a3, d4, e5);
        case ta:
          return a3 = a3.get(d4.key === null ? c4 : d4.key) || null, l2(b4, a3, d4, e5);
      }
      if (Pg(d4) || La(d4))
        return a3 = a3.get(c4) || null, n3(b4, a3, d4, e5, null);
      Rg(b4, d4);
    }
    return null;
  }
  function x2(e5, g5, h4, k3) {
    for (var l3 = null, t3 = null, u2 = g5, z3 = g5 = 0, q2 = null; u2 !== null && z3 < h4.length; z3++) {
      u2.index > z3 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var n4 = p3(e5, u2, h4[z3], k3);
      if (n4 === null) {
        u2 === null && (u2 = q2);
        break;
      }
      a2 && u2 && n4.alternate === null && b3(e5, u2);
      g5 = f3(n4, g5, z3);
      t3 === null ? l3 = n4 : t3.sibling = n4;
      t3 = n4;
      u2 = q2;
    }
    if (z3 === h4.length)
      return c3(e5, u2), l3;
    if (u2 === null) {
      for (; z3 < h4.length; z3++)
        u2 = A2(e5, h4[z3], k3), u2 !== null && (g5 = f3(u2, g5, z3), t3 === null ? l3 = u2 : t3.sibling = u2, t3 = u2);
      return l3;
    }
    for (u2 = d3(e5, u2); z3 < h4.length; z3++)
      q2 = C(u2, e5, z3, h4[z3], k3), q2 !== null && (a2 && q2.alternate !== null && u2.delete(q2.key === null ? z3 : q2.key), g5 = f3(q2, g5, z3), t3 === null ? l3 = q2 : t3.sibling = q2, t3 = q2);
    a2 && u2.forEach(function(a3) {
      return b3(e5, a3);
    });
    return l3;
  }
  function w3(e5, g5, h4, k3) {
    var l3 = La(h4);
    if (typeof l3 !== "function")
      throw Error(y(150));
    h4 = l3.call(h4);
    if (h4 == null)
      throw Error(y(151));
    for (var t3 = l3 = null, u2 = g5, z3 = g5 = 0, q2 = null, n4 = h4.next(); u2 !== null && !n4.done; z3++, n4 = h4.next()) {
      u2.index > z3 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var w4 = p3(e5, u2, n4.value, k3);
      if (w4 === null) {
        u2 === null && (u2 = q2);
        break;
      }
      a2 && u2 && w4.alternate === null && b3(e5, u2);
      g5 = f3(w4, g5, z3);
      t3 === null ? l3 = w4 : t3.sibling = w4;
      t3 = w4;
      u2 = q2;
    }
    if (n4.done)
      return c3(e5, u2), l3;
    if (u2 === null) {
      for (; !n4.done; z3++, n4 = h4.next())
        n4 = A2(e5, n4.value, k3), n4 !== null && (g5 = f3(n4, g5, z3), t3 === null ? l3 = n4 : t3.sibling = n4, t3 = n4);
      return l3;
    }
    for (u2 = d3(e5, u2); !n4.done; z3++, n4 = h4.next())
      n4 = C(u2, e5, z3, n4.value, k3), n4 !== null && (a2 && n4.alternate !== null && u2.delete(n4.key === null ? z3 : n4.key), g5 = f3(n4, g5, z3), t3 === null ? l3 = n4 : t3.sibling = n4, t3 = n4);
    a2 && u2.forEach(function(a3) {
      return b3(e5, a3);
    });
    return l3;
  }
  return function(a3, d4, f4, h4) {
    var k3 = typeof f4 === "object" && f4 !== null && f4.type === ua && f4.key === null;
    k3 && (f4 = f4.props.children);
    var l3 = typeof f4 === "object" && f4 !== null;
    if (l3)
      switch (f4.$$typeof) {
        case sa:
          a: {
            l3 = f4.key;
            for (k3 = d4; k3 !== null; ) {
              if (k3.key === l3) {
                switch (k3.tag) {
                  case 7:
                    if (f4.type === ua) {
                      c3(a3, k3.sibling);
                      d4 = e4(k3, f4.props.children);
                      d4.return = a3;
                      a3 = d4;
                      break a;
                    }
                    break;
                  default:
                    if (k3.elementType === f4.type) {
                      c3(a3, k3.sibling);
                      d4 = e4(k3, f4.props);
                      d4.ref = Qg(a3, k3, f4);
                      d4.return = a3;
                      a3 = d4;
                      break a;
                    }
                }
                c3(a3, k3);
                break;
              } else
                b3(a3, k3);
              k3 = k3.sibling;
            }
            f4.type === ua ? (d4 = Xg(f4.props.children, a3.mode, h4, f4.key), d4.return = a3, a3 = d4) : (h4 = Vg(f4.type, f4.key, f4.props, null, a3.mode, h4), h4.ref = Qg(a3, d4, f4), h4.return = a3, a3 = h4);
          }
          return g4(a3);
        case ta:
          a: {
            for (k3 = f4.key; d4 !== null; ) {
              if (d4.key === k3)
                if (d4.tag === 4 && d4.stateNode.containerInfo === f4.containerInfo && d4.stateNode.implementation === f4.implementation) {
                  c3(a3, d4.sibling);
                  d4 = e4(d4, f4.children || []);
                  d4.return = a3;
                  a3 = d4;
                  break a;
                } else {
                  c3(a3, d4);
                  break;
                }
              else
                b3(a3, d4);
              d4 = d4.sibling;
            }
            d4 = Wg(f4, a3.mode, h4);
            d4.return = a3;
            a3 = d4;
          }
          return g4(a3);
      }
    if (typeof f4 === "string" || typeof f4 === "number")
      return f4 = "" + f4, d4 !== null && d4.tag === 6 ? (c3(a3, d4.sibling), d4 = e4(d4, f4), d4.return = a3, a3 = d4) : (c3(a3, d4), d4 = Ug(f4, a3.mode, h4), d4.return = a3, a3 = d4), g4(a3);
    if (Pg(f4))
      return x2(a3, d4, f4, h4);
    if (La(f4))
      return w3(a3, d4, f4, h4);
    l3 && Rg(a3, f4);
    if (typeof f4 === "undefined" && !k3)
      switch (a3.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a3.type) || "Component"));
      }
    return c3(a3, d4);
  };
}
var Yg = Sg(true);
var Zg = Sg(false);
var $g = {};
var ah = Bf($g);
var bh = Bf($g);
var ch = Bf($g);
function dh(a2) {
  if (a2 === $g)
    throw Error(y(174));
  return a2;
}
function eh(a2, b3) {
  I(ch, b3);
  I(bh, a2);
  I(ah, $g);
  a2 = b3.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b3 = (b3 = b3.documentElement) ? b3.namespaceURI : mb(null, "");
      break;
    default:
      a2 = a2 === 8 ? b3.parentNode : b3, b3 = a2.namespaceURI || null, a2 = a2.tagName, b3 = mb(b3, a2);
  }
  H(ah);
  I(ah, b3);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a2) {
  dh(ch.current);
  var b3 = dh(ah.current);
  var c3 = mb(b3, a2.type);
  b3 !== c3 && (I(bh, a2), I(ah, c3));
}
function hh(a2) {
  bh.current === a2 && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a2) {
  for (var b3 = a2; b3 !== null; ) {
    if (b3.tag === 13) {
      var c3 = b3.memoizedState;
      if (c3 !== null && (c3 = c3.dehydrated, c3 === null || c3.data === "$?" || c3.data === "$!"))
        return b3;
    } else if (b3.tag === 19 && b3.memoizedProps.revealOrder !== void 0) {
      if ((b3.flags & 64) !== 0)
        return b3;
    } else if (b3.child !== null) {
      b3.child.return = b3;
      b3 = b3.child;
      continue;
    }
    if (b3 === a2)
      break;
    for (; b3.sibling === null; ) {
      if (b3.return === null || b3.return === a2)
        return null;
      b3 = b3.return;
    }
    b3.sibling.return = b3.return;
    b3 = b3.sibling;
  }
  return null;
}
var jh = null;
var kh = null;
var lh = false;
function mh(a2, b3) {
  var c3 = nh(5, null, null, 0);
  c3.elementType = "DELETED";
  c3.type = "DELETED";
  c3.stateNode = b3;
  c3.return = a2;
  c3.flags = 8;
  a2.lastEffect !== null ? (a2.lastEffect.nextEffect = c3, a2.lastEffect = c3) : a2.firstEffect = a2.lastEffect = c3;
}
function oh(a2, b3) {
  switch (a2.tag) {
    case 5:
      var c3 = a2.type;
      b3 = b3.nodeType !== 1 || c3.toLowerCase() !== b3.nodeName.toLowerCase() ? null : b3;
      return b3 !== null ? (a2.stateNode = b3, true) : false;
    case 6:
      return b3 = a2.pendingProps === "" || b3.nodeType !== 3 ? null : b3, b3 !== null ? (a2.stateNode = b3, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a2) {
  if (lh) {
    var b3 = kh;
    if (b3) {
      var c3 = b3;
      if (!oh(a2, b3)) {
        b3 = rf(c3.nextSibling);
        if (!b3 || !oh(a2, b3)) {
          a2.flags = a2.flags & -1025 | 2;
          lh = false;
          jh = a2;
          return;
        }
        mh(jh, c3);
      }
      jh = a2;
      kh = rf(b3.firstChild);
    } else
      a2.flags = a2.flags & -1025 | 2, lh = false, jh = a2;
  }
}
function qh(a2) {
  for (a2 = a2.return; a2 !== null && a2.tag !== 5 && a2.tag !== 3 && a2.tag !== 13; )
    a2 = a2.return;
  jh = a2;
}
function rh(a2) {
  if (a2 !== jh)
    return false;
  if (!lh)
    return qh(a2), lh = true, false;
  var b3 = a2.type;
  if (a2.tag !== 5 || b3 !== "head" && b3 !== "body" && !nf(b3, a2.memoizedProps))
    for (b3 = kh; b3; )
      mh(a2, b3), b3 = rf(b3.nextSibling);
  qh(a2);
  if (a2.tag === 13) {
    a2 = a2.memoizedState;
    a2 = a2 !== null ? a2.dehydrated : null;
    if (!a2)
      throw Error(y(317));
    a: {
      a2 = a2.nextSibling;
      for (b3 = 0; a2; ) {
        if (a2.nodeType === 8) {
          var c3 = a2.data;
          if (c3 === "/$") {
            if (b3 === 0) {
              kh = rf(a2.nextSibling);
              break a;
            }
            b3--;
          } else
            c3 !== "$" && c3 !== "$!" && c3 !== "$?" || b3++;
        }
        a2 = a2.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a2.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a2 = 0; a2 < th.length; a2++)
    th[a2]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher;
var wh = ra.ReactCurrentBatchConfig;
var xh = 0;
var R = null;
var S = null;
var T = null;
var yh = false;
var zh = false;
function Ah() {
  throw Error(y(321));
}
function Bh(a2, b3) {
  if (b3 === null)
    return false;
  for (var c3 = 0; c3 < b3.length && c3 < a2.length; c3++)
    if (!He(a2[c3], b3[c3]))
      return false;
  return true;
}
function Ch(a2, b3, c3, d3, e4, f3) {
  xh = f3;
  R = b3;
  b3.memoizedState = null;
  b3.updateQueue = null;
  b3.lanes = 0;
  vh.current = a2 === null || a2.memoizedState === null ? Dh : Eh;
  a2 = c3(d3, e4);
  if (zh) {
    f3 = 0;
    do {
      zh = false;
      if (!(25 > f3))
        throw Error(y(301));
      f3 += 1;
      T = S = null;
      b3.updateQueue = null;
      vh.current = Fh;
      a2 = c3(d3, e4);
    } while (zh);
  }
  vh.current = Gh;
  b3 = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b3)
    throw Error(y(300));
  return a2;
}
function Hh() {
  var a2 = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
  T === null ? R.memoizedState = T = a2 : T = T.next = a2;
  return T;
}
function Ih() {
  if (S === null) {
    var a2 = R.alternate;
    a2 = a2 !== null ? a2.memoizedState : null;
  } else
    a2 = S.next;
  var b3 = T === null ? R.memoizedState : T.next;
  if (b3 !== null)
    T = b3, S = a2;
  else {
    if (a2 === null)
      throw Error(y(310));
    S = a2;
    a2 = {memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null};
    T === null ? R.memoizedState = T = a2 : T = T.next = a2;
  }
  return T;
}
function Jh(a2, b3) {
  return typeof b3 === "function" ? b3(a2) : b3;
}
function Kh(a2) {
  var b3 = Ih(), c3 = b3.queue;
  if (c3 === null)
    throw Error(y(311));
  c3.lastRenderedReducer = a2;
  var d3 = S, e4 = d3.baseQueue, f3 = c3.pending;
  if (f3 !== null) {
    if (e4 !== null) {
      var g4 = e4.next;
      e4.next = f3.next;
      f3.next = g4;
    }
    d3.baseQueue = e4 = f3;
    c3.pending = null;
  }
  if (e4 !== null) {
    e4 = e4.next;
    d3 = d3.baseState;
    var h3 = g4 = f3 = null, k2 = e4;
    do {
      var l2 = k2.lane;
      if ((xh & l2) === l2)
        h3 !== null && (h3 = h3.next = {lane: 0, action: k2.action, eagerReducer: k2.eagerReducer, eagerState: k2.eagerState, next: null}), d3 = k2.eagerReducer === a2 ? k2.eagerState : a2(d3, k2.action);
      else {
        var n3 = {
          lane: l2,
          action: k2.action,
          eagerReducer: k2.eagerReducer,
          eagerState: k2.eagerState,
          next: null
        };
        h3 === null ? (g4 = h3 = n3, f3 = d3) : h3 = h3.next = n3;
        R.lanes |= l2;
        Dg |= l2;
      }
      k2 = k2.next;
    } while (k2 !== null && k2 !== e4);
    h3 === null ? f3 = d3 : h3.next = g4;
    He(d3, b3.memoizedState) || (ug = true);
    b3.memoizedState = d3;
    b3.baseState = f3;
    b3.baseQueue = h3;
    c3.lastRenderedState = d3;
  }
  return [b3.memoizedState, c3.dispatch];
}
function Lh(a2) {
  var b3 = Ih(), c3 = b3.queue;
  if (c3 === null)
    throw Error(y(311));
  c3.lastRenderedReducer = a2;
  var d3 = c3.dispatch, e4 = c3.pending, f3 = b3.memoizedState;
  if (e4 !== null) {
    c3.pending = null;
    var g4 = e4 = e4.next;
    do
      f3 = a2(f3, g4.action), g4 = g4.next;
    while (g4 !== e4);
    He(f3, b3.memoizedState) || (ug = true);
    b3.memoizedState = f3;
    b3.baseQueue === null && (b3.baseState = f3);
    c3.lastRenderedState = f3;
  }
  return [f3, d3];
}
function Mh(a2, b3, c3) {
  var d3 = b3._getVersion;
  d3 = d3(b3._source);
  var e4 = b3._workInProgressVersionPrimary;
  if (e4 !== null)
    a2 = e4 === d3;
  else if (a2 = a2.mutableReadLanes, a2 = (xh & a2) === a2)
    b3._workInProgressVersionPrimary = d3, th.push(b3);
  if (a2)
    return c3(b3._source);
  th.push(b3);
  throw Error(y(350));
}
function Nh(a2, b3, c3, d3) {
  var e4 = U;
  if (e4 === null)
    throw Error(y(349));
  var f3 = b3._getVersion, g4 = f3(b3._source), h3 = vh.current, k2 = h3.useState(function() {
    return Mh(e4, b3, c3);
  }), l2 = k2[1], n3 = k2[0];
  k2 = T;
  var A2 = a2.memoizedState, p3 = A2.refs, C = p3.getSnapshot, x2 = A2.source;
  A2 = A2.subscribe;
  var w3 = R;
  a2.memoizedState = {refs: p3, source: b3, subscribe: d3};
  h3.useEffect(function() {
    p3.getSnapshot = c3;
    p3.setSnapshot = l2;
    var a3 = f3(b3._source);
    if (!He(g4, a3)) {
      a3 = c3(b3._source);
      He(n3, a3) || (l2(a3), a3 = Ig(w3), e4.mutableReadLanes |= a3 & e4.pendingLanes);
      a3 = e4.mutableReadLanes;
      e4.entangledLanes |= a3;
      for (var d4 = e4.entanglements, h4 = a3; 0 < h4; ) {
        var k3 = 31 - Vc(h4), v3 = 1 << k3;
        d4[k3] |= a3;
        h4 &= ~v3;
      }
    }
  }, [c3, b3, d3]);
  h3.useEffect(function() {
    return d3(b3._source, function() {
      var a3 = p3.getSnapshot, c4 = p3.setSnapshot;
      try {
        c4(a3(b3._source));
        var d4 = Ig(w3);
        e4.mutableReadLanes |= d4 & e4.pendingLanes;
      } catch (q2) {
        c4(function() {
          throw q2;
        });
      }
    });
  }, [b3, d3]);
  He(C, c3) && He(x2, b3) && He(A2, d3) || (a2 = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n3}, a2.dispatch = l2 = Oh.bind(null, R, a2), k2.queue = a2, k2.baseQueue = null, n3 = Mh(e4, b3, c3), k2.memoizedState = k2.baseState = n3);
  return n3;
}
function Ph(a2, b3, c3) {
  var d3 = Ih();
  return Nh(d3, a2, b3, c3);
}
function Qh(a2) {
  var b3 = Hh();
  typeof a2 === "function" && (a2 = a2());
  b3.memoizedState = b3.baseState = a2;
  a2 = b3.queue = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a2};
  a2 = a2.dispatch = Oh.bind(null, R, a2);
  return [b3.memoizedState, a2];
}
function Rh(a2, b3, c3, d3) {
  a2 = {tag: a2, create: b3, destroy: c3, deps: d3, next: null};
  b3 = R.updateQueue;
  b3 === null ? (b3 = {lastEffect: null}, R.updateQueue = b3, b3.lastEffect = a2.next = a2) : (c3 = b3.lastEffect, c3 === null ? b3.lastEffect = a2.next = a2 : (d3 = c3.next, c3.next = a2, a2.next = d3, b3.lastEffect = a2));
  return a2;
}
function Sh(a2) {
  var b3 = Hh();
  a2 = {current: a2};
  return b3.memoizedState = a2;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a2, b3, c3, d3) {
  var e4 = Hh();
  R.flags |= a2;
  e4.memoizedState = Rh(1 | b3, c3, void 0, d3 === void 0 ? null : d3);
}
function Vh(a2, b3, c3, d3) {
  var e4 = Ih();
  d3 = d3 === void 0 ? null : d3;
  var f3 = void 0;
  if (S !== null) {
    var g4 = S.memoizedState;
    f3 = g4.destroy;
    if (d3 !== null && Bh(d3, g4.deps)) {
      Rh(b3, c3, f3, d3);
      return;
    }
  }
  R.flags |= a2;
  e4.memoizedState = Rh(1 | b3, c3, f3, d3);
}
function Wh(a2, b3) {
  return Uh(516, 4, a2, b3);
}
function Xh(a2, b3) {
  return Vh(516, 4, a2, b3);
}
function Yh(a2, b3) {
  return Vh(4, 2, a2, b3);
}
function Zh(a2, b3) {
  if (typeof b3 === "function")
    return a2 = a2(), b3(a2), function() {
      b3(null);
    };
  if (b3 !== null && b3 !== void 0)
    return a2 = a2(), b3.current = a2, function() {
      b3.current = null;
    };
}
function $h(a2, b3, c3) {
  c3 = c3 !== null && c3 !== void 0 ? c3.concat([a2]) : null;
  return Vh(4, 2, Zh.bind(null, b3, a2), c3);
}
function ai() {
}
function bi(a2, b3) {
  var c3 = Ih();
  b3 = b3 === void 0 ? null : b3;
  var d3 = c3.memoizedState;
  if (d3 !== null && b3 !== null && Bh(b3, d3[1]))
    return d3[0];
  c3.memoizedState = [a2, b3];
  return a2;
}
function ci(a2, b3) {
  var c3 = Ih();
  b3 = b3 === void 0 ? null : b3;
  var d3 = c3.memoizedState;
  if (d3 !== null && b3 !== null && Bh(b3, d3[1]))
    return d3[0];
  a2 = a2();
  c3.memoizedState = [a2, b3];
  return a2;
}
function di(a2, b3) {
  var c3 = eg();
  gg(98 > c3 ? 98 : c3, function() {
    a2(true);
  });
  gg(97 < c3 ? 97 : c3, function() {
    var c4 = wh.transition;
    wh.transition = 1;
    try {
      a2(false), b3();
    } finally {
      wh.transition = c4;
    }
  });
}
function Oh(a2, b3, c3) {
  var d3 = Hg(), e4 = Ig(a2), f3 = {lane: e4, action: c3, eagerReducer: null, eagerState: null, next: null}, g4 = b3.pending;
  g4 === null ? f3.next = f3 : (f3.next = g4.next, g4.next = f3);
  b3.pending = f3;
  g4 = a2.alternate;
  if (a2 === R || g4 !== null && g4 === R)
    zh = yh = true;
  else {
    if (a2.lanes === 0 && (g4 === null || g4.lanes === 0) && (g4 = b3.lastRenderedReducer, g4 !== null))
      try {
        var h3 = b3.lastRenderedState, k2 = g4(h3, c3);
        f3.eagerReducer = g4;
        f3.eagerState = k2;
        if (He(k2, h3))
          return;
      } catch (l2) {
      } finally {
      }
    Jg(a2, e4, d3);
  }
}
var Gh = {readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false};
var Dh = {readContext: vg, useCallback: function(a2, b3) {
  Hh().memoizedState = [a2, b3 === void 0 ? null : b3];
  return a2;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a2, b3, c3) {
  c3 = c3 !== null && c3 !== void 0 ? c3.concat([a2]) : null;
  return Uh(4, 2, Zh.bind(null, b3, a2), c3);
}, useLayoutEffect: function(a2, b3) {
  return Uh(4, 2, a2, b3);
}, useMemo: function(a2, b3) {
  var c3 = Hh();
  b3 = b3 === void 0 ? null : b3;
  a2 = a2();
  c3.memoizedState = [a2, b3];
  return a2;
}, useReducer: function(a2, b3, c3) {
  var d3 = Hh();
  b3 = c3 !== void 0 ? c3(b3) : b3;
  d3.memoizedState = d3.baseState = b3;
  a2 = d3.queue = {pending: null, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b3};
  a2 = a2.dispatch = Oh.bind(null, R, a2);
  return [d3.memoizedState, a2];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a2) {
  var b3 = Qh(a2), c3 = b3[0], d3 = b3[1];
  Wh(function() {
    var b4 = wh.transition;
    wh.transition = 1;
    try {
      d3(a2);
    } finally {
      wh.transition = b4;
    }
  }, [a2]);
  return c3;
}, useTransition: function() {
  var a2 = Qh(false), b3 = a2[0];
  a2 = di.bind(null, a2[1]);
  Sh(a2);
  return [a2, b3];
}, useMutableSource: function(a2, b3, c3) {
  var d3 = Hh();
  d3.memoizedState = {refs: {getSnapshot: b3, setSnapshot: null}, source: a2, subscribe: c3};
  return Nh(d3, a2, b3, c3);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a2 = false, b3 = uf(function() {
      a2 || (a2 = true, c3("r:" + (tf++).toString(36)));
      throw Error(y(355));
    }), c3 = Qh(b3)[1];
    (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
      c3("r:" + (tf++).toString(36));
    }, void 0, null));
    return b3;
  }
  b3 = "r:" + (tf++).toString(36);
  Qh(b3);
  return b3;
}, unstable_isNewReconciler: false};
var Eh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a2) {
  var b3 = Kh(Jh), c3 = b3[0], d3 = b3[1];
  Xh(function() {
    var b4 = wh.transition;
    wh.transition = 1;
    try {
      d3(a2);
    } finally {
      wh.transition = b4;
    }
  }, [a2]);
  return c3;
}, useTransition: function() {
  var a2 = Kh(Jh)[0];
  return [
    Th().current,
    a2
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false};
var Fh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a2) {
  var b3 = Lh(Jh), c3 = b3[0], d3 = b3[1];
  Xh(function() {
    var b4 = wh.transition;
    wh.transition = 1;
    try {
      d3(a2);
    } finally {
      wh.transition = b4;
    }
  }, [a2]);
  return c3;
}, useTransition: function() {
  var a2 = Lh(Jh)[0];
  return [
    Th().current,
    a2
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false};
var ei = ra.ReactCurrentOwner;
var ug = false;
function fi(a2, b3, c3, d3) {
  b3.child = a2 === null ? Zg(b3, null, c3, d3) : Yg(b3, a2.child, c3, d3);
}
function gi(a2, b3, c3, d3, e4) {
  c3 = c3.render;
  var f3 = b3.ref;
  tg(b3, e4);
  d3 = Ch(a2, b3, c3, d3, f3, e4);
  if (a2 !== null && !ug)
    return b3.updateQueue = a2.updateQueue, b3.flags &= -517, a2.lanes &= ~e4, hi(a2, b3, e4);
  b3.flags |= 1;
  fi(a2, b3, d3, e4);
  return b3.child;
}
function ii(a2, b3, c3, d3, e4, f3) {
  if (a2 === null) {
    var g4 = c3.type;
    if (typeof g4 === "function" && !ji(g4) && g4.defaultProps === void 0 && c3.compare === null && c3.defaultProps === void 0)
      return b3.tag = 15, b3.type = g4, ki(a2, b3, g4, d3, e4, f3);
    a2 = Vg(c3.type, null, d3, b3, b3.mode, f3);
    a2.ref = b3.ref;
    a2.return = b3;
    return b3.child = a2;
  }
  g4 = a2.child;
  if ((e4 & f3) === 0 && (e4 = g4.memoizedProps, c3 = c3.compare, c3 = c3 !== null ? c3 : Je, c3(e4, d3) && a2.ref === b3.ref))
    return hi(a2, b3, f3);
  b3.flags |= 1;
  a2 = Tg(g4, d3);
  a2.ref = b3.ref;
  a2.return = b3;
  return b3.child = a2;
}
function ki(a2, b3, c3, d3, e4, f3) {
  if (a2 !== null && Je(a2.memoizedProps, d3) && a2.ref === b3.ref)
    if (ug = false, (f3 & e4) !== 0)
      (a2.flags & 16384) !== 0 && (ug = true);
    else
      return b3.lanes = a2.lanes, hi(a2, b3, f3);
  return li(a2, b3, c3, d3, f3);
}
function mi(a2, b3, c3) {
  var d3 = b3.pendingProps, e4 = d3.children, f3 = a2 !== null ? a2.memoizedState : null;
  if (d3.mode === "hidden" || d3.mode === "unstable-defer-without-hiding")
    if ((b3.mode & 4) === 0)
      b3.memoizedState = {baseLanes: 0}, ni(b3, c3);
    else if ((c3 & 1073741824) !== 0)
      b3.memoizedState = {baseLanes: 0}, ni(b3, f3 !== null ? f3.baseLanes : c3);
    else
      return a2 = f3 !== null ? f3.baseLanes | c3 : c3, b3.lanes = b3.childLanes = 1073741824, b3.memoizedState = {baseLanes: a2}, ni(b3, a2), null;
  else
    f3 !== null ? (d3 = f3.baseLanes | c3, b3.memoizedState = null) : d3 = c3, ni(b3, d3);
  fi(a2, b3, e4, c3);
  return b3.child;
}
function oi(a2, b3) {
  var c3 = b3.ref;
  if (a2 === null && c3 !== null || a2 !== null && a2.ref !== c3)
    b3.flags |= 128;
}
function li(a2, b3, c3, d3, e4) {
  var f3 = Ff(c3) ? Df : M.current;
  f3 = Ef(b3, f3);
  tg(b3, e4);
  c3 = Ch(a2, b3, c3, d3, f3, e4);
  if (a2 !== null && !ug)
    return b3.updateQueue = a2.updateQueue, b3.flags &= -517, a2.lanes &= ~e4, hi(a2, b3, e4);
  b3.flags |= 1;
  fi(a2, b3, c3, e4);
  return b3.child;
}
function pi(a2, b3, c3, d3, e4) {
  if (Ff(c3)) {
    var f3 = true;
    Jf(b3);
  } else
    f3 = false;
  tg(b3, e4);
  if (b3.stateNode === null)
    a2 !== null && (a2.alternate = null, b3.alternate = null, b3.flags |= 2), Mg(b3, c3, d3), Og(b3, c3, d3, e4), d3 = true;
  else if (a2 === null) {
    var g4 = b3.stateNode, h3 = b3.memoizedProps;
    g4.props = h3;
    var k2 = g4.context, l2 = c3.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = vg(l2) : (l2 = Ff(c3) ? Df : M.current, l2 = Ef(b3, l2));
    var n3 = c3.getDerivedStateFromProps, A2 = typeof n3 === "function" || typeof g4.getSnapshotBeforeUpdate === "function";
    A2 || typeof g4.UNSAFE_componentWillReceiveProps !== "function" && typeof g4.componentWillReceiveProps !== "function" || (h3 !== d3 || k2 !== l2) && Ng(b3, g4, d3, l2);
    wg = false;
    var p3 = b3.memoizedState;
    g4.state = p3;
    Cg(b3, d3, g4, e4);
    k2 = b3.memoizedState;
    h3 !== d3 || p3 !== k2 || N.current || wg ? (typeof n3 === "function" && (Gg(b3, c3, n3, d3), k2 = b3.memoizedState), (h3 = wg || Lg(b3, c3, h3, d3, p3, k2, l2)) ? (A2 || typeof g4.UNSAFE_componentWillMount !== "function" && typeof g4.componentWillMount !== "function" || (typeof g4.componentWillMount === "function" && g4.componentWillMount(), typeof g4.UNSAFE_componentWillMount === "function" && g4.UNSAFE_componentWillMount()), typeof g4.componentDidMount === "function" && (b3.flags |= 4)) : (typeof g4.componentDidMount === "function" && (b3.flags |= 4), b3.memoizedProps = d3, b3.memoizedState = k2), g4.props = d3, g4.state = k2, g4.context = l2, d3 = h3) : (typeof g4.componentDidMount === "function" && (b3.flags |= 4), d3 = false);
  } else {
    g4 = b3.stateNode;
    yg(a2, b3);
    h3 = b3.memoizedProps;
    l2 = b3.type === b3.elementType ? h3 : lg(b3.type, h3);
    g4.props = l2;
    A2 = b3.pendingProps;
    p3 = g4.context;
    k2 = c3.contextType;
    typeof k2 === "object" && k2 !== null ? k2 = vg(k2) : (k2 = Ff(c3) ? Df : M.current, k2 = Ef(b3, k2));
    var C = c3.getDerivedStateFromProps;
    (n3 = typeof C === "function" || typeof g4.getSnapshotBeforeUpdate === "function") || typeof g4.UNSAFE_componentWillReceiveProps !== "function" && typeof g4.componentWillReceiveProps !== "function" || (h3 !== A2 || p3 !== k2) && Ng(b3, g4, d3, k2);
    wg = false;
    p3 = b3.memoizedState;
    g4.state = p3;
    Cg(b3, d3, g4, e4);
    var x2 = b3.memoizedState;
    h3 !== A2 || p3 !== x2 || N.current || wg ? (typeof C === "function" && (Gg(b3, c3, C, d3), x2 = b3.memoizedState), (l2 = wg || Lg(b3, c3, l2, d3, p3, x2, k2)) ? (n3 || typeof g4.UNSAFE_componentWillUpdate !== "function" && typeof g4.componentWillUpdate !== "function" || (typeof g4.componentWillUpdate === "function" && g4.componentWillUpdate(d3, x2, k2), typeof g4.UNSAFE_componentWillUpdate === "function" && g4.UNSAFE_componentWillUpdate(d3, x2, k2)), typeof g4.componentDidUpdate === "function" && (b3.flags |= 4), typeof g4.getSnapshotBeforeUpdate === "function" && (b3.flags |= 256)) : (typeof g4.componentDidUpdate !== "function" || h3 === a2.memoizedProps && p3 === a2.memoizedState || (b3.flags |= 4), typeof g4.getSnapshotBeforeUpdate !== "function" || h3 === a2.memoizedProps && p3 === a2.memoizedState || (b3.flags |= 256), b3.memoizedProps = d3, b3.memoizedState = x2), g4.props = d3, g4.state = x2, g4.context = k2, d3 = l2) : (typeof g4.componentDidUpdate !== "function" || h3 === a2.memoizedProps && p3 === a2.memoizedState || (b3.flags |= 4), typeof g4.getSnapshotBeforeUpdate !== "function" || h3 === a2.memoizedProps && p3 === a2.memoizedState || (b3.flags |= 256), d3 = false);
  }
  return qi(a2, b3, c3, d3, f3, e4);
}
function qi(a2, b3, c3, d3, e4, f3) {
  oi(a2, b3);
  var g4 = (b3.flags & 64) !== 0;
  if (!d3 && !g4)
    return e4 && Kf(b3, c3, false), hi(a2, b3, f3);
  d3 = b3.stateNode;
  ei.current = b3;
  var h3 = g4 && typeof c3.getDerivedStateFromError !== "function" ? null : d3.render();
  b3.flags |= 1;
  a2 !== null && g4 ? (b3.child = Yg(b3, a2.child, null, f3), b3.child = Yg(b3, null, h3, f3)) : fi(a2, b3, h3, f3);
  b3.memoizedState = d3.state;
  e4 && Kf(b3, c3, true);
  return b3.child;
}
function ri(a2) {
  var b3 = a2.stateNode;
  b3.pendingContext ? Hf(a2, b3.pendingContext, b3.pendingContext !== b3.context) : b3.context && Hf(a2, b3.context, false);
  eh(a2, b3.containerInfo);
}
var si = {dehydrated: null, retryLane: 0};
function ti(a2, b3, c3) {
  var d3 = b3.pendingProps, e4 = P.current, f3 = false, g4;
  (g4 = (b3.flags & 64) !== 0) || (g4 = a2 !== null && a2.memoizedState === null ? false : (e4 & 2) !== 0);
  g4 ? (f3 = true, b3.flags &= -65) : a2 !== null && a2.memoizedState === null || d3.fallback === void 0 || d3.unstable_avoidThisFallback === true || (e4 |= 1);
  I(P, e4 & 1);
  if (a2 === null) {
    d3.fallback !== void 0 && ph(b3);
    a2 = d3.children;
    e4 = d3.fallback;
    if (f3)
      return a2 = ui(b3, a2, e4, c3), b3.child.memoizedState = {baseLanes: c3}, b3.memoizedState = si, a2;
    if (typeof d3.unstable_expectedLoadTime === "number")
      return a2 = ui(b3, a2, e4, c3), b3.child.memoizedState = {baseLanes: c3}, b3.memoizedState = si, b3.lanes = 33554432, a2;
    c3 = vi({mode: "visible", children: a2}, b3.mode, c3, null);
    c3.return = b3;
    return b3.child = c3;
  }
  if (a2.memoizedState !== null) {
    if (f3)
      return d3 = wi(a2, b3, d3.children, d3.fallback, c3), f3 = b3.child, e4 = a2.child.memoizedState, f3.memoizedState = e4 === null ? {baseLanes: c3} : {baseLanes: e4.baseLanes | c3}, f3.childLanes = a2.childLanes & ~c3, b3.memoizedState = si, d3;
    c3 = xi(a2, b3, d3.children, c3);
    b3.memoizedState = null;
    return c3;
  }
  if (f3)
    return d3 = wi(a2, b3, d3.children, d3.fallback, c3), f3 = b3.child, e4 = a2.child.memoizedState, f3.memoizedState = e4 === null ? {baseLanes: c3} : {baseLanes: e4.baseLanes | c3}, f3.childLanes = a2.childLanes & ~c3, b3.memoizedState = si, d3;
  c3 = xi(a2, b3, d3.children, c3);
  b3.memoizedState = null;
  return c3;
}
function ui(a2, b3, c3, d3) {
  var e4 = a2.mode, f3 = a2.child;
  b3 = {mode: "hidden", children: b3};
  (e4 & 2) === 0 && f3 !== null ? (f3.childLanes = 0, f3.pendingProps = b3) : f3 = vi(b3, e4, 0, null);
  c3 = Xg(c3, e4, d3, null);
  f3.return = a2;
  c3.return = a2;
  f3.sibling = c3;
  a2.child = f3;
  return c3;
}
function xi(a2, b3, c3, d3) {
  var e4 = a2.child;
  a2 = e4.sibling;
  c3 = Tg(e4, {mode: "visible", children: c3});
  (b3.mode & 2) === 0 && (c3.lanes = d3);
  c3.return = b3;
  c3.sibling = null;
  a2 !== null && (a2.nextEffect = null, a2.flags = 8, b3.firstEffect = b3.lastEffect = a2);
  return b3.child = c3;
}
function wi(a2, b3, c3, d3, e4) {
  var f3 = b3.mode, g4 = a2.child;
  a2 = g4.sibling;
  var h3 = {mode: "hidden", children: c3};
  (f3 & 2) === 0 && b3.child !== g4 ? (c3 = b3.child, c3.childLanes = 0, c3.pendingProps = h3, g4 = c3.lastEffect, g4 !== null ? (b3.firstEffect = c3.firstEffect, b3.lastEffect = g4, g4.nextEffect = null) : b3.firstEffect = b3.lastEffect = null) : c3 = Tg(g4, h3);
  a2 !== null ? d3 = Tg(a2, d3) : (d3 = Xg(d3, f3, e4, null), d3.flags |= 2);
  d3.return = b3;
  c3.return = b3;
  c3.sibling = d3;
  b3.child = c3;
  return d3;
}
function yi(a2, b3) {
  a2.lanes |= b3;
  var c3 = a2.alternate;
  c3 !== null && (c3.lanes |= b3);
  sg(a2.return, b3);
}
function zi(a2, b3, c3, d3, e4, f3) {
  var g4 = a2.memoizedState;
  g4 === null ? a2.memoizedState = {isBackwards: b3, rendering: null, renderingStartTime: 0, last: d3, tail: c3, tailMode: e4, lastEffect: f3} : (g4.isBackwards = b3, g4.rendering = null, g4.renderingStartTime = 0, g4.last = d3, g4.tail = c3, g4.tailMode = e4, g4.lastEffect = f3);
}
function Ai(a2, b3, c3) {
  var d3 = b3.pendingProps, e4 = d3.revealOrder, f3 = d3.tail;
  fi(a2, b3, d3.children, c3);
  d3 = P.current;
  if ((d3 & 2) !== 0)
    d3 = d3 & 1 | 2, b3.flags |= 64;
  else {
    if (a2 !== null && (a2.flags & 64) !== 0)
      a:
        for (a2 = b3.child; a2 !== null; ) {
          if (a2.tag === 13)
            a2.memoizedState !== null && yi(a2, c3);
          else if (a2.tag === 19)
            yi(a2, c3);
          else if (a2.child !== null) {
            a2.child.return = a2;
            a2 = a2.child;
            continue;
          }
          if (a2 === b3)
            break a;
          for (; a2.sibling === null; ) {
            if (a2.return === null || a2.return === b3)
              break a;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          a2 = a2.sibling;
        }
    d3 &= 1;
  }
  I(P, d3);
  if ((b3.mode & 2) === 0)
    b3.memoizedState = null;
  else
    switch (e4) {
      case "forwards":
        c3 = b3.child;
        for (e4 = null; c3 !== null; )
          a2 = c3.alternate, a2 !== null && ih(a2) === null && (e4 = c3), c3 = c3.sibling;
        c3 = e4;
        c3 === null ? (e4 = b3.child, b3.child = null) : (e4 = c3.sibling, c3.sibling = null);
        zi(b3, false, e4, c3, f3, b3.lastEffect);
        break;
      case "backwards":
        c3 = null;
        e4 = b3.child;
        for (b3.child = null; e4 !== null; ) {
          a2 = e4.alternate;
          if (a2 !== null && ih(a2) === null) {
            b3.child = e4;
            break;
          }
          a2 = e4.sibling;
          e4.sibling = c3;
          c3 = e4;
          e4 = a2;
        }
        zi(b3, true, c3, null, f3, b3.lastEffect);
        break;
      case "together":
        zi(b3, false, null, null, void 0, b3.lastEffect);
        break;
      default:
        b3.memoizedState = null;
    }
  return b3.child;
}
function hi(a2, b3, c3) {
  a2 !== null && (b3.dependencies = a2.dependencies);
  Dg |= b3.lanes;
  if ((c3 & b3.childLanes) !== 0) {
    if (a2 !== null && b3.child !== a2.child)
      throw Error(y(153));
    if (b3.child !== null) {
      a2 = b3.child;
      c3 = Tg(a2, a2.pendingProps);
      b3.child = c3;
      for (c3.return = b3; a2.sibling !== null; )
        a2 = a2.sibling, c3 = c3.sibling = Tg(a2, a2.pendingProps), c3.return = b3;
      c3.sibling = null;
    }
    return b3.child;
  }
  return null;
}
var Bi;
var Ci;
var Di;
var Ei;
Bi = function(a2, b3) {
  for (var c3 = b3.child; c3 !== null; ) {
    if (c3.tag === 5 || c3.tag === 6)
      a2.appendChild(c3.stateNode);
    else if (c3.tag !== 4 && c3.child !== null) {
      c3.child.return = c3;
      c3 = c3.child;
      continue;
    }
    if (c3 === b3)
      break;
    for (; c3.sibling === null; ) {
      if (c3.return === null || c3.return === b3)
        return;
      c3 = c3.return;
    }
    c3.sibling.return = c3.return;
    c3 = c3.sibling;
  }
};
Ci = function() {
};
Di = function(a2, b3, c3, d3) {
  var e4 = a2.memoizedProps;
  if (e4 !== d3) {
    a2 = b3.stateNode;
    dh(ah.current);
    var f3 = null;
    switch (c3) {
      case "input":
        e4 = Ya(a2, e4);
        d3 = Ya(a2, d3);
        f3 = [];
        break;
      case "option":
        e4 = eb(a2, e4);
        d3 = eb(a2, d3);
        f3 = [];
        break;
      case "select":
        e4 = objectAssign({}, e4, {value: void 0});
        d3 = objectAssign({}, d3, {value: void 0});
        f3 = [];
        break;
      case "textarea":
        e4 = gb(a2, e4);
        d3 = gb(a2, d3);
        f3 = [];
        break;
      default:
        typeof e4.onClick !== "function" && typeof d3.onClick === "function" && (a2.onclick = jf);
    }
    vb(c3, d3);
    var g4;
    c3 = null;
    for (l2 in e4)
      if (!d3.hasOwnProperty(l2) && e4.hasOwnProperty(l2) && e4[l2] != null)
        if (l2 === "style") {
          var h3 = e4[l2];
          for (g4 in h3)
            h3.hasOwnProperty(g4) && (c3 || (c3 = {}), c3[g4] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ca.hasOwnProperty(l2) ? f3 || (f3 = []) : (f3 = f3 || []).push(l2, null));
    for (l2 in d3) {
      var k2 = d3[l2];
      h3 = e4 != null ? e4[l2] : void 0;
      if (d3.hasOwnProperty(l2) && k2 !== h3 && (k2 != null || h3 != null))
        if (l2 === "style")
          if (h3) {
            for (g4 in h3)
              !h3.hasOwnProperty(g4) || k2 && k2.hasOwnProperty(g4) || (c3 || (c3 = {}), c3[g4] = "");
            for (g4 in k2)
              k2.hasOwnProperty(g4) && h3[g4] !== k2[g4] && (c3 || (c3 = {}), c3[g4] = k2[g4]);
          } else
            c3 || (f3 || (f3 = []), f3.push(l2, c3)), c3 = k2;
        else
          l2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, h3 = h3 ? h3.__html : void 0, k2 != null && h3 !== k2 && (f3 = f3 || []).push(l2, k2)) : l2 === "children" ? typeof k2 !== "string" && typeof k2 !== "number" || (f3 = f3 || []).push(l2, "" + k2) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ca.hasOwnProperty(l2) ? (k2 != null && l2 === "onScroll" && G("scroll", a2), f3 || h3 === k2 || (f3 = [])) : typeof k2 === "object" && k2 !== null && k2.$$typeof === Ga ? k2.toString() : (f3 = f3 || []).push(l2, k2));
    }
    c3 && (f3 = f3 || []).push("style", c3);
    var l2 = f3;
    if (b3.updateQueue = l2)
      b3.flags |= 4;
  }
};
Ei = function(a2, b3, c3, d3) {
  c3 !== d3 && (b3.flags |= 4);
};
function Fi(a2, b3) {
  if (!lh)
    switch (a2.tailMode) {
      case "hidden":
        b3 = a2.tail;
        for (var c3 = null; b3 !== null; )
          b3.alternate !== null && (c3 = b3), b3 = b3.sibling;
        c3 === null ? a2.tail = null : c3.sibling = null;
        break;
      case "collapsed":
        c3 = a2.tail;
        for (var d3 = null; c3 !== null; )
          c3.alternate !== null && (d3 = c3), c3 = c3.sibling;
        d3 === null ? b3 || a2.tail === null ? a2.tail = null : a2.tail.sibling = null : d3.sibling = null;
    }
}
function Gi(a2, b3, c3) {
  var d3 = b3.pendingProps;
  switch (b3.tag) {
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
      return null;
    case 1:
      return Ff(b3.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d3 = b3.stateNode;
      d3.pendingContext && (d3.context = d3.pendingContext, d3.pendingContext = null);
      if (a2 === null || a2.child === null)
        rh(b3) ? b3.flags |= 4 : d3.hydrate || (b3.flags |= 256);
      Ci(b3);
      return null;
    case 5:
      hh(b3);
      var e4 = dh(ch.current);
      c3 = b3.type;
      if (a2 !== null && b3.stateNode != null)
        Di(a2, b3, c3, d3, e4), a2.ref !== b3.ref && (b3.flags |= 128);
      else {
        if (!d3) {
          if (b3.stateNode === null)
            throw Error(y(166));
          return null;
        }
        a2 = dh(ah.current);
        if (rh(b3)) {
          d3 = b3.stateNode;
          c3 = b3.type;
          var f3 = b3.memoizedProps;
          d3[wf] = b3;
          d3[xf] = f3;
          switch (c3) {
            case "dialog":
              G("cancel", d3);
              G("close", d3);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d3);
              break;
            case "video":
            case "audio":
              for (a2 = 0; a2 < Xe.length; a2++)
                G(Xe[a2], d3);
              break;
            case "source":
              G("error", d3);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d3);
              G("load", d3);
              break;
            case "details":
              G("toggle", d3);
              break;
            case "input":
              Za(d3, f3);
              G("invalid", d3);
              break;
            case "select":
              d3._wrapperState = {wasMultiple: !!f3.multiple};
              G("invalid", d3);
              break;
            case "textarea":
              hb(d3, f3), G("invalid", d3);
          }
          vb(c3, f3);
          a2 = null;
          for (var g4 in f3)
            f3.hasOwnProperty(g4) && (e4 = f3[g4], g4 === "children" ? typeof e4 === "string" ? d3.textContent !== e4 && (a2 = ["children", e4]) : typeof e4 === "number" && d3.textContent !== "" + e4 && (a2 = ["children", "" + e4]) : ca.hasOwnProperty(g4) && e4 != null && g4 === "onScroll" && G("scroll", d3));
          switch (c3) {
            case "input":
              Va(d3);
              cb(d3, f3, true);
              break;
            case "textarea":
              Va(d3);
              jb(d3);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f3.onClick === "function" && (d3.onclick = jf);
          }
          d3 = a2;
          b3.updateQueue = d3;
          d3 !== null && (b3.flags |= 4);
        } else {
          g4 = e4.nodeType === 9 ? e4 : e4.ownerDocument;
          a2 === kb.html && (a2 = lb(c3));
          a2 === kb.html ? c3 === "script" ? (a2 = g4.createElement("div"), a2.innerHTML = "<script></script>", a2 = a2.removeChild(a2.firstChild)) : typeof d3.is === "string" ? a2 = g4.createElement(c3, {is: d3.is}) : (a2 = g4.createElement(c3), c3 === "select" && (g4 = a2, d3.multiple ? g4.multiple = true : d3.size && (g4.size = d3.size))) : a2 = g4.createElementNS(a2, c3);
          a2[wf] = b3;
          a2[xf] = d3;
          Bi(a2, b3, false, false);
          b3.stateNode = a2;
          g4 = wb(c3, d3);
          switch (c3) {
            case "dialog":
              G("cancel", a2);
              G("close", a2);
              e4 = d3;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a2);
              e4 = d3;
              break;
            case "video":
            case "audio":
              for (e4 = 0; e4 < Xe.length; e4++)
                G(Xe[e4], a2);
              e4 = d3;
              break;
            case "source":
              G("error", a2);
              e4 = d3;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a2);
              G("load", a2);
              e4 = d3;
              break;
            case "details":
              G("toggle", a2);
              e4 = d3;
              break;
            case "input":
              Za(a2, d3);
              e4 = Ya(a2, d3);
              G("invalid", a2);
              break;
            case "option":
              e4 = eb(a2, d3);
              break;
            case "select":
              a2._wrapperState = {wasMultiple: !!d3.multiple};
              e4 = objectAssign({}, d3, {value: void 0});
              G("invalid", a2);
              break;
            case "textarea":
              hb(a2, d3);
              e4 = gb(a2, d3);
              G("invalid", a2);
              break;
            default:
              e4 = d3;
          }
          vb(c3, e4);
          var h3 = e4;
          for (f3 in h3)
            if (h3.hasOwnProperty(f3)) {
              var k2 = h3[f3];
              f3 === "style" ? tb(a2, k2) : f3 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, k2 != null && ob(a2, k2)) : f3 === "children" ? typeof k2 === "string" ? (c3 !== "textarea" || k2 !== "") && pb(a2, k2) : typeof k2 === "number" && pb(a2, "" + k2) : f3 !== "suppressContentEditableWarning" && f3 !== "suppressHydrationWarning" && f3 !== "autoFocus" && (ca.hasOwnProperty(f3) ? k2 != null && f3 === "onScroll" && G("scroll", a2) : k2 != null && qa(a2, f3, k2, g4));
            }
          switch (c3) {
            case "input":
              Va(a2);
              cb(a2, d3, false);
              break;
            case "textarea":
              Va(a2);
              jb(a2);
              break;
            case "option":
              d3.value != null && a2.setAttribute("value", "" + Sa(d3.value));
              break;
            case "select":
              a2.multiple = !!d3.multiple;
              f3 = d3.value;
              f3 != null ? fb(a2, !!d3.multiple, f3, false) : d3.defaultValue != null && fb(a2, !!d3.multiple, d3.defaultValue, true);
              break;
            default:
              typeof e4.onClick === "function" && (a2.onclick = jf);
          }
          mf(c3, d3) && (b3.flags |= 4);
        }
        b3.ref !== null && (b3.flags |= 128);
      }
      return null;
    case 6:
      if (a2 && b3.stateNode != null)
        Ei(a2, b3, a2.memoizedProps, d3);
      else {
        if (typeof d3 !== "string" && b3.stateNode === null)
          throw Error(y(166));
        c3 = dh(ch.current);
        dh(ah.current);
        rh(b3) ? (d3 = b3.stateNode, c3 = b3.memoizedProps, d3[wf] = b3, d3.nodeValue !== c3 && (b3.flags |= 4)) : (d3 = (c3.nodeType === 9 ? c3 : c3.ownerDocument).createTextNode(d3), d3[wf] = b3, b3.stateNode = d3);
      }
      return null;
    case 13:
      H(P);
      d3 = b3.memoizedState;
      if ((b3.flags & 64) !== 0)
        return b3.lanes = c3, b3;
      d3 = d3 !== null;
      c3 = false;
      a2 === null ? b3.memoizedProps.fallback !== void 0 && rh(b3) : c3 = a2.memoizedState !== null;
      if (d3 && !c3 && (b3.mode & 2) !== 0)
        if (a2 === null && b3.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d3 || c3)
        b3.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b3), a2 === null && cf(b3.stateNode.containerInfo), null;
    case 10:
      return rg(b3), null;
    case 17:
      return Ff(b3.type) && Gf(), null;
    case 19:
      H(P);
      d3 = b3.memoizedState;
      if (d3 === null)
        return null;
      f3 = (b3.flags & 64) !== 0;
      g4 = d3.rendering;
      if (g4 === null)
        if (f3)
          Fi(d3, false);
        else {
          if (V !== 0 || a2 !== null && (a2.flags & 64) !== 0)
            for (a2 = b3.child; a2 !== null; ) {
              g4 = ih(a2);
              if (g4 !== null) {
                b3.flags |= 64;
                Fi(d3, false);
                f3 = g4.updateQueue;
                f3 !== null && (b3.updateQueue = f3, b3.flags |= 4);
                d3.lastEffect === null && (b3.firstEffect = null);
                b3.lastEffect = d3.lastEffect;
                d3 = c3;
                for (c3 = b3.child; c3 !== null; )
                  f3 = c3, a2 = d3, f3.flags &= 2, f3.nextEffect = null, f3.firstEffect = null, f3.lastEffect = null, g4 = f3.alternate, g4 === null ? (f3.childLanes = 0, f3.lanes = a2, f3.child = null, f3.memoizedProps = null, f3.memoizedState = null, f3.updateQueue = null, f3.dependencies = null, f3.stateNode = null) : (f3.childLanes = g4.childLanes, f3.lanes = g4.lanes, f3.child = g4.child, f3.memoizedProps = g4.memoizedProps, f3.memoizedState = g4.memoizedState, f3.updateQueue = g4.updateQueue, f3.type = g4.type, a2 = g4.dependencies, f3.dependencies = a2 === null ? null : {lanes: a2.lanes, firstContext: a2.firstContext}), c3 = c3.sibling;
                I(P, P.current & 1 | 2);
                return b3.child;
              }
              a2 = a2.sibling;
            }
          d3.tail !== null && O() > Ji && (b3.flags |= 64, f3 = true, Fi(d3, false), b3.lanes = 33554432);
        }
      else {
        if (!f3)
          if (a2 = ih(g4), a2 !== null) {
            if (b3.flags |= 64, f3 = true, c3 = a2.updateQueue, c3 !== null && (b3.updateQueue = c3, b3.flags |= 4), Fi(d3, true), d3.tail === null && d3.tailMode === "hidden" && !g4.alternate && !lh)
              return b3 = b3.lastEffect = d3.lastEffect, b3 !== null && (b3.nextEffect = null), null;
          } else
            2 * O() - d3.renderingStartTime > Ji && c3 !== 1073741824 && (b3.flags |= 64, f3 = true, Fi(d3, false), b3.lanes = 33554432);
        d3.isBackwards ? (g4.sibling = b3.child, b3.child = g4) : (c3 = d3.last, c3 !== null ? c3.sibling = g4 : b3.child = g4, d3.last = g4);
      }
      return d3.tail !== null ? (c3 = d3.tail, d3.rendering = c3, d3.tail = c3.sibling, d3.lastEffect = b3.lastEffect, d3.renderingStartTime = O(), c3.sibling = null, b3 = P.current, I(P, f3 ? b3 & 1 | 2 : b3 & 1), c3) : null;
    case 23:
    case 24:
      return Ki(), a2 !== null && a2.memoizedState !== null !== (b3.memoizedState !== null) && d3.mode !== "unstable-defer-without-hiding" && (b3.flags |= 4), null;
  }
  throw Error(y(156, b3.tag));
}
function Li(a2) {
  switch (a2.tag) {
    case 1:
      Ff(a2.type) && Gf();
      var b3 = a2.flags;
      return b3 & 4096 ? (a2.flags = b3 & -4097 | 64, a2) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b3 = a2.flags;
      if ((b3 & 64) !== 0)
        throw Error(y(285));
      a2.flags = b3 & -4097 | 64;
      return a2;
    case 5:
      return hh(a2), null;
    case 13:
      return H(P), b3 = a2.flags, b3 & 4096 ? (a2.flags = b3 & -4097 | 64, a2) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a2), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a2, b3) {
  try {
    var c3 = "", d3 = b3;
    do
      c3 += Qa(d3), d3 = d3.return;
    while (d3);
    var e4 = c3;
  } catch (f3) {
    e4 = "\nError generating stack: " + f3.message + "\n" + f3.stack;
  }
  return {value: a2, source: b3, stack: e4};
}
function Ni(a2, b3) {
  try {
    console.error(b3.value);
  } catch (c3) {
    setTimeout(function() {
      throw c3;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a2, b3, c3) {
  c3 = zg(-1, c3);
  c3.tag = 3;
  c3.payload = {element: null};
  var d3 = b3.value;
  c3.callback = function() {
    Qi || (Qi = true, Ri = d3);
    Ni(a2, b3);
  };
  return c3;
}
function Si(a2, b3, c3) {
  c3 = zg(-1, c3);
  c3.tag = 3;
  var d3 = a2.type.getDerivedStateFromError;
  if (typeof d3 === "function") {
    var e4 = b3.value;
    c3.payload = function() {
      Ni(a2, b3);
      return d3(e4);
    };
  }
  var f3 = a2.stateNode;
  f3 !== null && typeof f3.componentDidCatch === "function" && (c3.callback = function() {
    typeof d3 !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a2, b3));
    var c4 = b3.stack;
    this.componentDidCatch(b3.value, {componentStack: c4 !== null ? c4 : ""});
  });
  return c3;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a2) {
  var b3 = a2.ref;
  if (b3 !== null)
    if (typeof b3 === "function")
      try {
        b3(null);
      } catch (c3) {
        Wi(a2, c3);
      }
    else
      b3.current = null;
}
function Xi(a2, b3) {
  switch (b3.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b3.flags & 256 && a2 !== null) {
        var c3 = a2.memoizedProps, d3 = a2.memoizedState;
        a2 = b3.stateNode;
        b3 = a2.getSnapshotBeforeUpdate(b3.elementType === b3.type ? c3 : lg(b3.type, c3), d3);
        a2.__reactInternalSnapshotBeforeUpdate = b3;
      }
      return;
    case 3:
      b3.flags & 256 && qf(b3.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yi(a2, b3, c3) {
  switch (c3.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b3 = c3.updateQueue;
      b3 = b3 !== null ? b3.lastEffect : null;
      if (b3 !== null) {
        a2 = b3 = b3.next;
        do {
          if ((a2.tag & 3) === 3) {
            var d3 = a2.create;
            a2.destroy = d3();
          }
          a2 = a2.next;
        } while (a2 !== b3);
      }
      b3 = c3.updateQueue;
      b3 = b3 !== null ? b3.lastEffect : null;
      if (b3 !== null) {
        a2 = b3 = b3.next;
        do {
          var e4 = a2;
          d3 = e4.next;
          e4 = e4.tag;
          (e4 & 4) !== 0 && (e4 & 1) !== 0 && (Zi(c3, a2), $i(c3, a2));
          a2 = d3;
        } while (a2 !== b3);
      }
      return;
    case 1:
      a2 = c3.stateNode;
      c3.flags & 4 && (b3 === null ? a2.componentDidMount() : (d3 = c3.elementType === c3.type ? b3.memoizedProps : lg(c3.type, b3.memoizedProps), a2.componentDidUpdate(d3, b3.memoizedState, a2.__reactInternalSnapshotBeforeUpdate)));
      b3 = c3.updateQueue;
      b3 !== null && Eg(c3, b3, a2);
      return;
    case 3:
      b3 = c3.updateQueue;
      if (b3 !== null) {
        a2 = null;
        if (c3.child !== null)
          switch (c3.child.tag) {
            case 5:
              a2 = c3.child.stateNode;
              break;
            case 1:
              a2 = c3.child.stateNode;
          }
        Eg(c3, b3, a2);
      }
      return;
    case 5:
      a2 = c3.stateNode;
      b3 === null && c3.flags & 4 && mf(c3.type, c3.memoizedProps) && a2.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c3.memoizedState === null && (c3 = c3.alternate, c3 !== null && (c3 = c3.memoizedState, c3 !== null && (c3 = c3.dehydrated, c3 !== null && Cc(c3))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function aj(a2, b3) {
  for (var c3 = a2; ; ) {
    if (c3.tag === 5) {
      var d3 = c3.stateNode;
      if (b3)
        d3 = d3.style, typeof d3.setProperty === "function" ? d3.setProperty("display", "none", "important") : d3.display = "none";
      else {
        d3 = c3.stateNode;
        var e4 = c3.memoizedProps.style;
        e4 = e4 !== void 0 && e4 !== null && e4.hasOwnProperty("display") ? e4.display : null;
        d3.style.display = sb("display", e4);
      }
    } else if (c3.tag === 6)
      c3.stateNode.nodeValue = b3 ? "" : c3.memoizedProps;
    else if ((c3.tag !== 23 && c3.tag !== 24 || c3.memoizedState === null || c3 === a2) && c3.child !== null) {
      c3.child.return = c3;
      c3 = c3.child;
      continue;
    }
    if (c3 === a2)
      break;
    for (; c3.sibling === null; ) {
      if (c3.return === null || c3.return === a2)
        return;
      c3 = c3.return;
    }
    c3.sibling.return = c3.return;
    c3 = c3.sibling;
  }
}
function bj(a2, b3) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b3);
    } catch (f3) {
    }
  switch (b3.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a2 = b3.updateQueue;
      if (a2 !== null && (a2 = a2.lastEffect, a2 !== null)) {
        var c3 = a2 = a2.next;
        do {
          var d3 = c3, e4 = d3.destroy;
          d3 = d3.tag;
          if (e4 !== void 0)
            if ((d3 & 4) !== 0)
              Zi(b3, c3);
            else {
              d3 = b3;
              try {
                e4();
              } catch (f3) {
                Wi(d3, f3);
              }
            }
          c3 = c3.next;
        } while (c3 !== a2);
      }
      break;
    case 1:
      Vi(b3);
      a2 = b3.stateNode;
      if (typeof a2.componentWillUnmount === "function")
        try {
          a2.props = b3.memoizedProps, a2.state = b3.memoizedState, a2.componentWillUnmount();
        } catch (f3) {
          Wi(b3, f3);
        }
      break;
    case 5:
      Vi(b3);
      break;
    case 4:
      cj(a2, b3);
  }
}
function dj(a2) {
  a2.alternate = null;
  a2.child = null;
  a2.dependencies = null;
  a2.firstEffect = null;
  a2.lastEffect = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.return = null;
  a2.updateQueue = null;
}
function ej(a2) {
  return a2.tag === 5 || a2.tag === 3 || a2.tag === 4;
}
function fj(a2) {
  a: {
    for (var b3 = a2.return; b3 !== null; ) {
      if (ej(b3))
        break a;
      b3 = b3.return;
    }
    throw Error(y(160));
  }
  var c3 = b3;
  b3 = c3.stateNode;
  switch (c3.tag) {
    case 5:
      var d3 = false;
      break;
    case 3:
      b3 = b3.containerInfo;
      d3 = true;
      break;
    case 4:
      b3 = b3.containerInfo;
      d3 = true;
      break;
    default:
      throw Error(y(161));
  }
  c3.flags & 16 && (pb(b3, ""), c3.flags &= -17);
  a:
    b:
      for (c3 = a2; ; ) {
        for (; c3.sibling === null; ) {
          if (c3.return === null || ej(c3.return)) {
            c3 = null;
            break a;
          }
          c3 = c3.return;
        }
        c3.sibling.return = c3.return;
        for (c3 = c3.sibling; c3.tag !== 5 && c3.tag !== 6 && c3.tag !== 18; ) {
          if (c3.flags & 2)
            continue b;
          if (c3.child === null || c3.tag === 4)
            continue b;
          else
            c3.child.return = c3, c3 = c3.child;
        }
        if (!(c3.flags & 2)) {
          c3 = c3.stateNode;
          break a;
        }
      }
  d3 ? gj(a2, c3, b3) : hj(a2, c3, b3);
}
function gj(a2, b3, c3) {
  var d3 = a2.tag, e4 = d3 === 5 || d3 === 6;
  if (e4)
    a2 = e4 ? a2.stateNode : a2.stateNode.instance, b3 ? c3.nodeType === 8 ? c3.parentNode.insertBefore(a2, b3) : c3.insertBefore(a2, b3) : (c3.nodeType === 8 ? (b3 = c3.parentNode, b3.insertBefore(a2, c3)) : (b3 = c3, b3.appendChild(a2)), c3 = c3._reactRootContainer, c3 !== null && c3 !== void 0 || b3.onclick !== null || (b3.onclick = jf));
  else if (d3 !== 4 && (a2 = a2.child, a2 !== null))
    for (gj(a2, b3, c3), a2 = a2.sibling; a2 !== null; )
      gj(a2, b3, c3), a2 = a2.sibling;
}
function hj(a2, b3, c3) {
  var d3 = a2.tag, e4 = d3 === 5 || d3 === 6;
  if (e4)
    a2 = e4 ? a2.stateNode : a2.stateNode.instance, b3 ? c3.insertBefore(a2, b3) : c3.appendChild(a2);
  else if (d3 !== 4 && (a2 = a2.child, a2 !== null))
    for (hj(a2, b3, c3), a2 = a2.sibling; a2 !== null; )
      hj(a2, b3, c3), a2 = a2.sibling;
}
function cj(a2, b3) {
  for (var c3 = b3, d3 = false, e4, f3; ; ) {
    if (!d3) {
      d3 = c3.return;
      a:
        for (; ; ) {
          if (d3 === null)
            throw Error(y(160));
          e4 = d3.stateNode;
          switch (d3.tag) {
            case 5:
              f3 = false;
              break a;
            case 3:
              e4 = e4.containerInfo;
              f3 = true;
              break a;
            case 4:
              e4 = e4.containerInfo;
              f3 = true;
              break a;
          }
          d3 = d3.return;
        }
      d3 = true;
    }
    if (c3.tag === 5 || c3.tag === 6) {
      a:
        for (var g4 = a2, h3 = c3, k2 = h3; ; )
          if (bj(g4, k2), k2.child !== null && k2.tag !== 4)
            k2.child.return = k2, k2 = k2.child;
          else {
            if (k2 === h3)
              break a;
            for (; k2.sibling === null; ) {
              if (k2.return === null || k2.return === h3)
                break a;
              k2 = k2.return;
            }
            k2.sibling.return = k2.return;
            k2 = k2.sibling;
          }
      f3 ? (g4 = e4, h3 = c3.stateNode, g4.nodeType === 8 ? g4.parentNode.removeChild(h3) : g4.removeChild(h3)) : e4.removeChild(c3.stateNode);
    } else if (c3.tag === 4) {
      if (c3.child !== null) {
        e4 = c3.stateNode.containerInfo;
        f3 = true;
        c3.child.return = c3;
        c3 = c3.child;
        continue;
      }
    } else if (bj(a2, c3), c3.child !== null) {
      c3.child.return = c3;
      c3 = c3.child;
      continue;
    }
    if (c3 === b3)
      break;
    for (; c3.sibling === null; ) {
      if (c3.return === null || c3.return === b3)
        return;
      c3 = c3.return;
      c3.tag === 4 && (d3 = false);
    }
    c3.sibling.return = c3.return;
    c3 = c3.sibling;
  }
}
function ij(a2, b3) {
  switch (b3.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c3 = b3.updateQueue;
      c3 = c3 !== null ? c3.lastEffect : null;
      if (c3 !== null) {
        var d3 = c3 = c3.next;
        do
          (d3.tag & 3) === 3 && (a2 = d3.destroy, d3.destroy = void 0, a2 !== void 0 && a2()), d3 = d3.next;
        while (d3 !== c3);
      }
      return;
    case 1:
      return;
    case 5:
      c3 = b3.stateNode;
      if (c3 != null) {
        d3 = b3.memoizedProps;
        var e4 = a2 !== null ? a2.memoizedProps : d3;
        a2 = b3.type;
        var f3 = b3.updateQueue;
        b3.updateQueue = null;
        if (f3 !== null) {
          c3[xf] = d3;
          a2 === "input" && d3.type === "radio" && d3.name != null && $a(c3, d3);
          wb(a2, e4);
          b3 = wb(a2, d3);
          for (e4 = 0; e4 < f3.length; e4 += 2) {
            var g4 = f3[e4], h3 = f3[e4 + 1];
            g4 === "style" ? tb(c3, h3) : g4 === "dangerouslySetInnerHTML" ? ob(c3, h3) : g4 === "children" ? pb(c3, h3) : qa(c3, g4, h3, b3);
          }
          switch (a2) {
            case "input":
              ab(c3, d3);
              break;
            case "textarea":
              ib(c3, d3);
              break;
            case "select":
              a2 = c3._wrapperState.wasMultiple, c3._wrapperState.wasMultiple = !!d3.multiple, f3 = d3.value, f3 != null ? fb(c3, !!d3.multiple, f3, false) : a2 !== !!d3.multiple && (d3.defaultValue != null ? fb(c3, !!d3.multiple, d3.defaultValue, true) : fb(c3, !!d3.multiple, d3.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b3.stateNode === null)
        throw Error(y(162));
      b3.stateNode.nodeValue = b3.memoizedProps;
      return;
    case 3:
      c3 = b3.stateNode;
      c3.hydrate && (c3.hydrate = false, Cc(c3.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b3.memoizedState !== null && (jj = O(), aj(b3.child, true));
      kj(b3);
      return;
    case 19:
      kj(b3);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b3, b3.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function kj(a2) {
  var b3 = a2.updateQueue;
  if (b3 !== null) {
    a2.updateQueue = null;
    var c3 = a2.stateNode;
    c3 === null && (c3 = a2.stateNode = new Ui());
    b3.forEach(function(b4) {
      var d3 = lj.bind(null, a2, b4);
      c3.has(b4) || (c3.add(b4), b4.then(d3, d3));
    });
  }
}
function mj(a2, b3) {
  return a2 !== null && (a2 = a2.memoizedState, a2 === null || a2.dehydrated !== null) ? (b3 = b3.memoizedState, b3 !== null && b3.dehydrated === null) : false;
}
var nj = Math.ceil;
var oj = ra.ReactCurrentDispatcher;
var pj = ra.ReactCurrentOwner;
var X = 0;
var U = null;
var Y = null;
var W = 0;
var qj = 0;
var rj = Bf(0);
var V = 0;
var sj = null;
var tj = 0;
var Dg = 0;
var Hi = 0;
var uj = 0;
var vj = null;
var jj = 0;
var Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null;
var Qi = false;
var Ri = null;
var Ti = null;
var xj = false;
var yj = null;
var zj = 90;
var Aj = [];
var Bj = [];
var Cj = null;
var Dj = 0;
var Ej = null;
var Fj = -1;
var Gj = 0;
var Hj = 0;
var Ij = null;
var Jj = false;
function Hg() {
  return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
}
function Ig(a2) {
  a2 = a2.mode;
  if ((a2 & 2) === 0)
    return 1;
  if ((a2 & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a2 = Gj;
    var b3 = 4186112 & ~Hj;
    b3 &= -b3;
    b3 === 0 && (a2 = 4186112 & ~a2, b3 = a2 & -a2, b3 === 0 && (b3 = 8192));
    return b3;
  }
  a2 = eg();
  (X & 4) !== 0 && a2 === 98 ? a2 = Xc(12, Gj) : (a2 = Sc(a2), a2 = Xc(a2, Gj));
  return a2;
}
function Jg(a2, b3, c3) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a2 = Kj(a2, b3);
  if (a2 === null)
    return null;
  $c(a2, b3, c3);
  a2 === U && (Hi |= b3, V === 4 && Ii(a2, W));
  var d3 = eg();
  b3 === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a2) : (Mj(a2, c3), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d3 !== 98 && d3 !== 99 || (Cj === null ? Cj = new Set([a2]) : Cj.add(a2)), Mj(a2, c3));
  vj = a2;
}
function Kj(a2, b3) {
  a2.lanes |= b3;
  var c3 = a2.alternate;
  c3 !== null && (c3.lanes |= b3);
  c3 = a2;
  for (a2 = a2.return; a2 !== null; )
    a2.childLanes |= b3, c3 = a2.alternate, c3 !== null && (c3.childLanes |= b3), c3 = a2, a2 = a2.return;
  return c3.tag === 3 ? c3.stateNode : null;
}
function Mj(a2, b3) {
  for (var c3 = a2.callbackNode, d3 = a2.suspendedLanes, e4 = a2.pingedLanes, f3 = a2.expirationTimes, g4 = a2.pendingLanes; 0 < g4; ) {
    var h3 = 31 - Vc(g4), k2 = 1 << h3, l2 = f3[h3];
    if (l2 === -1) {
      if ((k2 & d3) === 0 || (k2 & e4) !== 0) {
        l2 = b3;
        Rc(k2);
        var n3 = F;
        f3[h3] = 10 <= n3 ? l2 + 250 : 6 <= n3 ? l2 + 5e3 : -1;
      }
    } else
      l2 <= b3 && (a2.expiredLanes |= k2);
    g4 &= ~k2;
  }
  d3 = Uc(a2, a2 === U ? W : 0);
  b3 = F;
  if (d3 === 0)
    c3 !== null && (c3 !== Zf && Pf(c3), a2.callbackNode = null, a2.callbackPriority = 0);
  else {
    if (c3 !== null) {
      if (a2.callbackPriority === b3)
        return;
      c3 !== Zf && Pf(c3);
    }
    b3 === 15 ? (c3 = Lj.bind(null, a2), ag === null ? (ag = [c3], bg = Of(Uf, jg)) : ag.push(c3), c3 = Zf) : b3 === 14 ? c3 = hg(99, Lj.bind(null, a2)) : (c3 = Tc(b3), c3 = hg(c3, Nj.bind(null, a2)));
    a2.callbackPriority = b3;
    a2.callbackNode = c3;
  }
}
function Nj(a2) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y(327));
  var b3 = a2.callbackNode;
  if (Oj() && a2.callbackNode !== b3)
    return null;
  var c3 = Uc(a2, a2 === U ? W : 0);
  if (c3 === 0)
    return null;
  var d3 = c3;
  var e4 = X;
  X |= 16;
  var f3 = Pj();
  if (U !== a2 || W !== d3)
    wj(), Qj(a2, d3);
  do
    try {
      Rj();
      break;
    } catch (h3) {
      Sj(a2, h3);
    }
  while (1);
  qg();
  oj.current = f3;
  X = e4;
  Y !== null ? d3 = 0 : (U = null, W = 0, d3 = V);
  if ((tj & Hi) !== 0)
    Qj(a2, 0);
  else if (d3 !== 0) {
    d3 === 2 && (X |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), c3 = Wc(a2), c3 !== 0 && (d3 = Tj(a2, c3)));
    if (d3 === 1)
      throw b3 = sj, Qj(a2, 0), Ii(a2, c3), Mj(a2, O()), b3;
    a2.finishedWork = a2.current.alternate;
    a2.finishedLanes = c3;
    switch (d3) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a2);
        break;
      case 3:
        Ii(a2, c3);
        if ((c3 & 62914560) === c3 && (d3 = jj + 500 - O(), 10 < d3)) {
          if (Uc(a2, 0) !== 0)
            break;
          e4 = a2.suspendedLanes;
          if ((e4 & c3) !== c3) {
            Hg();
            a2.pingedLanes |= a2.suspendedLanes & e4;
            break;
          }
          a2.timeoutHandle = of(Uj.bind(null, a2), d3);
          break;
        }
        Uj(a2);
        break;
      case 4:
        Ii(a2, c3);
        if ((c3 & 4186112) === c3)
          break;
        d3 = a2.eventTimes;
        for (e4 = -1; 0 < c3; ) {
          var g4 = 31 - Vc(c3);
          f3 = 1 << g4;
          g4 = d3[g4];
          g4 > e4 && (e4 = g4);
          c3 &= ~f3;
        }
        c3 = e4;
        c3 = O() - c3;
        c3 = (120 > c3 ? 120 : 480 > c3 ? 480 : 1080 > c3 ? 1080 : 1920 > c3 ? 1920 : 3e3 > c3 ? 3e3 : 4320 > c3 ? 4320 : 1960 * nj(c3 / 1960)) - c3;
        if (10 < c3) {
          a2.timeoutHandle = of(Uj.bind(null, a2), c3);
          break;
        }
        Uj(a2);
        break;
      case 5:
        Uj(a2);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a2, O());
  return a2.callbackNode === b3 ? Nj.bind(null, a2) : null;
}
function Ii(a2, b3) {
  b3 &= ~uj;
  b3 &= ~Hi;
  a2.suspendedLanes |= b3;
  a2.pingedLanes &= ~b3;
  for (a2 = a2.expirationTimes; 0 < b3; ) {
    var c3 = 31 - Vc(b3), d3 = 1 << c3;
    a2[c3] = -1;
    b3 &= ~d3;
  }
}
function Lj(a2) {
  if ((X & 48) !== 0)
    throw Error(y(327));
  Oj();
  if (a2 === U && (a2.expiredLanes & W) !== 0) {
    var b3 = W;
    var c3 = Tj(a2, b3);
    (tj & Hi) !== 0 && (b3 = Uc(a2, b3), c3 = Tj(a2, b3));
  } else
    b3 = Uc(a2, 0), c3 = Tj(a2, b3);
  a2.tag !== 0 && c3 === 2 && (X |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), b3 = Wc(a2), b3 !== 0 && (c3 = Tj(a2, b3)));
  if (c3 === 1)
    throw c3 = sj, Qj(a2, 0), Ii(a2, b3), Mj(a2, O()), c3;
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b3;
  Uj(a2);
  Mj(a2, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a2 = Cj;
    Cj = null;
    a2.forEach(function(a3) {
      a3.expiredLanes |= 24 & a3.pendingLanes;
      Mj(a3, O());
    });
  }
  ig();
}
function Wj(a2, b3) {
  var c3 = X;
  X |= 1;
  try {
    return a2(b3);
  } finally {
    X = c3, X === 0 && (wj(), ig());
  }
}
function Xj(a2, b3) {
  var c3 = X;
  X &= -2;
  X |= 8;
  try {
    return a2(b3);
  } finally {
    X = c3, X === 0 && (wj(), ig());
  }
}
function ni(a2, b3) {
  I(rj, qj);
  qj |= b3;
  tj |= b3;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a2, b3) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c3 = a2.timeoutHandle;
  c3 !== -1 && (a2.timeoutHandle = -1, pf(c3));
  if (Y !== null)
    for (c3 = Y.return; c3 !== null; ) {
      var d3 = c3;
      switch (d3.tag) {
        case 1:
          d3 = d3.type.childContextTypes;
          d3 !== null && d3 !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d3);
          break;
        case 4:
          fh();
          break;
        case 13:
          H(P);
          break;
        case 19:
          H(P);
          break;
        case 10:
          rg(d3);
          break;
        case 23:
        case 24:
          Ki();
      }
      c3 = c3.return;
    }
  U = a2;
  Y = Tg(a2.current, null);
  W = qj = tj = b3;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a2, b3) {
  do {
    var c3 = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d3 = R.memoizedState; d3 !== null; ) {
          var e4 = d3.queue;
          e4 !== null && (e4.pending = null);
          d3 = d3.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c3 === null || c3.return === null) {
        V = 1;
        sj = b3;
        Y = null;
        break;
      }
      a: {
        var f3 = a2, g4 = c3.return, h3 = c3, k2 = b3;
        b3 = W;
        h3.flags |= 2048;
        h3.firstEffect = h3.lastEffect = null;
        if (k2 !== null && typeof k2 === "object" && typeof k2.then === "function") {
          var l2 = k2;
          if ((h3.mode & 2) === 0) {
            var n3 = h3.alternate;
            n3 ? (h3.updateQueue = n3.updateQueue, h3.memoizedState = n3.memoizedState, h3.lanes = n3.lanes) : (h3.updateQueue = null, h3.memoizedState = null);
          }
          var A2 = (P.current & 1) !== 0, p3 = g4;
          do {
            var C;
            if (C = p3.tag === 13) {
              var x2 = p3.memoizedState;
              if (x2 !== null)
                C = x2.dehydrated !== null ? true : false;
              else {
                var w3 = p3.memoizedProps;
                C = w3.fallback === void 0 ? false : w3.unstable_avoidThisFallback !== true ? true : A2 ? false : true;
              }
            }
            if (C) {
              var z3 = p3.updateQueue;
              if (z3 === null) {
                var u2 = new Set();
                u2.add(l2);
                p3.updateQueue = u2;
              } else
                z3.add(l2);
              if ((p3.mode & 2) === 0) {
                p3.flags |= 64;
                h3.flags |= 16384;
                h3.flags &= -2981;
                if (h3.tag === 1)
                  if (h3.alternate === null)
                    h3.tag = 17;
                  else {
                    var t3 = zg(-1, 1);
                    t3.tag = 2;
                    Ag(h3, t3);
                  }
                h3.lanes |= 1;
                break a;
              }
              k2 = void 0;
              h3 = b3;
              var q2 = f3.pingCache;
              q2 === null ? (q2 = f3.pingCache = new Oi(), k2 = new Set(), q2.set(l2, k2)) : (k2 = q2.get(l2), k2 === void 0 && (k2 = new Set(), q2.set(l2, k2)));
              if (!k2.has(h3)) {
                k2.add(h3);
                var v3 = Yj.bind(null, f3, l2, h3);
                l2.then(v3, v3);
              }
              p3.flags |= 4096;
              p3.lanes = b3;
              break a;
            }
            p3 = p3.return;
          } while (p3 !== null);
          k2 = Error((Ra(h3.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k2 = Mi(k2, h3);
        p3 = g4;
        do {
          switch (p3.tag) {
            case 3:
              f3 = k2;
              p3.flags |= 4096;
              b3 &= -b3;
              p3.lanes |= b3;
              var J3 = Pi(p3, f3, b3);
              Bg(p3, J3);
              break a;
            case 1:
              f3 = k2;
              var K3 = p3.type, Q3 = p3.stateNode;
              if ((p3.flags & 64) === 0 && (typeof K3.getDerivedStateFromError === "function" || Q3 !== null && typeof Q3.componentDidCatch === "function" && (Ti === null || !Ti.has(Q3)))) {
                p3.flags |= 4096;
                b3 &= -b3;
                p3.lanes |= b3;
                var L3 = Si(p3, f3, b3);
                Bg(p3, L3);
                break a;
              }
          }
          p3 = p3.return;
        } while (p3 !== null);
      }
      Zj(c3);
    } catch (va) {
      b3 = va;
      Y === c3 && c3 !== null && (Y = c3 = c3.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a2 = oj.current;
  oj.current = Gh;
  return a2 === null ? Gh : a2;
}
function Tj(a2, b3) {
  var c3 = X;
  X |= 16;
  var d3 = Pj();
  U === a2 && W === b3 || Qj(a2, b3);
  do
    try {
      ak();
      break;
    } catch (e4) {
      Sj(a2, e4);
    }
  while (1);
  qg();
  X = c3;
  oj.current = d3;
  if (Y !== null)
    throw Error(y(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; Y !== null; )
    bk(Y);
}
function Rj() {
  for (; Y !== null && !Qf(); )
    bk(Y);
}
function bk(a2) {
  var b3 = ck(a2.alternate, a2, qj);
  a2.memoizedProps = a2.pendingProps;
  b3 === null ? Zj(a2) : Y = b3;
  pj.current = null;
}
function Zj(a2) {
  var b3 = a2;
  do {
    var c3 = b3.alternate;
    a2 = b3.return;
    if ((b3.flags & 2048) === 0) {
      c3 = Gi(c3, b3, qj);
      if (c3 !== null) {
        Y = c3;
        return;
      }
      c3 = b3;
      if (c3.tag !== 24 && c3.tag !== 23 || c3.memoizedState === null || (qj & 1073741824) !== 0 || (c3.mode & 4) === 0) {
        for (var d3 = 0, e4 = c3.child; e4 !== null; )
          d3 |= e4.lanes | e4.childLanes, e4 = e4.sibling;
        c3.childLanes = d3;
      }
      a2 !== null && (a2.flags & 2048) === 0 && (a2.firstEffect === null && (a2.firstEffect = b3.firstEffect), b3.lastEffect !== null && (a2.lastEffect !== null && (a2.lastEffect.nextEffect = b3.firstEffect), a2.lastEffect = b3.lastEffect), 1 < b3.flags && (a2.lastEffect !== null ? a2.lastEffect.nextEffect = b3 : a2.firstEffect = b3, a2.lastEffect = b3));
    } else {
      c3 = Li(b3);
      if (c3 !== null) {
        c3.flags &= 2047;
        Y = c3;
        return;
      }
      a2 !== null && (a2.firstEffect = a2.lastEffect = null, a2.flags |= 2048);
    }
    b3 = b3.sibling;
    if (b3 !== null) {
      Y = b3;
      return;
    }
    Y = b3 = a2;
  } while (b3 !== null);
  V === 0 && (V = 5);
}
function Uj(a2) {
  var b3 = eg();
  gg(99, dk.bind(null, a2, b3));
  return null;
}
function dk(a2, b3) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y(327));
  var c3 = a2.finishedWork;
  if (c3 === null)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c3 === a2.current)
    throw Error(y(177));
  a2.callbackNode = null;
  var d3 = c3.lanes | c3.childLanes, e4 = d3, f3 = a2.pendingLanes & ~e4;
  a2.pendingLanes = e4;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= e4;
  a2.mutableReadLanes &= e4;
  a2.entangledLanes &= e4;
  e4 = a2.entanglements;
  for (var g4 = a2.eventTimes, h3 = a2.expirationTimes; 0 < f3; ) {
    var k2 = 31 - Vc(f3), l2 = 1 << k2;
    e4[k2] = 0;
    g4[k2] = -1;
    h3[k2] = -1;
    f3 &= ~l2;
  }
  Cj !== null && (d3 & 24) === 0 && Cj.has(a2) && Cj.delete(a2);
  a2 === U && (Y = U = null, W = 0);
  1 < c3.flags ? c3.lastEffect !== null ? (c3.lastEffect.nextEffect = c3, d3 = c3.firstEffect) : d3 = c3 : d3 = c3.firstEffect;
  if (d3 !== null) {
    e4 = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g4 = Ne();
    if (Oe(g4)) {
      if ("selectionStart" in g4)
        h3 = {start: g4.selectionStart, end: g4.selectionEnd};
      else
        a:
          if (h3 = (h3 = g4.ownerDocument) && h3.defaultView || window, (l2 = h3.getSelection && h3.getSelection()) && l2.rangeCount !== 0) {
            h3 = l2.anchorNode;
            f3 = l2.anchorOffset;
            k2 = l2.focusNode;
            l2 = l2.focusOffset;
            try {
              h3.nodeType, k2.nodeType;
            } catch (va) {
              h3 = null;
              break a;
            }
            var n3 = 0, A2 = -1, p3 = -1, C = 0, x2 = 0, w3 = g4, z3 = null;
            b:
              for (; ; ) {
                for (var u2; ; ) {
                  w3 !== h3 || f3 !== 0 && w3.nodeType !== 3 || (A2 = n3 + f3);
                  w3 !== k2 || l2 !== 0 && w3.nodeType !== 3 || (p3 = n3 + l2);
                  w3.nodeType === 3 && (n3 += w3.nodeValue.length);
                  if ((u2 = w3.firstChild) === null)
                    break;
                  z3 = w3;
                  w3 = u2;
                }
                for (; ; ) {
                  if (w3 === g4)
                    break b;
                  z3 === h3 && ++C === f3 && (A2 = n3);
                  z3 === k2 && ++x2 === l2 && (p3 = n3);
                  if ((u2 = w3.nextSibling) !== null)
                    break;
                  w3 = z3;
                  z3 = w3.parentNode;
                }
                w3 = u2;
              }
            h3 = A2 === -1 || p3 === -1 ? null : {start: A2, end: p3};
          } else
            h3 = null;
      h3 = h3 || {start: 0, end: 0};
    } else
      h3 = null;
    lf = {focusedElem: g4, selectionRange: h3};
    fd = false;
    Ij = null;
    Jj = false;
    Z = d3;
    do
      try {
        ek();
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Ij = null;
    Z = d3;
    do
      try {
        for (g4 = a2; Z !== null; ) {
          var t3 = Z.flags;
          t3 & 16 && pb(Z.stateNode, "");
          if (t3 & 128) {
            var q2 = Z.alternate;
            if (q2 !== null) {
              var v3 = q2.ref;
              v3 !== null && (typeof v3 === "function" ? v3(null) : v3.current = null);
            }
          }
          switch (t3 & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h3 = Z;
              cj(g4, h3);
              var J3 = h3.alternate;
              dj(h3);
              J3 !== null && dj(J3);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    v3 = lf;
    q2 = Ne();
    t3 = v3.focusedElem;
    g4 = v3.selectionRange;
    if (q2 !== t3 && t3 && t3.ownerDocument && Me(t3.ownerDocument.documentElement, t3)) {
      g4 !== null && Oe(t3) && (q2 = g4.start, v3 = g4.end, v3 === void 0 && (v3 = q2), "selectionStart" in t3 ? (t3.selectionStart = q2, t3.selectionEnd = Math.min(v3, t3.value.length)) : (v3 = (q2 = t3.ownerDocument || document) && q2.defaultView || window, v3.getSelection && (v3 = v3.getSelection(), h3 = t3.textContent.length, J3 = Math.min(g4.start, h3), g4 = g4.end === void 0 ? J3 : Math.min(g4.end, h3), !v3.extend && J3 > g4 && (h3 = g4, g4 = J3, J3 = h3), h3 = Le(t3, J3), f3 = Le(t3, g4), h3 && f3 && (v3.rangeCount !== 1 || v3.anchorNode !== h3.node || v3.anchorOffset !== h3.offset || v3.focusNode !== f3.node || v3.focusOffset !== f3.offset) && (q2 = q2.createRange(), q2.setStart(h3.node, h3.offset), v3.removeAllRanges(), J3 > g4 ? (v3.addRange(q2), v3.extend(f3.node, f3.offset)) : (q2.setEnd(f3.node, f3.offset), v3.addRange(q2))))));
      q2 = [];
      for (v3 = t3; v3 = v3.parentNode; )
        v3.nodeType === 1 && q2.push({element: v3, left: v3.scrollLeft, top: v3.scrollTop});
      typeof t3.focus === "function" && t3.focus();
      for (t3 = 0; t3 < q2.length; t3++)
        v3 = q2[t3], v3.element.scrollLeft = v3.left, v3.element.scrollTop = v3.top;
    }
    fd = !!kf;
    lf = kf = null;
    a2.current = c3;
    Z = d3;
    do
      try {
        for (t3 = a2; Z !== null; ) {
          var K3 = Z.flags;
          K3 & 36 && Yi(t3, Z.alternate, Z);
          if (K3 & 128) {
            q2 = void 0;
            var Q3 = Z.ref;
            if (Q3 !== null) {
              var L3 = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q2 = L3;
                  break;
                default:
                  q2 = L3;
              }
              typeof Q3 === "function" ? Q3(q2) : Q3.current = q2;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Z = null;
    $f();
    X = e4;
  } else
    a2.current = c3;
  if (xj)
    xj = false, yj = a2, zj = b3;
  else
    for (Z = d3; Z !== null; )
      b3 = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K3 = Z, K3.sibling = null, K3.stateNode = null), Z = b3;
  d3 = a2.pendingLanes;
  d3 === 0 && (Ti = null);
  d3 === 1 ? a2 === Ej ? Dj++ : (Dj = 0, Ej = a2) : Dj = 0;
  c3 = c3.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c3, void 0, (c3.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a2, O());
  if (Qi)
    throw Qi = false, a2 = Ri, Ri = null, a2;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a2 = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a2, Z) && dc(Z, Ij) && (Jj = true));
    var b3 = Z.flags;
    (b3 & 256) !== 0 && Xi(a2, Z);
    (b3 & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a2 = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a2, fk);
  }
  return false;
}
function $i(a2, b3) {
  Aj.push(b3, a2);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a2, b3) {
  Bj.push(b3, a2);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a2 = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y(331));
  var b3 = X;
  X |= 32;
  var c3 = Bj;
  Bj = [];
  for (var d3 = 0; d3 < c3.length; d3 += 2) {
    var e4 = c3[d3], f3 = c3[d3 + 1], g4 = e4.destroy;
    e4.destroy = void 0;
    if (typeof g4 === "function")
      try {
        g4();
      } catch (k2) {
        if (f3 === null)
          throw Error(y(330));
        Wi(f3, k2);
      }
  }
  c3 = Aj;
  Aj = [];
  for (d3 = 0; d3 < c3.length; d3 += 2) {
    e4 = c3[d3];
    f3 = c3[d3 + 1];
    try {
      var h3 = e4.create;
      e4.destroy = h3();
    } catch (k2) {
      if (f3 === null)
        throw Error(y(330));
      Wi(f3, k2);
    }
  }
  for (h3 = a2.current.firstEffect; h3 !== null; )
    a2 = h3.nextEffect, h3.nextEffect = null, h3.flags & 8 && (h3.sibling = null, h3.stateNode = null), h3 = a2;
  X = b3;
  ig();
  return true;
}
function gk(a2, b3, c3) {
  b3 = Mi(c3, b3);
  b3 = Pi(a2, b3, 1);
  Ag(a2, b3);
  b3 = Hg();
  a2 = Kj(a2, 1);
  a2 !== null && ($c(a2, 1, b3), Mj(a2, b3));
}
function Wi(a2, b3) {
  if (a2.tag === 3)
    gk(a2, a2, b3);
  else
    for (var c3 = a2.return; c3 !== null; ) {
      if (c3.tag === 3) {
        gk(c3, a2, b3);
        break;
      } else if (c3.tag === 1) {
        var d3 = c3.stateNode;
        if (typeof c3.type.getDerivedStateFromError === "function" || typeof d3.componentDidCatch === "function" && (Ti === null || !Ti.has(d3))) {
          a2 = Mi(b3, a2);
          var e4 = Si(c3, a2, 1);
          Ag(c3, e4);
          e4 = Hg();
          c3 = Kj(c3, 1);
          if (c3 !== null)
            $c(c3, 1, e4), Mj(c3, e4);
          else if (typeof d3.componentDidCatch === "function" && (Ti === null || !Ti.has(d3)))
            try {
              d3.componentDidCatch(b3, a2);
            } catch (f3) {
            }
          break;
        }
      }
      c3 = c3.return;
    }
}
function Yj(a2, b3, c3) {
  var d3 = a2.pingCache;
  d3 !== null && d3.delete(b3);
  b3 = Hg();
  a2.pingedLanes |= a2.suspendedLanes & c3;
  U === a2 && (W & c3) === c3 && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a2, 0) : uj |= c3);
  Mj(a2, b3);
}
function lj(a2, b3) {
  var c3 = a2.stateNode;
  c3 !== null && c3.delete(b3);
  b3 = 0;
  b3 === 0 && (b3 = a2.mode, (b3 & 2) === 0 ? b3 = 1 : (b3 & 4) === 0 ? b3 = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b3 = Yc(62914560 & ~Gj), b3 === 0 && (b3 = 4194304)));
  c3 = Hg();
  a2 = Kj(a2, b3);
  a2 !== null && ($c(a2, b3, c3), Mj(a2, c3));
}
var ck;
ck = function(a2, b3, c3) {
  var d3 = b3.lanes;
  if (a2 !== null)
    if (a2.memoizedProps !== b3.pendingProps || N.current)
      ug = true;
    else if ((c3 & d3) !== 0)
      ug = (a2.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b3.tag) {
        case 3:
          ri(b3);
          sh();
          break;
        case 5:
          gh(b3);
          break;
        case 1:
          Ff(b3.type) && Jf(b3);
          break;
        case 4:
          eh(b3, b3.stateNode.containerInfo);
          break;
        case 10:
          d3 = b3.memoizedProps.value;
          var e4 = b3.type._context;
          I(mg, e4._currentValue);
          e4._currentValue = d3;
          break;
        case 13:
          if (b3.memoizedState !== null) {
            if ((c3 & b3.child.childLanes) !== 0)
              return ti(a2, b3, c3);
            I(P, P.current & 1);
            b3 = hi(a2, b3, c3);
            return b3 !== null ? b3.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d3 = (c3 & b3.childLanes) !== 0;
          if ((a2.flags & 64) !== 0) {
            if (d3)
              return Ai(a2, b3, c3);
            b3.flags |= 64;
          }
          e4 = b3.memoizedState;
          e4 !== null && (e4.rendering = null, e4.tail = null, e4.lastEffect = null);
          I(P, P.current);
          if (d3)
            break;
          else
            return null;
        case 23:
        case 24:
          return b3.lanes = 0, mi(a2, b3, c3);
      }
      return hi(a2, b3, c3);
    }
  else
    ug = false;
  b3.lanes = 0;
  switch (b3.tag) {
    case 2:
      d3 = b3.type;
      a2 !== null && (a2.alternate = null, b3.alternate = null, b3.flags |= 2);
      a2 = b3.pendingProps;
      e4 = Ef(b3, M.current);
      tg(b3, c3);
      e4 = Ch(null, b3, d3, a2, e4, c3);
      b3.flags |= 1;
      if (typeof e4 === "object" && e4 !== null && typeof e4.render === "function" && e4.$$typeof === void 0) {
        b3.tag = 1;
        b3.memoizedState = null;
        b3.updateQueue = null;
        if (Ff(d3)) {
          var f3 = true;
          Jf(b3);
        } else
          f3 = false;
        b3.memoizedState = e4.state !== null && e4.state !== void 0 ? e4.state : null;
        xg(b3);
        var g4 = d3.getDerivedStateFromProps;
        typeof g4 === "function" && Gg(b3, d3, g4, a2);
        e4.updater = Kg;
        b3.stateNode = e4;
        e4._reactInternals = b3;
        Og(b3, d3, a2, c3);
        b3 = qi(null, b3, d3, true, f3, c3);
      } else
        b3.tag = 0, fi(null, b3, e4, c3), b3 = b3.child;
      return b3;
    case 16:
      e4 = b3.elementType;
      a: {
        a2 !== null && (a2.alternate = null, b3.alternate = null, b3.flags |= 2);
        a2 = b3.pendingProps;
        f3 = e4._init;
        e4 = f3(e4._payload);
        b3.type = e4;
        f3 = b3.tag = hk(e4);
        a2 = lg(e4, a2);
        switch (f3) {
          case 0:
            b3 = li(null, b3, e4, a2, c3);
            break a;
          case 1:
            b3 = pi(null, b3, e4, a2, c3);
            break a;
          case 11:
            b3 = gi(null, b3, e4, a2, c3);
            break a;
          case 14:
            b3 = ii(null, b3, e4, lg(e4.type, a2), d3, c3);
            break a;
        }
        throw Error(y(306, e4, ""));
      }
      return b3;
    case 0:
      return d3 = b3.type, e4 = b3.pendingProps, e4 = b3.elementType === d3 ? e4 : lg(d3, e4), li(a2, b3, d3, e4, c3);
    case 1:
      return d3 = b3.type, e4 = b3.pendingProps, e4 = b3.elementType === d3 ? e4 : lg(d3, e4), pi(a2, b3, d3, e4, c3);
    case 3:
      ri(b3);
      d3 = b3.updateQueue;
      if (a2 === null || d3 === null)
        throw Error(y(282));
      d3 = b3.pendingProps;
      e4 = b3.memoizedState;
      e4 = e4 !== null ? e4.element : null;
      yg(a2, b3);
      Cg(b3, d3, null, c3);
      d3 = b3.memoizedState.element;
      if (d3 === e4)
        sh(), b3 = hi(a2, b3, c3);
      else {
        e4 = b3.stateNode;
        if (f3 = e4.hydrate)
          kh = rf(b3.stateNode.containerInfo.firstChild), jh = b3, f3 = lh = true;
        if (f3) {
          a2 = e4.mutableSourceEagerHydrationData;
          if (a2 != null)
            for (e4 = 0; e4 < a2.length; e4 += 2)
              f3 = a2[e4], f3._workInProgressVersionPrimary = a2[e4 + 1], th.push(f3);
          c3 = Zg(b3, null, d3, c3);
          for (b3.child = c3; c3; )
            c3.flags = c3.flags & -3 | 1024, c3 = c3.sibling;
        } else
          fi(a2, b3, d3, c3), sh();
        b3 = b3.child;
      }
      return b3;
    case 5:
      return gh(b3), a2 === null && ph(b3), d3 = b3.type, e4 = b3.pendingProps, f3 = a2 !== null ? a2.memoizedProps : null, g4 = e4.children, nf(d3, e4) ? g4 = null : f3 !== null && nf(d3, f3) && (b3.flags |= 16), oi(a2, b3), fi(a2, b3, g4, c3), b3.child;
    case 6:
      return a2 === null && ph(b3), null;
    case 13:
      return ti(a2, b3, c3);
    case 4:
      return eh(b3, b3.stateNode.containerInfo), d3 = b3.pendingProps, a2 === null ? b3.child = Yg(b3, null, d3, c3) : fi(a2, b3, d3, c3), b3.child;
    case 11:
      return d3 = b3.type, e4 = b3.pendingProps, e4 = b3.elementType === d3 ? e4 : lg(d3, e4), gi(a2, b3, d3, e4, c3);
    case 7:
      return fi(a2, b3, b3.pendingProps, c3), b3.child;
    case 8:
      return fi(a2, b3, b3.pendingProps.children, c3), b3.child;
    case 12:
      return fi(a2, b3, b3.pendingProps.children, c3), b3.child;
    case 10:
      a: {
        d3 = b3.type._context;
        e4 = b3.pendingProps;
        g4 = b3.memoizedProps;
        f3 = e4.value;
        var h3 = b3.type._context;
        I(mg, h3._currentValue);
        h3._currentValue = f3;
        if (g4 !== null)
          if (h3 = g4.value, f3 = He(h3, f3) ? 0 : (typeof d3._calculateChangedBits === "function" ? d3._calculateChangedBits(h3, f3) : 1073741823) | 0, f3 === 0) {
            if (g4.children === e4.children && !N.current) {
              b3 = hi(a2, b3, c3);
              break a;
            }
          } else
            for (h3 = b3.child, h3 !== null && (h3.return = b3); h3 !== null; ) {
              var k2 = h3.dependencies;
              if (k2 !== null) {
                g4 = h3.child;
                for (var l2 = k2.firstContext; l2 !== null; ) {
                  if (l2.context === d3 && (l2.observedBits & f3) !== 0) {
                    h3.tag === 1 && (l2 = zg(-1, c3 & -c3), l2.tag = 2, Ag(h3, l2));
                    h3.lanes |= c3;
                    l2 = h3.alternate;
                    l2 !== null && (l2.lanes |= c3);
                    sg(h3.return, c3);
                    k2.lanes |= c3;
                    break;
                  }
                  l2 = l2.next;
                }
              } else
                g4 = h3.tag === 10 ? h3.type === b3.type ? null : h3.child : h3.child;
              if (g4 !== null)
                g4.return = h3;
              else
                for (g4 = h3; g4 !== null; ) {
                  if (g4 === b3) {
                    g4 = null;
                    break;
                  }
                  h3 = g4.sibling;
                  if (h3 !== null) {
                    h3.return = g4.return;
                    g4 = h3;
                    break;
                  }
                  g4 = g4.return;
                }
              h3 = g4;
            }
        fi(a2, b3, e4.children, c3);
        b3 = b3.child;
      }
      return b3;
    case 9:
      return e4 = b3.type, f3 = b3.pendingProps, d3 = f3.children, tg(b3, c3), e4 = vg(e4, f3.unstable_observedBits), d3 = d3(e4), b3.flags |= 1, fi(a2, b3, d3, c3), b3.child;
    case 14:
      return e4 = b3.type, f3 = lg(e4, b3.pendingProps), f3 = lg(e4.type, f3), ii(a2, b3, e4, f3, d3, c3);
    case 15:
      return ki(a2, b3, b3.type, b3.pendingProps, d3, c3);
    case 17:
      return d3 = b3.type, e4 = b3.pendingProps, e4 = b3.elementType === d3 ? e4 : lg(d3, e4), a2 !== null && (a2.alternate = null, b3.alternate = null, b3.flags |= 2), b3.tag = 1, Ff(d3) ? (a2 = true, Jf(b3)) : a2 = false, tg(b3, c3), Mg(b3, d3, e4), Og(b3, d3, e4, c3), qi(null, b3, d3, true, a2, c3);
    case 19:
      return Ai(a2, b3, c3);
    case 23:
      return mi(a2, b3, c3);
    case 24:
      return mi(a2, b3, c3);
  }
  throw Error(y(156, b3.tag));
};
function ik(a2, b3, c3, d3) {
  this.tag = a2;
  this.key = c3;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b3;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d3;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a2, b3, c3, d3) {
  return new ik(a2, b3, c3, d3);
}
function ji(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function hk(a2) {
  if (typeof a2 === "function")
    return ji(a2) ? 1 : 0;
  if (a2 !== void 0 && a2 !== null) {
    a2 = a2.$$typeof;
    if (a2 === Aa)
      return 11;
    if (a2 === Da)
      return 14;
  }
  return 2;
}
function Tg(a2, b3) {
  var c3 = a2.alternate;
  c3 === null ? (c3 = nh(a2.tag, b3, a2.key, a2.mode), c3.elementType = a2.elementType, c3.type = a2.type, c3.stateNode = a2.stateNode, c3.alternate = a2, a2.alternate = c3) : (c3.pendingProps = b3, c3.type = a2.type, c3.flags = 0, c3.nextEffect = null, c3.firstEffect = null, c3.lastEffect = null);
  c3.childLanes = a2.childLanes;
  c3.lanes = a2.lanes;
  c3.child = a2.child;
  c3.memoizedProps = a2.memoizedProps;
  c3.memoizedState = a2.memoizedState;
  c3.updateQueue = a2.updateQueue;
  b3 = a2.dependencies;
  c3.dependencies = b3 === null ? null : {lanes: b3.lanes, firstContext: b3.firstContext};
  c3.sibling = a2.sibling;
  c3.index = a2.index;
  c3.ref = a2.ref;
  return c3;
}
function Vg(a2, b3, c3, d3, e4, f3) {
  var g4 = 2;
  d3 = a2;
  if (typeof a2 === "function")
    ji(a2) && (g4 = 1);
  else if (typeof a2 === "string")
    g4 = 5;
  else
    a:
      switch (a2) {
        case ua:
          return Xg(c3.children, e4, f3, b3);
        case Ha:
          g4 = 8;
          e4 |= 16;
          break;
        case wa:
          g4 = 8;
          e4 |= 1;
          break;
        case xa:
          return a2 = nh(12, c3, b3, e4 | 8), a2.elementType = xa, a2.type = xa, a2.lanes = f3, a2;
        case Ba:
          return a2 = nh(13, c3, b3, e4), a2.type = Ba, a2.elementType = Ba, a2.lanes = f3, a2;
        case Ca:
          return a2 = nh(19, c3, b3, e4), a2.elementType = Ca, a2.lanes = f3, a2;
        case Ia:
          return vi(c3, e4, f3, b3);
        case Ja:
          return a2 = nh(24, c3, b3, e4), a2.elementType = Ja, a2.lanes = f3, a2;
        default:
          if (typeof a2 === "object" && a2 !== null)
            switch (a2.$$typeof) {
              case ya:
                g4 = 10;
                break a;
              case za:
                g4 = 9;
                break a;
              case Aa:
                g4 = 11;
                break a;
              case Da:
                g4 = 14;
                break a;
              case Ea:
                g4 = 16;
                d3 = null;
                break a;
              case Fa:
                g4 = 22;
                break a;
            }
          throw Error(y(130, a2 == null ? a2 : typeof a2, ""));
      }
  b3 = nh(g4, c3, b3, e4);
  b3.elementType = a2;
  b3.type = d3;
  b3.lanes = f3;
  return b3;
}
function Xg(a2, b3, c3, d3) {
  a2 = nh(7, a2, d3, b3);
  a2.lanes = c3;
  return a2;
}
function vi(a2, b3, c3, d3) {
  a2 = nh(23, a2, d3, b3);
  a2.elementType = Ia;
  a2.lanes = c3;
  return a2;
}
function Ug(a2, b3, c3) {
  a2 = nh(6, a2, null, b3);
  a2.lanes = c3;
  return a2;
}
function Wg(a2, b3, c3) {
  b3 = nh(4, a2.children !== null ? a2.children : [], a2.key, b3);
  b3.lanes = c3;
  b3.stateNode = {containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation};
  return b3;
}
function jk(a2, b3, c3) {
  this.tag = b3;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c3;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a2, b3, c3) {
  var d3 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {$$typeof: ta, key: d3 == null ? null : "" + d3, children: a2, containerInfo: b3, implementation: c3};
}
function lk(a2, b3, c3, d3) {
  var e4 = b3.current, f3 = Hg(), g4 = Ig(e4);
  a:
    if (c3) {
      c3 = c3._reactInternals;
      b: {
        if (Zb(c3) !== c3 || c3.tag !== 1)
          throw Error(y(170));
        var h3 = c3;
        do {
          switch (h3.tag) {
            case 3:
              h3 = h3.stateNode.context;
              break b;
            case 1:
              if (Ff(h3.type)) {
                h3 = h3.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h3 = h3.return;
        } while (h3 !== null);
        throw Error(y(171));
      }
      if (c3.tag === 1) {
        var k2 = c3.type;
        if (Ff(k2)) {
          c3 = If(c3, k2, h3);
          break a;
        }
      }
      c3 = h3;
    } else
      c3 = Cf;
  b3.context === null ? b3.context = c3 : b3.pendingContext = c3;
  b3 = zg(f3, g4);
  b3.payload = {element: a2};
  d3 = d3 === void 0 ? null : d3;
  d3 !== null && (b3.callback = d3);
  Ag(e4, b3);
  Jg(e4, g4, f3);
  return g4;
}
function mk(a2) {
  a2 = a2.current;
  if (!a2.child)
    return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function nk(a2, b3) {
  a2 = a2.memoizedState;
  if (a2 !== null && a2.dehydrated !== null) {
    var c3 = a2.retryLane;
    a2.retryLane = c3 !== 0 && c3 < b3 ? c3 : b3;
  }
}
function ok(a2, b3) {
  nk(a2, b3);
  (a2 = a2.alternate) && nk(a2, b3);
}
function pk() {
  return null;
}
function qk(a2, b3, c3) {
  var d3 = c3 != null && c3.hydrationOptions != null && c3.hydrationOptions.mutableSources || null;
  c3 = new jk(a2, b3, c3 != null && c3.hydrate === true);
  b3 = nh(3, null, null, b3 === 2 ? 7 : b3 === 1 ? 3 : 0);
  c3.current = b3;
  b3.stateNode = c3;
  xg(b3);
  a2[ff] = c3.current;
  cf(a2.nodeType === 8 ? a2.parentNode : a2);
  if (d3)
    for (a2 = 0; a2 < d3.length; a2++) {
      b3 = d3[a2];
      var e4 = b3._getVersion;
      e4 = e4(b3._source);
      c3.mutableSourceEagerHydrationData == null ? c3.mutableSourceEagerHydrationData = [b3, e4] : c3.mutableSourceEagerHydrationData.push(b3, e4);
    }
  this._internalRoot = c3;
}
qk.prototype.render = function(a2) {
  lk(a2, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a2 = this._internalRoot, b3 = a2.containerInfo;
  lk(null, a2, null, function() {
    b3[ff] = null;
  });
};
function rk(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11 && (a2.nodeType !== 8 || a2.nodeValue !== " react-mount-point-unstable "));
}
function sk(a2, b3) {
  b3 || (b3 = a2 ? a2.nodeType === 9 ? a2.documentElement : a2.firstChild : null, b3 = !(!b3 || b3.nodeType !== 1 || !b3.hasAttribute("data-reactroot")));
  if (!b3)
    for (var c3; c3 = a2.lastChild; )
      a2.removeChild(c3);
  return new qk(a2, 0, b3 ? {hydrate: true} : void 0);
}
function tk(a2, b3, c3, d3, e4) {
  var f3 = c3._reactRootContainer;
  if (f3) {
    var g4 = f3._internalRoot;
    if (typeof e4 === "function") {
      var h3 = e4;
      e4 = function() {
        var a3 = mk(g4);
        h3.call(a3);
      };
    }
    lk(b3, g4, a2, e4);
  } else {
    f3 = c3._reactRootContainer = sk(c3, d3);
    g4 = f3._internalRoot;
    if (typeof e4 === "function") {
      var k2 = e4;
      e4 = function() {
        var a3 = mk(g4);
        k2.call(a3);
      };
    }
    Xj(function() {
      lk(b3, g4, a2, e4);
    });
  }
  return mk(g4);
}
ec = function(a2) {
  if (a2.tag === 13) {
    var b3 = Hg();
    Jg(a2, 4, b3);
    ok(a2, 4);
  }
};
fc = function(a2) {
  if (a2.tag === 13) {
    var b3 = Hg();
    Jg(a2, 67108864, b3);
    ok(a2, 67108864);
  }
};
gc = function(a2) {
  if (a2.tag === 13) {
    var b3 = Hg(), c3 = Ig(a2);
    Jg(a2, c3, b3);
    ok(a2, c3);
  }
};
hc = function(a2, b3) {
  return b3();
};
yb = function(a2, b3, c3) {
  switch (b3) {
    case "input":
      ab(a2, c3);
      b3 = c3.name;
      if (c3.type === "radio" && b3 != null) {
        for (c3 = a2; c3.parentNode; )
          c3 = c3.parentNode;
        c3 = c3.querySelectorAll("input[name=" + JSON.stringify("" + b3) + '][type="radio"]');
        for (b3 = 0; b3 < c3.length; b3++) {
          var d3 = c3[b3];
          if (d3 !== a2 && d3.form === a2.form) {
            var e4 = Db(d3);
            if (!e4)
              throw Error(y(90));
            Wa(d3);
            ab(d3, e4);
          }
        }
      }
      break;
    case "textarea":
      ib(a2, c3);
      break;
    case "select":
      b3 = c3.value, b3 != null && fb(a2, !!c3.multiple, b3, false);
  }
};
Gb = Wj;
Hb = function(a2, b3, c3, d3, e4) {
  var f3 = X;
  X |= 4;
  try {
    return gg(98, a2.bind(null, b3, c3, d3, e4));
  } finally {
    X = f3, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a2, b3) {
  var c3 = X;
  X |= 2;
  try {
    return a2(b3);
  } finally {
    X = c3, X === 0 && (wj(), ig());
  }
};
function uk(a2, b3) {
  var c3 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b3))
    throw Error(y(200));
  return kk(a2, b3, null, c3);
}
var vk = {Events: [Cb, ue, Db, Eb, Fb, Oj, {current: false}]};
var wk = {findFiberByHostInstance: wc, bundleType: 0, version: "17.0.1", rendererPackageName: "react-dom"};
var xk = {bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = cc(a2);
  return a2 === null ? null : a2.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a2) {
    }
}
var yk;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
var createPortal = uk;
var findDOMNode = function(a2) {
  if (a2 == null)
    return null;
  if (a2.nodeType === 1)
    return a2;
  var b3 = a2._reactInternals;
  if (b3 === void 0) {
    if (typeof a2.render === "function")
      throw Error(y(188));
    throw Error(y(268, Object.keys(a2)));
  }
  a2 = cc(b3);
  a2 = a2 === null ? null : a2.stateNode;
  return a2;
};
var flushSync = function(a2, b3) {
  var c3 = X;
  if ((c3 & 48) !== 0)
    return a2(b3);
  X |= 1;
  try {
    if (a2)
      return gg(99, a2.bind(null, b3));
  } finally {
    X = c3, ig();
  }
};
var hydrate = function(a2, b3, c3) {
  if (!rk(b3))
    throw Error(y(200));
  return tk(null, a2, b3, true, c3);
};
var render = function(a2, b3, c3) {
  if (!rk(b3))
    throw Error(y(200));
  return tk(null, a2, b3, false, c3);
};
var unmountComponentAtNode = function(a2) {
  if (!rk(a2))
    throw Error(y(40));
  return a2._reactRootContainer ? (Xj(function() {
    tk(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[ff] = null;
    });
  }), true) : false;
};
var unstable_batchedUpdates = Wj;
var unstable_createPortal = function(a2, b3) {
  return uk(a2, b3, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
var unstable_renderSubtreeIntoContainer = function(a2, b3, c3, d3) {
  if (!rk(c3))
    throw Error(y(200));
  if (a2 == null || a2._reactInternals === void 0)
    throw Error(y(38));
  return tk(a2, b3, c3, false, d3);
};
var version = "17.0.1";
var reactDom_production_min = {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  createPortal,
  findDOMNode,
  flushSync,
  hydrate,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_createPortal,
  unstable_renderSubtreeIntoContainer,
  version
};
var reactDom = createCommonjsModule(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
});
var react_dom_default = reactDom;

// _snowpack/pkg/common/effector-4506bfe7.js
function e(e4, t3, r2, a2) {
  (J(e4) || K(e4)) && ("family" in e4 || "graphite" in e4) || B2(`${t3}: expect ${r2} to be a unit (store, event or effect)${a2}`);
}
function t(t3, r2, a2) {
  if (Array.isArray(t3))
    for (let n3 = 0; n3 < t3.length; n3++)
      e(t3[n3], r2, `${n3} item of ${a2}`, "");
  else
    e(t3, r2, a2, " or array of units");
}
function a({node: e4 = [], from: t3, source: r2, parent: a2 = t3 || r2, to: n3, target: o2, child: l2 = n3 || o2, scope: s2 = {}, meta: i2 = {}, family: f3 = {type: "regular"}, regional: c3} = {}) {
  let u2 = Fe2(a2), p3 = Fe2(f3.links), d3 = Fe2(f3.owners), m3 = [], h3 = {};
  for (let t4 = 0; t4 < e4.length; t4++) {
    let r3 = e4[t4];
    r3 && (m3.push(r3), Re2(r3, h3));
  }
  let g4 = {id: Y2(), seq: m3, next: Fe2(l2), meta: i2, scope: s2, family: {type: f3.type || "crosslink", links: p3, owners: d3}, reg: h3};
  for (let e5 = 0; e5 < p3.length; e5++)
    ye(p3[e5]).push(g4);
  for (let e5 = 0; e5 < d3.length; e5++)
    ke2(d3[e5]).push(g4);
  for (let e5 = 0; e5 < u2.length; e5++)
    u2[e5].next.push(g4);
  return c3 && Ce2 && Ae2(Se2(Ce2), [g4]), g4;
}
function n(e4, t3, r2) {
  let a2 = Be2, n3 = null, o2 = He2;
  if (e4.target && (t3 = e4.params, r2 = e4.defer, a2 = "page" in e4 ? e4.page : a2, e4.stack && (n3 = e4.stack), o2 = Ne2(e4) || o2, e4 = e4.target), o2 && He2 && o2 !== He2 && (He2 = null), Array.isArray(e4))
    for (let r3 = 0; r3 < e4.length; r3++)
      $e2("pure", a2, ge2(e4[r3]), n3, t3[r3], o2);
  else
    $e2("pure", a2, ge2(e4), n3, t3, o2);
  if (r2 && !Ge2)
    return;
  let l2, s2, i2, f3, c3, u2, p3 = {isRoot: Ge2, currentPage: Be2, forkPage: He2, isWatch: Ue2};
  Ge2 = 0;
  e:
    for (; f3 = Ee2(); ) {
      let {idx: e5, stack: t4, type: r3} = f3;
      i2 = t4.node, Be2 = c3 = t4.page, He2 = Ne2(t4), u2 = (c3 || i2).reg;
      let a3 = {fail: 0, scope: i2.scope};
      l2 = s2 = 0;
      for (let n4 = e5; n4 < i2.seq.length && !l2; n4++) {
        let o3 = i2.seq[n4], f4 = o3.data;
        switch (o3.type) {
          case "barrier": {
            let a4 = f4.barrierID;
            c3 && (a4 = `${c3.fullID}_${a4}`);
            let o4 = f4.priority;
            if (n4 !== e5 || r3 !== o4) {
              Te2.has(a4) || (Te2.add(a4), ze(n4, t4, o4, a4));
              continue e;
            }
            Te2.delete(a4);
            break;
          }
          case "mov": {
            let e6;
            switch (f4.from) {
              case "stack":
                e6 = Se2(t4);
                break;
              case "a":
              case "b":
                e6 = t4[f4.from];
                break;
              case "value":
                e6 = f4.store;
                break;
              case I2:
                u2[f4.store.id] || (t4.page = c3 = Le2(c3, f4.store.id), u2 = c3 ? c3.reg : i2.reg), e6 = pe2(u2[f4.store.id]);
            }
            switch (f4.to) {
              case "stack":
                t4.value = e6;
                break;
              case "a":
              case "b":
                t4[f4.to] = e6;
                break;
              case I2:
                Qe2(c3, i2, f4.target.id).current = e6;
            }
            break;
          }
          case "check":
            switch (f4.type) {
              case "defined":
                s2 = Se2(t4) === void 0;
                break;
              case "changed":
                s2 = Se2(t4) === pe2(Qe2(c3, i2, f4.store.id));
            }
            break;
          case "filter":
            s2 = !Ve(a3, f4, t4);
            break;
          case "run":
            if (n4 !== e5 || r3 !== "effect") {
              ze(n4, t4, "effect");
              continue e;
            }
          case "compute":
            Ue2 = i2.meta.op === "watch", t4.value = Ve(a3, f4, t4), Ue2 = p3.isWatch;
        }
        l2 = a3.fail || s2;
      }
      if (!l2)
        for (let e6 = 0; e6 < i2.next.length; e6++)
          $e2("child", c3, i2.next[e6], t4, Se2(t4), Ne2(t4));
    }
  Ge2 = p3.isRoot, Be2 = p3.currentPage, He2 = Ne2(p3);
}
function o(e4, t3 = "combine") {
  let r2 = t3 + "(", a2 = "", n3 = 0;
  for (let t4 in e4) {
    let o2 = e4[t4];
    if (o2 != null && (r2 += a2, r2 += $(o2) ? o2.compositeName.fullName : o2.toString()), n3 += 1, n3 === 25)
      break;
    a2 = ", ";
  }
  return r2 += ")", r2;
}
function s(e4, t3) {
  let r2, a2, n3, o2 = e4;
  return t3 ? (n3 = t3.compositeName, e4.length === 0 ? (r2 = n3.path, a2 = n3.fullName) : (r2 = n3.path.concat([e4]), a2 = n3.fullName.length === 0 ? e4 : n3.fullName + "/" + e4)) : (r2 = e4.length === 0 ? [] : [e4], a2 = e4), {shortName: o2, fullName: a2, path: r2};
}
function i(e4, t3) {
  for (let r2 in e4)
    t3(e4[r2], r2);
}
function f(e4, t3) {
  e4.forEach(t3);
}
function c(e4, t3) {
  let r2 = (e5, ...t4) => Be2 ? ((e6, t5, r3, a2) => {
    let n3 = Be2, o3 = null;
    if (t5)
      for (o3 = Be2; o3 && o3.template !== t5; )
        o3 = xe(o3);
    Ke2(o3);
    let l2 = e6.create(r3, a2);
    return Ke2(n3), l2;
  })(r2, o2, e5, t4) : r2.create(e5, t4);
  r2.graphite = a({meta: ht("event", r2, t3, e4), regional: 1}), r2.create = (e5) => (n(He2 ? He2.find(r2) : r2, e5), e5), r2.watch = Z2(ut, r2), r2.map = (e5) => {
    let t4, a2;
    J(e5) && (t4 = e5, a2 = e5.name, e5 = e5.fn);
    let n3 = c(Ye2(r2, a2), t4);
    return yt(r2, n3, E, e5), n3;
  }, r2.filter = (e5) => kt(r2, "filter", e5.fn ? e5 : e5.fn, [se2({fn: he2})]), r2.filterMap = (e5) => kt(r2, "filterMap", e5, [le2({fn: he2}), oe2.defined()]), r2.prepend = (e5) => {
    let t4 = c("* \u2192 " + r2.shortName, {parent: xe(r2)});
    return yt(t4, r2, "prepend", e5), mt(r2, t4), t4;
  };
  let o2 = je2();
  return r2;
}
function u(e4, r2) {
  function o2(e5, t3) {
    p3.off(e5), qe2(p3).set(e5, st(bt(e5, p3, "on", 1, t3, m3)));
  }
  let l2 = ue2(e4), s2 = ue2(e4), i2 = gt("updates"), f3 = je2();
  l2.after = [{type: "copy", to: s2}], f3;
  let c3 = l2.id, p3 = {subscribers: new Map(), updates: i2, defaultState: e4, stateRef: l2, getState() {
    let e5, t3 = l2;
    if (Be2) {
      let t4 = Be2;
      for (; t4 && !t4.reg[c3]; )
        t4 = xe(t4);
      t4 && (e5 = t4);
    }
    return !e5 && He2 && He2.reg[c3] && (e5 = He2), e5 && (t3 = e5.reg[c3]), pe2(t3);
  }, setState(e5) {
    let t3;
    He2 && (t3 = He2.nodeMap[ge2(p3).id]), t3 || (t3 = p3), n({target: t3, params: e5, defer: 1});
  }, reset(...e5) {
    for (let t3 of e5)
      p3.on(t3, () => p3.defaultState);
    return p3;
  }, on(e5, r3) {
    if (t(e5, ".on", "first argument"), Array.isArray(e5))
      for (let t3 of e5)
        o2(t3, r3);
    else
      o2(e5, r3);
    return p3;
  }, off(e5) {
    let t3 = qe2(p3).get(e5);
    return t3 && (t3(), qe2(p3).delete(e5)), p3;
  }, map(e5, t3) {
    let r3, a2, n3;
    J(e5) && (r3 = e5, a2 = e5.name, t3 = e5.firstState, e5 = e5.fn);
    let o3 = p3.getState();
    o3 !== void 0 && (n3 = e5(o3, t3));
    let i3 = u(n3, {name: Ye2(p3, a2), config: r3, strict: 0});
    bt(p3, i3, E, 0, e5);
    return be2(i3).before = [{type: E, fn: e5, from: l2}], i3;
  }, watch(e5, t3) {
    if (!t3 || !$(e5)) {
      let t4 = ut(p3, e5);
      return e5(p3.getState()), t4;
    }
    return K(t3) || B2("second argument should be a function"), e5.watch((e6) => t3(p3.getState(), e6));
  }}, d3 = ht(I2, p3, r2), m3 = p3.defaultConfig.updateFilter;
  return p3.graphite = a({scope: {state: l2}, node: [oe2.defined(), oe2.changed({store: s2}), m3 && ne2({store: s2, to: "a"}), m3 && se2({fn: (e5, t3, {a: r3}) => m3(e5, r3)}), fe2({store: l2}), fe2({store: s2})], child: i2, meta: d3, regional: 1}), dt && e4 === void 0 && B2("current state can't be undefined, use null instead"), Ae2(p3, [i2]), p3;
}
function p(...e4) {
  let t3, r2, a2;
  Ze2(e4[0], (t4, r3) => {
    a2 = t4, e4 = r3;
  });
  let n3, o2, l2 = e4[e4.length - 1];
  if (K(l2) ? (r2 = e4.slice(0, -1), t3 = l2) : r2 = e4, r2.length === 1) {
    let e5 = r2[0];
    W2(e5) || (n3 = e5, o2 = 1);
  }
  return o2 || (n3 = r2, t3 && (t3 = vt(t3))), J(n3) || B2("shape should be an object"), wt(Array.isArray(n3), n3, a2, t3);
}
function d() {
  let e4 = {};
  return e4.req = new Promise((t3, r2) => {
    e4.rs = t3, e4.rj = r2;
  }), e4.req.catch(() => {
  }), e4;
}
function m(e4, t3) {
  let r2 = c(e4, t3), o2 = r2.defaultConfig.handler || (() => B2("no handler used in " + r2.getType())), l2 = ge2(r2);
  l2.meta.onCopy = ["runner"], l2.meta.unit = r2.kind = "effect", r2.use = (e5) => (K(e5) || B2(".use argument should be a function"), o2 = e5, r2);
  let s2 = r2.finally = gt("finally"), i2 = r2.done = s2.filterMap({named: "done", fn({status: e5, params: t4, result: r3}) {
    if (e5 === "done")
      return {params: t4, result: r3};
  }}), f3 = r2.fail = s2.filterMap({named: "fail", fn({status: e5, params: t4, error: r3}) {
    if (e5 === "fail")
      return {params: t4, error: r3};
  }}), p3 = r2.doneData = i2.map({named: "doneData", fn: ({result: e5}) => e5}), m3 = r2.failData = f3.map({named: "failData", fn: ({error: e5}) => e5}), h3 = a({scope: {getHandler: r2.use.getCurrent = () => o2, finally: s2}, node: [ie2({fn({params: e5, req: t4}, {finally: r3, getHandler: a2}, n3) {
    let o3, l3 = St({params: e5, req: t4, ok: 1, anyway: r3, stack: n3}), s3 = St({params: e5, req: t4, ok: 0, anyway: r3, stack: n3});
    try {
      o3 = a2()(e5);
    } catch (e6) {
      return void s3(e6);
    }
    J(o3) && K(o3.then) ? o3.then(l3, s3) : l3(o3);
  }})], meta: {op: "fx", fx: "runner", onCopy: ["finally"]}});
  l2.scope.runner = h3, l2.seq.push(le2({fn: (e5, t4, r3) => xe(r3) ? {params: e5, req: {rs(e6) {
  }, rj(e6) {
  }}} : e5}), ie2({fn: (e5, {runner: t4}, r3) => (n({target: t4, params: e5, defer: 1, forkPage: Ne2(r3)}), e5.params)})), r2.create = (e5) => {
    let t4 = d(), a2 = {params: e5, req: t4};
    if (He2) {
      if (!Ue2) {
        let e6 = He2;
        t4.req.finally(() => {
          Je2(e6);
        }).catch(() => {
        });
      }
      n(He2.find(r2), a2);
    } else
      n(r2, a2);
    return t4.req;
  };
  let g4 = r2.inFlight = u(0, {named: "inFlight"}).on(r2, (e5) => e5 + 1).on(s2, (e5) => e5 - 1), y3 = r2.pending = g4.map({fn: (e5) => e5 > 0, named: "pending"});
  return Ae2(r2, [s2, i2, f3, p3, m3, y3, g4, h3]), r2;
}
function g(...e4) {
  let [[t3, r2], a2] = et(e4), n3 = {};
  return i(r2, (e5, r3) => {
    let o2 = n3[r3] = c(r3, {parent: xe(t3), config: a2});
    t3.on(o2, e5), mt(t3, o2);
  }), n3;
}
function b(e4, r2) {
  let a2 = c(r2 || o(e4, "merge"));
  return t(e4, "merge", "first argument"), ct({from: e4, to: a2, meta: {op: "merge"}}), a2;
}
function v(...e4) {
  let r2, n3, o2, l2, [[s2, i2, d3], m3] = et(e4);
  i2 === void 0 && J(s2) && ((e5) => {
    let t3 = 0;
    return f(Nt, (r3) => {
      r3 in e5 && (e5[r3] == null && B2(`sample: ${r3} should be defined`), t3 = 1);
    }), t3;
  })(s2) && (i2 = s2.clock, d3 = s2.fn, l2 = s2.greedy, r2 = s2.target, n3 = s2.name, o2 = s2.sid, s2 = s2.source);
  let h3 = 1;
  s2 === void 0 && (t(i2, "sample", "clock"), Array.isArray(i2) && (i2 = b(i2)), s2 = i2, h3 = 0), h3 && !$(s2) && (s2 = p(s2)), i2 === void 0 && (i2 = s2), t(i2, "sample", "clock"), n3 = m3 || n3 || s2.shortName;
  let g4 = je2(), y3 = !!r2;
  r2 || (W2(s2) && W2(i2) ? r2 = u(d3 ? d3(pe2(be2(s2)), pe2(be2(i2))) : pe2(be2(s2)), {name: n3, sid: o2}) : (r2 = c(n3), g4));
  let k2 = y3 && $(r2) && ge2(r2).meta.nativeTemplate;
  if (W2(s2)) {
    let e5 = be2(s2);
    Ae2(s2, [ft(i2, r2, {scope: {fn: d3, targetTemplate: k2}, node: [g4, !l2 && ae2({priority: "sampler"}), ne2({store: e5, to: d3 ? "a" : "stack"}), d3 && le2({fn: me2}), g4], meta: {op: "sample", sample: I2}})]), g4;
  } else {
    let e5 = ue2(0), t3 = ue2(), n4 = ue2();
    a({parent: s2, node: [fe2({store: t3}), ne2({from: "value", store: 1, target: e5})], family: {owners: [s2, r2, i2], links: r2}, meta: {op: "sample", sample: "source"}, regional: 1}), Ae2(s2, [ft(i2, r2, {scope: {fn: d3, targetTemplate: k2}, node: [g4, fe2({store: n4}), ne2({store: e5}), se2({fn: (e6) => e6}), !l2 && ae2({priority: "sampler"}), ne2({store: t3}), ne2({store: n4, to: "a"}), d3 && le2({fn: de2}), g4], meta: {op: "sample", sample: "clock"}})]);
  }
  return r2;
}
function w(...e4) {
  let r2 = {op: "guard"}, n3 = "guard", [[o2, l2], s2] = et(e4);
  s2 && (r2.config = s2, s2.name && (n3 = s2.name)), l2 || (l2 = o2, o2 = l2.source);
  let {filter: i2, greedy: f3, clock: u2, name: d3 = n3} = l2, m3 = l2.target || c(d3, r2.config), h3 = $(i2), g4 = 1;
  return o2 === void 0 && (t(u2, "guard", "clock"), Array.isArray(u2) && (u2 = b(u2)), o2 = u2, g4 = 0), g4 && !$(o2) && (o2 = p(o2)), u2 && (t(u2, "guard", "clock"), o2 = v({source: o2, clock: u2, greedy: f3, fn: h3 ? null : (e5, t3) => ({source: e5, clock: t3})})), t(m3, "guard", "target"), h3 ? v({source: i2, clock: o2, target: a({node: [se2({fn: ({guard: e5}) => e5}), le2({fn: ({data: e5}) => e5})], child: m3, meta: r2, family: {owners: [o2, i2, m3, ...[].concat(u2 || [])], links: m3}, regional: 1}), fn: (e5, t3) => ({guard: e5, data: t3}), greedy: f3, name: d3}) : (K(i2) || B2("`filter` should be function or unit"), ft(o2, m3, {scope: {fn: i2}, node: u2 ? [se2({fn: ({source: e5, clock: t3}, {fn: r3}) => r3(e5, t3)}), le2({fn: ({source: e5}) => e5})] : [se2({fn: he2})], meta: r2})), m3;
}
function S2(e4, t3, r2) {
  if (W2(e4))
    return e4;
  if ($(e4)) {
    let a3, n3 = xe(e4);
    return T2(e4) && (a3 = u(t3, {parent: n3, name: e4.shortName, \u0254: r2}).on(e4, (e5, t4) => t4)), H2(e4) && (a3 = u(t3, {parent: n3, name: e4.shortName, \u0254: r2}).on(e4.done, (e5, {result: t4}) => t4)), n3 && n3.hooks.store(a3), a3;
  }
  let a2 = Array.isArray(e4) ? [] : {};
  return i(e4, (e5, t4) => {
    a2[t4] = W2(e5) ? e5 : u(e5, {name: t4});
  }), a2;
}
var _ = typeof Symbol != "undefined" && Symbol.observable || "@@observable";
var I2 = "store";
var M2 = "effect";
var E = "map";
var $ = (e4) => (K(e4) || J(e4)) && "kind" in e4;
var z = (e4) => (t3) => $(t3) && t3.kind === e4;
var W2 = z(I2);
var T2 = z("event");
var H2 = z(M2);
var G2 = z("domain");
var U2 = {__proto__: null, unit: $, store: W2, event: T2, effect: H2, domain: G2};
var B2 = (e4) => {
  throw Error(e4);
};
var J = (e4) => typeof e4 == "object" && e4 !== null;
var K = (e4) => typeof e4 == "function";
var L = (e4) => {
  J(e4) || K(e4) || B2("expect first argument be an object");
};
var Q = () => {
  let e4 = 0;
  return () => (++e4).toString(36);
};
var V2 = Q();
var X2 = Q();
var Y2 = Q();
var Z2 = (e4, t3) => e4.bind(null, t3);
var ee2 = (e4, t3, r2) => e4.bind(null, t3, r2);
var te2 = (e4, t3, r2) => ({id: X2(), type: e4, data: r2, hasRef: t3});
var re2 = 0;
var ae2 = ({priority: e4 = "barrier"}) => te2("barrier", 0, {barrierID: ++re2, priority: e4});
var ne2 = ({from: e4 = I2, store: t3, target: r2, to: a2 = r2 ? I2 : "stack"}) => te2("mov", e4 === I2, {from: e4, store: t3, to: a2, target: r2});
var oe2 = {defined: () => te2("check", 0, {type: "defined"}), changed: ({store: e4}) => te2("check", 1, {type: "changed", store: e4})};
var le2 = ee2(te2, "compute", 0);
var se2 = ee2(te2, "filter", 0);
var ie2 = ee2(te2, "run", 0);
var fe2 = ({store: e4}) => ne2({from: "stack", target: e4});
var ue2 = (e4) => ({id: X2(), current: e4});
var pe2 = ({current: e4}) => e4;
var de2 = (e4, {fn: t3}, {a: r2}) => t3(e4, r2);
var me2 = (e4, {fn: t3}, {a: r2}) => t3(r2, e4);
var he2 = (e4, {fn: t3}) => t3(e4);
var ge2 = (e4) => e4.graphite || e4;
var ye = (e4) => e4.family.owners;
var ke2 = (e4) => e4.family.links;
var be2 = (e4) => e4.stateRef;
var ve2 = (e4) => e4.config;
var we2 = (e4) => e4.\u0254;
var Se2 = (e4) => e4.value;
var qe2 = (e4) => e4.subscribers;
var xe = (e4) => e4.parent;
var Ne2 = (e4) => e4.forkPage;
var Ae2 = (e4, t3) => {
  let r2 = ge2(e4);
  for (let e5 = 0; e5 < t3.length; e5++) {
    let a2 = ge2(t3[e5]);
    r2.family.type !== "domain" && (a2.family.type = "crosslink"), ye(a2).push(r2), ke2(r2).push(a2);
  }
};
var Ce2 = null;
var je2 = () => Ce2;
var Oe2 = (e4) => (e4 && Ce2 && Ce2.sidRoot && (e4 = `${Ce2.sidRoot}\u0254${e4}`), e4);
var Fe2 = (e4 = []) => {
  let t3 = [];
  if (Array.isArray(e4))
    for (let r2 = 0; r2 < e4.length; r2++)
      Array.isArray(e4[r2]) ? t3.push(...e4[r2]) : t3.push(e4[r2]);
  else
    t3.push(e4);
  return t3.map(ge2);
};
var Re2 = ({hasRef: e4, type: t3, data: r2}, a2) => {
  let n3;
  e4 && (n3 = r2.store, a2[n3.id] = n3), t3 === "mov" && r2.to === I2 && (n3 = r2.target, a2[n3.id] = n3);
};
var De2 = null;
var _e = (e4, t3) => {
  if (!e4)
    return t3;
  if (!t3)
    return e4;
  let r2, a2 = e4.v.type === t3.v.type;
  return (a2 && e4.v.id > t3.v.id || !a2 && e4.v.type === "sampler") && (r2 = e4, e4 = t3, t3 = r2), r2 = _e(e4.r, t3), e4.r = e4.l, e4.l = r2, e4;
};
var Ie2 = [];
var Me2 = 0;
for (; Me2 < 5; )
  Ie2.push({first: null, last: null, size: 0}), Me2 += 1;
var Ee2 = () => {
  for (let e4 = 0; e4 < 5; e4++) {
    let t3 = Ie2[e4];
    if (t3.size > 0) {
      if (e4 === 2 || e4 === 3) {
        t3.size -= 1;
        let e5 = De2.v;
        return De2 = _e(De2.l, De2.r), e5;
      }
      t3.size === 1 && (t3.last = null);
      let r2 = t3.first;
      return t3.first = r2.r, t3.size -= 1, r2.v;
    }
  }
};
var $e2 = (e4, t3, r2, a2, n3, o2) => ze(0, {a: null, b: null, node: r2, parent: a2, value: n3, page: t3, forkPage: o2}, e4);
var ze = (e4, t3, r2, a2 = 0) => {
  let n3 = We(r2), o2 = Ie2[n3], l2 = {v: {idx: e4, stack: t3, type: r2, id: a2}, l: 0, r: 0};
  n3 === 2 || n3 === 3 ? De2 = _e(De2, l2) : (o2.size === 0 ? o2.first = l2 : o2.last.r = l2, o2.last = l2), o2.size += 1;
};
var We = (e4) => {
  switch (e4) {
    case "child":
      return 0;
    case "pure":
      return 1;
    case "barrier":
      return 2;
    case "sampler":
      return 3;
    case M2:
      return 4;
    default:
      return -1;
  }
};
var Te2 = new Set();
var He2;
var Ge2 = 1;
var Ue2 = 0;
var Be2 = null;
var Je2 = (e4) => {
  He2 = e4;
};
var Ke2 = (e4) => {
  Be2 = e4;
};
var Le2 = (e4, t3) => {
  if (e4) {
    for (; e4 && !e4.reg[t3]; )
      e4 = xe(e4);
    if (e4)
      return e4;
  }
  return null;
};
var Qe2 = (e4, t3, r2) => (Le2(e4, r2) || t3).reg[r2];
var Ve = (e4, {fn: t3}, r2) => {
  try {
    return t3(Se2(r2), e4.scope, r2);
  } catch (t4) {
    console.error(t4), e4.fail = 1;
  }
};
var Xe2 = (e4, t3) => "" + e4.shortName + t3;
var Ye2 = (e4, t3) => t3 == null ? Xe2(e4, " \u2192 *") : t3;
var Ze2 = (e4, t3) => {
  L(e4), we2(e4) && t3(ve2(e4), we2(e4));
};
var et = (e4) => {
  let t3;
  return Ze2(e4[0], (r2, a2) => {
    t3 = r2, e4 = a2;
  }), [e4, t3];
};
var rt = (e4, t3) => {
  let r2 = e4.indexOf(t3);
  r2 !== -1 && e4.splice(r2, 1);
};
var at = (e4, t3) => {
  rt(e4.next, t3), rt(ye(e4), t3), rt(ke2(e4), t3);
};
var nt = (e4, t3, r2) => {
  let a2;
  e4.next.length = 0, e4.seq.length = 0, e4.scope = null;
  let n3 = ke2(e4);
  for (; a2 = n3.pop(); )
    at(a2, e4), (t3 || r2 && !e4.meta.sample || a2.family.type === "crosslink") && nt(a2, t3, a2.meta.op !== "on" && r2);
  for (n3 = ye(e4); a2 = n3.pop(); )
    at(a2, e4), r2 && a2.family.type === "crosslink" && nt(a2, t3, a2.meta.op !== "on" && r2);
};
var ot = (e4) => e4.clear();
var lt = (e4, {deep: t3} = {}) => {
  let r2 = 0;
  if (e4.ownerSet && e4.ownerSet.delete(e4), W2(e4))
    ot(qe2(e4));
  else if (G2(e4)) {
    r2 = 1;
    let t4 = e4.history;
    ot(t4.events), ot(t4.effects), ot(t4.stores), ot(t4.domains);
  }
  nt(ge2(e4), !!t3, r2);
};
var st = (e4) => {
  let t3 = ee2(lt, e4, void 0);
  return t3.unsubscribe = t3, t3;
};
var ft = (e4, t3, {node: r2, scope: n3, meta: o2}) => a({node: r2, parent: e4, child: t3, scope: n3, meta: o2, family: {owners: [e4, t3], links: t3}, regional: 1});
var ct = (e4) => {
  let r2;
  Ze2(e4, (t3, a2) => {
    r2 = t3, e4 = a2;
  });
  let {from: n3, to: o2, meta: l2 = {op: "forward"}} = e4;
  return t(n3, "forward", '"from"'), t(o2, "forward", '"to"'), r2 && (l2.config = r2), st(a({parent: n3, child: o2, meta: l2, family: {}, regional: 1}));
};
var ut = (e4, t3) => {
  if (K(t3) || B2(".watch argument should be a function"), He2) {
    let t4 = He2.nodeMap[ge2(e4).id];
    t4 && (e4 = t4);
  }
  return st(a({scope: {fn: t3}, node: [ie2({fn: he2})], parent: e4, meta: {op: "watch"}, family: {owners: e4}, regional: 1}));
};
var pt = (e4, t3) => (J(e4) && (pt(ve2(e4), t3), e4.name != null && (J(e4.name) ? pt(e4.name, t3) : K(e4.name) ? t3.handler = e4.name : t3.name = e4.name), e4.loc && (t3.loc = e4.loc), (e4.sid || e4.sid === null) && (t3.sid = e4.sid), e4.handler && (t3.handler = e4.handler), e4.updateFilter && (t3.updateFilter = e4.updateFilter), xe(e4) && (t3.parent = xe(e4)), "strict" in e4 && (t3.strict = e4.strict), e4.named && (t3.named = e4.named), pt(we2(e4), t3)), t3);
var dt;
var mt = (e4, t3, r2 = "event") => {
  xe(e4) && xe(e4).hooks[r2](t3);
};
var ht = (e4, t3, r2, a2) => {
  let n3 = pt({name: a2, config: r2}, {}), o2 = e4 === "domain", l2 = V2(), {parent: i2 = null, sid: f3 = null, strict: c3 = 1, named: u2 = null} = n3, p3 = u2 || n3.name || (o2 ? "" : l2), d3 = s(p3, i2), m3 = {unit: t3.kind = e4, name: t3.shortName = p3, sid: t3.sid = Oe2(f3), named: u2, unitId: t3.id = l2};
  if (t3.parent = i2, t3.compositeName = d3, t3.defaultConfig = n3, t3.thru = (e5) => e5(t3), t3.getType = () => d3.fullName, !o2) {
    t3.subscribe = (e5) => (L(e5), t3.watch(K(e5) ? e5 : (t4) => {
      e5.next && e5.next(t4);
    })), t3[_] = () => t3;
  }
  return dt = c3, m3;
};
var gt = (e4) => c({named: e4});
var yt = (e4, t3, r2, a2) => ft(e4, t3, {scope: {fn: a2}, node: [le2({fn: he2})], meta: {op: r2}});
var kt = (e4, t3, r2, a2) => {
  let n3;
  J(r2) && (n3 = r2, r2 = r2.fn);
  let o2 = c(Xe2(e4, " \u2192? *"), n3);
  return ft(e4, o2, {scope: {fn: r2}, node: a2, meta: {op: t3}}), o2;
};
var bt = (e4, t3, r2, a2, n3, o2) => {
  let l2 = be2(t3), s2 = [ne2({store: l2, to: "a"}), le2({fn: a2 ? me2 : de2}), oe2.defined(), oe2.changed({store: l2}), o2 && se2({fn: (e5, t4, {a: r3}) => o2(e5, r3)}), fe2({store: l2})];
  return ft(e4, t3, {scope: {fn: n3}, node: s2, meta: {op: r2}});
};
var vt = (e4) => (t3) => e4(...t3);
var wt = (e4, t3, r2, a2) => {
  let n3 = e4 ? (e5) => e5.slice() : (e5) => ({...e5}), l2 = e4 ? [] : {}, s2 = je2(), f3 = n3(l2), c3 = ue2(f3), p3 = ue2(1);
  c3.type = e4 ? "list" : "shape", s2;
  let d3 = u(f3, {name: r2 || o(t3)});
  ge2(d3).meta.isCombine = 1;
  let m3 = [oe2.defined(), ne2({store: c3, to: "a"}), se2({fn: (e5, {key: t4}, {a: r3}) => e5 !== r3[t4]}), ne2({store: p3, to: "b"}), le2({fn(e5, {clone: t4, key: r3}, a3) {
    a3.b && (a3.a = t4(a3.a)), a3.a[r3] = e5;
  }}), ne2({from: "a", target: c3}), ne2({from: "value", store: 0, target: p3}), ae2({priority: "barrier"}), ne2({from: "value", store: 1, target: p3}), ne2({store: c3}), a2 && le2({fn: a2}), oe2.changed({store: be2(d3)})], h3 = c3.before = [];
  return i(t3, (e5, t4) => {
    if (!W2(e5))
      return void (f3[t4] = l2[t4] = e5);
    l2[t4] = e5.defaultState, f3[t4] = e5.getState();
    ft(e5, d3, {scope: {key: t4, clone: n3}, node: m3, meta: {op: "combine"}});
    let a3 = be2(e5);
    h3.push({type: "field", field: t4, from: a3}), s2;
  }), d3.defaultShape = t3, c3.after = [a2 ? {type: E, to: be2(d3), fn: a2} : {type: "copy", to: be2(d3)}], d3.defaultState = a2 ? be2(d3).current = a2(f3) : l2, d3;
};
var St = ({params: e4, req: t3, ok: r2, anyway: a2, stack: o2}) => (l2) => n({target: [a2, qt], params: [r2 ? {status: "done", params: e4, result: l2} : {status: "fail", params: e4, error: l2}, {fn: r2 ? t3.rs : t3.rj, value: l2}], defer: 1, page: o2.page, forkPage: Ne2(o2)});
var qt = a({node: [ie2({fn({fn: e4, value: t3}) {
  e4(t3);
}})], meta: {op: "fx", fx: "sidechain"}});
var Nt = ["source", "clock", "target"];

// _snowpack/pkg/effector-react.js
function e2(e4) {
  U2.store(e4) || g2("expect useStore argument to be a store");
  let t3 = react.useRef(e4), n3 = react.useState(e4.getState())[1];
  return h(() => (t3.current === e4 && n3(e4.getState()), t3.current = e4, e4.updates.watch(n3)), [e4]), e4.getState();
}
var h = typeof window != "undefined" ? react.useLayoutEffect : react.useEffect;
var g2 = (e4) => {
  throw Error(e4);
};

// _snowpack/pkg/styled-components.js
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
var globalContext;
if (typeof window !== "undefined") {
  globalContext = window;
} else if (typeof self !== "undefined") {
  globalContext = self;
} else {
  globalContext = {};
}
if (typeof globalContext.setTimeout === "function") {
  cachedSetTimeout = setTimeout;
}
if (typeof globalContext.clearTimeout === "function") {
  cachedClearTimeout = clearTimeout;
}
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    return setTimeout(fun, 0);
  }
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    return cachedSetTimeout(fun, 0);
  } catch (e4) {
    try {
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e5) {
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    return clearTimeout(marker);
  }
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    return cachedClearTimeout(marker);
  } catch (e4) {
    try {
      return cachedClearTimeout.call(null, marker);
    } catch (e5) {
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
function nextTick(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      args[i2 - 1] = arguments[i2];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function() {
  this.fun.apply(null, this.array);
};
var title = "browser";
var platform = "browser";
var browser = true;
var argv = [];
var version2 = "";
var versions = {};
var release = {};
var config = {};
function noop() {
}
var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;
function binding(name) {
  throw new Error("process.binding is not supported");
}
function cwd() {
  return "/";
}
function chdir(dir) {
  throw new Error("process.chdir is not supported");
}
function umask() {
  return 0;
}
var performance2 = globalContext.performance || {};
var performanceNow = performance2.now || performance2.mozNow || performance2.msNow || performance2.oNow || performance2.webkitNow || function() {
  return new Date().getTime();
};
function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance2) * 1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor(clocktime % 1 * 1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds, nanoseconds];
}
var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1e3;
}
var process = {
  nextTick,
  title,
  browser,
  env: {NODE_ENV: "production"},
  argv,
  version: version2,
  versions,
  on,
  addListener,
  once,
  off,
  removeListener,
  removeAllListeners,
  emit,
  binding,
  cwd,
  chdir,
  umask,
  hrtime,
  platform,
  release,
  config,
  uptime
};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b2 = typeof Symbol === "function" && Symbol.for;
var c2 = b2 ? Symbol.for("react.element") : 60103;
var d2 = b2 ? Symbol.for("react.portal") : 60106;
var e3 = b2 ? Symbol.for("react.fragment") : 60107;
var f2 = b2 ? Symbol.for("react.strict_mode") : 60108;
var g3 = b2 ? Symbol.for("react.profiler") : 60114;
var h2 = b2 ? Symbol.for("react.provider") : 60109;
var k = b2 ? Symbol.for("react.context") : 60110;
var l = b2 ? Symbol.for("react.async_mode") : 60111;
var m2 = b2 ? Symbol.for("react.concurrent_mode") : 60111;
var n2 = b2 ? Symbol.for("react.forward_ref") : 60112;
var p2 = b2 ? Symbol.for("react.suspense") : 60113;
var q = b2 ? Symbol.for("react.suspense_list") : 60120;
var r = b2 ? Symbol.for("react.memo") : 60115;
var t2 = b2 ? Symbol.for("react.lazy") : 60116;
var v2 = b2 ? Symbol.for("react.block") : 60121;
var w2 = b2 ? Symbol.for("react.fundamental") : 60117;
var x = b2 ? Symbol.for("react.responder") : 60118;
var y2 = b2 ? Symbol.for("react.scope") : 60119;
function z2(a2) {
  if (typeof a2 === "object" && a2 !== null) {
    var u2 = a2.$$typeof;
    switch (u2) {
      case c2:
        switch (a2 = a2.type, a2) {
          case l:
          case m2:
          case e3:
          case g3:
          case f2:
          case p2:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k:
              case n2:
              case t2:
              case r:
              case h2:
                return a2;
              default:
                return u2;
            }
        }
      case d2:
        return u2;
    }
  }
}
function A(a2) {
  return z2(a2) === m2;
}
var AsyncMode = l;
var ConcurrentMode = m2;
var ContextConsumer = k;
var ContextProvider = h2;
var Element = c2;
var ForwardRef = n2;
var Fragment = e3;
var Lazy = t2;
var Memo = r;
var Portal = d2;
var Profiler = g3;
var StrictMode = f2;
var Suspense = p2;
var isAsyncMode = function(a2) {
  return A(a2) || z2(a2) === l;
};
var isConcurrentMode = A;
var isContextConsumer = function(a2) {
  return z2(a2) === k;
};
var isContextProvider = function(a2) {
  return z2(a2) === h2;
};
var isElement = function(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === c2;
};
var isForwardRef = function(a2) {
  return z2(a2) === n2;
};
var isFragment = function(a2) {
  return z2(a2) === e3;
};
var isLazy = function(a2) {
  return z2(a2) === t2;
};
var isMemo = function(a2) {
  return z2(a2) === r;
};
var isPortal = function(a2) {
  return z2(a2) === d2;
};
var isProfiler = function(a2) {
  return z2(a2) === g3;
};
var isStrictMode = function(a2) {
  return z2(a2) === f2;
};
var isSuspense = function(a2) {
  return z2(a2) === p2;
};
var isValidElementType = function(a2) {
  return typeof a2 === "string" || typeof a2 === "function" || a2 === e3 || a2 === m2 || a2 === g3 || a2 === f2 || a2 === p2 || a2 === q || typeof a2 === "object" && a2 !== null && (a2.$$typeof === t2 || a2.$$typeof === r || a2.$$typeof === h2 || a2.$$typeof === k || a2.$$typeof === n2 || a2.$$typeof === w2 || a2.$$typeof === x || a2.$$typeof === y2 || a2.$$typeof === v2);
};
var typeOf = z2;
var reactIs_production_min = {
  AsyncMode,
  ConcurrentMode,
  ContextConsumer,
  ContextProvider,
  Element,
  ForwardRef,
  Fragment,
  Lazy,
  Memo,
  Portal,
  Profiler,
  StrictMode,
  Suspense,
  isAsyncMode,
  isConcurrentMode,
  isContextConsumer,
  isContextProvider,
  isElement,
  isForwardRef,
  isFragment,
  isLazy,
  isMemo,
  isPortal,
  isProfiler,
  isStrictMode,
  isSuspense,
  isValidElementType,
  typeOf
};
var reactIs = createCommonjsModule(function(module) {
  {
    module.exports = reactIs_production_min;
  }
});
function stylis_min(W4) {
  function M4(d3, c3, e4, h3, a2) {
    for (var m3 = 0, b3 = 0, v3 = 0, n3 = 0, q2, g4, x2 = 0, K3 = 0, k2, u2 = k2 = q2 = 0, l2 = 0, r2 = 0, I4 = 0, t3 = 0, B5 = e4.length, J3 = B5 - 1, y3, f3 = "", p3 = "", F4 = "", G5 = "", C; l2 < B5; ) {
      g4 = e4.charCodeAt(l2);
      l2 === J3 && b3 + n3 + v3 + m3 !== 0 && (b3 !== 0 && (g4 = b3 === 47 ? 10 : 47), n3 = v3 = m3 = 0, B5++, J3++);
      if (b3 + n3 + v3 + m3 === 0) {
        if (l2 === J3 && (0 < r2 && (f3 = f3.replace(N3, "")), 0 < f3.trim().length)) {
          switch (g4) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f3 += e4.charAt(l2);
          }
          g4 = 59;
        }
        switch (g4) {
          case 123:
            f3 = f3.trim();
            q2 = f3.charCodeAt(0);
            k2 = 1;
            for (t3 = ++l2; l2 < B5; ) {
              switch (g4 = e4.charCodeAt(l2)) {
                case 123:
                  k2++;
                  break;
                case 125:
                  k2--;
                  break;
                case 47:
                  switch (g4 = e4.charCodeAt(l2 + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u2 = l2 + 1; u2 < J3; ++u2) {
                          switch (e4.charCodeAt(u2)) {
                            case 47:
                              if (g4 === 42 && e4.charCodeAt(u2 - 1) === 42 && l2 + 2 !== u2) {
                                l2 = u2 + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (g4 === 47) {
                                l2 = u2 + 1;
                                break a;
                              }
                          }
                        }
                        l2 = u2;
                      }
                  }
                  break;
                case 91:
                  g4++;
                case 40:
                  g4++;
                case 34:
                case 39:
                  for (; l2++ < J3 && e4.charCodeAt(l2) !== g4; ) {
                  }
              }
              if (k2 === 0)
                break;
              l2++;
            }
            k2 = e4.substring(t3, l2);
            q2 === 0 && (q2 = (f3 = f3.replace(ca2, "").trim()).charCodeAt(0));
            switch (q2) {
              case 64:
                0 < r2 && (f3 = f3.replace(N3, ""));
                g4 = f3.charCodeAt(1);
                switch (g4) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r2 = c3;
                    break;
                  default:
                    r2 = O2;
                }
                k2 = M4(c3, r2, k2, g4, a2 + 1);
                t3 = k2.length;
                0 < A2 && (r2 = X4(O2, f3, I4), C = H4(3, k2, r2, c3, D2, z3, t3, g4, a2, h3), f3 = r2.join(""), C !== void 0 && (t3 = (k2 = C.trim()).length) === 0 && (g4 = 0, k2 = ""));
                if (0 < t3)
                  switch (g4) {
                    case 115:
                      f3 = f3.replace(da2, ea2);
                    case 100:
                    case 109:
                    case 45:
                      k2 = f3 + "{" + k2 + "}";
                      break;
                    case 107:
                      f3 = f3.replace(fa2, "$1 $2");
                      k2 = f3 + "{" + k2 + "}";
                      k2 = w3 === 1 || w3 === 2 && L3("@" + k2, 3) ? "@-webkit-" + k2 + "@" + k2 : "@" + k2;
                      break;
                    default:
                      k2 = f3 + k2, h3 === 112 && (k2 = (p3 += k2, ""));
                  }
                else
                  k2 = "";
                break;
              default:
                k2 = M4(c3, X4(c3, f3, I4), k2, h3, a2 + 1);
            }
            F4 += k2;
            k2 = I4 = r2 = u2 = q2 = 0;
            f3 = "";
            g4 = e4.charCodeAt(++l2);
            break;
          case 125:
          case 59:
            f3 = (0 < r2 ? f3.replace(N3, "") : f3).trim();
            if (1 < (t3 = f3.length))
              switch (u2 === 0 && (q2 = f3.charCodeAt(0), q2 === 45 || 96 < q2 && 123 > q2) && (t3 = (f3 = f3.replace(" ", ":")).length), 0 < A2 && (C = H4(1, f3, c3, d3, D2, z3, p3.length, h3, a2, h3)) !== void 0 && (t3 = (f3 = C.trim()).length) === 0 && (f3 = "\0\0"), q2 = f3.charCodeAt(0), g4 = f3.charCodeAt(1), q2) {
                case 0:
                  break;
                case 64:
                  if (g4 === 105 || g4 === 99) {
                    G5 += f3 + e4.charAt(l2);
                    break;
                  }
                default:
                  f3.charCodeAt(t3 - 1) !== 58 && (p3 += P3(f3, q2, g4, f3.charCodeAt(2)));
              }
            I4 = r2 = u2 = q2 = 0;
            f3 = "";
            g4 = e4.charCodeAt(++l2);
        }
      }
      switch (g4) {
        case 13:
        case 10:
          b3 === 47 ? b3 = 0 : 1 + q2 === 0 && h3 !== 107 && 0 < f3.length && (r2 = 1, f3 += "\0");
          0 < A2 * Y4 && H4(0, f3, c3, d3, D2, z3, p3.length, h3, a2, h3);
          z3 = 1;
          D2++;
          break;
        case 59:
        case 125:
          if (b3 + n3 + v3 + m3 === 0) {
            z3++;
            break;
          }
        default:
          z3++;
          y3 = e4.charAt(l2);
          switch (g4) {
            case 9:
            case 32:
              if (n3 + m3 + b3 === 0)
                switch (x2) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    y3 = "";
                    break;
                  default:
                    g4 !== 32 && (y3 = " ");
                }
              break;
            case 0:
              y3 = "\\0";
              break;
            case 12:
              y3 = "\\f";
              break;
            case 11:
              y3 = "\\v";
              break;
            case 38:
              n3 + b3 + m3 === 0 && (r2 = I4 = 1, y3 = "\f" + y3);
              break;
            case 108:
              if (n3 + b3 + m3 + E3 === 0 && 0 < u2)
                switch (l2 - u2) {
                  case 2:
                    x2 === 112 && e4.charCodeAt(l2 - 3) === 58 && (E3 = x2);
                  case 8:
                    K3 === 111 && (E3 = K3);
                }
              break;
            case 58:
              n3 + b3 + m3 === 0 && (u2 = l2);
              break;
            case 44:
              b3 + v3 + n3 + m3 === 0 && (r2 = 1, y3 += "\r");
              break;
            case 34:
            case 39:
              b3 === 0 && (n3 = n3 === g4 ? 0 : n3 === 0 ? g4 : n3);
              break;
            case 91:
              n3 + b3 + v3 === 0 && m3++;
              break;
            case 93:
              n3 + b3 + v3 === 0 && m3--;
              break;
            case 41:
              n3 + b3 + m3 === 0 && v3--;
              break;
            case 40:
              if (n3 + b3 + m3 === 0) {
                if (q2 === 0)
                  switch (2 * x2 + 3 * K3) {
                    case 533:
                      break;
                    default:
                      q2 = 1;
                  }
                v3++;
              }
              break;
            case 64:
              b3 + v3 + n3 + m3 + u2 + k2 === 0 && (k2 = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n3 + m3 + v3))
                switch (b3) {
                  case 0:
                    switch (2 * g4 + 3 * e4.charCodeAt(l2 + 1)) {
                      case 235:
                        b3 = 47;
                        break;
                      case 220:
                        t3 = l2, b3 = 42;
                    }
                    break;
                  case 42:
                    g4 === 47 && x2 === 42 && t3 + 2 !== l2 && (e4.charCodeAt(t3 + 2) === 33 && (p3 += e4.substring(t3, l2 + 1)), y3 = "", b3 = 0);
                }
          }
          b3 === 0 && (f3 += y3);
      }
      K3 = x2;
      x2 = g4;
      l2++;
    }
    t3 = p3.length;
    if (0 < t3) {
      r2 = c3;
      if (0 < A2 && (C = H4(2, p3, r2, d3, D2, z3, t3, h3, a2, h3), C !== void 0 && (p3 = C).length === 0))
        return G5 + p3 + F4;
      p3 = r2.join(",") + "{" + p3 + "}";
      if (w3 * E3 !== 0) {
        w3 !== 2 || L3(p3, 2) || (E3 = 0);
        switch (E3) {
          case 111:
            p3 = p3.replace(ha2, ":-moz-$1") + p3;
            break;
          case 112:
            p3 = p3.replace(Q3, "::-webkit-input-$1") + p3.replace(Q3, "::-moz-$1") + p3.replace(Q3, ":-ms-input-$1") + p3;
        }
        E3 = 0;
      }
    }
    return G5 + p3 + F4;
  }
  function X4(d3, c3, e4) {
    var h3 = c3.trim().split(ia2);
    c3 = h3;
    var a2 = h3.length, m3 = d3.length;
    switch (m3) {
      case 0:
      case 1:
        var b3 = 0;
        for (d3 = m3 === 0 ? "" : d3[0] + " "; b3 < a2; ++b3) {
          c3[b3] = Z4(d3, c3[b3], e4).trim();
        }
        break;
      default:
        var v3 = b3 = 0;
        for (c3 = []; b3 < a2; ++b3) {
          for (var n3 = 0; n3 < m3; ++n3) {
            c3[v3++] = Z4(d3[n3] + " ", h3[b3], e4).trim();
          }
        }
    }
    return c3;
  }
  function Z4(d3, c3, e4) {
    var h3 = c3.charCodeAt(0);
    33 > h3 && (h3 = (c3 = c3.trim()).charCodeAt(0));
    switch (h3) {
      case 38:
        return c3.replace(F3, "$1" + d3.trim());
      case 58:
        return d3.trim() + c3.replace(F3, "$1" + d3.trim());
      default:
        if (0 < 1 * e4 && 0 < c3.indexOf("\f"))
          return c3.replace(F3, (d3.charCodeAt(0) === 58 ? "" : "$1") + d3.trim());
    }
    return d3 + c3;
  }
  function P3(d3, c3, e4, h3) {
    var a2 = d3 + ";", m3 = 2 * c3 + 3 * e4 + 4 * h3;
    if (m3 === 944) {
      d3 = a2.indexOf(":", 9) + 1;
      var b3 = a2.substring(d3, a2.length - 1).trim();
      b3 = a2.substring(0, d3).trim() + b3 + ";";
      return w3 === 1 || w3 === 2 && L3(b3, 1) ? "-webkit-" + b3 + b3 : b3;
    }
    if (w3 === 0 || w3 === 2 && !L3(a2, 1))
      return a2;
    switch (m3) {
      case 1015:
        return a2.charCodeAt(10) === 97 ? "-webkit-" + a2 + a2 : a2;
      case 951:
        return a2.charCodeAt(3) === 116 ? "-webkit-" + a2 + a2 : a2;
      case 963:
        return a2.charCodeAt(5) === 110 ? "-webkit-" + a2 + a2 : a2;
      case 1009:
        if (a2.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + a2 + a2;
      case 978:
        return "-webkit-" + a2 + "-moz-" + a2 + a2;
      case 1019:
      case 983:
        return "-webkit-" + a2 + "-moz-" + a2 + "-ms-" + a2 + a2;
      case 883:
        if (a2.charCodeAt(8) === 45)
          return "-webkit-" + a2 + a2;
        if (0 < a2.indexOf("image-set(", 11))
          return a2.replace(ja2, "$1-webkit-$2") + a2;
        break;
      case 932:
        if (a2.charCodeAt(4) === 45)
          switch (a2.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + a2.replace("-grow", "") + "-webkit-" + a2 + "-ms-" + a2.replace("grow", "positive") + a2;
            case 115:
              return "-webkit-" + a2 + "-ms-" + a2.replace("shrink", "negative") + a2;
            case 98:
              return "-webkit-" + a2 + "-ms-" + a2.replace("basis", "preferred-size") + a2;
          }
        return "-webkit-" + a2 + "-ms-" + a2 + a2;
      case 964:
        return "-webkit-" + a2 + "-ms-flex-" + a2 + a2;
      case 1023:
        if (a2.charCodeAt(8) !== 99)
          break;
        b3 = a2.substring(a2.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
        return "-webkit-box-pack" + b3 + "-webkit-" + a2 + "-ms-flex-pack" + b3 + a2;
      case 1005:
        return ka2.test(a2) ? a2.replace(aa, ":-webkit-") + a2.replace(aa, ":-moz-") + a2 : a2;
      case 1e3:
        b3 = a2.substring(13).trim();
        c3 = b3.indexOf("-") + 1;
        switch (b3.charCodeAt(0) + b3.charCodeAt(c3)) {
          case 226:
            b3 = a2.replace(G4, "tb");
            break;
          case 232:
            b3 = a2.replace(G4, "tb-rl");
            break;
          case 220:
            b3 = a2.replace(G4, "lr");
            break;
          default:
            return a2;
        }
        return "-webkit-" + a2 + "-ms-" + b3 + a2;
      case 1017:
        if (a2.indexOf("sticky", 9) === -1)
          break;
      case 975:
        c3 = (a2 = d3).length - 10;
        b3 = (a2.charCodeAt(c3) === 33 ? a2.substring(0, c3) : a2).substring(d3.indexOf(":", 7) + 1).trim();
        switch (m3 = b3.charCodeAt(0) + (b3.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b3.charCodeAt(8))
              break;
          case 115:
            a2 = a2.replace(b3, "-webkit-" + b3) + ";" + a2;
            break;
          case 207:
          case 102:
            a2 = a2.replace(b3, "-webkit-" + (102 < m3 ? "inline-" : "") + "box") + ";" + a2.replace(b3, "-webkit-" + b3) + ";" + a2.replace(b3, "-ms-" + b3 + "box") + ";" + a2;
        }
        return a2 + ";";
      case 938:
        if (a2.charCodeAt(5) === 45)
          switch (a2.charCodeAt(6)) {
            case 105:
              return b3 = a2.replace("-items", ""), "-webkit-" + a2 + "-webkit-box-" + b3 + "-ms-flex-" + b3 + a2;
            case 115:
              return "-webkit-" + a2 + "-ms-flex-item-" + a2.replace(ba2, "") + a2;
            default:
              return "-webkit-" + a2 + "-ms-flex-line-pack" + a2.replace("align-content", "").replace(ba2, "") + a2;
          }
        break;
      case 973:
      case 989:
        if (a2.charCodeAt(3) !== 45 || a2.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (la2.test(d3) === true)
          return (b3 = d3.substring(d3.indexOf(":") + 1)).charCodeAt(0) === 115 ? P3(d3.replace("stretch", "fill-available"), c3, e4, h3).replace(":fill-available", ":stretch") : a2.replace(b3, "-webkit-" + b3) + a2.replace(b3, "-moz-" + b3.replace("fill-", "")) + a2;
        break;
      case 962:
        if (a2 = "-webkit-" + a2 + (a2.charCodeAt(5) === 102 ? "-ms-" + a2 : "") + a2, e4 + h3 === 211 && a2.charCodeAt(13) === 105 && 0 < a2.indexOf("transform", 10))
          return a2.substring(0, a2.indexOf(";", 27) + 1).replace(ma2, "$1-webkit-$2") + a2;
    }
    return a2;
  }
  function L3(d3, c3) {
    var e4 = d3.indexOf(c3 === 1 ? ":" : "{"), h3 = d3.substring(0, c3 !== 3 ? e4 : 10);
    e4 = d3.substring(e4 + 1, d3.length - 1);
    return R2(c3 !== 2 ? h3 : h3.replace(na2, "$1"), e4, c3);
  }
  function ea2(d3, c3) {
    var e4 = P3(c3, c3.charCodeAt(0), c3.charCodeAt(1), c3.charCodeAt(2));
    return e4 !== c3 + ";" ? e4.replace(oa2, " or ($1)").substring(4) : "(" + c3 + ")";
  }
  function H4(d3, c3, e4, h3, a2, m3, b3, v3, n3, q2) {
    for (var g4 = 0, x2 = c3, w4; g4 < A2; ++g4) {
      switch (w4 = S4[g4].call(B4, d3, x2, e4, h3, a2, m3, b3, v3, n3, q2)) {
        case void 0:
        case false:
        case true:
        case null:
          break;
        default:
          x2 = w4;
      }
    }
    if (x2 !== c3)
      return x2;
  }
  function T4(d3) {
    switch (d3) {
      case void 0:
      case null:
        A2 = S4.length = 0;
        break;
      default:
        if (typeof d3 === "function")
          S4[A2++] = d3;
        else if (typeof d3 === "object")
          for (var c3 = 0, e4 = d3.length; c3 < e4; ++c3) {
            T4(d3[c3]);
          }
        else
          Y4 = !!d3 | 0;
    }
    return T4;
  }
  function U4(d3) {
    d3 = d3.prefix;
    d3 !== void 0 && (R2 = null, d3 ? typeof d3 !== "function" ? w3 = 1 : (w3 = 2, R2 = d3) : w3 = 0);
    return U4;
  }
  function B4(d3, c3) {
    var e4 = d3;
    33 > e4.charCodeAt(0) && (e4 = e4.trim());
    V4 = e4;
    e4 = [V4];
    if (0 < A2) {
      var h3 = H4(-1, c3, e4, e4, D2, z3, 0, 0, 0, 0);
      h3 !== void 0 && typeof h3 === "string" && (c3 = h3);
    }
    var a2 = M4(O2, e4, c3, 0, 0);
    0 < A2 && (h3 = H4(-2, a2, e4, e4, D2, z3, a2.length, 0, 0, 0), h3 !== void 0 && (a2 = h3));
    V4 = "";
    E3 = 0;
    z3 = D2 = 1;
    return a2;
  }
  var ca2 = /^\0+/g, N3 = /[\0\r\f]/g, aa = /: */g, ka2 = /zoo|gra/, ma2 = /([,: ])(transform)/g, ia2 = /,\r+?/g, F3 = /([\t\r\n ])*\f?&/g, fa2 = /@(k\w+)\s*(\S*)\s*/, Q3 = /::(place)/g, ha2 = /:(read-only)/g, G4 = /[svh]\w+-[tblr]{2}/, da2 = /\(\s*(.*)\s*\)/g, oa2 = /([\s\S]*?);/g, ba2 = /-self|flex-/g, na2 = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la2 = /stretch|:\s*\w+\-(?:conte|avail)/, ja2 = /([^-])(image-set\()/, z3 = 1, D2 = 1, E3 = 0, w3 = 1, O2 = [], S4 = [], A2 = 0, R2 = null, Y4 = 0, V4 = "";
  B4.use = T4;
  B4.set = U4;
  W4 !== void 0 && U4(W4);
  return B4;
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function memoize(fn) {
  var cache = {};
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var index = memoize(function(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols2 = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols2) {
      keys = keys.concat(getOwnPropertySymbols2(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i2 = 0; i2 < keys.length; ++i2) {
      var key = keys[i2];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e4) {
        }
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;
function v$1() {
  return (v$1 = Object.assign || function(e4) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n3 = arguments[t3];
      for (var r2 in n3)
        Object.prototype.hasOwnProperty.call(n3, r2) && (e4[r2] = n3[r2]);
    }
    return e4;
  }).apply(this, arguments);
}
var g$1 = function(e4, t3) {
  for (var n3 = [e4[0]], r2 = 0, o2 = t3.length; r2 < o2; r2 += 1)
    n3.push(t3[r2], e4[r2 + 1]);
  return n3;
};
var S3 = function(t3) {
  return t3 !== null && typeof t3 == "object" && (t3.toString ? t3.toString() : Object.prototype.toString.call(t3)) === "[object Object]" && !reactIs.typeOf(t3);
};
var w$1 = Object.freeze([]);
var E2 = Object.freeze({});
function b$1(e4) {
  return typeof e4 == "function";
}
function _2(e4) {
  return e4.displayName || e4.name || "Component";
}
function N2(e4) {
  return e4 && typeof e4.styledComponentId == "string";
}
var A$1 = typeof process != "undefined" && process.env.SC_ATTR || "data-styled";
var I3 = typeof window != "undefined" && "HTMLElement" in window;
var P2 = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY : false);
function j(e4) {
  for (var t3 = arguments.length, n3 = new Array(t3 > 1 ? t3 - 1 : 0), r2 = 1; r2 < t3; r2++)
    n3[r2 - 1] = arguments[r2];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e4 + " for more information." + (n3.length > 0 ? " Args: " + n3.join(", ") : ""));
}
var T3 = function() {
  function e4(e5) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e5;
  }
  var t3 = e4.prototype;
  return t3.indexOfGroup = function(e5) {
    for (var t4 = 0, n3 = 0; n3 < e5; n3++)
      t4 += this.groupSizes[n3];
    return t4;
  }, t3.insertRules = function(e5, t4) {
    if (e5 >= this.groupSizes.length) {
      for (var n3 = this.groupSizes, r2 = n3.length, o2 = r2; e5 >= o2; )
        (o2 <<= 1) < 0 && j(16, "" + e5);
      this.groupSizes = new Uint32Array(o2), this.groupSizes.set(n3), this.length = o2;
      for (var s2 = r2; s2 < o2; s2++)
        this.groupSizes[s2] = 0;
    }
    for (var i2 = this.indexOfGroup(e5 + 1), a2 = 0, c3 = t4.length; a2 < c3; a2++)
      this.tag.insertRule(i2, t4[a2]) && (this.groupSizes[e5]++, i2++);
  }, t3.clearGroup = function(e5) {
    if (e5 < this.length) {
      var t4 = this.groupSizes[e5], n3 = this.indexOfGroup(e5), r2 = n3 + t4;
      this.groupSizes[e5] = 0;
      for (var o2 = n3; o2 < r2; o2++)
        this.tag.deleteRule(n3);
    }
  }, t3.getGroup = function(e5) {
    var t4 = "";
    if (e5 >= this.length || this.groupSizes[e5] === 0)
      return t4;
    for (var n3 = this.groupSizes[e5], r2 = this.indexOfGroup(e5), o2 = r2 + n3, s2 = r2; s2 < o2; s2++)
      t4 += this.tag.getRule(s2) + "/*!sc*/\n";
    return t4;
  }, e4;
}();
var k$1 = new Map();
var x$1 = new Map();
var V3 = 1;
var B3 = function(e4) {
  if (k$1.has(e4))
    return k$1.get(e4);
  for (; x$1.has(V3); )
    V3++;
  var t3 = V3++;
  return k$1.set(e4, t3), x$1.set(t3, e4), t3;
};
var M3 = function(e4) {
  return x$1.get(e4);
};
var z$1 = function(e4, t3) {
  k$1.set(e4, t3), x$1.set(t3, e4);
};
var L2 = "style[" + A$1 + '][data-styled-version="5.2.1"]';
var G3 = new RegExp("^" + A$1 + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)');
var F2 = function(e4, t3, n3) {
  for (var r2, o2 = n3.split(","), s2 = 0, i2 = o2.length; s2 < i2; s2++)
    (r2 = o2[s2]) && e4.registerName(t3, r2);
};
var Y3 = function(e4, t3) {
  for (var n3 = t3.innerHTML.split("/*!sc*/\n"), r2 = [], o2 = 0, s2 = n3.length; o2 < s2; o2++) {
    var i2 = n3[o2].trim();
    if (i2) {
      var a2 = i2.match(G3);
      if (a2) {
        var c3 = 0 | parseInt(a2[1], 10), u2 = a2[2];
        c3 !== 0 && (z$1(u2, c3), F2(e4, u2, a2[3]), e4.getTag().insertRules(c3, r2)), r2.length = 0;
      } else
        r2.push(i2);
    }
  }
};
var q$1 = function() {
  return typeof __webpack_nonce__ != "undefined" ? __webpack_nonce__ : null;
};
var H3 = function(e4) {
  var t3 = document.head, n3 = e4 || t3, r2 = document.createElement("style"), o2 = function(e5) {
    for (var t4 = e5.childNodes, n4 = t4.length; n4 >= 0; n4--) {
      var r3 = t4[n4];
      if (r3 && r3.nodeType === 1 && r3.hasAttribute(A$1))
        return r3;
    }
  }(n3), s2 = o2 !== void 0 ? o2.nextSibling : null;
  r2.setAttribute(A$1, "active"), r2.setAttribute("data-styled-version", "5.2.1");
  var i2 = q$1();
  return i2 && r2.setAttribute("nonce", i2), n3.insertBefore(r2, s2), r2;
};
var $2 = function() {
  function e4(e5) {
    var t4 = this.element = H3(e5);
    t4.appendChild(document.createTextNode("")), this.sheet = function(e6) {
      if (e6.sheet)
        return e6.sheet;
      for (var t5 = document.styleSheets, n3 = 0, r2 = t5.length; n3 < r2; n3++) {
        var o2 = t5[n3];
        if (o2.ownerNode === e6)
          return o2;
      }
      j(17);
    }(t4), this.length = 0;
  }
  var t3 = e4.prototype;
  return t3.insertRule = function(e5, t4) {
    try {
      return this.sheet.insertRule(t4, e5), this.length++, true;
    } catch (e6) {
      return false;
    }
  }, t3.deleteRule = function(e5) {
    this.sheet.deleteRule(e5), this.length--;
  }, t3.getRule = function(e5) {
    var t4 = this.sheet.cssRules[e5];
    return t4 !== void 0 && typeof t4.cssText == "string" ? t4.cssText : "";
  }, e4;
}();
var W3 = function() {
  function e4(e5) {
    var t4 = this.element = H3(e5);
    this.nodes = t4.childNodes, this.length = 0;
  }
  var t3 = e4.prototype;
  return t3.insertRule = function(e5, t4) {
    if (e5 <= this.length && e5 >= 0) {
      var n3 = document.createTextNode(t4), r2 = this.nodes[e5];
      return this.element.insertBefore(n3, r2 || null), this.length++, true;
    }
    return false;
  }, t3.deleteRule = function(e5) {
    this.element.removeChild(this.nodes[e5]), this.length--;
  }, t3.getRule = function(e5) {
    return e5 < this.length ? this.nodes[e5].textContent : "";
  }, e4;
}();
var U3 = function() {
  function e4(e5) {
    this.rules = [], this.length = 0;
  }
  var t3 = e4.prototype;
  return t3.insertRule = function(e5, t4) {
    return e5 <= this.length && (this.rules.splice(e5, 0, t4), this.length++, true);
  }, t3.deleteRule = function(e5) {
    this.rules.splice(e5, 1), this.length--;
  }, t3.getRule = function(e5) {
    return e5 < this.length ? this.rules[e5] : "";
  }, e4;
}();
var J2 = I3;
var X3 = {isServer: !I3, useCSSOMInjection: !P2};
var Z3 = function() {
  function e4(e5, t4, n3) {
    e5 === void 0 && (e5 = E2), t4 === void 0 && (t4 = {}), this.options = v$1({}, X3, {}, e5), this.gs = t4, this.names = new Map(n3), !this.options.isServer && I3 && J2 && (J2 = false, function(e6) {
      for (var t5 = document.querySelectorAll(L2), n4 = 0, r2 = t5.length; n4 < r2; n4++) {
        var o2 = t5[n4];
        o2 && o2.getAttribute(A$1) !== "active" && (Y3(e6, o2), o2.parentNode && o2.parentNode.removeChild(o2));
      }
    }(this));
  }
  e4.registerId = function(e5) {
    return B3(e5);
  };
  var t3 = e4.prototype;
  return t3.reconstructWithOptions = function(t4, n3) {
    return n3 === void 0 && (n3 = true), new e4(v$1({}, this.options, {}, t4), this.gs, n3 && this.names || void 0);
  }, t3.allocateGSInstance = function(e5) {
    return this.gs[e5] = (this.gs[e5] || 0) + 1;
  }, t3.getTag = function() {
    return this.tag || (this.tag = (n3 = (t4 = this.options).isServer, r2 = t4.useCSSOMInjection, o2 = t4.target, e5 = n3 ? new U3(o2) : r2 ? new $2(o2) : new W3(o2), new T3(e5)));
    var e5, t4, n3, r2, o2;
  }, t3.hasNameForId = function(e5, t4) {
    return this.names.has(e5) && this.names.get(e5).has(t4);
  }, t3.registerName = function(e5, t4) {
    if (B3(e5), this.names.has(e5))
      this.names.get(e5).add(t4);
    else {
      var n3 = new Set();
      n3.add(t4), this.names.set(e5, n3);
    }
  }, t3.insertRules = function(e5, t4, n3) {
    this.registerName(e5, t4), this.getTag().insertRules(B3(e5), n3);
  }, t3.clearNames = function(e5) {
    this.names.has(e5) && this.names.get(e5).clear();
  }, t3.clearRules = function(e5) {
    this.getTag().clearGroup(B3(e5)), this.clearNames(e5);
  }, t3.clearTag = function() {
    this.tag = void 0;
  }, t3.toString = function() {
    return function(e5) {
      for (var t4 = e5.getTag(), n3 = t4.length, r2 = "", o2 = 0; o2 < n3; o2++) {
        var s2 = M3(o2);
        if (s2 !== void 0) {
          var i2 = e5.names.get(s2), a2 = t4.getGroup(o2);
          if (i2 !== void 0 && a2.length !== 0) {
            var c3 = A$1 + ".g" + o2 + '[id="' + s2 + '"]', u2 = "";
            i2 !== void 0 && i2.forEach(function(e6) {
              e6.length > 0 && (u2 += e6 + ",");
            }), r2 += "" + a2 + c3 + '{content:"' + u2 + '"}/*!sc*/\n';
          }
        }
      }
      return r2;
    }(this);
  }, e4;
}();
var K2 = /(a)(d)/gi;
var Q2 = function(e4) {
  return String.fromCharCode(e4 + (e4 > 25 ? 39 : 97));
};
function ee3(e4) {
  var t3, n3 = "";
  for (t3 = Math.abs(e4); t3 > 52; t3 = t3 / 52 | 0)
    n3 = Q2(t3 % 52) + n3;
  return (Q2(t3 % 52) + n3).replace(K2, "$1-$2");
}
var te3 = function(e4, t3) {
  for (var n3 = t3.length; n3; )
    e4 = 33 * e4 ^ t3.charCodeAt(--n3);
  return e4;
};
var ne3 = function(e4) {
  return te3(5381, e4);
};
function re3(e4) {
  for (var t3 = 0; t3 < e4.length; t3 += 1) {
    var n3 = e4[t3];
    if (b$1(n3) && !N2(n3))
      return false;
  }
  return true;
}
var oe3 = ne3("5.2.1");
var se3 = function() {
  function e4(e5, t3, n3) {
    this.rules = e5, this.staticRulesId = "", this.isStatic = (n3 === void 0 || n3.isStatic) && re3(e5), this.componentId = t3, this.baseHash = te3(oe3, t3), this.baseStyle = n3, Z3.registerId(t3);
  }
  return e4.prototype.generateAndInjectStyles = function(e5, t3, n3) {
    var r2 = this.componentId, o2 = [];
    if (this.baseStyle && o2.push(this.baseStyle.generateAndInjectStyles(e5, t3, n3)), this.isStatic && !n3.hash)
      if (this.staticRulesId && t3.hasNameForId(r2, this.staticRulesId))
        o2.push(this.staticRulesId);
      else {
        var s2 = Ne3(this.rules, e5, t3, n3).join(""), i2 = ee3(te3(this.baseHash, s2.length) >>> 0);
        if (!t3.hasNameForId(r2, i2)) {
          var a2 = n3(s2, "." + i2, void 0, r2);
          t3.insertRules(r2, i2, a2);
        }
        o2.push(i2), this.staticRulesId = i2;
      }
    else {
      for (var c3 = this.rules.length, u2 = te3(this.baseHash, n3.hash), l2 = "", d3 = 0; d3 < c3; d3++) {
        var h3 = this.rules[d3];
        if (typeof h3 == "string")
          l2 += h3, false;
        else if (h3) {
          var p3 = Ne3(h3, e5, t3, n3), f3 = Array.isArray(p3) ? p3.join("") : p3;
          u2 = te3(u2, f3 + d3), l2 += f3;
        }
      }
      if (l2) {
        var m3 = ee3(u2 >>> 0);
        if (!t3.hasNameForId(r2, m3)) {
          var y3 = n3(l2, "." + m3, void 0, r2);
          t3.insertRules(r2, m3, y3);
        }
        o2.push(m3);
      }
    }
    return o2.join(" ");
  }, e4;
}();
var ie3 = /^\s*\/\/.*$/gm;
var ae3 = [":", "[", ".", "#"];
function ce2(e4) {
  var t3, n3, r2, o2, s2 = e4 === void 0 ? E2 : e4, i2 = s2.options, a2 = i2 === void 0 ? E2 : i2, c3 = s2.plugins, u2 = c3 === void 0 ? w$1 : c3, l2 = new stylis_min(a2), d3 = [], h3 = function(e5) {
    function t4(t5) {
      if (t5)
        try {
          e5(t5 + "}");
        } catch (e6) {
        }
    }
    return function(n4, r3, o3, s3, i3, a3, c4, u3, l3, d4) {
      switch (n4) {
        case 1:
          if (l3 === 0 && r3.charCodeAt(0) === 64)
            return e5(r3 + ";"), "";
          break;
        case 2:
          if (u3 === 0)
            return r3 + "/*|*/";
          break;
        case 3:
          switch (u3) {
            case 102:
            case 112:
              return e5(o3[0] + r3), "";
            default:
              return r3 + (d4 === 0 ? "/*|*/" : "");
          }
        case -2:
          r3.split("/*|*/}").forEach(t4);
      }
    };
  }(function(e5) {
    d3.push(e5);
  }), f3 = function(e5, r3, s3) {
    return r3 === 0 && ae3.includes(s3[n3.length]) || s3.match(o2) ? e5 : "." + t3;
  };
  function m3(e5, s3, i3, a3) {
    a3 === void 0 && (a3 = "&");
    var c4 = e5.replace(ie3, ""), u3 = s3 && i3 ? i3 + " " + s3 + " { " + c4 + " }" : c4;
    return t3 = a3, n3 = s3, r2 = new RegExp("\\" + n3 + "\\b", "g"), o2 = new RegExp("(\\" + n3 + "\\b){2,}"), l2(i3 || !s3 ? "" : s3, u3);
  }
  return l2.use([].concat(u2, [function(e5, t4, o3) {
    e5 === 2 && o3.length && o3[0].lastIndexOf(n3) > 0 && (o3[0] = o3[0].replace(r2, f3));
  }, h3, function(e5) {
    if (e5 === -2) {
      var t4 = d3;
      return d3 = [], t4;
    }
  }])), m3.hash = u2.length ? u2.reduce(function(e5, t4) {
    return t4.name || j(15), te3(e5, t4.name);
  }, 5381).toString() : "", m3;
}
var ue3 = react.createContext();
ue3.Consumer;
var de3 = react.createContext();
var he3 = (de3.Consumer, new Z3());
var pe3 = ce2();
function fe3() {
  return react.useContext(ue3) || he3;
}
function me3() {
  return react.useContext(de3) || pe3;
}
var ve3 = function() {
  function e4(e5, t3) {
    var n3 = this;
    this.inject = function(e6, t4) {
      t4 === void 0 && (t4 = pe3);
      var r2 = n3.name + t4.hash;
      e6.hasNameForId(n3.id, r2) || e6.insertRules(n3.id, r2, t4(n3.rules, r2, "@keyframes"));
    }, this.toString = function() {
      return j(12, String(n3.name));
    }, this.name = e5, this.id = "sc-keyframes-" + e5, this.rules = t3;
  }
  return e4.prototype.getName = function(e5) {
    return e5 === void 0 && (e5 = pe3), this.name + e5.hash;
  }, e4;
}();
var ge3 = /([A-Z])/;
var Se3 = /([A-Z])/g;
var we3 = /^ms-/;
var Ee3 = function(e4) {
  return "-" + e4.toLowerCase();
};
function be3(e4) {
  return ge3.test(e4) ? e4.replace(Se3, Ee3).replace(we3, "-ms-") : e4;
}
var _e2 = function(e4) {
  return e4 == null || e4 === false || e4 === "";
};
function Ne3(e4, n3, r2, o2) {
  if (Array.isArray(e4)) {
    for (var s2, i2 = [], a2 = 0, c3 = e4.length; a2 < c3; a2 += 1)
      (s2 = Ne3(e4[a2], n3, r2, o2)) !== "" && (Array.isArray(s2) ? i2.push.apply(i2, s2) : i2.push(s2));
    return i2;
  }
  if (_e2(e4))
    return "";
  if (N2(e4))
    return "." + e4.styledComponentId;
  if (b$1(e4)) {
    if (typeof (l2 = e4) != "function" || l2.prototype && l2.prototype.isReactComponent || !n3)
      return e4;
    var u2 = e4(n3);
    return Ne3(u2, n3, r2, o2);
  }
  var l2;
  return e4 instanceof ve3 ? r2 ? (e4.inject(r2, o2), e4.getName(o2)) : e4 : S3(e4) ? function e5(t3, n4) {
    var r3, o3, s3 = [];
    for (var i3 in t3)
      t3.hasOwnProperty(i3) && !_e2(t3[i3]) && (S3(t3[i3]) ? s3.push.apply(s3, e5(t3[i3], i3)) : b$1(t3[i3]) ? s3.push(be3(i3) + ":", t3[i3], ";") : s3.push(be3(i3) + ": " + (r3 = i3, (o3 = t3[i3]) == null || typeof o3 == "boolean" || o3 === "" ? "" : typeof o3 != "number" || o3 === 0 || r3 in unitlessKeys ? String(o3).trim() : o3 + "px") + ";"));
    return n4 ? [n4 + " {"].concat(s3, ["}"]) : s3;
  }(e4) : e4.toString();
}
function Ae3(e4) {
  for (var t3 = arguments.length, n3 = new Array(t3 > 1 ? t3 - 1 : 0), r2 = 1; r2 < t3; r2++)
    n3[r2 - 1] = arguments[r2];
  return b$1(e4) || S3(e4) ? Ne3(g$1(w$1, [e4].concat(n3))) : n3.length === 0 && e4.length === 1 && typeof e4[0] == "string" ? e4 : Ne3(g$1(e4, n3));
}
var Oe3 = function(e4, t3, n3) {
  return n3 === void 0 && (n3 = E2), e4.theme !== n3.theme && e4.theme || t3 || n3.theme;
};
var Re3 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var De3 = /(^-|-$)/g;
function je3(e4) {
  return e4.replace(Re3, "-").replace(De3, "");
}
var Te3 = function(e4) {
  return ee3(ne3(e4) >>> 0);
};
function ke3(e4) {
  return typeof e4 == "string" && true;
}
var xe2 = function(e4) {
  return typeof e4 == "function" || typeof e4 == "object" && e4 !== null && !Array.isArray(e4);
};
var Ve2 = function(e4) {
  return e4 !== "__proto__" && e4 !== "constructor" && e4 !== "prototype";
};
function Be3(e4, t3, n3) {
  var r2 = e4[n3];
  xe2(t3) && xe2(r2) ? Me3(r2, t3) : e4[n3] = t3;
}
function Me3(e4) {
  for (var t3 = arguments.length, n3 = new Array(t3 > 1 ? t3 - 1 : 0), r2 = 1; r2 < t3; r2++)
    n3[r2 - 1] = arguments[r2];
  for (var o2 = 0, s2 = n3; o2 < s2.length; o2++) {
    var i2 = s2[o2];
    if (xe2(i2))
      for (var a2 in i2)
        Ve2(a2) && Be3(e4, i2[a2], a2);
  }
  return e4;
}
var ze2 = react.createContext();
ze2.Consumer;
var Fe3 = {};
function Ye3(e4, t3, n3) {
  var o2 = N2(e4), i2 = !ke3(e4), a2 = t3.attrs, c3 = a2 === void 0 ? w$1 : a2, d3 = t3.componentId, h3 = d3 === void 0 ? function(e5, t4) {
    var n4 = typeof e5 != "string" ? "sc" : je3(e5);
    Fe3[n4] = (Fe3[n4] || 0) + 1;
    var r2 = n4 + "-" + Te3("5.2.1" + n4 + Fe3[n4]);
    return t4 ? t4 + "-" + r2 : r2;
  }(t3.displayName, t3.parentComponentId) : d3, p3 = t3.displayName, f3 = p3 === void 0 ? function(e5) {
    return ke3(e5) ? "styled." + e5 : "Styled(" + _2(e5) + ")";
  }(e4) : p3, g4 = t3.displayName && t3.componentId ? je3(t3.displayName) + "-" + t3.componentId : t3.componentId || h3, S4 = o2 && e4.attrs ? Array.prototype.concat(e4.attrs, c3).filter(Boolean) : c3, A2 = t3.shouldForwardProp;
  o2 && e4.shouldForwardProp && (A2 = t3.shouldForwardProp ? function(n4, r2) {
    return e4.shouldForwardProp(n4, r2) && t3.shouldForwardProp(n4, r2);
  } : e4.shouldForwardProp);
  var C, I4 = new se3(n3, g4, o2 ? e4.componentStyle : void 0), P3 = I4.isStatic && c3.length === 0, O2 = function(e5, t4) {
    return function(e6, t5, n4, r2) {
      var o3 = e6.attrs, i3 = e6.componentStyle, a3 = e6.defaultProps, c4 = e6.foldedComponentIds, d4 = e6.shouldForwardProp, h4 = e6.styledComponentId, p4 = e6.target;
      var f4 = function(e7, t6, n5) {
        e7 === void 0 && (e7 = E2);
        var r3 = v$1({}, t6, {theme: e7}), o4 = {};
        return n5.forEach(function(e8) {
          var t7, n6, s2, i4 = e8;
          for (t7 in b$1(i4) && (i4 = i4(r3)), i4)
            r3[t7] = o4[t7] = t7 === "className" ? (n6 = o4[t7], s2 = i4[t7], n6 && s2 ? n6 + " " + s2 : n6 || s2) : i4[t7];
        }), [r3, o4];
      }(Oe3(t5, react.useContext(ze2), a3) || E2, t5, o3), y3 = f4[0], g5 = f4[1], S5 = function(e7, t6, n5, r3) {
        var o4 = fe3(), s2 = me3(), i4 = t6 ? e7.generateAndInjectStyles(E2, o4, s2) : e7.generateAndInjectStyles(n5, o4, s2);
        return i4;
      }(i3, r2, y3), w3 = n4, _3 = g5.$as || t5.$as || g5.as || t5.as || p4, N3 = ke3(_3), A3 = g5 !== t5 ? v$1({}, t5, {}, g5) : t5, C2 = {};
      for (var I5 in A3)
        I5[0] !== "$" && I5 !== "as" && (I5 === "forwardedAs" ? C2.as = A3[I5] : (d4 ? d4(I5, index) : !N3 || index(I5)) && (C2[I5] = A3[I5]));
      return t5.style && g5.style !== t5.style && (C2.style = v$1({}, t5.style, {}, g5.style)), C2.className = Array.prototype.concat(c4, h4, S5 !== h4 ? S5 : null, t5.className, g5.className).filter(Boolean).join(" "), C2.ref = w3, react.createElement(_3, C2);
    }(C, e5, t4, P3);
  };
  return O2.displayName = f3, (C = react.forwardRef(O2)).attrs = S4, C.componentStyle = I4, C.displayName = f3, C.shouldForwardProp = A2, C.foldedComponentIds = o2 ? Array.prototype.concat(e4.foldedComponentIds, e4.styledComponentId) : w$1, C.styledComponentId = g4, C.target = o2 ? e4.target : e4, C.withComponent = function(e5) {
    var r2 = t3.componentId, o3 = function(e6, t4) {
      if (e6 == null)
        return {};
      var n4, r3, o4 = {}, s3 = Object.keys(e6);
      for (r3 = 0; r3 < s3.length; r3++)
        n4 = s3[r3], t4.indexOf(n4) >= 0 || (o4[n4] = e6[n4]);
      return o4;
    }(t3, ["componentId"]), s2 = r2 && r2 + "-" + (ke3(e5) ? e5 : je3(_2(e5)));
    return Ye3(e5, v$1({}, o3, {attrs: S4, componentId: s2}), n3);
  }, Object.defineProperty(C, "defaultProps", {get: function() {
    return this._foldedDefaultProps;
  }, set: function(t4) {
    this._foldedDefaultProps = o2 ? Me3({}, e4.defaultProps, t4) : t4;
  }}), C.toString = function() {
    return "." + C.styledComponentId;
  }, i2 && hoistNonReactStatics_cjs(C, e4, {attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true, withComponent: true}), C;
}
var qe3 = function(e4) {
  return function e5(t3, r2, o2) {
    if (o2 === void 0 && (o2 = E2), !reactIs.isValidElementType(r2))
      return j(1, String(r2));
    var s2 = function() {
      return t3(r2, o2, Ae3.apply(void 0, arguments));
    };
    return s2.withConfig = function(n3) {
      return e5(t3, r2, v$1({}, o2, {}, n3));
    }, s2.attrs = function(n3) {
      return e5(t3, r2, v$1({}, o2, {attrs: Array.prototype.concat(o2.attrs, n3).filter(Boolean)}));
    }, s2;
  }(Ye3, e4);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach(function(e4) {
  qe3[e4] = qe3(e4);
});
var styled_components_default = qe3;

// dist/user-projects-form/templates/form-wrapper.js
var FormWrapper = ({children}) => {
  return /* @__PURE__ */ react.createElement(FormWrapperStyled, null, /* @__PURE__ */ react.createElement(FormContainer, null, children));
};
var FormWrapperStyled = styled_components_default.div`
  display: flex;
`;
var FormContainer = styled_components_default.div`
  display: grid;
  align-items: center;
  border: 1px solid;
  border-radius: 8px;
  margin: 1rem;
  width: 100%;
  max-width: 800px;
`;

// dist/user-projects-form/templates/form-main-title-and-content.js
var FormMainTitleAndContent = ({children, title: title2}) => {
  return /* @__PURE__ */ react.createElement(FormMainTitleAndContentStyled, null, /* @__PURE__ */ react.createElement(FormMainTitleStyled, null, title2), /* @__PURE__ */ react.createElement("div", null, children));
};
var FormMainTitleAndContentStyled = styled_components_default.div`
  display: grid;
  grid-gap: 0.5rem;
`;
var FormMainTitleStyled = styled_components_default.h4`
  margin: 0;
  display: flex;
  align-items: center;
`;

// dist/user-projects-form/templates/project-details-item.js
var ProjectDetailsItemTemplate = ({children, title: title2}) => {
  return /* @__PURE__ */ react.createElement(ProjectDetailsItemWrapper, null, /* @__PURE__ */ react.createElement(ProjectDetailsItemHeader, null, title2), children);
};
var ProjectDetailsItemWrapper = styled_components_default.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 1rem;
`;
var ProjectDetailsItemHeader = styled_components_default.h5`
  font-size: 1rem;
  margin: 5px 0 0;
`;

// dist/ui/atoms/button.js
var BaseButton = styled_components_default.button`
  outline: none;
  transition: box-shadow 225ms;
  &:focus, &:hover {
    box-shadow: 0 0 8px;
  }
`;
var Button = styled_components_default(BaseButton)`
  width: 100px;
  border-radius: 8px;
  padding: 4px 8px;
`;
var IconButton = styled_components_default(BaseButton)`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
var SmallIconButton = styled_components_default(IconButton)`
  width: 24px;
  height: 24px;
  &:focus, &:hover {
    box-shadow: 0 0 6px;
  }
`;
var TextButton = styled_components_default.button`
  background: transparent;
  border: 1px dashed transparent;
  color: blueviolet;
  padding: 0;
  outline: none;
  transition: border 225ms;
  &:focus, &:hover {
    border-color: currentColor;
  }
`;

// dist/ui/atoms/helper-text.js
var HelperText = styled_components_default.span`
  font-size: 0.8rem;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  transition: opacity, color, visibility;
  transition-duration: 225ms;
  &[data-is-error='true'] {
    color: red;
    visibility: initial;
    opacity: 1;
  }
`;

// dist/ui/molecules/chip.js
var Chip = ({className, text, onRemove}) => {
  return /* @__PURE__ */ react.createElement(ChipStyled, {
    className
  }, /* @__PURE__ */ react.createElement("span", null, text), /* @__PURE__ */ react.createElement(CloseButton, {
    onClick: onRemove
  }, "X"));
};
var ChipStyled = styled_components_default.div`
  border: 1px solid;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
`;
var CloseButton = styled_components_default(SmallIconButton)`
  margin-left: 0.5rem;
`;

// dist/lib/use-previous-error-message.js
function usePreviousErrorMessage({errorText, hasError}) {
  const [errorMessage, setErrorMessage] = react.useState(errorText);
  react.useEffect(() => {
    if (hasError)
      setErrorMessage(errorText);
  }, [hasError, errorText]);
  return errorMessage;
}

// dist/ui/molecules/text-field.js
var TextField = ({
  helperText = "Error",
  isError = false,
  value,
  onChange,
  title: title2,
  onBlur,
  className,
  type = "string",
  min
}) => {
  const errorMessage = usePreviousErrorMessage({errorText: helperText, hasError: isError});
  return /* @__PURE__ */ react.createElement(TextFieldWrapper, {
    className
  }, title2, /* @__PURE__ */ react.createElement(InputStyled, {
    value,
    onChange,
    onBlur,
    type,
    min
  }), /* @__PURE__ */ react.createElement(HelperText, {
    "data-is-error": isError
  }, errorMessage));
};
var TextFieldWrapper = styled_components_default.label`
  display: grid;
`;
var InputStyled = styled_components_default.input`
  padding: 4px;
`;

// dist/ui/molecules/select.js
var Select = ({options, onChange, value, error, isError}) => {
  return /* @__PURE__ */ react.createElement(SelectWrappers, null, /* @__PURE__ */ react.createElement(SelectStyled, {
    onChange,
    value
  }, options.map(({label, value: value2}) => /* @__PURE__ */ react.createElement("option", {
    value: value2,
    key: value2
  }, label))), /* @__PURE__ */ react.createElement(HelperText, {
    "data-is-error": isError
  }, error));
};
var SelectWrappers = styled_components_default.label`
  display: flex;
  flex-direction: column;
`;
var SelectStyled = styled_components_default.select`
  padding: 4px;
`;

// dist/ui/molecules/text-area.js
var TextArea = ({
  helperText = "Error",
  isError = false,
  value,
  onChange,
  onBlur,
  title: title2,
  rows = 3
}) => {
  const errorMessage = usePreviousErrorMessage({errorText: helperText, hasError: isError});
  return /* @__PURE__ */ react.createElement(TextAreaWrapper, null, title2, /* @__PURE__ */ react.createElement(TextAreaStyled, {
    value,
    onChange,
    onBlur,
    rows
  }), /* @__PURE__ */ react.createElement(HelperText, {
    "data-is-error": isError
  }, errorMessage));
};
var TextAreaWrapper = styled_components_default.label`
  display: grid;
`;
var TextAreaStyled = styled_components_default.textarea`
  padding: 4px;
  resize: vertical;
`;

// dist/api/index.js
var apiClient = {
  getProjectsData() {
    const data = localStorage.getItem("users_projects");
    if (!data) {
      return null;
    }
    return JSON.parse(data);
  },
  saveProjectsData(data) {
    localStorage.setItem("users_projects", JSON.stringify(data));
  }
};

// dist/user-projects-form/model/main.js
var $isUserProjectsFormOpened = u(false);
var userProjectsFormApi = g($isUserProjectsFormOpened, {
  userProjectsFormOpened: () => true,
  userProjectsFormClosed: () => false,
  toggleUserProjectsFormOpen: (isOpen) => !isOpen
});
var $viewMode = u("form");
var viewModeSwitched = c();
var viewModeSwitchedToJson = c();
var viewModeSwitchedToForm = c();
$viewMode.on(viewModeSwitched, (_3, newMode) => newMode).on(viewModeSwitchedToJson, () => "json").on(viewModeSwitchedToForm, () => "form");
var formMounted = c();
var getProjectsDataFx = m(apiClient.getProjectsData);
ct({
  from: formMounted,
  to: getProjectsDataFx
});

// dist/lib/create-form-field.js
function createFormField({
  defaultValue,
  reducer,
  clearTouchEvent,
  rules = {}
}) {
  const $store = u(defaultValue);
  const storeChanged = c();
  $store.on(storeChanged, reducer);
  const $innerError = $store.map((store) => {
    if (rules.required) {
      const isStoreExists = typeof store === "number" ? true : !!store;
      if (!isStoreExists)
        return rules.required;
    }
    if (rules.minLen && typeof store === "string" && store.length < rules.minLen.value) {
      return rules.minLen.error;
    }
    if (rules.maxLen && typeof store === "string" && store.length > rules.maxLen.value) {
      return rules.maxLen.error;
    }
    if (rules.email && typeof store === "string" && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(store)) {
      return rules.email;
    }
    if (rules.date && store instanceof Date) {
      if (rules.date.years) {
        if (rules.date.years.min) {
        }
      }
    }
    if (rules.lower && typeof store === "string" && !/([a-z])/.test(store))
      return rules.lower;
    if (rules.upper && typeof store === "string" && !/([A-Z])/.test(store))
      return rules.upper;
    if (rules.digit && typeof store === "string" && !/([0-9])/.test(store))
      return rules.digit;
    if (rules.special && typeof store === "string" && !/([^A-Za-z0-9])/.test(store))
      return rules.special;
    return "";
  });
  const $isFieldTouched = u(false);
  const fieldTouched = c();
  $isFieldTouched.on(fieldTouched, () => true);
  if (clearTouchEvent)
    $isFieldTouched.on(clearTouchEvent, () => false);
  const $error = p($isFieldTouched, $innerError, (isFieldTouched, innerError) => {
    if (isFieldTouched)
      return innerError;
    return "";
  });
  return {
    $store,
    storeChanged,
    $innerError,
    fieldTouched,
    $error,
    $isFieldTouched
  };
}

// dist/user-projects-form/model/username.js
var usernameField = createFormField({
  defaultValue: "",
  reducer: (_3, e4) => e4.target.value,
  rules: {
    required: "Required"
  }
});
var $username = usernameField.$store;
var $usernameError = usernameField.$error;
var usernameChanged = usernameField.storeChanged;
var usernameTouched = usernameField.fieldTouched;
var $usernameInnerError = usernameField.$innerError;
$username.on(getProjectsDataFx.doneData, (name, data) => {
  if (data)
    return data.username;
});

// dist/user-projects-form/model/project-name.js
var $projectNames = u([]);
var projectNameAdded = c();
var newProjectNameField = createFormField({
  defaultValue: "",
  reducer: (_3, e4) => e4.target.value,
  rules: {
    required: "Required"
  },
  clearTouchEvent: projectNameAdded
});
var $newProjectName = newProjectNameField.$store;
var newProjectNameChanged = newProjectNameField.storeChanged;
$newProjectName.reset(projectNameAdded);
var $hasNewProjectNameInProjects = p($projectNames, $newProjectName, (existingNames, newName) => {
  return Boolean(existingNames.find((en) => en.toLowerCase() === newName.toLowerCase()));
});
var $isNewProjectNameValid = p(newProjectNameField.$innerError, $hasNewProjectNameInProjects, (innerError, hasTheSameName) => !innerError && !hasTheSameName);
var $newProjectNameError = p(newProjectNameField.$isFieldTouched, newProjectNameField.$error, $hasNewProjectNameInProjects, (isTouched, innerError, hasTheSameName) => {
  if (!isTouched)
    return "";
  if (innerError)
    return innerError;
  if (hasTheSameName)
    return "Already exist";
  return "";
});
var newProjectNameTouched = newProjectNameField.fieldTouched;
var newProjectNameTriedToAdd = c();
w({
  source: $newProjectName,
  clock: newProjectNameTriedToAdd,
  filter: $isNewProjectNameValid,
  target: projectNameAdded
});
ct({
  from: newProjectNameTriedToAdd,
  to: newProjectNameField.fieldTouched
});
var projectNameRemoved = c();
$projectNames.on(projectNameAdded, (names, newName) => [...names, newName]).on(projectNameRemoved, (names, nameToRemove) => {
  return names.filter((name) => name !== nameToRemove);
}).on(getProjectsDataFx.doneData, (_3, data) => {
  if (data)
    return data.projects;
});

// dist/api/types.js
var TimeUnits;
(function(TimeUnits2) {
  TimeUnits2["Month"] = "month";
  TimeUnits2["Year"] = "year";
})(TimeUnits || (TimeUnits = {}));

// _snowpack/pkg/effector/compat.js
var compat = createCommonjsModule(function(module, exports) {
  function e4(e5, r3) {
    (r3 == null || r3 > e5.length) && (r3 = e5.length);
    for (var n4 = 0, t4 = new Array(r3); n4 < r3; n4++)
      t4[n4] = e5[n4];
    return t4;
  }
  function r2(r3, n4) {
    var it;
    if (typeof Symbol == "undefined" || r3[Symbol.iterator] == null) {
      if (Array.isArray(r3) || (it = function(r4, n5) {
        if (r4) {
          if (typeof r4 == "string")
            return e4(r4, n5);
          var t5 = {}.toString.call(r4).slice(8, -1);
          return t5 === "Object" && r4.constructor && (t5 = r4.constructor.name), t5 === "Map" || t5 === "Set" ? Array.from(r4) : t5 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t5) ? e4(r4, n5) : void 0;
        }
      }(r3)) || n4 && r3 && typeof r3.length == "number") {
        it && (r3 = it);
        var t4 = 0;
        return function() {
          return t4 >= r3.length ? {done: 1} : {done: 0, value: r3[t4++]};
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    return (it = r3[Symbol.iterator]()).next.bind(it);
  }
  function n3(e5, r3, n4, t4) {
    (E3(e5) || z3(e5)) && ("family" in e5 || "graphite" in e5) || M4(r3 + ": expect " + n4 + " to be a unit (store, event or effect)" + t4);
  }
  function t3(e5, r3, t4) {
    if (Array.isArray(e5))
      for (var a3 = 0; a3 < e5.length; a3++)
        n3(e5[a3], r3, a3 + " item of " + t4, "");
    else
      n3(e5, r3, t4, " or array of units");
  }
  function a2(e5, r3) {
    var n4 = ue4(e5).meta;
    ye2 = {parent: ye2, value: e5, template: n4.template || be4(), sidRoot: n4.sidRoot || ye2 && ye2.sidRoot};
    try {
      return r3();
    } finally {
      ye2 = ve4(ye2);
    }
  }
  function o2(e5) {
    for (var r3 = e5 === void 0 ? {} : e5, n4 = r3.node, t4 = n4 === void 0 ? [] : n4, a3 = r3.parent, o3 = r3.child, i3 = o3 === void 0 ? r3.to || r3.target : o3, u3 = r3.scope, f4 = u3 === void 0 ? {} : u3, c4 = r3.meta, s3 = c4 === void 0 ? {} : c4, l3 = r3.family, p4 = l3 === void 0 ? {type: "regular"} : l3, d4 = r3.regional, m4 = we4(a3 === void 0 ? r3.from || r3.source : a3), v4 = we4(p4.links), h4 = we4(p4.owners), g5 = [], y4 = {}, b4 = 0; b4 < t4.length; b4++) {
      var k3 = t4[b4];
      k3 && (g5.push(k3), xe3(k3, y4));
    }
    for (var w4 = {id: B4(), seq: g5, next: we4(i3), meta: s3, scope: f4, family: {type: p4.type || "crosslink", links: v4, owners: h4}, reg: y4}, x3 = 0; x3 < v4.length; x3++)
      fe4(v4[x3]).push(w4);
    for (var S5 = 0; S5 < h4.length; S5++)
      ce3(h4[S5]).push(w4);
    for (var A3 = 0; A3 < m4.length; A3++)
      m4[A3].next.push(w4);
    return d4 && ye2 && ge4(de4(ye2), [w4]), w4;
  }
  function i2(e5, r3, n4) {
    var t4 = Me4, a3 = null, o3 = je4;
    if (e5.target && (r3 = e5.params, n4 = e5.defer, t4 = "page" in e5 ? e5.page : t4, e5.stack && (a3 = e5.stack), o3 = he4(e5) || o3, e5 = e5.target), o3 && je4 && o3 !== je4 && (je4 = null), Array.isArray(e5))
      for (var i3 = 0; i3 < e5.length; i3++)
        Pe2("pure", t4, ue4(e5[i3]), a3, r3[i3], o3);
    else
      Pe2("pure", t4, ue4(e5), a3, r3, o3);
    if (!n4 || De4) {
      var u3, f4, c4, s3, l3, p4, d4 = {isRoot: De4, currentPage: Me4, forkPage: je4, isWatch: Ie3};
      De4 = 0;
      e:
        for (; s3 = Ce3(); ) {
          var m4 = s3.idx, v4 = s3.stack, h4 = s3.type;
          c4 = v4.node, Me4 = l3 = v4.page, je4 = he4(v4), p4 = (l3 || c4).reg;
          var g5 = {fail: 0, scope: c4.scope};
          u3 = f4 = 0;
          for (var y4 = m4; y4 < c4.seq.length && !u3; y4++) {
            var b4 = c4.seq[y4], k3 = b4.data;
            switch (b4.type) {
              case "barrier":
                var w4 = k3.barrierID;
                l3 && (w4 = l3.fullID + "_" + w4);
                var x3 = k3.priority;
                if (y4 !== m4 || h4 !== x3) {
                  _e3.has(w4) || (_e3.add(w4), Fe4(y4, v4, x3, w4));
                  continue e;
                }
                _e3.delete(w4);
                break;
              case "mov":
                var S5 = void 0;
                switch (k3.from) {
                  case O2:
                    S5 = de4(v4);
                    break;
                  case "a":
                  case "b":
                    S5 = v4[k3.from];
                    break;
                  case "value":
                    S5 = k3.store;
                    break;
                  case N3:
                    p4[k3.store.id] || (v4.page = l3 = Te4(l3, k3.store.id), p4 = l3 ? l3.reg : c4.reg), S5 = te4(p4[k3.store.id]);
                }
                switch (k3.to) {
                  case O2:
                    v4.value = S5;
                    break;
                  case "a":
                  case "b":
                    v4[k3.to] = S5;
                    break;
                  case N3:
                    We2(l3, c4, k3.target.id).current = S5;
                }
                break;
              case "check":
                switch (k3.type) {
                  case "defined":
                    f4 = de4(v4) === void 0;
                    break;
                  case "changed":
                    f4 = de4(v4) === te4(We2(l3, c4, k3.store.id));
                }
                break;
              case "filter":
                f4 = !He3(g5, k3, v4);
                break;
              case "run":
                if (y4 !== m4 || h4 !== "effect") {
                  Fe4(y4, v4, "effect");
                  continue e;
                }
              case "compute":
                Ie3 = c4.meta.op === "watch", v4.value = He3(g5, k3, v4), Ie3 = d4.isWatch;
            }
            u3 = g5.fail || f4;
          }
          if (!u3)
            for (var A3 = 0; A3 < c4.next.length; A3++)
              Pe2("child", l3, c4.next[A3], v4, de4(v4), he4(v4));
        }
      De4 = d4.isRoot, Me4 = d4.currentPage, je4 = he4(d4);
    }
  }
  function u2(e5, r3) {
    r3 === void 0 && (r3 = "combine");
    var n4 = r3 + "(", t4 = "", a3 = 0;
    for (var o3 in e5) {
      var i3 = e5[o3];
      if (i3 != null && (n4 += t4, n4 += C(i3) ? i3.compositeName.fullName : i3.toString()), (a3 += 1) === 25)
        break;
      t4 = ", ";
    }
    return n4 + ")";
  }
  function f3(e5, r3) {
    var n4, t4, a3, o3 = e5;
    return r3 ? (a3 = r3.compositeName, e5.length === 0 ? (n4 = a3.path, t4 = a3.fullName) : (n4 = a3.path.concat([e5]), t4 = a3.fullName.length === 0 ? e5 : a3.fullName + "/" + e5)) : (n4 = e5.length === 0 ? [] : [e5], t4 = e5), {shortName: o3, fullName: t4, path: n4};
  }
  function c3(e5, r3) {
    for (var n4 in e5)
      r3(e5[n4], n4);
  }
  function s2(e5, r3) {
    e5.forEach(r3);
  }
  function l2(e5, r3, n4, t4) {
    var a3 = Me4, o3 = null;
    if (r3)
      for (o3 = Me4; o3 && o3.template !== r3; )
        o3 = ve4(o3);
    ze3(o3);
    var i3 = e5.create(n4, t4);
    return ze3(a3), i3;
  }
  function p3(e5, r3) {
    var n4 = function e6(r4) {
      for (var n5 = arguments.length, a3 = new Array(n5 > 1 ? n5 - 1 : 0), o3 = 1; o3 < n5; o3++)
        a3[o3 - 1] = arguments[o3];
      return Me4 ? l2(e6, t4, r4, a3) : e6.create(r4, a3);
    };
    n4.graphite = o2({meta: ar("event", n4, r3, e5), regional: 1}), n4.create = function(e6) {
      return i2(je4 ? je4.find(n4) : n4, e6), e6;
    }, n4.watch = G4(rr, n4), n4.map = function(e6) {
      var r4, t5;
      E3(e6) && (r4 = e6, t5 = e6.name, e6 = e6.fn);
      var a3 = p3(Be4(n4, t5), r4);
      return ir(n4, a3, j2, e6), a3;
    }, n4.filter = function(e6) {
      return ur(n4, "filter", e6.fn ? e6 : e6.fn, [Y4({fn: ie4})]);
    }, n4.filterMap = function(e6) {
      return ur(n4, "filterMap", e6, [X4({fn: ie4}), V4.defined()]);
    }, n4.prepend = function(e6) {
      var r4 = p3("* \u2192 " + n4.shortName, {parent: ve4(n4)}), t5 = be4();
      return t5 && ue4(r4).seq.push(t5.upward), ir(r4, n4, "prepend", e6), tr(n4, r4), r4;
    };
    var t4 = be4();
    return n4;
  }
  function d3(e5, n4) {
    function a3(e6, r3) {
      p4.off(e6), me4(p4).set(e6, Ye4(fr(e6, p4, "on", 1, r3, v4)));
    }
    var u3 = ne4(e5), f4 = ne4(e5), c4 = or("updates"), s3 = be4();
    u3.after = [{type: "copy", to: f4}], s3 && s3.plain.push(u3, f4);
    var l3 = u3.id, p4 = {subscribers: new Map(), updates: c4, defaultState: e5, stateRef: u3, getState: function() {
      var e6, r3 = u3;
      if (Me4) {
        for (var n5 = Me4; n5 && !n5.reg[l3]; )
          n5 = ve4(n5);
        n5 && (e6 = n5);
      }
      return !e6 && je4 && je4.reg[l3] && (e6 = je4), e6 && (r3 = e6.reg[l3]), te4(r3);
    }, setState: function(e6) {
      var r3;
      je4 && (r3 = je4.nodeMap[ue4(p4).id]), r3 || (r3 = p4), i2({target: r3, params: e6, defer: 1});
    }, reset: function() {
      for (var e6 = arguments.length, r3 = new Array(e6), n5 = 0; n5 < e6; n5++)
        r3[n5] = arguments[n5];
      for (var t4 = 0, a4 = r3; t4 < a4.length; t4++) {
        var o3 = a4[t4];
        p4.on(o3, function() {
          return p4.defaultState;
        });
      }
      return p4;
    }, on: function(e6, n5) {
      if (t3(e6, ".on", "first argument"), Array.isArray(e6))
        for (var o3, i3 = r2(e6); !(o3 = i3()).done; )
          a3(o3.value, n5);
      else
        a3(e6, n5);
      return p4;
    }, off: function(e6) {
      var r3 = me4(p4).get(e6);
      return r3 && (r3(), me4(p4).delete(e6)), p4;
    }, map: function(e6, r3) {
      var n5, t4, a4;
      E3(e6) && (n5 = e6, t4 = e6.name, r3 = e6.firstState, e6 = e6.fn);
      var o3 = p4.getState(), i3 = be4();
      i3 ? a4 = null : o3 !== void 0 && (a4 = e6(o3, r3));
      var f5 = d3(a4, {name: Be4(p4, t4), config: n5, strict: 0}), c5 = fr(p4, f5, j2, 0, e6);
      return se4(f5).before = [{type: j2, fn: e6, from: u3}], i3 && (Je3(i3.plain, u3) || Je3(c5.seq, i3.loader) || c5.seq.unshift(i3.loader)), f5;
    }, watch: function(e6, r3) {
      if (!r3 || !C(e6)) {
        var n5 = rr(p4, e6), t4 = be4();
        return t4 ? t4.watch.push({of: u3, fn: e6}) : e6(p4.getState()), n5;
      }
      return z3(r3) || M4("second argument should be a function"), e6.watch(function(e7) {
        return r3(p4.getState(), e7);
      });
    }}, m4 = ar(N3, p4, n4), v4 = p4.defaultConfig.updateFilter;
    return p4.graphite = o2({scope: {state: u3}, node: [V4.defined(), V4.changed({store: f4}), v4 && Q3({store: f4, to: "a"}), v4 && Y4({fn: function(e6, r3, n5) {
      return v4(e6, n5.a);
    }}), ee4({store: u3}), ee4({store: f4})], child: c4, meta: m4, regional: 1}), Oe4 && e5 === void 0 && M4("current state can't be undefined, use null instead"), ge4(p4, [c4]), p4;
  }
  function m3() {
    for (var e5 = arguments.length, r3 = new Array(e5), n4 = 0; n4 < e5; n4++)
      r3[n4] = arguments[n4];
    var t4, a3, o3;
    Ge3(r3[0], function(e6, n5) {
      o3 = e6, r3 = n5;
    });
    var i3, u3, f4 = r3[r3.length - 1];
    if (z3(f4) ? (a3 = r3.slice(0, -1), t4 = f4) : a3 = r3, a3.length === 1) {
      var c4 = a3[0];
      F3(c4) || (i3 = c4, u3 = 1);
    }
    return u3 || (i3 = a3, t4 && (t4 = cr(t4))), E3(i3) || M4("shape should be an object"), sr(Array.isArray(i3), i3, o3, t4);
  }
  function v3() {
    var e5 = {};
    return e5.req = new Promise(function(r3, n4) {
      e5.rs = r3, e5.rj = n4;
    }), e5.req.catch(function() {
    }), e5;
  }
  function h3(e5, r3) {
    var n4 = p3(e5, r3), t4 = n4.defaultConfig.handler || function() {
      return M4("no handler used in " + n4.getType());
    }, a3 = ue4(n4);
    a3.meta.onCopy = ["runner"], a3.meta.unit = n4.kind = "effect", n4.use = function(e6) {
      return z3(e6) || M4(".use argument should be a function"), t4 = e6, n4;
    };
    var u3 = n4.finally = or("finally"), f4 = n4.done = u3.filterMap({named: "done", fn: function(e6) {
      if (e6.status === "done")
        return {params: e6.params, result: e6.result};
    }}), c4 = n4.fail = u3.filterMap({named: "fail", fn: function(e6) {
      if (e6.status === "fail")
        return {params: e6.params, error: e6.error};
    }}), s3 = n4.doneData = f4.map({named: "doneData", fn: function(e6) {
      return e6.result;
    }}), l3 = n4.failData = c4.map({named: "failData", fn: function(e6) {
      return e6.error;
    }}), m4 = o2({scope: {getHandler: n4.use.getCurrent = function() {
      return t4;
    }, finally: u3}, node: [Z4({fn: function(e6, r4, n5) {
      var t5, a4 = e6.params, o3 = e6.req, i3 = r4.finally, u4 = r4.getHandler, f5 = lr({params: a4, req: o3, ok: 1, anyway: i3, stack: n5}), c5 = lr({params: a4, req: o3, ok: 0, anyway: i3, stack: n5});
      try {
        t5 = u4()(a4);
      } catch (s4) {
        return void c5(s4);
      }
      E3(t5) && z3(t5.then) ? t5.then(f5, c5) : f5(t5);
    }})], meta: {op: "fx", fx: "runner", onCopy: ["finally"]}});
    a3.scope.runner = m4, a3.seq.push(X4({fn: function(e6, r4, n5) {
      return ve4(n5) ? {params: e6, req: {rs: function() {
      }, rj: function() {
      }}} : e6;
    }}), Z4({fn: function(e6, r4, n5) {
      return i2({target: r4.runner, params: e6, defer: 1, forkPage: he4(n5)}), e6.params;
    }})), n4.create = function(e6) {
      var r4 = v3(), t5 = {params: e6, req: r4};
      if (je4) {
        if (!Ie3) {
          var a4 = je4;
          r4.req.finally(function() {
            Ee4(a4);
          }).catch(function() {
          });
        }
        i2(je4.find(n4), t5);
      } else
        i2(n4, t5);
      return r4.req;
    };
    var h4 = n4.inFlight = d3(0, {named: "inFlight"}).on(n4, function(e6) {
      return e6 + 1;
    }).on(u3, function(e6) {
      return e6 - 1;
    }), g5 = n4.pending = h4.map({fn: function(e6) {
      return e6 > 0;
    }, named: "pending"});
    return ge4(n4, [u3, f4, c4, s3, l3, g5, h4, m4]), n4;
  }
  function g4(e5, r3) {
    var n4 = p3(r3 || u2(e5, "merge"));
    return t3(e5, "merge", "first argument"), er({from: e5, to: n4, meta: {op: "merge"}}), n4;
  }
  function y3(e5) {
    var r3 = 0;
    return s2(mr, function(n4) {
      n4 in e5 && (e5[n4] == null && M4("sample: " + n4 + " should be defined"), r3 = 1);
    }), r3;
  }
  function b3() {
    for (var e5, r3, n4 = arguments.length, a3 = new Array(n4), i3 = 0; i3 < n4; i3++)
      a3[i3] = arguments[i3];
    var u3, f4, c4 = $e3(a3), s3 = c4[0], l3 = s3[0], v4 = s3[1], h4 = s3[2], b4 = c4[1];
    v4 === void 0 && E3(l3) && y3(l3) && (v4 = l3.clock, h4 = l3.fn, f4 = l3.greedy, e5 = l3.target, r3 = l3.name, u3 = l3.sid, l3 = l3.source);
    var k3 = 1;
    l3 === void 0 && (t3(v4, "sample", "clock"), Array.isArray(v4) && (v4 = g4(v4)), l3 = v4, k3 = 0), k3 && !C(l3) && (l3 = m3(l3)), v4 === void 0 && (v4 = l3), t3(v4, "sample", "clock"), r3 = b4 || r3 || l3.shortName;
    var w4 = be4(), x3 = !!e5;
    if (!e5)
      if (F3(l3) && F3(v4)) {
        var S5 = h4 ? h4(te4(se4(l3)), te4(se4(v4))) : te4(se4(l3));
        e5 = d3(S5, {name: r3, sid: u3});
      } else
        e5 = p3(r3), w4 && ue4(e5).seq.push(w4.loader);
    var A3 = x3 && C(e5) && ue4(e5).meta.nativeTemplate;
    if (F3(l3)) {
      var q3 = se4(l3);
      ge4(l3, [Ze3(v4, e5, {scope: {fn: h4, targetTemplate: A3}, node: [w4 && w4.loader, !f4 && L3({priority: "sampler"}), Q3({store: q3, to: h4 ? "a" : O2}), h4 && X4({fn: oe4}), w4 && x3 && w4.upward], meta: {op: "sample", sample: N3}})]), w4 && (Je3(w4.plain, q3) || Je3(w4.closure, q3) || w4.closure.push(q3));
    } else {
      var j3 = ne4(0), P4 = ne4(), R3 = ne4();
      w4 && w4.plain.push(j3, P4, R3), o2({parent: l3, node: [ee4({store: P4}), Q3({from: "value", store: 1, target: j3})], family: {owners: [l3, e5, v4], links: e5}, meta: {op: "sample", sample: "source"}, regional: 1}), ge4(l3, [Ze3(v4, e5, {scope: {fn: h4, targetTemplate: A3}, node: [w4 && w4.loader, ee4({store: R3}), Q3({store: j3}), Y4({fn: function(e6) {
        return e6;
      }}), !f4 && L3({priority: "sampler"}), Q3({store: P4}), Q3({store: R3, to: "a"}), h4 && X4({fn: ae4}), w4 && x3 && w4.upward], meta: {op: "sample", sample: "clock"}})]);
    }
    return e5;
  }
  function k2(e5) {
    var r3 = Object.values(e5), n4 = {};
    return s2(r3, function(e6) {
      n4[e6.id] = [];
    }), s2(r3, function(e6) {
      var r4 = e6.id, t4 = e6.before, a3 = e6.after;
      t4 && s2(t4, function(e7) {
        n4[e7.from.id].push(r4);
      }), a3 && s2(a3, function(e7) {
        n4[r4].push(e7.to.id);
      });
    }), n4;
  }
  function w3(e5) {
    if (e5 instanceof Map) {
      for (var n4, t4 = {}, a3 = r2(e5); !(n4 = a3()).done; ) {
        var o3 = n4.value, i3 = o3[0], u3 = o3[1];
        C(i3) || M4("Map key should be a unit"), t4[i3.sid] = u3;
      }
      return t4;
    }
    return e5;
  }
  function x2(e5, r3) {
    function n4(e6) {
      u3[e6] = 1;
      for (var r4 = t4[e6], a4 = 0; a4 < r4.length; a4++) {
        var f5 = r4[a4];
        u3[f5] || i3[f5] || n4(f5);
      }
      u3[e6] = 0, i3[e6] = 1, o3.push(e6);
    }
    var t4 = {};
    for (var a3 in e5)
      t4[a3] = [].concat(new Set(e5[a3]));
    var o3 = [], i3 = {}, u3 = {};
    for (var f4 in t4)
      i3[f4] || u3[f4] || n4(f4);
    return o3.reverse(), r3 && r3.size > 0 && function() {
      for (var e6, n5 = [], a4 = [].concat(r3); e6 = a4.shift(); )
        n5.push(e6), s2(t4[e6], function(e7) {
          Je3(n5, e7) || Je3(a4, e7) || a4.push(e7);
        });
      s2(n5, function(e7) {
        Ke3(o3, e7);
      });
    }(), o3;
  }
  function S4(e5) {
    var r3 = [];
    return function e6(n4) {
      Je3(r3, n4) || (r3.push(n4), A2(n4, e6));
    }(ue4(e5)), r3;
  }
  function A2(e5, r3) {
    var n4 = e5.meta.unit;
    n4 !== "fork" && n4 !== "forkInFlightCounter" && (s2(e5.next, r3), s2(fe4(e5), r3), s2(ce3(e5), r3));
  }
  Object.defineProperty(exports, "__esModule", {value: 1});
  for (var q2 = typeof Symbol != "undefined" && Symbol.observable || "@@observable", N3 = "store", j2 = "map", O2 = "stack", C = function(e5) {
    return (z3(e5) || E3(e5)) && "kind" in e5;
  }, P3 = function(e5) {
    return function(r3) {
      return C(r3) && r3.kind === e5;
    };
  }, F3 = P3(N3), R2 = P3("event"), _3 = P3("effect"), D2 = P3("domain"), I4 = {__proto__: null, unit: C, store: F3, event: R2, effect: _3, domain: D2}, M4 = function(e5) {
    throw Error(e5);
  }, E3 = function(e5) {
    return typeof e5 == "object" && e5 !== null;
  }, z3 = function(e5) {
    return typeof e5 == "function";
  }, T4 = function(e5) {
    E3(e5) || z3(e5) || M4("expect first argument be an object");
  }, W4 = function() {
    var e5 = 0;
    return function() {
      return (++e5).toString(36);
    };
  }, H4 = W4(), U4 = W4(), B4 = W4(), G4 = function(e5, r3) {
    return e5.bind(null, r3);
  }, $3 = function(e5, r3, n4) {
    return e5.bind(null, r3, n4);
  }, J3 = function(e5, r3, n4) {
    return {id: U4(), type: e5, data: n4, hasRef: r3};
  }, K3 = 0, L3 = function(e5) {
    var r3 = e5.priority;
    return J3("barrier", 0, {barrierID: ++K3, priority: r3 === void 0 ? "barrier" : r3});
  }, Q3 = function(e5) {
    var r3 = e5.from, n4 = r3 === void 0 ? N3 : r3, t4 = e5.target, a3 = e5.to;
    return J3("mov", n4 === N3, {from: n4, store: e5.store, to: a3 === void 0 ? t4 ? N3 : O2 : a3, target: t4});
  }, V4 = {defined: function() {
    return J3("check", 0, {type: "defined"});
  }, changed: function(e5) {
    return J3("check", 1, {type: "changed", store: e5.store});
  }}, X4 = $3(J3, "compute", 0), Y4 = $3(J3, "filter", 0), Z4 = $3(J3, "run", 0), ee4 = function(e5) {
    return Q3({from: O2, target: e5.store});
  }, re4 = {__proto__: null, barrier: L3, mov: Q3, check: V4, compute: X4, filter: Y4, run: Z4, update: ee4}, ne4 = function(e5) {
    return {id: U4(), current: e5};
  }, te4 = function(e5) {
    return e5.current;
  }, ae4 = function(e5, r3, n4) {
    return (0, r3.fn)(e5, n4.a);
  }, oe4 = function(e5, r3, n4) {
    return (0, r3.fn)(n4.a, e5);
  }, ie4 = function(e5, r3) {
    return (0, r3.fn)(e5);
  }, ue4 = function(e5) {
    return e5.graphite || e5;
  }, fe4 = function(e5) {
    return e5.family.owners;
  }, ce3 = function(e5) {
    return e5.family.links;
  }, se4 = function(e5) {
    return e5.stateRef;
  }, le3 = function(e5) {
    return e5.config;
  }, pe4 = function(e5) {
    return e5.\u0254;
  }, de4 = function(e5) {
    return e5.value;
  }, me4 = function(e5) {
    return e5.subscribers;
  }, ve4 = function(e5) {
    return e5.parent;
  }, he4 = function(e5) {
    return e5.forkPage;
  }, ge4 = function(e5, r3) {
    for (var n4 = ue4(e5), t4 = 0; t4 < r3.length; t4++) {
      var a3 = ue4(r3[t4]);
      n4.family.type !== "domain" && (a3.family.type = "crosslink"), fe4(a3).push(n4), ce3(n4).push(a3);
    }
  }, ye2 = null, be4 = function() {
    return ye2 && ye2.template;
  }, ke4 = function(e5) {
    return e5 && ye2 && ye2.sidRoot && (e5 = ye2.sidRoot + "\u0254" + e5), e5;
  }, we4 = function(e5) {
    e5 === void 0 && (e5 = []);
    var r3 = [];
    if (Array.isArray(e5))
      for (var n4 = 0; n4 < e5.length; n4++)
        Array.isArray(e5[n4]) ? r3.push.apply(r3, e5[n4]) : r3.push(e5[n4]);
    else
      r3.push(e5);
    return r3.map(ue4);
  }, xe3 = function(e5, r3) {
    var n4, t4 = e5.type, a3 = e5.data;
    e5.hasRef && (r3[(n4 = a3.store).id] = n4), t4 === "mov" && a3.to === N3 && (r3[(n4 = a3.target).id] = n4);
  }, Se4 = null, Ae4 = function e5(r3, n4) {
    if (!r3)
      return n4;
    if (!n4)
      return r3;
    var t4, a3 = r3.v.type === n4.v.type;
    return (a3 && r3.v.id > n4.v.id || !a3 && r3.v.type === "sampler") && (t4 = r3, r3 = n4, n4 = t4), t4 = e5(r3.r, n4), r3.r = r3.l, r3.l = t4, r3;
  }, qe4 = [], Ne4 = 0; Ne4 < 5; )
    qe4.push({first: null, last: null, size: 0}), Ne4 += 1;
  var je4, Oe4, Ce3 = function() {
    for (var e5 = 0; e5 < 5; e5++) {
      var r3 = qe4[e5];
      if (r3.size > 0) {
        if (e5 === 2 || e5 === 3) {
          r3.size -= 1;
          var n4 = Se4.v;
          return Se4 = Ae4(Se4.l, Se4.r), n4;
        }
        r3.size === 1 && (r3.last = null);
        var t4 = r3.first;
        return r3.first = t4.r, r3.size -= 1, t4.v;
      }
    }
  }, Pe2 = function(e5, r3, n4, t4, a3, o3) {
    return Fe4(0, {a: null, b: null, node: n4, parent: t4, value: a3, page: r3, forkPage: o3}, e5);
  }, Fe4 = function(e5, r3, n4, t4) {
    t4 === void 0 && (t4 = 0);
    var a3 = Re4(n4), o3 = qe4[a3], i3 = {v: {idx: e5, stack: r3, type: n4, id: t4}, l: 0, r: 0};
    a3 === 2 || a3 === 3 ? Se4 = Ae4(Se4, i3) : (o3.size === 0 ? o3.first = i3 : o3.last.r = i3, o3.last = i3), o3.size += 1;
  }, Re4 = function(e5) {
    switch (e5) {
      case "child":
        return 0;
      case "pure":
        return 1;
      case "barrier":
        return 2;
      case "sampler":
        return 3;
      case "effect":
        return 4;
      default:
        return -1;
    }
  }, _e3 = new Set(), De4 = 1, Ie3 = 0, Me4 = null, Ee4 = function(e5) {
    je4 = e5;
  }, ze3 = function(e5) {
    Me4 = e5;
  }, Te4 = function(e5, r3) {
    if (e5) {
      for (; e5 && !e5.reg[r3]; )
        e5 = ve4(e5);
      if (e5)
        return e5;
    }
    return null;
  }, We2 = function(e5, r3, n4) {
    return (Te4(e5, n4) || r3).reg[n4];
  }, He3 = function(e5, r3, n4) {
    var t4 = r3.fn;
    try {
      return t4(de4(n4), e5.scope, n4);
    } catch (a3) {
      console.error(a3), e5.fail = 1;
    }
  }, Ue3 = function(e5, r3) {
    return "" + e5.shortName + r3;
  }, Be4 = function(e5, r3) {
    return r3 == null ? Ue3(e5, " \u2192 *") : r3;
  }, Ge3 = function(e5, r3) {
    T4(e5), pe4(e5) && r3(le3(e5), pe4(e5));
  }, $e3 = function(e5) {
    var r3;
    return Ge3(e5[0], function(n4, t4) {
      r3 = n4, e5 = t4;
    }), [e5, r3];
  }, Je3 = function(e5, r3) {
    return e5.includes(r3);
  }, Ke3 = function(e5, r3) {
    var n4 = e5.indexOf(r3);
    n4 !== -1 && e5.splice(n4, 1);
  }, Le3 = function(e5, r3) {
    Ke3(e5.next, r3), Ke3(fe4(e5), r3), Ke3(ce3(e5), r3);
  }, Qe3 = function e5(r3, n4, t4) {
    var a3;
    r3.next.length = 0, r3.seq.length = 0, r3.scope = null;
    for (var o3 = ce3(r3); a3 = o3.pop(); )
      Le3(a3, r3), (n4 || t4 && !r3.meta.sample || a3.family.type === "crosslink") && e5(a3, n4, a3.meta.op !== "on" && t4);
    for (o3 = fe4(r3); a3 = o3.pop(); )
      Le3(a3, r3), t4 && a3.family.type === "crosslink" && e5(a3, n4, a3.meta.op !== "on" && t4);
  }, Ve3 = function(e5) {
    return e5.clear();
  }, Xe3 = function(e5, r3) {
    var n4 = (r3 === void 0 ? {} : r3).deep, t4 = 0;
    if (e5.ownerSet && e5.ownerSet.delete(e5), F3(e5))
      Ve3(me4(e5));
    else if (D2(e5)) {
      t4 = 1;
      var a3 = e5.history;
      Ve3(a3.events), Ve3(a3.effects), Ve3(a3.stores), Ve3(a3.domains);
    }
    Qe3(ue4(e5), !!n4, t4);
  }, Ye4 = function(e5) {
    var r3 = $3(Xe3, e5, void 0);
    return r3.unsubscribe = r3, r3;
  }, Ze3 = function(e5, r3, n4) {
    return o2({node: n4.node, parent: e5, child: r3, scope: n4.scope, meta: n4.meta, family: {owners: [e5, r3], links: r3}, regional: 1});
  }, er = function(e5) {
    var r3;
    Ge3(e5, function(n5, t4) {
      r3 = n5, e5 = t4;
    });
    var n4 = e5.from, a3 = e5.to, i3 = e5.meta, u3 = i3 === void 0 ? {op: "forward"} : i3;
    return t3(n4, "forward", '"from"'), t3(a3, "forward", '"to"'), r3 && (u3.config = r3), Ye4(o2({parent: n4, child: a3, meta: u3, family: {}, regional: 1}));
  }, rr = function(e5, r3) {
    if (z3(r3) || M4(".watch argument should be a function"), je4) {
      var n4 = je4.nodeMap[ue4(e5).id];
      n4 && (e5 = n4);
    }
    return Ye4(o2({scope: {fn: r3}, node: [Z4({fn: ie4})], parent: e5, meta: {op: "watch"}, family: {owners: e5}, regional: 1}));
  }, nr = function e5(r3, n4) {
    return E3(r3) && (e5(le3(r3), n4), r3.name != null && (E3(r3.name) ? e5(r3.name, n4) : z3(r3.name) ? n4.handler = r3.name : n4.name = r3.name), r3.loc && (n4.loc = r3.loc), (r3.sid || r3.sid === null) && (n4.sid = r3.sid), r3.handler && (n4.handler = r3.handler), r3.updateFilter && (n4.updateFilter = r3.updateFilter), ve4(r3) && (n4.parent = ve4(r3)), "strict" in r3 && (n4.strict = r3.strict), r3.named && (n4.named = r3.named), e5(pe4(r3), n4)), n4;
  }, tr = function(e5, r3, n4) {
    n4 === void 0 && (n4 = "event"), ve4(e5) && ve4(e5).hooks[n4](r3);
  }, ar = function(e5, r3, n4, t4) {
    var a3 = nr({name: t4, config: n4}, {}), o3 = e5 === "domain", i3 = H4(), u3 = a3.parent, c4 = u3 === void 0 ? null : u3, s3 = a3.sid, l3 = s3 === void 0 ? null : s3, p4 = a3.strict, d4 = p4 === void 0 ? 1 : p4, m4 = a3.named, v4 = m4 === void 0 ? null : m4, h4 = v4 || a3.name || (o3 ? "" : i3), g5 = f3(h4, c4), y4 = {unit: r3.kind = e5, name: r3.shortName = h4, sid: r3.sid = ke4(l3), named: v4, unitId: r3.id = i3};
    if (r3.parent = c4, r3.compositeName = g5, r3.defaultConfig = a3, r3.thru = function(e6) {
      return e6(r3);
    }, r3.getType = function() {
      return g5.fullName;
    }, !o3) {
      r3.subscribe = function(e6) {
        return T4(e6), r3.watch(z3(e6) ? e6 : function(r4) {
          e6.next && e6.next(r4);
        });
      }, r3[q2] = function() {
        return r3;
      };
      var b4 = be4();
      b4 && (y4.nativeTemplate = b4);
    }
    return Oe4 = d4, y4;
  }, or = function(e5) {
    return p3({named: e5});
  }, ir = function(e5, r3, n4, t4) {
    return Ze3(e5, r3, {scope: {fn: t4}, node: [X4({fn: ie4})], meta: {op: n4}});
  }, ur = function(e5, r3, n4, t4) {
    var a3;
    E3(n4) && (a3 = n4, n4 = n4.fn);
    var o3 = p3(Ue3(e5, " \u2192? *"), a3);
    return Ze3(e5, o3, {scope: {fn: n4}, node: t4, meta: {op: r3}}), o3;
  }, fr = function(e5, r3, n4, t4, a3, o3) {
    var i3 = se4(r3), u3 = [Q3({store: i3, to: "a"}), X4({fn: t4 ? oe4 : ae4}), V4.defined(), V4.changed({store: i3}), o3 && Y4({fn: function(e6, r4, n5) {
      return o3(e6, n5.a);
    }}), ee4({store: i3})], f4 = be4();
    if (f4 && (u3.unshift(f4.loader), u3.push(f4.upward), F3(e5))) {
      var c4 = se4(e5);
      Je3(f4.plain, c4) || (Je3(f4.closure, c4) || f4.closure.push(c4), i3.before || (i3.before = []), i3.before.push({type: "closure", of: c4}));
    }
    return Ze3(e5, r3, {scope: {fn: a3}, node: u3, meta: {op: n4}});
  }, cr = function(e5) {
    return function(r3) {
      return e5.apply(void 0, r3);
    };
  }, sr = function(e5, r3, n4, t4) {
    var a3 = e5 ? function(e6) {
      return e6.slice();
    } : function(e6) {
      return Object.assign({}, e6);
    }, o3 = e5 ? [] : {}, i3 = be4(), f4 = a3(o3), s3 = ne4(f4), l3 = ne4(1);
    s3.type = e5 ? "list" : "shape", i3 && i3.plain.push(s3, l3);
    var p4 = d3(f4, {name: n4 || u2(r3)});
    ue4(p4).meta.isCombine = 1;
    var m4 = [V4.defined(), Q3({store: s3, to: "a"}), Y4({fn: function(e6, r4, n5) {
      return e6 !== n5.a[r4.key];
    }}), Q3({store: l3, to: "b"}), X4({fn: function(e6, r4, n5) {
      var t5 = r4.key;
      n5.b && (n5.a = (0, r4.clone)(n5.a)), n5.a[t5] = e6;
    }}), Q3({from: "a", target: s3}), Q3({from: "value", store: 0, target: l3}), L3({priority: "barrier"}), Q3({from: "value", store: 1, target: l3}), Q3({store: s3}), t4 && X4({fn: t4}), V4.changed({store: se4(p4)})], v4 = s3.before = [];
    return c3(r3, function(e6, r4) {
      if (F3(e6)) {
        o3[r4] = e6.defaultState, f4[r4] = e6.getState();
        var n5 = Ze3(e6, p4, {scope: {key: r4, clone: a3}, node: m4, meta: {op: "combine"}}), t5 = se4(e6);
        v4.push({type: "field", field: r4, from: t5}), i3 && (Je3(i3.plain, t5) || n5.seq.unshift(i3.loader));
      } else
        f4[r4] = o3[r4] = e6;
    }), p4.defaultShape = r3, s3.after = [t4 ? {type: j2, to: se4(p4), fn: t4} : {type: "copy", to: se4(p4)}], i3 || (p4.defaultState = t4 ? se4(p4).current = t4(f4) : o3), p4;
  }, lr = function(e5) {
    var r3 = e5.params, n4 = e5.req, t4 = e5.ok, a3 = e5.anyway, o3 = e5.stack;
    return function(e6) {
      return i2({target: [a3, pr], params: [t4 ? {status: "done", params: r3, result: e6} : {status: "fail", params: r3, error: e6}, {fn: t4 ? n4.rs : n4.rj, value: e6}], defer: 1, page: o3.page, forkPage: he4(o3)});
    };
  }, pr = o2({node: [Z4({fn: function(e5) {
    (0, e5.fn)(e5.value);
  }})], meta: {op: "fx", fx: "sidechain"}}), dr = function(e5, r3, n4) {
    return e5.create = function(r4) {
      return i2(e5, r4), r4;
    }, ue4(e5).seq.push(X4({fn: function(e6, r4, n5) {
      return n5.forkPage = null, e6;
    }})), e5.watch(function(e6) {
      ge4(n4, [e6]), r3.add(e6), e6.ownerSet || (e6.ownerSet = r3), ve4(e6) || (e6.parent = n4);
    }), ge4(n4, [e5]), function(n5) {
      return r3.forEach(n5), e5.watch(n5);
    };
  }, mr = ["source", "clock", "target"], vr = function(e5, r3, n4, t4) {
    var a3 = e5[r3];
    a3 && i2({target: a3, params: Array.isArray(a3) ? a3.map(function() {
      return n4;
    }) : n4, defer: 1, stack: t4});
  };
  exports.allSettled = function(e5, r3) {
    var n4 = r3.scope, t4 = r3.params;
    if (!C(e5))
      return Promise.reject(Error("first argument should be unit"));
    var a3 = v3();
    a3.parentFork = je4;
    var o3 = n4.graphite.scope.forkInFlightCounter;
    o3.scope.defers.push(a3);
    var u3 = [n4.find(e5)], f4 = [];
    return _3(e5) ? f4.push({params: t4, req: {rs: function(e6) {
      a3.value = {status: "done", value: e6};
    }, rj: function(e6) {
      a3.value = {status: "fail", value: e6};
    }}}) : f4.push(t4), u3.push(o3), f4.push(null), i2({target: u3, params: f4, forkPage: n4}), a3.req;
  }, exports.attach = function(e5) {
    var r3, n4;
    Ge3(e5, function(r4, t5) {
      n4 = r4, e5 = t5;
    });
    var t4 = e5.source, a3 = e5.effect, o3 = e5.mapParams;
    o3 || (o3 = t4 ? function(e6, r4) {
      return r4;
    } : function(e6) {
      return e6;
    });
    var u3, f4 = h3(e5, n4), c4 = ue4(f4).scope.runner, s3 = function(e6, r4, n5) {
      var t5, a4 = e6.params, u4 = e6.req, f5 = r4.finally, c5 = r4.effect, s4 = lr({params: a4, req: u4, ok: 0, anyway: f5, stack: n5});
      try {
        t5 = o3(a4, n5.a);
      } catch (l4) {
        return s4(l4);
      }
      i2({target: c5, params: {params: t5, req: {rs: lr({params: a4, req: u4, ok: 1, anyway: f5, stack: n5}), rj: s4}}, page: n5.page, defer: 1});
    };
    if (t4) {
      var l3;
      F3(t4) ? l3 = t4 : (l3 = m3(t4), ge4(f4, [l3]));
      var p4 = Q3({from: N3, store: se4(l3), to: "a"});
      u3 = [Z4({fn: function(e6) {
        return e6;
      }}), p4, X4({fn: s3})], xe3(p4, c4.reg);
    } else
      u3 = [Z4({fn: s3})];
    return c4.scope.effect = a3, c4.meta.onCopy.push("effect"), (r3 = c4.seq).splice.apply(r3, [0, 1].concat(u3)), tr(a3, f4, "effect"), f4;
  }, exports.clearNode = Xe3, exports.combine = m3, exports.createApi = function() {
    for (var e5 = arguments.length, r3 = new Array(e5), n4 = 0; n4 < e5; n4++)
      r3[n4] = arguments[n4];
    var t4 = $e3(r3), a3 = t4[0], o3 = a3[0], i3 = a3[1], u3 = t4[1], f4 = {};
    return c3(i3, function(e6, r4) {
      var n5 = f4[r4] = p3(r4, {parent: ve4(o3), config: u3});
      o3.on(n5, e6), tr(o3, n5);
    }), f4;
  }, exports.createDomain = function e5(r3, n4) {
    var t4 = new Set(), a3 = new Set(), i3 = new Set(), u3 = new Set(), f4 = o2({family: {type: "domain"}, regional: 1}), s3 = {history: {domains: t4, stores: a3, effects: i3, events: u3}, graphite: f4};
    f4.meta = ar("domain", s3, n4, r3);
    var l3 = ["onEvent", "onEffect", "onStore", "onDomain"].map(or), m4 = l3[0], v4 = l3[1], g5 = l3[2], y4 = l3[3];
    s3.hooks = {event: m4, effect: v4, store: g5, domain: y4}, s3.onCreateEvent = dr(m4, u3, s3), s3.onCreateEffect = dr(v4, i3, s3), s3.onCreateStore = dr(g5, a3, s3), s3.onCreateDomain = dr(y4, t4, s3), s3.createEvent = s3.event = function(e6, r4) {
      return m4(p3(e6, {parent: s3, config: r4}));
    }, s3.createEffect = s3.effect = function(e6, r4) {
      return v4(h3(e6, {parent: s3, config: r4}));
    }, s3.createDomain = s3.domain = function(r4, n5) {
      return e5({name: r4, parent: s3, config: n5});
    }, s3.createStore = s3.store = function(e6, r4) {
      return g5(d3(e6, {parent: s3, config: r4}));
    };
    var b4 = ve4(s3);
    return b4 && (c3(s3.hooks, function(e6, r4) {
      er({from: e6, to: b4.hooks[r4]});
    }), b4.hooks.domain(s3)), s3;
  }, exports.createEffect = h3, exports.createEvent = p3, exports.createNode = o2, exports.createStore = d3, exports.createStoreObject = m3, exports.fork = function(e5, r3) {
    var n4 = r3 === void 0 ? {} : r3, t4 = n4.values, a3 = n4.handlers;
    D2(e5) || M4("first argument of fork should be domain");
    var i3 = !!t4;
    t4 = w3(t4 || {});
    var u3, f4, l3, p4, d4, m4, v4 = function(e6) {
      function r4(e7) {
        var r5 = ue4(e7), t6 = n5.indexOf(r5);
        if (t6 === -1) {
          var a5 = "unit";
          e7 !== r5 && e7.id !== e7.shortName && (a5 = e7.shortName), M4(a5 + " not found in forked scope");
        }
        return p5[t6];
      }
      var n5 = S4(e6), t5 = new Map(), a4 = new Set(), i4 = X4({fn: function(e7, r5, n6) {
        return (!n6.node.meta.isCombine || ve4(n6) && ve4(n6).node.meta.op !== "combine") && a4.add(n6.node.meta.forkOf.id), e7;
      }}), u4 = o2({scope: {defers: [], inFlight: 0, fxID: 0}, node: [X4({fn: function(e7, r5, n6) {
        n6.parent ? n6.parent.node.meta.named === "finally" ? r5.inFlight -= 1 : (r5.inFlight += 1, r5.fxID += 1) : r5.fxID += 1;
      }}), L3({priority: "sampler"}), Z4({fn: function(e7, r5) {
        var n6 = r5.defers, t6 = r5.fxID;
        r5.inFlight > 0 || n6.length === 0 || Promise.resolve().then(function() {
          r5.fxID === t6 && s2(n6.splice(0, n6.length), function(e8) {
            Ee4(e8.parentFork), e8.rs(e8.value);
          });
        });
      }})], meta: {unit: "forkInFlightCounter"}}), f5 = {}, l4 = {}, p5 = n5.map(function(e7) {
        var r5 = e7.next, n6 = e7.meta, t6 = e7.scope, a5 = o2({node: e7.seq.map(function(e8) {
          return {id: e8.id, type: e8.type, data: Object.assign({}, e8.data), hasRef: e8.hasRef};
        }), child: [].concat(r5), meta: Object.assign({forkOf: e7}, n6), scope: Object.assign({}, t6)});
        return a5.family = {type: e7.family.type, links: [].concat(ce3(e7)), owners: [].concat(fe4(e7))}, f5[e7.id] = a5, n6.sid && (l4[n6.sid] = a5), a5;
      }), d5 = {};
      return s2(p5, function(e7) {
        var n6 = e7.reg, a5 = e7.scope, o3 = e7.meta, f6 = o3.onCopy, l5 = o3.op, p6 = o3.unit;
        switch (c3(n6, function(e8, r5) {
          var a6 = t5.get(e8);
          a6 || t5.set(e8, a6 = {id: e8.id, current: e8.current}), d5[r5] = n6[r5] = a6;
        }), f6 && s2(f6, function(e8) {
          var n7 = a5[e8];
          a5[e8] = Array.isArray(n7) ? n7.map(r4) : r4(n7);
        }), A2(e7, function(e8, n7, t6) {
          t6[n7] = r4(e8);
        }), l5 || p6) {
          case N3:
            e7.meta.wrapped = function(e8) {
              return {kind: N3, getState: function() {
                return e8.reg[e8.scope.state.id].current;
              }, updates: {watch: G4(rr, e8)}, graphite: e8, family: e8.family};
            }(e7), e7.meta.sid && e7.seq.push(i4);
            break;
          case "effect":
            e7.next.push(u4);
            break;
          case "fx":
            a5.finally.next.push(u4);
        }
      }), {cloneOf: e6, changedStores: a4, nodeMap: f5, sidMap: l4, clones: p5, find: r4, reg: d5, getState: function(e7) {
        return r4(e7).meta.wrapped.getState();
      }, graphite: o2({family: {type: "domain", links: [u4].concat(p5)}, meta: {unit: "fork"}, scope: {forkInFlightCounter: u4}})};
    }(e5);
    if (i3 && (u3 = S4(e5), f4 = {}, l3 = {}, p4 = new Set(), d4 = new Set(), m4 = Object.getOwnPropertyNames(t4), s2(u3, function(e6) {
      var r4 = e6.meta.nativeTemplate;
      c3(e6.reg, function(e7, n5) {
        f4[n5] = e7, r4 && d4.add(n5);
      });
    }), s2(v4.clones, function(e6) {
      var r4 = e6.reg, n5 = e6.meta, a4 = n5.sid;
      if (n5.unit === N3 && a4 && Je3(m4, a4)) {
        var o3 = e6.scope.state;
        r4[o3.id].current = t4[a4], p4.add(o3), v4.changedStores.add(e6.meta.forkOf.id);
      }
      c3(r4, function(e7, r5) {
        l3[r5] = e7;
      });
    }), s2(x2(k2(f4), d4), function(e6) {
      (function(e7, r4) {
        var n5 = 0;
        if (r4 && r4.before && !p4.has(e7) && s2(r4.before, function(r5) {
          switch (r5.type) {
            case j2:
              e7.current = r5.fn(l3[r5.from.id].current);
              break;
            case "field":
              var t6 = l3[r5.from.id];
              n5 || (n5 = 1, e7.current = Array.isArray(e7.current) ? [].concat(e7.current) : Object.assign({}, e7.current)), e7.current[r5.field] = t6.current;
          }
        }), r4 && r4.after) {
          var t5 = e7.current;
          s2(r4.after, function(e8) {
            var r5 = l3[e8.to.id];
            switch (e8.type) {
              case "copy":
                r5.current = t5;
                break;
              case j2:
                r5.current = e8.fn(t5);
            }
          });
        }
      })(l3[e6], f4[e6]);
    })), a3) {
      a3 = w3(a3);
      var h4 = Object.keys(a3);
      s2(v4.clones, function(e6) {
        var r4 = e6.scope, n5 = e6.meta;
        n5.sid && Je3(h4, n5.sid) && (r4.runner.scope.getHandler = function() {
          return a3[n5.sid];
        });
      });
    }
    return v4;
  }, exports.forward = er, exports.fromObservable = function(e5) {
    T4(e5);
    var r3 = q2 in e5 ? e5[q2]() : e5;
    r3.subscribe || M4("expect observable to have .subscribe");
    var n4 = p3(), t4 = $3(Xe3, n4, void 0);
    return r3.subscribe({next: n4, error: t4, complete: t4}), n4;
  }, exports.guard = function() {
    for (var e5 = {op: "guard"}, r3 = "guard", n4 = arguments.length, a3 = new Array(n4), i3 = 0; i3 < n4; i3++)
      a3[i3] = arguments[i3];
    var u3 = $e3(a3), f4 = u3[0], c4 = f4[0], s3 = f4[1], l3 = u3[1];
    l3 && (e5.config = l3, l3.name && (r3 = l3.name)), s3 || (c4 = (s3 = c4).source);
    var d4 = s3, v4 = d4.filter, h4 = d4.greedy, y4 = d4.clock, k3 = d4.name, w4 = k3 === void 0 ? r3 : k3, x3 = s3.target || p3(w4, e5.config), S5 = C(v4), A3 = 1;
    return c4 === void 0 && (t3(y4, "guard", "clock"), Array.isArray(y4) && (y4 = g4(y4)), c4 = y4, A3 = 0), A3 && !C(c4) && (c4 = m3(c4)), y4 && (t3(y4, "guard", "clock"), c4 = b3({source: c4, clock: y4, greedy: h4, fn: S5 ? null : function(e6, r4) {
      return {source: e6, clock: r4};
    }})), t3(x3, "guard", "target"), S5 ? b3({source: v4, clock: c4, target: o2({node: [Y4({fn: function(e6) {
      return e6.guard;
    }}), X4({fn: function(e6) {
      return e6.data;
    }})], child: x3, meta: e5, family: {owners: [c4, v4, x3].concat([].concat(y4 || [])), links: x3}, regional: 1}), fn: function(e6, r4) {
      return {guard: e6, data: r4};
    }, greedy: h4, name: w4}) : (z3(v4) || M4("`filter` should be function or unit"), Ze3(c4, x3, {scope: {fn: v4}, node: y4 ? [Y4({fn: function(e6, r4) {
      return (0, r4.fn)(e6.source, e6.clock);
    }}), X4({fn: function(e6) {
      return e6.source;
    }})] : [Y4({fn: ie4})], meta: e5})), x3;
  }, exports.hydrate = function(e5, r3) {
    var n4 = r3.values, t4 = E3(e5) && e5.cloneOf;
    D2(e5) || t4 || M4("first argument of hydrate should be domain or scope"), E3(n4) || M4("values property should be an object");
    var a3, o3, u3 = w3(n4);
    if (t4)
      a3 = [], o3 = [], c3(u3, function(r4, n5) {
        var t5 = e5.sidMap[n5];
        t5 && (a3.push(t5), o3.push(r4), e5.changedStores.add(t5.meta.forkOf.id));
      });
    else {
      var f4 = function(e6) {
        var r4 = e6.flatGraphUnits, n5 = e6.values, t5 = e6.collectWatches, a4 = [], o4 = [], i3 = {}, u4 = new Set(), f5 = Object.getOwnPropertyNames(n5);
        return s2(r4, function(e7) {
          var r5 = e7.reg, s3 = e7.meta, l3 = s3.op, p4 = s3.sid;
          if (s3.unit === N3 && p4 && Je3(f5, p4)) {
            var d4 = e7.scope.state;
            d4.current = n5[p4], u4.add(d4);
          }
          if (t5 && l3 === "watch") {
            var m4 = e7.family.owners[0];
            m4.meta.unit === N3 && (a4.push(e7), o4.push(m4.scope.state));
          }
          c3(r5, function(e8, r6) {
            i3[r6] = e8;
          });
        }), s2(x2(k2(i3)), function(e7) {
          (function(e8) {
            var r5 = 0;
            if (e8.before && !u4.has(e8) && s2(e8.before, function(n7) {
              switch (n7.type) {
                case j2:
                  e8.current = n7.fn(n7.from.current);
                  break;
                case "field":
                  var t6 = n7.from;
                  r5 || (r5 = 1, e8.current = Array.isArray(e8.current) ? [].concat(e8.current) : Object.assign({}, e8.current)), e8.current[n7.field] = t6.current;
              }
            }), e8.after) {
              var n6 = e8.current;
              s2(e8.after, function(e9) {
                var r6 = e9.to;
                switch (e9.type) {
                  case "copy":
                    r6.current = n6;
                    break;
                  case j2:
                    r6.current = e9.fn(n6);
                }
              });
            }
          })(i3[e7]);
        }), {storeWatches: a4, storeWatchesRefs: o4};
      }({flatGraphUnits: S4(e5), values: u3, collectWatches: 1});
      a3 = f4.storeWatches, o3 = f4.storeWatchesRefs.map(function(e6) {
        return e6.current;
      });
    }
    i2({target: a3, params: o3, forkPage: t4 ? e5 : 0});
  }, exports.is = I4, exports.launch = i2, exports.merge = g4, exports.restore = function(e5, r3, n4) {
    if (F3(e5))
      return e5;
    if (C(e5)) {
      var t4, a3 = ve4(e5);
      return R2(e5) && (t4 = d3(r3, {parent: a3, name: e5.shortName, \u0254: n4}).on(e5, function(e6, r4) {
        return r4;
      })), _3(e5) && (t4 = d3(r3, {parent: a3, name: e5.shortName, \u0254: n4}).on(e5.done, function(e6, r4) {
        return r4.result;
      })), a3 && a3.hooks.store(t4), t4;
    }
    var o3 = Array.isArray(e5) ? [] : {};
    return c3(e5, function(e6, r4) {
      o3[r4] = F3(e6) ? e6 : d3(e6, {name: r4});
    }), o3;
  }, exports.sample = b3, exports.scopeBind = function(e5) {
    je4 || M4("scopeBind cannot be called outside of forked .watch");
    var r3 = je4, n4 = je4.find(e5);
    return _3(e5) ? function(e6) {
      var t4 = v3();
      i2({target: n4, params: {params: e6, req: t4}, forkPage: r3});
    } : function(e6) {
      return i2({target: n4, params: e6, forkPage: r3}), e6;
    };
  }, exports.serialize = function(e5, r3) {
    var n4 = e5.changedStores, t4 = r3 === void 0 ? {} : r3, a3 = t4.ignore, o3 = a3 === void 0 ? [] : a3, i3 = t4.onlyChanges, u3 = {};
    return s2(e5.clones, function(e6) {
      var r4 = e6.meta, t5 = e6.scope, a4 = e6.reg;
      if (r4.unit === N3) {
        var o4 = r4.sid;
        o4 && (!i3 && !r4.isCombine || n4.has(r4.forkOf.id)) && (u3[o4] = a4[t5.state.id].current);
      }
    }), s2(o3, function(e6) {
      var r4 = e6.sid;
      r4 && delete u3[r4];
    }), u3;
  }, exports.setStoreName = function(e5, r3) {
    var n4 = f3(r3, ve4(e5));
    if (e5.shortName = r3, e5.compositeName) {
      var t4 = e5.compositeName;
      t4.path = n4.path, t4.shortName = n4.shortName, t4.fullName = n4.fullName;
    } else
      e5.compositeName = n4;
  }, exports.split = function() {
    for (var e5, r3 = arguments.length, n4 = new Array(r3), t4 = 0; t4 < r3; t4++)
      n4[t4] = arguments[t4];
    var a3 = $e3(n4), i3 = a3[0], u3 = i3[0], f4 = i3[1], s3 = a3[1], l3 = !f4;
    l3 && (e5 = u3.cases, f4 = u3.match, u3 = u3.source);
    var d4 = F3(f4), m4 = !C(f4) && z3(f4), v4 = !d4 && !m4 && E3(f4);
    e5 || (e5 = {}), l3 || (v4 || M4("match should be an object"), c3(f4, function(r4, n5) {
      e5[n5] = p3(s3);
    }), e5.__ = p3(s3));
    var h4, g5 = be4(), y4 = new Set([].concat(u3, Object.values(e5))), b4 = Object.keys(d4 || m4 ? e5 : f4);
    if (d4 || m4)
      d4 && y4.add(f4), h4 = [d4 && L3({priority: "sampler"}), d4 && Q3({store: se4(f4), to: "a"}), Y4({fn: function(e6, r4, n5) {
        var t5 = String(d4 ? n5.a : f4(e6));
        vr(r4, Je3(b4, t5) ? t5 : "__", e6, n5);
      }})];
    else if (v4) {
      var k3 = ne4({});
      k3.type = "shape";
      var w4, x3 = k3.before = [], S5 = [Q3({store: k3, to: "a"}), X4({fn: function(e6, r4, n5) {
        n5.a[r4.key] = e6;
      }})], A3 = [];
      c3(f4, function(e6, r4) {
        if (C(e6)) {
          w4 = 1, A3.push(r4), y4.add(e6);
          var n5 = Ze3(e6, [], {node: S5, scope: {key: r4}});
          if (F3(e6)) {
            k3.current[r4] = e6.getState();
            var t5 = se4(e6);
            x3.push({type: "field", field: r4, from: t5}), g5 && (Je3(g5.plain, t5) || n5.seq.unshift(g5.loader));
          }
        }
      }), w4 && g5 && g5.plain.push(k3), h4 = [w4 && L3({priority: "sampler"}), w4 && Q3({store: k3, to: "a"}), Y4({fn: function(e6, r4, n5) {
        for (var t5 = 0; t5 < b4.length; t5++) {
          var a4 = b4[t5];
          if (Je3(A3, a4) ? n5.a[a4] : f4[a4](e6))
            return void vr(r4, a4, e6, n5);
        }
        vr(r4, "__", e6, n5);
      }})];
    } else
      M4("expect match to be unit, function or object");
    if (o2({meta: {onCopy: Object.keys(e5), op: "split"}, parent: u3, scope: e5, node: h4, family: {type: "crosslink", owners: [].concat(y4)}, regional: 1}), !l3)
      return e5;
  }, exports.step = re4, exports.version = "21.8.1", exports.withFactory = function(e5) {
    var r3 = e5.name, n4 = e5.loc, t4 = e5.method, i3 = e5.fn;
    return a2(o2({meta: {sidRoot: ke4(e5.sid), name: r3, loc: n4, method: t4}}), i3);
  }, exports.withRegion = a2;
});
var forward = compat.forward;

// dist/user-projects-form/model/project-details.js
var $projectDetails = u([]);
var $newPDKey = u(0);
var idIncremented = c();
var idAssigned = c();
$newPDKey.on(idIncremented, (prev) => prev + 1).on(idAssigned, (_3, n3) => n3);
var newProjectDetailsTriedToAdd = c();
var newProjectDetailsAdded = c();
v({
  clock: newProjectDetailsTriedToAdd,
  source: $newPDKey,
  target: [newProjectDetailsAdded, idIncremented]
});
$projectDetails.on(newProjectDetailsAdded, (prev, pdId) => [
  ...prev,
  {
    id: `${pdId}`,
    name: "",
    description: "",
    error: {description: "", duration: "", name: ""},
    isTouched: {description: false, duration: false, name: false},
    duration: {unit: TimeUnits.Month, value: 0}
  }
]);
var projectDetailsRemoved = c();
var projectDetailsNameChanged = c();
var projectDetailsDescriptionChanged = c();
var projectDetailsDurationUnitChanged = c();
var projectDetailsDurationValueChanged = c();
var allProjectsDetailsTouched = c();
$projectDetails.on(projectDetailsRemoved, (prev, removedId) => {
  return prev.filter((pd2) => pd2.id !== removedId);
}).on(projectDetailsNameChanged, (prev, {id: id2, newName}) => {
  return prev.map((pd2) => {
    if (pd2.id !== id2)
      return pd2;
    return {
      ...pd2,
      name: newName,
      error: {
        ...pd2.error,
        name: newName === "" ? "Required" : ""
      },
      isTouched: {
        ...pd2.isTouched,
        name: true
      }
    };
  });
}).on(projectDetailsDescriptionChanged, (prev, {id: id2, value}) => {
  return prev.map((pd2) => {
    if (pd2.id !== id2)
      return pd2;
    return {
      ...pd2,
      description: value,
      error: {
        ...pd2.error,
        description: value === "" ? "Required" : ""
      },
      isTouched: {
        ...pd2.isTouched,
        description: true
      }
    };
  });
}).on(projectDetailsDurationUnitChanged, (prev, {id: id2, unit}) => {
  return prev.map((pd2) => {
    if (pd2.id !== id2)
      return pd2;
    return {
      ...pd2,
      duration: {unit, value: pd2.duration.value},
      error: {
        ...pd2.error,
        duration: pd2.duration.value === 0 ? "Required" : ""
      },
      isTouched: {
        ...pd2.isTouched,
        duration: true
      }
    };
  });
}).on(projectDetailsDurationValueChanged, (prev, {id: id2, value}) => {
  return prev.map((pd2) => {
    if (pd2.id !== id2)
      return pd2;
    return {
      ...pd2,
      duration: {value, unit: pd2.duration.unit},
      error: {
        ...pd2.error,
        duration: value === 0 ? "Required" : ""
      },
      isTouched: {
        ...pd2.isTouched,
        duration: true
      }
    };
  });
}).on(allProjectsDetailsTouched, (prev) => prev.map((pd2) => ({
  ...pd2,
  isTouched: {
    description: true,
    duration: true,
    name: true
  },
  error: {
    name: pd2.name === "" ? "Required" : "",
    duration: pd2.duration.value === 0 ? "Required" : "",
    description: pd2.description === "" ? "Required" : ""
  }
}))).on(getProjectsDataFx.doneData, (prev, data) => {
  if (!data)
    return void 0;
  let id2 = 0;
  return data.details.map((details) => {
    id2 += 1;
    return {
      id: `${id2}`,
      ...details,
      name: details.projectName,
      isTouched: {description: false, name: false, duration: false},
      error: {duration: "", name: "", description: ""}
    };
  });
});
forward({
  from: getProjectsDataFx.doneData.map((data) => {
    if (data)
      return data.details.length + 1;
    return 0;
  }),
  to: idAssigned
});

// dist/user-projects-form/model/validation.js
var saveParsedData = c();
var $parsedDetails = S2(saveParsedData, {details: [], projects: [], username: ""});
var triedSwitchToJsonPreview = c();
var triedToSave = c();
var validateProjectsDataForJsonPreview = c();
var validateProjectsDataForSavingData = c();
ct({
  from: [validateProjectsDataForJsonPreview, validateProjectsDataForSavingData],
  to: [usernameTouched, allProjectsDetailsTouched]
});
var $fullFormErrors = p({
  usernameError: $usernameInnerError,
  pDetails: $projectDetails
});
var $fullForm = p({
  username: $username,
  projectNames: $projectNames,
  projectDetails: $projectDetails
});
var validateProjectsDataForJsonPreviewFx = m(validateForm);
var validateProjectsDataForSavingDataFx = m(validateForm);
var parseProjectsDataForJsonPreviewFx = m(convertDataToParsed);
var parseProjectsDataForSavingDataFx = m(convertDataToParsed);
ct({
  from: triedSwitchToJsonPreview,
  to: validateProjectsDataForJsonPreview
});
v({
  clock: validateProjectsDataForJsonPreview,
  source: $fullFormErrors,
  target: validateProjectsDataForJsonPreviewFx
});
v({
  clock: validateProjectsDataForJsonPreviewFx.done,
  source: $fullForm,
  target: parseProjectsDataForJsonPreviewFx
});
ct({
  from: parseProjectsDataForJsonPreviewFx.doneData,
  to: saveParsedData
});
ct({
  from: parseProjectsDataForJsonPreviewFx.done,
  to: viewModeSwitchedToJson
});
ct({
  from: triedToSave,
  to: validateProjectsDataForSavingData
});
v({
  clock: validateProjectsDataForSavingData,
  source: $fullFormErrors,
  target: validateProjectsDataForSavingDataFx
});
v({
  clock: validateProjectsDataForSavingDataFx.done,
  source: $fullForm,
  target: parseProjectsDataForSavingDataFx
});
var saveParsedDataFx = m(apiClient.saveProjectsData);
ct({
  from: parseProjectsDataForSavingDataFx.doneData,
  to: [saveParsedData, saveParsedDataFx]
});
function validateForm({pDetails, usernameError}) {
  return new Promise((resolve, reject) => {
    if (usernameError) {
      reject();
      return;
    }
    const errorInDetails = pDetails.find(({error}) => {
      return error.description !== "" || error.name !== "" || error.duration !== "";
    });
    if (errorInDetails) {
      reject();
      return;
    }
    resolve();
  });
}
function convertDataToParsed({projectNames, projectDetails, username}) {
  return new Promise((resolve) => {
    resolve({
      username,
      projects: projectNames,
      details: projectDetails.map((pd2) => ({
        projectName: pd2.name,
        description: pd2.description,
        duration: {
          unit: pd2.duration.unit,
          value: pd2.duration.value
        }
      }))
    });
  });
}

// dist/user-projects-form/molecules/form-footer.js
var FormFooter = () => {
  const viewMode = e2($viewMode);
  const handlePreviewJson = () => {
    triedSwitchToJsonPreview();
  };
  const handleBackToForm = () => {
    viewModeSwitchedToForm();
  };
  const handleToggleView = () => {
    if (viewMode === "form")
      handlePreviewJson();
    if (viewMode === "json")
      handleBackToForm();
  };
  const handleSaveJson = () => {
    triedToSave();
  };
  return /* @__PURE__ */ react.createElement(FooterWrapper, null, /* @__PURE__ */ react.createElement(TextButton, {
    onClick: handleToggleView
  }, viewMode === "form" && "View form JSON", viewMode === "json" && "Back to form"), /* @__PURE__ */ react.createElement(ControlsWrapper, null, /* @__PURE__ */ react.createElement(Button, {
    onClick: () => userProjectsFormApi.userProjectsFormClosed()
  }, "Cancel"), /* @__PURE__ */ react.createElement(Button, {
    onClick: handleSaveJson
  }, "Save")));
};
var FooterWrapper = styled_components_default.footer`
  border-top: 1px solid;
  padding: 0.5rem;
`;
var ControlsWrapper = styled_components_default.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  & button:not(:last-child) {
    margin-right: 1rem;
  }
`;

// dist/user-projects-form/molecules/form-header.js
var FormHeader = () => {
  return /* @__PURE__ */ react.createElement(FormHeaderWrapper, null, /* @__PURE__ */ react.createElement(HeaderText, null, "User projects"), /* @__PURE__ */ react.createElement(CloseIcon, null));
};
var FormHeaderWrapper = styled_components_default.header`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid;
  display: flex;
  align-items: center;
  grid-template-columns: 1fr min-content;
  justify-content: space-between;
`;
var HeaderText = styled_components_default.h3`
  margin: 0 1rem 0 0;
`;
var CloseIcon = () => {
  const handleClose = () => userProjectsFormApi.userProjectsFormClosed();
  return /* @__PURE__ */ react.createElement(IconButton, {
    onClick: handleClose
  }, "X");
};

// dist/user-projects-form/atoms/username.js
var Username = () => {
  const name = e2($username);
  const error = e2($usernameError);
  return /* @__PURE__ */ react.createElement(FormMainTitleAndContent, {
    title: "Name"
  }, /* @__PURE__ */ react.createElement(TextField, {
    value: name,
    onChange: usernameChanged,
    onBlur: () => usernameTouched(),
    isError: !!error,
    helperText: error
  }));
};

// dist/user-projects-form/atoms/project-details-name.js
var ProjectDetailsName = ({projectDetails}) => {
  const projectNames = e2($projectNames);
  let nameList = [
    {label: "Choose project", value: ""},
    ...projectNames.map((name) => ({label: name, value: name}))
  ];
  const handlePDNameChange = (e4) => {
    projectDetailsNameChanged({id: projectDetails.id, newName: e4.target.value});
  };
  return /* @__PURE__ */ react.createElement(ProjectDetailsItemTemplate, {
    title: "Project"
  }, /* @__PURE__ */ react.createElement(Select, {
    options: nameList,
    value: projectDetails.name,
    onChange: handlePDNameChange,
    isError: projectDetails.isTouched.name && !!projectDetails.error.name,
    error: projectDetails.error.name
  }));
};

// dist/user-projects-form/atoms/project-details-description.js
var ProjectDetailsDescription = ({projectDetails}) => {
  const handlePDDescriptionChange = (e4) => {
    projectDetailsDescriptionChanged({id: projectDetails.id, value: e4.target.value});
  };
  return /* @__PURE__ */ react.createElement(ProjectDetailsItemTemplate, {
    title: "Details"
  }, /* @__PURE__ */ react.createElement(TextArea, {
    onChange: handlePDDescriptionChange,
    isError: projectDetails.isTouched.description && !!projectDetails.error.description,
    helperText: projectDetails.error.description
  }));
};

// dist/user-projects-form/atoms/remove-project-btn.js
var RemoveProjectBtn = ({pdId}) => {
  return /* @__PURE__ */ react.createElement(RemoveProjectBtnStyled, {
    onClick: () => projectDetailsRemoved(pdId)
  }, "X");
};
var RemoveProjectBtnStyled = styled_components_default(SmallIconButton)`
  position: absolute;
  right: -12px;
  top: -12px;
`;

// dist/user-projects-form/atoms/new-project-name.js
var NewProjectName = () => {
  const newProjectName = e2($newProjectName);
  const newProjectNameError = e2($newProjectNameError);
  const handleSubmit = (e4) => {
    e4.preventDefault();
    newProjectNameTriedToAdd();
  };
  return /* @__PURE__ */ react.createElement(NewProjectNameWrapper, {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ react.createElement(TextField, {
    value: newProjectName,
    onChange: newProjectNameChanged,
    helperText: newProjectNameError,
    isError: !!newProjectNameError
  }), /* @__PURE__ */ react.createElement(ConfirmButton, {
    type: "submit"
  }, "+"));
};
var NewProjectNameWrapper = styled_components_default.form`
  display: flex;
`;
var ConfirmButton = styled_components_default(SmallIconButton)`
  margin-top: 1px;
  margin-left: 4px;
`;

// dist/user-projects-form/atoms/duration-unit-value.js
var DurationUnitValue = ({projectDetails}) => {
  const handlePDDurationValueChange = (e4) => {
    const {valueAsNumber} = e4.target;
    const newValue = Number.isNaN(valueAsNumber) ? 0 : valueAsNumber;
    projectDetailsDurationValueChanged({id: projectDetails.id, value: newValue});
  };
  return /* @__PURE__ */ react.createElement(UnitValue, {
    type: "number",
    onChange: handlePDDurationValueChange,
    value: projectDetails.duration.value,
    min: 0,
    isError: projectDetails.isTouched.duration && !!projectDetails.error.duration,
    helperText: projectDetails.error.duration
  });
};
var UnitValue = styled_components_default(TextField)`
  margin-right: 1rem;
`;

// dist/user-projects-form/atoms/duration-unit.js
var DurationUnit = ({pdId, value}) => {
  const handlePDDurationUnitChange = (e4) => {
    const newUnit = e4.target.value;
    projectDetailsDurationUnitChanged({id: pdId, unit: newUnit});
  };
  return /* @__PURE__ */ react.createElement(Select, {
    options: [
      {label: "months", value: TimeUnits.Month},
      {label: "years", value: TimeUnits.Year}
    ],
    onChange: handlePDDurationUnitChange,
    value
  });
};

// dist/user-projects-form/molecules/projects-names.js
var ProjectsNames = () => {
  const projectNames = e2($projectNames);
  return /* @__PURE__ */ react.createElement(FormMainTitleAndContent, {
    title: "Projects"
  }, /* @__PURE__ */ react.createElement(ListWrapper, null, projectNames.map((projectName) => /* @__PURE__ */ react.createElement(ProjectsName, {
    text: projectName,
    key: projectName,
    onRemove: () => projectNameRemoved(projectName)
  })), /* @__PURE__ */ react.createElement(NewProjectName, null)));
};
var ListWrapper = styled_components_default.div`
  display: flex;
  flex-wrap: wrap;
  & > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
var ProjectsName = styled_components_default(Chip)`
  margin-bottom: 0.5rem;
`;

// dist/user-projects-form/molecules/project-details-duration.js
var ProjectDetailsDuration = ({projectDetails}) => {
  return /* @__PURE__ */ react.createElement(ProjectDetailsItemTemplate, {
    title: "Duration"
  }, /* @__PURE__ */ react.createElement(ProjectDetailsDurationWrapper, null, /* @__PURE__ */ react.createElement(DurationUnitValue, {
    projectDetails
  }), /* @__PURE__ */ react.createElement(DurationUnit, {
    pdId: projectDetails.id,
    value: projectDetails.duration.unit
  })));
};
var ProjectDetailsDurationWrapper = styled_components_default.div`
  display: flex;
  justify-content: center;
`;

// dist/user-projects-form/organisms/project-details-list.js
var ProjectsDetailsList = () => {
  const projectDetails = e2($projectDetails);
  return /* @__PURE__ */ react.createElement(FormMainTitleAndContent, {
    title: /* @__PURE__ */ react.createElement(react.Fragment, null, "Projects Details", /* @__PURE__ */ react.createElement(AddButton, {
      onClick: () => newProjectDetailsTriedToAdd()
    }, "+"))
  }, /* @__PURE__ */ react.createElement(ProjectDetailsListWrapper, null, projectDetails.map((pd2) => /* @__PURE__ */ react.createElement(ProjectDetails, {
    projectDetails: pd2,
    key: pd2.id
  }))));
};
var AddButton = styled_components_default(SmallIconButton)`
  margin-left: 1rem;
`;
var ProjectDetailsListWrapper = styled_components_default.div`
  display: grid;
  grid-gap: 1rem;
`;
var ProjectDetails = ({projectDetails}) => {
  return /* @__PURE__ */ react.createElement(ProjectDetailsWrapper, null, /* @__PURE__ */ react.createElement(ProjectDetailsName, {
    projectDetails
  }), /* @__PURE__ */ react.createElement(ProjectDetailsDescription, {
    projectDetails
  }), /* @__PURE__ */ react.createElement(ProjectDetailsDuration, {
    projectDetails
  }), /* @__PURE__ */ react.createElement(RemoveProjectBtn, {
    pdId: projectDetails.id
  }));
};
var ProjectDetailsWrapper = styled_components_default.div`
  padding: 1rem;
  border: 1px dashed gray;
  display: grid;
  grid-gap: 0.5rem;
  position: relative;
`;

// dist/user-projects-form/organisms/form-main-content.js
var FormMainContent = () => {
  const viewMode = e2($viewMode);
  return /* @__PURE__ */ react.createElement(FormMainWrapper, null, viewMode === "form" && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Username, null), /* @__PURE__ */ react.createElement(ProjectsNames, null), /* @__PURE__ */ react.createElement(ProjectsDetailsList, null)), viewMode === "json" && /* @__PURE__ */ react.createElement(FormJsonView, null));
};
var FormMainWrapper = styled_components_default.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  max-height: 60rem;
  overflow: auto;
`;
var FormJsonView = () => {
  const parsedDetails = e2($parsedDetails);
  return /* @__PURE__ */ react.createElement("pre", null, JSON.stringify(parsedDetails, null, 2));
};

// dist/user-projects-form/user-projects-form.js
var UserProjectsForm = () => {
  const isUserProjectsFormOpened = e2($isUserProjectsFormOpened);
  react.useEffect(() => {
    formMounted();
  }, []);
  if (!isUserProjectsFormOpened)
    return null;
  return /* @__PURE__ */ react.createElement(FormWrapper, null, /* @__PURE__ */ react.createElement(FormHeader, null), /* @__PURE__ */ react.createElement(FormMainContent, null), /* @__PURE__ */ react.createElement(FormFooter, null));
};

// dist/App.js
function App() {
  const handleClick = () => {
    userProjectsFormApi.toggleUserProjectsFormOpen();
  };
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(Button, {
    onClick: handleClick
  }, "Toggle form"), /* @__PURE__ */ react.createElement(UserProjectsForm, null));
}

// dist/index.js
import.meta.env = env_exports;
react_dom_default.render(/* @__PURE__ */ react.createElement(react.StrictMode, null, /* @__PURE__ */ react.createElement(App, null)), document.getElementById("root"));
if (void 0) {
  (void 0).accept();
}
