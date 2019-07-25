<template>
    <div>
       <div>
           <div class="d-s">
               <div class="d-s-1">
                   <img src="../assets/refer.png" alt="" @click="goback">
               </div>
                <div class="swiper-container3">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in listurl" :key="index">
                        <img :src="item.picUrl">
                    </div>
                </div>
                </div>
               
           </div>
       </div>
       <!-- 商品信息 价格 -->
        <div class="d-s1">
            <div class="d-s2"></div>
            <h1>
                {{list.goodsName}}
            </h1>
            <h2>{{list.description}}</h2>
            <div class="d-s3">
                <div class="d-s4">
                    ￥{{list.price}}
                </div>
                <div class="d-s4-1">
                    ￥{{list.marketPrice}}
                </div>
            </div>
        </div>
        <div class="d-s5">
            <img src="../assets/navigation.png" alt="">
        </div>
        <!-- 产地  保质期 规格 -->
        <div class="d-s6">
            <div class="d-s7">
                <span>产地 : </span>{{list.origin1}}
            </div>
            <dir class="d-s7">
                <span class="d-s8">保质期 : </span>
            </dir>
            <div class="d-s9">
                <span>规格 : </span>{{list.specification}}
            </div>
            <div class="d-s9">
                <span>储存条件 : </span>{{list.storageCondition}}
            </div>
        </div>
        <!-- 商品评价 -->
        <div class="d-s10">
            <span>商品评价</span>
            <img src="../assets/next.png" alt="">
        </div>
        <div class="d-s11">
            <i></i>
            <p>猜你喜欢</p>
        </div>
        <!-- 列表 -->
        <div class="d-s12">
            <div class="d-s13" v-for="(item, index) in list1" :key="index">
                <div class="d-s14">
                    <img :src="item.picUrl" alt="" @click="gotodetails(item.goodsGuid)">
                    <div class="d-s15"> {{item.goodsName}}</div>
                    <div class="d-s16">{{item.marketPrice}}</div>
                    <div class="d-s17">{{item.price}}</div>
                    <div class="d-s18">
                        <img src="../assets/add_cart.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- 尾部  -->
        <div>
            <div v-html="list.descriptionDetail" class="d-s-wei">
                
            </div>
        </div>
    </div>
</template>
<script>
import { constants } from 'crypto';
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
export default {
    data() {
        return {
            list:[],
            list1:[],
            listurl:[]
        }
    },
    created(){
        this.getData()

    },
    methods:{
        getData(){
            this.$axios.get("http://api9.wochu.cn/api/goods/goods/detail?",{
            params:{
                goodsGuid:this.$route.params.id
            }
            }).then((res)=>{
                this.list=res.data.data
                /* console.log(res) */
            }),
            this.$axios.get("http://api9.wochu.cn/client/v1/goods/getGoodsRelevantList?parameters=%7B%22goodsGuid%22:%227cb3b429-8ffd-4ebf-9a0c-48bfc8d169d9%22%7D")
            .then((res)=>{
                /* console.log(res) */
                this.list1=res.data.data.userloving
            }),
            this.$axios.get("http://api9.wochu.cn/client/v1/goods/imgLoopList?",{
                params:{
                    parameters: {"goodsGuid":this.$route.params.id}
                }
            })
            .then((res)=>{
                this.listurl=res.data.data
                console.log(res)
            })

        },
        gotodetails(id){
            this.$router.push("/details/"+id)
        },
        goback(){
            this.$router.go(-1)
        }

    },
    watch: {
          '$route'(to){
                if (to.name === 'details') {
                    this.getData()  // 在此调用函数
                }
           },
    listurl() {
      this.$nextTick(() => {
        var mySwiper = new Swiper(".swiper-container3", {
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            },
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    },deep:true,
    immediate:true,
    },
}
</script>
<style>
    .d-s-wei{
        width: 100%;
        overflow: hidden;
    }
    .swiper-container3{
        height: 100%;
    }
    .d-s-1{
        width: .54rem;
        height: .54rem;
        position: absolute;
        top: .56rem;
        left: .24rem;
        z-index: 2;
    }
    img{
        width: 100%;
        display: block;
    }
    .d-s18{
        position: absolute;
        top: 2.8rem;
        left: 1.42rem;
        width: .38rem;
    }
    .d-s12 .d-s13 .d-s17{
        margin-top: .14rem;
        font-size: .24rem;
        color: #001e00;
    }
    .d-s12 .d-s13 .d-s16{
        margin-top: .14rem;
        font-size: .2rem;
        color: #bababa;
        text-decoration: line-through;
    }
    .d-s12 .d-s13 .d-s15{
        font-size: .24rem;
        margin-top: .24rem;
        width: 1.9rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .d-s12 .d-s13 .d-s14 img{
        border: none;
        vertical-align: middle;
    }
    .d-s12 .d-s13 .d-s14{
        position: absolute;
        top: 0;
        left: 0;
        height: .54rem;
    }
    .d-s12 .d-s13{
        display: inline-block;
        margin-right: .36rem;
        width: 1.9rem;
        position: relative;
        vertical-align: top;
    }
    .d-s12{
        height: 3.38rem;
        background: #fff;
        padding: .26rem 0 0 .24rem;
        overflow-x: scroll;
        overflow-y: hidden;
        float: left;
        width: 7.26rem;
        white-space: nowrap;
        font-size: 0;
    }
    .d-s11 p{
        width: 1.68rem;
        display: inline-block;
        position: relative;
        background: #f4f4f4;
    }
    .d-s11 i{
        display: block;
        height: 1px;
        width: 4.7rem;
        position: absolute;
        top: .45rem;
        left: 1.4rem;
        background: #001e00;
    }
    .d-s11{
        position: relative;
        background: #f4f4f4;
        height: .9rem;
        line-height: .9rem;
        font-size: .3rem;
        color: #001e00;
        text-align: center;
    }
    .d-s10 img{
        width: .14rem;
        float: right;
        margin-top: .3rem;
    }
    .d-s10 span{
        color: #001e00;
        font-size: .3rem;
        float: left;
        margin-top: .3rem;
        line-height: 1;
    }
    .d-s10{
        background: #fff;
        height: .9rem;
        line-height: .9rem;
        padding: 0 .24rem;
        font-size: .3rem;
        margin-top: .22rem;
    }
    .d-s9{
        margin-top: .5rem;
        float: left;
        font-size: .28rem;
        width: 3.51rem;
        color: #001e00;
    }
    .d-s8{
        width: 1.4rem;
        display: inline-block;
    }
    .d-s7 span , .d-s9 span{
        color: #999;
    }
    .d-s6 .d-s7{
        float: left;
        font-size: .28rem;
        width: 3.51rem;
        color: #001e00;
    }
    .d-s6{
        height: 1.46rem;
        background: #fff;
        padding: .42rem 0 0 .24rem;
    }
    .d-s5 img{
        margin-top: .32rem;
    }
    .d-s5{
        overflow: hidden;
        width: 100%;
        height: 1rem;
    }
    .d-s1 .d-s3 .d-s4-1{
        font-size: .26rem;
        color: #ccc;
        margin: .05rem 0 0 .28rem;
        float: left;
        text-decoration: line-through;
    }
   
    .d-s1 .d-s3 .d-s4{
        font-size: .36rem;
        color: #ff5918;
        float: left;
    }
    .d-s1 .d-s3{
        margin: .25rem 0 0 .23rem;
        font-size: 0;
        float: left;
    }
    .d-s1 h2{
        font-weight: 400;
        font-size: .28rem;
        color: #999;
        margin: .23rem 0 0 .23rem;
        line-height: .42rem;
        display: -webkit-box;
        overflow: hidden;
    }
    .d-s1 h1{
        font-size: .36rem;
        color: #001e00;
        margin: 0 0 0 .23rem;
        height: .45rem;
        line-height: .44rem;
    }
    .d-s2{
        position: absolute;
        top: -.26rem;
        left: .38rem;
        height: .52rem;
    }
    .d-s1{
        background: #fff;
        margin: -.48rem 0 0 .24rem;
        width: 7.02rem;
        box-shadow: 1px -1px 20px rgba(34,34,34,.3);
        position: relative;
        border-radius: 10px;
        padding-top: .46rem;
        z-index: 2;
        padding-bottom: .32rem;
        height: 1.6975rem;
    }
    .d-s{
        width: 7.5rem;
        height: 7.5rem;
        background: #ccc;
        overflow: hidden;
    }
    *{
        line-height: 1;
    }
</style>
