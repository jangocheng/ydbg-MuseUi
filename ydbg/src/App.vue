<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App'
  }

</script>

<style lang="less">
  @import 'variable';
  @import '../node_modules/muse-ui/dist/muse-ui.css';

  html, body, #app, #main {
    width: @max;
    height: @max;
    margin: 0;
    padding: 0;
  }
  #app{
    position: relative;
  }
  .container{
    padding-top: 56px;/*no*/
    padding-bottom: 56px;/*no*/
    box-sizing: border-box;
    position: absolute;
    top: 0;
  }
  .my-container {
    padding-top: 40px; /*no*/
    box-sizing: border-box;
  }
</style>
