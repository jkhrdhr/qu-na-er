<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route: function (to, from) {
      // to是到哪里去
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'right'
      } else if (to.meta.index < from.meta.index) {
        this.transitionName = 'left'
      }
    }
  }
}
</script>
<style leng="less" scoped>
.left-enter,
.left-leave-to,
.right-enter,
.right-leave-to {
  opacity: 0;
}
.right-enter {
  transform: translateX(100%);
  -webkit-transform: translateX(100%);
}
.right-enter-active {
  transition: all 0.3s;
}
.left-enter {
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
}
.left-enter-active {
  transition: all 0.3s;
}
</style>
