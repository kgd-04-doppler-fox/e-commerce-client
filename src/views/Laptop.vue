<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Search .."
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <b-icon-search></b-icon-search>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="laptop in searchLaptop || laptops" :key="laptop.id">
          <CardProduct :laptop="laptop" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import CardProduct from '../components/CardProduct'
export default {
  name: 'Laptop',
  data () {
    return {
      search: '',
      searchLaptop: ''
    }
  },
  components: {
    Navbar,
    CardProduct
  },
  computed: {
    laptops: function () {
      return this.$store.state.laptops
    }
  },
  created () {
    this.$store.dispatch('fetchLaptop')
  },
  methods: {
    searchProduct () {
      this.$store.dispatch('searchProduct', this.search)
        .then(({ data }) => {
          this.searchLaptop = data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  watch: {
    search: function () {
      this.searchProduct()
    }
  }
}
</script>

<style>

</style>
