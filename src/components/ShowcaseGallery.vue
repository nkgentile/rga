<template>
  <figure :class="$style.container">
    <transition name="fade-out" mode="out-in">
      <template v-for="(id, index) in ids">
          <gallery-item
            v-if="index === activeIndex"
            :project="projects[id]"
            :key="id"
            :class="$style.item"
          />
      </template>
    </transition>
  </figure>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapGetters, mapActions } = createNamespacedHelpers('showcase');

  import { isEmpty } from 'ramda';

  import GalleryItem from '@/components/ShowcaseGalleryItem';
  import GalleryNav from '@/components/ShowcaseGalleryNavigator';

  export default {
    components: {
      GalleryItem,
      GalleryNav,
    },

    computed: {
      ...mapState({
        projects: 'projects',
        ids: 'ids',
        activeIndex: 'index'
      }),

      ...mapGetters({
        project: 'active'
      })
    },

    created(){
      this.fetchCompany();
    },

    methods: {
      ...mapActions({
        fetchCompany: 'fetch'
      }),

      isEmpty
    }
  }
</script>

<style module>
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    grid-auto-rows: 1fr;

    overflow: hidden;

    position: relative;

    background-color: black;
  }

  .item {

  }
</style>
