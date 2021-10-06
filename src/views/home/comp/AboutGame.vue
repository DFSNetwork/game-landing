<template>
  <div class="abt">
    <div class="main">
      <div class="title">农耕放牧，享受</div>
      <div class="title">风车镇的惬意生活！</div>
      <div class="tips">
        和蔼热情的人们，繁华欢乐的小镇一座荒废已久的牧场正在等待它新的主人！
      </div>
      <div class="tips">
        在这里，你将书写你自己的故事你可以在这个广阔的、开放的、且充满无限可能的世界中尽情探索。
      </div>
      <div class="tips">
        游戏采用的是玩家主导的经济系统，每一件物品、每一件装备，都是由玩家通过种植、采集、挖矿等方式搜集资源并耗费时间打造完成，可以在市场上自由交易！
      </div>
    </div>
    <div class="main">
      <div class="title center">关于游戏</div>

      <div class="flexb wrap">
        <div class="item">
          <img src="@/assets/img/land.png">
          <div class="sTitle">田地耕种</div>
          <div class="sContain">田地可以种植多种多样的植物。收获的产品可以在市场上出售或进一步加工升级田地，可以提高每块地的产能。</div>
        </div>
        <div class="item">
          <img src="@/assets/img/pasture.png">
          <div class="sTitle">畜牧养殖</div>
          <div class="sContain">通过喂养奶牛、土鸡、绵羊等农场动物，获得它们的产物，并在市场上出售或进一步加工。升级动物可以提高它们的产能。</div>
        </div>
        <div class="item">
          <img src="@/assets/img/factory.png">
          <div class="sTitle">工厂作坊</div>
          <div class="sContain">制造各种美味的食品和实用的生活用品。食品和生活用品比耕种和养殖的流程复杂，但产品通常能卖出更好的价格。</div>
        </div>
        <div class="item">
          <img src="@/assets/img/gem.png">
          <div class="sTitle">工业学院</div>
          <div class="sContain">产能研究中心，可以查看和管理每个生产单位的等级。提高等级，可以进一步提高生产效率，加速小镇的繁荣建设。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
}
</script>

<style lang="scss" scoped>
.abt{
  padding: 115px 50px;
  box-sizing: border-box;
  background: #FAF6F3;
  background-image: url('../../../assets/img/about_bg.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0 50%;
  text-align: left;
  .title{
    font-size: 56px;
    line-height: 84px;
    &.center{
      text-align: center;
      margin-bottom: 80px;
    }
  }
  .tips{
    width: 550px;
    margin: 80px 0 80px;
    font-size: 36px;
    color: #866A56;
    &:last-child{
      margin-bottom: 200px;
    }
  }
  .wrap{
    text-align: center;
    flex-wrap: wrap;
    .item{
      margin-bottom: 50px;
      height: 490px;
    }
    img{
      width: 300px;
    }
    .sTitle{
      font-size: 32px;
      margin-bottom: 20px;
    }
    .sContain{
      width: 263px;
      margin: auto;
      color: #866A56;
      font-size: 24px;
    }
  }
}
</style>
