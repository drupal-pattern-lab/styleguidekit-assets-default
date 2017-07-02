'use strict';

const connect = require('gulp-connect');


module.exports = function (gulp) {
  gulp.task('browsersync', function(){

    connect.server({
      root: '/Users/sghoweri/sites/bolt-design-system/bolt/bolt-patternlab-starter/public',
      port: 3000,
      livereload: true
    });
  });
};
