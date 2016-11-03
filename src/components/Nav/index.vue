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
    padding-left: 0.75rem;
    height: 2.2rem;
    background: url('../../assets/img/nav-bg.jpg') no-repeat center;
    background-size: 100% 100%;

     &-logo {
      width: 13.5rem;
      align-self: center;

      &--pic {
        width: 1.75rem;
        height: 1.75rem;
        vertical-align: middle;
      }

      &--city {
        padding: 0;
        margin-left: 0.5rem;
        font-size: 0.8rem;
        color: #fff;
        font-weight: 300;
        border: 0;
        background-color: transparent;
        vertical-align: middle;
      }
    }

    &-icon {
      padding-left: 0.25rem;
      padding-right: 0.75rem;
      flex-grow: 1;
      align-self: center;

      img {
        width: 1.25rem;
        height: 1.25rem;
      }
    }

  }
</style>
