module.exports = [{
		test: /\.css$/,
		loader: 'style-loader!css-loader'
	}, {
		test: /\.js[x]?$/,
		exclude: /node_modules/,
		loaders:['babel?presets[]=es2015,presets[]=react,presets[]=stage-0'] 
	}
]