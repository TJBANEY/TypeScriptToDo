var gulp = require('gulp')
var webserver = require('gulp-webserver')
var typescript = require('gulp-typescript')
var sourcemaps = require('gulp-sourcemaps')
var tscConfig = require('./tsconfig.json')

var appSrc = "builds/development/"
var tsSrc = "process/typescript/"

gulp.task('copylibs', function(){
	return gulp
		src([
			'node_modules/es6-shim/es6-sham.min.js'
			'node_modules/systemjs/dist/system-polyfills.js'
			'node_modules/angular2/bundles/angular2-polyfills.js'
			'node_modules/systemjs/dist/system.src.js'
			'node_modules/rxjs/bundles/Rx.js'
			'node_modules/angular2/bundles/angular2.dev.js'
		])
		.pipe(gulp.dest(appSrc + 'js/lib/angular2'))
})

// When using Angular2, we don't use the entire framework. We only use what we need.
// For example if we wanted http our router libraries, we would want to add them to 
// the above task.