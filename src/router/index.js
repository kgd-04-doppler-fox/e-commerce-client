import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Laptop from '../views/Laptop.vue'
import LaptopDetail from '../views/LaptopDetail.vue'
import Carts from '../views/Carts.vue'

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
    component: Login,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('token')) {
        next()
      } else {
        next({ name: 'Home' })
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('token')) {
        next()
      } else {
        next({ name: 'Home' })
      }
    }
  },
  {
    path: '/laptop',
    name: 'Laptop',
    component: Laptop
  },
  {
    path: '/laptop/:id',
    name: 'LaptopDetail',
    component: LaptopDetail,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next({ name: 'Login' })
      }
    }
  },
  {
    path: '/carts',
    name: 'Carts',
    component: Carts,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next({ name: 'Login' })
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
