<template>
  <div>
    <Header
      :headerName="headerName"
    />
    <mu-container>
      <h1> 头像</h1>
      <mu-flex>
        <mu-flex>
          改变大小：
        </mu-flex>
        <mu-flex fill style="padding: 0 16px;">
          <mu-slider v-model="size" :min="36" :step="1" :max="200"/>
        </mu-flex>
      </mu-flex>
      <mu-row justify-content="center">
        <mu-avatar :size="size">
          <img src="../../assets/uicon.jpg">
        </mu-avatar>
      </mu-row>


      <h1> 显示文字或者图标</h1>
      <mu-flex justify-content="around">
        <mu-avatar color="indigo">
          <mu-icon value="account_circle"></mu-icon>
        </mu-avatar>
        <mu-avatar>
          <img src="../../assets/uicon.jpg">
        </mu-avatar>
        <mu-avatar text-color="orange200" color="pink400">
          <mu-icon value="folder"></mu-icon>
        </mu-avatar>
        <mu-avatar color="teal">
          K
        </mu-avatar>
        <mu-avatar color="red">
          L
        </mu-avatar>
        <mu-avatar text-color="deepOrange300" color="purple500">
          MU
        </mu-avatar>
      </mu-flex>
    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    components: {Header},
    name: "Avatar",
    data() {
      return {
        headerName: 'avatar',
        size: 56
      };
    },
  }
</script>

<style scoped>

</style>
