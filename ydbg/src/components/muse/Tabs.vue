<template>
  <div>
    <Header
      :headerName="headerName"
    />

    <mu-container>
      <h1>选项卡</h1>
      <mu-tabs :value.sync="active">
        <mu-tab>TAB ITEM 1</mu-tab>
        <mu-tab>TAB ITEM 2</mu-tab>
        <mu-tab>TAB ITEM 3</mu-tab>
      </mu-tabs>
      <div class="demo-text" v-if="active === 0">
        <p>“……是的，我承认从很早以前我都害怕死亡，在医院里被人研究的时候，以前做出布局的时候，其实我很怕死的，因为除了死以外，我没有值得珍惜的东西，很奇怪是吧？恰好是这样我真的很怕死，因为我想要有值得珍惜的东西之后，死亡之后才会不寂寞，我才能够安然的面对死亡……”</p>
      </div>
      <div class="demo-text" v-if="active === 1">
        <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
        <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
        <p>“那么就去地狱找到你，我绝对不逃！”</p>
        <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
      </div>
      <div class="demo-text" v-if="active === 2">
        <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
        <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
        <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
        <p>“也许吧，未来……给你了。”</p>
      </div>


      <h1>居中</h1>
      <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
        <mu-tab>TAB ITEM 1</mu-tab>
        <mu-tab>TAB ITEM 2</mu-tab>
        <mu-tab>TAB ITEM 3</mu-tab>
      </mu-tabs>
      <div class="demo-text" v-if="active1 === 0">
        <p>“……是的，我承认从很早以前我都害怕死亡，在医院里被人研究的时候，以前做出布局的时候，其实我很怕死的，因为除了死以外，我没有值得珍惜的东西，很奇怪是吧？恰好是这样我真的很怕死，因为我想要有值得珍惜的东西之后，死亡之后才会不寂寞，我才能够安然的面对死亡……”</p>
      </div>
      <div class="demo-text" v-if="active1 === 1">
        <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
        <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
        <p>“那么就去地狱找到你，我绝对不逃！”</p>
        <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
      </div>
      <div class="demo-text" v-if="active1 === 2">
        <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
        <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
        <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
        <p>“也许吧，未来……给你了。”</p>
      </div>

      <h1>全宽</h1>
      <mu-tabs :value.sync="active2" color="green" indicator-color="yellow" full-width>
        <mu-tab>TAB ITEM 1</mu-tab>
        <mu-tab>TAB ITEM 2</mu-tab>
        <mu-tab>TAB ITEM 3</mu-tab>
      </mu-tabs>
      <div class="demo-text" v-if="active2 === 0">
        <p>“……是的，我承认从很早以前我都害怕死亡，在医院里被人研究的时候，以前做出布局的时候，其实我很怕死的，因为除了死以外，我没有值得珍惜的东西，很奇怪是吧？恰好是这样我真的很怕死，因为我想要有值得珍惜的东西之后，死亡之后才会不寂寞，我才能够安然的面对死亡……”</p>
      </div>
      <div class="demo-text" v-if="active2 === 1">
        <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
        <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
        <p>“那么就去地狱找到你，我绝对不逃！”</p>
        <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
      </div>
      <div class="demo-text" v-if="active2 === 2">
        <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
        <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
        <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
        <p>“也许吧，未来……给你了。”</p>
      </div>


      <h1>图标</h1>
      <mu-tabs :value.sync="active3" center color="teal">
        <mu-tab>
          <mu-icon value="phone"></mu-icon>
          RECENTS
        </mu-tab>
        <mu-tab>
          <mu-icon value="favorite"></mu-icon>
          FAVORITES
        </mu-tab>
        <mu-tab>
          <mu-icon value="person_pin"></mu-icon>
          NEARBY
        </mu-tab>
      </mu-tabs>
      <div class="demo-text" v-if="active3 === 0">
        <p>“……是的，我承认从很早以前我都害怕死亡，在医院里被人研究的时候，以前做出布局的时候，其实我很怕死的，因为除了死以外，我没有值得珍惜的东西，很奇怪是吧？恰好是这样我真的很怕死，因为我想要有值得珍惜的东西之后，死亡之后才会不寂寞，我才能够安然的面对死亡……”</p>
      </div>
      <div class="demo-text" v-if="active3 === 1">
        <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
        <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
        <p>“那么就去地狱找到你，我绝对不逃！”</p>
        <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
      </div>
      <div class="demo-text" v-if="active3 === 2">
        <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
        <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
        <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
        <p>“也许吧，未来……给你了。”</p>
      </div>


    </mu-container>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "Tabs",
    components: {Header},
    data() {
      return {
        headerName: "Tabs",
        active: 0,
        active1: 0,
        active2: 0,
        active3: 0
      }
    },
  }
</script>

<style scoped lang="less">
  .demo-text {
    padding: 16px;
    background: #fff;
    p {
      margin: 8px 0;
    }
  }
</style>
