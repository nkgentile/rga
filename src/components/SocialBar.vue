<template>
  <ul :class="$style.container">
    <template v-for="(id, i) in ids">
      <li
        :key="id"
        :class="$style.item"
      >
        <social-icon
          :site="sites[id].site"
          :url="sites[id].url"
        />
        <span v-if="showHandles">
          {{ sites[id].handle }}
        </span>
      </li>
    </template>
  </ul>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapActions } = createNamespacedHelpers('social');

  import SocialIcon from '@/components/SocialBarItem';

  export default {
    components: {
      SocialIcon,
    },

    props: {
      showHandles: Boolean,
    },

    computed: {
      ...mapState([
        'sites',
        'ids',
      ]),
    },

    methods: {
      ...mapActions({
        fetchSites: 'fetch',
      }),
    },

    created(){
      this.fetchSites();
    },
  };
</script>

<style module>
  .container {
    display: grid;
    grid-template-row: 1fr;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-gap: 2rem;
    align-items: center;
    justify-content: center;
  }

  .item {
  }
</style>
