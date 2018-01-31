import Home from './Home';
import Project from './Project';
import Projects from './Projects';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/rga_project/:id',
    redirect: '/projects/:id'
  },

  {
    path: '/projects',
    component: Projects
  },

  {
    path: '/projects/:id',
    component: Project
  }
];

export default routes;
