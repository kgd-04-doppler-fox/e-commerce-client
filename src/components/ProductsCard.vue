<template>
    <v-col cols="12" sm="8" md="2" class="text-center">
        <v-card height="100%" @click="productDetail(product.id)">
        <v-img :src="product.imageUrl" aspect-ratio="1"></v-img>
        <h3 style="font-size: 1rem; margin-top: 20%; margin-bottom: -10%">{{product.name}}</h3>
        <v-card-text style="font-size: 0.5rem">{{product.description}}</v-card-text>
        <v-card-subtitle style="font-size: 1rem; text-align:center">{{getPrice()}}</v-card-subtitle>
        <v-divider class="mx-4"></v-divider>
        <v-card-text class="mx-auto">Stock: {{product.stock}}</v-card-text>
        </v-card>
    </v-col>
</template>

<script>
import formatPrice from '../helpers/formatPrice'
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    productDetail (id) {
      this.$router.push('/product-detail/' + id)
    },
    getPrice () {
      return formatPrice(this.product.price)
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
