module.exports = {
	entry:__dirname + "/react_redux_router/main.js"
	,output:{
		path:__dirname + "/react_redux_router/"
		,filename:"rrr.js"
		,libraryTarget:"umd"
	}
	,module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query:{
					presets:["es2015","react"]
				}
				
			}
           
        ]
    },
}