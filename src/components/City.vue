<template>
  <div>
    <header>
      <div class="cubeic-back back" @click="ret"></div>
      城市选择
    </header>
    <city-search :cities="cities"></city-search>
    <city-content :hotCities="hotCities" :cities="cities" :cityLetter="cityLetter"></city-content>
    <city-alphabet @cityLetter="getCityLetter" :cities="cities"></city-alphabet>
  </div>
</template>
<script>
import CitySearch from './city/CitySearch'
import CityContent from './city/CityContent'
import CityAlphabet from './city/CityAlphabet'
export default {
  data () {
    return {
      hotCities: [],
      cities: {},
      cityLetter: ''
    }
  },
  async created () {
    const { data } = await this.axios.get('/json/city.json')
    if (data.ret && data.data) {
      this.hotCities = data.data.hotCities
      this.cities = data.data.cities
    }
  },
  methods: {
    ret () {
      this.$router.go(-1)
    },
    getCityLetter (e) {
      this.cityLetter = e
    }
  },
  components: {
    CitySearch,
    CityContent,
    CityAlphabet
  }
}
</script>
<style lang="less" scoped>
header {
  width: 100%;
  height: 0.86rem;
  background-color: #00b3cb;
  line-height: 0.86rem;
  color: white;
  text-align: center;
  font-size: 0.3rem;
  position: relative;
  z-index: 22;
  .back {
    position: absolute;
    top: 0;
    left: 0.2rem;
  }
}
</style>
