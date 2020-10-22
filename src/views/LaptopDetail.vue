<template>
  <div class="laptop-detail">
    <Navbar />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/laptop" class="text-dark">laptop</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">laptop order</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <img :src="laptop.image_url" class="img-fluid shadow" />
          <small> {{laptop.description}} </small>
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{laptop.name}}</strong>
          </h2>
          <hr />
          <h4>
            Price :
            <strong>Rp. {{formatRupiah(laptop.price)}}</strong>
          </h4>
          <small style="color: red;">stock: {{laptop.stock}} </small>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <h5 style="color: red;"> {{warning}} </h5>
              <label for="jumlah_pemesanan">Amount</label>
              <input type="number" class="form-control form-sm" v-model="amount" />
            </div>
            <h5> Total Rp.{{formatRupiah(laptop.price * amount)}} </h5>
            <button type="submit" class="btn btn-success" @click.prevent="addCart">
              <b-icon-cart></b-icon-cart>+ Cart
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'LaptopDetail',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: '',
      description: '',
      amount: 1,
      warning: '',
      total: ''
    }
  },
  components: {
    Navbar
  },
  created () {
    this.$store.dispatch('detailLaptop', this.$route.params.id)
  },
  computed: {
    laptop: function () {
      return this.$store.state.laptop
    },
    laptops: function () {
      return this.$store.state.laptops
    },
    carts: function () {
      return this.$store.state.carts
    }
  },
  watch: {
    laptop: function () {
      this.name = this.laptop.name
      this.image_url = this.laptop.image_url
      this.price = this.laptop.price * this.amount
      this.stock = this.laptop.stock
      this.description = this.laptop.description
    },
    amount: function () {
      if (this.amount < 1) {
        this.warning = 'min. 1 pcs'
        this.amount = 1
      } else {
        if (this.amount >= this.stock) {
          this.warning = `max.order ${this.stock - 1}`
          this.amount = this.stock
        } else {
          this.warning = ''
          this.total = this.price * this.amount
        }
      }
    }
  },
  methods: {
    formatRupiah (number) {
      return new Intl.NumberFormat(['ban', 'id']).format(number)
    },
    addCart () {
      const id = this.laptop.id
      const quantity = this.amount
      const found = this.carts.find(el => el.id === id)
      if (found) {
        this.$store.dispatch('incrementCart', { id, quantity })
          .then(({ data }) => {
            this.$swal({
              icon: 'success',
              title: 'check your cart'
            })
            this.$router.back()
          })
          .catch(err => {
            this.$swal({
              icon: 'error',
              title: 'something wrong, please try again later'
            })
            console.log(err)
          })
      } else {
        this.$store.dispatch('addCart', { id, quantity })
          .then(data => {
            this.$swal({
              icon: 'success',
              title: 'check your cart'
            })
            this.$router.back()
          })
          .catch(err => {
            console.log(err)
            this.$swal({
              icon: 'error',
              title: 'something wrong, please try again later'
            })
          })
      }
    }
  }
}
</script>

<style>

</style>
