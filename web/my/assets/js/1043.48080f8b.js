(window.webpackJsonp=window.webpackJsonp||[]).push([[1043],{1696:function(a,t,e){},2412:function(a,t,e){"use strict";var s=e(1696);e.n(s).a},2817:function(a,t,e){"use strict";e.r(t);e(7),e(26),e(37),e(682),e(944),e(355);var s=e(1166),r=e.n(s),i={data:function(){return{imageUrl:""}},methods:{handleAvatarSuccess:function(a,t){this.imageUrl=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(a){var t="image/jpeg"===a.type,e=a.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),e||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&e}}};e(0).default.use(r.a);var n=i,o=(e(2412),e(18)),c=Object(o.a)(n,(function(){var a=this.$createElement,t=this._self._c||a;return t("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":this.handleAvatarSuccess,"before-upload":this.beforeAvatarUpload}},[this.imageUrl?t("img",{staticClass:"avatar",attrs:{src:this.imageUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])}),[],!1,null,null,null);t.default=c.exports},355:function(a,t,e){},944:function(a,t,e){}}]);