const gulp = require('gulp');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config.prod.js');
const named = require('vinyl-named');

const SOURCE_DIR = './app/assets';
const DIST_DIR = './public/assets';

gulp.task('js', function() {
    return gulp.src(`${SOURCE_DIR}/javascripts/*.js`)
        .pipe(named())
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(`${DIST_DIR}/js/`))
});

gulp.task('watch', function() {
    gulp.watch(`${SOURCE_DIR}/javascripts/**/*.js`, ['js']);
});

gulp.task('default', ['js', 'watch']);