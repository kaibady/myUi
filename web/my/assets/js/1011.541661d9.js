(window.webpackJsonp=window.webpackJsonp||[]).push([[1011],{1710:function(t,e,n){"use strict";var i=n(47),o=n(46),s=n(477),r=n.n(s),a=(n(391),n(117),n(392)),c=(n(201),n(852)),p={name:"MyMapIcon",components:{MyMapHtml:c.a,MyIcon:a.a},props:{name:{type:String,required:!0},svg:Boolean,size:Number,theme:String,color:String},computed:{iconStyle:function(){return{fontSize:"".concat(this.size,"px"),color:this.color}}},render:function(){var t=arguments[0],e={props:this.$props,on:this.$listeners};return t(c.a,{props:Object(o.a)({},this.$attrs),style:this.iconStyle},[t("MyIcon",r()([{},e]))])}};e.a=Object(i.a)(p)},3360:function(t,e,n){"use strict";n.r(e);var i=n(1710),o=n(491),s=n(0);s.default.use(o.a),s.default.use(i.a);var r={},a=n(19),c=Object(a.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("my-map",[e("my-map-icon",{attrs:{position:[113.261999,23.130592],name:"el-icon-location",size:40,theme:"primary"}})],1)}),[],!1,null,null,null);e.default=c.exports},385:function(t,e,n){var i=n(2),o=n(377).values;i({target:"Object",stat:!0},{values:function(t){return o(t)}})},391:function(t,e,n){},392:function(t,e,n){"use strict";var i=n(47),o=n(425);e.a=Object(i.a)(o.a)},425:function(t,e,n){"use strict";var i=n(76),o=(n(116),n(203),n(385),n(30),{DEFAULT:"",SUCCESS:"success",WARNING:"warning",DANGER:"danger",INFO:"info",PRIMARY:"primary"}),s={Theme:o,name:"MyIcon",props:{name:String,svg:Boolean,svgProps:Object,theme:{type:String,validator:function(t){return!t||Object.values(o).includes(t)}}},computed:{classes:function(){var t;return[(t={},Object(i.a)(t,"my-icon--".concat(this.theme),!!this.theme),Object(i.a)(t,"is-pointer",!!this.$listeners.click),Object(i.a)(t,"is-svg",this.svg),t),this.$slots.default?"":this.name?this.name:""]}},methods:{handleClick:function(t){this.$emit("click",t)}}},r=n(19),a=Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{staticClass:"my-icon",class:t.classes,on:{click:t.handleClick}},[t.svg?n(t.name,t._b({tag:"component"},"component",t.svgProps,!1)):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},477:function(t,e,n){"use strict";function i(){return(i=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)}var o=["attrs","props","domProps"],s=["class","style","directives"],r=["on","nativeOn"],a=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=function(t){return t.reduce((function(t,e){for(var n in e)if(t[n])if(-1!==o.indexOf(n))t[n]=i({},t[n],e[n]);else if(-1!==s.indexOf(n)){var c=t[n]instanceof Array?t[n]:[t[n]],p=e[n]instanceof Array?e[n]:[e[n]];t[n]=c.concat(p)}else if(-1!==r.indexOf(n))for(var l in e[n])if(t[n][l]){var u=t[n][l]instanceof Array?t[n][l]:[t[n][l]],h=e[n][l]instanceof Array?e[n][l]:[e[n][l]];t[n][l]=u.concat(h)}else t[n][l]=e[n][l];else if("hook"==n)for(var f in e[n])t[n][f]=t[n][f]?a(t[n][f],e[n][f]):e[n][f];else t[n]=e[n];else t[n]=e[n];return t}),{})}},836:function(t,e,n){"use strict";e.a={BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",CENTER_LEFT:"center-left",CENTER_CENTER:"center-center",CENTER_RIGHT:"center-right",TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right"}},841:function(t,e,n){"use strict";var i,o=n(480),s=n(799),r=n(836),a=n(663),c=n(375),p=n(478),l=n(503),u=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),h="element",f="map",d="offset",m="position",y="positioning",g=function(t){function e(e){var n=t.call(this)||this;n.options=e,n.id=e.id,n.insertFirst=void 0===e.insertFirst||e.insertFirst,n.stopEvent=void 0===e.stopEvent||e.stopEvent,n.element=document.createElement("div"),n.element.className=void 0!==e.className?e.className:"ol-overlay-container "+a.d,n.element.style.position="absolute",n.element.style.pointerEvents="auto";var i=e.autoPan;return i&&"object"!=typeof i&&(i={animation:e.autoPanAnimation,margin:e.autoPanMargin}),n.autoPan=i||!1,n.rendered={transform_:"",visible:!0},n.mapPostrenderListenerKey=null,n.addEventListener(Object(o.b)(h),n.handleElementChanged),n.addEventListener(Object(o.b)(f),n.handleMapChanged),n.addEventListener(Object(o.b)(d),n.handleOffsetChanged),n.addEventListener(Object(o.b)(m),n.handlePositionChanged),n.addEventListener(Object(o.b)(y),n.handlePositioningChanged),void 0!==e.element&&n.setElement(e.element),n.setOffset(void 0!==e.offset?e.offset:[0,0]),n.setPositioning(void 0!==e.positioning?e.positioning:r.a.TOP_LEFT),void 0!==e.position&&n.setPosition(e.position),n}return u(e,t),e.prototype.getElement=function(){return this.get(h)},e.prototype.getId=function(){return this.id},e.prototype.getMap=function(){return this.get(f)},e.prototype.getOffset=function(){return this.get(d)},e.prototype.getPosition=function(){return this.get(m)},e.prototype.getPositioning=function(){return this.get(y)},e.prototype.handleElementChanged=function(){Object(l.d)(this.element);var t=this.getElement();t&&this.element.appendChild(t)},e.prototype.handleMapChanged=function(){this.mapPostrenderListenerKey&&(Object(l.e)(this.element),Object(p.c)(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);var t=this.getMap();if(t){this.mapPostrenderListenerKey=Object(p.a)(t,s.a.POSTRENDER,this.render,this),this.updatePixelPosition();var e=this.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this.insertFirst?e.insertBefore(this.element,e.childNodes[0]||null):e.appendChild(this.element),this.performAutoPan()}},e.prototype.render=function(){this.updatePixelPosition()},e.prototype.handleOffsetChanged=function(){this.updatePixelPosition()},e.prototype.handlePositionChanged=function(){this.updatePixelPosition(),this.performAutoPan()},e.prototype.handlePositioningChanged=function(){this.updatePixelPosition()},e.prototype.setElement=function(t){this.set(h,t)},e.prototype.setMap=function(t){this.set(f,t)},e.prototype.setOffset=function(t){this.set(d,t)},e.prototype.setPosition=function(t){this.set(m,t)},e.prototype.performAutoPan=function(){this.autoPan&&this.panIntoView(this.autoPan)},e.prototype.panIntoView=function(t){var e=this.getMap();if(e&&e.getTargetElement()&&this.get(m)){var n=this.getRect(e.getTargetElement(),e.getSize()),i=this.getElement(),o=this.getRect(i,[Object(l.c)(i),Object(l.b)(i)]),s=t||{},r=void 0===s.margin?20:s.margin;if(!Object(c.g)(n,o)){var a=o[0]-n[0],p=n[2]-o[2],u=o[1]-n[1],h=n[3]-o[3],f=[0,0];if(a<0?f[0]=a-r:p<0&&(f[0]=Math.abs(p)+r),u<0?f[1]=u-r:h<0&&(f[1]=Math.abs(h)+r),0!==f[0]||0!==f[1]){var d=e.getView().getCenterInternal(),y=e.getPixelFromCoordinateInternal(d);if(!y)return;var g=[y[0]+f[0],y[1]+f[1]],v=s.animation||{};e.getView().animateInternal({center:e.getCoordinateFromPixelInternal(g),duration:v.duration,easing:v.easing})}}}},e.prototype.getRect=function(t,e){var n=t.getBoundingClientRect(),i=n.left+window.pageXOffset,o=n.top+window.pageYOffset;return[i,o,i+e[0],o+e[1]]},e.prototype.setPositioning=function(t){this.set(y,t)},e.prototype.setVisible=function(t){this.rendered.visible!==t&&(this.element.style.display=t?"":"none",this.rendered.visible=t)},e.prototype.updatePixelPosition=function(){var t=this.getMap(),e=this.getPosition();if(t&&t.isRendered()&&e){var n=t.getPixelFromCoordinate(e),i=t.getSize();this.updateRenderedPosition(n,i)}else this.setVisible(!1)},e.prototype.updateRenderedPosition=function(t,e){var n=this.element.style,i=this.getOffset(),o=this.getPositioning();this.setVisible(!0);var s=Math.round(t[0]+i[0])+"px",a=Math.round(t[1]+i[1])+"px",c="0%",p="0%";o==r.a.BOTTOM_RIGHT||o==r.a.CENTER_RIGHT||o==r.a.TOP_RIGHT?c="-100%":o!=r.a.BOTTOM_CENTER&&o!=r.a.CENTER_CENTER&&o!=r.a.TOP_CENTER||(c="-50%"),o==r.a.BOTTOM_LEFT||o==r.a.BOTTOM_CENTER||o==r.a.BOTTOM_RIGHT?p="-100%":o!=r.a.CENTER_LEFT&&o!=r.a.CENTER_CENTER&&o!=r.a.CENTER_RIGHT||(p="-50%");var l="translate("+c+", "+p+") translate("+s+", "+a+")";this.rendered.transform_!=l&&(this.rendered.transform_=l,n.transform=l,n.msTransform=l)},e.prototype.getOptions=function(){return this.options},e}(o.a);e.a=g},852:function(t,e,n){"use strict";var i=n(46),o=(n(201),n(77),n(841));e.a={name:"MyMapHtml",inject:["myMap"],props:{id:[Number,String],offset:{type:Array,default:function(){return[0,0]}},position:Array,positioning:{type:String,default:"center-center"},stopEvent:{type:Boolean,default:!0},insertFirst:Boolean,autoPan:{type:Boolean,default:!1},autoPanAnimation:{type:Object,default:function(){return{}}},autoPanMargin:{type:Number,default:20},visible:{type:Boolean,default:!0}},render:function(){var t=arguments[0];return t("div",{class:"my-map-html",style:this.styles,on:Object(i.a)({},this.$listeners)},[this.$slots.default])},computed:{styles:function(){return{cursor:this.$listeners.click?"pointer":""}}},watch:{$props:{deep:!0,handler:function(){try{this.dispose(),this.init()}catch(t){}}}},methods:{init:function(){if(this.$el){var t=Object(i.a)(Object(i.a)({},this.$props),{},{element:this.$el});this.overlay=new o.a(t);try{this.myMap.map.addOverlay(this.overlay),this.setPosition(this.visible?this.position:null)}catch(t){}}},setPosition:function(t){this.overlay&&this.overlay.setPosition(this.visible?t:null)},dispose:function(){this.overlay&&this.myMap&&this.myMap.map&&this.myMap.map.removeOverlay(this.overlay)}},mounted:function(){this.myMap.mapReady(this.init)},beforeDestroy:function(){this.dispose()}}}}]);