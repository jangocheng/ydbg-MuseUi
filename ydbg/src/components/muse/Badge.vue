<template>
  <div>
    <Header
      :headerName="headerName"
    />
    <mu-container>
      <h1>徽章</h1>
      <mu-list class="badge-list-wrap">
        <mu-list-item>
          <mu-list-item-content>
            <mu-list-item-title>Menu Item 1</mu-list-item-title>
          </mu-list-item-content>
          </mu-list-item-action>
          <mu-badge content="12"></mu-badge>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item>
          <mu-list-item-content>
            <mu-list-item-title>Menu Item 2</mu-list-item-title>
          </mu-list-item-content>
          </mu-list-item-action>
          <mu-badge content="old" color="primary"></mu-badge>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item>
          <mu-list-item-content>
            <mu-list-item-title>Menu Item 3</mu-list-item-title>
          </mu-list-item-content>
          </mu-list-item-action>
          <mu-badge content="news" color="secondary"></mu-badge>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>

      <h1> 搭配图标和按钮</h1>
      <mu-flex justify-content="center">
        <mu-badge content="12" circle color="secondary"  class="demo-icon-badge">
          <mu-icon value="folder"></mu-icon>
        </mu-badge>
        <mu-badge content="12" circle color="secondary">
          <mu-button icon>
            <mu-icon value="notifications"></mu-icon>
          </mu-button>
        </mu-badge>
        <mu-badge class="demo-badge-content" color="transparent">
          <mu-icon value="folder" color="blue"></mu-icon>
          <mu-icon value="cloud_upload" color="red" slot="content"></mu-icon>
        </mu-badge>
        <mu-badge class="demo-badge-content" color="transparent">
          Copyright
          <span style="font-size: 20px; color: red;" slot="content">&copy;</span>
        </mu-badge>
      </mu-flex>

    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    components: {Header},
    name: "Badge",
    data() {
      return {
        headerName: 'badge',
      };
    },
  }
</script>

<style scoped lang="less">
  .badge-list-wrap {
    width: 100%;
    max-width: 360px;
    background-color: #fff;
    margin: 0 auto;
  }




  .badge-list-wrap {
    width: 100%;
    max-width: 360px;
    background-color: #fff;
    margin: 0 auto;
  }
  .demo-icon-badge {
    padding: 12px;
    margin-right: 16px;
  }
  .demo-badge-content {
    padding: 12px;
    margin-left: 16px;
    margin-right: 16px;

  }
</style>
