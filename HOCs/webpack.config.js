var path = require("path");
var webpack = require("webpack");

//发布目录
var contentBase = path.join(__dirname,"/release/");

var _loaders = [{
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ["es2015", "react"]
        }
    }
]

module.exports = {
    entry: path.join(__dirname,"/js/main.js"),
    output: {
        path: contentBase
        ,filename: "main.bundle.js"
        ,libraryTarget: 'umd'
        //请注意这个字段，使用webpack-dev-server的时候，访问资源的时候需要加上这个值
        // ,publicPath:"/"
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
    ,plugins: [new webpack.HotModuleReplacementPlugin()]
}
