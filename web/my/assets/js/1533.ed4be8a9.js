(window.webpackJsonp=window.webpackJsonp||[]).push([[1533],{367:function(t,e,n){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=m,e.addClass=function(t,e){if(!t)return;for(var n=t.className,o=(e||"").split(" "),r=0,i=o.length;r<i;r++){var l=o[r];l&&(t.classList?t.classList.add(l):m(t,l)||(n+=" "+l))}t.classList||(t.className=n)},e.removeClass=function(t,e){if(!t||!e)return;for(var n=e.split(" "),o=" "+t.className+" ",r=0,i=n.length;r<i;r++){var l=n[r];l&&(t.classList?t.classList.remove(l):m(t,l)&&(o=o.replace(" "+l+" "," ")))}t.classList||(t.className=(o||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,n,r){if(!e||!n)return;if("object"===(void 0===n?"undefined":o(n)))for(var i in n)n.hasOwnProperty(i)&&t(e,i,n[i]);else"opacity"===(n=u(n))&&c<9?e.style.filter=isNaN(r)?"":"alpha(opacity="+100*r+")":e.style[n]=r};var r,i=n(0);var l=((r=i)&&r.__esModule?r:{default:r}).default.prototype.$isServer,s=/([\:\-\_]+(.))/g,a=/^moz([A-Z])/,c=l?0:Number(document.documentMode),u=function(t){return t.replace(s,(function(t,e,n,o){return o?n.toUpperCase():n})).replace(a,"Moz$1")},f=e.on=!l&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},d=e.off=!l&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};e.once=function(t,e,n){f(t,e,(function o(){n&&n.apply(this,arguments),d(t,e,o)}))};function m(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var p=e.getStyle=c<9?function(t,e){if(!l){if(!t||!e)return null;"float"===(e=u(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!l){if(!t||!e)return null;"float"===(e=u(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}};var y=e.isScroll=function(t,e){if(!l)return p(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!l){for(var n=t;n;){if([window,document,document.documentElement].includes(n))return window;if(y(n,e))return n;n=n.parentNode}return n}},e.isInContainer=function(t,e){if(l||!t||!e)return!1;var n=t.getBoundingClientRect(),o=void 0;return o=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<o.bottom&&n.bottom>o.top&&n.right>o.left&&n.left<o.right}},3675:function(t,e,n){"use strict";n.r(e);var o=n(477),r=n(1531),i=n(0);i.default.use(r.a),i.default.use(o.a);var l={data:function(){return{columns:[{label:"列一",width:100},{label:"列二",width:200},{label:"列三",width:100}],rows:[["行1列1","行1列2","行1列3"],["行2列1","行2列2","行2列3"],["行3列1","行3列2","行3列3"],["行4列1","行4列2","行4列3"],["行5列1","行5列2","行5列3"],["行6列1","行6列2","行6列3"],["行7列1","行7列2","行7列3"],["行8列1","行8列2","行8列3"],["行9列1","行9列2","行9列3"],["行10列1","行10列2","行10列3"]]}}},s=n(19),a=Object(s.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-origin",staticStyle:{height:"500px"}},[e("my-dv-page",{attrs:{target:"parent",fit:""}},[e("my-dv-list",{attrs:{width:"80%","x-align":"center","y-align":"middle",radius:"",columns:this.columns,rows:this.rows}})],1)],1)}),[],!1,null,null,null);e.default=a.exports}}]);