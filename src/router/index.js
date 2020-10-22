import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ProductCart from '../views/Cart.vue'
import HistoryCart from '../views/HistoryCart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/product-detail/:id',
    name: 'Product Detail',
    component: ProductDetail
  },
  {
    path: '/product-cart',
    name: 'Product Cart',
    component: ProductCart
  },
  {
    path: '/history-cart',
    name: 'History Cart',
    component: HistoryCart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
