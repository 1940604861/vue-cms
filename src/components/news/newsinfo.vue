<template>
    <div class="newsinfo-content">
      <!-- 大标题 -->
        <h1 class="info_title">{{ newsinfo.title}}</h1>
      <!-- 小标题 -->
        <p class="info_to">
            <span>时间：{{ newsinfo.app_time |dataform}}</span>
            <span>点击次数：{{newsinfo.click}}</span>
        </p>
        <hr>
            <!-- 文字内容 -->
        <div class="info_div" v-html="newsinfo.content"></div>

        <!-- 评论组件 -->
        <comment-box :megid="this.id">

        </comment-box>

    </div>
</template>
<script>
import comment from '../subcomponent/comment.vue'

export default {
  data() {
    return {
      id: this.$route.params.id, // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
      newsinfo: [] // 新闻对象
    };
  },
  created() {
    this.getnewsinfo();
  },
  methods: {
    getnewsinfo() {
      // 获取新闻详情
      this.$http.get("api/getnew/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.newsinfo = result.body.message[0];
        } else {
          Toast("获取新闻失败！");
        }
      });
    }

  },
  components:{
     "comment-box":comment     //引用评论区
  }
  

}
</script>
<style >
.newsinfo-content{
    padding: 0 4px;
}
.info_title{
    color: red;
    font-size: 14px;;
}
.info_to{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color:purple;
}


.info_div img{
    width: 100%;
}
</style>