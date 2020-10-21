<template>
  <div class="container">
    <Carousel></Carousel>
    <ProductList></ProductList>
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
  }
}
</script>
