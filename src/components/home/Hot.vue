<template>
  <div>
    <div class="hot">
      <div class="hot-title">
        热门推销
      </div>
      <div class="hot-content">
        <div class="content-item" v-for="item in recommendList" :key="item.id" @click="goDetails(item.id)">
          <div class="item-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="introduce">
            <h3>{{item.title}}</h3>
            <p>{{item.desc}}</p>
            <p><span>￥65</span>起</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommendList: Array
  },
  methods: {
    goDetails (id) {
      this.$router.push({
        name: 'details',
        params: {
          id
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.hot {
  .hot-title {
    width: 100%;
    height: 0.7rem;
    background-color: #ebebea;
    line-height: 0.7rem;
    padding-left: 0.3rem;
    overflow: hidden;
  }
  .content-item {
    width: 100%;
    height: 1.7rem;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    .item-img {
      width: 1.6rem;
      height: 1.4rem;
      margin: 0 0.15rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .introduce {
    height: 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      font-size: 0.32rem;
      font-weight: 700;
    }
    p {
      font-size: 0.28rem;
      overflow: hidden;
      span {
        color: red;
        font-size: 0.38rem;
      }
    }
  }
}
</style>
