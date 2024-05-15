import gulp from "gulp";
import pugLinter from "gulp-pug-linter";
import stylelint from "gulp-stylelint";

import path from "./config/config/path.js";
import plugins from "./config/config/plugins.js";

function isBuild() {
  return process.argv.includes("--build") || process.argv.includes("build");
}

// Передаем значения в глобальную переменную
global.app = {
  isBuild: isBuild(),
  isDev: !isBuild(),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Импорт задач
import {
  copy,
  otfToTtf,
  ttfToWoff,
  clearFonts,
  ftp,
  svgsprite,
  tiny,
  js,
  pughtml,
  reset,
  scss,
  server,
  zip,
} from "./config/gulp-tasks/index.js";

// Наблюдатель
function watcher() {
  gulp.watch(path.watch.public, copy);
  gulp.watch(path.watch.pug, pughtml);
  gulp.watch(path.watch.sass, scss);
  gulp.watch(path.watch.js, js);
}

const mainTasks = gulp.series(reset, gulp.parallel(copy, pughtml, scss, js));

const dev = gulp.series(mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(mainTasks);
const pkzip = gulp.series(mainTasks, zip);
const deploy = gulp.series(ftp);
const fonts = gulp.series(otfToTtf, ttfToWoff, clearFonts);
const prepare = gulp.parallel(fonts, tiny, svgsprite);

export {
  dev,
  build,
  pkzip,
  deploy,
  prepare,
  fonts,
  copy,
  scss,
  pughtml,
  js,
  tiny,
  svgsprite,
};

gulp.task("default", dev);

// Линтинг
gulp.task("lint:template", () =>
  gulp.src(app.path.watch.pug).pipe(pugLinter({ reporter: "default" }))
);

gulp.task("lint:scss", () => {
  return gulp
    .src(app.path.watch.sass)
    .pipe(
      stylelint({
        fix: true,
        reporters: [
          {
            failAfterError: true,
            formatter: "string",
            console: true,
          },
        ],
      })
    )
    .pipe(gulp.dest(`src/sass`));
});
