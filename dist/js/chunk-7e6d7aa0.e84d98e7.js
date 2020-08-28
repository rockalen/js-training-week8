(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e6d7aa0"],{1799:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item mx-0",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a,i){return e("li",{key:i,staticClass:"page-item mx-0",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.emitPages(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item mx-0",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},s=[],n={name:"Pagination",data:function(){return{}},props:{pages:{type:Object,default:function(){return{}}}},methods:{emitPages:function(t){this.$emit("emit-pages",t)}}},c=n,r=e("2877"),o=Object(r["a"])(c,i,s,!1,null,null,null);a["a"]=o.exports},5651:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("table",{staticClass:"table"},[t._m(0),t.orders.length?e("tbody",t._l(t.orders,(function(a,i){return e("tr",{key:i,class:{"text-danger":!a.paid}},[e("td",[t._v(t._s(a.created.datetime))]),e("td",[e("ul",{staticClass:"list-unstyled"},t._l(a.products,(function(a,i){return e("li",{key:i},[t._v(" "+t._s(a.product.title)+" 數量 : "+t._s(a.quantity)+" "+t._s(a.product.unit)+" ")])})),0)]),e("td",[t._v(t._s(a.payment))]),e("td",[t._v(t._s(t._f("money")(a.amount)))]),e("td",[e("div",{staticClass:"custom-control custom-switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.paid,expression:"item.paid"}],staticClass:"custom-control-input",attrs:{id:a.id,type:"checkbox"},domProps:{checked:Array.isArray(a.paid)?t._i(a.paid,null)>-1:a.paid},on:{change:[function(e){var i=a.paid,s=e.target,n=!!s.checked;if(Array.isArray(i)){var c=null,r=t._i(i,c);s.checked?r<0&&t.$set(a,"paid",i.concat([c])):r>-1&&t.$set(a,"paid",i.slice(0,r).concat(i.slice(r+1)))}else t.$set(a,"paid",n)},function(e){return t.setOrderPaid(a)}]}}),e("label",{staticClass:"custom-control-label",attrs:{for:a.id}},[a.paid?e("strong",{staticClass:"text-success"},[t._v("已付款")]):e("span",{staticClass:"text-muted"},[t._v("尚未付款")])])])])])})),0):t._e()]),e("div",{staticClass:"d-flex justify-content-center"},[e("Pagination",{attrs:{pages:t.pagination},on:{"emit-pages":t.getOrders}})],1)],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("下單時間")]),e("th",[t._v("購買款項")]),e("th",[t._v("付款方式")]),e("th",[t._v("應付金額")]),e("th",[t._v("是否付款")])])])}],n=(e("99af"),e("1799")),c={name:"Orders",components:{Pagination:n["a"]},data:function(){return{orders:{},pagination:{},isLoading:!1}},created:function(){this.getOrders()},methods:{getOrders:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;this.isLoading=!0;var i="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/admin/ec/orders?page=").concat(a,"&paged=").concat(e);this.$http.get(i).then((function(a){t.orders=a.data.data,t.pagination=a.data.meta.pagination,t.isLoading=!1}))},setOrderPaid:function(t){var a=this,e="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/admin/ec/orders/").concat(t.id,"/paid");t.paid||(e="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/admin/ec/orders/").concat(t.id,"/unpaid")),this.$http.patch(e,t.id).then((function(t){console.log("已付款"),a.getOrders()}))}}},r=c,o=e("2877"),l=Object(o["a"])(r,i,s,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-7e6d7aa0.e84d98e7.js.map