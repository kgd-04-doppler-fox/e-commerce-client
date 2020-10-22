<template>
  <v-app :style="{background: backgroundColor}">
    <v-main>
      <v-row align="center" justify="center" md="">
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-card id="login-card">
                <v-row class="indigo darken-4 col-md-12 mx-auto" id="login-bar"></v-row>
                <v-row class="col-12 col-md-12">
                    <v-col class="col-md-8">
                    <v-card-text class="col-md-12">
                        <h1>Login</h1>
                        <p :style="{color: colorMsg}" class="mt-3" id="loginMsg">{{loginMsg}}</p>
                        <v-form>
                          <v-text-field
                          label="email"
                          name="email"
                          prepend-icon="email"
                          type="text"
                          color="#1565C0"
                          v-model="email"
                          @click="colorMsg = 'transparent'"
                          />
                          <v-text-field
                          label="password"
                          name="password"
                          prepend-icon="lock"
                          type="password"
                          color="#1565C0"
                          v-model="password"
                          @click="colorMsg = 'transparent'"
                          required
                          />
                          <v-btn color="indigo darken-4" class="btn-block col-12" style="color:white" @click="signin">Sign in</v-btn>
                          <p class="text-center mt-3">Don't have an account ? <a @click="changeStep(2)">Signup</a> now</p>
                        </v-form>
                    </v-card-text>
                    </v-col>
                    <v-col>
                        <v-card-text >
                            <img src="../assets/download.png" alt="" srcset="">
                        </v-card-text>
                    </v-col>
                </v-row>
                </v-card>
              </v-window-item>
              <v-window-item :value="2">
                <Register />
              </v-window-item>
            </v-window>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Register from './Register'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      colorMsg: 'transparent',
      loginMsg: 'login info here'
    }
  },
  components: {
    Register
  },
  computed: {
    step () {
      return this.$store.state.step
    },
    backgroundColor () {
      return this.$store.state.backgroundColor
    }
  },
  methods: {
    changeStep (value) {
      this.$store.dispatch('changeStep', value)
    },
    signin () {
      this.$store.dispatch('signin', {
        email: this.email,
        password: this.password
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$store.dispatch('changeIsLogin', true)
          this.$router.push('/')
        })
        .catch(() => {
          this.email = ''
          this.password = ''
          this.loginMsg = ' Email/Password is wrong'
          this.colorMsg = 'red'
        })
    }
  }
}
</script>

<style scoped>
  #login-card {
    margin-top: 20% !important;
  }
  img {
      margin-top: 40%;
      width: 100%;
  }
  h1 {
    font-family: 'Nunito', sans-serif;
    color: grey
  }
  #loginMsg {
    color: transparent;
    transition: 1s;
    font-style: italic;
  }
</style>
