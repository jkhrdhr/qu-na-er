<template>
  <div>
    <home-header></home-header>
    <swipe :swipeList="homeData.swiperList"></swipe>
    <header-nav :iconList="homeData.iconList"></header-nav>
    <hot :recommendList="homeData.recommendList"></hot>
    <weekend :weekendList="homeData.weekendList"></weekend>
  </div>
</template>
<script>
import HomeHeader from './home/HomeHeader'
import Swipe from './home/Swipe'
import HeaderNav from './home/HeaderNav'
import Hot from './home/Hot'
import Weekend from './home/weekend'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      homeData: {},
      lastCity: ''
    }
  },
  components: {
    HomeHeader,
    Swipe,
    HeaderNav,
    Hot,
    Weekend
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    async getHomeData () {
      const { data } = await this.axios.get('/json/index.json')
      this.homeData = data.data
    }
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.getHomeData()
      this.lastCity = this.city
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeData()
  }
}
</script>
<style lang="less" scoped>
.a {
  width: 500px;
  height: 500px;
  background-color: wheat;
  .b {
    width: 300px;
    height: 100px;
    background-color: pink;
  }
}
</style>
