<template>
  <div class="container">
  <h1 class="text-center">All Product</h1>
    <div class="row pb-4 mb-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      >
      </ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard'
export default {
  name: 'Product',
  props: ['products'],
  components: {
    ProductCard
  }
}
</script>

<style>

</style>
