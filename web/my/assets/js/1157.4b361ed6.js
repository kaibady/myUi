(window.webpackJsonp=window.webpackJsonp||[]).push([[1157],{2600:function(e,t,n){"use strict";n.r(t);var r=n(937);n(0).default.use(r.a);var a={data:function(){return{data:{columns:["渠道","访问量"],rows:[["直接访问",320],["邮件营销",302],["联盟广告",334],["视频广告",390],["搜索引擎",330],["电梯广告",320]]},settings:{radius:["20%","80%"],levelGap:15,level:[["视频广告","搜索引擎"],["直接访问","邮件营销"],["电梯广告","联盟广告"]],legend:"vertical"}}}},i=n(39),u=Object(i.a)(a,(function(){var e=this.$createElement;return(this._self._c||e)("my-chart-pie",{attrs:{data:this.data,settings:this.settings,debug:""}})}),[],!1,null,null,null);t.default=u.exports},599:function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"{value}",n=null;switch(e.unit){case"p":n="".concat(t,"%");break;case"k":n="".concat(t,"k");break;case"w":n="".concat(t,"万")}return{formatter:n}}n.d(t,"a",(function(){return r}))},643:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return v}));n(162),n(19),n(359),n(466),n(91),n(161),n(67),n(42),n(65),n(363),n(165),n(92);var r=n(300),a=n(295),i=n(66),u=n.n(i),c=n(599),l=n(487);function s(e,t){var n=Object(c.a)(t,"{@value}");return u()(e)?Object(a.a)(Object(a.a)(Object(a.a)({},n),e),{},{show:!0}):Object(a.a)(Object(a.a)({},n),{},{position:e,show:!0})}function o(e,t,n,r){return["".concat(e+t*n+r*n,"%"),"".concat(e+(n+1)*t+r*n,"%")]}function d(e,t,n,a){var i="line"===e?a.bars?[].concat(a.bars):[]:a.lines?[].concat(a.lines):[],c=a.valueAxis?[].concat(a.valueAxis):[],l="x"===a.direction?"yAxisIndex":"xAxisIndex";return n.slice(1).map((function(n){var s=0;c.length&&(s=c.findIndex((function(e){var t=u()(e)?e:{name:e};return[n.name,n.displayName].includes(t.name)}))),s=Math.max(0,s);var o="line"===e?i.includes(n.name)?"bar":e:i.includes(n.name)?"line":e,d=function(e,t){if(!e)return null;if(Array.isArray(e))return!!e.find((function(e){return[t.name,t.displayName,t].includes(e)}))?"stack":null;if(u()(e)){var n=Object.values(e).find((function(e){return!!e.find((function(e){return[t.name,t.displayName,t].includes(e)}))}));return n?n[0]:null}}(a.stack,n);return Object(r.a)({type:o,stack:d,areaStyle:d?{}:null,seriesLayoutBy:t},l,s)}))}function f(e){e.dimensions;var t=e.source,n=e.settings,r=n.level;if(!r)return{type:"pie",radius:n.radius,center:n.center,roseType:n.roseType,labelLine:l.b,itemStyle:n.roseType?l.c:{}};var a=r.length,i=n.radius||[0,90],u=parseInt(i[0]||0),c=parseInt(i[1]||0),s=n.levelGap;if(s*(a-1)>c-u)throw new Error("参数错误，环间距之和大于外径和内径差。请设置合适的levelGap参数(默认10%)");var d=(c-u-s*(a-1))/a;return r.map((function(e,r){var i=function(e,t,n){return t.filter((function(e){return n.includes(e[0])})).map((function(e){return{name:e[0],value:e[1]}}))}(0,t.slice(1),e),c=r===a-1;return{type:"pie",radius:o(u,d,r,s),center:n.center,roseType:n.roseType,label:c?{}:{position:"inside"},labelLine:l.b,itemStyle:n.roseType?l.c:{},data:i}}))}function v(e){var t=e.type,n=e.layout,r=void 0===n?"column":n,a=e.dimensions,i=e.settings,u=d(t,r,a,i);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;t&&(Array.isArray(t)?e.forEach((function(e,r){var a=n.slice(1)[r],i=t[r];i&&(e.label=s(i,a))})):e.forEach((function(e,r){var a=n.slice(1)[r];e.label=s(t,a)})))}(u,i.label,a),u}},937:function(e,t,n){"use strict";var r=n(535),a=(n(986),n(296)),i=(n(161),n(301),n(41)),u=n(605),c=n(604),l=n(643),s=n(516),o=n(322),d={center:{type:Array,default:function(){return["50%","50%"]}},radius:{type:[String,Number,Array],default:function(){return[0,"75%"]}},legend:{type:[String,Object],default:"horizontal",validator:function(e){return["horizontal","vertical"].includes(e)||"object"===Object(i.a)(e)}},roseType:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"radius","area"].includes(e)}},limit:Number,level:Array,levelGap:{type:Number,default:10}};var f={name:"MyChartPie",mixins:[r.a],adapter:function(e){var t,n=e.data,r=e.settings,a=Object(o.b)(n),i=Object(c.a)(a),f=Object(u.a)(d,r),v=Object(c.b)(i,a,f),p=Object(l.a)({dimensions:v.dimensions,settings:f,source:v.source}),b={tooltip:{},legend:(t=f.legend,"horizontal"===t?{orient:"horizontal"}:"vertical"===t?{orient:"vertical",right:0,top:30}:t),series:p,dataset:v};return Object(s.a)(b,{}),b}};t.a=Object(a.a)(f)}}]);