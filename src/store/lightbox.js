export default {
  namespaced: true,

  state: {
    index: 0,
    isOpen: false
  },

  mutations: {
    setIsOpen(state, bool){
      state.isOpen = bool;
    },

    setIndex(state, i){
      state.index = i;
    }
  },

  actions: {
    open({ commit }, index = 0){
      commit('setIndex', index);
      commit('setIsOpen', true);
    },

    close({ commit }){
      commit('setIsOpen', false);
    }
  }
}
