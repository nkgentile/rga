<template>
  <img :src="media.source_url" :width="media.width" :height="media.height"/>
</template>

<script>
import * as R from 'ramda';

export default {
  props: {
    asset: {
      type: Object
    },

    size: {
      type: String,
      default: 'full'
    },
  },

  computed: {
    media(){
      try{
        return this.asset.media_details
          .sizes[this.size];
      }

      catch(e){
       return {};
      }
    }
  }
}
</script>

<style scoped>
  img {
    object-fit: cover;
  }
</style>
