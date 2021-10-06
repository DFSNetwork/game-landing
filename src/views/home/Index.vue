<template>
  <div>
    <Banner />
    <AboutGame />
    <Farms />
    <div class="bg">
      <GameBft />
      <AboutToken />
      <MyFooter />
    </div>
  </div>
</template>

<script>
import Banner from '@/views/home/comp/Banner'
import AboutGame from '@/views/home/comp/AboutGame'
import Farms from '@/views/home/comp/Farms'
import GameBft from '@/views/home/comp/GameBft'
import AboutToken from '@/views/home/comp/AboutToken'
import MyFooter from '@/views/home/comp/MyFooter'
export default {
  name: 'home',
  components: {
    Banner, AboutGame, Farms, GameBft,
    AboutToken, MyFooter
  }
}
</script>

<style lang="scss" scoped>
.bg{
  background: #FAF6F3;
}
</style>
