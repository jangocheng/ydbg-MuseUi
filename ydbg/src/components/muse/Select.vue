<template>
  <div>
    <Header
      :headerName="headerName"
    />

    <mu-container>
      <h1>选择框</h1>
      <mu-row gutter>
        <mu-col span="12" lg="4" sm="6">
          <mu-select label="Normal" v-model="normal.value1" full-width>
            <mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
          </mu-select>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-select label="Disabled Options" v-model="normal.value3" full-width>
            <mu-option v-for="option,index in options" :disabled="index % 2 !== 0" :key="option" :label="option" :value="option"></mu-option>
          </mu-select>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-select label="Error" error-text="Please select an option" v-model="normal.value2" full-width>
            <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
          </mu-select>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-select label="Disabled" disabled v-model="normal.value4" full-width>
            <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
          </mu-select>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-select label="Readonly" readonly v-model="normal.value5" full-width>
            <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
          </mu-select>
        </mu-col>
      </mu-row>



      <h1>多选</h1>
      <mu-row gutter>
        <mu-col span="12" lg="4" sm="6">
          <mu-select label="Multi Select" multiple v-model="multi.value1" full-width>
            <mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
          </mu-select>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-select label="Separator" multiple separator="/" v-model="multi.value2" full-width>
            <mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
          </mu-select>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-select label="Use Chips" multiple chips v-model="multi.value3" full-width>
            <mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
          </mu-select>
        </mu-col>
      </mu-row>

      <h1>可搜索</h1>
      <mu-row gutter>
        <mu-col span="12" lg="4" sm="6">
          <mu-select label="Filerable Select" filterable v-model="filterable.value1" full-width>
            <mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
          </mu-select>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-select label="Multi Filerable Select" filterable multiple v-model="filterable.value2" full-width>
            <mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
          </mu-select>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-select label="Use Chips Filterable" filterable multiple chips v-model="filterable.value3" full-width>
            <mu-option v-for="city,index in citys" :key="city" :label="city" :value="city"></mu-option>
          </mu-select>
        </mu-col>
      </mu-row>

     <!-- <h1>自定义模板</h1>
      <mu-row gutter>
        <mu-col span="12" sm="6">
          <mu-select label="Option Slot" v-model="custom.value1" full-width>
            <mu-option v-for="language,index in languages" avatar :key="language" :label="language" :value="language">
              <mu-list-item-action avatar>
                <mu-avatar :size="36" color="primary">
                  {{language.substring(0, 1)}}
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-content>
                <mu-list-item-title>{{language}}</mu-list-item-title>
              </mu-list-item-content>
            </mu-option>
          </mu-select>
        </mu-col>
        <mu-col span="12" sm="6">
          <mu-select label="Selection Scoped Slot" multiple chips v-model="custom.value2" full-width>
            <template slot="selection" slot-scope="scope">
              <mu-chip :selected="scope.selected" color="teal">
                {{scope.label}}
              </mu-chip>
            </template>
            <mu-option v-for="language,index in languages" :key="language" :label="language" :value="language"></mu-option>
          </mu-select>
        </mu-col>
      </mu-row>
-->

     <!-- <h1>标签输入</h1>
      <mu-row gutter>
        <mu-col span="12" lg="4" sm="6">
          <mu-select label="Tags Input" v-model="tags" multiple tags>
            <mu-option v-for="language,index in languages" :key="language" :label="language" :value="language"></mu-option>
          </mu-select>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-select label="Tags Input" v-model="tags" chips multiple tags>
            <mu-option v-for="language,index in languages" :key="language" :label="language" :value="language"></mu-option>
          </mu-select>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-select label="Tags Input" v-model="tags" chips multiple tags>
            <template slot="selection" slot-scope="scope">
              <mu-chip :selected="scope.selected" color="teal">
                {{scope.label}}
              </mu-chip>
            </template>
            <mu-option v-for="language,index in languages" :key="language" :label="language" :value="language"></mu-option>
          </mu-select>
        </mu-col>
      </mu-row>-->
    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "Select",
    components: {Header},
    data() {
      return {
        headerName: "Select",
        options: [
          'Option 1', 'Option 2', 'Option 3', 'Option 4',
          'Option 5', 'Option 6', 'Option 7', 'Option 8',
          'Option 9', 'Option 10'
        ],
        normal: {
          value1: '',
          value2: '',
          value3: '',
          value4: 'Option 1',
          value5: 'Option 2'
        },


        citys: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ],
        multi: {
          value1: [],
          value2: [],
          value3: []
        },
        filterable: {
          value1: '',
          value2: [],
          value3: []
        },
        custom: {
          value1: '',
          value2: []
        },


      }
    },
  }
</script>

<style scoped lang="less">

</style>
