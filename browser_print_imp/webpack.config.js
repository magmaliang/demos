var path = require("path");
var webpack = require("webpack");
var Cp = require('copy-webpack-plugin');

//发布目录
var contentBase = path.join(__dirname,"/release/");

var _loaders = [{
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    }
]

//复制index.html到output的根目录下
var _cp = new Cp([{
    from:path.join(__dirname,"/index.html")
    ,to:"./"
    }
    ,{
        from:path.join(__dirname,"/assets/shell.html")
        ,to:"./"
    }
    ,{
        from:path.join(__dirname,"/assets/print_target.html")
        ,to:"./"
    }
])

module.exports = {
    entry: path.join(__dirname,"/assets/main.js"),
    output: {
        path: contentBase
        ,filename: "main.bundle.js"
        ,libraryTarget: 'umd'
        ,publicPath:"/"
    }
    //开发服务器配置
    ,devServer: {
        contentBase: contentBase,
        port: "9997"
    }
    ,module: {
        loaders: _loaders
    }
    ,debug:true
    ,plugins: [_cp,new webpack.HotModuleReplacementPlugin()]
}
