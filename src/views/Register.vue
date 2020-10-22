<template>
  <div class="container-add">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 register">
                <div class="ml- 0px">
                    <h1 class="text-center">Register</h1>
                <label class="label col-md-3 control-label text">Name</label>
                <div class="col-md-20">
                    <input type="text" class="form-control form-add" name="name" v-model="name">
                </div>
                <label class="label col-md-3 control-label" >Phone</label>
                <div class="col-md-20">
                    <input type="tel" class="form-control form-add" name="phone" v-model="phone">
                </div>
                <label class="label col-md-3 control-label" >Email</label>
                <div class="col-md-20">
                    <input type="email" class="form-control form-add" name="email" v-model="email">
                </div>
                <label class="label col-md-3 control-label" >Password</label>
                <div class="col-md-20">
                    <input type="password" class="form-control form-add" name="stock" v-model="password">
                </div>
                <div class="col">
                    <button class="btn btn-info btn-add" @click.prevent="register">Register
                    </button>
                    <button class="btn btn-info btn-add" @click="backToHome">
                        Cancel
                    </button>
                </div>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      phone: '',
      email: '',
      password: ''
    }
  },
  methods: {
    backToHome () {
      this.$router.back()
    },
    register () {
      const { name, phone, email, password } = this
      this.$store.dispatch('register', { name, phone, email, password })
        .then(({ data }) => {
          this.$swal({
            icon: 'success',
            title: 'register success'
          })
          this.$router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
          this.$swal({
            icon: 'error',
            title: 'please check your data inputs!'
          })
        })
    }
  }
}
</script>

<style>

</style>
