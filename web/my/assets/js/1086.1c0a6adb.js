(window.webpackJsonp=window.webpackJsonp||[]).push([[1086],{2616:function(t,e,n){"use strict";n.r(e);n(671),n(123);var r=n(673);n(0).default.use(r.a);var a={},i=n(18),s=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("my-container",{attrs:{border:""}},[t._v("Container")]),t._v(" "),n("my-container",{attrs:{border:"",theme:"primary"}},[t._v("Container")]),t._v(" "),n("my-container",{attrs:{border:"",theme:"success"}},[t._v("Container")]),t._v(" "),n("my-container",{attrs:{border:"",theme:"warning"}},[t._v("Container")]),t._v(" "),n("my-container",{attrs:{border:"",theme:"danger"}},[t._v("Container")]),t._v(" "),n("my-container",{attrs:{border:"",theme:"info"}},[t._v("Container")])],1)}),[],!1,null,null,null);e.default=s.exports},669:function(t,e,n){"use strict";n(124);var r=n(31),a={name:"MyContainer",props:{fit:Boolean,theme:{type:String,default:"",validator:function(t){return["","primary","info","warning","danger","success"].includes(t)}},border:Boolean,shadow:Boolean,bodyStyle:Object},computed:{classes:function(){var t;return t={"is-fit":this.fit,"is-border":this.border},Object(r.a)(t,"my-container--".concat(this.theme),!!this.theme),Object(r.a)(t,"is-shadow",this.shadow),t}}},i=n(18),s=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"my-container",class:this.classes},[e("div",{staticClass:"my-container__inner",style:this.bodyStyle},[this._t("default")],2)])}),[],!1,null,null,null);e.a=s.exports},671:function(t,e,n){},673:function(t,e,n){"use strict";var r=n(53),a=n(669);e.a=Object(r.a)(a.a)}}]);