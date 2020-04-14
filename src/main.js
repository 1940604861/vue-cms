

import Vue from 'vue'

import app from './app.vue'

import router from './router.js'


// mui css文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//mint ui css文件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)

// 导入时间插件
import moment from 'moment'
// 定义时间过滤器
Vue.filter('dataform',function(datastr,patter="YYYY-MM-DD HH:mm:ss"){
 return  moment(datastr).format(patter)
})

//缩略图组件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


// 2.1导入 vue-resource
import VueResource from 'vue-resource'
// 2.2安装 vue-resource
Vue.use(VueResource)

Vue.http.options.root = 'http://www.liulongbin.top:3005';
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;


var vm = new Vue({
  el: '#app',
  data:{},
   router,

  render: c => c(app)
  
})

