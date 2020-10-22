<template>
  <div id="transactionBar-container">
  <v-toolbar id="transactionbar"  color="#1A237E">
    <v-spacer></v-spacer>
    <v-btn color="#8C9EFF" fab small prepend-icon="shoping" id="cart" @click="addCart">
      <span class="material-icons">local_grocery_store</span>
    </v-btn>
    <v-btn color="#8C9EFF" id="cart" @click.prevent="buy">
    <span >Buy</span>
    </v-btn>
  </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'TransactionBar',
  methods: {
    addCart () {
      const amount = this.$store.state.amount
      const payload = this.$store.state.selectedProduct
      const product = {
        ProductId: payload.id,
        price: payload.price,
        amount: amount
      }
      if (localStorage.getItem('access_token')) {
        if (amount !== 0) {
          this.$store.dispatch('addToCart', product)
          this.$store.commit('SET_AMOUNT', 0)
          this.$store.dispatch('fetchCart')
        }
      } else {
        this.$router.push({ name: 'Login' })
      }
    },
    buy () {
      const amount = this.$store.state.amount
      const payload = this.$store.state.selectedProduct
      const product = {
        ProductId: payload.id,
        amount: amount,
        price: payload.price
      }
      if (localStorage.getItem('access_token')) {
        if (amount !== 0) {
          this.$store.dispatch('buy', product)
          this.$store.commit('SET_AMOUNT', 0)
          this.$store.dispatch('fetchProducts')
          this.$router.push('/')
        }
      } else {
        this.$router.push({ name: 'Login' })
      }
    }
  }
}
</script>

<style scoped>
  #transactionBar-container {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 72px;
    padding: 8px 0px;
  }
  #cart {
    margin-right: 2% !important;
    color: white;
    font-family: 'Nunito', sans-serif;
  }
</style>
