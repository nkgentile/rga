<template>
  <transition name="fade">
     <img
      @load.once="hasLoaded"
      v-show="isLoaded"
      :src="src"
      :width="width"
      :height="height"
    />
  </transition>
</template>

<script>
  export default {
    props: {
      src: String,
      width: Number,
      height: Number
    },

    data(){
      return {
        isLoaded: false
      }
    },

    computed: {
      buffer(){
      }
    },

    methods: {
      hasLoaded(e){
        this.isLoaded = true;
      }
    }
  }
</script>
