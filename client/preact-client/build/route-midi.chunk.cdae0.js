(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{RaXK:function(n,t,e){"use strict";(function(n,r){function o(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;c=!1}else for(;!(c=(r=i.call(e)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(n){l=!0,o=n}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return i(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var a=e("uOFG");t.a=function(t){var e=t.websocket,i=e.ws,u=e.wsUrl,c=e.setWsUrl,l=e.history,s=e.myChannels,f=e.availableChannels,_=e.id,d=e.wsState,h=e.joinChannel,y=e.getChannels,v=e.heartbeat,p=e.broadcastMessage,m=e.sendMessageToTargetClient,b=e.sendMessageToTargetChannel,g=e.sendMessageToJoinedChannels,O=o(Object(a.k)(""),2),w=O[0],S=O[1],j=o(Object(a.k)(""),2),I=j[0],k=j[1],N=o(Object(a.k)(""),2),A=N[0],M=N[1],C=Object(a.h)((function(){try{JSON.parse(w)}catch(n){return!1}return!0}),[w]),D=Object(a.a)((function(n){n.preventDefault(),c(n.target.wsUrl.value)}),[c]);return n("div",{className:"flex flex-col gap-4"},n("div",{className:"flex gap-8"},i&&u&&n("div",null,d," on: ",u),n("form",{onSubmit:D},n("input",{type:"text",name:"wsUrl",placeholder:u}),n("button",{type:"submit"},"go"))),i&&n(r,null,n("div",null,_&&n("div",null,"id: ",_),v&&n("div",null,"heartbeat: ",JSON.stringify(v))),n("div",null,n("div",{className:"flex flex-row gap-8"},n("button",{onClick:y},"get channels"),n("form",{onSubmit:h},n("input",{type:"text",name:"channel"}),n("button",{type:"submit",className:"ml-2"},"join channel"))),n("ul",null,"my channels:",s.map((function(t){var e=t.channel,r=t.members;return n("li",{key:e,className:"ml-2"},e," | ",r.length," members: ",r.join(", "))}))),n("ul",null,"all channels:",f.map((function(t){var e=t.channel,r=t.members;return n("li",{key:e,className:"ml-2"},e," ",r.length?"| ".concat(r.length," members: ").concat(r.join(", ")):"(no members)")})))),n("div",null,n("div",{className:"flex flex-col gap-1"},n("div",null,n("label",{htmlFor:"message"},"message"),n("textarea",{cols:100,rows:1,name:"message",placeholder:'{"hello": 1}',value:w,onInput:function(n){return S(n.target.value)}})),n("div",null,n("label",{htmlFor:"targetChannel"},"target channel"),n("input",{name:"targetChannel",type:"text",value:I,onInput:function(n){return k(n.target.value)}})),n("div",null,n("label",{htmlFor:"targetChannel"},"target client"),n("input",{name:"targetId",type:"text",value:A,onInput:function(n){return M(n.target.value)}})),n("div",null,n("button",{disabled:!C,onClick:function(){return m(w,A)}},"send to another client"),n("button",{disabled:!C,onClick:function(){return b(w,I)}},"send to channel"),n("button",{disabled:!C,onClick:function(){return g(w)}},"send to joined channel"),n("button",{disabled:!C,onClick:function(){return p(w)}},"broadcast"))),!C&&w.length?n("div",null,"Invalid JSON"):n(r,null)),n("div",null,"incoming messages:"),n("div",{style:{overflow:"scroll",height:"200px"}},l.map((function(t){return n("div",{key:t},JSON.stringify(t))})))))}}).call(this,e("NMMh").h,e("NMMh").Fragment)},UpEy:function(n,t,e){"use strict";e.r(t),function(n){var r=e("eoo9"),o=e("w+Gk");t.default=function(){return n("div",{class:r.a.home},n(o.a,null))}}.call(this,e("NMMh").h)},Zp5c:function(n,t,e){"use strict";function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(n)}function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function a(n,t,e){return(t=function(n){var t=function(n,t){if("object"!==r(n)||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var o=e.call(n,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"===r(t)?t:String(t)}(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function u(n){return function(n){if(Array.isArray(n))return f(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||s(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(n,t,e,r,o,i,a){try{var u=n[i](a),c=u.value}catch(n){return void e(n)}u.done?t(c):Promise.resolve(c).then(r,o)}function l(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;c=!1}else for(;!(c=(r=i.call(e)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(n){l=!0,o=n}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(n,t)||s(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(n,t){if(n){if("string"==typeof n)return f(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?f(n,t):void 0}}function f(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var _=e("uOFG");t.a=function(){var n=l(Object(_.k)(null),2),t=n[0],e=n[1],r=l(Object(_.k)(""),2),o=r[0],a=r[1],s=l(Object(_.k)([]),2),f=s[0],d=s[1],h=l(Object(_.k)(null),2),y=h[0],v=h[1],p=l(Object(_.k)([]),2),m=p[0],b=p[1],g=l(Object(_.k)([]),2),O=g[0],w=g[1],S=l(Object(_.k)(null),2),j=S[0],I=S[1],k=l(Object(_.k)(""),2),N=k[0],A=k[1],M=Object(_.a)(function(){var n,t=(n=function*(n){var t=yield JSON.parse(n.data);switch(t.type){case"id":I(t.id);break;case"heartbeat":v(t.heartbeat);break;case"myChannels":b(t.channels);break;case"availableChannels":w(t.channels);break;default:d((function(n){return[t].concat(u(n))}))}A(t)},function(){var t=this,e=arguments;return new Promise((function(r,o){function i(n){c(u,r,o,i,a,"next",n)}function a(n){c(u,r,o,i,a,"throw",n)}var u=n.apply(t,e);i(void 0)}))});return function(n){return t.apply(this,arguments)}}(),[]);Object(_.d)((function(){if(window){var n=window.location.protocol.includes("https")?"wss":"ws",t=window.location.protocol.includes("https")?"":":3000",e="".concat(n,"://").concat(location.hostname).concat(t,"?channels=welcome");a(e)}}),[]),Object(_.d)((function(){if(o.length&&"undefined"!=typeof window){console.log("attempting to connect to",o),t&&t.close();var n=new WebSocket(o);n.onmessage=M,n.onopen=function(){console.log("hey were open")},e(n)}}),[M,o]);var C=Object(_.a)((function(){null==t||t.send(JSON.stringify({type:"myChannels"})),null==t||t.send(JSON.stringify({type:"availableChannels"}))}),[t]),D=Object(_.h)((function(){if("undefined"!=typeof window)switch(null==t?void 0:t.readyState){case WebSocket.CONNECTING:return"connecting";case WebSocket.OPEN:return"open";case WebSocket.CLOSING:return"closing";case WebSocket.CLOSED:return"closed";default:return"uninitialized"}}),[null==t?void 0:t.readyState]);Object(_.d)((function(){"open"===D&&C()}),[C,t,D]);var E=Object(_.a)((function(n){n.preventDefault(),null==t||t.send(JSON.stringify({type:"joinChannel",channel:n.target.channel.value}))}),[t]),T=Object(_.a)((function(n){return"open"===D&&(null==t?void 0:t.send(JSON.stringify({type:"broadcast",message:i(i({},JSON.parse(n)),{},{timestamp:Date.now()})})))}),[t,D]),P=Object(_.a)((function(n,e){"open"===D&&(null==t||t.send(JSON.stringify(i(i({},JSON.parse(n)),{},{timestamp:Date.now(),channel:e}))))}),[t,D]),x=Object(_.a)((function(n,e){console.log("sending to target id",n,e),"open"===D&&(null==t||t.send(JSON.stringify(i(i({},JSON.parse(n)),{},{timestamp:Date.now(),targetId:e}))))}),[t,D]),H=Object(_.a)((function(n){"open"===D&&(null==t||t.send(JSON.stringify(i(i({},JSON.parse(n)),{},{timestamp:Date.now()}))))}),[t,D]);return{ws:t,wsUrl:o,setWsUrl:a,history:f,myChannels:m,availableChannels:O,id:j,incomingMessage:N,wsState:D,joinChannel:E,getChannels:C,heartbeat:y,broadcastMessage:T,sendMessageToTargetClient:x,sendMessageToTargetChannel:P,sendMessageToJoinedChannels:H}}},eoo9:function(n,t){"use strict";t.a={home:"home__1n+Tk",resource:"resource__Gnwfh"}},glPK:function(n,t,e){"use strict";function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(n)}function o(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=a(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return u=n.done,n},e:function(n){c=!0,i=n},f:function(){try{u||null==e.return||e.return()}finally{if(c)throw i}}}}function i(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;c=!1}else for(;!(c=(r=i.call(e)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(n){l=!0,o=n}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(n,t)||a(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(n,t){if(n){if("string"==typeof n)return u(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(n,t):void 0}}function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function c(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,(i=void 0,i=function(n,t){if("object"!==r(n)||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var o=e.call(n,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(o.key,"string"),"symbol"===r(i)?i:String(i)),o)}var i}e.d(t,"a",(function(){return l}));var l=function(){function n(n){console.log("Midihandler constructor",navigator),navigator.requestMIDIAccess().then(this.onMIDISuccess.bind(this),this.onMIDIFailure.bind(this)),this.synth=n}var t,e,r;return t=n,(e=[{key:"onMIDIMessage",value:function(n){var t=i(n.data,3),e=t[0],r=t[1],o=t[2];this.midiAccess.inputs.get(this.selectedDeviceId)===n.target&&(144===e&&o>0||128===e||144===e&&0===o)&&console.log("note on",r)}},{key:"onMIDISuccess",value:function(n){this.midiAccess=n;var t,e=this.midiAccess.inputs.values(),r=document.getElementById("device-select"),i=o(e);try{for(i.s();!(t=i.n()).done;){var a=t.value,u=document.createElement("option");u.value=a.id,u.text=a.name,r.appendChild(u)}}catch(n){i.e(n)}finally{i.f()}r.addEventListener("change",this.onDeviceSelect);var c,l=o(this.midiAccess.inputs.values());try{for(l.s();!(c=l.n()).done;)c.value.onmidimessage=this.onMIDIMessage}catch(n){l.e(n)}finally{l.f()}}},{key:"onMIDIFailure",value:function(){console.log("Failed to access MIDI devices")}},{key:"onDeviceSelect",value:function(n){var t=this;this.selectedDeviceId=n.target.value,navigator.requestMIDIAccess().then((function(n){var e,r=o(n.inputs.values());try{for(r.s();!(e=r.n()).done;)e.value.onmidimessage=null}catch(n){r.e(n)}finally{r.f()}var i,a=o(t.synth.voices);try{for(a.s();!(i=a.n()).done;)i.value.stop()}catch(n){a.e(n)}finally{a.f()}t.synth.voices=[];var u=n.inputs.get(t.selectedDeviceId);u&&(u.onmidimessage=t.onMIDIMessage)}))}},{key:"setupKeyboardListener",value:function(){var n=this;document.addEventListener("keydown",(function(t){t.shiftKey&&"Space"===t.code&&n.toggleMIDIDeviceSelect()}))}},{key:"toggleMIDIDeviceSelect",value:function(){var n=document.getElementById("device-select-container");n&&(n.style.display="none"===n.style.display?"block":"none")}}])&&c(t.prototype,e),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),n}()},uOFG:function(n,t,e){"use strict";function r(n,t){I.options.__h&&I.options.__h(w,n,k||t),k=0;var e=w.__H||(w.__H={__:[],__h:[]});return n>=e.__.length&&e.__.push({__V:A}),e.__[n]}function o(n){return k=1,i(g,n)}function i(n,t,e){var o=r(O++,2);if(o.t=n,!o.__c&&(o.__=[e?e(t):g(void 0,t),function(n){var t=o.__N?o.__N[0]:o.__[0],e=o.t(t,n);t!==e&&(o.__N=[e,o.__[1]],o.__c.setState({}))}],o.__c=w,!w.u)){var i=function(n,t,e){if(!o.__c.__H)return!0;var r=o.__c.__H.__.filter((function(n){return n.__c}));if(r.every((function(n){return!n.__N})))return!a||a.call(this,n,t,e);var i=!1;return r.forEach((function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}})),!(!i&&o.__c.props===n)&&(!a||a.call(this,n,t,e))};w.u=!0;var a=w.shouldComponentUpdate,u=w.componentWillUpdate;w.componentWillUpdate=function(n,t,e){if(this.__e){var r=a;a=void 0,i(n,t,e),a=r}u&&u.call(this,n,t,e)},w.shouldComponentUpdate=i}return o.__N||o.__}function a(n,t){var e=r(O++,3);!I.options.__s&&b(e.__H,t)&&(e.__=n,e.i=t,w.__H.__h.push(e))}function u(n,t){var e=r(O++,4);!I.options.__s&&b(e.__H,t)&&(e.__=n,e.i=t,w.__h.push(e))}function c(n){return k=5,s((function(){return{current:n}}),[])}function l(n,t,e){k=6,u((function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0}),null==e?e:e.concat(n))}function s(n,t){var e=r(O++,7);return b(e.__H,t)?(e.__V=n(),e.i=t,e.__h=n,e.__V):e.__}function f(n,t){return k=8,s((function(){return n}),t)}function _(n){var t=w.context[n.__c],e=r(O++,9);return e.c=n,t?(null==e.__&&(e.__=!0,t.sub(w)),t.props.value):n.__}function d(n,t){I.options.useDebugValue&&I.options.useDebugValue(t?t(n):n)}function h(){var n=r(O++,11);if(!n.__){for(var t=w.__v;null!==t&&!t.__m&&null!==t.__;)t=t.__;var e=t.__m||(t.__m=[0,0]);n.__="P"+e[0]+"-"+e[1]++}return n.__}function y(){for(var n;n=N.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(p),n.__H.__h.forEach(m),n.__H.__h=[]}catch(t){n.__H.__h=[],I.options.__e(t,n.__v)}}function v(n){var t,e=function(){clearTimeout(r),P&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(e,100);P&&(t=requestAnimationFrame(e))}function p(n){var t=w,e=n.__c;"function"==typeof e&&(n.__c=void 0,e()),w=t}function m(n){var t=w;n.__c=n.__(),w=t}function b(n,t){return!n||n.length!==t.length||t.some((function(t,e){return t!==n[e]}))}function g(n,t){return"function"==typeof t?t(n):t}e.d(t,"a",(function(){return f})),e.d(t,"b",(function(){return _})),e.d(t,"c",(function(){return d})),e.d(t,"d",(function(){return a})),e.d(t,"e",(function(){return h})),e.d(t,"f",(function(){return l})),e.d(t,"g",(function(){return u})),e.d(t,"h",(function(){return s})),e.d(t,"i",(function(){return i})),e.d(t,"j",(function(){return c})),e.d(t,"k",(function(){return o}));var O,w,S,j,I=e("NMMh"),k=0,N=[],A=[],M=I.options.__b,C=I.options.__r,D=I.options.diffed,E=I.options.__c,T=I.options.unmount;I.options.__b=function(n){w=null,M&&M(n)},I.options.__r=function(n){C&&C(n),O=0;var t=(w=n.__c).__H;t&&(S===w?(t.__h=[],w.__h=[],t.__.forEach((function(n){n.__N&&(n.__=n.__N),n.__V=A,n.__N=n.i=void 0}))):(t.__h.forEach(p),t.__h.forEach(m),t.__h=[],O=0)),S=w},I.options.diffed=function(n){D&&D(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==N.push(t)&&j===I.options.requestAnimationFrame||((j=I.options.requestAnimationFrame)||v)(y)),t.__H.__.forEach((function(n){n.i&&(n.__H=n.i),n.__V!==A&&(n.__=n.__V),n.i=void 0,n.__V=A}))),S=w=null},I.options.__c=function(n,t){t.some((function(n){try{n.__h.forEach(p),n.__h=n.__h.filter((function(n){return!n.__||m(n)}))}catch(e){t.some((function(n){n.__h&&(n.__h=[])})),t=[],I.options.__e(e,n.__v)}})),E&&E(n,t)},I.options.unmount=function(n){T&&T(n);var t,e=n.__c;e&&e.__H&&(e.__H.__.forEach((function(n){try{p(n)}catch(n){t=n}})),e.__H=void 0,t&&I.options.__e(t,e.__v))};var P="function"==typeof requestAnimationFrame},"w+Gk":function(n,t,e){"use strict";(function(n){function r(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;c=!1}else for(;!(c=(r=i.call(e)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(n){l=!0,o=n}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var i=e("uOFG"),a=e("glPK"),u=e("Zp5c"),c=e("RaXK");t.a=function(){var t=Object(u.a)(),e=r(Object(i.k)(null),2)[1];return Object(i.d)((function(){window&&navigator&&e(new a.a)}),[]),n("div",null,n(c.a,{websocket:t}),n("div",{id:"device-select-container",style:"display: block;"},n("p",null,"press shift+space to toggle controls"),n("label",{for:"device-select"},"Select MIDI Device:"),n("select",{id:"device-select"})))}}).call(this,e("NMMh").h)}}]);
//# sourceMappingURL=route-midi.chunk.cdae0.js.map