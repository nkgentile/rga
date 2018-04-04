<template>
  <nav :class="$style.container">
      <pages-bar/>
      <social-bar/>
  </nav>
</template>

<script>
  import SocialBar from '@/components/SocialBar';
  import PagesBar from '@/components/PagesBar';

  export default {
    components: {
      SocialBar,
      PagesBar,
    },

  };
</script>

<style module>
  .container {
    display: grid;
    grid-template-columns: repeat(2, max-content); 
    grid-gap: 3rem;
    align-items: center;
    justify-content: space-between;
  }
</style>
