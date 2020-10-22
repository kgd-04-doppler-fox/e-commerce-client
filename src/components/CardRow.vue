<template>
 <div>
  <v-card class="mt-3">
    <v-row class="col-md-12">
      <v-col class="col-md-3 mt-4">
        <v-img :src="product.Product.imageUrl" width="150"></v-img>
      </v-col>
      <v-col class="col-md-9">
      <v-btn x-small style="margin-left: 80%" @click="checkout(product.id)">
        <span>checkout</span>
      </v-btn>
      <v-card-title>{{product.Product.name}}</v-card-title>
      <v-card-subtitle>{{product.Product.description}}</v-card-subtitle>
      <v-card-text>Rp {{getPrice(product.subtotal)}}</v-card-text>
        <v-col>
        <v-btn icon style="margin-left: 70%" @click="deleteCart(product.id)">
          <span class="material-icons">delete</span>
        </v-btn>
        <v-btn icon @click="minAmount">
            <span class="material-icons">remove</span>
        </v-btn>
        <input type="text" :max="product.Product.stock" min="1" spinner="1" :value="product.amount" class="col-md-1" style="text-align: center">
        <v-btn icon @click="addAmount">
            <span class="material-icons">add</span>
        </v-btn>
        </v-col>
      </v-col>
    </v-row>
  </v-card>
 </div>
</template>

<script>
export default {
  name: 'CartRow',
  data () {
    return {
      amount: 1
    }
  },
  props: ['product'],
  methods: {
    addAmount () {
      const payload = {
        id: this.product.id,
        price: this.product.Product.price
      }
      this.$store.dispatch('editCartPlus', payload)
        .then(() => {
          this.$store.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    minAmount () {
      const payload = {
        id: this.product.id,
        price: this.product.Product.price
      }
      this.$store.dispatch('editCartMinus', payload)
        .then(() => {
          this.$store.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCart (id) {
      this.$store.dispatch('deleteCart', id)
        .then(() => {
          this.$store.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    getPrice (price) {
      this.$store.dispatch('getPrice', price)
      return this.$store.state.subtotal
    },
    checkout (id) {
      this.$store.dispatch('checkout', id)
        .then(() => {
          this.$store.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.$store.dispatch('fetchCart')
  }
}
</script>

<style>

</style>
