<template>
  <section class="login-form">
    <div class="center">
      <h1 class="mt-4">Login</h1>
      <div class="alert alert-warning mx-2" role="alert" v-if="errMsg">
        <a>{{ errMsg }}</a>
      </div>
      <form @submit.prevent="login">
        <div class="txt_field">
          <input type="text" v-model="email" required>
          <span></span>
          <label>Email</label>
        </div>
        <div class="txt_field">
          <input type="password" v-model="password" required>
          <span></span>
          <label>Password</label>
        </div>
        <input type="submit" value="Sign in">
        <div class="signup_link">
          Don't have an account yet? <a><router-link to="/register">Register</router-link></a>
        </div>
      </form>
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
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  },
  computed: {
    errMsg () {
      return this.$store.state.errMsg
    }
  }
}
</script>

<style scoped>
section {
  margin: 0;
  padding: 0;
  background: #D5E7FF;
  height: 100vh;
  overflow: hidden;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  border-radius: 10px;
}

.center h1 {
  text-align: center;
  padding: 0 0 20px 0;
  border-bottom: 1px solid silver;
}

.center form {
  padding: 0 40px;
  box-sizing: border-box;
}

form .txt_field {
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}

.txt_field input {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}

.txt_field label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: .5s;
}

.txt_field span::before {
  content: '';
  position: absolute;
  top: 40px;
  left: 0;
  width: 0%;
  height: 2px;
  background: lightseagreen;
  transition: .5s;
}

.txt_field input:focus ~ label,
.txt_field input:valid ~ label {
  top: -5px;
  color: lightseagreen;
  font-size: 14px;
}

.txt_field input:focus ~ span::before,
.txt_field input:valid ~ span::before {
  width: 100%;
}

input[type="submit"] {
  width: 100%;
  height: 50px;
  border: 1px solid;
  background: lightseagreen;
  border-radius: 25px;
  font-size: 18px;
  color: #e9f4fb;
  font-weight: 700;
  cursor: pointer;
  outline: none;
}

input[type="submit"]:hover {
  border-color: lightseagreen;
  transition: .5s;
}

.signup_link {
  margin: 30px 0;
  text-align: center;
  font-size: 16px;
  color: #666666;
}

.signup_link a {
  color: lightseagreen;
  text-decoration: none;
  padding-left: 5px;
}

.signup_link a:hover {
  text-decoration: underline;
}
</style>
