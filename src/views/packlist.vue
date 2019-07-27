<template>
  <div class="aa">
    <div class="header">
      <div class="ac-back" @click="back">
        <img src="http://wmall.wochu.cn/h5/img/ac-back.png" />
      </div>
    </div>
    <ul>
      <li v-for="(item,index) in list" :key=index>
        <img :src="item.url" />
        <div class="package-info">
          <div class="package-name">{{item.pName}}</div>
          <div class="package-price">套餐价{{item.price}}元</div>
        </div>
        <p class="package-desc">{{item.description}}</p>
      </li>
    </ul>
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
        this.$router.go(-1)
    }
  },
  created() {
    this.$axios
      .get("http://wmall.wochu.cn/client/v1/goods/package/list")
      .then(res => {
        this.list = res.data.data;
      });
  }
};
</script>
<style scoped>
.aa{
      padding: .2rem 0;
}
.header {
  width: 100%;
  padding: 0.58rem 0.1rem 0;
  z-index: 3;
  position: fixed;
}
.header img {
  height: 0.84rem;
  width: 0.84rem;
}
ul li {
  padding: 0 0.24rem 0.4rem;
}
ul li img {
  width: 100%;
}
.package-info {
  width: 100%;
  font-size: 0.36rem;
  line-height: 0.6rem;
  padding: 0 0.1rem;
}
.package-name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 56%;
  color: #1a1a1a;
  float: left;
  text-align: left;
}
.package-price {
  width: 44%;
  color: red;
  float: right;
  text-align: right;
}
.package-desc {
  font-size: 0.26rem;
  color: #4c4c4c;
  line-height: 0.3rem;
  padding: 0 0.1rem;
}
.ac-back {
  float: left;
}
</style>


