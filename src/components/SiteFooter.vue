<template>
  <footer :class="$style.container">
    <contact-banner/>
    <section :class="$style.info">

      <a>
        <fa-icon :icon="fasEnvelope"/>
        <span>{{ company.email }}</span>
      </a>

      <a>
        <fa-icon :icon="fasPhone"/>
        <span>{{ company.phone }}</span>
      </a>

      <social-bar :class="$style.social" />

    </section>

  </footer>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapState } = createNamespacedHelpers('company');

  import ContactBanner from '@/components/ContactBanner';

  import SocialBar from '@/components/SocialBar';
  import FaIcon from '@fortawesome/vue-fontawesome';
  import {
    faEnvelope as fasEnvelope,
    faPhone as fasPhone,
  } from '@fortawesome/fontawesome-free-solid';

  export default {
    components: {
      ContactBanner,
      FaIcon,
      SocialBar,
    },

    computed: {
      ...mapState([
        'company',
      ]),

      fasEnvelope(){
        return fasEnvelope;
      },

      fasPhone(){
        return fasPhone;
      },
    }
  }
</script>

<style module>
  .container {
    background-color: var(--gray);
    color: #a5a5a5;
  }

  .info {
    display: grid;
    grid-gap: var(--grid-spacing);
  }


</style>

