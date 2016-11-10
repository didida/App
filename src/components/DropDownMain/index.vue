<template lang="html">
  <transition enter-active-class="DropDown-transition animated fadeIn" leave-active-class="DropDown-transition animated fadeOut" mode="out-in">
    <div class="DropDownMain" v-if="showMain === index">
      <div class="DropDownMain-list">
        <slot></slot>
      </div>
      <div class="DropDownMain-bg" @click="hideMain" @touchmove="hideMain">
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      showMain: {
        default: null
      },

      index: {
        default: ''
      },

      hideMain: {
        type: Function
      }
    },

    data () {
      return {
        screenHeight: ''
      }
    },

    watch: {
      showMain (val) {
        if (val !== null) {
          document.documentElement.style.overflow = 'hidden'
          document.body.style.overflow = 'hidden'
        } else {
          document.documentElement.style.overflow = 'auto'
          document.body.style.overflow = 'auto'
        }
      }
    }
  }
</script>

<style lang="css">

  @block DropDownMain {
    position: absolute;;
    top: 1.7rem;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 500;

    @element list {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      background-color: #f6f6f6;
    }

    @element bg {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .DropDown-transition {
    -webkit-animation-duration: .5s !important;
    animation-duration: .5s !important;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
</style>
