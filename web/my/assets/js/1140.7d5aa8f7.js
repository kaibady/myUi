(window.webpackJsonp=window.webpackJsonp||[]).push([[1140],{2861:function(e,t,n){"use strict";n.r(t);n(758),n(362);var o=n(742),r=n.n(o),i=(n(377),n(374)),s=n.n(i),l=n(0);l.default.use(s.a),l.default.use(r.a);var a={data:function(){return{visible:!1}}},c=n(18),u=Object(c.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-popover",{attrs:{placement:"top-start",title:"标题",width:"200",trigger:"hover",content:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}},[n("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("hover 激活")])],1),e._v(" "),n("el-popover",{attrs:{placement:"bottom",title:"标题",width:"200",trigger:"click",content:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}},[n("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("click 激活")])],1),e._v(" "),n("el-popover",{ref:"popover",attrs:{placement:"right",title:"标题",width:"200",trigger:"focus",content:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"}}),e._v(" "),n("el-button",{directives:[{name:"popover",rawName:"v-popover:popover",arg:"popover"}]},[e._v("focus 激活")]),e._v(" "),n("el-popover",{attrs:{placement:"bottom",title:"标题",width:"200",trigger:"manual",content:"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("el-button",{attrs:{slot:"reference"},on:{click:function(t){e.visible=!e.visible}},slot:"reference"},[e._v("手动激活")])],1)],1)}),[],!1,null,null,null);t.default=u.exports},362:function(e,t,n){},374:function(e,t,n){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=97)}({0:function(e,t,n){"use strict";function o(e,t,n,o,r,i,s,l){var a,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=a):r&&(a=l?function(){r.call(this,this.$root.$options.shadowRoot)}:r),a)if(c.functional){c._injectStyles=a;var u=c.render;c.render=function(e,t){return a.call(t),u(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,a):[a]}return{exports:e,options:c}}n.d(t,"a",(function(){return o}))},97:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"el-button",class:[e.type?"el-button--"+e.type:"",e.buttonSize?"el-button--"+e.buttonSize:"",{"is-disabled":e.buttonDisabled,"is-loading":e.loading,"is-plain":e.plain,"is-round":e.round,"is-circle":e.circle}],attrs:{disabled:e.buttonDisabled||e.loading,autofocus:e.autofocus,type:e.nativeType},on:{click:e.handleClick}},[e.loading?n("i",{staticClass:"el-icon-loading"}):e._e(),e.icon&&!e.loading?n("i",{class:e.icon}):e._e(),e.$slots.default?n("span",[e._t("default")],2):e._e()])};o._withStripped=!0;var r={name:"ElButton",inject:{elForm:{default:""},elFormItem:{default:""}},props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean},computed:{_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},buttonSize:function(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size},buttonDisabled:function(){return this.disabled||(this.elForm||{}).disabled}},methods:{handleClick:function(e){this.$emit("click",e)}}},i=n(0),s=Object(i.a)(r,o,[],!1,null,null,null);s.options.__file="packages/button/src/button.vue";var l=s.exports;l.install=function(e){e.component(l.name,l)};t.default=l}})},377:function(e,t,n){},742:function(e,t,n){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=74)}({0:function(e,t,n){"use strict";function o(e,t,n,o,r,i,s,l){var a,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=a):r&&(a=l?function(){r.call(this,this.$root.$options.shadowRoot)}:r),a)if(c.functional){c._injectStyles=a;var u=c.render;c.render=function(e,t){return a.call(t),u(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,a):[a]}return{exports:e,options:c}}n.d(t,"a",(function(){return o}))},2:function(e,t){e.exports=n(364)},3:function(e,t){e.exports=n(366)},5:function(e,t){e.exports=n(392)},7:function(e,t){e.exports=n(0)},74:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("transition",{attrs:{name:e.transition},on:{"after-enter":e.handleAfterEnter,"after-leave":e.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.disabled&&e.showPopper,expression:"!disabled && showPopper"}],ref:"popper",staticClass:"el-popover el-popper",class:[e.popperClass,e.content&&"el-popover--plain"],style:{width:e.width+"px"},attrs:{role:"tooltip",id:e.tooltipId,"aria-hidden":e.disabled||!e.showPopper?"true":"false"}},[e.title?n("div",{staticClass:"el-popover__title",domProps:{textContent:e._s(e.title)}}):e._e(),e._t("default",[e._v(e._s(e.content))])],2)]),n("span",{ref:"wrapper",staticClass:"el-popover__reference-wrapper"},[e._t("reference")],2)],1)};o._withStripped=!0;var r=n(5),i=n.n(r),s=n(2),l=n(3),a={name:"ElPopover",mixins:[i.a],props:{trigger:{type:String,default:"click",validator:function(e){return["click","focus","hover","manual"].indexOf(e)>-1}},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:200},title:String,disabled:Boolean,content:String,reference:{},popperClass:String,width:{},visibleArrow:{default:!0},arrowOffset:{type:Number,default:0},transition:{type:String,default:"fade-in-linear"},tabindex:{type:Number,default:0}},computed:{tooltipId:function(){return"el-popover-"+Object(l.generateId)()}},watch:{showPopper:function(e){this.disabled||(e?this.$emit("show"):this.$emit("hide"))}},mounted:function(){var e=this,t=this.referenceElm=this.reference||this.$refs.reference,n=this.popper||this.$refs.popper;!t&&this.$refs.wrapper.children&&(t=this.referenceElm=this.$refs.wrapper.children[0]),t&&(Object(s.addClass)(t,"el-popover__reference"),t.setAttribute("aria-describedby",this.tooltipId),t.setAttribute("tabindex",this.tabindex),n.setAttribute("tabindex",0),"click"!==this.trigger&&(Object(s.on)(t,"focusin",(function(){e.handleFocus();var n=t.__vue__;n&&"function"==typeof n.focus&&n.focus()})),Object(s.on)(n,"focusin",this.handleFocus),Object(s.on)(t,"focusout",this.handleBlur),Object(s.on)(n,"focusout",this.handleBlur)),Object(s.on)(t,"keydown",this.handleKeydown),Object(s.on)(t,"click",this.handleClick)),"click"===this.trigger?(Object(s.on)(t,"click",this.doToggle),Object(s.on)(document,"click",this.handleDocumentClick)):"hover"===this.trigger?(Object(s.on)(t,"mouseenter",this.handleMouseEnter),Object(s.on)(n,"mouseenter",this.handleMouseEnter),Object(s.on)(t,"mouseleave",this.handleMouseLeave),Object(s.on)(n,"mouseleave",this.handleMouseLeave)):"focus"===this.trigger&&(this.tabindex<0&&console.warn("[Element Warn][Popover]a negative taindex means that the element cannot be focused by tab key"),t.querySelector("input, textarea")?(Object(s.on)(t,"focusin",this.doShow),Object(s.on)(t,"focusout",this.doClose)):(Object(s.on)(t,"mousedown",this.doShow),Object(s.on)(t,"mouseup",this.doClose)))},beforeDestroy:function(){this.cleanup()},deactivated:function(){this.cleanup()},methods:{doToggle:function(){this.showPopper=!this.showPopper},doShow:function(){this.showPopper=!0},doClose:function(){this.showPopper=!1},handleFocus:function(){Object(s.addClass)(this.referenceElm,"focusing"),"click"!==this.trigger&&"focus"!==this.trigger||(this.showPopper=!0)},handleClick:function(){Object(s.removeClass)(this.referenceElm,"focusing")},handleBlur:function(){Object(s.removeClass)(this.referenceElm,"focusing"),"click"!==this.trigger&&"focus"!==this.trigger||(this.showPopper=!1)},handleMouseEnter:function(){var e=this;clearTimeout(this._timer),this.openDelay?this._timer=setTimeout((function(){e.showPopper=!0}),this.openDelay):this.showPopper=!0},handleKeydown:function(e){27===e.keyCode&&"manual"!==this.trigger&&this.doClose()},handleMouseLeave:function(){var e=this;clearTimeout(this._timer),this.closeDelay?this._timer=setTimeout((function(){e.showPopper=!1}),this.closeDelay):this.showPopper=!1},handleDocumentClick:function(e){var t=this.reference||this.$refs.reference,n=this.popper||this.$refs.popper;!t&&this.$refs.wrapper.children&&(t=this.referenceElm=this.$refs.wrapper.children[0]),this.$el&&t&&!this.$el.contains(e.target)&&!t.contains(e.target)&&n&&!n.contains(e.target)&&(this.showPopper=!1)},handleAfterEnter:function(){this.$emit("after-enter")},handleAfterLeave:function(){this.$emit("after-leave"),this.doDestroy()},cleanup:function(){(this.openDelay||this.closeDelay)&&clearTimeout(this._timer)}},destroyed:function(){var e=this.reference;Object(s.off)(e,"click",this.doToggle),Object(s.off)(e,"mouseup",this.doClose),Object(s.off)(e,"mousedown",this.doShow),Object(s.off)(e,"focusin",this.doShow),Object(s.off)(e,"focusout",this.doClose),Object(s.off)(e,"mousedown",this.doShow),Object(s.off)(e,"mouseup",this.doClose),Object(s.off)(e,"mouseleave",this.handleMouseLeave),Object(s.off)(e,"mouseenter",this.handleMouseEnter),Object(s.off)(document,"click",this.handleDocumentClick)}},c=n(0),u=Object(c.a)(a,o,[],!1,null,null,null);u.options.__file="packages/popover/src/main.vue";var f=u.exports,d=function(e,t,n){var o=t.expression?t.value:t.arg,r=n.context.$refs[o];r&&(Array.isArray(r)?r[0].$refs.reference=e:r.$refs.reference=e)},p={bind:function(e,t,n){d(e,t,n)},inserted:function(e,t,n){d(e,t,n)}},h=n(7);n.n(h).a.directive("popover",p),f.install=function(e){e.directive("popover",p),e.component(f.name,f)},f.directive=p;t.default=f}})},758:function(e,t,n){}}]);