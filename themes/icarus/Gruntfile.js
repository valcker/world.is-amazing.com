module.exports = function(grunt){
  grunt.initConfig({
    gitclone: {
      fancybox: {
        options: {
          repository: 'https://github.com/fancyapps/fancyBox.git',
          directory: 'tmp/fancybox'
        }
      }
    },
    copy: {
      fancybox: {
        expand: true,
        cwd: 'tmp/fancybox/source/',
        src: ['**'],
        dest: 'source/fancybox/'
      }
    },
    _clean: {
      tmp: ['tmp'],
      fontawesome: ['source/css/fonts'],
      fancybox: ['source/fancybox']
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.renameTask('clean', '_clean');

  grunt.registerTask('fancybox', ['gitclone:fancybox', 'copy:fancybox', '_clean:tmp']);
  grunt.registerTask('default', ['gitclone', 'copy', '_clean:tmp']);
  grunt.registerTask('clean', ['_clean']);
};
