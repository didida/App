<template lang="html">
  <button type="button" class="button"
  :style="{ 'color': color, 'font-size': fontSize, 'width': width, 'height': height, 'line-height': height, 'background-color': backgroundColor }"
  :class="{ 'is-big': big, 'is-shadow': shadow, 'is-middle': middle }">
    {{title}}
  </button>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      },

      color: {
        type: String
      },

      fontSize: {
        type: String
      },

      height: {
        type: String
      },

      width: {
        type: String
      },

      backgroundColor: {
        type: String
      },

      middle: {
        type: Boolean
      },

      big: {
        type: Boolean
      },

      shadow: {
        type: Boolean
      }
    }
  }
</script>

<style lang="css">
  @block button {
    border: 0;
    border-radius: 0.1rem;
    outline: none;

    &:disabled {
      background-color: #d3d3d3;
    }

    @when middle {
      width: 11rem;
    }

    @when big {
      width: 17.25rem;
    }

    @when shadow {
      box-shadow: 0 1px 16px 0 rgba(242, 109, 79, 0.5);
    }
  }
</style>
