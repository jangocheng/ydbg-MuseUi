webpackJsonp([22],{"+phY":function(e,r){},"3MTa":function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={name:"Progress",components:{Header:s("teIl").a},data:function(){return{headerName:"Progress",linear:10}},created:function(){var e=this;this.timer=setInterval(function(){e.linear+=10,e.linear>100&&(e.linear=0)},1e3)},beforeDestroy:function(){this.timer&&clearInterval(this.timer)}},t={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",[s("Header",{attrs:{headerName:e.headerName}}),e._v(" "),s("mu-container",[s("h1",[e._v("进度条")]),e._v(" "),s("mu-flex",{staticClass:"demo-linear-progress"},[s("mu-linear-progress")],1),e._v(" "),s("mu-flex",{staticClass:"demo-linear-progress"},[s("mu-linear-progress",{attrs:{color:"secondary"}})],1),e._v(" "),s("mu-flex",{staticClass:"demo-linear-progress"},[s("mu-linear-progress",{attrs:{value:e.linear,mode:"determinate",color:"green"}})],1),e._v(" "),s("h1",[e._v("不同的色彩和大小")]),e._v(" "),s("mu-flex",{staticClass:"demo-linear-progress"},[s("mu-linear-progress",{attrs:{mode:"determinate",value:30}})],1),e._v(" "),s("mu-flex",{staticClass:"demo-linear-progress"},[s("mu-linear-progress",{attrs:{mode:"determinate",value:60,size:10,color:"secondary"}})],1),e._v(" "),s("mu-flex",{staticClass:"demo-linear-progress"},[s("mu-linear-progress",{attrs:{mode:"determinate",value:90,size:15,color:"green"}})],1),e._v(" "),s("h1",[e._v("环形进度条")]),e._v(" "),s("mu-circular-progress",{staticClass:"demo-circular-progress",attrs:{size:36}}),e._v(" "),s("mu-circular-progress",{staticClass:"demo-circular-progress",attrs:{color:"secondary","stroke-width":5,size:48}}),e._v(" "),s("mu-circular-progress",{staticClass:"demo-circular-progress",attrs:{color:"warning","stroke-width":7,size:56}}),e._v(" "),s("h1",[e._v("定值圆环")]),e._v(" "),s("mu-circular-progress",{staticClass:"demo-circular-progress",attrs:{mode:"determinate",value:40,size:56}}),e._v(" "),s("mu-circular-progress",{staticClass:"demo-circular-progress",attrs:{mode:"determinate",value:60,color:"secondary","stroke-width":5,size:72}}),e._v(" "),s("mu-circular-progress",{staticClass:"demo-circular-progress",attrs:{mode:"determinate",value:80,color:"warning","stroke-width":7,size:96}})],1)],1)},staticRenderFns:[]};var o=s("VU/8")(a,t,!1,function(e){s("+phY")},"data-v-6150a97c",null);r.default=o.exports}});
//# sourceMappingURL=22.a3060713b84f29fcf568.js.map