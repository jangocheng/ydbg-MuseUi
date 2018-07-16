<template>
  <div>
    <Header
      :headerName="headerName"
    />
    <mu-container>
      <h1>时间输入框</h1>
      <mu-row gutter>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input v-model="value1" label="选择日期" label-float full-width></mu-date-input>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input v-model="value2" label="横屏显示" label-float full-width landscape></mu-date-input>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input v-model="value3" label="隐藏日期展示" label-float full-width no-display></mu-date-input>
        </mu-col>
      </mu-row>


      <h1>不同的显示方式</h1>
      <mu-row gutter>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input  icon="today"  v-model="value4" label="popover 显示" label-float full-width></mu-date-input>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input  icon="today" v-model="value5" label="对话框显示" container="dialog" label-float full-width></mu-date-input>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input  icon="today" v-model="value6" label="底部弹出显示" container="bottomSheet" label-float full-width></mu-date-input>
        </mu-col>
      </mu-row>

      <h1>不同的选择模式</h1>
      <mu-row gutter>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input  icon="today" v-model="value7" label="选择日期" type="date" label-float full-width></mu-date-input>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input  icon="today" landscape v-model="value8" label="选择时间" type="time" label-float full-width></mu-date-input>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input  icon="today" v-model="value9" label="选择年份" type="year" label-float full-width></mu-date-input>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input  icon="today" v-model="value10" label="选择月份" type="month" label-float full-width></mu-date-input>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input  icon="today" v-model="value11" label="选择日期和时间" type="dateTime" label-float full-width landscape></mu-date-input>
        </mu-col>
      </mu-row>


      <h1>选择控制</h1>
      <mu-row gutter>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input  icon="today" type="time" v-model="value12" label="显示确定/取消按钮" actions label-float full-width></mu-date-input>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input  icon="today" v-model="value13" label="格式化显示" format="YYYY 年 MM 月 DD 日" label-float full-width></mu-date-input>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input  icon="today" v-model="value14" label="不展示日期" no-display label-float full-width></mu-date-input>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input  icon="today" v-model="value15" label="只能选择当前月份"  :max-date="maxDate" :min-date="minDate" label-float full-width></mu-date-input>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input  icon="today" v-model="value16" label="只能选工作日"  :should-disable-date="disableWeekends" label-float full-width></mu-date-input>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input  icon="today" v-model="value17" label="只能选择偶数日期"  :should-disable-date="allowedDates" label-float full-width></mu-date-input>
        </mu-col>
      </mu-row>


      <h1>不同语言环境</h1>
      <mu-row gutter>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input icon="today" v-model="value18" label="English" label-float full-width :date-time-format="enDateFormat"></mu-date-input>
        </mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  const dayAbbreviation = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec'];
  const monthLongList = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const enDateFormat = {
    formatDisplay (date) {
      return `${dayList[date.getDay()]}, ${monthList[date.getMonth()]} ${date.getDate()}`;
    },
    formatMonth (date) {
      return `${monthLongList[date.getMonth()]} ${date.getFullYear()}`;
    },
    getWeekDayArray (firstDayOfWeek) {
      let beforeArray = [];
      let afterArray = [];
      for (let i = 0; i < dayAbbreviation.length; i++) {
        if (i < firstDayOfWeek) {
          afterArray.push(dayAbbreviation[i]);
        } else {
          beforeArray.push(dayAbbreviation[i]);
        }
      }
      return beforeArray.concat(afterArray);
    },
    getMonthList () {
      return monthList;
    }
  };

  export default {
    name: "DateInput",
    components: {Header},
    data() {
      const minDate = new Date();
      const maxDate = new Date();
      minDate.setDate(1);
      maxDate.setMonth(maxDate.getMonth() + 1);
      maxDate.setDate(0);
      return {
        headerName: "DateInput",
        value1: undefined,
        value2: undefined,
        value3: undefined,
        value4: undefined,
        value5: undefined,
        value6: undefined,
        value7: undefined,
        value8: undefined,
        value9: undefined,
        value10: undefined,
        value11: undefined,
        value12: null,
        value13: null,
        value14: null,
        value15: null,
        value16: null,
        value17: null,
        minDate,
        maxDate,
        value18: undefined,
        enDateFormat

      }
    },
    methods: {
      disableWeekends (date) {
        return date.getDay() === 0 || date.getDay() === 6
      },
      allowedDates (date) {
        return date.getDate() % 2 === 0
      }
    }
  }
</script>

<style scoped lang="less">

</style>
