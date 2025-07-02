const { src, dest, watch, series, parallel } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const del = require('del');
const browserSync = require('browser-sync').create();

// File paths
const paths = {
  css: {
    src: 'assets/css/styles.css',
    dest: 'dist/css/'
  },
  js: {
    src: 'assets/js/**/*.js',
    dest: 'dist/js/'
  },
  html: {
    src: '*.html'
  }
};

// Clean dist directory
function clean() {
  return del(['dist']);
}

// Process CSS
function css() {
  return src(paths.css.src)
    .pipe(autoprefixer())
    .pipe(dest(paths.css.dest))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(paths.css.dest))
    .pipe(browserSync.stream());
}

// Process JavaScript
function js() {
  return src(paths.js.src, { sourcemaps: true })
    .pipe(concat('main.js'))
    .pipe(dest(paths.js.dest))
    .pipe(terser())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(paths.js.dest))
    .pipe(browserSync.stream());
}

// Watch files for changes
function watchFiles() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  watch(paths.css.src, css);
  watch(paths.js.src, js);
  watch(paths.html.src).on('change', browserSync.reload);
}

// Define complex tasks
const build = series(clean, parallel(css, js));
const dev = series(build, watchFiles);

// Export tasks
exports.clean = clean;
exports.css = css;
exports.js = js;
exports.build = build;
exports.default = dev;
