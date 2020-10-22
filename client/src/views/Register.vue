<template>
  <div>
     <div class="registration-form">
        <form @submit.prevent="register" >
            <div class="form-icon d-flex justify-content-center">
                <span><i class="icon icon-user">Register</i></span>
            </div>
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
    </div>
  </div>
</template>

<script>

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', payload)
        .then(({ data }) => {
          console.log(data)
          this.$router.push('/login')
        })
        .catch(err => {
          console.log(err)
        })
      // optional bisa lembar variable ke store
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
