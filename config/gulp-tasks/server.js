export const server = (done) => {
	app.plugins.browsersync.init({
		server: {
			baseDir: `${app.path.buildFolder}/`
		},
		notify: false,
		port: 3000
	})
}