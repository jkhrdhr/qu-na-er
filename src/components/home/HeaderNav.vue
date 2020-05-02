<template>
  <div class="nav">
    <div class="nav-item" v-for="item in list" :key="item.id">
      <img :src="item.imgUrl" alt="">
      <p>{{item.desc}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: []
    }
  },
  props: ['iconList'],
  watch: {
    iconList: function () {
      this.list = this.iconList.slice(0, 8)
    }
  }
}
</script>
<style lang="less" scoped>
.nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  .nav-item {
    height: 1.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 0.7rem;
      height: 0.7rem;
      object-fit: contain;
    }
    p {
      font-weight: 600;
      font-size: 0.25rem;
      margin-top: 0.1rem;
    }
  }
}
</style>
