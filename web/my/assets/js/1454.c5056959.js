(window.webpackJsonp=window.webpackJsonp||[]).push([[1454],{2557:function(e,n,t){var o={"./dashboard-analysis.vue":[3768,0,1,2,3,455],"./dashboard-monitor.vue":[3769,0,1,2,8,565],"./dashboard-workplace.vue":[3770,0,1,2,3,454],"./dv-01.vue":[2239,0,1,5,6,467],"./dv-02.vue":[2242,0,1,2,3,453],"./dv-03.vue":[2240,0,1,2,3,444],"./dv-04.vue":[2243,0,1,2,3,446],"./dv-05.vue":[2241,0,1,4,5,495],"./form-advance.vue":[3771,0,1,2,3,479],"./form-basic.vue":[2885,0,1,2,3,483],"./form-step.vue":[3772,0,1,3,10,580],"./layout.vue":[3773,0,1,2,8,513],"./list-basic.vue":[3774,0,1,2,3,461],"./list-card.vue":[3775,0,1,2,3,505],"./list-crud.vue":[3776,0,1,2,3,459],"./list-query.vue":[3777,0,1,2,3,462],"./list-tree.vue":[3778,0,1,2,3,486],"./login.vue":[3779,0,1,3,10,664],"./profile-advanced.vue":[3780,0,1,2,3,481],"./profile-basic.vue":[3781,0,1,2,3,487],"./search-list-app.vue":[3782,0,1,2,3,463],"./search-list-article.vue":[3783,0,1,2,3,465],"./search-list-project.vue":[3784,0,1,2,3,464]};function a(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],a=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(a)}))}a.keys=function(){return Object.keys(o)},a.id=2557,e.exports=a},4085:function(e,n,t){"use strict";t.r(n);t(9),t(13),t(17);var o={name:"PageLoader",props:{page:String,local:String,options:Object},data:function(){return{component:null}},mounted:function(){var e=this;t(2557)("./".concat(this.page,".vue")).then((function(n){e.component=n.default}))}},a=t(19),r=Object(a.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Demo",{attrs:{toggleText:"安装命令"},scopedSlots:e._u([{key:"desc",fn:function(){return[e._v("\n    npm run page "+e._s(e.page)+" "+e._s(e.local)+"\n  ")]},proxy:!0}])},[t("div",{staticClass:"page-loader"},[t("ClientOnly",[e.component?t(e.component,e._b({tag:"component"},"component",e.options,!1)):e._e(),e._v(" "),e.component?e._e():t("div",{staticClass:"page-loader__loading"},[e._v("正在努力加载中...")])],1)],1)])}),[],!1,null,"47aaa830",null);n.default=r.exports}}]);