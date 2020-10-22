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
    setLoggedIn (state, payload) {
      state.isLoggedIn = payload.isLoggedIn
    },
    setErrMsg (state, payload) {
      state.errMsg = payload
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
          context.commit('setLoggedIn', { isLoggedIn: true })
          localStorage.setItem('token', data.token)
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
      server({
        method: 'POST',
        url: `/customerProduct/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(() => {
          router.push('/cart')
        })
        .catch(err => {
          console.log(err)
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
    },
    setCartItem (context, payload) {
      server({
        method: 'PATCH',
        url: `/customerProduct/${payload.ProductId}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          quantity: payload.value
        }
      })
        .then(() => {
          console.log('cart updated')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCart (context, payload) {
      server({
        method: 'DELETE',
        url: `/cart/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(() => {
          console.log(`cart dgn id ${payload} di hapus`)
          router.push('/cart')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
