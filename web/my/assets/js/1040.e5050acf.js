(window.webpackJsonp=window.webpackJsonp||[]).push([[1040],{3059:function(t,e,n){"use strict";n.r(e);var i=n(956),o=n(450),r=(n(631),n(362),n(571)),s=n.n(r),a=n(0);a.default.use(s.a),a.default.use(o.a),a.default.use(i.a);var l={},p=n(18),u=Object(p.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("my-map",[e("my-map-html",{attrs:{position:[113.261999,23.130592]}},[e("el-card",[this._v("HTML覆盖物")])],1)],1)}),[],!1,null,null,null);e.default=u.exports},362:function(t,e,n){},571:function(t,e,n){t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=103)}({0:function(t,e,n){"use strict";function i(t,e,n,i,o,r,s,a){var l,p="function"==typeof t?t.options:t;if(e&&(p.render=e,p.staticRenderFns=n,p._compiled=!0),i&&(p.functional=!0),r&&(p._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},p._ssrRegister=l):o&&(l=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(p.functional){p._injectStyles=l;var u=p.render;p.render=function(t,e){return l.call(e),u(t,e)}}else{var d=p.beforeCreate;p.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:p}}n.d(e,"a",(function(){return i}))},103:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"el-card",class:t.shadow?"is-"+t.shadow+"-shadow":"is-always-shadow"},[t.$slots.header||t.header?n("div",{staticClass:"el-card__header"},[t._t("header",[t._v(t._s(t.header))])],2):t._e(),n("div",{staticClass:"el-card__body",style:t.bodyStyle},[t._t("default")],2)])};i._withStripped=!0;var o={name:"ElCard",props:{header:{},bodyStyle:{},shadow:{type:String}}},r=n(0),s=Object(r.a)(o,i,[],!1,null,null,null);s.options.__file="packages/card/src/main.vue";var a=s.exports;a.install=function(t){t.component(a.name,a)};e.default=a}})},631:function(t,e,n){},795:function(t,e,n){"use strict";e.a={BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",CENTER_LEFT:"center-left",CENTER_CENTER:"center-center",CENTER_RIGHT:"center-right",TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right"}},802:function(t,e,n){"use strict";var i,o=n(446),r=n(762),s=n(795),a=n(599),l=n(369),p=n(443),u=n(474),d=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c="element",f="map",h="offset",y="position",m="positioning",v=function(t){function e(e){var n=t.call(this)||this;n.options=e,n.id=e.id,n.insertFirst=void 0===e.insertFirst||e.insertFirst,n.stopEvent=void 0===e.stopEvent||e.stopEvent,n.element=document.createElement("div"),n.element.className=void 0!==e.className?e.className:"ol-overlay-container "+a.d,n.element.style.position="absolute",n.element.style.pointerEvents="auto";var i=e.autoPan;return i&&"object"!=typeof i&&(i={animation:e.autoPanAnimation,margin:e.autoPanMargin}),n.autoPan=i||!1,n.rendered={transform_:"",visible:!0},n.mapPostrenderListenerKey=null,n.addEventListener(Object(o.b)(c),n.handleElementChanged),n.addEventListener(Object(o.b)(f),n.handleMapChanged),n.addEventListener(Object(o.b)(h),n.handleOffsetChanged),n.addEventListener(Object(o.b)(y),n.handlePositionChanged),n.addEventListener(Object(o.b)(m),n.handlePositioningChanged),void 0!==e.element&&n.setElement(e.element),n.setOffset(void 0!==e.offset?e.offset:[0,0]),n.setPositioning(void 0!==e.positioning?e.positioning:s.a.TOP_LEFT),void 0!==e.position&&n.setPosition(e.position),n}return d(e,t),e.prototype.getElement=function(){return this.get(c)},e.prototype.getId=function(){return this.id},e.prototype.getMap=function(){return this.get(f)},e.prototype.getOffset=function(){return this.get(h)},e.prototype.getPosition=function(){return this.get(y)},e.prototype.getPositioning=function(){return this.get(m)},e.prototype.handleElementChanged=function(){Object(u.d)(this.element);var t=this.getElement();t&&this.element.appendChild(t)},e.prototype.handleMapChanged=function(){this.mapPostrenderListenerKey&&(Object(u.e)(this.element),Object(p.c)(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);var t=this.getMap();if(t){this.mapPostrenderListenerKey=Object(p.a)(t,r.a.POSTRENDER,this.render,this),this.updatePixelPosition();var e=this.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this.insertFirst?e.insertBefore(this.element,e.childNodes[0]||null):e.appendChild(this.element),this.performAutoPan()}},e.prototype.render=function(){this.updatePixelPosition()},e.prototype.handleOffsetChanged=function(){this.updatePixelPosition()},e.prototype.handlePositionChanged=function(){this.updatePixelPosition(),this.performAutoPan()},e.prototype.handlePositioningChanged=function(){this.updatePixelPosition()},e.prototype.setElement=function(t){this.set(c,t)},e.prototype.setMap=function(t){this.set(f,t)},e.prototype.setOffset=function(t){this.set(h,t)},e.prototype.setPosition=function(t){this.set(y,t)},e.prototype.performAutoPan=function(){this.autoPan&&this.panIntoView(this.autoPan)},e.prototype.panIntoView=function(t){var e=this.getMap();if(e&&e.getTargetElement()&&this.get(y)){var n=this.getRect(e.getTargetElement(),e.getSize()),i=this.getElement(),o=this.getRect(i,[Object(u.c)(i),Object(u.b)(i)]),r=t||{},s=void 0===r.margin?20:r.margin;if(!Object(l.g)(n,o)){var a=o[0]-n[0],p=n[2]-o[2],d=o[1]-n[1],c=n[3]-o[3],f=[0,0];if(a<0?f[0]=a-s:p<0&&(f[0]=Math.abs(p)+s),d<0?f[1]=d-s:c<0&&(f[1]=Math.abs(c)+s),0!==f[0]||0!==f[1]){var h=e.getView().getCenterInternal(),m=e.getPixelFromCoordinateInternal(h),v=[m[0]+f[0],m[1]+f[1]],g=r.animation||{};e.getView().animateInternal({center:e.getCoordinateFromPixelInternal(v),duration:g.duration,easing:g.easing})}}}},e.prototype.getRect=function(t,e){var n=t.getBoundingClientRect(),i=n.left+window.pageXOffset,o=n.top+window.pageYOffset;return[i,o,i+e[0],o+e[1]]},e.prototype.setPositioning=function(t){this.set(m,t)},e.prototype.setVisible=function(t){this.rendered.visible!==t&&(this.element.style.display=t?"":"none",this.rendered.visible=t)},e.prototype.updatePixelPosition=function(){var t=this.getMap(),e=this.getPosition();if(t&&t.isRendered()&&e){var n=t.getPixelFromCoordinate(e),i=t.getSize();this.updateRenderedPosition(n,i)}else this.setVisible(!1)},e.prototype.updateRenderedPosition=function(t,e){var n=this.element.style,i=this.getOffset(),o=this.getPositioning();this.setVisible(!0);var r=Math.round(t[0]+i[0])+"px",a=Math.round(t[1]+i[1])+"px",l="0%",p="0%";o==s.a.BOTTOM_RIGHT||o==s.a.CENTER_RIGHT||o==s.a.TOP_RIGHT?l="-100%":o!=s.a.BOTTOM_CENTER&&o!=s.a.CENTER_CENTER&&o!=s.a.TOP_CENTER||(l="-50%"),o==s.a.BOTTOM_LEFT||o==s.a.BOTTOM_CENTER||o==s.a.BOTTOM_RIGHT?p="-100%":o!=s.a.CENTER_LEFT&&o!=s.a.CENTER_CENTER&&o!=s.a.CENTER_RIGHT||(p="-50%");var u="translate("+l+", "+p+") translate("+r+", "+a+")";this.rendered.transform_!=u&&(this.rendered.transform_=u,n.transform=u,n.msTransform=u)},e.prototype.getOptions=function(){return this.options},e}(o.a);e.a=v},816:function(t,e,n){"use strict";n(84),n(200);var i=n(52),o=n(802);e.a={name:"MyMapHtml",inject:["myMap"],props:{id:[Number,String],offset:{type:Array,default:function(){return[0,0]}},position:Array,positioning:{type:String,default:"center-center"},stopEvent:{type:Boolean,default:!0},insertFirst:Boolean,autoPan:{type:Boolean,default:!1},autoPanAnimation:{type:Object,default:function(){return{}}},autoPanMargin:{type:Number,default:20},visible:{type:Boolean,default:!0}},render:function(){var t=arguments[0];return t("div",{class:"my-map-html",style:this.styles,on:Object(i.a)({},this.$listeners)},[this.$slots.default])},computed:{styles:function(){return{cursor:this.$listeners.click?"pointer":""}}},watch:{$props:{deep:!0,handler:function(){try{this.dispose(),this.init()}catch(t){}}}},methods:{init:function(){if(this.$el){var t=Object(i.a)(Object(i.a)({},this.$props),{},{element:this.$el});this.overlay=new o.a(t);try{this.myMap.map.addOverlay(this.overlay),this.setPosition(this.visible?this.position:null)}catch(t){}}},setPosition:function(t){this.overlay&&this.overlay.setPosition(this.visible?t:null)},dispose:function(){this.overlay&&this.myMap&&this.myMap.map&&this.myMap.map.removeOverlay(this.overlay)}},mounted:function(){this.myMap.mapReady(this.init)},beforeDestroy:function(){this.dispose()}}},956:function(t,e,n){"use strict";var i=n(53),o=n(816);e.a=Object(i.a)(o.a)}}]);