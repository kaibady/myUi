(window.webpackJsonp=window.webpackJsonp||[]).push([[1095],{1699:function(t,e,n){},2413:function(t,e,n){"use strict";var a=n(1699);n.n(a).a},3019:function(t,e,n){"use strict";n.r(e);var a=n(410),r=n.n(a),l=n(411),o=n.n(l),s=(n(1344),n(123),n(1346)),u=(n(553),n(555)),i=n(0),c={components:{MyDrag:u.a,MyDrop:s.a},data:function(){return{text:"请放置在这里"}},methods:{handleEnter:function(){this.text="已进入"},handleLeave:function(){this.text="已离开"},handleDrop:function(){this.text="已放置"}}};i.default.use(o.a),i.default.use(r.a),i.default.use(u.a),i.default.use(s.a);var d=c,h=(n(2413),n(18)),f=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("el-col",{attrs:{span:8}},[n("my-drag",[t._v("请把我拖到目标处")])],1),t._v(" "),n("el-col",{attrs:{span:16}},[n("my-drop",{attrs:{"active-highlight":"","enter-highlight":""},on:{enter:t.handleEnter,leave:t.handleLeave,drop:t.handleDrop}},[t._v(t._s(t.text))])],1)],1)}),[],!1,null,"425b1fe1",null);e.default=f.exports}}]);