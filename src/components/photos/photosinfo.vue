<template>
<div class="photosinfo-container">
      <h3>{{photosinfo.title}}</h3>
      <p class="subtitle">
        <span>发表时间：{{photosinfo.add_time | dataform}}</span>
        <span>点击:{{photosinfo.click}}</span>
      </p>
      <hr>
      <!-- 图片缩略区域 -->
       <div class="vue-img">
         <vue-preview :slides="list" @close="handleClose" ></vue-preview>
       </div>
        

      <!-- 图片内容区域 -->
      <div class="content" v-html="photosinfo.content"></div>

      <!-- 评论区域 -->
      <comment-box :megid="this.id"></comment-box>
</div>
    
</template>
<script>
import comment from '../subcomponent/comment.vue'
export default {
  data(){
    return{
      id:this.$route.params.id,
      photosinfo:[],
      list: []
    }
  },
  created(){
    this.getphotosinfo()
    this.getThumbs()

  },
  methods:{
    getphotosinfo(){
      this.$http.get("api/getimageInfo/" +this.id).then(result=>{
        if(result.body.status==0){
          this.photosinfo=result.body.message[0]
        }
      })

    },
    getThumbs() {
      // 获取缩略图
      this.$http.get("api/getthumimages/" + this.id).then(result => {
          
        if (result.body.status === 0) {
          // 循环每个图片数据，补全图片的宽和高
          // result.body.message.forEach((item,i) => {
          //   //forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
          //   item.w = 600;
          //   item.h = 400;
          //   item.msrc=result.body.message[i].src;
          //   item.src=result.body.message[i].src;
          // });

          result.body.message.forEach(function(item,i){
            item.w=400;
            item.h=400;
            item.msrc=result.body.message[i].src;
            item.src=result.body.message[i].src;
          })
          // 把完整的数据保存到 list 中
          this.list = result.body.message;
          
           }
      });
    },

    handleClose () {
          console.log('close event')
      }

  },
  components:{
    "comment-box":comment  // 设置评论区域块
  },
  
    
}
</script>

<style lang="less" scoped>
.photosinfo-container{
  padding:3px;
  h3{
    font-size: 15px;
    color:#26A2FF;
    text-align: center;
    
  }
  .subtitle{
    display: flex;
    justify-content:space-between;
  }
   .content{

    font-size: 13px;
    line-height: 30px;;
}
.vue_img{
  img{
    box-shadow: 0, 0 ,8px;
    height: 50px;
    width: 50px;
    
  }

}
}


</style>