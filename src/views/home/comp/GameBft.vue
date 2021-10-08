<template>
  <div class="nft">
    <div class="title">游戏中的NFT</div>
    <div class="content">
      游戏中每个生产单位都是一个独一无二的NFT，可进行升级、改变外貌、提高能力。也可以在NFT市场中与其他人进行自由交易。
    </div>
    <div class="nftLists">
      <div class="tabs flexb">
        <div class="tab flexc" :class="{'act': act === 0}" @click="act = 0">田地</div>
        <div class="tab flexc" :class="{'act': act === 1}" @click="act = 1">动物</div>
        <div class="tab flexc" :class="{'act': act === 2}" @click="act = 2">工厂</div>
      </div>
      <div class="items flexb" v-if="act === 0">
        <div class="item">
          <div class="land">
            <img class="crop" src="https://cdn.jsdelivr.net/gh/defis-net/game-landing/src/assets/img/barley_img.png">
          </div>
          <div class="name">麦子</div>
        </div>
        <div class="item">
          <div class="land">
            <img class="crop" src="https://cdn.jsdelivr.net/gh/defis-net/game-landing/src/assets/img/corn_img.png">
          </div>
          <div class="name">玉米</div>
        </div>
        <div class="item">
          <div class="land">
            <img class="crop" src="https://cdn.jsdelivr.net/gh/defis-net/game-landing/src/assets/img/carrot_img.png">
          </div>
          <div class="name">胡萝卜</div>
        </div>
      </div>
      <div class="items flexb pasture" v-else-if="act === 1">
        <div class="item">
          <div class="land">
            <img class="amimal" src="https://cdn.jsdelivr.net/gh/defis-net/game-landing/src/assets/img/cow.png">
          </div>
          <div class="name">奶牛</div>
        </div>
        <div class="item">
          <div class="land">
            <img class="amimal" src="https://cdn.jsdelivr.net/gh/defis-net/game-landing/src/assets/img/chicken.png">
          </div>
          <div class="name">鸡</div>
        </div>
        <div class="item">
          <div class="land">
            <img class="amimal" src="https://cdn.jsdelivr.net/gh/defis-net/game-landing/src/assets/img/sheep.png">
          </div>
          <div class="name">羊</div>
        </div>
      </div>
      <div class="items flexb factory" v-else>
        <div class="item">
          <div class="land">
            <img class="fay" src="https://cdn.jsdelivr.net/gh/defis-net/game-landing/src/assets/img/feedmill.png">
          </div>
          <div class="name">饲料厂</div>
        </div>
        <div class="item">
          <div class="land">
            <img class="fay" src="https://cdn.jsdelivr.net/gh/defis-net/game-landing/src/assets/img/bakery.png">
          </div>
          <div class="name">烘培坊</div>
        </div>
        <div class="item">
          <div class="land">
            <img class="fay" src="https://cdn.jsdelivr.net/gh/defis-net/game-landing/src/assets/img/gemfactory.png">
          </div>
          <div class="name">宝石工厂</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      act: 0,
    }
  }
}
</script>

<style lang="scss" scoped>
.nft{
  padding: 92px 0px;
  background-image: url('../../../assets/img/about_bg2.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0 100%;
  .title{
    color: #333;
    font-size: 56px;
    margin-bottom: 60px;
  }
  .content{
    color: #866A56;
    font-size: 36px;
    width: 533px;
    margin: auto;
    margin-bottom: 80px;
  }
  .shop{
    width: 100%;
  }
  .nftLists{
    height: 425px;
    width: 738px;
    background-image: url('../../../assets/img/nft_bg.png');
    background-repeat: no-repeat;
    background-size: contain;
    margin: auto;
    position: relative;
    .tabs{
      padding: 80px 126px 0;
      color: #F1E2B8;
      font-size: 24px;
      .tab{
        background-image: url('../../../assets/img/tab.png');
        background-repeat: no-repeat;
        background-size: contain;
        width: 157px;
        height: 80px;
      }
      .act{
        color: #601E0C;;
        background-image: url('../../../assets/img/tab-act.png');
      }
    }
    .items{
      padding: 20px 130px 0;
      color: #F1E2B8;
      font-size: 24px;
      &.pasture{
        .item{
          .land{
            background-image: url('../../../assets/img/frame_img.png');
          }
          .amimal{
            width: 70px;
            position: absolute;
            top: 25px;
            left: 25px;
          }
        }
      }
      &.factory{
        .item{
          .land{
            background-image: none
          }
          .fay{
            width: 100px;
            position: absolute;
            top: 15px;
            left: 15px;
          }
        }
      }
      .item{
        width: 150px;
        height: 170px;
        background-image: url('../../../assets/img/item_bg.png');
        background-repeat: no-repeat;
        background-size: contain;
        .land{
          background-image: url('../../../assets/img/land_img.png');
          background-repeat: no-repeat;
          background-size: contain;
          background-position: 0 60%;
          width: 130px;
          height: 130px;
          margin: auto;
          position: relative;
          .crop{
            width: 130px;
            position: absolute;
            left: 0px;
            top: 15px;
          }
        }
      }
    }
  }
}
</style>
