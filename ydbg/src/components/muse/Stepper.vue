<template>
  <div>
    <Header
      :headerName="headerName"
    />
    <mu-container>
      <h1>步骤条</h1>
      <div class="demo-step-container">
        <mu-stepper :active-step="activeStep">
          <mu-step>
            <mu-step-label>
              选择活动地点
            </mu-step-label>
          </mu-step>
          <mu-step>
            <mu-step-label>
              创建一个群组
            </mu-step-label>
          </mu-step>
          <mu-step>
            <mu-step-label>
              宣传活动
            </mu-step-label>
          </mu-step>
        </mu-stepper>
        <div class="demo-step-content">
          <p v-if="finished">
            都完成啦!<a href="javascript:;" @click="reset">点这里</a>可以重置
          </p>
          <template v-if="!finished">
            <p>
              {{content}}
            </p>
            <div>
              <mu-button flat class="demo-step-button" :disabled="activeStep === 0" @click="handlePrev"> 上一步</mu-button>
              <mu-button class="demo-step-button" color="primary" @click="handleNext"> {{activeStep === 2 ? '完成' :
                '下一步'}}
              </mu-button>
            </div>
          </template>
        </div>
      </div>


      <h1>垂直</h1>
      <div class="demo-vsteper-container">
        <mu-stepper :active-step="vactiveStep" orientation="vertical">
          <mu-step>
            <mu-step-label>
              选择活动地点
            </mu-step-label>
            <mu-step-content>
              <p>
                在附近选择一个活动的地点, 最好靠近地铁站公交站，已方便交通，附近设施应尽量完善，最重要的是有Wifi
              </p>
              <mu-button class="demo-step-button" @click="vhandleNext" color="primary">下一步</mu-button>
            </mu-step-content>
          </mu-step>
          <mu-step>
            <mu-step-label>
              创建一个群组
            </mu-step-label>
            <mu-step-content>
              <p>
                创建群组，50人左右，以18-25单身青年为主。。。。。
              </p>
              <mu-button class="demo-step-button" @click="vhandleNext" color="primary">下一步</mu-button>
              <mu-button flat class="demo-step-button" @click="vhandlePrev">上一步</mu-button>
            </mu-step-content>
          </mu-step>
          <mu-step>
            <mu-step-label>
              宣传活动
            </mu-step-label>
            <mu-step-content>
              <p>
                多在群里发消息宣传宣传，有事没事多在群里唠唠嗑，确定的话就ok拉
              </p>
              <mu-button class="demo-step-button" @click="vhandleNext" color="primary">完成</mu-button>
              <mu-button flat class="demo-step-button" @click="vhandlePrev">上一步</mu-button>
            </mu-step-content>
          </mu-step>
        </mu-stepper>
        <p v-if="vfinished">
          都完成啦!<a href="javascript:;" @click="vreset">点这里</a>可以重置
        </p>
      </div>

      <h1>非线性控制</h1>
      <div class="demo-step-container">
        <mu-stepper :active-step="lactiveStep" :linear="false">
          <mu-step :completed="finishs.indexOf(0) !== -1">
            <mu-step-button @click="changeStep(0)">
              选择活动地点
            </mu-step-button>
          </mu-step>
          <mu-step :completed="finishs.indexOf(1) !== -1">
            <mu-step-button @click="changeStep(1)">
              创建一个群组
            </mu-step-button>
          </mu-step>
          <mu-step :completed="finishs.indexOf(2) !== -1">
            <mu-step-button @click="changeStep(2)">
              宣传活动
            </mu-step-button>
          </mu-step>
        </mu-stepper>
        <div class="demo-step-content">
          <mu-button @click="finishs.length === 3 ? (finishs = []) : finish()" color="primary">{{finishs.length === 3 ? 'reset' : 'finish'}}</mu-button>
        </div>
      </div>

      <h1>自定义图标</h1>
      <div class="demo-step-container">
        <mu-stepper :activeStep="0" :linear="false">
          <mu-step>
            <mu-step-label>
              选择活动地点
            </mu-step-label>
          </mu-step>
          <mu-step>
            <mu-step-label class="demo-step-label-warning">
              <mu-icon slot="icon" value="warning" color="red"></mu-icon>
              创建一个群组
            </mu-step-label>
          </mu-step>
          <mu-step>
            <mu-step-label>
              宣传活动
            </mu-step-label>
          </mu-step>
        </mu-stepper>
      </div>
    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "Stepper",
    components: {Header},
    data() {
      return {
        headerName: "Stepper",
        activeStep: 0,
        vactiveStep: 0,
        lactiveStep: 0,
        finishs: [],


      }
    },
    computed: {
      content () {
        let message = ''
        switch (this.activeStep) {
          case 0:
            message = '选择一个活动的地点';
            break
          case 1:
            message = '创建群组，50人左右';
            break
          case 2:
            message = '多在群里发消息宣传宣传';
            break
          default:
            message = 'fuck! 又 TM 出错了！！！';
            break
        }
        return message
      },
      finished () {
        return this.activeStep > 2;
      },
      vfinished () {
        return this.vactiveStep > 2;
      },

    },
    methods: {
      handleNext () {
        this.activeStep++;
      },
      handlePrev () {
        this.activeStep--;
      },
      reset () {
        this.activeStep = 0;
      },
      vhandleNext () {
        this.vactiveStep++;
      },
      vhandlePrev () {
        this.vactiveStep--;
      },
      vreset () {
        this.vactiveStep = 0;
      },
      changeStep (index) {
        this.lactiveStep = index
      },
      finish () {
        if (this.finishs.indexOf(this.lactiveStep) === -1) this.finishs.push(this.lactiveStep);
      },

    }
  }
</script>

<style scoped lang="less">
  .demo-vsteper-container{
    max-width: 380px;
    max-height: 400px;
    margin: auto;
  }

  .demo-step-content {
    margin: 0  16px;
  }

  .demo-step-button {
    margin-top: 12px;
    margin-right: 12px;
  }

  .demo-vsteper-container{
    max-width: 380px;
    max-height: 400px;
    margin: auto;
  }

  .demo-step-container {
    width: 100%;
    max-width: 700px;
    margin: auto;
  }

  .demo-step-content {
    margin: 0  16px;
  }

  .demo-step-button {
    margin-top: 12px;
    margin-right: 12px;
  }
</style>
