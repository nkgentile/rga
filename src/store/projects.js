import wp from '@/utils/wp';
import api from '@/utils/contentful';
import { _, pluck, pathOr, map } from 'ramda';

export default {
  namespaced: true,

  state: {
    projects: {},
    ids: [],
    page: 0,
    total: 1,
    perPage: 100,
    skip: 0
  },

  getters: {
    offset(state){
      return state.perPage * state.page;
    },
  },

  mutations: {
    receive(state, rawProjects){
      const projects = rawProjects.map( p => ({
        id: p.sys.id,
        ...p.fields
      }) );

      projects.forEach( p => {
        const id = p.id;

        state.projects[id] = p;

        if(!state.ids.includes(p.id))
          state.ids = [id, ...state.ids]
      } );
    },

    incrementPage(state){
      state.page += 1;
    },

    setTotalPages(state, total){
      state.totalPages = total;
    },

    setTotal(state, payload){
      state.total = payload;
    },
  },

  actions: {
    async fetch({ state, getters, commit }){
      const response = await api.getEntries({
        content_type: 'project',
        order: 'fields.completed',
        skip: getters.offset,
        limit: state.perPage
      });

      commit('setTotal', response.total)

      commit('receive', response.items);
    }
  }
}
