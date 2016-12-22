import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import { exec } from 'child_process';

const paths = {
  allSrcJs: 'src/**/*.js',
  destDir: 'dest',
};

gulp.task('clean', () => {
  return del(paths.destDir);
});

gulp.task('build', ['clean'], () => {
  return gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.destDir));
});

gulp.task('main', ['build'], (callback) => {
  exec(`node ${paths.destDir}`, (error, stdout) => {
    console.log(stdout);
    return callback(error);
  });
});

gulp.task('watch', () => {
  gulp.watch(paths.allSrcJs, ['main']);
});

gulp.task('default', ['watch', 'main']);
