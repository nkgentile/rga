<template>
  <div :class="$style.container">
    <ul :class="$style.nav">
      <template v-for="(id, i) in ids">
        <nav-item
          :active="i === activeIndex"
          :onClick="() => setIndex(i)"
        >
          <h3>{{ projects[id].title }}</h3>
        </nav-item>
      </template>
    </ul>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const {
    mapState,
    mapGetters,
    mapMutations
  } = createNamespacedHelpers('showcase');

  import NavItem from '@/components/ShowcaseGalleryNavigatorItem';

  export default {
    components: {
      NavItem,
    },

    computed: {
      ...mapState({
        ids: 'ids',
        projects: 'projects',
        activeIndex: 'index'
      }),

      ...mapGetters({
        project: 'active'
      }),
    },

    methods: {
      ...mapMutations([
        'setIndex'
      ]),
    }
  };
</script>

<style module>
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: center;
  }

  .nav {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-template-rows: 1fr;
    justify-content: space-evenly;
    align-items: center;

    position: relative;

    padding: 1em;
  }

  .nav::after {
    //content: '';
    width: 100%;
    height: 0.1em;
    position: absolute;
    background-color: var(--neutral);

    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
  }

  .nav-item {
    position: relative;
  }

  .nav-item::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    display: block;
    width: 100%;

    background-color: black;
  }

  .nav-item.active {
    color: var(--accent);
  }

</style>
