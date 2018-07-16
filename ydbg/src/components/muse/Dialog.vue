<template>
  <div>
    <Header
      :headerName="headerName"
    />
    <mu-container>
      <h1>对话框</h1>
      <mu-flex justify-content="center">
        <mu-button @click="openSimpleDialog">Open Dialog</mu-button>
      </mu-flex>
      <mu-dialog title="Dialog" width="360" :open.sync="openSimple">
        this is simple Dialog
        <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">Close</mu-button>
      </mu-dialog>

      <h1>Alerts</h1>
      <mu-flex justify-content="center">
        <mu-button @click="openAlertDialog">Open Dialog</mu-button>
      </mu-flex>
      <mu-dialog title="Use Google's location service?" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openAlert">
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">Disagree</mu-button>
        <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">Agree</mu-button>
      </mu-dialog>


      <h1>可滚动的对话框</h1>
      <mu-flex justify-content="center">
        <mu-button @click="openScrollDialog">Open Scroll Dialog</mu-button>
      </mu-flex>
      <mu-dialog title="Phone Ringtone" width="360" scrollable :open.sync="openScroll">
        <mu-list>
          <mu-list-item :key="option" v-for="option in options">
            <mu-list-item-content>
              <mu-radio  :label="option" :value="option" v-model="ringtone"></mu-radio>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
        <mu-button slot="actions" flat color="primary" @click="closeScrollDialog">ok</mu-button>
      </mu-dialog>


      <h1>全屏对话框</h1>
      <mu-flex justify-content="center">
        <mu-button @click="openFullscreenDialog">Open Scroll Dialog</mu-button>
      </mu-flex>
      <mu-dialog width="360" transition="slide-bottom" fullscreen :open.sync="openFullscreen">
        <mu-appbar color="primary" title="Fullscreen Diaolog">
          <mu-button slot="left" icon @click="closeFullscreenDialog">
            <mu-icon value="close"></mu-icon>
          </mu-button>
          <mu-button slot="right" flat  @click="closeFullscreenDialog">
            Done
          </mu-button>
        </mu-appbar>
        <div style="padding: 24px;">
          this is a fullscreen dialog
        </div>
      </mu-dialog>
    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "Dialog",
    components: {Header},
    data() {
      return {
        headerName: "Dialog",
        openSimple: false,
        openAlert: false,
        openScroll: false,
        ringtone: 'None',
        options: [
          'None',
          'Atria',
          'Callisto',
          'Dione',
          'Ganymede',
          'Hangouts Call',
          'Luna',
          'Oberon',
          'Phobos',
          'Pyxis',
          'Sedna',
          'Titania',
          'Triton',
          'Umbriel'
        ],
        openFullscreen: false
      }
    },
    methods: {
      openSimpleDialog () {
        this.openSimple = true;
      },
      closeSimpleDialog () {
        this.openSimple = false;
      },
      openAlertDialog () {
        this.openAlert = true;
      },
      closeAlertDialog () {
        this.openAlert = false;
      },
      openScrollDialog () {
        this.openScroll = true;
      },
      closeScrollDialog () {
        this.openScroll = false;
      },
      openFullscreenDialog () {
        this.openFullscreen = true;
      },
      closeFullscreenDialog () {
        this.openFullscreen = false;
      }
    }
  }
</script>

<style scoped lang="less">

</style>
