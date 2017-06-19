var getPixels = require("get-pixels");

getPixels('./a.png',function(err, pixels){
	console.log('pix', pixels.get(0,0,0))
})