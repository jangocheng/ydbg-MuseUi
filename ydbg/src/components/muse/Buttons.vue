<template>
  <div>
    <Header
      :headerName="headerName"
    />
    <mu-container class="button-wrapper">
      <h1>按钮</h1>
      <mu-button color="primary">Primary</mu-button>
      <mu-button color="secondary">Secondary</mu-button>
      <mu-button color="success">Success</mu-button>
      <mu-button color="warning">Warning</mu-button>
      <mu-button color="info">Info</mu-button>
      <mu-button color="error">Error</mu-button>
      <mu-button disabled>disabled</mu-button>


<h1>扁平</h1>
      <mu-button flat>Normal</mu-button>
      <mu-button flat color="primary">Primary</mu-button>
      <mu-button flat color="secondary">Secondary</mu-button>
      <mu-button flat color="success">Success</mu-button>
      <mu-button flat color="warning">Warning</mu-button>
      <mu-button flat disabled>disabled</mu-button>



      <h1>图标</h1>
      <div class="button-wrapper">
        <mu-button icon color="primary">
          <mu-icon value="grade"></mu-icon>
        </mu-button>
        <mu-button icon color="secondary">
          <mu-icon value="android"></mu-icon>
        </mu-button>
        <mu-button icon>
          <i class="mudocs-icon-custom-github"></i>
        </mu-button>
        <mu-button icon color="red">
          <mu-icon value="thumb_up"></mu-icon>
        </mu-button>
      </div>
      <div class="button-wrapper">
        <mu-button flat color="primary">
          <mu-icon left value="grade"></mu-icon>
          Star
        </mu-button>
        <mu-button flat color="secondary">
          <mu-icon left value="android"></mu-icon>
          Android
        </mu-button>
        <mu-button flat>
          github
          <mu-icon :size="24" right value=":mudocs-icon-custom-github"></mu-icon>
        </mu-button>
        <mu-button flat color="red">
          thumb
          <mu-icon right value="thumb_up"></mu-icon>
        </mu-button>
      </div>
      <div class="button-wrapper">
        <mu-button color="primary">
          <mu-icon left value="grade"></mu-icon>
          Star
        </mu-button>
        <mu-button color="secondary">
          <mu-icon left value="android"></mu-icon>
          Android
        </mu-button>
        <mu-button>
          delete
          <mu-icon right value="delete"></mu-icon>
        </mu-button>
        <mu-button color="red">
          Send
          <mu-icon right value="send"></mu-icon>
        </mu-button>
      </div>

      <h1>浮动</h1>
      <mu-button fab small color="primary">
        <mu-icon value="grade"></mu-icon>
      </mu-button>
      <mu-button fab small color="pink">
        <mu-icon value="android"></mu-icon>
      </mu-button>
      <mu-button fab color="indigo">
        <mu-icon value="remove"></mu-icon>
      </mu-button>
      <mu-button fab color="teal">
        <mu-icon value="add"></mu-icon>
      </mu-button>
      <mu-button large fab color="red">
        <mu-icon value="edit"></mu-icon>
      </mu-button>
      <mu-button large fab color="purple">
        <mu-icon value="thumb_up"></mu-icon>
      </mu-button>


<h1>不同的大小</h1>
      <mu-flex justify-content="center" align-items="center">
        <mu-button small color="primary">small</mu-button>
        <mu-button color="success">normal</mu-button>
        <mu-button large color="red">large</mu-button>
      </mu-flex>
      <mu-flex justify-content="center" align-items="center">
        <mu-button fab small color="primary">
          <mu-icon value="grade"></mu-icon>
        </mu-button>
        <mu-button fab color="success">
          <mu-icon value="edit"></mu-icon>
        </mu-button>
        <mu-button fab large color="red">
          <mu-icon value="thumb_up"></mu-icon>
        </mu-button>
      </mu-flex>

      <h1>圆角和块状按钮</h1>
      <mu-flex justify-content="center" align-items="center">
        <mu-button round color="success">Round button</mu-button>
      </mu-flex>
      <mu-flex justify-content="center" align-items="center">
        <mu-button full-width color="primary">full width button</mu-button>
      </mu-flex>



    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    components: {Header},
    name: "Buttons",
    data() {
      return {
        headerName: 'Buttons',
      }
    },
  }
</script>

<style scoped lang="less">
  .button-wrapper {
    text-align: center;
    .mu-button {
      margin: 8px;
    }
  }


  .button-wrapper {
    text-align: center;
    .mu-button{
      margin: 8px;
    }
  }



  .button-wrapper {
    text-align: center;
    .mu-button{
      margin: 8px;
      vertical-align: top;
    }
  }


  .button-wrapper {
    text-align: center;
    .mu-button{
      margin: 8px;
      vertical-align: middle;
    }
    a.mu-button {
      text-decoration: none;
    }
  }


  .button-wrapper {
    text-align: center;
    .mu-button{
      margin: 8px;
      vertical-align: middle;
    }
    a.mu-button {
      text-decoration: none;
    }
  }


  .button-wrapper {
    text-align: center;
    .mu-button{
      margin: 8px;
      vertical-align: middle;
    }
    a.mu-button {
      text-decoration: none;
    }
  }

</style>
