import { head } from 'ramda';
import api from '@/utils/contentful';

export default {
  namespaced: true,
  
  state: {
    entity: {},
  },

  mutations: {
    receive(state, [ member ]){
      state.entity = {
        ...member.sys,
        ...member.fields,
      };
    },
  },

  actions: {
    async fetch({ commit }, { slug }){
      const response = await api.getEntries({
        content_type: 'member',
        'fields.slug': slug,
      });

      commit('receive', response.items);
    },
  },
};
