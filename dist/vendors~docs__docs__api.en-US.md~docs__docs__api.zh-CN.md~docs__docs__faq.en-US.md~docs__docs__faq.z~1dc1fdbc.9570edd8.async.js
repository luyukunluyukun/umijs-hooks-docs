(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{"2N97":function(e,t,r){"use strict";function n(){const e=i(r("q1tI"));return n=function(){return e},e}function o(){const e=r("ArA+");return o=function(){return e},e}function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function a(e,t){return p(e)||s(e,t)||l(e,t)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){if(e){if("string"===typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0)if(r.push(i.value),t&&r.length===t)break}catch(c){o=!0,u=c}finally{try{n||null==a["return"]||a["return"]()}finally{if(o)throw u}}return r}}function p(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const d="data-prefers-color",y="dumi:prefers-color";let m;class b{constructor(){this.color="light",this.callbacks=[],("function"!==typeof o().isBrowser||(0,o().isBrowser)())&&(this.color=document.documentElement.getAttribute(d),["light","dark"].forEach((e=>{const t=this.getColorMedia(e),r=t=>{t.matches&&"auto"===this.color&&(document.documentElement.setAttribute(d,e),this.applyCallbacks())};t.addEventListener?t.addEventListener("change",r):t.addListener&&t.addListener(r)})))}getColorMedia(e){return window.matchMedia(`(prefers-color-scheme: ${e})`)}isColorMode(e){return this.getColorMedia(e).matches}applyCallbacks(){this.callbacks.forEach((e=>e(this.color)))}listen(e){this.callbacks.push(e)}unlisten(e){this.callbacks.splice(this.callbacks.indexOf(e),1)}set(e){return this.color=e,localStorage.setItem(y,e),this.applyCallbacks(),"auto"===e?document.documentElement.setAttribute(d,this.isColorMode("dark")?"dark":"light"):document.documentElement.setAttribute(d,e),e}}var h=()=>{m||(m=new b);const e=(0,n().useState)(m.color),t=a(e,2),r=t[0],o=t[1],u=(0,n().useCallback)((e=>{m.set(e)}),[]);return(0,n().useEffect)((()=>(m.listen(o),()=>m.unlisten(o))),[]),[r,u]};t.default=h},"3QDa":function(e,t,r){"use strict";function n(){const e=c(r("q1tI"));return n=function(){return e},e}function o(){const e=i(r("Zs1V"));return o=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(r("nLCz"));function i(e){return e&&e.__esModule?e:{default:e}}function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function l(e,t){return y(e)||d(e,t)||s(e,t)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0)if(r.push(i.value),t&&r.length===t)break}catch(c){o=!0,u=c}finally{try{n||null==a["return"]||a["return"]()}finally{if(o)throw u}}return r}}function y(e){if(Array.isArray(e))return e}function m(e,t,r){return Object.entries(o().default[e]).reduce(((e,[n,o])=>(e[n]=o.map((e=>{const n=Object.assign({},e);return Object.keys(e).forEach((e=>{if(/^description(\.|$)/.test(e)){const o=e.match(/^description\.?(.*)$/),u=l(o,2),i=u[1];i&&i!==t||!i&&!r?delete n[e]:n.description=n[e]}})),n})),e)),{})}var b=e=>{const t=(0,n().useContext)(u.default),r=t.locale,o=t.config.locales,i=!o.length||o[0].name===r,a=(0,n().useState)(m(e,r,i)),c=l(a,2),f=c[0],s=c[1];return(0,n().useEffect)((()=>{s(m(e,r,i))}),[e,r,i]),f};t.default=b},"6asN":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("LtsZ"),o=r("zqmC"),u=(0,o.LinkWrapper)(n.NavLink);t.default=u},"6xEa":function(e,t,r){var n,o=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",n={};function o(e,t){if(!n[e]){n[e]={};for(var r=0;r<e.length;r++)n[e][e.charAt(r)]=r}return n[e][t]}var u={compressToBase64:function(e){if(null==e)return"";var r=u._compress(e,6,(function(e){return t.charAt(e)}));switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:u._decompress(e.length,32,(function(r){return o(t,e.charAt(r))}))},compressToUTF16:function(t){return null==t?"":u._compress(t,15,(function(t){return e(t+32)}))+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:u._decompress(e.length,16384,(function(t){return e.charCodeAt(t)-32}))},compressToUint8Array:function(e){for(var t=u.compress(e),r=new Uint8Array(2*t.length),n=0,o=t.length;n<o;n++){var i=t.charCodeAt(n);r[2*n]=i>>>8,r[2*n+1]=i%256}return r},decompressFromUint8Array:function(t){if(null===t||void 0===t)return u.decompress(t);for(var r=new Array(t.length/2),n=0,o=r.length;n<o;n++)r[n]=256*t[2*n]+t[2*n+1];var i=[];return r.forEach((function(t){i.push(e(t))})),u.decompress(i.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":u._compress(e,6,(function(e){return r.charAt(e)}))},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),u._decompress(e.length,32,(function(t){return o(r,e.charAt(t))})))},compress:function(t){return u._compress(t,16,(function(t){return e(t)}))},_compress:function(e,t,r){if(null==e)return"";var n,o,u,i={},a={},c="",l="",f="",s=2,p=3,d=2,y=[],m=0,b=0;for(u=0;u<e.length;u+=1)if(c=e.charAt(u),Object.prototype.hasOwnProperty.call(i,c)||(i[c]=p++,a[c]=!0),l=f+c,Object.prototype.hasOwnProperty.call(i,l))f=l;else{if(Object.prototype.hasOwnProperty.call(a,f)){if(f.charCodeAt(0)<256){for(n=0;n<d;n++)m<<=1,b==t-1?(b=0,y.push(r(m)),m=0):b++;for(o=f.charCodeAt(0),n=0;n<8;n++)m=m<<1|1&o,b==t-1?(b=0,y.push(r(m)),m=0):b++,o>>=1}else{for(o=1,n=0;n<d;n++)m=m<<1|o,b==t-1?(b=0,y.push(r(m)),m=0):b++,o=0;for(o=f.charCodeAt(0),n=0;n<16;n++)m=m<<1|1&o,b==t-1?(b=0,y.push(r(m)),m=0):b++,o>>=1}s--,0==s&&(s=Math.pow(2,d),d++),delete a[f]}else for(o=i[f],n=0;n<d;n++)m=m<<1|1&o,b==t-1?(b=0,y.push(r(m)),m=0):b++,o>>=1;s--,0==s&&(s=Math.pow(2,d),d++),i[l]=p++,f=String(c)}if(""!==f){if(Object.prototype.hasOwnProperty.call(a,f)){if(f.charCodeAt(0)<256){for(n=0;n<d;n++)m<<=1,b==t-1?(b=0,y.push(r(m)),m=0):b++;for(o=f.charCodeAt(0),n=0;n<8;n++)m=m<<1|1&o,b==t-1?(b=0,y.push(r(m)),m=0):b++,o>>=1}else{for(o=1,n=0;n<d;n++)m=m<<1|o,b==t-1?(b=0,y.push(r(m)),m=0):b++,o=0;for(o=f.charCodeAt(0),n=0;n<16;n++)m=m<<1|1&o,b==t-1?(b=0,y.push(r(m)),m=0):b++,o>>=1}s--,0==s&&(s=Math.pow(2,d),d++),delete a[f]}else for(o=i[f],n=0;n<d;n++)m=m<<1|1&o,b==t-1?(b=0,y.push(r(m)),m=0):b++,o>>=1;s--,0==s&&(s=Math.pow(2,d),d++)}for(o=2,n=0;n<d;n++)m=m<<1|1&o,b==t-1?(b=0,y.push(r(m)),m=0):b++,o>>=1;while(1){if(m<<=1,b==t-1){y.push(r(m));break}b++}return y.join("")},decompress:function(e){return null==e?"":""==e?null:u._decompress(e.length,32768,(function(t){return e.charCodeAt(t)}))},_decompress:function(t,r,n){var o,u,i,a,c,l,f,s=[],p=4,d=4,y=3,m="",b=[],h={val:n(0),position:r,index:1};for(o=0;o<3;o+=1)s[o]=o;i=0,c=Math.pow(2,2),l=1;while(l!=c)a=h.val&h.position,h.position>>=1,0==h.position&&(h.position=r,h.val=n(h.index++)),i|=(a>0?1:0)*l,l<<=1;switch(i){case 0:i=0,c=Math.pow(2,8),l=1;while(l!=c)a=h.val&h.position,h.position>>=1,0==h.position&&(h.position=r,h.val=n(h.index++)),i|=(a>0?1:0)*l,l<<=1;f=e(i);break;case 1:i=0,c=Math.pow(2,16),l=1;while(l!=c)a=h.val&h.position,h.position>>=1,0==h.position&&(h.position=r,h.val=n(h.index++)),i|=(a>0?1:0)*l,l<<=1;f=e(i);break;case 2:return""}s[3]=f,u=f,b.push(f);while(1){if(h.index>t)return"";i=0,c=Math.pow(2,y),l=1;while(l!=c)a=h.val&h.position,h.position>>=1,0==h.position&&(h.position=r,h.val=n(h.index++)),i|=(a>0?1:0)*l,l<<=1;switch(f=i){case 0:i=0,c=Math.pow(2,8),l=1;while(l!=c)a=h.val&h.position,h.position>>=1,0==h.position&&(h.position=r,h.val=n(h.index++)),i|=(a>0?1:0)*l,l<<=1;s[d++]=e(i),f=d-1,p--;break;case 1:i=0,c=Math.pow(2,16),l=1;while(l!=c)a=h.val&h.position,h.position>>=1,0==h.position&&(h.position=r,h.val=n(h.index++)),i|=(a>0?1:0)*l,l<<=1;s[d++]=e(i),f=d-1,p--;break;case 2:return b.join("")}if(0==p&&(p=Math.pow(2,y),y++),s[f])m=s[f];else{if(f!==d)return null;m=u+u.charAt(0)}b.push(m),s[d++]=u+m.charAt(0),p--,u=m,0==p&&(p=Math.pow(2,y),y++)}}};return u}();n=function(){return o}.call(t,r,t,e),void 0===n||(e.exports=n)},"7sf/":function(e,t,r){"use strict";function n(){const e=a(r("q1tI"));return n=function(){return e},e}function o(){const e=u(r("6xEa"));return o=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function c(e,t){return d(e)||p(e,t)||f(e,t)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){if(e){if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0)if(r.push(i.value),t&&r.length===t)break}catch(c){o=!0,u=c}finally{try{n||null==a["return"]||a["return"]()}finally{if(o)throw u}}return r}}function d(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const y={"zh-CN":"https://www.typescriptlang.org/zh/play","en-US":"https://www.typescriptlang.org/play"};var m=(e,t)=>{const r=(...e)=>{const t=/^zh|cn$/.test(e[0])?y["zh-CN"]:y["en-US"];return`${t}?skipLibCheck=true&jsx=1#code/${o().default.compressToEncodedURIComponent(e[1])}`},u=(0,n().useState)(r(e,t)),i=c(u,2),a=i[0],l=i[1];return(0,n().useEffect)((()=>{l(r(e,t))}),[e,t]),a};t.default=m},"ArA+":function(e,t,r){"use strict";r.r(t);var n=r("LtsZ");r.d(t,"ApplyPluginsType",(function(){return n["ApplyPluginsType"]}));var o=r("55Ip");r.d(t,"Link",(function(){return o["a"]}));var u=r("Ty5D");r.d(t,"MemoryRouter",(function(){return u["a"]})),r.d(t,"NavLink",(function(){return o["b"]})),r.d(t,"Plugin",(function(){return n["Plugin"]})),r.d(t,"Prompt",(function(){return u["b"]})),r.d(t,"Redirect",(function(){return u["c"]})),r.d(t,"Route",(function(){return u["d"]})),r.d(t,"Router",(function(){return u["e"]})),r.d(t,"StaticRouter",(function(){return u["f"]})),r.d(t,"Switch",(function(){return u["g"]})),r.d(t,"__RouterContext",(function(){return u["h"]}));var i=r("YS25");r.d(t,"createBrowserHistory",(function(){return i["a"]})),r.d(t,"createHashHistory",(function(){return i["b"]})),r.d(t,"createMemoryHistory",(function(){return i["d"]})),r.d(t,"dynamic",(function(){return n["dynamic"]})),r.d(t,"isBrowser",(function(){return n["isBrowser"]})),r.d(t,"matchPath",(function(){return u["i"]})),r.d(t,"useHistory",(function(){return u["j"]})),r.d(t,"useLocation",(function(){return u["k"]})),r.d(t,"useParams",(function(){return u["l"]})),r.d(t,"useRouteMatch",(function(){return u["m"]})),r.d(t,"withRouter",(function(){return u["n"]}));var a=r("MZF8");r.d(t,"history",(function(){return a["a"]})),r.d(t,"plugin",(function(){return a["b"]}))},"U/TZ":function(e,t,r){"use strict";function n(){const e=u(r("q1tI"));return n=function(){return e},e}function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=n?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}function i(e,t){return s(e)||f(e,t)||c(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0)if(r.push(i.value),t&&r.length===t)break}catch(c){o=!0,u=c}finally{try{n||null==a["return"]||a["return"]()}finally{if(o)throw u}}return r}}function s(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var p=(e,t)=>{const r=(...e)=>{const t={};return Object.keys(e[1]).forEach((r=>{const n=(r.match(/^(.+)\.([^_]+)$/)||[]).slice(1),o=i(n,2),u=o[0],a=o[1];a&&a!==e[0]||(t[u||r]=e[1][r])})),t},o=(0,n().useState)(r(e,t)),u=i(o,2),a=u[0],c=u[1];return(0,n().useEffect)((()=>{c(r(e,t))}),[e,t]),a};t.default=p},WWur:function(e,t,r){"use strict";const n=(e,{target:t=document.body}={})=>{const r=document.createElement("textarea"),n=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection();let u=!1;o.rangeCount>0&&(u=o.getRangeAt(0)),t.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch(a){}return r.remove(),u&&(o.removeAllRanges(),o.addRange(u)),n&&n.focus(),i};e.exports=n,e.exports.default=n},bYHP:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r("q1tI")),o=r("LtsZ");function u(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e){return e.offsetTop+(e.offsetParent?a(e.offsetParent):0)}var c=function e(t){var r,u=(null===(r=t.to.match(/(#.+)$/))||void 0===r?void 0:r[1])||"";return n.default.createElement(o.NavLink,i({},t,{onClick:function(){return e.scrollToAnchor(u.substring(1))},isActive:function(e,t){return u&&decodeURIComponent(t.hash)===u}}))};c.scrollToAnchor=function(e){window.requestAnimationFrame((function(){var t=document.getElementById(decodeURIComponent(e));t&&window.scrollTo(0,a(t)-100)}))};var l=c;t.default=l},beRK:function(e,t,r){"use strict";function n(){const e=u(r("q1tI"));return n=function(){return e},e}function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=n?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}function i(e,t){return s(e)||f(e,t)||c(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0)if(r.push(i.value),t&&r.length===t)break}catch(c){o=!0,u=c}finally{try{n||null==a["return"]||a["return"]()}finally{if(o)throw u}}return r}}function s(e){if(Array.isArray(e))return e}function p(){return"BASEMENT"===Object({NODE_ENV:"production"}).PLATFORM_TYPE}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.getDemoUrl=t.getDemoRouteName=void 0;const d=()=>p()?"_demos":"~demos";t.getDemoRouteName=d;const y=e=>{var t;const r=window,n=r.location,o=n.href,u=n.origin,a=o.split(/#\//),c=i(a,2),l=c[0],f=c[1],s="string"===typeof f;return[s?`${l}#`:u,`${(null===(t=window)||void 0===t?void 0:t.routerBase)||""}/`.replace(/\/\/$/,"/"),d(),"/",e,p()?"/index.html":""].join("")};t.getDemoUrl=y;var m=e=>{const t=(0,n().useState)(""),r=i(t,2),o=r[0],u=r[1];return(0,n().useEffect)((()=>{u(y(e))}),[e]),o};t.default=m},dEAq:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"context",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"NavLink",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"AnchorLink",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"useSearch",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"useCopy",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"useRiddle",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"useMotions",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"useCodeSandbox",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"useLocaleProps",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"useDemoUrl",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"useApiData",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"useTSPlaygroundUrl",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"usePrefersColor",{enumerable:!0,get:function(){return b.default}});var n=h(r("nLCz")),o=h(r("zqmC")),u=h(r("6asN")),i=h(r("bYHP")),a=h(r("t/kZ")),c=h(r("dfPH")),l=h(r("o0kM")),f=h(r("zYLY")),s=h(r("r1Q5")),p=h(r("U/TZ")),d=h(r("beRK")),y=h(r("3QDa")),m=h(r("7sf/")),b=h(r("2N97"));function h(e){return e&&e.__esModule?e:{default:e}}},dfPH:function(e,t,r){"use strict";function n(){const e=a(r("q1tI"));return n=function(){return e},e}function o(){const e=u(r("WWur"));return o=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function c(e,t){return d(e)||p(e,t)||f(e,t)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){if(e){if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0)if(r.push(i.value),t&&r.length===t)break}catch(c){o=!0,u=c}finally{try{n||null==a["return"]||a["return"]()}finally{if(o)throw u}}return r}}function d(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var y=()=>{const e=(0,n().useState)(),t=c(e,2),r=t[0],u=t[1],i=(0,n().useState)("ready"),a=c(i,2),l=a[0],f=a[1],s=(0,n().useCallback)((e=>{(0,o().default)(e),f("copied"),clearTimeout(r),u(setTimeout((()=>{f("ready")}),2e3))}),[]);return[s,l]};t.default=y},nLCz:function(e,t,r){"use strict";function n(){const e=o(r("q1tI"));return n=function(){return e},e}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n().default.createContext({config:{mode:"doc",title:"",navs:{},menus:{},locales:[],repository:{branch:"master"},theme:{}},meta:{title:""},menu:[],nav:[],base:"",routes:[]});t.default=u},o0kM:function(e,t,r){"use strict";function n(){const e=u(r("q1tI"));return n=function(){return e},e}function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=n?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}function i(e,t){return s(e)||f(e,t)||c(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0)if(r.push(i.value),t&&r.length===t)break}catch(c){o=!0,u=c}finally{try{n||null==a["return"]||a["return"]()}finally{if(o)throw u}}return r}}function s(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const p="https://riddle.alibaba-inc.com/riddles/define";let d;const y=()=>{const e=(0,n().useState)(Boolean(d)),t=i(e,2),r=t[0],o=t[1];return(0,n().useEffect)((()=>{if(void 0===d){const e=document.createElement("img");setTimeout((()=>{e.src="",e.remove()}),200),e.onload=()=>{d=!0,o(!0),e.remove()},e.src="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png"}}),[]),r};function m(e){var t;const r=e.dependencies;let n=e.sources._.tsx||e.sources._.jsx;return n=n.replace(/^/,`import ReactDOM from 'react-dom@${(null===(t=r.react)||void 0===t?void 0:t.version)||"latest"}';\n`).replace("export default","const DumiDemo =").concat("\nReactDOM.render(<DumiDemo />, mountNode);"),n=n.replace(/(from ')((?:@[^/'"]+)?[^/'"]+)/g,((e,t,n)=>{let o=`${t}${n}`;return r[n]&&(o+=`@${r[n].version}`),o})),n}var b=e=>{const t=(0,n().useState)(),r=i(t,2),o=r[0],u=r[1],a=y();return(0,n().useEffect)((()=>{if(e&&a&&1===Object.keys(e.sources).length){const t=document.createElement("form"),r=document.createElement("input");return t.method="POST",t.target="_blank",t.style.display="none",t.action=p,t.appendChild(r),t.setAttribute("data-demo",e.title||""),r.name="data",r.value=JSON.stringify({title:e.titlle,js:m(e),css:Object.entries(e.dependencies).filter((([,e])=>e.css)).map((([e,{version:t,css:r}])=>`@import '~${r.replace(new RegExp(`^(${e})`),`$1@${t}`)}';`)).join("\n")}),document.body.appendChild(t),u((()=>()=>t.submit())),()=>t.remove()}}),[e,a]),o};t.default=b},r1Q5:function(e,t,r){"use strict";function n(){const e=a(r("q1tI"));return n=function(){return e},e}function o(){const e=u(r("6xEa"));return o=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function c(e,t){return d(e)||p(e,t)||f(e,t)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){if(e){if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0)if(r.push(i.value),t&&r.length===t)break}catch(c){o=!0,u=c}finally{try{n||null==a["return"]||a["return"]()}finally{if(o)throw u}}return r}}function d(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const y="https://codesandbox.io/api/v1/sandboxes/define";function m(e){return o().default.compressToBase64(JSON.stringify(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function b(e){const t=document.createElement("span");t.innerHTML=e;const r=t.textContent;return t.remove(),r}function h(e){const t=Boolean(e.sources._.tsx),r=t?".tsx":".jsx",n={},o={},u=Object.values(e.dependencies).filter((e=>e.css)),i=`App${r}`,a=`index${r}`;return Object.entries(e.dependencies).forEach((([e,{version:t}])=>{o[e]=t})),o["react-dom"]||(o["react-dom"]=o.react||"latest"),n["sandbox.config.json"]={content:JSON.stringify({template:t?"create-react-app-typescript":"create-react-app"},null,2)},n["package.json"]={content:JSON.stringify({name:e.title,description:b(e.description)||"An auto-generated demo by dumi",main:a,dependencies:o,devDependencies:t?{typescript:"^3"}:{}},null,2)},n["index.html"]={content:'<div style="margin: 16px;" id="root"></div>'},n[a]={content:`/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n${u.map((({css:e})=>`import '${e}';`)).join("\n")}\nimport App from './App';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);`},Object.entries(e.sources).forEach((([e,{tsx:t,jsx:r,content:o}])=>{n["_"===e?i:e]={content:t||r||o}})),m({files:n})}var v=e=>{const t=(0,n().useState)(),r=c(t,2),o=r[0],u=r[1];return(0,n().useEffect)((()=>{if(e){const t=document.createElement("form"),r=document.createElement("input"),n=h(e);return t.method="POST",t.target="_blank",t.style.display="none",t.action=y,t.appendChild(r),t.setAttribute("data-demo",e.title||""),r.name="parameters",r.value=n,document.body.appendChild(t),u((()=>()=>t.submit())),()=>t.remove()}}),[e]),o};t.default=v},"t/kZ":function(e,t,r){"use strict";function n(){const e=i(r("q1tI"));return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r("dEAq");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){return m(e)||y(e,t)||p(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){if(e){if("string"===typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0)if(r.push(i.value),t&&r.length===t)break}catch(c){o=!0,u=c}finally{try{n||null==a["return"]||a["return"]()}finally{if(o)throw u}}return r}}function m(e){if(Array.isArray(e))return e}const b=e=>{const t=(0,n().useContext)(o.context),r=t.locale,u=t.routes,i=t.config.locales,a=(0,n().useState)([]),c=f(a,2),l=c[0],s=c[1],p=(0,n().useState)([]),d=f(p,2),y=d[0],m=d[1];return(0,n().useEffect)((()=>{s(u.filter((({title:e,meta:t})=>{const n=(null===t||void 0===t?void 0:t.locale)===r,o=(null===t||void 0===t?void 0:t.locale)===i[0].name||!(null===t||void 0===t?void 0:t.locale)&&(!i.length||r===i[0].name);return e&&(o||n)})).reduce(((e,t)=>{var r,n;const o={title:t.title,path:t.path};return(null===(r=t.meta)||void 0===r?void 0:r.group)&&(o.parent=t.meta.group),e.push(o),e.push(...((null===(n=t.meta)||void 0===n?void 0:n.slugs)||[]).filter((({value:e})=>e!==t.title)).map((e=>({title:e.value,path:`${t.path}#${e.heading}`,parent:o})))),e}),[]))}),[u.length,r]),(0,n().useEffect)((()=>{const t=null===e||void 0===e?void 0:e.trim().toUpperCase();if(t){const e=[];for(let r=0;r<l.length&&e.length<6;r+=1)l[r].title.toUpperCase().indexOf(t)>-1&&e.push(l[r]);m(e)}else m([])}),[e,l.length]),y},h=()=>{const e=(0,n().useContext)(o.context),t=e.config.algolia,r=(0,n().useCallback)((e=>{window.docsearch(c({inputSelector:e},t))}),[t]);return r};var v=e=>{const t=(0,n().useContext)(o.context),r=t.config,u=b(e),i=h();return r.algolia?i:u};t.default=v},zYLY:function(e,t,r){"use strict";function n(){const e=u(r("q1tI"));return n=function(){return e},e}function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=n?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}function i(e,t){return s(e)||f(e,t)||c(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0)if(r.push(i.value),t&&r.length===t)break}catch(c){o=!0,u=c}finally{try{n||null==a["return"]||a["return"]()}finally{if(o)throw u}}return r}}function s(e){if(Array.isArray(e))return e}function p(e,t,r,n=0){var o;if(n<t.length){const u=t[n],a=()=>p(e,t,r,n+1),c=u.match(/^([^:]+):?(.*)$/)||[],l=i(c,3),f=l[1],s=l[2];switch(f){case"autoplay":a();break;case"click":const t=s.match(/^(global\()?(.+?)\)?$/)||[],r=i(t,3),n=r[1],c=r[2],l=n?document:e;null===(o=l.querySelector(c))||void 0===o||o.click(),a();break;case"timeout":setTimeout(a,Number(s));break;case"capture":window.postMessage({type:"dumi:capture-element",value:s},"*"),a();break;default:console.warn(`[dumi: motion] unknown motion '${u}', skip.`),a()}}else r()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=(e,t)=>{const r=(0,n().useState)(!1),o=i(r,2),u=o[0],a=o[1],c=(0,n().useCallback)((()=>{u||(p(t,e,(()=>{a(!1)})),a(!0))}),[e,t,u]);return(0,n().useEffect)((()=>{"autoplay"===e[0]&&t&&c()}),[e,t]),[c,u]};t.default=d},zqmC:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.LinkWrapper=void 0;var n=u(r("q1tI")),o=r("LtsZ");function u(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=c(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function c(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var l=function(e){return function(t){var r=t.to,o=a(t,["to"]),u=/^(\w+:)?\/\//.test(r)||!r,c=n.default.isValidElement(o.children);return n.default.createElement(e,i({to:r||"",component:u?function(){return n.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:r},o.children,r&&!c&&n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},n.default.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),n.default.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))}:void 0},o,u?{}:{onClick:function(){var e;window.scrollTo({top:0});for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];null===(e=o.onClick)||void 0===e||e.apply(this,r)}}))}};t.LinkWrapper=l;var f=l(o.Link);t.default=f}}]);