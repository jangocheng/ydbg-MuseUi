webpackJsonp([46],{DYkw:function(t,e){},knBj:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={components:{Header:r("teIl").a},name:"Alert",data:function(){return{headerName:"alert",alert:!0,alert1:!0}},methods:{showAlert:function(){this.alert=!0},closeAlert:function(){this.alert=!1},toggleAlert:function(){this.alert1=!this.alert1}}},n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header",{attrs:{headerName:t.headerName}}),t._v(" "),r("mu-container",[r("h1",[t._v("提示框")]),t._v(" "),r("div",{staticClass:"alert-demo-wrapper"},[r("mu-alert",{attrs:{color:"success"}},[t._v("\n        this is success alert\n      ")]),t._v(" "),r("mu-alert",{attrs:{color:"warning"}},[t._v("\n        this is warning alert\n      ")]),t._v(" "),r("mu-alert",{attrs:{color:"info"}},[t._v("\n        this is info alert\n      ")]),t._v(" "),r("mu-alert",{attrs:{color:"error"}},[t._v("\n        this is error alert\n      ")])],1),t._v(" "),r("h1",[t._v("显示 Icon 和 delete 图标")]),t._v(" "),r("div",{staticClass:"alert-demo-wrapper"},[r("mu-alert",{attrs:{color:"success"}},[r("mu-icon",{attrs:{left:"",value:"check_circle"}}),t._v("\n        this is success alert\n      ")],1),t._v(" "),r("mu-alert",{attrs:{color:"warning"}},[r("mu-icon",{attrs:{left:"",value:"priority_high"}}),t._v("\n        this is warning alert\n      ")],1),t._v(" "),r("mu-alert",{attrs:{color:"info"}},[r("mu-icon",{attrs:{left:"",value:"info"}}),t._v("\n        this is info alert\n      ")],1),t._v(" "),t.alert?r("mu-alert",{attrs:{color:"error",delete:""},on:{delete:function(e){t.closeAlert()}}},[r("mu-icon",{attrs:{left:"",value:"warning"}}),t._v("\n        this is error alert\n      ")],1):t._e(),t._v(" "),t.alert?t._e():r("mu-button",{attrs:{color:"primary"},on:{click:function(e){t.showAlert()}}},[t._v("SHOW ALERT")])],1),t._v(" "),r("h1",[t._v(" 过渡动画定制")]),t._v(" "),r("div",{staticClass:"alert-demo-wrapper"},[r("mu-button",{staticStyle:{"margin-bottom":"16px"},attrs:{color:"primary"},on:{click:function(e){t.toggleAlert()}}},[t._v("TOGGLE")]),t._v(" "),t.alert1?r("mu-alert",{attrs:{color:"warning",delete:"",transition:"mu-scale-transition"},on:{delete:function(e){t.alert1=!1}}},[r("mu-icon",{attrs:{left:"",value:"warning"}}),t._v("\n        this is warning alert\n      ")],1):t._e()],1)])],1)},staticRenderFns:[]};var l=r("VU/8")(a,n,!1,function(t){r("DYkw")},"data-v-0cf32f20",null);e.default=l.exports}});
//# sourceMappingURL=46.142c812f6226a83a8ce6.js.map