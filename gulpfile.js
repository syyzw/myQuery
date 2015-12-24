var gulp = require("gulp");//gulp主对象
var util = require("gulp-util");//gulp的工具对象
var watch = require('gulp-watch');
var notify = require("gulp-notify");


gulp.task("default",function(){
	util.log("gulp开始运行");
	var a = 1;
	var b = 2;
	util.log(a+b);
	var notify = require("gulp-notify");
gulp.src("./src/index.js")
  .pipe(notify("Hello Gulp!"));



})
// gulp.task("sass",function(){
// 	gulp.src("sass/*.scss")
// 		.pipe(sass())
// 		.pipe(gulp.dest("css/"))
// });

// gulp.task("kaloa",function(){
// 	watch("sass/*.scss",function(){
// 		util.log("sass文件改变了");
// 		gulp.start("sass");
// 	})
// })


// gulp.task("sprite",function(){
//   return gulp.src("./xuebi/css/style.css")
//         .pipe(spriter({
//         	sprite:"abc.png",//雪碧图名字
//         	slice:"./xuebi/css/slice",//要压缩的图片
//         	outpath:"./xuebi/debug-css/sprite"//雪碧图的输出的地址
//         }))
//         .pipe(gulp.dest("./xuebi/debug-css"));
// })

// gulp.task("autoprefixer",function(){
// 	// return sass("scss/*.scss")
// 			// .pipe(autoprefixer({
// 			// 	browsers:["Android 4.1", "iOS 7.1", "Chrome > 31", "ff > 31", "ie >= 10"]
// 			// }))
// 	// 		.pipe(gulp.dest("css/"));
// 	return gulp.src("sass/*.scss")
// 		.pipe(sass())
// 		.pipe(autoprefixer({
// 				browsers:["Android 4.1", "iOS 5.1", "Chrome > 0", "ff > 0", "ie >= 0"]
// 			}))
// 		.pipe(gulp.dest("css/"))
// })




// gulp.task("sprite1",function(){
//   util.log("==============================");
//   util.log("开始雪碧任务");
//   return gulp.src("./xuebi/css/style.css")
//         .pipe(spriter({
//         	sprite:"abc.png",//雪碧图名字
//         	slice:"./xuebi/css/slice",//要压缩的图片
//         	outpath:"./xuebi/debug-css/sprite"//雪碧图的输出的地址
//         }))
//         .pipe(gulp.dest("./xuebi/debug-css"))
// 	    .pipe(notify("雪碧图成功生成"));
// })


// gulp.task("htmlmin",function(){
// 	return gulp.src("*.html")
// 			.pipe(htmlmin({collapseWhitespace: true}))
// 			.pipe(gulp.dest("min"))
// 			.pipe(notify("报告，html完成压缩!!!!!!"));
// })

// gulp.task('ngTask', function () {
//     return gulp.src('./ng/*.js')
//         .pipe(ngAnnotate({
//     remove: true,
//     add: true,
//     single_quotes: true
// }))
//         .pipe(gulp.dest('dist'));
// });