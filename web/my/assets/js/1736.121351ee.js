(window.webpackJsonp=window.webpackJsonp||[]).push([[1736],{2881:function(e,t,i){"use strict";i.r(t);var s=i(47),n=i(372),r=i(370),h=i(1524),o={props:{width:{type:String,default:"100%"},height:{type:String,default:"400px"},color:{type:String,default:"#097bdb"}},data:function(){return{screenWidth:0,screenHeight:0,mouseX:0,mouseY:0,count:0}},computed:{styles:function(){return{width:this.width,height:this.height}}},methods:{init:function(){var e=this.screenWidth/this.screenHeight;this.camera=new h.PerspectiveCamera(75,e,1,1e4),this.camera.position.z=1e3,this.scene=new h.Scene,this.renderer=new h.WebGLRenderer({alpha:!0}),this.renderer.setSize(this.screenWidth,this.screenHeight);var t=new h.CircleGeometry(1,32),i=new h.MeshBasicMaterial({color:new h.Color(this.color)}),s=0,o=null;this.particles=[];for(var c=0;c<50;c++)for(var a=0;a<50;a++)(o=this.particles[s++]=new h.Mesh(t,i)).position.x=90*c-2250,o.position.z=90*a-2250,this.scene.add(o);this.$el.appendChild(this.renderer.domElement),Object(r.on)(document,"mousemove",this.handleMouseMove),Object(n.addResizeListener)(this.$el,this.setScreenSize),this.interval=setInterval(this.loop,1e3/60)},loop:function(){var e=this.scene,t=this.camera,i=this.renderer,s=this.mouseX,n=this.mouseY,r=this.count;t.position.x+=.05*(s-t.position.x),t.position.y+=.05*(-n-t.position.y),t.position.y=364;for(var h=0,o=null,c=0;c<50;c++)for(var a=0;a<50;a++)(o=this.particles[h++]).position.y=50*Math.sin(.3*(c+r))+50*Math.sin(.5*(a+r)),o.scale.x=o.scale.y=2*(Math.sin(.3*(c+r))+1)+2*(Math.sin(.5*(a+r))+1);i.render(e,this.camera),this.count+=.1},setScreenSize:function(){var e=this.$el.getBoundingClientRect();this.screenWidth=e.width,this.screenHeight=e.height,this.renderer&&this.renderer.setSize(this.screenWidth,this.screenHeight)},handleMouseMove:function(e){this.mouseX=e.clientX-this.screenWidth/2,this.mouseY=e.clientY-this.screenHeight/2}},mounted:function(){this.setScreenSize(),this.init()},beforeDestroy:function(){Object(n.removeResizeListener)(this.$el,this.setScreenSize),Object(r.off)(document,"mousemove",this.handleMouseMove),this.interval&&clearInterval(this.interval)}},c=i(20),a=Object(c.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"my-wave",style:this.styles})}),[],!1,null,null,null).exports;t.default=Object(s.a)(a)}}]);