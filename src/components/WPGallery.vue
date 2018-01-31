<template>
  <figure v-if="posts.length > 0">
    <template v-for="(p, i) in posts">
      <transition name="fade"
        :key="i"
      >
        <wp-image
          v-show="i === index"
          :id="p.featured_media"
        />
      </transition>
    </template>

    <figcaption @mouseenter="stop"
      @mouseleave="start"
    >
      <slot scope="gallery" :post="post"></slot>
      <wp-gallery-navigator
        :length="posts.length"
        :index="index"
        :onClick="setIndex"
      >
      </wp-gallery-navigator>
    </figcaption>
  </figure>
</template>

<script>
  import { clamp } from 'ramda';
  import WpImage from '@/components/WPImage';
  import WpGalleryNavigator from '@/components/WPGalleryNavigator';

  export default {
    props: {
      posts: {
        type: Array
      },

      slideshow: {
        type: Boolean,
        default: false 
      }
    },

    data(){
      return {
        metronome: undefined,
        index: 0,
      };
    },

    computed: {
      post(){
        return this.posts[this.index];
      },

      clamp(){
        return clamp(0, this.posts.length-1);
      }
    },

    methods: {
      start(){
        if(this.posts.length > 1)
          this.createMetronome(this.incrementIndex);
      },

      stop(){
        this.destroyMetronome();
      },

      createMetronome(f){
        this.metronome = setInterval(f, 5000);
      },

      destroyMetronome(){
        this.metronome = clearInterval(this.metronome);
      },

      incrementIndex(n = 1){
        return (this.index < this.posts.length - 1) ?
          this.setIndex(this.index + n):
          this.setIndex(0);
      },

      setIndex(i){
        this.index = this.clamp(i);
      },
    },

    mounted(){
      if(this.slideshow){
        this.start();
      }
    },

    destroyed(){
      if(this.slideshow){
        this.stop();
      }
    },

    components: {
      WpImage,
      WpGalleryNavigator
    }
  }
</script>

<style scoped>
  figure {
    position: relative;
    background-color: black;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;

    overflow: hidden;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 300ms ease-in-out;
  }

  .fade-enter-to, .fade-leave {
    opacity: 1;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  figcaption {
    z-index: 9999999;

    color: white;
    background-color: var(--neutral);
    border-top: 0.25em solid var(--accent);

    padding: 1em;
    box-sizing: border-box;

    display: flex;
    flex-flow: row-reverse nowrap;
    align-items: center;
    justify-content: space-between;

    min-width: 100%;
  }

  picture {
    position: absolute;
    top: 0;
    left: 0;

    min-width: 100%;
    min-height: 100%;

    max-width: 100%;
    max-height: 100%;
  }
</style>
