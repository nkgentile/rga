<template>
  <figure v-if="!isEmpty(assets)">
    <template v-for="(a, i) in assets">
      <transition name="deck" mode="in-out">
        <cf-image
          v-show="index === i"
          class="image"
          :asset="a"
          :key="i"
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
        index: 0
      };
    },

    computed: {
      metronome(){
        return isEmpty(this.assets) && this.slideshow ?
          false : this.start();
      },

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
        return this.createMetronome(this.incrementIndex);
      },

      stop(){
        return this.destroyMetronome();
      },

      createMetronome(f){
        return setInterval(f, 5000);
      },

      destroyMetronome(){
        return clearInterval(this.metronome);
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

    destroyed(){
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
    position: absolute;
    top: 0;
    left: 0;

    min-width: 100%;
    min-height: 100%;

    max-width: 100%;
    max-height: 100%;
  }
</style>
