const path = require('path');
 
//导入生成html页面的插件
const htmlwebpackplugin=require('html-webpack-plugin');

const { VueLoaderPlugin } = require('vue-loader')

// const VueLoaderPlugin= require('vue-loader/lib/plugin');  //组件需要1在vue中显示


module.exports = {

     mode:'development',
  entry: './src/main.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins:[   //配置插件的节点
   
    
       new htmlwebpackplugin({  //创建一个在内存中生成的html页面插件
         template: path.join(__dirname,'./src/index.html'),  //指定 模块页面将来会根据指定路径，去生成内存中的页面
         filename:'index.html'   //指定生成页面的名称

       }),
       new VueLoaderPlugin()   //组件需要2在vue中显示
  
    ],

    
    module:{  //这个节点用于配置所有第三方模块 加载器
    
      rules: [ // 就是这些 非 JS 文件 和 loader 之间的对应关系
        { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 创建处理 css 文件的 loader 匹配规则
        { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 配置处理less文件的规则
        { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 配置 处理 scss 文件的规则
        { test: /\.jpg|png|gif|bmp$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, // 配置 处理 样式表中图片的 loader规则
        // 可以使用?给 url-loader传递参数，其中，有一个固定的参数，叫做 limit，表示图片的大小，需要给定一个 数值；
        // limit 给定的这个数值，是 图片的大小，单位是 Byte（字节）
        // 如果指定了 limit 参数，则只有图片的大小，小于给定的 值时候，才会转为base64格式的图片；否则，就不转换；
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 添加转换JS文件的loader，其中，必须把 node_modules 目录设置为 排除项，这样，在打包的时候，会忽略node_modules 目录下的所有JS文件；否则项目运行不起来！
        { test: /\.vue$/, use: 'vue-loader' }, // 解析Vue组件的第三方loader
        { test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader' }, // 处理 样式中字体文件路径的问题
      ]

    }

};


// 1：npm init -y
// 2:npm i jquery -s

//  npm i webpack-dev-server -D   命令是安装到项目的本地开发
// npm i webpack -D     注意webpack-dev-server这个工具，如果想要正常使用要求在本地项目中必须安装webpack  
// 然后再输入安装cli的指令 npm i -D webpack-cli

// npm i html-webpack-plugin -D 安装了这个就不用了引用bundle.js这个文件

// 1、想要打包css文件需要安装 npm i style-loader css-loader -D 
//1-1安装less  npm install --save less less-loader
// 2、在webpac.config.js文件里面配置节点叫做module

// css文件中如果有背景图片路径需要安装 npm i url-loader file-loader -D

// 1：bawebpack装在vue中 安装 npm i vue -s
// 2:安装 npm i vue-loader vue-template-compiler -D 不装写js读取报错 还要在modul节点上配置


// npm i vue-router -s 路由

// 安装babel
// 1:npm install -D babel-loader @babel/core @babel/preset-env webpack
// 1-1:npm i babel-plugin-syntax-dynamic-import -D
// 2:{ test: /\.js$/,loader: 'babel-loader',exclude: /node_modules/}
// 3:创建一个文件叫 .babelrc     在里面配置  
// {
//   "presets": [
//     "@babel/preset-env"
//   ],
//   "plugins": [
//     "syntax-dynamic-import"
//   ]
// }

// 获取数据 使用 vue-resource
// 安装 npm i vue-resource -s


// 定义时间组建
// npm i moment -s
// Vue.filter('dataform',function(datastr,timaform="YY-MM-DD HH-mm-ss"){
//   return moment(datastr).format(timefrom)
// })

// {{xxx|dataform('yy-mm-dd')}   定义过滤器


// 1-1mui的tab-top-webview-main.html导航条需要关闭严格模式
//1-2<div id="slider" class="mui-slider mui-fullscreen"></div> 去除这个class里面属性 这个属性占屏幕比全屏

// 1：百度查询 babel-plugin-transform-remove-strict-mode
// 2：安装 npm install babel-plugin-transform-remove-strict-mode
// 3：.babelrc 文件中调用
// {
//   "plugins": ["transform-remove-strict-mode"]
// }

// 1.在photosinfo上缩略图组件网址：https://github.com/LS1231/vue-preview
// 2.npm i vue-preview -S
