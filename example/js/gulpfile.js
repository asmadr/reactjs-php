const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserify = require('gulp-browserify');
//const reactify = require('reactify');
//const transform = require('vinyl-transform');
//const source = require('vinyl-source-stream');
//const rename = require("gulp-rename");
const uglify = require("gulp-uglify");

gulp.task('transform', () =>
	gulp.src('./js/src/*.jsx')
		.pipe(babel({
			presets: ['es2015', 'stage-0', 'react'],
			sourceMap: false
		}))
		.pipe(gulp.dest('./js/bld'))
);

gulp.task('bundle', ['transform'], () =>
	gulp.src('./js/bld/app.jsx')
		.pipe(
			browserify({
				//entries: ['./js/bld/app'],
				debug: true,
				//transform: ['reactify', 'babelify'],
				extensions: ['.js'],
				paths: ['./js/src/'],
				sourceMap: false
				//insertGlobals : true
			})
		)
		.pipe(concat('dist.js'))
		//.pipe(uglify())
		.pipe(gulp.dest('./js/bundle'))
);

gulp.task('default', ['bundle'], () => {});
