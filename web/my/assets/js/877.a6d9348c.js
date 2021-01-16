(window.webpackJsonp=window.webpackJsonp||[]).push([[877],{1611:function(t,e,n){"use strict";var i=n(53),o=(n(200),n(52)),r=n(500),s=n.n(r),a=(n(386),n(125),n(388)),c=n(816),l={name:"MyMapIcon",components:{MyMapHtml:c.a,MyIcon:a.a},props:{name:{type:String,required:!0},svg:Boolean,size:Number,theme:String,color:String},computed:{iconStyle:function(){return{fontSize:"".concat(this.size,"px"),color:this.color}}},render:function(){var t=arguments[0],e={props:this.$props,on:this.$listeners};return t(c.a,{props:Object(o.a)({},this.$attrs),style:this.iconStyle},[t("MyIcon",s()([{},e]))])}};e.a=Object(i.a)(l)},2231:function(t,e,n){},2509:function(t,e,n){"use strict";n(2231)},2843:function(t,e,n){"use strict";n.r(e);n(55),n(209),n(56);var i=n(739),o=n(1611),r=n(450),s=n(0),a=n(28),c=n(900),l=n(639),u=function t(e,n,i){var o=this;Object(a.a)(this,t),this._view=e.getView(),this._currZoom=0,this._currCenter=[],this.leftTop=[],this.rightTop=[],this.rightBottom=[],this.leftBottom=[];var r=new c.a({className:i.class||"xdh-dragzoom",duration:0});return r.on("boxstart",(function(t){o._currZoom=o._view.getZoom(),o._currCenter=o._view.getCenter(),o.leftTop=t.coordinate,n.$emit("on-boxstart",t)})),r.on("boxend",(function(t){o._view.setZoom(o._currZoom),o._view.setCenter(o._currCenter),o.rightBottom=t.coordinate,o.rightTop=[o.rightBottom[0],o.leftTop[1]],o.leftBottom=[o.leftTop[0],o.rightBottom[1]];var e=[o.leftTop,o.rightTop,o.rightBottom,o.leftBottom,o.leftTop],i=new l.a([e]);t.areaGeo=i,n.$emit("on-boxend",t)})),r},p={data:function(){return{center:[120,30],arr:[]}},computed:{},methods:{mapReady:function(t,e){var n=new u(t,e,{class:"custom-drag-box"});t.addInteraction(n)},boxEndHandle:function(t){var e=this.arr.reduce((function(e,n){return t.areaGeo.intersectsCoordinate(n.position)&&e.push(n),e}),[]);console.log(e),e.forEach((function(t){t.color="red"}))},resetClick:function(){this.arr.forEach((function(t){t.color="blue"}))},createIcons:function(t){for(var e=[],n=0;n<t;n++)e.push({position:[120+2*(.5-Math.random()),30+2*(.5-Math.random())],name:"el-icon-location",size:20,color:"blue"});return e}},created:function(){this.arr=this.createIcons(150)}};s.default.use(r.a),s.default.use(o.a),s.default.use(i.a);var h=p,f=(n(2509),n(18)),d=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%",height:"600px"}},[n("my-map",{attrs:{height:"100%",center:t.center,zoom:9},on:{ready:t.mapReady,"on-boxend":t.boxEndHandle}},[t._l(t.arr,(function(e,i){return n("my-map-icon",t._b({key:i},"my-map-icon",e,!1))})),t._v(" "),n("my-map-placement",[n("button",{on:{click:t.resetClick}},[t._v("reset")])])],2)],1)}),[],!1,null,null,null);e.default=d.exports},384:function(t,e,n){var i=n(1),o=n(372).values;i({target:"Object",stat:!0},{values:function(t){return o(t)}})},386:function(t,e,n){},388:function(t,e,n){"use strict";var i=n(53),o=(n(124),n(32),n(384),n(202),n(31)),r={DEFAULT:"",SUCCESS:"success",WARNING:"warning",DANGER:"danger",INFO:"info",PRIMARY:"primary"},s={Theme:r,name:"MyIcon",props:{name:String,svg:Boolean,svgProps:Object,theme:{type:String,validator:function(t){return!t||Object.values(r).includes(t)}}},computed:{classes:function(){var t;return[(t={},Object(o.a)(t,"my-icon--".concat(this.theme),!!this.theme),Object(o.a)(t,"is-pointer",!!this.$listeners.click),Object(o.a)(t,"is-svg",this.svg),t),this.$slots.default?"":this.name?this.name:""]}},methods:{handleClick:function(t){this.$emit("click",t)}}},a=n(18),c=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{staticClass:"my-icon",class:t.classes,on:{click:t.handleClick}},[t.svg?n(t.name,t._b({tag:"component"},"component",t.svgProps,!1)):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null).exports;e.a=Object(i.a)(c)},500:function(t,e,n){"use strict";function i(){return(i=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)}var o=["attrs","props","domProps"],r=["class","style","directives"],s=["on","nativeOn"],a=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=function(t){return t.reduce((function(t,e){for(var n in e)if(t[n])if(-1!==o.indexOf(n))t[n]=i({},t[n],e[n]);else if(-1!==r.indexOf(n)){var c=t[n]instanceof Array?t[n]:[t[n]],l=e[n]instanceof Array?e[n]:[e[n]];t[n]=c.concat(l)}else if(-1!==s.indexOf(n))for(var u in e[n])if(t[n][u]){var p=t[n][u]instanceof Array?t[n][u]:[t[n][u]],h=e[n][u]instanceof Array?e[n][u]:[e[n][u]];t[n][u]=p.concat(h)}else t[n][u]=e[n][u];else if("hook"==n)for(var f in e[n])t[n][f]=t[n][f]?a(t[n][f],e[n][f]):e[n][f];else t[n]=e[n];else t[n]=e[n];return t}),{})}},739:function(t,e,n){"use strict";var i=n(53),o=(n(201),n(124),n(86),n(84),n(200),{name:"MyMapPlacement",props:{placement:{type:String,default:"left-bottom",validator:function(t){return["left-top","center-top","right-top","left-center","center-center","right-center","left-bottom","center-bottom","right-bottom"].includes(t)}},zIndex:{type:Number,default:1},margin:{type:[Array,Number],default:10},theme:{type:String,default:"light",validator:function(){return["light","dark"]}}},computed:{styles:function(){return{zIndex:this.zIndex,margin:[].concat(this.margin).map((function(t){return"".concat(t,"px")})).join(" ")}},classes:function(){return["is-".concat(this.theme),this.placement]}}}),r=n(18),s=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-map-placement",class:this.classes,style:this.styles},[this._t("default")],2)}),[],!1,null,null,null).exports;n(747),e.a=Object(i.a)(s)},747:function(t,e,n){},795:function(t,e,n){"use strict";e.a={BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",CENTER_LEFT:"center-left",CENTER_CENTER:"center-center",CENTER_RIGHT:"center-right",TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right"}},802:function(t,e,n){"use strict";var i,o=n(446),r=n(762),s=n(795),a=n(599),c=n(369),l=n(443),u=n(474),p=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),h="element",f="map",d="offset",m="position",g="positioning",y=function(t){function e(e){var n=t.call(this)||this;n.options=e,n.id=e.id,n.insertFirst=void 0===e.insertFirst||e.insertFirst,n.stopEvent=void 0===e.stopEvent||e.stopEvent,n.element=document.createElement("div"),n.element.className=void 0!==e.className?e.className:"ol-overlay-container "+a.d,n.element.style.position="absolute",n.element.style.pointerEvents="auto";var i=e.autoPan;return i&&"object"!=typeof i&&(i={animation:e.autoPanAnimation,margin:e.autoPanMargin}),n.autoPan=i||!1,n.rendered={transform_:"",visible:!0},n.mapPostrenderListenerKey=null,n.addEventListener(Object(o.b)(h),n.handleElementChanged),n.addEventListener(Object(o.b)(f),n.handleMapChanged),n.addEventListener(Object(o.b)(d),n.handleOffsetChanged),n.addEventListener(Object(o.b)(m),n.handlePositionChanged),n.addEventListener(Object(o.b)(g),n.handlePositioningChanged),void 0!==e.element&&n.setElement(e.element),n.setOffset(void 0!==e.offset?e.offset:[0,0]),n.setPositioning(void 0!==e.positioning?e.positioning:s.a.TOP_LEFT),void 0!==e.position&&n.setPosition(e.position),n}return p(e,t),e.prototype.getElement=function(){return this.get(h)},e.prototype.getId=function(){return this.id},e.prototype.getMap=function(){return this.get(f)},e.prototype.getOffset=function(){return this.get(d)},e.prototype.getPosition=function(){return this.get(m)},e.prototype.getPositioning=function(){return this.get(g)},e.prototype.handleElementChanged=function(){Object(u.d)(this.element);var t=this.getElement();t&&this.element.appendChild(t)},e.prototype.handleMapChanged=function(){this.mapPostrenderListenerKey&&(Object(u.e)(this.element),Object(l.c)(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);var t=this.getMap();if(t){this.mapPostrenderListenerKey=Object(l.a)(t,r.a.POSTRENDER,this.render,this),this.updatePixelPosition();var e=this.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this.insertFirst?e.insertBefore(this.element,e.childNodes[0]||null):e.appendChild(this.element),this.performAutoPan()}},e.prototype.render=function(){this.updatePixelPosition()},e.prototype.handleOffsetChanged=function(){this.updatePixelPosition()},e.prototype.handlePositionChanged=function(){this.updatePixelPosition(),this.performAutoPan()},e.prototype.handlePositioningChanged=function(){this.updatePixelPosition()},e.prototype.setElement=function(t){this.set(h,t)},e.prototype.setMap=function(t){this.set(f,t)},e.prototype.setOffset=function(t){this.set(d,t)},e.prototype.setPosition=function(t){this.set(m,t)},e.prototype.performAutoPan=function(){this.autoPan&&this.panIntoView(this.autoPan)},e.prototype.panIntoView=function(t){var e=this.getMap();if(e&&e.getTargetElement()&&this.get(m)){var n=this.getRect(e.getTargetElement(),e.getSize()),i=this.getElement(),o=this.getRect(i,[Object(u.c)(i),Object(u.b)(i)]),r=t||{},s=void 0===r.margin?20:r.margin;if(!Object(c.g)(n,o)){var a=o[0]-n[0],l=n[2]-o[2],p=o[1]-n[1],h=n[3]-o[3],f=[0,0];if(a<0?f[0]=a-s:l<0&&(f[0]=Math.abs(l)+s),p<0?f[1]=p-s:h<0&&(f[1]=Math.abs(h)+s),0!==f[0]||0!==f[1]){var d=e.getView().getCenterInternal(),g=e.getPixelFromCoordinateInternal(d),y=[g[0]+f[0],g[1]+f[1]],v=r.animation||{};e.getView().animateInternal({center:e.getCoordinateFromPixelInternal(y),duration:v.duration,easing:v.easing})}}}},e.prototype.getRect=function(t,e){var n=t.getBoundingClientRect(),i=n.left+window.pageXOffset,o=n.top+window.pageYOffset;return[i,o,i+e[0],o+e[1]]},e.prototype.setPositioning=function(t){this.set(g,t)},e.prototype.setVisible=function(t){this.rendered.visible!==t&&(this.element.style.display=t?"":"none",this.rendered.visible=t)},e.prototype.updatePixelPosition=function(){var t=this.getMap(),e=this.getPosition();if(t&&t.isRendered()&&e){var n=t.getPixelFromCoordinate(e),i=t.getSize();this.updateRenderedPosition(n,i)}else this.setVisible(!1)},e.prototype.updateRenderedPosition=function(t,e){var n=this.element.style,i=this.getOffset(),o=this.getPositioning();this.setVisible(!0);var r=Math.round(t[0]+i[0])+"px",a=Math.round(t[1]+i[1])+"px",c="0%",l="0%";o==s.a.BOTTOM_RIGHT||o==s.a.CENTER_RIGHT||o==s.a.TOP_RIGHT?c="-100%":o!=s.a.BOTTOM_CENTER&&o!=s.a.CENTER_CENTER&&o!=s.a.TOP_CENTER||(c="-50%"),o==s.a.BOTTOM_LEFT||o==s.a.BOTTOM_CENTER||o==s.a.BOTTOM_RIGHT?l="-100%":o!=s.a.CENTER_LEFT&&o!=s.a.CENTER_CENTER&&o!=s.a.CENTER_RIGHT||(l="-50%");var u="translate("+c+", "+l+") translate("+r+", "+a+")";this.rendered.transform_!=u&&(this.rendered.transform_=u,n.transform=u,n.msTransform=u)},e.prototype.getOptions=function(){return this.options},e}(o.a);e.a=y},816:function(t,e,n){"use strict";n(84),n(200);var i=n(52),o=n(802);e.a={name:"MyMapHtml",inject:["myMap"],props:{id:[Number,String],offset:{type:Array,default:function(){return[0,0]}},position:Array,positioning:{type:String,default:"center-center"},stopEvent:{type:Boolean,default:!0},insertFirst:Boolean,autoPan:{type:Boolean,default:!1},autoPanAnimation:{type:Object,default:function(){return{}}},autoPanMargin:{type:Number,default:20},visible:{type:Boolean,default:!0}},render:function(){var t=arguments[0];return t("div",{class:"my-map-html",style:this.styles,on:Object(i.a)({},this.$listeners)},[this.$slots.default])},computed:{styles:function(){return{cursor:this.$listeners.click?"pointer":""}}},watch:{$props:{deep:!0,handler:function(){try{this.dispose(),this.init()}catch(t){}}}},methods:{init:function(){if(this.$el){var t=Object(i.a)(Object(i.a)({},this.$props),{},{element:this.$el});this.overlay=new o.a(t);try{this.myMap.map.addOverlay(this.overlay),this.setPosition(this.visible?this.position:null)}catch(t){}}},setPosition:function(t){this.overlay&&this.overlay.setPosition(this.visible?t:null)},dispose:function(){this.overlay&&this.myMap&&this.myMap.map&&this.myMap.map.removeOverlay(this.overlay)}},mounted:function(){this.myMap.mapReady(this.init)},beforeDestroy:function(){this.dispose()}}}}]);