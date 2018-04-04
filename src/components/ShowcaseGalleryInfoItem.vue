<template>
  <article :class="$style.container">
    <header :class="$style.header">
      <category-icon
        :category="project.category"
        size="3x"
      />
      <h1 :class="$style.title">{{ project.title }}</h1>
      <h2 :class="$style.city">{{ project.city }}</h2>
    </header>

    <main v-html="markdown(project.excerpt)">
    </main>

    <footer>
      <router-link
        :to="`/projects/${project.slug}`"
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

  import CategoryIcon from '@/components/CategoryIcon';
  
  export default {
    components: {
      FaLayers,
      FaIcon,
      CategoryIcon,
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

    padding: 2em;

    background-color: white;
  }

  .container > *:not(first-child){
    margin-top: 1em;
  }

  .header > *:not(first-child) {
    margin-top: 1vh;
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
