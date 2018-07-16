<template>
  <div>
    <Header
      :headerName="headerName"
    />

    <mu-container class="demo-chip-wrapper">
      <h1>薄片</h1>
      <mu-chip class="demo-chip">
        default chip
      </mu-chip>
      <mu-chip class="demo-chip" @delete="handleClose" delete>
        delete chip
      </mu-chip>
      <mu-chip class="demo-chip" color="red">
        <mu-avatar :size="32">
          <img src="../../assets/uicon.jpg">
        </mu-avatar>
        avatar chip
      </mu-chip>
      <mu-chip class="demo-chip" color="green" @delete="handleClose" delete>
        <mu-avatar :size="32">
          <img src="../../assets/uicon.jpg">
        </mu-avatar>
        avatar delete chip
      </mu-chip>
      <mu-chip class="demo-chip" color="teal" @delete="handleClose" delete>
        <mu-avatar :size="32" color="blue">
          <mu-icon value="face"></mu-icon>
        </mu-avatar>
        icon avatar chip
      </mu-chip>

      <mu-chip class="demo-chip" color="blue300" @delete="handleClose" delete>
        <mu-avatar text-color="blue300" color="indigo900" :size="32">MB</mu-avatar>
        custom chip
      </mu-chip>

      <h1>Chips Array</h1>
      <mu-chip class="demo-chip" v-for="chip, index in chips" :key="chip" :color="chip" @delete="remove(index)" delete>{{chip}}</mu-chip>
      <mu-button color="primary" v-if="chips.length === 0" @click="reset">reset</mu-button>

    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  const initChips = ['primary', 'secondary', 'success', 'warning', 'info', 'error'];
  export default {
    name: "Chip",
    components: {Header},
    data() {
      return {
        headerName: "Chip",
        chips: [...initChips]
      }
    },
    methods: {
      handleClose() {
        window.alert('你点击了删除按钮')
      },
      remove (index) {
        this.chips.splice(index, 1);
      },
      reset () {
        this.chips = [...initChips];
      }
    }
  }
</script>

<style scoped lang="less">
  .demo-chip-wrapper {
    text-align: center;
  }

  .demo-chip {
    margin: 8px;
    vertical-align: middle;
  }







  .demo-chip-wrapper {
    text-align: center;
  }
  .demo-chip {
    margin: 8px;
    vertical-align: middle;
  }
</style>
