<template>
  <transition name="fade-in">
    <article v-show="isOpen" :class="$style.container">
      <div :class="$style.background" @click="close"/>
      <transition-group
        name="deck"
        tag="section"
        :style="transform"
        :class="$style.deck"
      >
        <template v-for="(s, i) in assets">
          <div
            @click="setIndex(i)"
            :key="s.id"
            :class="{
              [$style.active]: i === index,
              [$style.inactive]: i != index,
              [$style.previous]: i < index,
              [$style.next]: i > index,
              [$style.item]: true,
            }"
          >
            <cf-image
              :asset="s"
              :class="$style.image"
            />
          </div>
        </template>
      </transition-group>
      <div @click="close" :class="$style.close">
        <fa-icon :icon="fasTimesCircle"/>
      </div>
    </article>
  </transition>
</template>

<script>
  import CfImage from '@/components/CFImage';

  import FaIcon from '@fortawesome/vue-fontawesome';
  import {
    faTimesCircle as fasTimesCircle,
    faChevronCircleLeft as fasChevronCircleLeft,
    faChevronCircleRight as fasChevronCircleRight,
  } from '@fortawesome/fontawesome-free-solid';

  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapMutations, mapActions } = createNamespacedHelpers('project/lightbox');

  export default {
    components: {
      CfImage,
      FaIcon
    },

    props: {
      assets: Array,
    },

    methods: {
      ...mapMutations([
        'setIndex',
      ]),

      ...mapActions([
        'open',
        'close'
      ])
    },

    computed: {
      fasTimesCircle(){
        return fasTimesCircle;
      },

      fasChevronCircleLeft(){
        return fasChevronCircleLeft;
      },

      fasChevronCircleRight(){
        return fasChevronCircleRight;
      },

      ...mapState([
        'isOpen',
        'index'
      ]),

      transform(){
        const offset = this.index * 80;

        return {
          transform: `
            translateX(10vw)
            translateX(-${offset}vw)
          `
        };
      },
    },
  }
</script>

<style module>
  .container {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;


    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
  }

  .background {
    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.9);
  }

  .deck {
    width: 100vw;
    height: 80vh;

    display: grid;
    grid-auto-flow: column;
    grid-template-rows: 1fr;
    grid-auto-columns: 80vw;
    grid-gap: 0em;

    transition: 300ms transform ease-in-out;
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;

    margin: 1em;
    padding: 1em;
    color: var(--highlight);

    cursor: pointer;
  }

  .item {
    transition:
      300ms transform ease-in-out,
      150ms opacity ease-in-out;

    cursor: pointer;

    width: 100%;
    height: 100%;
  }

  .active{
    transform: scale(1);
    opacity: 1;
  }

  .inactive{
    transform: scale(0.9);
  }

  .image {
    min-height: 100%;
    max-height: 100%;

    min-width: 100%;
    max-width: 100%;

    object-fit: cover;
    object-position: center;
  }
</style>

<style scoped>
  .fade-in-enter-active,
  .fade-in-leave-active {
    transition: 500ms opacity ease-in-out;
  }

  .fade-in-enter,
  .fade-in-leave-to {
    opacity: 0;
  }

  .fade-in-enter-to,
  .fade-in-leave {
    opacity: 1;
  }
</style>
