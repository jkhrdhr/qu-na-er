<template>
  <div id="list" ref="wrapper">
    <div>
      <div class="city-current">
        <div class="city-current-title">当前位置</div>
        <div class="city-current-content">
          <div class="city-name">{{city}}</div>
        </div>
      </div>
      <div class="city-hot">
        <div class="city-hot-title">热门城市</div>
        <div class="city-hot-content">
          <div class="city-name" v-for="item in hotCities" :key="item.id" @click="chooseCity(item.name)">
            {{item.name}}</div>
        </div>
      </div>
      <div class="city-calss" v-for="(value,name) in cities" :key="name" :ref="name">
        <div class="item">
          <div class="item-title">{{name}}</div>
          <div class="item-content" @click="chooseCity(item.name)" v-for="item in value" :key="item.id">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapMutations, mapState } from 'vuex'
export default {
  props: {
    hotCities: Array,
    cities: Object,
    cityLetter: String
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    ...mapMutations(['addCity']),
    chooseCity (name) {
      this.addCity(name)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    cityLetter () {
      const element = this.$refs[this.cityLetter][0]
      this.scroll.scrollToElement(element)
    }
  }
}
</script>
<style lang="less" scoped>
#list {
  position: absolute;
  top: 1.54rem;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  .city-current,
  .city-hot,
  .city-calss {
    width: 100%;
    .city-current-title,
    .city-hot-title,
    .item-title {
      width: 100%;
      height: 0.6rem;
      background-color: #f4f4f3;
      padding-left: 0.2rem;
      line-height: 0.6rem;
      color: black;
      font-weight: 600;
    }
    .city-current-content,
    .city-hot-content {
      padding: 0 0 0.2rem 0.2rem;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #e4e4e3;
      overflow: hidden;
      .city-name {
        float: left;
        width: 2.1rem;
        height: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.06rem;
        text-align: center;
        color: black;
        font-weight: 600;
        line-height: 0.5rem;
        margin: 0.2rem 0.2rem 0 0;
        &.show {
          border: 1px solid red;
        }
      }
    }
  }
  .city-calss {
    .item-content {
      width: 100%;
      height: 0.6rem;
      line-height: 0.6rem;
      padding-left: 0.2rem;
      border-bottom: 1px solid #ccc;
      font-weight: 600;
    }
  }
}
</style>
