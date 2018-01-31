<template>
  <nav>
      <img :src="logo" width="16" height="16"/>
      <router-link to="/" tag="h1">
        <a>Ralph Gentile &middot; Architects</a>
      </router-link>
      <ul>
        <router-link :to="`/${p.slug}`" tag="li" v-for="(p, i) in pages"
          :key="i"
        >
          <a>{{ p.title }}</a>
        </router-link>
      </ul>
  </nav>
</template>

<script>
  import logo from '@/assets/logo.svg';

  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapActions } = createNamespacedHelpers('pages');

  export default {
    computed: {
      ...mapState([
        'pages'
      ]),

      logo(){
        return logo;
      }
    },

    methods: {
      ...mapActions({
        fetchPages: 'fetch'
      })
    },

    created(){
      this.fetchPages();
    }
  };
</script>

<style scoped>
  nav {
    display: grid;
    grid-template-columns: auto auto 3fr auto;
    grid-gap: 1em;
    align-items: center;
    grid-template-areas:
      "logo  title ... nav";
  }

  img {
    grid-area: logo;
  }

  h1 {
    grid-area: title;
  }

  ul {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    grid-gap: 3em;
    justify-content: flex-end;
  }
</style>
