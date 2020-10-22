<template>
  <div class="container">
    <Carousel></Carousel>
    <ProductList :products="allProduct"></ProductList>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import ProductList from '../components/ProductList.vue'
export default {
  name: 'Home',
  components: {
    Carousel,
    ProductList
  },
  created () {
    this.$store.dispatch('fetchAllProduct')
  },
  computed: {
    allProduct () {
      return this.$store.state.allProduct
    }
  }
}
</script>
