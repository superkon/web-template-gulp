'use strict';

// //////////////////////////////
// Required
// //////////////////////////////

/*** General ***/
var gulp = require('gulp'),
    concat = require('gulp-concat');

/*** Css ***/
var sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    gulpPlumber = require('gulp-plumber'),
    cleanCSS = require('gulp-clean-css');

/*** JS ***/
var uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint');

/*** svg ***/
var svgSprite = require('gulp-svg-sprite');;
var svgmin = require('gulp-svgmin');

/*** Images ***/
var tinyimg = require('gulp-tinyimg');

/*** delete files ***/
var clean = require('gulp-clean');

/*** sourceMap ***/
var sourceMaps = require('gulp-sourcemaps');

/*** Condition ***/
var gulpif = require('gulp-if'),
    lazypipe = require('lazypipe');

/*** Others ***/
var inject = require('gulp-inject'),
    mainBowerFiles = require('main-bower-files'),
    rename = require('gulp-rename'),
    stylish = require('jshint-stylish'),
    browserSync = require('browser-sync').create(),
    runSequence = require('run-sequence'),
    changed = require('gulp-changed');

// //////////////////////////////
// Config Settings
// //////////////////////////////
var g_app = {
  scss : ['src/scss/**/*.scss', 'src/css/**/*.css'],
  js : ['src/js/**/*.js', '!src/js/**/*.min.js']
}

// //////////////////////////////
// Compress Image Max-500
// //////////////////////////////
gulp.task('tinyimg', function(){
  return gulp.src('src/images/**/*.+(png|jpg)', { base: "./" })
    .pipe(tinyimg('61uPfAZ_VG-SueItJODqBWEj4pnFNGeP'))
    .pipe(gulp.dest('src/images'));
});
//gulp-cache Optimizing images however, is an extremely slow process that you'd not want to repeat unless necessary. To do so, we can use the gulp-cache plugin.

// //////////////////////////////
// Clean Task
// //////////////////////////////
gulp.task('clean', function (){
  console.log("************************* Clean-All *************************");
  return gulp.src(['dev/images/*','dev/css/**/*.css','dev/js/**/*.js','dev/maps/**/*.map'], {read: false})
    .pipe(clean());
});


// //////////////////////////////
// images
// //////////////////////////////
gulp.task('cleanImg', function () {
  console.log("************************* cleanImg-image *************************");
  return gulp.src('dev/images/*', {read: false})
    .pipe(clean());
});

gulp.task('moveImg',['cleanImg'], function(){
  console.log("************************* moveImg-image *************************");
  return gulp.src('src/images/**', { base: "./src/images" })
    .pipe(gulp.dest('./dev/images'));
});

gulp.task('minSVG',['moveImg'], function(){
  console.log("************************* minSVG-image *************************");
   return gulp.src('dev/images/**/*.svg')
   .pipe(svgmin())
   .pipe(gulp.dest('dev/images'));
});

// //////////////////////////////
// CSS Task
// //////////////////////////////
gulp.task('sass', function(){
  console.log("************************* css *************************");
  gulp.src(['src/scss/**/*.scss'])
    .pipe(gulpPlumber())
    .pipe(sourceMaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    //.pipe(cleanCSS({debug: true}, function(details) {
        //console.log(details.name + ': ' + details.stats.originalSize);
        //console.log(details.name + ': ' + details.stats.minifiedSize);
    //}))
    .pipe(concat('app.min.css'))
    .pipe(sourceMaps.write('../maps',{
      mapFile: function(mapFilePath) {
        return mapFilePath.replace('.css.map', '.css.map');
      }
    }))
    .pipe(gulp.dest('dev/css'));
});

gulp.task('sass-vendor', function(){
    console.log("************************* vendor-css *************************");
    gulp.src(mainBowerFiles('**/*.css'))
      .pipe(gulpPlumber())
      .pipe(cleanCSS({debug: true}))
      .pipe(concat('vendor.min.css'))
      .pipe(gulp.dest('dev/css'));
});

// //////////////////////////////
// Script Task
// //////////////////////////////
gulp.task('script', function(){
  console.log("************************* script *************************");
  gulp.src(g_app.js)
    .pipe(sourceMaps.init())
    .pipe(gulpPlumber())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(sourceMaps.write('../maps',{
      mapFile: function(mapFilePath) {
        return mapFilePath.replace('.js.map', '.js.map');
      }
    }))
    .pipe(gulp.dest('dev/js'));
});

gulp.task('script-vendor', function(){
  console.log("************************* vendor-script *************************");
  gulp.src(mainBowerFiles('**/*.js'))
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dev/js'));
});

// //////////////////////////////
// Watch Task
// //////////////////////////////
gulp.task('watch', function(){
  console.log("************************* watch *************************");
  gulp.watch(['src/images/**/*'], ['minSVG']);
  gulp.watch(['src/js/**/*.js'], ['script-vendor','script']);
  gulp.watch(['src/scss/**/*.scss'], ['sass-vendor','sass']);
});

// //////////////////////////////
// Default Task
// //////////////////////////////
gulp.task('default',['clean','moveImg'], function(callback){
  runSequence(['script-vendor','sass-vendor','script','sass','watch'], callback);
});

// //////////////////////////////
// STYLE
// //////////////////////////////





// //////////////////////////////
// Inject Task
// //////////////////////////////
// gulp.task('inject', function (){
//   console.log("************************* inject *************************");
//   var target = gulp.src('html/*.+(html|php)');
//   //var target = gulp.src(['html/include/include-css.html', 'html/include/include-js.html']);
//   var sources = gulp.src(['dev/**/*.js', 'dev/**/*.css'],{read: false});
//   return target.pipe(inject(sources,{relative: true}))
//     .pipe(gulp.dest('html'));
//     //.pipe(gulp.dest('html/include/'));
// });

// //////////////////////////////
// svg
// //////////////////////////////
//Basic configuration example
// var config = {
//   mode:{
//     css:{		// Activate the «css» mode
//       render:{
//         css: true	// Activate CSS output (with default options)
//       }
//     }
//     }
// };

// gulp.task('sprite', function () {
//   return gulp.src('src/icons/*.svg')
//     .pipe(svgSprite(config))
//     .pipe(gulp.dest('dev/svg'));
// });

// gulp.task('sprites', function () {
//   return gulp.src('src/icons/*.svg')
//     .pipe(svgSprite())
//     .pipe(gulp.dest('dev/svg'));
// });
