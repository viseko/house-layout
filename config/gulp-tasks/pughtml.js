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
	// Заменяем конструкции типа data-attr="data-attr" на data-attr (фикс бага Pug для правильной работы fancybox)
	.pipe(app.plugins.replace(/data-.+?="data.+?"/gm, (match) => {
		const attr = match.replace(/=".+?"/g, "");
		const val = match.match(/".+"/g)[0].replace(/"/g, "");
		return (attr === val) ? attr : val
	}))
	.pipe(app.gulp.dest(app.path.build.pug))
	.pipe(app.plugins.browsersync.stream());
}