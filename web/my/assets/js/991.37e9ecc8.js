(window.webpackJsonp=window.webpackJsonp||[]).push([[991],{1109:function(e,t,n){},1699:function(e,t,n){},2415:function(e,t,n){"use strict";var r=n(1699);n.n(r).a},2833:function(e,t,n){"use strict";n.r(t);n(1109),n(355);var r=n(610),o=n.n(r),i=(n(769),n(123),n(773)),a=n(0),s={components:{MyAvatar:i.a}};a.default.use(o.a),a.default.use(i.a);var u=s,c=(n(2415),n(18)),l=Object(c.a)(u,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("el-badge",{attrs:{value:"9"}},[t("my-avatar",{attrs:{icon:"el-icon-user",size:"large",shape:"square"}})],1),this._v(" "),t("el-badge",{attrs:{"is-dot":""}},[t("my-avatar",{attrs:{icon:"el-icon-user",size:"large",shape:"square"}})],1)],1)}),[],!1,null,"fd63c8f4",null);t.default=l.exports},355:function(e,t,n){},610:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=107)}({0:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a,s){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:c}}n.d(t,"a",(function(){return r}))},107:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"el-badge"},[e._t("default"),n("transition",{attrs:{name:"el-zoom-in-center"}},[n("sup",{directives:[{name:"show",rawName:"v-show",value:!e.hidden&&(e.content||0===e.content||e.isDot),expression:"!hidden && (content || content === 0 || isDot)"}],staticClass:"el-badge__content",class:["el-badge__content--"+e.type,{"is-fixed":e.$slots.default,"is-dot":e.isDot}],domProps:{textContent:e._s(e.content)}})])],2)};r._withStripped=!0;var o={name:"ElBadge",props:{value:[String,Number],max:Number,isDot:Boolean,hidden:Boolean,type:{type:String,validator:function(e){return["primary","success","warning","info","danger"].indexOf(e)>-1}}},computed:{content:function(){if(!this.isDot){var e=this.value,t=this.max;return"number"==typeof e&&"number"==typeof t&&t<e?t+"+":e}}}},i=n(0),a=Object(i.a)(o,r,[],!1,null,null,null);a.options.__file="packages/badge/src/main.vue";var s=a.exports;s.install=function(e){e.component(s.name,s)};t.default=s}})}}]);