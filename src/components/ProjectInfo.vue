<template>
  <ul :class="$style.list">
    <li>
      <h3>Client</h3>
      <h4>{{ client }}</h4>
    </li>

    <li>
      <h3>Completed</h3>
      <h4>{{ completed }}</h4>
    </li>

    <li>
      <h3>Services</h3>
      <template v-for="s in services">
        <h4>{{ s }}</h4>
      </template>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      client: String,
      completed: String,
      services: Array,
    },
  };
</script>

<style module>

  .list {
    display: grid;
    grid-gap: var(--grid-spacing);
  }
</style>
