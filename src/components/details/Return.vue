<template>
  <div>
    <div class="return-abs" @click="goBack" v-if="show">
      <i class="cubeic-back"></i>
    </div>
    <transition name="banner">
      <div class="return-banner" @click="goBack" v-if="!show">
        <div class="cubeic-back back"></div>
        城市选择
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: true
    }
  },
  methods: {
    showBanner () {
      const Y = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (Y > 40) {
        this.show = false
      } else {
        this.show = true
      }
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  activated () {
    window.addEventListener('scroll', this.showBanner)
  },
  deactivated () {
    window.removeEventListener('scroll', this.showBanner)
  }
}
</script>
<style lang="less" scoped>
.return-abs {
  width: 0.7rem;
  height: 0.6rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.3rem;
  position: absolute;
  top: 0.1rem;
  left: 0.2rem;
  color: white;
  font-size: 0.34rem;
  text-align: center;
  line-height: 0.6rem;
}
.return-banner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.86rem;
  background-color: #00b3cb;
  line-height: 0.86rem;
  color: white;
  text-align: center;
  font-size: 0.3rem;
  z-index: 22;
  .back {
    position: absolute;
    top: 0;
    left: 0.2rem;
  }
}
.banner-enter,
.banner-leave-to {
  opacity: 0;
}
.banner-enter-active,
.banner-leave-active {
  transition: all 0.6s ease;
}
</style>
