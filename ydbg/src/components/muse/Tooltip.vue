<template>
  <div>
    <Header
      :headerName="headerName"
    />

    <mu-container>
      <h1>提示</h1>
      <mu-flex justify-content="around" align-items="center">
        <mu-tooltip content="提示信息">
          <mu-button color="primary">Tooltip</mu-button>
        </mu-tooltip>
        <mu-tooltip content="打印">
          <mu-button icon>
            <mu-icon value="print"></mu-icon>
          </mu-button>
        </mu-tooltip>
        <mu-tooltip content="提示信息">
          <span>文本提示信息</span>
        </mu-tooltip>
      </mu-flex>

      <h1> 位置</h1>
      <mu-flex justify-content="around" align-items="center">
        <mu-tooltip :placement="placement" content="提示信息">
          <mu-button color="primary">Tooltip</mu-button>
        </mu-tooltip>
        <mu-tooltip :placement="placement" content="打印">
          <mu-button icon>
            <mu-icon value="print"></mu-icon>
          </mu-button>
        </mu-tooltip>
        <mu-tooltip :placement="placement" content="提示信息">
          <span>文本提示信息</span>
        </mu-tooltip>
      </mu-flex>
      <p class="demo-tooltip-title">弹出位置：</p>
      <mu-row>
        <mu-col :key="p" v-for="p in placements" span="6" md="4">
          <mu-radio v-model="placement" :value="p" :label="p"></mu-radio>
        </mu-col>
      </mu-row>
    </mu-container>

  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "Tooltip",
    components: {Header},
    data() {
      return {
        headerName: "Tooltip",
      }
    },
  }
</script>

<style scoped lang="less">

</style>
