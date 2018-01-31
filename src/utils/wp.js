import WPAPI from 'wpapi';
import { routes } from '@/assets/wp-endpoints.json'

const endpoint = 'http://localhost/~nkgentile/clients/RalphGentileArchitects/wp-json/';

const wp = new WPAPI({
  endpoint,
  routes
});

export default wp;
