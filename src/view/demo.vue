<template lang="html">
  <div class="search-main">
    <e-header>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </e-header>
    <input type="search" name="name" value="" placeholder="搜索品牌、价格、排量、车型">
  </div>
</template>

<script>
  import { Header, Search } from 'mint-ui'

  export default {
    components: {
      EHeader: Header,
      Search
    },

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
