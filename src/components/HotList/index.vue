<template lang="html">
  <div class="Hotlist">
    <title-bar :title="title" :link="link"></title-bar>
  </div>
</template>

<script>
  import TitleBar from '../TitleBar'

  export default {
    components: {
      TitleBar
    },

    data () {
      return {
        title: '热门推荐',
        link: '/'
      }
    }
  }
</script>

<style lang="css">
  @block Hotlist {
    padding-top: 2rem;
    background-color: #f6f6f6;
  }
</style>
