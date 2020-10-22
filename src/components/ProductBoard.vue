<template>
  <v-row class="col-12 col-sm-8 col-md-10 mt-5" id="dashboardCard">
    <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
    />
  </v-row>
</template>

<script>
import ProductCard from './ProductsCard'
export default {
  name: 'ProductBoard',
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

<style scoped>
  #dashboardCard {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin:auto
  }
  #productBoard {
    margin-top: 3%;
  }
</style>
