(window.webpackJsonp=window.webpackJsonp||[]).push([[1281],{3077:function(t,e,n){"use strict";n.r(e);n(2332),n(117);var o=n(2507),i=(n(419),n(367),n(373)),r=n.n(i),a=n(0),s={data:function(){return{tags:[],options:{maxSpeed:.05,minSpeed:.01,textColour:null,textHeight:25,fadeIn:800,depth:.97,minBrightness:.2,wheelZoom:!1,reverse:!0,shuffleTags:!0,shadowOffset:[1,1],stretchX:4.7,initial:[0,.1],clickToFront:600}}},methods:{createTags:function(t){for(var e=[],n=1;n<t;n++)e.push({text:"Tag "+n,color:"#ff0000"});return e},pause:function(){this.$refs.tag.pause()},resume:function(){this.$refs.tag.resume()},reload:function(){this.$refs.tag.reload()},update:function(){this.$refs.tag.update()},tagToFront:function(){this.$refs.tag.tagToFront({index:5,active:1})},rotateTag:function(){this.$refs.tag.rotateTag({index:2,lat:30,lng:-45})},setSpeed:function(){this.$refs.tag.setSpeed([.5,-.25])}},mounted:function(){var t=this;setTimeout((function(){t.tags=t.createTags(20)}),100)}};a.default.use(r.a),a.default.use(o.a);var u=s,l=n(19),c=Object(l.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"text-align":"center"}},[n("div",{staticStyle:{height:"400px"}},[n("my-tag-canvas",{ref:"tag",attrs:{data:t.tags,options:t.options}})],1),t._v(" "),n("el-button",{on:{click:t.pause}},[t._v("pause")]),t._v(" "),n("el-button",{on:{click:t.resume}},[t._v("resume")]),t._v(" "),n("el-button",{on:{click:t.reload}},[t._v("reload")]),t._v(" "),n("el-button",{on:{click:t.update}},[t._v("update")]),t._v(" "),n("el-button",{on:{click:t.tagToFront}},[t._v("tagToFront")]),t._v(" "),n("el-button",{on:{click:t.rotateTag}},[t._v("rotateTag")]),t._v(" "),n("el-button",{on:{click:t.setSpeed}},[t._v("setSpeed")])],1)}),[],!1,null,null,null);e.default=c.exports},367:function(t,e,n){},373:function(t,e,n){t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=97)}({0:function(t,e,n){"use strict";function o(t,e,n,o,i,r,a,s){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(t,e){return u.call(e),c(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:l}}n.d(e,"a",(function(){return o}))},97:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"el-button",class:[t.type?"el-button--"+t.type:"",t.buttonSize?"el-button--"+t.buttonSize:"",{"is-disabled":t.buttonDisabled,"is-loading":t.loading,"is-plain":t.plain,"is-round":t.round,"is-circle":t.circle}],attrs:{disabled:t.buttonDisabled||t.loading,autofocus:t.autofocus,type:t.nativeType},on:{click:t.handleClick}},[t.loading?n("i",{staticClass:"el-icon-loading"}):t._e(),t.icon&&!t.loading?n("i",{class:t.icon}):t._e(),t.$slots.default?n("span",[t._t("default")],2):t._e()])};o._withStripped=!0;var i={name:"ElButton",inject:{elForm:{default:""},elFormItem:{default:""}},props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean},computed:{_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},buttonSize:function(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size},buttonDisabled:function(){return this.disabled||(this.elForm||{}).disabled}},methods:{handleClick:function(t){this.$emit("click",t)}}},r=n(0),a=Object(r.a)(i,o,[],!1,null,null,null);a.options.__file="packages/button/src/button.vue";var s=a.exports;s.install=function(t){t.component(s.name,s)};e.default=s}})},419:function(t,e,n){}}]);