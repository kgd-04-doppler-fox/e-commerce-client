<template>
  <div id="app">
    <Navbar />
    <Banner />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Banner from './components/Banner.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Banner
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.commit('SET_LOGIN', {
        loggedIn: true
      })
    } else {
      this.$store.commit('SET_LOGIN', {
        loggedIn: false
      })
    }
  }
}
</script>

<style>

</style>
