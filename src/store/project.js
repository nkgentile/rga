import api from '@/utils/contentful';
import lightbox from './lightbox';
import { head, prop, isEmpty } from 'ramda';

export default {
  namespaced: true,

  modules: {
    lightbox
  },

  state: {
    entity: {},
    map: {},
    isLightboxOpen: true
  },

  getters: {
    images({ entity }){

      return isEmpty(entity) ?
        [] : entity.images.map(
          a => ({
            id: a.sys.id,
            ...a.fields
          })
      );
    }
  },

  mutations: {
    clear(state){
      state.entity= {};
    },

    update(state, payload){
      state.entity = payload;
    },

    setMap(state, ref){
      state.map = ref;
    },
  },

  actions: {
    async fetch({ commit }, { slug }){
      const response = await api.getEntries({
        content_type: 'project',
        'fields.slug': slug,
      });

      const project = head(response.items).fields;
      
      commit('update', project);
    }
  }
}
