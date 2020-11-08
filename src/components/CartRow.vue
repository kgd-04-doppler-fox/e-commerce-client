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
      amount: ''
    }
  },
  props: ['cart'],
  methods: {
    deleteCart (id) {
      this.$swal({
        title: 'Are you sure?',
        text: 'Once delete, you need to add again via homepage!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            axios({
              method: 'DELETE',
              url: `https://fierce-hollows-88977.herokuapp.com/carts/${id}`,
              headers: {
                access_token: localStorage.getItem('access_token')
              }
            })
              .then(({ data }) => {
                this.$swal(data.msg)
                this.$store.dispatch('fetchCarts')
              })
              .catch(err => {
                this.error = err.response.data.msg
              })
          } else {
            this.$swal('Item is not deleted')
          }
        })
    },
    payCart (id) {
      this.$swal({
        title: 'Are you sure?',
        text: 'Once paid, refund would take some process!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willPay) => {
          if (willPay) {
            axios({
              method: 'PATCH',
              url: `https://fierce-hollows-88977.herokuapp.com/carts/${id}/pay`,
              headers: {
                access_token: localStorage.getItem('access_token')
              }
            })
              .then(({ data }) => {
                this.$swal(`Paid ${data.updateProduct[1][0].name} for USD ${data.updateProduct[1][0].price}`)
                this.$store.dispatch('fetchCarts')
              })
              .catch(err => {
                this.error = err.response.data.msg
              })
          } else {
            this.$swal('You can pay it later!')
          }
        })
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
          this.$swal(err.response.data.msg)
        })
    }
  }
}
</script>

<style>

</style>
