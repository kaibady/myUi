(window.webpackJsonp=window.webpackJsonp||[]).push([[1185],{3484:function(e,t,r){"use strict";r.r(t);r(473),r(362);var n=r(379),a=r.n(n),u=(r(531),r(442)),o=r.n(u),l=(r(532),r(541)),i=r.n(l),s=(r(377),r(374)),m=r.n(s),c=r(0),f={data:function(){return{numberValidateForm:{age:""}}},methods:{submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm:function(e){this.$refs[e].resetFields()}}};c.default.use(m.a),c.default.use(i.a),c.default.use(o.a),c.default.use(a.a);var d=f,b=r(18),p=Object(b.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"numberValidateForm",staticClass:"demo-ruleForm",attrs:{model:e.numberValidateForm,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"年龄",prop:"age",rules:[{required:!0,message:"年龄不能为空"},{type:"number",message:"年龄必须为数字值"}]}},[r("el-input",{attrs:{type:"age",autocomplete:"off"},model:{value:e.numberValidateForm.age,callback:function(t){e.$set(e.numberValidateForm,"age",e._n(t))},expression:"numberValidateForm.age"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("numberValidateForm")}}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:function(t){return e.resetForm("numberValidateForm")}}},[e._v("重置")])],1)],1)}),[],!1,null,null,null);t.default=p.exports},362:function(e,t,r){},377:function(e,t,r){},473:function(e,t,r){},531:function(e,t,r){},532:function(e,t,r){}}]);