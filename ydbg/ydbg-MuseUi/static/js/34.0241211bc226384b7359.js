webpackJsonp([34],{uPKG:function(t,e){},v4u3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"Drawer",components:{Header:n("teIl").a},data:function(){return{headerName:"Drawer",docked:!1,open:!1,position:"left"}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{headerName:t.headerName}}),t._v(" "),n("mu-container",[n("h1",[t._v(" 抽屉导航")]),t._v(" "),n("mu-flex",{attrs:{"justify-content":"center","align-items":"center"}},[n("mu-switch",{staticStyle:{"margin-left":"16px"},attrs:{label:"docked"},model:{value:t.docked,callback:function(e){t.docked=e},expression:"docked"}}),t._v(" "),n("mu-radio",{staticStyle:{"margin-left":"16px"},attrs:{value:"left",label:"left"},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}}),t._v(" "),n("mu-radio",{staticStyle:{"margin-left":"16px"},attrs:{value:"right",label:"right"},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}}),t._v(" "),n("mu-button",{staticStyle:{"margin-left":"16px"},attrs:{color:"primary"},on:{click:function(e){t.open=!t.open}}},[t._v("\n        toggle\n      ")])],1),t._v(" "),n("mu-drawer",{attrs:{open:t.open,docked:t.docked,right:"right"===t.position},on:{"update:open":function(e){t.open=e}}},[n("mu-list",[n("mu-list-item",{attrs:{button:""}},[n("mu-list-item-title",[t._v("Menu Item 1")])],1),t._v(" "),n("mu-list-item",{attrs:{button:""}},[n("mu-list-item-title",[t._v("Menu Item 2")])],1),t._v(" "),n("mu-list-item",{attrs:{button:""},on:{click:function(e){t.open=!1}}},[n("mu-list-item-title",[t._v("Close")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var a=n("VU/8")(i,o,!1,function(t){n("uPKG")},"data-v-35b0c7d2",null);e.default=a.exports}});
//# sourceMappingURL=34.0241211bc226384b7359.js.map