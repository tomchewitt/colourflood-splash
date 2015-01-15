module.exports = function(grunt) {

	// LOAD TASKS FROM PACKAGE MANEFEST
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// GRUNT CONFIG
	grunt.initConfig({

		// IMPORT MANIFEST
		pkg: grunt.file.readJSON('package.json'),

		// BANNER
	    meta: {
			banner: '/*\n' +
				' *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
				' *  <%= pkg.description %>\n' +
				' *\n' +
				' *  Made by <%= pkg.author.name %>\n' +
				' *  Under <%= pkg.license %> License\n' +
				' */\n'
	    },

	    // CONCAT
		concat: {
			dist: {
				src: [
					'libs/src/js/vendor/jquery/jQuery.2.1.1.min.js',
					'libs/src/js/vendor/gsap/TweenMax.1.13.2.min.js',
					'libs/src/js/init.js'],
				dest: 'libs/src/js/bundle.js'
			}
		},

		// MINIFY
		uglify: {
			options: {
				compress: {
			    	drop_console: true
			    }
			},
			my_target: {
				src: ['libs/src/js/bundle.js'],
				dest: 'libs/dist/js/bundle.min.js'
			}
		},

		// COMPASS
		compass: {
			dist: {
				options: {
					sassDir: 'libs/src/scss/',
					cssDir: 'libs/dist/css/',
					environment: 'production',
					outputStyle: 'compressed'
				}
			}
		},

		// AUTOPREFIX
		autoprefixer: {
			options: {
				formatting : {
					indent_size : 4
				}
			},
			files: {
				src: 'libs/dist/css/bundle-noprefix.css',
				dest: 'libs/dist/css/bundle.css'
			}
		},

		// WATCH
		watch: {
			all: {
				files: 'index.html'
			},
			scripts: {
				files: 'libs/src/js/**/*.js',
				tasks: ['concat', 'uglify']
			},
			scss: {
				files: 'libs/src/scss/*.scss',
				tasks: ['compass']
			},
			css: {
				files: 'libs/dist/css/bundle-noprefix.css',
				tasks: ['autoprefixer']
			},
		}
	});

	// CREATE TASK 'default'
	grunt.registerTask('default', ['compass', 'autoprefixer']);

};



