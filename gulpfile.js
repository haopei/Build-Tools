'use_strict';

var gulp = require('gulp'),
		uglify = require('gulp-uglify');

var JS_SRC = 'src/js/*.js',
		JS_DEV_DEST = 'build/development/js/',
		JS_PROD_DEST = 'build/production/js/';

// uglify
gulp.task('uglify', function() {
	return gulp.src(JS_SRC)
	.pipe(gulp.dest(JS_PROD_DEST))
	.pipe(uglify())
	.pipe(gulp.dest(JS_DEV_DEST));
});

// default
gulp.task('default', ['uglify']);

// what is require(), gulp.run()