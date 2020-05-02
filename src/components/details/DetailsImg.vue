<template>
  <div>
    <div class="banner" @click="showImg">
      <img :src="imgs.bannerImg" alt="">
      <div class="banner-title">
        <div class="title-left">{{imgs.sightName}}</div>
        <div class="banner-num">
          <i class="cubeic-picture"></i>
          {{length}}
        </div>
      </div>
    </div>
    <transition name="shuff">
      <Shuffling :swrip="imgs.gallaryImgs" v-if="show" @hiddenImg="hiddenImg"></Shuffling>
    </transition>
  </div>
</template>
<script>
import Shuffling from '../Shuffling'
export default {
  data () {
    return {
      show: false
    }
  },
  computed: {
    length () {
      if (this.imgs.gallaryImgs) {
        return this.imgs.gallaryImgs.length
      } else {
        return 0
      }
    }
  },
  props: {
    imgs: Object
  },
  methods: {
    showImg () {
      this.show = true
    },
    hiddenImg () {
      this.show = false
    }
  },
  components: {
    Shuffling
  }
}
</script>
<style lang="less" scoped>
.banner {
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;
  img {
    width: 100%;
  }
  .banner-title {
    display: flex;
    width: 100%;
    height: 0.5rem;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 0;
    color: white;
    .title-left {
      margin-left: 0.2rem;
      margin-bottom: 0.16rem;
    }
    .banner-num {
      margin-right: 0.2rem;
      margin-bottom: 0.16rem;
      padding: 0.04rem 0.22rem;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 0.3rem;
    }
  }
}
.shuff-enter,
.shuff-leave-to {
  opacity: 0;
}
.shuff-enter-active,
.shuff-leave-active {
  transition: all 0.4s;
}
</style>
