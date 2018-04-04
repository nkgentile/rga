<template>
  <figure :class="$style.container" v-if="location">
    <gmap-map
      :class="$style.map"
      :center="center"
      :zoom="16"
      ref="map"
    >
      <gmap-marker
        :position="center"
      />
    </gmap-map>
  </figure>
</template>

<script>
  export default {
    props: {
      location: Object,
    },

    computed: {
      center(){
        return {
          lat: this.location.lat,
          lng: this.location.lon,
        };
      }
    },
  };
</script>

<style module>
  .container {
    background-color: var(--gray);
  }

  .map {
    height: 20em;
  }
</style>
