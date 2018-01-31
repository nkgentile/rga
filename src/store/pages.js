import wp from '@/utils/wp';
import api from '@/utils/contentful';
import { pluck } from 'ramda';

export default {
  namespaced: true,

  state: {
    pages: []
  },

  mutations: {
    update(state, payload){
      state.pages = [ ...state.pages, ...payload ];
    }
  },

  actions: {
    async fetchPages({ commit }){
      const pages = await wp.pages();

      commit('updatePages', pages);
    },

    async fetch({ commit }){
      const response = await api.getEntries({
        content_type: 'page'
      });

      const pages = pluck('fields', response.items);

      commit('update', pages);
    }
  }
}
