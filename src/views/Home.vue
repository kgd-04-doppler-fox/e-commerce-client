<template>
  <div class="home">
    <section id="home-page" class="container">
        <div class="row justify-content-center">
        <div>
            <h4 class="text-center">Our best products selection</h4>
            <div class="row">
            <ProductCard v-for="product in products"
            :key="product.id"
            :product="product"
            />
            </div>
        </div>
        </div>
    </section>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
export default {
  name: 'Home',
  components: {
    ProductCard
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style>
.row{
    display: flex;
    flex-flow: row;

/* perfect centering */
    justify-content: center;
    align-items: center;
    align-content: center;;
}
</style>
