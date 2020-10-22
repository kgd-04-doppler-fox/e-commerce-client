<template>
  <div class="hero">
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Bonobo WS</strong>
                <br />
              </h2>
              <p>Workstation power meets workstation-to-workstation portability.</p>
              <router-link class="btn btn-lg btn-success" to="/laptop">
                <b-icon-arrow-right></b-icon-arrow-right> Order Now
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="https://assets.system76.com/products/bonw14/hero_wide.jpg?fit=crop&format=pjpg&height=900&width=2560" width="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style>
</style>
