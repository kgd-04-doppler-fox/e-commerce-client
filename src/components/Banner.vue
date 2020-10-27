<template>
  <carousel>
      <img src="https://gamingexploits.com/wp-content/uploads/2020/10/Genshin-Impact-14_10_2020-16_25_53-1024x576.png"
      class="mt-5"
      img-width="1024"
      img-height="480">

      <img src="https://img.freepik.com/free-vector/sale-banner-with-product-description_1361-1333.jpg?size=626&ext=jpg"
      class="mt-5"
      img-width="1024"
      img-height="480">

      <img src="https://images.creativemarket.com/0.1.0/ps/831133/910/607/m1/fpnw/wm0/banner-.png?1449375575&s=ff4b0c4c1f4d6c90eaa83887424ed0b6"
      class="mt-5"
      img-width="1024"
      img-height="480">

      <img src="https://i.ytimg.com/vi/XTmbR7bmOT8/maxresdefault.jpg"
      class="mt-5"
      img-width="1024"
      img-height="480">

      <img src="https://i.ytimg.com/vi/qyk2UWpC6DQ/maxresdefault.jpg"
      class="mt-5"
      img-width="1024"
      img-height="480">
  </carousel>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  name: 'Banner',
  components: { carousel }
}
</script>

<style scoped>
.mt-5{
  object-fit: scale-down;
}
</style>
