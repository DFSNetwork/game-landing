<template>
  <div class="footer">
    <div>DFS可以在以下交易所中获得</div>
    <div class="flexb defis">
      <img src="https://cdn.jsdelivr.net/gh/defis-net/game-landing/src/assets/img/DFS.png" @click="handleToObj('dfs')" alt="">
      <img src="https://cdn.jsdelivr.net/gh/defis-net/game-landing/src/assets/img/MXC.png" @click="handleToObj('mxc')" alt="">
      <img src="https://cdn.jsdelivr.net/gh/defis-net/game-landing/src/assets/img/HOO.png" @click="handleToObj('hoo')" alt="">
    </div>
    <div class="links flexc">
      <img src="https://cdn.jsdelivr.net/gh/defis-net/game-landing/src/assets/img/telegram.png" @click="handleToObj('telegram')" alt="">
      <img src="https://cdn.jsdelivr.net/gh/defis-net/game-landing/src/assets/img/discord.png" @click="handleToObj('discord')" alt="">
      <img src="https://cdn.jsdelivr.net/gh/defis-net/game-landing/src/assets/img/github.png" @click="handleToObj('github')" alt="">
      <img src="https://cdn.jsdelivr.net/gh/defis-net/game-landing/src/assets/img/twitter.png" @click="handleToObj('twitter')" alt="">
    </div>
    <div class="flexc logo">
      <img src="https://cdn.jsdelivr.net/gh/defis-net/game-landing/src/assets/img/footLogo.png" alt="">
      <span>Join Farm Day！</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  methods: {
    handleToObj(name) {
      if (name === 'dfs') {
        location.href = 'https://apps.defis.network/'
        return
      }
      if (name === 'hoo') {
        location.href = 'https://hoo.com/'
        return
      }
      if (name === 'mxc') {
        location.href = 'https://www.mexc.com/'
        return
      }
      if (name === 'telegram') {
        location.href = 'https://t.me/dfsnet'
        return
      }
      if (name === 'discord') {
        location.href = 'https://discord.gg/Xhu5uJ37'
        return
      }
      if (name === 'github') {
        location.href = 'https://github.com/defis-net'
        return
      }
      if (name === 'twitter') {
        location.href = 'https://twitter.com/DFSnetworks'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.footer{
  font-size: 30px;
  padding-bottom: 100px;
  .defis{
    padding: 40px 80px;
    margin-bottom: 50px;
    img{
      width: 160px;
    }
  }
  .links{
    padding-bottom: 50px;
    img{
      width: 70px;
      margin-right: 37px;
      &:last-child{
        margin-right: 0;
      }
    }
  }
  .logo{
    color: #333;
    font-weight: 300;
    line-height: 84px;
    font-size: 52px;
    img{
      width: 60px;
      display: block;
      margin-right: 20px;
      margin-bottom: 10px;
    }
  }
}
</style>
