<template>
  <li
    :class="[
      $style['item'],
      active ? $style.active : '',
    ]"
    @click="onClick"
  >
    <slot/>
    
    <!-- come back to -->
    <fa-layers v-if="false">
      <fa-icon :icon="fasCircle" />
      <span
        class="fa-layers-text fa-inverse"
      >
        <slot/>
      </span>
    </fa-layers>
  </li>
</template>

<script>
  import {
    FontAwesomeIcon as FaIcon,
    FontAwesomeLayers as FaLayers,
    FontAwesomeLayersText as FaLayersText,
  } from '@fortawesome/vue-fontawesome';

  import fasCircle from '@fortawesome/fontawesome-free-solid/faCircle';
  import farCircle from '@fortawesome/fontawesome-free-regular/faCircle';


  export default {
    components: {
      FaIcon,
      FaLayers,
      FaLayersText,
    },

    props: {
      onClick: Function,
      active: Boolean,
    },

    computed: {
      fasCircle(){
        return fasCircle;
      },

      farCircle(){
        return farCircle;
      },

    }
  };
</script>

<style module>
  .item {
    cursor: pointer;
    text-align: center;
    writing-mode: vertical-lr;


    position: relative;
  }

  .item::after {
    content: '';

    display: block;
    width: 100%;
    height: 0.1em;

    position: absolute;
    bottom: -0.25em;
    left: 0;

    background-color: transparent;

    transition: 150ms background-color ease-in-out;
  }

  .item:hover::after {
    background-color: white;
  }

  .item.active::after {
    background-color: var(--accent);
  }
</style>
