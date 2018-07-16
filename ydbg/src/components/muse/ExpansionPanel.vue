<template>
  <div>
    <Header
      :headerName="headerName"
    />

    <mu-container>
      <h1>扩展面板</h1>
      <mu-expansion-panel>
        <div slot="header">Panel 1</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
        lobortis eget.
        <mu-button slot="action" flat>Cancel</mu-button>
        <mu-button slot="action" flat color="primary">Save</mu-button>
      </mu-expansion-panel>
      <mu-expansion-panel>
        <div slot="header">Panel 2</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
        lobortis eget.
      </mu-expansion-panel>
      <mu-expansion-panel>
        <div slot="header">Panel 3</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
        lobortis eget.
      </mu-expansion-panel>

      <h1>手风琴模式</h1>
      <mu-expansion-panel :expand="panel === 'panel1'" @change="toggle('panel1')">
        <div slot="header">Panel 1</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
        lobortis eget.
      </mu-expansion-panel>
      <mu-expansion-panel :expand="panel === 'panel2'" @change="toggle('panel2')">
        <div slot="header">Panel 2</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
        lobortis eget.
      </mu-expansion-panel>
      <mu-expansion-panel :expand="panel === 'panel3'" @change="toggle('panel3')">
        <div slot="header">Panel 3</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
        lobortis eget.
      </mu-expansion-panel>
    </mu-container>


  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "ExpansionPanel",
    components: {Header},
    data() {
      return {
        headerName: "ExpansionPanel",
        panel: ''
      }
    },
    methods: {
      toggle(panel) {
        this.panel = panel === this.panel ? '' : panel;
      }
    }
  }
</script>

<style scoped lang="less">

</style>
