(window.webpackJsonp=window.webpackJsonp||[]).push([[840],{1866:function(t,e,i){"use strict";var n=i(296),r=(i(161),i(301),i(295)),o=i(490),a=i(407),s={name:"MyMapText",mixins:[i(527).a],props:{font:{type:String,default:"12px"},maxAngle:Number,offsetX:Number,offsetY:Number,overflow:Boolean,placement:{type:String,default:"point",validator:function(t){return["point","line"].includes(t)}},scale:Number,rotateWithView:Boolean,rotation:Number,text:String,textAlign:String,textBaseline:String,backgroundFill:String,backgroundStroke:Object,padding:Array,coordinate:{type:Array,required:!0},stroke:Object,fill:String},methods:{drawHandler:function(){return new o.a(this.coordinate)},setStyle:function(){if(this.feature){var t=Object(a.a)({text:Object(r.a)({},this.$props)});this.feature.setStyle(t)}},modifyHandler:function(t){t.setCoordinates(this.coordinate)}}};e.a=Object(n.a)(s)},296:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));i(65),"My".toLowerCase();function n(t){return t.install=function(e){return"undefined"!=typeof window&&i(307).default(t),e.component(t.name,t)},t}},298:function(t,e,i){"use strict";i(310);var n={version:"4.0.1",debug:!1,appName:null,routePrefix:null,router:{mode:"hash",base:"/"},autoRoutes:!0,vuex:{strict:!1},keys:{code:"code",data:"data",message:"msg",total:"total",list:"list",page:"page",limit:"limit",pages:"pages"},statusCode:{success:0,notLogin:401,authorize:403,error:500},axios:{headers:{"Content-Type":"application/json;charset=UTF-8"},timeout:0,withCredentials:!0,responseType:"json",maxContentLength:-1},svg:{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor"},access:{},mock:{timeout:"50-200"},scale:{width:1920,height:1080,disabled:!0,lock:!0},analysis:!1,microApp:{prefetch:!1,singular:!0,sandbox:!0}};e.a=n},2996:function(t,e,i){"use strict";i.r(e);var n=i(1866),r=i(400),o=i(0);o.default.use(r.a),o.default.use(n.a);var a={},s=i(39),c=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("my-map",[e("my-map-text",{attrs:{coordinate:[113.261999,23.130592],text:"文本样例",font:"20px"}})],1)}),[],!1,null,null,null);e.default=c.exports},307:function(t,e,i){"use strict";i.r(e);i(160),i(65);var n=i(298),r=!1,o=[],a=null;n.a.analysis&&function(){if(!r){var t="c4e5f73318b5cb0c389e3d9a05f831cc",e=window._hmt;if(!e||e&&e.id!==t){var i=document.createElement("script");i.src="https://hm.baidu.com/hm.js?".concat(t);var n=document.getElementsByTagName("script")[0];n&&n.parentNode.insertBefore(i,n)}r=!0}}(),e.default=function(t){var e;n.a.analysis&&(e=t.name,o.push(e),clearTimeout(a),a=setTimeout((function(){if(window._hmt&&e){var t=window.location.host,i=window.location.href;window._hmt.push(["_trackEvent",t,o.join(","),n.a.version,i]),o=[]}}),3e3))}},370:function(t,e,i){"use strict";i.d(e,"c",(function(){return a})),i.d(e,"d",(function(){return s})),i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return u}));i(91),i(160),i(65),i(438),i(40),i(94),i(412),i(68),i(442),i(367);var n=i(436),r=i.n(n),o=/^(http|https):\/\/[\w.:]*\//;function a(t,e,i){var n,r={};t=(t||location.search).replace(/^[^]*\?/,""),e=e||"&",i=i||"=";for(var o=new RegExp("(?:^|\\"+e+")([^\\"+i+"\\"+e+"]+)(?:\\"+i+"([^\\"+e+"]*))?","g");null!==(n=o.exec(t));)n[1]!==t&&(r[decodeURIComponent(n[1])]=decodeURIComponent(n[2]||""));return r}function s(t){var e=[];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.push([i,encodeURIComponent(t[i])].join("="));return e.join("&")}function c(t){var e=t.match(o);return e?e[0]:""}function u(t,e){var i=[],n=c(t),o=r()(t.replace(n,""),i).exec(e.split("?")[0].replace(n,"")),a={};return o&&o.length>0&&i.forEach((function(t,e){a[t.name]=o[e+1]})),a}},396:function(t,e,i){"use strict";i.d(e,"a",(function(){return Q}));i(162),i(67);var n=i(295),r=i(41),o=i(397),a=i(482),s=i(484),c=i(395),u=i(488),l=i(478),h=i(344),f=i(481),p=(i(160),i(65),i(7),i(94),i(23)),d=i(47),m=i(113),g=i(114),y=i(110),v=i(111),b=i(469),w=i(475),x="METER",_="KILOMETER",S="DEGREE",O="INCH",j="FOOT",k="ISERVER";function T(t,e,i){var n=t*e*(1/.0254)*function(t){var e;if(t===x)e=1;else if(t===S)e=2*Math.PI*6378137/360;else if(t===_)e=.001;else if(t===O)e=1/.025399999918;else{if(t!==j)return e;e=.3048}return e}(i);return n=1/n}function P(t,e,i){var n=t*e*(1/.0254)*this.getMeterPerMapUnit(i);return n=1/n}var A=function(t){Object(y.a)(i,t);var e=Object(v.a)(i);function i(t){var n;if(Object(p.a)(this,i),void 0===(t=t||{}).url)return Object(m.a)(n);t.format=t.format?t.format:"png";var r=t.url+"/tileImage."+t.format+"?";t.serverType=t.serverType||k,n=e.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,logo:t.logo,opaque:t.opaque,projection:t.projection,reprojectionErrorThreshold:t.reprojectionErrorThreshold,state:t.state,tileClass:t.tileClass,tileGrid:t.tileGrid,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:function(e,n,r){o.tileGrid||(o.extent?(o.tileGrid=i.createTileGrid(t.extent),o.resolutions&&(o.tileGrid.resolutions=o.resolutions)):("EPSG:3857"===r.getCode()&&(o.tileGrid=i.createTileGrid([-20037508.3427892,-20037508.3427892,20037508.3427892,20037508.3427892]),o.extent=[-20037508.3427892,-20037508.3427892,20037508.3427892,20037508.3427892]),"EPSG:4326"===r.getCode()&&(o.tileGrid=i.createTileGrid([-180,-90,180,90]),o.extent=[-180,-90,180,90])));o.origin=o.tileGrid.getOrigin(0);var a=e[0],c=e[1],u=-e[2]-1,l=o.tileGrid.getResolution(a),h=r.getUnits();"degrees"===h&&(h=S);"m"===h&&(h=x);var f=T(l,96,h),p=Object(b.c)(o.tileGrid.getTileSize(a,o.tmpSize)),d=s.call(o)+encodeURI("&x="+c+"&y="+u+"&width="+p[0]+"&height="+p[1]+"&scale="+f);o.tileProxy&&(d=o.tileProxy+encodeURIComponent(d));o.cacheEnabled||(d+="&_t="+(new Date).getTime());return d},url:t.url,urls:t.urls,wrapX:void 0!==t.wrapX&&t.wrapX,cacheEnabled:t.cacheEnabled,layersID:t.layersID}),t.tileProxy&&(n.tileProxy=t.tileProxy),n.options=t,n._url=t.url,n.tileSetsIndex=-1,n.tempIndex=-1;var o=Object(g.a)(n);function a(){var e={};return e.redirect=void 0!==t.redirect&&t.redirect,e.transparent=void 0===t.transparent||t.transparent,e.cacheEnabled=!(!1===t.cacheEnabled),this.cacheEnabled=e.cacheEnabled,e._cache=e.cacheEnabled,this.origin&&(e.origin=JSON.stringify({x:this.origin[0],y:this.origin[1]})),t.prjCoordSys&&(e.prjCoordSys=JSON.stringify(t.prjCoordSys)),t.layersID&&(e.layersID=t.layersID.toString()),t.overlapDisplayed?e.overlapDisplayed=!0:(e.overlapDisplayed=!1,t.overlapDisplayedOptions&&(e.overlapDisplayedOptions=this.overlapDisplayedOptions.toString())),t.cacheEnabled&&t.tileversion&&(e.tileversion=t.tileversion.toString()),e}function s(){return this._paramsChanged&&(this._layerUrl=c.call(this),this._paramsChanged=!1),this._layerUrl||c.call(this)}function c(){return this._layerUrl=r+encodeURI(u.call(this)),this._layerUrl}function u(){this.requestParams=this.requestParams||a.call(this);var t=[];for(var e in this.requestParams)t.push(e+"="+this.requestParams[e]);return t.join("&")}return n}return Object(d.a)(i,[{key:"setTileSetsInfo",value:function(t){this.tileSets=t,Array.isArray(this.tileSets)&&(this.tileSets=t[0]),this.tileSets&&(this.dispatchEvent({type:"tilesetsinfoloaded",value:{tileVersions:this.tileSets.tileVersions}}),this.changeTilesVersion())}},{key:"lastTilesVersion",value:function(){this.tempIndex=this.tileSetsIndex-1,this.changeTilesVersion()}},{key:"nextTilesVersion",value:function(){this.tempIndex=this.tileSetsIndex+1,this.changeTilesVersion()}},{key:"changeTilesVersion",value:function(){var t=this;if(null!=t.tileSets&&!(t.tempIndex===t.tileSetsIndex||this.tempIndex<0)){var e=t.tileSets.tileVersions;if(e&&t.tempIndex<e.length&&t.tempIndex>=0){var i=e[t.tempIndex].name;t.mergeTileVersionParam(i)&&(t.tileSetsIndex=t.tempIndex,t.dispatchEvent({type:"tileversionschanged",value:{tileVersion:e[t.tempIndex]}}))}}}},{key:"updateCurrentTileSetsIndex",value:function(t){this.tempIndex=t}},{key:"mergeTileVersionParam",value:function(t){return!!t&&(this.requestParams.tileversion=t,this._paramsChanged=!0,this.refresh(),!0)}}],[{key:"optionsFromMapJSON",value:function(t,e){var i={};i.url=t,i.crossOrigin="anonymous";var n=[e.bounds.left,e.bounds.bottom,e.bounds.right,e.bounds.top],r=function(){var t,i=n[2]-n[0],r=n[3]-n[1],o=i>=r?i:r;t=o===i?o/e.viewer.width:o/e.viewer.height;var a=[],s=x;e.coordUnit===S&&(s=S);if(e.visibleScalesEnabled&&e.visibleScales&&e.visibleScales.length>0)for(var c=0;c<e.visibleScales.length;c++)a.push(P(e.visibleScales[c],96,s));else for(var u=0;u<17;u++)a.push(t/Math.pow(2,u));return a.sort((function(t,e){return e-t}))}();return i.tileGrid=new h.a({extent:n,resolutions:r}),i}},{key:"createTileGrid",value:function(t,e,i,n,r){var o=Object(w.a)({extent:t,maxZoom:e,minZoom:i,tileSize:n});return new h.a({extent:t,minZoom:i,origin:r,resolutions:o.getResolutions(),tileSize:o.getTileSize()})}}]),i}(l.a),E=i(325),F=i(346),I=i(370),G=(i(40),i(68),i(485)),M=i.n(G),C=new F.b({code:"baidu",extent:[-20037726.37,-12474104.17,20037726.37,12474104.17],units:"m"});Object(F.d)(C),Object(F.c)("EPSG:4326",C,M.a.ll2bmerc,M.a.bmerc2ll),Object(F.c)("EPSG:3857",C,M.a.smerc2bmerc,M.a.bmerc2smerc);for(var V=new Array(19),z=0;z<19;++z)V[z]=Math.pow(2,18-z);var L=function(t){return new o.a({source:new c.a({projection:"baidu",maxZoom:18,tileUrlFunction:function(e){var i=e[1],n=-e[2]-1,r=e[0];i<0&&(i="M"+-i),n<0&&(n="M"+-n);var o=Math.ceil(5*Math.random());return t.url.replace(/{x}/g,i).replace(/{y}/g,n).replace(/{z}/g,r).replace(/{n}/g,o)},tileGrid:new h.a({resolutions:V,origin:[0,0]})})})},R="http://webrd03.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}&lang=zh_cn",B="http://online{n}.map.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=1&udt=20190718",N="http://10.8.6.103/PGIS_S_TileMapServer/Maps/BJSL/EzMap?Service=getImage&Type=RGB&ZoomOffset=0",$="http://53.1.238.17/iserver/services/map-pgisvec/rest/maps/pgisvecv1",Z="http://68.26.21.71/images/GetImage.do?method=showImageRedisBytable&jinyi_admin:MA_PGISSLDT&version=v1";function D(){for(var t=[],e=0;e<20;e++){var i=e<7?[64,64]:[107.5,28];t.push(i)}return t}function U(){for(var t=[],e=0;e<20;e++){var i=2.0000081722216954/Math.pow(2,e);t.push(i)}return t}function W(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"EPSG:4326",e=256,i=Object(F.i)(t),n=i.getExtent(),r=Object(E.E)(n)/e,o=[],a=[],s=0;s<=20;s++)o[s]=s,a[s]=r/Math.pow(2,s);return new f.b({origin:Object(E.C)(n),resolutions:a,matrixIds:o})}function X(t){var e=t.layers.map((function(t){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"vec_c";return new o.a({source:new c.a({url:"http://t{0-7}.tianditu.com/DataServer?T="+t+"&x={x}&y={y}&l={z}&tk=464554f64aa4f4e90e0321c17a57a331"})})}(t)}));return new a.a({layers:e})}function Y(t){var e=W(),i=t.url;return new o.a({source:new u.a({url:i,tileGrid:e}),wrapX:!1})}function H(t){var e=t.url,i=W();return new o.a({source:new u.a({url:"",crossOrigin:"Anonymous",tileGrid:i,tileLoadFunction:function(t,i){var n=Object(I.c)(i),r={Row:n.TileRow,Col:n.TileCol,Zoom:n.TileMatrix,V:"1.0.0"};t.getImage().src="".concat(e,"&").concat(Object(I.d)(r))}}),wrapX:!1})}function q(t){if("function"==typeof t.url){var e=t.url,i=W();return new o.a({source:new u.a({url:"",crossOrigin:"Anonymous",tileGrid:i,tileLoadFunction:function(t,i){var n=Object(I.c)(i);t.getImage().src=e(n)}}),wrapX:!1})}return H(t)}function J(t){return new o.a({source:new A({url:t.url}),projection:t.projection||"EPSG:4326"})}function K(t){var e=t.url;return new o.a({projection:t.projection||"EPSG:4326",url:"".concat(e,"&l={z}&x={y}&y={x}"),tileGrid:new h.a({origin:t.origins||D(),resolutions:t.resolutions||U()})})}function Q(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("function"==typeof t)return t({TileLayer:o.a,LayerGroup:a.a,OSM:s.a,XYZ:c.a,WMTS:u.a,TileImage:l.a,TileGrid:h.a,WMTSGrid:f.b,getWidth:E.E,getTopLeft:E.C,getProj:F.i});var i="object"===Object(r.a)(t)?Object(n.a)({},t):{type:t},p=i.type;switch(delete i.type,p){case"OSM":return new o.a(Object(n.a)(Object(n.a)({},e),{},{source:new s.a(i)}));case"XYZ":return new o.a(Object(n.a)(Object(n.a)({},e),{},{source:new c.a(i)}));case"Amap":return new o.a(Object(n.a)(Object(n.a)({},e),{},{source:new c.a(Object(n.a)({url:R},i))}));case"Baidu":return L(Object(n.a)({url:B},i));case"TDT":return X(Object(n.a)({layers:["vec_c","vec_w","cva_w","ibo_w"]},i));case"Founder":return Y(Object(n.a)({url:"http://127.0.0.1:3000/proxy"},i));case"Ez":return H(Object(n.a)({url:N},i));case"Super":return J(Object(n.a)({url:$},i));case"Fc":return K(Object(n.a)({url:Z},i));case"WMTS":return q(i)}}},398:function(t,e,i){},400:function(t,e,i){"use strict";var n=i(296),r=(i(162),i(19),i(359),i(91),i(160),i(67),i(301),i(401),i(341),i(92),i(295)),o=i(69),a=i(486),s=i(479),c=i(473),u=i(474),l=i(426),h=i(470),f=i(464),p=i(396),d=i(316),m={name:"MyMap",provide:function(){return{myMap:this}},props:{zoom:{type:Number,default:10},minZoom:{type:Number,default:1},maxZoom:{type:Number,default:20},center:{type:Array,default:function(){return[113.261999,23.130592]}},adapter:{type:[String,Object,Function],default:"Baidu"},projection:{type:String,default:"EPSG:4326"},width:{type:String,default:"100%"},height:{type:String,default:"400px"},dragPan:{type:Boolean,default:!0},mouseWheelZoom:{type:Boolean,default:!0},mapOptions:Object,viewOptions:Object,invert:Boolean,filter:Object},render:function(){var t=arguments[0];return t("div",{class:this.classes,style:this.styles},[this.$slots.default])},data:function(){return{cursor:null,viewWidth:0,viewHeight:0}},computed:{classes:function(){return{"my-map":!0,"my-map--invert":this.invert}},styles:function(){return{width:this.width,height:this.height,cursor:this.cursor?"pointer":""}},filterStyle:function(){return this.filter?Object.entries(this.filter).map((function(t){var e=Object(o.a)(t,2),i=e[0],n=e[1];return"hue-rotate"===i?"".concat(i,"(").concat(n,"deg)"):"".concat(i,"(").concat(n,")")})).join(" "):null}},watch:{dragPan:function(t){this.setActive(c.a,t)},mouseWheelZoom:function(t){this.setActive(u.a,t)},filterStyle:function(){this.setCanvasFilter()}},methods:{setActive:function(t,e){if(this.map){var i=this.map.getInteractions().getArray().find((function(e){return e instanceof t}));i&&i.setActive(e)}},init:function(){var t=this.$props,e=t.center,i=t.projection,n=t.zoom,o=t.minZoom,h=t.maxZoom,f=Object(p.a)(this.adapter);f.__MY_LAYER__=!0;var m=new s.a(Object(r.a)(Object(r.a)({},this.viewOptions||{}),{},{projection:i,center:e,zoom:n,minZoom:o,maxZoom:h}));this.map=new a.a(Object(r.a)(Object(r.a)({},this.mapOptions||{}),{},{layers:[].concat(f),view:m,target:this.$el,controls:[],interactions:[new c.a,new u.a,new l.b({handleEvent:this.handleEvent})]})),this.setActive(c.a,this.dragPan),this.setActive(u.a,this.mouseWheelZoom),this.bindMapEvents(),this.$emit("ready",this.map,this),Object(d.addResizeListener)(this.$el,this.setViewSize),this.setCanvasFilter()},dispose:function(){this.map&&(this.map.disposeInternal(),this.unbindMapEvents(),Object(d.removeResizeListener)(this.$el,this.setViewSize))},getFeatureAtPixel:function(t){return this.map?this.map.forEachFeatureAtPixel(t,(function(t){return t})):null},setCursor:function(t){var e=this.getFeatureVM(t);this.cursor=e&&(e.cursor||e.$listeners.click)},clickTrigger:function(t,e){if(t){var i=this.getFeatureVM(t);i&&i.$emit("click",e,t)}},getLayer:function(){return this.map?this.map.getLayers().getArray().find((function(t){return t.__MY_LAYER__})):null},getFeatureVM:function(t){if(t){var e=(t.get("features")||[])[0]||t;return e.__vm__||e.get("__vm__")}},enterAndLeaveTrigger:function(t,e){if(!this.featureAtPixel&&t){this.$emit("mouseenter",e,t);var i=this.getFeatureVM(t);i&&i.$emit("mouseenter",e,t)}if(this.featureAtPixel&&!t){this.$emit("mouseleave",e,this.featureAtPixel);var n=this.getFeatureVM(this.featureAtPixel);n&&n.$emit("mouseleave",e,this.featureAtPixel)}if(this.featureAtPixel&&t&&this.featureAtPixel!==t){this.$emit("mouseleave",e,this.featureAtPixel),this.$emit("mouseenter",e,t);var r=this.getFeatureVM(this.featureAtPixel);r&&r.$emit("mouseleave",e,this.featureAtPixel);var o=this.getFeatureVM(t);o&&o.$emit("mouseenter",e,t)}this.featureAtPixel=t},handleEvent:function(t){var e=t.type,i=this.getFeatureAtPixel(t.pixel);switch(e){case"pointermove":this.setCursor(i),this.enterAndLeaveTrigger(i,t);break;case"click":this.clickTrigger(i,t)}return!0},bindMapEvents:function(){var t=this;this.map&&(Object.entries(this.$listeners).forEach((function(e){var i=Object(o.a)(e,2),n=i[0],r=i[1];return t.map.on(n,r)})),this.map.on())},unbindMapEvents:function(){var t=this;this.map&&Object.entries(this.$listeners).forEach((function(e){var i=Object(o.a)(e,2),n=i[0],r=i[1];return t.map.un(n,r)}))},resize:function(){this.map.updateSize()},moveTo:function(t){this.map&&this.map.getView().animate({center:t,duration:200})},zoomTo:function(t){this.map&&this.map.getView().animate({zoom:Number.parseInt(t),duration:200})},zoomIn:function(){if(this.map){var t=this.map.getView();this.zoomTo(t.getZoom()+1)}},zoomOut:function(){if(this.map){var t=this.map.getView();this.zoomTo(t.getZoom()-1)}},mapReady:function(t){this.map?t&&t(this.map,this):this.$once("ready",t)},createVectorLayer:function(){if(this.map&&!this.vectorLayer){var t=new f.a;return this.vectorLayer=new h.a({source:t,zIndex:1}),this.map.addLayer(this.vectorLayer),this.vectorLayer}},addFeature:function(t){if(this.map){this.vectorLayer||this.createVectorLayer();var e=this.vectorLayer.getSource(),i=[].concat(t);e.addFeatures(i)}},removeFeature:function(t){if(this.vectorLayer){var e=this.vectorLayer.getSource();[].concat(t).forEach((function(t){return e.removeFeature(t)}))}},getMetersPerUnit:function(){return this.map?this.map.getView().getProjection().getMetersPerUnit():0},setViewSize:function(){var t=this.$el.getBoundingClientRect();this.viewWidth=t.width||0,this.viewHeight=t.height||0,this.map&&this.map.updateSize(),this.$emit("viewSizeChange",t)},setCanvasFilter:function(){if(this.map){var t=this.map.getViewport();t&&(t.style.filter=this.filterStyle)}}},mounted:function(){this.init()},beforeDestroy:function(){this.dispose()}};i(483),i(398),e.a=Object(n.a)(m)},407:function(t,e,i){"use strict";i(91),i(161),i(341),i(165),i(92);var n=i(69),r=i(41),o=i(556),a=i(555),s=function(){function t(t){var e=t||{};this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.scale_=e.scale,this.text_=e.text,this.textAlign_=e.textAlign,this.textBaseline_=e.textBaseline,this.fill_=void 0!==e.fill?e.fill:new o.a({color:"#333"}),this.maxAngle_=void 0!==e.maxAngle?e.maxAngle:Math.PI/4,this.placement_=void 0!==e.placement?e.placement:a.a.POINT,this.overflow_=!!e.overflow,this.stroke_=void 0!==e.stroke?e.stroke:null,this.offsetX_=void 0!==e.offsetX?e.offsetX:0,this.offsetY_=void 0!==e.offsetY?e.offsetY:0,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=void 0===e.padding?null:e.padding}return t.prototype.clone=function(){return new t({font:this.getFont(),placement:this.getPlacement(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:this.getScale(),text:this.getText(),textAlign:this.getTextAlign(),textBaseline:this.getTextBaseline(),fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()})},t.prototype.getOverflow=function(){return this.overflow_},t.prototype.getFont=function(){return this.font_},t.prototype.getMaxAngle=function(){return this.maxAngle_},t.prototype.getPlacement=function(){return this.placement_},t.prototype.getOffsetX=function(){return this.offsetX_},t.prototype.getOffsetY=function(){return this.offsetY_},t.prototype.getFill=function(){return this.fill_},t.prototype.getRotateWithView=function(){return this.rotateWithView_},t.prototype.getRotation=function(){return this.rotation_},t.prototype.getScale=function(){return this.scale_},t.prototype.getStroke=function(){return this.stroke_},t.prototype.getText=function(){return this.text_},t.prototype.getTextAlign=function(){return this.textAlign_},t.prototype.getTextBaseline=function(){return this.textBaseline_},t.prototype.getBackgroundFill=function(){return this.backgroundFill_},t.prototype.getBackgroundStroke=function(){return this.backgroundStroke_},t.prototype.getPadding=function(){return this.padding_},t.prototype.setOverflow=function(t){this.overflow_=t},t.prototype.setFont=function(t){this.font_=t},t.prototype.setMaxAngle=function(t){this.maxAngle_=t},t.prototype.setOffsetX=function(t){this.offsetX_=t},t.prototype.setOffsetY=function(t){this.offsetY_=t},t.prototype.setPlacement=function(t){this.placement_=t},t.prototype.setRotateWithView=function(t){this.rotateWithView_=t},t.prototype.setFill=function(t){this.fill_=t},t.prototype.setRotation=function(t){this.rotation_=t},t.prototype.setScale=function(t){this.scale_=t},t.prototype.setStroke=function(t){this.stroke_=t},t.prototype.setText=function(t){this.text_=t},t.prototype.setTextAlign=function(t){this.textAlign_=t},t.prototype.setTextBaseline=function(t){this.textBaseline_=t},t.prototype.setBackgroundFill=function(t){this.backgroundFill_=t},t.prototype.setBackgroundStroke=function(t){this.backgroundStroke_=t},t.prototype.setPadding=function(t){this.padding_=t},t}(),c=i(1161),u=i(1162),l=i(1860),h=i(1163),f=i(845),p={fill:o.a,text:s,stroke:c.a,circle:u.a,icon:l.a,regularShape:h.a,backgroundFill:o.a,backgroundStroke:c.a},d=[u.a,l.a,h.a];function m(t){return"object"===Object(r.a)(t)}function g(t,e,i){var n,r;if(null!=i)return t?["fill","backgroundFill"].includes(e)?(r=m(n=i)?n:{color:n},new o.a(r)):"text"===e?m(i)?y(i,t):i:y(i,t):i}function y(t,e){var i={};return Object.entries(t).forEach((function(t){var e=Object(n.a)(t,2),r=e[0],o=e[1],a=p[r];"font"===r&&(o="".concat(o," sans-serif")),i[d.includes(a)?"image":r]=g(a,r,o)})),new(e||f.c)(i)}e.a=y},425:function(t,e,i){"use strict";var n,r=i(428),o=i(433),a=i(406),s=i(440),c=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),u=function(t){function e(e){var i=t.call(this)||this;if(i.id_=void 0,i.geometryName_="geometry",i.style_=null,i.styleFunction_=void 0,i.geometryChangeKey_=null,i.addEventListener(Object(s.b)(i.geometryName_),i.handleGeometryChanged_),e)if("function"==typeof e.getSimplifiedGeometry){var n=e;i.setGeometry(n)}else{var r=e;i.setProperties(r)}return i}return c(e,t),e.prototype.clone=function(){var t=new e(this.getProperties());t.setGeometryName(this.getGeometryName());var i=this.getGeometry();i&&t.setGeometry(i.clone());var n=this.getStyle();return n&&t.setStyle(n),t},e.prototype.getGeometry=function(){return this.get(this.geometryName_)},e.prototype.getId=function(){return this.id_},e.prototype.getGeometryName=function(){return this.geometryName_},e.prototype.getStyle=function(){return this.style_},e.prototype.getStyleFunction=function(){return this.styleFunction_},e.prototype.handleGeometryChange_=function(){this.changed()},e.prototype.handleGeometryChanged_=function(){this.geometryChangeKey_&&(Object(o.c)(this.geometryChangeKey_),this.geometryChangeKey_=null);var t=this.getGeometry();t&&(this.geometryChangeKey_=Object(o.a)(t,a.a.CHANGE,this.handleGeometryChange_,this)),this.changed()},e.prototype.setGeometry=function(t){this.set(this.geometryName_,t)},e.prototype.setStyle=function(t){this.style_=t,this.styleFunction_=t?function(t){if("function"==typeof t)return t;var e;Array.isArray(t)?e=t:(Object(r.a)("function"==typeof t.getZIndex,41),e=[t]);return function(){return e}}(t):void 0,this.changed()},e.prototype.setId=function(t){this.id_=t,this.changed()},e.prototype.setGeometryName=function(t){this.removeEventListener(Object(s.b)(this.geometryName_),this.handleGeometryChanged_),this.geometryName_=t,this.addEventListener(Object(s.b)(this.geometryName_),this.handleGeometryChanged_),this.handleGeometryChanged_()},e}(s.a);e.a=u},437:function(t,e,i){var n=i(1),r=i(480),o=i(105);n({target:"Array",proto:!0},{fill:r}),o("fill")},480:function(t,e,i){"use strict";var n=i(15),r=i(112),o=i(16);t.exports=function(t){for(var e=n(this),i=o(e.length),a=arguments.length,s=r(a>1?arguments[1]:void 0,i),c=a>2?arguments[2]:void 0,u=void 0===c?i:r(c,i);u>s;)e[s++]=t;return e}},509:function(t,e,i){"use strict";i(301);e.a={props:{zIndex:Number,fill:{type:String,default:"rgba(255, 255,255, 0.5)"},stroke:{type:Object,default:function(){return{width:3,color:"#409eff"}}},text:[Object,String],styleFunction:Function},computed:{styleText:function(){return"string"==typeof this.text?{text:this.text,font:"12px"}:this.text||{}}}}},527:function(t,e,i){"use strict";i(437);var n=i(295),r=i(425),o=i(509),a=i(407);e.a={mixins:[o.a],inject:["myMap"],props:{props:{type:Object,default:function(){return{}}}},render:function(){return null},watch:{$props:{deep:!0,handler:function(){this.modify()}}},methods:{drawHandler:function(){},modifyHandler:function(t){},draw:function(){var t=this.drawHandler();t&&(this.feature=new r.a({geometry:t}),this.feature.__vm__=this,this.props&&this.feature.setProperties(Object(n.a)({},this.props)),this.myMap.addFeature(this.feature),this.setStyle(),this.$emit("featureDraw"))},setStyle:function(){if(this.feature){var t=this.styleFunction?this.styleFunction(this):Object(a.a)({fill:this.fill,stroke:this.stroke,zIndex:this.zIndex,text:this.styleText});this.feature.setStyle(t)}},modify:function(){if(this.feature){var t=this.feature.getGeometry();this.modifyHandler(t),this.setStyle(),this.props&&this.feature.setProperties(Object(n.a)({},this.props))}}},created:function(){this.myMap.mapReady(this.draw)},beforeDestroy:function(){this.feature&&(this.feature.__vm__=null,this.feature.disposeInternal(),this.myMap.removeFeature(this.feature))}}}}]);