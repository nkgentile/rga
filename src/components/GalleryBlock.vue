<template>
  <section>
    <slot name="slide"></slot>
  </section>
</template>

<script>
export default {
}
</script>

<style module>
  .slide {
    border: 1px solid black;
    transition: 300ms transform ease-in-out;
  }

  .visible {
  }

  .hidden {
  }
</style>
