import wp from '@/utils/wp';

const showcase = {
  namespaced: true,

  state: {
    projects: []
  },

  getters: {
  },

  mutations: {
    updateProjects(state, payload){
      state.projects = [...state.projects, ...payload]
    },

    updateProjectFeaturedMedia(state, payload){
      const isParent = (p) =>
        p.id === payload.post;

      const project = state.projects.find(isParent);

      project.featured_media = payload;
    }
  },

  actions: {
    async fetchFeaturedMedia({ commit }, id){
      const featuredMedia = await wp.media().id(id);
      
      commit('updateProjectFeaturedMedia', featuredMedia);
    },
    async fetchProjects({ commit, dispatch }){
      const projects = await wp.projects()
        .perPage(5);

      const fetchFeaturedMedia = (p) =>
        dispatch('fetchFeaturedMedia', p.featured_media)

      projects.forEach(fetchFeaturedMedia);

      commit('updateProjects', projects);
    }
  }
}

export default showcase;
