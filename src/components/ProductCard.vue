<template>
  <b-row>
      <li class="card col-10" style="width: 18rem;">
        <img :src="product.img_url"
        class="mr-3 rounded product:hover"
        alt="cover"
        width="100%">
        <div class="media-body p-1">
        <div class="text-left">
            <h5 class="mt-0 mb-0 text-pink">{{product.name}}</h5>
        </div>
        <div class="text-left mt-2">
            <p class="text-muted">{{product.description}}</p>
            <p class="text-muted">Stock: {{product.stock}}</p>
            <p class="text-muted">USD {{product.price}}</p>
            <button class="mt-2 btn btn-pink float-right p-2 rounded text-light shadow"
            style="font-size:10px"
            @click.prevent="addCart(product.id)"
            >Add To Cart</button>
        </div>
        <div v-if="error" class="container text-center">
        <p class="text-danger" id="error">{{error}}</p>
        </div>
        </div>
      </li>
  </b-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ProductCard',
  props: ['product'],
  data () {
    return {
      error: ''
    }
  },
  computed: {
    SET_ERROR () {
      return this.$store.state.error
    }
  },
  watch: {
    SET_ERROR () {
      this.error = this.SET_ERROR
    }
  },
  methods: {
    addCart (id) {
      axios({
        method: 'POST',
        url: `https://fierce-hollows-88977.herokuapp.com/carts/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          this.$router.push('/cart')
        })
        .catch(err => {
          console.log(err)
          this.$store.commit('SET_ERROR', err.response.data.err.name)
        })
    }
  }
}
</script>

<style>

</style>
