(window.webpackJsonp=window.webpackJsonp||[]).push([[890],{1689:function(t,e,a){},2404:function(t,e,a){"use strict";var s=a(1689);a.n(s).a},2774:function(t,e,a){"use strict";a.r(e);a(425),a(123);var s=a(427),i=(a(426),a(428)),l=a(0),n={components:{MyFloat:i.a,MyFloatItem:s.a}};l.default.use(i.a),l.default.use(s.a);var r=n,c=(a(2404),a(18)),o=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("my-float",{attrs:{fit:"",reverse:""}},[e("my-float-item",{staticClass:"left"},[this._v("左边内容")]),this._v(" "),e("my-float-item",{staticClass:"right",attrs:{float:"right"}},[this._v("右边内容")])],1)],1)}),[],!1,null,"5f8c68d8",null);e.default=o.exports},397:function(t,e,a){"use strict";a(124);var s={name:"MyFloatItem",inject:{wrapper:{default:null}},props:{float:{type:String,default:"left",validator:function(t){return["none","left","right"].includes(t)}}},computed:{classes:function(){if(this.wrapper){var t=this.float;return this.wrapper.reverse&&(t="right"===this.float?"left":"left"===this.float?"right":"none"),["is-".concat(t),{"is-fit":this.wrapper.fit}]}}}},i=a(18),l=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-float-item",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null);e.a=l.exports},425:function(t,e,a){},426:function(t,e,a){},427:function(t,e,a){"use strict";var s=a(53),i=a(397);e.a=Object(s.a)(i.a)},428:function(t,e,a){"use strict";var s=a(53),i={name:"MyFloat",provide:function(){return{wrapper:this}},props:{reverse:{type:Boolean,default:!1},fit:{type:Boolean,default:!1}},computed:{classes:function(){return{"my-float--fit":this.fit}}}},l=a(18),n=Object(l.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-float",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null).exports,r=a(397);e.a=Object(s.a)(n),Object(s.a)(r.a)}}]);