import wp from '@/utils/wp';

export default {
  namespaced: true,

  state: () => ({
    attachment: false
  }),

  mutations: {
    updateAttachment(state, payload){
      state.attachment = payload;
    }
  },

  actions: {
    async fetchAttachment({ commit }, id){
      const attachment = await wp.media().id(id);

      commit('updateAttachment', attachment);
    }
  }
}


