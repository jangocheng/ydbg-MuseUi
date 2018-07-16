<template>
  <div>
    <Header
      :headerName="headerName"
    />
    <mu-container>
      <h1>表单</h1>
      <mu-flex align-items="center" style="padding-bottom: 8px;">
        <span style="margin-right: 16px;">Label Position:</span>
        <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="top" label="Top"></mu-radio>
        <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="left" label="Left"></mu-radio>
        <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="right" label="Right"></mu-radio>
      </mu-flex>
      <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
        <mu-form-item prop="input" label="Input">
          <mu-text-field v-model="form.input"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="select" label="Select">
          <mu-select v-model="form.select">
            <mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
          </mu-select>
        </mu-form-item>
        <mu-form-item prop="date" label="Date Time">
          <mu-date-input v-model="form.date" type="dateTime" actions></mu-date-input>
        </mu-form-item>
        <mu-form-item prop="radio" label="Radio">
          <mu-radio v-model="form.radio" value="male" label="Male"></mu-radio>
          <mu-radio v-model="form.radio" value="female" label="Female"></mu-radio>
        </mu-form-item>
        <mu-form-item prop="checkbox" label="Checkbox">
          <mu-checkbox v-model="form.checkbox" value="eat" label="Eat"></mu-checkbox>
          <mu-checkbox v-model="form.checkbox" value="sleep" label="Sleep"></mu-checkbox>
          <mu-checkbox v-model="form.checkbox" value="run" label="Run"></mu-checkbox>
          <mu-checkbox v-model="form.checkbox" value="movie" label="Movie"></mu-checkbox>
        </mu-form-item>
        <mu-form-item prop="switch" label="Switch">
          <mu-switch v-model="form.switch"></mu-switch>
        </mu-form-item>
        <mu-form-item prop="slider" label="Slider">
          <mu-slider v-model="form.slider"></mu-slider>
        </mu-form-item>
        <mu-form-item prop="textarea" label="Textarea">
          <mu-text-field multi-line :rows="3" :rows-max="6" v-model="form.textarea"></mu-text-field>
        </mu-form-item>
      </mu-form>


      <h1>表单验证</h1>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item label="用户名" help-text="帮助文字" prop="username" :rules="usernameRules">
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password" :rules="passwordRules">
          <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="isAgree" :rules="argeeRules">
          <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click="submit">提交</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "Form",
    components: {Header},
    data() {
      return {
        headerName: "Form",
        options: [
          'Option 1', 'Option 2', 'Option 3', 'Option 4',
          'Option 5', 'Option 6', 'Option 7', 'Option 8',
          'Option 9', 'Option 10'
        ],
        labelPosition: 'top',
        form: {
          input: '',
          select: '',
          date: '',
          radio: '',
          checkbox: [],
          switch: false,
          slider: 30,
          textarea: ''
        },



        usernameRules: [
          { validate: (val) => !!val, message: '必须填写用户名'},
          { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
        ],
        passwordRules: [
          { validate: (val) => !!val, message: '必须填写密码'},
          { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
        ],
        argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议'}],
        validateForm: {
          username: '',
          password: '',
          isAgree: false
        }
      }
    },
    methods: {
      submit () {
        this.$refs.form.validate().then((result) => {
          console.log('form valid: ', result)
        });
      },
      clear () {
        this.$refs.form.clear();
        this.validateForm = {
          username: '',
          password: '',
          isAgree: false
        };
      }
    }
  }
</script>

<style scoped lang="less">
  .mu-demo-form {
    width: 100%;
    max-width: 460px;
  }
</style>
