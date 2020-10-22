<template>
  <footer class="mt-5 mb-5">
      <hr />
      <div class="container">
          <div class="row">
              <div class="col text-center">
                  {{ year }}@mswingsfour
              </div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      year: new Date().getFullYear()
    }
  } 
}
</script>

<style>

</style>