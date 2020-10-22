import Vue from 'vue'
import Vuex from 'vuex'
import server from '../config/axios.js'
import router from '../router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errMsg: '',
    isLoggedIn: false,
    allProduct: [],
    product: {},
    cart: []
  },
  mutations: {
    setErrMsg (state, payload) {
      state.errMsg = payload
    },
    setLoggedIn (state, payload) {
      state.isLoggedIn = payload.loggedIn
    },
    setAllProduct (state, payload) {
      state.allProduct = payload
    },
    setProduct (state, payload) {
      state.product = payload
    },
    setCart (state, payload) {
      state.cart = payload
    }
  },
  actions: {
    fetchAllProduct (context, payload) {
      server({
        method: 'GET',
        url: '/products'
      })
        .then(({ data }) => {
          context.commit('setAllProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      server({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('token', data.token)
          context.commit('setLoggedIn', { loggedIn: true })
          router.push('/')
        })
        .catch(err => {
          context.commit('setErrMsg', err.response.data.msg)
        })
    },
    register (context, payload) {
      server({
        method: 'POST',
        url: '/register',
        data: {
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          password: payload.password,
          phoneNumber: payload.phoneNumber,
          deliveryAddress: payload.deliveryAddress
        }
      })
        .then(() => {
          router.push('/login')
        })
        .catch(err => {
          context.commit('setErrMsg', err.response.data.msg)
        })
    },
    selectedProduct (context, payload) {
      server({
        method: 'GET',
        url: `/products/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('setProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart (context, payload) {
      return server({
        method: 'POST',
        url: `/products/add/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    showCart (context, payload) {
      server({
        method: 'GET',
        url: '/cart',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('setCart', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
