<template>
  <div>
    <div class="search">
      <input type="text" v-model="inputVal" placeholder="输入城市名或拼音">
    </div>
    <div class="list-content" ref="wrapper" v-show="inputVal">
      <ul>
        <li v-for="item in valList" :key="item.id">{{item.name}}</li>
        <li v-show="!valList.length">没有找到城市</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      inputVal: '',
      valList: [],
      timer: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  props: {
    cities: Object
  },
  watch: {
    inputVal () {
      this.valList = []
      if (!this.inputVal) {
        return
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        for (const k in this.cities) {
          this.cities[k].forEach(value => {
            if (value.spell.indexOf(this.inputVal) > -1 || value.name.indexOf(this.inputVal) > -1) {
              this.valList.push(value)
            }
          })
        }
      }, 100)
    }
  }
}
</script>
<style lang="less" scoped>
.search {
  width: 100%;
  height: 0.7rem;
  background-color: #00b3cb;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 22;
  position: relative;
  input {
    width: 7.2rem;
    height: 0.6rem;
    border-radius: 0.08rem;
    text-align: center;
  }
}
.list-content {
  position: absolute;
  left: 0;
  top: 1.56rem;
  right: 0;
  bottom: 0;
  background-color: #ebebea;
  z-index: 21;
  ul {
    li {
      width: 100%;
      height: 0.6rem;
      background-color: white;
      border-bottom: 1px solid #ccc;
      font-size: 0.3rem;
      line-height: 0.6rem;
      padding-left: 20px;
    }
  }
}
</style>
