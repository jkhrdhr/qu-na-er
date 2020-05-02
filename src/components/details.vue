<template>
  <div>
    <details-img :imgs="detailsData"></details-img>
    <de-return></de-return>
    <details-list :list="detailsData.categoryList"></details-list>
    <ul>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
      <li>*</li>
    </ul>
  </div>
</template>
<script>
import DetailsImg from './details/DetailsImg'
import DeReturn from './details/Return'
import DetailsList from './details/List'
export default {
  components: {
    DetailsImg,
    DeReturn,
    DetailsList
  },
  data () {
    return {
      detailsData: {},
      lastID: 0
    }
  },
  props: {
    id: String
  },
  activated () {
    if (this.lastID !== this.id) {
      this.getDetailsData()
      this.lastID = this.id
    }
  },
  methods: {
    async  getDetailsData () {
      const { data } = await this.axios.get('/json/detail.json')
      if (data.ret) {
        this.detailsData = data.data
      }
    }
  },
  created () {
    this.getDetailsData()
    this.lastID = this.id
  }
}
</script>
<style lang="less" scoped>
</style>
