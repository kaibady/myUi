(window.webpackJsonp=window.webpackJsonp||[]).push([[1315],{1330:function(e,t,c){},1552:function(e,t,c){},3254:function(e,t,c){"use strict";c.r(t);c(1552),c(364);var o=c(1195),n=c.n(o),r=(c(1330),c(1023)),a=c.n(r),s=(c(379),c(371)),l=c.n(s),u=c(0);u.default.use(l.a),u.default.use(a.a),u.default.use(n.a);var i={data:function(){return{percentage:20,customColor:"#409eff",customColors:[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}]}},methods:{customColorMethod:function(e){return e<30?"#909399":e<70?"#e6a23c":"#67c23a"},increase:function(){this.percentage+=10,this.percentage>100&&(this.percentage=100)},decrease:function(){this.percentage-=10,this.percentage<0&&(this.percentage=0)}}},p=c(19),g=Object(p.a)(i,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("el-progress",{attrs:{percentage:e.percentage,color:e.customColor}}),e._v(" "),c("el-progress",{attrs:{percentage:e.percentage,color:e.customColorMethod}}),e._v(" "),c("el-progress",{attrs:{percentage:e.percentage,color:e.customColors}}),e._v(" "),c("div",[c("el-button-group",[c("el-button",{attrs:{icon:"el-icon-minus"},on:{click:e.decrease}}),e._v(" "),c("el-button",{attrs:{icon:"el-icon-plus"},on:{click:e.increase}})],1)],1)],1)}),[],!1,null,null,null);t.default=g.exports},364:function(e,t,c){},379:function(e,t,c){}}]);