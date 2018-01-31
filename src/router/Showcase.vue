<template>
  <article>
    <header class="branding">
      <p>We are a small yet dynamic architectural and interior design firm in Los Angeles, specializing in spa, hotel, restaurant, nightclub, and retail store design.</p>
      <p>Since 1989, we have established a national reputation for highly creative and provocative design solutions for some of the finest clients in the gaming, restaurant and hospitality industries.</p>
      <p>We are licensed to practice architecture in both California and Nevada.</p>
    </header>
    <main>
      <figure v-for="(p, i) in projects"
        :key="i"
      >
        <wp-image :id="p.featured_media"/>
        <h3>{{ p.title.rendered }}</h3>
      </figure>
    </main>
  </article>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapActions } = createNamespacedHelpers('showcase');

  import WpImage from '@/components/WPImage';

  export default {
    computed: {
      ...mapState([
        'projects'
      ])
    },

    methods: {
      ...mapActions([
        'fetchProjects'
      ])
    },

    created(){
      this.fetchProjects();
    },

    components: {
      WpImage
    }
  }
</script>

<style scoped>
  article {
    box-sizing: border-box;
    padding: 1em;

    height: 100vh;
    width: 100vw;

    display: grid;
    grid-template-columns: minmax(10ch, 1fr) 3fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "header main";
    grid-gap: 1em;
  }

  header {
    grid-area: header;
  }

  main {
    grid-area: main;
  }

  figure {
    position: relative;
  }

  figure > h3 {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;

    text-align: right;

    background-color: var(--blue);
    color: white;

    box-sizing: border-box;
    padding: 1em;
  }

  figure:last-of-type {
    grid-area: figure;
  }
</style>
