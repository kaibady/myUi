(window.webpackJsonp=window.webpackJsonp||[]).push([[1341],{1319:function(e,i,t){},1539:function(e,i,t){},3160:function(e,i,t){"use strict";t.r(i);t(1319),t(364);var l=t(1594),a=t.n(l),n=(t(1539),t(1540)),o=t.n(n),s=t(0),r={data:function(){return{dialogImageUrl:"",dialogVisible:!1}},methods:{handleRemove:function(e,i){console.log(e,i)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0}}};s.default.use(o.a),s.default.use(a.a);var d=r,u=t(19),c=Object(u.a)(d,(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove}},[t("i",{staticClass:"el-icon-plus"})]),e._v(" "),t("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(i){e.dialogVisible=i}}},[t("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)}),[],!1,null,null,null);i.default=c.exports},364:function(e,i,t){}}]);