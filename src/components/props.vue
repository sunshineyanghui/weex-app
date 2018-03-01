<template lang="html">
  <div >
    <div  class="listcon">
      <text>{{title}}</text>
      <div class="info">
        <image :src="image" class="img"></image>
        <text>{{des}}</text>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  props:{
    image:{default:null},
    title:{default:null},
    des:{default:null}
  }
}
</script>

<style lang="css">
.listcon{

  width:750px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
}
.info{
  flex-direction: row;
}
.info .img{
  width: 200px;
  height: 200px;
}
</style>
