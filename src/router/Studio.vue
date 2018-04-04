<template>
  <main :class="$style.container">
    <header :class="$style.hero"/>
    <main :class="$style.intro" v-html="markdown(company.studio)"/>
    <member-list :class="$style.members"/>
  </main>
</template>

<script>
  import MemberList from '@/components/MemberList';
  
  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapGetters } = createNamespacedHelpers('company');

  export default {
    components: {
      MemberList,
    },

    computed: {
      ...mapState([
        'company',
      ]),
    },
  };
</script>

<style module>
  .container {
    display: grid;
    grid-gap: 3em;
    grid-template-rows: minmax(auto, 80vh) auto auto;
  }

  .hero {
    background-color: var(--neutral);
    background-image: url(@/assets/bg-colorized.jpg);
    background-size: cover;
    background-position: center;

    display: grid;
    grid-template-columns: minmax(auto, 60ch);
    grid-auto-rows: min-content;
    justify-content: center;
    align-content: center;
  }

  .intro {
    display: grid;
    grid-template-columns: var(--max-content-width);
    justify-content: center;
    text-align: center;
  }

  .members {
  }
</style>
