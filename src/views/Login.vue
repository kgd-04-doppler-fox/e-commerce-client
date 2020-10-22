<template>
  <section class="Form my-4 mx-5">
        <div class="container">
            <div class="row row-login no-gutters">
                <div class="col-lg-5">
                    <img src="https://pop.system76.com/_nuxt/img/623f266-700.png" alt="hacktiv8" class="img-fluid ">
                </div>
                <div class="col-lg-7 px-5 pt-5">
                    <h1 class="font-weight-bold py-3">login <small>or</small> </h1>
                    <h3><router-link to="/register"> register</router-link></h3>
                    <h4>Sign into your account</h4>
                    <form>
                        <div class="form-row">
                            <div class="col-lg-7">
                                <input v-model="email" type="email" class="form-control my-3 p-4" placeholder="Email..">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-lg-7">
                                <input v-model="password" type="password" class="form-control my-3 p-4" placeholder="*******">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-lg-7">
                                <button type="button" class="btn1" @click.prevent="login">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
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
      const { email, password } = this
      this.$store.dispatch('login', { email, password })
        .then(({ data }) => {
          localStorage.setItem('token', data.token)
          localStorage.setItem('name', data.name)
          this.$swal({
            icon: 'success',
            title: 'login success'
          })
          this.$router.back()
        })
        .catch(err => {
          console.log(err)
          this.$swal({
            icon: 'error',
            title: 'wrong email / password'
          })
        })
    }
  }
}
</script>

<style>

</style>
