<template>
    <div>
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入bb内容（最多240字）" maxlength="240" v-model="msg"> 
        </textarea>
        <mt-button type="primary" size="large" @click="postcomment">发表评论</mt-button>

              <div class="cmt_list">
                  <div class="cmt_list_2" v-for="(item, i) in comments" :key="item.add_time">

                      <div class="cmt_title">第{{ i+1 }}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp; 发表时间：{{item.dd_time |dataform }}</div>
                      
                      <div class="cmt_body">{{ item.content==='undefined' ? '此用户很懒，什么都没有留下':item.content}}</div>

                  </div>
              </div>

         
              <mt-button type="danger" size="large" plain @click="jiazai">加载更多</mt-button>
    </div>
</template>
<script>

import {Toast} from "mint-ui"
export default {
    data(){
        return{
          
          pageindex2:1 ,  //默认显示第一层
          comments:[],    //所有评论数据
          msg:''   //评论输入的内容
        }
    },
    created(){
        this.getcomment()
    },
    methods:{
        getcomment(){   //获取评论
            this.$http.get("api/getcomments/"+ this.megid +"?pageindex="+this.pageindex2).then(result=>{
                if(result.body.status==0){
                //    this.comments=result.body.message
                this.comments=this.comments.concat(result.body.message)
                //concat() 方法用于连接两个或多个字符串。
                }     })
        },
        //加载页面
        jiazai(){
            this.pageindex2++;
            this.getcomment()

        },
        postcomment(){

            if(this.msg.trim().length===0){
               return Toast("评论不能为空");
            }
        // 发表评论
      // 参数1： 请求的URL地址
      // 参数2： 提交给服务器的数据对象 { content: this.msg }
      // 参数3： 定义提交时候，表单中数据的格式  { emulateJSON:true }
    //post提交本来要三个参数但是全局使用了Vue.http.options.emulateJSON = true; 所以定义两个参数
            this.$http.post('api/postcomment/'+this.$route.params.id, {content:this.msg.trim()} ).then (function(result){
                  //拼接一个评论对象
                  var cmt={user_name:"匿名用户",add_time:"Data.now()",content:this.msg.trim()};
                  this.comments.unshift(cmt);
                  this.msg=''
            })
        }
    },
    props:['megid']

    //为什么是this.megid 而不是id因为这里的接口id参数不是写死的流动的所以用函数定义 函数调用是this.megid
    
}
</script>
<style lang="less" scoped>


h3{font-size: 18px;}

textarea{
    font-size: 14px;
    height: 80px;
    margin: 0;

    
}
.cmt_list{
  margin: 10px 0;

  .cmt_list_2{
    font-size: 13px;
}
.cmt_title{
    line-height: 30px;
    background-color: #ccc;
}
.cmt_body{
    line-height: 30px;
    text-indent: 2em;
}
}




</style>