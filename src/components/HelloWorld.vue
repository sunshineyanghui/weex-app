<template>
  <div>
    <div class="container">
      <div class="demo">
        <wxc-minibar title="标题" background-color="#009ff0" text-color="#fff" right-text="更多"></wxc-minibar>
      </div>
      <image :src="logo" class="logo" />
      <text class="greeting">The environment is ready!</text>
      <text class="message">Now, let's use Vue.js to build your Weex app.</text>
      <wxc-button text="确定" @wxcButtonClicked="wxcButtonClicked" class="btn"></wxc-button>


    </div>
    <div v-for="(v,i) in list" class="row">
      <div v-for="(text, k) in v" class="item">
        <div>
          <text>{{text}}</text>
        </div>
      </div>
    </div>

    <!-- 轮播图 -->
    <div>
      <slider class="slider size">
        <div v-for="item in slider">
          <image :src="item" class="size"></image>
        </div>
        <indicator class="indicator"></indicator>
      </slider>
    </div>

    <!-- 新闻列表 -->
    <!-- 父组件向子组件数据 -->
    <div v-for="list in news">
      <Props :image="list.image" :title="list.title" :des="list.des"></Props>
    </div>
  </div>

</template>
<script>
  import { WxcButton, WxcMinibar } from 'weex-ui'
  const modal = weex.requireModule('modal')
  import Props from './props.vue'
  export default {
    components: { WxcButton, WxcMinibar,Props},
    name: 'App',
    data () {
      return {
        logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
        list:[
          ["1","2","3"],
          ["4","5","6"],
          ["7","8","9"]
        ],
        slider:["http://owiabz7km.bkt.clouddn.com/c90f355356cfcbcad3989313fa457efb.jpg","http://owiabz7km.bkt.clouddn.com/ykb1f37524b2d27854190b71f80b60b97cad.jpg"],
        news:[
          { image:'http://owiabz7km.bkt.clouddn.com/6.jpg', title:'我是标题1', des:'我是描述1'},
          { image:'http://owiabz7km.bkt.clouddn.com/6.jpg', title:'我是标题2', des:'我是描述2'},
          { image:'http://owiabz7km.bkt.clouddn.com/6.jpg', title:'我是标题3', des:'我是描述3'},
          { image:'http://owiabz7km.bkt.clouddn.com/6.jpg', title:'我是标题4', des:'我是描述4'}
        ]
      }
    },
    methods: {
      wxcButtonClicked (e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped>
  .size{
    width:750px;
    height:260px;
  }
  .slider{
    position: relative;
  }
  .indicator{
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    background-color: rgba(0,0,0,0.2);

    itemColor:#dddddd;
    itemSelectedColor:rgb(0,108,255)
  }
  .item{
    flex:1;
    justify-content: center;
    align-items: center;
    border-width:1px;
  }
  .row{
    flex-direction: row;
    height:80px;
  }
  .btn{

  }
  .container{
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
