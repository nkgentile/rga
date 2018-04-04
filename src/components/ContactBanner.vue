<template>
  <section :class="$style.container">
    <h1 :class="$style.cta">
      <span>Have a project in mind?</span>
      <call-to-action>Tell Us About It</call-to-action>
    </h1>
  </section>
</template>

<script>
  import CallToAction from '@/components/CallToAction';

  export default {
    components: {
      CallToAction,
    },
  };
</script>

<style module>
  .container {
    display: grid;
    grid-gap: 3em;
    justify-content: center;
    align-content: center;

    background-color: var(--neutral);
    color: white;

    height: 20em;
    text-align: center;
  }

  .cta {
    display: grid;
    grid-gap: var(--grid-spacing);
  }

  .social {
  }
</style>
