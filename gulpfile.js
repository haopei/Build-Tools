var gulp = require('gulp'),
		uglify = require('gulp-uglify');

// minify js
gulp.task('default', function() {
	gulp.src('src/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/development/js/'));
});