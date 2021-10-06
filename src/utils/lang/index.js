import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from '@/store';

import main from './modules/main'
Vue.use(VueI18n);
const messages = {
  'zh-CN': { // 中文简体包
    ...main['zh-CN'],
  },
  en: { // 英文包
    ...main['en'],
  },
};
const i18n = new VueI18n({
  locale: store.state.sys.language,
  messages
});

export default i18n;
