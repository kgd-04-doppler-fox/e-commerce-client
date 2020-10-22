import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    laptops: [],
    laptop: {},
    carts: [],
    isLoggedIn: false
  },
  mutations: {
    setLaptops (state, payload) {
      state.laptops = payload
    },
    setLaptop (state, payload) {
      state.laptop = payload
    },
    setCarts (state, payload) {
      state.carts = payload
    },
    setIsLoggedIn (state, payload) {
      state.isLoggedIn = payload
    }
  },
  actions: {
    fetchLaptop (context) {
      axios({
        url: '/products',
        method: 'get'
      })
        .then(({ data }) => {
          context.commit('setLaptops', data.products)
        })
        .catch(err => {
          console.log(err)
        })
    },
    detailLaptop (context, payload) {
      axios({
        url: '/products/' + payload,
        method: 'get'
      })
        .then(({ data }) => {
          context.commit('setLaptop', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCart (context) {
      axios({
        url: '/carts',
        method: 'get',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('setCarts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      return axios({
        url: '/login',
        method: 'post',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    register (context, payload) {
      return axios({
        url: '/register',
        method: 'post',
        data: {
          name: payload.name,
          phone: payload.phone,
          email: payload.email,
          password: payload.password
        }
      })
    },
    addCart (context, payload) {
      return axios({
        url: '/carts/' + payload.id,
        method: 'post',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          quantity: payload.quantity
        }
      })
    },
    incrementCart (context, payload) {
      return axios({
        url: '/carts/' + payload.id,
        method: 'patch',
        data: {
          quantity: payload.quantity
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    removeCart (context, payload) {
      axios({
        url: '/carts/' + payload,
        method: 'delete',
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    searchProduct (context, payload) {
      return axios({
        url: '/search?q=' + payload,
        method: 'get'
      })
    },
    fakeCheckout (context) {
      return axios({
        url: '/carts',
        method: 'delete',
        headers: {
          token: localStorage.getItem('token')
        }
      })
    }
  },
  modules: {
  }
})
