(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"6MY0":function(n,e,t){"use strict";(function(n){var o=t("RaXK"),r=t("Zp5c");e.a=()=>{const e=Object(r.a)();return n(o.a,{websocket:e})}}).call(this,t("NMMh").h)},FA6U:function(n,e){"use strict";e.a={home:"home__uRcqa",resource:"resource__reFLt"}},RaXK:function(n,e,t){"use strict";(function(n,o){var r=t("uOFG");e.a=({websocket:e})=>{const{ws:t,wsUrl:a,setWsUrl:i,history:c,myChannels:l,availableChannels:u,id:s,wsState:_,joinChannel:f,getChannels:h,heartbeat:d,broadcastMessage:p,sendMessageToTargetClient:b,sendMessageToTargetChannel:m,sendMessageToJoinedChannels:v}=e,[g,O]=Object(r.k)(""),[y,w]=Object(r.k)(""),[j,N]=Object(r.k)(""),S=Object(r.h)((()=>{try{JSON.parse(g)}catch(n){return!1}return!0}),[g]),k=Object(r.a)((n=>{n.preventDefault(),i(n.target.wsUrl.value)}),[i]);return n("div",{className:"flex flex-col gap-4"},n("div",{className:"flex gap-8"},t&&a&&n("div",null,_," on: ",a),n("form",{onSubmit:k},n("input",{type:"text",name:"wsUrl",placeholder:a}),n("button",{type:"submit"},"go"))),t&&n(o,null,n("div",null,s&&n("div",null,"id: ",s),d&&n("div",null,"heartbeat: ",JSON.stringify(d))),n("div",null,n("div",{className:"flex flex-row gap-8"},n("button",{onClick:h},"get channels"),n("form",{onSubmit:f},n("input",{type:"text",name:"channel"}),n("button",{type:"submit",className:"ml-2"},"join channel"))),n("ul",null,"my channels:",l.map((({channel:e,members:t})=>n("li",{key:e,className:"ml-2"},e," | ",t.length," members: ",t.join(", "))))),n("ul",null,"all channels:",u.map((({channel:e,members:t})=>n("li",{key:e,className:"ml-2"},e," ",t.length?`| ${t.length} members: ${t.join(", ")}`:"(no members)"))))),n("div",null,n("div",{className:"flex flex-col gap-1"},n("div",null,n("label",{htmlFor:"message"},"message"),n("textarea",{cols:100,rows:1,name:"message",placeholder:'{"hello": 1}',value:g,onInput:n=>O(n.target.value)})),n("div",null,n("label",{htmlFor:"targetChannel"},"target channel"),n("input",{name:"targetChannel",type:"text",value:y,onInput:n=>w(n.target.value)})),n("div",null,n("label",{htmlFor:"targetChannel"},"target client"),n("input",{name:"targetId",type:"text",value:j,onInput:n=>N(n.target.value)})),n("div",null,n("button",{disabled:!S,onClick:()=>b(g,j)},"send to another client"),n("button",{disabled:!S,onClick:()=>m(g,y)},"send to channel"),n("button",{disabled:!S,onClick:()=>v(g)},"send to joined channel"),n("button",{disabled:!S,onClick:()=>p(g)},"broadcast"))),!S&&g.length?n("div",null,"Invalid JSON"):n(o,null)),n("div",null,"incoming messages:"),n("div",{style:{overflow:"scroll",height:"200px"}},c.map((e=>n("div",{key:e},JSON.stringify(e)))))))}}).call(this,t("NMMh").h,t("NMMh").Fragment)},Zp5c:function(n,e,t){"use strict";function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e,t){return(e=function(n){var e=function(n,e){if("object"!=typeof n||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"==typeof e?e:String(e)}(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var i=t("uOFG");e.a=()=>{const[n,e]=Object(i.k)(null),[t,o]=Object(i.k)(""),[a,c]=Object(i.k)([]),[l,u]=Object(i.k)(null),[s,_]=Object(i.k)([]),[f,h]=Object(i.k)([]),[d,p]=Object(i.k)(null),[b,m]=Object(i.k)(""),v=Object(i.a)((async n=>{const e=await JSON.parse(n.data);switch(e.type){case"id":p(e.id);break;case"heartbeat":u(e.heartbeat);break;case"myChannels":_(e.channels);break;case"availableChannels":h(e.channels);break;default:c((n=>[e,...n]))}m(e)}),[]);Object(i.d)((()=>{if(!window)return;const n=window.location.protocol.includes("https")?"wss":"ws",e=window.location.protocol.includes("https")?"":":3000";let t=`${n}://${location.hostname}${e}?channels=welcome`;o(t)}),[]),Object(i.d)((()=>{if(!t.length||"undefined"==typeof window)return;console.log("attempting to connect to",t),n&&n.close();const o=new WebSocket(t);o.onmessage=v,o.onopen=()=>{console.log("hey were open")},e(o)}),[v,t]);const g=Object(i.a)((()=>{null==n||n.send(JSON.stringify({type:"myChannels"})),null==n||n.send(JSON.stringify({type:"availableChannels"}))}),[n]),O=Object(i.h)((()=>{if("undefined"!=typeof window)switch(null==n?void 0:n.readyState){case WebSocket.CONNECTING:return"connecting";case WebSocket.OPEN:return"open";case WebSocket.CLOSING:return"closing";case WebSocket.CLOSED:return"closed";default:return"uninitialized"}}),[null==n?void 0:n.readyState]);Object(i.d)((()=>{"open"===O&&g()}),[g,n,O]);const y=Object(i.a)((e=>{e.preventDefault(),null==n||n.send(JSON.stringify({type:"joinChannel",channel:e.target.channel.value}))}),[n]),w=Object(i.a)((e=>"open"===O&&(null==n?void 0:n.send(JSON.stringify({type:"broadcast",message:r(r({},JSON.parse(e)),{},{timestamp:Date.now()})})))),[n,O]),j=Object(i.a)(((e,t)=>{"open"===O&&(null==n||n.send(JSON.stringify(r(r({},JSON.parse(e)),{},{timestamp:Date.now(),channel:t}))))}),[n,O]),N=Object(i.a)(((e,t)=>{console.log("sending to target id",e,t),"open"===O&&(null==n||n.send(JSON.stringify(r(r({},JSON.parse(e)),{},{timestamp:Date.now(),targetId:t}))))}),[n,O]),S=Object(i.a)((e=>{"open"===O&&(null==n||n.send(JSON.stringify(r(r({},JSON.parse(e)),{},{timestamp:Date.now()}))))}),[n,O]);return{ws:n,wsUrl:t,setWsUrl:o,history:a,myChannels:s,availableChannels:f,id:d,incomingMessage:b,wsState:O,joinChannel:y,getChannels:g,heartbeat:l,broadcastMessage:w,sendMessageToTargetClient:N,sendMessageToTargetChannel:j,sendMessageToJoinedChannels:S}}},a94D:function(n,e,t){"use strict";t.r(e),function(n){var o=t("FA6U"),r=t("6MY0");e.default=()=>n("div",{class:o.a.home},n(r.a,null))}.call(this,t("NMMh").h)},uOFG:function(n,e,t){"use strict";function o(n,e){S.options.__h&&S.options.__h(w,n,k||e),k=0;var t=w.__H||(w.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({__V:H}),t.__[n]}function r(n){return k=1,a(O,n)}function a(n,e,t){var r=o(y++,2);if(r.t=n,!r.__c&&(r.__=[t?t(e):O(void 0,e),function(n){var e=r.__N?r.__N[0]:r.__[0],t=r.t(e,n);e!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=w,!w.u)){var a=function(n,e,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(n){return n.__c}));if(o.every((function(n){return!n.__N})))return!i||i.call(this,n,e,t);var a=!1;return o.forEach((function(n){if(n.__N){var e=n.__[0];n.__=n.__N,n.__N=void 0,e!==n.__[0]&&(a=!0)}})),!(!a&&r.__c.props===n)&&(!i||i.call(this,n,e,t))};w.u=!0;var i=w.shouldComponentUpdate,c=w.componentWillUpdate;w.componentWillUpdate=function(n,e,t){if(this.__e){var o=i;i=void 0,a(n,e,t),i=o}c&&c.call(this,n,e,t)},w.shouldComponentUpdate=a}return r.__N||r.__}function i(n,e){var t=o(y++,3);!S.options.__s&&g(t.__H,e)&&(t.__=n,t.i=e,w.__H.__h.push(t))}function c(n,e){var t=o(y++,4);!S.options.__s&&g(t.__H,e)&&(t.__=n,t.i=e,w.__h.push(t))}function l(n){return k=5,s((function(){return{current:n}}),[])}function u(n,e,t){k=6,c((function(){return"function"==typeof n?(n(e()),function(){return n(null)}):n?(n.current=e(),function(){return n.current=null}):void 0}),null==t?t:t.concat(n))}function s(n,e){var t=o(y++,7);return g(t.__H,e)?(t.__V=n(),t.i=e,t.__h=n,t.__V):t.__}function _(n,e){return k=8,s((function(){return n}),e)}function f(n){var e=w.context[n.__c],t=o(y++,9);return t.c=n,e?(null==t.__&&(t.__=!0,e.sub(w)),e.props.value):n.__}function h(n,e){S.options.useDebugValue&&S.options.useDebugValue(e?e(n):n)}function d(){var n=o(y++,11);if(!n.__){for(var e=w.__v;null!==e&&!e.__m&&null!==e.__;)e=e.__;var t=e.__m||(e.__m=[0,0]);n.__="P"+t[0]+"-"+t[1]++}return n.__}function p(){for(var n;n=C.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(m),n.__H.__h.forEach(v),n.__H.__h=[]}catch(e){n.__H.__h=[],S.options.__e(e,n.__v)}}function b(n){var e,t=function(){clearTimeout(o),x&&cancelAnimationFrame(e),setTimeout(n)},o=setTimeout(t,100);x&&(e=requestAnimationFrame(t))}function m(n){var e=w,t=n.__c;"function"==typeof t&&(n.__c=void 0,t()),w=e}function v(n){var e=w;n.__c=n.__(),w=e}function g(n,e){return!n||n.length!==e.length||e.some((function(e,t){return e!==n[t]}))}function O(n,e){return"function"==typeof e?e(n):e}t.d(e,"a",(function(){return _})),t.d(e,"b",(function(){return f})),t.d(e,"c",(function(){return h})),t.d(e,"d",(function(){return i})),t.d(e,"e",(function(){return d})),t.d(e,"f",(function(){return u})),t.d(e,"g",(function(){return c})),t.d(e,"h",(function(){return s})),t.d(e,"i",(function(){return a})),t.d(e,"j",(function(){return l})),t.d(e,"k",(function(){return r}));var y,w,j,N,S=t("NMMh"),k=0,C=[],H=[],M=S.options.__b,J=S.options.__r,E=S.options.diffed,F=S.options.__c,T=S.options.unmount;S.options.__b=function(n){w=null,M&&M(n)},S.options.__r=function(n){J&&J(n),y=0;var e=(w=n.__c).__H;e&&(j===w?(e.__h=[],w.__h=[],e.__.forEach((function(n){n.__N&&(n.__=n.__N),n.__V=H,n.__N=n.i=void 0}))):(e.__h.forEach(m),e.__h.forEach(v),e.__h=[],y=0)),j=w},S.options.diffed=function(n){E&&E(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(1!==C.push(e)&&N===S.options.requestAnimationFrame||((N=S.options.requestAnimationFrame)||b)(p)),e.__H.__.forEach((function(n){n.i&&(n.__H=n.i),n.__V!==H&&(n.__=n.__V),n.i=void 0,n.__V=H}))),j=w=null},S.options.__c=function(n,e){e.some((function(n){try{n.__h.forEach(m),n.__h=n.__h.filter((function(n){return!n.__||v(n)}))}catch(t){e.some((function(n){n.__h&&(n.__h=[])})),e=[],S.options.__e(t,n.__v)}})),F&&F(n,e)},S.options.unmount=function(n){T&&T(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach((function(n){try{m(n)}catch(n){e=n}})),t.__H=void 0,e&&S.options.__e(e,t.__v))};var x="function"==typeof requestAnimationFrame}}]);
//# sourceMappingURL=route-home.chunk.dd4a1.esm.js.map