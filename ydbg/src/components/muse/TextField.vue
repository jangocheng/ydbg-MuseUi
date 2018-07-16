<template>
  <div>
    <Header
      :headerName="headerName"
    />


    <mu-container>
      <h1>文本输入框</h1>
      <mu-text-field v-model="value1"></mu-text-field><br/>
      <mu-text-field v-model="value2" placeholder="Please input......"></mu-text-field><br/>
      <mu-text-field v-model="value3" disabled placeholder="disabled input"></mu-text-field><br/>
      <mu-text-field v-model="value4" placeholder="error input" error-text="Please input......"></mu-text-field><br/>
      <mu-text-field v-model="value5" label="Email Address" suffix="@gmail.com"></mu-text-field><br/>
      <mu-text-field v-model="value6" label="Label Float" prefix="$" label-float ></mu-text-field><br/>
      <mu-text-field v-model="value7" label="Password" :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'"></mu-text-field><br/>
      <mu-text-field v-model="value8" label="Full Width" full-width></mu-text-field>



      <h1>多行输入</h1>
      <mu-text-field v-model="value9" placeholder="默认3行, 最大显示6行" multi-line :rows="3" :rows-max="6"></mu-text-field><br/>
      <mu-text-field v-model="value10" multi-line :rows="4" full-width></mu-text-field><br/>


      <h1> 图标显示</h1>
      <mu-text-field v-model="value11" type="number" placeholder="电话号码" icon="phone"></mu-text-field><br/>
      <mu-text-field v-model="value12" multi-line :rows="4" icon="comment"  placeholder="输入信息"></mu-text-field><br/>

      <h1>帮助文字和错误状态</h1>
      <mu-text-field v-model="value13" label="UserName" label-float help-text="用户名为6-12长度的字符" icon="account_circle"></mu-text-field><br/>
      <mu-text-field v-model="value14" label="Password" label-float error-text="请输入密码" icon="locked"></mu-text-field><br/>


      <h1>输入长度限制</h1>
      <mu-text-field v-model="value15" placeholder="最多不超过10个字符" :max-length="10"></mu-text-field><br/>
      <mu-text-field v-model="value16" placeholder="不允许超过100个字符" multi-line :rows="3" :max-length="100"></mu-text-field><br/>


    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "TextField",
    components: {Header},
    data() {
      return {
        headerName: "TextField",
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        visibility: false,

        value9: '',
        value10: '',

        value11: '',
        value12: '',

        value13: '',
        value14: '',

        value15: '',
        value16: ''
      }
    },
  }
</script>

<style scoped lang="less">

</style>
