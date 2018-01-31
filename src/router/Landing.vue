<template>
  <article v-if="projects">
    <figure>
      <wp-image :id="projects[0].featured_media"/>
    </figure>
  </article>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapActions } = createNamespacedHelpers('showcase');
  const { fetchProjects } = mapActions(['fetchProjects']);

  import WpImage from '@/components/WPImage';

  export default {
    computed: {
      ...mapState([
        'projects'
      ])
    },

    methods: {
      ...mapActions([
        'fetchProjects'
      ])
    },

    created(){
      this.fetchProjects();
    },

    components: {
      WpImage
    }
  }
</script>

<style scoped>
</style>
