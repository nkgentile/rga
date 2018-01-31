<template>
  <article v-if="!isEmpty(project)">
    <figure class="hero">
      <cf-image :asset="project.hero.fields" />
    </figure>
    <header>
      <h1>{{ project.title }}</h1>
    </header>
    <aside>
      <router-link to="/projects">
        <fa-icon :icon="farArrowAltCircleLeft"/> Back to Projects
      </router-link>
    </aside>
    <main v-html="project.description">
    </main>
    <footer>
      <template v-for="(a, i) in images">
        <figure :key="a.id"
          class="image"
          @click="openLightbox(i)"
        >
          <cf-image 
            :asset="a"
          />
        </figure>
      </template>
    </footer>
    <cf-lightbox
      :assets="images"
    >
    </cf-lightbox>
  </article>
</template>

<script>
  import { isEmpty } from 'ramda';
  import store from '@/store/index';

  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('project');

  import CfImage from '@/components/CFImage';
  import CfLightbox from '@/components/CFLightbox';

  import FaIcon from '@fortawesome/vue-fontawesome';
  import farArrowAltCircleLeft from '@fortawesome/fontawesome-free-regular/faArrowAltCircleLeft';

  export default {
    components: {
      CfImage,
      FaIcon,
      CfLightbox
    },

    computed: {
      ...mapState([
        'project',
      ]),

      ...mapGetters([
        'images'
      ]),

      farArrowAltCircleLeft(){
        return farArrowAltCircleLeft;
      },

      fasTimes(){
        return fasTimes;
      }
    },

    methods: {
      ...mapActions({
        fetchProject: 'fetch'
      }),

      ...mapMutations({
        clearProject: 'clear'
      }),

      openLightbox(index){
        this.$store.dispatch('project/lightbox/open', index);
      },
      isEmpty
    },

    beforeRouteEnter({ params }, from, next){
      store.dispatch('project/fetch', params.id);
      next();
    },

    beforeRouteUpdate({ params }, from, next){
      this.fetchProject(params.id);
      next();
    },

    beforeRouteLeave(to, from, next){
      this.clearProject();
      next();
    }
  }
</script>

<style scoped>
  article {
    display: grid;
    grid-template-columns: 1fr minmax(var(--min-content-width), var(--max-content-width)) 1fr;
    grid-template-rows: minmax(25em, 50vmin) auto auto;
    grid-gap: 2em 3em;
    grid-template-areas:
      "figure figure  figure"
      "...    header  ..."
      "...    aside   ..."
      "...    main    ..."
      "footer    footer  footer"
      "...    ...     ...";
  }

  .hero {
    grid-area: figure;
  }

  header {
    grid-area: header;
    font-size: 2em;
    background-color: var(--neutral);
    border-bottom: 0.25em solid var(--accent);
    color: white;

    margin-top: -2em;

    text-align: center;

    padding: 0.5em;
  }

  aside {
    grid-area: aside;
  }

  main {
    grid-area: main;
  }

  footer {
    grid-area: footer;

    display: grid;
    grid-template-columns: 100vw;
    grid-gap: 0.25em;
    grid-auto-rows: 20em;
  }

  @media screen and (min-width: 900px) {
    article {
      grid-template-areas: 
        "figure figure  figure"
        "...    header  ..."
        "aside  main    ..."
        "footer    footer  footer"
        "...    ...     ...";
    }

    aside {
      justify-self: self-end;
    }

    footer {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>