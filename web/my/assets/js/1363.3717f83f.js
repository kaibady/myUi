(window.webpackJsonp=window.webpackJsonp||[]).push([[1363],{1315:function(t,i,n){},1323:function(t,i,n){"use strict";var e=n(47),s=n(78),l=(n(201),n(118),{name:"MyDescription",props:{title:String,width:Number,gutter:{type:Number,default:10},align:{type:String,default:"left",validator:function(t){return["left","right","center"].includes(t)}},top:Boolean,inline:Boolean},computed:{hasTitle:function(){return this.title||this.$slots.title},titleStyle:function(){return{width:this.top?null:"".concat(this.width,"px")}},contentStyle:function(){return{display:this.top||this.width?"block":"inline",paddingLeft:this.hasTitle&&!this.top?"".concat((this.width||0)+this.gutter,"px"):null,paddingTop:this.top&&this.hasTitle?"".concat(this.gutter,"px"):null}},titleClass:function(){return Object(s.a)({},"is-".concat(this.align),!!this.align)},contentClass:function(){return Object(s.a)({},"is-".concat(this.align),this.top&&!!this.align)}}}),a=n(20),c=Object(a.a)(l,(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"my-description",class:{"is-top":t.top,"is-inline":t.inline}},[n("div",{staticClass:"my-description__title",class:t.titleClass,style:t.titleStyle},[t._t("title",[t._v(t._s(t.title))])],2),t._v(" "),n("div",{staticClass:"my-description__content",class:t.contentClass,style:t.contentStyle},[t._t("default")],2)])}),[],!1,null,null,null).exports;i.a=Object(e.a)(c)},3003:function(t,i,n){"use strict";n.r(i);n(1315),n(119);var e=n(1323);n(0).default.use(e.a);var s={},l=n(20),a=Object(l.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("my-description",{attrs:{title:"标题"}},[this._v("数据项内容")])}),[],!1,null,null,null);i.default=a.exports}}]);