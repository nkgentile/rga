<template>
  <section :class="$style.container">
    <template v-for="(id, i) in ids">
      <project-card
        :project="projects[id]"
        :class="$style.project"
        :key="id"
      >
      </project-card>
    </template>
  </section>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapGetters, mapActions } = createNamespacedHelpers('projects');

  import store from '@/store';

  import RgaCard from '@/components/RGACard';
  import CfImage from '@/components/CFImage';
  import ProjectCard from '@/components/ProjectsGridItem';


  export default {
    components: {
      RgaCard,
      CfImage,
      ProjectCard,
    },

    computed: {
      ...mapState([
        'projects',
        'ids',
      ])
    },

    methods: {
      ...mapActions({
        fetchProjects: 'fetch',
      })
    },

    created(){
      this.fetchProjects();
    },
  }
</script>

<style module>
  .container {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(
        20em,
        1fr
      ) 
    );
    grid-gap: calc( 3 * var(--grid-spacing) );

    padding: var(--grid-spacing);
  }

</style>
