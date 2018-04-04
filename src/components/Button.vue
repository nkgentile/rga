<template>
  <h1 :class="$style.button">
    <slot/>
  </h1>
</template>

<script>
</script>

<style module>
  .button {
    background-color: var(--accent);
  }
</style>
