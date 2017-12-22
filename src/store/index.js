import Vue from 'vue';
import Vuex from 'vuex';

import showcase from './showcase.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    showcase
  }
});

export default store;
