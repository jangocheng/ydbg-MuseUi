<template>
  <div>
    <Header
      :headerName="headerName"
    />
    <mu-container>
      <h1>纸片</h1>
      <mu-paper class="demo-paper" :z-depth="1"></mu-paper>
      <mu-paper class="demo-paper" :z-depth="2"></mu-paper>
      <mu-paper class="demo-paper" :z-depth="3"></mu-paper>
      <mu-paper class="demo-paper" :z-depth="4"></mu-paper>
      <mu-paper class="demo-paper" :z-depth="5"></mu-paper>

      <h1> 圆形</h1>
      <mu-paper class="demo-paper" circle :z-depth="1"></mu-paper>
      <mu-paper class="demo-paper" circle :z-depth="2"></mu-paper>
      <mu-paper class="demo-paper" circle :z-depth="3"></mu-paper>
      <mu-paper class="demo-paper" circle :z-depth="4"></mu-paper>
      <mu-paper class="demo-paper" circle :z-depth="5"></mu-paper>
    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "Paper",
    components: {Header},
    data() {
      return {
        headerName: "Paper",
      }
    },
  }
</script>

<style scoped lang="less">
  .demo-paper {
    display: inline-block;
    height: 100px;
    width: 100px;
    margin: 20px;
    text-align: center;
  }
</style>
