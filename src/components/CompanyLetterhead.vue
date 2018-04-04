<template>
  <div :class="$style.container">
    <img :src="logo" width="16" height="16"/>
    <router-link to="/" tag="h1">
      <a>{{ company.name }}</a>
    </router-link>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapActions } = createNamespacedHelpers('company');

  import logo from '@/assets/logo.svg';

  export default {
    computed: {
      ...mapState([
        'company'
      ]),

      logo(){
        return logo;
      }
    },

    methods: {
      ...mapActions({
        fetchCompany: 'fetch'
      }),
    },

    created(){
      this.fetchCompany();
    }
  };
</script>

<style module>
  .container {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: 1fr;
    grid-gap: 1em;
    align-items: center;
  }

  .title {
    font-size: 2vw;
  }

  .logo {
    object-fit: contain;
    object-position: center;
  }
</style>
