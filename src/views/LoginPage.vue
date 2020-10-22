<template>
  <div>
  <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-xl-9 mx-auto">
          <div class="card card-signin flex-row my-5">
            <div class="card-img-left d-none d-md-flex">
            </div>
            <div class="card-body">
              <h5 class="card-title text-center">Login</h5>
              <form @submit.prevent="login" class="form-signin">
                <div class="form-label-group">
                  <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required>
                  <label for="inputEmail">Email address</label>
                </div>
                <hr>
                <div class="form-label-group">
                  <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                  <label for="inputPassword">Password</label>
                </div>
                <button class="btn btn-lg btn-dark btn-block text-uppercase bg-dark" type="submit">Login</button>
                  <router-link class="d-block mt-2 text-center text-dark" to="/register">Dont have an account? register here</router-link>
                <hr class="my-4">
              </form>
            </div>
          </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../components/Navbar'
export default {
  name: 'LoginPage',
  components: {
    Navbar
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios({
        url: 'https://immense-sea-20718.herokuapp.com/login',
        method: 'POST',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          if (localStorage.getItem('access_token')) {
            this.$router.push('/')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.container{
      --input-padding-x: 1.5rem;
      --input-padding-y: .75rem;
    }

    body {
      background: #ffffff;
    }

    .card-signin {
      border: 0;
      border-radius: 1rem;
      box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .card-signin .card-title {
      margin-bottom: 2rem;
      font-weight: 300;
      font-size: 1.5rem;
    }

    .card-signin .card-img-left {
      width: 45%;
      /* Link to your background image using in the property below! */
      background: scroll center url('https://previews.123rf.com/images/bigmouse/bigmouse1707/bigmouse170700387/83077313-sport-signs-and-symbols-black-background-pattern-vector.jpg');
      background-size: cover;
    }

    .card-signin .card-body {
      padding: 2rem;
    }

    .form-signin {
      width: 100%;
    }

    .form-signin .btn {
      font-size: 80%;
      border-radius: 5rem;
      letter-spacing: .1rem;
      font-weight: bold;
      padding: 1rem;
      transition: all 0.2s;
    }

    .form-label-group {
      position: relative;
      margin-bottom: 1rem;
    }

    .form-label-group input {
      height: auto;
      border-radius: 2rem;
    }

    .form-label-group>input,
    .form-label-group>label {
      padding: var(--input-padding-y) var(--input-padding-x);
    }

    .form-label-group>label {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      margin-bottom: 0;
      /* Override default `<label>` margin */
      line-height: 1.5;
      color: #495057;
      border: 1px solid transparent;
      border-radius: .25rem;
      transition: all .1s ease-in-out;
    }

    .form-label-group input::-webkit-input-placeholder {
      color: transparent;
    }

    .form-label-group input:-ms-input-placeholder {
      color: transparent;
    }

    .form-label-group input::-ms-input-placeholder {
      color: transparent;
    }

    .form-label-group input::-moz-placeholder {
      color: transparent;
    }

    .form-label-group input::placeholder {
      color: transparent;
    }

    .form-label-group input:not(:placeholder-shown) {
      padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
      padding-bottom: calc(var(--input-padding-y) / 3);
    }

    .form-label-group input:not(:placeholder-shown)~label {
      padding-top: calc(var(--input-padding-y) / 3);
      padding-bottom: calc(var(--input-padding-y) / 3);
      font-size: 12px;
      color: #777;
    }
</style>
