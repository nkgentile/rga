import wp from '@/utils/wp';
import api from '@/utils/contentful';
import { _, pluck, pathOr, map } from 'ramda';

export default {
  namespaced: true,

  state: {
    projects: [],
    page: 0,
    total: 1,
    perPage: 100,
    skip: 0
  },

  getters: {
    offset(state){
      return state.perPage * state.page;
    },

    heroes(state){
      const toHero = pathOr({}, ['hero', 'fields']);

      return map(toHero, state.projects);
    }
  },

  mutations: {
    update(state, payload){
      state.projects = [...state.projects, ...payload];
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
        skip: getters.offset,
        limit: state.perPage
      });
      console.log(response);

      commit('setTotal', response.total)

      const projects = response.items.map(
        a => ({
          id: a.sys.id,
          ...a.fields
        })
      );
      commit('update', projects);
    }
  }
}
