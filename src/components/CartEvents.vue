<template>
  <div class="cartBox" v-if="cart.isPaid===false">
    <img class="img-prod" :src="cart.Product.image_url">
    <table class="cartTable">
      <tr>
        <th class="th">Product</th>
        <th class="th">Quantity</th>
        <th class="th"></th>
      </tr>
      <tr>
        <td class="td">{{ cart.Product.name }}</td>
        <td class="td"><input class="updateStock" type="number" v-model="ammount"></td>
        <td class="td"><button class="checkout" @click="checkout(cart.productId)">Check out</button><img src="../assets/bin.png" class="img-bin" @click="deleteCart(cart.productId)"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CartEvents',
  props: ['cart'],
  data () {
    return {
      ammount: this.cart.ammount
    }
  },
  methods: {
    deleteCart (id) {
      this.$store.dispatch('deleteCart', id)
        .then(_ => {
          this.$store.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkout (id) {
      this.$store.dispatch('checkout', {
        id,
        ammount: this.ammount
      })
        .then(_ => {
          this.$store.dispatch('fetchCart')
          this.$store.dispatch('deleteCart', id)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.cartBox {
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 140px;
  border: solid 1px rgb(194, 193, 193);
  border-radius: 10px;
  width: 700px;
}
.cartTable {
  border: solid 1px rgb(255, 254, 254);
  position: relative;
  display: inline-block;
  height: 100px;
  left: 50px;
  top: 30px;
}
.th {
  width: 150px;
  border: solid 1px white;
  text-align: center;
}
.td {
  width: 150px;
  border: solid 1px white;
  text-align: center;
}
.img-prod {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  position: relative;
  display: inline-block;
  top: 20px;
  left: 20px;
}
.updateStock {
  height: 20px;
  width: 80px;
}
.checkout {
  height: 30px;
  position: relative;
  border: solid 1px rgb(155, 155, 155);
  background-color: white;
  bottom: 10px;
}
.img-bin {
  position: relative;
  height: 30px;
  width: 30px;
  left: 50px;
  cursor: pointer;
}
</style>
