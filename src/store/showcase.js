import wp from '@/utils/wp';
import api from '@/utils/contentful';
import { map, path, pipe, pluck, isEmpty } from 'ramda';

const showcase = {
  namespaced: true,

  state: {
    projects: []
  },

  getters: {
    heroes(state){
      const projects = state.projects;

      return isEmpty(projects) ?
        [] :
        map(
          path([
            'hero',
            'fields'
          ]),
          projects
        );
    }
  },

  mutations: {
    updateProjects(state, payload){
      state.projects = [...state.projects, ...payload]
    },

    clearProjects(state){
      state.projects = [];
    },

    update(state, payload){
      state.projects = [...state.projects, ...payload];
    },

    clear(state){
      state.projects = [];
    }
  },

  actions: {
    async fetchProjects({ commit, dispatch }){
      const projects = await wp.projects()
        .perPage(3);

      commit('updateProjects', projects);
    },

    async fetch({ commit }){
      const response = await api.getEntries({
        content_type: 'project'
      });

      const projects = pluck('fields', response.items);

      commit('update', projects);
    }
  }
}

export default showcase;
