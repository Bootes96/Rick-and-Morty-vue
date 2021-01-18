<template>
  <div class="app-loader">
    <div id="app">
      <Hexagon></Hexagon>
    </div>
  </div>
</template>

<script>
import { Hexagon } from "vue-loading-spinner";
export default {
  components: {
    Hexagon
  },
}
</script>

<style lang='scss'>
  .spinner.spinner--hexagon {
    width: 140px !important;
    height: 140px !important;
    margin: 0 auto;
    margin-top: 200px;
  }

  .spinner-inner {
    transform: scale(0.6234) !important;
  }
</style>