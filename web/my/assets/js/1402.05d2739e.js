(window.webpackJsonp=window.webpackJsonp||[]).push([[1402],{3030:function(e,t,a){"use strict";a.r(t);var n=a(431),l=a.n(n),s=a(568),r=a.n(s),o=a(569),d=a.n(o),u=a(599),i=a.n(u),c=a(372),f=a.n(c),_=a(0),p={data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}},methods:{handleEdit:function(e,t){console.log(e,t)},handleDelete:function(e,t){console.log(e,t)}}};_.default.use(f.a),_.default.use(i.a),_.default.use(d.a),_.default.use(r.a),_.default.use(l.a);var m=p,v=a(20),w=Object(v.a)(m,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{label:"日期",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.date))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"姓名",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{trigger:"hover",placement:"top"}},[a("p",[e._v("姓名: "+e._s(t.row.name))]),e._v(" "),a("p",[e._v("住址: "+e._s(t.row.address))]),e._v(" "),a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.name))])],1)])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)}),[],!1,null,null,null);t.default=w.exports}}]);