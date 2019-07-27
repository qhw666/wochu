<template>
  <div class="act">
    <div class="act-a" v-for="(item, index) in list" :key="index">
      <img :src="item.imageUrl" alt />
      <div class="act-a1">
        <ul>
          <li v-for="(acio, index) in item.shelveList" :key="index">
            <img :src="acio.icon" alt @click="godetails(acio.goodsGuid)" />
            <div class="act-a2">
              <p>{{acio.goodsName}}</p>
              <div class="act-a3">
                <div class="act-a4">
                  <div class="act-a5">￥{{acio.price}}</div>
                  <div class="act-a7">￥{{acio.marketPrice}}</div>
                </div>
                <div class="act-a6"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 返回顶部 -->
    <div class="act-di">
      <img src="../assets/go_top.png" alt @click="gotop" />
    </div>
    <!-- 购物车图标 -->
    <div class="act-top">
      <img src="../assets/ac-cart.png" alt @click="gocart" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      listurl: []
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(
          "https://api9.wochu.cn/client/v1/goods/newactivityTemplate?aTId=123"
        )
        .then(res => {
          console.log(res);
          this.list = res.data.data.areaList;
          this.listurl = res.data.data.areaList;
          console.log(res.data.data.areaList);
        });
    },
    godetails(id) {
      this.$router.push("/details/" + id);
    },
    gotop() {
      window.scrollTo(0, 0);
    },
    gocart() {
      this.$router.push("/wc/cart");
    }
  },
  created() {
    this.getData();
  },
  mounted() {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
  }
};
</script>


<style scoped>
.act-top img {
  height: 0.84rem;
  width: 0.84rem;
}
.act-top {
  position: fixed;
  float: right;
  /* z-index: 2; */
  right: 0.2rem;
  top: 1rem;
}
.act-di img {
  width: 100%;
}
.act-di {
  position: fixed;
  width: 0.84rem;
  height: 0.84rem;
  bottom: 0.5rem;
  right: 0.1rem;
}
.act-a7 {
  font-size: 0.24rem;
  color: grey;
  text-decoration: line-through;
}
.act-a6 {
  margin: 0;
  width: 0.5rem;
  height: 0.5rem;
  background: url("../assets/add_cart.png");
  background-size: 100%;
}
.act-a5 {
  font-size: 0.28rem;
  color: #f96d16;
}
.act-a4 {
  flex-direction: column-reverse;
  align-items: flex-start;
  display: flex;
  align-items: flex-end;
}
.act-a3 {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
}
.act-a2 p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.28rem;
  color: #333;
}
.act-a2 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  padding: 0.12rem 0.16rem 0.22rem;
  background: #fff;
}
.act-a:nth-of-type(12) > img:nth-of-type(1) {
  display: none;
}
.act-a:nth-of-type(10) > img:nth-of-type(1) {
  display: none;
}
.act-a:nth-of-type(8) > img:nth-of-type(1) {
  display: none;
}
.act-a:nth-of-type(7) > img:nth-of-type(1) {
  display: none;
}
.act-a:nth-of-type(5) > img:nth-of-type(1) {
  display: none;
}
.act-a1 ul li:nth-child(3n + 2) {
  margin: 0 0.08rem;
}
.act-a1 ul li {
  display: flex;
  flex-direction: column;
  flex: 0 0 32.5%;
  border-radius: 0.1rem;
  width: 100%;
  height: 3.92rem;
  position: relative;
  margin-bottom: 0.2rem;
  overflow: hidden;
}
.act-a1 ul {
  display: flex;
  padding: 0 0.28rem;
  flex-wrap: wrap;
  width: 100%;
}
.act-a {
  position: relative;
}
.act {
  background: antiquewhite;
}
* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  vertical-align: middle;
  zoom: 1;
}
</style>