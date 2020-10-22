<template>
  <tr>
    <td>{{ cart.Product.name }}</td>
    <td>{{ itemPrice }}</td>
    <td>{{ cart.amount }}</td>
    <td>{{ subtotalPrice }}</td>
    <td>{{ statusCart }}</td>
  </tr>
</template>

<script>
import statusCart from '../helpers/statusCart'
import formatPrice from '../helpers/formatPrice'
export default {
  name: 'HistoryRow',
  props: ['cart', 'i'],
  computed: {
    statusCart () {
      return statusCart(this.cart.isPaid)
    },
    subtotalPrice () {
      return formatPrice(this.cart.subtotal)
    },
    itemPrice () {
      return formatPrice(this.cart.Product.price)
    }
  }
}
</script>

<style>

</style>
