<template>
  <section class="content2">
      <CartEvents v-for="cart in cart" :key="cart.id" :cart="cart"/>
    </section>
</template>

<script>
import CartEvents from '../components/CartEvents.vue'

export default {
  name: 'Cart',
  components: {
    CartEvents
  },
  computed: {
    cart () {
      return this.$store.state.carts
    }
  },
  created () {
    this.$store.dispatch('fetchCart')
  }
}
</script>

<style>
  .content2 {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 100px;
    margin-left: 100px;
    margin-bottom: 100px;
    flex-flow: row wrap;
    position: relative;
  }
</style>
