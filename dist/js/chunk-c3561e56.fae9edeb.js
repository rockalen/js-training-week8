(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3561e56"],{"18aa":function(t,a,s){},"2fbc":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb p-0 bg-transparent border-0 mb-2 mb-md-3"},t._l(t.breadcrumbList,(function(a,e){return s("li",{key:e,staticClass:"breadcrumb-item",class:{active:!a.link},on:{click:function(a){return t.routeTo(e)}}},[t._v(" "+t._s(a.name)+" ")])})),0)])},i=[],n=(s("9911"),{name:"Breadcrumb",data:function(){return{breadcrumbList:[]}},mounted:function(){this.updateList()},watch:{$route:function(){this.updateList()}},methods:{routeTo:function(t){this.breadcrumbList[t].link&&this.$router.push(this.breadcrumbList[t].link)},updateList:function(){this.breadcrumbList=this.$route.meta.breadcrumb}}}),c=n,o=(s("88c6"),s("2877")),r=Object(o["a"])(c,e,i,!1,null,"5397c0dc",null);a["a"]=r.exports},"376b":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"carousel"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.products,(function(a,e){return s("swiper-slide",{key:e},[s("div",{staticClass:"card border-0",on:{click:function(s){return t.emitProduct(a.id)}}},[s("img",{staticClass:"card-img-top slide-img-top",attrs:{src:a.imageUrl[0],alt:"..."}}),s("div",{staticClass:"card-img-overlay p-3"},[a.price<a.origin_price?s("p",{staticClass:"card-text text-right text-white font-size-14 text-capitalize"},[t._v("on sale")]):t._e()]),s("div",{staticClass:"card-body text-left p-0 pt-1"},[s("h4",{staticClass:"card-title mb-1 text-capitalize"},[t._v(t._s(a.title))]),s("p",{staticClass:"card-text font-size-16"},[t._v(t._s(t._f("money")(a.price))+" "),a.price<a.origin_price?s("del",{staticClass:"text-black-50 ml-2"},[t._v(t._s(t._f("money")(a.origin_price)))]):t._e()])])])])})),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},i=[],n=(s("99af"),s("b0c0"),{name:"Carousel",title:"Centered slides",data:function(){return{isLoading:!1,products:[],swiperOption:{centeredSlides:!1,pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},slidesPerView:4.2,spaceBetween:30,slidesOffsetBefore:186,breakpoints:{320:{slidesOffsetBefore:15,slidesPerView:1.4,spaceBetween:16},480:{slidesOffsetBefore:18,slidesPerView:1.5,spaceBetween:16},640:{slidesOffsetBefore:25,slidesPerView:2,spaceBetween:20},768:{slidesOffsetBefore:50,slidesPerView:2,spaceBetween:25},1024:{slidesOffsetBefore:76,slidesPerView:2.5,spaceBetween:30},1280:{slidesOffsetBefore:89,slidesPerView:3,spaceBetween:30},1440:{slidesOffsetBefore:89,slidesPerView:3.5,spaceBetween:30}}}}},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/ec/products");this.$http.get(a).then((function(a){t.products=a.data.data,t.isLoading=!1}))},emitProduct:function(t){"產品詳細頁"!==this.$route.name&&this.$router.push({path:"/product/".concat(t)}),this.$emit("emit-product",t)}}}),c=n,o=(s("7f29"),s("2877")),r=Object(o["a"])(c,e,i,!1,null,"602c4df9",null);a["a"]=r.exports},"7f29":function(t,a,s){"use strict";var e=s("b3e7"),i=s.n(e);i.a},"88c6":function(t,a,s){"use strict";var e=s("ed5f"),i=s.n(e);i.a},"8daf":function(t,a,s){"use strict";var e=s("18aa"),i=s.n(e);i.a},a1bb:function(t,a,s){"use strict";var e=s("d9f6"),i=s.n(e);i.a},b3e7:function(t,a,s){},d2f1:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"product mt-8"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"product-item container"},[s("div",{staticClass:"row product-item-head position-relative align-items-md-center mt-md-7 mb-md-5 mb-4"},[s("div",{staticClass:"product-item-image col-12 col-md-8 px-0"},[s("div",{staticClass:"product-card card m-md-0"},[s("img",{staticClass:"card-img-top border-0",attrs:{src:t.tempProduct.imageUrl[0],alt:"Card image cap"}}),s("div",{staticClass:"card-img-overlay p-3"},[t.tempProduct.price<t.tempProduct.origin_price?s("p",{staticClass:"card-text text-white font-size-14 text-capitalize"},[t._v("on sale")]):t._e()])])]),s("div",{staticClass:"col-12 col-md-5 position-absolute product-item-cart"},[s("div",{staticClass:"card-body bg-white p-3 py-md-5 pr-md-0 pl-md-5"},[s("Breadcrumb"),s("h2",{staticClass:"card-title font-size-md-48"},[t._v(t._s(t.tempProduct.title))]),s("div",{staticClass:"d-flex flex-wrap"},[s("div",{staticClass:"cart-quantity row  no-gutters mr-md-2 mb-3 mb-md-0 order-md-2"},[s("button",{staticClass:"sub btn col-4 px-0",attrs:{disabled:1===t.tempQuantity},on:{click:function(a){return t.changeQuantity(t.tempQuantity-1)}}},[s("i",{staticClass:"material-icons align-bottom"},[t._v("remove")])]),s("input",{staticClass:"col-4 text-center border-0 font-size-20",attrs:{type:"number",min:"1",max:"99"},domProps:{value:this.tempQuantity}}),s("button",{staticClass:"add btn col-4 px-0",on:{click:function(a){return t.changeQuantity(t.tempQuantity+1)}}},[s("i",{staticClass:"material-icons align-bottom"},[t._v("add")])])]),s("p",{staticClass:"cart-price card-text w-md-100 font-size-24 text-right mb-md-4"},[t.tempProduct.price<t.tempProduct.origin_price?s("del",{staticClass:"text-black-50 font-size-16"},[t._v(" "+t._s(t._f("money")(t.tempProduct.origin_price))+" ")]):t._e(),s("br"),t._v(t._s(t._f("money")(t.tempProduct.price))+" ")]),s("button",{staticClass:"add-cart-btn btn btn-main btn-lg flex-md-grow-1 font-weight-bold order-md-3",attrs:{"data-toggle":"modal","data-target":"#cartModalLong"},on:{click:function(a){return t.addToCart()}}},[t._v(" 加入購物車 ")])])],1)])]),s("CartsModal",{ref:"CartsModal",attrs:{msgStatus:t.msgStatus,"is-new":t.isNew},on:{update:t.getCart}}),s("div",{staticClass:"product-content row mb-md-8 mb-5"},[s("div",{staticClass:"col-md-5 mb-3 mb-md-0"},[s("p",{staticClass:"card-text font-size-md-20"},[t._v(" "+t._s(t.tempProduct.content)+" ")])]),s("div",{staticClass:"col-md-3 text-muted"},[s("span",{domProps:{innerHTML:t._s(t.tempProduct.description)}})])])],1),t._m(0),s("Carousel",{ref:"mySwiper",on:{"emit-product":t.getProduct}})],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h2",{staticClass:"container mb-3 font-weight-bold font-size-24 font-size-md-36"},[t._v("這裡"),s("sub",[t._v(" 應該還有您喜歡的手作...")])])}],n=(s("99af"),s("4160"),s("159b"),s("2fbc")),c=s("376b"),o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal fade right",attrs:{id:"cartModalLong",tabindex:"-1",role:"dialog","aria-labelledby":"cartModalLongTitle","aria-hidden":"true"}},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content p-3 p-md-7"},[s("div",{staticClass:"modal-header p-0 pb-3"},[s("h4",{staticClass:"modal-title font-size-md-48",attrs:{id:"cartModalLongTitle"}},[t._v("購物列表 "),s("sup",{staticClass:"text-main"},[t._v(t._s(t.carts.length))])]),t._m(0)]),s("div",{staticClass:"modal-body p-0"},[t.carts.length?s("ul",{staticClass:"cart-list d-flex flex-column list-unstyled h-100"},[t._l(t.carts,(function(a,e){return s("li",{key:e,staticClass:"media mb-2"},[s("div",{staticClass:"image"},[s("img",{attrs:{src:a.product.imageUrl[0],alt:"..."}})]),s("div",{staticClass:"media-body pt-1 py-md-2"},[s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("h6",{staticClass:"mt-0 mb-1"},[t._v(t._s(a.product.title)+"（"+t._s(a.product.unit)+"）")]),t.status.loadingBtn===a.product.id?s("i",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status"}}):s("a",{staticClass:"font-size-24 btn border-0 p-0",attrs:{"aria-hidden":"true"},on:{click:function(s){return t.delFromCart(a.product.id)}}},[t._v("×")])]),s("p",{staticClass:"mb-2"},[t._v(" "+t._s(t._f("money")(a.product.price))+" "),a.product.price<a.product.origin_price?s("del",{staticClass:"text-black-50 font-size-16"},[s("small",[t._v(t._s(t._f("money")(a.product.origin_price)))])]):t._e()]),s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("div",{staticClass:"row no-gutters mr-md-2 mb-0 bg-gray"},[s("button",{staticClass:"sub btn col-4 px-0",attrs:{disabled:1===a.quantity},on:{click:function(s){return t.updateQuantity(a.product.id,a.quantity-1)}}},[t.status.loadingBtn===a.product.id?s("i",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status"}}):s("i",{staticClass:"material-icons align-middle"},[t._v("remove")])]),s("input",{staticClass:"col-4 text-center border-0",attrs:{type:"number",min:"1",max:"99",disabled:t.status.loadingBtn===a.product.id},domProps:{value:a.quantity},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.updateQuantity(a.product.id,s.target.value)}}}),s("button",{staticClass:"add btn col-4 px-0",on:{click:function(s){return t.updateQuantity(a.product.id,a.quantity+1)}}},[t.status.loadingBtn===a.product.id?s("i",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status"}}):s("i",{staticClass:"material-icons align-middle"},[t._v("add")])])]),s("p",{staticClass:"mb-0 font-weight-bold"},[t._v(t._s(t._f("money")(a.quantity*a.product.price)))])])])])})),s("li",{staticClass:"footer media bg-transparent"},[s("div",{staticClass:"image"}),s("div",{staticClass:"media-body p-0 d-flex flex-column justify-content-between"},[s("div",{staticClass:"row flex-wrap no-gutters h-auto"},[s("div",{staticClass:"col-6 text-secondary mb-3"},[t._v("小計")]),s("div",{staticClass:"col-6 text-right text-secondary"},[t._v(t._s(t._f("money")(this.subTotal)))]),s("div",{staticClass:"col-6 text-secondary"},[t._v("運費")]),s("div",{staticClass:"col-6 text-right text-secondary"},[t._v(t._s(t._f("money")(this.shipping)))]),s("div",{staticClass:"col-6 font-size-24 font-weight-bold my-4"},[t._v("總計")]),s("div",{staticClass:"col-6 text-right font-size-24 font-weight-bold my-4"},[t._v(t._s(t._f("money")(this.subTotal+this.shipping)))])])])]),s("li",{staticClass:"bg-transparent h-100 row no-gutters align-items-md-start align-items-end"},[s("div",{staticClass:"col-12 col-md-8 order-md-2"},[s("a",{staticClass:"checkout-btn btn btn-main btn-lg font-weight-bold w-100",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.goCheckout(a)}}},[t._v(" 購物確認 ")])]),s("div",{staticClass:"col-12 col-md-4 text-center"},[s("a",{staticClass:"nav-link align-middle text-main py-md-3 px-0",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.removeCartsAll(a)}}},[s("font-awesome-icon",{attrs:{icon:"trash-alt"}}),t._v(" 清除重來 ")],1)])])],2):s("span",[t._v("目前購物車內無任何商品!")])])])])],1)},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{staticClass:"font-size-24 font-size-md-48",attrs:{"aria-hidden":"true"}},[t._v("×")])])}],d={name:"CartsModal",data:function(){return{isLoading:!1,carts:{},subTotal:0,shipping:80,status:{loadingBtn:""}}},props:{productid:{type:String,default:""},msgStatus:{type:Object,default:function(){return{}}},isNew:{type:Boolean,default:!0}},created:function(){this.$bus.$emit("get-layer:layer",0),this.getCarts()},methods:{getCarts:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/ec/shopping");this.$http.get(a).then((function(a){t.carts=a.data.data,t.subTotal=0,t.carts.forEach((function(a){t.subTotal+=a.product.price*a.quantity})),t.isLoading=!1}))},updateQuantity:function(t,a){var s=this;this.status.loadingBtn=t;var e="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/ec/shopping"),i="post";this.statusMsg="已加入購物車喔!",this.isNew||(i="patch",this.statusMsg="購物車本筆資料已完成更新!");var n={product:t,quantity:a};this.$http[i](e,n).then((function(t){s.getCarts(),s.status.loadingBtn="",200===t.status?(s.$bus.$emit("message:push",s.statusMsg,"success"),s.$emit("update"),s.$bus.$emit("get-cart")):s.$bus.$emit("message:push","喔歐~加入時發生錯誤!\n        ".concat(t.data.message,"(").concat(t.status,")"),"danger")})).catch((function(t){s.isLoading=!1,s.status.loadingBtn="",422===t.response.status?(s.$bus.$emit("message:push","閒置過久且該品項已在購物車中，請重新操作 ".concat(t.response.data.message,"(").concat(t.response.status,")"),"danger"),s.$emit("update")):s.$bus.$emit("message:push","喔歐~加入時發生錯誤!\n        ".concat(t.response.data.message,"(").concat(t.response.status,")"),"danger")}))},delFromCart:function(t){var a=this;this.isLoading=!0,this.status.loadingBtn=t;var s="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/ec/shopping/").concat(t);this.$http.delete(s).then((function(t){a.isLoading=!1,a.status.loadingBtn="",200===t.status?(a.$bus.$emit("message:push","已移除此項購物"),a.getCarts(),a.$emit("update"),a.$bus.$emit("get-cart"),console.log(a.carts.length),a.carts.length<=1&&window.$("#cartModalLong").modal("hide")):a.$bus.$emit("message:push","喔歐~移除時發生錯誤!\n        ".concat(t.data.message,"(").concat(t.status,")"),"danger")}))},removeCartsAll:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/ec/shopping/all/product");this.axios.delete(a).then((function(a){t.$bus.$emit("message:push","已清空購物車"),t.isLoading=!1,t.getCarts(),t.$emit("update"),t.$bus.$emit("get-cart"),window.$("#cartModalLong").modal("hide")}))},goCheckout:function(){window.$("#cartModalLong").modal("hide"),this.$router.push("/orders")}}},l=d,u=(s("8daf"),s("2877")),p=Object(u["a"])(l,o,r,!1,null,"542e48b2",null),m=p.exports,f={name:"Product",components:{Breadcrumb:n["a"],Carousel:c["a"],CartsModal:m},data:function(){return{isLoading:!1,tempProduct:{price:0,imageUrl:[],options:{}},msgStatus:{},cart:{},isNew:!0,tempQuantity:1,cartQuantity:0}},created:function(){var t=this,a=this.$route.params.id;this.getProduct(a),this.getCart(),this.$bus.$on("get-product-cart",(function(){t.getCart()}))},methods:{getProduct:function(t){var a=this;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/ec/product/").concat(t);this.$http.get(s).then((function(t){a.tempProduct=t.data.data,a.isLoading=!1}))},getCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/ec/shopping");this.$http.get(a).then((function(a){t.cart=a.data.data,t.isNew=!0,t.cart.length&&t.cart.forEach((function(a){a.product.id===t.tempProduct.id&&(t.tempQuantity=a.quantity,t.cartQuantity=a.quantity,t.isNew=!1)})),t.isLoading=!1}))},changeQuantity:function(t){this.tempQuantity=t},addToCart:function(){console.log(this.isNew),console.log(this.cart.length),this.tempQuantity===this.cartQuantity&&0!==this.cart.length||this.$refs.CartsModal.updateQuantity(this.tempProduct.id,this.tempQuantity),this.$refs.CartsModal.getCarts(),window.$("#cartModalLong").modal("show")},quantityUpdate:function(t,a){var s={product:t,quantity:a};console.log(s)}}},g=f,h=(s("a1bb"),Object(u["a"])(g,e,i,!1,null,"363cdc56",null));a["default"]=h.exports},d9f6:function(t,a,s){},ed5f:function(t,a,s){}}]);
//# sourceMappingURL=chunk-c3561e56.fae9edeb.js.map