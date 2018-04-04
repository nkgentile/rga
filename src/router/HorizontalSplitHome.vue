<template>
  <article :class="$style.container">
    <company-intro/>
    <showcase-nav :class="$style.nav"/>
    <showcase-gallery :class="$style.gallery"/>
    <showcase-info :class="$style.info"/>
  </article>
</template>

<script>
  import CompanyIntro from '@/components/CompanyIntroduction';
  import ShowcaseGallery from '@/components/ShowcaseGallery';
  import ShowcaseInfo from '@/components/ShowcaseInfo';
  import ShowcaseNav from '@/components/ShowcaseGalleryNavigator';

  export default {
    components: {
      CompanyIntro,
      ShowcaseGallery,
      ShowcaseInfo,
      ShowcaseNav,
    }
  }
</script>

<style module>
  .container {
    display: grid;

    grid-template-columns: 1fr min-content 2fr;
    grid-template-rows: var(--content-height);
    grid-template-areas:
      "intro nav gallery";

  }

  .gallery {
    grid-area: gallery;
  }

  .info {
    grid-area: gallery;
  }

  .nav {
    background-color: var(--gray);
    grid-area: nav;
  }

</style>
