(window.webpackJsonp=window.webpackJsonp||[]).push([[972],{1735:function(t,e,n){},2435:function(t,e,n){"use strict";var s=n(1735);n.n(s).a},296:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n(65),"My".toLowerCase();function s(t){return t.install=function(e){return"undefined"!=typeof window&&n(307).default(t),e.component(t.name,t)},t}},297:function(t,e,n){},298:function(t,e,n){"use strict";n(310);var s={version:"4.0.1",debug:!1,appName:null,routePrefix:null,router:{mode:"hash",base:"/"},autoRoutes:!0,vuex:{strict:!1},keys:{code:"code",data:"data",message:"msg",total:"total",list:"list",page:"page",limit:"limit",pages:"pages"},statusCode:{success:0,notLogin:401,authorize:403,error:500},axios:{headers:{"Content-Type":"application/json;charset=UTF-8"},timeout:0,withCredentials:!0,responseType:"json",maxContentLength:-1},svg:{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor"},access:{},mock:{timeout:"50-200"},scale:{width:1920,height:1080,disabled:!0,lock:!0},analysis:!1,microApp:{prefetch:!1,singular:!0,sandbox:!0}};e.a=s},2987:function(t,e,n){"use strict";n.r(e);n(752),n(297);var s=n(753),i=n(0),r={components:{MyNumber:s.a}};i.default.use(s.a);var a=r,u=(n(2435),n(39)),o=Object(u.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("my-number",{attrs:{value:"0.23233322",percentage:""}}),this._v(" "),e("my-number",{attrs:{value:"0.23233322",percentage:"",precision:2}})],1)}),[],!1,null,"d95eabb4",null);e.default=o.exports},307:function(t,e,n){"use strict";n.r(e);n(160),n(65);var s=n(298),i=!1,r=[],a=null;s.a.analysis&&function(){if(!i){var t="c4e5f73318b5cb0c389e3d9a05f831cc",e=window._hmt;if(!e||e&&e.id!==t){var n=document.createElement("script");n.src="https://hm.baidu.com/hm.js?".concat(t);var s=document.getElementsByTagName("script")[0];s&&s.parentNode.insertBefore(n,s)}i=!0}}(),e.default=function(t){var e;s.a.analysis&&(e=t.name,r.push(e),clearTimeout(a),a=setTimeout((function(){if(window._hmt&&e){var t=window.location.host,n=window.location.href;window._hmt.push(["_trackEvent",t,r.join(","),s.a.version,n]),r=[]}}),3e3))}},752:function(t,e,n){},753:function(t,e,n){"use strict";var s=n(296),i=(n(161),n(160),n(301),n(755),n(756),n(510),n(439),n(40),n(68),n(367),n(757),n(295)),r=n(300),a=n(758),u={auto:!0,startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,separator:","},o={name:"MyNumber",mixins:[{data:function(){return this.counter=null,{}},watch:{value:function(t){this.update(t)},countUpOptions:function(){this.countUpOptions&&this.init()}},methods:{init:function(){this.setCountUp(),this.countUpOptions.auto&&this.start()},setCountUp:function(){this.counter&&(this.counter=null),this.counter=new a.a(this.$refs.container,this.value,this.countUpOptions)},restart:function(){this.setCountUp(),this.start()},start:function(){this.reset(),this.counter&&this.counter.start(this.onComplete)},pauseResume:function(){this.counter&&this.counter.pauseResume()},reset:function(){this.counter&&this.counter.reset()},update:function(t){t?this.counter&&this.counter.update(t):this.counter&&this.counter.update(this.value)},onComplete:function(){this.$emit("complete")}},mounted:function(){this.countUpOptions&&this.init()},beforeDestroy:function(){this.counter=null}}],props:{value:[Number,String],defaultValue:{type:[Number,String],default:0},countUp:{type:[Boolean,Object]},trend:{type:String,validator:function(t){return["up","down","-"].includes(t)}},precision:{type:Number,default:0},separator:{type:String,default:","},prefix:{type:String},suffix:String,percentage:Boolean,type:{type:String,default:"",validator:function(t){return["","primary","success","warning","danger","info"].includes(t)}},sup:Boolean},computed:{displayValue:function(){return this.isNumber(this.value)?this.percentage?this.getPercent(this.value):this.format(this.value,this.precision,this.separator):this.defaultValue?this.getPercent(this.defaultValue):""},trendIcon:function(){if(!this.trend)return null;return{up:"el-icon-top",down:"el-icon-bottom","-":"el-icon-minus"}[this.trend]},trendClasses:function(){if(this.trend)return"-"===this.trend?"is-default":"is-".concat(this.trend)},classes:function(){return Object(r.a)({"my-number":!0,"is-pointer":this.$listeners.click},"is-".concat(this.type),!!this.type)},supClass:function(){return{"my-number__sup":this.sup}},countUpOptions:function(){return this.countUp?Object(i.a)(Object(i.a)(Object(i.a)({},u),this.countUp),{},{separator:this.separator,decimalPlaces:this.precision}):null}},methods:{isNumber:function(t){var e=Number.parseFloat(t);return!Number.isNaN(e)&&Number.isFinite(e)},getPercent:function(t){return this.percentage?"".concat((100*Number.parseFloat(t)).toFixed(this.precision),"%"):t},format:function(t,e,n){for(var s=Number.parseFloat(String(t).replace(/[^\d.-]/g,"")).toFixed(e)+"",i=s.split(".")[0].split("").reverse(),r=s.split(".")[1],a="",u=0;u<i.length;u++)a+=i[u]+((u+1)%3==0&&u+1!==i.length?"".concat(n):"");return a.split("").reverse().join("")+(r?".".concat(r):"")}}},c=n(39),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._g({class:t.classes},t.$listeners),[t.prefix||t.$slots.prefix?n("span",{class:t.supClass},[t._t("prefix",[t._v(t._s(t.prefix))])],2):t._e(),t._v(" "),n("span",{ref:"container",staticClass:"my-number__value"},[t._t("default",[t._v(t._s(t.displayValue))],{value:t.value,displayValue:t.displayValue})],2),t._v(" "),t.suffix||t.$slots.suffix?n("span",{class:t.supClass},[t._t("suffix",[t._v(t._s(t.suffix))])],2):t._e(),t._v(" "),t.trend||t.$slots.trend?n("span",{staticClass:"my-number__trend",class:t.trendClasses},[t._t("trend",[n("i",{class:t.trendIcon})],{trend:t.trend})],2):t._e()])}),[],!1,null,null,null).exports;e.a=Object(s.a)(l)}}]);