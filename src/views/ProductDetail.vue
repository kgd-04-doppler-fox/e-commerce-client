<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 mb-4 mb-md-0">
          <div class="row mx-1">
            <div class="col-12 mb-0">
              <figure>
                <img :src="product.imageUrl"
                  class="img-fluid z-depth-1">
              </figure>
            </div>
          </div>
      </div>
      <div class="col-md-6">
        <h2>{{ product.name }}</h2>
        <h4 class="mb-2 text-muted text-uppercase small">{{ product.category }}</h4>
        <h5 class="mb-3"><span class="mr-1"><strong>Rp. {{ product.price }}</strong></span></h5>
        <h4 class="mb-2 text-muted text-uppercase small">Stock left: {{ product.stock }}</h4>
        <p class="pt-1">Dummy product description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit
          error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio,
          officia quis dolore quos sapiente tempore alias.</p>
        <button type="button" @click.prevent="back" class="btn btn-primary btn-md mr-1 mb-2">Back</button>
        <button type="button" @click.prevent="addToCart(product.id)" class="btn btn-outline-primary btn-md mr-1 mb-2"><i
          class="fas fa-shopping-cart pr-2"></i>Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  methods: {
    getDataById () {
      const id = this.$route.params.ProductId
      this.$store.dispatch('selectedProduct', id)
    },
    addToCart (id) {
      this.$store.dispatch('addToCart', id)
        .then(() => {
          console.log(`product dgn id ${this.product.id} berhasil ditambah`)
          this.$router.push('/cart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    back () {
      this.$router.push('/')
    }
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  created () {
    this.getDataById()
  }
}
</script>

<style>

</style>
