<template>
    <table class="table table-striped">
    <thead>
        <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Description</th>
            <th scope="col">Buy At</th>
            <th scope="col">Date Buy</th>
        </tr>
    </thead>
    <tbody>
        <HistoryRow v-for="history in histories"
        :key="history.id"
        :history="history"
        />
    </tbody>
    </table>
</template>

<script>
import HistoryRow from '../components/HistoryRow'
export default {
  name: 'History',
  components: {
    HistoryRow
  },
  computed: {
    histories () {
      return this.$store.state.histories
    }
  },
  created () {
    this.$store.dispatch('getHistories')
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('access_token')) {
      next()
    } else {
      next('/')
    }
  }
}
</script>

<style>

</style>
