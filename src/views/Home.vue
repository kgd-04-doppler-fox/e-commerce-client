<template>
  <div class="home">
  <Navbar></Navbar>
  <div v-if="notification.show"><h2 class="text-center">{{ notification.msg }}</h2></div>
  <h1 class="text-center"></h1>
    <Product
      :products="products"
    ></Product>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from '../components/Product'
import Navbar from '../components/Navbar'
export default {
  name: 'Home',
  components: {
    Product,
    Navbar
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    notification () {
      return this.$store.state.notification
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>
