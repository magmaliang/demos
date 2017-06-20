var _loaders = [{
		test: /\.css$/,
		loader: 'style-loader!css-loader'
	}, {
		test: /\.scss$/,
		loader: 'style-loader!css-loader!sass-loader'
	}, {
		test: /\.js[x]?$/,
		exclude: /node_modules/,
		loaders:['babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0'] 
	}
];
var path = require("path");
var webpack = require("webpack");

var contentBase = path.join(__dirname, "../release/");

module.exports = {
    entry: path.join(__dirname, "./app/main.js"),
    output: {
        path: contentBase,
        filename: "[name].bundle.js",
        libraryTarget: 'umd'
    }
    //开发服务器配置
    ,
    devServer: {
        contentBase: contentBase,
        port: "9994",
        stats: {
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    module: {
        loaders: _loaders
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}