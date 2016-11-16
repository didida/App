<template lang="html">
  <div class="landing">
    <div class="landing-banner">
      <div class="landing-banner--box">
        <img src="../assets/img/logo02.png" class="landing-banner--pic"/>
        <h2 class="landing-banner--title">
          Momo<br />
          www.momo.com
        </h2>
      </div>
    </div>
    <div class="landing-form">
      <landing-input placeholder="输入手机号">
        <img src="../assets/img/04.png" alt="" slot="pic" class="landing-form--pic"/>
      </landing-input>
      <landing-input placeholder="输入密码" type="password">
        <img src="../assets/img/05.png" alt="" slot="pic" class="landing-form--pic"/>
      </landing-input>
      <div class="landing-form--remind">
        <router-link to="/registered" class="landing-form--registered">
          注册账号
        </router-link>
        <router-link to="/retrieve">
          忘记密码?
        </router-link>
      </div>
      <div class="landing-form--btn">
        <landing-button title="登陆" color="#fff" width="15rem" fontSize="0.75rem" height="2rem" disabled></landing-button>
      </div>
    </div>
  </div>
</template>

<script>
  import LandingInput from '../components/Input'
  import LandingButton from '../components/Button'

  export default {
    components: {
      LandingInput,
      LandingButton
    },

    mounted () {
      window.scrollTo(0, 0)
      this.$parent.$emit('footer-nav', '')
    }
  }
</script>

<style lang="css">
  @block landing {

    @element banner {
      position: relative;
      width: 100%;
      height: 11.8rem;
      background-image: linear-gradient( -45deg, rgb(142,209,158) 0%, rgb(57,159,203) 100%);

      @child box {
        position: absolute;
        top: 1.8rem;
        right: 0;
        left: 0;
        margin: auto;
        width: 6.25rem;
        text-align: center;
      }

      @child pic {
        width: 6rem;
        height: 6rem;
      }

      @child title {
        margin-top: 0.5rem;
        font-size: 0.65rem;
        color: #fff;
        font-weight: normal;
        line-height: 1.2;
      }
    }

    @element form {

      @child pic {
        width: 0.9rem;
        height: 0.9rem;
      }

      @child remind {
        display: flex;
        padding: 0.75rem 2.5rem 1.25rem;

        a {
          font-size: .6rem;
          color: #777777;

          &:first-child {
            flex: 1;
          }
        }
      }

      @child btn {
        width: 100%;
        height: 2rem;
        text-align: center;
      }
    }
  }
</style>
