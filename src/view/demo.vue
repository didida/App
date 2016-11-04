<template lang="html">
  <div class="">
    1111
  </div>
</template>

<script>
  export default {
    mounted () {
      console.log(this)
      this.$parent.$emit('test', 'demo')
    }
  }
</script>

<style lang="css">
</style>
