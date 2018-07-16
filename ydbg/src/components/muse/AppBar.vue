<template>
  <div>
    <Header
      :headerName="headerName"
    />
    <mu-container>
      <h1>顶部导航条</h1>
      <mu-appbar style="width: 100%;" title="Title"></mu-appbar>

      <h1>配合按钮使用</h1>
      <mu-appbar style="width: 100%;" color="primary">
        <mu-button icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>Title
        <mu-button flat slot="right">LOGIN</mu-button>
      </mu-appbar>

      <h1> 配合菜单使用</h1>
      <mu-appbar style="width: 100%;" color="primary">
        <mu-button icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        Title
        <mu-menu slot="right">
          <mu-button flat>MENU</mu-button>
          <mu-list slot="content">
            <mu-list-item button>
              <mu-list-item-content>
                <mu-list-item-title>Menu Item 1</mu-list-item-title>
              </mu-list-item-content>
            </mu-list-item>
            <mu-list-item button>
              <mu-list-item-content>
                <mu-list-item-title>Menu Item 2</mu-list-item-title>
              </mu-list-item-content>
            </mu-list-item>
          </mu-list>
        </mu-menu>
      </mu-appbar>
    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    components: {Header},
    name: "AppBar",
    data() {
      return {
        headerName: 'appbar',
      };
    },
  }
</script>

<style scoped lang="less">

</style>
