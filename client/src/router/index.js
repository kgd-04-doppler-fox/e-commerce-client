import Vue from 'vue'
import VueRouter from 'vue-router' // udah dibawa dari vue cli karena milih router tadi pas install
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Mainpage from '../views/Mainpage.vue'
import Cart from '../views/Cart.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/mainpage',
    name: 'Mainpage',
    component: Mainpage
  },
  {
    path: '/carts',
    name: 'Cart',
    component: Cart
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
