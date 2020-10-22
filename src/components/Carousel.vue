<template>
  <div>
    <b-carousel
      id="carousel-1"
      fade
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      class="mt-5"
    >
      <b-carousel-slide
        caption="We support social distancing"
        text="Stay at home. Free shipping for soft opening."
        img-src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm208batch5-card-twitterheader-03.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=4ec3e4a9c4d691554f3f472bcc7c57c4"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/p-452-card-twitterheader-02_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=9c9c607dd8d0a83cb77dd5e2a4b681e5">
      </b-carousel-slide>
      <b-carousel-slide
        img-src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/p-452-card-header-01.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=559ce3f51d15837b78182f789d4e64f0">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart () {
      this.sliding = true
    },
    onSlideEnd () {
      this.sliding = false
    }
  }
}
</script>

<style>

</style>
