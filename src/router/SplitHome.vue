<template>
  <article :class="$style.container">
    <main :class="$style.showcase">
      <showcase-gallery :class="$style.gallery"/>
      <showcase-info :class="$style.info"/>
      <showcase-nav :class="$style.nav"/>
    </main>

    <aside :class="$style['site-nav']">
      <site-nav/>
    </aside>
  </article>
</template>

<script>
  import ShowcaseGallery from '@/components/ShowcaseGallery';
  import ShowcaseInfo from '@/components/ShowcaseInfo';
  import ShowcaseNav from '@/components/ShowcaseGalleryNavigator';
  import CompanyIntro from '@/components/CompanyIntroduction';
  import SiteNav from '@/components/NavigationBar';

  export default {
    components: {
      ShowcaseGallery,
      ShowcaseInfo,
      ShowcaseNav,
      CompanyIntro,
      SiteNav,
    }
  }
</script>

<style module>
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .intro {
    padding: 1em;
    display: grid;
    justify-content: center;
  }

  .showcase {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    grid-auto-rows: minmax(20em, 50vh) min-content;

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
    align-self: stretch;

    background-color: var(--neutral);
    color: white;
  }

  @media screen and (min-width: 870px) {
    .showcase {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr 5em;

      grid-template-areas:
        "gallery info"
        "nav nav"
      ;
    }
  }
</style>
