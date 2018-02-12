<template>
  <article :class="$style.container">
    <header :class="$style.header">
      <fa-icon
        :icon="categoryIcon"
        size="3x"
        transform="shrink-8"
        :mask="fasCircle"
        :class="$style.icon"
      />
      <h1 :class="$style.title">{{ project.title }}</h1>
      <h2 :class="$style.city">{{ project.city }}</h2>
    </header>

    <main v-html="markdown(project.excerpt)">
    </main>

    <footer>
      <router-link
        :to="`/projects/${project.id}`"
        tag="h3"
        :class="$style.button"
      >
        <a>View Project</a>
      </router-link>
    </footer>

  </article>
</template>

<script>
  import { propOr } from 'ramda';
  import {
    FontAwesomeIcon as FaIcon,
    FontAwesomeLayers as FaLayers 
  } from '@fortawesome/vue-fontawesome';

  import {
    faUtensils as fasUtensils,
    faMapMarker as fasMapMarker,
    faCircle as fasCircle,
  } from '@fortawesome/fontawesome-free-solid';
  
  export default {
    components: {
      FaLayers,
      FaIcon,
    },

    props: {
      project: Object,
    },

    computed: {
      categoryIcon(){
        const category = propOr('', 'category', this.project);
        switch(category){
          case 'Restaurant':
            return fasUtensils;
          default:
            return fasMapMarker;
        }
      },

      fasCircle(){
        return fasCircle;
      },
    },
  };
</script>

<style module>
  .container {
    text-align: center;

    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: min-content;
    grid-template-columns: 50ch;
    justify-content: center;
    align-content: center;

    position: relative;

    padding: 1em;
  }

  .container > *:not(first-child){
    margin-top: 1em;
  }

  .header > *:not(first-child) {
    margin-top: 1vh;
  }

  .icon {
    color: var(--accent);
  }

  .title {
    font-size: 2em;
  }

  .city {
    font-size: 1.5em;
  }

  .button {
  }

</style>
