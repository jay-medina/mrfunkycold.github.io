module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'app/scripts/**/*.js']
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: '',
          hostname: 'localhost',
          livereload: 35729,
          open: {
            target: 'http://localhost:9000'
          }
        }
      }
    },
    watch: {
      lintingtasks: {
        files: ['app/scripts/**/*.js'],
        tasks: ['jshint']
      },
      sasstasks: {
        files: ['app/styles/*.scss'],
        tasks: ['sass']
      },
      reloadfiles: {
        files: ['**/*'],
        options: {
          livereload: true
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'app/styles/main.css': 'app/styles/main.scss'
        }
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['jshint', 'sass', 'connect', 'watch']);
};
