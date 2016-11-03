<template lang="html">
  <div class="app">
    <router-view class="warp"></router-view>
      <Tabbar fixed v-model="selected">
        <tab-item :id="item.link" v-for="item in list">
          <i class="icon iconfont" :class="item.class"></i>
          {{item.name}}
        </tab-item>
      </Tabbar>
  </div>
</template>

<script>
  import 'normalize.css'
  import './assets/font/font.css'
  import './assets/font/iconfont.css'
  import './css/index.css'
  import { footerNav } from './nav.json'
  import { Tabbar, TabItem } from 'mint-ui'

  export default {
    components: {
      Tabbar,
      TabItem
    },

    data () {
      return {
        selected: 'index',
        list: []
      }
    },

    mounted () {
      this.list = footerNav
    },

    watch: {
      selected (val) {
        this.$router.push({ name: `${val}` })
      }
    }
  }
</script>

<style media="screen">
  html, body {
    color: #333;
    font: 400 1em/1.5 PingFang SC,Lantinghei SC,Helvetica Neue,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans;
  }

  .warp {
    width: 100%;
  }

  .my-swipe {
    height: 40rem;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a, li, input, img {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
 }

 a:hover {
   text-decoration: none !important;
 }

 .app {
   padding-bottom: 11.6rem;

   .mint-tabbar {

     .mint-tab-item  {
       padding: 0.5rem 0;
       background-color: #fff;

       &.is-selected {
         background-color: #fff;
         color: #f26d4f;

         a {
           color: #f26d4f;
         }
       }

       i {
         display: block;
         margin-bottom: 1rem;
         font-size: 4.5rem;
       }

       a {
        color: #000;
        text-decoration: none;
       }
     }
   }

 }
</style>
