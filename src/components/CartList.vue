<template>
  <tr>
    <th scope="row" class="border-0">
      <div class="p-2">
      <img :src="cartProduct.Product.image_url" alt=""
        width="70" class="img-fluid rounded shadow-sm">
        <div class="ml-3 d-inline-block align-middle">
          <h6 class="text-dark d-inline-block align-middle"> {{ cartProduct.Product.name }}</h6>
          <span
          class="text-muted font-weight-normal font-italic d-block">Category: {{ cartProduct.Product.category }}</span>
        </div>
      </div>
    </th>
    <td class="border-0 align-middle">
    <button @click="decreaseAmount(cartProduct.id, cartProduct.amount)" class="btn ml-auto mr-4"><i class="fa fa-minus-square" aria-hidden="true"></i></button>
    <strong>{{ cartProduct.amount }}</strong>
    <button @click="increaseAmount(cartProduct.id, cartProduct.amount)" class="btn ml-4"><i class="fa fa-plus-square" aria-hidden="true"></i>
</button></td>
    <td class="border-0 align-middle"><strong>Rp.{{ cartProduct.Product.price }}</strong></td>
    <td @click="deleteItem(cartProduct.id)" class="border-0 align-middle"><a class="text-dark"><i class="fa fa-trash"></i></a></td>
  </tr>
</template>

<script>
export default {
  name: 'CartList',
  props: ['cartProduct'],
  computed: {
  },
  methods: {
    decreaseAmount (id, amount) {
      const updatedAmount = amount - 1
      this.$store.dispatch('setAmount', { id, updatedAmount })
    },
    increaseAmount (id, amount) {
      const updatedAmount = amount + 1
      console.log(updatedAmount)
      this.$store.dispatch('setAmount', { id, updatedAmount })
    },
    deleteItem (id) {
      this.$store.dispatch('deleteItem', id)
    }
  }
}
</script>

<style>

</style>
