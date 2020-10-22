<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a class="navbar-brand" @click.prevent="goToHome">
        <img src="https://www.flaticon.com/svg/static/icons/svg/332/332507.svg" width="30" height="30" class="d-inline-block align-top" alt="">
        Kommerce Millenial Shop
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item active" v-if="!loggedIn">
            <RegisterButton />
        </li>
        <li class="nav-item" v-if="!loggedIn">
            <LoginButton />
        </li>
        <li class="nav-item" v-if="loggedIn"><router-link to="/history">
          <button class="btn btn-outline-success my-2 my-sm-0">History</button>
          </router-link>
        </li>
        <li class="nav-item" v-if="loggedIn"><router-link to="/cart">
          <button class="btn btn-outline-info my-2 my-sm-0">Cart</button>
          </router-link>
        </li>
        <li class="nav-item" v-if="loggedIn"><router-link to="/">
          <button class="btn btn-outline-danger my-2 my-sm-0" @click="logout">Logout</button>
          </router-link>
        </li>
        </ul>
    </div>
    </nav>
  </div>
</template>

<script>
import LoginButton from './LoginButton'
import RegisterButton from './RegisterButton'
export default {
  name: 'Navbar',
  components: {
    LoginButton,
    RegisterButton
  },
  computed: {
    loggedIn () {
      return this.$store.state.loggedIn
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('SET_LOGIN', {
        loggedIn: false
      })
    },
    goToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
