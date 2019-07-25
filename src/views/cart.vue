<template>
    <div>
        <div class="cart-shop">
            <ul>
                <li>
                    <div class="ss">
                        <input type="radio">
                    </div>
                    
                    <div class="cart-shop1">
                        <img src="../assets/css/80286916-6a8e-4399-85dd-9b5457fa5e0c.jpg" alt="">
                    </div>
                    <div class="cart-shop2">
                        <div class="cart-shop3">
                        
                        </div>
                        <div class="cart-shop4">
                            <div class="cart-shop5">
                                <span></span>
                                <i></i>
                            </div>
                        </div>
                        <div class="cart-shop6">
                            <a href="javascript:;">  <img class="cart-shopp" src="../assets/disminus.png" alt=""> </a>
                            <input class="cart-shop7" type="text" value="1" >
                            <a href="javascript:;"> <img class="cart-shop8" src="../assets/plus.png" alt=""> </a>
                        </div>
                    </div>
                    
                </li>
            </ul>
        </div>
        <div class="cart-1">
            <a href="">登录</a>
        </div>
        <div class="cart-2">
            <div class="cart-3">
            </div>   
             <ul class="cart-4">
                <li class="cart-5" v-for="(item, index) in list" :key="index">
                        <img :src="item.picUrl" alt="" @click="godetails(item.goodsGuid)">
                        <div class="cart-6">
                            <p>{{item.goodsName}}</p>
                            <div class="aaa">
                            <div class="cart-7">
                                <span>{{item.marketPrice}}</span>
                                <p>￥{{item.price}}</p>
                            </div>
                            <div class="cart-8"> 
                            </div>
                            </div>
                        </div>
                    </li>
                
            </ul> 
            <div class="cart-9">
                没有更多了~
            </div>
        </div>
    </div>
</template>
<script>
import { InfiniteScroll } from 'mint-ui';
import { constants } from 'crypto';
export default {
    data() {
        return {
            list:[],
        }
    },
    created() {
        this.getData()
    },
    methods: {
        godetails(id){
            this.$router.push("/details/"+id)
        },
        getData(){
            this.$axios.get("http://api9.wochu.cn/client/v1/goods/GoodsRecommendList?parameters=%7B%22pageSize%22%3A9%2C%22pageIndex%22%3A+1%2C%22type%22%3A%221%22%7D&",{
                parameters:{
                   
                }
            })
            .then((res)=>{
                this.list=res.data.data.items;
                console.log(res)
            }),
            this.$axios.get("http://api9.wochu.cn/client/v1/goods/imgLoopList?parameters=%7B%22goodsGuid%22:%227b7bc17d-cd2a-4ce0-a9be-cbe48e49526d%22%7D",{
                parameters:{
                   
                }
            })
            .then((res)=>{
                console.log(res)
            })
        }
    },
}
</script>
<style >
    .cart-shop6 .cart-shop8{
        border-top-right-radius: .25rem;
        border-bottom-right-radius: .25rem;
        text-align: right;
        width: .45rem;
        height: 100%;
        color: #999;
        float: left;
        background: #f5f5f5;
        font-size: .5rem;
        line-height: .4rem;
    }
    .cart-shop7{
        width: .65rem;
        float: left;
        background: #f5f5f5;
        outline: none;
        height: 90%;
        text-align: center;
        font-size: .26rem;
        border: none;
        vertical-align: middle;
    
    }
    .cart-shop2 .cart-shop6 .cart-shopp{
        border-top-left-radius: .25rem;
        border-bottom-left-radius: .25rem;
        text-align: right;
        width: .45rem;
        height: 100%;
        color: #999;
        float: left;
        background: #f5f5f5;
        font-size: .5rem;
        line-height: .4rem;
    }
    .cart-shop6{
        width: 1.55rem;
        height: .5rem;
        float: right;
        text-align: center;
    }
    .cart-shop5{
        width: 2.17rem;
        float: left;
    }
    .cart-shop4{
        display: inline-block;
        width: 100%;
    }
    .cart-shop3{
        overflow: hidden;
        word-break: break-all;
        text-overflow: ellipsis;
        height: .6rem;
        line-height: .32rem;
        font-size: .28rem;
    }
    .cart-shop2{
        width: 4.16rem;
        float: right;
        height: 2.2rem;
        padding: .2rem 0;
    }
    .ss{
        display: block;
        width: 13px;
        height: 13px;
        float: left;
        line-height: inherit;
    }
    .cart-shop1{
        height: 2.2rem;
        width: 2.2rem;
        float: left;
        margin: 0 .2rem;
    }
    .cart-shop li img{
        width: 100%;
    }
    .cart-shop li{
        padding: 0 .18rem;
        height: 100%;
        line-height: 2.22rem;
    }
    .cart-shop ul{
        height: 100%
    }
    .cart-shop{
        margin-bottom: .08rem;
        width: 100%;
        background: #fff;
        height: 2.22rem;
        display: none;
    }
    .cart-9{
    color: #666;
    font-size: .28rem;
    }
    .aaa{
        display: flex;
        flex: 1;
        justify-content: space-between;
        align-items: flex-end;
    }
    .cart-8{
        margin: 0;
        width: .5rem;
        height: .5rem;
        background: url("../assets/add_cart.png");
        background-size: 100%;
    }
    .cart-4 .cart-7 p{
        font-size: .28rem;
        color: #f96d16;
    }
    .cart-7{
        width: 1.4368rem;
    }
    .cart-6 span{
        text-decoration: line-through;
        font-size: .22rem;
        color: grey;
    }
    .cart-5:nth-child(3n+2){
        margin: 0 .08rem .28rem;
    }
    .cart-6 p{
        font-size: .28rem;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .cart-6{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex: 1;
        padding: .12rem .16rem .22rem;
        background: #fff;
    }
    .cart-5 img{
        cursor: pointer;
        height: 2.26rem;
    }
    
    .cart-5{
        margin-bottom: .28rem;
        display: flex;
        flex-direction: column;
        border-radius: .1rem;
        width: 32.5%;
        height: 3.92rem;
    }
    .cart-4{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
    .cart-3{
        margin-bottom: .3rem;
        width: 4.72rem;
        height: .3rem;
        background: url("../assets/recommend.png") center/100%;
    }
    .cart-2{
        padding: 1rem 0.28rem 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .cart-1{
        margin: 0;
        padding: 0;
        vertical-align: middle;
        margin-top: 3.25rem;
    }
    .cart-1 a{
        width: 2.4rem;
        line-height: .6rem;
        left: 50%;
        margin-left: -1.2rem;
        color: #f67d30;
        font-size: .3rem;
        border: 1px solid #f67d30;
        text-align: center;
        margin: 15px auto;
    }
    body{
        background: #F4F4F4;
    }
    a{
        display: block;
    }
</style>
