import gulp from 'gulp';
import plumber from 'gulp-plumber';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import postUrl from 'postcss-url';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import server from 'browser-sync';

const { src, dest, watch, series, parallel } = gulp;
const sass = gulpSass(dartSass);
const isDevelopment = false;

export function processStyles() {
  return src(`styles/styles.scss`, { sourcemaps: isDevelopment })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))

    .pipe(dest(`styles`, { sourcemaps: isDevelopment }))
    .pipe(server.stream());
}

export function startServer() {
  server.init({
    server: {
      baseDir: './'
    }
  })
  watch(`styles/**/*.scss`, series(processStyles));
}

export function runDev(done) {
  series(
    parallel(
      processStyles,
    ),
    startServer,
  )(done);
}
