<template>
  <header>
    <mu-appbar style="width: 100%;" color="primary">

      <mu-button icon slot="left" @click="jump()">
        <mu-icon value="keyboard_arrow_left"></mu-icon>
      </mu-button>


      {{normalizedSize}}


      <mu-menu slot="right">
        <mu-button flat>MENU</mu-button>
        <mu-list slot="content">
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>Menu Item 1</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-content>
              <mu-list-item-title>Menu Item 2</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
      </mu-menu>


    </mu-appbar>
  </header>
</template>

<script>
  export default {
    name: "Header",
    props: ['headerName'],
    data() {
      return {}
    },
    computed: {
      normalizedSize: function () {
        return this.headerName
      }
    },
    methods: {
      jump() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 56px;/*no*/
    z-index: 1000;
  }
</style>
