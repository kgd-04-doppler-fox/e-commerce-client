<template>
  <v-footer height="auto" id="footer" color="#1A237E">
    <div id="socmed">
    <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon >
      <v-icon size="24px">{{icon}}</v-icon>
    </v-btn>
    <div>
      <v-card-text class="text-center" style="color:white">Anchorman 2020</v-card-text>
    </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-instagram'
      ]
    }
  }
}
</script>

<style scoped>
  #footer {
    margin-top: 10%;
    position: initial;
    bottom: 0%;
    left: 0px;
    width: 100%;
    height: 8%;
    padding: 8px 0px;
  }
  #socmed {
    margin:auto !important;
  }
</style>
