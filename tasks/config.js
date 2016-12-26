import browserSync from 'browser-sync'
import {argv} from 'yargs'

module.exports = {
  lint: [
    './gulpfile.babel.js',
    './tasks/*.js',
    './test/**/*.js',
    './sources/angular/**/*.js',
  ],
  views: {
    src: './sources/views/*.jade',
    watch: './sources/**/*.jade',
    dest: './'
  },
  imgs: {
    src: './sources/imgs/*',
    dest: './public/imgs',
  },
  styles: {
    src: './sources/styles/*.scss',
    watch: './sources/styles/**/*.scss',
    dest: './public/styles/'
  },
  scripts: {
    src: [
      './sources/angular/**/*.js',
      '!./sources/angular/**/*.spec.js'
    ],
    dest: './public/scripts/'
  },
  sprites: {
    src: './sources/sprites/*.png',
    dest: './public/imgs/sprites/'
  },
  browserSync: browserSync.create(),
  browserSyncOptions: {
    server: {
      baseDir: './'
    },
    notify: false,
    reloadDelay: 100,
    open: argv.open
  }
}
