<template>
  <div class="banner">
    <div class="nav flexb">
      <img class="logo" src="https://cdn.jsdelivr.net/gh/defis-net/game-landing/src/assets/img/logo.png">
      <van-popover
        v-model="showPopover"
        trigger="click"
        placement="bottom-end"
      >
        <div class="lists">
          <div class="list flexc" @click="handleScroll(1800)">Play2Earn</div>
          <div class="list flexc" @click="handleScroll(2400)">NFTs</div>
          <div class="list flexc" @click="handleScroll(2900)">DCASH</div>
          <div class="list flexc" @click="handleScroll(3500)">DFS</div>
          <div class="list flexc" @click="handleToObj('opensky')">Marketplace</div>
        </div>
        <template #reference>
          <img type="primary" class="more" src="https://cdn.jsdelivr.net/gh/defis-net/game-landing/src/assets/img/more.png">
        </template>
      </van-popover>
      
    </div>
    <!-- <div class="main">
      <div>风车小镇</div>
      <div>迷人的农场和建设</div>
      <div>者游戏！</div>
    </div> -->
    <div class="btn flexc" @click="handleToObj('game')">进入游戏</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopover: false
    }
  },
  methods: {
    handleToObj(name) {
      if (name === 'game') {
        location.href = 'https://dfsfarms.netlify.app/'
      }
      if (name === 'opensky') {
        location.href = 'https://opensky.defis.network/'
      }
      this.showPopover = false
    },
    handleScroll(x) {
      this.showPopover = false
      document.documentElement.scrollTop = x;
    }
  }
}
</script>

<style lang="scss" scoped>
.lists{
  width: 250px;
  font-size: 32px;
  .list{
    height: 80px;
    border-bottom: 1px dashed #efefef;
  }
}
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
    padding: 0 0px;
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
