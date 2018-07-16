<template>
  <div>
    <Header
      :headerName="headerName"
    />

    <mu-container>
      <h1>网格列表</h1>
      <mu-flex justify-content="center">
        <mu-paper :z-depth="1">
          <mu-appbar color="primary">
            <mu-button icon slot="left">
              <mu-icon value="menu"></mu-icon>
            </mu-button>
            Photo
          </mu-appbar>
          <mu-grid-list class="gridlist-demo">
            <mu-sub-header>December</mu-sub-header>
            <mu-grid-tile v-for="tile, index in list" :key="index">
              <img :src="tile.image">
              <span slot="title">{{tile.title}}</span>
              <span slot="subTitle">by <b>{{tile.author}}</b></span>
              <mu-button slot="action" icon>
                <mu-icon value="star_border"></mu-icon>
              </mu-button>
            </mu-grid-tile>
          </mu-grid-list>
        </mu-paper>
      </mu-flex>
      <br>
      <br>
      <br>
      <br>
      <br>
      <h1>不同位置</h1>
      <mu-flex justify-content="center">
        <mu-paper :z-depth="1">
          <mu-appbar color="primary">
            <mu-button icon slot="left">
              <mu-icon value="menu"></mu-icon>
            </mu-button>
            Photo
          </mu-appbar>
          <mu-grid-list class="gridlist-demo">
            <mu-sub-header>December</mu-sub-header>
            <mu-grid-tile v-for="tile,index in list1" :key="'tile' + index" title-position="top" action-position="left"
                          :rows="tile.featured ? 2 : 1" :cols="tile.featured ? 2 : 1">
              <img :src="tile.image"/>
              <span slot="title">{{tile.title}}</span>
              <span slot="subTitle">by <b>{{tile.author}}</b></span>
              <mu-button slot="action" icon>
                <mu-icon value="star_border"></mu-icon>
              </mu-button>
            </mu-grid-tile>
          </mu-grid-list>
        </mu-paper>
      </mu-flex>
      <br>
      <br>
      <br>
      <br>
      <br>
      <h1>在一行显示</h1>
      <mu-grid-list class="gridlist-inline-demo" :cols="4">
        <mu-grid-tile v-for="tile, index in list" :key="index">
          <img :src="tile.image">
          <span slot="title">{{tile.title}}</span>
          <span slot="subTitle">by <b>{{tile.author}}</b></span>
          <mu-button slot="action" icon>
            <mu-icon value="star_border"></mu-icon>
          </mu-button>
        </mu-grid-tile>
      </mu-grid-list>
    </mu-container>
  </div>

</template>

<script>
  import Header from '@/components/Header'
  import breakfast from '../../assets/breakfast.jpg';
  import burger from '../../assets/burger.jpg';
  import camera from '../../assets/camera.jpg';
  import hats from '../../assets/hats.jpg';
  import honey from '../../assets/honey.jpg';
  import morning from '../../assets/morning.jpg';
  import vegetables from '../../assets/vegetables.jpg';
  import waterPlant from '../../assets/water-plant.jpg';

  export default {
    name: "GridList",
    components: {Header},
    data() {
      return {
        headerName: "GridList",
        list: [{
          image: breakfast,
          title: 'Breakfast',
          author: 'Myron',
        }, {
          image: burger,
          title: 'Burger',
          author: 'Linyu'
        }, {
          image: camera,
          title: 'Camera',
          author: 'ruolin'
        }, {
          image: hats,
          title: 'Hats',
          author: 'kakali'
        }, {
          image: honey,
          title: 'Honey',
          author: 'yuyang'
        }, {
          image: morning,
          title: 'Morning',
          author: 'mokayi',
        }, {
          image: vegetables,
          title: 'Vegetables',
          author: 'NUyyyyyyy'
        }, {
          image: waterPlant,
          title: 'water',
          author: 'TDDyyyyyyy'
        }],
        list1: [{
          image: breakfast,
          title: 'Breakfast',
          author: 'Myron',
          featured: true
        }, {
          image: burger,
          title: 'Burger',
          author: 'Linyu'
        }, {
          image: camera,
          title: 'Camera',
          author: 'ruolin'
        }, {
          image: hats,
          title: 'Hats',
          author: 'kakali'
        }, {
          image: honey,
          title: 'Honey',
          author: 'yuyang'
        }, {
          image: morning,
          title: 'Morning',
          author: 'mokayi',
          featured: true
        }, {
          image: vegetables,
          title: 'Vegetables',
          author: 'NUyyyyyyy'
        }, {
          image: waterPlant,
          title: 'water',
          author: 'TDDyyyyyyy'
        }]
      }
    },
  }
</script>

<style scoped lang="less">
  .gridlist-demo {
    width: 100%;
    height: 450px;
    overflow-y: auto;
  }

  .mu-paper {
    width: 100%;
    height: 450px;
  }

  .gridlist-inline-demo {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
</style>
