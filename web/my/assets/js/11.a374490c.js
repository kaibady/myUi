(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{404:function(e,t,i){"use strict";var n=i(47),r=i(78),a=i(46),o=(i(201),i(118),i(384),i(202),i(211),i(31),{name:"MyDvBox",inheritAttrs:!1,provide:function(){return{layoutVm:this.layout?this:null}},inject:{layoutVm:{default:null}},props:{width:String,height:String,defaultWidth:{type:String,default:"auto"},defaultHeight:{type:String,default:"auto"},left:{type:[String,Number]},top:{type:[String,Number]},right:[String,Number],bottom:[String,Number],zIndex:[Number,String],xAlign:{type:String,validator:function(e){return["left","right","center"].includes(e)}},yAlign:{type:String,validator:function(e){return["top","bottom","middle"].includes(e)}},contentAlign:{type:String,default:"left",validator:function(e){return["left","right","center"].includes(e)}},zoom:Number,scale:Number,fit:Boolean,visible:{type:Boolean,default:!0},position:{type:Boolean,default:!0},margin:String,padding:String,inline:Boolean,opacity:{type:Number,default:1},shadow:Boolean,layout:Boolean,weight:{type:Number,default:1},gap:{type:Number,default:0},direction:{type:String,default:"row",validator:function(e){return["row","column"].includes(e)}},free:Boolean},data:function(){return{boxes:[]}},computed:{layoutSize:function(){var e=this,t=this.weight,i=this.layoutVm,n=this.free;if(i&&!n){var r=i.gap,a=i.direction,o=i.total,l=i.boxCount,c=i.boxes,s=c.findIndex((function(t){return t===e})),u=l-1,f="(100% - ".concat(r*u,"px) * ").concat(t," / ").concat(o),d=c.filter((function(e,t){return t<s})).reduce((function(e,t){return e+t.weight}),0),h="(100% - ".concat(r*u,"px) * ").concat(d," / ").concat(o," +  ").concat(s*r,"px");return"row"===a?{height:"calc(".concat(f,")"),top:"calc(".concat(h,")")}:{width:"calc(".concat(f,")"),left:"calc(".concat(h,")")}}return null},styles:function(){var e=this.inline,t=this.margin,i=this.padding,n=this.position,r=this.fit,o=this.width,l=this.height,c=this.left,s=this.top,u=this.right,f=this.bottom,d=this.zIndex,h=this.zoom,g=this.scale,b=this.xAlign,m=this.yAlign,p=this.defaultWidth,y=this.defaultHeight;return Object(a.a)({position:n?"absolute":"relative",width:r?"100%":o||p,height:r?"100%":l||y,zoom:h,left:b?null:c,top:m?null:s,right:b?null:u,bottom:m?null:f,transform:g?"scale(".concat(g,")"):null,display:e?"inline-block":"block",opacity:this.opacity,margin:t,padding:i,zIndex:d},this.layoutSize)},classes:function(){var e;return e={},Object(r.a)(e,"is-".concat(this.xAlign),!!this.xAlign),Object(r.a)(e,"is-".concat(this.yAlign),!!this.yAlign),Object(r.a)(e,"is-shadow",this.shadow),Object(r.a)(e,"is-center-middle","center"===this.xAlign&&"middle"===this.yAlign),Object(r.a)(e,"is-content-align-".concat(this.contentAlign),!!this.contentAlign),e},total:function(){return this.boxes.reduce((function(e,t){return e+t.weight}),0)},boxCount:function(){return this.boxes.length}},methods:{registerBox:function(e){this.boxes.push(e)},unregisterBox:function(e){this.boxes=this.boxes.filter((function(t){return t!==e}))}},created:function(){this.layoutVm&&!this.free&&this.layoutVm.registerBox(this)},beforeDestroy:function(){this.layoutVm&&!this.free&&this.layoutVm.unregisterBox(this)}}),l=(i(509),i(20)),c=Object(l.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return this.visible?t("div",this._g({staticClass:"my-dv-box",class:this.classes,style:this.styles},this.$listeners),[this._t("default")],2):this._e()}),[],!1,null,null,null).exports;t.a=Object(n.a)(c)},429:function(e,t,i){},433:function(e,t,i){},438:function(e,t,i){"use strict";var n=i(47),r=i(121),a=(i(201),i(202),i(371)),o=i(369),l=i(120),c=i(46),s={color:"#1de2ff",fill:"transparent",textColor:"#b4e4ff",colors:["#1165b2","#0d8888","#398912","#70980c","#b17706","#af620f","#af3b14","#ab181f","#a4226a","#502092","#2a39c3","#2a71c4","#128943","#49b312","#b28f13","#b25010","#bd352c","#a4224a","#6a1a97","#321a97","#1890ff","#13c2c2","#52c41a","#a0d911","#fdaa09","#fa8c16","#fa541c","#f5222d","#eb3197","#722ed1","#2f54eb"]},u={props:{config:Object},computed:{settings:function(){return Object(c.a)(Object(c.a)({},s),this.config)}}},f=i(480),d={name:"MyDvPage",mixins:[u],provide:function(){return{page:this}},props:{lock:{type:Boolean},scale:{type:Boolean,default:!0},width:{type:Number,default:1920,validator:function(e){return e>0}},height:{type:Number,default:1080,validator:function(e){return e>0}},activeIndex:{type:Number,default:0},target:{type:[String,HTMLElement,Function],default:function(){return document.body}},fit:Boolean,fullscreen:Boolean},data:function(){return{screens:[],screenActiveIndex:this.activeIndex,widthScale:1,heightScale:1,isFullScreen:!1}},watch:{$props:{deep:!0,immediate:!0,handler:function(){this.resize()}},activeIndex:{immediate:!0,handler:function(e){this.screenActiveIndex=e}}},computed:{styles:function(){return this.fit?{width:"100%",height:"100%",transform:"translateX(-50%) translateY(-50%)"}:{width:"".concat(this.width,"px"),height:"".concat(this.height,"px"),transform:"scaleX(".concat(this.widthScale,") scaleY(").concat(this.heightScale,") translateX(-50%) translateY(-50%)")}}},methods:{getTarget:function(){var e;switch(Object(r.a)(this.target)){case"string":e="parent"===this.target?this.$el.parentNode:document.querySelector(this.target);break;case"function":e=this.target();break;default:e=this.target}return e||document.body},resize:function(){if(!this.scale||this.fit)return this.widthScale=1,void(this.heightScale=1);var e=this.warpper||{},t=e.clientWidth,i=e.clientHeight;t&&i&&(this.lock?this.heightScale=this.widthScale=t/this.width:(this.widthScale=t/this.width,this.heightScale=i/this.height))},fullScreen:function(){var e=this.getTarget();Object(f.b)(e),this.isFullScreen=!0},exitFullScreen:function(){Object(f.a)(),this.isFullScreen=!1}},mounted:function(){this.warpper=this.getTarget(),Object(o.addClass)(this.warpper,"my-dv-page__wrapper"+this._uid),this.proxyResize=Object(l.c)(this.resize,100),Object(a.addResizeListener)(this.warpper,this.proxyResize),this.resize(),this.isFullScreen=!!this.fullscreen&&Object(f.c)()},beforeDestroy:function(){this.proxyResize&&Object(a.removeResizeListener)(this.warpper,this.proxyResize),Object(o.removeClass)(this.warpper,"my-dv-page__wrapper"+this._uid)}},h=(i(490),i(20)),g=Object(h.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"my-dv-page",style:e.styles},[e._t("default"),e._v(" "),e.fullscreen?i("div",{staticClass:"my-dv-page__fullscreen"},[e.isFullScreen?i("i",{staticClass:"el-icon-switch-button",attrs:{title:"取消全屏"},on:{click:e.exitFullScreen}}):i("i",{staticClass:"el-icon-full-screen",attrs:{title:"全屏"},on:{click:e.fullScreen}})]):e._e()],2)}),[],!1,null,null,null).exports;t.a=Object(n.a)(g)},469:function(e,t,i){"use strict";var n=i(371);t.a={inject:{page:{default:null}},data:function(){return{width:0,height:0}},methods:{resize:function(){var e,t=null===(e=this.$el)||void 0===e?void 0:e.getBoundingClientRect();if(t){var i=this.page||{},n=i.widthScale,r=void 0===n?1:n,a=i.heightScale,o=void 0===a?1:a;this.width=t.width/r,this.height=t.height/o,this.$emit("resize",[this.width,this.height])}}},mounted:function(){this.resize(),Object(n.addResizeListener)(this.$el,this.resize)},beforeDestroy:function(){Object(n.removeResizeListener)(this.$el,this.resize)}}},480:function(e,t,i){"use strict";function n(e){var t=(e=e||document.documentElement).requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullscreen;void 0!==t&&t&&t.call(e)}function r(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function a(){return document.isFullScreen||document.mozIsFullScreen||document.webkitIsFullScreen}i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return r})),i.d(t,"c",(function(){return a}))},490:function(e,t,i){"use strict";i(429)},509:function(e,t,i){"use strict";i(433)},694:function(e,t,i){"use strict";i(81);var n=i(893);t.a={props:{color:{type:String,default:function(){var e,t;return(null==this||null===(e=this.page)||void 0===e||null===(t=e.settings)||void 0===t?void 0:t.color)||"#1de2ff"}}},computed:{dark:function(){var e=this.color,t=Object(n.c)(e);return t[3]=.3,"rgba(".concat(t.join(","),")")},light:function(){var e=this.color,t=Object(n.c)(e);return t[3]=.6,"rgba(".concat(t.join(","),")")}}}},893:function(e,t,i){"use strict";i.d(t,"c",(function(){return u})),i.d(t,"a",(function(){return h})),i.d(t,"b",(function(){return g}));var n=i(34),r=(i(50),i(32),i(81),i(79),i(134),i(13),i(394),i(382),i(202),i(33),i(201),i(9),i(204),i(695),i(18),new Map([["transparent","rgba(0,0,0,0)"],["black","#000000"],["silver","#C0C0C0"],["gray","#808080"],["white","#FFFFFF"],["maroon","#800000"],["red","#FF0000"],["purple","#800080"],["fuchsia","#FF00FF"],["green","#008000"],["lime","#00FF00"],["olive","#808000"],["yellow","#FFFF00"],["navy","#000080"],["blue","#0000FF"],["teal","#008080"],["aqua","#00FFFF"],["aliceblue","#f0f8ff"],["antiquewhite","#faebd7"],["aquamarine","#7fffd4"],["azure","#f0ffff"],["beige","#f5f5dc"],["bisque","#ffe4c4"],["blanchedalmond","#ffebcd"],["blueviolet","#8a2be2"],["brown","#a52a2a"],["burlywood","#deb887"],["cadetblue","#5f9ea0"],["chartreuse","#7fff00"],["chocolate","#d2691e"],["coral","#ff7f50"],["cornflowerblue","#6495ed"],["cornsilk","#fff8dc"],["crimson","#dc143c"],["cyan","#00ffff"],["darkblue","#00008b"],["darkcyan","#008b8b"],["darkgoldenrod","#b8860b"],["darkgray","#a9a9a9"],["darkgreen","#006400"],["darkgrey","#a9a9a9"],["darkkhaki","#bdb76b"],["darkmagenta","#8b008b"],["darkolivegreen","#556b2f"],["darkorange","#ff8c00"],["darkorchid","#9932cc"],["darkred","#8b0000"],["darksalmon","#e9967a"],["darkseagreen","#8fbc8f"],["darkslateblue","#483d8b"],["darkslategray","#2f4f4f"],["darkslategrey","#2f4f4f"],["darkturquoise","#00ced1"],["darkviolet","#9400d3"],["deeppink","#ff1493"],["deepskyblue","#00bfff"],["dimgray","#696969"],["dimgrey","#696969"],["dodgerblue","#1e90ff"],["firebrick","#b22222"],["floralwhite","#fffaf0"],["forestgreen","#228b22"],["gainsboro","#dcdcdc"],["ghostwhite","#f8f8ff"],["gold","#ffd700"],["goldenrod","#daa520"],["greenyellow","#adff2f"],["grey","#808080"],["honeydew","#f0fff0"],["hotpink","#ff69b4"],["indianred","#cd5c5c"],["indigo","#4b0082"],["ivory","#fffff0"],["khaki","#f0e68c"],["lavender","#e6e6fa"],["lavenderblush","#fff0f5"],["lawngreen","#7cfc00"],["lemonchiffon","#fffacd"],["lightblue","#add8e6"],["lightcoral","#f08080"],["lightcyan","#e0ffff"],["lightgoldenrodyellow","#fafad2"],["lightgray","#d3d3d3"],["lightgreen","#90ee90"],["lightgrey","#d3d3d3"],["lightpink","#ffb6c1"],["lightsalmon","#ffa07a"],["lightseagreen","#20b2aa"],["lightskyblue","#87cefa"],["lightslategray","#778899"],["lightslategrey","#778899"],["lightsteelblue","#b0c4de"],["lightyellow","#ffffe0"],["limegreen","#32cd32"],["linen","#faf0e6"],["magenta","#ff00ff"],["mediumaquamarine","#66cdaa"],["mediumblue","#0000cd"],["mediumorchid","#ba55d3"],["mediumpurple","#9370db"],["mediumseagreen","#3cb371"],["mediumslateblue","#7b68ee"],["mediumspringgreen","#00fa9a"],["mediumturquoise","#48d1cc"],["mediumvioletred","#c71585"],["midnightblue","#191970"],["mintcream","#f5fffa"],["mistyrose","#ffe4e1"],["moccasin","#ffe4b5"],["navajowhite","#ffdead"],["oldlace","#fdf5e6"],["olivedrab","#6b8e23"],["orange","#ffa500"],["orangered","#ff4500"],["orchid","#da70d6"],["palegoldenrod","#eee8aa"],["palegreen","#98fb98"],["paleturquoise","#afeeee"],["palevioletred","#db7093"],["papayawhip","#ffefd5"],["peachpuff","#ffdab9"],["peru","#cd853f"],["pink","#ffc0cb"],["plum","#dda0dd"],["powderblue","#b0e0e6"],["rosybrown","#bc8f8f"],["royalblue","#4169e1"],["saddlebrown","#8b4513"],["salmon","#fa8072"],["sandybrown","#f4a460"],["seagreen","#2e8b57"],["seashell","#fff5ee"],["sienna","#a0522d"],["skyblue","#87ceeb"],["slateblue","#6a5acd"],["slategray","#708090"],["slategrey","#708090"],["snow","#fffafa"],["springgreen","#00ff7f"],["steelblue","#4682b4"],["tan","#d2b48c"],["thistle","#d8bfd8"],["tomato","#ff6347"],["turquoise","#40e0d0"],["violet","#ee82ee"],["wheat","#f5deb3"],["whitesmoke","#f5f5f5"],["yellowgreen","#9acd32"]])),a=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/,o=/^(rgb|rgba|RGB|RGBA)/,l=/^(rgba|RGBA)/;function c(e){var t=a.test(e),i=o.test(e);return t||i?e:(e=function(e){if(!e)return console.error("getColorByKeywords: Missing parameters!"),!1;return!!r.has(e)&&r.get(e)}(e))||(console.error("Color: Invalid color!"),!1)}function s(e){if(!e)return console.error("getRgbValue: Missing parameters!"),!1;if(!(e=c(e)))return!1;var t=a.test(e),i=o.test(e),n=e.toLowerCase();return t?function(e){3===(e=e.replace("#","")).length&&(e=Array.from(e).map((function(e){return e+e})).join(""));return e=e.split(""),new Array(3).fill(0).map((function(t,i){return parseInt("0x".concat(e[2*i]).concat(e[2*i+1]))}))}(n):i?function(e){return e.replace(/rgb\(|rgba\(|\)/g,"").split(",").slice(0,3).map((function(e){return parseInt(e)}))}(n):void 0}function u(e){if(!e)return console.error("getRgbaValue: Missing parameters!"),!1;var t=s(e);return!!t&&(t.push(f(e)),t)}function f(e){return e?!!(e=c(e))&&(l.test(e)?(e=e.toLowerCase(),Number(e.split(",").slice(-1)[0].replace(/[)|\s]/g,""))):1):(console.error("getOpacity: Missing parameters!"),!1)}function d(e){if(!e)return console.error("getColorFromRgbValue: Missing parameters!"),!1;var t=e.length;if(3!==t&&4!==t)return console.error("getColorFromRgbValue: Value is illegal!"),!1;var i=3===t?"rgb(":"rgba(";return i+=e.join(",")+")"}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!e)return console.error("darken: Missing parameters!"),!1;var i=u(e);return!!i&&d(i=i.map((function(e,i){return 3===i?e:e-Math.ceil(2.55*t)})).map((function(e){return e<0?0:e})))}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(!e)return console.error("fade: Missing parameters!"),!1;var i=s(e);if(!i)return!1;var r=[].concat(Object(n.a)(i),[t/100]);return d(r)}}}]);