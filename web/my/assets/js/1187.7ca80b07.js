(window.webpackJsonp=window.webpackJsonp||[]).push([[1187],{3087:function(t,e,n){"use strict";n.r(e);var o=n(358),i=n.n(o),l=(n(862),n(123),n(863)),r={data:function(){return{dialog:null}},methods:{createDialog:function(){this.dialog=l.a.create({title:"标题",width:"300px",height:"200px",draggable:!0,target:"body"},"这里是内容文本，也可以是vnode")},closeDialog:function(){this.dialog&&this.dialog.$destroy(),this.dialog=null},showDialog:function(){this.dialog&&this.dialog.show()},hideDialog:function(){this.dialog&&this.dialog.hide()}}};n(0).default.use(i.a);var a=r,c=n(18),s=Object(c.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{on:{click:t.createDialog}},[t._v("创建")]),t._v(" "),n("el-button",{on:{click:t.hideDialog}},[t._v("隐藏")]),t._v(" "),n("el-button",{on:{click:t.showDialog}},[t._v("显示")]),t._v(" "),n("el-button",{on:{click:t.closeDialog}},[t._v("销毁")])],1)}),[],!1,null,null,null);e.default=s.exports},357:function(t,e,n){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=v,e.addClass=function(t,e){if(!t)return;for(var n=t.className,o=(e||"").split(" "),i=0,l=o.length;i<l;i++){var r=o[i];r&&(t.classList?t.classList.add(r):v(t,r)||(n+=" "+r))}t.classList||(t.className=n)},e.removeClass=function(t,e){if(!t||!e)return;for(var n=e.split(" "),o=" "+t.className+" ",i=0,l=n.length;i<l;i++){var r=n[i];r&&(t.classList?t.classList.remove(r):v(t,r)&&(o=o.replace(" "+r+" "," ")))}t.classList||(t.className=(o||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,n,i){if(!e||!n)return;if("object"===(void 0===n?"undefined":o(n)))for(var l in n)n.hasOwnProperty(l)&&t(e,l,n[l]);else"opacity"===(n=u(n))&&s<9?e.style.filter=isNaN(i)?"":"alpha(opacity="+100*i+")":e.style[n]=i};var i,l=n(0);var r=((i=l)&&i.__esModule?i:{default:i}).default.prototype.$isServer,a=/([\:\-\_]+(.))/g,c=/^moz([A-Z])/,s=r?0:Number(document.documentMode),u=function(t){return t.replace(a,(function(t,e,n,o){return o?n.toUpperCase():n})).replace(c,"Moz$1")},f=e.on=!r&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},d=e.off=!r&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};e.once=function(t,e,n){f(t,e,(function o(){n&&n.apply(this,arguments),d(t,e,o)}))};function v(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var h=e.getStyle=s<9?function(t,e){if(!r){if(!t||!e)return null;"float"===(e=u(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!r){if(!t||!e)return null;"float"===(e=u(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}};var m=e.isScroll=function(t,e){if(!r)return h(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!r){for(var n=t;n;){if([window,document,document.documentElement].includes(n))return window;if(m(n,e))return n;n=n.parentNode}return n}},e.isInContainer=function(t,e){if(r||!t||!e)return!1;var n=t.getBoundingClientRect(),o=void 0;return o=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<o.bottom&&n.bottom>o.top&&n.right>o.left&&n.left<o.right}}}]);