module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                stripBanners: true
            },
            css: {
                src: [
                    'assets/app/css/import.css',
                    'assets/bootstrap/dist/css/bootstrap.min.css',
                    'assets/bootstrap/dist/css/bootstrap-theme.min.css',
                    'assets/app/css/css.css'
                ],
                dest: 'assets/app.css'
            },
            js: {
                src: [
                    'assets/jQuery/dist/jquery.min.js',
                    'assets/bootstrap/dist/js/bootstrap.min.js',
                    'assets/app/js/jquery.errorToggle.js',
                    'assets/app/js/js.js'
                ],
                dest: 'assets/app.js'
            }
        },
        cssmin: {
            target: {
                files: {
                    'assets/app.min.css': ['assets/app.css']
                }
            }
        },
        uglify: {
            build: {
                src: 'assets/app.js',
                dest: 'assets/app.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);
};
