(window.webpackJsonp=window.webpackJsonp||[]).push([[1218],{3215:function(e,t,n){"use strict";n.r(t);var r=n(905),o=n(458),i=n(0);i.default.use(o.a),i.default.use(r.a);var s={},l=n(19),a=Object(l.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"300px"}},[n("my-dv-page",{attrs:{target:"parent",fit:""}},[n("my-dv-title",{attrs:{icon:"el-icon-s-platform",position:!1}},[e._v("标题文本")]),e._v(" "),n("my-dv-title",{attrs:{icon:"el-icon-s-platform",level:2,position:!1}},[e._v("标题文本")]),e._v(" "),n("my-dv-title",{attrs:{icon:"el-icon-s-platform",level:3,position:!1}},[e._v("标题文本")]),e._v(" "),n("my-dv-title",{attrs:{icon:"el-icon-s-platform",level:4,position:!1}},[e._v("标题文本")]),e._v(" "),n("my-dv-title",{attrs:{icon:"el-icon-s-platform",level:5,position:!1}},[e._v("标题文本")]),e._v(" "),n("my-dv-title",{attrs:{icon:"el-icon-s-platform",level:6,position:!1}},[e._v("标题文本")])],1)],1)}),[],!1,null,null,null);t.default=a.exports},366:function(e,t,n){"use strict";t.__esModule=!0,t.removeResizeListener=t.addResizeListener=void 0;var r,o=n(387),i=(r=o)&&r.__esModule?r:{default:r};var s="undefined"==typeof window,l=function(e){var t=e,n=Array.isArray(t),r=0;for(t=n?t:t[Symbol.iterator]();;){var o;if(n){if(r>=t.length)break;o=t[r++]}else{if((r=t.next()).done)break;o=r.value}var i=o.target.__resizeListeners__||[];i.length&&i.forEach((function(e){e()}))}};t.addResizeListener=function(e,t){s||(e.__resizeListeners__||(e.__resizeListeners__=[],e.__ro__=new i.default(l),e.__ro__.observe(e)),e.__resizeListeners__.push(t))},t.removeResizeListener=function(e,t){e&&e.__resizeListeners__&&(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||e.__ro__.disconnect())}},367:function(e,t,n){"use strict";t.__esModule=!0,t.isInContainer=t.getScrollContainer=t.isScroll=t.getStyle=t.once=t.off=t.on=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.hasClass=v,t.addClass=function(e,t){if(!e)return;for(var n=e.className,r=(t||"").split(" "),o=0,i=r.length;o<i;o++){var s=r[o];s&&(e.classList?e.classList.add(s):v(e,s)||(n+=" "+s))}e.classList||(e.className=n)},t.removeClass=function(e,t){if(!e||!t)return;for(var n=t.split(" "),r=" "+e.className+" ",o=0,i=n.length;o<i;o++){var s=n[o];s&&(e.classList?e.classList.remove(s):v(e,s)&&(r=r.replace(" "+s+" "," ")))}e.classList||(e.className=(r||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},t.setStyle=function e(t,n,o){if(!t||!n)return;if("object"===(void 0===n?"undefined":r(n)))for(var i in n)n.hasOwnProperty(i)&&e(t,i,n[i]);else"opacity"===(n=u(n))&&c<9?t.style.filter=isNaN(o)?"":"alpha(opacity="+100*o+")":t.style[n]=o};var o,i=n(0);var s=((o=i)&&o.__esModule?o:{default:o}).default.prototype.$isServer,l=/([\:\-\_]+(.))/g,a=/^moz([A-Z])/,c=s?0:Number(document.documentMode),u=function(e){return e.replace(l,(function(e,t,n,r){return r?n.toUpperCase():n})).replace(a,"Moz$1")},f=t.on=!s&&document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)},d=t.off=!s&&document.removeEventListener?function(e,t,n){e&&t&&e.removeEventListener(t,n,!1)}:function(e,t,n){e&&t&&e.detachEvent("on"+t,n)};t.once=function(e,t,n){f(e,t,(function r(){n&&n.apply(this,arguments),d(e,t,r)}))};function v(e,t){if(!e||!t)return!1;if(-1!==t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}var _=t.getStyle=c<9?function(e,t){if(!s){if(!e||!t)return null;"float"===(t=u(t))&&(t="styleFloat");try{switch(t){case"opacity":try{return e.filters.item("alpha").opacity/100}catch(e){return 1}default:return e.style[t]||e.currentStyle?e.currentStyle[t]:null}}catch(n){return e.style[t]}}}:function(e,t){if(!s){if(!e||!t)return null;"float"===(t=u(t))&&(t="cssFloat");try{var n=document.defaultView.getComputedStyle(e,"");return e.style[t]||n?n[t]:null}catch(n){return e.style[t]}}};var p=t.isScroll=function(e,t){if(!s)return _(e,null!==t||void 0!==t?t?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};t.getScrollContainer=function(e,t){if(!s){for(var n=e;n;){if([window,document,document.documentElement].includes(n))return window;if(p(n,t))return n;n=n.parentNode}return n}},t.isInContainer=function(e,t){if(s||!e||!t)return!1;var n=e.getBoundingClientRect(),r=void 0;return r=[window,document,document.documentElement,null,void 0].includes(t)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:t.getBoundingClientRect(),n.top<r.bottom&&n.bottom>r.top&&n.right>r.left&&n.left<r.right}},375:function(e,t,n){var r=n(11),o=n(80),i=n(16),s=n(122).f,l=function(e){return function(t){for(var n,l=i(t),a=o(l),c=a.length,u=0,f=[];c>u;)n=a[u++],r&&!s.call(l,n)||f.push(e?[n,l[n]]:l[n]);return f}};e.exports={entries:l(!0),values:l(!1)}},384:function(e,t,n){var r=n(2),o=n(375).values;r({target:"Object",stat:!0},{values:function(e){return o(e)}})},386:function(e,t,n){"use strict";var r=n(2),o=n(49).findIndex,i=n(120),s=!0;"findIndex"in[]&&Array(1).findIndex((function(){s=!1})),r({target:"Array",proto:!0,forced:s},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),i("findIndex")}}]);