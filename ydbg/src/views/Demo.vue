<template>
  <div>
    <mu-list
      @change="handleChange"
      :value="muListVal">

      <mu-list-item
        button
        v-for="(item,index) in muList"
        :value="item.value"
        :key="index">
        <mu-list-item-title>{{item.value}}</mu-list-item-title>
      </mu-list-item>

    </mu-list>
  </div>
</template>

<script>
  export default {
    name: "Demo",
    data() {
      return {
        muListVal: '',
        muList: [
          {
            value: 'alert'
          },
          {
            value: 'app-bar'
          },
          {
            value: 'avatar'
          },
          {
            value: 'badge'
          },
          {
            value: 'bottom-navigation'
          },
          {
            value: 'bottom-sheet'
          },
          {
            value: 'breadcrumbs'
          },
          {
            value: 'buttons'
          },
          {
            value: 'card'
          },
          {
            value: 'carousel'
          },
          {
            value: 'chip'
          },
          {
            value: 'data-table'
          },
          {
            value: 'dialog'
          },
          {
            value: 'divider'
          },
          {
            value: 'drawer'
          },
          {
            value: 'expansion-panel'
          },
          {
            value: 'grid-list'
          },
          {
            value: 'form'
          },
          {
            value: 'date-input'
          },
          {
            value: 'select'
          },
          {
            value: 'select-controls'
          },
          {
            value: 'text-field'
          },
          {
            value: 'auto-complete'
          },
          {
            value: 'list'
          },
          {
            value: 'load-more'
          },
          {
            value: 'menu'
          },
          {
            value: 'pagination'
          },
          {
            value: 'Paper'
          },
          {
            value: 'date-picker'
          },
          {
            value: 'time-picker'
          },
          {
            value: 'popover'
          },
          {
            value: 'progress'
          },
          {
            value: 'slide-picker'
          },
          {
            value: 'slider'
          },
          {
            value: 'snackbar'
          },
          {
            value: 'stepper'
          },
          {
            value: 'subHeader'
          },
          {
            value: 'tabs'
          },
          {
            value: 'tooltip'
          },
        ]
      }
    },
    methods: {
      handleChange(e) {
        console.log(e)
        this.muListVal = e;
        this.$router.push({path:'/'+this.muListVal})
      },
    }
  }
</script>

<style scoped lang="less">
  .demo-list-wrap {
    width: 100%;
    max-width: 360px;
  }
</style>
