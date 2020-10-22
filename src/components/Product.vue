<template>
  <div class="product my-2 mx-2 col-lg-3">
    <div class="sides">
      <div class="front">
        <img
          :src="product.imageUrl"
          @click.prevent="toDetail(product.id)"
          alt="product">
        <div class="text-block">
            <h5>{{ product.name }}</h5>
          </div>
        </div>
      <div class="back">
        <a href="#" class="btn btn-default add-to-cart"><i class="far fa-eye"></i> View details</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
  methods: {
    toDetail (id) {
      this.$router.push({ path: `/product/${id}` })
    }
  }
}
</script>

<style scoped>
.text-block {
  -webkit-text-stroke: 0.5px white;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 1px;
  width: 100%;
  background-color: transparent;
  color: black;
  padding-left: 20px;
  padding-right: 20px;
}

.product {
  perspective: 2000px;
  width: 250px; height: 250px;
}

.sides {
  width: inherit; height: inherit;
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;
  border-radius: 10px;
  transition: all 0.5s;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}

.front,
.back {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  border-radius: 10px;
}

.front {
  overflow: hidden;
}

.front img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.back {
  background-color: white;
  transform: rotateX(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.back::before {
  position: absolute;
  content: "";
  top: 15px; left: 15px;
  right: 15px; bottom: 15px;
  border: 3px solid #222;
  border-radius: 10px;
  transform: translateZ(100px);
}

.back p {
  transform: translateZ(100px);
  color: #222;
  font-size: 14px;
  padding: 0 25px;
}

.product:hover .sides {
  transform: rotateX(180deg);
}
</style>
