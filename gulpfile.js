const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
function buildStyles() {
    return src('sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sass().on('error', sass.logError))
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            compatibility: 'ie11'
        }))
        .pipe(dest('dist/css'))
}

function watchTask() {
    watch(['sass/**/*.scss', '*.html'], buildStyles)
}
gulp.task('build', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            compatibility: 'ie11'
        }))
        .pipe(gulp.dest('dist/css'));
});

exports.default = series(buildStyles, watchTask)