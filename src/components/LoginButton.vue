<template>
  <div>
    <b-button v-b-toggle.sidebar-no-header>Login</b-button>
    <b-sidebar id="sidebar-no-header"
    aria-labelledby="sidebar-no-header-title"
    no-header shadow>
      <template #default="{ hide }">
        <div class="card">
            <div class="bg"></div>
            <img src="../assets/asetLogin.png" class="card-img-top img-thumbnail " alt="...">
            <p class="text-center" id="p1">Remember your Email and Password ?</p>
            <div class="card-body d-flex flex-row">
                <form class="col-12" @submit.prevent="login">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email"
                    type="email"
                    class="form-control"
                    v-model="email" required />
                </div>
                <div class="form-group">
                    <label for="caption">Password</label>
                    <input type="password"
                    class="form-control"
                    id="password"
                    v-model="password" required />
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-info">Submit</button>
                </div>
                <div v-if="error" class="container text-center">
                    <p class="text-danger" id="error">{{error}}</p>
                </div>
                </form>
            </div>
            </div>
          <b-button variant="primary" block @click="hide">Close</b-button>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'LoginButton',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  computed: {
    SET_ERROR () {
      return this.$store.state.error
    }
  },
  watch: {
    SET_ERROR () {
      this.error = this.SET_ERROR
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
        .then(({ data }) => {
          console.log(data, 'data masuk login')
          localStorage.setItem('access_token', data.access_token)
          this.$store.commit('SET_LOGIN', { loggedIn: true })
        })
        .catch(err => {
          this.$store.commit('SET_ERROR', err.response.data.msg)
        })
    }
  }
}
</script>

<style>
#p1{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
