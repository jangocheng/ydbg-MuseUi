<template>
  <div id="main">
    <!--顶部标签-->
    <Header
      :headerName="headerName"
    />
    <mu-container>
      <!--内容-->
      <router-view></router-view>



      <!--底部标签-->
      <mu-bottom-nav
        :value="bottomNav"
        @change="handleChange">
        <mu-bottom-nav-item
          v-for="(item,index) in bottomNavList"
          :title="item.title"
          :value="item.value"
          :icon="item.icon"
          :key="index">
        </mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    components: {Header},
    name: "Main",
    data() {
      return {
        bottomNav: 'demo',
        bottomNavList: [
          {
            title: 'demo',
            value: 'demo',
            icon: 'restore'
          },
          {
            // title: '消息',
            title: '框架介绍',
            value: 'message',
            icon: 'favorite'
          },
          {
            title: '日程',
            value: 'schedule',
            icon: 'location_on'
          },
          {
            title: '工作',
            value: 'work',
            icon: 'flight_takeoff'
          },
          {
            title: '通讯录',
            value: 'mailList',
            icon: 'cloud_download'
          },
          {
            title: '我的',
            value: 'home',
            icon: 'info'
          },
        ],
        headerName: '',
      }
    },
    created: function () {
      this.HEADERNAME();
      // this.$router.push({
      //   path: this.bottomNav
      // })
    },
    methods: {
      HEADERNAME() {
        switch (this.bottomNav) {
          case 'demo':
            this.headerName = 'demo';
            break;
          case 'message':
            this.headerName = '消息';
            break;
          case 'schedule':
            this.headerName = '日程';
            break;
          case 'mailList':
            this.headerName = '通讯录';
            break;
          case 'home':
            this.headerName = '我的';
            break;
          case 'work':
            this.headerName = '工作';
            break;
        }
      },
      handleChange(arg) {
        this.bottomNav = arg;
        this.HEADERNAME();
        if (this.bottomNav == 'demo') {
          this.$router.push({
            path: '/' + this.bottomNav
          })
        }
        else {
          console.log(this.bottomNav)
          this.$router.push({
            path: this.bottomNav
          })
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @import '../variable';

  .mu-bottom-nav {
    position: fixed;
    bottom: 0;
    width: @max;
    box-sizing: border-box;
    .mu-bottom-item {
      max-width: auto;
      min-width: auto;
    }
  }
</style>
