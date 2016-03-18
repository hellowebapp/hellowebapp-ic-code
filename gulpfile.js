// Include Gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('collection/static/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('collection/static/css'));
});

// Concatenate
gulp.task('scripts', function() {
    return gulp.src('collection/static/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('collection/static/js'));
});

// PostCSS processor
gulp.task('css', function () { 
    var processors = [
        autoprefixer({browsers: ['last 1 version']}),
    ];
    return gulp.src('collection/static/css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('collection/static/css'))
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('collection/static/js/*.js', ['scripts']);
    gulp.watch('collection/static/scss/*.scss', ['sass']);
    gulp.watch('collection/static/css/*.css', ['css']);
});

// Default Task
gulp.task('default', ['sass', 'css', 'scripts', 'watch']);
