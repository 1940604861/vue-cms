<template>
    <div>

<!-- <mt-swipe :auto="4000">
  <mt-swipe-item v-for="item in lunbotulist" :key="item.url">
      <img :src="item.img">
  </mt-swipe-item>
</mt-swipe> -->

<!-- 轮播图 -->
<mt-swipe :auto="4000" >
    <mt-swipe-item  ><img src="/img/zhuti_4.jpg" class="img_mt"></mt-swipe-item>
    <mt-swipe-item  ><img src="/img/zhuti_5.jpg" class="img_mt"></mt-swipe-item>
    <mt-swipe-item  ><img src="/img/zhuti_6.jpg" class="img_mt"></mt-swipe-item>

</mt-swipe>

<!-- 九宫格内容 -->
 <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                   <img src="/img/tu1.png" alt="图片">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>

		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photos">
		                     <img src="/img/tu2.png" alt="图片">
		                    <div class="mui-media-body">图片分享</div></router-link></li>

		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                     <img src="/img/tu3.png" alt="图片">
		                    <div class="mui-media-body">商品购买</div></router-link></li>

		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="/img/tu4.png" alt="图片">
		                    <div class="mui-media-body">留言反馈</div></a></li>

		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="/img/tu5.png" alt="图片">
		                    <div class="mui-media-body">视频专区</div></a></li>

		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="/img/tu6.png" alt="图片">
		                    <div class="mui-media-body">联系我们</div></a></li>
		    
		        </ul> 
    </div>
</template>
<script>
import {Toast} from 'mint-ui'

export default{
    data(){
        return{ 
            lunbotu:[]
        };
         },
    created(){
        // this.gethome()
    },
    methods:{
        // gethome(){
        //     this.$http.get("api/getlunbo").then(result=>{
        //         if(result.body.status==0){
        //             this.lunbotu=result.body.message;
        //         }
        //     })
        // }
    },
    
}
</script>

<style scoped>
.mint-swipe{
    height: 200px;
   } 
.mint-swipe-item{
    text-align: center;
}
  .mint-swipe-item:nth-child(1){
      background-color: red;
  }
    .mint-swipe-item:nth-child(2){
      background-color:blue;
  }
    .mint-swipe-item:nth-child(3){
      background-color:pink;
  }
  .mui-table-view mui-grid-view mui-grid-9{
 background-color: #fff;
  }
  .img_mt{
      height: 100%;
      width: 100%;
  }
.mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 .img{
    width: 60px;
    height: 60px;
}
.mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 .img .mui-media-body{
    font-size: 13px;

}
</style>