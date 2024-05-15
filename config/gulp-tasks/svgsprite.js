/* global app */
import svgSprite from "gulp-svg-sprite";

const config = {
  mode: {
    symbol: {
      sprite: `../sprite.svg`,
      example: false,
    },
  },
};

export const svgsprite = () => {
  return app.gulp
    .src(`${app.path.raw.svgIcons}`)
    .pipe(
      svgSprite(config)
    )
    .pipe(app.plugins.replace(/fill=\".*?\"/g, 'fill="currentColor"'))
    .pipe(app.plugins.replace(/stroke=\".*?\"/g, 'stroke="currentColor"'))
    .pipe(app.gulp.dest(app.path.prepare.img));
};