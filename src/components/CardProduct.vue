<template>
  <div class="card shadow card-product">
    <img :src="laptop.image_url" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ laptop.name }}</h5>
      <p
        class="card-text"
      >Rp. {{ formatRupiah(laptop.price) }}</p>
      <router-link class="btn btn-success" :to="'/laptop/'+laptop.id"> Detail + Order </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardProduct',
  props: ['laptop'],
  methods: {
    formatRupiah (number) {
      return new Intl.NumberFormat(['ban', 'id']).format(number)
    }
  }
}
</script>

<style>
</style>
