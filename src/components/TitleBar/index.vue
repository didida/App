<template lang="html">
  <div class="Titlebar">
    <h2 class="Titlebar-title" v-text="title"></h2>
    <router-link :to="link" class="Titlebar-more">
      更多
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      // 标题文字
      title: {
        type: String
      },
      // 链接
      link: {
        type: String
      }
    }
  }
</script>

<style lang="css">
  @block Titlebar {
    display: flex;
    padding: 0 0.75rem;
    height: 2rem;
    line-height: 2rem;
    background-color: #fff;

    @element title {
      flex: 1;
      position: relative;
      margin: 0;
      padding-left: 0.3rem;
      font-size: 0.75rem;
      font-weight: normal;

      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0.63rem;
        left: 0;
        width: 0.1rem;
        height: 0.75rem;
        background-color: #000;
      }
    }

    @element more {
      padding-right: 0.5rem;
      font-size: 0.63rem;
      color: #999999;
      text-decoration: none;
      background: url('../../assets/img/demo/arrow.png') no-repeat  1.38rem 0.65rem;
      background-size: 0.35rem 0.63rem;
    }
  }
</style>
