(window.webpackJsonp=window.webpackJsonp||[]).push([[684],{1435:function(t,e,n){},2311:function(t,e,n){"use strict";var i=n(1435);n.n(i).a},2641:function(t,e,n){"use strict";n.r(e);n(801),n(123);var i=n(806),s=(n(802),n(805)),r=n(0),o={components:{MyFlex:s.a,MyFlexItem:i.a},data:function(){return{items:[{basis:"200px"},{basis:"400px"},{basis:"200px"}]}}};r.default.use(s.a),r.default.use(i.a);var a=o,c=(n(2311),n(18)),u=Object(c.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("my-flex",t._l(t.items,(function(e,i){return n("my-flex-item",{key:i,attrs:{basis:e.basis}},[t._v("\n      "+t._s(i+1)+" \n      "),n("span",[t._v("basis: "+t._s(e.basis))])])})),1)],1)}),[],!1,null,"fbce9a3e",null);e.default=u.exports},437:function(t,e){t.exports={isFunction:function(t){return"function"==typeof t},isArray:function(t){return"[object Array]"===Object.prototype.toString.apply(t)},each:function(t,e){for(var n=0,i=t.length;n<i&&!1!==e(t[n],n);n++);}}},492:function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));n(21),n(54),n(85),n(89),n(7),n(88),n(55);var i,s=n(31),r=n(52);if("undefined"!=typeof window){window.matchMedia=window.matchMedia||function(t){return{media:t,matches:!1,addListener:function(){},removeListener:function(){}}},i=n(497)}var o=["xxl","xl","lg","md","sm","xs"],a={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},c=[],u=-1,l={},f={fire:function(t){return l=t,!(c.length<1)&&(c.forEach((function(t){t.func(l)})),!0)},on:function(t){0===c.length&&this.register();var e=(++u).toString();return c.push({token:e,func:t}),t(l),e},off:function(t){0===(c=c.filter((function(e){return e.token!==t}))).length&&this.unregister()},register:function(){var t=this;Object.keys(a).map((function(e){i.register(a[e],{match:function(){var n=Object(r.a)(Object(r.a)({},l),{},Object(s.a)({},e,!0));t.fire(n)},unmatch:function(){var n=Object(r.a)(Object(r.a)({},l),{},Object(s.a)({},e,!1));t.fire(n)},destroy:function(){}})}))},unregister:function(){Object.keys(a).map((function(t){return i.unregister(a[t])}))}};e.a=f},497:function(t,e,n){var i=n(498);t.exports=new i},498:function(t,e,n){var i=n(499),s=n(437),r=s.each,o=s.isFunction,a=s.isArray;function c(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}c.prototype={constructor:c,register:function(t,e,n){var s=this.queries,c=n&&this.browserIsIncapable;return s[t]||(s[t]=new i(t,c)),o(e)&&(e={match:e}),a(e)||(e=[e]),r(e,(function(e){o(e)&&(e={match:e}),s[t].addHandler(e)})),this},unregister:function(t,e){var n=this.queries[t];return n&&(e?n.removeHandler(e):(n.clear(),delete this.queries[t])),this}},t.exports=c},499:function(t,e,n){var i=n(500),s=n(437).each;function r(t,e){this.query=t,this.isUnconditional=e,this.handlers=[],this.mql=window.matchMedia(t);var n=this;this.listener=function(t){n.mql=t.currentTarget||t,n.assess()},this.mql.addListener(this.listener)}r.prototype={constuctor:r,addHandler:function(t){var e=new i(t);this.handlers.push(e),this.matches()&&e.on()},removeHandler:function(t){var e=this.handlers;s(e,(function(n,i){if(n.equals(t))return n.destroy(),!e.splice(i,1)}))},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){s(this.handlers,(function(t){t.destroy()})),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";s(this.handlers,(function(e){e[t]()}))}},t.exports=r},500:function(t,e){function n(t){this.options=t,!t.deferSetup&&this.setup()}n.prototype={constructor:n,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},t.exports=n},576:function(t,e,n){"use strict";n.d(e,"b",(function(){return s}));n(209);var i=function(t){if("undefined"!=typeof window&&window.document&&window.document.documentElement){var e=Array.isArray(t)?t:[t],n=window.document.documentElement;return e.some((function(t){return t in n.style}))}return!1},s=i(["flex","webkitFlex","Flex","msFlex"]);e.a=i},801:function(t,e,n){},802:function(t,e,n){},805:function(t,e,n){"use strict";var i=n(53),s=(n(124),n(197),n(57)),r=n(576),o=n(492),a={xxl:3,xl:3,lg:3,md:3,sm:2,xs:2},c={name:"MyFlex",provide:function(){return{flex:this}},props:{inline:Boolean,direction:{type:String,default:"row",validator:function(t){return["row","row-reverse","column","column-reverse"].includes(t)}},wrap:{type:String,default:"nowrap",validator:function(t){return["nowrap","wrap","wrap-reverse"].includes(t)}},justify:{type:String,default:"flex-start",validator:function(t){return["flex-start","flex-end","center","space-between","space-around"].includes(t)}},alignItems:{type:String,default:"stretch",validator:function(t){return["flex-start","flex-end","center","baseline","stretch"].includes(t)}},alignContent:{type:String,default:"stretch",validator:function(t){return["flex-start","flex-end","center","space-between","space-around","stretch"].includes(t)}},border:{type:Boolean},fit:Boolean,column:[Number,Object]},data:function(){return{screens:{}}},computed:{classes:function(){return["my-flex","is-direction-".concat(this.direction),"is-wrap-".concat(this.wrap),"is-justify-".concat(this.justify),"is-align-items-".concat(this.alignItems),"is-align-content-".concat(this.alignContent),{"is-inline":this.inline,"is-border":this.border,"is-fit":this.fit}]}},methods:{getColumn:function(){if("object"===Object(s.a)(this.column))for(var t=0;t<o.b.length;t++){var e=o.b[t];if(this.screens[e])return this.column[e]||a[e]}return"number"==typeof this.column?this.column:null}},mounted:function(){var t=this;this.token=o.a.on((function(e){"object"===Object(s.a)(t.column)&&(t.screens=e)}))},created:function(){r.b||console.warn("浏览器不支持Flex布局")},beforeDestroy:function(){o.a.off(this.token)}},u=n(18),l=Object(u.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.classes},[this._t("default")],2)}),[],!1,null,null,null).exports;e.a=Object(i.a)(l)},806:function(t,e,n){"use strict";var i=n(53),s=(n(124),n(197),n(199),{name:"MyFlexItem",inject:{flex:{default:null}},props:{order:{type:Number},grow:Number,shrink:Number,basis:String,align:{type:String,default:"auto",validator:function(t){return["auto","flex-start","flex-end","center","baseline","stretch"].includes(t)}},center:Boolean,middle:Boolean,shadow:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"hover"].includes(t)}}},data:function(){return{hover:!1}},computed:{classes:function(){return["my-flex-item","is-align-".concat(this.align),{"is-shadow":!0===this.shadow||this.hover&&"hover"===this.shadow}]},styles:function(){return{order:this.order,flexGrow:this.grow,flexShrink:this.shrink,flexBasis:this.basis,width:this.getWidth()}},helperClasses:function(){return{"my-flex-item__helper":!0,"is-middle":this.middle}},innerClasses:function(){return{"my-flex-item__inner":!0,"is-center":this.center}}},methods:{getWidth:function(){if(this.flex){var t=this.flex.getColumn();if(t)return this.flex.direction.includes("row")?"".concat(100/t,"%"):null}},handleMouseEnter:function(){"hover"===this.shadow&&(this.hover=!0)},handleMouseLeave:function(){this.hover=!1}}}),r=n(18),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classes,style:t.styles,on:{mouseenter:t.handleMouseEnter,mouseleave:t.handleMouseLeave}},[n("div",{class:t.innerClasses},[t.middle?n("div",{class:t.helperClasses},[t._t("default")],2):t._t("default")],2)])}),[],!1,null,null,null).exports;e.a=Object(i.a)(o)}}]);