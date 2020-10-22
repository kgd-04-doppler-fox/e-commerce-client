<template>
    <v-col cols="12" sm="8" md="2">
        <v-card height="100%" @click="productDetail(product.id)">
        <v-img :src="product.imageUrl" aspect-ratio="1"></v-img>
        <v-card-title style="font-size: 0.5rem">{{product.name}}</v-card-title>
        <v-card-subtitle style="font-size: 0.5rem">{{product.description}}</v-card-subtitle>
        <v-card-subtitle style="font-size: 1rem; text-align:center">Rp {{getPrice(product.price)}}</v-card-subtitle>
        <v-divider class="mx-4"></v-divider>
        <v-card-text class="mx-auto">Stock: {{product.stock}}</v-card-text>
        </v-card>
    </v-col>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    productDetail (id) {
      this.$router.push('/product-detail/' + id)
    },
    getPrice (price) {
      this.$store.dispatch('getPrice', price)
      return this.$store.state.subtotal
    }
  }
}
</script>

<style scoped>
  * {
    font-family: 'Noto Sans TC', sans-serif;
  }
  #title {
    font-size: 70%;
    text-align: center;
  }
  #description {
    font-size: 70%;
    text-align: center;
  }
</style>
