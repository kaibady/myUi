(window.webpackJsonp=window.webpackJsonp||[]).push([[667],{2162:function(t,e,n){},2444:function(t,e,n){"use strict";n(2162)},2751:function(t,e,n){"use strict";n.r(e);var i=n(436),r=n(47),o={name:"MyDvBorder4",mixins:[n(866).a]},s=(n(2444),n(20)),l=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Box",t._b({staticClass:"my-dv-border-4",class:t.classes,attrs:{"default-width":"400px","default-height":"300px",padding:"0"}},"Box",t.$attrs,!1),[n("svg",{staticClass:"my-dv-border__svg",style:t.styles,attrs:{width:t.width,height:t.height}},[n("polygon",{attrs:{fill:t.fill,points:"\n      10, 22 "+(t.width-22)+", 22 "+(t.width-22)+", "+(t.height-86)+" "+(t.width-84)+", "+(t.height-24)+" 10, "+(t.height-24)+"\n    "}}),t._v(" "),n("polyline",{staticClass:"dv-bb5-line-1",attrs:{fill:"transparent",stroke:t.light,points:"8, 5 "+(t.width-5)+", 5 "+(t.width-5)+", "+(t.height-100)+"\n        "+(t.width-100)+", "+(t.height-5)+" 8, "+(t.height-5)+" 8, 5"}}),t._v(" "),n("polyline",{staticClass:"dv-bb5-line-2",attrs:{fill:"transparent",stroke:t.dark,points:"3, 5 "+(t.width-20)+", 5 "+(t.width-20)+", "+(t.height-60)+"\n        "+(t.width-74)+", "+(t.height-5)+" 3, "+(t.height-5)+" 3, 5"}}),t._v(" "),n("polyline",{staticClass:"dv-bb5-line-3",attrs:{"stroke-width":"5",stroke:t.dark,points:"50, 13 "+(t.width-35)+", 13"}}),t._v(" "),n("polyline",{staticClass:"dv-bb5-line-4",attrs:{"stroke-width":"2",stroke:t.dark,points:"15, 20 "+(t.width-35)+", 20"}}),t._v(" "),n("polyline",{staticClass:"dv-bb5-line-5",attrs:{"stroke-width":"2",stroke:t.dark,points:"15, "+(t.height-20)+" "+(t.width-110)+", "+(t.height-20)}}),t._v(" "),n("polyline",{staticClass:"dv-bb5-line-6",attrs:{"stroke-width":"5",stroke:t.dark,points:"15, "+(t.height-13)+" "+(t.width-110)+", "+(t.height-13)}})]),t._v(" "),n("BoxContent",{attrs:{padding:t.$attrs.padding}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports,a=Object(r.a)(l),u=n(0);u.default.use(a),u.default.use(i.a);var c={},f=Object(s.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"600px"}},[e("my-dv-page",{attrs:{target:"parent",fit:""}},[e("my-dv-border4",{attrs:{"x-align":"center","y-align":"middle",width:"80%",height:"80%"}})],1)],1)}),[],!1,null,null,null);e.default=f.exports},369:function(t,e,n){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=h,e.addClass=function(t,e){if(!t)return;for(var n=t.className,i=(e||"").split(" "),r=0,o=i.length;r<o;r++){var s=i[r];s&&(t.classList?t.classList.add(s):h(t,s)||(n+=" "+s))}t.classList||(t.className=n)},e.removeClass=function(t,e){if(!t||!e)return;for(var n=e.split(" "),i=" "+t.className+" ",r=0,o=n.length;r<o;r++){var s=n[r];s&&(t.classList?t.classList.remove(s):h(t,s)&&(i=i.replace(" "+s+" "," ")))}t.classList||(t.className=(i||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,n,r){if(!e||!n)return;if("object"===(void 0===n?"undefined":i(n)))for(var o in n)n.hasOwnProperty(o)&&t(e,o,n[o]);else"opacity"===(n=c(n))&&u<9?e.style.filter=isNaN(r)?"":"alpha(opacity="+100*r+")":e.style[n]=r};var r,o=n(0);var s=((r=o)&&r.__esModule?r:{default:r}).default.prototype.$isServer,l=/([\:\-\_]+(.))/g,a=/^moz([A-Z])/,u=s?0:Number(document.documentMode),c=function(t){return t.replace(l,(function(t,e,n,i){return i?n.toUpperCase():n})).replace(a,"Moz$1")},f=e.on=!s&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},d=e.off=!s&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};e.once=function(t,e,n){f(t,e,(function i(){n&&n.apply(this,arguments),d(t,e,i)}))};function h(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var v=e.getStyle=u<9?function(t,e){if(!s){if(!t||!e)return null;"float"===(e=c(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!s){if(!t||!e)return null;"float"===(e=c(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}};var p=e.isScroll=function(t,e){if(!s)return v(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!s){for(var n=t;n;){if([window,document,document.documentElement].includes(n))return window;if(p(n,e))return n;n=n.parentNode}return n}},e.isInContainer=function(t,e){if(s||!t||!e)return!1;var n=t.getBoundingClientRect(),i=void 0;return i=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<i.bottom&&n.bottom>i.top&&n.right>i.left&&n.left<i.right}},382:function(t,e,n){var i=n(1),r=n(409),o=n(122);i({target:"Array",proto:!0},{fill:r}),o("fill")},387:function(t,e,n){"use strict";var i=n(1),r=n(49).findIndex,o=n(122),s=!0;"findIndex"in[]&&Array(1).findIndex((function(){s=!1})),i({target:"Array",proto:!0,forced:s},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},393:function(t,e,n){"use strict";var i=n(207),r=n(210),o=n(7),s=n(22),l=n(407),a=n(209),u=n(21),c=n(208),f=n(83),d=n(2),h=[].push,v=Math.min,p=!d((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(s(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,o);for(var l,a,u,c=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,p=new RegExp(t.source,d+"g");(l=f.call(p,i))&&!((a=p.lastIndex)>v&&(c.push(i.slice(v,l.index)),l.length>1&&l.index<i.length&&h.apply(c,l.slice(1)),u=l[0].length,v=a,c.length>=o));)p.lastIndex===l.index&&p.lastIndex++;return v===i.length?!u&&p.test("")||c.push(""):c.push(i.slice(v)),c.length>o?c.slice(0,o):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=s(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,r,n):i.call(String(r),e,n)},function(t,r){var s=n(i,t,this,r,i!==e);if(s.done)return s.value;var f=o(t),d=String(this),h=l(f,RegExp),g=f.unicode,y=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(p?"y":"g"),m=new h(p?f:"^(?:"+f.source+")",y),x=void 0===r?4294967295:r>>>0;if(0===x)return[];if(0===d.length)return null===c(m,d)?[d]:[];for(var w=0,b=0,E=[];b<d.length;){m.lastIndex=p?b:0;var S,k=c(m,p?d:d.slice(b));if(null===k||(S=v(u(m.lastIndex+(p?0:b)),d.length))===w)b=a(d,b,g);else{if(E.push(d.slice(w,b)),E.length===x)return E;for(var C=1;C<=k.length-1;C++)if(E.push(k[C]),E.length===x)return E;b=w=S}}return E.push(d.slice(w)),E}]}),!p)},407:function(t,e,n){var i=n(7),r=n(52),o=n(3)("species");t.exports=function(t,e){var n,s=i(t).constructor;return void 0===s||null==(n=i(s)[o])?e:r(n)}},409:function(t,e,n){"use strict";var i=n(17),r=n(125),o=n(21);t.exports=function(t){for(var e=i(this),n=o(e.length),s=arguments.length,l=r(s>1?arguments[1]:void 0,n),a=s>2?arguments[2]:void 0,u=void 0===a?n:r(a,n);u>l;)e[l++]=t;return e}},451:function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},483:function(t,e,n){"use strict";var i=n(35),r=n(8),o=n(3),s=n(11),l=o("species");t.exports=function(t){var e=i(t),n=r.f;s&&e&&!e[l]&&n(e,l,{configurable:!0,get:function(){return this}})}},490:function(t,e,n){var i=n(7),r=n(219),o=n(21),s=n(126),l=n(217),a=n(218),u=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var c,f,d,h,v,p,g,y=n&&n.that,m=!(!n||!n.AS_ENTRIES),x=!(!n||!n.IS_ITERATOR),w=!(!n||!n.INTERRUPTED),b=s(e,y,1+m+w),E=function(t){return c&&a(c),new u(!0,t)},S=function(t){return m?(i(t),w?b(t[0],t[1],E):b(t[0],t[1])):w?b(t,E):b(t)};if(x)c=t;else{if("function"!=typeof(f=l(t)))throw TypeError("Target is not iterable");if(r(f)){for(d=0,h=o(t.length);h>d;d++)if((v=S(t[d]))&&v instanceof u)return v;return new u(!1)}c=f.call(t)}for(p=c.next;!(g=p.call(c)).done;){try{v=S(g.value)}catch(t){throw a(c),t}if("object"==typeof v&&v&&v instanceof u)return v}return new u(!1)}},538:function(t,e,n){var i=n(23);t.exports=function(t,e,n){for(var r in e)i(t,r,e[r],n);return t}},584:function(t,e,n){"use strict";var i=n(1),r=n(4),o=n(127),s=n(23),l=n(215),a=n(490),u=n(451),c=n(5),f=n(2),d=n(220),h=n(84),v=n(216);t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),y=p?"set":"add",m=r[t],x=m&&m.prototype,w=m,b={},E=function(t){var e=x[t];s(x,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!c(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!c(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!c(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(o(t,"function"!=typeof m||!(g||x.forEach&&!f((function(){(new m).entries().next()})))))w=n.getConstructor(e,t,p,y),l.REQUIRED=!0;else if(o(t,!0)){var S=new w,k=S[y](g?{}:-0,1)!=S,C=f((function(){S.has(1)})),_=d((function(t){new m(t)})),I=!g&&f((function(){for(var t=new m,e=5;e--;)t[y](e,e);return!t.has(-0)}));_||((w=e((function(e,n){u(e,w,t);var i=v(new m,e,w);return null!=n&&a(n,i[y],{that:i,AS_ENTRIES:p}),i}))).prototype=x,x.constructor=w),(C||I)&&(E("delete"),E("has"),p&&E("get")),(I||k)&&E(y),g&&x.clear&&delete x.clear}return b[t]=w,i({global:!0,forced:w!=m},b),h(w,t),g||n.setStrong(w,t,p),w}},585:function(t,e,n){"use strict";var i=n(8).f,r=n(36),o=n(538),s=n(126),l=n(451),a=n(490),u=n(132),c=n(483),f=n(11),d=n(215).fastKey,h=n(53),v=h.set,p=h.getterFor;t.exports={getConstructor:function(t,e,n,u){var c=t((function(t,i){l(t,c,e),v(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),f||(t.size=0),null!=i&&a(i,t[u],{that:t,AS_ENTRIES:n})})),h=p(e),g=function(t,e,n){var i,r,o=h(t),s=y(t,e);return s?s.value=n:(o.last=s={index:r=d(e,!0),key:e,value:n,previous:i=o.last,next:void 0,removed:!1},o.first||(o.first=s),i&&(i.next=s),f?o.size++:t.size++,"F"!==r&&(o.index[r]=s)),t},y=function(t,e){var n,i=h(t),r=d(e);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==e)return n};return o(c.prototype,{clear:function(){for(var t=h(this),e=t.index,n=t.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete e[n.index],n=n.next;t.first=t.last=void 0,f?t.size=0:this.size=0},delete:function(t){var e=h(this),n=y(this,t);if(n){var i=n.next,r=n.previous;delete e.index[n.index],n.removed=!0,r&&(r.next=i),i&&(i.previous=r),e.first==n&&(e.first=i),e.last==n&&(e.last=r),f?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=h(this),i=s(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(i(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!y(this,t)}}),o(c.prototype,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),f&&i(c.prototype,"size",{get:function(){return h(this).size}}),c},setStrong:function(t,e,n){var i=e+" Iterator",r=p(e),o=p(i);u(t,e,(function(t,e){v(this,{type:i,target:t,state:r(t),kind:e,last:void 0})}),(function(){for(var t=o(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),c(e)}}},695:function(t,e,n){},710:function(t,e,n){"use strict";var i=n(584),r=n(585);t.exports=i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},863:function(t,e,n){},864:function(t,e,n){"use strict";n(695)},866:function(t,e,n){"use strict";n(382),n(201);var i=n(403),r=n(466),o=n(47),s={name:"MyDvContent",props:{padding:String},computed:{styles:function(){return{padding:this.padding}}}},l=(n(864),n(20)),a=Object(l.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-dv-content",style:this.styles},[this._t("default")],2)}),[],!1,null,null,null).exports,u=Object(o.a)(a),c=n(690);n(863),e.a={mixins:[r.a,c.a],inheritAttrs:!1,components:{Box:i.a,BoxContent:u},props:{fill:{type:String,default:function(){var t,e;return(null==this||null===(t=this.page)||void 0===t||null===(e=t.settings)||void 0===e?void 0:e.fill)||"transparent"}},reverse:Boolean,opacity:{type:Number,default:1}},computed:{classes:function(){return{"my-dv-border":!0,"is-reverse":this.reverse}},styles:function(){return{opacity:this.opacity}}}}}}]);