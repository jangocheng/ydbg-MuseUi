webpackJsonp([19],{RX8c:function(t,i){},V6ZT:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={name:"List",components:{Header:e("teIl").a},data:function(){return{headerName:"List",selects:[],events:!1,calls:!1,messages:!1,notifications:!1,sounds:!1,videoSounds:!1,open:!0}}},l={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("Header",{attrs:{headerName:t.headerName}}),t._v(" "),s("mu-container",[s("h1",[t._v("列表")]),t._v(" "),s("mu-paper",{staticClass:"demo-list-wrap",attrs:{"z-depth":1}},[s("mu-appbar",{attrs:{color:"teal"}},[s("mu-button",{attrs:{slot:"left",icon:""},slot:"left"},[s("mu-icon",{attrs:{value:"menu"}})],1),t._v("\n        Menus\n      ")],1),t._v(" "),s("mu-list",[s("mu-list-item",{attrs:{button:"",ripple:!1}},[s("mu-list-item-action",[s("mu-icon",{attrs:{value:"inbox"}})],1),t._v(" "),s("mu-list-item-title",[t._v("Inbox")])],1),t._v(" "),s("mu-list-item",{attrs:{button:"",ripple:!1}},[s("mu-list-item-action",[s("mu-icon",{attrs:{value:"grade"}})],1),t._v(" "),s("mu-list-item-title",[t._v("Stared")])],1),t._v(" "),s("mu-list-item",{attrs:{button:"",ripple:!1}},[s("mu-list-item-action",[s("mu-icon",{attrs:{value:"send"}})],1),t._v(" "),s("mu-list-item-title",[t._v("Sent mail")])],1),t._v(" "),s("mu-list-item",{attrs:{button:"",ripple:!1}},[s("mu-list-item-action",[s("mu-icon",{attrs:{value:"drafts"}})],1),t._v(" "),s("mu-list-item-title",[t._v("Drafts")])],1)],1),t._v(" "),s("mu-divider"),t._v(" "),s("mu-list",[s("mu-list-item",{attrs:{button:"",ripple:!1}},[s("mu-list-item-title",[t._v("All mail")]),t._v(" "),s("mu-list-item-action",[s("mu-icon",{attrs:{value:"info"}})],1)],1),t._v(" "),s("mu-list-item",{attrs:{button:"",ripple:!1}},[s("mu-list-item-title",[t._v("Trash")]),t._v(" "),s("mu-list-item-action",[s("mu-icon",{attrs:{value:"info"}})],1)],1),t._v(" "),s("mu-list-item",{attrs:{button:"",ripple:!1}},[s("mu-list-item-title",[t._v("Spam")]),t._v(" "),s("mu-list-item-action",[s("mu-icon",{attrs:{value:"info"}})],1)],1),t._v(" "),s("mu-list-item",{attrs:{button:"",ripple:!1}},[s("mu-list-item-title",[t._v("Follow up")]),t._v(" "),s("mu-list-item-action",[s("mu-icon",{attrs:{value:"info"}})],1)],1)],1)],1),t._v(" "),s("h1",[t._v("Avatar 和 Icon 的列表")]),t._v(" "),s("mu-paper",{staticClass:"demo-list-wrap",attrs:{"z-depth":1}},[s("mu-appbar",{attrs:{color:"lightBlue400"}},[s("mu-button",{attrs:{slot:"left",icon:""},slot:"left"},[s("mu-icon",{attrs:{value:"menu"}})],1),t._v("\n        Contacts\n        "),s("mu-button",{attrs:{slot:"right",icon:""},slot:"right"},[s("mu-icon",{attrs:{value:"search"}})],1)],1),t._v(" "),s("mu-list",[s("mu-sub-header",[t._v("Today")]),t._v(" "),s("mu-list-item",{attrs:{avatar:"",button:"",ripple:!1}},[s("mu-list-item-action",[s("mu-avatar",[s("img",{attrs:{src:e("IWIO")}})])],1),t._v(" "),s("mu-list-item-title",[t._v("Mike Li")]),t._v(" "),s("mu-list-item-action",[s("mu-icon",{attrs:{value:"chat_bubble"}})],1)],1),t._v(" "),s("mu-list-item",{attrs:{avatar:"",button:"",ripple:!1}},[s("mu-list-item-action",[s("mu-avatar",[s("img",{attrs:{src:e("IWIO")}})])],1),t._v(" "),s("mu-list-item-title",[t._v("Maco Mai")]),t._v(" "),s("mu-list-item-action",[s("mu-icon",{attrs:{value:"chat_bubble"}})],1)],1),t._v(" "),s("mu-list-item",{attrs:{avatar:"",button:"",ripple:!1}},[s("mu-list-item-action",[s("mu-avatar",[s("img",{attrs:{src:e("IWIO")}})])],1),t._v(" "),s("mu-list-item-title",[t._v("Alex Qin")]),t._v(" "),s("mu-list-item-action",[s("mu-icon",{attrs:{value:"chat_bubble"}})],1)],1),t._v(" "),s("mu-list-item",{attrs:{avatar:"",button:"",ripple:!1}},[s("mu-list-item-action",[s("mu-avatar",[s("img",{attrs:{src:e("IWIO")}})])],1),t._v(" "),s("mu-list-item-title",[t._v("Allen Qun")]),t._v(" "),s("mu-list-item-action",[s("mu-icon",{attrs:{value:"chat_bubble"}})],1)],1),t._v(" "),s("mu-list-item",{attrs:{avatar:"",button:"",ripple:!1}},[s("mu-list-item-action",[s("mu-avatar",[s("img",{attrs:{src:e("IWIO")}})])],1),t._v(" "),s("mu-list-item-title",[t._v("Myron Liu")]),t._v(" "),s("mu-list-item-action",[s("mu-icon",{attrs:{value:"chat_bubble"}})],1)],1)],1),t._v(" "),s("mu-divider"),t._v(" "),s("mu-list",[s("mu-sub-header",[t._v("History")]),t._v(" "),s("mu-list-item",{attrs:{avatar:"",button:"",ripple:!1}},[s("mu-list-item-action",[s("mu-avatar",[s("img",{attrs:{src:e("IWIO")}})])],1),t._v(" "),s("mu-list-item-title",[t._v("Gaia Zhou")]),t._v(" "),s("mu-list-item-action",[s("mu-icon",{attrs:{value:"chat_bubble"}})],1)],1),t._v(" "),s("mu-list-item",{attrs:{avatar:"",button:"",ripple:!1}},[s("mu-list-item-action",[s("mu-avatar",[s("img",{attrs:{src:e("IWIO")}})])],1),t._v(" "),s("mu-list-item-title",[t._v("Miller Wang")]),t._v(" "),s("mu-list-item-action",[s("mu-icon",{attrs:{value:"chat_bubble"}})],1)],1)],1)],1),t._v(" "),s("h1",[t._v("联系人列表")]),t._v(" "),s("mu-paper",{staticClass:"demo-list-wrap",attrs:{"z-depth":1}},[s("mu-appbar",{attrs:{color:"secondary"}},[s("mu-button",{attrs:{slot:"left",icon:""},slot:"left"},[s("mu-icon",{attrs:{value:"menu"}})],1),t._v("\n        Contacts\n        "),s("mu-button",{attrs:{slot:"right",icon:""},slot:"right"},[s("mu-icon",{attrs:{value:"search"}})],1)],1),t._v(" "),s("mu-list",[s("mu-list-item",{attrs:{avatar:"",button:"",ripple:!1}},[s("mu-list-item-action",[s("mu-icon",{attrs:{value:"star",color:"pink"}})],1),t._v(" "),s("mu-list-item-title",[t._v("Mike Li")]),t._v(" "),s("mu-list-item-action",[s("mu-avatar",[s("img",{attrs:{src:e("IWIO")}})])],1)],1),t._v(" "),s("mu-list-item",{attrs:{avatar:"",button:"",ripple:!1}},[s("mu-list-item-action"),t._v(" "),s("mu-list-item-title",[t._v("Maco Mai")]),t._v(" "),s("mu-list-item-action",[s("mu-avatar",[s("img",{attrs:{src:e("IWIO")}})])],1)],1),t._v(" "),s("mu-list-item",{attrs:{avatar:"",button:"",ripple:!1}},[s("mu-list-item-action"),t._v(" "),s("mu-list-item-title",[t._v("Alex Qin")]),t._v(" "),s("mu-list-item-action",[s("mu-avatar",[s("img",{attrs:{src:e("IWIO")}})])],1)],1),t._v(" "),s("mu-list-item",{attrs:{avatar:"",button:"",ripple:!1}},[s("mu-list-item-action"),t._v(" "),s("mu-list-item-title",[t._v("Allen Qun")]),t._v(" "),s("mu-list-item-action",[s("mu-avatar",[s("img",{attrs:{src:e("IWIO")}})])],1)],1)],1)],1),t._v(" "),s("h1",[t._v(" 两行内容和副标题")]),t._v(" "),s("mu-paper",{staticClass:"demo-list-wrap",attrs:{"z-depth":1}},[s("mu-appbar",{attrs:{color:"lightBlue"}},[s("mu-button",{attrs:{slot:"left",icon:""},slot:"left"},[s("mu-icon",{attrs:{value:"menu"}})],1),t._v("\n        Files\n        "),s("mu-button",{attrs:{slot:"right",icon:""},slot:"right"},[s("mu-icon",{attrs:{value:"view_quilt"}})],1)],1),t._v(" "),s("mu-list",{attrs:{textline:"two-line"}},[s("mu-sub-header",{attrs:{inset:""}},[t._v("Folders")]),t._v(" "),s("mu-list-item",{attrs:{avatar:"",button:"",ripple:!1}},[s("mu-list-item-action",[s("mu-avatar",[s("mu-icon",{attrs:{value:"folder"}})],1)],1),t._v(" "),s("mu-list-item-content",[s("mu-list-item-title",[t._v("Photos")]),t._v(" "),s("mu-list-item-sub-title",[t._v("Jan 9, 2014")])],1),t._v(" "),s("mu-list-item-action",[s("mu-button",{attrs:{icon:""}},[s("mu-icon",{attrs:{value:"info"}})],1)],1)],1),t._v(" "),s("mu-list-item",{attrs:{avatar:"",button:"",ripple:!1}},[s("mu-list-item-action",[s("mu-avatar",[s("mu-icon",{attrs:{value:"folder"}})],1)],1),t._v(" "),s("mu-list-item-content",[s("mu-list-item-title",[t._v("Recipes")]),t._v(" "),s("mu-list-item-sub-title",[t._v("Jan 17, 2014")])],1),t._v(" "),s("mu-list-item-action",[s("mu-button",{attrs:{icon:""}},[s("mu-icon",{attrs:{value:"info"}})],1)],1)],1),t._v(" "),s("mu-list-item",{attrs:{avatar:"",button:"",ripple:!1}},[s("mu-list-item-action",[s("mu-avatar",[s("mu-icon",{attrs:{value:"folder"}})],1)],1),t._v(" "),s("mu-list-item-content",[s("mu-list-item-title",[t._v("Work")]),t._v(" "),s("mu-list-item-sub-title",[t._v("Jan 28, 2014")])],1),t._v(" "),s("mu-list-item-action",[s("mu-button",{attrs:{icon:""}},[s("mu-icon",{attrs:{value:"info"}})],1)],1)],1)],1),t._v(" "),s("mu-divider",{attrs:{inset:""}}),t._v(" "),s("mu-list",{attrs:{textline:"two-line"}},[s("mu-sub-header",{attrs:{inset:""}},[t._v("Files")]),t._v(" "),s("mu-list-item",{attrs:{avatar:"",button:"",ripple:!1}},[s("mu-list-item-action",[s("mu-avatar",{attrs:{color:"blue"}},[s("mu-icon",{attrs:{value:"assignment"}})],1)],1),t._v(" "),s("mu-list-item-content",[s("mu-list-item-title",[t._v("Vacation itinerary")]),t._v(" "),s("mu-list-item-sub-title",[t._v("Jan 20, 2014")])],1),t._v(" "),s("mu-list-item-action",[s("mu-button",{attrs:{icon:""}},[s("mu-icon",{attrs:{value:"info"}})],1)],1)],1),t._v(" "),s("mu-list-item",{attrs:{avatar:"",button:"",ripple:!1}},[s("mu-list-item-action",[s("mu-avatar",{attrs:{color:"yellow600"}},[s("mu-icon",{attrs:{value:"insert_chart"}})],1)],1),t._v(" "),s("mu-list-item-content",[s("mu-list-item-title",[t._v("Kitchen remodel")]),t._v(" "),s("mu-list-item-sub-title",[t._v("Jan 10, 2014")])],1),t._v(" "),s("mu-list-item-action",[s("mu-button",{attrs:{icon:""}},[s("mu-icon",{attrs:{value:"info"}})],1)],1)],1)],1)],1),t._v(" "),s("h1",[t._v("三行内容")]),t._v(" "),s("mu-paper",{staticClass:"demo-list-wrap",attrs:{"z-depth":1}},[s("mu-appbar",{attrs:{color:"cyan"}},[s("mu-button",{attrs:{slot:"left",icon:""},slot:"left"},[s("mu-icon",{attrs:{value:"menu"}})],1),t._v("\n        Inbox\n        "),s("mu-button",{attrs:{slot:"right",icon:""},slot:"right"},[s("mu-icon",{attrs:{value:"search"}})],1)],1),t._v(" "),s("mu-list",{attrs:{textline:"three-line"}},[s("mu-sub-header",[t._v("今天")]),t._v(" "),s("mu-list-item",{attrs:{avatar:"",ripple:!1,button:""}},[s("mu-list-item-action",[s("mu-avatar",[s("img",{attrs:{src:e("IWIO")}})])],1),t._v(" "),s("mu-list-item-content",[s("mu-list-item-title",[t._v("这个周末一起吃饭么?")]),t._v(" "),s("mu-list-item-sub-title",[s("span",{staticStyle:{color:"rgba(0, 0, 0, .87)"}},[t._v("Myron Liu -")]),t._v(" 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈\n            ")])],1)],1),t._v(" "),s("mu-divider"),t._v(" "),s("mu-list-item",{attrs:{avatar:"",ripple:!1,button:""}},[s("mu-list-item-action",[s("mu-avatar",[s("img",{attrs:{src:e("IWIO")}})])],1),t._v(" "),s("mu-list-item-content",[s("mu-list-item-title",[t._v("Alex Qin")]),t._v(" "),s("mu-list-item-sub-title",[s("span",{staticStyle:{color:"rgba(0, 0, 0, .87)"}},[t._v("看电影啊")]),s("br"),t._v("\n              我们去看电影，最近有部烂片上映，又有吐槽的了\n            ")])],1)],1),t._v(" "),s("mu-divider"),t._v(" "),s("mu-list-item",{attrs:{avatar:"",ripple:!1,button:""}},[s("mu-list-item-action",[s("mu-avatar",[s("img",{attrs:{src:e("IWIO")}})])],1),t._v(" "),s("mu-list-item-content",[s("mu-list-item-title",[t._v("LOL")]),t._v(" "),s("mu-list-item-sub-title",[s("span",{staticStyle:{color:"rgba(0, 0, 0, .87)"}},[t._v("去打游戏啊")]),s("br"),t._v("\n              周末一起 LOL\n            ")])],1)],1),t._v(" "),s("mu-divider"),t._v(" "),s("mu-list-item",{attrs:{avatar:"",ripple:!1,button:""}},[s("mu-list-item-action",[s("mu-avatar",[s("img",{attrs:{src:e("IWIO")}})])],1),t._v(" "),s("mu-list-item-content",[s("mu-list-item-title",[t._v("LOL")]),t._v(" "),s("mu-list-item-sub-title",[s("span",{staticStyle:{color:"rgba(0, 0, 0, .87)"}},[t._v("哇去")]),s("br"),t._v("\n              实在编不下去，这就是个demo\n            ")])],1)],1)],1)],1),t._v(" "),s("h1",[t._v(" 后置文字与图表")]),t._v(" "),s("mu-paper",{staticClass:"demo-list-wrap",attrs:{"z-depth":1}},[s("mu-appbar",{attrs:{color:"pink"}},[s("mu-button",{attrs:{slot:"left",icon:""},slot:"left"},[s("mu-icon",{attrs:{value:"menu"}})],1),t._v("\n        Inbox\n        "),s("mu-button",{attrs:{slot:"right",icon:""},slot:"right"},[s("mu-icon",{attrs:{value:"search"}})],1)],1),t._v(" "),s("mu-list",{attrs:{textline:"two-line"}},[s("mu-list-item",{attrs:{avatar:"",ripple:!1,button:""}},[s("mu-list-item-content",[s("mu-list-item-title",[t._v("Ali Connors")]),t._v(" "),s("mu-list-item-sub-title",{staticStyle:{color:"rgba(0, 0, 0, .87)"}},[t._v("Brunch this weekend?")]),t._v(" "),s("mu-list-item-sub-title",[t._v("\n              I'll be in your neighborhood doing errands this weekend. Do you want to hang out?\n            ")])],1),t._v(" "),s("mu-list-item-action",[s("mu-list-item-after-text",[t._v("15 min")]),t._v(" "),s("mu-checkbox",{attrs:{color:"yellow700",value:"value1","uncheck-icon":"star_border","checked-icon":"star"},model:{value:t.selects,callback:function(i){t.selects=i},expression:"selects"}})],1)],1),t._v(" "),s("mu-divider"),t._v(" "),s("mu-list-item",{attrs:{avatar:"",ripple:!1,button:""}},[s("mu-list-item-content",[s("mu-list-item-title",[t._v("me, Scrott, Jennifer")]),t._v(" "),s("mu-list-item-sub-title",{staticStyle:{color:"rgba(0, 0, 0, .87)"}},[t._v("Summer BBQ")]),t._v(" "),s("mu-list-item-sub-title",[t._v("\n              Wish I could come, but I'm out of town this weekend.\n            ")])],1),t._v(" "),s("mu-list-item-action",[s("mu-list-item-after-text",[t._v("2 hr")]),t._v(" "),s("mu-checkbox",{attrs:{color:"yellow700",value:"value2","uncheck-icon":"star_border","checked-icon":"star"},model:{value:t.selects,callback:function(i){t.selects=i},expression:"selects"}})],1)],1),t._v(" "),s("mu-divider"),t._v(" "),s("mu-list-item",{attrs:{avatar:"",ripple:!1,button:""}},[s("mu-list-item-content",[s("mu-list-item-title",[t._v("Sandra Adams")]),t._v(" "),s("mu-list-item-sub-title",{staticStyle:{color:"rgba(0, 0, 0, .87)"}},[t._v("Oui oui")]),t._v(" "),s("mu-list-item-sub-title",[t._v("\n              Do you have Paris recommendations? Have you ever been?\n            ")])],1),t._v(" "),s("mu-list-item-action",[s("mu-list-item-after-text",[t._v("6 hr")]),t._v(" "),s("mu-checkbox",{attrs:{color:"yellow700",value:"value3","uncheck-icon":"star_border","checked-icon":"star"},model:{value:t.selects,callback:function(i){t.selects=i},expression:"selects"}})],1)],1),t._v(" "),s("mu-divider"),t._v(" "),s("mu-list-item",{attrs:{avatar:"",ripple:!1,button:""}},[s("mu-list-item-content",[s("mu-list-item-title",[t._v("Trevor Hansen")]),t._v(" "),s("mu-list-item-sub-title",{staticStyle:{color:"rgba(0, 0, 0, .87)"}},[t._v("Birthday gift")]),t._v(" "),s("mu-list-item-sub-title",[t._v("\n              Have any ideas about what we should get Heidi for her\n            ")])],1),t._v(" "),s("mu-list-item-action",[s("mu-list-item-after-text",[t._v("12 hr")]),t._v(" "),s("mu-checkbox",{attrs:{color:"yellow700",value:"value4","uncheck-icon":"star_border","checked-icon":"star"},model:{value:t.selects,callback:function(i){t.selects=i},expression:"selects"}})],1)],1),t._v(" "),s("mu-divider"),t._v(" "),s("mu-list-item",{attrs:{avatar:"",ripple:!1,button:""}},[s("mu-list-item-content",[s("mu-list-item-title",[t._v("Britta Holt")]),t._v(" "),s("mu-list-item-sub-title",{staticStyle:{color:"rgba(0, 0, 0, .87)"}},[t._v("Recipe to try")]),t._v(" "),s("mu-list-item-sub-title",[t._v("\n              We should eat this: Grate, Squash, Corn, and tomatillo Tacos.\n            ")])],1),t._v(" "),s("mu-list-item-action",[s("mu-list-item-after-text",[t._v("18hr")]),t._v(" "),s("mu-checkbox",{attrs:{color:"yellow700",value:"value5","uncheck-icon":"star_border","checked-icon":"star"},model:{value:t.selects,callback:function(i){t.selects=i},expression:"selects"}})],1)],1)],1)],1),t._v(" "),s("h1",[t._v(" 配合表单组件使用")]),t._v(" "),s("mu-paper",{staticClass:"demo-list-wrap",attrs:{"z-depth":1}},[s("mu-appbar",{attrs:{color:"purple"}},[s("mu-button",{attrs:{slot:"left",icon:""},slot:"left"},[s("mu-icon",{attrs:{value:"menu"}})],1),t._v("\n        Setting\n      ")],1),t._v(" "),s("mu-list",{attrs:{textline:"two-line"}},[s("mu-list-item",[s("mu-list-item-content",[s("mu-list-item-title",[t._v("通知与信息设置")]),t._v(" "),s("mu-list-item-sub-title",[t._v("总是中断")])],1)],1)],1),t._v(" "),s("mu-divider"),t._v(" "),s("mu-list",[s("mu-sub-header",[t._v("声音开启设置")]),t._v(" "),s("mu-list-item",{attrs:{button:"",ripple:!1},on:{click:function(i){t.events=!t.events}}},[s("mu-list-item-title",[t._v("\n            事件和提醒\n          ")]),t._v(" "),s("mu-list-item-action",[s("mu-switch",{attrs:{readonly:""},model:{value:t.events,callback:function(i){t.events=i},expression:"events"}})],1)],1),t._v(" "),s("mu-list-item",{attrs:{button:"",ripple:!1},on:{click:function(i){t.calls=!t.calls}}},[s("mu-list-item-title",[t._v("\n            电话\n          ")]),t._v(" "),s("mu-list-item-action",[s("mu-switch",{attrs:{readonly:""},model:{value:t.calls,callback:function(i){t.calls=i},expression:"calls"}})],1)],1),t._v(" "),s("mu-list-item",{attrs:{button:"",ripple:!1},on:{click:function(i){t.messages=!t.messages}}},[s("mu-list-item-title",[t._v("\n            信息\n          ")]),t._v(" "),s("mu-list-item-action",[s("mu-switch",{attrs:{readonly:""},model:{value:t.messages,callback:function(i){t.messages=i},expression:"messages"}})],1)],1)],1),t._v(" "),s("mu-list",[s("mu-sub-header",[t._v("通知设置")]),t._v(" "),s("mu-list-item",{attrs:{button:"",ripple:!1},on:{click:function(i){t.notifications=!t.notifications}}},[s("mu-list-item-action",[s("mu-checkbox",{attrs:{readonly:""},model:{value:t.notifications,callback:function(i){t.notifications=i},expression:"notifications"}})],1),t._v(" "),s("mu-list-item-title",[t._v("\n            通知\n          ")])],1),t._v(" "),s("mu-list-item",{attrs:{button:"",ripple:!1},on:{click:function(i){t.sounds=!t.sounds}}},[s("mu-list-item-action",[s("mu-checkbox",{attrs:{readonly:""},model:{value:t.sounds,callback:function(i){t.sounds=i},expression:"sounds"}})],1),t._v(" "),s("mu-list-item-title",[t._v("\n            声音\n          ")])],1),t._v(" "),s("mu-list-item",{attrs:{button:"",ripple:!1},on:{click:function(i){t.videoSounds=!t.videoSounds}}},[s("mu-list-item-action",[s("mu-checkbox",{attrs:{readonly:""},model:{value:t.videoSounds,callback:function(i){t.videoSounds=i},expression:"videoSounds"}})],1),t._v(" "),s("mu-list-item-title",[t._v("\n            视频的声音\n          ")])],1)],1)],1),t._v(" "),s("h1",[t._v(" 嵌套列表")]),t._v(" "),s("mu-paper",{staticClass:"demo-list-wrap",attrs:{"z-depth":1}},[s("mu-appbar",{attrs:{color:"primary"}},[s("mu-button",{attrs:{slot:"left",icon:""},slot:"left"},[s("mu-icon",{attrs:{value:"menu"}})],1),t._v("\n        Inbox\n      ")],1),t._v(" "),s("mu-list",{attrs:{"toggle-nested":""}},[s("mu-list-item",{attrs:{button:"",ripple:!1,nested:"",open:"send"===t.open},on:{"toggle-nested":function(i){t.open=arguments[0]?"send":""}}},[s("mu-list-item-action",[s("mu-icon",{attrs:{value:"send"}})],1),t._v(" "),s("mu-list-item-title",[t._v("Sent mail")]),t._v(" "),s("mu-list-item-action",[s("mu-icon",{staticClass:"toggle-icon",attrs:{size:"24",value:"keyboard_arrow_down"}})],1),t._v(" "),s("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1},slot:"nested"},[s("mu-list-item-title",[t._v("List Item 1")])],1),t._v(" "),s("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1},slot:"nested"},[s("mu-list-item-title",[t._v("List Item 2")])],1),t._v(" "),s("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1},slot:"nested"},[s("mu-list-item-title",[t._v("List Item 3")])],1)],1),t._v(" "),s("mu-list-item",{attrs:{button:"",ripple:!1,nested:"",open:"drafts"===t.open},on:{"toggle-nested":function(i){t.open=arguments[0]?"drafts":""}}},[s("mu-list-item-action",[s("mu-icon",{attrs:{value:"drafts"}})],1),t._v(" "),s("mu-list-item-title",[t._v("Drafts")]),t._v(" "),s("mu-list-item-action",[s("mu-icon",{staticClass:"toggle-icon",attrs:{size:"24",value:"keyboard_arrow_down"}})],1),t._v(" "),s("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1},slot:"nested"},[s("mu-list-item-title",[t._v("List Item 1")])],1),t._v(" "),s("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1},slot:"nested"},[s("mu-list-item-title",[t._v("List Item 2")])],1),t._v(" "),s("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1},slot:"nested"},[s("mu-list-item-title",[t._v("List Item 3")])],1)],1),t._v(" "),s("mu-list-item",{attrs:{button:"",ripple:!1,nested:"",open:"inbox"===t.open},on:{"toggle-nested":function(i){t.open=arguments[0]?"inbox":""}}},[s("mu-list-item-action",[s("mu-icon",{attrs:{value:"inbox"}})],1),t._v(" "),s("mu-list-item-title",[t._v("Inbox")]),t._v(" "),s("mu-list-item-action",[s("mu-icon",{staticClass:"toggle-icon",attrs:{size:"24",value:"keyboard_arrow_down"}})],1),t._v(" "),s("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1},slot:"nested"},[s("mu-list-item-title",[t._v("List Item 1")])],1),t._v(" "),s("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1},slot:"nested"},[s("mu-list-item-title",[t._v("List Item 2")])],1),t._v(" "),s("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1},slot:"nested"},[s("mu-list-item-title",[t._v("List Item 3")])],1)],1),t._v(" "),s("mu-list-item",{attrs:{button:"",ripple:!1,nested:"",open:"stared"===t.open},on:{"toggle-nested":function(i){t.open=arguments[0]?"stared":""}}},[s("mu-list-item-action",[s("mu-icon",{attrs:{value:"grade"}})],1),t._v(" "),s("mu-list-item-title",[t._v("Stared")]),t._v(" "),s("mu-list-item-action",[s("mu-icon",{staticClass:"toggle-icon",attrs:{size:"24",value:"keyboard_arrow_down"}})],1),t._v(" "),s("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1},slot:"nested"},[s("mu-list-item-title",[t._v("List Item 1")])],1),t._v(" "),s("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1},slot:"nested"},[s("mu-list-item-title",[t._v("List Item 2")])],1),t._v(" "),s("mu-list-item",{attrs:{slot:"nested",button:"",ripple:!1},slot:"nested"},[s("mu-list-item-title",[t._v("List Item 3")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var a=e("VU/8")(s,l,!1,function(t){e("RX8c")},"data-v-6a985ac1",null);i.default=a.exports}});
//# sourceMappingURL=19.bf482ed8ca862c0ea9a4.js.map