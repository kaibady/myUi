(window.webpackJsonp=window.webpackJsonp||[]).push([[1147],{2099:function(t,e,n){},2155:function(t,e,n){"use strict";var o=n(53),r=n(364),i={name:"MyFixed",props:{fit:Boolean},data:function(){return{headerHeight:"auto",footerHeight:"auto",scrollTop:0}},computed:{classes:function(){return{"my-fixed":!0,"is-fit":this.fit}},styles:function(){return{paddingTop:this.headerHeight,paddingBottom:this.footerHeight}},translate:function(){return{transform:"translateY(".concat(this.scrollTop,"px)")}}},methods:{resize:function(){if(this.$refs.header){var t=this.$refs.header.getBoundingClientRect();this.headerHeight=t.height+"px"}if(this.$refs.footer){var e=this.$refs.footer.getBoundingClientRect();this.footerHeight=e.height+"px"}this.handleScroll({target:this.$el})},handleScroll:function(t){var e=t.target;e&&(this.scrollTop=e.scrollTop)}},mounted:function(){this.resize(),Object(r.on)(this.$el,"scroll",this.handleScroll)},beforeDestroy:function(){Object(r.off)(this.$el,"scroll",this.handleScroll)}},s=n(18),l=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classes,style:t.styles},[t.$slots.header?n("div",{ref:"header",staticClass:"my-fixed__header",style:t.translate},[t._t("header")],2):t._e(),t._v(" "),t._t("default"),t._v(" "),t.$slots.footer?n("div",{ref:"footer",staticClass:"my-fixed__footer",style:t.translate},[t._t("footer")],2):t._e()],2)}),[],!1,null,null,null).exports;e.a=Object(o.a)(l)},2243:function(t,e,n){},2545:function(t,e,n){"use strict";n(2243)},2975:function(t,e,n){"use strict";n.r(e);n(2099),n(125);var o=n(2155),r=n(0),i={components:{MyFixed:o.a}};r.default.use(o.a);var s=i,l=(n(2545),n(18)),a=Object(l.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("my-fixed",{scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"header"},[t._v("Header")])]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"body"},t._l(30,(function(e){return n("p",{key:e},[t._v("占位文字 "+t._s(e))])})),0)])}),[],!1,null,"5c17a776",null);e.default=a.exports},364:function(t,e,n){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=h,e.addClass=function(t,e){if(!t)return;for(var n=t.className,o=(e||"").split(" "),r=0,i=o.length;r<i;r++){var s=o[r];s&&(t.classList?t.classList.add(s):h(t,s)||(n+=" "+s))}t.classList||(t.className=n)},e.removeClass=function(t,e){if(!t||!e)return;for(var n=e.split(" "),o=" "+t.className+" ",r=0,i=n.length;r<i;r++){var s=n[r];s&&(t.classList?t.classList.remove(s):h(t,s)&&(o=o.replace(" "+s+" "," ")))}t.classList||(t.className=(o||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,n,r){if(!e||!n)return;if("object"===(void 0===n?"undefined":o(n)))for(var i in n)n.hasOwnProperty(i)&&t(e,i,n[i]);else"opacity"===(n=u(n))&&c<9?e.style.filter=isNaN(r)?"":"alpha(opacity="+100*r+")":e.style[n]=r};var r,i=n(0);var s=((r=i)&&r.__esModule?r:{default:r}).default.prototype.$isServer,l=/([\:\-\_]+(.))/g,a=/^moz([A-Z])/,c=s?0:Number(document.documentMode),u=function(t){return t.replace(l,(function(t,e,n,o){return o?n.toUpperCase():n})).replace(a,"Moz$1")},f=e.on=!s&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},d=e.off=!s&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};e.once=function(t,e,n){f(t,e,(function o(){n&&n.apply(this,arguments),d(t,e,o)}))};function h(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var p=e.getStyle=c<9?function(t,e){if(!s){if(!t||!e)return null;"float"===(e=u(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!s){if(!t||!e)return null;"float"===(e=u(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}};var y=e.isScroll=function(t,e){if(!s)return p(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!s){for(var n=t;n;){if([window,document,document.documentElement].includes(n))return window;if(y(n,e))return n;n=n.parentNode}return n}},e.isInContainer=function(t,e){if(s||!t||!e)return!1;var n=t.getBoundingClientRect(),o=void 0;return o=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<o.bottom&&n.bottom>o.top&&n.right>o.left&&n.left<o.right}}}]);