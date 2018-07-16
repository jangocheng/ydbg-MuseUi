<template>
  <div>
    <Header
      :headerName="headerName"
    />

    <mu-container>
      <h1>自动补全输入</h1>
      <mu-row gutter>
        <mu-col span="12" lg="4" sm="6">
          <mu-auto-complete :data="fruits" label="提示输入内容" v-model="value1"></mu-auto-complete>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-auto-complete :data="fruits" label="最多显示五条搜索数据" :max-search-results="5" v-model="value2"></mu-auto-complete>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-auto-complete :data="fruits" label="激活及显示输入提示" :max-search-results="5"  v-model="value3" open-on-focus></mu-auto-complete>
        </mu-col>
      </mu-row>

      <h1>自定义模板</h1>
      <mu-row gutter>
        <mu-col span="12" lg="4" sm="6">
          <mu-auto-complete :data="fruits" label="提示输入内容" v-model="value4" avatar>
            <template slot-scope="scope">
              <mu-list-item-action>
                <mu-avatar color="primary">
                  {{scope.item.substring(0, 1)}}
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-content v-html="scope.highlight"></mu-list-item-content>
            </template>
          </mu-auto-complete>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-auto-complete :data="fruits" label="最多显示五条搜索数据" :max-search-results="5" v-model="value5" avatar>
            <template slot-scope="scope">
              <mu-list-item-action>
                <mu-avatar color="primary">
                  {{scope.item.substring(0, 1)}}
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-content v-html="scope.highlight"></mu-list-item-content>
            </template>
          </mu-auto-complete>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-auto-complete :data="fruits" label="激活及显示输入提示" :max-search-results="6"  v-model="value6" open-on-focus avatar>
            <template slot-scope="scope">
              <mu-list-item-action>
                <mu-avatar color="primary">
                  {{scope.item.substring(0, 1)}}
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-content v-html="scope.highlight"></mu-list-item-content>
            </template>
          </mu-auto-complete>
        </mu-col>
      </mu-row>


    </mu-container>


  </div>
</template>

<script>
  import Header from '@/components/Header'
  const fruits = [
    'Apple', 'Apricot', 'Avocado',
    'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
    'Boysenberry', 'Blood Orange',
    'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
    'Coconut', 'Cranberry', 'Clementine',
    'Damson', 'Date', 'Dragonfruit', 'Durian',
    'Elderberry',
    'Feijoa', 'Fig',
    'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
    'Honeydew', 'Huckleberry',
    'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
    'Kiwi fruit', 'Kumquat',
    'Lemon', 'Lime', 'Loquat', 'Lychee',
    'Nectarine',
    'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
    'Olive', 'Orange',
    'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
    'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
    'Quince',
    'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
    'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
    'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
    'Ugli fruit',
    'Watermelon'
  ];
  export default {
    name: "AutoComplete",
    components: {Header},
    data() {
      return {
        headerName: "AutoComplete",
        fruits,
        value1: '',
        value2: '',
        value3: '',

        value4: '',
        value5: '',
        value6: ''
      }
    },
  }
</script>

<style scoped lang="less">

</style>
