import pug from "gulp-pug";
// import versionNumber from "gulp-version-number";

export const pughtml = () => {
	const timestamp = Date.now().toString(32);

	return app.gulp.src(app.path.src.pug)
	.pipe(app.plugins.plumber(
		app.plugins.notify.onError({
			title: "HTML",
			message: "Error: <%= error.message %>"
		})
	))
	.pipe(pug({
		pretty: '\t', // Сжимать файл (false), '\t' табы вместо пробелов
		verbose: true // В терминале какой файл обработан
	}))
	.pipe(app.plugins.replace(/@img\//g, 'assets/img/'))
	.pipe(app.plugins.replace(/assets\/js\/main\.min\.js/g, `assets/js/main.min.js?v=${timestamp}`))
	.pipe(app.plugins.replace(/assets\/css\/main\.min\.css/g, `assets/css/main.min.css?v=${timestamp}`))
	.pipe(app.gulp.dest(app.path.build.pug))
	.pipe(app.plugins.browsersync.stream());
}