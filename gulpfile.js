const gulp = require('gulp');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const browserSync = require('browser-sync').create();

const SOURCE_DIR = './app/assets';
const DIST_DIR = './public/assets';

gulp.task('js', function() {
    var b = browserify({
        entries: [`${SOURCE_DIR}/javascripts/application.js`],
    }).transform('babelify', {presets: ['es2015', 'react']}).transform('envify');

    return b
        .bundle()
        .pipe(source('application.js'))
        .pipe(gulp.dest(`${DIST_DIR}/js/`));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: 'http://localhost',
    });
    // browserSync.init({
    //     server: "./app"
    // });
});

gulp.task('js-watch', ['js'], function(done) {
    browserSync.reload();
    done();
});

gulp.task('watcher', function() {
    gulp.watch(`${SOURCE_DIR}/javascripts/**/*.js`, ['js-watch']);
});

gulp.task('default', ['js', 'watch']);
gulp.task('watch', ['browser-sync', 'watcher']);