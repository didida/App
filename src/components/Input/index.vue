<template lang="html">
  <div class="Input">
    <label class="Input-label">
      {{label}}
      <slot name="pic"></slot>
    </label>
    <input :type="type" :placeholder="placeholder" class="Input--core">
    <slot name="code"></slot>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String
      },

      placeholder: {
        type: String
      },

      type: {
        type: String,
        default: 'text'
      }
    }
  }
</script>

<style lang="css">
  @block Input {
    display: flex;
    padding-left: 1.88rem;
    height: 2.5rem;
    line-height: 2.5rem;
    border-bottom: 1px solid #ededed;

    @child core {
      flex: 1;
      padding: 0 .75rem;
      font-size: 0.7rem;
      color: #777777;
      border: 0;
    }
  }
</style>
