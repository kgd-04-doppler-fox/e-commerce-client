<template>
  <div class="col-md-7" id="cart">
      <CardRow
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    <v-btn class="mt-3" @click="continueShooping">Continue Shooping</v-btn>
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
    margin-top: 7% !important;
    margin: auto;
  }
</style>
