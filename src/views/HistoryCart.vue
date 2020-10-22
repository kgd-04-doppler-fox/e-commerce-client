<template>
 <v-main>
  <div id="historyTable" class="col-10 col-sm-10 col-md-8 mx-auto">
      <h1 class="text-center mb-3">History Cart</h1>
      <v-simple-table>
        <template v-slot:default>
          <thead style="background: #9FA8DA">
            <tr>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Price
              </th>
              <th class="text-left">
                Amount
              </th>
              <th class="text-left">
                Subtotal
              </th>
              <th class="text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <HistoryRow
              v-for="cart in carts"
              :key="cart.id"
              :cart="cart"
            />
          </tbody>
        </template>
      </v-simple-table>
  </div>
  </v-main>
</template>

<script>
import HistoryRow from '../components/HistoryRow'
export default {
  name: 'HistoryPage',
  components: {
    HistoryRow
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  created () {
    this.$store.dispatch('fetchHistoryCart')
  }
}
</script>

<style scoped>
  #historyTable {
    margin-top: 10% !important;
    font-family: 'Nunito', sans-serif;
    color: gray;
  }
  th {
    color: white !important
  }
</style>
