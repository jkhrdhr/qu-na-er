<template>
  <div class="alphabet">
    <ul @touchstart.prevent>
      <li class="item" @click.self="goCitie(name)" @touchstart="handleTouchStart" @touchmove="handleTouchMove"
        @touchend="hanleTouchEnd" :class="{'show':show === name}" v-for="(value,name) in cities" :key="name"
        :ref="name">
        {{name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: '',
      handleTouchFlag: false,
      startY: 0,
      timer: null,
      showTimer: null
    }
  },
  props: {
    cities: Object
  },
  updated () {
    this.getStartY()
  },
  computed: {
    list () {
      return Object.keys(this.cities)
    }
  },
  methods: {
    getStartY () {
      this.startY = this.$refs.A[0].offsetTop
    },
    goCitie (name) {
      this.show = name
      if (this.showTimer) {
        clearTimeout(this.showTimer)
      }
      this.showTimer = setTimeout(() => {
        this.show = ''
      }, 5000)
      this.$emit('cityLetter', name)
    },
    handleTouchStart () {
      this.handleTouchFlag = true
    },
    handleTouchMove (e) {
      if (this.handleTouchFlag) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 73
          const Y = Math.floor((touchY - this.startY) / 22.5)
          if (Y >= 0 && Y <= 21) {
            this.goCitie(this.list[Y])
          }
        }, 6)
      }
    },
    hanleTouchEnd () {
      this.handleTouchFlag = false
    }
  }
}
</script>
<style lang="less" scoped>
.alphabet {
  ul {
    display: flex;
    width: 0.4rem;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 73px;
    right: 0;
    bottom: 0;
    right: 0;
    .item {
      display: inline-block;
      width: 0.4rem;
      height: 0.35rem;
      line-height: 0.35rem;
      text-align: center;
      color: #04b3cc;
      margin: 0.05rem 0;
      border-radius: 0.07rem;
      &.show {
        background-color: #00b3cb;
        color: white;
      }
    }
  }
}
</style>
