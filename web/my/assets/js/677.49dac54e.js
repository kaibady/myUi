(window.webpackJsonp=window.webpackJsonp||[]).push([[677],{2277:function(t,e,n){},2597:function(t,e,n){"use strict";n(2277)},2766:function(t,e,n){"use strict";n.r(e);var r=n(436),i=n(47),o={name:"MyDvBorder11",mixins:[n(866).a]},s=(n(2597),n(20)),u=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Box",t._b({staticClass:"my-dv-border-11",class:t.classes,attrs:{"default-width":"400px","default-height":"300px",padding:"0"}},"Box",t.$attrs,!1),[n("svg",{staticClass:"my-dv-border__svg",style:t.styles,attrs:{width:t.width,height:t.height}},[n("path",{attrs:{fill:t.fill,stroke:t.dark,d:"\n        M 5 20 L 5 10 L 12 3  L 60 3 L 68 10\n        L "+(t.width-20)+" 10 L "+(t.width-5)+" 25\n        L "+(t.width-5)+" "+(t.height-5)+" L 20 "+(t.height-5)+"\n        L 5 "+(t.height-20)+" L 5 20\n      "}}),t._v(" "),n("path",{attrs:{fill:"transparent","stroke-width":"3","stroke-linecap":"round","stroke-dasharray":"10, 5",stroke:t.light,d:"M 16 9 L 61 9"}}),t._v(" "),n("path",{attrs:{fill:"transparent",stroke:t.dark,d:"M 5 20 L 5 10 L 12 3  L 60 3 L 68 10"}}),t._v(" "),n("path",{attrs:{fill:"transparent",stroke:t.dark,d:"M "+(t.width-5)+" "+(t.height-30)+" L "+(t.width-5)+" "+(t.height-5)+" L "+(t.width-30)+" "+(t.height-5)}})]),t._v(" "),n("BoxContent",{attrs:{padding:t.$attrs.padding}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports,a=Object(i.a)(u),l=n(0);l.default.use(a),l.default.use(r.a);var c={},f=Object(s.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"600px"}},[e("my-dv-page",{attrs:{target:"parent",fit:""}},[e("my-dv-border11",{attrs:{"x-align":"center","y-align":"middle",width:"80%",height:"80%"}})],1)],1)}),[],!1,null,null,null);e.default=f.exports},369:function(t,e,n){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=h,e.addClass=function(t,e){if(!t)return;for(var n=t.className,r=(e||"").split(" "),i=0,o=r.length;i<o;i++){var s=r[i];s&&(t.classList?t.classList.add(s):h(t,s)||(n+=" "+s))}t.classList||(t.className=n)},e.removeClass=function(t,e){if(!t||!e)return;for(var n=e.split(" "),r=" "+t.className+" ",i=0,o=n.length;i<o;i++){var s=n[i];s&&(t.classList?t.classList.remove(s):h(t,s)&&(r=r.replace(" "+s+" "," ")))}t.classList||(t.className=(r||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,n,i){if(!e||!n)return;if("object"===(void 0===n?"undefined":r(n)))for(var o in n)n.hasOwnProperty(o)&&t(e,o,n[o]);else"opacity"===(n=c(n))&&l<9?e.style.filter=isNaN(i)?"":"alpha(opacity="+100*i+")":e.style[n]=i};var i,o=n(0);var s=((i=o)&&i.__esModule?i:{default:i}).default.prototype.$isServer,u=/([\:\-\_]+(.))/g,a=/^moz([A-Z])/,l=s?0:Number(document.documentMode),c=function(t){return t.replace(u,(function(t,e,n,r){return r?n.toUpperCase():n})).replace(a,"Moz$1")},f=e.on=!s&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},d=e.off=!s&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};e.once=function(t,e,n){f(t,e,(function r(){n&&n.apply(this,arguments),d(t,e,r)}))};function h(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var v=e.getStyle=l<9?function(t,e){if(!s){if(!t||!e)return null;"float"===(e=c(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!s){if(!t||!e)return null;"float"===(e=c(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}};var p=e.isScroll=function(t,e){if(!s)return v(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!s){for(var n=t;n;){if([window,document,document.documentElement].includes(n))return window;if(p(n,e))return n;n=n.parentNode}return n}},e.isInContainer=function(t,e){if(s||!t||!e)return!1;var n=t.getBoundingClientRect(),r=void 0;return r=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<r.bottom&&n.bottom>r.top&&n.right>r.left&&n.left<r.right}},382:function(t,e,n){var r=n(1),i=n(409),o=n(122);r({target:"Array",proto:!0},{fill:i}),o("fill")},387:function(t,e,n){"use strict";var r=n(1),i=n(49).findIndex,o=n(122),s=!0;"findIndex"in[]&&Array(1).findIndex((function(){s=!1})),r({target:"Array",proto:!0,forced:s},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},393:function(t,e,n){"use strict";var r=n(207),i=n(210),o=n(7),s=n(22),u=n(407),a=n(209),l=n(21),c=n(208),f=n(83),d=n(2),h=[].push,v=Math.min,p=!d((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(s(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,o);for(var u,a,l,c=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,p=new RegExp(t.source,d+"g");(u=f.call(p,r))&&!((a=p.lastIndex)>v&&(c.push(r.slice(v,u.index)),u.length>1&&u.index<r.length&&h.apply(c,u.slice(1)),l=u[0].length,v=a,c.length>=o));)p.lastIndex===u.index&&p.lastIndex++;return v===r.length?!l&&p.test("")||c.push(""):c.push(r.slice(v)),c.length>o?c.slice(0,o):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=s(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,i,n):r.call(String(i),e,n)},function(t,i){var s=n(r,t,this,i,r!==e);if(s.done)return s.value;var f=o(t),d=String(this),h=u(f,RegExp),g=f.unicode,y=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(p?"y":"g"),m=new h(p?f:"^(?:"+f.source+")",y),x=void 0===i?4294967295:i>>>0;if(0===x)return[];if(0===d.length)return null===c(m,d)?[d]:[];for(var w=0,b=0,E=[];b<d.length;){m.lastIndex=p?b:0;var S,L=c(m,p?d:d.slice(b));if(null===L||(S=v(l(m.lastIndex+(p?0:b)),d.length))===w)b=a(d,b,g);else{if(E.push(d.slice(w,b)),E.length===x)return E;for(var _=1;_<=L.length-1;_++)if(E.push(L[_]),E.length===x)return E;b=w=S}}return E.push(d.slice(w)),E}]}),!p)},407:function(t,e,n){var r=n(7),i=n(52),o=n(3)("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||null==(n=r(s)[o])?e:i(n)}},409:function(t,e,n){"use strict";var r=n(17),i=n(125),o=n(21);t.exports=function(t){for(var e=r(this),n=o(e.length),s=arguments.length,u=i(s>1?arguments[1]:void 0,n),a=s>2?arguments[2]:void 0,l=void 0===a?n:i(a,n);l>u;)e[u++]=t;return e}},451:function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},483:function(t,e,n){"use strict";var r=n(35),i=n(8),o=n(3),s=n(11),u=o("species");t.exports=function(t){var e=r(t),n=i.f;s&&e&&!e[u]&&n(e,u,{configurable:!0,get:function(){return this}})}},490:function(t,e,n){var r=n(7),i=n(219),o=n(21),s=n(126),u=n(217),a=n(218),l=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var c,f,d,h,v,p,g,y=n&&n.that,m=!(!n||!n.AS_ENTRIES),x=!(!n||!n.IS_ITERATOR),w=!(!n||!n.INTERRUPTED),b=s(e,y,1+m+w),E=function(t){return c&&a(c),new l(!0,t)},S=function(t){return m?(r(t),w?b(t[0],t[1],E):b(t[0],t[1])):w?b(t,E):b(t)};if(x)c=t;else{if("function"!=typeof(f=u(t)))throw TypeError("Target is not iterable");if(i(f)){for(d=0,h=o(t.length);h>d;d++)if((v=S(t[d]))&&v instanceof l)return v;return new l(!1)}c=f.call(t)}for(p=c.next;!(g=p.call(c)).done;){try{v=S(g.value)}catch(t){throw a(c),t}if("object"==typeof v&&v&&v instanceof l)return v}return new l(!1)}},538:function(t,e,n){var r=n(23);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},584:function(t,e,n){"use strict";var r=n(1),i=n(4),o=n(127),s=n(23),u=n(215),a=n(490),l=n(451),c=n(5),f=n(2),d=n(220),h=n(84),v=n(216);t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),y=p?"set":"add",m=i[t],x=m&&m.prototype,w=m,b={},E=function(t){var e=x[t];s(x,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!c(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!c(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!c(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(o(t,"function"!=typeof m||!(g||x.forEach&&!f((function(){(new m).entries().next()})))))w=n.getConstructor(e,t,p,y),u.REQUIRED=!0;else if(o(t,!0)){var S=new w,L=S[y](g?{}:-0,1)!=S,_=f((function(){S.has(1)})),k=d((function(t){new m(t)})),C=!g&&f((function(){for(var t=new m,e=5;e--;)t[y](e,e);return!t.has(-0)}));k||((w=e((function(e,n){l(e,w,t);var r=v(new m,e,w);return null!=n&&a(n,r[y],{that:r,AS_ENTRIES:p}),r}))).prototype=x,x.constructor=w),(_||C)&&(E("delete"),E("has"),p&&E("get")),(C||L)&&E(y),g&&x.clear&&delete x.clear}return b[t]=w,r({global:!0,forced:w!=m},b),h(w,t),g||n.setStrong(w,t,p),w}},585:function(t,e,n){"use strict";var r=n(8).f,i=n(36),o=n(538),s=n(126),u=n(451),a=n(490),l=n(132),c=n(483),f=n(11),d=n(215).fastKey,h=n(53),v=h.set,p=h.getterFor;t.exports={getConstructor:function(t,e,n,l){var c=t((function(t,r){u(t,c,e),v(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),f||(t.size=0),null!=r&&a(r,t[l],{that:t,AS_ENTRIES:n})})),h=p(e),g=function(t,e,n){var r,i,o=h(t),s=y(t,e);return s?s.value=n:(o.last=s={index:i=d(e,!0),key:e,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=s),r&&(r.next=s),f?o.size++:t.size++,"F"!==i&&(o.index[i]=s)),t},y=function(t,e){var n,r=h(t),i=d(e);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==e)return n};return o(c.prototype,{clear:function(){for(var t=h(this),e=t.index,n=t.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete e[n.index],n=n.next;t.first=t.last=void 0,f?t.size=0:this.size=0},delete:function(t){var e=h(this),n=y(this,t);if(n){var r=n.next,i=n.previous;delete e.index[n.index],n.removed=!0,i&&(i.next=r),r&&(r.previous=i),e.first==n&&(e.first=r),e.last==n&&(e.last=i),f?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=h(this),r=s(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!y(this,t)}}),o(c.prototype,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),f&&r(c.prototype,"size",{get:function(){return h(this).size}}),c},setStrong:function(t,e,n){var r=e+" Iterator",i=p(e),o=p(r);l(t,e,(function(t,e){v(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){for(var t=o(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),c(e)}}},695:function(t,e,n){},710:function(t,e,n){"use strict";var r=n(584),i=n(585);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},863:function(t,e,n){},864:function(t,e,n){"use strict";n(695)},866:function(t,e,n){"use strict";n(382),n(201);var r=n(403),i=n(466),o=n(47),s={name:"MyDvContent",props:{padding:String},computed:{styles:function(){return{padding:this.padding}}}},u=(n(864),n(20)),a=Object(u.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-dv-content",style:this.styles},[this._t("default")],2)}),[],!1,null,null,null).exports,l=Object(o.a)(a),c=n(690);n(863),e.a={mixins:[i.a,c.a],inheritAttrs:!1,components:{Box:r.a,BoxContent:l},props:{fill:{type:String,default:function(){var t,e;return(null==this||null===(t=this.page)||void 0===t||null===(e=t.settings)||void 0===e?void 0:e.fill)||"transparent"}},reverse:Boolean,opacity:{type:Number,default:1}},computed:{classes:function(){return{"my-dv-border":!0,"is-reverse":this.reverse}},styles:function(){return{opacity:this.opacity}}}}}}]);