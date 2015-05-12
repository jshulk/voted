var gulp = require("gulp"),
	connect = require("gulp-connect"),
	open = require("gulp-open"),
	browserify = require("browserify"),
	source = require("vinyl-source-stream"),
	buffer = require("vinyl-buffer"),
	concat = require("gulp-concat"),
	reactify = require("reactify"),
	port = process.env.port || 3000;

gulp.task("browserify", function(){
	var b = browserify({
		entries: './app/src/js/components/main.js',
		debug: true,
		transform: [reactify]
	});

	b.bundle()
	 .pipe(source("main.js"))
	 .pipe(buffer())
	 .pipe(gulp.dest("./app/dist/js"));
});

gulp.task("open", function(){
	var options = {
		url: 'http://localhost:'+port
	};
	gulp.src("./app/index.html")
		.pipe(open('', options));
});

gulp.task("connect", function(){
	connect.server({
		root: "app",
		port: port,
		livereload: true
	});
});

//livereload js
gulp.task("js", function(){
	gulp.src("./app/dist/**/*.js")
		.pipe(connect.reload());
});

//livereload html
gulp.task("html", function(){
	gulp.src("./app/*.html")
		.pipe(connect.reload())
});

gulp.task("watch", function(){
	gulp.watch("app/dist/js/*.js", ['js']);
	gulp.watch("app/index.html", ['html']);
	gulp.watch("app/src/js/**/*.js", ['browserify']);
});

gulp.task("default", ['browserify']);
gulp.task("serve", ['browserify', 'connect', 'watch']);
