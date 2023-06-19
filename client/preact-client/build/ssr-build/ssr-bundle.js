module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "QfWi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/4+7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ react_piano_esm_Piano; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ MidiNumbers; });

// UNUSED EXPORTS: ControlledPiano, Keyboard, KeyboardShortcuts

// EXTERNAL MODULE: /Users/ep/workspace/ws-do/node_modules/just-range/index.js
var just_range = __webpack_require__("R5sp");
var just_range_default = /*#__PURE__*/__webpack_require__.n(just_range);

// EXTERNAL MODULE: external "preact"
var external_preact_ = __webpack_require__("HteQ");

// EXTERNAL MODULE: /Users/ep/workspace/ws-do/node_modules/preact/hooks/dist/hooks.module.js
var hooks_module = __webpack_require__("uOFG");

// CONCATENATED MODULE: /Users/ep/workspace/ws-do/node_modules/preact/compat/dist/compat.module.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




function g(n, t) {
  for (var e in t) n[e] = t[e];
  return n;
}
function C(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return !0;
  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;
  return !1;
}
function E(n, t) {
  return n === t && (0 !== n || 1 / n == 1 / t) || n != n && t != t;
}
function w(n) {
  this.props = n;
}
function x(n, e) {
  function r(n) {
    var t = this.props.ref,
      r = t == n.ref;
    return !r && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n) || !r : C(this.props, n);
  }
  function u(e) {
    return this.shouldComponentUpdate = r, Object(external_preact_["createElement"])(n, e);
  }
  return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u;
}
(w.prototype = new external_preact_["Component"]()).isPureReactComponent = !0, w.prototype.shouldComponentUpdate = function (n, t) {
  return C(this.props, n) || C(this.state, t);
};
var R = external_preact_["options"].__b;
external_preact_["options"].__b = function (n) {
  n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), R && R(n);
};
var N = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function k(n) {
  function t(t) {
    var e = g({}, t);
    return delete e.ref, n(e, t.ref || null);
  }
  return t.$$typeof = N, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}
var compat_module_A = function A(n, t) {
    return null == n ? null : Object(external_preact_["toChildArray"])(Object(external_preact_["toChildArray"])(n).map(t));
  },
  O = {
    map: compat_module_A,
    forEach: compat_module_A,
    count: function count(n) {
      return n ? Object(external_preact_["toChildArray"])(n).length : 0;
    },
    only: function only(n) {
      var t = Object(external_preact_["toChildArray"])(n);
      if (1 !== t.length) throw "Children.only";
      return t[0];
    },
    toArray: external_preact_["toChildArray"]
  },
  T = external_preact_["options"].__e;
external_preact_["options"].__e = function (n, t, e, r) {
  if (n.then) for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
  T(n, t, e, r);
};
var I = external_preact_["options"].unmount;
function L(n, t, e) {
  return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function (n) {
    "function" == typeof n.__c && n.__c();
  }), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c = null), n.__k = n.__k && n.__k.map(function (n) {
    return L(n, t, e);
  })), n;
}
function U(n, t, e) {
  return n && (n.__v = null, n.__k = n.__k && n.__k.map(function (n) {
    return U(n, t, e);
  }), n.__c && n.__c.__P === t && (n.__e && e.insertBefore(n.__e, n.__d), n.__c.__e = !0, n.__c.__P = e)), n;
}
function D() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F(n) {
  var t = n.__.__c;
  return t && t.__a && t.__a(n);
}
function M(n) {
  var e, r, u;
  function o(o) {
    if (e || (e = n()).then(function (n) {
      r = n.default || n;
    }, function (n) {
      u = n;
    }), u) throw u;
    if (!r) throw e;
    return Object(external_preact_["createElement"])(r, o);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function V() {
  this.u = null, this.o = null;
}
external_preact_["options"].unmount = function (n) {
  var t = n.__c;
  t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), I && I(n);
}, (D.prototype = new external_preact_["Component"]()).__c = function (n, t) {
  var e = t.__c,
    r = this;
  null == r.t && (r.t = []), r.t.push(e);
  var u = F(r.__v),
    o = !1,
    i = function i() {
      o || (o = !0, e.__R = null, u ? u(l) : l());
    };
  e.__R = i;
  var l = function l() {
      if (! --r.__u) {
        if (r.state.__a) {
          var n = r.state.__a;
          r.__v.__k[0] = U(n, n.__c.__P, n.__c.__O);
        }
        var t;
        for (r.setState({
          __a: r.__b = null
        }); t = r.t.pop();) t.forceUpdate();
      }
    },
    c = !0 === t.__h;
  r.__u++ || c || r.setState({
    __a: r.__b = r.__v.__k[0]
  }), n.then(i, i);
}, D.prototype.componentWillUnmount = function () {
  this.t = [];
}, D.prototype.render = function (n, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"),
        o = this.__v.__k[0].__c;
      this.__v.__k[0] = L(this.__b, r, o.__O = o.__P);
    }
    this.__b = null;
  }
  var i = e.__a && Object(external_preact_["createElement"])(external_preact_["Fragment"], null, n.fallback);
  return i && (i.__h = null), [Object(external_preact_["createElement"])(external_preact_["Fragment"], null, e.__a ? null : n.children), i];
};
var W = function W(n, t, e) {
  if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
    for (; e.length > 3;) e.pop()();
    if (e[1] < e[0]) break;
    n.u = e = e[2];
  }
};
function P(n) {
  return this.getChildContext = function () {
    return n.context;
  }, n.children;
}
function j(n) {
  var e = this,
    r = n.i;
  e.componentWillUnmount = function () {
    Object(external_preact_["render"])(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== r && e.componentWillUnmount(), n.__v ? (e.l || (e.i = r, e.l = {
    nodeType: 1,
    parentNode: r,
    childNodes: [],
    appendChild: function appendChild(n) {
      this.childNodes.push(n), e.i.appendChild(n);
    },
    insertBefore: function insertBefore(n, t) {
      this.childNodes.push(n), e.i.appendChild(n);
    },
    removeChild: function removeChild(n) {
      this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
    }
  }), Object(external_preact_["render"])(Object(external_preact_["createElement"])(P, {
    context: e.context
  }, n.__v), e.l)) : e.l && e.componentWillUnmount();
}
function z(n, e) {
  var r = Object(external_preact_["createElement"])(j, {
    __v: n,
    i: e
  });
  return r.containerInfo = e, r;
}
(V.prototype = new external_preact_["Component"]()).__a = function (n) {
  var t = this,
    e = F(t.__v),
    r = t.o.get(n);
  return r[0]++, function (u) {
    var o = function o() {
      t.props.revealOrder ? (r.push(u), W(t, n, r)) : u();
    };
    e ? e(o) : o();
  };
}, V.prototype.render = function (n) {
  this.u = null, this.o = new Map();
  var t = Object(external_preact_["toChildArray"])(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
  for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);
  return n.children;
}, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function () {
  var n = this;
  this.o.forEach(function (t, e) {
    W(n, e, t);
  });
};
var B = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
  H = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
  Y = /[A-Z0-9]/g,
  $ = "undefined" != typeof document,
  q = function q(n) {
    return ("undefined" != typeof Symbol && "symbol" == _typeof(Symbol()) ? /fil|che|rad/ : /fil|che|ra/).test(n);
  };
function G(n, t, e) {
  return null == t.__k && (t.textContent = ""), Object(external_preact_["render"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function J(n, t, e) {
  return Object(external_preact_["hydrate"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
external_preact_["Component"].prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
  Object.defineProperty(external_preact_["Component"].prototype, t, {
    configurable: !0,
    get: function get() {
      return this["UNSAFE_" + t];
    },
    set: function set(n) {
      Object.defineProperty(this, t, {
        configurable: !0,
        writable: !0,
        value: n
      });
    }
  });
});
var K = external_preact_["options"].event;
function Q() {}
function X() {
  return this.cancelBubble;
}
function nn() {
  return this.defaultPrevented;
}
external_preact_["options"].event = function (n) {
  return K && (n = K(n)), n.persist = Q, n.isPropagationStopped = X, n.isDefaultPrevented = nn, n.nativeEvent = n;
};
var tn,
  en = {
    enumerable: !1,
    configurable: !0,
    get: function get() {
      return this.class;
    }
  },
  rn = external_preact_["options"].vnode;
external_preact_["options"].vnode = function (n) {
  "string" == typeof n.type && function (n) {
    var t = n.props,
      e = n.type,
      u = {};
    for (var o in t) {
      var i = t[o];
      if (!("value" === o && "defaultValue" in t && null == i || $ && "children" === o && "noscript" === e || "class" === o || "className" === o)) {
        var l = o.toLowerCase();
        "defaultValue" === o && "value" in t && null == t.value ? o = "value" : "download" === o && !0 === i ? i = "" : "ondoubleclick" === l ? o = "ondblclick" : "onchange" !== l || "input" !== e && "textarea" !== e || q(t.type) ? "onfocus" === l ? o = "onfocusin" : "onblur" === l ? o = "onfocusout" : Z.test(o) ? o = l : -1 === e.indexOf("-") && H.test(o) ? o = o.replace(Y, "-$&").toLowerCase() : null === i && (i = void 0) : l = o = "oninput", "oninput" === l && u[o = l] && (o = "oninputCapture"), u[o] = i;
      }
    }
    "select" == e && u.multiple && Array.isArray(u.value) && (u.value = Object(external_preact_["toChildArray"])(t.children).forEach(function (n) {
      n.props.selected = -1 != u.value.indexOf(n.props.value);
    })), "select" == e && null != u.defaultValue && (u.value = Object(external_preact_["toChildArray"])(t.children).forEach(function (n) {
      n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
    })), t.class && !t.className ? (u.class = t.class, Object.defineProperty(u, "className", en)) : (t.className && !t.class || t.class && t.className) && (u.class = u.className = t.className), n.props = u;
  }(n), n.$$typeof = B, rn && rn(n);
};
var un = external_preact_["options"].__r;
external_preact_["options"].__r = function (n) {
  un && un(n), tn = n.__c;
};
var on = external_preact_["options"].diffed;
external_preact_["options"].diffed = function (n) {
  on && on(n);
  var t = n.props,
    e = n.__e;
  null != e && "textarea" === n.type && "value" in t && t.value !== e.value && (e.value = null == t.value ? "" : t.value), tn = null;
};
var ln = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function readContext(n) {
          return tn.__n[n.__c].props.value;
        }
      }
    }
  },
  cn = "17.0.2";
function fn(n) {
  return external_preact_["createElement"].bind(null, n);
}
function an(n) {
  return !!n && n.$$typeof === B;
}
function sn(n) {
  return an(n) ? external_preact_["cloneElement"].apply(null, arguments) : n;
}
function hn(n) {
  return !!n.__k && (Object(external_preact_["render"])(null, n), !0);
}
function vn(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}
var dn = function dn(n, t) {
    return n(t);
  },
  pn = function pn(n, t) {
    return n(t);
  },
  mn = external_preact_["Fragment"];
function yn(n) {
  n();
}
function _n(n) {
  return n;
}
function bn() {
  return [!1, yn];
}
var Sn = hooks_module["g" /* useLayoutEffect */];
function gn(n, t) {
  var e = t(),
    r = Object(hooks_module["k" /* useState */])({
      h: {
        __: e,
        v: t
      }
    }),
    u = r[0].h,
    o = r[1];
  return Object(hooks_module["g" /* useLayoutEffect */])(function () {
    u.__ = e, u.v = t, E(u.__, t()) || o({
      h: u
    });
  }, [n, e, t]), Object(hooks_module["d" /* useEffect */])(function () {
    return E(u.__, u.v()) || o({
      h: u
    }), n(function () {
      E(u.__, u.v()) || o({
        h: u
      });
    });
  }, [n]), e;
}
var Cn = {
  useState: hooks_module["k" /* useState */],
  useId: hooks_module["e" /* useId */],
  useReducer: hooks_module["i" /* useReducer */],
  useEffect: hooks_module["d" /* useEffect */],
  useLayoutEffect: hooks_module["g" /* useLayoutEffect */],
  useInsertionEffect: Sn,
  useTransition: bn,
  useDeferredValue: _n,
  useSyncExternalStore: gn,
  startTransition: yn,
  useRef: hooks_module["j" /* useRef */],
  useImperativeHandle: hooks_module["f" /* useImperativeHandle */],
  useMemo: hooks_module["h" /* useMemo */],
  useCallback: hooks_module["a" /* useCallback */],
  useContext: hooks_module["b" /* useContext */],
  useDebugValue: hooks_module["c" /* useDebugValue */],
  version: "17.0.2",
  Children: O,
  render: G,
  hydrate: J,
  unmountComponentAtNode: hn,
  createPortal: z,
  createElement: external_preact_["createElement"],
  createContext: external_preact_["createContext"],
  createFactory: fn,
  cloneElement: sn,
  createRef: external_preact_["createRef"],
  Fragment: external_preact_["Fragment"],
  isValidElement: an,
  findDOMNode: vn,
  Component: external_preact_["Component"],
  PureComponent: w,
  memo: x,
  forwardRef: k,
  flushSync: pn,
  unstable_batchedUpdates: dn,
  StrictMode: mn,
  Suspense: D,
  SuspenseList: V,
  lazy: M,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ln
};

// EXTERNAL MODULE: /Users/ep/workspace/ws-do/node_modules/prop-types/index.js
var prop_types = __webpack_require__("cNRa");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: /Users/ep/workspace/ws-do/node_modules/classnames/index.js
var classnames = __webpack_require__("Pc05");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: /Users/ep/workspace/ws-do/node_modules/lodash.difference/index.js
var lodash_difference = __webpack_require__("Akgo");
var lodash_difference_default = /*#__PURE__*/__webpack_require__.n(lodash_difference);

// CONCATENATED MODULE: /Users/ep/workspace/ws-do/node_modules/react-piano/dist/react-piano.esm.js
function react_piano_esm_typeof(obj) { "@babel/helpers - typeof"; return react_piano_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, react_piano_esm_typeof(obj); }





function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (react_piano_esm_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
var SORTED_PITCHES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
var ACCIDENTAL_PITCHES = ['Db', 'Eb', 'Gb', 'Ab', 'Bb'];
var PITCH_INDEXES = {
  C: 0,
  'C#': 1,
  Db: 1,
  D: 2,
  'D#': 3,
  Eb: 3,
  E: 4,
  F: 5,
  'F#': 6,
  Gb: 6,
  G: 7,
  'G#': 8,
  Ab: 8,
  A: 9,
  'A#': 10,
  Bb: 10,
  B: 11
};
var MIDI_NUMBER_C0 = 12;
var MIN_MIDI_NUMBER = MIDI_NUMBER_C0;
var MAX_MIDI_NUMBER = 127;
var NOTE_REGEX = /([a-g])([#b]?)(\d+)/;
var NOTES_IN_OCTAVE = 12; // Converts string notes in scientific pitch notation to a MIDI number, or null.
//
// Example: "c#0" => 13, "eb5" => 75, "abc" => null
//
// References:
// - http://www.flutopedia.com/octave_notation.htm
// - https://github.com/danigb/tonal/blob/master/packages/note/index.js

function fromNote(note) {
  if (!note) {
    throw Error('Invalid note argument');
  }
  var match = NOTE_REGEX.exec(note.toLowerCase());
  if (!match) {
    throw Error('Invalid note argument');
  }
  var _match = _slicedToArray(match, 4),
    letter = _match[1],
    accidental = _match[2],
    octave = _match[3];
  var pitchName = "".concat(letter.toUpperCase()).concat(accidental);
  var pitchIndex = PITCH_INDEXES[pitchName];
  if (pitchIndex == null) {
    throw Error('Invalid note argument');
  }
  return MIDI_NUMBER_C0 + pitchIndex + NOTES_IN_OCTAVE * parseInt(octave, 10);
} //
// Build cache for getAttributes
//

function buildMidiNumberAttributes(midiNumber) {
  var pitchIndex = (midiNumber - MIDI_NUMBER_C0) % NOTES_IN_OCTAVE;
  var octave = Math.floor((midiNumber - MIDI_NUMBER_C0) / NOTES_IN_OCTAVE);
  var pitchName = SORTED_PITCHES[pitchIndex];
  return {
    note: "".concat(pitchName).concat(octave),
    pitchName: pitchName,
    octave: octave,
    midiNumber: midiNumber,
    isAccidental: ACCIDENTAL_PITCHES.includes(pitchName)
  };
}
function buildMidiNumberAttributesCache() {
  return just_range_default()(MIN_MIDI_NUMBER, MAX_MIDI_NUMBER + 1).reduce(function (cache, midiNumber) {
    cache[midiNumber] = buildMidiNumberAttributes(midiNumber);
    return cache;
  }, {});
}
var midiNumberAttributesCache = buildMidiNumberAttributesCache(); // Returns an object containing various attributes for a given MIDI number.
// Throws error for invalid midiNumbers.

function getAttributes(midiNumber) {
  var attrs = midiNumberAttributesCache[midiNumber];
  if (!attrs) {
    throw Error('Invalid MIDI number');
  }
  return attrs;
} // Returns all MIDI numbers corresponding to natural notes, e.g. C and not C# or Bb.

var NATURAL_MIDI_NUMBERS = just_range_default()(MIN_MIDI_NUMBER, MAX_MIDI_NUMBER + 1).filter(function (midiNumber) {
  return !getAttributes(midiNumber).isAccidental;
});
var MidiNumbers = {
  fromNote: fromNote,
  getAttributes: getAttributes,
  MIN_MIDI_NUMBER: MIN_MIDI_NUMBER,
  MAX_MIDI_NUMBER: MAX_MIDI_NUMBER,
  NATURAL_MIDI_NUMBERS: NATURAL_MIDI_NUMBERS
};
var react_piano_esm_Key = /*#__PURE__*/
function (_React$Component) {
  _inherits(Key, _React$Component);
  function Key() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, Key);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Key)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _defineProperty(_assertThisInitialized(_this), "onPlayNoteInput", function () {
      _this.props.onPlayNoteInput(_this.props.midiNumber);
    });
    _defineProperty(_assertThisInitialized(_this), "onStopNoteInput", function () {
      _this.props.onStopNoteInput(_this.props.midiNumber);
    });
    return _this;
  }
  _createClass(Key, [{
    key: "getAbsoluteKeyPosition",
    // Key position is represented by the number of natural key widths from the left
    value: function getAbsoluteKeyPosition(midiNumber) {
      var OCTAVE_WIDTH = 7;
      var _MidiNumbers$getAttri = MidiNumbers.getAttributes(midiNumber),
        octave = _MidiNumbers$getAttri.octave,
        pitchName = _MidiNumbers$getAttri.pitchName;
      var pitchPosition = this.props.pitchPositions[pitchName];
      var octavePosition = OCTAVE_WIDTH * octave;
      return pitchPosition + octavePosition;
    }
  }, {
    key: "getRelativeKeyPosition",
    value: function getRelativeKeyPosition(midiNumber) {
      return this.getAbsoluteKeyPosition(midiNumber) - this.getAbsoluteKeyPosition(this.props.noteRange.first);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        naturalKeyWidth = _this$props.naturalKeyWidth,
        accidentalWidthRatio = _this$props.accidentalWidthRatio,
        midiNumber = _this$props.midiNumber,
        gliss = _this$props.gliss,
        useTouchEvents = _this$props.useTouchEvents,
        accidental = _this$props.accidental,
        active = _this$props.active,
        disabled = _this$props.disabled,
        children = _this$props.children; // Need to conditionally include/exclude handlers based on useTouchEvents,
      // because otherwise mobile taps double fire events.

      return Cn.createElement("div", {
        className: classnames_default()('ReactPiano__Key', {
          'ReactPiano__Key--accidental': accidental,
          'ReactPiano__Key--natural': !accidental,
          'ReactPiano__Key--disabled': disabled,
          'ReactPiano__Key--active': active
        }),
        style: {
          left: ratioToPercentage(this.getRelativeKeyPosition(midiNumber) * naturalKeyWidth),
          width: ratioToPercentage(accidental ? accidentalWidthRatio * naturalKeyWidth : naturalKeyWidth)
        },
        onMouseDown: useTouchEvents ? null : this.onPlayNoteInput,
        onMouseUp: useTouchEvents ? null : this.onStopNoteInput,
        onMouseEnter: gliss ? this.onPlayNoteInput : null,
        onMouseLeave: this.onStopNoteInput,
        onTouchStart: useTouchEvents ? this.onPlayNoteInput : null,
        onTouchCancel: useTouchEvents ? this.onStopNoteInput : null,
        onTouchEnd: useTouchEvents ? this.onStopNoteInput : null
      }, Cn.createElement("div", {
        className: "ReactPiano__NoteLabelContainer"
      }, children));
    }
  }]);
  return Key;
}(Cn.Component);
_defineProperty(react_piano_esm_Key, "propTypes", {
  midiNumber: prop_types_default.a.number.isRequired,
  naturalKeyWidth: prop_types_default.a.number.isRequired,
  // Width as a ratio between 0 and 1
  gliss: prop_types_default.a.bool.isRequired,
  useTouchEvents: prop_types_default.a.bool.isRequired,
  accidental: prop_types_default.a.bool.isRequired,
  active: prop_types_default.a.bool.isRequired,
  disabled: prop_types_default.a.bool.isRequired,
  onPlayNoteInput: prop_types_default.a.func.isRequired,
  onStopNoteInput: prop_types_default.a.func.isRequired,
  accidentalWidthRatio: prop_types_default.a.number.isRequired,
  pitchPositions: prop_types_default.a.object.isRequired,
  children: prop_types_default.a.node
});
_defineProperty(react_piano_esm_Key, "defaultProps", {
  accidentalWidthRatio: 0.65,
  pitchPositions: {
    C: 0,
    Db: 0.55,
    D: 1,
    Eb: 1.8,
    E: 2,
    F: 3,
    Gb: 3.5,
    G: 4,
    Ab: 4.7,
    A: 5,
    Bb: 5.85,
    B: 6
  }
});
function ratioToPercentage(ratio) {
  return "".concat(ratio * 100, "%");
}
var react_piano_esm_Keyboard = /*#__PURE__*/
function (_React$Component) {
  _inherits(Keyboard, _React$Component);
  function Keyboard() {
    _classCallCheck(this, Keyboard);
    return _possibleConstructorReturn(this, _getPrototypeOf(Keyboard).apply(this, arguments));
  }
  _createClass(Keyboard, [{
    key: "getMidiNumbers",
    // Range of midi numbers on keyboard
    value: function getMidiNumbers() {
      return just_range_default()(this.props.noteRange.first, this.props.noteRange.last + 1);
    }
  }, {
    key: "getNaturalKeyCount",
    value: function getNaturalKeyCount() {
      return this.getMidiNumbers().filter(function (number) {
        var _MidiNumbers$getAttri = MidiNumbers.getAttributes(number),
          isAccidental = _MidiNumbers$getAttri.isAccidental;
        return !isAccidental;
      }).length;
    } // Returns a ratio between 0 and 1
  }, {
    key: "getNaturalKeyWidth",
    value: function getNaturalKeyWidth() {
      return 1 / this.getNaturalKeyCount();
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.props.width ? this.props.width : '100%';
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      if (!this.props.width) {
        return '100%';
      }
      var keyWidth = this.props.width * this.getNaturalKeyWidth();
      return "".concat(keyWidth / this.props.keyWidthToHeight, "px");
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      var naturalKeyWidth = this.getNaturalKeyWidth();
      return Cn.createElement("div", {
        className: classnames_default()('ReactPiano__Keyboard', this.props.className),
        style: {
          width: this.getWidth(),
          height: this.getHeight()
        }
      }, this.getMidiNumbers().map(function (midiNumber) {
        var _MidiNumbers$getAttri2 = MidiNumbers.getAttributes(midiNumber),
          note = _MidiNumbers$getAttri2.note,
          isAccidental = _MidiNumbers$getAttri2.isAccidental;
        var isActive = !_this.props.disabled && _this.props.activeNotes.includes(midiNumber);
        return Cn.createElement(react_piano_esm_Key, {
          naturalKeyWidth: naturalKeyWidth,
          midiNumber: midiNumber,
          noteRange: _this.props.noteRange,
          active: isActive,
          accidental: isAccidental,
          disabled: _this.props.disabled,
          onPlayNoteInput: _this.props.onPlayNoteInput,
          onStopNoteInput: _this.props.onStopNoteInput,
          gliss: _this.props.gliss,
          useTouchEvents: _this.props.useTouchEvents,
          key: midiNumber
        }, _this.props.disabled ? null : _this.props.renderNoteLabel({
          isActive: isActive,
          isAccidental: isAccidental,
          midiNumber: midiNumber
        }));
      }));
    }
  }]);
  return Keyboard;
}(Cn.Component);
_defineProperty(react_piano_esm_Keyboard, "propTypes", {
  noteRange: noteRangePropType,
  activeNotes: prop_types_default.a.arrayOf(prop_types_default.a.number),
  onPlayNoteInput: prop_types_default.a.func.isRequired,
  onStopNoteInput: prop_types_default.a.func.isRequired,
  renderNoteLabel: prop_types_default.a.func.isRequired,
  keyWidthToHeight: prop_types_default.a.number.isRequired,
  className: prop_types_default.a.string,
  disabled: prop_types_default.a.bool,
  gliss: prop_types_default.a.bool,
  useTouchEvents: prop_types_default.a.bool,
  // If width is not provided, must have fixed width and height in parent container
  width: prop_types_default.a.number
});
_defineProperty(react_piano_esm_Keyboard, "defaultProps", {
  disabled: false,
  gliss: false,
  useTouchEvents: false,
  keyWidthToHeight: 0.33,
  renderNoteLabel: function renderNoteLabel() {}
});
function isNaturalMidiNumber(value) {
  if (typeof value !== 'number') {
    return false;
  }
  return MidiNumbers.NATURAL_MIDI_NUMBERS.includes(value);
}
function noteRangePropType(props, propName, componentName) {
  var _props$propName = props[propName],
    first = _props$propName.first,
    last = _props$propName.last;
  if (!first || !last) {
    return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". ").concat(propName, " must be an object with .first and .last values."));
  }
  if (!isNaturalMidiNumber(first) || !isNaturalMidiNumber(last)) {
    return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". ").concat(propName, " values must be valid MIDI numbers, and should not be accidentals (sharp or flat notes)."));
  }
  if (first >= last) {
    return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". ").concat(propName, ".first must be smaller than ").concat(propName, ".last."));
  }
}
var react_piano_esm_ControlledPiano = /*#__PURE__*/
function (_React$Component) {
  _inherits(ControlledPiano, _React$Component);
  function ControlledPiano() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, ControlledPiano);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ControlledPiano)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _defineProperty(_assertThisInitialized(_this), "state", {
      isMouseDown: false,
      useTouchEvents: false
    });
    _defineProperty(_assertThisInitialized(_this), "handleNoteChanges", function (_ref) {
      var prevActiveNotes = _ref.prevActiveNotes,
        nextActiveNotes = _ref.nextActiveNotes;
      if (_this.props.disabled) {
        return;
      }
      var notesStopped = lodash_difference_default()(prevActiveNotes, nextActiveNotes);
      var notesStarted = lodash_difference_default()(nextActiveNotes, prevActiveNotes);
      notesStarted.forEach(function (midiNumber) {
        _this.props.playNote(midiNumber);
      });
      notesStopped.forEach(function (midiNumber) {
        _this.props.stopNote(midiNumber);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "getMidiNumberForKey", function (key) {
      if (!_this.props.keyboardShortcuts) {
        return null;
      }
      var shortcut = _this.props.keyboardShortcuts.find(function (sh) {
        return sh.key === key;
      });
      return shortcut && shortcut.midiNumber;
    });
    _defineProperty(_assertThisInitialized(_this), "getKeyForMidiNumber", function (midiNumber) {
      if (!_this.props.keyboardShortcuts) {
        return null;
      }
      var shortcut = _this.props.keyboardShortcuts.find(function (sh) {
        return sh.midiNumber === midiNumber;
      });
      return shortcut && shortcut.key;
    });
    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      // Don't conflict with existing combinations like ctrl + t
      if (event.ctrlKey || event.metaKey || event.shiftKey) {
        return;
      }
      var midiNumber = _this.getMidiNumberForKey(event.key);
      if (midiNumber) {
        _this.onPlayNoteInput(midiNumber);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onKeyUp", function (event) {
      // This *should* also check for event.ctrlKey || event.metaKey || event.ShiftKey like onKeyDown does,
      // but at least on Mac Chrome, when mashing down many alphanumeric keystrokes at once,
      // ctrlKey is fired unexpectedly, which would cause onStopNote to NOT be fired, which causes problematic
      // lingering notes. Since it's fairly safe to call onStopNote even when not necessary,
      // the ctrl/meta/shift check is removed to fix that issue.
      var midiNumber = _this.getMidiNumberForKey(event.key);
      if (midiNumber) {
        _this.onStopNoteInput(midiNumber);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onPlayNoteInput", function (midiNumber) {
      if (_this.props.disabled) {
        return;
      } // Pass in previous activeNotes for recording functionality

      _this.props.onPlayNoteInput(midiNumber, _this.props.activeNotes);
    });
    _defineProperty(_assertThisInitialized(_this), "onStopNoteInput", function (midiNumber) {
      if (_this.props.disabled) {
        return;
      } // Pass in previous activeNotes for recording functionality

      _this.props.onStopNoteInput(midiNumber, _this.props.activeNotes);
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function () {
      _this.setState({
        isMouseDown: true
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function () {
      _this.setState({
        isMouseDown: false
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function () {
      _this.setState({
        useTouchEvents: true
      });
    });
    _defineProperty(_assertThisInitialized(_this), "renderNoteLabel", function (_ref2) {
      var midiNumber = _ref2.midiNumber,
        isActive = _ref2.isActive,
        isAccidental = _ref2.isAccidental;
      var keyboardShortcut = _this.getKeyForMidiNumber(midiNumber);
      return _this.props.renderNoteLabel({
        keyboardShortcut: keyboardShortcut,
        midiNumber: midiNumber,
        isActive: isActive,
        isAccidental: isAccidental
      });
    });
    return _this;
  }
  _createClass(ControlledPiano, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('keydown', this.onKeyDown);
      window.addEventListener('keyup', this.onKeyUp);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.onKeyDown);
      window.removeEventListener('keyup', this.onKeyUp);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.activeNotes !== prevProps.activeNotes) {
        this.handleNoteChanges({
          prevActiveNotes: prevProps.activeNotes || [],
          nextActiveNotes: this.props.activeNotes || []
        });
      }
    } // This function is responsible for diff'ing activeNotes
    // and playing or stopping notes accordingly.
  }, {
    key: "render",
    value: function render() {
      return Cn.createElement("div", {
        style: {
          width: '100%',
          height: '100%'
        },
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onTouchStart: this.onTouchStart,
        "data-testid": "container"
      }, Cn.createElement(react_piano_esm_Keyboard, {
        noteRange: this.props.noteRange,
        onPlayNoteInput: this.onPlayNoteInput,
        onStopNoteInput: this.onStopNoteInput,
        activeNotes: this.props.activeNotes,
        className: this.props.className,
        disabled: this.props.disabled,
        width: this.props.width,
        keyWidthToHeight: this.props.keyWidthToHeight,
        gliss: this.state.isMouseDown,
        useTouchEvents: this.state.useTouchEvents,
        renderNoteLabel: this.renderNoteLabel
      }));
    }
  }]);
  return ControlledPiano;
}(Cn.Component);
_defineProperty(react_piano_esm_ControlledPiano, "propTypes", {
  noteRange: prop_types_default.a.object.isRequired,
  activeNotes: prop_types_default.a.arrayOf(prop_types_default.a.number.isRequired).isRequired,
  playNote: prop_types_default.a.func.isRequired,
  stopNote: prop_types_default.a.func.isRequired,
  onPlayNoteInput: prop_types_default.a.func.isRequired,
  onStopNoteInput: prop_types_default.a.func.isRequired,
  renderNoteLabel: prop_types_default.a.func.isRequired,
  className: prop_types_default.a.string,
  disabled: prop_types_default.a.bool,
  width: prop_types_default.a.number,
  keyWidthToHeight: prop_types_default.a.number,
  keyboardShortcuts: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    key: prop_types_default.a.string.isRequired,
    midiNumber: prop_types_default.a.number.isRequired
  }))
});
_defineProperty(react_piano_esm_ControlledPiano, "defaultProps", {
  renderNoteLabel: function renderNoteLabel(_ref3) {
    var keyboardShortcut = _ref3.keyboardShortcut,
      midiNumber = _ref3.midiNumber,
      isActive = _ref3.isActive,
      isAccidental = _ref3.isAccidental;
    return keyboardShortcut ? Cn.createElement("div", {
      className: classnames_default()('ReactPiano__NoteLabel', {
        'ReactPiano__NoteLabel--active': isActive,
        'ReactPiano__NoteLabel--accidental': isAccidental,
        'ReactPiano__NoteLabel--natural': !isAccidental
      })
    }, keyboardShortcut) : null;
  }
});
var react_piano_esm_Piano = /*#__PURE__*/
function (_React$Component) {
  _inherits(Piano, _React$Component);
  function Piano() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, Piano);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Piano)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _defineProperty(_assertThisInitialized(_this), "state", {
      activeNotes: _this.props.activeNotes || []
    });
    _defineProperty(_assertThisInitialized(_this), "handlePlayNoteInput", function (midiNumber) {
      _this.setState(function (prevState) {
        // Need to be handled inside setState in order to set prevActiveNotes without
        // race conditions.
        if (_this.props.onPlayNoteInput) {
          _this.props.onPlayNoteInput(midiNumber, {
            prevActiveNotes: prevState.activeNotes
          });
        } // Don't append note to activeNotes if it's already present

        if (prevState.activeNotes.includes(midiNumber)) {
          return null;
        }
        return {
          activeNotes: prevState.activeNotes.concat(midiNumber)
        };
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleStopNoteInput", function (midiNumber) {
      _this.setState(function (prevState) {
        // Need to be handled inside setState in order to set prevActiveNotes without
        // race conditions.
        if (_this.props.onStopNoteInput) {
          _this.props.onStopNoteInput(midiNumber, {
            prevActiveNotes: _this.state.activeNotes
          });
        }
        return {
          activeNotes: prevState.activeNotes.filter(function (note) {
            return midiNumber !== note;
          })
        };
      });
    });
    return _this;
  }
  _createClass(Piano, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Make activeNotes "controllable" by using internal
      // state by default, but allowing prop overrides.
      if (prevProps.activeNotes !== this.props.activeNotes && this.state.activeNotes !== this.props.activeNotes) {
        this.setState({
          activeNotes: this.props.activeNotes || []
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        activeNotes = _this$props.activeNotes,
        onPlayNoteInput = _this$props.onPlayNoteInput,
        onStopNoteInput = _this$props.onStopNoteInput,
        otherProps = _objectWithoutProperties(_this$props, ["activeNotes", "onPlayNoteInput", "onStopNoteInput"]);
      return Cn.createElement(react_piano_esm_ControlledPiano, _extends({
        activeNotes: this.state.activeNotes,
        onPlayNoteInput: this.handlePlayNoteInput,
        onStopNoteInput: this.handleStopNoteInput
      }, otherProps));
    }
  }]);
  return Piano;
}(Cn.Component);
_defineProperty(react_piano_esm_Piano, "propTypes", {
  noteRange: prop_types_default.a.object.isRequired,
  activeNotes: prop_types_default.a.arrayOf(prop_types_default.a.number.isRequired),
  playNote: prop_types_default.a.func.isRequired,
  stopNote: prop_types_default.a.func.isRequired,
  onPlayNoteInput: prop_types_default.a.func,
  onStopNoteInput: prop_types_default.a.func,
  renderNoteLabel: prop_types_default.a.func,
  className: prop_types_default.a.string,
  disabled: prop_types_default.a.bool,
  width: prop_types_default.a.number,
  keyWidthToHeight: prop_types_default.a.number,
  keyboardShortcuts: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    key: prop_types_default.a.string.isRequired,
    midiNumber: prop_types_default.a.number.isRequired
  }))
});
function createKeyboardShortcuts(_ref) {
  var firstNote = _ref.firstNote,
    lastNote = _ref.lastNote,
    keyboardConfig = _ref.keyboardConfig;
  var currentMidiNumber = firstNote;
  var naturalKeyIndex = 0;
  var keyboardShortcuts = [];
  while (
  // There are still keys to be assigned
  naturalKeyIndex < keyboardConfig.length &&
  // Note to be assigned does not surpass range
  currentMidiNumber <= lastNote) {
    var key = keyboardConfig[naturalKeyIndex];
    var _MidiNumbers$getAttri = MidiNumbers.getAttributes(currentMidiNumber),
      isAccidental = _MidiNumbers$getAttri.isAccidental;
    if (isAccidental) {
      keyboardShortcuts.push({
        key: key.flat,
        midiNumber: currentMidiNumber
      });
    } else {
      keyboardShortcuts.push({
        key: key.natural,
        midiNumber: currentMidiNumber
      });
      naturalKeyIndex += 1;
    }
    currentMidiNumber += 1;
  }
  return keyboardShortcuts;
}
var KeyboardShortcuts = {
  create: createKeyboardShortcuts,
  // Preset configurations
  BOTTOM_ROW: [{
    natural: 'z',
    flat: 'a',
    sharp: 's'
  }, {
    natural: 'x',
    flat: 's',
    sharp: 'd'
  }, {
    natural: 'c',
    flat: 'd',
    sharp: 'f'
  }, {
    natural: 'v',
    flat: 'f',
    sharp: 'g'
  }, {
    natural: 'b',
    flat: 'g',
    sharp: 'h'
  }, {
    natural: 'n',
    flat: 'h',
    sharp: 'j'
  }, {
    natural: 'm',
    flat: 'j',
    sharp: 'k'
  }, {
    natural: ',',
    flat: 'k',
    sharp: 'l'
  }, {
    natural: '.',
    flat: 'l',
    sharp: ';'
  }, {
    natural: '/',
    flat: ';',
    sharp: "'"
  }],
  HOME_ROW: [{
    natural: 'a',
    flat: 'q',
    sharp: 'w'
  }, {
    natural: 's',
    flat: 'w',
    sharp: 'e'
  }, {
    natural: 'd',
    flat: 'e',
    sharp: 'r'
  }, {
    natural: 'f',
    flat: 'r',
    sharp: 't'
  }, {
    natural: 'g',
    flat: 't',
    sharp: 'y'
  }, {
    natural: 'h',
    flat: 'y',
    sharp: 'u'
  }, {
    natural: 'j',
    flat: 'u',
    sharp: 'i'
  }, {
    natural: 'k',
    flat: 'i',
    sharp: 'o'
  }, {
    natural: 'l',
    flat: 'o',
    sharp: 'p'
  }, {
    natural: ';',
    flat: 'p',
    sharp: '['
  }, {
    natural: "'",
    flat: '[',
    sharp: ']'
  }],
  QWERTY_ROW: [{
    natural: 'q',
    flat: '1',
    sharp: '2'
  }, {
    natural: 'w',
    flat: '2',
    sharp: '3'
  }, {
    natural: 'e',
    flat: '3',
    sharp: '4'
  }, {
    natural: 'r',
    flat: '4',
    sharp: '5'
  }, {
    natural: 't',
    flat: '5',
    sharp: '6'
  }, {
    natural: 'y',
    flat: '6',
    sharp: '7'
  }, {
    natural: 'u',
    flat: '7',
    sharp: '8'
  }, {
    natural: 'i',
    flat: '8',
    sharp: '9'
  }, {
    natural: 'o',
    flat: '9',
    sharp: '0'
  }, {
    natural: 'p',
    flat: '0',
    sharp: '-'
  }, {
    natural: '[',
    flat: '-',
    sharp: '='
  }]
};


/***/ }),

/***/ "3Aci":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__("rYND");
function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }
  ;
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  ;
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ "3br2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FA6U");
/* harmony import */ var _components_clients_basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6MY0");


var Home = function Home() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].home
  }, h(_components_clients_basic__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null));
};
/* harmony default export */ __webpack_exports__["a"] = (Home);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "6MY0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _wsMonitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("RaXK");
/* harmony import */ var _hooks_useWs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Zp5c");


var WsClient = function WsClient() {
  var ws = Object(_hooks_useWs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
  return h(_wsMonitor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
    websocket: ws
  });
};
/* harmony default export */ __webpack_exports__["a"] = (WsClient);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "Akgo":
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
    length = array ? array.length : 0;
  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
    length = array ? array.length : 0,
    result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
    length = values.length,
    offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
    index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
    length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
  funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var _Symbol = root.Symbol,
  propertyIsEnumerable = objectProto.propertyIsEnumerable,
  splice = arrayProto.splice,
  spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
  nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
    length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
    length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
    length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
    length = values ? values.length : 0;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
    includes = arrayIncludes,
    isCommon = true,
    length = array.length,
    result = [],
    valuesLength = values.length;
  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  } else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer: while (++index < length) {
    var value = array[index],
      computed = iteratee ? iteratee(value) : value;
    value = comparator || value !== 0 ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    } else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
    length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
      index = -1,
      length = nativeMax(args.length - start, 0),
      array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = _typeof(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order of result values is determined by the
 * order they occur in the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function (array, values) {
  return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
});

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = _typeof(value);
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && _typeof(value) == 'object';
}
module.exports = difference;

/***/ }),

/***/ "FA6U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"home":"home__uRcqa","resource":"resource__reFLt"});

/***/ }),

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "Pc05":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;
  var nativeCodeString = '[native code]';
  function classNames() {
    var classes = [];
    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = _typeof(arg);
      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg)) {
        if (arg.length) {
          var inner = classNames.apply(null, arg);
          if (inner) {
            classes.push(inner);
          }
        }
      } else if (argType === 'object') {
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          classes.push(arg.toString());
          continue;
        }
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }
    return classes.join(' ');
  }
  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if ( true && _typeof(__webpack_require__("fZQF")) === 'object' && __webpack_require__("fZQF")) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    window.classNames = classNames;
  }
})();

/***/ }),

/***/ "QfWi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./style/index.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: external "preact"
var external_preact_ = __webpack_require__("HteQ");

// CONCATENATED MODULE: /Users/ep/workspace/ws-do/node_modules/preact-router/dist/preact-router.es.js

var EMPTY$1 = {};
function preact_router_es_assign(obj, props) {
  // eslint-disable-next-line guard-for-in
  for (var i in props) {
    obj[i] = props[i];
  }
  return obj;
}
function exec(url, route, opts) {
  var reg = /(?:\?([^#]*))?(#.*)?$/,
    c = url.match(reg),
    matches = {},
    ret;
  if (c && c[1]) {
    var p = c[1].split('&');
    for (var i = 0; i < p.length; i++) {
      var r = p[i].split('=');
      matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
    }
  }
  url = segmentize(url.replace(reg, ''));
  route = segmentize(route || '');
  var max = Math.max(url.length, route.length);
  for (var i$1 = 0; i$1 < max; i$1++) {
    if (route[i$1] && route[i$1].charAt(0) === ':') {
      var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
        flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
        plus = ~flags.indexOf('+'),
        star = ~flags.indexOf('*'),
        val = url[i$1] || '';
      if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
        ret = false;
        break;
      }
      matches[param] = decodeURIComponent(val);
      if (plus || star) {
        matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
        break;
      }
    } else if (route[i$1] !== url[i$1]) {
      ret = false;
      break;
    }
  }
  if (opts.default !== true && ret === false) {
    return false;
  }
  return matches;
}
function pathRankSort(a, b) {
  return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
  vnode.index = index;
  vnode.rank = rankChild(vnode);
  return vnode.props;
}
function segmentize(url) {
  return url.replace(/(^\/+|\/+$)/g, '').split('/');
}
function rankSegment(segment) {
  return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}
function rank(path) {
  return segmentize(path).map(rankSegment).join('');
}
function rankChild(vnode) {
  return vnode.props.default ? 0 : rank(vnode.props.path);
}
var customHistory = null;
var ROUTERS = [];
var subscribers = [];
var EMPTY = {};
function setUrl(url, type) {
  if (type === void 0) type = 'push';
  if (customHistory && customHistory[type]) {
    customHistory[type](url);
  } else if (typeof history !== 'undefined' && history[type + 'State']) {
    history[type + 'State'](null, null, url);
  }
}
function getCurrentUrl() {
  var url;
  if (customHistory && customHistory.location) {
    url = customHistory.location;
  } else if (customHistory && customHistory.getCurrentLocation) {
    url = customHistory.getCurrentLocation();
  } else {
    url = typeof location !== 'undefined' ? location : EMPTY;
  }
  return "" + (url.pathname || '') + (url.search || '');
}
function route(url, replace) {
  if (replace === void 0) replace = false;
  if (typeof url !== 'string' && url.url) {
    replace = url.replace;
    url = url.url;
  }

  // only push URL into history if we can handle it
  if (preact_router_es_canRoute(url)) {
    setUrl(url, replace ? 'replace' : 'push');
  }
  return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function preact_router_es_canRoute(url) {
  for (var i = ROUTERS.length; i--;) {
    if (ROUTERS[i].canRoute(url)) {
      return true;
    }
  }
  return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
  var didRoute = false;
  for (var i = 0; i < ROUTERS.length; i++) {
    if (ROUTERS[i].routeTo(url) === true) {
      didRoute = true;
    }
  }
  for (var i$1 = subscribers.length; i$1--;) {
    subscribers[i$1](url);
  }
  return didRoute;
}
function routeFromLink(node) {
  // only valid elements
  if (!node || !node.getAttribute) {
    return;
  }
  var href = node.getAttribute('href'),
    target = node.getAttribute('target');

  // ignore links with targets and non-path URLs
  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
    return;
  }

  // attempt to route, if no match simply cede control to browser
  return route(href);
}
function handleLinkClick(e) {
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  routeFromLink(e.currentTarget || e.target || this);
  return prevent(e);
}
function prevent(e) {
  if (e) {
    if (e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    e.preventDefault();
  }
  return false;
}
function delegateLinkHandler(e) {
  // ignore events the browser takes care of already:
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  var t = e.target;
  do {
    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
      if (t.hasAttribute('native')) {
        return;
      }
      // if link is handled by the router, prevent browser defaults
      if (routeFromLink(t)) {
        return prevent(e);
      }
    }
  } while (t = t.parentNode);
}
var eventListenersInitialized = false;
function initEventListeners() {
  if (eventListenersInitialized) {
    return;
  }
  if (typeof addEventListener === 'function') {
    if (!customHistory) {
      addEventListener('popstate', function () {
        routeTo(getCurrentUrl());
      });
    }
    addEventListener('click', delegateLinkHandler);
  }
  eventListenersInitialized = true;
}
var preact_router_es_Router = function (Component$$1) {
  function Router(props) {
    Component$$1.call(this, props);
    if (props.history) {
      customHistory = props.history;
    }
    this.state = {
      url: props.url || getCurrentUrl()
    };
    initEventListeners();
  }
  if (Component$$1) Router.__proto__ = Component$$1;
  Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router.prototype.constructor = Router;
  Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (props.static !== true) {
      return true;
    }
    return props.url !== this.props.url || props.onChange !== this.props.onChange;
  };

  /** Check if the given URL can be matched against any children */
  Router.prototype.canRoute = function canRoute(url) {
    var children = Object(external_preact_["toChildArray"])(this.props.children);
    return this.getMatchingChildren(children, url, false).length > 0;
  };

  /** Re-render children with a new URL to match against. */
  Router.prototype.routeTo = function routeTo(url) {
    this.setState({
      url: url
    });
    var didRoute = this.canRoute(url);

    // trigger a manual re-route if we're not in the middle of an update:
    if (!this.updating) {
      this.forceUpdate();
    }
    return didRoute;
  };
  Router.prototype.componentWillMount = function componentWillMount() {
    ROUTERS.push(this);
    this.updating = true;
  };
  Router.prototype.componentDidMount = function componentDidMount() {
    var this$1 = this;
    if (customHistory) {
      this.unlisten = customHistory.listen(function (location) {
        this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
      });
    }
    this.updating = false;
  };
  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }
    ROUTERS.splice(ROUTERS.indexOf(this), 1);
  };
  Router.prototype.componentWillUpdate = function componentWillUpdate() {
    this.updating = true;
  };
  Router.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updating = false;
  };
  Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
      var matches = exec(url, vnode.props.path, vnode.props);
      if (matches) {
        if (invoke !== false) {
          var newProps = {
            url: url,
            matches: matches
          };
          preact_router_es_assign(newProps, matches);
          delete newProps.ref;
          delete newProps.key;
          return Object(external_preact_["cloneElement"])(vnode, newProps);
        }
        return vnode;
      }
    }).filter(Boolean);
  };
  Router.prototype.render = function render(ref, ref$1) {
    var children = ref.children;
    var onChange = ref.onChange;
    var url = ref$1.url;
    var active = this.getMatchingChildren(Object(external_preact_["toChildArray"])(children), url, true);
    var current = active[0] || null;
    var previous = this.previousUrl;
    if (url !== previous) {
      this.previousUrl = url;
      if (typeof onChange === 'function') {
        onChange({
          router: this,
          url: url,
          previous: previous,
          active: active,
          current: current
        });
      }
    }
    return current;
  };
  return Router;
}(external_preact_["Component"]);
var preact_router_es_Link = function Link(props) {
  return Object(external_preact_["createElement"])('a', preact_router_es_assign({
    onClick: handleLinkClick
  }, props));
};
var preact_router_es_Route = function Route(props) {
  return Object(external_preact_["createElement"])(props.component, props);
};
preact_router_es_Router.subscribers = subscribers;
preact_router_es_Router.getCurrentUrl = getCurrentUrl;
preact_router_es_Router.route = route;
preact_router_es_Router.Router = preact_router_es_Router;
preact_router_es_Router.Route = preact_router_es_Route;
preact_router_es_Router.Link = preact_router_es_Link;
preact_router_es_Router.exec = exec;

/* harmony default export */ var preact_router_es = (preact_router_es_Router);
// EXTERNAL MODULE: ./components/header/index.js
var header = __webpack_require__("QyV/");

// EXTERNAL MODULE: ./routes/home/index.js
var home = __webpack_require__("3br2");

// EXTERNAL MODULE: ./routes/synth/index.js
var synth = __webpack_require__("S66L");

// EXTERNAL MODULE: ./routes/midi/index.js
var midi = __webpack_require__("f/Gs");

// CONCATENATED MODULE: ./components/app.js




// Code-splitting is automated for `routes` directory



var app_App = function App() {
  return Object(external_preact_["h"])("div", {
    id: "app"
  }, Object(external_preact_["h"])(header["a" /* default */], null), Object(external_preact_["h"])("main", null, Object(external_preact_["h"])(preact_router_es_Router, null, Object(external_preact_["h"])(home["a" /* default */], {
    path: "/"
  }), Object(external_preact_["h"])(synth["a" /* default */], {
    path: "/synth"
  }), Object(external_preact_["h"])(midi["a" /* default */], {
    path: "/midi"
  }))));
};
/* harmony default export */ var app = (app_App);
// CONCATENATED MODULE: ./index.js


/* harmony default export */ var index = __webpack_exports__["default"] = (app);

/***/ }),

/***/ "QvKU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "QyV/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {var Header = function Header() {
  return h("header", {
    className: "items-center fixed w-full h-10 z-50 flex bg-slate-800 shadow-xl gap-4"
  }, h("a", {
    href: "/",
    className: "hover:bg-slate-700 transition-colors h-full flex items-center px-4"
  }, h("h1", null, "monitor")), h("a", {
    href: "/synth",
    className: "hover:bg-slate-700 transition-colors h-full flex items-center px-4"
  }, h("h1", null, "synth")), h("a", {
    href: "/midi",
    className: "hover:bg-slate-700 transition-colors h-full flex items-center px-4"
  }, h("h1", null, "midi")));
};
/* harmony default export */ __webpack_exports__["a"] = (Header);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "R5sp":
/***/ (function(module, exports) {

module.exports = range;

/*
  range(0, 5); // [0, 1, 2, 3, 4]
  range(5); // [0, 1, 2, 3, 4]
  range(-5); // [0, -1, -2, -3, -4]
  range(0, 20, 5) // [0, 5, 10, 15]
  range(0, -20, -5) // [0, -5, -10, -15]
*/

function range(start, stop, step) {
  if (start != null && typeof start != 'number') {
    throw new Error('start must be a number or null');
  }
  if (stop != null && typeof stop != 'number') {
    throw new Error('stop must be a number or null');
  }
  if (step != null && typeof step != 'number') {
    throw new Error('step must be a number or null');
  }
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  if (step == null) {
    step = stop > start ? 1 : -1;
  }
  var toReturn = [];
  var increasing = start < stop; //← here’s the change
  for (; increasing ? start < stop : start > stop; start += step) {
    toReturn.push(start);
  }
  return toReturn;
}

/***/ }),

/***/ "RaXK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("uOFG");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var WsMonitor = function WsMonitor(_ref) {
  var websocket = _ref.websocket;
  var ws = websocket.ws,
    wsUrl = websocket.wsUrl,
    setWsUrl = websocket.setWsUrl,
    history = websocket.history,
    myChannels = websocket.myChannels,
    availableChannels = websocket.availableChannels,
    id = websocket.id,
    wsState = websocket.wsState,
    joinChannel = websocket.joinChannel,
    getChannels = websocket.getChannels,
    heartbeat = websocket.heartbeat,
    broadcastMessage = websocket.broadcastMessage,
    sendMessageToTargetClient = websocket.sendMessageToTargetClient,
    sendMessageToTargetChannel = websocket.sendMessageToTargetChannel,
    sendMessageToJoinedChannels = websocket.sendMessageToJoinedChannels;
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "k"])(''),
    _useState2 = _slicedToArray(_useState, 2),
    message = _useState2[0],
    setMessage = _useState2[1];
  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "k"])(''),
    _useState4 = _slicedToArray(_useState3, 2),
    targetChannel = _useState4[0],
    setTargetChannel = _useState4[1];
  var _useState5 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "k"])(''),
    _useState6 = _slicedToArray(_useState5, 2),
    targetId = _useState6[0],
    setTargetId = _useState6[1];
  var messageIsValidJSON = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useMemo */ "h"])(function () {
    try {
      JSON.parse(message);
    } catch (e) {
      return false;
    }
    return true;
  }, [message]);
  var handleWsUrlChange = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useCallback */ "a"])(function (e) {
    e.preventDefault();
    setWsUrl(e.target.wsUrl.value);
  }, [setWsUrl]);
  return h("div", {
    className: "flex flex-col gap-4"
  }, h("div", {
    className: "flex gap-8"
  }, ws && wsUrl && h("div", null, wsState, " on: ", wsUrl), h("form", {
    onSubmit: handleWsUrlChange
  }, h("input", {
    type: "text",
    name: "wsUrl",
    placeholder: wsUrl
  }), h("button", {
    type: "submit"
  }, "go"))), ws && h(Fragment, null, h("div", null, id && h("div", null, "id: ", id), heartbeat && h("div", null, "heartbeat: ", JSON.stringify(heartbeat))), h("div", null, h("div", {
    className: "flex flex-row gap-8"
  }, h("button", {
    onClick: getChannels
  }, "get channels"), h("form", {
    onSubmit: joinChannel
  }, h("input", {
    type: "text",
    name: "channel"
  }), h("button", {
    type: "submit",
    className: "ml-2"
  }, "join channel"))), h("ul", null, "my channels:", myChannels.map(function (_ref2) {
    var channel = _ref2.channel,
      members = _ref2.members;
    return h("li", {
      key: channel,
      className: 'ml-2'
    }, channel, " | ", members.length, " members: ", members.join(', '));
  })), h("ul", null, "all channels:", availableChannels.map(function (_ref3) {
    var channel = _ref3.channel,
      members = _ref3.members;
    return h("li", {
      key: channel,
      className: 'ml-2'
    }, channel, ' ', members.length ? "| ".concat(members.length, " members: ").concat(members.join(', ')) : '(no members)');
  }))), h("div", null, h("div", {
    className: "flex flex-col gap-1"
  }, h("div", null, h("label", {
    htmlFor: "message"
  }, "message"), h("textarea", {
    cols: 100,
    rows: 1,
    name: "message",
    placeholder: "{\"hello\": 1}",
    value: message,
    onInput: function onInput(e) {
      return setMessage(e.target.value);
    }
  })), h("div", null, h("label", {
    htmlFor: "targetChannel"
  }, "target channel"), h("input", {
    name: "targetChannel",
    type: "text",
    value: targetChannel,
    onInput: function onInput(e) {
      return setTargetChannel(e.target.value);
    }
  })), h("div", null, h("label", {
    htmlFor: "targetChannel"
  }, "target client"), h("input", {
    name: "targetId",
    type: "text",
    value: targetId,
    onInput: function onInput(e) {
      return setTargetId(e.target.value);
    }
  })), h("div", null, h("button", {
    disabled: !messageIsValidJSON,
    onClick: function onClick() {
      return sendMessageToTargetClient(message, targetId);
    }
  }, "send to another client"), h("button", {
    disabled: !messageIsValidJSON,
    onClick: function onClick() {
      return sendMessageToTargetChannel(message, targetChannel);
    }
  }, "send to channel"), h("button", {
    disabled: !messageIsValidJSON,
    onClick: function onClick() {
      return sendMessageToJoinedChannels(message);
    }
  }, "send to joined channel"), h("button", {
    disabled: !messageIsValidJSON,
    onClick: function onClick() {
      return broadcastMessage(message);
    }
  }, "broadcast"))), !messageIsValidJSON && message.length ? h("div", null, "Invalid JSON") : h(Fragment, null)), h("div", null, "incoming messages:"), h("div", {
    style: {
      overflow: 'scroll',
      height: '200px'
    }
  }, history.map(function (data) {
    return h("div", {
      key: data
    }, JSON.stringify(data));
  }))));
};
/* harmony default export */ __webpack_exports__["a"] = (WsMonitor);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "S66L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("s9DB");
/* harmony import */ var _components_clients_synth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("s/nh");


var Synth = function Synth() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].home
  }, h(_components_clients_synth__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null));
};
/* harmony default export */ __webpack_exports__["a"] = (Synth);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "Zp5c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("uOFG");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useWs = function useWs() {
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "k"])(null),
    _useState2 = _slicedToArray(_useState, 2),
    ws = _useState2[0],
    setWs = _useState2[1];
  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "k"])(''),
    _useState4 = _slicedToArray(_useState3, 2),
    wsUrl = _useState4[0],
    setWsUrl = _useState4[1];
  var _useState5 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "k"])([]),
    _useState6 = _slicedToArray(_useState5, 2),
    history = _useState6[0],
    setHistory = _useState6[1];
  var _useState7 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "k"])(null),
    _useState8 = _slicedToArray(_useState7, 2),
    heartbeat = _useState8[0],
    setHeartbeat = _useState8[1];
  var _useState9 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "k"])([]),
    _useState10 = _slicedToArray(_useState9, 2),
    myChannels = _useState10[0],
    setMyChannels = _useState10[1];
  var _useState11 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "k"])([]),
    _useState12 = _slicedToArray(_useState11, 2),
    availableChannels = _useState12[0],
    setAvailableChannels = _useState12[1];
  var _useState13 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "k"])(null),
    _useState14 = _slicedToArray(_useState13, 2),
    id = _useState14[0],
    setId = _useState14[1];
  var _useState15 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "k"])(''),
    _useState16 = _slicedToArray(_useState15, 2),
    incomingMessage = _useState16[0],
    setIncomingMessage = _useState16[1];
  var onMessage = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useCallback */ "a"])( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (event) {
      var data = yield JSON.parse(event.data);
      switch (data.type) {
        case 'id':
          setId(data.id);
          break;
        case 'heartbeat':
          setHeartbeat(data.heartbeat);
          break;
        case 'myChannels':
          setMyChannels(data.channels);
          break;
        case 'availableChannels':
          setAvailableChannels(data.channels);
          break;
        default:
          setHistory(function (p) {
            return [data].concat(_toConsumableArray(p));
          });
          break;
      }
      setIncomingMessage(data);
    });
    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }(), []);
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "d"])(function () {
    if (!window) return;
    var protocol = window.location.protocol.includes('https') ? 'wss' : 'ws';
    var port = window.location.protocol.includes('https') ? '' : ':3000';
    var url = "".concat(protocol, "://").concat(location.hostname).concat(port, "?channels=welcome");
    setWsUrl(url);
  }, []);
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "d"])(function () {
    if (!wsUrl.length || typeof window === 'undefined') return;
    console.log('attempting to connect to', wsUrl);
    if (ws) ws.close();
    var wsConnection = new WebSocket(wsUrl);
    wsConnection.onmessage = onMessage;
    wsConnection.onopen = function () {
      console.log('hey were open');
    };
    setWs(wsConnection);
  }, [onMessage, wsUrl]);
  var getChannels = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useCallback */ "a"])(function () {
    ws === null || ws === void 0 ? void 0 : ws.send(JSON.stringify({
      type: 'myChannels'
    }));
    ws === null || ws === void 0 ? void 0 : ws.send(JSON.stringify({
      type: 'availableChannels'
    }));
  }, [ws]);
  var wsState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useMemo */ "h"])(function () {
    if (typeof window === 'undefined') return;
    switch (ws === null || ws === void 0 ? void 0 : ws.readyState) {
      case WebSocket.CONNECTING:
        return 'connecting';
      case WebSocket.OPEN:
        return 'open';
      case WebSocket.CLOSING:
        return 'closing';
      case WebSocket.CLOSED:
        return 'closed';
      default:
        return 'uninitialized';
    }
  }, [ws === null || ws === void 0 ? void 0 : ws.readyState]);
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "d"])(function () {
    if (wsState === 'open') getChannels();
  }, [getChannels, ws, wsState]);
  var joinChannel = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useCallback */ "a"])(function (e) {
    e.preventDefault();
    ws === null || ws === void 0 ? void 0 : ws.send(JSON.stringify({
      type: 'joinChannel',
      channel: e.target.channel.value
    }));
  }, [ws]);
  var broadcastMessage = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useCallback */ "a"])(function (message) {
    return wsState === 'open' && (ws === null || ws === void 0 ? void 0 : ws.send(JSON.stringify({
      type: 'broadcast',
      message: _objectSpread(_objectSpread({}, JSON.parse(message)), {}, {
        timestamp: Date.now()
      })
    })));
  }, [ws, wsState]);
  var sendMessageToTargetChannel = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useCallback */ "a"])(function (message, channel) {
    wsState === 'open' && (ws === null || ws === void 0 ? void 0 : ws.send(JSON.stringify(_objectSpread(_objectSpread({}, JSON.parse(message)), {}, {
      timestamp: Date.now(),
      channel: channel
    }))));
  }, [ws, wsState]);
  var sendMessageToTargetClient = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useCallback */ "a"])(function (message, targetId) {
    console.log('sending to target id', message, targetId);
    wsState === 'open' && (ws === null || ws === void 0 ? void 0 : ws.send(JSON.stringify(_objectSpread(_objectSpread({}, JSON.parse(message)), {}, {
      timestamp: Date.now(),
      targetId: targetId
    }))));
  }, [ws, wsState]);
  var sendMessageToJoinedChannels = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useCallback */ "a"])(function (message) {
    wsState === 'open' && (ws === null || ws === void 0 ? void 0 : ws.send(JSON.stringify(_objectSpread(_objectSpread({}, JSON.parse(message)), {}, {
      timestamp: Date.now()
    }))));
  }, [ws, wsState]);
  return {
    ws: ws,
    wsUrl: wsUrl,
    setWsUrl: setWsUrl,
    history: history,
    myChannels: myChannels,
    availableChannels: availableChannels,
    id: id,
    incomingMessage: incomingMessage,
    wsState: wsState,
    joinChannel: joinChannel,
    getChannels: getChannels,
    heartbeat: heartbeat,
    broadcastMessage: broadcastMessage,
    sendMessageToTargetClient: sendMessageToTargetClient,
    sendMessageToTargetChannel: sendMessageToTargetChannel,
    sendMessageToJoinedChannels: sendMessageToJoinedChannels
  };
};
/* harmony default export */ __webpack_exports__["a"] = (useWs);

/***/ }),

/***/ "cNRa":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("3Aci")();
}

/***/ }),

/***/ "eoo9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"home":"home__1n+Tk","resource":"resource__Gnwfh"});

/***/ }),

/***/ "f/Gs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eoo9");
/* harmony import */ var _components_clients_midi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("w+Gk");


var Synth = function Synth() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].home
  }, h(_components_clients_midi__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null));
};
/* harmony default export */ __webpack_exports__["a"] = (Synth);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "fZQF":
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "fbSc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolySynth; });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PolySynth = /*#__PURE__*/function () {
  function PolySynth() {
    _classCallCheck(this, PolySynth);
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.voices = [];
  }
  _createClass(PolySynth, [{
    key: "playNote",
    value: function playNote(note) {
      var velocity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 127;
      try {
        // Create a voice for the note
        var voice = new Voice(this.audioContext, note, velocity);
        this.voices.push(voice);

        // Start the voice
        voice.start();
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: "stopNote",
    value: function stopNote(note) {
      try {
        // Find the voice playing the note
        var voice = this.voices.find(function (voice) {
          return voice.note === note;
        });
        if (voice) {
          // Stop and remove the voice
          voice.stop();
          this.voices = this.voices.filter(function (v) {
            return v !== voice;
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  }]);
  return PolySynth;
}();

var Voice = /*#__PURE__*/function () {
  function Voice(audioContext, note, velocity) {
    _classCallCheck(this, Voice);
    this.audioContext = audioContext;
    this.note = note;
    this.velocity = velocity;

    // Create an oscillator
    this.oscillator = this.audioContext.createOscillator();
    this.oscillator.frequency.value = getFrequency(note);

    // Create a gain node
    this.gainNode = this.audioContext.createGain();
    this.gainNode.gain.value = velocity / 127;

    // Connect the oscillator to the gain node and the gain node to the audio context destination
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioContext.destination);
  }
  _createClass(Voice, [{
    key: "start",
    value: function start() {
      // Start the oscillator
      this.oscillator.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      // Stop the oscillator smoothly over 500ms
      this.gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 0.5);

      // Stop the oscillator completely after 500ms
      this.oscillator.stop(this.audioContext.currentTime + 0.5);
    }
  }]);
  return Voice;
}();
function getFrequency(note) {
  return 440 * Math.pow(2, (note - 69) / 12);
}

/***/ }),

/***/ "glPK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MIDIHandler; });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MIDIHandler = /*#__PURE__*/function () {
  function MIDIHandler(synth) {
    _classCallCheck(this, MIDIHandler);
    console.log('Midihandler constructor', navigator);
    // Request access to Web MIDI API
    navigator.requestMIDIAccess().then(this.onMIDISuccess.bind(this), this.onMIDIFailure.bind(this));
    this.synth = synth;
  }
  _createClass(MIDIHandler, [{
    key: "onMIDIMessage",
    value: function onMIDIMessage(message) {
      // Extract MIDI data
      var _message$data = _slicedToArray(message.data, 3),
        status = _message$data[0],
        note = _message$data[1],
        velocity = _message$data[2];

      // Check if the message is from the selected input device
      var selectedInput = this.midiAccess.inputs.get(this.selectedDeviceId);
      if (selectedInput === message.target) {
        if (status === 144 && velocity > 0) {
          // Note-on message
          // this.synth.playSynth(note, velocity);
          console.log('note on', note);
        } else if (status === 128 || status === 144 && velocity === 0) {
          // Note-off message
          // this.stopSynth(note);
          console.log('note on', note);
        }
      }
    }
  }, {
    key: "onMIDISuccess",
    value: function onMIDISuccess(access) {
      this.midiAccess = access;

      // Get the list of available MIDI devices
      var devices = this.midiAccess.inputs.values();
      var selectElement = document.getElementById('device-select');

      // Populate the device select options
      var _iterator = _createForOfIteratorHelper(devices),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var device = _step.value;
          var optionElement = document.createElement('option');
          optionElement.value = device.id;
          optionElement.text = device.name;
          selectElement.appendChild(optionElement);
        }

        // Add event listener for device selection
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      selectElement.addEventListener('change', this.onDeviceSelect);

      // Listen for MIDI messages
      var _iterator2 = _createForOfIteratorHelper(this.midiAccess.inputs.values()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var input = _step2.value;
          input.onmidimessage = this.onMIDIMessage;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "onMIDIFailure",
    value: function onMIDIFailure() {
      console.log('Failed to access MIDI devices');
    }
  }, {
    key: "onDeviceSelect",
    value: function onDeviceSelect(event) {
      var _this = this;
      this.selectedDeviceId = event.target.value;

      // Close existing MIDI inputs
      navigator.requestMIDIAccess().then(function (midiAccess) {
        var _iterator3 = _createForOfIteratorHelper(midiAccess.inputs.values()),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var input = _step3.value;
            input.onmidimessage = null;
          }

          // Stop all active voices
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        var _iterator4 = _createForOfIteratorHelper(_this.synth.voices),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var voice = _step4.value;
            voice.stop();
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        _this.synth.voices = []; // Clear the voices array

        // Listen for MIDI messages on the selected input
        var selectedInput = midiAccess.inputs.get(_this.selectedDeviceId);
        if (selectedInput) {
          selectedInput.onmidimessage = _this.onMIDIMessage;
        }
      });
    }
  }, {
    key: "setupKeyboardListener",
    value: function setupKeyboardListener() {
      var _this2 = this;
      // Keyboard event listener for Shift + Spacebar
      document.addEventListener('keydown', function (event) {
        if (event.shiftKey && event.code === 'Space') {
          _this2.toggleMIDIDeviceSelect();
        }
      });
    }
  }, {
    key: "toggleMIDIDeviceSelect",
    value: function toggleMIDIDeviceSelect() {
      var deviceSelectContainer = document.getElementById('device-select-container');
      if (!deviceSelectContainer) return;
      if (deviceSelectContainer.style.display === 'none') {
        // Show MIDI device select container
        deviceSelectContainer.style.display = 'block';
      } else {
        // Hide MIDI device select container
        deviceSelectContainer.style.display = 'none';
      }
    }
  }]);
  return MIDIHandler;
}();


/***/ }),

/***/ "rLQs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MIDIPiano; });
/* harmony import */ var react_piano__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/4+7");
/* harmony import */ var react_piano_dist_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QvKU");


function MIDIPiano(_ref) {
  var onPlayNote = _ref.onPlayNote,
    onStopNote = _ref.onStopNote;
  var firstNote = react_piano__WEBPACK_IMPORTED_MODULE_0__[/* MidiNumbers */ "a"].fromNote('c3');
  var lastNote = react_piano__WEBPACK_IMPORTED_MODULE_0__[/* MidiNumbers */ "a"].fromNote('f5');
  // const keyboardShortcuts = KeyboardShortcuts.create({
  //   firstNote,
  //   lastNote,
  //   keyboardConfig: KeyboardShortcuts.HOME_ROW,
  // });

  return h(react_piano__WEBPACK_IMPORTED_MODULE_0__[/* Piano */ "b"], {
    noteRange: {
      first: firstNote,
      last: lastNote
    },
    playNote: onPlayNote,
    stopNote: onStopNote,
    width: 1000
    // keyboardShortcuts={keyboardShortcuts}
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "rYND":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "s/nh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("uOFG");
/* harmony import */ var _utils_polysynth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fbSc");
/* harmony import */ var _piano__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rLQs");
/* harmony import */ var _hooks_useWs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Zp5c");
/* harmony import */ var _wsMonitor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("RaXK");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var SynthClient = function SynthClient() {
  var ws = Object(_hooks_useWs__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
  var incomingMessage = ws.incomingMessage,
    broadcastMessage = ws.broadcastMessage,
    myChannels = ws.myChannels,
    sendMessageToTargetClient = ws.sendMessageToTargetClient;
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "k"])(null),
    _useState2 = _slicedToArray(_useState, 2),
    polySynth = _useState2[0],
    setPolySynth = _useState2[1];
  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "k"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    muteIncoming = _useState4[0],
    setMuteIncoming = _useState4[1];
  var _useState5 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "k"])(false),
    _useState6 = _slicedToArray(_useState5, 2),
    muteOutgoing = _useState6[0],
    setMuteOutgoing = _useState6[1];
  var _useState7 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "k"])(true),
    _useState8 = _slicedToArray(_useState7, 2),
    broadcastNotes = _useState8[0],
    setBroadcastNotes = _useState8[1];
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "d"])(function () {
    if (!incomingMessage) return;
    switch (incomingMessage.type) {
      case 'playNote':
        if (!muteIncoming) polySynth === null || polySynth === void 0 ? void 0 : polySynth.playNote.apply(polySynth, _toConsumableArray(incomingMessage.noteData));
        break;
      case 'stopNote':
        polySynth === null || polySynth === void 0 ? void 0 : polySynth.stopNote.apply(polySynth, _toConsumableArray(incomingMessage.noteData));
        break;
    }
  }, [polySynth, incomingMessage, muteIncoming]);
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "d"])(function () {
    if (!window) return;
    setPolySynth(new _utils_polysynth__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]());
  }, []);
  var handlePlayNote = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useCallback */ "a"])(function (note) {
    console.log('playing', note);
    if (polySynth && !muteOutgoing) polySynth.playNote(note);
    if (broadcastNotes) broadcastMessage(JSON.stringify({
      type: 'playNote',
      noteData: [note]
    }));
  }, [broadcastMessage, broadcastNotes, muteOutgoing, polySynth]);
  var handleStopNote = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useCallback */ "a"])(function (note) {
    console.log('stopping', note);
    if (polySynth) polySynth.stopNote(note);
    if (broadcastNotes) broadcastMessage(JSON.stringify({
      type: 'stopNote',
      noteData: [note]
    }));
  }, [broadcastMessage, broadcastNotes, polySynth]);
  var _useState9 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "k"])(null),
    _useState10 = _slicedToArray(_useState9, 2),
    sequencerIntervalId = _useState10[0],
    setSequencerIntervalId = _useState10[1];
  var handleSequenceChannel = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useCallback */ "a"])(function (channelName) {
    if (!channelName.length) return;
    if (sequencerIntervalId) clearInterval(sequencerIntervalId);
    console.log('setting new interval id');
    var sequenceTarget;
    setSequencerIntervalId(setInterval(function () {
      var targetChannel = myChannels.find(function (c) {
        return c.channel === channelName;
      });
      if (!targetChannel) return;
      console.log('targetChannel', targetChannel);
      var members = targetChannel.members.filter(function (m) {
        return m !== ws.id;
      });
      if (!members.length) return;
      console.log('members', members);
      var targetIndex = sequenceTarget ? (members.findIndex(function (m) {
        return m === sequenceTarget;
      }) + 1) % members.length : 0;
      sequenceTarget = sequenceTarget ? members[targetIndex] : members[0];
      console.log('sequencing', members, sequenceTarget, targetIndex);
      sendMessageToTargetClient(JSON.stringify({
        type: 'playNote',
        noteData: [69 + targetIndex]
      }), sequenceTarget);
      setTimeout(function () {
        sendMessageToTargetClient(JSON.stringify({
          type: 'stopNote',
          noteData: [69 + targetIndex]
        }), sequenceTarget);
      }, 100);
    }, 1000));
    return function () {
      return clearInterval(sequencerIntervalId);
    };
  }, [myChannels, sendMessageToTargetClient, sequencerIntervalId, ws.id]);
  return h("div", null, h(_wsMonitor__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    websocket: ws
  }), h("div", {
    className: "mb-2"
  }, h("div", null, h("label", {
    htmlFor: "mute"
  }, "mute incoming notes"), h("input", {
    name: 'mute incoming',
    type: "checkbox",
    checked: muteIncoming,
    onChange: function onChange() {
      return setMuteIncoming(function (p) {
        return !p;
      });
    }
  })), h("div", null, h("label", {
    htmlFor: "mute"
  }, "mute outgoing notes"), h("input", {
    name: 'mute outgoing',
    type: "checkbox",
    checked: muteOutgoing,
    onChange: function onChange() {
      return setMuteOutgoing(function (p) {
        return !p;
      });
    }
  })), h("div", null, h("label", {
    htmlFor: "broadcastNotes"
  }, "broadcast notes"), h("input", {
    name: 'broadcastNotes',
    type: "checkbox",
    checked: broadcastNotes,
    onChange: function onChange() {
      return setBroadcastNotes(!broadcastNotes);
    }
  }))), h("div", {
    className: "flex flex-row gap-2 mb-2"
  }, h("span", null, "sequence to channel"), h("select", {
    className: "px-1",
    name: "channel",
    onChange: function onChange(e) {
      return handleSequenceChannel(e.target.value);
    }
  }, h(Fragment, null, h("option", null), myChannels.map(function (c) {
    return h("option", {
      key: c.channel
    }, c.channel);
  })))), h(_piano__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    onPlayNote: handlePlayNote,
    onStopNote: handleStopNote
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (SynthClient);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "s9DB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"home":"home__Tk3DL","resource":"resource__-GqBH"});

/***/ }),

/***/ "uOFG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return p; });
/* unused harmony export useErrorBoundary */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return h; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

var t,
  r,
  u,
  i,
  o = 0,
  f = [],
  c = [],
  e = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b,
  a = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,
  v = preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,
  l = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,
  m = preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;
function d(t, u) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(r, t, o || u), o = 0;
  var i = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({
    __V: c
  }), i.__[t];
}
function h(n) {
  return o = 1, s(B, n);
}
function s(n, u, i) {
  var o = d(t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.u)) {
    var f = function f(n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !c || c.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!c || c.call(this, n, t, r));
    };
    r.u = !0;
    var c = r.shouldComponentUpdate,
      e = r.componentWillUpdate;
    r.componentWillUpdate = function (n, t, r) {
      if (this.__e) {
        var u = c;
        c = void 0, f(n, t, r), c = u;
      }
      e && e.call(this, n, t, r);
    }, r.shouldComponentUpdate = f;
  }
  return o.__N || o.__;
}
function p(u, i) {
  var o = d(t++, 3);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));
}
function y(u, i) {
  var o = d(t++, 4);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));
}
function _(n) {
  return o = 5, F(function () {
    return {
      current: n
    };
  }, []);
}
function A(n, t, r) {
  o = 6, y(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function F(n, r) {
  var u = d(t++, 7);
  return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
  return o = 8, F(function () {
    return n;
  }, t);
}
function q(n) {
  var u = r.context[n.__c],
    i = d(t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function x(t, r) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue && preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(r ? r(t) : t);
}
function P(n) {
  var u = d(t++, 10),
    i = h();
  return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function V() {
  var n = d(t++, 11);
  if (!n.__) {
    for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function b() {
  for (var t; t = f.shift();) if (t.__P && t.__H) try {
    t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
  } catch (r) {
    t.__H.__h = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, t.__v);
  }
}
preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b = function (n) {
  r = null, e && e(n);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r = function (n) {
  a && a(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [], t = 0)), u = r;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed = function (t) {
  v && v(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame || ((i = preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
  })), u = r = null;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c = function (t, r) {
  r.some(function (t) {
    try {
      t.__h.forEach(k), t.__h = t.__h.filter(function (n) {
        return !n.__ || w(n);
      });
    } catch (u) {
      r.some(function (n) {
        n.__h && (n.__h = []);
      }), r = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u, t.__v);
    }
  }), l && l(t, r);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount = function (t) {
  m && m(t);
  var r,
    u = t.__c;
  u && u.__H && (u.__H.__.forEach(function (n) {
    try {
      k(n);
    } catch (n) {
      r = n;
    }
  }), u.__H = void 0, r && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
  var t,
    r = function r() {
      clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  g && (t = requestAnimationFrame(r));
}
function k(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function w(n) {
  var t = r;
  n.__c = n.__(), r = t;
}
function z(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function B(n, t) {
  return "function" == typeof t ? t(n) : t;
}


/***/ }),

/***/ "w+Gk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("uOFG");
/* harmony import */ var _utils_midihandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("glPK");
/* harmony import */ var _hooks_useWs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Zp5c");
/* harmony import */ var _wsMonitor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("RaXK");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var MidiClient = function MidiClient() {
  var ws = Object(_hooks_useWs__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])();
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "k"])(null),
    _useState2 = _slicedToArray(_useState, 2),
    setMidiHandler = _useState2[1];
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "d"])(function () {
    if (!window || !navigator) return;
    setMidiHandler(new _utils_midihandler__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]());
  }, []);
  return h("div", null, h(_wsMonitor__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    websocket: ws
  }), h("div", {
    id: "device-select-container",
    style: "display: block;"
  }, h("p", null, "press shift+space to toggle controls"), h("label", {
    for: "device-select"
  }, "Select MIDI Device:"), h("select", {
    id: "device-select"
  })));
};
/* harmony default export */ __webpack_exports__["a"] = (MidiClient);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map