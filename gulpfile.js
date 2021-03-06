


'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('/')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('/'));
});
 
gulp.task('watch', function () {
  gulp.watch('./*.scss', ['sass']);
});
gulp.task('default', ['sass', 'watch']);