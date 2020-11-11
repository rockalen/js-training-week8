import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: '首頁',
        component: () => import('../views/Index.vue'),
        meta: {
          breadcrumb: [{
            name: '首頁'
          }]
        }
      },
      {
        path: '/products',
        name: '產品列表',
        component: () => import('../views/Products.vue'),
        meta: {
          breadcrumb: [{
            name: '首頁',
            link: '/'
          },
          {
            name: '慢慢手做'
          }]
        }
      },
      {
        // 記得動態ID
        path: '/product/:id',
        name: '產品詳細頁',
        component: () => import('../views/Product.vue'),
        meta: {
          breadcrumb: [{
            name: '首頁',
            link: '/'
          },
          {
            name: '慢慢手做',
            link: '/products'
          },
          {
            name: '產品說明'
          }]
        }
      },
      {
        path: '/orders',
        name: '購物車',
        component: () => import('../views/Orders.vue'),
        meta: {
          breadcrumb: [{
            name: '首頁',
            link: 'home'
          },
          {
            name: '購物車'
          }]
        }
      },
      {
        path: '/checkout',
        name: '購物完成',
        component: () => import('../views/Checkout.vue')
      },
      {
        path: '/about',
        name: '手做理念',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          breadcrumb: [{
            name: '首頁',
            link: '/'
          },
          {
            name: '手做理念'
          }]
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/admin/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: '產品列表',
        component: () => import('../views/admin/Products.vue')
      },
      {
        path: 'orders',
        name: '訂單列表',
        component: () => import('../views/admin/Orders.vue')
      },
      {
        path: 'coupons',
        name: '優惠卷列表',
        component: () => import('../views/admin/Coupons.vue')
      },
      {
        path: 'imgCloud',
        name: '圖庫列表',
        component: () => import('../views/admin/imgCloud.vue')
      },
      {
        path: 'customerOrders',
        name: '模擬訂單',
        component: () => import('../views/admin/CustomerOrders.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
