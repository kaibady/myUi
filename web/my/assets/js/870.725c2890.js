(window.webpackJsonp=window.webpackJsonp||[]).push([[870],{1064:function(e,t,i){"use strict";i(1058);var n,r=i(750),a=i(634),o=i(659),s=i(433),c=i(637),l=i(406),u=i(460),h=i(1059),d=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),p=0,m=1,f=function(e){function t(t){var i=this,n=t||{};(i=e.call(this,{element:document.createElement("div"),render:n.render||g})||this).dragListenerKeys_=[],i.currentResolution_=void 0,i.direction_=p,i.dragging_,i.heightLimit_=0,i.widthLimit_=0,i.startX_,i.startY_,i.thumbSize_=null,i.sliderInitialized_=!1,i.duration_=void 0!==n.duration?n.duration:200;var r=void 0!==n.className?n.className:"ol-zoomslider",o=document.createElement("button");o.setAttribute("type","button"),o.className=r+"-thumb "+a.e;var s=i.element;return s.className=r+" "+a.e+" "+a.b,s.appendChild(o),s.addEventListener(h.a.POINTERDOWN,i.handleDraggerStart_.bind(i),!1),s.addEventListener(h.a.POINTERMOVE,i.handleDraggerDrag_.bind(i),!1),s.addEventListener(h.a.POINTERUP,i.handleDraggerEnd_.bind(i),!1),s.addEventListener(l.a.CLICK,i.handleContainerClick_.bind(i),!1),o.addEventListener(l.a.CLICK,c.b,!1),i}return d(t,e),t.prototype.setMap=function(t){e.prototype.setMap.call(this,t),t&&t.render()},t.prototype.initSlider_=function(){var e=this.element,t=e.offsetWidth,i=e.offsetHeight,n=e.firstElementChild,r=getComputedStyle(n),a=n.offsetWidth+parseFloat(r.marginRight)+parseFloat(r.marginLeft),o=n.offsetHeight+parseFloat(r.marginTop)+parseFloat(r.marginBottom);this.thumbSize_=[a,o],t>i?(this.direction_=m,this.widthLimit_=t-a):(this.direction_=p,this.heightLimit_=i-o),this.sliderInitialized_=!0},t.prototype.handleContainerClick_=function(e){var t=this.getMap().getView(),i=this.getRelativePosition_(e.offsetX-this.thumbSize_[0]/2,e.offsetY-this.thumbSize_[1]/2),n=this.getResolutionForPosition_(i),r=t.getConstrainedZoom(t.getZoomForResolution(n));t.animateInternal({zoom:r,duration:this.duration_,easing:o.b})},t.prototype.handleDraggerStart_=function(e){if(!this.dragging_&&e.target===this.element.firstElementChild){var t=this.element.firstElementChild;if(this.getMap().getView().beginInteraction(),this.startX_=e.clientX-parseFloat(t.style.left),this.startY_=e.clientY-parseFloat(t.style.top),this.dragging_=!0,0===this.dragListenerKeys_.length){var i=this.handleDraggerDrag_,n=this.handleDraggerEnd_;this.dragListenerKeys_.push(Object(s.a)(document,h.a.POINTERMOVE,i,this),Object(s.a)(document,h.a.POINTERUP,n,this))}}},t.prototype.handleDraggerDrag_=function(e){if(this.dragging_){var t=e.clientX-this.startX_,i=e.clientY-this.startY_,n=this.getRelativePosition_(t,i);this.currentResolution_=this.getResolutionForPosition_(n),this.getMap().getView().setResolution(this.currentResolution_)}},t.prototype.handleDraggerEnd_=function(e){this.dragging_&&(this.getMap().getView().endInteraction(),this.dragging_=!1,this.startX_=void 0,this.startY_=void 0,this.dragListenerKeys_.forEach(s.c),this.dragListenerKeys_.length=0)},t.prototype.setThumbPosition_=function(e){var t=this.getPositionForResolution_(e),i=this.element.firstElementChild;this.direction_==m?i.style.left=this.widthLimit_*t+"px":i.style.top=this.heightLimit_*t+"px"},t.prototype.getRelativePosition_=function(e,t){var i;return i=this.direction_===m?e/this.widthLimit_:t/this.heightLimit_,Object(u.a)(i,0,1)},t.prototype.getResolutionForPosition_=function(e){return this.getMap().getView().getResolutionForValueFunction()(1-e)},t.prototype.getPositionForResolution_=function(e){var t=this.getMap().getView().getValueForResolutionFunction();return Object(u.a)(1-t(e),0,1)},t}(r.a);function g(e){if(e.frameState){this.sliderInitialized_||this.initSlider_();var t=e.frameState.viewState.resolution;this.currentResolution_=t,this.setThumbPosition_(t)}}t.a=f},1322:function(e,t,i){},1396:function(e,t,i){"use strict";var n=i(296),r=(i(161),i(160),i(67),i(96),i(300)),a=i(914),o=i(1064),s={name:"MyMapZoom",inject:["myMap"],components:{Placement:i(639).a},render:function(){return null},props:{placement:{type:String,default:"left-top",validator:function(e){return["left-top","right-top","left-bottom","right-bottom"].includes(e)}},slider:Boolean,theme:{type:String,default:"light",validator:function(e){return["light","dark"].includes(e)}}},computed:{classes:function(){var e;return Object.keys((e={"my-map-zoom":!0},Object(r.a)(e,"is-".concat(this.theme),!!this.theme),Object(r.a)(e,"is-".concat(this.placement),!!this.placement),e)).join(" ")}},methods:{init:function(e){this.zoom=new a.a({className:this.classes+" ol-zoom"}),this.zoomSlider=new o.a({className:this.classes+" ol-zoomslider"}),e.addControl(this.zoom),e.addControl(this.zoomSlider)}},created:function(){this.myMap.mapReady(this.init)},beforeDestroy:function(){var e,t=null===(e=this.myMap)||void 0===e?void 0:e.map;t&&(this.zoom&&t.addControl(this.zoom),this.zoomSlider&&t.addControl(this.zoomSlider))}};i(1322),t.a=Object(n.a)(s)},2850:function(e,t,i){"use strict";i.r(t);var n=i(1396),r=i(400),a=i(0);a.default.use(r.a),a.default.use(n.a);var o={},s=i(39),c=Object(s.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("my-map",[t("my-map-zoom")],1)}),[],!1,null,null,null);t.default=c.exports},296:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));i(65),"My".toLowerCase();function n(e){return e.install=function(t){return"undefined"!=typeof window&&i(307).default(e),t.component(e.name,e)},e}},298:function(e,t,i){"use strict";i(310);var n={version:"4.0.1",debug:!1,appName:null,routePrefix:null,router:{mode:"hash",base:"/"},autoRoutes:!0,vuex:{strict:!1},keys:{code:"code",data:"data",message:"msg",total:"total",list:"list",page:"page",limit:"limit",pages:"pages"},statusCode:{success:0,notLogin:401,authorize:403,error:500},axios:{headers:{"Content-Type":"application/json;charset=UTF-8"},timeout:0,withCredentials:!0,responseType:"json",maxContentLength:-1},svg:{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor"},access:{},mock:{timeout:"50-200"},scale:{width:1920,height:1080,disabled:!0,lock:!0},analysis:!1,microApp:{prefetch:!1,singular:!0,sandbox:!0}};t.a=n},307:function(e,t,i){"use strict";i.r(t);i(160),i(65);var n=i(298),r=!1,a=[],o=null;n.a.analysis&&function(){if(!r){var e="c4e5f73318b5cb0c389e3d9a05f831cc",t=window._hmt;if(!t||t&&t.id!==e){var i=document.createElement("script");i.src="https://hm.baidu.com/hm.js?".concat(e);var n=document.getElementsByTagName("script")[0];n&&n.parentNode.insertBefore(i,n)}r=!0}}(),t.default=function(e){var t;n.a.analysis&&(t=e.name,a.push(t),clearTimeout(o),o=setTimeout((function(){if(window._hmt&&t){var e=window.location.host,i=window.location.href;window._hmt.push(["_trackEvent",e,a.join(","),n.a.version,i]),a=[]}}),3e3))}},370:function(e,t,i){"use strict";i.d(t,"c",(function(){return o})),i.d(t,"d",(function(){return s})),i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return l}));i(91),i(160),i(65),i(438),i(40),i(94),i(412),i(68),i(442),i(367);var n=i(436),r=i.n(n),a=/^(http|https):\/\/[\w.:]*\//;function o(e,t,i){var n,r={};e=(e||location.search).replace(/^[^]*\?/,""),t=t||"&",i=i||"=";for(var a=new RegExp("(?:^|\\"+t+")([^\\"+i+"\\"+t+"]+)(?:\\"+i+"([^\\"+t+"]*))?","g");null!==(n=a.exec(e));)n[1]!==e&&(r[decodeURIComponent(n[1])]=decodeURIComponent(n[2]||""));return r}function s(e){var t=[];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.push([i,encodeURIComponent(e[i])].join("="));return t.join("&")}function c(e){var t=e.match(a);return t?t[0]:""}function l(e,t){var i=[],n=c(e),a=r()(e.replace(n,""),i).exec(t.split("?")[0].replace(n,"")),o={};return a&&a.length>0&&i.forEach((function(e,t){o[e.name]=a[t+1]})),o}},396:function(e,t,i){"use strict";i.d(t,"a",(function(){return Q}));i(162),i(67);var n=i(295),r=i(41),a=i(397),o=i(482),s=i(484),c=i(395),l=i(488),u=i(478),h=i(344),d=i(481),p=(i(160),i(65),i(7),i(94),i(23)),m=i(47),f=i(113),g=i(114),v=i(110),y=i(111),b=i(469),_=i(475),w="METER",O="KILOMETER",j="DEGREE",S="INCH",x="FOOT",E="ISERVER";function P(e,t,i){var n=e*t*(1/.0254)*function(e){var t;if(e===w)t=1;else if(e===j)t=2*Math.PI*6378137/360;else if(e===O)t=.001;else if(e===S)t=1/.025399999918;else{if(e!==x)return t;t=.3048}return t}(i);return n=1/n}function I(e,t,i){var n=e*t*(1/.0254)*this.getMeterPerMapUnit(i);return n=1/n}var T=function(e){Object(v.a)(i,e);var t=Object(y.a)(i);function i(e){var n;if(Object(p.a)(this,i),void 0===(e=e||{}).url)return Object(f.a)(n);e.format=e.format?e.format:"png";var r=e.url+"/tileImage."+e.format+"?";e.serverType=e.serverType||E,n=t.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,logo:e.logo,opaque:e.opaque,projection:e.projection,reprojectionErrorThreshold:e.reprojectionErrorThreshold,state:e.state,tileClass:e.tileClass,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:function(t,n,r){a.tileGrid||(a.extent?(a.tileGrid=i.createTileGrid(e.extent),a.resolutions&&(a.tileGrid.resolutions=a.resolutions)):("EPSG:3857"===r.getCode()&&(a.tileGrid=i.createTileGrid([-20037508.3427892,-20037508.3427892,20037508.3427892,20037508.3427892]),a.extent=[-20037508.3427892,-20037508.3427892,20037508.3427892,20037508.3427892]),"EPSG:4326"===r.getCode()&&(a.tileGrid=i.createTileGrid([-180,-90,180,90]),a.extent=[-180,-90,180,90])));a.origin=a.tileGrid.getOrigin(0);var o=t[0],c=t[1],l=-t[2]-1,u=a.tileGrid.getResolution(o),h=r.getUnits();"degrees"===h&&(h=j);"m"===h&&(h=w);var d=P(u,96,h),p=Object(b.c)(a.tileGrid.getTileSize(o,a.tmpSize)),m=s.call(a)+encodeURI("&x="+c+"&y="+l+"&width="+p[0]+"&height="+p[1]+"&scale="+d);a.tileProxy&&(m=a.tileProxy+encodeURIComponent(m));a.cacheEnabled||(m+="&_t="+(new Date).getTime());return m},url:e.url,urls:e.urls,wrapX:void 0!==e.wrapX&&e.wrapX,cacheEnabled:e.cacheEnabled,layersID:e.layersID}),e.tileProxy&&(n.tileProxy=e.tileProxy),n.options=e,n._url=e.url,n.tileSetsIndex=-1,n.tempIndex=-1;var a=Object(g.a)(n);function o(){var t={};return t.redirect=void 0!==e.redirect&&e.redirect,t.transparent=void 0===e.transparent||e.transparent,t.cacheEnabled=!(!1===e.cacheEnabled),this.cacheEnabled=t.cacheEnabled,t._cache=t.cacheEnabled,this.origin&&(t.origin=JSON.stringify({x:this.origin[0],y:this.origin[1]})),e.prjCoordSys&&(t.prjCoordSys=JSON.stringify(e.prjCoordSys)),e.layersID&&(t.layersID=e.layersID.toString()),e.overlapDisplayed?t.overlapDisplayed=!0:(t.overlapDisplayed=!1,e.overlapDisplayedOptions&&(t.overlapDisplayedOptions=this.overlapDisplayedOptions.toString())),e.cacheEnabled&&e.tileversion&&(t.tileversion=e.tileversion.toString()),t}function s(){return this._paramsChanged&&(this._layerUrl=c.call(this),this._paramsChanged=!1),this._layerUrl||c.call(this)}function c(){return this._layerUrl=r+encodeURI(l.call(this)),this._layerUrl}function l(){this.requestParams=this.requestParams||o.call(this);var e=[];for(var t in this.requestParams)e.push(t+"="+this.requestParams[t]);return e.join("&")}return n}return Object(m.a)(i,[{key:"setTileSetsInfo",value:function(e){this.tileSets=e,Array.isArray(this.tileSets)&&(this.tileSets=e[0]),this.tileSets&&(this.dispatchEvent({type:"tilesetsinfoloaded",value:{tileVersions:this.tileSets.tileVersions}}),this.changeTilesVersion())}},{key:"lastTilesVersion",value:function(){this.tempIndex=this.tileSetsIndex-1,this.changeTilesVersion()}},{key:"nextTilesVersion",value:function(){this.tempIndex=this.tileSetsIndex+1,this.changeTilesVersion()}},{key:"changeTilesVersion",value:function(){var e=this;if(null!=e.tileSets&&!(e.tempIndex===e.tileSetsIndex||this.tempIndex<0)){var t=e.tileSets.tileVersions;if(t&&e.tempIndex<t.length&&e.tempIndex>=0){var i=t[e.tempIndex].name;e.mergeTileVersionParam(i)&&(e.tileSetsIndex=e.tempIndex,e.dispatchEvent({type:"tileversionschanged",value:{tileVersion:t[e.tempIndex]}}))}}}},{key:"updateCurrentTileSetsIndex",value:function(e){this.tempIndex=e}},{key:"mergeTileVersionParam",value:function(e){return!!e&&(this.requestParams.tileversion=e,this._paramsChanged=!0,this.refresh(),!0)}}],[{key:"optionsFromMapJSON",value:function(e,t){var i={};i.url=e,i.crossOrigin="anonymous";var n=[t.bounds.left,t.bounds.bottom,t.bounds.right,t.bounds.top],r=function(){var e,i=n[2]-n[0],r=n[3]-n[1],a=i>=r?i:r;e=a===i?a/t.viewer.width:a/t.viewer.height;var o=[],s=w;t.coordUnit===j&&(s=j);if(t.visibleScalesEnabled&&t.visibleScales&&t.visibleScales.length>0)for(var c=0;c<t.visibleScales.length;c++)o.push(I(t.visibleScales[c],96,s));else for(var l=0;l<17;l++)o.push(e/Math.pow(2,l));return o.sort((function(e,t){return t-e}))}();return i.tileGrid=new h.a({extent:n,resolutions:r}),i}},{key:"createTileGrid",value:function(e,t,i,n,r){var a=Object(_.a)({extent:e,maxZoom:t,minZoom:i,tileSize:n});return new h.a({extent:e,minZoom:i,origin:r,resolutions:a.getResolutions(),tileSize:a.getTileSize()})}}]),i}(u.a),z=i(325),M=i(346),C=i(370),L=(i(40),i(68),i(485)),R=i.n(L),F=new M.b({code:"baidu",extent:[-20037726.37,-12474104.17,20037726.37,12474104.17],units:"m"});Object(M.d)(F),Object(M.c)("EPSG:4326",F,R.a.ll2bmerc,R.a.bmerc2ll),Object(M.c)("EPSG:3857",F,R.a.smerc2bmerc,R.a.bmerc2smerc);for(var V=new Array(19),A=0;A<19;++A)V[A]=Math.pow(2,18-A);var G=function(e){return new a.a({source:new c.a({projection:"baidu",maxZoom:18,tileUrlFunction:function(t){var i=t[1],n=-t[2]-1,r=t[0];i<0&&(i="M"+-i),n<0&&(n="M"+-n);var a=Math.ceil(5*Math.random());return e.url.replace(/{x}/g,i).replace(/{y}/g,n).replace(/{z}/g,r).replace(/{n}/g,a)},tileGrid:new h.a({resolutions:V,origin:[0,0]})})})},D="http://webrd03.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}&lang=zh_cn",k="http://online{n}.map.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=1&udt=20190718",N="http://10.8.6.103/PGIS_S_TileMapServer/Maps/BJSL/EzMap?Service=getImage&Type=RGB&ZoomOffset=0",$="http://53.1.238.17/iserver/services/map-pgisvec/rest/maps/pgisvecv1",Z="http://68.26.21.71/images/GetImage.do?method=showImageRedisBytable&jinyi_admin:MA_PGISSLDT&version=v1";function U(){for(var e=[],t=0;t<20;t++){var i=t<7?[64,64]:[107.5,28];e.push(i)}return e}function X(){for(var e=[],t=0;t<20;t++){var i=2.0000081722216954/Math.pow(2,t);e.push(i)}return e}function B(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"EPSG:4326",t=256,i=Object(M.i)(e),n=i.getExtent(),r=Object(z.E)(n)/t,a=[],o=[],s=0;s<=20;s++)a[s]=s,o[s]=r/Math.pow(2,s);return new d.b({origin:Object(z.C)(n),resolutions:o,matrixIds:a})}function Y(e){var t=e.layers.map((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"vec_c";return new a.a({source:new c.a({url:"http://t{0-7}.tianditu.com/DataServer?T="+e+"&x={x}&y={y}&l={z}&tk=464554f64aa4f4e90e0321c17a57a331"})})}(e)}));return new o.a({layers:t})}function W(e){var t=B(),i=e.url;return new a.a({source:new l.a({url:i,tileGrid:t}),wrapX:!1})}function q(e){var t=e.url,i=B();return new a.a({source:new l.a({url:"",crossOrigin:"Anonymous",tileGrid:i,tileLoadFunction:function(e,i){var n=Object(C.c)(i),r={Row:n.TileRow,Col:n.TileCol,Zoom:n.TileMatrix,V:"1.0.0"};e.getImage().src="".concat(t,"&").concat(Object(C.d)(r))}}),wrapX:!1})}function K(e){if("function"==typeof e.url){var t=e.url,i=B();return new a.a({source:new l.a({url:"",crossOrigin:"Anonymous",tileGrid:i,tileLoadFunction:function(e,i){var n=Object(C.c)(i);e.getImage().src=t(n)}}),wrapX:!1})}return q(e)}function J(e){return new a.a({source:new T({url:e.url}),projection:e.projection||"EPSG:4326"})}function H(e){var t=e.url;return new a.a({projection:e.projection||"EPSG:4326",url:"".concat(t,"&l={z}&x={y}&y={x}"),tileGrid:new h.a({origin:e.origins||U(),resolutions:e.resolutions||X()})})}function Q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("function"==typeof e)return e({TileLayer:a.a,LayerGroup:o.a,OSM:s.a,XYZ:c.a,WMTS:l.a,TileImage:u.a,TileGrid:h.a,WMTSGrid:d.b,getWidth:z.E,getTopLeft:z.C,getProj:M.i});var i="object"===Object(r.a)(e)?Object(n.a)({},e):{type:e},p=i.type;switch(delete i.type,p){case"OSM":return new a.a(Object(n.a)(Object(n.a)({},t),{},{source:new s.a(i)}));case"XYZ":return new a.a(Object(n.a)(Object(n.a)({},t),{},{source:new c.a(i)}));case"Amap":return new a.a(Object(n.a)(Object(n.a)({},t),{},{source:new c.a(Object(n.a)({url:D},i))}));case"Baidu":return G(Object(n.a)({url:k},i));case"TDT":return Y(Object(n.a)({layers:["vec_c","vec_w","cva_w","ibo_w"]},i));case"Founder":return W(Object(n.a)({url:"http://127.0.0.1:3000/proxy"},i));case"Ez":return q(Object(n.a)({url:N},i));case"Super":return J(Object(n.a)({url:$},i));case"Fc":return H(Object(n.a)({url:Z},i));case"WMTS":return K(i)}}},398:function(e,t,i){},400:function(e,t,i){"use strict";var n=i(296),r=(i(162),i(19),i(359),i(91),i(160),i(67),i(301),i(401),i(341),i(92),i(295)),a=i(69),o=i(486),s=i(479),c=i(473),l=i(474),u=i(426),h=i(470),d=i(464),p=i(396),m=i(316),f={name:"MyMap",provide:function(){return{myMap:this}},props:{zoom:{type:Number,default:10},minZoom:{type:Number,default:1},maxZoom:{type:Number,default:20},center:{type:Array,default:function(){return[113.261999,23.130592]}},adapter:{type:[String,Object,Function],default:"Baidu"},projection:{type:String,default:"EPSG:4326"},width:{type:String,default:"100%"},height:{type:String,default:"400px"},dragPan:{type:Boolean,default:!0},mouseWheelZoom:{type:Boolean,default:!0},mapOptions:Object,viewOptions:Object,invert:Boolean,filter:Object},render:function(){var e=arguments[0];return e("div",{class:this.classes,style:this.styles},[this.$slots.default])},data:function(){return{cursor:null,viewWidth:0,viewHeight:0}},computed:{classes:function(){return{"my-map":!0,"my-map--invert":this.invert}},styles:function(){return{width:this.width,height:this.height,cursor:this.cursor?"pointer":""}},filterStyle:function(){return this.filter?Object.entries(this.filter).map((function(e){var t=Object(a.a)(e,2),i=t[0],n=t[1];return"hue-rotate"===i?"".concat(i,"(").concat(n,"deg)"):"".concat(i,"(").concat(n,")")})).join(" "):null}},watch:{dragPan:function(e){this.setActive(c.a,e)},mouseWheelZoom:function(e){this.setActive(l.a,e)},filterStyle:function(){this.setCanvasFilter()}},methods:{setActive:function(e,t){if(this.map){var i=this.map.getInteractions().getArray().find((function(t){return t instanceof e}));i&&i.setActive(t)}},init:function(){var e=this.$props,t=e.center,i=e.projection,n=e.zoom,a=e.minZoom,h=e.maxZoom,d=Object(p.a)(this.adapter);d.__MY_LAYER__=!0;var f=new s.a(Object(r.a)(Object(r.a)({},this.viewOptions||{}),{},{projection:i,center:t,zoom:n,minZoom:a,maxZoom:h}));this.map=new o.a(Object(r.a)(Object(r.a)({},this.mapOptions||{}),{},{layers:[].concat(d),view:f,target:this.$el,controls:[],interactions:[new c.a,new l.a,new u.b({handleEvent:this.handleEvent})]})),this.setActive(c.a,this.dragPan),this.setActive(l.a,this.mouseWheelZoom),this.bindMapEvents(),this.$emit("ready",this.map,this),Object(m.addResizeListener)(this.$el,this.setViewSize),this.setCanvasFilter()},dispose:function(){this.map&&(this.map.disposeInternal(),this.unbindMapEvents(),Object(m.removeResizeListener)(this.$el,this.setViewSize))},getFeatureAtPixel:function(e){return this.map?this.map.forEachFeatureAtPixel(e,(function(e){return e})):null},setCursor:function(e){var t=this.getFeatureVM(e);this.cursor=t&&(t.cursor||t.$listeners.click)},clickTrigger:function(e,t){if(e){var i=this.getFeatureVM(e);i&&i.$emit("click",t,e)}},getLayer:function(){return this.map?this.map.getLayers().getArray().find((function(e){return e.__MY_LAYER__})):null},getFeatureVM:function(e){if(e){var t=(e.get("features")||[])[0]||e;return t.__vm__||t.get("__vm__")}},enterAndLeaveTrigger:function(e,t){if(!this.featureAtPixel&&e){this.$emit("mouseenter",t,e);var i=this.getFeatureVM(e);i&&i.$emit("mouseenter",t,e)}if(this.featureAtPixel&&!e){this.$emit("mouseleave",t,this.featureAtPixel);var n=this.getFeatureVM(this.featureAtPixel);n&&n.$emit("mouseleave",t,this.featureAtPixel)}if(this.featureAtPixel&&e&&this.featureAtPixel!==e){this.$emit("mouseleave",t,this.featureAtPixel),this.$emit("mouseenter",t,e);var r=this.getFeatureVM(this.featureAtPixel);r&&r.$emit("mouseleave",t,this.featureAtPixel);var a=this.getFeatureVM(e);a&&a.$emit("mouseenter",t,e)}this.featureAtPixel=e},handleEvent:function(e){var t=e.type,i=this.getFeatureAtPixel(e.pixel);switch(t){case"pointermove":this.setCursor(i),this.enterAndLeaveTrigger(i,e);break;case"click":this.clickTrigger(i,e)}return!0},bindMapEvents:function(){var e=this;this.map&&(Object.entries(this.$listeners).forEach((function(t){var i=Object(a.a)(t,2),n=i[0],r=i[1];return e.map.on(n,r)})),this.map.on())},unbindMapEvents:function(){var e=this;this.map&&Object.entries(this.$listeners).forEach((function(t){var i=Object(a.a)(t,2),n=i[0],r=i[1];return e.map.un(n,r)}))},resize:function(){this.map.updateSize()},moveTo:function(e){this.map&&this.map.getView().animate({center:e,duration:200})},zoomTo:function(e){this.map&&this.map.getView().animate({zoom:Number.parseInt(e),duration:200})},zoomIn:function(){if(this.map){var e=this.map.getView();this.zoomTo(e.getZoom()+1)}},zoomOut:function(){if(this.map){var e=this.map.getView();this.zoomTo(e.getZoom()-1)}},mapReady:function(e){this.map?e&&e(this.map,this):this.$once("ready",e)},createVectorLayer:function(){if(this.map&&!this.vectorLayer){var e=new d.a;return this.vectorLayer=new h.a({source:e,zIndex:1}),this.map.addLayer(this.vectorLayer),this.vectorLayer}},addFeature:function(e){if(this.map){this.vectorLayer||this.createVectorLayer();var t=this.vectorLayer.getSource(),i=[].concat(e);t.addFeatures(i)}},removeFeature:function(e){if(this.vectorLayer){var t=this.vectorLayer.getSource();[].concat(e).forEach((function(e){return t.removeFeature(e)}))}},getMetersPerUnit:function(){return this.map?this.map.getView().getProjection().getMetersPerUnit():0},setViewSize:function(){var e=this.$el.getBoundingClientRect();this.viewWidth=e.width||0,this.viewHeight=e.height||0,this.map&&this.map.updateSize(),this.$emit("viewSizeChange",e)},setCanvasFilter:function(){if(this.map){var e=this.map.getViewport();e&&(e.style.filter=this.filterStyle)}}},mounted:function(){this.init()},beforeDestroy:function(){this.dispose()}};i(483),i(398),t.a=Object(n.a)(f)},639:function(e,t,i){"use strict";var n=i(296),r=(i(162),i(161),i(160),i(67),i(301),{name:"MyMapPlacement",props:{placement:{type:String,default:"left-bottom",validator:function(e){return["left-top","center-top","right-top","left-center","center-center","right-center","left-bottom","center-bottom","right-bottom"].includes(e)}},zIndex:{type:Number,default:1},margin:{type:[Array,Number],default:10},theme:{type:String,default:"light",validator:function(){return["light","dark"]}}},computed:{styles:function(){return{zIndex:this.zIndex,margin:[].concat(this.margin).map((function(e){return"".concat(e,"px")})).join(" ")}},classes:function(){return["is-".concat(this.theme),this.placement]}}}),a=i(39),o=Object(a.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"my-map-placement",class:this.classes,style:this.styles},[this._t("default")],2)}),[],!1,null,null,null).exports;i(641),t.a=Object(n.a)(o)},641:function(e,t,i){}}]);