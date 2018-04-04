import api from '@/utils/contentful';

export default {
  namespaced: true,

  state: {
    entities: {},
    ids: [],
  },

  mutations: {
    receive(state, entries){
      entries.forEach( e => {

        const project = {
          id: e.sys.id,
          ...e.fields,
        };

        const id = project.id;

        const { entities, ids } = state;

        entities[id] = project;

        state.ids = ids.includes(id) ? 
          [...ids] : [...ids, id];
      });
    },
  },

  actions: {
    async fetch({ commit }){
      const response = await api.getEntries({
        content_type: 'member'
      });

      commit('receive', response.items);
    },
  }
};
