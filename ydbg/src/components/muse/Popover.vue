<template>
  <div>
    <Header
      :headerName="headerName"
    />

    <mu-container>
      <h1>弹出框</h1>
      <mu-button ref="button" @click="open = !open">Dropdown</mu-button>
      <mu-popover cover :open.sync="open" :trigger="trigger">
        <mu-list>
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
      </mu-popover>
    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "Popover",
    components: {Header},
    data() {
      return {
        headerName: "Popover",
        open: false,
        trigger: null
      }
    },
    mounted () {
      this.trigger = this.$refs.button.$el;
    }
  }
</script>

<style scoped lang="less">

</style>
