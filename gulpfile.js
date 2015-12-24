var gulp = require("gulp");//gulp主对象
var util = require("gulp-util");//gulp的工具对象
var notify = require("gulp-notify");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var eslint = require('gulp-eslint');
var sourcemaps = require('gulp-sourcemaps');
var gls = require('gulp-live-server');

 gulp.task('serve', function() {
  //1. serve with default settings 
  var server = gls.static('examples', 8888) //equals to gls.static('public', 3000); 
  server.start();
});

gulp.task('compress', function() {
  return gulp.src('src/*.js')
  	.pipe(sourcemaps.init())
	    .pipe(uglify())
	    .on("error", notify.onError(function (error) {
	        return "the step of uglify has some error: " + error.message;
	      }))
	    .pipe(rename(function(path){
	    		path.basename += ".min"
	    }))
	    .on("error", notify.onError(function (error) {
	        return "the step of rename has some error: " + error.message;
	      }))
	.pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('dist'))
    .pipe(notify({
        message : 'no bug,congratulations,you are doing a good job!!'
    }));
});


gulp.task('lint', function () {
    // ESLint ignores files with "node_modules" paths. 
    // So, it's best to have gulp ignore the directory as well. 
    // Also, Be sure to return the stream from the task; 
    // Otherwise, the task may end before the stream has finished. 
    return gulp.src(['**/*.js','!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property 
        // of the file object so it can be used by other modules. 
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console. 
        // Alternatively use eslint.formatEach() (see Docs). 
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on 
        // lint error, return the stream and pipe to failAfterError last. 
        .pipe(eslint.failAfterError());
});



gulp.task( 'default', ['lint',"compress"], function(){
	//blablabla
});
