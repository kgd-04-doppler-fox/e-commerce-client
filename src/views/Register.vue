<template>
  <section class="register-form">
    <h1 class="mt-4 text-center">Register</h1>
    <div class="d-flex justify-content-center" v-if="errMsg">
      <div class="alert alert-warning mx-2 w-25 text-center" role="alert">
        <a>{{ errMsg }}</a>
      </div>
    </div>
    <div class="center">
      <form @submit.prevent="register" class="pt-3" style="margin-top: -5rem;">
        <div class="txt_field">
          <input type="text" v-model="firstName" required>
          <span></span>
          <label>First name</label>
        </div>
        <div class="txt_field">
          <input type="text" v-model="lastName" required>
          <span></span>
          <label>Last name</label>
        </div>
        <div class="txt_field">
          <input type="email" v-model="email" required>
          <span></span>
          <label>Email</label>
        </div>
        <div class="txt_field">
          <input type="text" v-model="phoneNumber" required>
          <span></span>
          <label>Phone number</label>
        </div>
        <div class="txt_field">
          <input type="text" v-model="deliveryAddress" required>
          <span></span>
          <label>Delivery address</label>
        </div>
        <div class="txt_field">
          <input type="password" v-model="password" required>
          <span></span>
          <label>Password</label>
        </div>
        <input type="submit" value="Register">
        <div class="signup_link">
          Already have an account? <a><router-link to="/login">Login</router-link></a>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      deliveryAddress: ''
    }
  },
  computed: {
    errMsg () {
      return this.$store.state.errMsg
    }
  },
  methods: {
    register () {
      const payload = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        deliveryAddress: this.deliveryAddress
      }
      this.$store.dispatch('register', payload)
    }
  }
}
</script>

<style scoped>
section {
  margin: 0;
  padding: 0;
  background: #D5E7FF;
  height: 120vh;
  overflow: hidden;
}

.center {
  position: relative;
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
  padding-bottom: 30px;
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
