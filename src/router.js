import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'

import photos  from  './components/photos/photoslist.vue'
import photosinfo from './components/photos/photosinfo.vue'
import goodslist from './components/goods/goodslist.vue'






var router=new VueRouter({
    routes:[//配置路由规则
      {path:'/',redirect:'/home'},
      {path:'/home',component:HomeContainer},
      {path:'/member',component:MemberContainer},
      {path:'/shopcart',component:ShopcarContainer},
      {path:'/search',component:SearchContainer},

      {path:'/home/newslist',component:newslist},
      {path:'/home/newsinfo/:id',component:newsinfo},
      {path:'/home/photos',component:photos},
      {path:'/home/photosinfo/:id',component:photosinfo},
      {path:'/home/goodslist',component:goodslist}
      

    
    ],
    linkActiveClass:'mui-active'  //覆盖默认的路由高亮的类 默认的类叫做 link-active-aclass
})

export default router    //把路由暴露出去