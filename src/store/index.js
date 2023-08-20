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
      commit('setAuthenticated', true); // Используйте setAuthenticated мутацию
    },
    logout({ commit }) {
      commit('setAuthenticated', false); // Используйте setAuthenticated мутацию
    },
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
  },
});
