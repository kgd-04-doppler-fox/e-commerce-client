import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    user: false
  },
  mutations: {
    showAllData (state, payload) {
    // states dari yang atas, payload dapet dari yang dikirim dari fetch dibawah tuh
      state.products = payload
    },
    showAllDataCarts (state, payload) {
      // states dari yang atas, payload dapet dari yang dikirim dari fetch dibawah tuh
      state.carts = payload
    },
    hideNavbar (state, payload) {
      state.user = payload
    }
  },
  actions: {
    isLogin (context, payload) {
      context.commit('hideNavbar', payload)
    },
    fetchProduct (context) {
      axios({
        url: 'http://localhost:3000/products',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('showAllData', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      return axios({
        url: 'http://localhost:3000/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    register (context, payload) {
      return axios({
        url: 'http://localhost:3000/register',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchCarts (context) {
      axios({
        url: 'http://localhost:3000/carts',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('showAllDataCarts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editCart (context, payload) {
      const cartId = payload.id
      console.log(cartId)
      return axios({
        url: 'http://localhost:3000/carts/' + cartId,
        method: 'patch',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          quantity: payload.quantity
        }
      })
    },
    addCart (context, payload) {
      const productId = payload.id
      return axios({
        url: 'http://localhost:3000/carts/' + productId,
        method: 'post',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    deleteCart (context, payload) {
      const cartId = payload.id
      return axios({
        url: 'http://localhost:3000/carts/' + cartId,
        method: 'delete',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }
  }
})
// ngereturn axios butuh make router ( router.push ) pindah tempat tapi gabisa di store,jadi pindah .then ke vue
// gak return axios, biasanya yang ngambil data dari db
