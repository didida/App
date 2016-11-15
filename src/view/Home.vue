<template lang="html">
  <div>

    <!-- banner轮播图 -->
    <mt-swipe class="my-swipe">
      <mt-swipe-item v-for="item in 3">
        <img src="../assets/img/banner.jpg" alt="" />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 搜索框 -->
    <search></search>

    <!-- 首页导航部分 -->
    <nav-bar :active="index" :setIndex="setIndex" :nav="navbar" borderBottom="1px solid #ededed"></nav-bar>

    <!-- 导航主要筛选部分 -->
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

    <!-- 底部列表 -->
    <div class="home-Hotlist">
      <Hotlist :titleShow="true"></Hotlist>
    </div>

    <!-- 底部版权部分 -->
    <e-footer></e-footer>

  </div>
</template>

<script type="text/javascript">
  import ENav from '../components/Nav'
  import Search from '../components/Search'
  import NavBar from '../components/NavBar'
  import NavBarContent from '../components/NavBarContent'
  import NavBarContentItem from '../components/NavBarContentItem'
  import Hotlist from '../components/HotList'
  import EFooter from '../components/Footer'

  import { navbar } from '../nav.json'

  export default {
    components: {
      ENav,
      Search,
      NavBar,
      NavBarContent,
      NavBarContentItem,
      Hotlist,
      EFooter
    },

    data () {
      return {
        index: 0,
        brand: 'brand',
        price: 'price',
        models: 'models',
        navbar: []
      }
    },

    mounted () {
      window.scrollTo(0, 0)
      this.$parent.$emit('footer-nav', 'index')
      this.navbar = navbar
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

  .home-Hotlist {
    padding-top: .5rem;
    background-color: #f6f6f6;
  }

</style>
