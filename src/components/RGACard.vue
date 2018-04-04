<template>
  <article :class="$style.container">
    <router-link :class="$style.hero" tag="main" :to="to" append>
      <slot/>
    </router-link>
    <router-link :class="$style.title" tag="footer" :to="to">
      <slot name="footer"/>
    </router-link>
  </article>
</template>

<script>
  export default {
    props: [ 'to', 'append' ]
  }
</script>

<style module>
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;

    position: relative;
    
    cursor: pointer;
    overflow: hidden;
  }
  
  .hero {
    grid-column-end: span 3;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .hero > *{
    grid-column-end: span 1;
    grid-row-end: span 1;
  }

  .title {
    display: none;
  }
</style>
