<template lang="html">
  <div class="BrandCar">
    <search></search>

    <div class="BrandCar-list">
      <!-- 品牌选车列表导航 -->
      <ul class="BrandCar-nav">
        <drop-down-nav :title="item.title" v-for="(item, $index) in nav" :active="active" @click.native="DropDownNavActive($index, item)">
        </drop-down-nav>
        <li class="DropDownNav">
          <h2 class="DropDownNav-title" @click="screening">
            筛选
          </h2>
        </li>
      </ul>

      <!-- 品牌选车列表内容 -->
      <mt-loadmore :autoFill="false" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
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
      </mt-loadmore>

    </div>

    <mt-popup
    v-model="popupVisible"
    position="right">
      <div class="BrandCar-screening">
        <h2 class="BrandCar-screening--main">筛选内容</h2>
        <div class="BrandCar-screening--content">
          <screening-title title="按价格" fontSize="0.75rem" backgroundColor="#000" color="#fff"></screening-title>
          <ul class="BrandCar-screening--list">
            <li v-for="(item, $index) in screeningMain.num" :class="{ 'is-active': item === Num}" @click="screeningNum(item)">
              {{item}}
            </li>
          </ul>
        </div>
        <div class="BrandCar-screening--content">
          <screening-title title="按车型" fontSize="0.75rem" backgroundColor="#000" color="#fff"></screening-title>
          <ul class="BrandCar-screening--list">
            <li v-for="(item, $index) in screeningMain.model" :class="{ 'is-active': item === Model}" @click="screeningModel(item)">
              {{item}}
            </li>
          </ul>
        </div>
        <div class="BrandCar-screening--content">
          <screening-title title="按排量" fontSize="0.75rem" backgroundColor="#000" color="#fff"></screening-title>
          <ul class="BrandCar-screening--list">
            <li v-for="(item, $index) in screeningMain.displacement" :class="{ 'is-active': item === Displacement}" @click="screeningDisplacement(item)">
              {{item}}
            </li>
          </ul>
        </div>
        <div class="BrandCar-screening--btn">
          <screening-button color="#fff" backgroundColor="#f26d4f" title="确定" :confirm="true" width="12.5rem" fontSize="0.75rem" height="2rem" @click.native="confirmScreenig"></screening-button>
        </div>
        <div class="BrandCar-screening--btn">
          <screening-button color="#fff" backgroundColor="#ccc" title="清空" :confirm="true" width="12.5rem" fontSize="0.75rem" height="2rem" @click.native="clearScreening"></screening-button>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import Search from '../components/Search'
import DropDownNav from '../components/DropDownNav'
import BrandCarMain from '../components/BrandCarMain'
import ScreeningTitle from '../components/Title'
import ScreeningButton from '../components/Button'
import { BrandCarNav, screening } from '../nav.json'

export default {
  components: {
    Search,
    DropDownNav,
    BrandCarMain,
    ScreeningTitle,
    ScreeningButton
  },

  data () {
    return {
      nav: [],
      screeningMain: '',
      active: '',
      showMain: null,
      list: [],
      allLoaded: false,
      bottomStatus: '',
      wrapperHeight: 0,
      popupVisible: false,
      Num: '',
      Model: '',
      Displacement: ''
    }
  },

  mounted () {
    window.scrollTo(0, 0)
    this.$parent.$emit('footer-nav', 'car')
    this.nav = BrandCarNav
    this.screeningMain = screening
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
    },

    screening () {
      this.popupVisible = true
    },

    screeningNum (el) {
      if (this.Num === el) {
        this.Num = ''
      } else {
        this.Num = el
      }
    },

    screeningModel (el) {
      if (this.Model === el) {
        this.Model = ''
      } else {
        this.Model = el
      }
    },

    screeningDisplacement (el) {
      if (this.Displacement === el) {
        this.Displacement = ''
      } else {
        this.Displacement = el
      }
    },

    confirmScreenig () {
      this.popupVisible = false
    },

    clearScreening () {
      this.Num = ''
      this.Model = ''
      this.Displacement = ''
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

    .mint-popup  {
      overflow-y: scroll;
      bottom: 0;
      height: 100%;
    }

    @element screening {
      padding-top: 1rem;
      width: 15.55rem;

      @child main {
        text-align: center;
        margin-bottom: 1rem;
        font-size: 1rem;
      }

      @child content {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }

      @child list {
        display: flex;
        padding-bottom: .5rem;
        flex-wrap: wrap;

        li {
          padding-top: .5rem;
          width: 33%;
          font-size: 0.7rem;
          text-align: center;

          @when active {
            color: #f26d4f;
          }
        }
      }

      @child btn {
        padding-top: 1rem;
        padding-bottom: .5rem;
        text-align: center;
      }
    }
  }
</style>
