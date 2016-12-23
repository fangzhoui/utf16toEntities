var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('dist', function(){
	gulp.src('src/index.js')
		.pipe(gulp.dest('dist/'));
	gulp.src('src/index.js')
        .pipe(uglify())
        .pipe(rename('utf16toEntities.min.js'))
        .pipe(gulp.dest('dist/'));
});