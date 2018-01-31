<template>
  <main>
    <cf-gallery :assets="heroes" slideshow>
      <a slot-scope="{ index }">{{ projects[index].title }}</a>
    </cf-gallery>
  </main>
</template>

<script>
  import store from '@/store/index.js';

  import { createNamespacedHelpers } from 'vuex';
  import CfGallery from '@/components/CfGallery';

  const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('showcase');

  export default {
    name: 'Home',
    computed: {
      ...mapState([
        'projects'
      ]),

      ...mapGetters([
        'heroes'
      ])
    },

    methods: {
      ...mapActions({
        fetchProjects: 'fetch'
      }),

      ...mapMutations({
        clearProjects: 'clear'
      })
    },

    created(){
      this.fetchProjects();
    },

    components: {
      CfGallery
    }
  }
</script>

<style scoped>
  main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: calc(100vh - 5em);
  }
</style>
