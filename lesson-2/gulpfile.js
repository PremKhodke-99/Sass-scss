const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("sass/**/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: ["*.html"] })) //to remove css from .css file which we dont use in html file
    .pipe(dest("css"));
}

function watchTask() {
  watch(["sass/**/*.scss", '*.html'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
