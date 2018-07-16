<template>
  <div>
    <Header
      :headerName="headerName"
    />
    <mu-container>
      <mu-row>
        <mu-col span="6" offset="3">
          <mu-paper :z-depth="2">
            <mu-list>
              <mu-sub-header>Today</mu-sub-header>
              <mu-list-item avatar>
                <mu-list-item-action avatar>
                  <mu-avatar>
                    <img src="../../assets/uicon.jpg">
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Mike Li</mu-list-item-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-icon value="chat_bubble"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item avatar>
                <mu-list-item-action avatar>
                  <mu-avatar>
                    <img src="../../assets/uicon.jpg">
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Maco Mai</mu-list-item-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-icon value="chat_bubble"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item avatar>
                <mu-list-item-action avatar>
                  <mu-avatar>
                    <img src="../../assets/uicon.jpg">
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Alex Qin</mu-list-item-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-icon value="chat_bubble"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item avatar>
                <mu-list-item-action avatar>
                  <mu-avatar>
                    <img src="../../assets/uicon.jpg">
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Allen Qun</mu-list-item-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-icon value="chat_bubble"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item avatar>
                <mu-list-item-action avatar>
                  <mu-avatar>
                    <img src="../../assets/uicon.jpg">
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Myron Liu</mu-list-item-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-icon value="chat_bubble"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
            </mu-list>
            <mu-divider></mu-divider>
            <mu-list>
              <mu-sub-header>History</mu-sub-header>
              <mu-list-item avatar>
                <mu-list-item-action avatar>
                  <mu-avatar>
                    <img src="../../assets/uicon.jpg">
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Gaia Zhou</mu-list-item-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-icon value="chat_bubble"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item avatar>
                <mu-list-item-action avatar>
                  <mu-avatar>
                    <img src="../../assets/uicon.jpg">
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Miller Wang</mu-list-item-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-icon value="chat_bubble"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
            </mu-list>
          </mu-paper>
        </mu-col>
      </mu-row>
    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "SubHeader",
    components: {Header},
    data() {
      return {
        headerName: "SubHeader",
      }
    },
  }
</script>

<style scoped lang="less">
</style>
