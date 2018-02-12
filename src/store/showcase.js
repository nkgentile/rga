import wp from '@/utils/wp';
import api from '@/utils/contentful';
import { map, path, pipe, pluck, isEmpty, head } from 'ramda';

const showcase = {
  namespaced: true,

  state: {
    projects: {},
    index: 0,
    ids: [],
  },

  getters: {
    active({ index, ids, projects }){
      const id = ids[index];
      return projects[id];
    },

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
    },

    isFirstItem({ index }){
      return index === 0;
    },

    isLastItem(state){
      return state.index === state.ids.length - 1;
    }
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

    clearProjects(state){
      state.projects = [];
    },

    update(state, payload){
      state.projects = [...state.projects, ...payload];
    },

    clear(state){
      state.projects = [];
    },

    increment(state, n = 1){
      state.index += n;
    },

    decrement(state, n = 1){
      state.index -= n;
    },

    setIndex(state, i){
      state.index = i;
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
        content_type: 'company'
      });

      const company = head(response.items);

      commit('receive', company.fields.showcase);
    },

    next({ getters, commit }){
      if(getters.isLastItem){
        commit('setIndex', 0);
      } else {
        commit('increment');
      }
    },

    prev({ getters, commit }){
      if(getters.isFirstItem){
        commit('setIndex', state.ids.length - 1);
      } else {
        commit('decrement');
      }
    }
  }
}

export default showcase;
