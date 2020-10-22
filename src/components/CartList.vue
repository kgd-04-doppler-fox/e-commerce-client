<template>
<div class="container mt-5">
  <div class="row">
    <div class="col-lg-8">
      <div class="card wish-list mb-3">
        <div class="card-body">
          <h5 class="mb-4">Cart (<span>2</span> items)</h5>
          <CartItem
            v-for="cart in carts"
            :key="cart.id"
            :cart="cart"
          />
          <p class="text-primary mb-0"><i class="fas fa-info-circle mr-1"></i> Do not delay the purchase, adding
            items to your cart does not mean booking them.</p>
        </div>
      </div>
      <!-- Card -->
      <!-- Card -->
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="mb-4">Expected shipping delivery</h5>
          <p class="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
        </div>
      </div>
      <!-- Card -->
      <!-- Card -->
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="mb-4">We accept</h5>
          <img class="mr-2" width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
            alt="Visa">
          <img class="mr-2" width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
            alt="American Express">
          <img class="mr-2" width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
            alt="Mastercard">
        </div>
      </div>
      <!-- Card -->
    </div>
    <!--Grid column-->
    <!--Grid column-->
    <div class="col-lg-4">
      <!-- Card -->
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="mb-3">The total amount of</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Temporary amount
              <span>$25.98</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
              Shipping
              <span>Free</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>The total amount of</strong>
                <strong>
                  <p class="mb-0">(including VAT)</p>
                </strong>
              </div>
              <span><strong>$53.98</strong></span>
            </li>
          </ul>
          <button type="button" class="btn btn-primary btn-block waves-effect waves-light">go to checkout</button>
        </div>
      </div>
      <!-- Card -->
      <!-- Card -->
      <div class="card mb-3">
        <div class="card-body">
          <a class="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample1"
            aria-expanded="false" aria-controls="collapseExample1">
            Add a discount code (optional)
            <span><i class="fas fa-chevron-down pt-1"></i></span>
          </a>
          <div class="collapse" id="collapseExample1">
            <div class="mt-3">
              <div class="md-form md-outline mb-0">
                <input type="text" id="discount-code1" class="form-control font-weight-light"
                  placeholder="Enter discount code">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Card -->
    </div>
    <!--Grid column-->
  </div>
  <!--Grid row-->
</div>
<!--Section: Block Content-->
</template>

<script>
import CartItem from './CartItem.vue'
export default {
  name: 'CartList',
  data () {
    return {
      value: 0
    }
  },
  components: {
    CartItem
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  },
  methods: {
    getCart () {
      this.$store.dispatch('showCart')
    }
  },
  created () {
    this.getCart()
  },
  computed: {
    carts () {
      return this.$store.state.cart
    }
  }
}
</script>

<style>

</style>
