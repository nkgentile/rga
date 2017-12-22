import WPAPI from 'wpapi';
import apiRootJSON from '@/assets/wp-endpoints.json'

const routes = apiRootJSON.routes;
const endpoint = 'http://localhost/~nkgentile/clients/RalphGentileArchitects/wp-json/';

const wp = new WPAPI({
  endpoint,
  routes
});

export default wp;
