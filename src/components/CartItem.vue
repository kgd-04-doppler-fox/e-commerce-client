<template>
  <div>
    <div class="row mb-4">
    <div class="col-md-5 col-lg-3 col-xl-3">
      <div class="rounded mb-3 mb-md-0">
        <img class="img-fluid w-100"
          src="https://57a42d.hostroomcdn.com/wp-content/uploads/2019/12/The-Skincare-Company-Moisturiser-With-Sunscreen-768x768.png" alt="Sample">
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
            <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3"><i
                class="fas fa-trash-alt mr-1"></i> Remove item </a>
            <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i
                class="fas fa-heart mr-1"></i> Move to wish list </a>
          </div>
          <p class="mb-0"><span><strong>{{ cart.Product.price }}</strong></span></p>
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
  props: ['cart']
}
</script>

<style>

</style>
