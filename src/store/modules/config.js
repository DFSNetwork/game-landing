
const config = {
  state: localStorage.getItem('EOSNODE') ? JSON.parse(localStorage.getItem('EOSNODE')) : {
    node: {
      area: 'production',
      protocol: 'https',
      port: '443',
      url: 'https://eos.blockeden.cn', // https://eospush.tokenpocket.pro
      host: 'eos.blockeden.cn', // eospush.tokenpocket.pro
      chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
    },
  },
  mutations: {
    SET_NODE: (state, node) => {
      state.node = node;
      localStorage.setItem('EOSNODE', JSON.stringify(node))
    },
  },
  actions: {
    setNode({ commit }, node) {
      commit('SET_NODE', node);
    },
  }
}

export default config;