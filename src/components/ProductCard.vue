<template>
  <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 mt-4">
    <div class="card rounded shadow-lg border-0 d-flex h-100">
      <div class="card-body d-flex flex-column p-4"><img
        :src="product.image_url" alt=""
        class="img-fluid d-flex mx-3 mb-3">
        <p class="text-dark text-sm mt-auto text-bold text-fluid font-weight-bold">{{ product.name }}</p>
        <p class="small text-muted mt-auto">stock: {{ product.stock }}</p>
        <p class="small text-muted mt-auto">category: {{ product.category }}</p>
        <p class="mb-3">Rp {{ product.price }}</p>
        <button @click="addToCart" class="btn btn-outline-light text-white mt-auto bg-dark">add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    addToCart () {
      const productId = this.product.id
      this.$store.dispatch('addToCart', productId)
    }
  }
}
</script>

<style scoped>
.img-fluid {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}
.card-body {
  max-height: 100%;
}
</style>
