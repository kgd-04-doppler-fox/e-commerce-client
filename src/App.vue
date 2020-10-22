<template>
  <div>
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.dispatch('changeIsLogin', true)
    }
  }
}
</script>
