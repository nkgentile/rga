<template>
  <article :class="$style.container">
    <aside :class="$style.back">
    </aside>
    <figure :class="$style.portrait">
      <cf-image :asset="member.headshot.fields"/>
    </figure>

    <header :class="$style.info">
      <h1>{{ member.name }}</h1>
      <h2>{{ member.role }}</h2>
      <a :href="`mailto:${member.email}`">
        {{ member.email }}
      </a>

    </header>

    <main 
      :class="$style.body"
      v-html="markdown(member.biography)"
    />
  </article>
</template>

<script>
  import store from '@/store';

  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapActions } = createNamespacedHelpers('member');

  import CfImage from '@/components/CFImage';

  export default {
    components: {
      CfImage,
    },

    computed: {
      ...mapState({
        member: 'entity',
      }),
    },

    methods: {
      ...mapActions({
        fetchMember: 'fetch',
      }),
    },

    beforeRouteEnter({ params }, from, next){
      store.dispatch('member/fetch', params);
      next();
    },
  };
</script>

<style module>

  .container {
    display: grid;
    grid-template-areas:
      "portrait   info"
      "portrait   body"
      "...        body"
      "...        body";
    grid-gap: 1em;

    grid-template-columns: 15em auto;
    grid-auto-rows: auto;
    justify-content: center;

    padding: 2em;
  }

  .portrait {
    grid-area: portrait;

    display: grid;
    grid-template-columns: 1fr;
  }

  .portrait > img {
    object-fit: cover;
    object-position: center;

    width: 100%;
  }

  .info {
    grid-area: info;
  }

  .body {
    grid-area: body;
    max-width: var(--max-content-width);
  }

</style>
