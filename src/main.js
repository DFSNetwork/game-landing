import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from '@/utils/lang';
import api from './api'
import store from './store';
import './vant.js';
import "amfe-flexible";

import { DApp } from '@/utils/wallet';

Vue.use({
  i18n: (key, value) => i18n.t(key, value)
});
Vue.prototype.$api = api;
Vue.prototype.$dApp = DApp;
Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  store,
  render: h => h(App),
}).$mount('#app')
