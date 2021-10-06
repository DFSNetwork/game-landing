<template>
  <div class="banner">
    <div class="nav flexb">
      <img class="logo" src="@/assets/img/logo.png">
      <img class="more" src="@/assets/img/more.png">
    </div>
    <!-- <div class="main">
      <div>风车小镇</div>
      <div>迷人的农场和建设</div>
      <div>者游戏！</div>
    </div> -->
    <div class="btn flexc">进入游戏</div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.banner{
  background-image: url('../../../assets/img/banner.png');
  background-repeat: no-repeat;
  background-size: contain;
  width: 750px;
  height: 920px;
  padding: 40px;
  box-sizing: border-box;
  position: relative;
  .nav{
    padding: 0 40px;
  }
  .logo{
    width: 118px;
  }
  .more{
    width: 66px;
  }
  .main{
    margin-top: 280px;
    text-align: left;
    font-size: 60px;
    color: #FFF;
  }
  .btn{
    position: absolute;
    bottom: 50px;
    height: 100px;
    width: 240px;
    background: #EB6F00;
    font-size: 40px;
    color: #FFF;
    margin-top: 60px;
  }
}
</style>
