<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-info bg-light">
      <a class="navbar-brand" href="/">Ikamers</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <div v-if="user">
            <a class="nav-item nav-link"><router-link to="/login">Sign In</router-link></a>
          </div>
          <div v-else>
            <a class="nav-item nav-link" @click.prevent="logout">Sign Out</a>
          </div>
          <a class="nav-item nav-link"><router-link to="/mainpage">Mainpage</router-link></a>
          <a class="nav-item nav-link"><router-link to="/carts">Cart</router-link></a>
        </div>
        <div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.dispatch('isLogin', false)
    } else {
      this.$store.dispatch('isLogin', true)
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
      this.$store.dispatch('isLogin', true) // bisa path bisa name, kalo name ({name: "Home"}), sesuai yang di router
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
