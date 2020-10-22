<template>
  <div>
    <b-button v-b-toggle.sidebar-backdrop>Register</b-button>
    <b-sidebar id="sidebar-backdrop"
      backdrop
      shadow>
      <template>
        <div class="card">
            <div class="bg"></div>
            <img src="../assets/asetLogin.png" class="card-img-top img-thumbnail " alt="...">
            <p class="text-center" id="p1"> TIPS : Make your password easier to remember </p>
            <div class="card-body d-flex flex-row">
                <form class="col-12" @submit.prevent="register">
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
                    <button type="submit" class="btn btn-info">Register Now !</button>
                </div>
                <div v-if="error" class="container text-center">
                    <p class="text-danger" id="error">{{error}}</p>
                </div>
                </form>
            </div>
            </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'RegisterButton',
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
    register () {
      axios({
        method: 'POST',
        url: 'https://fierce-hollows-88977.herokuapp.com/users/register',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          this.$store.commit('SET_ERROR', 'You can login now')
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
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
