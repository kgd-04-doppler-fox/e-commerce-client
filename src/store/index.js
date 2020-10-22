import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    loggedIn: false,
    error: [],
    carts: [],
    histories: []
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_LOGIN (state, payload) {
      state.loggedIn = payload.loggedIn
    },
    SET_ERROR (state, payload) {
      state.error = payload
    },
    SET_CARTS (state, payload) {
      state.carts = payload
    },
    SET_HISTORIES (state, payload) {
      state.histories = payload
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        method: 'POST',
        url: 'https://fierce-hollows-88977.herokuapp.com/users/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: 'https://fierce-hollows-88977.herokuapp.com/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data.product)
        })
        .catch(err => {
          context.commit('SET_ERROR', err)
        })
    },
    fetchCarts (context) {
      axios({
        method: 'GET',
        url: 'https://fierce-hollows-88977.herokuapp.com/carts',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_CARTS', data.cart)
        })
        .catch(err => {
          context.commit('SET_ERROR', err)
        })
    },
    getHistories (context) {
      axios({
        method: 'GET',
        url: 'https://fierce-hollows-88977.herokuapp.com/carts/history',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data.cart)
          context.commit('SET_HISTORIES', data.cart)
        })
        .catch(err => {
          context.commit('SET_ERROR', err)
        })
    }
  }
})
