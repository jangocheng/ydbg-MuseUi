<template>
  <div>
    <Header
      :headerName="headerName"
    />

    <mu-container>
      <h1>轮播</h1>
      <mu-carousel>
        <mu-carousel-item>
          <img :src="carouselImg1">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="carouselImg2">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="carouselImg3">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="carouselImg4">
        </mu-carousel-item>
      </mu-carousel>


      <h1>渐变过渡</h1>
      <mu-carousel transition="fade">
        <mu-carousel-item>
          <img :src="carouselImg1">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="carouselImg2">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="carouselImg3">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="carouselImg4">
        </mu-carousel-item>
      </mu-carousel>


      <h1>自定义指示器和控制器</h1>
      <mu-carousel :active="active">
        <mu-icon value="arrow_back" slot="left"></mu-icon>
        <mu-icon value="arrow_forward" slot="right"></mu-icon>
        <template slot="indicator" slot-scope="{ index, active }">
          <mu-button icon class="mu-carousel-indicator-button" :class="{'mu-carousel-indicator-button__active': active}" @click="changeActive(index)">
            <span class="rect-indicator"></span>
          </mu-button>
        </template>
        <mu-carousel-item>
          <img :src="carouselImg1">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="carouselImg2">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="carouselImg3">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="carouselImg4">
        </mu-carousel-item>
      </mu-carousel>




      <h1> 隐藏控制器</h1>
      <mu-carousel hide-controls>
        <mu-carousel-item>
          <img :src="carouselImg1">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="carouselImg2">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="carouselImg3">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="carouselImg4">
        </mu-carousel-item>
      </mu-carousel>




    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  import carouselImg1 from '../../assets/carousel1.jpg';
  import carouselImg2 from '../../assets/carousel2.jpg';
  import carouselImg3 from '../../assets/carousel3.jpg';
  import carouselImg4 from '../../assets/carousel4.jpg';

  export default {
    name: "Carousel",
    components: {Header},
    data() {
      return {
        headerName: "Carousel",
        carouselImg1,
        carouselImg2,
        carouselImg3,
        carouselImg4,
        active: 0
      }
    },
    methods:{
      changeActive (index) {
        this.active = index;
      }
    }
  }
</script>

<style scoped lang="less">

</style>
