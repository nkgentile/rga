<template>
  <ul :class="$style.container">
    <li>
      <letter-head/>
    </li>

    <template v-for="(id, i) in ids">
      <page-item :page="pages[id]" :key="id"/>
    </template>

  </ul>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapActions } = createNamespacedHelpers('pages');

  import LetterHead from '@/components/CompanyLetterhead';
  import PageItem from '@/components/PagesBarItem';

  export default {
    components: {
      LetterHead,
      PageItem,
    },

    computed: {
      ...mapState({
        pages: 'entities',
        ids: 'ids',
      }),
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

<style module>
  .container {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-template-rows: 1fr;
    grid-gap: 3em;
  }
</style>
