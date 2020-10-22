<template>
    <section>
        <div class="text-center">
            <table class="table table-borderless">
            <thead>
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                    <th scope="col">Update Quantity</th>
                </tr>
            </thead>
            <CartCard
            v-for="cart in carts"
            :key="cart.id"
            :cart="cart"
            ></CartCard>
            </table>
        </div>
    </section>
</template>

<script>
import CartCard from '../components/Cart-Card.vue'
export default {
  name: 'Cart',
  components: {
    CartCard
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.dispatch('fetchCarts')
    } else {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
