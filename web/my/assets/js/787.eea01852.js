(window.webpackJsonp=window.webpackJsonp||[]).push([[787],{1022:function(t,e,a){},1272:function(t,e,a){"use strict";var r=a(1022);a.n(r).a},1404:function(t,e,a){"use strict";a.r(e);a(198),a(54),a(137),a(32),a(26),a(55),a(425),a(123);var r=a(427),s=(a(426),a(428)),n=a(0),l=a(637),i=a.n(l),o={name:"Palette",components:{MyFloat:s.a,MyFloatItem:r.a},props:{name:String,title:String,summary:String,primary:String,colors:{type:Array,default:function(){return[]}},reverse:Boolean},data:function(){return{clipboards:[]}},methods:{getVarName:function(t){return"$".concat(this.name,"-").concat(t+1)},getStyle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{background:t,color:e>4?this.reverse?"#fff":"#000":this.reverse?"#000":"#fff"}}},mounted:function(){var t=this,e=this.$el.querySelectorAll(".clipboard");Array.from(e).forEach((function(e){var a=new i.a(e);a.on("success",(function(e){t.$message.success("复制成功！")})),t.clipboards.push(a)}))},beforeDestroy:function(){this.clipboards.forEach((function(t){t.destroy()}))}};n.default.use(s.a),n.default.use(r.a);var c=o,u=(a(1272),a(18)),f=Object(u.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"palette"},[a("h3",[t._v(t._s(t.title))]),t._v(" "),a("p",[t._v(t._s(t.summary))]),t._v(" "),t.primary?a("div",{staticClass:"primary"},[a("my-float",{staticClass:"clipboard",style:t.getStyle(t.primary),attrs:{title:"点击可复制颜色码","data-clipboard-text":t.primary}},[a("my-float-item",[t._v("$"+t._s(t.name)+"-primary")]),t._v(" "),a("my-float-item",{attrs:{float:"right"}},[t._v(t._s(t.primary))])],1)],1):t._e(),t._v(" "),a("div",{staticClass:"levels"},t._l(t.colors,(function(e,r){return a("my-float",{key:r,staticClass:"clipboard",style:t.getStyle(e,r),attrs:{"data-clipboard-text":e,title:"点击可复制颜色码"}},[a("my-float-item",[t._v(t._s(t.getVarName(r)))]),t._v(" "),a("my-float-item",{attrs:{float:"right"}},[t._v(t._s(e))])],1)})),1)])}),[],!1,null,"4de1ef34",null);e.default=f.exports},1439:function(t,e,a){},2299:function(t,e,a){"use strict";var r=a(1439);a.n(r).a},3574:function(t,e,a){"use strict";a.r(e);a(198);var r=a(457),s=a.n(r),n=a(460),l=a.n(n),i=a(52),o=a(0),c=a(1404);a(1874);function u(t,e){var a="black"===t?0:255;return"rgba(".concat(a,", ").concat(a,", ").concat(a,", ").concat([1,.85,.65,.45,.25,.15,.09,.04,.02,0][e],")")}var f={name:"NeutralColors",components:{Palette:c.default},data:function(){return Object(i.a)({},function(){for(var t=[],e=[],a=0;a<10;a++)t.push(u("black",a)),e.push(u("white",a));return{black:t,white:e}}())}};o.default.use(l.a),o.default.use(s.a);var p=f,m=(a(2299),a(18)),v=Object(m.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"neutral-colors"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("Palette",{staticClass:"dark",attrs:{reverse:"",title:"深色背景",name:"neutral-white",colors:this.white}})],1),this._v(" "),e("el-col",{attrs:{span:12}},[e("Palette",{attrs:{title:"浅色背景",name:"neutral-black",colors:this.black}})],1)],1)],1)}),[],!1,null,"11070a0a",null);e.default=v.exports},397:function(t,e,a){"use strict";a(124);var r={name:"MyFloatItem",inject:{wrapper:{default:null}},props:{float:{type:String,default:"left",validator:function(t){return["none","left","right"].includes(t)}}},computed:{classes:function(){if(this.wrapper){var t=this.float;return this.wrapper.reverse&&(t="right"===this.float?"left":"left"===this.float?"right":"none"),["is-".concat(t),{"is-fit":this.wrapper.fit}]}}}},s=a(18),n=Object(s.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-float-item",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},425:function(t,e,a){},426:function(t,e,a){},427:function(t,e,a){"use strict";var r=a(53),s=a(397);e.a=Object(r.a)(s.a)},428:function(t,e,a){"use strict";var r=a(53),s={name:"MyFloat",provide:function(){return{wrapper:this}},props:{reverse:{type:Boolean,default:!1},fit:{type:Boolean,default:!1}},computed:{classes:function(){return{"my-float--fit":this.fit}}}},n=a(18),l=Object(n.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-float",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null).exports,i=a(397);e.a=Object(r.a)(l),Object(r.a)(i.a)}}]);