<template>
  <div>
    <div class="main">
      <div class="title">关于DCASH</div>
      <img class="token" src="@/assets/img/dcash_bg.png">
      <div class="content">
        DCASH，小镇现钞，是游戏中的通用货币在游戏世界中采购、升级等获得需要消耗DCASH。从事生产、完成订单任务可以获得更多DCASH。
      </div>
      <div class="content">
        可以使用DFS充值兑换获得DCASH。赚取的DCASH，可以在Swap中卖出或出售给其他需要的玩家。
      </div>
    </div>
    <div class="main">
      <div class="title">关于DFS</div>
      <img class="token" src="@/assets/img/dfs_bg.png">
      <div class="content">
        DFS (Decentralized Finance Share) 是将所有DFS社区成员团结在一起的粘合剂。持有DFS可以参与游戏中的特殊采购DCASH兑换。
      </div>
      <div class="content">
        还有权重参与项目关键的治理投票。将DFS存入DSS存款合约中，能够获得更多DFS奖励。
      </div>
      <div class="content">
        可以使用DFS充值兑换获得DCASH。赚取的DCASH，可以在Swap中卖出或出售给其他需要的玩家。
      </div>
    </div>
    <div class="dfgPro huakang">
      <div class="dTitle flexc">DFS指标</div>
      <div class="dLists flexb">
        <div class="dList">
          <div class="subTil">总发行</div>
          <div>1000万</div>
        </div>
        <div class="dList">
          <div class="subTil">当前发行</div>
          <div>{{ supply }}万</div>
        </div>
        <div class="dList">
          <div class="subTil">价格</div>
          <div>$ {{ dfsPrice }}</div>
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
      supply: '245',
      dfsPrice: '-'
    }
  },
  mounted() {
    this.handleGetDfsInfo()
  },
  methods: {
    handleGetDfsInfo() {
      this.handleGetSupply();
      this.handleGetPrice()
    },
    async handleGetSupply() {
      const params = {
        code: 'minedfstoken',
        symbol: 'DFS'
      }
      const {status, result} = await this.$api.get_currency_stats(params);
      if (!status) {
        return;
      }
      const res = result[params.symbol];
      let supply = res.supply.split(' ')[0] / 10000;
      this.supply = supply.toFixed(2)
    },
    async handleGetPrice() {
      const params = {
        code: 'defislinkeos',
        scope: '451',
        table: 'avgprices',
        json: true,
        limit: 3,
      }
      const {status, result} = await this.$api.get_table_rows(params)
      if (!status || !result.rows.length) {
        return
      }
      const rows = result.rows.find(vv => vv.key === 300) || []
      const dfsPrice = rows.price0_avg_price / 10000;
      this.dfsPrice = dfsPrice.toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  padding: 80px 0;
  &:last-child{
    padding-bottom: 50px;
  }
  .title{
    font-size: 56px;
    margin-bottom: 30px;
  }
  .token{
    width: 506px;
    margin: 40px 0;
  }
  .content{
    margin: auto;
    width: 588px;
    color: #866A56;
    font-size: 32px;
    text-align: left;
    margin-bottom: 12px;
  }
}
.dfgPro{
  background-image: url('../../../assets/img/DFS_bg2.png');
  background-repeat: no-repeat;
  background-size: contain;
  height: 275px;
  color: #F1E2B8;
  font-size: 28px;
  padding: 45px 0 20px;
  .dTitle{
    font-weight: 600;
    height: 45px;
  }
  .dLists{
    margin-top: 60px;
    padding: 0 100px 0 65px;
    font-size: 18px;
    .dList{
      width: 160px;
    }
    .subTil{
      color: #622A0A;
      margin-bottom: 6px;
      line-height: 40px;
    }
  }
}
</style>
