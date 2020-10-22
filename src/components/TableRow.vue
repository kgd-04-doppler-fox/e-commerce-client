<template>
  <tr>
    <td><img id="img-tr" :src="cart.image_url" :alt="cart.name"></td>
    <td>
        <strong>{{ cart.name }}</strong>
        : <div>{{cart.description}}</div>
    </td>
    <td>
        <div class="mb-2"> {{cart.CustomerProduct.quantity}} x {{new Intl.NumberFormat(['ban', 'id']).format(cart.price)}} </div>
        <div>--------</div>
        <div> <a href="#" @click.prevent="removeCart(cart.id)"><b-icon-trash></b-icon-trash></a></div>
    </td>
 </tr>
</template>

<script>
export default {
  name: 'TableRow',
  props: ['cart'],
  methods: {
    removeCart (id) {
      this.$store.dispatch('removeCart', id)
        .then(() => {
          this.$store.dispatch('fetchCart')
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
  data () {
    return {
      quantity: this.cart.CustomerProduct.quantity
    }
  }
}
</script>

<style>

</style>
