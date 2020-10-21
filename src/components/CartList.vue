<template>
  <b-input-group>
    <b-input-group-prepend>
      <b-btn variant="info" @click="decrement()">-</b-btn>
    </b-input-group-prepend>
    <b-form-input type="number" v-model="quantity"></b-form-input>
    <b-input-group-append>
      <b-btn variant="info" @click="increment()">+</b-btn>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {
  name: 'CartList',
  data () {
    return {
      quantity: 1
    }
  },
  methods: {
    increment () {
      this.quantity++
    },
    decrement () {
      if (this.quantity === 1) {
        alert('Negative quantity not allowed')
      } else {
        this.quantity--
      }
    }
  }
}
</script>

<style>

</style>
