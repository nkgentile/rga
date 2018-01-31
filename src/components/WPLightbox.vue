<template>
  <transition name="fade-in">
    <article v-show="isOpen">
      <div class="background" @click="close"/>
      <transition-group
        name="deck"
        tag="section"
        :style="transform"
      >
        <template v-for="(s, i) in attachments">
          <div
            @click="setIndex(i)"
            :key="s"
            :class="{
              [$style.active]: i === index,
              [$style.inactive]: i != index
            }"
          >
            <wp-image
              :id="s"
            />
          </div>
        </template>
      </transition-group>
      <div @click="close" class="close">
        <fa-icon :icon="fasTimesCircle"/>
      </div>
    </article>
  </transition>
</template>

<script>
  import WpImage from '@/components/WPImage';

  import FaIcon from '@fortawesome/vue-fontawesome';
  import fasTimesCircle from '@fortawesome/fontawesome-free-solid/faTimesCircle';

  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapMutations, mapActions } = createNamespacedHelpers('project/lightbox');

  export default {
    props: {
      attachments: Array,
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

    components: {
      WpImage,
      FaIcon
    }
  }
</script>

<style module>
  .active{
    transform: scale(1);
    opacity: 1;
  }

  .inactive{
    transform: scale(0.9);
    opacity: 0.75;
  }
</style>

<style scoped>
  article {
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

  section {
    width: 100vw;
    height: 80vh;

    display: grid;
    grid-auto-flow: column;
    grid-template-rows: 1fr;
    grid-auto-columns: 80vw;
    grid-gap: 0em;

    transition: 300ms transform ease-in-out;
  }

  section > *{
    transition:
      300ms transform ease-in-out,
      150ms opacity ease-in-out;

    cursor: pointer;
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
