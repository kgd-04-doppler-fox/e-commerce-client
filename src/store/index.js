import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    header: '',
    products: [],
    cartProducts: [],
    notification: {
      show: false,
      msg: ''
    }
  },
  mutations: {
    SET_DATA_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_ACCESS_TOKEN (state, payload) {
      state.access_token = payload
    },
    SET_CART_DATA (state, payload) {
      state.cartProducts = payload
    },
    SET_NOTIFICATION (state, payload) {
      state.notification = payload
    }
  },
  actions: {
    fetchProducts (context) {
      axios({
        url: 'http://localhost:3000/products',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_DATA_PRODUCTS', data.products)
        })
        .catch(err => {
          console.log(err)
        })
    },
    register (context, payload) {
      axios({
        url: 'http://localhost:3000/register',
        method: 'post',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password
        }
      })
        .then(_ => {
          context.commit('SET_NOTIFICATION')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCart (context) {
      axios({
        url: 'http://localhost:3000/cart',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_CART_DATA', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart (context, payload) {
      axios({
        url: `http://localhost:3000/cart/${payload}`,
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          amount: 1
        }
      })
        .then(_ => {
          context.commit('SET_NOTIFICATION', {
            msg: 'item added to cart',
            show: true
          })
          setTimeout(() => {
            context.commit('SET_NOTIFICATION', { message: '', show: false })
          }, 2000)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteItem (context, payload) {
      axios({
        url: `http://localhost:3000/cart/${payload}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(_ => {
          context.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    setAmount (context, payload) {
      axios({
        url: `http://localhost:3000/cart/${payload.id}`,
        method: 'PATCH',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          amount: payload.updatedAmount
        }
      })
        .then(_ => {
          context.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
