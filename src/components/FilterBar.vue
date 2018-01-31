<template>
  <header>
    <a v-for="(o, i) in options"
      :key="i"
    >{{ o.name }}</a>
  </header>
</template>

<script>
  export default {
    props: {
      options: Array
    }
  }
</script>

<style scoped>
</style>
