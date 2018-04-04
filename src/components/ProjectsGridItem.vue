<template>
  <router-link
    tag="article"
    :class="$style.container"
    :to="project.slug"
    append
  >
    <header :class="$style.header">
      <h1>{{ project.title }}</h1>
      <h2>{{ project.client }}</h2>
    </header>

    <figure
      :class="$style.hero"
    >
      <cf-image
        :asset="project.hero.fields"
      />
    </figure>

    <aside >
      <ul :class="$style.info">
        <li>
          <h3>
            <category-icon 
              :category="project.category"
            />
            {{ project.city }}
          </h3>
        </li>
      </ul>
   </aside>

    <main>
      <h4 v-html="markdown(project.excerpt)"/>
    </main>

  </router-link>
</template>

<script>
  import CfImage from '@/components/CFImage';
  import CategoryIcon from '@/components/CategoryIcon';

  export default {
    components: {
      CfImage,
      CategoryIcon,
    },

    props: {
      project: Object,
    },
  }
</script>

<style module>
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 15em repeat(2, min-content);
    grid-gap: calc( 0.5 * var(--grid-spacing) );

    position: relative;

    cursor: pointer;

    background-color: white;
  }

  .container::after{
    content: '';

    position: absolute;
    z-index: -1;

    width: 100%;
    height: 100%;

    background-color: var(--accent-complement);
    opacity: 0;
  }

  .container, .container::after {
    transition: 150ms opacity ease-in-out,
      150ms transform ease-in-out;
    transform: translate(0, 0);
  }

  .container:hover {
    transform: scale(1.05);
  }

  .container:hover::after {
    opacity: 0.15;
    transform: scale(0.9);
  }

  .header {
    display: grid;
    text-align: center;
  }
  
  .hero > * {
    min-width: 100%;
    min-height: 100%;

    max-width: 100%;
    max-height: 100%;

    object-fit: cover;
    object-position: center;
  }

  .info {
    display: grid;
    grid-gap: var(--grid-spacing);
  }
</style>
