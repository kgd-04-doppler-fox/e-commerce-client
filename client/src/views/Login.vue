<template>
     <div class="registration-form">
        <form @submit.prevent="login" >
            <div class="form-icon">
                <span><i class="icon icon-user">Login</i></span>
            </div>
            <p :style="{color: errorcolor}">{{err}}</p>
            <div class="form-group">
                <input v-model="email" type="email" class="form-control item" id="email" placeholder="Email">
            </div>
            <div class="form-group">
                <input v-model="password" type="password" class="form-control item" id="password" placeholder="Password">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-block btn-info">Submit</button>
            </div>
        </form>
        <div class="col text-center">
          <h5>Don't have an account yet?</h5>
          <button class="btn btn-outline-info"><router-link to="/register">Sign Up Now!</router-link></button>
          <button v-google-signin-button="clientId" class="btn btn-primary"> Continue with Google</button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      err: 'error',
      errorcolor: 'transparent',
      clientId: '602459969942-oe0k497vckqse2137uncui58ibg378tq.apps.googleusercontent.com'
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          this.$router.push('/mainpage')
          this.$store.dispatch('isLogin', false)
        })
        .catch(() => {
          this.err = 'wrong password / email'
          this.errorcolor = 'red'
        })
      // optional bisa lembar variable ke store
    },
    OnGoogleAuthSuccess (idToken) {
      console.log(idToken, '<------- tokennnnnnnnn')
      localStorage.setItem('access_token', idToken)
      this.$router.push('/mainpage')
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail (error) {
      console.log(error, '<----- erroorrrrrrrrr')
    }
  }
}
</script>

<style>

body {
  background-color:#FDDDB5;
}

.registration-form{
    padding: 50px;
    outline-style: groove;
    outline-color: lightsalmon;
}

.registration-form form{
    outline-style: solid;
    outline-color: lightblue;
    max-width: 600px;
    margin: 50px auto;
    padding: 50px 50px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.registration-form .form-icon{
    text-align: center;
    border-radius: 50%;
    font-size: 50px;
    color: #1C8496;
    width: 100px;
    height: 100px;
    margin: auto;
    margin-bottom: 10px;
    line-height: 50px;
}

.registration-form .item{
    border-radius: 20px;
    margin-bottom: 10px;
    padding: 10px 10px;
}

</style>
