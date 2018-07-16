<template>
  <div>
    <Header
      :headerName="headerName"
    />
    <mu-container>
      <h1> 底部导航</h1>
      <mu-bottom-nav>
        <mu-bottom-nav-item title="Recents" icon="restore"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Favorites" icon="favorite"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Nearby" icon="location_on"></mu-bottom-nav-item>
      </mu-bottom-nav>


      <h1>Shift Mode</h1>
      <mu-bottom-nav :value.sync="shift" shift>
        <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="music" title="Music" icon="music_note"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="books" title="Books" icon="books"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"></mu-bottom-nav-item>
      </mu-bottom-nav>

    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "BottomNavigation",
    components: {Header},
    data() {
      return {
        headerName: 'BottomNavigation',
        shift: 'movies'
      };
    },
  }
</script>

<style scoped>

</style>
