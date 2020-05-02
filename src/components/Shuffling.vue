<template>
  <div class="shuffling" @click="$emit('hiddenImg')">
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="(item,index) in swrip" :key="index">
        <img class="sfg-img" :src="item" alt="">
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
    swrip: Array
  }
}
</script>
<style lang="less" scoped>
.shuffling {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 23;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .mint-swipe {
    height: 7.5rem;
  }
  .sfg-img {
    width: 100%;
    object-fit: contain;
  }
}
</style>
