(window.webpackJsonp=window.webpackJsonp||[]).push([[675],{1593:function(t,e,n){},1725:function(t,e,n){"use strict";n(1593)},1760:function(t,e,n){"use strict";var i=n(47),r={name:"MyDvBorder1",mixins:[n(877).a],data:function(){return{border:["left-top","right-top","left-bottom","right-bottom"]}}},o=(n(1725),n(20)),s=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Box",t._b({staticClass:"my-dv-border-1",class:t.classes,attrs:{"default-width":"400px","default-height":"300px",padding:"0"}},"Box",t.$attrs,!1),[n("svg",{staticClass:"my-dv-border__svg",style:t.styles,attrs:{width:t.width,height:t.height}},[n("polygon",{attrs:{fill:t.fill,points:"10, 27 10, "+(t.height-27)+" 13, "+(t.height-24)+" 13, "+(t.height-21)+" 24, "+(t.height-11)+"\n    38, "+(t.height-11)+" 41, "+(t.height-8)+" 73, "+(t.height-8)+" 75, "+(t.height-10)+" 81, "+(t.height-10)+"\n    85, "+(t.height-6)+" "+(t.width-85)+", "+(t.height-6)+" "+(t.width-81)+", "+(t.height-10)+" "+(t.width-75)+", "+(t.height-10)+"\n    "+(t.width-73)+", "+(t.height-8)+" "+(t.width-41)+", "+(t.height-8)+" "+(t.width-38)+", "+(t.height-11)+"\n    "+(t.width-24)+", "+(t.height-11)+" "+(t.width-13)+", "+(t.height-21)+" "+(t.width-13)+", "+(t.height-24)+"\n    "+(t.width-10)+", "+(t.height-27)+" "+(t.width-10)+", 27 "+(t.width-13)+", 25 "+(t.width-13)+", 21\n    "+(t.width-24)+", 11 "+(t.width-38)+", 11 "+(t.width-41)+", 8 "+(t.width-73)+", 8 "+(t.width-75)+", 10\n    "+(t.width-81)+", 10 "+(t.width-85)+", 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24"}})]),t._v(" "),t._l(t.border,(function(e){return n("svg",{key:e,class:"my-dv-border-1__"+e+" my-dv-border-1__corner",style:t.styles,attrs:{width:"150px",height:"150px"}},[n("polygon",{attrs:{fill:t.light,points:"6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"}},[n("animate",{attrs:{attributeName:"fill",values:t.light+";"+t.dark+";"+t.light,dur:"0.5s",begin:"0s",repeatCount:"indefinite"}})]),t._v(" "),n("polygon",{attrs:{fill:t.dark,points:"27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8"}},[n("animate",{attrs:{attributeName:"fill",values:t.dark+";"+t.light+";"+t.dark,dur:"0.5s",begin:"0s",repeatCount:"indefinite"}})]),t._v(" "),n("polygon",{attrs:{fill:t.light,points:"9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"}},[n("animate",{attrs:{attributeName:"fill",values:t.light+";"+t.dark+";transparent",dur:"1s",begin:"0s",repeatCount:"indefinite"}})])])})),t._v(" "),n("BoxContent",{attrs:{padding:t.$attrs.padding}},[t._t("default")],2)],2)}),[],!1,null,null,null).exports;e.a=Object(i.a)(s)},3141:function(t,e,n){"use strict";n.r(e);var i=n(450),r=n(1760),o=n(0);o.default.use(r.a),o.default.use(i.a);var s={},l=n(20),u=Object(l.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"600px"}},[e("my-dv-page",{attrs:{target:"parent",fit:""}},[e("my-dv-border1",{attrs:{"x-align":"center","y-align":"middle",width:"80%",height:"80%"}})],1)],1)}),[],!1,null,null,null);e.default=u.exports},370:function(t,e,n){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=h,e.addClass=function(t,e){if(!t)return;for(var n=t.className,i=(e||"").split(" "),r=0,o=i.length;r<o;r++){var s=i[r];s&&(t.classList?t.classList.add(s):h(t,s)||(n+=" "+s))}t.classList||(t.className=n)},e.removeClass=function(t,e){if(!t||!e)return;for(var n=e.split(" "),i=" "+t.className+" ",r=0,o=n.length;r<o;r++){var s=n[r];s&&(t.classList?t.classList.remove(s):h(t,s)&&(i=i.replace(" "+s+" "," ")))}t.classList||(t.className=(i||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,n,r){if(!e||!n)return;if("object"===(void 0===n?"undefined":i(n)))for(var o in n)n.hasOwnProperty(o)&&t(e,o,n[o]);else"opacity"===(n=c(n))&&a<9?e.style.filter=isNaN(r)?"":"alpha(opacity="+100*r+")":e.style[n]=r};var r,o=n(0);var s=((r=o)&&r.__esModule?r:{default:r}).default.prototype.$isServer,l=/([\:\-\_]+(.))/g,u=/^moz([A-Z])/,a=s?0:Number(document.documentMode),c=function(t){return t.replace(l,(function(t,e,n,i){return i?n.toUpperCase():n})).replace(u,"Moz$1")},f=e.on=!s&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},d=e.off=!s&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};e.once=function(t,e,n){f(t,e,(function i(){n&&n.apply(this,arguments),d(t,e,i)}))};function h(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var v=e.getStyle=a<9?function(t,e){if(!s){if(!t||!e)return null;"float"===(e=c(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!s){if(!t||!e)return null;"float"===(e=c(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}};var p=e.isScroll=function(t,e){if(!s)return v(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!s){for(var n=t;n;){if([window,document,document.documentElement].includes(n))return window;if(p(n,e))return n;n=n.parentNode}return n}},e.isInContainer=function(t,e){if(s||!t||!e)return!1;var n=t.getBoundingClientRect(),i=void 0;return i=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<i.bottom&&n.bottom>i.top&&n.right>i.left&&n.left<i.right}},383:function(t,e,n){var i=n(1),r=n(424),o=n(122);i({target:"Array",proto:!0},{fill:r}),o("fill")},388:function(t,e,n){"use strict";var i=n(1),r=n(49).findIndex,o=n(122),s=!0;"findIndex"in[]&&Array(1).findIndex((function(){s=!1})),i({target:"Array",proto:!0,forced:s},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},397:function(t,e,n){"use strict";var i=n(207),r=n(211),o=n(7),s=n(22),l=n(417),u=n(209),a=n(21),c=n(208),f=n(83),d=n(2),h=[].push,v=Math.min,p=!d((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(s(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,o);for(var l,u,a,c=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,p=new RegExp(t.source,d+"g");(l=f.call(p,i))&&!((u=p.lastIndex)>v&&(c.push(i.slice(v,l.index)),l.length>1&&l.index<i.length&&h.apply(c,l.slice(1)),a=l[0].length,v=u,c.length>=o));)p.lastIndex===l.index&&p.lastIndex++;return v===i.length?!a&&p.test("")||c.push(""):c.push(i.slice(v)),c.length>o?c.slice(0,o):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=s(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,r,n):i.call(String(r),e,n)},function(t,r){var s=n(i,t,this,r,i!==e);if(s.done)return s.value;var f=o(t),d=String(this),h=l(f,RegExp),g=f.unicode,y=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(p?"y":"g"),m=new h(p?f:"^(?:"+f.source+")",y),x=void 0===r?4294967295:r>>>0;if(0===x)return[];if(0===d.length)return null===c(m,d)?[d]:[];for(var w=0,b=0,E=[];b<d.length;){m.lastIndex=p?b:0;var S,_=c(m,p?d:d.slice(b));if(null===_||(S=v(a(m.lastIndex+(p?0:b)),d.length))===w)b=u(d,b,g);else{if(E.push(d.slice(w,b)),E.length===x)return E;for(var C=1;C<=_.length-1;C++)if(E.push(_[C]),E.length===x)return E;b=w=S}}return E.push(d.slice(w)),E}]}),!p)},417:function(t,e,n){var i=n(7),r=n(52),o=n(3)("species");t.exports=function(t,e){var n,s=i(t).constructor;return void 0===s||null==(n=i(s)[o])?e:r(n)}},424:function(t,e,n){"use strict";var i=n(17),r=n(125),o=n(21);t.exports=function(t){for(var e=i(this),n=o(e.length),s=arguments.length,l=r(s>1?arguments[1]:void 0,n),u=s>2?arguments[2]:void 0,a=void 0===u?n:r(u,n);a>l;)e[l++]=t;return e}},452:function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},479:function(t,e,n){"use strict";var i=n(35),r=n(8),o=n(3),s=n(11),l=o("species");t.exports=function(t){var e=i(t),n=r.f;s&&e&&!e[l]&&n(e,l,{configurable:!0,get:function(){return this}})}},481:function(t,e,n){var i=n(7),r=n(219),o=n(21),s=n(126),l=n(217),u=n(218),a=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var c,f,d,h,v,p,g,y=n&&n.that,m=!(!n||!n.AS_ENTRIES),x=!(!n||!n.IS_ITERATOR),w=!(!n||!n.INTERRUPTED),b=s(e,y,1+m+w),E=function(t){return c&&u(c),new a(!0,t)},S=function(t){return m?(i(t),w?b(t[0],t[1],E):b(t[0],t[1])):w?b(t,E):b(t)};if(x)c=t;else{if("function"!=typeof(f=l(t)))throw TypeError("Target is not iterable");if(r(f)){for(d=0,h=o(t.length);h>d;d++)if((v=S(t[d]))&&v instanceof a)return v;return new a(!1)}c=f.call(t)}for(p=c.next;!(g=p.call(c)).done;){try{v=S(g.value)}catch(t){throw u(c),t}if("object"==typeof v&&v&&v instanceof a)return v}return new a(!1)}},531:function(t,e,n){var i=n(23);t.exports=function(t,e,n){for(var r in e)i(t,r,e[r],n);return t}},577:function(t,e,n){"use strict";var i=n(1),r=n(4),o=n(127),s=n(23),l=n(215),u=n(481),a=n(452),c=n(5),f=n(2),d=n(220),h=n(84),v=n(216);t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),y=p?"set":"add",m=r[t],x=m&&m.prototype,w=m,b={},E=function(t){var e=x[t];s(x,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!c(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!c(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!c(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(o(t,"function"!=typeof m||!(g||x.forEach&&!f((function(){(new m).entries().next()})))))w=n.getConstructor(e,t,p,y),l.REQUIRED=!0;else if(o(t,!0)){var S=new w,_=S[y](g?{}:-0,1)!=S,C=f((function(){S.has(1)})),I=d((function(t){new m(t)})),k=!g&&f((function(){for(var t=new m,e=5;e--;)t[y](e,e);return!t.has(-0)}));I||((w=e((function(e,n){a(e,w,t);var i=v(new m,e,w);return null!=n&&u(n,i[y],{that:i,AS_ENTRIES:p}),i}))).prototype=x,x.constructor=w),(C||k)&&(E("delete"),E("has"),p&&E("get")),(k||_)&&E(y),g&&x.clear&&delete x.clear}return b[t]=w,i({global:!0,forced:w!=m},b),h(w,t),g||n.setStrong(w,t,p),w}},578:function(t,e,n){"use strict";var i=n(8).f,r=n(36),o=n(531),s=n(126),l=n(452),u=n(481),a=n(131),c=n(479),f=n(11),d=n(215).fastKey,h=n(53),v=h.set,p=h.getterFor;t.exports={getConstructor:function(t,e,n,a){var c=t((function(t,i){l(t,c,e),v(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),f||(t.size=0),null!=i&&u(i,t[a],{that:t,AS_ENTRIES:n})})),h=p(e),g=function(t,e,n){var i,r,o=h(t),s=y(t,e);return s?s.value=n:(o.last=s={index:r=d(e,!0),key:e,value:n,previous:i=o.last,next:void 0,removed:!1},o.first||(o.first=s),i&&(i.next=s),f?o.size++:t.size++,"F"!==r&&(o.index[r]=s)),t},y=function(t,e){var n,i=h(t),r=d(e);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==e)return n};return o(c.prototype,{clear:function(){for(var t=h(this),e=t.index,n=t.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete e[n.index],n=n.next;t.first=t.last=void 0,f?t.size=0:this.size=0},delete:function(t){var e=h(this),n=y(this,t);if(n){var i=n.next,r=n.previous;delete e.index[n.index],n.removed=!0,r&&(r.next=i),i&&(i.previous=r),e.first==n&&(e.first=i),e.last==n&&(e.last=r),f?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=h(this),i=s(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(i(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!y(this,t)}}),o(c.prototype,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),f&&i(c.prototype,"size",{get:function(){return h(this).size}}),c},setStrong:function(t,e,n){var i=e+" Iterator",r=p(e),o=p(i);a(t,e,(function(t,e){v(this,{type:i,target:t,state:r(t),kind:e,last:void 0})}),(function(){for(var t=o(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),c(e)}}},662:function(t,e,n){"use strict";var i=n(577),r=n(578);t.exports=i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},735:function(t,e,n){},875:function(t,e,n){},876:function(t,e,n){"use strict";n(735)},877:function(t,e,n){"use strict";n(383),n(201);var i=n(410),r=n(484),o=n(47),s={name:"MyDvContent",props:{padding:String},computed:{styles:function(){return{padding:this.padding}}}},l=(n(876),n(20)),u=Object(l.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-dv-content",style:this.styles},[this._t("default")],2)}),[],!1,null,null,null).exports,a=Object(o.a)(u),c=n(730);n(875),e.a={mixins:[r.a,c.a],inheritAttrs:!1,components:{Box:i.a,BoxContent:a},props:{fill:{type:String,default:function(){var t,e;return(null==this||null===(t=this.page)||void 0===t||null===(e=t.settings)||void 0===e?void 0:e.fill)||"transparent"}},reverse:Boolean,opacity:{type:Number,default:1}},computed:{classes:function(){return{"my-dv-border":!0,"is-reverse":this.reverse}},styles:function(){return{opacity:this.opacity}}}}}}]);