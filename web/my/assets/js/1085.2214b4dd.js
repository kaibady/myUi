(window.webpackJsonp=window.webpackJsonp||[]).push([[1085],{1602:function(t,i,e){},1737:function(t,i,e){"use strict";e(1602)},1771:function(t,i,e){"use strict";var s=e(47),n=e(46),a=(e(383),{name:"MyDvBorder6",mixins:[e(881).a],computed:{svgStyle:function(){return Object(n.a)(Object(n.a)({},this.styles),{},{"box-shadow":"inset 0 0 40px rgba(255,255,255,0.05)",background:this.fill})}}}),l=(e(1737),e(20)),r=Object(l.a)(a,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("Box",t._b({staticClass:"my-dv-border-6",class:t.classes,attrs:{"default-width":"400px","default-height":"300px",padding:"0"}},"Box",t.$attrs,!1),[e("svg",{staticClass:"my-dv-border__svg",style:t.svgStyle,attrs:{width:t.width,height:t.height}},[e("polyline",{staticClass:"line-width-2",attrs:{stroke:t.dark,points:"0, 25 0, 0 25, 0"}}),t._v(" "),e("polyline",{staticClass:"line-width-2",attrs:{stroke:t.dark,points:t.width-25+", 0 "+t.width+", 0 "+t.width+", 25"}}),t._v(" "),e("polyline",{staticClass:"line-width-2",attrs:{stroke:t.dark,points:t.width-25+", "+t.height+" "+t.width+", "+t.height+" "+t.width+", "+(t.height-25)}}),t._v(" "),e("polyline",{staticClass:"line-width-2",attrs:{stroke:t.dark,points:"0, "+(t.height-25)+" 0, "+t.height+" 25, "+t.height}}),t._v(" "),e("polyline",{staticClass:"line-width-5",attrs:{stroke:t.light,points:"0, 10 0, 0 10, 0"}}),t._v(" "),e("polyline",{staticClass:"line-width-5",attrs:{stroke:t.light,points:t.width-10+", 0 "+t.width+", 0 "+t.width+", 10"}}),t._v(" "),e("polyline",{staticClass:"line-width-5",attrs:{stroke:t.light,points:t.width-10+", "+t.height+" "+t.width+", "+t.height+" "+t.width+", "+(t.height-10)}}),t._v(" "),e("polyline",{staticClass:"line-width-5",attrs:{stroke:t.light,points:"0, "+(t.height-10)+" 0, "+t.height+" 10, "+t.height}})]),t._v(" "),e("BoxContent",{attrs:{padding:t.$attrs.padding}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports;i.a=Object(s.a)(r)},3197:function(t,i,e){"use strict";e.r(i);var s=e(460),n=e(1771),a=e(0);a.default.use(n.a),a.default.use(s.a);var l={},r=e(20),h=Object(r.a)(l,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{height:"600px"}},[i("my-dv-page",{attrs:{target:"parent",fit:""}},[i("my-dv-border6",{attrs:{"x-align":"center","y-align":"middle",width:"80%",height:"80%"}})],1)],1)}),[],!1,null,null,null);i.default=h.exports},727:function(t,i,e){},841:function(t,i,e){},842:function(t,i,e){"use strict";e(727)},881:function(t,i,e){"use strict";e(383),e(201);var s=e(417),n=e(502),a=e(47),l={name:"MyDvContent",props:{padding:String},computed:{styles:function(){return{padding:this.padding}}}},r=(e(842),e(20)),h=Object(r.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-dv-content",style:this.styles},[this._t("default")],2)}),[],!1,null,null,null).exports,o=Object(a.a)(h),d=e(725);e(841),i.a={mixins:[n.a,d.a],inheritAttrs:!1,components:{Box:s.a,BoxContent:o},props:{fill:{type:String,default:function(){var t,i;return(null==this||null===(t=this.page)||void 0===t||null===(i=t.settings)||void 0===i?void 0:i.fill)||"transparent"}},reverse:Boolean,opacity:{type:Number,default:1}},computed:{classes:function(){return{"my-dv-border":!0,"is-reverse":this.reverse}},styles:function(){return{opacity:this.opacity}}}}}}]);