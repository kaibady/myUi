(window.webpackJsonp=window.webpackJsonp||[]).push([[1181],{3589:function(e,t,i){"use strict";i.r(t);i(636),i(364);var n=i(748),a=i.n(n),s=(i(644),i(752)),r=i.n(s),o=i(0);o.default.use(r.a),o.default.use(a.a);var c={data:function(){return{tableData:[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-08",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-06",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-07",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333}]}}},l=i(19),d=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("el-table",{staticStyle:{width:"100%"},attrs:{data:this.tableData,height:"250"}},[t("el-table-column",{attrs:{fixed:"",prop:"date",label:"日期",width:"150"}}),this._v(" "),t("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),this._v(" "),t("el-table-column",{attrs:{prop:"province",label:"省份",width:"120"}}),this._v(" "),t("el-table-column",{attrs:{prop:"city",label:"市区",width:"120"}}),this._v(" "),t("el-table-column",{attrs:{prop:"address",label:"地址",width:"300"}}),this._v(" "),t("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"120"}})],1)}),[],!1,null,null,null);t.default=d.exports},364:function(e,t,i){},366:function(e,t,i){"use strict";t.__esModule=!0,t.removeResizeListener=t.addResizeListener=void 0;var n,a=i(387),s=(n=a)&&n.__esModule?n:{default:n};var r="undefined"==typeof window,o=function(e){var t=e,i=Array.isArray(t),n=0;for(t=i?t:t[Symbol.iterator]();;){var a;if(i){if(n>=t.length)break;a=t[n++]}else{if((n=t.next()).done)break;a=n.value}var s=a.target.__resizeListeners__||[];s.length&&s.forEach((function(e){e()}))}};t.addResizeListener=function(e,t){r||(e.__resizeListeners__||(e.__resizeListeners__=[],e.__ro__=new s.default(o),e.__ro__.observe(e)),e.__resizeListeners__.push(t))},t.removeResizeListener=function(e,t){e&&e.__resizeListeners__&&(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||e.__ro__.disconnect())}},370:function(e,t,i){"use strict";function n(e,t,i){this.$children.forEach((function(a){a.$options.componentName===e?a.$emit.apply(a,[t].concat(i)):n.apply(a,[e,t].concat([i]))}))}t.__esModule=!0,t.default={methods:{dispatch:function(e,t,i){for(var n=this.$parent||this.$root,a=n.$options.componentName;n&&(!a||a!==e);)(n=n.$parent)&&(a=n.$options.componentName);n&&n.$emit.apply(n,[t].concat(i))},broadcast:function(e,t,i){n.call(this,e,t,i)}}}},525:function(e,t,i){"use strict";t.__esModule=!0;i(369);t.default={mounted:function(){},methods:{getMigratingConfig:function(){return{props:{},events:{}}}}}},636:function(e,t,i){},644:function(e,t,i){}}]);