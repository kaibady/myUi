(window.webpackJsonp=window.webpackJsonp||[]).push([[866,18],{1194:function(a,t,e){},1506:function(a,t,e){"use strict";var i=e(1194);e.n(i).a},1507:function(a,t,e){},1857:function(a,t,e){"use strict";var i=e(296),n=(e(19),e(65),e(664)),o=e.n(n),r=e(663),s=e.n(r),d=e(665),m=e.n(d),l=e(0),c=e(802),u=e.n(c),f=e(722),h=[{name:"隐藏",icon:"iconfont icon-magic",subMenu:[{name:"隐藏节点"},{name:"隐藏子节点"},{name:"隐藏关系label"},{name:"隐藏关系连线"}]},{name:"显示",icon:"iconfont icon-enlarge",subMenu:[{name:"显示子节点"},{name:"显示关系label"},{name:"显示关系连线"}]},{name:"查看全部",icon:"iconfont icon-bullseye"},{name:"缩小",icon:"iconfont icon-zoomout"},{name:"放大",icon:"iconfont icon-enlarge"}],p={name:"MyGoView",components:{},props:{diagramName:{type:String,default:"dig"},customClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},menus:{type:Array,default:function(){return[]}},handlers:{type:Object,default:function(){return{}}}},data:function(){var a=this;return{menuOption:0!==a.menus.length?a.menus.filter((function(a){return!1!==a.visible})):JSON.parse(JSON.stringify(h)),disabledAll:!1}},computed:{},methods:{toggleDisabledAll:function(){var a=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.disabledAll=a},menuClick:function(a){var t=a.name;if(this.$emit("item-click",a),this.handlers[t])this.handlers[t](f.a[this.diagramName],u.a.GraphObject.make,u.a,a);else{var e=new u.a.Set,i=f.a[this.diagramName],n=i.model;switch(t){case"隐藏节点":i.selection.each((function(a){a instanceof u.a.Node&&e.add(a)})),e.each((function(a){a.visible=!1}));break;case"隐藏关系label":n.setDataProperty(f.a[this.diagramName].model.modelData,"showLinkLabels",!1);break;case"隐藏关系连线":n.setDataProperty(f.a[this.diagramName].model.modelData,"showLinks",!1);break;case"隐藏子节点":i.selection.each((function(a){a instanceof u.a.Node&&e.add(a)})),e.each((function(a){a.collapseTree(1)}));break;case"显示子节点":i.selection.each((function(a){a instanceof u.a.Node&&e.add(a)})),e.each((function(a){a.expandTree(1),a.findTreeChildrenNodes().each((function(a){a.visible=!0}))}));break;case"显示关系label":n.setDataProperty(n.modelData,"showLinkLabels",!0);break;case"显示关系连线":n.setDataProperty(n.modelData,"showLinks",!0);break;case"查看全部":i.zoomToFit();break;case"缩小":i.scale=i.scale-.2;break;case"放大":i.scale=i.scale+.2}}}},created:function(){}};l.default.use(m.a),l.default.use(s.a),l.default.use(o.a);var g=p,y=(e(1506),e(39)),v=Object(y.a)(g,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{class:"my-go__view "+a.customClass,style:a.customStyle},[a._t("default",[e("div",{staticClass:"my-go__menu"},a._l(a.menuOption,(function(t,i){return e("div",{key:i,class:{"my-go__box":!0,disabled:t.disabled||a.disabledAll}},[t.subMenu?a._e():e("div",{on:{click:function(e){return a.menuClick(t)}}},[e("div",{staticClass:"icon-con"},[e("i",{class:t.icon})]),a._v(" "),e("div",{staticClass:"box"},[a._v(a._s(t.name))])]),a._v(" "),t.subMenu?e("div",[e("div",{staticClass:"icon-con"},[e("i",{class:t.icon})]),a._v(" "),e("el-dropdown",{staticClass:"submenu",attrs:{trigger:"click"},on:{command:function(t){return a.menuClick(t)}}},[e("span",{class:{"el-dropdwon-link":!0,disabled:t.disabled||a.disabledAll}},[a._v("\n              "+a._s(t.name)+"\n              "),e("i",{staticClass:"iconfont icon-bold-arrow-down",staticStyle:{"margin-left":"5px"}})]),a._v(" "),e("el-dropdown-menu",{staticClass:"my-go__dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},a._l(t.subMenu,(function(t,i){return e("el-dropdown-item",{key:i,attrs:{command:t,disabled:t.disabled}},[a._v(a._s(t.name))])})),1)],1)],1):a._e()])})),0)],{menus:a.menuOption,menuClick:a.menuClick})],2)}),[],!1,null,"b4af4a9a",null).exports;t.a=Object(i.a)(v)},2370:function(a,t,e){"use strict";var i=e(1507);e.n(i).a},2740:function(a,t,e){"use strict";e.r(t);var i=e(1857),n=e(796),o=e(0);o.default.use(n.a),o.default.use(i.a);var r={props:{},data:function(){return{model:"GraphLinksModel",diagram:null,lock:!1,nodes:[{key:"A",category:"a"},{key:"B",category:"b"},{key:"C",category:"c"},{key:"D",category:"a"},{key:"E",category:"b"},{key:"F",category:"c"}],links:[{from:"A",to:"B"},{from:"A",to:"C"},{from:"C",to:"D"},{from:"B",to:"E"},{from:"E",to:"F"}],timeout:null}},computed:{},methods:{diagramReady:function(a,t,e){},config:function(a,t){return{initialContentAlignment:t.Spot.Center}},nodeTemplate:function(a,t,e){return a(t.Node,"Auto",a(t.Shape,"Rectangle",{portId:"",stroke:e,fill:e}),a(t.TextBlock,"Default Text",{margin:12,stroke:"#ffffff"},new t.Binding("text","key")),new t.Binding("location").makeTwoWay(t.Point.stringify))},linkTemplate:function(a,t){return a(t.Link,{curve:t.Link.Bezier},a(t.Shape,{strokeWidth:3,stroke:"#555"}),a(t.Shape,{toArrow:"Standard"}))},nodeTemplateMap:function(a,t,e){var i=this.nodeTemplate(a,t,"red",e),n=this.nodeTemplate(a,t,"blue",e),o=this.nodeTemplate(a,t,"green",e),r=new t.Map;return r.add("a",i),r.add("b",n),r.add("c",o),r},layout:function(a,t){return a(t.LayeredDigraphLayout,{})}},created:function(){}},s=(e(2370),e(39)),d=Object(s.a)(r,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticStyle:{position:"relative"}},[e("my-go-view",{ref:"view",attrs:{"diagram-name":"dig1","custom-class":"my-view"}}),a._v(" "),e("my-go",{ref:"diagram",attrs:{"diagram-name":"dig1",nodes:a.nodes,links:a.links,type:a.model,"node-template-map":a.nodeTemplateMap,"link-template":a.linkTemplate,config:a.config,layout:a.layout,height:"400px"},on:{"on-ready":a.diagramReady}})],1)}),[],!1,null,"01a323ce",null);t.default=d.exports},296:function(a,t,e){"use strict";e.d(t,"a",(function(){return i}));e(65),"My".toLowerCase();function i(a){return a.install=function(t){return"undefined"!=typeof window&&e(307).default(a),t.component(a.name,a)},a}},298:function(a,t,e){"use strict";e(310);var i={version:"4.0.1",debug:!1,appName:null,routePrefix:null,router:{mode:"hash",base:"/"},autoRoutes:!0,vuex:{strict:!1},keys:{code:"code",data:"data",message:"msg",total:"total",list:"list",page:"page",limit:"limit",pages:"pages"},statusCode:{success:0,notLogin:401,authorize:403,error:500},axios:{headers:{"Content-Type":"application/json;charset=UTF-8"},timeout:0,withCredentials:!0,responseType:"json",maxContentLength:-1},svg:{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor"},access:{},mock:{timeout:"50-200"},scale:{width:1920,height:1080,disabled:!0,lock:!0},analysis:!1,microApp:{prefetch:!1,singular:!0,sandbox:!0}};t.a=i},307:function(a,t,e){"use strict";e.r(t);e(160),e(65);var i=e(298),n=!1,o=[],r=null;i.a.analysis&&function(){if(!n){var a="c4e5f73318b5cb0c389e3d9a05f831cc",t=window._hmt;if(!t||t&&t.id!==a){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?".concat(a);var i=document.getElementsByTagName("script")[0];i&&i.parentNode.insertBefore(e,i)}n=!0}}(),t.default=function(a){var t;i.a.analysis&&(t=a.name,o.push(t),clearTimeout(r),r=setTimeout((function(){if(window._hmt&&t){var a=window.location.host,e=window.location.href;window._hmt.push(["_trackEvent",a,o.join(","),i.a.version,e]),o=[]}}),3e3))}},315:function(a,t,e){"use strict";function i(a,t,e){this.$children.forEach((function(n){n.$options.componentName===a?n.$emit.apply(n,[t].concat(e)):i.apply(n,[a,t].concat([e]))}))}t.__esModule=!0,t.default={methods:{dispatch:function(a,t,e){for(var i=this.$parent||this.$root,n=i.$options.componentName;i&&(!n||n!==a);)(i=i.$parent)&&(n=i.$options.componentName);i&&i.$emit.apply(i,[t].concat(e))},broadcast:function(a,t,e){i.call(this,a,t,e)}}}},441:function(a,t,e){"use strict";t.__esModule=!0;e(306);t.default={mounted:function(){},methods:{getMigratingConfig:function(){return{props:{},events:{}}}}}},722:function(a,t,e){"use strict";var i={register:function(a,t){if(i[a])throw new Error("diagram "+a+" is exisit");i[a]=t}};t.a=i},796:function(a,t,e){"use strict";var i=e(296),n=(e(19),e(359),e(91),e(161),e(67),e(65),e(92),e(41)),o=e(802),r=e.n(o),s=e(722),d=r.a.GraphObject.make,m=["nodeTemplate","linkTemplate","nodeTemplateMap","linkTemplateMap","groupTemplate","groupTemplateMap"],l={name:"MyGo",provide:function(){return{diagramName:this.diagramName}},props:{diagramName:{type:String,default:function(){return"diagram"+(new Date).getTime()+Math.floor(1e3*Math.random())}},goRegister:{type:Function},width:{type:String,default:"100%"},height:{type:String,default:"100%"},nodeTemplate:{type:Function},linkTemplate:{type:Function},nodeTemplateMap:{type:Function},linkTemplateMap:{type:Function},groupTemplate:{type:Function},groupTemplateMap:{type:Function},type:{type:String,default:"Model",validator:function(a){return["Model","GraphLinksModel","TreeModel"].includes(a)}},nodes:{type:Array},links:{type:Array},config:{type:[Object,Function]},layout:{type:Function},events:{type:Object,default:function(){return Object.create(null)}},modelConfig:{type:[Object,Function]},palette:{type:Boolean,default:!1},loadDataFunc:{type:[Function,Object],default:null}},data:function(){return{htmlInfo:{},timeout:null}},computed:{styles:function(){return{width:this.width,height:this.height}}},watch:{nodes:function(a){var t=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.loadData(a,t.links)}),50)},links:function(a){var t=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.loadData(t.nodes,a)}),50)}},methods:{loadData:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(s.a[this.diagramName]){var e=s.a[this.diagramName].model;e.nodeDataArray=a,"GraphLinksModel"===this.type&&(e.linkDataArray=t),s.a[this.diagramName].updateAllRelationshipsFromData(),this.$emit("on-load-data",s.a[this.diagramName],d,r.a)}},loadTemplate:function(){var a=this;m.forEach((function(t){a.setTemplate(t,a[t])}))},setTemplate:function(a,t){if(!m.includes(a))throw new Error("setTemplate不支持模板类型".concat(a));"function"==typeof t&&(s.a[this.diagramName][a]=t(d,r.a,this))},loadLayout:function(a){a&&(s.a[this.diagramName].layout=a(d,r.a,this))},bindEvents:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(s.a[this.diagramName])for(var t in a)if(Object.prototype.hasOwnProperty.call(a,t)){var e=this.listeners[t]=a[t].bind(this);s.a[this.diagramName].addDiagramListener(t,e)}},unbindEvents:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(s.a[this.diagramName])for(var t in a)if(Object.prototype.hasOwnProperty.call(a,t)){var e=this.listeners[t]||a[t];s.a[this.diagramName].removeDiagramListener(t,e),delete this.listeners[t]}},findNode:function(a,t){if(!s.a[this.diagramName])return null;var e=s.a[this.diagramName].model,i=e.nodeDataArray||[],n="function"==typeof a?i.find(a):e.findNodeDataForKey(a);return t?s.a[this.diagramName].findNodeForData(n):n},findNodes:function(a,t){var e=this;if(!s.a[this.diagramName])return[];if(!("function"==typeof a))throw new Error("findNodes的filter参数必须要是函数");var i=(s.a[this.diagramName].model.nodeDataArray||[]).filter(a);return t?i.map((function(a){return s.a[e.diagramName].findNodeForData(a)})):i},findLink:function(a,t){if(!s.a[this.diagramName])return null;var e=s.a[this.diagramName].model,i=e.linkDataArray||[],n="function"==typeof a?i.find(a):e.findLinkDataForKey(a);return t?s.a[this.diagramName].findLinkForData(n):n},findLinks:function(a,t){var e=this;if(!s.a[this.diagramName])return[];if(!("function"==typeof a))throw new Error("findLinks的filter参数必须要是函数");var i=(s.a[this.diagramName].model.linkDataArray||[]).filter(a);return t?i.map((function(a){return s.a[e.diagramName].findLinkForData(a)})):i},findChildLinks:function(a){if(!a||!s.a[this.diagramName])return[];var t=s.a[this.diagramName].model.linkDataArray||[],e=[];return function a(i){t.filter((function(a){return a.from===i})).forEach((function(t){e.push(t),a(t.to)}))}(a),e},findChildNodes:function(a){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"parent",i=[];if("GraphLinksModel"===this.type){var n=this.findChildLinks(a);n.forEach((function(a){i.push(t.findNode(a.to))}))}else if("TreeModel"===this.type){var o=s.a[this.diagramName].model,r=o.nodeDataArray||[],d=function a(t){r.filter((function(a){return a[e]===t})).forEach((function(t){i.push(t),a(t.key)}))};d(a)}return i},update:function(a,t,e){if(s.a[this.diagramName]){var i=Object(n.a)(t);if(!["string","object"].includes(i))throw new Error("update的参数 props 必须事string 或 object类型");var o=s.a[this.diagramName].model;if(s.a[this.diagramName].startTransaction("update"),"string"===i)o.set(a,t,e);else for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.set(a,r,t[r]);s.a[this.diagramName].commitTransaction("update")}},addNode:function(a){if(s.a[this.diagramName]){var t=s.a[this.diagramName].model;s.a[this.diagramName].startTransaction("addNode"),Array.isArray(a)?t.addNodeDataCollection(a):t.addNodeData(a),s.a[this.diagramName].commitTransaction("addNode")}},addLink:function(a){if(s.a[this.diagramName]){var t=s.a[this.diagramName].model;s.a[this.diagramName].startTransaction("addLink"),Array.isArray(a)?t.addLinkDataCollection(a):t.addLinkData(a),s.a[this.diagramName].commitTransaction("addLink")}},removeNode:function(a){if(s.a[this.diagramName]&&("string"==typeof a&&(a=this.findNode(a)),a)){var t=s.a[this.diagramName].model;s.a[this.diagramName].startTransaction("removeNode"),Array.isArray(a)?t.removeNodeDataCollection(a):t.removeNodeData(a),s.a[this.diagramName].commitTransaction("removeNode")}},removeLink:function(a){if(s.a[this.diagramName]&&"GraphLinksModel"===this.type&&("string"==typeof a&&(a=this.findLink(a)),a)){var t=s.a[this.diagramName].model;s.a[this.diagramName].startTransaction("removeLink"),Array.isArray(a)?t.removeLinkDataCollection(a):t.removeLinkData(a),s.a[this.diagramName].commitTransaction("removeLink")}},removeChild:function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"parent",e=this.findChildNodes(a,t),i=this.findChildLinks(a,t);s.a[this.diagramName].startTransaction("removeChild"),this.removeNode(e),this.removeLink(i),s.a[this.diagramName].commitTransaction("removeChild")},clear:function(){if(s.a[this.diagramName]){var a=s.a[this.diagramName].model;s.a[this.diagramName].startTransaction("clear"),a.clear(),s.a[this.diagramName].commitTransaction("clear")}},toJson:function(){return s.a[this.diagramName]?s.a[this.diagramName].model.toJson():JSON.stringify({})},fromJson:function(a){s.a[this.diagramName]&&(s.a[this.diagramName].model=r.a.Model.fromJson("string"==typeof a?a:JSON.stringify(a)))},resize:function(){s.a[this.diagramName]&&s.a[this.diagramName].requestUpdate()},getHtmlInfo:function(){var a=this;this.$children.forEach((function(t){"XdhGoHtml"===t.name&&(a.htmlInfo[t.menuName]=t.bindMenu(),t.appendToBody&&a.$el.parentNode.appendChild(t.$el))}))}},mounted:function(){s.a.register(this.diagramName,d(this.palette?r.a.Palette:r.a.Diagram,this.$el,"function"==typeof this.config?this.config(d,r.a):this.config||{})),this.getHtmlInfo(),this.loadTemplate(),s.a[this.diagramName].model=d(r.a[this.type],"function"==typeof this.modelConfig?this.modelConfig(d,r.a):this.modelConfig||{}),this.loadLayout(this.layout),this.loadDataFunc&&"function"==typeof this.loadDataFunc?this.loadDataFunc(s.a[this.diagramName],d,r.a,this.nodes,this.links):this.loadData(this.nodes,this.links),this.bindEvents(this.events),this.$emit("on-ready",s.a[this.diagramName],d,r.a)},beforeDestroy:function(){this.unbindEvents(this.events),s.a[this.diagramName].div=null,delete s.a[this.diagramName]},created:function(){this.goRegister&&"function"==typeof this.goRegister&&this.goRegister(d,r.a),this.listeners={}}},c=e(39),u=Object(c.a)(l,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"my-go",style:this.styles},[this._t("default")],2)}),[],!1,null,null,null).exports;t.a=Object(i.a)(u)}}]);