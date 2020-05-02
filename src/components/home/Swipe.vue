<template>
  <div>
    <mt-swipe :auto="4000" v-if="swipeList.length">
      <mt-swipe-item v-for="item in swipeList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  components: {
    MtSwipe: Swipe,
    MtSwipeItem: SwipeItem
  },
  props: {
    swipeList: {
      default: () => {
        return []
      }
    }
  }
}
</script>
<style lang="less" scoped>
.mint-swipe {
  width: 100%;
  height: 30.4vw;
  img {
    width: 100%;
  }
}
</style>
