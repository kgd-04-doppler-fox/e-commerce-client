<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <div class="container">
        <b-navbar-brand href="#">system76</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li class="nav-item">
              <router-link class="nav-link" to="/">home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/laptop">laptops</router-link>
            </li>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <li class="nav-item mr-3">
              <b-icon icon="emoji-smile" class="nav-link"></b-icon>
              <div><small class="nav-link"> {{ username }} </small></div>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link class="nav-link" to="/login">login</router-link>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link class="nav-link" to="/register">register</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
              <router-link class="nav-link" to="/carts">
                Cart
                <b-icon-cart></b-icon-cart>
                <span
                  class="badge badge-success ml-2"
                >{{ carts.length }}</span>
              </router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
              <b-button variant="outline-info" class="nav-link mb-2 ml-5" @click="logout">
                <b-icon icon="power" aria-hidden="true"></b-icon> logout
              </b-button>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  created () {
    if (localStorage.getItem('token')) {
      this.$store.dispatch('fetchCart')
      this.$store.commit('setIsLoggedIn', true)
    }
  },
  computed: {
    carts: function () {
      return this.$store.state.carts
    },
    isLoggedIn: function () {
      return this.$store.state.isLoggedIn
    }
  },
  data () {
    return {
      username: localStorage.getItem('name')
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('setIsLoggedIn', false)
      this.$router.back()
    }
  }
}
</script>

<style>
</style>
