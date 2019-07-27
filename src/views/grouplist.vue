<template>
  <div>
    <div class="page-header app-devices">
      <div class="search-back" @click="back">
        <img src="https://wmall.wochu.cn/h5/tg/img/goback.png" />
      </div>
      <div class="doctitle">团购</div>
      <div class="my-group">
        我的团
        <p class="group-count"></p>
      </div>
    </div>
    <div class="group-tab">
      <div class="group-tab-item" :class="{active:aa===1}"  @click="change(1)">
        <div class="group-tab-info">最新</div>
      </div>
      <div class="group-tab-item"  :class="{active:bb===1}" @click="change(2)">
        <div class="group-tab-info">精选</div>
      </div>
      <div class="group-tab-item" :class="{active:cc===1}" @click="change(3)">
        <div class="group-tab-info">即将结束</div>
      </div>
    </div>
    <div class="main-content-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <div class="grup-img" v-for="(item,index) in list" :key=index>
        <img class="goDetailLink" :src="item.hotSaleImage[0].URL"/>
        <div class="group-title">
          <p class="title">{{item.product_title}}</p>
          <p class="desc">{{item.sell_point}}</p>
        </div>
        <div class="price-ctl">
          <div class="price">
            <span class="rmb">￥</span>
            <span class="price-rmb">{{item.discount_price}}</span>
            <span>/</span>
            <i>￥{{item.market_price}}</i>
            <span class="mem-limit">{{item.parter_number}}人团</span>
          </div>
          <div class="discount-rate">
            <div class="open-group">去开团</div>
          </div>
        </div>
        <div class="space-div"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { InfiniteScroll } from 'mint-ui';
export default {
  data() {
    return {
        list:[],
        loading:false,
        page:0,
        type:1,
        aa:1,
        bb:2,
        cc:2,
    };
  },
  methods: {
      back() {
        this.$router.go(-1)
    },
    loadMore(){
      this.page++;
      this.getdata()
    },
    change(type){
        this.type=type;
        this.getdata1()
        if(this.type==1){
            this.aa=1
            this.bb=2
            this.cc=2
        }else if(this.type==2){
            this.bb=1
            this.aa=2
            this.cc=2
        }else{
            this.aa=2
            this.bb=2
            this.cc=1
        }
    },
    getdata(){
      if(this.page>3){
            return
      }
      this.loading=true;
      console.log(this.type)
      this.$axios
      .get(
        "https://tg.wochu.cn/client/v1/groupBuy/HotSaleList?",
        {
         params:{parameters: {
              "pageSize":5,
              "pageIndex":this.page,
              "order":1
            }},
        }
      )
      .then(res => {
        this.list =this.list.concat(res.data.data.items);
        this.loading=false;
      });
    },
     getdata1(){
      this.$axios
      .get(
        "https://tg.wochu.cn/client/v1/groupBuy/HotSaleList?",
        {
         params:{parameters: {
              "pageSize":5,
              "pageIndex":1,
              "order":this.type
            }},
        }
      )
      .then(res => {
        this.list =res.data.data.items;
      });
    },
  }
};
</script>
<style scoped>
.search-back{
    width: 1.7rem;
}
.active .group-tab-info{
    padding: .05rem .5rem;
    background: #fee9dc;
    font-size: .27rem;
    color: #e17a2e;
    border-radius: .23rem;
}
.page-header {
  text-align: center;
  line-height: 0.88rem;
  background-color: #fff;
  height: 0.88rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  border-bottom: 1px solid #f8f8f8;
  display: flex;
}
img{
    width:100%;
}
.search-back img {
  width: 0.88rem;
  height: 0.88rem;
  float: left;
}
.doctitle {
  width: 4.1rem;
  font-size: 0.36rem;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.my-group {
  width: 1.5rem;
  padding-right: 0.2rem;
  font-size: 0.3rem;
  color: #333;
  line-height: 0.88rem;
  text-align: right;
}
.group-tab {
  position: fixed;
  top: 0.88rem;
  z-index: 99;
  align-items: center;
  width: 7.5rem;
  height: 0.72rem;
  background: #fff;
  display: flex;
}
.group-tab-item {
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
.group-tab-info {
  display: flex;
  font-size: 0.27rem;
  color:#666;
}
.main-content-list{
    margin: 1.6rem 0 .2rem 0;
    background: #fff;
}
.grup-img{
    width: 100%;
    margin-top:1rem;
}
.group-title{
    padding: 0 .2rem;
}
.title{
        font-size: .36rem;
    color: #333;
    line-height: .8rem;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.desc{
    font-size: .26rem;
    line-height: .3rem;
    color: #999;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.price-ctl{
    line-height: .74rem;
    margin: .3rem 0;
        padding: 0 .2rem;
}
.price{
        width: 5.1rem;
    text-align: left;
    color: #999;
    font-size: .3rem;
    float: left;
    
}
.rmb{
        color: #ff701e;
    font-weight: bolder;
}
.price-rmb{
        color: #ff701e;
    font-size: .48rem;
    font-weight: bolder;
}
.mem-limit{
        margin-left: .1rem;
    padding-right: .1rem;
    border-radius: .07rem;
    font-size: .3rem;
    color: #ff5918;
    border: 1px solid #ff5918
}
.discount-rate{
        width: 2rem;
    height: .74rem;
    line-height: .74rem;
    text-align: right;
    float: right;
    font-size: .36rem;
    color: #ff701e;
}
.open-group{
        background: #f96d16;
    color: #fff;
    font-size: .3rem;
    text-align: center;
    border-radius: .35rem;
}
.space-div{
    width: 100%;
    height: .1rem;
    background: #f8f8f8;
}

</style>


