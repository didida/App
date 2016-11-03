<template lang="html">
  <div class="search clearfix">
    <input type="search" value="" placeholder="搜索品牌、价格、排量、车型" class="search-input l">
    <button type="button" class="search-btn l">
    </button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  @block search {
    margin: 0.75rem auto;
    width: 15rem;

    @element input {
      width: 12.3rem;
      height: 1.75rem;
      line-height: 1.55rem;
      font-size: 0.65rem;
      text-indent: 2rem;
      border: 0.1rem solid #66b9b3;
      border-right: 0;
      border-radius: 1.25rem 0 0 1.25rem;

      &::placeholder {
        color: #d3d3d3;
      }
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
