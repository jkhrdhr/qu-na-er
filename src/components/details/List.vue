<template>
  <div class="list">
    <div v-for="(item,index) in list" :key="index">
      <div class="list-item">
        <i class="list-item-ico"></i>
        {{item.title}}
      </div>
      <div v-if="item.children">
        <details-list class="list-child" :list="item.children"></details-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'details-list',
  props: {
    list: Array
  }
}
</script>
<style lang="less" scoped>
.list {
  .list-item {
    width: 100%;
    height: 0.6rem;
    border-bottom: 1px solid #ccc;
    background-color: white;
    .list-item-ico {
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.45rem
        no-repeat;
      background-size: cover;
      position: relative;
      top: 0.12rem;
      left: 0.2rem;
      margin-right: 0.15rem;
    }
  }
  .list-child {
    padding-left: 0.4rem;
  }
}
</style>
