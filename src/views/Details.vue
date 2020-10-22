<template>
  <div>
    <h1 class="name" >{{ name }}</h1>
    <div class="boxdetails" >
      <img class="img-detail" :src="image_url">
      <table class="table-detail">
        <tr>
          <th style="width: 300px">Description</th>
        </tr>
        <tr>
          <td style="width: 300px"><p style="height: 200px">{{ description }}</p></td>
        </tr>
      </table>
      <label class="label1">Quantity</label><br>
      <input type="number" v-model="ammount" class="input2"> <button class="button3" @click="addChart">Add to Chart</button>
    </div><br>
    <div class="popup" v-if="show">
      <h1 class="text">Item Has Been Added To Cart</h1><br>
      <button class="btn-popup" @click="toHome">Continue Shoping</button><button class="btn-popup" @click="toCart">To Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data () {
    return {
      name: '',
      image_url: '',
      description: '',
      price: null,
      stock: null,
      ammount: 1,
      show: false
    }
  },
  watch: {
    selectedProduct () {
      this.name = this.selectedProduct[0].name
      this.image_url = this.selectedProduct[0].image_url
      this.description = this.selectedProduct[0].description
      this.price = this.selectedProduct[0].price
      this.stock = this.selectedProduct[0].stock
    }
  },
  methods: {
    fetchProductById () {
      const productId = this.$route.params.id
      this.$store.dispatch('fetchProductById', productId)
    },
    addChart () {
      this.$store.dispatch('addChart', {
        id: this.$route.params.id,
        ammount: this.ammount
      })
      this.show = true
    },
    toHome () {
      this.$router.push('/')
    },
    toCart () {
      this.$router.push('/cart')
    }
  },
  computed: {
    selectedProduct () {
      return this.$store.state.product
    }
  },
  created () {
    this.fetchProductById()
  }
}
</script>

<style>
  .name {
    position: relative;
    left: 200px;
    font-size: 50px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  .boxdetails {
    position: relative;
    left: 200px;
    top: 20px;
    margin-bottom: 100px;
    width: 800px;
    height: 400px;
    border: solid 1px rgb(212, 212, 212);
    margin-right  : 0px;
  }
  .img-detail {
    height: 300px;
    width: 300px;
    position: relative;
    display: inline-block;
    top: 50px;
    left: 50px;
    border: solid 1px black;
  }
  .table-detail {
    position: relative;
    display: inline-block;
    left: 100px;
    font-size: 20px;
  }
  .input2 {
    position: relative;
    margin-top: 10px;
    left: 400px;
    width: 100px;
    font-size: 20px;
  }
  .button3 {
    position: relative;
    margin-top: 10px;
    left: 420px;
    width: 200px;
    height: 30px;
    font-size: 20px;
    border-radius: 5px;
    border: solid 1px rgb(136, 136, 136);
  }
  .label1 {
    position: relative;
    right: 200px;
    font-size: 20px;
  }
  .popup {
    position: fixed;
    display: inline-block;
    bottom: 150px;
    right: 300px;
    height: 300px;
    width: 600px;
    border: solid 1px gray;
    background-color: white;
    border-radius: 20px;
    text-align: center;
  }
  .text {
    position: relative;
    top: 30px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .btn-popup {
    position: relative;
    top: 60px;
    width: 200px;
    height: 50px;
    margin: 10px;
    font-size: 20px;
    background-color: rgb(114, 114, 114);
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }

</style>
