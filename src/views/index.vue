<template>
  <div>
    <header>
      <div>
        <img src="http://wmall.wochu.cn/h5/home/vueimg/wochuLogo.png" />
      </div>
      <div>
        <p>请填写地址</p>
        <span>
          <img src="http://wmall.wochu.cn/h5/home/vueimg/icon.png" />
        </span>
      </div>
      <div>
        <img src="http://wmall.wochu.cn/h5/home/vueimg/search.png" />
      </div>
    </header>
    <div class="swiper">
      <lunbo />
    </div>
    <div class="nav1">
      <ul>
        <li v-for="item in list">
          <img :src="item.imgUrl" />
        </li>
      </ul>
      <ul>
        <li v-for="item in list1">
          <img :src="item.imgUrl" />
        </li>
      </ul>
    </div>
    <div class="wochu-broadcast">
      <div class="broadcast-title">
        <img
          src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/f58332d2-ad98-4d10-aa96-28d1b8090d37.jpg"
        />
      </div>
      <div class="broadcast-content">
        <div class="scroll-content">
          <swiper />
        </div>
        <div class="show-all">
          <img src="http://wmall.wochu.cn/h5/home/vueimg/down@3x.png" />
        </div>
      </div>
    </div>
    <div class="img-link">
      <img src="https://img.wochu.cn/upload/b446f257-6992-4fff-a904-f052aa83796d.gif" />
    </div>
    <div>
      <xsth />
    </div>
    <div class="img-link">
      <img src="https://img.wochu.cn/upload/8f07e583-1135-49de-a0b0-e5f222d6dfd3.jpg" alt />
    </div>
    <div class="img-link">
      <img src="https://img.wochu.cn/upload/3fd8dc02-835e-459b-bfb5-43a109bd946e.gif" alt />
    </div>
    <div class="group-list3">
      <div class="left-view">
        <img src="https://img.wochu.cn/upload/2f510351-c865-4f5e-a604-86f22c9603a5.jpg" alt />
      </div>
      <div class="right-view">
        <div class="rt-top-view">
          <img src="https://img.wochu.cn/upload/6148ed94-ee8f-4076-b238-1382425763bc.jpg" alt />
        </div>
        <div class="rt-bottom-view">
          <img src="https://img.wochu.cn/upload/9c33a199-3bec-4959-9986-9232a943084a.jpg" alt />
        </div>
      </div>
    </div>
    <div>
      <mbdc/>
    </div>
    <div>
      <bzxc/>
    </div>
    <div class="aa">
      <wcyx/>
    </div>
    <div class="aa">
      <slsc/>
    </div>
    <div class="aa">
      <xssg/>
    </div>
    <div class="aa">
      <gyrl/>
    </div>
    <div class="aa">
      <yyqd/>
    </div>
    <div class="aa">
      <szxw/>
    </div>
    <div class="aa">
      <lyxd/>
    </div>
    <div class="aa">
      <dxss/>
    </div>
    <div class="aa">
      <lyfs/>
    </div>
  </div>
</template>
<script>
import lunbo from "../components/lunbo";
import swiper from "../components/swiper";
import xsth from "../components/xsth";
import mbdc from "../components/mbdc";
import bzxc from "../components/bzxc";
import wcyx from "../components/wcyx";
import slsc from "../components/slsc";
import xssg from "../components/xssg";
import gyrl from "../components/gyrl";
import yyqd from "../components/yyqd";
import szxw from "../components/szxw";
import lyxd from "../components/lyxd";
import dxss from "../components/dxss";
import lyfs from "../components/lyfs";
export default {
  components: {
    lunbo,
    swiper,
    xsth,
    mbdc,
    bzxc,
    wcyx,
    slsc,
    xssg,
    gyrl,
    yyqd,
    szxw,
    lyxd,
    lyfs,
    dxss
  },
  data() {
    return {
      list: [],
      list1: [],
    };
  },
  created() {
    this.$axios
      .get(
        "http://api9.wochu.cn/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D"
      )
      .then(res => {
        this.list = res.data.data.recommendedContent[0].items;
      });
    this.$axios
      .get(
        "http://api9.wochu.cn/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D"
      )
      .then(res => {
        this.list1 = res.data.data.recommendedContent[1].items;
      });
  }
};
</script>
<style scoped>
.aa{
  margin-top:7.6rem;
}
header {
  position: fixed;
  width: 93.5%;
  height: 0.9rem;
  line-height: 0.9rem;
  padding: 0 0.24rem;
  background: #fff;
  z-index: 3;
  top: 0;
  left: 0;
}
header div:nth-child(1) {
  margin-right: 0.3rem;
  float: left;
}
header div:nth-child(1) img {
  display: block;
  width: 0.88rem;
  margin-top: 0.25rem;
}
header div:nth-child(2) {
  width: 3.5rem;
  float: left;
  font-size: 0.3rem;
  color: #1f6117;
  text-align: center;
}
header div:nth-child(2) p {
  width: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  height: 0.9rem;
}
header div:nth-child(2) span {
  float: left;
}
header div:nth-child(2) span img {
  width: 0.15rem;
  vertical-align: 6%;
}
header div:nth-child(3) {
  width: 0.8rem;
  float: right;
  font-size: 0.26rem;
  color: #666;
  text-align: right;
}
header div:nth-child(3) img {
  width: 0.36rem;
  height: auto;
  vertical-align: middle;
}
.swiper {
  margin-top: 0.9rem;
}
.nav1 {
  height: 4.36rem;
}
.nav1 ul {
  padding: 0.14rem 0 0.2rem 0.14rem;
  float: left;
}
.nav1 ul li {
  width: 1.7rem;
  height: 1.7rem;
  margin: 0 0.14rem 0.14rem 0;
  float: left;
}

.nav1 ul li img {
  width: 1.7rem;
  height: 1.7rem;
}
.wochu-broadcast {
  height: 1.16rem;
  border-top: 1px solid #e5e5e5;
}
.broadcast-title {
  width: 0.84rem;
  float: left;
  padding: 0.24rem 0 0 0.24rem;
}
.broadcast-title img {
  width: 0.6rem;
  height: 0.6rem;
  border-right: 1px solid #e5e5e5;
  padding-right: 0.24rem;
}
.broadcast-content {
  width: 6.42rem;
  height: 1.14rem;
  float: right;
}
.scroll-content {
  width: 5.27rem;
  height: 1.14rem;
  overflow: hidden;
  float: left;
  margin-left: 0.25rem;
}
.show-all {
  height: 1.14rem;
  width: 0.9rem;
  float: right;
  text-align: center;
}
.show-all img {
  margin-top: 0.5rem;
  width: 0.3rem;
  height: 0.16rem;
}
.img-link {
  background: #f8f8f8;
}
.img-link img {
  width: 7.5rem;
  height: 3.04rem;
  margin-bottom: 0.08rem;
}
.group-list3 {
  padding: 0.3rem 0.2rem 0;
  background: #f4f4f4;
}
.left-view {
  background: #fff;
  width: 3.5rem;
  height: 5.2rem;
  border-radius: 0.06rem;
  float: left;
}
img {
  width: 100%;
  height: 100%;
}
.right-view {
  width: 3.5rem;
  height: 5.2rem;
  border-radius: 0.06rem;
  background: #fff;
  float: right;
}
.rt-top-view {
  height: 2.6rem;
  border-bottom: 1px solid #e5e5e5;
}
.rt-bottom-view {
  height: 2.6rem;
}
</style>
