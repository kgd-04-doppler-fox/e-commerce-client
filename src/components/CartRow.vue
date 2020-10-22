<template>
    <tr>
        <th scope="row">{{ cart.id }}</th>
        <td>{{ cart.Product.name }}</td>
        <td>
            <img :src="cart.Product.img_url" alt="produk" style="width: 100px">
        </td>
        <td>{{ cart.Product.description }}</td>
        <td>USD {{ cart.Product.price }}</td>
        <td>{{ cart.amount }}</td>
        <td>
            <form @submit.prevent="updateAmount(cart.id)">
                <div class="form-group">
                    <label for="amount">Amount</label>
                    <input id="amount"
                    type="amount"
                    class="form-control"
                    v-model="amount" required />
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-info">Update</button>
                </div>
            </form>
            <button @click="payCart(cart.id)" class="btn btn-outline-success btn-sm">Pay</button>
            <button @click="deleteCart(cart.id)" class="btn btn-outline-danger btn-sm">Delete</button>
        </td>
        <div class="col-6" v-if="error" id="error">
            <p class="text-danger text-center">{{error}}</p>
        </div>
    </tr>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CartRow',
  data () {
    return {
      amount: '',
      error: ''
    }
  },
  props: ['cart'],
  methods: {
    deleteCart (id) {
      const reConfirm = confirm('Are you sure want to delete this product ?')
      if (reConfirm) {
        axios({
          method: 'DELETE',
          url: `https://fierce-hollows-88977.herokuapp.com/carts/${id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(({ data }) => {
            this.$store.dispatch('fetchCarts')
          })
          .catch(err => {
            this.error = err.response.data.msg
          })
      }
    },
    payCart (id) {
      const reConfirm = confirm('Are you sure want to buy this product ?')
      if (reConfirm) {
        axios({
          method: 'PATCH',
          url: `https://fierce-hollows-88977.herokuapp.com/carts/${id}/pay`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(({ data }) => {
            this.$store.dispatch('fetchCarts')
          })
          .catch(err => {
            this.error = err.response.data.msg
          })
      }
    },
    updateAmount (id) {
      axios({
        method: 'PATCH',
        url: `https://fierce-hollows-88977.herokuapp.com/carts/${id}/amount`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          amount: this.amount
        }
      })
        .then(({ data }) => {
          this.$store.dispatch('fetchCarts')
        })
        .catch(err => {
          this.error = err.response.data.err.name
        })
    }
  }
}
</script>

<style>

</style>
