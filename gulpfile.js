'use strict'

const gulp = require('gulp')

const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const pug = require('gulp-pug')
const plumber = require('gulp-plumber')

const autoprefixer = require('autoprefixer')

const paths = {
    pug: "./src/*.pug",
    sass : "./src/style/*.scss",
    html: "./build/",
    css: "./build/css/"
}

gulp.task('sass', () => 
    gulp.src(paths.sass)
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
        autoprefixer()
    ]))
    .pipe(gulp.dest(paths.css))
)

gulp.task('pug', () => 
    gulp.src(paths.pug)
    .pipe(plumber())
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest(paths.html))
)

gulp.task('sass:watch', () =>
    gulp.watch(paths.sass, ['sass'])
)

gulp.task('pug:watch', () =>
    gulp.watch(paths.pug, ['pug'])
)

gulp.task('watch', ['sass:watch', 'pug:watch'])

gulp.task('default', ['sass','pug'])