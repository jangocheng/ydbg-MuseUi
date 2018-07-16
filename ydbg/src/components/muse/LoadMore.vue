<template>
  <div>
    <Header
      :headerName="headerName"
    />

    <!--<mu-container>-->
      <!--<h1>加载控件</h1>-->

      <!---->
    <!--</mu-container>-->
    <mu-paper :z-depth="1" class="demo-loadmore-wrap">
      <mu-appbar color="teal">
        <mu-button icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        LoadMore
        <mu-button icon slot="right" @click="refresh()">
          <mu-icon value="refresh"></mu-icon>
        </mu-button>
      </mu-appbar>
      <mu-container ref="container" class="demo-loadmore-content">
        <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
          <mu-list>
            <template v-for="i in num">
              <mu-list-item>
                <mu-list-item-title>{{text}} Item {{i}}</mu-list-item-title>
              </mu-list-item>
              <mu-divider/>
            </template>
          </mu-list>
        </mu-load-more>
      </mu-container>
    </mu-paper>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "LoadMore",
    components: {Header},
    data() {
      return {
        headerName: "LoadMore",
        num: 10,
        refreshing: false,
        loading: false,
        text: 'List',

      }
    },
    methods: {
      refresh() {
        this.refreshing = true;
        this.$refs.container.scrollTop = 0;
        setTimeout(() => {
          this.refreshing = false;
          this.text = this.text === 'List' ? 'Menu' : 'List';
          this.num = 10;
        }, 2000)
      },
      load() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.num += 10;
        }, 2000)
      }
    }
  }
</script>

<style scoped lang="less">
  .mu-paper{
    height: 100%;
  }
  .demo-loadmore-wrap {
    padding-top: 56px;/*no*/
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    .mu-appbar {
      width: 100%;
    }
  }

  .demo-loadmore-content {
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding: 0;
    position:static;
  }
</style>
