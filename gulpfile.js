// --------------------------------------------------------------------
// Plugins
// --------------------------------------------------------------------

var gulp        = require('gulp');
var concat      = require('gulp-concat');
var plumber     = require('gulp-plumber');
var uglify      = require('gulp-uglify');
var webserver   = require('gulp-webserver');
var sass        = require('gulp-sass');
var neat        = require('node-neat').includePaths;

// --------------------------------------------------------------------
// Error Handler
// --------------------------------------------------------------------

var onError = function(err) {
    console.log(err);
    this.emit('end');
};

// --------------------------------------------------------------------
// Task: serve
// --------------------------------------------------------------------

gulp.task('serve', ['serve-watch'], function() {

  //watch .scss files
	gulp.watch('client/css/scss/*.scss', ['serve-watch']);

  return gulp.src('client')
    .pipe(webserver({
      livereload: true,
      open: true
    }));

});

gulp.task('serve-watch', function(){
  return gulp.src('client/css/scss/*.scss')
    .pipe(plumber({
        errorHandler: onError
    }))
    .pipe(sass({
      includePaths: ['styles'].concat(neat)
    }))
    .pipe(gulp.dest('client/css'));
});
