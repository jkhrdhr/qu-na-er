<template>
  <div>
    <div class="weekend">
      <div class="weekendTitle">周末去哪儿玩</div>
      <div v-for="item in weekendList" :key="item.id">
        <div class="weekend-img">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="weekend-text">
          <h3>{{item.title}}</h3>
          <p>{{item.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    weekendList: Array
  }
}
</script>
<style lang="less" scoped>
.weekend {
  .weekendTitle {
    width: 100%;
    height: 0.7rem;
    background-color: #ebebea;
    font-size: 0.28rem;
    color: #333;
    line-height: 0.7rem;
    padding-left: 0.4rem;
    box-sizing: border-box;
  }
  .weekend-img {
    width: 100%;
    height: 2.9rem;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .weekend-text {
    width: 100%;
    height: 1rem;
    padding-left: 0.2rem;
    h3 {
      margin-top: 0.1rem;
      font-size: 0.34rem;
      font-weight: 700;
    }
    p {
      margin-top: 0.15rem;
      font-size: 0.3rem;
    }
  }
}
</style>
