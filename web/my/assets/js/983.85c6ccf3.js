(window.webpackJsonp=window.webpackJsonp||[]).push([[983],{1789:function(t,e,n){},2476:function(t,e,n){"use strict";var i=n(1789);n.n(i).a},296:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(65),"My".toLowerCase();function i(t){return t.install=function(e){return"undefined"!=typeof window&&n(307).default(t),e.component(t.name,t)},t}},297:function(t,e,n){},298:function(t,e,n){"use strict";n(310);var i={version:"4.0.1",debug:!1,appName:null,routePrefix:null,router:{mode:"hash",base:"/"},autoRoutes:!0,vuex:{strict:!1},keys:{code:"code",data:"data",message:"msg",total:"total",list:"list",page:"page",limit:"limit",pages:"pages"},statusCode:{success:0,notLogin:401,authorize:403,error:500},axios:{headers:{"Content-Type":"application/json;charset=UTF-8"},timeout:0,withCredentials:!0,responseType:"json",maxContentLength:-1},svg:{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor"},access:{},mock:{timeout:"50-200"},scale:{width:1920,height:1080,disabled:!0,lock:!0},analysis:!1,microApp:{prefetch:!1,singular:!0,sandbox:!0}};e.a=i},307:function(t,e,n){"use strict";n.r(e);n(160),n(65);var i=n(298),o=!1,r=[],s=null;i.a.analysis&&function(){if(!o){var t="c4e5f73318b5cb0c389e3d9a05f831cc",e=window._hmt;if(!e||e&&e.id!==t){var n=document.createElement("script");n.src="https://hm.baidu.com/hm.js?".concat(t);var i=document.getElementsByTagName("script")[0];i&&i.parentNode.insertBefore(n,i)}o=!0}}(),e.default=function(t){var e;i.a.analysis&&(e=t.name,r.push(e),clearTimeout(s),s=setTimeout((function(){if(window._hmt&&e){var t=window.location.host,n=window.location.href;window._hmt.push(["_trackEvent",t,r.join(","),i.a.version,n]),r=[]}}),3e3))}},3127:function(t,e,n){"use strict";n.r(e);n(617),n(297);var i=n(621),o=n(0),r={components:{MyLayout:i.a}};o.default.use(i.a);var s=r,a=(n(2476),n(39)),c=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("my-layout",{scopedSlots:t._u([{key:"north",fn:function(){return[t._v("North")]},proxy:!0},{key:"west",fn:function(){return[t._v("West")]},proxy:!0},{key:"south",fn:function(){return[t._v("South")]},proxy:!0}])},[t._v(" "),t._v(" "),t._v(" "),n("div",[t._v("Main")])])}),[],!1,null,"41a4d9a0",null);e.default=c.exports},617:function(t,e,n){},621:function(t,e,n){"use strict";var i=n(296),o=(n(161),n(301),n(401),n(40),n(367),n(295)),r=n(300),s=n(560),a=n.n(s),c=n(561),u=n.n(c),l=n(534),d=n.n(l),h=n(562),f=n.n(h),p=n(563),m=n.n(p),v={north:m.a,default:f.a,south:d.a,east:u.a,west:u.a},g={name:"MyLayout",components:{Container:a.a,Header:m.a,Main:f.a,Footer:d.a,Aside:u.a},props:{fit:Boolean,border:Boolean,split:Boolean,direction:{type:String,validator:function(t){return["vertical","horizontal"].includes(t)}},north:Object,south:Object,east:Object,west:Object},data:function(){return{}},computed:{classes:function(){return Object(r.a)({"my-layout":!0,"is-fit":this.fit,"is-border":this.border,"is-split":this.split},"is-".concat(this.direction),!!this.direction)}},methods:{getDirection:function(){if(this.direction)return this.direction;var t=this.$slots,e=t.north,n=t.south,i=t.west,o=t.east,r=!i&&!o;return r||!r&&!(!e&&!n)?"vertical":"horizontal"},getRegionOptions:function(t){return Object(o.a)({},this[t]||{})},regionRender:function(t){var e=this.$createElement;if(this.$slots[t]){var n=this.getRegionOptions(t),i={north:"height",south:"height",west:"width",east:"width"}[t],o=Number.parseInt(void 0===n[i]?{north:60,south:60,west:256,east:256}[t]:n[i]);return this.$createElement(v[t],{class:["my-layout__region","my-layout__".concat(t),{"is-split":this.split,"is-border":this.border}],style:Object(r.a)({},i,"number"==typeof o?"".concat(o,"px"):o)},this.fit&&o?[e("div",{class:"my-layout__fit"},[this.$slots[t]])]:this.$slots[t])}}},render:function(){var t=this,e=arguments[0],n=this.$slots,i=n.north,o=n.south,r=n.west,s=n.east,a=this.getDirection(),c=function(){return r||s?e("Container",{class:"my-layout__wrapper",attrs:{direction:"horizontal"}},[[t.regionRender("west"),t.regionRender("default"),t.regionRender("east")]]):t.regionRender("default")},u=function(){return i||o?e("Container",{class:"my-layout__wrapper",attrs:{direction:"vertical"}},[[t.regionRender("north"),t.regionRender("default"),t.regionRender("south")]]):t.regionRender("default")};return e("Container",{attrs:{direction:a},class:this.classes},["vertical"===a?[this.regionRender("north"),c(),this.regionRender("south")]:[this.regionRender("west"),u(),this.regionRender("east")]])}},w=n(39),y=Object(w.a)(g,void 0,void 0,!1,null,null,null).exports;e.a=Object(i.a)(y)}}]);