require('babel/register')();
var gulp = require('gulp');

gulp.task('manager', function(cb){
	var jsonfile = require('jsonfile');
	var manager = require('./schemas/manager');

	jsonfile.writeFile('./json/managerTask.json',manager, {spaces:2}, cb);
});


gulp.task('watch', function(){
	gulp.watch(['schemas/**/*'], ['manager']);
});
