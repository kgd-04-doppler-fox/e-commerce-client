<template>
    <section>
      <div class="text-center" style="padding:40px">
        <h1>Products</h1>
      </div>
      <div class="row d-flex justify-content-center">
            <!-- komponen panel di sini  -->
      <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      ></ProductCard>
    </div>
</section>
</template>

<script>
import ProductCard from '../components/Product-Card.vue'

export default {
  name: 'Mainpage',
  components: {
    ProductCard
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProduct')
  }
}
</script>

<style>

</style>
