import api from '@/utils/contentful';
import lightbox from './lightbox';
import { head, prop, isEmpty } from 'ramda';

export default {
  namespaced: true,

  modules: {
    lightbox
  },

  state: {
    project: {},
    isLightboxOpen: true
  },

  getters: {
    images(state){
      const project = state.project;

      return isEmpty(project) ?
        [] : project.images.map(
          a => ({
            id: a.sys.id,
            ...a.fields
          })
      );
    }
  },

  mutations: {
    clear(state){
      state.project = {};
    },

    update(state, payload){
      state.project = payload;
    }
  },

  actions: {
    async fetch({ commit }, id){
      const response = await api.getEntries({
        content_type: 'project',
        'sys.id': id
      });

      const project = head(response.items).fields;
      
      commit('update', project);
    }
  }
}
