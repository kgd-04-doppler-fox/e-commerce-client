import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import ProductDetail from '../views/ProductDetail.vue'
import Login from '../views/Login.vue'
import CartList from '../components/CartList.vue'
// import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cart/:UserId',
    name: 'CartList',
    component: CartList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
