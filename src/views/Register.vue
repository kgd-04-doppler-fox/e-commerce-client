<template>
  <v-app>
    <v-main>
      <v-row class="col-10 col-sm-10 col-md-12 mx-auto " >
            <v-window v-model="step">
              <v-window-item :value="2" class="cols-md-12">
                <v-card id="register-card">
                <v-row class="indigo darken-4 col-md-12 mx-auto" id="login-bar"></v-row>
                <v-row class="col-12 col-md-12">
                    <v-col class="col-10 col-md-8">
                    <v-card-text class="col-md-12">
                        <h1>Register</h1>
                        <p :style="{color: msgColor}" class="mt-3">{{registrationMsg}}</p>
                        <v-form>
                          <v-text-field
                          label="name"
                          name="name"
                          prepend-icon="person"
                          type="text"
                          color="#1565C0"
                          v-model="name"
                          />
                          <v-text-field
                          label="email"
                          name="email"
                          prepend-icon="email"
                          type="text"
                          color="#1565C0"
                          v-model="email"
                          />
                          <v-text-field
                          label="password"
                          name="password"
                          prepend-icon="lock"
                          type="password"
                          color="#1565C0"
                          v-model="password"
                          required
                          />
                          <v-btn color="indigo darken-4" class="btn-block col-12" style="color:white" @click="signup">Sign up</v-btn>
                          <p class="text-center mt-3">Already have account ? <a @click="changeStep(1)">Signin</a> here</p>
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
            </v-window>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      registrationMsg: 'registration info',
      msgColor: 'transparent'
    }
  },
  computed: {
    step () {
      return this.$store.state.step
    }
  },
  methods: {
    changeStep (value) {
      this.$store.dispatch('changeStep', value)
    },
    signup () {
      console.log('register')
      this.$store.dispatch('signup', {
        name: this.name,
        email: this.email,
        password: this.password
      })
        .then(({ data }) => {
          this.registrationMsg = 'Registraion has successful'
          this.msgColor = 'green'
        })
        .catch(err => {
          console.log(err)
          this.registrationMsg = 'error'
          this.msgColor = 'red'
        })
    }
  }
}
</script>

<style scoped>
  #register-card {
    margin-top: 13%;
    background: transparent;
  }
  img {
      margin-top: 55%;
      width: 100%;
  }
  h1 {
    font-family: 'Nunito', sans-serif;
    color: grey
  }
</style>
