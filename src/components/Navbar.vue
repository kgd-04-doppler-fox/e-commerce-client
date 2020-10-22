<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <h4 @click="toHome">Sport Center</h4>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to=""></router-link>
      </ul>
      <div class="form-inline my-2 my-lg-0">
        <a @click="toCart" class="text-dark text-lg"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16"
            class="bi bi-cart-check-fill ml-2 dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM4 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm7 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm.354-7.646a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
          </svg>Shopping Cart</a>
        <button v-if="!access_token" class="btn btn-outline-dark my-2 my-sm-0 ml-3" @click="toLogin" type="submit">Login</button>
        <button v-else class="btn btn-outline-danger my-2 my-sm-0 ml-3" @click="logout" type="submit">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    access_token () {
      return localStorage.getItem('access_token')
    }
  },
  methods: {
    toHome () {
      this.$router.push('/')
    },

    toLogin () {
      this.$router.push('/login')
    },
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    },
    toCart () {
      if (this.access_token) {
        this.$router.push('/cart')
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style>

</style>
