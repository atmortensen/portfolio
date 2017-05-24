var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		sass = require('gulp-sass'),
		sourcemaps = require('gulp-sourcemaps'),
		plumber = require('gulp-plumber'),
		babel = require('gulp-babel'),
		browserSync = require('browser-sync'),
		nodemon = require('gulp-nodemon'),
		concat = require('gulp-concat'),
		autoprefixer = require('gulp-autoprefixer')

gulp.task('scripts', function(){
	gulp.src('public/js/app.js')
	.pipe(plumber())
	.pipe(babel({presets: ['es2015']}))
	.pipe(uglify())
	.pipe(concat('scripts.min.js'))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('public/build'))
	.pipe(browserSync.stream())
})

gulp.task('styles', function(){
	gulp.src('public/styles/**/*.scss')
	.pipe(plumber())
	.pipe(sass({
		outputStyle: 'compressed'
	}))
	.pipe(concat('css.min.css'))
	.pipe(autoprefixer())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('public/build'))
	.pipe(browserSync.stream())
})

gulp.task('browser-sync-init', function(){
  browserSync.init({
		open: false,
    proxy: 'http://localhost:5000'
  })
})

gulp.task('bs-reload', function(){
  browserSync.reload()
})

gulp.task('default', function(cb){
	let started = false
  nodemon({
    script: 'server.js'
  }).on('start', function (){
  	if(!started){
  		gulp.start('browser-sync')
  		cb()
  		started = true
  	}
  })
})

gulp.task('browser-sync', ['scripts', 'styles', 'browser-sync-init'], function(){
	gulp.watch('public/js/**/*.js', ['scripts'])
	gulp.watch('public/styles/**/*.scss', ['styles'])
	gulp.watch('public/**/*.html', ['bs-reload'])
})