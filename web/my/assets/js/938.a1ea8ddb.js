(window.webpackJsonp=window.webpackJsonp||[]).push([[938],{2392:function(t,e,n){},2717:function(t,e,n){"use strict";n(2392)},3616:function(t,e,n){"use strict";n.r(e);n(797),n(119);var i=n(801),r=n(0),s={components:{MyLayout:i.a}};r.default.use(i.a);var o=s,a=(n(2717),n(20)),u=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("my-layout",{attrs:{north:{height:100},south:{height:100},west:{width:200},east:{width:200}},scopedSlots:t._u([{key:"north",fn:function(){return[t._v("North")]},proxy:!0},{key:"west",fn:function(){return[t._v("West")]},proxy:!0},{key:"east",fn:function(){return[t._v("East")]},proxy:!0},{key:"south",fn:function(){return[t._v("South")]},proxy:!0}])},[t._v(" "),t._v(" "),t._v(" "),t._v(" "),n("div",[t._v("Main")])])}),[],!1,null,"227f6829",null);e.default=u.exports},394:function(t,e,n){"use strict";var i=n(207),r=n(210),s=n(7),o=n(22),a=n(409),u=n(209),l=n(21),c=n(208),h=n(83),d=n(2),f=[].push,p=Math.min,g=!d((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(o(this)),s=void 0===n?4294967295:n>>>0;if(0===s)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,s);for(var a,u,l,c=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,d+"g");(a=h.call(g,i))&&!((u=g.lastIndex)>p&&(c.push(i.slice(p,a.index)),a.length>1&&a.index<i.length&&f.apply(c,a.slice(1)),l=a[0].length,p=u,c.length>=s));)g.lastIndex===a.index&&g.lastIndex++;return p===i.length?!l&&g.test("")||c.push(""):c.push(i.slice(p)),c.length>s?c.slice(0,s):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=o(this),s=null==e?void 0:e[t];return void 0!==s?s.call(e,r,n):i.call(String(r),e,n)},function(t,r){var o=n(i,t,this,r,i!==e);if(o.done)return o.value;var h=s(t),d=String(this),f=a(h,RegExp),v=h.unicode,y=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(g?"y":"g"),b=new f(g?h:"^(?:"+h.source+")",y),m=void 0===r?4294967295:r>>>0;if(0===m)return[];if(0===d.length)return null===c(b,d)?[d]:[];for(var w=0,x=0,_=[];x<d.length;){b.lastIndex=g?x:0;var R,O=c(b,g?d:d.slice(x));if(null===O||(R=p(l(b.lastIndex+(g?0:x)),d.length))===w)x=u(d,x,v);else{if(_.push(d.slice(w,x)),_.length===m)return _;for(var j=1;j<=O.length-1;j++)if(_.push(O[j]),_.length===m)return _;x=w=R}}return _.push(d.slice(w)),_}]}),!g)},409:function(t,e,n){var i=n(7),r=n(52),s=n(3)("species");t.exports=function(t,e){var n,o=i(t).constructor;return void 0===o||null==(n=i(o)[s])?e:r(n)}},437:function(t,e,n){var i=n(1),r=n(529);i({target:"Number",stat:!0,forced:Number.parseInt!=r},{parseInt:r})},529:function(t,e,n){var i=n(4),r=n(212).trim,s=n(213),o=i.parseInt,a=/^[+-]?0[Xx]/,u=8!==o(s+"08")||22!==o(s+"0x16");t.exports=u?function(t,e){var n=r(String(t));return o(n,e>>>0||(a.test(n)?16:10))}:o},797:function(t,e,n){},801:function(t,e,n){"use strict";var i=n(47),r=n(46),s=n(78),o=n(700),a=n.n(o),u=n(701),l=n.n(u),c=n(709),h=n.n(c),d=n(702),f=n.n(d),p=n(703),g=n.n(p),v=(n(118),n(394),n(32),n(437),n(201),{north:g.a,default:f.a,south:h.a,east:l.a,west:l.a}),y={name:"MyLayout",components:{Container:a.a,Header:g.a,Main:f.a,Footer:h.a,Aside:l.a},props:{fit:Boolean,border:Boolean,split:Boolean,direction:{type:String,validator:function(t){return["vertical","horizontal"].includes(t)}},north:Object,south:Object,east:Object,west:Object},data:function(){return{}},computed:{classes:function(){return Object(s.a)({"my-layout":!0,"is-fit":this.fit,"is-border":this.border,"is-split":this.split},"is-".concat(this.direction),!!this.direction)}},methods:{getDirection:function(){if(this.direction)return this.direction;var t=this.$slots,e=t.north,n=t.south,i=t.west,r=t.east,s=!i&&!r;return s||!s&&!(!e&&!n)?"vertical":"horizontal"},getRegionOptions:function(t){return Object(r.a)({},this[t]||{})},regionRender:function(t){var e=this.$createElement;if(this.$slots[t]){var n=this.getRegionOptions(t),i={north:"height",south:"height",west:"width",east:"width"}[t],r=Number.parseInt(void 0===n[i]?{north:60,south:60,west:256,east:256}[t]:n[i]);return this.$createElement(v[t],{class:["my-layout__region","my-layout__".concat(t),{"is-split":this.split,"is-border":this.border}],style:Object(s.a)({},i,"number"==typeof r?"".concat(r,"px"):r)},this.fit&&r?[e("div",{class:"my-layout__fit"},[this.$slots[t]])]:this.$slots[t])}}},render:function(){var t=this,e=arguments[0],n=this.$slots,i=n.north,r=n.south,s=n.west,o=n.east,a=this.getDirection(),u=function(){return s||o?e("Container",{class:"my-layout__wrapper",attrs:{direction:"horizontal"}},[[t.regionRender("west"),t.regionRender("default"),t.regionRender("east")]]):t.regionRender("default")},l=function(){return i||r?e("Container",{class:"my-layout__wrapper",attrs:{direction:"vertical"}},[[t.regionRender("north"),t.regionRender("default"),t.regionRender("south")]]):t.regionRender("default")};return e("Container",{attrs:{direction:a},class:this.classes},["vertical"===a?[this.regionRender("north"),u(),this.regionRender("south")]:[this.regionRender("west"),l(),this.regionRender("east")]])}},b=n(20),m=Object(b.a)(y,void 0,void 0,!1,null,null,null).exports;e.a=Object(i.a)(m)}}]);