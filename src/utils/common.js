import Decimal from 'decimal.js';
import moment from 'moment';
import {getJson} from '@/api/other'

let cdnImgJson; // CDN 图片配置
async function getCdnImgJson() {
  const {status, result} = await getJson()
  if (!status) {
    return
  }
  const res = result;
  const hasUsdx = res.png.find(v => v === 'usdxusdxusdx-usdc')
  if (!hasUsdx) {
    res.png.push('usdxusdxusdx-usdc', 'usdxusdxusdx-usdb')
  }
  cdnImgJson = result;
}
getCdnImgJson();

export function dealPrice(price) {
  let len = 6;
  if (Number(price) > 1000) {
    len = 2
  } else if (Number(price) > 10) {
    len = 4
  } else if (Number(price) > 1) {
    len = 5
  }
  return Number(price).toFixed(len)
}

/*
 ** 加法函数，用来得到精确的加法结果
 ** 返回值：arg1 + arg2的精确结果 Number 型
*/
export function accAdd(arg1, arg2) {
  return new Decimal(arg1).add(new Decimal(arg2)).toNumber()
}

/*
 ** 减法函数，用来得到精确的减法结果
 ** 返回值：arg1 - arg2的精确结果 Number 型
*/
export function accSub(arg1, arg2) {
  return new Decimal(arg1).sub(new Decimal(arg2)).toNumber();
}

/*
 ** 乘法函数，用来得到精确的乘法结果
 ** 返回值：arg1 * arg2的精确结果 Number 型
*/
export function accMul(arg1, arg2) {
  if (!arg1 || !arg2) {
    return 0
  }
  return new Decimal(arg1).mul(new Decimal(arg2)).toNumber();
}

/*
 ** 除法函数，用来得到精确的除法结果
 ** 返回值：arg1 / arg2的精确结果 Number 型
*/
export function accDiv(arg1, arg2) {
  if (!arg1 || !arg2) {
    return 0
  }
  return new Decimal(arg1).div(new Decimal(arg2)).toNumber();
}

/*
 ** 指数函数，用来得到精确的指数结果
 ** 返回值：Math.pow(arg1, arg2)的精确结果 Number 型
*/
export function accPow(arg1, arg2) {
  if (!arg1 || !arg2) {
    return 0
  }
  return new Decimal(arg1).pow(new Decimal(arg2)).toNumber();
}

// URL 参数获取
export function GetUrlPara() {
  const url = document.location.toString();
  const arrUrl = url.split('?');
  if (arrUrl.length === 1) {
    return {};
  }
  const para = arrUrl[1];
  const qureyArr = para.split('&');
  const params = {};
  for (let i = 0; i < qureyArr.length; i += 1) {
    const arr = qureyArr[i].split('=');
    params[arr[0]] = arr[1];
  }
  return params;
}

// 科学计数法转数值 - 处理 1e-7 这类精度问题
export function getFullNum(num) {
  // 处理非数字
  if (isNaN(num)) {
    return num;
  }
  // 处理不需要转换的数字
  const str = String(num);
  if (!/e/i.test(str)) {
    return num;
  }
  return Number(num).toFixed(18).replace(/\.?0+$/, '');
}

// 返回小数位后几位 截取
export function toFixed(number, pp) {
  let num = isNaN(number) || !number ? 0 : number;
  let p = isNaN(pp) || !pp ? 0 : pp;
  num = getFullNum(num);
  var n = (num + '').split('.'); // eslint-disable-line
  var x = n.length > 1 ? n[1] : ''; // eslint-disable-line
  if (x.length > p) { // eslint-disable-line
    x = x.substr(0, p); // eslint-disable-line
  } else { // eslint-disable-line
    x += Array(p - x.length + 1).join('0'); // eslint-disable-line
  } // eslint-disable-line
  return n[0] + (x == '' ? '' : '.' + x); // eslint-disable-line
}

// 返回币种图片地址
export function getCoin(contract, coin) {
  const inData = `${contract.toLowerCase()}-${coin.toLowerCase()}`
  try {
    const localeCoin = cdnImgJson.svg;
    const localCoinPng = cdnImgJson.png;
    const has = localeCoin.find(v => v === inData)
    if (has) {
      return `https://cdn.jsdelivr.net/gh/defis-net/material2/coin/${has}.svg`;
    }
    const hasPng = localCoinPng.find(v => v === inData);
    if (!has && hasPng) {
      return `https://cdn.jsdelivr.net/gh/defis-net/material2/coin/${hasPng}.png`;
    }
    return `https://ndi.340wan.com/eos/${inData}.png`
  } catch (error) {
    return `https://ndi.340wan.com/eos/${inData}.png`
  }
}

export function toLocalTime(time) {
  return moment(time).format('YYYY-MM-DD HH:mm:ss')
}

// 获取做市时长
export function getMarketTimeLp(startTime) {
  let sDate = startTime.toString().indexOf('-') === -1 ? startTime : Date.parse(startTime.replace(/-/g, '/'))
  let t = Date.parse(new Date()) - sDate;
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24); // 不累加天数的小时
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let seconds = Math.floor((t / 1000) % 60);
  hours = hours >= 10 ? hours : `0${hours}`;
  minutes = minutes >= 10 ? minutes : `0${minutes}`;
  seconds = seconds >= 10 ? seconds : `0${seconds}`;
  if (t <= 0) {
    return {
      total: t,
      days: 0,
      hours: '00',
      minutes: '00',
      seconds: '00'
    };
  }
  return { total: t, days, hours, minutes, seconds };
}