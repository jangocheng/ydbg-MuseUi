<template>
  <div>
    <Header
      :headerName="headerName"
    />

    <mu-container>
      <h1>时间选择器</h1>
      <mu-flex>
        显示时间：
        <mu-switch class="demo-picker-form" v-model="display"></mu-switch>
      </mu-flex>
      <mu-flex>
        横屏显示：
        <mu-checkbox class="demo-picker-form" v-model="landscape" label="landscape"></mu-checkbox>
      </mu-flex>
      <mu-flex>
        时间类型：
        <mu-radio class="demo-picker-form" v-model="type" value="ampm" label="ampm"></mu-radio>
        <mu-radio class="demo-picker-form" v-model="type" value="24hr" label="24hr"></mu-radio>
      </mu-flex>
      <mu-flex>
        选择模式：
        <mu-radio class="demo-picker-form" v-model="viewType" value="clock" label="clock"></mu-radio>
        <mu-radio class="demo-picker-form" v-model="viewType" value="list" label="list"></mu-radio>
      </mu-flex>
      <mu-flex justify-content="between" align-items="end" wrap="wrap">
        <mu-paper :z-depth="1">
          <mu-time-picker :no-display="!display" :view-type="viewType" :time.sync="time" :format="type" :landscape="landscape"></mu-time-picker>
        </mu-paper>
      </mu-flex>
    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "TimePicker",
    components: {Header},
    data() {
      return {
        headerName: "TimePicker",
        time: undefined,
        landscape: false,
        display: true,
        type: 'ampm',
        viewType: 'clock',


      }
    },
  }
</script>

<style scoped lang="less">
  .demo-picker-form {
    margin: 0 16px 16px;
  }
</style>
