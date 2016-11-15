<template lang="html">
  <div class="registered">
    <!-- 头顶导航条 -->
    <mt-header title="欢迎注册">
      <router-link :to="{ name: 'landing'}" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <registered-input placeholder="输入手机号">
      <img src="../assets/img/04.png" alt="" slot="pic" class="landing-form--pic"/>
    </registered-input>
    <registered-input placeholder="输入密码" type="password">
      <img src="../assets/img/05.png" alt="" slot="pic" class="landing-form--pic"/>
    </registered-input>
    <registered-input placeholder="输入验证码" type="password">
      <img src="../assets/img/06.png" alt="" slot="pic" class="landing-form--pic"/>
      <p slot="code" class="registered-code">获取验证码</p>
    </registered-input>
    <div class="registered-btn">
      <registered-button title="注册" color="#fff" width="15rem" fontSize="0.75rem" height="2rem" disabled></registered-button>
    </div>
    <p class="registered-remind">
      点击注册即表示已阅读<span class="registered-remind--agreement" @click="popupVisibleShow">《Momo购车协议》</span>
    </p>

    <mt-popup
    v-model="popupVisible"
    position="bottom">
      <div class="registered-agreement">
        <h3>
          服务协议
        </h3>
        <p>
          在您开始买车之前，需仔细阅读本服务协议。作者momo根据本协议或对其的修改向您提供服务。如果您使用Momo平台买车、订车，或以任何行为实际使用、享受Momo的服务，即表示您接受了本协议，并同意受本协议各项条款的约束。在您点击“我已阅读协议并同意”按钮之后，即为签署本协议。
        </p>
        <p>
          一、Momo账户
        </p>
        <p>
          1、用户保证向Momo提供的任何资料、注册信息的真实性、正确性及完整性，包括但不限于邮箱、联系电话等。用户保证Momo可以通过上述联系方式	     与用户进行有效联系；当上述资料发生变更时，及时更新用户资料，符合及时、详尽、准确的要求。否则，造成的一切后果由用户自行承担。
        </p>
        <p>
          2、在成功注册后，Momo会为每位用户开通一个账户作为其使用Momo服务的唯一身份标识，用户需自行妥善保管该账户的用户名和密码，该账户下所有操作均视为用户本人行为，因用户保管不善导致账号密码遗失泄露的，造成用户损失的，Momo不承担任何责任。

        </p>
        <p>
          3、用户转让或授权他人使用自己的Momo账户造成用户损失的，Momo不承担任何责任。

        </p>
        <p>
          4、每位用户至多只能拥有一个Momo账户。如有证据证明或Momo有理由相信用户存在注册多个Momo账户的情形，Momo有权不经过用户允许，采取取消订单、冻结或关闭账户、拒绝提供服务等措施，给Momo及相关方造成损失的，用户应承担赔偿责任。

        </p>
        <p>
          5、Momo用户必须是具有完全民事行为能力的自然人，或者是具有合法经营资格的实体组织。无民事行为能力、限制民事行为能力人以及无经营或特定经营资格的组织不得注册为Momo用户或超过其民事权利或行为能力范围在Momo进行交易，如否，Momo有权不经过用户允许，采取取消订单、冻结或关闭账户、拒绝提供服务等措施，给Momo及相关方造成损失的，用户应承担赔偿责任。

        </p>
      </div>
    </mt-popup>
  </div>
</template>

<script>
  import RegisteredInput from '../components/Input'
  import RegisteredButton from '../components/Button'

  export default {
    components: {
      RegisteredInput,
      RegisteredButton
    },

    data () {
      return {
        popupVisible: false
      }
    },

    methods: {
      popupVisibleShow () {
        this.popupVisible = true
      }
    },

    mounted () {
      window.scrollTo(0, 0)
      this.$parent.$emit('footer-nav', '')
    }
  }
</script>

<style lang="css">
  @namespace registered {

    @block code {
      margin-top: 0.5rem;
      margin-right: 1.93rem;
      height: 1.5rem;
      line-height: 1.5rem;
      font-size: 0.7rem;
      color: #f26d4f;
      text-indent: 0.5rem;
      border-left: 1px solid #ededed;
    }

    @block btn {
      margin-top: 1.25rem;
      text-align: center;
    }

    @block remind {
      margin-top: 0.5rem;
      text-align: center;
      font-size: 0.6rem;
      color: #777777;

      @child agreement {
        color: #55b0bc;
      }
    }

    @block agreement {
      padding-top: 2rem;
      width: 18.75rem;
      height: 15.5rem;
      overflow: scroll;

      h3 {
        position: fixed;
        top: 0;
        margin-bottom: 0.5rem;
        width: 100%;
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: 0.75rem;
        text-align: center;
        background-color: #f3f3f3;
      }

      p {
        padding: 0 0.75rem;
        font-size: 0.7rem;
        text-indent: 0.9rem;
      }
    }
  }
</style>
