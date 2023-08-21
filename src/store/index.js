import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: false,
  },
  mutations: {
    setAuthenticated(state, value) {
      state.isAuthenticated = value;
    },
  },
  actions: {
    fakeLogin({ commit }) {
      commit('setAuthenticated', true); // мутация
    },
    logout({ commit }) {
      commit('setAuthenticated', false); // setAuthenticated мутация
    },
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
  },
});
