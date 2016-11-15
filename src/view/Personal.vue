<template lang="html">
  <div class="personal">
    1111
  </div>
</template>

<script>
  export default {
    mounted () {
      window.scrollTo(0, 0)
      this.$parent.$emit('footer-nav', 'personal')
    }
  }
</script>

<style lang="css">
  @block personal {

  }
</style>
