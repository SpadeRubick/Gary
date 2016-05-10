'use strict';

import gulp          from 'gulp';
import uglify        from 'gulp-uglify';
import jshint        from 'gulp-jshint';
import concat        from 'gulp-concat';
import less          from 'gulp-less';
import imgmin        from 'gulp-imagemin';
import rev           from 'gulp-rev-append';
import imagemin      from 'gulp-imagemin';
import htmlmin       from 'gulp-htmlmin';
import cleanCSS      from 'gulp-clean-css';
import autoprefixer  from 'gulp-autoprefixer';
import browserSync   from 'browser-sync';
var reload =browserSync.reload;

// 路径
const paths = {
    path: './source/src/',
    pathHtml: './source/',
    dest: './src/',
};

// js处理
gulp.task('js', () => {
	gulp.src(`${paths.path}js/*.js`)
        .pipe(uglify())
        .pipe(gulp.dest(`${paths.dest}js/`));
});
// css处理
gulp.task('css', () => {
    gulp.src(`${paths.path}css/*.css`)
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 8'],
            cascade: true, 								//美化属性
            remove: true, 								//去掉不必要的前缀
        }))
        .pipe(cleanCSS({
            compatibility: 'ie8',
            debug: true
        }))
        .pipe(gulp.dest(`${paths.dest}css/`));
});
// 图片处理
gulp.task('img', () => {
    gulp.src(`${paths.path}img/*.{png,jpg,gif,ico,jpeg}`)
    .pipe(imgmin({
        optimizationLevel: 5,   //类型：Number  默认：3       取值范围：0-7（优化等级）
        progressive: true,      //类型：Boolean 默认：false   无损压缩jpg图片
        interlaced: true,       //类型：Boolean 默认：false   隔行扫描gif进行渲染
        multipass: true,        //类型：Boolean 默认：false   多次优化svg直到完全优化
    }))
    .pipe(gulp.dest(`${paths.dest}img/`))
})
// html处理
gulp.task('html', () => {
    var options = {
        removeComments: true, 					//清除HTML注释
        collapseWhitespace: true, 				//压缩HTML
        collapseBooleanAttributes: true, 		//省略布尔属性的值
        removeEmptyAttributes: true, 			//删除所有空格作属性值
        removeScriptTypeAttributes: true, 		//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true, 	//删除<style>和<link>的type="text/css"
        minifyJS: true, 						//压缩页面JS
        minifyCSS: true 						//压缩页面CSS
    };
    gulp.src(`${paths.pathHtml}*.html`)
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./'));
});
// BrowserSync
gulp.task('server', () => {
    browserSync({
        server: {
            baseDir: './source'
        }
    });
    gulp.watch(['*.html', `${paths.path}js/*.js`, `${paths.path}css/*.css`], {cwd: './source'}, reload);
});

gulp.task('dist', ['js', 'css', 'img', 'html']);


