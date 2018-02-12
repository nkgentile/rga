<template>
  <div :class="$style.container">
    <h1 :class="$style.title">{{ company.name }}</h1>
    <div :class="$style.intro" v-html="markdown(company.introduction)"/>
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
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    align-items: top;
    justify-content: center;
  }

  .title {
    font-size: 2vw;
  }

  .logo {
    object-fit: contain;
    object-position: center;
  }
</style>
