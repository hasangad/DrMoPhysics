var compressor = require('node-minify');

compressor.minify({
  compressor: 'uglifyjs',
  //compressor: 'no-compress',
  //input: 'assets/js/un-min-js/*.js',
  input: ['assets/js/un-min-js/jquery.min.js',
      'assets/js/un-min-js/popper.min.js',
    'assets/js/un-min-js/bootstrap.min.js',
     'assets/js/un-min-js/navigation.js',
     'assets/js/un-min-js/function_js.js',
  ],

  output: 'assets/js/scripts.js',
  callback: function (err, min) { }
});
