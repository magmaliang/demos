function HelloWorldPlugin(options) {
  // Setup the plugin instance with options...
}

HelloWorldPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compile', function() {
    console.log('Hello World!'); 
  });
};

module.exports = HelloWorldPlugin;