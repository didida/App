<template lang="html">
  <div>

    <swipe class="my-swipe">
      <swipe-item v-for="item in 3">
        <img src="../assets/img/banner.jpg" alt="" />
      </swipe-item>
    </swipe>

    <search></search>

    <nav-bar :active="index" :setIndex="setIndex"></nav-bar>

    <nav-bar-content>
      <nav-bar-content-item v-if="index === 0" :category="brand">
        <router-link v-for="item in 9" tag="li" to="/">
          <img src="../assets/img/demo/01.png" alt="" />
          <h4>长城</h4>
        </router-link>
        <li>
          <a href="#">查看更多</a>
        </li>
      </nav-bar-content-item>
      <nav-bar-content-item v-if="index === 1" :category="price">
        <router-link v-for="item in 8" tag="li" to="/">
          80万以上
        </router-link>
        <li>
          <a href="#">查看更多</a>
        </li>
      </nav-bar-content-item>
      <nav-bar-content-item v-if="index === 2" :category="price">
        <router-link v-for="item in 5" tag="li" to="/">
          4.0L以上
        </router-link>
        <li>
          <a href="#">查看更多</a>
        </li>
      </nav-bar-content-item>
      <nav-bar-content-item v-if="index === 3" :category="models">
        <router-link v-for="item in 9" tag="li" to="/">
          <img src="../assets/img/demo/mpv.png" alt="" />
          <h4>MPV</h4>
        </router-link>
        <li>
          <a href="#">查看更多</a>
        </li>
      </nav-bar-content-item>
    </nav-bar-content>

    <Hotlist></Hotlist>

  </div>
</template>

<script type="text/javascript">
  import ENav from '../components/Nav'
  import Search from '../components/Search'
  import NavBar from '../components/NavBar'
  import NavBarContent from '../components/NavBarContent'
  import NavBarContentItem from '../components/NavBarContentItem'
  import Hotlist from '../components/HotList'

  // Minit-ui
  import { Header, Swipe, SwipeItem } from 'mint-ui'

  export default {
    components: {
      ENav,
      MHeader: Header,
      Swipe,
      SwipeItem,
      Search,
      NavBar,
      NavBarContent,
      NavBarContentItem,
      Hotlist
    },

    data () {
      return {
        index: 0,
        brand: 'brand',
        price: 'price',
        models: 'models'
      }
    },

    methods: {
      setIndex (index) {
        this.index = index
      }
    }
  }
</script>

<style media="screen">
  .my-swipe {

    img {
      width: 100%;
      height: 10rem;
    }

    .mint-swipe-indicators {
      bottom: 0.75rem;
    }

    .mint-swipe-indicator {
      margin: 0 5px;
      background-color: #fff;
      opacity: 1;

      &.is-active {
        background-color: #f26d4f;
      }
    }

  }
</style>
