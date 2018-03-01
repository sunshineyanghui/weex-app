<template lang="html">
  <div>
    <div class="top">
      <div><image :src="img" class="logo"></image></div>
      <div><a href=""><text class="">点击下载</text></a></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      img:'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  }
}
</script>

<style lang="css">
.top{
  position: fixed;
  top: 0;
  left:0;
  right:0;
  width:750px;
  height:80px;
  background-color: rgb(251, 214, 66);
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  padding-left:20px;
  padding-right:20px;
}
.logo{
  width:100px;
  height:70px;
}
</style>
