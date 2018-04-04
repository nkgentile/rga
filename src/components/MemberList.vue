<template>
  <section :class="$style.container">
    <template v-for="(id, i) in ids">
      <member-card
        :member="members[id]"
        :class="$style.member"
        :key="id"
      />
    </template>
  </section>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapActions } = createNamespacedHelpers('members');

  import MemberCard from '@/components/MemberListItem';

  export default {
    components: {
      MemberCard,
    },

    computed: {
      ...mapState({
        members: 'entities',
        ids: 'ids',
      })
    },

    methods: {
      ...mapActions({
        fetchMembers: 'fetch',
      }),
    },

    created(){
      this.fetchMembers();
    },
  };
</script>

<style module>
  .container {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(
        min-content,
        25em
      )
    );
    grid-gap: 3em;

    justify-content: center;
    text-align: center;
  }
</style>
