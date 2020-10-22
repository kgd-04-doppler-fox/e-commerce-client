<template>
  <div>
    <Caroussel />
    <ProductBoard />
  </div>
</template>

<script>
import ProductBoard from '../components/ProductBoard'
import Caroussel from '../components/Carousel'
export default {
  name: 'Dashboard',
  data: () => ({
    Category: ['Top', 'Bottom']
  }),
  components: {
    ProductBoard,
    Caroussel
  }
}
</script>

<style scoped>
</style>
