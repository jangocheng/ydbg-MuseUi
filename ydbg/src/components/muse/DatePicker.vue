<template>
  <div>
    <Header
      :headerName="headerName"
    />

    <mu-container>
      <h1>日期选择器</h1>
      <mu-flex justify-content="between" align-items="end" wrap="wrap">
        <mu-paper :z-depth="1" class="demo-date-picker">
          <mu-date-picker :date.sync="date"></mu-date-picker>
        </mu-paper>
        <mu-paper :z-depth="1" class="demo-date-picker">
          <mu-date-picker landscape :date.sync="date"></mu-date-picker>
        </mu-paper>
      </mu-flex>

      <h1>选择月份和年份</h1>
      <mu-flex wrap="wrap">
        <mu-paper :z-depth="1" class="demo-date-picker">
          <mu-date-picker type="month" :date.sync="date1"></mu-date-picker>
        </mu-paper>
        <mu-paper :z-depth="1" class="demo-date-picker">
          <mu-date-picker type="year" :date.sync="date2"></mu-date-picker>
        </mu-paper>
      </mu-flex>

      <h1>不可选择日期</h1>
      <mu-flex wrap="wrap">
        <mu-paper :z-depth="1" class="demo-date-picker">
          <mu-date-picker :should-disable-date="allowedDates" :date.sync="date3"></mu-date-picker>
        </mu-paper>
      </mu-flex>

      <h1> 不同语言环境</h1>
      <mu-flex wrap="wrap">
        <mu-paper :z-depth="1" class="demo-date-picker">
          <mu-date-picker :date-time-format="enDateFormat" :date.sync="date4"></mu-date-picker>
        </mu-paper>
      </mu-flex>


      <h1></h1>
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
    name: "DatePicker",
    components: {Header},
    data() {
      return {
        headerName: "DatePicker",
        date: undefined,

        date1: undefined,
        date2: undefined,

        date3: undefined,

        date4: undefined,
        enDateFormat,



      }
    },
  }
</script>

<style scoped lang="less">
  .demo-date-picker {
    margin: 8px;
  }
</style>
