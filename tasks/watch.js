import gulp from 'gulp'
import {
  views,
  scripts,
  styles,
  browserSync,
  lint,
} from './config.js'

gulp.task('watch', watchTask)

function watchTask() {
  gulp.watch(views.watch, [
    'views',
    browserSync.reload,
  ])

  gulp.watch(styles.watch, ['styles'])

  gulp.watch(scripts.src, [
    'scripts',
    browserSync.reload,
  ])

  gulp.watch(lint, ['lint'])
}
