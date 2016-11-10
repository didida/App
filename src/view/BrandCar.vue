<template lang="html">
  <div class="BrandCar">
    <search></search>

    <div class="BrandCar-list">
      <!-- 品牌选车列表导航 -->
      <ul class="BrandCar-nav">
        <drop-down-nav :title="item.title" v-for="(item, $index) in nav" :active="active" @click.native="DropDownNavActive($index, item)">
        </drop-down-nav>
      </ul>

      <!-- 筛选主要内容 -->
      <!-- <drop-down-main :showMain="showMain" :index="0" :hideMain="hideMain">
        <ul class="BrandCar-list--main">
          <li v-for="item in 20">
            <img src="../assets/img/demo/01.png" alt="" class="BrandCar-list--pic"/>
            <span class="BrandCar-list--text">长城</span>
          </li>
        </ul>
      </drop-down-main>
      <drop-down-main :showMain="showMain" :index="1"></drop-down-main>
      <drop-down-main :showMain="showMain" :index="2"></drop-down-main>
      <drop-down-main :showMain="showMain" :index="3"></drop-down-main> -->

      <!-- 品牌选车列表内容 -->
      <loadmore :autoFill="false" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul class="BrandCar-main">
          <brand-car-main v-for="item in list">
          </brand-car-main>
          <li v-if="allLoaded" class="BrandCar-main--noMore">
            无更多车辆
          </li>
        </ul>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </loadmore>

    </div>
  </div>
</template>

<script>
import Search from '../components/Search'
import DropDownNav from '../components/DropDownNav'
import DropDownMain from '../components/DropDownMain'
import BrandCarMain from '../components/BrandCarMain'
import { BrandCarNav } from '../nav.json'
import { Loadmore } from 'mint-ui'

export default {
  components: {
    Search,
    DropDownNav,
    DropDownMain,
    BrandCarMain,
    Loadmore
  },

  data () {
    return {
      nav: [],
      active: '',
      showMain: null,
      list: [],
      allLoaded: false,
      bottomStatus: '',
      wrapperHeight: 0
    }
  },

  mounted () {
    window.scrollTo(0, 0)
    this.$parent.$emit('footer-nav', 'car')
    this.nav = BrandCarNav
  },

  methods: {
    DropDownNavActive (index, el) {
      if (this.active === el.title) {
        this.active = ''
        this.showMain = null
        return
      }

      this.showMain = index
      this.active = el.title
    },

    hideMain () {
      this.active = ''
      this.showMain = null
    },

    handleBottomChange (status) {
      this.bottomStatus = status
    },

    loadBottom (id) {
      setTimeout(() => {
        let lastValue = this.list[this.list.length - 1]
        if (lastValue < 40) {
          for (let i = 1; i <= 10; i++) {
            this.list.push(lastValue + i)
          }
        } else {
          this.allLoaded = true
        }
        this.$refs.loadmore.onBottomLoaded(id)
      }, 1000)
    }
  },

  created () {
    for (let i = 1; i <= 10; i++) {
      this.list.push(i)
    }
  }
}
</script>

<style lang="css">
  @block BrandCar {

    @element list {
      position: relative;

      @child main {
        overflow-y: scroll;
        height: 10rem;

        li {
          height: 1.75rem;
          line-height: 1.75rem;
        }
      }

      @child pic {
        width: 1.38rem;
        height: 1.38rem;
        vertical-align: middle;
      }
    }

    @element nav {
      display: flex;
    }

    @element main {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      background-color: #f6f6f6;

      @child noMore {
        margin-top: 0.5rem;
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: 0.75rem;
        text-align: center;
        color: #999;
      }
    }
  }
</style>
