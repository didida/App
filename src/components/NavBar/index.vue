<template lang="html">
  <div class="navbar" :style="{ 'border-bottom': borderBottom }">
    <ul class="navbar-list">
      <li v-for="(item, $index) in nav" :style="{ 'height': height, 'line-height': height }" class="navbar-list--title" :class="{'is-active': $index === active, 'is-CarActive': $index === CarActive}" @click="setIndex($index)">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      active: {
        type: Number
      },
      setIndex: {
        type: Function
      },
      nav: {
        type: Array
      },
      CarActive: {
        type: Number
      },
      height: {
        type: String
      },
      borderBottom: {
        type: String
      }
    }
  }
</script>

<style lang="css">
  @block navbar {
    padding-bottom: 0.13rem;
    background-color: #fff;

    @element list {
      display: flex;
      margin: 0 auto;
      width: 15rem;

      @child title {
        flex: 1;
        position: relative;
        font-size: 0.75rem;
        text-align: center;
        letter-spacing: 0.05rem;

        @when active {
          color: #f26d4f;
        }

        @when active:after {
          content: "";
          display: block;
          position: absolute;
          left: 26%;
          bottom: -0.17rem;
          width: 1.75rem;
          height: 0.07rem;
          background-color: #f26d4f;
        }

        @when CarActive {
          font-weight: bold;
        }

        @when CarActive:after {
          content: "";
          display: block;
          position: absolute;
          left: 26%;
          bottom: -0.17rem;
          width: 3.5rem;
          height: 2px;
          background-color: #333;
        }
      }
    }
  }
</style>
