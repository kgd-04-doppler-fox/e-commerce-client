<template>
  <div>
      <form class="login-form" @submit.prevent="login">
          <label class="label">Email</label><br>
          <input class="input" type="email" placeholder="Your email" v-model="email">
          <br>
          <label class="label">Password</label><br>
          <input class="input" type="password" placeholder="Your password" v-model="password">
          <br>
          <button class="button">Login</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('access_token')) {
      next('/')
    } else {
      next()
    }
  }
}
</script>

<style>
    .login-form {
        height: 300px;
        width: 500px;
        position: relative;
        left: 400px;
        top: 100px;
        border: solid 1px rgb(209, 209, 209);
        border-radius: 25px;
    }
    .input {
        position: relative;
        top: 40px;
        left: 75px;
        height: 30px;
        width: 350px;
        font-size: 17px;
        border: solid 1px rgb(131, 130, 130);
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .label {
        position: relative;
        top: 40px;
        left: 75px;
        font-size: 20px;
    }
    .button {
        position: relative;
        top: 60px;
        left: 75px;
        height: 30px;
        width: 120px;
        font-size: 17px;
        background-color: rgb(190, 189, 189);
        border: solid 1px rgb(193, 193, 255);
        font-family: Arial, Helvetica, sans-serif;
    }
</style>
