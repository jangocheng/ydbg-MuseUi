webpackJsonp([30],{n5US:function(e,t){},uAPH:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"Form",components:{Header:a("teIl").a},data:function(){return{headerName:"Form",options:["Option 1","Option 2","Option 3","Option 4","Option 5","Option 6","Option 7","Option 8","Option 9","Option 10"],labelPosition:"top",form:{input:"",select:"",date:"",radio:"",checkbox:[],switch:!1,slider:30,textarea:""},usernameRules:[{validate:function(e){return!!e},message:"必须填写用户名"},{validate:function(e){return e.length>=3},message:"用户名长度大于3"}],passwordRules:[{validate:function(e){return!!e},message:"必须填写密码"},{validate:function(e){return e.length>=3&&e.length<=10},message:"密码长度大于3小于10"}],argeeRules:[{validate:function(e){return!!e},message:"必须同意用户协议"}],validateForm:{username:"",password:"",isAgree:!1}}},methods:{submit:function(){this.$refs.form.validate().then(function(e){console.log("form valid: ",e)})},clear:function(){this.$refs.form.clear(),this.validateForm={username:"",password:"",isAgree:!1}}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header",{attrs:{headerName:e.headerName}}),e._v(" "),a("mu-container",[a("h1",[e._v("表单")]),e._v(" "),a("mu-flex",{staticStyle:{"padding-bottom":"8px"},attrs:{"align-items":"center"}},[a("span",{staticStyle:{"margin-right":"16px"}},[e._v("Label Position:")]),e._v(" "),a("mu-radio",{staticStyle:{"margin-right":"16px"},attrs:{value:"top",label:"Top"},model:{value:e.labelPosition,callback:function(t){e.labelPosition=t},expression:"labelPosition"}}),e._v(" "),a("mu-radio",{staticStyle:{"margin-right":"16px"},attrs:{value:"left",label:"Left"},model:{value:e.labelPosition,callback:function(t){e.labelPosition=t},expression:"labelPosition"}}),e._v(" "),a("mu-radio",{staticStyle:{"margin-right":"16px"},attrs:{value:"right",label:"Right"},model:{value:e.labelPosition,callback:function(t){e.labelPosition=t},expression:"labelPosition"}})],1),e._v(" "),a("mu-form",{staticClass:"mu-demo-form",attrs:{model:e.form,"label-position":e.labelPosition,"label-width":"100"}},[a("mu-form-item",{attrs:{prop:"input",label:"Input"}},[a("mu-text-field",{model:{value:e.form.input,callback:function(t){e.$set(e.form,"input",t)},expression:"form.input"}})],1),e._v(" "),a("mu-form-item",{attrs:{prop:"select",label:"Select"}},[a("mu-select",{model:{value:e.form.select,callback:function(t){e.$set(e.form,"select",t)},expression:"form.select"}},e._l(e.options,function(e,t){return a("mu-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),a("mu-form-item",{attrs:{prop:"date",label:"Date Time"}},[a("mu-date-input",{attrs:{type:"dateTime",actions:""},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),e._v(" "),a("mu-form-item",{attrs:{prop:"radio",label:"Radio"}},[a("mu-radio",{attrs:{value:"male",label:"Male"},model:{value:e.form.radio,callback:function(t){e.$set(e.form,"radio",t)},expression:"form.radio"}}),e._v(" "),a("mu-radio",{attrs:{value:"female",label:"Female"},model:{value:e.form.radio,callback:function(t){e.$set(e.form,"radio",t)},expression:"form.radio"}})],1),e._v(" "),a("mu-form-item",{attrs:{prop:"checkbox",label:"Checkbox"}},[a("mu-checkbox",{attrs:{value:"eat",label:"Eat"},model:{value:e.form.checkbox,callback:function(t){e.$set(e.form,"checkbox",t)},expression:"form.checkbox"}}),e._v(" "),a("mu-checkbox",{attrs:{value:"sleep",label:"Sleep"},model:{value:e.form.checkbox,callback:function(t){e.$set(e.form,"checkbox",t)},expression:"form.checkbox"}}),e._v(" "),a("mu-checkbox",{attrs:{value:"run",label:"Run"},model:{value:e.form.checkbox,callback:function(t){e.$set(e.form,"checkbox",t)},expression:"form.checkbox"}}),e._v(" "),a("mu-checkbox",{attrs:{value:"movie",label:"Movie"},model:{value:e.form.checkbox,callback:function(t){e.$set(e.form,"checkbox",t)},expression:"form.checkbox"}})],1),e._v(" "),a("mu-form-item",{attrs:{prop:"switch",label:"Switch"}},[a("mu-switch",{model:{value:e.form.switch,callback:function(t){e.$set(e.form,"switch",t)},expression:"form.switch"}})],1),e._v(" "),a("mu-form-item",{attrs:{prop:"slider",label:"Slider"}},[a("mu-slider",{model:{value:e.form.slider,callback:function(t){e.$set(e.form,"slider",t)},expression:"form.slider"}})],1),e._v(" "),a("mu-form-item",{attrs:{prop:"textarea",label:"Textarea"}},[a("mu-text-field",{attrs:{"multi-line":"",rows:3,"rows-max":6},model:{value:e.form.textarea,callback:function(t){e.$set(e.form,"textarea",t)},expression:"form.textarea"}})],1)],1),e._v(" "),a("h1",[e._v("表单验证")]),e._v(" "),a("mu-form",{ref:"form",staticClass:"mu-demo-form",attrs:{model:e.validateForm}},[a("mu-form-item",{attrs:{label:"用户名","help-text":"帮助文字",prop:"username",rules:e.usernameRules}},[a("mu-text-field",{attrs:{prop:"username"},model:{value:e.validateForm.username,callback:function(t){e.$set(e.validateForm,"username",t)},expression:"validateForm.username"}})],1),e._v(" "),a("mu-form-item",{attrs:{label:"密码",prop:"password",rules:e.passwordRules}},[a("mu-text-field",{attrs:{type:"password",prop:"password"},model:{value:e.validateForm.password,callback:function(t){e.$set(e.validateForm,"password",t)},expression:"validateForm.password"}})],1),e._v(" "),a("mu-form-item",{attrs:{prop:"isAgree",rules:e.argeeRules}},[a("mu-checkbox",{attrs:{label:"同意用户协议"},model:{value:e.validateForm.isAgree,callback:function(t){e.$set(e.validateForm,"isAgree",t)},expression:"validateForm.isAgree"}})],1),e._v(" "),a("mu-form-item",[a("mu-button",{attrs:{color:"primary"},on:{click:e.submit}},[e._v("提交")]),e._v(" "),a("mu-button",{on:{click:e.clear}},[e._v("重置")])],1)],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(o,r,!1,function(e){a("n5US")},"data-v-4e578184",null);t.default=l.exports}});
//# sourceMappingURL=30.ad8bbb4fca0f00dd61ad.js.map