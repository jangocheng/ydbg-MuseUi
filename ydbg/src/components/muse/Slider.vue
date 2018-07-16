<template>
  <div>
    <Header
      :headerName="headerName"
    />

    <mu-container>
      <h1>滑块</h1>
      <mu-slider class="demo-slider" v-model="normal.value1"></mu-slider>
      <mu-slider class="demo-slider" :step="10" v-model="normal.value2"></mu-slider>
      <mu-slider class="demo-slider" disabled v-model="normal.value3"></mu-slider>

      <h1>色彩</h1>
      <mu-slider class="demo-slider" color="secondary" v-model="color.value1"></mu-slider>
      <mu-slider class="demo-slider" track-color="green" v-model="color.value2"></mu-slider>
      <mu-slider class="demo-slider" thumb-color="orange" v-model="color.value3"></mu-slider>
    </mu-container>

  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "Slider",
    components: {Header},
    data() {
      return {
        headerName: "Slider",
        normal:{
          value1:10,
          value2:30,
          value3:60,
        },
        color:{
          value1:10,
          value2:30,
          value3:60,
        },

      }
    },
  }
</script>

<style scoped lang="less">

</style>
