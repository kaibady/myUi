(window.webpackJsonp=window.webpackJsonp||[]).push([[946],{296:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(65),"My".toLowerCase();function i(t){return t.install=function(e){return"undefined"!=typeof window&&n(307).default(t),e.component(t.name,t)},t}},297:function(t,e,n){},298:function(t,e,n){"use strict";n(310);var i={version:"4.0.1",debug:!1,appName:null,routePrefix:null,router:{mode:"hash",base:"/"},autoRoutes:!0,vuex:{strict:!1},keys:{code:"code",data:"data",message:"msg",total:"total",list:"list",page:"page",limit:"limit",pages:"pages"},statusCode:{success:0,notLogin:401,authorize:403,error:500},axios:{headers:{"Content-Type":"application/json;charset=UTF-8"},timeout:0,withCredentials:!0,responseType:"json",maxContentLength:-1},svg:{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor"},access:{},mock:{timeout:"50-200"},scale:{width:1920,height:1080,disabled:!0,lock:!0},analysis:!1,microApp:{prefetch:!1,singular:!0,sandbox:!0}};e.a=i},3052:function(t,e,n){"use strict";n.r(e);n(873),n(297);var i=n(878),a=(n(874),n(879)),l=n(0),r={components:{MyDetail:a.a,MyDetailItem:i.a}};l.default.use(a.a),l.default.use(i.a);var o=r,s=n(39),c=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-origin"},[n("my-detail",{attrs:{title:"用户信息",border:"","label-align":"right"}},[n("my-detail-item",{attrs:{label:"名称"}},[t._v("张三")]),t._v(" "),n("my-detail-item",{attrs:{label:"电话"}},[t._v("020-88888888")]),t._v(" "),n("my-detail-item",{attrs:{label:"籍贯"}},[t._v("广东 广州")]),t._v(" "),n("my-detail-item",{attrs:{label:"备注"}},[t._v("无")]),t._v(" "),n("my-detail-item",{attrs:{label:"地址"}},[t._v("广东省广州市越秀区东风东路")])],1)],1)}),[],!1,null,null,null);e.default=c.exports},307:function(t,e,n){"use strict";n.r(e);n(160),n(65);var i=n(298),a=!1,l=[],r=null;i.a.analysis&&function(){if(!a){var t="c4e5f73318b5cb0c389e3d9a05f831cc",e=window._hmt;if(!e||e&&e.id!==t){var n=document.createElement("script");n.src="https://hm.baidu.com/hm.js?".concat(t);var i=document.getElementsByTagName("script")[0];i&&i.parentNode.insertBefore(n,i)}a=!0}}(),e.default=function(t){var e;i.a.analysis&&(e=t.name,l.push(e),clearTimeout(r),r=setTimeout((function(){if(window._hmt&&e){var t=window.location.host,n=window.location.href;window._hmt.push(["_trackEvent",t,l.join(","),i.a.version,n]),l=[]}}),3e3))}},514:function(t,e,n){"use strict";n.d(e,"b",(function(){return r}));n(19),n(91),n(67),n(96),n(7),n(94),n(92);var i,a=n(300),l=n(295);if("undefined"!=typeof window){window.matchMedia=window.matchMedia||function(t){return{media:t,matches:!1,addListener:function(){},removeListener:function(){}}},i=n(539)}var r=["xxl","xl","lg","md","sm","xs"],o={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},s=[],c=-1,u={},d={fire:function(t){return u=t,!(s.length<1)&&(s.forEach((function(t){t.func(u)})),!0)},on:function(t){0===s.length&&this.register();var e=(++c).toString();return s.push({token:e,func:t}),t(u),e},off:function(t){0===(s=s.filter((function(e){return e.token!==t}))).length&&this.unregister()},register:function(){var t=this;Object.keys(o).map((function(e){i.register(o[e],{match:function(){var n=Object(l.a)(Object(l.a)({},u),{},Object(a.a)({},e,!0));t.fire(n)},unmatch:function(){var n=Object(l.a)(Object(l.a)({},u),{},Object(a.a)({},e,!1));t.fire(n)},destroy:function(){}})}))},unregister:function(){Object.keys(o).map((function(t){return i.unregister(o[t])}))}};e.a=d},873:function(t,e,n){},874:function(t,e,n){},878:function(t,e,n){"use strict";var i=n(296),a=(n(466),n(161),n(462),n(301),{name:"MyDetailItem",inject:["detail"],props:{label:String,span:{type:Number,default:1},labelAlign:{type:String,default:function(){return this.detail.labelAlign},validator:function(t){return["left","center","right"].includes(t)}},contentAlign:{type:String,default:function(){return this.detail.contentAlign},validator:function(t){return["left","center","right"].includes(t)}}},data:function(){return{currentSpan:this.span}},watch:{span:function(t){this.currentSpan=t}},created:function(){this.detail&&this.detail.items.push(this)},mounted:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)},updated:function(){var t=this,e=this.detail.items.findIndex((function(e){return e===t}));this.detail.items.splice(e,1,this)},beforeDestroy:function(){var t=this,e=this.detail.items.findIndex((function(e){return e===t}));this.detail.items.splice(e,1),this.$el=null}}),l=n(39),r=Object(l.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{display:"none"}},[this._t("label"),this._v(" "),this._t("default")],2)}),[],!1,null,null,null).exports;e.a=Object(i.a)(r)},879:function(t,e,n){"use strict";var i=n(296),a=(n(91),n(161),n(67),n(301),n(92),n(41)),l=n(465),r=n.n(l),o=n(300),s={functional:!0,props:{child:Object,border:Boolean,colon:Boolean,type:{type:String,validator:function(t){return["label","content"].includes(t)}},layout:{type:String,validator:function(t){return["horizontal","vertical"].includes(t)}}},render:function(t,e){var n,i=e.props,a=i.child,l=i.border,s=i.colon,c=i.type,u=i.layout,d=a.label,f=a.currentSpan,h=void 0===f?1:f,m=a.key,p=a.labelAlign,y=a.contentAlign,b={class:(n={"my-detail-item__label":!0,"my-detail-item--colon":s},Object(o.a)(n,"is-".concat(p),!!p),Object(o.a)(n,"my-detail-item--no-label",!(a.$slots.label||d)),n),key:m};return"vertical"===u&&(b.colspan=2*h-1),l?"label"===c?t("th",r()([{},b,{attrs:{colspan:b.colspan}}]),[a.$slots.label||d]):t("td",{class:["my-detail-item__content","is-".concat(y)],key:m,attrs:{colspan:2*h-1}},[a.$slots.default]):"vertical"===u?t("td",{attrs:{colspan:h},class:["my-detail-item__wrap","is-".concat(y)],key:m},"content"===c?[t("span",{class:"my-detail-item__content"},[a.$slots.default])]:[t("span",{class:{"my-detail-item__label":!0,"my-detail-item--colon":s}},[a.$slots.label||d])]):t("td",{attrs:{colspan:h},class:"my-detail-item__wrap",key:m},[t("span",r()([{},b]),[a.$slots.label||d]),t("span",{class:"my-detail-item__content"},[a.$slots.default])])}},c=n(514),u={xxl:3,xl:3,lg:3,md:3,sm:2,xs:2},d={name:"MyDetail",components:{Col:s},provide:function(){return{detail:this}},props:{title:String,border:Boolean,column:{type:[Number,Object],default:3},size:{type:String,default:"default",validator:function(t){return["default","middle","small"].includes(t)}},layout:{type:String,default:"horizontal",validator:function(t){return["horizontal","vertical"].includes(t)}},colon:{type:Boolean,default:!0},labelAlign:{type:String,default:"left",validator:function(t){return["left","center","right"].includes(t)}},contentAlign:{type:String,default:"left",validator:function(t){return["left","center","right"].includes(t)}}},data:function(){return{items:[],screens:{}}},computed:{classes:function(){return["my-detail","is-".concat(this.size||"default"),"is-".concat(this.layout),{"is-border":this.border}]}},methods:{getColumn:function(){if("object"===Object(a.a)(this.column))for(var t=0;t<c.b.length;t++){var e=c.b[t];if(this.screens[e])return this.column[e]||u[e]}return"number"==typeof this.column?this.column:3},generateChildrenRows:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=[],i=null,a=0;return t.forEach((function(l,r){i||(a=e,i=[],n.push(i)),r===t.length-1&&(l.currentSpan=a);var o=l.currentSpan,s=void 0===o?1:o;i.push(l),(a-=s)<=0&&(i=null)})),n},renderRow:function(t,e){var n=this,i=this.$createElement,a=[],l=[];return t.forEach((function(t,e){a.push(n.renderCol(t,"label",e)),"vertical"===n.layout?l.push(n.renderCol(t,"content",e)):n.border&&a.push(n.renderCol(t,"content",e))})),"vertical"===this.layout?[i("tr",{class:"my-detail__row",key:"label-".concat(e)},[a]),i("tr",{class:"my-detail__row",key:"content-".concat(e)},[l])]:i("tr",{class:"my-detail__row",key:e},[a])},renderCol:function(t,e,n){return(0,this.$createElement)(s,{attrs:{child:t,border:this.border,colon:this.colon,type:e,layout:this.layout},key:t.key||n})}},render:function(){var t=this,e=arguments[0],n=this.generateChildrenRows(this.items,this.getColumn()),i=this.$slots.title||this.title,a=i?e("div",{class:"my-detail__title"},[i]):null;return e("div",{class:this.classes},[a,e("div",{class:"my-detail__view"},[e("table",[e("tbody",[n.map((function(e,n){return t.renderRow(e,n)}))])])]),this.$slots.default])},mounted:function(){var t=this;this.token=c.a.on((function(e){"object"===Object(a.a)(t.column)&&(t.screens=e)}))},beforeDestroy:function(){c.a.off(this.token)}},f=n(39),h=Object(f.a)(d,void 0,void 0,!1,null,null,null).exports;e.a=Object(i.a)(h)}}]);