<template>
  <div id="prod" class="col-md-8 mx-auto">
    <v-card class="col-md-8">
      <v-row>
      <v-col class="col-md-5 my-auto ml-2">
        <v-card>
        <v-img :src="product.imageUrl"></v-img>
        </v-card>
      </v-col>
      <v-col class="my-auto ml-4">
        <v-card-title>{{product.name}}</v-card-title>
        <v-card-subtitle>{{product.description}}</v-card-subtitle>
        <hr>
        <v-row>
          <v-col class="col-md-3 my-auto">
            <v-card-subtitle>HARGA</v-card-subtitle>
          </v-col>
          <div class="hl my-auto"></div>
          <v-col>
            <v-card-title>Rp {{getPrice(product.price)}}</v-card-title>
          </v-col>
        </v-row>
        <hr>
        <v-row>
          <v-col class="col-md-3">
            <v-card-subtitle>QTY</v-card-subtitle>
          </v-col>
          <div class="hl my-auto"></div>
          <v-col class="my-auto">
            <v-btn icon @click="minus" class="my-auto">
              <span class="material-icons">remove</span>
            </v-btn>
            <input type="text" class="col-md-2 text-center" :value="amount">
            <v-btn icon @click="plus" class="my-auto">
              <span class="material-icons">add</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      </v-row>
    </v-card>
  <TransactionBar />
  </div>
</template>

<script>
import TransactionBar from '../components/TransactionBar'

export default {
  name: 'ProductDetail',
  data () {
    return {
      min_color: 'gray'
    }
  },
  components: {
    TransactionBar
  },
  computed: {
    product () {
      return this.$store.state.selectedProduct
    },
    amount () {
      return this.$store.state.amount
    }
  },
  methods: {
    plus () {
      const stock = this.product.stock
      if (this.amount < stock) {
        this.$store.dispatch('addAmount')
      }
    },
    minus () {
      if (this.amount > 1) {
        this.$store.dispatch('minusAmount')
      }
    },
    getPrice (price) {
      this.$store.dispatch('getPrice', price)
      return this.$store.state.subtotal
    }
  },
  created () {
    const id = this.$route.params.id
    this.$store.dispatch('fetchProductById', id)
  }
}
</script>

<style scoped>
  #prod {
    margin-top: 15%;
  }
  #amount {
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 1%;
  }
  .hl {
    width: 1.2px;
    min-width: 1.2px;
    height: 75px;
    background: rgb(224, 224, 224);
    margin: 0px 0px 0px 16px;
    margin-right: 2%;
  }
</style>
