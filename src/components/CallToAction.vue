<template>
  <div :class="$style.container">
    <h1>
      <slot/>
    </h1>
  </div>
</template>

<script>
  export default {
  };
</script>

<style module>
  .container {
    background-color: var(--accent);
    padding: 1em 2em;
    cursor: pointer;
  }
</style>
