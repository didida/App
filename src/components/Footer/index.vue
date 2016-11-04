<template lang="html">
  <div class="footer">
    <ul class="footer-nav">
      <router-link to="demo" tag="li">登陆</router-link>
      <router-link to="demo" tag="li">注册</router-link>
      <router-link to="demo" tag="li">帮助</router-link>
      <router-link to="demo" tag="li">反馈</router-link>
    </ul>
    <div class="footer-copyright">
      <p>
        咨询电话：400-011-7292
      </p>
      <p>
        沪ICP备16004976号-1 © 2016 易买车 echebay.com 版权所有
      </p>
      <p>
        上海一玺信息科技有限公司
      </p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  @block footer {
    padding: 1.5rem 2.25rem 1rem;

    @element nav {
      margin: 0 auto;
      display: flex;
      width: 13.5rem;

      li {
        flex: 1;
        position: relative;
        padding-bottom: 0.5rem;
        line-height: 1;
        font-size: 0.7rem;
        text-align: center;
        border-bottom: 1px solid #ededed;

        &:last-child::after {
          display: none;
        }

        &:after {
          content: "";
          display: block;
          position: absolute;
          top: 0.13rem;
          right: 0;
          width: 0.05rem;
          height: 0.5rem;
          background-color: #ededed;
        }

      }
    }

    @element copyright {
      padding-top: 0.75rem;

      p {
        font-size: 0.5rem;
        line-height: 1.5;
        color: #999999;
        text-align: center;
      }
    }
  }
</style>
