<template lang="html">
  <ul class="navbar-content-item" :class="'navbar-content-'+ category +''">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    props: {
      category: {
        type: String
      }
    }
  }
</script>

<style lang="css">
  @namespace navbar-content {

    @block item {
      display: flex;
      flex-wrap: wrap;
      height: 26rem;
    }

    @block brand {
      padding-left: 2rem;
      padding-right: 2rem;

      li {
        padding-top: 2rem;
        width: 20%;
        height: 10rem;
        text-align: center;

        img {
          width: 5.5rem;
          height: 5.5rem;
        }

        h4 {
          margin: 0;
          margin-top: 0.5rem;
          font-size: 2.2rem;
          color: #999999;
        }

        a {
          display: inline-block;
          margin-top: 1.7rem;
          width: 5rem;
          height: 5rem;
          font-size: 2.2rem;
          color: #999999;
          text-decoration: none;
        }
      }
    }

    @block price {
      padding-left: 3rem;
      padding-right: 2rem;

      li {
        align-self: center;
        width: 23rem;
        font-size: 2.6rem;
        color: #999999;
        text-align: center;
      }

      a {
        color: #999;
        text-decoration: none;
        letter-spacing: 0.2rem;
      }
    }

    @block models{
      padding-left: 3rem;
      padding-right: 2rem;

      li {
        width: 20%;
        align-self: center;
        text-align: center;

        img {
          width: 7.2rem;
          height: 2.8rem;
        }

        h4 {
          margin: 0;
          margin-top: 1rem;
          font-size: 2.2rem;
          color: #999999;
        }

        a {
          display: inline-block;
          margin-top: -2rem;
          width: 5rem;
          font-size: 2.2rem;
          color: #999999;
          text-decoration: none;
        }
      }
    }
  }
</style>
