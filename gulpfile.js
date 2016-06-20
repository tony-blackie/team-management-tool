var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var nodemon = require('gulp-nodemon');

gulp.task('server', function () {
  nodemon({
    script: 'server.js'
  })
});

gulp.task('styles', function(){
  gulp.src(['src/styles/**/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(gulp.dest('public/styles/'))
});

gulp.task('app', function(){
  return gulp.src(['src/app/**/*.module.js', 'src/app/**/*.js', '!src/app/**/*.spec.js'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/app/'))
});

gulp.task('default', function(){
  gulp.start('app');
  gulp.start('styles');
  gulp.start('server');
  gulp.watch("src/app/**/*.js", ['app']);
  gulp.watch("src/styles/**/*.css", ['styles']);
});