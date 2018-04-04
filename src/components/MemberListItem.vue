<template>
  <router-link
    tag="article"
    :to="member.slug"
    :class="$style.container"
    append
  >
    <figure :class="$style.headshot">
      <cf-image :asset="member.headshot.fields" />
    </figure>
    
    <main :class="$style.info">
      <h1>{{ member.name }}</h1>
      </h2>{{ member.role }}</h2>
    </main>
  </router-link>
</template>

<script>
  import CfImage from '@/components/CFImage';
  export default {
    components: {
      CfImage,
    },

    props: {
      member: Object,
    },
  };
</script>

<style module>
  .container {
    display: grid;
    grid-gap: 1em;
    grid-template-rows: 15em auto;
    grid-auto-columns: 10em;
    justify-content: center;
    cursor: pointer;

    transition: transform 200ms ease-in-out;
  }

  .container:hover {
    transform: translateY(-1%);
  }

  .headshot > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
</style>
