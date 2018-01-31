<template>
  <transition name="fade">
  <picture v-if="attachment">
    <source v-for="(s) in sources"
      :srcset="s.source_url"
      :type="s.mime_type"
      :media="`(max-width: ${s.width}px)`"
    >
    </source>

    <img :src="sources.large.source_url"
      :width="sources.large.width"
      :height="sources.large.height"
    />
  </picture>
  </transition>
</template>

<script>
  import wp from '@/utils/wp';

  export default {
    props: {
      id: Number
    },

    data(){
      return {
        attachment: false
      }
    },

    computed: {
      sources(){
        return this.attachment.media_details.sizes;
      }
    },

    methods: {
      async fetchAttachment(){
        this.attachment = await wp.media().id(this.id);
      }
    },

    mounted(){
      this.fetchAttachment(this.id);
    }
  }
</script>

<style scoped>
  img {
    object-fit: cover;
    object-position: center center;

    min-width: 100%;
    max-width: 100%;

    min-height: 100%;
    max-height: 100%;
  }

  .fade-enter-active {
    transition: opacity 300ms ease-in-out;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-to {
    opacity: 1;
  }
</style>
