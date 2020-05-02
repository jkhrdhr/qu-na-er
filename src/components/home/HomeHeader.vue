<template>
  <div class="header">
    <div class="header-left">
      <i class="cubeic-back"></i>
    </div>
    <div class="header-seach">
      <i class="cubeic-search"></i>
      <input type="text" placeholder="输入城市/景点/游玩主题">
    </div>
    <div class="header-address" @click="goCity">
      <span>{{city}}</span>
      <i class="cubeic-pulldown"></i>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  methods: {
    goCity () {
      this.$router.push({
        name: 'city'
      })
    }
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang="less" scoped>
.header {
  height: 0.86rem;
  background-color: #00b3cb;
  display: flex;
  .header-left {
    width: 0.64rem;
    text-align: center;
    height: 100%;
    i {
      font-size: 20px;
      color: white;
      line-height: 0.86rem;
    }
  }
  .header-seach {
    flex: 1;
    background-color: white;
    margin-top: 0.14rem;
    margin-bottom: 0.16rem;
    border-radius: 0.12rem;
    i {
      display: inline-block;
      height: 0.56rem;
      line-height: 0.56rem;
      font-size: 0.36rem;
      margin-left: 0.3rem;
    }
    input {
      height: 100%;
      vertical-align: bottom;
    }
  }
  .header-address {
    width: 1.34rem;
    height: 0.86rem;
    display: flex;
    justify-content: center;
    color: white;
    align-items: center;
    i {
      font-size: 0.6rem;
    }
  }
}
</style>
