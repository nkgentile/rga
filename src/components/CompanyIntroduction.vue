<template>
  <div :class="$style.container">
    <img :class="$style.hero" :src="hero"/>
    <span :class="$style.intro" v-html="markdown(company.introduction)"/>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapActions } = createNamespacedHelpers('company');

  import logo from '@/assets/logo.svg';
  import hero from '@/assets/henning-witzel-38848-unsplash.jpg';

  export default {
    computed: {
      ...mapState([
        'company'
      ]),

      logo(){
        return logo;
      },
      
      hero(){
        return hero;
      },
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
    grid-template-columns: minmax(min-content, 1fr);
    grid-template-rows: max-content;
    align-items: center;
    justify-content: center;

    position: relative;
    overflow: hidden;

    padding: 5em;

    color: white;
  }

  .hero {
    filter: blur(2px);

    position: absolute;
    top: 0;
    left: 0;

    object-fit: cover;
    object-position: center;

  }

  .intro {
    max-width: 60ch;
    z-index: 1;
  }
</style>
