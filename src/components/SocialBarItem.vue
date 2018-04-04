<template>
  <a :href="url" target="_blank">
    <fa-icon
      :icon="icon"
      :mask="fasCircle"
      size="lg"
      transform="shrink-5"
    />
  </a>
</template>

<script>
  import {
    FontAwesomeLayers as FaLayers,
    FontAwesomeIcon as FaIcon
  } from '@fortawesome/vue-fontawesome';

  import {
    faInstagram as fabInstagram,
    faFacebookF as fabFacebook,
  } from '@fortawesome/fontawesome-free-brands';

  import {
    faCircle as fasCircle,
    faQuestion as fasQuestion,
  } from '@fortawesome/fontawesome-free-solid';

  export default {
    components: {
      FaLayers,
      FaIcon,
    },

    props: {
      site: String,
      url: String,
    },

    computed: {
      fabInstagram(){
        return fabInstagram;
      },

      fabFacebook(){
        return fabFacebook;
      },

      fasQuestion(){
        return fasQuestion;
      },

      fasCircle(){
        return fasCircle;
      },

      icon() {
        const site = this.isNil(this.site) ? '' : this.site.toLowerCase();

        switch(site){
          case 'facebook':
            return this.fabFacebook;
          case 'instagram':
            return this.fabInstagram;
          default:
            return this.fasQuestion;
        }
      },
    },
  };
</script>

<style module>
</style>
