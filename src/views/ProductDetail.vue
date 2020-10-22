<template>
  <div class="col-10 col-sm-6 col-md-7 mx-auto">
    <v-card class="col-md-12" id="prod">
      <v-row>
      <v-col class="col-md-5 my-auto ml-2">
        <v-card>
        <v-img :src="product.imageUrl"></v-img>
        </v-card>
      </v-col>
      <v-col class="my-auto ml-4 mx-auto">
        <v-card-title>{{product.name}}</v-card-title>
        <v-card-subtitle>{{product.description}}</v-card-subtitle>
        <hr>
        <v-row>
          <v-col class="col-2 col-sm-2 col-md-3 my-auto">
            <v-card-subtitle>HARGA</v-card-subtitle>
          </v-col>
          <div class="hl my-auto"></div>
          <v-col>
            <v-card-title>{{getPrice}}</v-card-title>
          </v-col>
        </v-row>
        <hr>
        <v-row>
          <v-col class="col-2 col-sm-2 col-md-3">
            <v-card-subtitle>QTY</v-card-subtitle>
          </v-col>
          <div class="hl my-auto"></div>
          <v-col class="my-auto">
            <v-btn icon @click="minus" class="my-auto" style="background: #54BCFF; color:white">
              <span class="material-icons">remove</span>
            </v-btn>
            <input type="text" class="col-md-2 text-center" :value="amount">
            <v-btn icon @click="plus" class="my-auto" style="background: #54BCFF; color:white">
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
import formatPrice from '../helpers/formatPrice'

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
    },
    getPrice () {
      return formatPrice(this.product.price)
    }
  },
  methods: {
    plus () {
      const stock = this.product.stock
      if (this.amount < stock) {
        this.$store.commit('ADD_AMOUNT', 1)
      }
    },
    minus () {
      if (this.amount > 1) {
        this.$store.commit('MIN_AMOUNT', 1)
      }
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
    margin-top: 12%;
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
