(function(t){function e(e){for(var n,s,o=e[0],c=e[1],u=e[2],l=0,p=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function s(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0d9fa2":"6347bb5c","chunk-2d215fe4":"5fccfce1","chunk-2d2174ec":"6beb1d1b","chunk-2d22d746":"b34b4f9d"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t);var u=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,a[1](u)}r[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/app-restaurant/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1fdb":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datas,"items-per-page":5,search:t.search},scopedSlots:t._u([{key:"item.actions",fn:function(e){var n=e.item;return[a("v-icon",{on:{click:function(e){return t.ViewDetails(n,t.urlDetails)}}},[t._v("mdi-book-search")])]}}])})],1)},r=[],i={name:"DataTable",props:{datas:Array,headers:Array,search:String,urlDetails:String},data:function(){return{products:[]}},methods:{ViewDetails:function(t,e){var a="";t.buyer_name&&t.buyer_id&&t.age?(this.$store.dispatch("saveBuyersDetail",{}),a=e+"/"+t.buyer_id,console.log(a),this.$router.push(a)):"/"===e?this.$router.push({name:"SimpleTable2",query:{products:t.products}}):this.$router.push({name:"SimpleTable1",query:{products:t.products}})}}},s=i,o=a("2877"),c=a("6544"),u=a.n(c),l=a("8fea"),d=a("132d"),p=Object(o["a"])(s,n,r,!1,null,null,null);e["a"]=p.exports;u()(p,{VDataTable:l["a"],VIcon:d["a"]})},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Spinner",{attrs:{start:this.$store.state.isLoading}}),a("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" App Admin ")]),a("v-list-item-subtitle",[t._v(" restaurant ")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{to:e.to,link:""}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{app:"",color:"blue darken-4",dark:""}},[a("v-app-bar-nav-icon",{staticClass:"white--text",on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("Restaurant")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-food")])],1)],1),a("v-main",[a("router-view")],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.start?a("div",{staticClass:"spin"},[t._m(0)]):t._e()},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ring"},[a("div",{staticClass:"lds-dual-ring"})])}],c={name:"Spinner",props:["start"]},u=c,l=(a("8427"),a("2877")),d=Object(l["a"])(u,s,o,!1,null,"ae8c7ad8",null),p=d.exports,f={name:"App",components:{Spinner:p},data:function(){return{drawer:null,items:[{title:"Transactions",icon:"mdi-basket",to:"/"},{title:"Buyers",icon:"mdi-account-group",to:"/buyers"},{title:"About",icon:"mdi-help-box",to:"/about"}]}}},v=f,h=a("6544"),m=a.n(h),b=a("7496"),y=a("40dc"),_=a("5bc1"),g=a("8336"),w=a("ce7e"),k=a("132d"),x=a("8860"),V=a("da13"),T=a("5d23"),D=a("34c3"),S=a("f6c4"),L=a("f774"),$=a("2fa4"),A=a("2a7f"),O=Object(l["a"])(v,r,i,!1,null,null,null),j=O.exports;m()(O,{VApp:b["a"],VAppBar:y["a"],VAppBarNavIcon:_["a"],VBtn:g["a"],VDivider:w["a"],VIcon:k["a"],VList:x["a"],VListItem:V["a"],VListItemContent:T["a"],VListItemIcon:D["a"],VListItemSubtitle:T["b"],VListItemTitle:T["c"],VMain:S["a"],VNavigationDrawer:L["a"],VSpacer:$["a"],VToolbarTitle:A["a"]});a("d3b7");var B=a("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home pa-6"},[a("v-row",{attrs:{align:"center",justify:"space-around"}},[a("v-col",{attrs:{sm:"10"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{label:"Select date","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",r,!1),n))]}}])},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v(" OK ")])],1)],1)],1),a("v-col",{attrs:{sm:"2"}},[a("v-btn",{staticStyle:{width:"100%"},attrs:{elevation:"2"},on:{click:t.AddTransactions}},[t._v(" load")])],1)],1),a("br"),a("div",[a("DataTable",{attrs:{datas:t.transactions,headers:t.headers,urlDetails:t.viewDetails}})],1),a("br"),t.popup?a("v-alert",{attrs:{border:"top",color:"red lighten-2",dark:"",dismissible:""}},[t._v(" An error has occurred, please verify. ")]):t._e()],1)},P=[],C=(a("ac1f"),a("466d"),a("1fdb")),I=a("bc3a"),M=a.n(I),R=a("2106"),N=a.n(R);M.a.defaults.baseURL=Object({NODE_ENV:"production",BASE_URL:"/app-restaurant/"}).VUE_APP_BASE_URL,n["a"].use(N.a,M.a);var U={name:"Transactions",components:{DataTable:C["a"]},data:function(){return{date:(new Date).toISOString().substr(0,10),menu:!1,viewDetails:"/",popup:!1,error:"Error",transactions:[],headers:[{text:"ID",align:"start",sortable:!1,value:"transaction_id",class:"blue darken-4 white--text"},{text:"Buyer",value:"buyer_name",class:"blue darken-4 white--text"},{text:"IP",value:"ip",class:"blue darken-4 white--text"},{text:"Date",value:"transaction_date",class:"blue darken-4 white--text"},{text:"Device",value:"device",class:"blue darken-4 white--text"},{text:"Products",value:"actions",class:"blue darken-4 white--text",sortable:!1}]}},created:function(){this.GetTransactions()},methods:{GetTransactions:function(){var t=this.$store.state.transactions;t.length>0?this.transactions=t:this.AddTransactions()},AddTransactions:function(){var t=this;if(this.ValidateDateFormat(this.date)){var e={};e["search_date"]=this.date,this.$store.dispatch("showLoading"),this.$store.dispatch("saveTransactions",[]),this.transactions=[],n["a"].axios.get("https://mariaalejandrabm0703.github.io/transactions/",{params:e}).then((function(e){t.transactions=e.data.transactions,t.$store.dispatch("saveTransactions",t.transactions),t.$store.dispatch("saveBuyers",[]),t.$store.dispatch("showLoading")})).catch((function(){t.popup=!0,t.$store.dispatch("showLoading"),t.$store.dispatch("saveTransactions",[])}))}},ValidateDateFormat:function(t){var e=/^\d{2,4}\-\d{1,2}\-\d{1,2}$/;return!(!t.match(e)||""==t)}}},q=U,F=a("0798"),G=a("62ad"),J=a("2e4b"),K=a("e449"),z=a("0fd9"),H=a("8654"),Q=Object(l["a"])(q,E,P,!1,null,null,null),W=Q.exports;m()(Q,{VAlert:F["a"],VBtn:g["a"],VCol:G["a"],VDatePicker:J["a"],VMenu:K["a"],VRow:z["a"],VSpacer:$["a"],VTextField:H["a"]}),n["a"].use(B["a"]);var X=[{path:"/",name:"Transactions",component:W},{path:"/about",name:"About",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}},{path:"/buyers",name:"Buyers",component:function(){return a.e("chunk-2d215fe4").then(a.bind(null,"c122"))}},{path:"/buyer/:id",name:"BuyerDetails",component:function(){return a.e("chunk-2d2174ec").then(a.bind(null,"c5bf"))}},{path:"/buyer/:id/products_details/",name:"SimpleTable1",component:function(){return a.e("chunk-2d0d9fa2").then(a.bind(null,"6a45"))}},{path:"/transactions/products_details/",name:"SimpleTable2",component:function(){return a.e("chunk-2d0d9fa2").then(a.bind(null,"6a45"))}}],Y=new B["a"]({routes:X}),Z=Y,tt=a("2f62");n["a"].use(tt["a"]);var et=new tt["a"].Store({state:{transactions:[],buyers:[],buyerDetails:{},isLoading:!1},mutations:{updateTransactions:function(t,e){t.transactions=e},updateBuyers:function(t,e){t.buyers=e},updateBuyerDetail:function(t,e){t.buyerDetails=e},updateLoading:function(t){t.isLoading=!t.isLoading}},actions:{saveTransactions:function(t,e){var a=t.commit;a("updateTransactions",e)},saveBuyers:function(t,e){var a=t.commit;a("updateBuyers",e)},saveBuyersDetail:function(t,e){var a=t.commit;a("updateBuyerDetail",e)},showLoading:function(t){var e=t.commit;e("updateLoading")}},modules:{}}),at=a("f309");n["a"].use(at["a"]);var nt=new at["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Z,store:et,vuetify:nt,render:function(t){return t(j)}}).$mount("#app")},8427:function(t,e,a){"use strict";a("b1f6")},b1f6:function(t,e,a){}});
//# sourceMappingURL=app.6f6196e9.js.map