var _loaders = require("./loader");
var path = require("path");
var webpack = require("webpack");
var Cp = require('copy-webpack-plugin');

var fromPath = path.join(__dirname,"../react_redux_router/");

var contentBase = path.join(__dirname,"../release/");
var _cp = new Cp([{
    from:path.join(fromPath,"/index.html")
    ,to:"./"
}])

module.exports = {
    entry: path.join(__dirname,"../react_redux_router/rrr.js"),
    output: {
        path: contentBase
        ,filename: "[name].bundle.js"
        ,libraryTarget: 'umd'
        ,publicPath:"/llf/"
    }
    //开发服务器配置
    ,devServer: {
        contentBase: contentBase,
        port: "9998"
    }
    ,module: {
        loaders: _loaders
    }
    ,debug:true
    ,plugins: [_cp,new webpack.HotModuleReplacementPlugin()]
    // ,debug: options.debug
}

// .
// |____assets
// |   |____archives
// |   |____home.js
// |   |____page.js
// |   |____sidebar.js
// |   |____main.js
// |____loader.js
// |____index.html
// |____webpack.config.js

// //以下是webpack.config.js中的内容
// var _loaders = require("./loader");
// var path = require("path");
// var webpack = require("webpack");

// //打包资源来源目录
// var fromPath = path.join(__dirname,"/assets/");
// //发布目录
// var contentBase = path.join(__dirname,"/release/");

// module.exports = {
//     entry: path.join(__dirname,"/assets/main.js"),
//     output: {
//         path: contentBase
//         ,filename: "main.bundle.js"
//         ,libraryTarget: 'umd'
//         //请注意这个字段，使用webpack-dev-server的时候，访问资源的时候需要加上这个值
//         ,publicPath:"/llf/"
//     }
//     //开发服务器配置
//     ,devServer: {
//         contentBase: contentBase,
//         port: "9998"
//     }
//     ,module: {
//         loaders: _loaders
//     }
//     ,debug:true
//     ,plugins: [new webpack.HotModuleReplacementPlugin()]
// }
