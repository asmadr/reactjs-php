const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserify = require('gulp-browserify');
//const reactify = require('reactify');
//const transform = require('vinyl-transform');
//const source = require('vinyl-source-stream');
//const rename = require("gulp-rename");
const uglify = require("gulp-uglify");

gulp.task('jsx', () =>
	gulp.src('./src/*.jsx')
		.pipe(babel({
			presets: ['es2015', 'stage-0', 'react'],
			sourceMap: false
		}))
		.pipe(gulp.dest('./bld'))
);

gulp.task('bundle', () =>
	gulp.src('./bld/mainComponent.jsx')
		.pipe(
			browserify({
				//entries: ['./js/bld/app'],
				debug: true,
				//transform: ['reactify', 'babelify'],
				extensions: ['.js'],
				//paths: ['./js/src/'],
				sourceMap: false
				//insertGlobals : true
			})
		)
		.pipe(concat('bundle.js'))
		//.pipe(uglify())
		.pipe(gulp.dest('./dist'))
);

gulp.task('default', ['bundle'], () => {});
