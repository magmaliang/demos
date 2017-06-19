var path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var Test = require('./webpackplugin/test');
var glob = require('glob');

// 获取 entry

var js = {};
glob.sync('./src/__entry/*').forEach(x => {
	js[x.split('/').slice(-1)[0].replace('.js', '')] = x;
});

module.exports = {
	entry: js
	,output:{
		path: path.resolve(__dirname, "./release")
		,filename:"[name].js"
		,chunkFilename: "[name].js"
		,libraryTarget:"umd"
		,publicPath: './'
	}
	,module: {
        //加载器配置
        rules: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
           
        ]
    }
    // ,plugins: [new Test()]
}