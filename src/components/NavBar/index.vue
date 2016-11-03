<template lang="html">
  <div class="navbar">
    <ul class="navbar-list">
      <li v-for="(item, $index) in nav" class="navbar-list--title" :class="{'is-active': $index === active}" @click="setIndex($index)">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  import { navbar } from '../../nav.json'

  export default {
    props: {
      active: {
        type: Number
      },
      setIndex: {
        type: Function
      }
    },

    data () {
      return {
        nav: []
      }
    },

    mounted () {
      this.nav = navbar
    }
  }
</script>

<style lang="css">
  @block navbar {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #ededed;

    @element list {
      display: flex;
      margin: 0 auto;
      width: 60rem;

      @child title {
        flex: 1;
        position: relative;
        font-size: 3rem;
        text-align: center;
        letter-spacing: 0.2rem;

        @when active {
          color: #f26d4f;
        }

        @when active:after {
          content: "";
          display: block;
          position: absolute;
          left: 25%;
          bottom: -0.7rem;
          width: 7rem;
          height: 0.3rem;
          background-color: #f26d4f;
        }
      }
    }
  }
</style>
