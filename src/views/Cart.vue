<template>
    <table class="table table-striped">
    <thead>
        <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col" style="min-width: 100px">Action</th>
        </tr>
    </thead>
    <tbody>
      <CartRow v-for="cart in carts"
      :key="cart.id"
      :cart="cart"
      />
    </tbody>
  </table>
</template>

<script>
import CartRow from '../components/CartRow'
export default {
  name: 'Cart',
  components: {
    CartRow
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  created () {
    this.$store.dispatch('fetchCarts')
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('access_token')) {
      next()
    } else {
      next('/')
    }
  }
}
</script>

<style>

</style>
