(window.webpackJsonp=window.webpackJsonp||[]).push([[1156],{3042:function(t,a,e){"use strict";e.r(a);e(818),e(368);var n=e(647),o=e.n(n),l=(e(819),e(648)),u=e.n(l),r=(e(77),e(79),e(201),e(210),e(0)),m={data:function(){return{tableData:[{id:"12987122",name:"王小虎",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15}]}},methods:{getSummaries:function(t){var a=t.columns,e=t.data,n=[];return a.forEach((function(t,a){if(0!==a){var o=e.map((function(a){return Number(a[t.property])}));o.every((function(t){return isNaN(t)}))?n[a]="N/A":(n[a]=o.reduce((function(t,a){var e=Number(a);return isNaN(e)?t:t+a}),0),n[a]+=" 元")}else n[a]="总价"})),n}}};r.default.use(u.a),r.default.use(o.a);var i=m,s=e(20),c=Object(s.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","show-summary":""}},[e("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t._v(" "),e("el-table-column",{attrs:{prop:"amount1",sortable:"",label:"数值 1"}}),t._v(" "),e("el-table-column",{attrs:{prop:"amount2",sortable:"",label:"数值 2"}}),t._v(" "),e("el-table-column",{attrs:{prop:"amount3",sortable:"",label:"数值 3"}})],1),t._v(" "),e("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData,border:"",height:"200","summary-method":t.getSummaries,"show-summary":""}},[e("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t._v(" "),e("el-table-column",{attrs:{prop:"amount1",label:"数值 1（元）"}}),t._v(" "),e("el-table-column",{attrs:{prop:"amount2",label:"数值 2（元）"}}),t._v(" "),e("el-table-column",{attrs:{prop:"amount3",label:"数值 3（元）"}})],1)],1)}),[],!1,null,null,null);a.default=c.exports},368:function(t,a,e){},373:function(t,a,e){"use strict";function n(t,a,e){this.$children.forEach((function(o){o.$options.componentName===t?o.$emit.apply(o,[a].concat(e)):n.apply(o,[t,a].concat([e]))}))}a.__esModule=!0,a.default={methods:{dispatch:function(t,a,e){for(var n=this.$parent||this.$root,o=n.$options.componentName;n&&(!o||o!==t);)(n=n.$parent)&&(o=n.$options.componentName);n&&n.$emit.apply(n,[a].concat(e))},broadcast:function(t,a,e){n.call(this,t,a,e)}}}},534:function(t,a,e){"use strict";a.__esModule=!0;e(371);a.default={mounted:function(){},methods:{getMigratingConfig:function(){return{props:{},events:{}}}}}},818:function(t,a,e){},819:function(t,a,e){}}]);