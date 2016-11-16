<template lang="html">
  <h2 class="title" :style="{ 'color': color, 'background-color': backgroundColor, 'font-size': fontSize, 'height': height, 'line-height': height }">
    {{title}}
  </h2>
</template>

<script>
  export default {
    props: {
      color: {
        type: String
      },

      title: {
        type: String
      },

      backgroundColor: {
        type: String
      },

      fontSize: {
        type: String
      },

      height: {
        type: String
      }
    }
  }
</script>

<style lang="css">
  .title {
    padding-left: 0.55rem;
  }
</style>
