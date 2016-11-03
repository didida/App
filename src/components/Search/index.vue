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
    margin: 3rem auto;
    width: 60rem;

    @element input {
      width: 49.2rem;
      height: 7rem;
      line-height: 6.2rem;
      font-size: 2.6rem;
      text-indent: 8rem;
      border: 0.4rem solid #66b9b3;
      border-right: 0;
      border-radius: 5rem 0 0 5rem;

      &::placeholder {
        color: #d3d3d3;
      }
    }

    @element btn {
      width: 10rem;
      height: 7rem;
      background: #fff url('../../assets/img/btn.png') no-repeat center;
      background-size: 10rem 7rem;
      border: 0;
    }
  }
</style>
