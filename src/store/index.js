import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = null;
    },
  },
  actions: {
    login({ commit }, { username, password }) {
      const dummyData = require('../dummyData.json');
      const user = dummyData.users.find(u => u.username === username && u.password === password);
      if (user) {
        commit('setUser', user);
      }
      return user;
    },
    logout({ commit }) {
      commit('logout');
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    userProfile: state => state.user ? state.user.profile : {}
  }
});
