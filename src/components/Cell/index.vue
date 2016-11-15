<template lang="html">
  <div class="cell" :style="{ 'height': height, 'color': color, 'font-size': fontSize, 'line-height': height }" :class="{ 'is-active': active, 'is-title': titleConfirm }">
    <span>{{title}}</span>
    <slot name="price"></slot>
    <slot name="configuration"></slot>
  </div>
</template>

<script>
  export default {
    props: {
      height: {
        type: String
      },

      lineHeight: {
        type: String
      },

      color: {
        type: String
      },

      active: {
        type: Boolean
      },

      titleConfirm: {
        type: Boolean
      },

      title: {
        type: String
      },
      fontSize: {
        type: String
      }
    }
  }
</script>

<style lang="css">
  @block cell {
    display: flex;
    background-color: #fff;
    border-bottom: 1px solid #ededed;

    @when active {
      border-bottom: 0;
    }

    @when title {
      padding: 0.75rem 1.25rem 0.5rem 0.75rem;
      line-height: 1.2;
    }
  }
</style>
