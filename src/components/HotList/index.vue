<template lang="html">
  <div class="Hotlist">
    <title-bar :title="title" :link="link"></title-bar>
    <div class="Hotlist-main">
      <router-link to="demo" v-for="item in 6" class="Hotlist-main--list">
        <card icon="../../assets/img/01.jpg">
          <h2 slot="title" class="Hotlist-main--title">
            奥迪A4L 2016款 30 TFSI 手动舒适型
          </h2>
          <div class="Hotlist-main--num" slot="num">
            <span class="price">23万元</span>
            <span class="inventory">有现车</span>
          </div>
        </card>
      </router-link>
    </div>
    <router-link to="demo" tag="div" class="Hotlist-more">
      查看更多
    </router-link>
  </div>
</template>

<script>
  import TitleBar from '../TitleBar'
  import Card from '../Card'

  export default {
    components: {
      TitleBar,
      Card
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
    padding-top: 0.5rem;
    background-color: #f6f6f6;

    @element main {
      display: flex;
      background-color: #f6f6f6;
      flex-wrap: wrap;

      @child list {
        margin-left: 0.5rem;
        margin-top: 0.5rem;
        width: 8.63rem;
        height: 10.28rem;
      }

      @child title {
        padding: 0.5rem 0.57rem 0.88rem;
        line-height: 1.2;
        color: #343434;
        font-size: 0.65rem;
        font-weight: normal;
      }

      @child num {
        display: flex;
        padding-left: 0.5rem;
        padding-right: 0.5rem;

        .price {
          flex: 1;
          color: #FF7744;
          font-size: 0.65rem;
        }

        .inventory {
          font-size: 0.55rem;
          color: #999999;
        }
      }
    }

    @element more {
      padding-top: 1rem;
      padding-bottom: 1rem;
      font-size: 0.65rem;
      color: #999999;
      text-align: center;
    }
  }
</style>
