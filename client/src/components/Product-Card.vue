<template>
<section>
    <div class="card text-center bg-white mb-3 ml-2 mr-2" style="min-height: 30vh;min-width: 20vh">
        <div class="card-body" style="padding:30px">
          <div  class="card-title">
            <h5>{{ product.name }}</h5>
          </div>
          <div style="padding:10px">
            <img :src="product.image_url" alt="" style="max-width: 200px; max-height: 200px;">
          </div>
          <div style="padding:1px">
            <h5>Price</h5>
            <p>Rp {{ product.price }}</p>
          </div>
          <div>
            <h5>Stock</h5>
            <p>{{ product.stock }}</p>
          </div>
          <div class="d-flex justify-content-around" style="padding:10px">
            <button class="btn btn-outline-primary btn-sm" @click.prevent="addToCart(product.id)">Add To Cart</button>
          </div>
        </div>
      </div>
</section>

</template>

<script>

export default {
  name: 'Product-Card',
  props: ['product'],
  methods: {
    addToCart (id) {
      if (!localStorage.getItem('access_token')) {
        this.$router.push('/login')
      } else {
        const payload = {
          id: id
        }
        this.$store.dispatch('addCart', payload)
          .then(({ data }) => {
            console.log(data)
            this.$router.push('/carts')
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<style>

</style>
