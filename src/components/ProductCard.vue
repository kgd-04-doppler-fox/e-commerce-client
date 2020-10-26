<template>
      <li class="card col-12 col-sm-8 col-md-6 col-lg-4" style="width: 18rem">
        <img :src="product.img_url"
        class="card-img-top img-fluid d-block mx-auto mb-3"
        alt="cover"
        >
        <div class="card-body">
          <h4 class="card-title">{{product.name}}</h4>
          <h6 class="card-subtitle mb-2 text-muted">Stock {{product.stock}}</h6>
          <p class="card-text">{{product.description}}</p>
          <div v-if="error" class="container text-center">
          <p class="text-danger" id="error">{{error}}</p>
          </div>
        </div>
        <div class="buy d-flex justify-content-between align-items-center">
          <div class="price text-success">
            <h5 class="mt-4">
            USD {{product.price}}
            </h5>
          </div>
              <a class="btn btn-danger"
              @click.prevent="addCart(product.id)"
              >
              <i class="fas fa-shopping-cart"></i>
              Add To Cart</a>
        </div>
      </li>
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
          this.$swal(err.response.data.msg)
        })
    }
  }
}
</script>

<style>
body {
    min-height: 100vh;
    background: #fafafa;
}
.card-img-top {
    width: 100%;
    height: 10vw;
    object-fit: cover;
}
</style>
