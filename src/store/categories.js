import wp from '@/utils/wp';

export default {
  namespaced: true,

  state: {
    categories: []
  },

  mutations: {
    updateCategories(state, payload) {
      state.categories = [...state.categories, ...payload];
    }
  },

  actions: {
    async fetchCategories({ commit }) {
      const categories = await wp.categories();

      commit('updateCategories', categories);
    }
  }
}
