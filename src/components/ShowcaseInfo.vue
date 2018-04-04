<template>
  <ul :class="$style.container">
    <transition mode="out-in">
      <template v-for="(id, i) in ids">
        <info-item
          v-if="i === activeIndex"
          :project="projects[id]"
          :key="id"
          :class="$style.item"
        >
        </info-item>
      </template>
    </transition>
  </ul>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapGetters, mapActions } = createNamespacedHelpers('showcase');

  import GalleryNav from '@/components/ShowcaseGalleryNavigator';
  import InfoItem from '@/components/ShowcaseGalleryInfoItem';
  import CompanyIntro from '@/components/CompanyIntroduction';

  export default {
    components: {
      GalleryNav,
      InfoItem,
      CompanyIntro,
    },

    computed: {
      ...mapState({
        activeIndex: 'index',
        ids: 'ids',
        projects: 'projects',
      }),
    },

    methods: {
      ...mapActions({
        nextProject: 'next',
        prevProject: 'prev',
      })
    }
  }
</script>

<style module>
  .container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
  }

  .item {
  }
</style>
