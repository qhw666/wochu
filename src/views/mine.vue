<template>
    <div>
        <div class="my-m">
            <img src="../assets/header_bg@3x.png" alt="">
            <div class="my-m1">
                <img src="../assets/cust-icon-nologin.png" alt="">
                <p class="my-m2">未登录</p>
            </div>
            <div class="my-m3">
                <div>
                    <div class="my-m4">
                        <div class="my-m5">
                            0
                        </div>
                        <p class="my-m6">账户余额</p>
                        
                    </div>
                    <div class="my-m7">
                        <div class="my-m5">
                            0
                        </div>
                        <p class="my-m6">账户余额</p>
                        
                    </div>
                </div>
                <div class="my-m8">
                    <img src="../assets/profile-arrow@3x.png" alt="">
                    <div class="my-m9">
                         充值立送现金券哦~
                    </div>
                    <div class="my-m10">
                        马上充值 
                    </div>
                </div>
            </div>
        </div>
        <div class="my-m11">
            <ul>
                <li>
                    <img src="../assets/needtopay@3x.png" alt="">
                    <p>待付款</p>
                </li>
                <li>
                    <img src="../assets/no-receive@3x.png" alt="">
                    <p>待收货</p>
                </li>
                <li>
                    <img src="../assets/no-comment@3x.png" alt="">
                    <p>待评价</p>
                </li>
                <li>
                    <img src="../assets/historyget@3x.png" alt="">
                    <p>退货/售后</p>
                </li>
                <li class="my-m12">
                    <img src="../assets/myorders@3x.png" alt="">
                    <p>我的订单</p>
                </li>
            </ul>
        </div>
        <div class="my-m13">
            <ul>
                <li>
                    <img  src="../assets/mytg@3x.png" alt="">
                    <p>我的团购</p>
                </li>
                <li>
                    <img  src="../assets/location@3x.png" alt="">
                    <p>收货地址</p>
                </li>
                <li>
                    <img  src="../assets/favorite@3x.png" alt="">
                    <p>我的收藏</p>
                </li>
                <li>
                    <img  src="../assets/aboutus@3x.png" alt="">
                    <p>关于我厨</p>
                </li>
                <li>
                    <img  src="../assets/help@3x.png" alt="">
                    <p>帮助中心</p>
                </li>
                <li>
                    <img  src="../assets/yjfk@3x.png" alt="">
                    <p>意见反馈</p>
                </li>
                <li>
                    <img  src="../assets/setup@3x.png" alt="">
                    <p>设置中心</p>
                </li>
                <li>
                    <img  src="../assets/kefu@3x.png" alt="">
                    <p>客服电话</p>
                </li>
            </ul>
        </div>
        <div class="my-m14">
            <img src="../assets/b51022d5-c9d1-4e11-ae35-328aa7f551e8 (1).gif" alt="">
        </div>
    </div>
</template>
<script>
import { constants } from 'crypto';
export default {
/*     data() {
        return {
            list:[],
        }
    },
    created(){
        this.$axios.get("http://api9.wochu.cn/client/v1/shopcart/getCartGoodsCount?parameters=%7B%22deviceNumber%22%3A%220%22%7D")
        .then((res)=>{
            console.log(res)
        })
    } */
}
</script>
<style>
    .my-m14{
        width: 100%;
        height: 1.5rem;
        text-align: center;
    }
    .my-m13 ul li p{
        margin-top: .2rem;
    }
    .my-m13 ul li img {
        height: .56rem;
        width: auto;
        display: inline-block
    }
    .my-m13 ul li {
        width: 25%;
        padding: .3rem 0;
        color: #999;
        font-size: .24rem;
        float: left;
        text-align: center;
    }
    .my-m13 ul{
        border-bottom: 1px solid #e5e5e5;
        width: 100%;
    }
    .my-m13{
        margin-top: .2rem;
        background: #fff;
        height: 3.38rem;
    }
    .my-m11 .my-m12{
        width: 19.7%;
        color: #243a23;
        border-left: 1px solid #ccc;
    }
    .my-m11 ul li p{
        margin-top: .18rem;
    }
    .my-m11 ul li img{
        height: .56rem;
        width: auto;
        display: inline-block;
    }
    .my-m11 ul li{
        width: 20%;
        color: #999;
        font-size: .24rem;
        float: left;
        text-align: center;
    }
    .my-m11 ul{
        width: 100%;
    }
    .my-m11{
        margin-top: .2rem;
        height: 0.93rem;
        padding: .4rem 0;
        background: #fff;
    }
    .my-m10{
        float: right;
        text-align: right;
        padding-right: .8rem;
        line-height: inherit;
    }
    .my-m9{
        float: left;
        padding-left: .4rem;
        line-height: inherit;

    }
    .my-m8 img{
        position: absolute;
        height: .2rem;
        left: 25%;
        margin-left: -.31rem;
        top: -.2rem;
        width: .63rem;
    }
    .my-m8{
        position: relative;
        height: .86rem;
        line-height: .86rem;
        margin-top: 1.1rem;
        background: #428b0e;
        color: #fff;
        font-size: .28rem;
        border-bottom-left-radius: .24rem;
        border-bottom-right-radius: .24rem;
    }
    .my-m7{
        float: right;
        text-align: center;
        margin-right: 50px;
    }
    .my-m6{
        font-size: .28rem;
        color: #999;
    }
    .my-m5{
        font-size: .4rem;
        color: #001e00;
    }
    .my-m4{
        width: 50%;
        float: left;
        text-align: center;
        border-right: 1px solid #e5e5e5;
    }
    .my-m3{
        position: absolute;
        width: 7.02rem;
        top: 2.94rem;
        left: 50%;
        margin-left: -3.51rem;
        text-align: center;
        border-radius: .24rem;
        padding-top: .4rem;
        background: #fff;
        box-shadow: 1px -1px 20px rgba(34,34,34,.3);
    }
    .my-m2{
        margin-top: .4rem;
    }
    .my-m1 img{
        width: 1.2rem;
        height: 1.14rem;
        border-radius: .5rem;
        margin: auto;
    }
    .my-m1{
        position: absolute;
        width: 100%;
        top: .78rem;
        left: 0;
        text-align: center;
        font-size: .24rem;
        color: #fff;
    }
    .my-m{
        width: 100%;
        height: 5.58rem;
        position: relative;
    }

</style>

