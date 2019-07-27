<template>
    <div>
        <Input/>
        <div  class="fenlei">
        <ul class="left" >
            <li v-for="(item,index) in left" :key=index @click="getparId(index)" :class='           {clabind:cureindex===index}'>
                {{item.name}}
            </li>
        </ul>
        
        <ul class="right"  >
            <router-link to='{name:details,params:{id:item.id}}'>
                <li v-for="(item,index) in list" :key=index >
                   <img :src=item.checkicon>
                   <p>{{item.name}}</P>
                </li>
         </router-link>
        </ul>
        </div>
       
    </div>
</template>
<script>
import Input from '../components/input'
export default {
        components:{
        Input
    },
    data() {
        return {
            tuij:'',
            all:[],
            left:[],
            right:[],
            list:[],
            cureindex:0,
            flag:true
        }
    },

    created() {
        this.$axios.get("http://api9.wochu.cn/client/v1/goods/GetCategoryListByMenuId?parameters=%7B%22menu%22%3A0%7D").then((res)=>{ 
              console.log( res.data.data)
               res.data.data.map((item)=>{
                  if(item.id<12){
                      this.left.push(item)
                  }else{
                      this.all.push(item)
                  }
               })
        })
        this.$axios.get("http://api9.wochu.cn/client/v1/goods/GetCategoryRecommendList").then((res)=>{  
                    this.tuij=res.data.data
                    console.log(this.tuij)     
            })
    },
    methods:{
          getparId(index){
              this.cureindex=index;
              this.list.length=0;
              this.all.map((item)=>{
                    if(index===item.parentId-2){
                        this.list.push(item)
                    } 
              })
            },

    }
}
</script>

<style lang="scss" socped>
   $color:#6eb042;
    .fenlei{
        width: 100%;
        display: flex;
        .left{
            width: 24%;
            li{
                font-size: .3rem;
                height:.8rem;
                text-align: center;
                line-height: .8rem;
                margin: .4rem 0;
              
            }
        }
        .right{
            overflow: hidden;
            margin-top:1.3rem; 
            width: 74%;
            width: 100%;
            li{
               
               float: left;
               width: 33%;
               height: 1.8rem;
               text-align: center;
               img{
                   width: 1rem;
                   height: 1rem;
                   vertical-align: middle; 
               }
                p{
                    color: black;
                    font-size: .24rem;
                    margin-top:.4rem; 
                }
            }
        }
 
    }
    .clabind{
        color: $color;
        border-left:2px solid  $color;
    }
    
</style>
     

