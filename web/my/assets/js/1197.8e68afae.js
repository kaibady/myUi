(window.webpackJsonp=window.webpackJsonp||[]).push([[1197,1513],{2515:function(e,t,n){"use strict";n.r(t);var i=n(53),s=n(360),r=n(357),o=n(1808),c={props:{width:{type:String,default:"100%"},height:{type:String,default:"400px"},color:{type:String,default:"#097bdb"}},data:function(){return{screenWidth:0,screenHeight:0,mouseX:0,mouseY:0,count:0}},computed:{styles:function(){return{width:this.width,height:this.height}}},methods:{init:function(){var e=this.screenWidth/this.screenHeight;this.camera=new o.PerspectiveCamera(75,e,1,1e4),this.camera.position.z=1e3,this.scene=new o.Scene,this.renderer=new o.WebGLRenderer({alpha:!0}),this.renderer.setSize(this.screenWidth,this.screenHeight);var t=new o.CircleGeometry(1,32),n=new o.MeshBasicMaterial({color:new o.Color(this.color)}),i=0,c=null;this.particles=[];for(var l=0;l<50;l++)for(var a=0;a<50;a++)(c=this.particles[i++]=new o.Mesh(t,n)).position.x=90*l-2250,c.position.z=90*a-2250,this.scene.add(c);this.$el.appendChild(this.renderer.domElement),Object(r.on)(document,"mousemove",this.handleMouseMove),Object(s.addResizeListener)(this.$el,this.setScreenSize),this.interval=setInterval(this.loop,1e3/60)},loop:function(){var e=this.scene,t=this.camera,n=this.renderer,i=this.mouseX,s=this.mouseY,r=this.count;t.position.x+=.05*(i-t.position.x),t.position.y+=.05*(-s-t.position.y),t.position.y=364;for(var o=0,c=null,l=0;l<50;l++)for(var a=0;a<50;a++)(c=this.particles[o++]).position.y=50*Math.sin(.3*(l+r))+50*Math.sin(.5*(a+r)),c.scale.x=c.scale.y=2*(Math.sin(.3*(l+r))+1)+2*(Math.sin(.5*(a+r))+1);n.render(e,this.camera),this.count+=.1},setScreenSize:function(){var e=this.$el.getBoundingClientRect();this.screenWidth=e.width,this.screenHeight=e.height,this.renderer&&this.renderer.setSize(this.screenWidth,this.screenHeight)},handleMouseMove:function(e){this.mouseX=e.clientX-this.screenWidth/2,this.mouseY=e.clientY-this.screenHeight/2}},mounted:function(){this.setScreenSize(),this.init()},beforeDestroy:function(){Object(s.removeResizeListener)(this.$el,this.setScreenSize),Object(r.off)(document,"mousemove",this.handleMouseMove),this.interval&&clearInterval(this.interval)}},l=n(18),a=Object(l.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"my-wave",style:this.styles})}),[],!1,null,null,null).exports;t.default=Object(i.a)(a)},357:function(e,t,n){"use strict";t.__esModule=!0,t.isInContainer=t.getScrollContainer=t.isScroll=t.getStyle=t.once=t.off=t.on=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.hasClass=f,t.addClass=function(e,t){if(!e)return;for(var n=e.className,i=(t||"").split(" "),s=0,r=i.length;s<r;s++){var o=i[s];o&&(e.classList?e.classList.add(o):f(e,o)||(n+=" "+o))}e.classList||(e.className=n)},t.removeClass=function(e,t){if(!e||!t)return;for(var n=t.split(" "),i=" "+e.className+" ",s=0,r=n.length;s<r;s++){var o=n[s];o&&(e.classList?e.classList.remove(o):f(e,o)&&(i=i.replace(" "+o+" "," ")))}e.classList||(e.className=(i||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},t.setStyle=function e(t,n,s){if(!t||!n)return;if("object"===(void 0===n?"undefined":i(n)))for(var r in n)n.hasOwnProperty(r)&&e(t,r,n[r]);else"opacity"===(n=u(n))&&a<9?t.style.filter=isNaN(s)?"":"alpha(opacity="+100*s+")":t.style[n]=s};var s,r=n(0);var o=((s=r)&&s.__esModule?s:{default:s}).default.prototype.$isServer,c=/([\:\-\_]+(.))/g,l=/^moz([A-Z])/,a=o?0:Number(document.documentMode),u=function(e){return e.replace(c,(function(e,t,n,i){return i?n.toUpperCase():n})).replace(l,"Moz$1")},h=t.on=!o&&document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)},d=t.off=!o&&document.removeEventListener?function(e,t,n){e&&t&&e.removeEventListener(t,n,!1)}:function(e,t,n){e&&t&&e.detachEvent("on"+t,n)};t.once=function(e,t,n){h(e,t,(function i(){n&&n.apply(this,arguments),d(e,t,i)}))};function f(e,t){if(!e||!t)return!1;if(-1!==t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}var m=t.getStyle=a<9?function(e,t){if(!o){if(!e||!t)return null;"float"===(t=u(t))&&(t="styleFloat");try{switch(t){case"opacity":try{return e.filters.item("alpha").opacity/100}catch(e){return 1}default:return e.style[t]||e.currentStyle?e.currentStyle[t]:null}}catch(n){return e.style[t]}}}:function(e,t){if(!o){if(!e||!t)return null;"float"===(t=u(t))&&(t="cssFloat");try{var n=document.defaultView.getComputedStyle(e,"");return e.style[t]||n?n[t]:null}catch(n){return e.style[t]}}};var p=t.isScroll=function(e,t){if(!o)return m(e,null!==t||void 0!==t?t?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};t.getScrollContainer=function(e,t){if(!o){for(var n=e;n;){if([window,document,document.documentElement].includes(n))return window;if(p(n,t))return n;n=n.parentNode}return n}},t.isInContainer=function(e,t){if(o||!e||!t)return!1;var n=e.getBoundingClientRect(),i=void 0;return i=[window,document,document.documentElement,null,void 0].includes(t)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:t.getBoundingClientRect(),n.top<i.bottom&&n.bottom>i.top&&n.right>i.left&&n.left<i.right}}}]);