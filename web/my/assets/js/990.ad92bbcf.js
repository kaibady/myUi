(window.webpackJsonp=window.webpackJsonp||[]).push([[990],{1805:function(t,e,n){},2501:function(t,e,n){"use strict";var o=n(1805);n.n(o).a},296:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(65),"My".toLowerCase();function o(t){return t.install=function(e){return"undefined"!=typeof window&&n(307).default(t),e.component(t.name,t)},t}},297:function(t,e,n){},298:function(t,e,n){"use strict";n(310);var o={version:"4.0.1",debug:!1,appName:null,routePrefix:null,router:{mode:"hash",base:"/"},autoRoutes:!0,vuex:{strict:!1},keys:{code:"code",data:"data",message:"msg",total:"total",list:"list",page:"page",limit:"limit",pages:"pages"},statusCode:{success:0,notLogin:401,authorize:403,error:500},axios:{headers:{"Content-Type":"application/json;charset=UTF-8"},timeout:0,withCredentials:!0,responseType:"json",maxContentLength:-1},svg:{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor"},access:{},mock:{timeout:"50-200"},scale:{width:1920,height:1080,disabled:!0,lock:!0},analysis:!1,microApp:{prefetch:!1,singular:!0,sandbox:!0}};e.a=o},307:function(t,e,n){"use strict";n.r(e);n(160),n(65);var o=n(298),i=!1,r=[],s=null;o.a.analysis&&function(){if(!i){var t="c4e5f73318b5cb0c389e3d9a05f831cc",e=window._hmt;if(!e||e&&e.id!==t){var n=document.createElement("script");n.src="https://hm.baidu.com/hm.js?".concat(t);var o=document.getElementsByTagName("script")[0];o&&o.parentNode.insertBefore(n,o)}i=!0}}(),e.default=function(t){var e;o.a.analysis&&(e=t.name,r.push(e),clearTimeout(s),s=setTimeout((function(){if(window._hmt&&e){var t=window.location.host,n=window.location.href;window._hmt.push(["_trackEvent",t,r.join(","),o.a.version,n]),r=[]}}),3e3))}},3210:function(t,e,n){"use strict";n.r(e);n(617),n(297);var o=n(621),i=n(0),r={components:{MyLayout:o.a}};i.default.use(o.a);var s=r,a=(n(2501),n(39)),c=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("my-layout",{attrs:{border:"",direction:"horizontal"},scopedSlots:t._u([{key:"north",fn:function(){return[t._v("North")]},proxy:!0},{key:"west",fn:function(){return[t._v("West")]},proxy:!0},{key:"east",fn:function(){return[t._v("East")]},proxy:!0},{key:"south",fn:function(){return[t._v("South")]},proxy:!0}])},[t._v(" "),t._v(" "),t._v(" "),t._v(" "),n("div",[t._v("Main")])])}),[],!1,null,"fa314f3a",null);e.default=c.exports},617:function(t,e,n){},621:function(t,e,n){"use strict";var o=n(296),i=(n(161),n(301),n(401),n(40),n(367),n(295)),r=n(300),s=n(560),a=n.n(s),c=n(561),u=n.n(c),l=n(534),d=n.n(l),h=n(562),f=n.n(h),p=n(563),m=n.n(p),v={north:m.a,default:f.a,south:d.a,east:u.a,west:u.a},g={name:"MyLayout",components:{Container:a.a,Header:m.a,Main:f.a,Footer:d.a,Aside:u.a},props:{fit:Boolean,border:Boolean,split:Boolean,direction:{type:String,validator:function(t){return["vertical","horizontal"].includes(t)}},north:Object,south:Object,east:Object,west:Object},data:function(){return{}},computed:{classes:function(){return Object(r.a)({"my-layout":!0,"is-fit":this.fit,"is-border":this.border,"is-split":this.split},"is-".concat(this.direction),!!this.direction)}},methods:{getDirection:function(){if(this.direction)return this.direction;var t=this.$slots,e=t.north,n=t.south,o=t.west,i=t.east,r=!o&&!i;return r||!r&&!(!e&&!n)?"vertical":"horizontal"},getRegionOptions:function(t){return Object(i.a)({},this[t]||{})},regionRender:function(t){var e=this.$createElement;if(this.$slots[t]){var n=this.getRegionOptions(t),o={north:"height",south:"height",west:"width",east:"width"}[t],i=Number.parseInt(void 0===n[o]?{north:60,south:60,west:256,east:256}[t]:n[o]);return this.$createElement(v[t],{class:["my-layout__region","my-layout__".concat(t),{"is-split":this.split,"is-border":this.border}],style:Object(r.a)({},o,"number"==typeof i?"".concat(i,"px"):i)},this.fit&&i?[e("div",{class:"my-layout__fit"},[this.$slots[t]])]:this.$slots[t])}}},render:function(){var t=this,e=arguments[0],n=this.$slots,o=n.north,i=n.south,r=n.west,s=n.east,a=this.getDirection(),c=function(){return r||s?e("Container",{class:"my-layout__wrapper",attrs:{direction:"horizontal"}},[[t.regionRender("west"),t.regionRender("default"),t.regionRender("east")]]):t.regionRender("default")},u=function(){return o||i?e("Container",{class:"my-layout__wrapper",attrs:{direction:"vertical"}},[[t.regionRender("north"),t.regionRender("default"),t.regionRender("south")]]):t.regionRender("default")};return e("Container",{attrs:{direction:a},class:this.classes},["vertical"===a?[this.regionRender("north"),c(),this.regionRender("south")]:[this.regionRender("west"),u(),this.regionRender("east")]])}},y=n(39),w=Object(y.a)(g,void 0,void 0,!1,null,null,null).exports;e.a=Object(o.a)(w)}}]);