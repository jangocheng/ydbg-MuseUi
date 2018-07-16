<template>
  <div>
    <Header
      :headerName="headerName"
    />
    <mu-container>
      <h1>底部表单</h1>
      <mu-flex justify-content="center">
        <mu-button @click="openBotttomSheet">OPEN Bottom Sheet</mu-button>
      </mu-flex>
      <mu-bottom-sheet :open.sync="open">
        <mu-list @item-click="closeBottomSheet">
          <mu-sub-header>Select One</mu-sub-header>
          <mu-list-item button>
            <mu-list-item-action>
              <mu-icon value="grade" color="orange"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>Star</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-action>
              <mu-icon value="inbox" color="blue"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>Inbox</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-action>
              <mu-icon value="chat" color="green"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>Chat</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-action>
              <mu-icon value="email" color="cyan"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>Email</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-bottom-sheet>
    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "BottomSheet",
    components: {Header},
    data() {
      return {
        headerName: 'Bottom Sheet',
        open:false,
      };
    },
    methods:{
      openBotttomSheet(){
        this.open = true;
      },
      closeBottomSheet(){
        this.open = false;
      },
    }
  }
</script>

<style scoped>

</style>
