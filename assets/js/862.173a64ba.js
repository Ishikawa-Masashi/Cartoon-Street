/*! For license information please see 862.173a64ba.js.LICENSE.txt */
(self.webpackChunkmebiusbox_docusaurus=self.webpackChunkmebiusbox_docusaurus||[]).push([[862],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>f,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,f=u(e,["components","mdxType","originalType","parentName"]),s=l(n),d=o,m=s["".concat(a,".").concat(d)]||s[d]||p[d]||i;return n?r.createElement(m,c(c({ref:t},f),{},{components:n})):r.createElement(m,c({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u[s]="string"==typeof e?e:o,c[1]=u;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29512:(e,t,n)=>{"use strict";n.d(t,{iD:()=>c});var r=n(67294),o="https://platform.twitter.com/widgets.js",i="createTweet",c=function(e){var t=r.useRef(null),c=r.useState(!0),u=c[0],a=c[1];return r.useEffect((function(){var r=!0;return n(5277)(o,"twitter-embed",(function(){if(window.twttr){if(r){if(!window.twttr.widgets[i])return void console.error("Method "+i+" is not present anymore in twttr.widget api");window.twttr.widgets[i](e.tweetId,null==t?void 0:t.current,e.options).then((function(t){a(!1),e.onLoad&&e.onLoad(t)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){r=!1}}),[]),r.createElement(r.Fragment,null,u&&r.createElement(r.Fragment,null,e.placeholder),r.createElement("div",{ref:t}))}},5277:(e,t,n)=>{var r,o,i;i=function(){var e,t,n=document,r=n.getElementsByTagName("head")[0],o="push",i="readyState",c="onreadystatechange",u={},a={},l={},f={};function s(e,t){for(var n=0,r=e.length;n<r;++n)if(!t(e[n]))return!1;return 1}function p(e,t){s(e,(function(e){return t(e),1}))}function d(t,n,r){t=t[o]?t:[t];var i=n&&n.call,c=i?n:r,y=i?t.join(""):n,v=t.length;function w(e){return e.call?e():u[e]}function g(){if(!--v)for(var e in u[y]=1,c&&c(),l)s(e.split("|"),w)&&!p(l[e],w)&&(l[e]=[])}return setTimeout((function(){p(t,(function t(n,r){return null===n?g():(r||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),f[n]?(y&&(a[y]=1),2==f[n]?g():setTimeout((function(){t(n,!0)}),0)):(f[n]=1,y&&(a[y]=1),void m(n,g)))}))}),0),d}function m(e,o){var u,a=n.createElement("script");a.onload=a.onerror=a[c]=function(){a[i]&&!/^c|loade/.test(a[i])||u||(a.onload=a[c]=null,u=1,f[e]=2,o())},a.async=1,a.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,r.insertBefore(a,r.lastChild)}return d.get=m,d.order=function(e,t,n){!function r(o){o=e.shift(),e.length?d(o,r):d(o,t,n)}()},d.path=function(t){e=t},d.urlArgs=function(e){t=e},d.ready=function(e,t,n){e=e[o]?e:[e];var r,i=[];return!p(e,(function(e){u[e]||i[o](e)}))&&s(e,(function(e){return u[e]}))?t():(r=e.join("|"),l[r]=l[r]||[],l[r][o](t),n&&n(i)),d},d.done=function(e){d([null],e)},d},e.exports?e.exports=i():void 0===(o="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o)}}]);