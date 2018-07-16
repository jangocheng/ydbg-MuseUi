<template>
  <div>
    <Header
      :headerName="headerName"
    />

    <mu-container>
      <h1>分隔线</h1>
      <mu-paper :z-depth="2">
        <mu-text-field placeholder="Input One" solo full-width class="demo-divider-form"></mu-text-field>
        <mu-divider></mu-divider>
        <mu-text-field placeholder="Input Two" solo full-width class="demo-divider-form"></mu-text-field>
        <mu-divider></mu-divider>
        <mu-text-field placeholder="Input Three" solo full-width class="demo-divider-form"></mu-text-field>
        <mu-divider></mu-divider>
        <mu-text-field placeholder="Input Four" solo full-width class="demo-divider-form"></mu-text-field>
        <mu-divider></mu-divider>
        <mu-text-field placeholder="Input Five" solo full-width class="demo-divider-form"></mu-text-field>
      </mu-paper>


      <h1>分隔列表</h1>
      <mu-row gutter>
        <mu-col span="6">
          <mu-paper :z-depth="2">
            <mu-list>
              <mu-list-item>
                <mu-list-item-content>
                  <mu-list-item-title>List Item 1</mu-list-item-title>
                </mu-list-item-content>
              </mu-list-item>
              <mu-divider shallow-inset></mu-divider>
              <mu-list-item>
                <mu-list-item-content>
                  <mu-list-item-title>List Item 2</mu-list-item-title>
                </mu-list-item-content>
              </mu-list-item>
              <mu-divider shallow-inset></mu-divider>
              <mu-list-item>
                <mu-list-item-content>
                  <mu-list-item-title>List Item 3</mu-list-item-title>
                </mu-list-item-content>
              </mu-list-item>
            </mu-list>
          </mu-paper>
        </mu-col>
        <mu-col span="6">
          <mu-paper :z-depth="2">
            <mu-list>
              <mu-list-item>
                <mu-list-item-action>
                  <mu-icon value="settings"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Setting</mu-list-item-title>
                </mu-list-item-content>
              </mu-list-item>
              <mu-list-item>
                <mu-list-item-action>
                  <mu-icon value="help_outline"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Help</mu-list-item-title>
                </mu-list-item-content>
              </mu-list-item>
              <mu-divider></mu-divider>
              <mu-list-item>
                <mu-list-item-action>
                  <mu-icon value="power_settings_new"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Exit</mu-list-item-title>
                </mu-list-item-content>
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
    name: "Divider",
    components: {Header},
    data() {
      return {
        headerName: "Divider",
      }
    },
  }
</script>

<style scoped lang="less">
  .demo-divider-form {
    padding: 0 16px;
  }
</style>
