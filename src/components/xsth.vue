<template>
  <div>
    <div class="temp-list1">
      <div class="temp-title">
        <span></span>
        {{tit}}
        <span class="line-rt"></span>
      </div>
      <ul>
        <li v-for="item in list2">
          <div class="img-view">
            <img :src="item.imgUrl" />
          </div>
          <div class="temp-goods-info">
            <p class="temp-goods-name">{{item.goodsName}}</p>
            <div class="goods-intro">{{item.description}}</div>
            <div class="temp-goods-price">
              <div class="price-wrap">
                <div class="real-price">
                  ￥
                  <span class="before-point">27</span>
                  <span class="affter-point">.9</span>
                </div>
              </div>
              <div class="add-to-cart">
                <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="swiper-item swiper-wrapper">
      <div v-for="item in list3" class="advice-group swiper-slide swiper-slide-active">
        <img :src="item.imgUrl" />
        <div class="group-name ellipsis">{{item.goodsName}}</div>
        <div class="m-price">
          <div>{{item.marketPrice}}</div>
        </div>
        <div class="o-price">{{item.price}}</div>
        <div class="add-cart">
          <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list2: [],
      list3: [],
      tit: ""
    };
  },
  created() {
    this.$axios
      .get("http://api9.wochu.cn/api/app/acts?version=20.0.0&source=H")
      .then(res => {
        this.list2 = res.data.data.acts[2].items;
      });
    this.$axios
      .get("http://api9.wochu.cn/api/app/acts?version=20.0.0&source=H")
      .then(res => {
        this.tit = res.data.data.acts[3].title;
        this.list3 = res.data.data.acts[3].items;
      });
  }
};
</script>
<style scoped>
.temp-list1 {
  padding-top: 0.3rem;
  background: #f4f4f4;
}
.temp-title {
  background: #fff;
  height: auto;
  min-height: 0.4rem;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  padding: 0.3rem 0;
  line-height: 0.4rem;
  color: #001e00;
  border-bottom: 1px solid #e5e5e5;
}
.temp-title span {
  width: 1.5rem;
  height: 1px;
  display: inline-block;
  border-bottom: 1px solid #011e00;
  margin: 0 0.22rem;
}
.line-rt {
  width: 1.5rem;
  height: 1px;
  display: inline-block;
  border-bottom: 1px solid #011e00;
  margin: 0 0.22rem;
}
.img-view {
  float: left;
  width: 2.6rem;
  height: 2.6rem;
}
.img-view img {
  width: 100%;
  height: 100%;
}
.temp-goods-info {
  float: right;
  width: 4.14rem;
  height: 100%;
  padding-left: 0.2rem;
}
.temp-goods-name {
  height: 0.68rem;
  width: 100%;
  line-height: 0.36rem;
  font-size: 0.32rem;
  font-weight: 700;
  letter-spacing: 0.02rem;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 0.32rem;
}
.goods-intro {
  width: 100%;
  height: 0.56rem;
  font-size: 0.26rem;
  line-height: 0.56rem;
  letter-spacing: 0.01rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 0.32rem;
}
.temp-goods-price {
  vertical-align: middle;
}
.price-wrap {
  float: left;
  line-height: 0.5rem;
}
.add-to-cart {
  float: right;
  width: 0.52rem;
  height: 0.52rem;
}
.real-price {
  float: left;
  color: #ff5918;
  font-size: 0.3rem;
}
.before-point {
  font-size: 20px;
}
.affter-point {
  font-size: 13px;
}
.add-to-cart img {
  width: 100%;
  height: 100%;
  vertical-align: text-top;
}
.temp-list1 ul {
  background: #fff;
}
.temp-list1 ul li {
  width: 7.02rem;
  height: 2.54rem;
  padding: 0.28rem 0.24rem;
  border-bottom: 1px solid #e5e5e5;
}
.swiper-item {
  min-height: 3.26rem !important;
  background: #fff;
  padding: 0.26rem 0 0 0.24rem;
  font-size: 0;
  z-index: 1;
  box-sizing: border-box;
}
.swiper-wrapper {
  display: flex;
  position: relative;
  overflow: auto;
}
.advice-group {
  height: 3.52rem;
  width: 1.9rem;
  position: relative;
  vertical-align: top;
}
.swiper-slide {
  margin-right: 0.36rem;
}
.advice-group > img {
  width: 1.9rem;
  height: 1.9rem;
}
.add-cart {
  position: absolute;
  bottom: 0.28rem;
  left: 1.42rem;
  width: 0.38rem;
}
.add-cart img {
  width: 100%;
  height: 100%;
}
.o-price {
  height: 0.24rem;
  margin-top: 0.1rem;
  font-size: 0.24rem;
  color: #001e00;
  line-height: 0.24rem;
}
.m-price {
  height: 0.24rem;
  margin-top: 0.14rem;
  font-size: 0.2rem;
  color: #bababa;
  text-decoration: line-through;
}
.group-name {
  font-size: 0.24rem;
  margin-top: 0.24rem;
  width: 1.9rem;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>



