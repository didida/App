<template lang="html">
  <div class="">
    <mt-header title="找回密码">
      <router-link :to="{ name: 'landing'}" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <retrieve-input placeholder="输入手机号">
      <img src="../assets/img/04.png" alt="" slot="pic" class="landing-form--pic"/>
    </retrieve-input>
    <retrieve-input placeholder="输入验证码" type="password">
      <img src="../assets/img/06.png" alt="" slot="pic" class="landing-form--pic"/>
      <p slot="code" class="registered-code">获取验证码</p>
    </retrieve-input>
    <retrieve-input placeholder="输入新密码" type="password">
      <img src="../assets/img/05.png" alt="" slot="pic" class="landing-form--pic"/>
    </retrieve-input>
    <div class="registered-btn">
      <retrieve-button title="注册" color="#fff" width="15rem" fontSize="0.75rem" height="2rem" disabled></retrieve-button>
    </div>
  </div>
</template>

<script>
  import RetrieveInput from '../components/Input'
  import RetrieveButton from '../components/Button'

  export default {
    components: {
      RetrieveInput,
      RetrieveButton
    }
  }
</script>

<style lang="css">
</style>
