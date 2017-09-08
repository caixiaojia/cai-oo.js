/**
 * Created by shawntsia on 2017/9/8.
 */

var gulp = require('gulp');
var DEST = 'build';
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');


gulp.task('default', function() {
    gulp.src(['src/cai.js', 'src/callback.js', 'src/deffred.js', 'src/ajax.js'])
        .pipe(concat('cai.js'))
        .pipe(gulp.dest(DEST)) // 输出未压缩版本
        .pipe(rename({extname: '.min.js'}))
        .pipe(uglify())
        .pipe(gulp.dest(DEST)) // 输出压缩版本
});
