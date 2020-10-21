<template>
<section>
  <h1 class="text-center my-5">Our Products</h1>
  <div class="product-container row">

    <div class="product my-2 mx-2 col-lg-3">
      <div class="sides">
        <div class="front">
          <img src="https://57a42d.hostroomcdn.com/wp-content/uploads/2019/12/The-Skincare-Company-Moisturiser-With-Sunscreen-768x768.png" alt="">
            <div class="text-block">
              <h5>Product name</h5>
            </div>
        </div>
        <div class="back">
          <a href="#" class="btn btn-default add-to-cart"><i class="far fa-eye"></i> View details</a>
        </div>
      </div>
    </div>

    <div class="product my-2 mx-2 col-lg-3">
      <div class="sides">
        <div class="front">
          <img src="https://static.zara.net/photos///2020/I/0/1/p/5216/240/250/2/w/1920/5216240250_2_1_1.jpg?ts=1594975268328" alt="">
          <div class="text-block">
              <h5>Product name</h5>
            </div>
          </div>
        <div class="back">
          <a href="#" class="btn btn-default add-to-cart"><i class="far fa-eye"></i> View details</a>
        </div>
      </div>
    </div>

    <div class="product my-2 mx-2 col-lg-3">
      <div class="sides">
        <div class="front">
          <img src="https://asset.kompas.com/crops/MdfnWde2Awyb0xYIm6Tcx2T75YI=/0x0:1000x667/780x390/data/photo/2019/09/26/5d8c4fff5f34c.jpg" alt="">
          <div class="text-block">
              <h5>Product name</h5>
            </div>
          </div>
        <div class="back">
          <a href="#" class="btn btn-default add-to-cart"><i class="far fa-eye"></i> View details</a>
        </div>
      </div>
    </div>

  </div>
</section>
</template>

<script>
export default {
  name: 'ProductList'
}
</script>

<style scoped>
section {
  min-height: 100vh;
}

.product-container {
  display: flex;
  justify-content: space-evenly;
}

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
