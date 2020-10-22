<template>
  <div class="cart">
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
              <li class="breadcrumb-item active" aria-current="page">Carts</li>
            </ol>
          </nav>
        </div>
      </div>
     <div>
     </div>
      <div class="row">
        <div class="col">
          <h2>
            Your
            <strong>Carts</strong>
          </h2>
          <div class="table-responsive mt-3">
              <table class="table">
                  <thead></thead>
                  <tbody>
                      <TableRow v-for="cart in carts" :key="cart.id" :cart="cart"/>
                      <tr>
                          <td></td>
                          <td> <button type="submit" class="btn btn-danger float-right" v-if="carts.length > 0" @click.prevent="fakeCheckout">
                            <b-icon-cart></b-icon-cart>Checkout!
                            </button></td>
                          <td v-if="carts.length > 0"><strong>Total: Rp.{{new Intl.NumberFormat(['ban', 'id']).format(total)}}</strong></td>
                      </tr>
                  </tbody>
              </table>
          </div>
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-md-4">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TableRow from '../components/TableRow'
import Navbar from '../components/Navbar'
export default {
  name: 'Carts',
  data () {
    return {
      total: ''
    }
  },
  components: {
    Navbar,
    TableRow
  },
  computed: {
    carts: function () {
      return this.$store.state.carts
    }
  },
  methods: {
    getTotal () {
      const total = []
      const reducer = (accumulator, currentValue) => accumulator + currentValue
      for (let i = 0; i < this.carts.length; i++) {
        total.push(this.carts[i].price * this.carts[i].CustomerProduct.quantity)
      }
      this.total = total.reduce(reducer)
    },
    fakeCheckout () {
      this.$store.dispatch('fakeCheckout')
        .then(_ => {
          this.$router.push({ name: 'Home' })
          this.$swal({
            title: 'Your order in process',
            icon: 'success'
          })
        })
        .catch(err => {
          console.log(err)
          this.$swal({
            title: 'something wrong, please try again later',
            icon: 'error'
          })
        })
    }
  },
  watch: {
    carts: function () {
      this.getTotal()
    }
  }
}
</script>

<style>

</style>
