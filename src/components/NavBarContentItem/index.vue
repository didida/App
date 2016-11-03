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
      height: 6.5rem;
    }

    @block brand {
      padding-left: 0.5rem;
      padding-right: 0.5rem;

      li {
        padding-top: 0.5rem;
        width: 20%;
        height: 2.5rem;
        text-align: center;

        img {
          width: 1.38rem;
          height: 1.38rem;
        }

        h4 {
          margin: 0;
          margin-top: 0.13rem;
          font-size: 0.55rem;
          color: #999999;
        }

        a {
          display: inline-block;
          margin-top: 0.42rem;
          width: 1.25rem;
          height: 1.25rem;
          font-size: 0.55rem;
          color: #999999;
          text-decoration: none;
        }
      }
    }

    @block price {
      padding-left: 0.75rem;
      padding-right: 0.5rem;

      li {
        align-self: center;
        width: 5.75rem;
        font-size: 0.65rem;
        color: #999999;
        text-align: center;
      }

      a {
        color: #999;
        text-decoration: none;
        letter-spacing: 0.05rem;
      }
    }

    @block models{
      padding-left: 0.75rem;
      padding-right: 0.5rem;

      li {
        width: 20%;
        align-self: center;
        text-align: center;

        img {
          width: 1.8rem;
          height: 0.7rem;
        }

        h4 {
          margin: 0;
          margin-top: 0.25rem;
          font-size: 0.55rem;
          color: #999999;
        }

        a {
          display: inline-block;
          margin-top: -0.5rem;
          width: 1.25rem;
          font-size: 0.55rem;
          color: #999999;
          text-decoration: none;
        }
      }
    }
  }
</style>
