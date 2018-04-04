import Vue from 'vue';
import Vuex from 'vuex';

import showcase from './showcase';
import project from './project';
import image from './image';
import projects from './projects';
import pages from './pages';
import categories from './categories';
import company from './company';
import social from './social';
import members from './members';
import member from './member';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    company,
    showcase,
    project,
    image,
    projects,
    pages,
    categories,
    social,
    members,
    member,
  }
});

export default store;
