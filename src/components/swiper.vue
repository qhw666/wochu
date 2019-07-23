<template>
  <div class="nav">
    <div class="swiper-container swiper2">
      <ul class="swiper-wrapper">
        <li class="swiper-slide" v-for="item in list">{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.$axios
      .get("http://api9.wochu.cn/api/app/acts?version=20.0.0&source=H")
      .then(res => {
        this.list = res.data.data.acts[0].items;
      });
  },
  watch: {
    list() {
      this.$nextTick(() => {
        var mySwiper = new Swiper(".swiper2", {
          direction: "vertical", // 垂直切换选项
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          loop: true, // 循环模式选项
        });
      });
    }
  }
};
</script>
<style scoped>
.nav{
    height:1.14rem;
    vertical-align: middle;
}
.swiper2{
    height: 1.14rem;
} 

.swiper2 .swiper-wrapper .swiper-slide {
  height: 1.14rem;
  color: #001e00;
  font-size: 0.26rem;
  line-height: 1.14rem;
}
</style>

