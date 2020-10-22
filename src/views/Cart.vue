<template>
  <div class="col-md-7" id="cart">
    <div style="margin-top: 20%">
      <CardRow
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    <v-btn class="mt-3" @click="continueShooping">Continue Shooping</v-btn>
    <v-btn class="mt-3 ml-3"><router-link to="/history-cart" id="history_cart_btn">History Cart</router-link></v-btn>
    </div>
  </div>
</template>

<script>
import CardRow from '../components/CardRow'
export default {
  name: 'Cart',
  components: {
    CardRow
  },
  computed: {
    products () {
      return this.$store.state.cartItems
    }
  },
  methods: {
    continueShooping () {
      this.$router.push('/')
    }
  },
  created () {
    this.$store.dispatch('fetchCart')
  }
}
</script>

<style scoped>
  #cart {
    margin: auto;
  }
  #history_cart_btn {
    text-decoration: none !important;
    color: black
  }
</style>
