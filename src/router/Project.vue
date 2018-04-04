<template>
  <article v-if="!isEmpty(project)" :class="$style.container">
    <figure :class="$style.hero">
      <cf-image :asset="project.hero.fields" />
    </figure>

    <header :class="$style.title">
      <h1>{{ project.title }}</h1>
      <h2>{{ project.city }}</h2>
    </header>

    <main
      :class="$style.body"
    >
      <section
        :class="$style.description"
        v-html="markdown(project.description)"
      />

      <project-info
        :class="$style.info"
        :client="project.client"
        :completed="project.completed"
        :services="project.services"
      />


    </main>

    <project-map
      :class="$style.map"
      :location="project.location"
    />

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

  import ProjectInfo from '@/components/ProjectInfo';
  import ProjectMap from '@/components/ProjectMap';

  import FaIcon from '@fortawesome/vue-fontawesome';
  import farArrowAltCircleLeft from '@fortawesome/fontawesome-free-regular/faArrowAltCircleLeft';

  export default {
    components: {
      CfImage,
      FaIcon,
      CfLightbox,
      ProjectInfo,
      ProjectMap,
    },

    computed: {
      ...mapState({
        project: 'entity',
      }),

      ...mapGetters([
        'images'
      ]),

      farArrowAltCircleLeft(){
        return farArrowAltCircleLeft;
      },

      fasTimes(){
        return fasTimes;
      },
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
      store.dispatch('project/fetch', params);
      next();
    },

    beforeRouteUpdate({ params }, from, next){
      this.fetchProject(params);
      next();
    },

    beforeRouteLeave(to, from, next){
      this.clearProject();
      next();
    }
  }
</script>

<style module>
  .container {
    --spacing: 3em;

    display: grid;
    grid-gap: var(--spacing);
    grid-template-rows:
      minmax(20em, 80vh)
      min-content;
  }

  .hero {
  }

  .hero > * {
    min-width: 100%;
    min-height: 100%;

    max-width: 100%;
    max-height: 100%;

    object-fit: cover;
    object-position: center;
  }

  .title {
    font-size: 2em;
    text-align: center;
  }

  .body {
    display: grid;
    justify-content: center;
    padding: 0 1em;
    grid-gap: var(--spacing);
  }

  @media screen and (min-width: 1045px) {
    .body {
      grid-template-columns:
        var(--max-content-width)
        max-content
      ;
    }
  }

  .info {
  }

  .description {
  }
</style>
