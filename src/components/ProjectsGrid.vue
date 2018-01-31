<template>
   <transition-group tag="section" name="slide-up">
    <rga-card v-for="(p, i) in projects"
      :key="p.id"
      :to="`projects/${p.id}`"
    >
      <wp-image :id="p.featured_media"/>
      <a slot="footer">{{ p.title.rendered }}</a>
    </rga-card>
  </transition-group>
</template>

<script>
  import WpImage from '@/components/WPImage';
  import RgaCard from '@/components/RGACard';

  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapActions } = createNamespacedHelpers('projects');

  export default {
    components: {
      RgaCard,
      WpImage
    },

    computed: {
      ...mapState([
        'projects'
      ])
    },

    methods: {
      ...mapActions([
        'fetchProjects'
      ])
    }
  }
</script>

<style scoped>
</style>
