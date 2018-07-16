<template>
  <div>
    <Header
      :headerName="headerName"
    />
    <mu-container>
      <h1>面包屑导航</h1>
      <mu-breadcrumbs>
        <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}
        </mu-breadcrumbs-item>
      </mu-breadcrumbs>
      <mu-breadcrumbs divider="—">
        <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}
        </mu-breadcrumbs-item>
      </mu-breadcrumbs>


      <h1>图标分隔符</h1>
      <mu-breadcrumbs>
        <mu-icon value="forward" slot="divider"></mu-icon>
        <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}
        </mu-breadcrumbs-item>
      </mu-breadcrumbs>
      <mu-breadcrumbs divider="—">
        <mu-icon value="chevron_right" slot="divider"></mu-icon>
        <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}
        </mu-breadcrumbs-item>
      </mu-breadcrumbs>
    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    components: {Header},
    name: "Breadcrumbs",
    data() {
      return {
        headerName: 'Breadcrumbs',
        items: [
          {
            text: 'Dashboard',
            disabled: false
          },
          {
            text: 'Link 1',
            disabled: false
          },
          {
            text: 'Link 2',
            disabled: true
          }
        ]
      };
    },
  }
</script>

<style scoped lang="less">

</style>
