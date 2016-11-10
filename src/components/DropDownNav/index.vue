<template lang="html">
  <li class="DropDownNav">
    <h2 class="DropDownNav-title" :class="{ 'is-active': title === active }">
      {{title}}<i class="icon iconfont" :class="{ 'icon-fold': title !== active, 'icon-unfold': title === active }"></i>
    </li>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      },
      active: {
        type: String
      },
      index: {
        type: Number
      }
    }
  }
</script>

<style lang="css">
  @block DropDownNav {
    flex: 1;
    height: 1.75rem;
    line-height: 1.75rem;
    text-align: center;
    border: 1px solid #f6f6f6;

    @element title {
      font-size: 0.7rem;
      font-weight: normal;

      i {
        margin-left: 0.38rem;
        font-size: 0.7rem;
      }

      @when active {
        color: #f26d4f;
      }
    }
  }
</style>
