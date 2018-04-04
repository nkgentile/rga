import store from '@/store';

import Home from './Home';
import Project from './Project';
import Projects from './Projects';
import SplitHome from './SplitHome';
import HorizontalSplitHome from './HorizontalSplitHome';
import Studio from './Studio';
import Member from './Member';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HorizontalSplitHome,
  },

  {
    path: '/rga_project/:slug',
    redirect: '/projects/:slug'
  },

  {
    path: '/projects',
    component: Projects
  },

  {
    path: '/projects/:slug',
    component: Project
  },

  {
    path: '/studio',
    component: Studio,
  },

  {
    path: '/studio/:slug',
    component: Member,
  }
];

export default routes;
