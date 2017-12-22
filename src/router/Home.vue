<template>
  <div>
    <gallery-block class="gallery">
      <wp-image v-for="(p, i) in projects"
        :key="i"
        :asset="p.featured_media"
        size="full"
        slot="slide"
      >
      </wp-image>
    </gallery-block>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import WpImage from '@/components/WPImage';
import GalleryBlock from '@/components/GalleryBlock';

const { mapState, mapActions } = createNamespacedHelpers('showcase');

export default {
  computed: {
    ...mapState([
      'projects'
    ])
  },

  methods: {
    ...mapActions([
      'fetchProjects'
    ]),
  },

  created(){
    this.fetchProjects();
  },

  components: {
    WpImage,
    GalleryBlock
  }
}
</script>

<style scoped>
  .gallery{
    width: 100vw;
    height: 100vh;
  }
</style>
