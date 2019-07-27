<template>
  <div>
    <div class="header">
      <div class="ac-back" @click="back">
        <img src="http://wmall.wochu.cn/h5/img/ac-back.png" />
      </div>
      <div class="ac-cart">
        <img src="https://wmall.wochu.cn/h5/activityTemplate/img/ac-cart.png" />
      </div>
    </div>
    <div v-for="(item,index) in list" :key=index>
      <img :src="item.imageUrl" />
    </div>
    <div class="gotopbtn" @click="top">
      <img src="https://wmall.wochu.cn/h5/activityTemplate/img/go_top.png" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
 
  methods: {
    back() {
      this.$router.go(-1);
    },
    top() {
         window.scrollTo(0,0)
    }
  },
  created() {
    this.$axios
      .get(
        "https://wmall.wochu.cn/client/v1/goods/activityTemplate?parameters=%7B%22aTId%22%3A582%7D"
      )
      .then(res => {
        this.list = res.data.data.areaList;
      });
  }
};
</script>
<style scoped>
img {
  width: 100%;
  display: block;
}
.header {
  width: 100%;
  padding: 0.58rem 0.1rem 0;
  z-index: 2;
  position: fixed;
}
.ac-cart {
  float: right;
  margin-right: 0.3rem;
}
.ac-back {
  float: left;
  margin-left: 0.3rem;
}
.header img {
  height: 0.84rem;
  width: 0.84rem;
}
.gotopbtn {
  position: fixed;
  width: 0.84rem;
  height: 0.84rem;
  bottom: 0.5rem;
  right: 0.1rem;
}
</style>


