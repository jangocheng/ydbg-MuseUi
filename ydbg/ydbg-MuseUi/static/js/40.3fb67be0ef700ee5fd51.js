webpackJsonp([40],{IrS3:function(e,l){},YfM7:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var c={name:"SelectControls",components:{Header:a("teIl").a},data:function(){return{headerName:"SelectControls",normal:{checkbox:!0,radio:1,switch:!1},checkAll:!1,radio:{value1:[],value2:"heart",value3:"disable"},checkbox:{value1:[],value2:!1,value3:!1},switchVal:{value1:!1,value2:!0,value3:!1}}},methods:{handleCheckAll:function(e){3==this.checkbox.value1.length&&"all"==e?(this.checkbox.value1=[],this.checkAll=!1):3!=this.checkbox.value1.length&&"all"==e?(this.checkAll=!0,this.checkbox.value1=["Checkbox 1","Checkbox 2","Checkbox 3"]):this.checkbox.value1.length?this.checkAll=!0:this.checkbox.value1.length||(this.checkAll=!1,this.checkbox.value1=[])}}},t={render:function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",[a("Header",{attrs:{headerName:e.headerName}}),e._v(" "),a("mu-container",[a("h1",[e._v("选择控件")]),e._v(" "),a("mu-flex",{staticClass:"select-control-row"},[a("mu-checkbox",{attrs:{label:"Checkbox: "+e.normal.checkbox},model:{value:e.normal.checkbox,callback:function(l){e.$set(e.normal,"checkbox",l)},expression:"normal.checkbox"}})],1),e._v(" "),a("div",{staticClass:"select-control-group"},e._l(3,function(l){return a("mu-flex",{key:"radio "+l,staticClass:"select-control-row"},[a("mu-radio",{attrs:{value:l,label:"Radio "+l},model:{value:e.normal.radio,callback:function(l){e.$set(e.normal,"radio",l)},expression:"normal.radio"}})],1)})),e._v(" "),a("mu-flex",{staticClass:"select-control-row"},[a("mu-switch",{attrs:{label:"Switch: "+e.normal.switch},model:{value:e.normal.switch,callback:function(l){e.$set(e.normal,"switch",l)},expression:"normal.switch"}})],1),e._v(" "),a("h1",[e._v(" Checkbox")]),e._v(" "),a("mu-flex",{staticClass:"select-control-row"},[a("mu-checkbox",{attrs:{"uncheck-icon":"favorite_border","checked-icon":"favorite",label:"自定义图标"},model:{value:e.checkbox.value2,callback:function(l){e.$set(e.checkbox,"value2",l)},expression:"checkbox.value2"}})],1),e._v(" "),a("mu-flex",{staticClass:"select-control-row"},[a("mu-checkbox",{attrs:{"uncheck-icon":"visibility_off","checked-icon":"visibility",label:"自定义图标"},model:{value:e.checkbox.value3,callback:function(l){e.$set(e.checkbox,"value3",l)},expression:"checkbox.value3"}})],1),e._v(" "),a("div",{staticClass:"select-control-group"},[e._v("\n      Selects: "+e._s(e.checkbox.value1)+"\n      "),a("mu-flex",{staticClass:"select-control-row"},[a("mu-checkbox",{attrs:{label:"全选","input-value":e.checkAll,"checked-icon":this.checkbox.value1.length<3?"indeterminate_check_box":void 0},on:{change:function(l){e.handleCheckAll("all")}}})],1),e._v(" "),e._l(3,function(l){return a("mu-flex",{key:"Checkbox "+l,staticClass:"select-control-row"},[a("mu-checkbox",{attrs:{value:"Checkbox "+l,label:"Checkbox "+l},on:{change:e.handleCheckAll},model:{value:e.checkbox.value1,callback:function(l){e.$set(e.checkbox,"value1",l)},expression:"checkbox.value1"}})],1)})],2),e._v("\n    不可用状态\n    "),a("mu-flex",{staticClass:"select-control-row"},[a("mu-checkbox",{attrs:{disabled:"",label:"disabled"}})],1),e._v(" "),a("mu-flex",{staticClass:"select-control-row"},[a("mu-checkbox",{attrs:{disabled:"","input-value":!0,label:"disabled"}})],1),e._v(" "),a("h1",[e._v(" Raido")]),e._v(" "),a("mu-flex",{staticClass:"select-control-row"},[a("mu-radio",{attrs:{value:"heart","uncheck-icon":"favorite_border","checked-icon":"favorite",label:"自定义图标"},model:{value:e.radio.value2,callback:function(l){e.$set(e.radio,"value2",l)},expression:"radio.value2"}})],1),e._v(" "),a("mu-flex",{staticClass:"select-control-row"},[a("mu-radio",{attrs:{value:"visibility","uncheck-icon":"visibility_off","checked-icon":"visibility",label:"自定义图标"},model:{value:e.radio.value2,callback:function(l){e.$set(e.radio,"value2",l)},expression:"radio.value2"}})],1),e._v(" "),a("div",{staticClass:"select-control-group"},[e._v("\n      Selects: "+e._s(e.radio.value1)+"\n      "),e._l(3,function(l){return a("mu-flex",{key:"radio "+l,staticClass:"select-control-row"},[a("mu-radio",{attrs:{value:"radio "+l,label:"radio "+l},model:{value:e.radio.value1,callback:function(l){e.$set(e.radio,"value1",l)},expression:"radio.value1"}})],1)})],2),e._v("\n\n    不可用状态\n    "),a("mu-flex",{staticClass:"select-control-row"},[a("mu-radio",{attrs:{disabled:"",value:"null",label:"disabled"},model:{value:e.radio.value3,callback:function(l){e.$set(e.radio,"value3",l)},expression:"radio.value3"}})],1),e._v(" "),a("mu-flex",{staticClass:"select-control-row"},[a("mu-radio",{attrs:{disabled:"",value:"disable",label:"disabled"},model:{value:e.radio.value3,callback:function(l){e.$set(e.radio,"value3",l)},expression:"radio.value3"}})],1),e._v(" "),a("h1",[e._v("Switch")]),e._v(" "),a("mu-flex",{staticClass:"select-control-row"},[a("mu-switch",{attrs:{label:"switch"},model:{value:e.switchVal.value1,callback:function(l){e.$set(e.switchVal,"value1",l)},expression:"switchVal.value1"}})],1),e._v(" "),a("mu-flex",{staticClass:"select-control-row"},[a("mu-switch",{attrs:{label:"switch"},model:{value:e.switchVal.value2,callback:function(l){e.$set(e.switchVal,"value2",l)},expression:"switchVal.value2"}})],1),e._v(" "),a("mu-flex",{staticClass:"select-control-row"},[a("mu-switch",{attrs:{disabled:"",label:"disabled"},model:{value:e.switchVal.value3,callback:function(l){e.$set(e.switchVal,"value3",l)},expression:"switchVal.value3"}})],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(c,t,!1,function(e){a("IrS3")},"data-v-24335670",null);l.default=o.exports}});
//# sourceMappingURL=40.3fb67be0ef700ee5fd51.js.map