var gulp = require('gulp')
var _ = require('lodash')
var plugins = require('gulp-load-plugins')({
  replaceString: /^gulp(-|\.)/,
  camelize: true,
  lazy: false,
  rename: {},

})
plugins.browserify = require('browserify')
plugins.runSequence = require('run-sequence')
plugins.source = require('vinyl-source-stream')

gulp.task('browserify', function (cb) {
  return plugins.browserify('src/app.js')
    .bundle()
    .pipe(plugins.source('bundle.js'))
    .pipe(gulp.dest('js'))
    .pipe(plugins.livereload())
})

gulp.task('watch', function (cb) {
  plugins.livereload.listen({port:35730});
  gulp.watch('src/**/*.js', ['browserify'])
  cb()
})
gulp.task('server', function (cb) {
  gulp.src('./')
    .pipe(plugins.plumber())
    .pipe(plugins.webserver({
      port:8999,
      open:false,
      livereload: false,
      fallback:'index.html'
    }))
})

gulp.task('default', ['browserify','watch','server'])

