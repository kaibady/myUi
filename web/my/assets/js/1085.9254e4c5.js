(window.webpackJsonp=window.webpackJsonp||[]).push([[1085],{2500:function(t,e,n){},2836:function(t,e,n){"use strict";n(2500)},3793:function(t,e,n){"use strict";n.r(e);n(697),n(117);var r=n(701),i=n(0),s={components:{MyLayout:r.a}};i.default.use(r.a);var o=s,a=(n(2836),n(19)),u=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("my-layout",{scopedSlots:t._u([{key:"north",fn:function(){return[t._v("North")]},proxy:!0},{key:"west",fn:function(){return[t._v("West")]},proxy:!0},{key:"east",fn:function(){return[t._v("East")]},proxy:!0},{key:"south",fn:function(){return[t._v("South")]},proxy:!0}])},[t._v(" "),t._v(" "),t._v(" "),t._v(" "),n("div",[t._v("Main")])])}),[],!1,null,"99a18ae8",null);e.default=u.exports},403:function(t,e,n){"use strict";var r=n(207),i=n(212),s=n(7),o=n(22),a=n(415),u=n(209),l=n(21),c=n(208),h=n(82),d=n(1),f=[].push,p=Math.min,g=!d((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(o(this)),s=void 0===n?4294967295:n>>>0;if(0===s)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,s);for(var a,u,l,c=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,d+"g");(a=h.call(g,r))&&!((u=g.lastIndex)>p&&(c.push(r.slice(p,a.index)),a.length>1&&a.index<r.length&&f.apply(c,a.slice(1)),l=a[0].length,p=u,c.length>=s));)g.lastIndex===a.index&&g.lastIndex++;return p===r.length?!l&&g.test("")||c.push(""):c.push(r.slice(p)),c.length>s?c.slice(0,s):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=o(this),s=null==e?void 0:e[t];return void 0!==s?s.call(e,i,n):r.call(String(i),e,n)},function(t,i){var o=n(r,t,this,i,r!==e);if(o.done)return o.value;var h=s(t),d=String(this),f=a(h,RegExp),v=h.unicode,y=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(g?"y":"g"),b=new f(g?h:"^(?:"+h.source+")",y),m=void 0===i?4294967295:i>>>0;if(0===m)return[];if(0===d.length)return null===c(b,d)?[d]:[];for(var x=0,_=0,w=[];_<d.length;){b.lastIndex=g?_:0;var R,O=c(b,g?d:d.slice(_));if(null===O||(R=p(l(b.lastIndex+(g?0:_)),d.length))===x)_=u(d,_,v);else{if(w.push(d.slice(x,_)),w.length===m)return w;for(var j=1;j<=O.length-1;j++)if(w.push(O[j]),w.length===m)return w;_=x=R}}return w.push(d.slice(x)),w}]}),!g)},415:function(t,e,n){var r=n(7),i=n(81),s=n(3)("species");t.exports=function(t,e){var n,o=r(t).constructor;return void 0===o||null==(n=r(o)[s])?e:i(n)}},448:function(t,e,n){var r=n(2),i=n(524);r({target:"Number",stat:!0,forced:Number.parseInt!=i},{parseInt:i})},524:function(t,e,n){var r=n(4),i=n(210).trim,s=n(211),o=r.parseInt,a=/^[+-]?0[Xx]/,u=8!==o(s+"08")||22!==o(s+"0x16");t.exports=u?function(t,e){var n=i(String(t));return o(n,e>>>0||(a.test(n)?16:10))}:o},697:function(t,e,n){},701:function(t,e,n){"use strict";var r=n(47),i=n(46),s=n(76),o=n(587),a=n.n(o),u=n(588),l=n.n(u),c=n(600),h=n.n(c),d=n(589),f=n.n(d),p=n(590),g=n.n(p),v=(n(116),n(403),n(32),n(448),n(201),{north:g.a,default:f.a,south:h.a,east:l.a,west:l.a}),y={name:"MyLayout",components:{Container:a.a,Header:g.a,Main:f.a,Footer:h.a,Aside:l.a},props:{fit:Boolean,border:Boolean,split:Boolean,direction:{type:String,validator:function(t){return["vertical","horizontal"].includes(t)}},north:Object,south:Object,east:Object,west:Object},data:function(){return{}},computed:{classes:function(){return Object(s.a)({"my-layout":!0,"is-fit":this.fit,"is-border":this.border,"is-split":this.split},"is-".concat(this.direction),!!this.direction)}},methods:{getDirection:function(){if(this.direction)return this.direction;var t=this.$slots,e=t.north,n=t.south,r=t.west,i=t.east,s=!r&&!i;return s||!s&&!(!e&&!n)?"vertical":"horizontal"},getRegionOptions:function(t){return Object(i.a)({},this[t]||{})},regionRender:function(t){var e=this.$createElement;if(this.$slots[t]){var n=this.getRegionOptions(t),r={north:"height",south:"height",west:"width",east:"width"}[t],i=Number.parseInt(void 0===n[r]?{north:60,south:60,west:256,east:256}[t]:n[r]);return this.$createElement(v[t],{class:["my-layout__region","my-layout__".concat(t),{"is-split":this.split,"is-border":this.border}],style:Object(s.a)({},r,"number"==typeof i?"".concat(i,"px"):i)},this.fit&&i?[e("div",{class:"my-layout__fit"},[this.$slots[t]])]:this.$slots[t])}}},render:function(){var t=this,e=arguments[0],n=this.$slots,r=n.north,i=n.south,s=n.west,o=n.east,a=this.getDirection(),u=function(){return s||o?e("Container",{class:"my-layout__wrapper",attrs:{direction:"horizontal"}},[[t.regionRender("west"),t.regionRender("default"),t.regionRender("east")]]):t.regionRender("default")},l=function(){return r||i?e("Container",{class:"my-layout__wrapper",attrs:{direction:"vertical"}},[[t.regionRender("north"),t.regionRender("default"),t.regionRender("south")]]):t.regionRender("default")};return e("Container",{attrs:{direction:a},class:this.classes},["vertical"===a?[this.regionRender("north"),u(),this.regionRender("south")]:[this.regionRender("west"),l(),this.regionRender("east")]])}},b=n(19),m=Object(b.a)(y,void 0,void 0,!1,null,null,null).exports;e.a=Object(r.a)(m)}}]);