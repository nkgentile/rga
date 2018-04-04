<template>
  <router-link
    :to="`/${page.slug}`"
    tag="li"
  >
    <a>{{ page.title }}</a>
  </router-link>
</template>

<script>
  export default {
    props: {
      page: Object,
    }
  };
</script>

<style module>
</style>
