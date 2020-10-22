<template>
  <v-carousel
    cycle
    height="250"
    hide-delimiter-background
    show-arrows-on-hover
    id="carousel"
  >
    <v-carousel-item
      v-for="(product,i) in products"
      :key="i"
      :src="product"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'Caroussel',
  computed: {
    products () {
      return this.$store.state.images
    }
  }
}
</script>

<style scoped>
  #carousel {
    margin-top: 4.7%;
  }
</style>
