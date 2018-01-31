<template>
  <nav>
    <ul>
      <!-- left arrow -->
      <li v-if="length > 1">
        <fa-icon :icon="fasCaretLeft"
          @click="onClick(index - 1)"
        >
        </fa-icon>
      </li>

      <!-- nodes -->
      <li v-for="(n, i) in range"
        :class="{ active: i === index }"
        @click="onClick(i)"
      >
        <fa-icon v-if="i === index"
          :icon="fasSquare"
        >
        </fa-icon>

        <fa-icon v-else
          :icon="farSquare"
        >
        </fa-icon>
      </li>

      <!-- right arrow -->
      <li v-if="length > 1">
        <fa-icon :icon="fasCaretRight"
          @click="onClick(index + 1)"
        >
        </fa-icon>
      </li>
    </ul>
  </nav>
</template>

<script>
  import FaIcon from '@fortawesome/vue-fontawesome';
  import fasSquare from '@fortawesome/fontawesome-free-solid/faSquare';
  import fasCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight';
  import fasCaretLeft from '@fortawesome/fontawesome-free-solid/faCaretLeft';
  import farSquare from '@fortawesome/fontawesome-free-regular/faSquare';


  export default {
    props: {
      length: Number,
      index: Number,
      onClick: Function
    },

    computed: {
      range(){
        return (new Array(this.length)).fill(0);
      },

      fasSquare(){
        return fasSquare;
      },

      farSquare(){
        return farSquare;
      },

      fasCaretRight(){
        return fasCaretRight;
      },

      fasCaretLeft(){
        return fasCaretLeft;
      }
    },

    components: {
      FaIcon
    }
  }
</script>

<style scoped>
  nav {
  }

  ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
  }

  li {
    display: block;
    //width: 0.5em;
    //height: 0.5em;
    //background-color: white;
    color: white;
    margin-left: 1em;
    cursor: pointer;
    transition: 100ms ease-in-out transform;
  }

  li.active {
    background-color: white;
    transform: scale(1.3, 1.3);
  }
</style>
