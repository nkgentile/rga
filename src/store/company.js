import api from '@/utils/contentful';
import { head } from 'ramda';

export default {
  namespaced: true,
  
  state: {
    company: {}
  },

  mutations: {
    receive(state, payload){
      state.company = payload.fields;
    }
  },

  actions: {
    async fetch({ commit }){
      const response = await api.getEntries({
        content_type: 'company'
      });

      const company = head(response.items);

      commit('receive', company);
    }
  }
};
