(window.webpackJsonp=window.webpackJsonp||[]).push([[1249],{2055:function(t,e,a){},2095:function(t,e,a){"use strict";var i=a(47),n=a(46),s=(a(1016),a(119),a(1026)),r=(a(201),a(118),a(33),{name:"MyAvatars",components:{MyAvatar:s.a},props:{data:{type:Array,default:function(){return[]}},tooltip:Object,max:{type:Number,default:1/0},size:{type:[String,Number],default:"default",validator:function(t){return["large","small","default"].includes(t)||t>0}},alt:String,theme:{type:String,default:"primary",validator:function(t){return["primary","success","warning","danger","info"].includes(t)}},shape:{type:String,default:"circle",validator:function(t){return["circle","square"].includes(t)}},addable:Boolean,addIcon:{type:String,default:"el-icon-plus"}},computed:{list:function(){return this.data.length>this.max?this.data.slice(0,this.max):this.data},count:function(){return this.max!==1/0?this.data.length-this.max:0},classes:function(){return{"my-avatars":!0,"is-pointer":!!this.$listeners.click}}},methods:{mergeOptions:function(t){var e=t.tooltip?Object(n.a)(Object(n.a)({},this.tooltip),{},{content:t.tooltip}):void 0;return Object(n.a)(Object(n.a)({size:this.size,theme:this.theme,alt:this.alt,shape:this.shape},t),{},{tooltip:e})},createEvents:function(t){var e=this;return this.$listeners["click-item"]?{click:function(a){return e.handleClickItem(t,a)}}:{}},createClickMoreEvents:function(){var t=this;return this.$listeners["click-more"]?{click:function(e){t.$emit("click-more",e)}}:{}},handleClickItem:function(t){this.$emit("click-item",t)},handleClickAdd:function(){this.$emit("click-add")}}}),c=a(20),l=Object(c.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._g({class:t.classes},t.$listeners),[t._l(t.list,(function(e,i){return a("MyAvatar",t._g(t._b({key:i},"MyAvatar",t.mergeOptions(e),!1),t.createEvents(e)),[t._v(t._s(e.text)+"\n  ")])})),t._v(" "),t.count>0?a("MyAvatar",t._g({attrs:{theme:"warning",size:t.size,shape:t.shape}},t.createClickMoreEvents()),[t._v("+"+t._s(t.count)+"\n  ")]):t._e(),t._v(" "),t.addable?a("MyAvatar",{staticClass:"my-avatars__add",attrs:{theme:"info",size:t.size,icon:t.addIcon,shape:t.shape},on:{click:t.handleClickAdd}}):t._e()],2)}),[],!1,null,null,null).exports;e.a=Object(i.a)(l)},3310:function(t,e,a){"use strict";a.r(e);a(2055),a(119);var i=a(2095);a(0).default.use(i.a);var n={data:function(){return{data:[{text:"陈",tooltip:"陈某某"},{text:"李",theme:"success",tooltip:"李某某"},{text:"张",theme:"danger",tooltip:"张某某"},{text:"王",theme:"warning",tooltip:"王某某"}]}}},s=a(20),r=Object(s.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("my-avatars",{attrs:{data:this.data,size:"large"}})}),[],!1,null,null,null);e.default=r.exports}}]);