<template lang="html">
  <div class="BuyDetail">
    <i class="BuyDetail--shut" @click="shutBuy"></i>
    <div class="BuyDetail-content">
      <h2 class="BuyDetail-content--title">车辆颜色</h2>
      <p class="BuyDetail-content--text">
        订车后，联系客服确认颜色
      </p>
    </div>
    <div class="BuyDetail-content">
      <h2 class="BuyDetail-content--title">购车方案</h2>
      <div class="BuyDetail-content--radio">
        <p :class="{ 'is-active': active }" @click="radioActive">
          全款购车
        </p>
        <p :class="{ 'is-active': !active }" @click="radioActive">
          贷款购车
        </p>
      </div>
    </div>
    <div class="BuyDetail-number">
      <p class="BuyDetail-number--title">
        购买数量
      </p>
      <div class="BuyDetail-number--digital">
        <p class="count" @click="lessNum">
          -
        </p>
        <p class="number">
          {{num}}
        </p>
        <p class="count" @click="AddNum">
          +
        </p>
      </div>
    </div>
    <div class="BuyDetail-btn">
      <confirm-button title="确定" :big="true" height="2rem" fontSize="0.75rem" color="#fff" backgroundColor="#f26d4f"></confirm-button>
    </div>
  </div>
</template>

<script>
  import ConfirmButton from '../Button'

  export default {
    props: {
      shutBuy: {
        type: Function
      }
    },

    components: {
      ConfirmButton
    },

    data () {
      return {
        active: true,
        num: 1
      }
    },

    methods: {
      radioActive () {
        if (this.active) {
          this.active = false
        } else {
          this.active = true
        }
      },

      lessNum () {
        if (this.num === 1) {
          return
        } else {
          this.num --
        }
      },

      AddNum () {
        if (this.num === 100) {
          return
        } else {
          this.num ++
        }
      }
    }
  }
</script>

<style lang="css">
  @block BuyDetail {
    position: relative;
    padding-top: 2.35rem;
    width: 18.75rem;
    height: 18rem;
    background-color: #fff;

    @child shut {
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
      width: 0.53rem;
      height: 0.53rem;
      background: url('../../assets/img/x.png') no-repeat center;
    }

    @element content {
      margin-left: 0.7rem;
      margin-right: 0.7rem;
      margin-bottom: 1rem;
      padding-bottom: 1.1rem;
      border-bottom: 0.05rem solid #ededed;

      @child title {
        margin-bottom: 0.75rem;
        font-size: 0.75rem;
        font-weight: normal;
      }

      @child text {
        width: 11rem;
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: 0.65rem;
        color: #999;
        text-align: center;
        border: 1px solid #999;
      }

      @child radio {
        display: flex;

        p {
          margin-right: 0.5rem;
          width: 5.15rem;
          height: 1.4rem;
          line-height: 1.4rem;
          font-size: 0.65rem;
          color: #999999;
          text-align: center;
          border: 0.05rem solid #999999;

          @when active {
            width: 5.25rem;
            height: 1.5rem;
            background-color: #333;
            color: #fff;
            border: 0;
          }
        }
      }
    }

    @element number {
      display: flex;
      margin-left: 0.7rem;
      margin-right: 0.7rem;

      @child title {
        flex: 1;
        line-height: 1.45rem;
        font-size: 0.75rem;
      }

      @child digital {
        display: flex;

        .count {
          margin: 0 0.35rem;
          width: 1.32rem;
          height: 1.45rem;
          line-height: 1.45rem;
          font-size: 0.75rem;
          color: #999999;
          text-align: center;
          background-color: #f6f6f6;
        }

        .number {
          width: 1.75rem;
          height: 1.45rem;
          line-height: 1.45rem;
          font-size: 0.75rem;
          text-align: center;
          background-color: #f6f6f6;
        }
      }
    }

    @element btn {
      margin-top: 2rem;
      text-align: center;
    }
  }
</style>
