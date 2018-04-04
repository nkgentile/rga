<template>
  <fa-icon
    :icon="categoryIcon"
    :size="size"
    transform="shrink-8"
    :mask="fasCircle"
    :class="$style.icon"
  />
</template>

<script>
  import {
    FontAwesomeIcon as FaIcon,
    FontAwesomeLayers as FaLayers 
  } from '@fortawesome/vue-fontawesome';

  import {
    faUtensils as fasUtensils,
    faMapMarker as fasMapMarker,
    faCircle as fasCircle,
  } from '@fortawesome/fontawesome-free-solid';

  export default {
    components: {
      FaLayers,
      FaIcon,
    },

    props: {
      category: String,
      size: {
        type: String,
        default: '1x',
      },
    },

    computed: {
      categoryIcon(){
        switch(this.category){
          case 'Restaurant':
            return fasUtensils;
          default:
            return fasMapMarker;
        }
      },

      fasCircle(){
        return fasCircle;
      },
    },
  };


</script>

<style module>
  .icon {
    color: var(--accent);
  }
</style>
