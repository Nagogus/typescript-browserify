var gulp = require('gulp');
var browserify = require('browserify');
var tsify = require('tsify');
var connect = require('gulp-connect');
var source = require('vinyl-source-stream');
var ngHtml2Js = require("gulp-ng-html2js");
var concat = require("gulp-concat");

gulp.task('ngTemplates', function() {
  gulp.src("./app/src/**/*.html")
      .pipe(ngHtml2Js({
        moduleName: "my.templates",
        //prefix: "/lala"
      }))
      .pipe(concat("templates.min.js"))
      .pipe(gulp.dest("./build"));
});

gulp.task('build', ['ngTemplates'], function () {

  return browserify()
      .add('app/src/index.ts')
      .plugin(tsify, { noImplicitAny: true })
      .bundle()
      .on('error', function (error) { console.error(error.toString()); })
      .pipe(source('app.js'))
      .pipe(gulp.dest('./build'));
});

gulp.task('connect', function() {
  connect.server({
    root: ['app', '.']
  });
});

gulp.task('watch', ['build'], function () {
  gulp.watch(['./app/src/**/*.ts'], ['build']);
});

gulp.task('default', ['watch', 'connect']);

