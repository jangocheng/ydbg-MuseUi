<template>
  <div>
    <Header
      :headerName="headerName"
    />

    <mu-container>
      <h1>分页</h1>
      <mu-flex justify-content="center">
        <mu-pagination :total="1000" :current.sync="current"></mu-pagination>
      </mu-flex>
      <mu-flex justify-content="center" style="margin: 32px 0;">
        <mu-pagination raised :total="1000" :current.sync="current"></mu-pagination>
      </mu-flex>
      <mu-flex justify-content="center">
        <mu-pagination raised circle :total="1000" :current.sync="current"></mu-pagination>
      </mu-flex>
    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "Pagination",
    components: {Header},
    data() {
      return {
        headerName: "Pagination",
        current: 1
      }
    },
  }
</script>

<style scoped lang="less">

</style>
