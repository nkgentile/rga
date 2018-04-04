// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from '@/App'

import router from '@/router'
import store from '@/store'
import mixins from '@/mixins';
import plugins from '@/plugins';

import css from '@/assets/global.css'

import { sync } from 'vuex-router-sync';
const unsync = sync(store, router);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
