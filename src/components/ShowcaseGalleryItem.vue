<template>
  <article :class="$style.container">
    <cf-image :asset="hero" />
  </article>
</template>

<script>
  import CfImage from '@/components/CFImage';

  export default {
    components: {
      CfImage
    },

    props: {
      project: Object
    },

    computed: {
      hero(){
        try {
          return this.project.hero.fields;
        }

        catch(err){
          return {};
        }
      }
    }
  }
</script>

<style module>
  .container {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }
</style>
