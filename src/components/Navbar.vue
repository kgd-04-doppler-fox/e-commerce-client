<template>
  <div id="navbar-container">
      <v-toolbar id="navbar">
          <v-toolbar-title>
            <router-link to="/" id="navTitle">Anchorman</router-link>
          </v-toolbar-title>
            <span class="material-icons" style="color:white">anchor</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="changeMode">
            <span class="material-icons" style="color:white" >{{brightnessIcon}}</span>
          </v-btn>
          <v-btn icon>
            <span class="material-icons" style="color: white" @click="cart">local_grocery_store</span>
          </v-btn>
          <div class="hl"></div>
          <v-btn color="white" id="login" v-if="!isLogin">
            <span @click="signin">Signin</span>
          </v-btn>
          <v-btn color="white" v-else>
            <span @click="logout">Logout</span>
          </v-btn>
      </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
      this.$store.dispatch('changeIsLogin', false)
    },
    signin () {
      this.$router.push('/login')
    },
    register () {
      this.$router.push('/register')
    },
    cart () {
      if (localStorage.getItem('access_token')) {
        this.$router.push('/product-cart')
      } else {
        this.$router.push('/login')
      }
    },
    changeMode () {
      if (this.$store.state.backgroundColor === 'black') {
        this.$store.commit('SET_BACKGROUND_COLOR', 'white')
        this.$store.commit('SET_BRIGHTNESS_ICON', 'bedtime')
      } else {
        this.$store.commit('SET_BACKGROUND_COLOR', 'black')
        this.$store.commit('SET_BRIGHTNESS_ICON', 'brightness_5')
      }
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    },
    brightnessIcon () {
      return this.$store.state.brightnessIcon
    }
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.dispatch('changeIsLogin', true)
    }
  }
}
</script>

<style scoped>
 #navbar-container {
  position: fixed;
  top: 0px;
  width: 100%;
  transition: transform 280ms ease 0s;
  height: 100px;
  display: flex;
  -webkit-box-align: center;
  z-index: 999;
 }
 #navbar {
    background-color:#1A237E;
 }
 #navTitle {
    font-family: 'Nunito', sans-serif;
    color: white;
 }
 #login {
   margin-right: 1%;
 }
 .hl {
    width: 1.2px;
    min-width: 1.2px;
    height: 24px;
    background: rgb(224, 224, 224);
    margin: 0px 0px 0px 16px;
    margin-right: 2%;
 }
 #navTitle {
   color:white;
   text-decoration:none;
 }
</style>
