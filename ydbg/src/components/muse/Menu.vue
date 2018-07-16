<template>
  <div>
    <Header
      :headerName="headerName"
    />

    <mu-container>
      <h1>菜单</h1>
      <mu-menu cover>
        <mu-button color="primary">dropdown</mu-button>
        <mu-list slot="content">
          <mu-list-item button>
            <mu-list-item-title>Refresh</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Send feedback</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Settings</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Help</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Sign out</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-menu>

      <h1>悬停显示</h1>
      <mu-menu placement="top-start" open-on-hover>
        <mu-button color="primary">Open On Hover</mu-button>
        <mu-list slot="content">
          <mu-list-item button>
            <mu-list-item-title>Refresh</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Send feedback</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Settings</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Help</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Sign out</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-menu>


      <h1> 控制显示</h1>
      <mu-menu cover placement="bottom-end" :open.sync="open">
        <mu-button icon>
          <mu-icon value="more_vert"></mu-icon>
        </mu-button>
        <mu-list slot="content">
          <mu-list-item button>
            <mu-list-item-title>Refresh</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Send feedback</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Settings</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Help</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Sign out</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-menu>
      <mu-button style="margin-left: 8px;" @click="open = !open">Toggle</mu-button>

    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "Menu",
    components: {Header},
    data() {
      return {
        headerName: "Menu",
        open: false
      }
    },
  }
</script>

<style scoped lang="less">

</style>
