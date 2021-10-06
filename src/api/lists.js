
import axios from 'axios';
import store from '@/store';
const zlib = require('zlib');
function getHost() {
  const node = store.state.config.node;
  return node.url;
}
function unZip(deflated) {
  const inflated = zlib.inflateSync(new Buffer(deflated, 'base64')).toString();
  return inflated
}
export function get_table_rows(params) {
  return new Promise((resolve, reject) => {
    const host = getHost()
    axios.post(`${host}/v1/chain/get_table_rows`, JSON.stringify(params)).then((res) => {
      let result = Object.assign(res.data, {});
      resolve({ status: res.status === 200, result });
    }, err => {
      reject(err)
    })
  })
}
export function get_currency_stats(params) {
  return new Promise((resolve, reject) => {
    const host = getHost()
    axios.post(`${host}/v1/chain/get_currency_stats`, JSON.stringify(params)).then((res) => {
      let result = Object.assign(res.data, {});
      resolve({ status: res.status === 200, result });
    }, err => {
      reject(err)
    })
  })
}
export function get_currency_balance(params) {
  return new Promise((resolve, reject) => {
    const host = getHost()
    axios.post(`${host}/v1/chain/get_currency_balance`, JSON.stringify(params)).then((res) => {
      let result = res.data;
      if (!result.length) {
        result = [`${Number(0).toFixed(params.decimal || 4)} ${params.symbol}`]
      }
      resolve({ status: res.status === 200, result });
    }, err => {
      reject(err)
    })
  })
}
// 获取投票排名 - 前20
export async function getVotePools() {
  const baseConfig = store.state.config.baseConfig;
  const params = {
    "code": baseConfig.voteContract,
    "scope": baseConfig.voteContract,
    "table": "pools",
    "json": true,
    "index_position": 2,
    "key_type": "float64",
    "limit": 20
  }
  const {status, result} = await get_table_rows(params)
  if (!status) {
    return {status: false}
  }
  const lists = result.rows || [];
  getVoteRankConf(lists)
}
export async function getVoteRankConf(lists = []) {
  const baseConfig = store.state.config.baseConfig;
  const params = {
    "code": baseConfig.voteConfig,
    "scope": baseConfig.voteConfig,
    "json": true,
    "table": "poolslots",
    limit: 20,
  }
  const {status, result} = await get_table_rows(params)
  if (!status) {
    return {status: false}
  }
  const rankInfo = [];
  const rows = result.rows || [];
  rows.forEach((v, index) => {
    const t = Object.assign({}, v, lists[index])
    rankInfo.push(t)
  })
  store.dispatch('setRankInfo', rankInfo)
}

// 节点延时接口
export function get_info(host) {
  return new Promise((resolve, reject) => {
    axios.get(`${host}/v1/chain/get_info`, {
      timeout: 5500,
    }).then((res) => {
      let result = Object.assign(res.data, {});
      resolve({ status: res.status === 200, result });
    }, err => {
      reject(err)
    })
  })
}

// 获取markets压缩数据
export function get_markets() {
  return new Promise((resolve, reject) => {
    axios.get('https://api.defis.network/common/markets').then((res) => {
      var deflated = res.data;
      var inflated = unZip(deflated)
      const result = {
        rows: JSON.parse(inflated)
      }
      resolve({ status: res.status === 200, result });
    }, err => {
      reject(err)
    })
  })
}

// 获取图片JSON
export function getJson() {
  return new Promise((resolve, reject) => {
    axios.get('https://cdn.jsdelivr.net/gh/defis-net/material2/coin/coinJson.json').then((res) => {
      let result = res.data;
      resolve({ status: res.status === 200, result });
    }, err => {
      reject(err)
    })
  })
}