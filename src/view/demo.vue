<template lang="html">
  <div class="search-main">
    <mt-header>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <input type="search" name="name" value="" placeholder="搜索品牌、价格、排量、车型">
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$parent.$emit('footer-nav', 'demo')
    }
  }
</script>

<style lang="css">
@namespace search {

  @block main {
    display: flex;

  }
}
</style>
