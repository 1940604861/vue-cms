<template>
    <div class="photos_content">
		<!-- 头部导航条 -->
        <div id="slider" >
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item ',item.id==0 ? 'mui-active':'']" v-for="item in photos" :key="item.id" @click="getphotos_str(item.id)">
							{{item.title}}
						</a>

					</div>
				</div>

			</div>
			<!-- 内容图片 -->
             <ul>
               <router-link v-for="item in list" :key="item.id" :to="'/home/photosinfo/'+item.id" tag="li">
                <img v-lazy="item.img_url">
				<div class="info">
					<div class="info-title">{{item.title}}</div>
					<div class="info-body">{{item.zhaiyao}}</div>
				</div>
               </router-link>
            </ul>
			<div class="dianji" @click="dianji">
				△
			</div>
    </div>
</template>

<script>

//1.导入mui的js文件
import mui from '../../lib/mui/js/mui.js'
import jquery from 'jquery'



export default{
   data(){
	   return{
		   photos:[],
		   list:[]

	   }
	   
   },
   mounted(){
	//    当组件中的dom结构渲染并放到页面后 会执行这个钩子函数
	//    如果要操作元素 最好在mounted 里面，因为这里时候的dom元素是最新的
    //2.初始化滑动控件
  mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

   },
   created(){
	   this.getpohots()
	   this.getphotos_str(0)

   },
   methods: {
	   getpohots(){
		   this.$http.get('api/getimgcategory').then(result=>{
			   if(result.body.status==0){
				   result.body.message.unshift({title:'全部',id:0});
				   this.photos=result.body.message

			   }
		   })
	   },
	   getphotos_str(cateid){
                      this.$http.get('api/getimages/'+cateid).then(result=>{
						  if(result.body.status==0){
							  this.list=result.body.message
						  }
						 
					  })
	   },
	   dianji(){
		   document.body.scrollTop = document.documentElement.scrollTop = 0;
	   }
	   
   },

}

</script>


<style lang="less" scoped>


*{
	touch-action: pan-x;
	/* ouch-action 用于指定某个给定的区域是否允许用户操作，以及如何响应用户操作（比如浏览器自带的划动、缩放等）。 */
}

ul{
	
	list-style: none;
	margin: 0;
	padding: 10px;
	padding-bottom: 0;
	li{
		position:relative;
		background-color: #ccc;
		text-align: center;
		margin-bottom:10px;
		box-shadow:0 0 9px #999;
	}
	img{
		width: 100%;
		vertical-align: middle;
	}
    img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}

    .info{
		background-color: rgba(0,0,0,0.1);
		max-height: 100px;
		position: absolute;
		bottom:0px;
		color: white;
		text-align: left;
		.info-title{
			font-size: 14px;
		}
		.info-body{
			font-size: 13px;
		}
	}
}


.dianji{
	position:fixed;
	right: 10%;
	bottom: 30%;
	font-size: 60px;
}
</style>