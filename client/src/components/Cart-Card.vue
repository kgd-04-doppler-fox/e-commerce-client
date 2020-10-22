<template>
    <tbody>
        <tr>
            <!-- {{cart}} -->
            <td>{{cart.id}}</td>
            <td><img :src="cart.Product.image_url" style="width:20vh;height:20vh"></td>
            <td>{{cart.Product.price * cart.quantity}}</td>
            <td>{{cart.quantity}}</td>
            <td>{{cart.status}}</td>
            <td><button class="btn btn-outline-primary btn-sm" @click.prevent="deleteItemCart(cart.id)">Delete</button></td>
            <td>
                <form @submit.prevent="updateQuantity(cart.id)">
                    <input v-model="cartQuantity" type="number" name="" id="" min="1" :max="cart.Product.stock">
                    <button class="btn btn-outline-primary btn-sm" type="submit">Update Quantity</button>
                </form>
            </td>
        </tr>
    </tbody>
</template>

<script>
export default {
  name: 'Cart-Card',
  props: ['cart'],
  data () {
    return {
      cartQuantity: 0
    }
  },
  methods: {
    updateQuantity (id) {
      const payload = {
        id: id,
        quantity: this.cartQuantity
      }
      console.log(payload)
      this.$store.dispatch('editCart', payload)
      // optional bisa lembar variable ke store
        .then(({ data }) => {
          console.log(data)
          this.$store.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteItemCart (id) {
      const payload = {
        id: id
      }
      this.$store.dispatch('deleteCart', payload)
        .then(({ data }) => {
          this.$store.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
