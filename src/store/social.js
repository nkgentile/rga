import { head } from 'ramda';

import api from '@/utils/contentful';

export default {
  namespaced: true,

  state: {
    ids: [],
    sites: {}
  },

  mutations: {
    receive(state, payload){
      const sites = payload.map( a => ({
        id: a.sys.id,
        ...a.fields,
      }) );

      sites.forEach( a => {
        const { id } = a,
          { ids } = state;

        state.sites[id] = a;

        if(!ids.includes(id))
          state.ids = [id, ...ids];
      });
    }
  },

  actions: {
    async fetch({ commit }){
      const response = await api.getEntries({
        content_type: 'company'
      })

      const company = head(response.items);

      commit('receive', company.fields.socialAccounts);
    }
  }
};
