(window.webpackJsonp=window.webpackJsonp||[]).push([[1173],{3462:function(e,t,n){"use strict";n.r(t);n(636),n(364);var i=n(748),a=n.n(i),s=(n(644),n(752)),r=n.n(s),o=n(0);o.default.use(r.a),o.default.use(a.a);var l={data:function(){return{tableData:[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-08",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-06",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-07",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333}]}}},c=n(19),d=Object(c.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("el-table",{staticStyle:{width:"100%"},attrs:{data:this.tableData}},[t("el-table-column",{attrs:{prop:"date",label:"日期",width:"150"}}),this._v(" "),t("el-table-column",{attrs:{label:"配送信息"}},[t("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),this._v(" "),t("el-table-column",{attrs:{label:"地址"}},[t("el-table-column",{attrs:{prop:"province",label:"省份",width:"120"}}),this._v(" "),t("el-table-column",{attrs:{prop:"city",label:"市区",width:"120"}}),this._v(" "),t("el-table-column",{attrs:{prop:"address",label:"地址",width:"300"}}),this._v(" "),t("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"120"}})],1)],1)],1)}),[],!1,null,null,null);t.default=d.exports},364:function(e,t,n){},366:function(e,t,n){"use strict";t.__esModule=!0,t.removeResizeListener=t.addResizeListener=void 0;var i,a=n(387),s=(i=a)&&i.__esModule?i:{default:i};var r="undefined"==typeof window,o=function(e){var t=e,n=Array.isArray(t),i=0;for(t=n?t:t[Symbol.iterator]();;){var a;if(n){if(i>=t.length)break;a=t[i++]}else{if((i=t.next()).done)break;a=i.value}var s=a.target.__resizeListeners__||[];s.length&&s.forEach((function(e){e()}))}};t.addResizeListener=function(e,t){r||(e.__resizeListeners__||(e.__resizeListeners__=[],e.__ro__=new s.default(o),e.__ro__.observe(e)),e.__resizeListeners__.push(t))},t.removeResizeListener=function(e,t){e&&e.__resizeListeners__&&(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||e.__ro__.disconnect())}},370:function(e,t,n){"use strict";function i(e,t,n){this.$children.forEach((function(a){a.$options.componentName===e?a.$emit.apply(a,[t].concat(n)):i.apply(a,[e,t].concat([n]))}))}t.__esModule=!0,t.default={methods:{dispatch:function(e,t,n){for(var i=this.$parent||this.$root,a=i.$options.componentName;i&&(!a||a!==e);)(i=i.$parent)&&(a=i.$options.componentName);i&&i.$emit.apply(i,[t].concat(n))},broadcast:function(e,t,n){i.call(this,e,t,n)}}}},525:function(e,t,n){"use strict";t.__esModule=!0;n(369);t.default={mounted:function(){},methods:{getMigratingConfig:function(){return{props:{},events:{}}}}}},636:function(e,t,n){},644:function(e,t,n){}}]);