var gulp = require('gulp');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename')

var processors = [
    require('autoprefixer')({ overrideBrowserslist: ['last 4 versions']})
]

gulp.task('css', function(){
    gulp.src('css/unprefixed/index.css')
    .pipe(postcss(processors))
    .pipe(rename('index_p.css'))
    .pipe(gulp.dest('css/prefixed/'))

    gulp.src('css/unprefixed/menu1.css')
    .pipe(postcss(processors))
    .pipe(rename('menu1_p.css'))
    .pipe(gulp.dest('css/prefixed/'))

    gulp.src('css/unprefixed/menu2.css')
    .pipe(postcss(processors))
    .pipe(rename('menu2_p.css'))
    .pipe(gulp.dest('css/prefixed/'))

    gulp.src('css/unprefixed/menu3.css')
    .pipe(postcss(processors))
    .pipe(rename('menu3_p.css'))
    .pipe(gulp.dest('css/prefixed/'))

    gulp.src('css/unprefixed/menu4.css')
    .pipe(postcss(processors))
    .pipe(rename('menu4_p.css'))
    .pipe(gulp.dest('css/prefixed/'))

    gulp.src('css/unprefixed/mentions.css')
    .pipe(postcss(processors))
    .pipe(rename('mentions_p.css'))
    .pipe(gulp.dest('css/prefixed/'))
})