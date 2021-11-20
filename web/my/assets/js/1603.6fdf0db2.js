(window.webpackJsonp=window.webpackJsonp||[]).push([[1603],{4178:function(s,a,t){"use strict";t.r(a);var n=t(19),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"脚本命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚本命令"}},[s._v("#")]),s._v(" 脚本命令")]),s._v(" "),t("p",[s._v("工程包含了一些开发辅助命令")]),s._v(" "),t("h2",{attrs:{id:"安装依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[s._v("#")]),s._v(" 安装依赖")]),s._v(" "),t("p",[s._v("在互联网环境用 "),t("code",[s._v("npm install")]),s._v(" 安装，如果安装不成功可以尝试用淘宝镜像")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npm.taobao.org\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在非互联网环境安装命令")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("需要在内网环境"),t("RouterLink",{attrs:{to:"/guide/config.html#install"}},[s._v("部署node_modules")])],1)]),s._v(" "),t("h2",{attrs:{id:"初始化项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目"}},[s._v("#")]),s._v(" 初始化项目")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run ready "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在需要初始化项目临时文件时使用， 该命令会依次运行 修复node_modules、生成ElementUI组件、生成UI主题、生成代码。")]),s._v(" "),t("p",[s._v("参数 -f  表示先清除临时目录再创建")]),s._v(" "),t("h2",{attrs:{id:"预编译主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预编译主题"}},[s._v("#")]),s._v(" 预编译主题")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run theme "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("仅编译 ElementUI 主题 "),t("code",[s._v("npm run theme el")])]),s._v(" "),t("p",[s._v("仅编译 UI 主题 "),t("code",[s._v("npm run theme ui")])]),s._v(" "),t("p",[s._v("同时编译两者 "),t("code",[s._v("npm run theme")])]),s._v(" "),t("h2",{attrs:{id:"生成代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成代码"}},[s._v("#")]),s._v(" 生成代码")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run coder "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当修改了schemas，需要用该命令重新生成代码")]),s._v(" "),t("p",[s._v("参数 -f  表示先清除目录再生成代码")]),s._v(" "),t("h2",{attrs:{id:"生成路由配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成路由配置"}},[s._v("#")]),s._v(" 生成路由配置")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run route "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("action"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("根据视图组件文件构建路由配置信息")]),s._v(" "),t("p",[s._v("action 可选值： "),t("code",[s._v("build")]),s._v(" 或 "),t("code",[s._v("watch")])]),s._v(" "),t("p",[s._v("app 子应用名称，空标识是主应用")]),s._v(" "),t("h3",{attrs:{id:"主应用路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主应用路由"}},[s._v("#")]),s._v(" 主应用路由")]),s._v(" "),t("p",[s._v("生成主应用路由配置")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run route build\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("监听主应用文件变化自动创建配置")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run route "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("watch")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"子应用路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子应用路由"}},[s._v("#")]),s._v(" 子应用路由")]),s._v(" "),t("p",[s._v("生成子应用路由配置")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run route build "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("子应用名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("监听子应用文件变化自动创建配置")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run route "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("watch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("子应用名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"启动开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动开发环境"}},[s._v("#")]),s._v(" 启动开发环境")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"编译主应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译主应用"}},[s._v("#")]),s._v(" 编译主应用")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"启动预览服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动预览服务"}},[s._v("#")]),s._v(" 启动预览服务")]),s._v(" "),t("p",[s._v("在需要检验编译后的应用是否运行正常，可以用该命令启动web服务测试")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run preview\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"代码校验"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码校验"}},[s._v("#")]),s._v(" 代码校验")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run lint\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"运行单元测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行单元测试"}},[s._v("#")]),s._v(" 运行单元测试")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run test:unit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"构建桥类库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建桥类库"}},[s._v("#")]),s._v(" 构建桥类库")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run bridge\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"启动文档服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动文档服务"}},[s._v("#")]),s._v(" 启动文档服务")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"发布项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布项目"}},[s._v("#")]),s._v(" 发布项目")]),s._v(" "),t("p",[s._v("批量编译打包，包括主应用和全部子应用")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run release\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"子应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子应用"}},[s._v("#")]),s._v(" 子应用")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run app "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("action"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"创建子应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建子应用"}},[s._v("#")]),s._v(" 创建子应用")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run app "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("例如创建一个 名为 app1 ,启动端口 为 8001")]),s._v(" "),t("p",[t("code",[s._v("npm run app add app1 8001")])]),s._v(" "),t("h3",{attrs:{id:"删除子应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除子应用"}},[s._v("#")]),s._v(" 删除子应用")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run app remove "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"启动子应用开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动子应用开发环境"}},[s._v("#")]),s._v(" 启动子应用开发环境")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"编译子应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译子应用"}},[s._v("#")]),s._v(" 编译子应用")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"批量编译子应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#批量编译子应用"}},[s._v("#")]),s._v(" 批量编译子应用")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run app build\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);