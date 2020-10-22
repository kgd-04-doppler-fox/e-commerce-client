import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: 1,
    products: [],
    images: [
      'https://dkpzhs366ovzp.cloudfront.net/media_root/filer_public_thumbnails/filer_public/2019/10/15/2019-banner-clearance-sale-mobile.jpg__600x800_q85_subsampling-2.jpg',
      'https://dxclnrbvyw82b.cloudfront.net/images/di/upload/20191125/43907d2c-6a57-4726-bb62-552008a6e9e1/30/DsCTCTECLandingPage%20(5).jpg'
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
        url: 'http://localhost:3000/register',
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
        url: 'http://localhost:3000/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchProducts (context) {
      axios({
        url: 'http://localhost:3000/products',
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
        url: 'http://localhost:3000/products/' + id,
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
    addAmount (context) {
      context.commit('ADD_AMOUNT', 1)
    },
    minusAmount (context) {
      context.commit('MIN_AMOUNT', 1)
    },
    addToCart (context, payload) {
      axios({
        url: 'http://localhost:3000/cart/' + payload.ProductId,
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
      axios({
        url: 'http://localhost:3000/cart',
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
      return axios({
        url: 'http://localhost:3000/cart/' + payload.id + '?edit=plus',
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
        url: 'http://localhost:3000/cart/' + payload.id + '?edit=minus',
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
        url: 'http://localhost:3000/cart/' + id,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    getPrice (context, price) {
      const stringPrice = String(price)
      let formatedPrice = ''
      for (let i = 0; i < stringPrice.length; i++) {
        if (stringPrice.length < 3) {
          if (i === 0) {
            formatedPrice += stringPrice[i] + '.'
          } else {
            formatedPrice += stringPrice[i]
          }
        } else if (stringPrice.length === 5) {
          if (i === 1) {
            formatedPrice += stringPrice[i] + '.'
          } else {
            formatedPrice += stringPrice[i]
          }
        } else if (stringPrice.length === 6) {
          if (i === 2) {
            formatedPrice += stringPrice[i] + '.'
          } else {
            formatedPrice += stringPrice[i]
          }
        } else if (stringPrice.length === 7) {
          if (i === 0 || i === 3) {
            formatedPrice += stringPrice[i] + '.'
          } else {
            formatedPrice += stringPrice[i]
          }
        } else if (stringPrice.length === 8) {
          if (i === 1 || i === 4) {
            formatedPrice += stringPrice[i] + '.'
          } else {
            formatedPrice += stringPrice[i]
          }
        } else if (stringPrice.length === 8) {
          if (i === 2 || i === 5) {
            formatedPrice += stringPrice[i] + '.'
          } else {
            formatedPrice += stringPrice[i]
          }
        }
      }
      context.commit('SET_SUBTOTAL', formatedPrice)
    },
    checkout (context, id) {
      return axios({
        url: 'http://localhost:3000/cart/checkout/' + id,
        method: 'PATCH',
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    buy (context, payload) {
      return axios({
        url: 'http://localhost:3000/products/buy/' + payload.ProductId,
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
