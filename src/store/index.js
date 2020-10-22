import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: 1,
    products: [],
    images: [
      'https://www.gastankmagazine.com/assets/imagecache/contentDetail/style-point-penting-kenakan-selvedge-denim-.jpg',
      'https://embed.widencdn.net/img/redwing/c9j0zhejrq/645x330px/RWH_Web_HomePage_S1_Men_Desk_1935x990?crop=no',
      'https://embed.widencdn.net/img/redwing/kw3rpl5kr7/768px/RWH_Home_P2_OctSawmill_Desk_2271x1150?crop=no',
      'https://sourcingjournal.com/wp-content/uploads/2018/03/Amsterdamdenimdays.jpg',
      'https://carvedinblue.tencel.com/wp-content/uploads/2019/10/ADD_BLUEPRINT_APR17_0007.jpg'
    ],
    selectedProduct: {},
    amount: 0,
    isLogin: false,
    cartItems: [],
    subtotal: 0
  },
  mutations: {
    SET_STEP (state, value) {
      state.step = value
    },
    SET_PRODUCTS (state, data) {
      state.products = data
    },
    SET_SELECTED_PRODUCT (state, data) {
      state.selectedProduct = data
    },
    SET_IS_LOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_AMOUNT (state, value) {
      state.amount = value
    },
    ADD_AMOUNT (state, value) {
      state.amount += value
    },
    MIN_AMOUNT (state, value) {
      state.amount -= value
    },
    SET_CART_ITEMS (state, value) {
      state.cartItems = value
    },
    SET_SUBTOTAL (state, value) {
      state.subtotal = value
    }
  },
  actions: {
    changeStep (context, value) {
      context.commit('SET_STEP', value)
    },
    signup (context, payload) {
      return axios({
        url: 'https://frozen-inlet-96730.herokuapp.com/register',
        method: 'POST',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password
        }
      })
    },
    signin (context, payload) {
      return axios({
        url: 'https://frozen-inlet-96730.herokuapp.com/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchProducts (context) {
      axios({
        url: 'https://frozen-inlet-96730.herokuapp.com/products',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProductById (context, id) {
      axios({
        url: 'https://frozen-inlet-96730.herokuapp.com/products/' + id,
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('SET_SELECTED_PRODUCT', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    changeIsLogin (context, value) {
      context.commit('SET_IS_LOGIN', value)
    },
    addToCart (context, payload) {
      axios({
        url: 'https://frozen-inlet-96730.herokuapp.com/cart/' + payload.ProductId,
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          ProductId: payload.ProductId,
          amount: payload.amount,
          subtotal: (payload.amount * payload.price)
        }
      })
        .then(() => {
          console.log('success_add')
        })
        .catch(() => {
          console.log('failed add')
        })
    },
    fetchCart (context) {
      console.log('masuuk')
      axios({
        url: 'https://frozen-inlet-96730.herokuapp.com/cart',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_CART_ITEMS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editCartPlus (context, payload) {
      console.log(payload, 'dari edit cart <<<<<')
      return axios({
        url: 'https://frozen-inlet-96730.herokuapp.com/cart/' + payload.id + '?edit=plus',
        method: 'PATCH',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          price: payload.price
        }
      })
    },
    editCartMinus (context, payload) {
      return axios({
        url: 'https://frozen-inlet-96730.herokuapp.com/cart/' + payload.id + '?edit=minus',
        method: 'PATCH',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          price: payload.price
        }
      })
    },
    deleteCart (context, id) {
      axios({
        url: 'https://frozen-inlet-96730.herokuapp.com/cart/' + id,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    checkout (context, id) {
      return axios({
        url: 'https://frozen-inlet-96730.herokuapp.com/cart/checkout/' + id,
        method: 'PATCH',
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    buy (context, payload) {
      return axios({
        url: 'https://frozen-inlet-96730.herokuapp.com/products/buy/' + payload.ProductId,
        method: 'PATCH',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          amount: payload.amount,
          price: payload.price
        }
      })
    }
  }
})
