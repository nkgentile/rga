<template>
  <div id="app">
    <transition name="fade" mode="out-in" appear>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import mixins from '@/mixins';
  import NavBar from '@/components/NavigationBar';

  export default {
    name: 'app',

    components: {
      NavBar
    },
  }
</script>

<style scoped>
  #app {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(100vh, auto);
  }

  header {
    display: grid;
    grid-template-columns: 1fr minmax(var(--min-content-width), var(--max-content-width)) 1fr;
    grid-template-areas:
      "... nav ...";
  }

  header > *:first-child{
    grid-area: nav;
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
