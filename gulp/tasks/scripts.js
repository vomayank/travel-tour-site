var gulp = require('gulp'),
    webpack = require('webpack');

gulp.task('scripts', ['modernizr'], function(callback) {
    webpack(require('../../webpack.config'), function(err, status) {
        if(err) {
            console.log(err.toString());
        }
        console.log(status.toString());
        callback();
        });
});