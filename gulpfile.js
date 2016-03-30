// gulpfile.js

const child = require('child_process');
const browserSync = require('browser-sync').create();

const gulp = require('gulp');
const concat = require('gulp-concat');
const gutil = require('gulp-util');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');

const siteRoot = '_site';
const cssFiles = 'css/**/*.css';


gulp.task('css', () => {
  gulp.src(cssFiles)
    .pipe(concat('main.min.css'))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(gulp.dest('assets'));
});


gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll.bat', ['build',
    '--watch',
    '--incremental'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });

  gulp.watch(cssFiles, ['css']);
});

gulp.task('default', ['css','jekyll', 'serve']);
