<template>
  <div>
    <Header
      :headerName="headerName"
    />
    <mu-container>
      <h1>进度条</h1>
      <mu-flex class="demo-linear-progress">
        <mu-linear-progress></mu-linear-progress>
      </mu-flex>
      <mu-flex class="demo-linear-progress">
        <mu-linear-progress color="secondary"></mu-linear-progress>
      </mu-flex>
      <mu-flex class="demo-linear-progress">
        <mu-linear-progress :value="linear" mode="determinate" color="green"></mu-linear-progress>
      </mu-flex>

      <h1>不同的色彩和大小</h1>
      <mu-flex class="demo-linear-progress">
        <mu-linear-progress mode="determinate" :value="30"></mu-linear-progress>
      </mu-flex>
      <mu-flex class="demo-linear-progress">
        <mu-linear-progress mode="determinate" :value="60" :size="10" color="secondary"></mu-linear-progress>
      </mu-flex>
      <mu-flex class="demo-linear-progress">
        <mu-linear-progress mode="determinate" :value="90"  :size="15" color="green"></mu-linear-progress>
      </mu-flex>

      <h1>环形进度条</h1>
      <mu-circular-progress class="demo-circular-progress" :size="36"></mu-circular-progress>
      <mu-circular-progress class="demo-circular-progress" color="secondary" :stroke-width="5" :size="48"></mu-circular-progress>
      <mu-circular-progress class="demo-circular-progress" color="warning" :stroke-width="7" :size="56"></mu-circular-progress>

      <h1>定值圆环</h1>
      <mu-circular-progress class="demo-circular-progress" mode="determinate" :value="40" :size="56"></mu-circular-progress>
      <mu-circular-progress class="demo-circular-progress" mode="determinate" :value="60" color="secondary" :stroke-width="5" :size="72"></mu-circular-progress>
      <mu-circular-progress class="demo-circular-progress" mode="determinate" :value="80" color="warning" :stroke-width="7" :size="96"></mu-circular-progress>

    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "Progress",
    components: {Header},
    data() {
      return {
        headerName: "Progress",
        linear: 10,


      }
    },
    created () {
      this.timer = setInterval(() => {
        this.linear += 10;
        if (this.linear > 100) this.linear = 0;
      }, 1000)
    },
    beforeDestroy () {
      if (this.timer) clearInterval(this.timer);
    }
  }
</script>

<style scoped lang="less">
  .demo-linear-progress {
    margin: 16px 0;
  }
</style>
