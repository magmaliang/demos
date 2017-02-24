var _loaders = require("./loader");
var path = require("path");
var webpack = require("webpack");

var contentBase = path.join(__dirname,"../release/");

module.exports = {
    entry: path.join(__dirname,"../app/main.js"),
    output: {
        path: contentBase
        ,filename: "[name].bundle.js"
        ,libraryTarget: 'umd'
    }
    //开发服务器配置
    ,devServer: {
        contentBase: contentBase,
        port: "9994"
    }
    ,module: {
        loaders: _loaders
    }
    ,debug:true
    ,plugins: [new webpack.HotModuleReplacementPlugin()]
}