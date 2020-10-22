<template>
    <div class="box" @click="details(product.id)" v-if="product.stock>0">
        <p>{{ product.name }}</p>
        <img class="img-product" :src="product.image_url">
        <p>Price: Rp {{ product.price }}</p>
        <p>Stock: {{ product.stock }}</p>
    </div>
</template>

<script>
export default {
  name: 'ListProducts',
  props: ['product'],
  methods: {
    details (id) {
      if (!localStorage.getItem('access_token')) {
        this.$router.push('/login')
      } else {
        this.$router.push({ name: 'Details', params: { id } })
      }
    }
  }
}
</script>

<style>
    .box {
        display: inline-block;
        border: 1px solid black;
        width: 200px;
        height: 350px;
        border-radius: 10px;
        margin: 10px;
        font-size: 20px;
        text-align: center;
        cursor: pointer;
    }
    .img-product {
        width: 150px;
        height: 150px;
        border: 1px solid black;
    }
    .button2 {
        height: 20px;
        width: 70px;
        background-color: rgb(134, 134, 134);
        border-radius: 5px;
    }
</style>
