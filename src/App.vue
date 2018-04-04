<template>
  <main id="app">

    <site-nav :class="$style.nav" />

    <transition name="fade" mode="out-in" appear>
      <router-view/>
    </transition>

    <site-footer/>

  </main>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapState } = createNamespacedHelpers('route');

  import SiteNav from '@/components/NavigationBar';
  import SiteFooter from '@/components/SiteFooter';

  export default {
    name: 'app',

    components: {
      SiteNav,
      SiteFooter,
    },

    computed: {
      ...mapState([
      ])
    },
  }
</script>

<style scoped>
  #app {

    --nav-height: 5em;
    --content-height: calc( 100vh - var(--nav-height) );

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows:
      var(--nav-height)
      minmax(
        var(--content-height),
        auto
      )
      min-content;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 12pt;
  }
</style>

<style module>
  .nav {
    padding: 1em;
  }

  .fade-enter-active {
    animation: fade-in 300ms;
  }

  .fade-leave-active {
    animation: fade-in 300ms reverse;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
</style>
