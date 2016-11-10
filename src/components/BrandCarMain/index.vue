<template lang="html">
  <li class="BrandCar-main--content">
    <img src="../../assets/img/02.jpg" alt="" class="BrandCar-main--pic"/>
    <div class="BrandCar-main--text">
      <h2 class="BrandCar-main--title">
        奥迪A3 2015款 Sportback 35 TFSI 百万纪念智领型
      </h2>
      <p class="BrandCar-main--num">
        ￥21.79万元<slot></slot>
      </p>
      <p class="BrandCar-main--info">
        <span class="l">市场价：22.79万元</span>
        <span class="r">有现车</span>
      </p>
    </div>
  </li>
</template>

<script>
</script>

<style lang="css">
  @block BrandCar-main {

    @child content {
      display: flex;
      margin-bottom: 0.5rem;
      padding: 0.38rem 0.75rem;
      height: 4rem;
      background-color: #fff;

      &:last-child {
        margin-bottom: 0;
      }
    }

    @child pic {
      min-width: 5rem;
      display: block;
      width: 5rem;
      height: 4rem;
    }

    @child text {
      margin-left: 0.5rem;
    }

    @child title {
      line-height: 1.2;
      font-size: 0.65rem;
      font-weight: normal;
    }

    @child num {
      margin-top: 0.63rem;
      line-height: 1;
      font-size: 0.65rem;
      font-weight: bold;
    }

    @child info {
      margin-top: 0.63rem;
      line-height: 1;
      font-size: 0.55rem;
      color: #777777;
    }
  }

  @block mint-loadmore-bottom {
    span {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;

      @when rotate {
        transform: rotate(180deg);
      }
    }
  }
</style>
