(window.webpackJsonp=window.webpackJsonp||[]).push([[923],{1835:function(t,e,n){},1836:function(t,e,n){},1852:function(t,e,n){"use strict";var a=n(296),o=(n(7),n(317)),i=n.n(o),s=n(0),r=(n(91),n(65),n(96),n(24),n(92),n(31),n(1693),{jpg:"data:image/jpg;base64,",png:"data:image/png;base64,",csv:"data:text/csv;charset=utf-8,"});n(438),n(40),n(94),n(68);var u={name:"MyCapture",props:{dom:{type:HTMLElement,default:function(){return document.body}},options:{type:Object},beforeCapture:{type:Function,default:function(){return Promise.resolve()}}},data:function(){return{h2c:null}},computed:{h2cOpt:function(){return Object.assign({logging:!1,allowTain:!0,useCORS:!0},this.options||{})}},methods:{capture:function(){var t=this;this.beforeCapture().then((function(){t.$emit("on-capture",t.dom),t.h2c?t._renderImg(t.h2c):n.e(1532).then(n.t.bind(null,3514,7)).then((function(e){e&&(t.h2c=e.default||e,t._renderImg(t.h2c))})).catch((function(e){console.log(e),t.$alert("控件加载失败")}))}))},_renderImg:function(t){var e=this,n=this.h2cOpt;t(this.dom,n).then((function(t){var n,a,o,i,s=t.toDataURL(),u=function(t,e,n){if(!t)return new Date;var a="string"==typeof t?new Date(t.replace(/-/g,"/")):t,o={y:0,M:0,d:0,h:0,m:0,s:0};Object.assign(o,n||{});var i={"M+":(a=new Date(o.y+a.getFullYear(),o.M+a.getMonth(),o.d+a.getDate(),o.h+a.getHours(),o.m+a.getMinutes(),o.s+a.getSeconds())).getMonth()+1,"d+":a.getDate(),"h+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),S:a.getMilliseconds()};if(e){for(var s in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,4===RegExp.$1.length?a.getFullYear():(a.getFullYear()+"").substr(4-RegExp.$1.length))),i)new RegExp("("+s+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?i[s]:("00"+i[s]).substr((""+i[s]).length)));return e}return a}(new Date,"yyyyMMddhhmmss");n=null,a="".concat(u,".png"),o=s,(i=document.createElement("a")).download=a,i.href=null===n?o:(r[n]||"")+o,i.click(),e.$emit("on-output",s)})).catch((function(t){e.$emit("on-failed",t)}))}}};s.default.use(i.a);var c=u,l=n(39),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"xdh-capture",on:{click:function(e){return e.preventDefault(),t.capture(e)}}},[t._t("button",[n("el-button",{attrs:{circle:"",icon:"el-icon-view"}})])],2)}),[],!1,null,null,null).exports;e.a=Object(a.a)(d)},2533:function(t,e,n){"use strict";var a=n(1836);n.n(a).a},296:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n(65),"My".toLowerCase();function a(t){return t.install=function(e){return"undefined"!=typeof window&&n(307).default(t),e.component(t.name,t)},t}},297:function(t,e,n){},298:function(t,e,n){"use strict";n(310);var a={version:"4.0.1",debug:!1,appName:null,routePrefix:null,router:{mode:"hash",base:"/"},autoRoutes:!0,vuex:{strict:!1},keys:{code:"code",data:"data",message:"msg",total:"total",list:"list",page:"page",limit:"limit",pages:"pages"},statusCode:{success:0,notLogin:401,authorize:403,error:500},axios:{headers:{"Content-Type":"application/json;charset=UTF-8"},timeout:0,withCredentials:!0,responseType:"json",maxContentLength:-1},svg:{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor"},access:{},mock:{timeout:"50-200"},scale:{width:1920,height:1080,disabled:!0,lock:!0},analysis:!1,microApp:{prefetch:!1,singular:!0,sandbox:!0}};e.a=a},299:function(t,e,n){},307:function(t,e,n){"use strict";n.r(e);n(160),n(65);var a=n(298),o=!1,i=[],s=null;a.a.analysis&&function(){if(!o){var t="c4e5f73318b5cb0c389e3d9a05f831cc",e=window._hmt;if(!e||e&&e.id!==t){var n=document.createElement("script");n.src="https://hm.baidu.com/hm.js?".concat(t);var a=document.getElementsByTagName("script")[0];a&&a.parentNode.insertBefore(n,a)}o=!0}}(),e.default=function(t){var e;a.a.analysis&&(e=t.name,i.push(e),clearTimeout(s),s=setTimeout((function(){if(window._hmt&&e){var t=window.location.host,n=window.location.href;window._hmt.push(["_trackEvent",t,i.join(","),a.a.version,n]),i=[]}}),3e3))}},3259:function(t,e,n){"use strict";n.r(e);n(7),n(1835),n(297);var a=n(1852),o=(n(356),n(299),n(317)),i=n.n(o),s=n(0),r={data:function(){return{targetDom:null,startTime:null,loading:!1,options:{}}},methods:{beforeCaptureHandle:function(){var t=this.$refs.target.cloneNode(!0);return t.style.width=this.$refs.target.clientWidth+"px",t.style.height=this.$refs.target.clientHeight+"px",t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.zIndex=20,t.style.transform="translateX(-200%)",document.body.appendChild(t),this.targetDom=t,this.options={width:this.targetDom.clientWidth,height:this.targetDom.clientHeight,scrollY:0,scrollX:0},Promise.resolve()},startCapHandle:function(){this.loading=!0},successHandle:function(){this.loading=!1,document.body.removeChild(this.targetDom),this.targetDom=null}}};s.default.use(i.a),s.default.use(a.a);var u=r,c=(n(2533),n(39)),l=Object(c.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"warp"},[n("ul",{ref:"target"},t._l(60,(function(e){return n("li",{key:e},[t._v(t._s(e))])})),0)]),t._v(" "),n("my-capture",{attrs:{dom:t.targetDom,"before-capture":t.beforeCaptureHandle,options:t.options},on:{"on-capture":t.startCapHandle,"on-output":t.successHandle}},[n("el-button",{attrs:{slot:"button",type:"primary",loading:t.loading,disabled:t.loading},slot:"button"},[t._v("列表截图")])],1)],1)}),[],!1,null,"4b852d90",null);e.default=l.exports},356:function(t,e,n){}}]);