import webpack from "webpack-stream"
import uglify from "gulp-uglify"

export const js = () => {
	return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(webpack({
			mode: app.isDev ? "development" : "production",
			output: {
				filename: "main.min.js"
			},
			resolve: {
				extensions: [".js"]
			}
		}))
		.pipe(uglify())
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
}
