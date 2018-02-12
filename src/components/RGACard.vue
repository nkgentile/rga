<template>
  <article>
    <router-link tag="main" :to="to" append>
      <slot/>
    </router-link>
    <router-link tag="footer" :to="to">
      <span class="wrapper">
        <slot name="footer"/>
      </span>
    </router-link>
  </article>
</template>

<script>
  export default {
    props: [ 'to', 'append' ]
  }
</script>

<style scoped>
  article {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    position: relative;
    
    cursor: pointer;
    
    overflow: hidden;
  }
  
  article > main{
    transition: 150ms transform ease-in-out;
    transform: scale(1);
  }

  article:hover > main{
    transform: scale(1.05);
  }

  footer {
    position: absolute;
    bottom: 0;
    right: 0;

    box-sizing: border-box;
    padding: 1em;
    padding-top: 0.5em;
  }

  .wrapper {
    background-color: var(--neutral);
    color: var(--highlight);

    padding: 0.3em 1em;
    padding-bottom: 1.25em;
  }
</style>
