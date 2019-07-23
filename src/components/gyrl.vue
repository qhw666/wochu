<template>
  <div>
    <div>
      <div class="img-link">
        <img :src="img" />
      </div>
      <div class="goods-list">
        <ul>
          <li v-for="item in list">
            <div>
              <img :src="item.imgUrl" />
            </div>
            <div class="goods-name ellipsis">{{item.goodsName}}</div>
            <div class="price-cart">
              <div class="price-ctl">
                <div class="market-price">{{item.marketPrice}}</div>
                <div class="price">{{item.price}}</div>
              </div>
              <div class="addCart">
                <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      img: ""
    };
  },
  created() {
    this.$axios
      .get("http://api9.wochu.cn/api/app/acts?version=20.0.0&source=H")
      .then(res => {
        this.img = res.data.data.acts[17].items[0].imgUrl;
        this.list = res.data.data.acts[18].items;
      });
  }
};
</script>
<style scoped>
.img-link {
  background: #f8f8f8;
}
.img-link img {
  width: 7.5rem;
  height: 3.04rem;
  margin-bottom: 0.08rem;
}
.goods-list{
    padding: 0 .2rem .2rem .28rem;
    position: static;
}
.goods-list ul li{
        width: 2.26rem;
    height: 3.46rem;
    margin-top: .28rem;
    margin-right: .08rem;
    float: left;
}
.goods-list ul li div:nth-child(1) img{
    width: 2.26rem;
    height: 2.26rem;
}
.goods-name {
        width: 100%;
    height: .58rem;
    font-size: .26rem;
    line-height: .25rem;
    padding-top: .08rem;
    color: #333;
}
.ellipsis{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.price-cart{
    height: .64rem;
    margin-top: .08rem;
}
.price-ctl{
    height: .64rem;
    width: 1.6rem;
    float: left;
}
.market-price{
    font-size: .24rem;
    color: #999;
    text-decoration: line-through;
    line-height: .24rem;
    height: auto;
}
.price{
    height: .3rem;
    font-size: .3rem;
    color: #f96d16;
    line-height: .3rem;
    margin-top: .1rem;
}
.addCart{
        width: .66rem;
    height: .54rem;
    line-height: .54rem;
    float: right;
    text-align: center;
}
.addCart img{
    width: .48rem!important;
    height: .48rem!important;
    float: left;
}
</style>


