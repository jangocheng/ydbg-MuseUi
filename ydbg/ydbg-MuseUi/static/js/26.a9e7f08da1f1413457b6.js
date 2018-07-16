webpackJsonp([26],{Hg9t:function(t,s){},"JoB/":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r={name:"DataTable",components:{Header:a("teIl").a},data:function(){return{headerName:"DataTable",selects:[],sort:{name:"",order:"asc"},columns:[{title:"Dessert (100g serving)",width:200,name:"name"},{title:"Calories",name:"calories",width:126,align:"center",sortable:!0},{title:"Fat (g)",name:"fat",width:126,align:"center",sortable:!0},{title:"Carbs (g)",name:"carbs",width:126,align:"center",sortable:!0},{title:"Protein (g)",name:"protein",width:126,align:"center",sortable:!0},{title:"Iron (%)",name:"iron",width:126,align:"center",sortable:!0}],list:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,iron:1},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,iron:1},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,iron:7},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,iron:8},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,iron:16},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,iron:0},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,iron:2},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,iron:45},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,iron:22},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,iron:6}]}},methods:{handleSortChange:function(t){var s=t.name,a=t.order;this.list=this.list.sort(function(t,r){return"asc"===a?t[s]-r[s]:r[s]-t[s]})},removeSelect:function(t){var s=this.selects.indexOf(t);this.selects.splice(s,1)}}},e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Header",{attrs:{headerName:t.headerName}}),t._v(" "),a("mu-container",[a("h1",[t._v("数据表格")]),t._v(" "),a("mu-paper",{attrs:{"z-depth":1}},[a("mu-data-table",{attrs:{columns:t.columns,sort:t.sort,data:t.list},on:{"update:sort":function(s){t.sort=s},"sort-change":t.handleSortChange},scopedSlots:t._u([{key:"default",fn:function(s){return[a("td",[t._v(t._s(s.row.name))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.calories))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.fat))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.carbs))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.protein))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.iron)+"%")])]}}])})],1),t._v(" "),a("h1",[t._v("条纹表格")]),t._v(" "),a("mu-paper",{attrs:{"z-depth":1}},[a("mu-data-table",{attrs:{stripe:"",columns:t.columns,sort:t.sort,data:t.list.slice(0,6)},on:{"update:sort":function(s){t.sort=s},"sort-change":t.handleSortChange},scopedSlots:t._u([{key:"default",fn:function(s){return[a("td",[t._v(t._s(s.row.name))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.calories))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.fat))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.carbs))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.protein))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.iron)+"%")])]}}])})],1),t._v(" "),a("h1",[t._v("边框表格")]),t._v(" "),a("mu-paper",{attrs:{"z-depth":1}},[a("mu-data-table",{attrs:{border:"",columns:t.columns,sort:t.sort,data:t.list.slice(0,6)},on:{"update:sort":function(s){t.sort=s},"sort-change":t.handleSortChange},scopedSlots:t._u([{key:"default",fn:function(s){return[a("td",[t._v(t._s(s.row.name))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.calories))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.fat))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.carbs))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.protein))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.iron)+"%")])]}}])})],1),t._v(" "),a("h1",[t._v("进度条")]),t._v(" "),a("mu-paper",{attrs:{"z-depth":1}},[a("mu-data-table",{attrs:{loading:!0,columns:t.columns,sort:t.sort,data:t.list.slice(0,6)},on:{"update:sort":function(s){t.sort=s},"sort-change":t.handleSortChange},scopedSlots:t._u([{key:"default",fn:function(s){return[a("td",[t._v(t._s(s.row.name))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.calories))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.fat))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.carbs))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.protein))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.iron)+"%")])]}}])})],1),t._v(" "),a("h1",[t._v("固定表头")]),t._v(" "),a("mu-paper",{attrs:{"z-depth":1}},[a("mu-data-table",{attrs:{height:"300",columns:t.columns,sort:t.sort,data:t.list},on:{"update:sort":function(s){t.sort=s},"sort-change":t.handleSortChange},scopedSlots:t._u([{key:"default",fn:function(s){return[a("td",[t._v(t._s(s.row.name))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.calories))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.fat))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.carbs))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.protein))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.iron)+"%")])]}}])})],1),t._v(" "),a("h1",[t._v("自定义表头")]),t._v(" "),a("mu-paper",{attrs:{"z-depth":1}},[a("mu-data-table",{attrs:{columns:t.columns,sort:t.sort,data:t.list.slice(0,5)},on:{"update:sort":function(s){t.sort=s},"sort-change":t.handleSortChange},scopedSlots:t._u([{key:"th",fn:function(s){return[a("mu-tooltip",{attrs:{content:s.title}},[a("mu-flex",{attrs:{"align-items":"center","justify-content":"center"}},[a("span",[t._v(t._s(s.title))]),t._v(" "),a("mu-icon",{staticClass:"mu-table-sort-icon",attrs:{value:"arrow_drop_down"}})],1)],1)]}},{key:"default",fn:function(s){return[a("td",[t._v(t._s(s.row.name))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.calories))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.fat))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.carbs))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.protein))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.iron)+"%")])]}}])})],1),t._v(" "),a("mu-paper",{staticStyle:{"margin-top":"8px"},attrs:{"z-depth":1}},[a("mu-data-table",{attrs:{border:"",columns:t.columns,sort:t.sort,data:t.list.slice(0,5)},on:{"update:sort":function(s){t.sort=s},"sort-change":t.handleSortChange},scopedSlots:t._u([{key:"header",fn:function(s){return[a("tr",[a("th",{attrs:{rowspan:"2"}},[t._v("Dessert (100g serving) ")]),t._v(" "),a("th",{staticClass:"is-center",attrs:{rowspan:"2"}},[t._v("Calories")]),t._v(" "),a("th",{staticClass:"is-center",attrs:{colspan:"4"}},[t._v("Merge Cell")])]),t._v(" "),a("tr",[a("th",{staticClass:"is-center"},[t._v("Fat (g)")]),t._v(" "),a("th",{staticClass:"is-center"},[t._v("Carbs (g)")]),t._v(" "),a("th",{staticClass:"is-center"},[t._v("Protein (g)")]),t._v(" "),a("th",{staticClass:"is-center"},[t._v("Iron (%)")])])]}},{key:"default",fn:function(s){return[a("td",[t._v(t._s(s.row.name))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.calories))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.fat))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.carbs))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.protein))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.iron)+"%")])]}}])})],1),t._v(" "),a("h1",[t._v("行选择")]),t._v(" "),a("mu-paper",{attrs:{"z-depth":1}},[a("mu-data-table",{attrs:{selectable:"","select-all":"",selects:t.selects,checkbox:"",columns:t.columns,sort:t.sort,data:t.list.slice(0,6)},on:{"update:selects":function(s){t.selects=s},"update:sort":function(s){t.sort=s},"sort-change":t.handleSortChange},scopedSlots:t._u([{key:"default",fn:function(s){return[a("td",[t._v(t._s(s.row.name))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.calories))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.fat))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.carbs))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.protein))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.iron)+"%")])]}}])}),t._v(" "),a("mu-flex",{staticStyle:{padding:"8px"},attrs:{"align-items":"center",wrap:"wrap"}},[t._v("\n        selects: "),t._l(t.selects,function(s){return a("mu-chip",{key:s,staticStyle:{margin:"8px"},attrs:{delete:"",color:"green"},on:{delete:function(a){t.removeSelect(s)}}},[t._v(t._s(t.list[s].name))])})],2)],1),t._v(" "),a("h1",[t._v("展开行")]),t._v(" "),a("mu-paper",{attrs:{"z-depth":1}},[a("mu-data-table",{attrs:{stripe:"",columns:t.columns,sort:t.sort,data:t.list.slice(0,6)},on:{"update:sort":function(s){t.sort=s},"sort-change":t.handleSortChange},scopedSlots:t._u([{key:"expand",fn:function(s){return[a("div",{staticStyle:{padding:"24px"}},[t._v("this is expand row, name "+t._s(s.row.name))])]}},{key:"default",fn:function(s){return[a("td",[t._v(t._s(s.row.name))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.calories))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.fat))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.carbs))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.protein))]),t._v(" "),a("td",{staticClass:"is-right"},[t._v(t._s(s.row.iron)+"%")])]}}])})],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")(r,e,!1,function(t){a("Hg9t")},"data-v-55e04199",null);s.default=i.exports}});
//# sourceMappingURL=26.a9e7f08da1f1413457b6.js.map