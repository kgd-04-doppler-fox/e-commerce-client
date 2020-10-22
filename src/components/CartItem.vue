<template>
  <div>
    <div class="row mb-4">
    <div class="col-md-5 col-lg-3 col-xl-3">
      <div class="rounded mb-3 mb-md-0">
        <img class="img-fluid w-100"
          :src="cart.Product.imageUrl" alt="Sample">
      </div>
    </div>
    <div class="col-md-7 col-lg-9 col-xl-9">
      <div>
        <div class="d-flex justify-content-between">
          <div>
            <h5>{{ cart.Product.name }}</h5>
            <p class="mb-3 text-muted text-uppercase small">{{ cart.Product.category }}</p> <br/> <br/>
          </div>
          <div>
            <div class="def-number-input number-input safari_only mb-0 w-100">
              <b-form-spinbutton id="sb-inline" v-model="value" inline></b-form-spinbutton>
            </div>
            <small id="passwordHelpBlock" class="form-text text-muted text-center">
              (min. 1 piece)
            </small>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <a type="button" @click.prevent="deleteCart(cart.ProductId)" class="card-link-secondary small text-uppercase mr-3"><i
                class="fas fa-trash-alt mr-1"></i> Remove item </a>
            <a type="button" class="card-link-secondary small text-uppercase"><i
                class="fas fa-heart mr-1"></i> Move to wish list </a>
          </div>
          <p class="mb-0"><span><strong>Rp. {{ cart.Product.price * value }}</strong></span></p>
        </div>
      </div>
    </div>
  </div>
  <hr class="mb-4">
</div>
</template>

<script>
export default {
  name: 'CartItem',
  props: ['cart'],
  data () {
    return {
      value: 1
    }
  },
  methods: {
    changeCartAmount () {
      const payload = {
        value: this.value,
        ProductId: this.cart.ProductId
      }
      this.$store.dispatch('setCartItem', payload)
    },
    deleteCart (id) {
      this.$swal({
        title: 'Delete this item from your cart?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ff9321',
        cancelButtonColor: '#00c9b7',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed === false) {
            this.$router.push('/cart')
          } else {
            this.$swal(
              'Deleted!',
              'Your product has been deleted.',
              'success'
            )
            this.$store.dispatch('deleteCart', id)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  watch: {
    value () {
      this.changeCartAmount()
    }
  }
}
</script>

<style>

</style>
