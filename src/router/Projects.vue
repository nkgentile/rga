<template>
  <article class="wrapper">
    <section class="container">
      <template v-for="(p, i) in projects">
        <rga-card :key="p.id" :to="p.id" append>
          <cf-image :asset="p.hero.fields" />
          <a slot="footer">{{ p.title }}</a>
        </rga-card>
      </template>
    </section>
  </article>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapGetters, mapActions } = createNamespacedHelpers('projects');
  import store from '@/store';

  import RgaCard from '@/components/RGACard';
  import CfImage from '@/components/CFImage';

  export default {
    name: 'Projects',
    components: {
      RgaCard,
      CfImage
    },

    computed: {
      ...mapState([
        'projects'
      ]),

      ...mapGetters([
        'heroes'
      ])
    },

    methods: {
      ...mapActions({
        fetchProjects: 'fetch'
      }),
    },

    created(){
      this.fetchProjects();
    }
  }
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(10em, 15em);
    grid-gap: 0.25em;
  }

  .slide-up-enter-active, .slide-up-leave-active {
    animation: slide-up 500ms ease-in-out;
  }
  
  .slide-up-leave-active {
    animation-direction: reverse;
  }

  @keyframes slide-up {
    0% {
      transform: translateY(33%);
      opacity: 0;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
