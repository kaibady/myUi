(window.webpackJsonp=window.webpackJsonp||[]).push([[955],{1008:function(t,e,n){"use strict";n(902)},1013:function(t,e,n){"use strict";var s=n(47),i=n(46),u=(n(745),n(119),n(746)),r=(n(393),n(32),n(79),n(704),n(201),n(437),n(888));delete u.a.props.type;var a={name:"MyDvNumber",inheritAttrs:!1,components:{MyNumber:u.a,DvTitle:r.a},props:Object(i.a)(Object(i.a)({},u.a.props),{},{background:Boolean}),computed:{classes:function(){return{"is-background":this.background}}},methods:{getArray:function(t){return String(t).split("").map((function(t){return{value:t,number:!Number.isNaN(Number.parseInt(t))}}))}}},o=(n(1008),n(20)),c=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("DvTitle",t._b({staticClass:"my-dv-number",class:t.classes},"DvTitle",t.$attrs,!1),[n("MyNumber",t._g(t._b({scopedSlots:t._u([t.background?{key:"default",fn:function(e){var s=e.displayValue;return t._l(t.getArray(s),(function(e,s){return n("span",{key:s,class:{"is-number":e.number}},[t._v(t._s(e.value))])}))}}:null],null,!0)},"MyNumber",t.$props,!1),t.$listeners))],1)}),[],!1,null,null,null).exports;e.a=Object(s.a)(c)},2180:function(t,e,n){},2487:function(t,e,n){"use strict";n(2180)},2917:function(t,e,n){"use strict";n.r(e);var s=n(436),i=n(1013),u=n(403),r=n(372),a=n.n(r),o=n(0),c={data:function(){return{value:12343}},methods:{start:function(){this.value=1e4*Math.random()}}};o.default.use(a.a),o.default.use(u.a),o.default.use(i.a),o.default.use(s.a);var l=c,p=(n(2487),n(20)),f=Object(p.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100px"}},[n("my-dv-page",{attrs:{target:"parent",fit:""}},[n("my-dv-number",{attrs:{value:t.value,type:"primary","count-up":"",position:!1,inline:""}}),t._v(" "),n("my-dv-number",{attrs:{value:t.value,type:"success","count-up":{startVal:1e3},position:!1,inline:""}}),t._v(" "),n("my-dv-number",{attrs:{value:t.value,type:"warning","count-up":{duration:5},position:!1,inline:""}}),t._v(" "),n("my-dv-box",{attrs:{top:"50px"}},[n("el-button",{on:{click:t.start}},[t._v("开始动画")])],1)],1)],1)}),[],!1,null,"28fbcd3e",null);e.default=f.exports},745:function(t,e,n){},746:function(t,e,n){"use strict";var s=n(47),i=n(46),u=n(78),r=(n(201),n(118),n(751),n(442),n(704),n(752),n(425),n(51),n(32),n(393),n(81),n(753)),a={auto:!0,startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,separator:","},o={name:"MyNumber",mixins:[{data:function(){return this.counter=null,{}},watch:{value:function(t){this.update(t)},countUpOptions:function(){this.countUpOptions&&this.init()}},methods:{init:function(){this.setCountUp(),this.countUpOptions.auto&&this.start()},setCountUp:function(){this.counter&&(this.counter=null),this.counter=new r.a(this.$refs.container,this.value,this.countUpOptions)},restart:function(){this.setCountUp(),this.start()},start:function(){this.reset(),this.counter&&this.counter.start(this.onComplete)},pauseResume:function(){this.counter&&this.counter.pauseResume()},reset:function(){this.counter&&this.counter.reset()},update:function(t){t?this.counter&&this.counter.update(t):this.counter&&this.counter.update(this.value)},onComplete:function(){this.$emit("complete")}},mounted:function(){this.countUpOptions&&this.init()},beforeDestroy:function(){this.counter=null}}],props:{value:[Number,String],defaultValue:{type:[Number,String],default:0},countUp:{type:[Boolean,Object]},trend:{type:String,validator:function(t){return["up","down","-"].includes(t)}},precision:{type:Number,default:0},separator:{type:String,default:","},prefix:{type:String},suffix:String,percentage:Boolean,type:{type:String,default:"",validator:function(t){return["","primary","success","warning","danger","info"].includes(t)}},sup:Boolean},computed:{displayValue:function(){return this.isNumber(this.value)?this.percentage?this.getPercent(this.value):this.format(this.value,this.precision,this.separator):this.defaultValue?this.getPercent(this.defaultValue):""},trendIcon:function(){if(!this.trend)return null;return{up:"el-icon-top",down:"el-icon-bottom","-":"el-icon-minus"}[this.trend]},trendClasses:function(){if(this.trend)return"-"===this.trend?"is-default":"is-".concat(this.trend)},classes:function(){return Object(u.a)({"my-number":!0,"is-pointer":this.$listeners.click},"is-".concat(this.type),!!this.type)},supClass:function(){return{"my-number__sup":!!this.sup}},countUpOptions:function(){return this.countUp?Object(i.a)(Object(i.a)(Object(i.a)({},a),this.countUp),{},{separator:this.separator,decimalPlaces:this.precision}):null}},methods:{isNumber:function(t){var e=Number.parseFloat(t);return!Number.isNaN(e)&&Number.isFinite(e)},getPercent:function(t){return this.percentage?"".concat((100*Number.parseFloat(t)).toFixed(this.precision),"%"):t},format:function(t,e,n){for(var s=Number.parseFloat(String(t).replace(/[^\d.-]/g,"")).toFixed(e)+"",i=s.split(".")[0].split("").reverse(),u=s.split(".")[1],r="",a=0;a<i.length;a++)r+=i[a]+((a+1)%3==0&&a+1!==i.length?"".concat(n):"");return r.split("").reverse().join("")+(u?".".concat(u):"")}}},c=n(20),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._g({class:t.classes},t.$listeners),[t.prefix||t.$slots.prefix?n("span",{staticClass:"my-number__prefix"},[t._t("prefix",[t._v(t._s(t.prefix))])],2):t._e(),t._v(" "),n("span",{ref:"container",staticClass:"my-number__value"},[t._t("default",[t._v(t._s(t.displayValue))],{value:t.value,displayValue:t.displayValue})],2),t._v(" "),t.suffix||t.$slots.suffix?n("span",{staticClass:"my-number__suffix"},[t._t("suffix",[t._v(t._s(t.suffix))])],2):t._e(),t._v(" "),t.trend||t.$slots.trend?n("span",{staticClass:"my-number__trend",class:t.trendClasses},[t._t("trend",[n("i",{class:t.trendIcon})],{trend:t.trend})],2):t._e()])}),[],!1,null,null,null).exports;e.a=Object(s.a)(l)},902:function(t,e,n){}}]);