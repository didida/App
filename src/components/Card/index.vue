<template lang="html">
  <div class="card">
    <img src="../../assets/img/01.jpg" alt="" v-if="icon"/>
    <slot name="title"></slot>
    <slot name="num"></slot>
  </div>
</template>

<script>
  export default {
    props: ['icon']
  }
</script>

<style lang="css">
  @block card {
    width: 8.63rem;
    height: 10.28rem;
    background-color: #fff;

    img {
      display: block;
      width: 8.63rem;
      height: 6.3rem;
      border-radius: 0.1rem 0.1rem 0 0;
    }
  }
</style>
