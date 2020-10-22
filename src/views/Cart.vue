<template>
  <div>
    <Navbar></Navbar>
      <div>
        <h4>{{ notification.msg }}</h4>
      </div>
    <div class="px-4 px-lg-0">
    <div class="pb-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
            <div class="table-responsive">
              <table class="table">
                <thead class="bg-dark">
                  <tr>
                    <th scope="col" class="border-0 bg-light">
                      <div class="p-2 px-3 text-uppercase">Product</div>
                    </th>
                    <th scope="col" class="border-0 bg-light">
                      <div class="py-2 text-uppercase">Amount</div>
                    </th>
                    <th scope="col" class="border-0 bg-light">
                      <div class="py-2 text-uppercase">Price</div>
                    </th>
                    <th scope="col" class="border-0 bg-light">
                      <div class="py-2 text-uppercase">Remove</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <CartList
                    v-for="cartProduct in cartProducts"
                    :key="cartProduct.id"
                    :cartProduct="cartProduct"
                  ></CartList>
                    <tr>
                    <th scope="row" class="border-0">
                      <div class="p-2">
                        <div class="ml-3 d-inline-block align-middle">
                          <h3>TOTAL</h3>
                        </div>
                      </div>
                    </th>
                    <td class="border-0 align-middle ml-9 mr-auto text-center"><strong>{{ getTotalAmount }}</strong></td>
                    <td class="border-0 align-middle"><strong>Rp.{{ getTotalPrice }}</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import CartList from '../components/CartList'
export default {
  name: 'Cart',
  computed: {
    notification () {
      return this.$store.state.notification
    },
    cartProducts () {
      return this.$store.state.cartProducts
    },
    getTotalAmount () {
      let total = 0
      this.$store.state.cartProducts.forEach((el) => {
        total += el.amount
      })
      return total
    },
    getTotalPrice () {
      let totalPrice = 0
      this.$store.state.cartProducts.forEach((el) => {
        totalPrice += el.amount * el.Product.price
      })
      return totalPrice
    }
  },
  components: {
    Navbar,
    CartList
  },
  created () {
    this.$store.dispatch('fetchCart')
  }
}
</script>

<style>

</style>
