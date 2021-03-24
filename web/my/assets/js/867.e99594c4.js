(window.webpackJsonp=window.webpackJsonp||[]).push([[867],{1294:function(t,e,n){},1472:function(t,e,n){"use strict";var i=n(47),r=n(475),o=n.n(r),s=n(46),a=(n(201),n(78)),l=n(121),c=n(432),u=n.n(c),d=(n(118),n(79),n(202),n(31),n(386),n(120)),h={components:{Tag:u.a},props:{value:[String,Number,Array],options:{type:Array,default:function(){return[]}},keyMap:{type:Object,default:function(){return{label:"label",disabled:"disabled",value:"value"}}},collapsible:{type:Boolean,default:!1},collapsed:{type:Boolean,default:!0},checkAll:Boolean,multiple:Boolean,tag:Boolean,size:{type:String,default:"",validator:function(t){return["medium","small","mini",""].includes(t)}},disabled:Boolean,readonly:Boolean,min:{type:Number,default:0},max:{type:Number,default:1/0}},data:function(){return{currentCollapsed:!0,checked:[],isAll:!1}},computed:{optionsComputed:function(){var t=this.keyMap,e=t.value,n=t.label,i=t.disabled;return this.options.map((function(t){return"object"===Object(l.a)(t)?{label:t[n],disabled:t[i],value:t[e]||t[n]}:{label:t,disabled:!1,value:t}}))},classes:function(){var t;return t={"my-tag-select":!0},Object(a.a)(t,"my-tag-select--".concat(this.size),!!this.size),Object(a.a)(t,"my-tag-select--text",!this.tag),Object(a.a)(t,"is-collapsed",this.collapsible&&this.currentCollapsed),Object(a.a)(t,"is-disabled",this.disabled),Object(a.a)(t,"is-readonly",this.readonly),t}},watch:{collapsed:{immediate:!0,handler:function(t){this.currentCollapsed=this.collapsible&&t}},value:{immediate:!0,handler:function(t,e){Object(d.e)(t,e)||(this.multiple?this.checked=t?[].concat(t):[]:this.checked=t)}},checked:function(t){this.$emit("input",t),this.$emit("change",t),this.isAll=t.length===this.optionsComputed.filter((function(t){return!t.disabled})).length}},methods:{isChecked:function(t){return this.multiple?!!this.checked.find((function(e){return e===t.value})):this.checked===t.value},handleChecked:function(t){if(!(t.disabled||this.readonly||this.disabled))if(this.multiple){var e=this.checked.length;this.isChecked(t)?e>this.min&&(this.checked=this.checked.filter((function(e){return e!==t.value}))):e<this.max&&this.checked.push(t.value)}else this.checked=t.value},toggleCollapse:function(){this.currentCollapsed=!this.currentCollapsed,this.$emit("collapsed",this.currentCollapsed)},handleCheckAll:function(){this.readonly||this.disabled||(this.isAll?this.checked=[]:this.checked=this.optionsComputed.filter((function(t){return!t.disabled})).map((function(t){return t.value})))}}},f=n(20),m=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classes},[t.tag?[t.multiple&&t.checkAll?n("Tag",{staticClass:"my-tag-select__tag",attrs:{type:"primary",size:t.size,effect:t.isAll?"dark":"light"},on:{click:t.handleCheckAll}},[t._v("全部\n    ")]):t._e(),t._v(" "),t._l(t.optionsComputed,(function(e,i){return n("Tag",{key:i,class:{"my-tag-select__tag":!0,"is-disabled":e.disabled,"is-checked":t.isChecked(e)},attrs:{type:"primary",size:t.size,effect:t.isChecked(e)?"dark":"light"},on:{click:function(n){return t.handleChecked(e)}}},[t._t("default",[t._v(t._s(e.label))],{item:e,index:i})],2)}))]:[t.multiple&&t.checkAll?n("span",{class:{"my-tag-select__tag":!0,"is-checked":t.isAll},on:{click:t.handleCheckAll}},[t._v("全部")]):t._e(),t._v(" "),t._l(t.optionsComputed,(function(e,i){return n("span",{key:i,class:{"my-tag-select__tag":!0,"is-disabled":e.disabled,"is-checked":t.isChecked(e)},on:{click:function(n){return t.handleChecked(e)}}},[t._t("default",[t._v(t._s(e.label))],{item:e,index:i})],2)}))],t._v(" "),t.collapsible?n("a",{staticClass:"my-tag-select__expand",on:{click:t.toggleCollapse}},[t.currentCollapsed?[t._v("\n      展开 "),n("i",{staticClass:"el-icon-arrow-down"})]:[t._v("\n      收起 "),n("i",{staticClass:"el-icon-arrow-up"})]],2):t._e()],2)}),[],!1,null,null,null).exports,p={name:"MyTagSelect",mixins:[n(521).a],components:{TagSelect:m},props:{value:[Array,String,Number]},computed:{inputSize:function(){return this.size?this.size:this.myForm&&this.myForm.$attrs.size||""}},methods:{getDefaultValue:function(){return this.$attrs.multiple?[]:""},handleChange:function(t){t&&t.length&&this.clearValidate(),this.$emit("change",t)}},render:function(){var t=this,e=arguments[0],n=this.$scopedSlots.default?{default:function(e){return t.$scopedSlots.default(e)}}:null,i=e(m,o()([{ref:"comp"},{props:Object(s.a)(Object(s.a)({},this.innerProps),{},{size:this.inputSize}),on:Object(s.a)(Object(s.a)({},this.$listeners),{},{change:this.handleChange}),scopedSlots:n},{attrs:{size:this.inputSize,options:this.options,keyMap:this.keyMap},model:{value:t.fieldValue,callback:function(e){t.fieldValue=e}}}]));return this.renderComponent(i)}};e.a=Object(i.a)(p)},3380:function(t,e,n){"use strict";n.r(e);n(1294),n(119);var i=n(1472),r=(n(586),n(589)),o=(n(79),n(0)),s={data:function(){return{fruit:["苹果","香蕉","雪梨","草莓","水蜜桃","桔子","椰子","葡萄","海棠","枇杷","山楂","樱桃"].map((function(t){return{label:t,value:t}}))}},methods:{handleSubmit:function(t){alert("submit: ".concat(JSON.stringify(t)))}}};o.default.use(r.a),o.default.use(i.a);var a=s,l=n(20),c=Object(l.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"600px"}},[n("my-form",{on:{submit:t.handleSubmit}},[n("my-tag-select",{attrs:{name:"tag1",options:t.fruit,props:{tag:!0,collapsible:!0}}}),t._v(" "),n("my-tag-select",{attrs:{name:"tag2",size:"medium",options:t.fruit,props:{tag:!0,collapsible:!0}}}),t._v(" "),n("my-tag-select",{attrs:{name:"tag3",size:"small",options:t.fruit,props:{tag:!0,collapsible:!0}}}),t._v(" "),n("my-tag-select",{attrs:{name:"tag4",size:"mini",options:t.fruit,props:{tag:!0,collapsible:!0}}})],1)],1)}),[],!1,null,null,null);e.default=c.exports},369:function(t,e,n){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=f,e.addClass=function(t,e){if(!t)return;for(var n=t.className,i=(e||"").split(" "),r=0,o=i.length;r<o;r++){var s=i[r];s&&(t.classList?t.classList.add(s):f(t,s)||(n+=" "+s))}t.classList||(t.className=n)},e.removeClass=function(t,e){if(!t||!e)return;for(var n=e.split(" "),i=" "+t.className+" ",r=0,o=n.length;r<o;r++){var s=n[r];s&&(t.classList?t.classList.remove(s):f(t,s)&&(i=i.replace(" "+s+" "," ")))}t.classList||(t.className=(i||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,n,r){if(!e||!n)return;if("object"===(void 0===n?"undefined":i(n)))for(var o in n)n.hasOwnProperty(o)&&t(e,o,n[o]);else"opacity"===(n=u(n))&&c<9?e.style.filter=isNaN(r)?"":"alpha(opacity="+100*r+")":e.style[n]=r};var r,o=n(0);var s=((r=o)&&r.__esModule?r:{default:r}).default.prototype.$isServer,a=/([\:\-\_]+(.))/g,l=/^moz([A-Z])/,c=s?0:Number(document.documentMode),u=function(t){return t.replace(a,(function(t,e,n,i){return i?n.toUpperCase():n})).replace(l,"Moz$1")},d=e.on=!s&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},h=e.off=!s&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};e.once=function(t,e,n){d(t,e,(function i(){n&&n.apply(this,arguments),h(t,e,i)}))};function f(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var m=e.getStyle=c<9?function(t,e){if(!s){if(!t||!e)return null;"float"===(e=u(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!s){if(!t||!e)return null;"float"===(e=u(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}};var p=e.isScroll=function(t,e){if(!s)return m(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!s){for(var n=t;n;){if([window,document,document.documentElement].includes(n))return window;if(p(n,e))return n;n=n.parentNode}return n}},e.isInContainer=function(t,e){if(s||!t||!e)return!1;var n=t.getBoundingClientRect(),i=void 0;return i=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<i.bottom&&n.bottom>i.top&&n.right>i.left&&n.left<i.right}},370:function(t,e,n){"use strict";e.__esModule=!0,e.isEmpty=e.isEqual=e.arrayEquals=e.looseEqual=e.capitalize=e.kebabCase=e.autoprefixer=e.isFirefox=e.isEdge=e.isIE=e.coerceTruthyValueToArray=e.arrayFind=e.arrayFindIndex=e.escapeRegexpString=e.valueEquals=e.generateId=e.getValueByPath=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.noop=function(){},e.hasOwn=function(t,e){return l.call(t,e)},e.toObject=function(t){for(var e={},n=0;n<t.length;n++)t[n]&&c(e,t[n]);return e},e.getPropByPath=function(t,e,n){for(var i=t,r=(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),o=0,s=r.length;o<s-1&&(i||n);++o){var a=r[o];if(!(a in i)){if(n)throw new Error("please transfer a valid prop path to form item!");break}i=i[a]}return{o:i,k:r[o],v:i?i[r[o]]:null}},e.rafThrottle=function(t){var e=!1;return function(){for(var n=this,i=arguments.length,r=Array(i),o=0;o<i;o++)r[o]=arguments[o];e||(e=!0,window.requestAnimationFrame((function(i){t.apply(n,r),e=!1})))}},e.objToArray=function(t){if(Array.isArray(t))return t;return f(t)?[]:[t]};var r,o=n(0),s=(r=o)&&r.__esModule?r:{default:r},a=n(413);var l=Object.prototype.hasOwnProperty;function c(t,e){for(var n in e)t[n]=e[n];return t}e.getValueByPath=function(t,e){for(var n=(e=e||"").split("."),i=t,r=null,o=0,s=n.length;o<s;o++){var a=n[o];if(!i)break;if(o===s-1){r=i[a];break}i=i[a]}return r};e.generateId=function(){return Math.floor(1e4*Math.random())},e.valueEquals=function(t,e){if(t===e)return!0;if(!(t instanceof Array))return!1;if(!(e instanceof Array))return!1;if(t.length!==e.length)return!1;for(var n=0;n!==t.length;++n)if(t[n]!==e[n])return!1;return!0},e.escapeRegexpString=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return String(t).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")};var u=e.arrayFindIndex=function(t,e){for(var n=0;n!==t.length;++n)if(e(t[n]))return n;return-1},d=(e.arrayFind=function(t,e){var n=u(t,e);return-1!==n?t[n]:void 0},e.coerceTruthyValueToArray=function(t){return Array.isArray(t)?t:t?[t]:[]},e.isIE=function(){return!s.default.prototype.$isServer&&!isNaN(Number(document.documentMode))},e.isEdge=function(){return!s.default.prototype.$isServer&&navigator.userAgent.indexOf("Edge")>-1},e.isFirefox=function(){return!s.default.prototype.$isServer&&!!window.navigator.userAgent.match(/firefox/i)},e.autoprefixer=function(t){if("object"!==(void 0===t?"undefined":i(t)))return t;var e=["ms-","webkit-"];return["transform","transition","animation"].forEach((function(n){var i=t[n];n&&i&&e.forEach((function(e){t[e+n]=i}))})),t},e.kebabCase=function(t){var e=/([^-])([A-Z])/g;return t.replace(e,"$1-$2").replace(e,"$1-$2").toLowerCase()},e.capitalize=function(t){return(0,a.isString)(t)?t.charAt(0).toUpperCase()+t.slice(1):t},e.looseEqual=function(t,e){var n=(0,a.isObject)(t),i=(0,a.isObject)(e);return n&&i?JSON.stringify(t)===JSON.stringify(e):!n&&!i&&String(t)===String(e)}),h=e.arrayEquals=function(t,e){if(e=e||[],(t=t||[]).length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!d(t[n],e[n]))return!1;return!0},f=(e.isEqual=function(t,e){return Array.isArray(t)&&Array.isArray(e)?h(t,e):d(t,e)},e.isEmpty=function(t){if(null==t)return!0;if("boolean"==typeof t)return!1;if("number"==typeof t)return!t;if(t instanceof Error)return""===t.message;switch(Object.prototype.toString.call(t)){case"[object String]":case"[object Array]":return!t.length;case"[object File]":case"[object Map]":case"[object Set]":return!t.size;case"[object Object]":return!Object.keys(t).length}return!1})},376:function(t,e,n){"use strict";function i(t,e,n){this.$children.forEach((function(r){r.$options.componentName===t?r.$emit.apply(r,[e].concat(n)):i.apply(r,[t,e].concat([n]))}))}e.__esModule=!0,e.default={methods:{dispatch:function(t,e,n){for(var i=this.$parent||this.$root,r=i.$options.componentName;i&&(!r||r!==t);)(i=i.$parent)&&(r=i.$options.componentName);i&&i.$emit.apply(i,[e].concat(n))},broadcast:function(t,e,n){i.call(this,t,e,n)}}}},413:function(t,e,n){"use strict";e.__esModule=!0,e.isString=function(t){return"[object String]"===Object.prototype.toString.call(t)},e.isObject=function(t){return"[object Object]"===Object.prototype.toString.call(t)},e.isHtmlElement=function(t){return t&&t.nodeType===Node.ELEMENT_NODE};e.isFunction=function(t){return t&&"[object Function]"==={}.toString.call(t)},e.isUndefined=function(t){return void 0===t},e.isDefined=function(t){return null!=t}},418:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){for(var e=1,n=arguments.length;e<n;e++){var i=arguments[e]||{};for(var r in i)if(i.hasOwnProperty(r)){var o=i[r];void 0!==o&&(t[r]=o)}}return t}},521:function(t,e,n){"use strict";var i=n(475),r=n.n(i),o=n(46),s=n(408),a=n.n(s),l=(n(201),n(30),n(79),n(77),n(9),n(369)),c=n(371),u=n(120),d=n(131),h=n(214);e.a={inject:{myForm:{default:null}},components:{FormItem:a.a},props:{name:String,width:String,props:Object,options:Array,keyMap:{type:Object,default:function(){return{id:"id",label:"label",value:"value",disabled:"disabled",parentId:"parentId"}}},collapsible:Boolean,stopEnterEvent:Boolean,depend:String,dependValue:[String,Number,Boolean,Object,Array,Function],cascade:String,loader:Function,dict:String,disabled:Boolean,readonly:Boolean,placeholder:String,size:String},data:function(){return{cascadeValue:null,currentOptions:[],loading:!1}},computed:{fieldValue:{get:function(){if(this.name&&this.myForm){var t=this.myForm.currentModel;return d(t,this.name,this.getDefaultValue())}return this.value||this.getDefaultValue()},set:function(t){if(this.name&&this.myForm){var e=this.myForm.currentModel,n=Object(u.b)(e);h(n,this.name,t),Object(u.e)(e,n)||(this.myForm.currentModel[this.name]=n[this.name],this.myForm.currentModel=n)}else this.$emit("input",t)}},itemWidth:function(){return this.width||(this.myForm&&this.myForm.itemWidth?this.myForm.itemWidth:null)},itemStyle:function(){return{width:this.itemWidth}},innerProps:function(){return Object(o.a)({disabled:this.disabled,readonly:this.readonly,placeholder:this.placeholder,size:this.size},this.props)}},watch:{itemWidth:{immediate:!0,handler:function(){var t=this;this.$nextTick((function(){t.setContentWidth()}))}},"myForm.currentCollapsed":function(t){var e=this,n=this.myForm,i=n.resetCollapsed,r=n.model;t&&i&&r&&this.collapsible&&this.$nextTick((function(){e.fieldValue=d(e.myForm.model,e.name,e.getDefaultValue())})),this.collapsible&&(t?Object(c.removeResizeListener)(this.$el,this.setContentWidth):(this.currentOptions&&0!==this.currentOptions.length||this.loadOptions(this.myForm.currentModel,this),this.$nextTick((function(){Object(c.addResizeListener)(e.$el,e.setContentWidth),e.setContentWidth()}))))},options:{immediate:!0,handler:function(t){var e=this;this.currentOptions=Object(u.b)(t)||[],this.$nextTick((function(){e.clearValidate()}))}}},methods:{getDefaultValue:function(){return""},resetField:function(){this.$refs.elItem&&this.$refs.elItem.resetField()},clearValidate:function(){this.$refs.elItem&&this.$refs.elItem.clearValidate()},isCollapsed:function(){if(!this.myForm)return!1;var t=this.myForm,e=t.collapsible,n=t.currentCollapsed;return e&&n&&this.collapsible},isMatchDepend:function(){if(!this.depend||!this.myForm)return!0;var t=this.myForm.currentModel,e=t[this.depend],n=!0;return!(n="function"==typeof this.dependValue?this.dependValue(e,t,this):Object(u.e)(this.dependValue,e))&&this.name&&t[this.name]&&(this.fieldValue=this.getDefaultValue(),delete t[this.name]),n},createSlots:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=this.$createElement;return e.map((function(e){return n("template",{slot:e},[t.$slots[e]])}))},renderComponent:function(t){var e=this,n=this.$createElement;if(!this.myForm)return t;var i=this.$scopedSlots.error?{error:function(t){return n("div",{class:"el-form-item__error my-from__custom-error"},[e.$scopedSlots.error(t)])}}:null,o=this.isCollapsed(),s=this.isMatchDepend();return n("transition",{attrs:{name:this.myForm.collapseEffect}},[!o&&s?n("FormItem",r()([{ref:"elItem",class:"my-form-item"},{props:this.$attrs,scopedSlots:i,style:this.itemStyle},{attrs:{prop:this.name},nativeOn:{keyup:function(t){return!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.stopEvent(t)}}}]),[this.$slots.label?n("template",{slot:"label"},[this.$slots.label]):null,this.$slots.before,t,this.$slots.after]):n("div",{style:{display:"none"}},[this.name])])},extendMethods:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];t&&n.forEach((function(n){e[n]=function(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];t[n].apply(t,i)}}))},setContentWidth:function(){if(this.itemWidth&&this.$el){var t=this.$el.querySelector(".el-form-item__content"),e=this.$el.querySelector(".el-form-item__label");if(t){var n=e?e.getBoundingClientRect():{width:0},i=this.$el.getBoundingClientRect().width-n.width;Object(l.setStyle)(t,{width:"".concat(i,"px")})}}},stopEvent:function(t){this.stopEnterEvent&&t.stopPropagation()},loadOptions:function(t){var e=this;if(!this.isCollapsed()&&this.isMatchDepend())if(this.options)this.currentOptions=Object(u.b)(this.options);else{if(this.loader)return this.loading=!0,void this.loader(t,this).then((function(t){e.currentOptions=Object(u.b)(t)})).finally((function(){e.loading=!1}));if(this.myForm){if(this.dict){var n=(this.myForm.dictMap||{})[this.dict];if(n)return void(this.currentOptions=n)}this.myForm.loader&&(this.loading=!0,this.myForm.loader(t,this).then((function(t){e.currentOptions=Object(u.b)(t)})).finally((function(){e.loading=!1})))}}},handleWatch:function(t){var e=t[this.cascade];Object(u.e)(this.cascadeValue,e)||(this.fieldValue=this.getDefaultValue(),this.cascadeValue=e,this.loadOptions(t))},bindCascade:function(){if(this.cascade&&this.myForm){var t=this.myForm.currentModel;this.cascadeValue=t[this.cascade],this.unwatch=this.$watch("myForm.currentModel",this.handleWatch,{deep:!0})}},unbindCascade:function(){this.unwatch&&this.unwatch()}},mounted:function(){Object(c.addResizeListener)(this.$el,this.setContentWidth)},created:function(){var t=null;this.myForm&&(this.myForm.addItem(this),t=this.myForm.currentModel),this.loadOptions(t,this),this.bindCascade()},beforeDestroy:function(){Object(c.removeResizeListener)(this.$el,this.setContentWidth),this.unbindCascade(),this.myForm&&this.myForm.removeItem(this)}}},586:function(t,e,n){},589:function(t,e,n){"use strict";var i=n(47),r=n(78),o=n(372),s=n.n(o),a=n(408),l=n.n(a),c=n(448),u=n.n(c),d=(n(118),n(77),n(123),n(9),n(30),n(120)),h={name:"MyForm",components:{Form:u.a,FormItem:l.a,Button:s.a},provide:function(){return{myForm:this}},props:{model:Object,itemWidth:String,footer:{type:Boolean,default:!0},footerAlign:{type:String,validator:function(t){return["","left","right","center"].includes(t)}},submitText:{type:[String,Boolean],default:"提交"},submittingText:{type:String,default:"正在提交数据..."},onSubmit:{type:Function},resetText:{type:[String,Boolean],default:"重置"},resetSubmitSuccess:Boolean,collapsible:Boolean,collapsed:{type:Boolean,default:!0},collapseEffect:String,resetCollapsed:Boolean,footerBlock:Boolean,footerExpandBlock:{type:Boolean,default:!0},footerFloat:Boolean,loader:Function,dictMap:Object,prevent:{type:Boolean,default:!0}},data:function(){return this.items={},{currentModel:{},submitting:!1,currentCollapsed:!0}},computed:{footerClass:function(){var t;return t={},Object(r.a)(t,"is-align-".concat(this.footerAlign),!!this.footerAlign),Object(r.a)(t,"is-block",this.footerBlock||!this.currentCollapsed&&this.footerExpandBlock),Object(r.a)(t,"is-float-right",this.footerFloat),t}},watch:{model:{immediate:!0,deep:!0,handler:function(t){Object(d.e)(t,this.currentModel)||(this.currentModel=Object(d.b)(t||{}))}},collapsed:{immediate:!0,handler:function(t){this.currentCollapsed=t}},currentModel:{deep:!0,handler:function(t,e){Object(d.e)(t,e)||this.triggerChange(t)}},dictMap:function(t){var e=this;t&&Object.keys(this.items).forEach((function(n){var i=e.items[n],r=i.dict,o=i.loader;i.options||o||!r||(i.currentOptions=t[r]||[])}))}},methods:{submit:function(){var t=this;this.$refs.elForm.validate((function(e){if(e){var n=Object(d.b)(t.currentModel);t.onSubmit&&(t.submitting=!0,t.onSubmit(n,t).then((function(){t.resetSubmitSuccess&&t.reset()})).finally((function(){t.submitting=!1}))),t.$emit("submit",n,t)}}))},reset:function(){var t=this;this.currentModel=Object(d.b)(this.getDefaultValue()),this.$nextTick((function(){t.$refs.elForm&&t.$refs.elForm.clearValidate(),t.$emit("reset",t)}))},toggleCollapsed:function(){this.currentCollapsed=!this.currentCollapsed,this.$emit("collapse",this.currentCollapsed,this)},addItem:function(t){var e=t.name;if(e){if(e in this.items)throw new Error("表单中的项中 name：".concat(e," 重复，请确保在同一个表单中保持唯一"));this.items[e]=t}},removeItem:function(t){t.name&&delete this.items[t.name]},getDefaultValue:function(){return Object(d.b)(this.model||{})},triggerChange:function(t){var e=this;clearTimeout(this.changeTimer),this.changeTimer=setTimeout((function(){e.$emit("change",Object(d.b)(t))}),100)}}},f=n(20),m=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Form",t._g(t._b({ref:"elForm",staticClass:"my-form",attrs:{model:t.currentModel},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}}},"Form",t.$attrs,!1),t.$listeners),[t._t("default"),t._v(" "),t.footer?n("FormItem",{staticClass:"my-form__footer",class:t.footerClass,attrs:{label:" "}},[t._t("footer",[t.submitText?n("Button",{attrs:{type:"primary",loading:t.prevent&&t.submitting},on:{click:t.submit}},[t._v(t._s(t.prevent&&t.submitting?t.submittingText:t.submitText)+"\n      ")]):t._e(),t._v(" "),t.resetText?n("Button",{attrs:{disabled:t.prevent&&t.submitting,type:"default"},on:{click:t.reset}},[t._v(t._s(t.resetText))]):t._e(),t._v(" "),t._t("actions"),t._v(" "),t.collapsible?n("Button",{staticClass:"my-form__collapse",attrs:{disabled:t.prevent&&t.submitting,type:"text"},on:{click:t.toggleCollapsed}},[n("span",[t._v("\n         "+t._s(t.currentCollapsed?"展开":"收起")+"\n         "),n("i",{class:t.currentCollapsed?"el-icon-arrow-down":"el-icon-arrow-up"})])]):t._e()])],2):t._e()],2)}),[],!1,null,null,null).exports;e.a=Object(i.a)(m)}}]);