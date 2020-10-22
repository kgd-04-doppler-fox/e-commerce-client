<template>
  <div>
    <div class="dropdown">
      <span>Category</span>
      <div class="dropdown-content">
        <p @click="all">All</p>
        <p @click="top">Tops</p>
        <p @click="bottom">Bottoms</p>
        <p @click="hat">Hats</p>
        <p @click="shoe">Shoes</p>
      </div>
    </div>
    <section class="content" v-if="category==='all'">
      <ListProducts v-for="product in products" :key="product.id" :product="product"/>
    </section>
    <section class="content" v-else>
      <ListProducts v-for="product in productCategory" :key="product.id" :product="product"/>
    </section>
  </div>
</template>

<script>
import ListProducts from '../components/Products.vue'

export default {
  name: 'Home',
  data () {
    return {
      category: 'all'
    }
  },
  components: {
    ListProducts
  },
  methods: {
    toAddPage () {
      this.$router.push({ name: 'AddPage' })
    },
    all () {
      this.category = 'all'
      this.$store.dispatch('fetchProduct')
    },
    top () {
      this.category = 'top'
      this.$store.dispatch('fetchProductCategory', {
        category: this.category
      })
    },
    bottom () {
      this.category = 'bottom'
      this.$store.dispatch('fetchProductCategory', {
        category: this.category
      })
    },
    hat () {
      this.category = 'hat'
      this.$store.dispatch('fetchProductCategory', {
        category: this.category
      })
    },
    shoe () {
      this.category = 'shoe'
      this.$store.dispatch('fetchProductCategory', {
        category: this.category
      })
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    productCategory () {
      return this.$store.state.productCategory
    }
  },
  created () {
    this.$store.dispatch('fetchProduct')
  }
}
</script>

<style>
  .content {
    display: flex;
    position: relative;
    top: 100px;
    margin-left: 100px;
    margin-bottom: 100px;
    flex-flow: row wrap;
  }
  .dropdown {
    position: relative;
    display: inline-block;
    cursor: pointer;
    font-size: 25px;
    left: 110px;
    top: 30px;
    width: 1050px;
    border-bottom: solid 2px black;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    min-width: 200px;
    background-color: rgb(196, 195, 195);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
    font-size: 17px;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>
