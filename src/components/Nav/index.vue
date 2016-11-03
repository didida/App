<template lang="html">
  <div class="nav">
    <div class="nav-logo">
      <img src="../../assets/img/logo.png" alt="" class="nav-logo--pic"/>
      <input type="button" name="name" value="上海" class="nav-logo--city">
    </div>
    <div class="nav-icon">
      <img src="../../assets/img/menu.png" alt="" />
    </div>
    <div class="nav-icon">
      <img src="../../assets/img/login.png" alt="" />
    </div>
  </div>
</template>

<style media="screen">
  .nav {
    display: flex;
    padding-left: 3rem;
    height: 8.8rem;
    background: url('../../assets/img/nav-bg.jpg') no-repeat center;
    background-size: 100% 100%;

     &-logo {
      width: 54rem;
      align-self: center;

      &--pic {
        width: 7rem;
        height: 7rem;
        vertical-align: middle;
      }

      &--city {
        padding: 0;
        margin-left: 2rem;
        font-size: 3.2rem;
        color: #fff;
        font-weight: 300;
        border: 0;
        background-color: transparent;
        vertical-align: middle;
      }
    }

    &-icon {
      padding-left: 1rem;
      padding-right: 3rem;
      flex-grow: 1;
      align-self: center;

      img {
        width: 5rem;
        height: 5rem;
      }
    }

  }
</style>
