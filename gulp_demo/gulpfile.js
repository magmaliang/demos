/* author: lianglongfei@meituan.com
 * desc: 
 */
var fetch = require('node-fetch');
var gulp = require('gulp');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
var webpack = require('webpack');
var es = require('event-stream');

var fs = require('fs');
var path = require('path');

var bsconfig;

var __config = {
	context: './'
	// 注意组件路径，不是以__dirname来计算相对路径的，而是根据生成的src.o来计算
	,cmpsDir: '../cmps/'
	// js 配置
	,src: {
		i: './src/main.js'
		,o: './src/__entry/'
		,suffix: 'main'
		,reg: /\/\/\s?bs_replace_begin([\s|\S]*)\/\/\s?bs_replace_end/g
	}
	// html 配置
	,html: {
		i: './index.html'
		,o: './release/'
		,suffix: ''
		,reg: /placeholder/g
	}
}

var deleteFolderRecursive = function(path) {
    var files = [];
    if( fs.existsSync(path) ) {
        files = fs.readdirSync(path);
        files.forEach(function(file, index){
            var curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }

        });
        fs.rmdirSync(path);
    }

};

// 以 require.ensure 包裹代码
function nip(cmpsArray, bundleName) {
	var cmps = cmpsArray.map(x => {
		var _path = __config.cmpsDir + x;
		return `_Cmps["${x}"] = require("${_path}")`
	}).join('\n');

	var cmpsMap = cmpsArray.map(x => {
		return __config.cmpsDir + x;
	})

	cmpsMap = JSON.stringify(cmpsMap);

	var str = `require.ensure([],function(require){\n${cmps}\n$1}, "${bundleName}")`;
	return str;
}

// 获取远程配置
gulp.task('getRemoteConfig', function(cb) {
	fetch('http://localhost/bs.json').then((res) => {
		return res.json();
	}).then(function(json){
		bsconfig = json;
		cb();
	})
})

gulp.task('buildsv', ['del-temp', 'del-rel', 'build-temp'], function(cb){
	webpack(require('./webpack.config.js'), function() {
		deleteFolderRecursive('./src/__entry');
		cb();
	});
})

gulp.task('build-temp', ['getRemoteConfig'], function(cb) {
	if (!bsconfig) {return}

	var keys = Object.keys(bsconfig).filter(x => x !== 'options');
	var mixed;

	keys.forEach((x) => {
		var mainsrcname = `${x}_${__config.src.suffix}.js`;
		// 分发入口js
		mixed = es.merge([gulp.src(__config.src.i)
			.pipe(replace(__config.src.reg, nip(bsconfig[x].components, x + '_webpackJsonP')))
			.pipe(rename(mainsrcname))
			.pipe(gulp.dest(`${__config.src.o}/`))]
		)

		// 分发入口html
		gulp.src(__config.html.i)
		.pipe(replace(__config.html.reg, `${mainsrcname}`))
		.pipe(rename(`${x}_index.html`))
		.pipe(gulp.dest(__config.html.o))
	})
	
	return mixed;
})


gulp.task('del-temp', function(cb) {
	deleteFolderRecursive('./src/__entry');
    cb();
})

gulp.task('del-rel', function() {
	deleteFolderRecursive('./release');
})