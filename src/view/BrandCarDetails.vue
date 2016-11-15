<template lang="html">
  <div class="CarMain">
    <!-- 头顶导航条 -->
    <mt-header title="车辆详情">
      <router-link :to="{ name: 'car'}" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <!-- 中间banner图 -->
    <mt-swipe :auto="0" class="CarMain-swipe">
      <mt-swipe-item>
        <img src="../assets/img/03.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/03.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/03.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/03.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/03.jpg" alt="" />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 车辆详情和标题 -->
    <div class="CarMain-main">
      <Cell :titleConfirm="true" title="奥迪A3L 2015款 30 TFSI 百万纪念智领型一汽-大众奥迪" fontSize="0.75rem"></Cell>
      <div class="CarMain-main--info">
        <Cell title="价格：23万元" fontSize="0.7rem" height="2.25rem">
          <span slot="price" class="CarMain-main--price">市场价：22.89万元</span>
        </Cell>
        <Cell title="订车后，联系客服确定颜色！" fontSize="0.7rem" height="2.25rem"></Cell>
        <Cell title="库存：有现车" fontSize="0.7rem" height="2.25rem" :active="true"></Cell>
      </div>

      <div class="CarMain-details">
        <nav-bar :CarActive="index" :setIndex="setIndex" :nav="CarMainNav" height="2rem"></nav-bar>

        <div class="CarMain-details--pic" v-if="index === 0">
          <img src="../assets/img/demo/banner-3.jpg" alt="" />
          <img src="../assets/img/demo/banner-1.jpg" alt="" />
          <img src="../assets/img/demo/banner-2.jpg" alt="" />
          <img src="../assets/img/demo/banner-4.jpg" alt="" />
        </div>

        <div class="CarMain-details--configuration" v-if="index === 1">
          <Cell title="厂商" v-for="item in 15">
            <span slot="configuration" class="CarMain-details--content">一汽-大众奥迪</span>
          </Cell>
        </div>
      </div>

      <div class="CarMain-other">
        <div class="CarMain-other--title">
          <h2>猜你喜欢</h2>
        </div>

        <!-- 底部列表 -->
        <Hotlist></Hotlist>
      </div>

      <div class="CarMain-buy">
        <buy-button title="立即购买" :middle="true" :shadow="true" height="2rem" fontSize="0.75rem" color="#fff" backgroundColor="#f26d4f" @click.native="buyDetail"></buy-button>
      </div>
    </div>

    <mt-popup v-model="popupVisible" position="bottom">
      <buy-detail :shutBuy="shutBuy"></buy-detail>
    </mt-popup>

  </div>
</template>

<script>
  import Cell from '../components/Cell'
  import NavBar from '../components/NavBar'
  import Hotlist from '../components/HotList'
  import BuyButton from '../components/Button'
  import BuyDetail from '../components/BuyDetail'

  import { CarMainNav } from '../nav.json'

  export default {
    components: {
      Cell,
      NavBar,
      Hotlist,
      BuyButton,
      BuyDetail
    },

    data () {
      return {
        index: 0,
        CarMainNav: [],
        popupVisible: false
      }
    },

    mounted () {
      window.scrollTo(0, 0)
      this.$parent.$emit('footer-nav', '')
      this.CarMainNav = CarMainNav
    },

    methods: {
      setIndex (index) {
        this.index = index
      },

      buyDetail () {
        this.popupVisible = true
      },

      shutBuy () {
        this.popupVisible = false
      }
    }
  }
</script>

<style lang="css">
  @block CarMain {
    background-color: #f6f6f6;

    .mint-swipe-indicator {
      opacity: 0.8;
    }

    @element swipe {
      height: 9.25rem;

      img {
        width: 18.75rem;
        height: 9.25rem;
      }
    }

    @element main {
      margin-top: 0.5rem;

      @child info {
        padding-left: 0.75rem;
        background-color: #fff;
      }

      @child price {
        margin-left: 1.5rem;
        font-size: 0.65rem;
        color: #999999;
      }
    }

    @element details {
      margin-top: 0.5rem;

      @child pic {
        margin-top: 0.2rem;

        img {
          display: block;
          width: 18.75rem;
          height: 7.6rem;
        }
      }

      @child configuration {
        margin-top: 0.2rem;
        padding: 0.17rem 0.7rem;
        background-color: #fff;

        .cell {
          height: 1.75rem;
          line-height: 1.75rem;
          font-size: 0.7rem;
          border-bottom: 0.05rem solid #ededed;

          &:last-child {
            border-bottom: 0;
          }

          span {
            flex: 1;
          }
        }
      }

      @child content {
        text-indent: 0.72rem;
        border-left: 0.05rem solid #ededed;
      }
    }

    @element other {
      margin-top: 0.5rem;

      @child title {
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        background: #fff url("../assets/img/bg01.png") no-repeat center;
        background-size: 18.75rem 2rem;

        h2 {
          font-size: 0.75rem;
          font-weight: normal;
        }

      }
    }

    @element buy {
      padding-bottom: 0.5rem;
      height: 3rem;
      line-height: 3rem;
      text-align: center;
      background-color: #fff;
    }
  }

  .mint-header {
    height: 2.2rem;
    line-height: 2.2rem;
    font-size: 0.85rem;
    letter-spacing: 1px;
    background-image: linear-gradient( -45deg, rgb(142,209,158) 0%, rgb(57,159,203) 100%);

    i {
      font-size: 0.85rem;
    }
  }
</style>
