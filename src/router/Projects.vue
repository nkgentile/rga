<template>
  <article :class="$style.container">
    <company-intro/>
    <projects-grid/>
  </article>
</template>

<script>
  import ProjectsGrid from '@/components/ProjectsGrid';
  import CompanyIntro from '@/components/CompanyIntroduction';

  export default {
    name: 'Projects',

    components: {
      ProjectsGrid,
      CompanyIntro,
    }
  }
</script>

<style module>
  .container {
    display: grid;
    grid-gap: var(--grid-spacing);
    max-width: 100vw;
  }
</style>
