<template>
  <article :class="$style.container">
    <showcase-gallery :class="$style.gallery"/>
    <showcase-info :class="$style.info"/>
    <showcase-nav :class="$style.nav"/>
  </article>
</template>

<script>
  import ShowcaseGallery from '@/components/ShowcaseGallery';
  import ShowcaseInfo from '@/components/ShowcaseInfo';
  import ShowcaseNav from '@/components/ShowcaseGalleryNavigator';

  export default {
    components: {
      ShowcaseGallery,
      ShowcaseInfo,
      ShowcaseNav,
    }
  }
</script>

<style module>
  .container {
    display: grid;

    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content;

    grid-template-areas:
      "gallery"
      "nav"
      "info"
    ;
  }

  .gallery {
    grid-area: gallery;
  }

  .info {
    grid-area: info;
  }

  .nav {
    grid-area: nav;

    background-color: var(--gray);
  }

  @media screen and (min-width: 870px) {
    .showcase {
      grid-template-columns: 1fr;
      grid-template-rows: var(--content-height)  min-content;

      grid-template-areas:
        "gallery"
        "nav"
      ;
    }

    .info {
      grid-area: gallery;
    }
  }
</style>
