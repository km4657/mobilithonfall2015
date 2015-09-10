/**
 * List of all dependent gulp pluggins 
 */
var gulp = require('gulp-help')(require('gulp')),
  inject = require('gulp-inject'),
  gutil = require('gulp-util'),
  watch = require('gulp-watch'),
  webserver = require('gulp-webserver'),
  uglify = require('gulp-uglify'),
  bower = require('bower'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  minifyCss = require('gulp-minify-css'),
  rename = require('gulp-rename'),
  filesize = require('gulp-filesize'),
  filenamesToJson = require('gulp-filenames-to-json'),
  clean = require('gulp-rimraf'),
  merge = require('gulp-merge'),
  Server = require('karma').Server;


var index_deps = require('./index_deps')();
var config = require('./gulp.config')();
console.log('srcList:', config.srcList);
// source and build directory definition
var source = config.src, build = config.build;

gulp.task('default');//,  ['help']);
gulp.task('start', ['build', 'watch', 'test', 'run']);
gulp.task('build',
	'Performs all build tasks to create build directory.\n\t\t', 
	['compile','copy','index']);
gulp.task('clean','Delete build and dist directories.', function () {
    return gulp.src(['build','dist'], { read: false }).pipe(clean());
});
gulp.task('compile', 'Compile sass files and copy to src/css.',function (done) {
  gulp.src('./src/scss/*.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./src/css/'))
    .on('end', done);
});

/** build dependency tasks
 * Copy: bower-components, components to build src directory
 * build index.html 
 */
gulp.task('copy', ['copy-deps', 'copy-components'], buildIndex);
gulp.task('copy-deps', function () {
    gulp.src(index_deps.js.concat(index_deps.css), { base: 'src' })
        .pipe(gulp.dest('build'));
});
gulp.task('copy-components', function () {
    gulp.src(config.srcList, { base: 'src' })
        .pipe(gulp.dest('build'));
});
gulp.task('index', buildIndex);

/**
 * Below are one time build scripts to run for developement.
 *    when a src file changes it is copy to the build directory. The build 
 *    directory is where we have a running webserver so the developer can see the 
 *    results in real time.  Test are also automatically executed.
 *    
 *    TODO: add protractor
 */
gulp.task('watch', 'Watch src directory and copy to build.',function (cb) {
    watch(config.srcList, { base: 'src' })
    .pipe(gulp.dest('build'))
    .on('end', cb);;
});
gulp.task('run', function () {
    gulp.src('build')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: 'http://localhost:8080/seed/index.html',
            port: '8080',
            path: '/seed'
        }));
});
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});


/**
 * Utility Functions:
 */
function buildIndex() {
    var target = gulp.src('./src/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths: 
    var bowerFiles = gulp.src(index_deps.js.concat(index_deps.css), { base: 'src' , read: false });
    var srcFiles = gulp.src(config.srcList, { base: 'src' , read: false  });
    var sources = merge(bowerFiles, srcFiles);
    target.pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest('build'));
}

/**
 * Dist tasks similar to build/copy but creates a distibution directory with 
 * concatinated and minified js and css files.
 */
gulp.task('dist', ['dist-js', 'dist-css'], function () {
    var target = gulp.src('./src/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths: 
    var sources = gulp.src([
        'dist/lib.css',
        'dist/lib.js'
    ], { read: false });

    return target.pipe(inject(sources, { ignorePath: 'build', addRootSlash: false }))
        .pipe(gulp.dest('dist'));
});
gulp.task('dist-js', function () {
    var bowerFiles = gulp.src(index_deps.js);
    var srcFiles = gulp.src('src/**/*.js');
    merge(bowerFiles, srcFiles)
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename('lib.min.js'))
        .pipe(gulp.dest('dist'))
        .on('error', gutil.log);
});
gulp.task('dist-css', function () {
    var bowerFiles = gulp.src(CSSFiles);
    var srcFiles = gulp.src('src/**/*.css');
    merge(bowerFiles, srcFiles)
        .pipe(concat('lib.css'))
        .pipe(gulp.dest('dist'))
        .pipe(minifyCSS())
        .pipe(rename('lib.min.css'))
        .pipe(gulp.dest('dist'))
        .on('error', gutil.log);
});

