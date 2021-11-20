(window.webpackJsonp=window.webpackJsonp||[]).push([[944],{1721:function(t,e,n){},1750:function(t,e,n){"use strict";var i=n(47),s=n(76),o=(n(116),n(201),n(367)),c=n(119),r=(n(388),n(117),{components:{MyIcon:n(389).a},props:{icon:[String,Object],label:String,info:String,disabled:Boolean,divider:Boolean,children:Array},data:function(){return{active:!1}},computed:{iconProps:function(){return this.icon?"object"===Object(c.a)(this.icon)?this.icon:{name:this.icon}:null},classes:function(){return{"is-disabled":this.disabled,"is-has-child":this.hasChild}},hasChild:function(){return this.children&&this.children.length>0}},methods:{handleMouseEnter:function(t){var e=this;this.active=!0,this.hasChild&&this.$nextTick((function(){e.$emit("submenu",e)}))},handleMouseLeave:function(t){this.active=!1},handleClick:function(t){this.disabled||this.$emit("click",this)}}}),l=n(19),a={name:"Menu",inject:["wrapper"],components:{Item:Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.divider?n("li",{staticClass:"my-contextmenu__divider"}):n("li",{staticClass:"my-contextmenu__item",class:t.classes,on:{mouseenter:t.handleMouseEnter,mouseleave:t.handleMouseLeave,click:function(e){return e.preventDefault(),e.stopPropagation(),t.handleClick(e)}}},[n("div",{staticClass:"my-contextmenu__left"},[n("span",{staticClass:"my-contextmenu__icon"},[t.iconProps?n("MyIcon",t._b({},"MyIcon",t.iconProps,!1)):t._e()],1),t._v(" "),n("span",{staticClass:"my-contextmenu__label"},[t._v(t._s(t.label))])]),t._v(" "),n("div",{staticClass:"my-contextmenu__right"},[t.info?n("span",{staticClass:"my-contextmenu__info"},[t._v(t._s(t.info))]):t._e(),t._v(" "),t.hasChild?n("i",{staticClass:"my-contextmenu__arrow el-icon-caret-right"}):t._e()]),t._v(" "),t.active?t._t("default",null,{active:t.active,children:t.children}):t._e()],2)}),[],!1,null,null,null).exports},props:{items:{type:Array,default:function(){return[]}}},data:function(){return this.rect=null,{left:!1,bottom:!1}},computed:{menuClass:function(){return{"is-left":this.left,"is-bottom":this.bottom}}},methods:{handleClick:function(t,e){this.wrapper.$emit("click",t,e),this.wrapper.visible=!1},handleActive:function(t){var e=t.$el.getBoundingClientRect(),n=this.rect,i=this.wrapper.triggerTarget.getBoundingClientRect(),s=e.x+e.width,o=e.y;this.bottom=n.height+o-i.top>=i.height,this.left=n.width+s-i.left>=i.width}},mounted:function(){this.rect=this.$el.getBoundingClientRect()}},u={name:"MyContextmenu",components:{Menu:Object(l.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"my-contextmenu__menu"},t._l(t.items,(function(e,i){return n("Item",t._b({key:i,on:{click:function(n){return t.handleClick(e,n)},submenu:t.handleActive},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.children,s=e.active;return[i&&s?n("Menu",{class:t.menuClass,attrs:{items:i}}):t._e()]}}],null,!0)},"Item",e,!1))})),1)}),[],!1,null,null,null).exports},provide:function(){return{wrapper:this}},props:{theme:{type:String,default:"light",validator:function(t){return["light","dark"].includes(t)}},data:{type:Array,default:function(){return[]}},disabled:Boolean,zIndex:{type:Number,default:1e3},target:{type:[String,HTMLElement,Function],default:function(){return document.body}},manual:Boolean},data:function(){return{visible:!1,x:0,y:0,rect:null}},computed:{styles:function(){return{left:"".concat(this.x,"px"),top:"".concat(this.y,"px"),zIndex:this.zIndex}},classes:function(){return Object(s.a)({},"is-".concat(this.theme),!!this.theme)}},methods:{getTarget:function(){var t=document.body;return"string"==typeof this.target&&(t=document.querySelector(this.target)),"function"==typeof this.target&&(t=this.target()),t},handleContextMenu:function(t){if(!this.disabled)return t.preventDefault(),this.manual||this.show({x:t.pageX,y:t.pageY}),!1},getPlacement:function(t,e,n){var i=this.triggerTarget.getBoundingClientRect();return t.height+n-Math.abs(i.top)>=i.height&&(n-=t.height),t.width+e-Math.abs(i.left)>=i.width&&(e-=t.width),{x:e,y:n}},show:function(t){var e=this,n=t.x,i=t.y;this.visible=!0,this.$nextTick((function(){var t=e.$refs.menu.rect,s=e.getPlacement(t,n,i);e.x=s.x,e.y=s.y}))},hide:function(){this.visible=!1}},mounted:function(){this.triggerTarget=this.getTarget(),Object(o.on)(this.triggerTarget,"contextmenu",this.handleContextMenu),Object(o.on)(document.body,"click",this.hide),document.body.appendChild(this.$el)},beforeDestroy:function(){Object(o.off)(this.triggerTarget,"contextmenu",this.handleContextMenu),Object(o.off)(document.body,"click",this.hide),this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.triggerTarget=null}},h=Object(l.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"my-contextmenu",class:this.classes,style:this.styles},[this.visible?e("Menu",{ref:"menu",attrs:{items:this.data}}):this._e()],1)}),[],!1,null,null,null).exports;e.a=Object(i.a)(h)},2340:function(t,e,n){},2656:function(t,e,n){"use strict";n(2340)},3055:function(t,e,n){"use strict";n.r(e);n(1721),n(117);var i=n(1750);n(0).default.use(i.a);var s={data:function(){return{menu:[{icon:"el-icon-view",label:"查看"},{icon:"el-icon-edit",label:"编辑"},{icon:"el-icon-finished",label:"完成",children:[{label:"二级菜单1"},{label:"二级菜单2"},{label:"二级菜单3"},{label:"二级菜单4"}]},{icon:"el-icon-delete",label:"删除"},{divider:!0},{icon:"el-icon-document",label:"属性"}]}},methods:{handleClick:function(t,e){this.$message.success("点击了".concat(t.label))}}},o=(n(2656),n(19)),c=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"action-box"},[this._v("\n    右键触发区域\n  ")]),this._v(" "),e("my-contextmenu",{attrs:{target:".action-box",data:this.menu},on:{click:this.handleClick}})],1)}),[],!1,null,"14e85f66",null);e.default=c.exports},367:function(t,e,n){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=f,e.addClass=function(t,e){if(!t)return;for(var n=t.className,i=(e||"").split(" "),s=0,o=i.length;s<o;s++){var c=i[s];c&&(t.classList?t.classList.add(c):f(t,c)||(n+=" "+c))}t.classList||(t.className=n)},e.removeClass=function(t,e){if(!t||!e)return;for(var n=e.split(" "),i=" "+t.className+" ",s=0,o=n.length;s<o;s++){var c=n[s];c&&(t.classList?t.classList.remove(c):f(t,c)&&(i=i.replace(" "+c+" "," ")))}t.classList||(t.className=(i||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,n,s){if(!e||!n)return;if("object"===(void 0===n?"undefined":i(n)))for(var o in n)n.hasOwnProperty(o)&&t(e,o,n[o]);else"opacity"===(n=u(n))&&a<9?e.style.filter=isNaN(s)?"":"alpha(opacity="+100*s+")":e.style[n]=s};var s,o=n(0);var c=((s=o)&&s.__esModule?s:{default:s}).default.prototype.$isServer,r=/([\:\-\_]+(.))/g,l=/^moz([A-Z])/,a=c?0:Number(document.documentMode),u=function(t){return t.replace(r,(function(t,e,n,i){return i?n.toUpperCase():n})).replace(l,"Moz$1")},h=e.on=!c&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},d=e.off=!c&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};e.once=function(t,e,n){h(t,e,(function i(){n&&n.apply(this,arguments),d(t,e,i)}))};function f(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var m=e.getStyle=a<9?function(t,e){if(!c){if(!t||!e)return null;"float"===(e=u(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!c){if(!t||!e)return null;"float"===(e=u(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}};var v=e.isScroll=function(t,e){if(!c)return m(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!c){for(var n=t;n;){if([window,document,document.documentElement].includes(n))return window;if(v(n,e))return n;n=n.parentNode}return n}},e.isInContainer=function(t,e){if(c||!t||!e)return!1;var n=t.getBoundingClientRect(),i=void 0;return i=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<i.bottom&&n.bottom>i.top&&n.right>i.left&&n.left<i.right}},375:function(t,e,n){var i=n(11),s=n(80),o=n(16),c=n(122).f,r=function(t){return function(e){for(var n,r=o(e),l=s(r),a=l.length,u=0,h=[];a>u;)n=l[u++],i&&!c.call(r,n)||h.push(t?[n,r[n]]:r[n]);return h}};t.exports={entries:r(!0),values:r(!1)}},384:function(t,e,n){var i=n(2),s=n(375).values;i({target:"Object",stat:!0},{values:function(t){return s(t)}})},388:function(t,e,n){},389:function(t,e,n){"use strict";var i=n(47),s=n(422);e.a=Object(i.a)(s.a)},422:function(t,e,n){"use strict";var i=n(76),s=(n(116),n(203),n(384),n(30),{DEFAULT:"",SUCCESS:"success",WARNING:"warning",DANGER:"danger",INFO:"info",PRIMARY:"primary"}),o={Theme:s,name:"MyIcon",props:{name:String,svg:Boolean,svgProps:Object,theme:{type:String,validator:function(t){return!t||Object.values(s).includes(t)}}},computed:{classes:function(){var t;return[(t={},Object(i.a)(t,"my-icon--".concat(this.theme),!!this.theme),Object(i.a)(t,"is-pointer",!!this.$listeners.click),Object(i.a)(t,"is-svg",this.svg),t),this.$slots.default?"":this.name?this.name:""]}},methods:{handleClick:function(t){this.$emit("click",t)}}},c=n(19),r=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{staticClass:"my-icon",class:t.classes,on:{click:t.handleClick}},[t.svg?n(t.name,t._b({tag:"component"},"component",t.svgProps,!1)):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.a=r.exports}}]);