(window.webpackJsonp=window.webpackJsonp||[]).push([[901],{1744:function(t,e,a){},2407:function(t,e,a){"use strict";a(1744)},2750:function(t,e,a){"use strict";a.r(e);a(479),a(124);var s=a(481),i=(a(480),a(484)),l=a(0),n={components:{MyFloat:i.a,MyFloatItem:s.a}};l.default.use(i.a),l.default.use(s.a);var r=n,c=(a(2407),a(18)),o=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("my-float",{attrs:{fit:""}},[e("my-float-item",{staticClass:"left"},[this._v("左边内容")]),this._v(" "),e("my-float-item",{staticClass:"right",attrs:{float:"right"}},[this._v("右边内容")])],1)],1)}),[],!1,null,"16f5acd1",null);e.default=o.exports},437:function(t,e,a){"use strict";a(125);var s={name:"MyFloatItem",inject:{wrapper:{default:null}},props:{float:{type:String,default:"left",validator:function(t){return["none","left","right"].includes(t)}}},computed:{classes:function(){if(this.wrapper){var t=this.float;return this.wrapper.reverse&&(t="right"===this.float?"left":"left"===this.float?"right":"none"),["is-".concat(t),{"is-fit":this.wrapper.fit}]}}}},i=a(18),l=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-float-item",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null);e.a=l.exports},479:function(t,e,a){},480:function(t,e,a){},481:function(t,e,a){"use strict";var s=a(53),i=a(437);e.a=Object(s.a)(i.a)},484:function(t,e,a){"use strict";var s=a(53),i={name:"MyFloat",provide:function(){return{wrapper:this}},props:{reverse:{type:Boolean,default:!1},fit:{type:Boolean,default:!1}},computed:{classes:function(){return{"my-float--fit":this.fit}}}},l=a(18),n=Object(l.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-float",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null).exports,r=a(437);e.a=Object(s.a)(n),Object(s.a)(r.a)}}]);