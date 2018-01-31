<template>
  <figure v-if="!isEmpty(assets)">
    <template v-for="(a, i) in assets">
      <transition name="deck" mode="in-out">
        <cf-image
          class="image"
          v-show="i === index"
          :asset="a"
        />
      </transition>
    </template>

    <figcaption @mouseenter="stop"
      @mouseleave="start"
    >
      <router-link :to="`/projects/${asset.id}`" tag="h1">
        <slot scope="gallery" :index="index" />
      </router-link>
      <wp-gallery-navigator
        :length="assets.length"
        :index="index"
        :onClick="setIndex"
      />
    </figcaption>
  </figure>
</template>

<script>
  import { clamp, isEmpty } from 'ramda';
  import CfImage from '@/components/CFImage';
  import WpGalleryNavigator from '@/components/WPGalleryNavigator';

  export default {
    props: {
      assets: {
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
      asset(){
        return this.assets[this.index];
      },

      clamp(){
        return clamp(0, this.assets.length-1);
      }
    },

    methods: {
      isEmpty,

      start(){
        return isEmpty(this.assets) ?
          false :
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
        return (this.index < this.assets.length - 1) ?
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
      WpGalleryNavigator,
      CfImage
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

  figcaption {
    z-index: 9999999;

    color: white;
    //border-top: 0.25em solid var(--accent);

    padding: 1em;
    box-sizing: border-box;

    display: flex;
    flex-flow: row-reverse nowrap;
    align-items: center;
    justify-content: space-between;

    min-width: 100%;
  }

  figcaption > * {
    background-color: var(--neutral);
    padding: 1em;
  }

  .image {
    display: block;
    position: absolute;
    top: 0;
    left: 0;

    min-width: 100%;
    min-height: 100%;

    max-width: 100%;
    max-height: 100%;
  }
</style>
