<template>
  <nav  class="navbar">
      <a href="#" @click="toHome">Sports Gear</a>
      <img class="img" src="../assets/cart.png" style="left: 750px" v-if="loggedIn">
      <img class="img" src="../assets/user.png" v-if="loggedIn">
      <a href="#" class="login-logout" @click="toLogin" v-if="!loggedIn">Sign in</a>
      <a href="#" class="login-logout" @click="logout" v-else>Sign out</a>
      <a href="#" class="login-logout" @click="toRegister">Sign up</a>
      <a href="#" class="login-logout" style="left: 530px" v-if="loggedIn" @click="toCart">Cart</a>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    loggedIn () {
      return this.$store.state.loggedIn
    }
  },
  methods: {
    toLogin () {
      this.$router.push('/login')
    },
    logout () {
      localStorage.clear()
      this.$router.push('/login')
      this.$store.commit('SET_LOGGED_IN', {
        loggedIn: false
      })
    },
    toRegister () {
      this.$router.push('/register')
    },
    toHome () {
      this.$router.push('/')
    },
    toCart () {
      this.$router.push('/cart')
    }
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.commit('SET_LOGGED_IN', {
        loggedIn: true
      })
    } else {
      this.$store.commit('SET_LOGGED_IN', {
        loggedIn: false
      })
    }
  }
}
</script>

<style>
    .navbar {
        height: 60px;
        background-color: rgb(51, 51, 51);
    }
    a {
        margin: 0px;
        top: 10px;
        left: 50px;
        position: relative;
        display: inline-block;
        font-size: 25px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        color: cornsilk;
        text-decoration: none;
    }
    .login-logout {
        position: relative;
        display: inline-block;
        top: 5px;
        left: 900px;
        height: 30px;
        width: 100px;
        font-size: 15px;
        font-family: Arial, Helvetica, sans-serif;
        color: rgb(255, 255, 255);
        text-decoration: none;
    }
    .img {
      position: relative;
      top: 15px;
      height: 30px;
      width: 30px;
      left: 890px;
      border: none;
    }
</style>
