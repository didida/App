<template lang="html">
  <div class="app">
    <transition enter-active-class="warp-transition animated fadeIn" leave-active-class="warp-transition animated fadeOut" mode="out-in">
      <router-view class="warp"></router-view>
    </transition>
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
  import 'animate.css'
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

    created () {
      this.$on('footer-nav', (msg) => {
        this.selected = msg
      })
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
    height: 100%;
    color: #333;
    font: 400 1em/1.5 PingFang SC,Lantinghei SC,Helvetica Neue,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans;
  }

  .warp {
    width: 100%;
  }

  .my-swipe {
    height: 10rem;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  div, a, li, input, img {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
 }

 a:hover {
   text-decoration: none !important;
 }

 .app {
   padding-bottom: 2.2rem;

   .mint-tabbar {

     .mint-tab-item  {
       padding: 0.13rem 0;
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
         margin-bottom: 0.25rem;
         font-size: 1.13rem;
       }

       a {
        color: #000;
        text-decoration: none;
       }
     }
   }

 }


 .warp-transition {
   -webkit-animation-duration: .3s !important;
   animation-duration: .3s !important;
   -webkit-animation-fill-mode: both;
   animation-fill-mode: both;
 }
</style>
