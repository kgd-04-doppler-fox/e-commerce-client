<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />
      <div class="row mt-4">
        <div class="col">
          <h2>
            Premium
            <strong>Performance</strong>
          </h2>
        </div>
        <div class="col">
          <router-link to="/laptop" class="btn btn-success float-right">
            More
          </router-link>
        </div>
      </div>
      <img src="https://assets.system76.com/products/bonw14/hero_wide.jpg?fit=crop&format=pjpg&height=900&width=2560" alt="" width="900">
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero
  }
}
</script>
