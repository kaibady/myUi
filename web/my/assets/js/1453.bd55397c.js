(window.webpackJsonp=window.webpackJsonp||[]).push([[1453],{3427:function(e,t,r){"use strict";r.r(t);var a=r(378),n=r.n(a),u=r(408),l=r.n(u),o=r(448),s=r.n(o),i=r(372),m=r.n(i),c=r(0),d={data:function(){return{numberValidateForm:{age:""}}},methods:{submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm:function(e){this.$refs[e].resetFields()}}};c.default.use(m.a),c.default.use(s.a),c.default.use(l.a),c.default.use(n.a);var f=d,b=r(20),p=Object(b.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"numberValidateForm",staticClass:"demo-ruleForm",attrs:{model:e.numberValidateForm,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"年龄",prop:"age",rules:[{required:!0,message:"年龄不能为空"},{type:"number",message:"年龄必须为数字值"}]}},[r("el-input",{attrs:{type:"age",autocomplete:"off"},model:{value:e.numberValidateForm.age,callback:function(t){e.$set(e.numberValidateForm,"age",e._n(t))},expression:"numberValidateForm.age"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("numberValidateForm")}}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:function(t){return e.resetForm("numberValidateForm")}}},[e._v("重置")])],1)],1)}),[],!1,null,null,null);t.default=p.exports}}]);