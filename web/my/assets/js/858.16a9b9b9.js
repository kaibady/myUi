(window.webpackJsonp=window.webpackJsonp||[]).push([[858],{1362:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"i",(function(){return c})),n.d(t,"d",(function(){return r})),n.d(t,"j",(function(){return d})),n.d(t,"a",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"l",(function(){return p})),n.d(t,"e",(function(){return m})),n.d(t,"k",(function(){return f})),n.d(t,"b",(function(){return h})),n.d(t,"h",(function(){return g}));var a=n(767),i="http://127.0.0.1:8080",o=i+"/api/user";function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(a.a)({method:"get",data:e,cache:t,url:o})}var r=i+"/api/user/:id";function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(a.a)({method:"get",params:{id:e},data:t,cache:n,url:r})}var l=i+"/api/user";function u(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(a.a)({method:"post",data:e,cache:t,url:l})}var s=i+"/api/user";function p(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(a.a)({method:"patch",data:e,cache:t,url:s})}var m=i+"/api/user/:id";function f(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(a.a)({method:"delete",params:{id:e},data:t,cache:n,url:m})}var h=i+"/api/user/remove";function g(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(a.a)({method:"post",data:e,cache:t,url:h})}},3485:function(e,t,n){"use strict";n.r(t);n(54),n(55),n(198);var a=n(35),i=n(1362),o=[{title:"FETCH_USER",url:i.c,method:"get",params:{page:1,limit:10},template:{code:0,msg:"获取列表成功",data:{page:"{{page}}",limit:"{{limit}}",total:1e3,"list|{{limit}}":[{id:"@id",name:"@cname","age|10-100":18,address:"@ctitle",date:"@date(yyyy-MM-dd)"}]}}},{title:"GET_USER",url:i.d,method:"get",params:{},template:{code:0,msg:"获取成功",data:{id:"@id",name:"@cname","age|10-100":18,address:"@ctitle",date:"@date(yyyy-MM-dd)"}}},{title:"ADD_USER",url:i.a,method:"post",params:{},template:{code:0,msg:"添加成功",data:{id:"@guid"}}},{title:"UPDATE_USER",url:i.f,method:"patch",params:{},template:{code:0,msg:"更新成功",data:!0}},{title:"REMOVE_USER",url:i.e,method:"delete",params:{},template:{code:0,msg:"删除成功",data:!0}},{title:"BATCH_USER",url:i.b,method:"post",params:{},template:{code:0,msg:"批量删除成功",data:!0}}],c=(n(52),n(767),"http://127.0.0.1:8080");var r=c+"/api/mock-for-example/columns";var d=c+"/api/mock-for-example/login";var l=c+"/api/mock-for-example/logout";var u=c+"/api/mock-for-example/menus";var s=c+"/api/mock-for-example/tree";var p=c+"/api/mock-for-example/options";var m=c+"/api/mock-for-example/upload";n(124);var f=n(31);var h=[{title:"FETCH_MOCK_FOR_EXAMPLE",url:"http://127.0.0.1:8080/api/mock-for-example",method:"get",params:{page:1,limit:10},template:{code:0,msg:"获取列表成功",data:{page:"{{page}}",limit:"{{limit}}",total:1e3,"list|{{limit}}":[{id:"@id",guid:"@guid",sex:"@integer(0,1)",name:"@cname",email:"@email",phone:"@integer(10000000, 99999999)","age|10-100":1,date:"@date(yyyy-MM-dd)",title:"@cparagraph(1)",info:"@cparagraph(3,7)",avatar:"@dataImage",province:"@province",city:"@city",county:"@county(true)",zip:"@zip",state:"@integer(0,5)","label|1":["黄","毒","赌","逃","前科"],"tags|2-7":["@cword(2,4)"],views:"@integer(10,9000)",shares:"@integer(10,9000)",comments:"@integer(10,9000)",created:"@datetime",ip:"@ip"}]}}},{title:"GET_MOCK_FOR_EXAMPLE",url:"http://127.0.0.1:8080/api/mock-for-example/:id",method:"get",params:{},template:{code:0,msg:"获取成功",data:{id:"@id",guid:"@guid",sex:"@integer(0,1)",name:"@cname",email:"@email",phone:"@integer(10000000, 99999999)","age|10-100":1,date:"@date(yyyy-MM-dd)",title:"@cparagraph(1)",info:"@cparagraph(3,7)",avatar:"@dataImage",province:"@province",city:"@city",county:"@county(true)",zip:"@zip",state:"@integer(0,5)","label|1":["黄","毒","赌","逃","前科"],"tags|2-7":["@cword(2,4)"],views:"@integer(10,9000)",shares:"@integer(10,9000)",comments:"@integer(10,9000)",created:"@datetime",ip:"@ip"}}},{title:"ADD_MOCK_FOR_EXAMPLE",url:"http://127.0.0.1:8080/api/mock-for-example",method:"post",params:{},template:{code:0,msg:"添加成功",data:{id:"@guid"}}},{title:"UPDATE_MOCK_FOR_EXAMPLE",url:"http://127.0.0.1:8080/api/mock-for-example",method:"patch",params:{},template:{code:0,msg:"更新成功",data:!0}},{title:"REMOVE_MOCK_FOR_EXAMPLE",url:"http://127.0.0.1:8080/api/mock-for-example/:id",method:"delete",params:{},template:{code:0,msg:"删除成功",data:!0}},{title:"BATCH_MOCK_FOR_EXAMPLE",url:"http://127.0.0.1:8080/api/mock-for-example/remove",method:"post",params:{},template:{code:0,msg:"批量删除成功",data:!0}},{title:"GET_COLUMNS",url:r,method:"post",params:{},template:function(e,t,n,a){return{code:0,data:[{label:"姓名",prop:"name"},{label:"身份证",prop:"id"},{label:"性别",prop:"sex",filters:[{text:"男",value:1},{text:"女",value:0}]},{label:"出生日期",prop:"date",sortable:!0},{label:"地区",prop:"county"},{label:"介绍",prop:"info"},{label:"创建时间",prop:"created"}]}}},{title:"LOGIN",url:d,method:"post",params:{},template:function(e,t,n,a){var i=n.account,o=n.password,c=["admin","user","guest"].includes(i)&&"123456"===o;return{code:c?0:-1,data:c?e.mock({id:"@guid",name:i.toUpperCase(),token:"@guid",roles:[i]}):null,msg:c?"":"账号或密码不正确"}}},{title:"LOGOUT",url:l,method:"post",params:{},template:function(e,t,n,a){return{code:0,data:!0}}},{title:"GET_MENUS",url:u,method:"post",params:{},template:function(e,t,n,a){return{code:0,data:[{icon:"el-icon-s-home",text:"Dashboard",index:"/",children:[{icon:"el-icon-document",text:"分析页",index:"/dashboard/analysis"},{icon:"el-icon-document",text:"监控页",index:"/dashboard/monitor"},{icon:"el-icon-document",text:"工作台",index:"/dashboard/workplace"}]},{icon:"el-icon-edit-outline",text:"表单页面",index:"/form",children:[{icon:"el-icon-document",text:"基础表单",index:"/form/basic"},{icon:"el-icon-document",text:"分步表单",index:"/form/step"},{icon:"el-icon-document",text:"高级表单",index:"/form/advanced"}]},{icon:"el-icon-s-grid",text:"列表页面",index:"/list",children:[{icon:"el-icon-document",text:"搜索列表",index:"/list/search",children:[{icon:"el-icon-document",text:"搜索列表(文章)",index:"/list/search/article"},{icon:"el-icon-document",text:"搜索列表(项目)",index:"/list/search/project"},{icon:"el-icon-document",text:"搜索列表(应用)",index:"/list/search/application"}]},{icon:"el-icon-document",text:"标准列表",index:"/list/basic"},{icon:"el-icon-document",text:"卡片列表",index:"/list/card"},{icon:"el-icon-document",text:"查询列表",index:"/list/query"},{icon:"el-icon-document",text:"增删查改",index:"/list/crud"},{icon:"el-icon-document",text:"树结构列表",index:"/list/tree"}]},{text:"详情页面",index:"/profile",icon:"el-icon-monitor",children:[{icon:"el-icon-document",text:"基础详情页",index:"/profile/basic"},{icon:"el-icon-document",text:"高级详情页",index:"/profile/advanced"}]},{text:"结果页面",index:"/result",icon:"el-icon-circle-check",children:[{icon:"el-icon-document",text:"成功页",index:"/result/success"},{icon:"el-icon-document",text:"失败页",index:"/result/fail"}]},{text:"异常页面",index:"/exception",icon:"el-icon-warning-outline",children:[{icon:"el-icon-document",text:"403",index:"/exception/403"},{icon:"el-icon-document",text:"404",index:"/exception/404"},{icon:"el-icon-document",text:"500",index:"/exception/500"}]},{text:"个人页面",index:"/account",icon:"el-icon-s-custom",children:[{icon:"el-icon-document",text:"个人中心",index:"/account/center"},{icon:"el-icon-document",text:"个人设置",index:"/account/settings"}]},{icon:"el-icon-s-marketing",text:"组件主题",index:"/suit"},{icon:"el-icon-s-marketing",text:"组件主题3",index:"/app2"}]}}},{title:"GET_TREE",url:s,method:"post",params:{},template:function(e,t,n,a){var i=n.parentId,o=n.count||10;return{code:0,data:e.mock(Object(f.a)({},"list|".concat(o),[{id:"@guid",parentId:function(){return i||null},label:"@ctitle",value:"@guid",created:"@date(yyyy-MM-dd hh:mm:ss)",isLeaf:!1}])).list}}},{title:"GET_OPTIONS",url:p,method:"post",params:{},template:function(e,t,n,a){var i=0;return{code:0,data:e.mock(Object(f.a)({},"list|".concat(50),[{id:function(){return++i},parentId:function(){return this.id>6?Math.floor(Math.random()*this.id):null},label:"@ctitle",value:function(){return this.id}}])).list}}},{title:"MOCK_UPLOAD",url:m,method:"post",params:{},template:function(e,t,n,a){return{code:0,data:e.mock({image:"@dataImage"}).image}}}],g=[].concat(Object(a.a)(o),Object(a.a)(h)),x=(n(485),n(33),n(88),n(58),n(57)),v=n(855),b=n.n(v),O=n(482),y=n.n(O),j=n(422),k=n(530),E=n(56);function w(e){if("object"===Object(x.a)(e))return e;return/^\{[\W\w]*\}$/.test(e)?JSON.parse(e):null}function _(e){if(!e)return null;return/^\{[\W\w]*\}$/.test(e)?JSON.parse(e):Object(j.c)(e)}b.a.setup(E.a.mock||{});t.default=function(){g.forEach((function(e){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.url){var t=y()(e.url),n=new RegExp(t.source.replace("(?:\\/)?$","($|\\?)").replace(/\[\^\d\\\/\]/,"[^\\/]"),"i");b.a.mock(n,e.method,(function(t){var n,a=_(t.body)||{},i=Object.assign({},e.params||{},Object(j.b)(e.url,t.url),Object(j.c)(t.url||" "),a,w(a.data)||{});if("function"==typeof e.template)n=e.template(b.a,t.url,i,t);else{var o=JSON.stringify(e.template);for(var c in i)o=o.replace(new RegExp("{{"+c+"}}","g"),i[c]);n=b.a.mock(JSON.parse(o))}return Object(k.b)("Mock",e.title),Object(k.a)(t,n),Object(k.a)("-------------------------------------------"),n}))}}(e)}))}},422:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l}));n(54),n(87),n(32),n(485),n(33),n(88),n(426),n(58),n(496),n(394);var a=n(482),i=n.n(a),o=/^(http|https):\/\/[\w.:]*\//;function c(e,t,n){var a,i={};e=(e||location.search).replace(/^[^]*\?/,""),t=t||"&",n=n||"=";for(var o=new RegExp("(?:^|\\"+t+")([^\\"+n+"\\"+t+"]+)(?:\\"+n+"([^\\"+t+"]*))?","g");null!==(a=o.exec(e));)a[1]!==e&&(i[decodeURIComponent(a[1])]=decodeURIComponent(a[2]||""));return i}function r(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push([n,encodeURIComponent(e[n])].join("="));return t.join("&")}function d(e){var t=e.match(o);return t?t[0]:""}function l(e,t){var n=[],a=d(e),o=i()(e.replace(a,""),n).exec(t.split("?")[0].replace(a,"")),c={};return o&&o.length>0&&n.forEach((function(e,t){c[e.name]=o[t+1]})),c}},529:function(e,t,n){"use strict";var a=n(0);t.a=new a.default({})},530:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r}));n(198);var a=n(56),i={default:"#35495E",primary:"#3488ff",success:"#43B883",warn:"#e6a23c",error:"#f56c6c"};function o(e,t){if(a.a.debug&&window&&window.console){var n=window.console[e];try{n.apply(window.console,t)}catch(e){}}}function c(){o("log",arguments)}function r(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"primary";c("%c ".concat(e," %c ").concat(t," %c"),"background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;","background:".concat(i[n],"; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;"),"background:transparent")}},712:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return r}));var a=n(57),i=window.sessionStorage||{},o=window.localStorage||{};function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,o="object"===Object(a.a)(t)?JSON.stringify(t):t;n.setItem(e,o)}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,n=t.getItem(e);if(n){if("object"===Object(a.a)(n))return n;var o=/^({[\W\w]*})|(\[[\W\w]*])$/;return o.test(n)?JSON.parse(n):n}return null}},767:function(e,t,n){"use strict";n(54),n(124),n(87),n(32),n(7),n(33),n(88),n(58),n(55),n(37);var a=n(31),i=n(52),o=n(482),c=n.n(o),r=n(214),d=n.n(r),l=n(768),u=n.n(l),s=n(56),p=u.a.CancelToken.source();var m=u.a.create(Object(i.a)(Object(i.a)({},s.a.axios),{},{cancelToken:p.token})),f=n(422),h=n(712),g=n(529),x=n(125),v={},b={},O={url:null,method:"get",params:null,query:null,data:null,cache:null,socket:!1};function y(e,t,n,a){var i=[e,t,d()(n)?JSON.stringify(n):null==n?void 0:n.toString(),d()(a)?JSON.stringify(n):null==a?void 0:a.toString()];return encodeURIComponent(i.join(","))}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(i.a)(Object(i.a)({},O),e),n=v[t.url],a=Object(f.a)(t.url||"");n||(n=v[t.url]=c.a.compile(t.url.replace(a,"")));var o=a+n(t.params),r=(t.type||t.method||"get").toLowerCase(),d=["get","head","delete"].includes(r)?Object.assign({},t.data,t.query):t.query,l=t.cache?Object(i.a)({key:y(o,r,d,t.data)},t.cache):null,u=t.socket?{channel:Object(x.d)(),name:t.socket.name||"__async__"}:null;return w(t,["method","type","query","params","cache","socket"]),{config:Object(i.a)(Object(i.a)({},t),{},{url:o,method:r,params:d}),cache:l,socket:u}}function k(e,t,n,a,i){if(e.data){var o=s.a.keys,c=s.a.statusCode,r=o.code,d=o.data;if("json"!==(e.config||{}).responseType)return void a(e.data);String(e.data[r])===String(c.success)?(t&&t.key&&function(e,t,n){n?Object(h.d)(e,t,n):b[e]=t}(t.key,e.data[d],n),a(e.data[d])):i(e.data)}else i(e)}function E(e){var t,n=e.config,o=e.cache,c=e.socket,r=null;return o&&o.key&&(r=o.local?h.a:o.session?h.b:null,t=function(e,t){return t?Object(h.c)(e,t):b[e]}(o.key,r)),new Promise((function(e,d){t?e(t):(c&&(n.params=Object(i.a)(Object(i.a)({},n.params),{},Object(a.a)({},c.name,c.channel)),g.a.$once(c.channel,(function(t){k(t,o,r,e,d)}))),m(n).then((function(t){c||k(t,o,r,e,d)})).catch((function(e){return d(e)})))}))}function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];t.forEach((function(t){delete e[t]}))}t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(i.a)(Object(i.a)({},O),e);if(!t.url)throw new Error("ajax url is required!");var n=j(t);return E(n)}}}]);