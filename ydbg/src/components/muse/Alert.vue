<template>
  <div>
    <Header
      :headerName="headerName"
    />
    <mu-container>

      <h1>提示框</h1>
      <div class="alert-demo-wrapper">
        <mu-alert color="success">
          this is success alert
        </mu-alert>
        <mu-alert color="warning">
          this is warning alert
        </mu-alert>
        <mu-alert color="info">
          this is info alert
        </mu-alert>
        <mu-alert color="error">
          this is error alert
        </mu-alert>
      </div>

      <h1>显示 Icon 和 delete 图标</h1>
      <div class="alert-demo-wrapper">
        <mu-alert color="success">
          <mu-icon left value="check_circle"></mu-icon>
          this is success alert
        </mu-alert>
        <mu-alert color="warning">
          <mu-icon left value="priority_high"></mu-icon>
          this is warning alert
        </mu-alert>
        <mu-alert color="info">
          <mu-icon left value="info"></mu-icon>
          this is info alert
        </mu-alert>
        <mu-alert color="error" delete v-if="alert" @delete="closeAlert()">
          <mu-icon left value="warning"></mu-icon>
          this is error alert
        </mu-alert>
        <mu-button color="primary" v-if="!alert" @click="showAlert()">SHOW ALERT</mu-button>
      </div>

      <h1> 过渡动画定制</h1>
      <div class="alert-demo-wrapper">
        <mu-button color="primary" style="margin-bottom: 16px;" @click="toggleAlert()">TOGGLE</mu-button>
        <mu-alert color="warning" @delete="alert1 = false" delete v-if="alert1" transition="mu-scale-transition">
          <mu-icon left value="warning"></mu-icon>
          this is warning alert
        </mu-alert>
      </div>
    </mu-container>

  </div>


</template>

<script>
  import Header from '@/components/Header'

  export default {
    components: {Header},
    name: "Alert",
    data() {
      return {
        headerName: 'alert',
        alert: true,
        alert1: true,
      };
    },
    methods: {
      showAlert() {
        this.alert = true;
      },
      closeAlert() {
        this.alert = false;
      },
      toggleAlert() {
        this.alert1 = !this.alert1;
      }
    }
  }
</script>

<style scoped lang="less">
  /*基础示例*/
  .alert-demo-wrapper {
    width: 100%;
    > .mu-alert {
      margin-bottom: 16px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  /*显示 Icon 和 delete 图标*/
  .alert-demo-wrapper {
    width: 100%;
    > .mu-alert {
      margin-bottom: 16px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    > .mu-button {
      margin: 0 auto;
      display: block;
    }
  }

  /*过渡动画定制*/
  .alert-demo-wrapper {
    width: 100%;
    > .mu-alert {
      margin-bottom: 16px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    > .mu-button {
      margin: 0 auto;
      display: block;
    }
  }

  .mu-scale-transition-enter-active,
  .mu-scale-transition-leave-active {
    transition: transform .45s cubic-bezier(0.23, 1, 0.32, 1), opacity .45s cubic-bezier(0.23, 1, 0.32, 1);
    backface-visibility: hidden;
  }

  .mu-scale-transition-enter,
  .mu-scale-transition-leave-active {
    transform: scale(0);
    opacity: 0;
  }
</style>
