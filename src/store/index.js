import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    products: [],
    productsCategory: [],
    product: {},
    carts: []
  },
  mutations: {
    SET_LOGGED_IN (state, payload) {
      state.loggedIn = payload.loggedIn
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_PRODUCTSCATEGORY (state, payload) {
      state.productsCategory = payload
    },
    SET_PRODUCT (state, payload) {
      state.product = payload
    },
    SET_CARTS (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          context.commit('SET_LOGGED_IN', {
            loggedIn: true
          })
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    register (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/register',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          router.push('/login')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProduct (context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products'
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProductCategory (context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products-category',
        data: {
          category: payload.category
        }
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTSCATEGORY', data)
        })
        .catch(err => {
          console.log(payload)
          console.log(err)
        })
    },
    fetchProductById (context, payload) {
      axios({
        method: 'GET',
        url: `http://localhost:3000/products/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCT', data)
        })
        .catch(err => {
          console.log(err)
          if (err.response.status === 404) {
            this.$router.push({ name: 'NotFound' })
          }
        })
    },
    addChart (context, payload) {
      axios({
        method: 'POST',
        url: `http://localhost:3000/carts/${payload.id}`,
        data: {
          ammount: payload.ammount
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCart (context, payload) {
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/carts/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    fetchCart (context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/carts',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_CARTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkout (context, payload) {
      axios({
        method: 'PATCH',
        url: `http://localhost:3000/carts/${payload.id}`,
        data: {
          ammount: payload.ammount
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }
  }
})
