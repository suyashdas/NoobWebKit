const gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');//prefix in css
var gulp_uglifycss = require('gulp-uglifycss');// minify css
var gulp_rename = require('gulp-rename');// rename any file
var zip = require('gulp-zip');//zip file
 
// for css files
var inputCSS = "src/NoobWebKit/KITS/style/NoobWebKit.css";
var outputCSS = "dist/NoobWebKit/KITS/style/";

gulp.task('css', function () {
  return gulp
    .src(inputCSS) // input file
    .pipe(autoprefixer()) // add prefix
    .pipe(gulp_uglifycss()) // minify file
    .pipe(gulp_rename("NoobWebKit.css"))
    .pipe(gulp.dest(outputCSS)); // save file 
});

// for lib files
   // not change anything because it's already on  production product. 
var inputLib = "src/NoobWebKit/KITS/lib/**/*";
var outputLib = "dist/NoobWebKit/KITS/lib/";
gulp.task('lib', function(){
    return gulp  
     .src(inputLib)
     .pipe(gulp.dest(outputLib));
});

// for default root files sitemap, manifest, index
var inputRootFile = "src/NoobWebKit/*";
var outputRootFile = "dist/NoobWebKit/";
gulp.task('rootFile', function(){
    return gulp  
     .src(inputRootFile)
     .pipe(gulp.dest(outputRootFile));
});

// for make dist/NoobWebKit folder zip
var inputZip = "dist/NoobWebKit/**/*";
var outputZip = "dist/";
gulp.task('zip', function(){
     return gulp
     .src(inputZip)
     .pipe(zip("NoobWebKit.zip"))
     .pipe(gulp.dest(outputZip));
});

// Watch the input folder for change whenever happens something change then run task again
/*gulp.task('watch', function() {
    gulp.watch(inputCSS, gulp.series('rootFile','css','lib'));
});*/

// set all task as a default task
gulp.task('default', gulp.series('rootFile','css','lib','zip'));
