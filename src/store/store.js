import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: false,
  },

  mutations: {
    SET_DARK_MODE(state, darkMode) {
      state.darkMode = darkMode;
    },
  },

  actions: {
    setDarkMode({ commit }, darkMode) {
      commit('SET_DARK_MODE', darkMode);
    },
  },

  getters: {
    isDarkMode(state) {
      return state.darkMode;
    },
  },
});
