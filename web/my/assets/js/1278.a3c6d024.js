(window.webpackJsonp=window.webpackJsonp||[]).push([[1278],{2557:function(t,e,i){},2826:function(t,e,i){"use strict";i.r(e);i(2557),i(125);var s=i(53),r=(i(124),i(200),i(441),{name:"MyFlip",props:{number:{type:[String,Number],required:!0,validator:function(t){return/^[0-9]$/.test(Number.parseInt(t))}},color:{type:String,default:"#333"},fontSize:{type:String},size:{type:String,validator:function(t){return["mini","small","medium"].includes(t)},default:"medium"}},data:function(){return{previous:!0,active:!0,timer:null,newNumber:null,oldNumber:null,bottomWrapStyle:null}},computed:{innerStyles:function(){return{backgroundColor:this.color}}},watch:{number:{handler:function(t,e){var i=this;this.previous=!1,this.active=!1,this.timer=setTimeout((function(){i.newNumber=t,i.oldNumber=e,i.previous=!0,i.active=!0}),10)},immediate:!0},size:function(t){this.bottomWrapStyle={marginTop:"-"+this.$el.clientHeight/2+"px"}}},methods:{},created:function(){},mounted:function(){this.bottomWrapStyle={marginTop:"-"+this.$el.clientHeight/2+"px"}},beforeDestroy:function(){window.clearTimeout(this.timer)}}),n=i(18),l=Object(n.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:"my-flip my-flip__"+t.size,style:{fontSize:t.fontSize}},[i("div",{class:{"my-flip__set":!0,"my-flip-previous":t.previous}},[i("div",{staticClass:"my-flip__top",style:t.innerStyles},[i("span",{staticClass:"my-flip__wrap"},[t._v(t._s(t.oldNumber))])]),t._v(" "),i("div",{staticClass:"my-flip__shadow-top"}),t._v(" "),i("div",{staticClass:"my-flip__bottom",style:t.innerStyles},[i("span",{staticClass:"my-flip__wrap",style:t.bottomWrapStyle},[t._v(t._s(t.oldNumber))])]),t._v(" "),i("div",{staticClass:"my-flip__shadow-bottom"})]),t._v(" "),i("div",{class:{"my-flip__set":!0,"my-flip-active":t.active}},[i("div",{staticClass:"my-flip__top",style:t.innerStyles},[i("span",{staticClass:"my-flip__wrap"},[t._v(t._s(t.newNumber))])]),t._v(" "),i("div",{staticClass:"my-flip__shadow-top"}),t._v(" "),i("div",{staticClass:"my-flip__bottom",style:t.innerStyles},[i("span",{staticClass:"my-flip__wrap",style:t.bottomWrapStyle},[t._v(t._s(t.newNumber))])]),t._v(" "),i("div",{staticClass:"my-flip__shadow-bottom"})])])}),[],!1,null,null,null).exports,a=Object(s.a)(l),o={data:function(){return{timer:null,firstNumber:0}},methods:{setTimes:function(){var t=this;this.timer=window.setInterval((function(){t.firstNumber<9?t.firstNumber++:(9===t.firstNumber&&(t.firstNumber<9?t.firstNumber++:t.firstNumber=0),t.firstNumber=0)}),1e3)}},created:function(){this.setTimes()},beforeDestroy:function(){window.clearInterval(this.timer)}};i(0).default.use(a);var u=o,m=Object(n.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("my-flip",{attrs:{number:this.firstNumber,size:"mini",color:"green"}}),this._v(" "),e("my-flip",{attrs:{number:5,size:"small",color:"black"}})],1)}),[],!1,null,null,null);e.default=m.exports},441:function(t,e,i){var s=i(1),r=i(539);s({target:"Number",stat:!0,forced:Number.parseInt!=r},{parseInt:r})},539:function(t,e,i){var s=i(4),r=i(210).trim,n=i(211),l=s.parseInt,a=/^[+-]?0[Xx]/,o=8!==l(n+"08")||22!==l(n+"0x16");t.exports=o?function(t,e){var i=r(String(t));return l(i,e>>>0||(a.test(i)?16:10))}:l}}]);