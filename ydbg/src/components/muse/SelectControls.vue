<template>
  <div>
    <Header
      :headerName="headerName"
    />
    <mu-container>
      <h1>选择控件</h1>
      <mu-flex class="select-control-row">
        <mu-checkbox v-model="normal.checkbox" :label="'Checkbox: ' + normal.checkbox"></mu-checkbox>
      </mu-flex>
      <div class="select-control-group">
        <mu-flex class="select-control-row" :key="'radio ' + i" v-for="i in 3">
          <mu-radio :value="i" v-model="normal.radio" :label="'Radio ' + i"></mu-radio>
        </mu-flex>
      </div>
      <mu-flex class="select-control-row">
        <mu-switch v-model="normal.switch" :label="'Switch: ' + normal.switch"></mu-switch>
      </mu-flex>

      <h1> Checkbox</h1>
      <mu-flex class="select-control-row">
        <mu-checkbox v-model="checkbox.value2" uncheck-icon="favorite_border" checked-icon="favorite"
                     label="自定义图标"></mu-checkbox>
      </mu-flex>
      <mu-flex class="select-control-row">
        <mu-checkbox v-model="checkbox.value3" uncheck-icon="visibility_off" checked-icon="visibility"
                     label="自定义图标"></mu-checkbox>
      </mu-flex>
      <div class="select-control-group">
        Selects: {{checkbox.value1}}
        <mu-flex class="select-control-row">
          <mu-checkbox label="全选" :input-value="checkAll" @change="handleCheckAll('all')"
                       :checked-icon="this.checkbox.value1.length < 3 ? 'indeterminate_check_box' : undefined"></mu-checkbox>
        </mu-flex>
        <mu-flex class="select-control-row" :key="'Checkbox ' + i" v-for="i in 3">
          <mu-checkbox :value="'Checkbox ' + i" v-model="checkbox.value1" :label="'Checkbox ' + i"
                       @change="handleCheckAll"></mu-checkbox>
        </mu-flex>
      </div>
      不可用状态
      <mu-flex class="select-control-row">
        <mu-checkbox disabled label="disabled"></mu-checkbox>
      </mu-flex>
      <mu-flex class="select-control-row">
        <mu-checkbox disabled :input-value="true" label="disabled"></mu-checkbox>
      </mu-flex>


      <h1> Raido</h1>
      <mu-flex class="select-control-row">
        <mu-radio v-model="radio.value2" value="heart" uncheck-icon="favorite_border" checked-icon="favorite"
                  label="自定义图标"></mu-radio>
      </mu-flex>
      <mu-flex class="select-control-row">
        <mu-radio v-model="radio.value2" value="visibility" uncheck-icon="visibility_off" checked-icon="visibility"
                  label="自定义图标"></mu-radio>
      </mu-flex>
      <div class="select-control-group">
        Selects: {{radio.value1}}
        <mu-flex class="select-control-row" :key="'radio ' + i" v-for="i in 3">
          <mu-radio :value="'radio ' + i" v-model="radio.value1" :label="'radio ' + i"></mu-radio>
        </mu-flex>
      </div>

      不可用状态
      <mu-flex class="select-control-row">
        <mu-radio disabled v-model="radio.value3" value="null" label="disabled"></mu-radio>
      </mu-flex>
      <mu-flex class="select-control-row">
        <mu-radio disabled v-model="radio.value3" value="disable" label="disabled"></mu-radio>
      </mu-flex>


      <h1>Switch</h1>
      <mu-flex class="select-control-row">
        <mu-switch v-model="switchVal.value1" label="switch"></mu-switch>
      </mu-flex>
      <mu-flex class="select-control-row">
        <mu-switch v-model="switchVal.value2" label="switch"></mu-switch>
      </mu-flex>
      <mu-flex class="select-control-row">
        <mu-switch v-model="switchVal.value3" disabled label="disabled"></mu-switch>
      </mu-flex>

    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "SelectControls",
    components: {Header},
    data() {
      return {
        headerName: "SelectControls",
        normal: {
          checkbox: true,
          radio: 1,
          switch: false
        },
        checkAll: false,
        radio: {
          value1: [],
          value2: 'heart',
          value3: 'disable'
        },
        checkbox: {
          value1: [],
          value2: false,
          value3: false
        },
        switchVal: {
          value1: false,
          value2: true,
          value3: false
        }
      }
    },
    methods: {
      handleCheckAll(arg) {
        if (this.checkbox.value1.length == 3 && arg == 'all') {
          this.checkbox.value1 = [];
          this.checkAll = false;
        }
        else if (this.checkbox.value1.length != 3 && arg == 'all') {
          this.checkAll = true;
          this.checkbox.value1 = ['Checkbox 1', 'Checkbox 2', 'Checkbox 3'];
        }
        else if (this.checkbox.value1.length) {
          this.checkAll = true;
        }
        else if (!this.checkbox.value1.length) {
          this.checkAll = false;
          this.checkbox.value1 = [];
        }
      },
    }
  }
</script>

<style scoped lang="less">
  .select-control-row {
    padding: 8px 0;
  }

  .select-control-group {
    margin: 16px 0;
  }
</style>
