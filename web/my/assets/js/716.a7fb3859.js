(window.webpackJsonp=window.webpackJsonp||[]).push([[716],{2821:function(t,e,n){"use strict";n.r(e);var i=n(441),r=n(53),o={name:"MyDvBorder8",mixins:[n(834).a]},s=n(18),l=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Box",t._b({staticClass:"my-dv-border-8",class:t.classes,attrs:{"default-width":"400px","default-height":"300px",padding:"0"}},"Box",t.$attrs,!1),[n("svg",{staticClass:"my-dv-border__svg",style:t.styles,attrs:{width:t.width,height:t.height}},[n("defs",[n("linearGradient",{attrs:{id:"gradient-"+t._uid,x1:"0%",y1:"0%",x2:"100%",y2:"100%"}},[n("animate",{attrs:{attributeName:"x1",values:"0%;100%;0%",dur:"10s",begin:"0s",repeatCount:"indefinite"}}),t._v(" "),n("animate",{attrs:{attributeName:"x2",values:"100%;0%;100%",dur:"10s",begin:"0s",repeatCount:"indefinite"}}),t._v(" "),n("stop",{attrs:{offset:"0%","stop-color":t.light}},[n("animate",{attrs:{attributeName:"stop-color",values:t.light+";"+t.dark+";"+t.light,dur:"10s",begin:"0s",repeatCount:"indefinite"}})]),t._v(" "),n("stop",{attrs:{offset:"100%","stop-color":t.dark}},[n("animate",{attrs:{attributeName:"stop-color",values:t.dark+";"+t.light+";"+t.dark,dur:"10s",begin:"0s",repeatCount:"indefinite"}})])],1),t._v(" "),n("mask",{attrs:{id:"mask-"+t._uid}},[n("polyline",{attrs:{stroke:"#fff","stroke-width":"3",fill:"transparent",points:"8, "+.4*t.height+" 8, 3, "+(.4*t.width+7)+", 3"}}),t._v(" "),n("polyline",{attrs:{fill:"#fff",points:"8, "+.15*t.height+" 8, 3, "+(.1*t.width+7)+", 3\n            "+.1*t.width+", 8 14, 8 14, "+(.15*t.height-7)+"\n          "}}),t._v(" "),n("polyline",{attrs:{stroke:"#fff","stroke-width":"3",fill:"transparent",points:.5*t.width+", 3 "+(t.width-3)+", 3, "+(t.width-3)+", "+.25*t.height}}),t._v(" "),n("polyline",{attrs:{fill:"#fff",points:"\n            "+.52*t.width+", 3 "+.58*t.width+", 3\n            "+(.58*t.width-7)+", 9 "+(.52*t.width+7)+", 9\n          "}}),t._v(" "),n("polyline",{attrs:{fill:"#fff",points:"\n            "+.9*t.width+", 3 "+(t.width-3)+", 3 "+(t.width-3)+", "+.1*t.height+"\n            "+(t.width-9)+", "+(.1*t.height-7)+" "+(t.width-9)+", 9 "+(.9*t.width+7)+", 9\n          "}}),t._v(" "),n("polyline",{attrs:{stroke:"#fff","stroke-width":"3",fill:"transparent",points:"8, "+.5*t.height+" 8, "+(t.height-3)+" "+(.3*t.width+7)+", "+(t.height-3)}}),t._v(" "),n("polyline",{attrs:{fill:"#fff",points:"\n            8, "+.55*t.height+" 8, "+.7*t.height+"\n            2, "+(.7*t.height-7)+" 2, "+(.55*t.height+7)+"\n          "}}),t._v(" "),n("polyline",{attrs:{stroke:"#fff","stroke-width":"3",fill:"transparent",points:.35*t.width+", "+(t.height-3)+" "+(t.width-3)+", "+(t.height-3)+" "+(t.width-3)+", "+.35*t.height}}),t._v(" "),n("polyline",{attrs:{fill:"#fff",points:"\n            "+.92*t.width+", "+(t.height-3)+" "+(t.width-3)+", "+(t.height-3)+" "+(t.width-3)+", "+.8*t.height+"\n            "+(t.width-9)+", "+(.8*t.height+7)+" "+(t.width-9)+", "+(t.height-9)+" "+(.92*t.width+7)+", "+(t.height-9)+"\n          "}})])],1),t._v(" "),n("polygon",{attrs:{fill:t.fill,points:"\n      15, 9 "+(.1*t.width+1)+", 9 "+(.1*t.width+4)+", 6 "+(.52*t.width+2)+", 6\n      "+(.52*t.width+6)+", 10 "+(.58*t.width-7)+", 10 "+(.58*t.width-2)+", 6\n      "+(.9*t.width+2)+", 6 "+(.9*t.width+6)+", 10 "+(t.width-10)+", 10 "+(t.width-10)+", "+(.1*t.height-6)+"\n      "+(t.width-6)+", "+(.1*t.height-1)+" "+(t.width-6)+", "+(.8*t.height+1)+" "+(t.width-10)+", "+(.8*t.height+6)+"\n      "+(t.width-10)+", "+(t.height-10)+" "+(.92*t.width+7)+", "+(t.height-10)+"  "+(.92*t.width+2)+", "+(t.height-6)+"\n      11, "+(t.height-6)+" 11, "+(.15*t.height-2)+" 15, "+(.15*t.height-7)+"\n    "}}),t._v(" "),n("rect",{attrs:{x:"0",y:"0",width:t.width,height:t.height,fill:"url(#gradient-"+t._uid+")",mask:"url(#mask-"+t._uid+")"}})]),t._v(" "),n("BoxContent",{attrs:{padding:t.$attrs.padding}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports,a=Object(r.a)(l),u=n(0);u.default.use(a),u.default.use(i.a);var f={},c=Object(s.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"600px"}},[e("my-dv-page",{attrs:{target:"parent",fit:""}},[e("my-dv-border8",{attrs:{"x-align":"center","y-align":"middle",width:"80%",height:"80%"}})],1)],1)}),[],!1,null,null,null);e.default=c.exports},364:function(t,e,n){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=h,e.addClass=function(t,e){if(!t)return;for(var n=t.className,i=(e||"").split(" "),r=0,o=i.length;r<o;r++){var s=i[r];s&&(t.classList?t.classList.add(s):h(t,s)||(n+=" "+s))}t.classList||(t.className=n)},e.removeClass=function(t,e){if(!t||!e)return;for(var n=e.split(" "),i=" "+t.className+" ",r=0,o=n.length;r<o;r++){var s=n[r];s&&(t.classList?t.classList.remove(s):h(t,s)&&(i=i.replace(" "+s+" "," ")))}t.classList||(t.className=(i||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,n,r){if(!e||!n)return;if("object"===(void 0===n?"undefined":i(n)))for(var o in n)n.hasOwnProperty(o)&&t(e,o,n[o]);else"opacity"===(n=f(n))&&u<9?e.style.filter=isNaN(r)?"":"alpha(opacity="+100*r+")":e.style[n]=r};var r,o=n(0);var s=((r=o)&&r.__esModule?r:{default:r}).default.prototype.$isServer,l=/([\:\-\_]+(.))/g,a=/^moz([A-Z])/,u=s?0:Number(document.documentMode),f=function(t){return t.replace(l,(function(t,e,n,i){return i?n.toUpperCase():n})).replace(a,"Moz$1")},c=e.on=!s&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},d=e.off=!s&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};e.once=function(t,e,n){c(t,e,(function i(){n&&n.apply(this,arguments),d(t,e,i)}))};function h(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var v=e.getStyle=u<9?function(t,e){if(!s){if(!t||!e)return null;"float"===(e=f(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!s){if(!t||!e)return null;"float"===(e=f(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}};var p=e.isScroll=function(t,e){if(!s)return v(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!s){for(var n=t;n;){if([window,document,document.documentElement].includes(n))return window;if(p(n,e))return n;n=n.parentNode}return n}},e.isInContainer=function(t,e){if(s||!t||!e)return!1;var n=t.getBoundingClientRect(),i=void 0;return i=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<i.bottom&&n.bottom>i.top&&n.right>i.left&&n.left<i.right}},378:function(t,e,n){var i=n(1),r=n(414),o=n(127);i({target:"Array",proto:!0},{fill:r}),o("fill")},382:function(t,e,n){"use strict";var i=n(1),r=n(35).findIndex,o=n(127),s=n(20),l=!0,a=s("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){l=!1})),i({target:"Array",proto:!0,forced:l||!a},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},390:function(t,e,n){"use strict";var i=n(205),r=n(208),o=n(8),s=n(22),l=n(405),a=n(207),u=n(19),f=n(206),c=n(90),d=n(2),h=[].push,v=Math.min,p=!d((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(s(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,o);for(var l,a,u,f=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,p=new RegExp(t.source,d+"g");(l=c.call(p,i))&&!((a=p.lastIndex)>v&&(f.push(i.slice(v,l.index)),l.length>1&&l.index<i.length&&h.apply(f,l.slice(1)),u=l[0].length,v=a,f.length>=o));)p.lastIndex===l.index&&p.lastIndex++;return v===i.length?!u&&p.test("")||f.push(""):f.push(i.slice(v)),f.length>o?f.slice(0,o):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=s(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,r,n):i.call(String(r),e,n)},function(t,r){var s=n(i,t,this,r,i!==e);if(s.done)return s.value;var c=o(t),d=String(this),h=l(c,RegExp),g=c.unicode,y=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(p?"y":"g"),w=new h(p?c:"^(?:"+c.source+")",y),m=void 0===r?4294967295:r>>>0;if(0===m)return[];if(0===d.length)return null===f(w,d)?[d]:[];for(var x=0,b=0,_=[];b<d.length;){w.lastIndex=p?b:0;var E,S=f(w,p?d:d.slice(b));if(null===S||(E=v(u(w.lastIndex+(p?0:b)),d.length))===x)b=a(d,b,g);else{if(_.push(d.slice(x,b)),_.length===m)return _;for(var k=1;k<=S.length-1;k++)if(_.push(S[k]),_.length===m)return _;b=x=E}}return _.push(d.slice(x)),_}]}),!p)},405:function(t,e,n){var i=n(8),r=n(60),o=n(3)("species");t.exports=function(t,e){var n,s=i(t).constructor;return void 0===s||null==(n=i(s)[o])?e:r(n)}},414:function(t,e,n){"use strict";var i=n(16),r=n(129),o=n(19);t.exports=function(t){for(var e=i(this),n=o(e.length),s=arguments.length,l=r(s>1?arguments[1]:void 0,n),a=s>2?arguments[2]:void 0,u=void 0===a?n:r(a,n);u>l;)e[l++]=t;return e}},451:function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},483:function(t,e,n){"use strict";var i=n(38),r=n(10),o=n(3),s=n(9),l=o("species");t.exports=function(t){var e=i(t),n=r.f;s&&e&&!e[l]&&n(e,l,{configurable:!0,get:function(){return this}})}},487:function(t,e,n){var i=n(8),r=n(218),o=n(19),s=n(130),l=n(215),a=n(217),u=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var f,c,d,h,v,p,g,y=n&&n.that,w=!(!n||!n.AS_ENTRIES),m=!(!n||!n.IS_ITERATOR),x=!(!n||!n.INTERRUPTED),b=s(e,y,1+w+x),_=function(t){return f&&a(f),new u(!0,t)},E=function(t){return w?(i(t),x?b(t[0],t[1],_):b(t[0],t[1])):x?b(t,_):b(t)};if(m)f=t;else{if("function"!=typeof(c=l(t)))throw TypeError("Target is not iterable");if(r(c)){for(d=0,h=o(t.length);h>d;d++)if((v=E(t[d]))&&v instanceof u)return v;return new u(!1)}f=c.call(t)}for(p=f.next;!(g=p.call(f)).done;){try{v=E(g.value)}catch(t){throw a(f),t}if("object"==typeof v&&v&&v instanceof u)return v}return new u(!1)}},536:function(t,e,n){var i=n(23);t.exports=function(t,e,n){for(var r in e)i(t,r,e[r],n);return t}},584:function(t,e,n){"use strict";var i=n(1),r=n(4),o=n(131),s=n(23),l=n(213),a=n(487),u=n(451),f=n(5),c=n(2),d=n(219),h=n(91),v=n(214);t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),y=p?"set":"add",w=r[t],m=w&&w.prototype,x=w,b={},_=function(t){var e=m[t];s(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!f(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!f(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(o(t,"function"!=typeof w||!(g||m.forEach&&!c((function(){(new w).entries().next()})))))x=n.getConstructor(e,t,p,y),l.REQUIRED=!0;else if(o(t,!0)){var E=new x,S=E[y](g?{}:-0,1)!=E,k=c((function(){E.has(1)})),C=d((function(t){new w(t)})),I=!g&&c((function(){for(var t=new w,e=5;e--;)t[y](e,e);return!t.has(-0)}));C||((x=e((function(e,n){u(e,x,t);var i=v(new w,e,x);return null!=n&&a(n,i[y],{that:i,AS_ENTRIES:p}),i}))).prototype=m,m.constructor=x),(k||I)&&(_("delete"),_("has"),p&&_("get")),(I||S)&&_(y),g&&m.clear&&delete m.clear}return b[t]=x,i({global:!0,forced:x!=w},b),h(x,t),g||n.setStrong(x,t,p),x}},585:function(t,e,n){"use strict";var i=n(10).f,r=n(39),o=n(536),s=n(130),l=n(451),a=n(487),u=n(138),f=n(483),c=n(9),d=n(213).fastKey,h=n(61),v=h.set,p=h.getterFor;t.exports={getConstructor:function(t,e,n,u){var f=t((function(t,i){l(t,f,e),v(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),c||(t.size=0),null!=i&&a(i,t[u],{that:t,AS_ENTRIES:n})})),h=p(e),g=function(t,e,n){var i,r,o=h(t),s=y(t,e);return s?s.value=n:(o.last=s={index:r=d(e,!0),key:e,value:n,previous:i=o.last,next:void 0,removed:!1},o.first||(o.first=s),i&&(i.next=s),c?o.size++:t.size++,"F"!==r&&(o.index[r]=s)),t},y=function(t,e){var n,i=h(t),r=d(e);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==e)return n};return o(f.prototype,{clear:function(){for(var t=h(this),e=t.index,n=t.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete e[n.index],n=n.next;t.first=t.last=void 0,c?t.size=0:this.size=0},delete:function(t){var e=h(this),n=y(this,t);if(n){var i=n.next,r=n.previous;delete e.index[n.index],n.removed=!0,r&&(r.next=i),i&&(i.previous=r),e.first==n&&(e.first=i),e.last==n&&(e.last=r),c?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=h(this),i=s(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(i(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!y(this,t)}}),o(f.prototype,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),c&&i(f.prototype,"size",{get:function(){return h(this).size}}),f},setStrong:function(t,e,n){var i=e+" Iterator",r=p(e),o=p(i);u(t,e,(function(t,e){v(this,{type:i,target:t,state:r(t),kind:e,last:void 0})}),(function(){for(var t=o(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),f(e)}}},674:function(t,e,n){},696:function(t,e,n){"use strict";var i=n(584),r=n(585);t.exports=i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},831:function(t,e,n){},832:function(t,e,n){"use strict";n(674)},834:function(t,e,n){"use strict";n(378),n(200);var i=n(400),r=n(472),o=n(53),s={name:"MyDvContent",props:{padding:String},computed:{styles:function(){return{padding:this.padding}}}},l=(n(832),n(18)),a=Object(l.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-dv-content",style:this.styles},[this._t("default")],2)}),[],!1,null,null,null).exports,u=Object(o.a)(a),f=n(670);n(831),e.a={mixins:[r.a,f.a],inheritAttrs:!1,components:{Box:i.a,BoxContent:u},props:{fill:{type:String,default:function(){var t,e;return(null==this||null===(t=this.page)||void 0===t||null===(e=t.settings)||void 0===e?void 0:e.fill)||"transparent"}},reverse:Boolean,opacity:{type:Number,default:1}},computed:{classes:function(){return{"my-dv-border":!0,"is-reverse":this.reverse}},styles:function(){return{opacity:this.opacity}}}}}}]);