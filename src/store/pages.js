import wp from '@/utils/wp';
import api from '@/utils/contentful';
import { pluck } from 'ramda';

export default {
  namespaced: true,

  state: {
    entities: {},
    ids: [],
  },

  getters: {
    slug: ({ entities }) => (id) =>
      entities.find( entity =>
        entity.id === id
      ),
  },

  mutations: {
    receive(state, entries){
      entries.forEach( e => {
        const page = {
          ...e.sys,
          ...e.fields,
        };

        const { id } = page;

        const { entities, ids } = state;

        entities[id] = page;

        state.ids = ids.includes(id) ?
          [...ids] : [...ids, id];
      });
    },
  },

  actions: {
    async fetch({ commit }){
      const response = await api.getEntries({
        content_type: 'page',
      });

      commit('receive', response.items);
    },
  }
}
