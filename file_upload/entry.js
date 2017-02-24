module.exports = {
	entry:__dirname + "/app/main.js"
	,output:{
		path:__dirname + "/release"
		,filename:"bundle.js"
	}
	,module:{
		loaders:[
			{
				test:/\.js$/
				,exclude:/node_modules/
				,loader:"babel"
				,query:{
					presets:['es2015']
				}
			}
			,{
				test:/\.css$/
				,exclude: /node_modules/
				,loader: "style-loader!css-loader"
			}
		]
	}
}