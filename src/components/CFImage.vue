<template>
   <async-image :class="$style.image"
     :src="src"
     :width="width"
     :height="height"
   />
</template>

<script>
  import { isEmpty } from 'ramda';
  import AsyncImage from '@/components/AsyncImage';

  export default {
    components: {
      AsyncImage
    },

    props: {
      asset: Object
    },

    computed: {
      file(){
        return this.asset.file;
      },

      type(){
        return this.file.contentType;
      },

      src(){
        return this.file.url;
      },

      details(){
        return this.file.details;
      },

      width(){
        return this.details.image.width;
      },

      height(){
        return this.details.image.height;
      },
    },

    methods: {
      isEmpty
    }
  }
</script>

<style module>
  .image {
    display: block;
    //min-width: 100%;
    //min-height: 100%;

    //max-width: 100%;
    //max-height: 100%;

    //object-fit: cover;
    //object-position: center;
  }
</style>
