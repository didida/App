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
    padding: 0 3rem;
    height: 8rem;
    line-height: 8rem;
    background-color: #fff;

    @element title {
      flex: 1;
      position: relative;
      margin: 0;
      padding-left: 1.2rem;
      font-size: 3rem;
      font-weight: normal;

      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 2.5rem;
        left: 0;
        width: 0.4rem;
        height: 3rem;
        background-color: #000;
      }
    }

    @element more {
      padding-right: 2rem;
      font-size: 2.5rem;
      color: #999999;
      text-decoration: none;
      background: url('../../assets/img/demo/arrow.png') no-repeat  5.5rem 2.6rem;
      background-size: 1.4rem 2.5rem;
    }
  }
</style>
