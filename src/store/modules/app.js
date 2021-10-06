const app = {
  state: {
    account: {},
    language: localStorage.getItem('language') || 'en',
  },
  mutations: {
    SET_ACCOUNT: (state, account) => {
      state.account = account;
    },
    SET_LANGUAGE: (state, language) => {
      state.language = language;
      localStorage.setItem('language', language);
    },
  },
  actions: {
    setAccount({ commit }, account) {
      commit('SET_ACCOUNT', account);
    },
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language);
    },
  }
}

export default app;