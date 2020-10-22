<template>
  <section>
    <h1 class="text-center my-5">Our Products</h1>
      <div class="product-container row">
        <Product
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
  </section>
</template>

<script>
import Product from './Product.vue'
export default {
  name: 'ProductList',
  props: ['products'],
  components: {
    Product
  }
}
</script>

<style scoped>
section {
  min-height: 100vh;
}

.product-container {
  display: flex;
  justify-content: space-evenly;
}
</style>
