<template lang="html">
  <!-- <div class="search clearfix"> -->
  <router-link to="demo" tag="div" class="search">
    <div class="search-text">
      搜索品牌、价格、排量、车型
    </div>
    <button type="button" class="search-btn l"></button>
  </router-link>
    <!-- <input type="text" value="" placeholder="搜索品牌、价格、排量、车型" class="search-input l" @click="goSerch" autofocus="false"> -->
  <!-- </div> -->
</template>

<script>
  export default {
    methods: {
      goSerch () {
        this.$router.push({ 'name': 'demo' })
      }
    }
  }
</script>

<style lang="css">
  @block search {
    margin: 0.75rem auto;
    display: flex;
    width: 15rem;

    @element text {
      width: 12.3rem;
      height: 1.55rem;
      line-height: 1.55rem;
      font-size: 0.65rem;
      text-indent: 2rem;
      color: #d3d3d3;
      border: 0.1rem solid #66b9b3;
      border-right: 0;
      border-radius: 1.25rem 0 0 1.25rem;
    }

    @element btn {
      width: 2.5rem;
      height: 1.75rem;
      background: #fff url('../../assets/img/btn.png') no-repeat center;
      background-size: 2.5rem 1.75rem;
      border: 0;
    }
  }
</style>
