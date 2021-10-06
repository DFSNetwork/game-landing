import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import config from './modules/config';
import sys from './modules/sys';

Vue.use(Vuex);

// const store = new Vuex.Store({
//   modules: {
//     app,
//     config,
//     sys,
//   },
//   getters: {
//     app: state => state.app,
//     config: state => state.config,
//     sys: state => state.sys,
//   },
// });
export default new Vuex.Store({
  modules: {
    app,
    config,
    sys,
  },
  getters: {
    app: state => state.app,
    config: state => state.config,
    sys: state => state.sys,
  },
});
