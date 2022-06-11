module.exports = function(grunt){

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	// Concatenate Configuration
	concat: {
		options: {
			separator: ';'
		},
		script: {
			src: [
				'dist/js/script.plugins.js',
				'dist/js/script.core.js'				
			],
			dest: '../markup/js/script.js'
		}
	},


	// Uglify Configuration
	uglify: {
		dist: {
			files: {
				'../markup/js/jquery.min.js': ['dist/js/plugin/jquery.js'],
				'../markup/plugin/jquery.mask.min.js': ['dist/js/plugin/jquery.mask.js'],
				'../markup/plugin/owl.carousel.min.js': ['dist/js/plugin/owl.carousel.js'],
				'../markup/plugin/easyResponsiveTabs.min.js': ['dist/js/plugin/easyResponsiveTabs.js'],
				'../markup/plugin/chosen.jquery.min.js': ['dist/js/plugin/chosen.jquery.js'],
				'../markup/plugin/jquery.validate.min.js': ['dist/js/plugin/jquery.validate.js'],
				'../markup/plugin/jquery.arcticmodal-0.3.min.js': ['dist/js/plugin/jquery.arcticmodal-0.3.js'],
				'../markup/plugin/jcf.min.js': ['dist/js/plugin/jcf.js'],
				'../markup/plugin/jcf.number.min.js': ['dist/js/plugin/jcf.number.js'],
				'../markup/plugin/jcf.range.min.js': ['dist/js/plugin/jcf.range.js'],
				'../markup/plugin/jquery-ui.min.js': ['dist/js/plugin/jquery-ui.js'],
				'../markup/plugin/jquery.fancybox.min.js': ['dist/js/plugin/jquery.fancybox.js'],
				'../markup/plugin/tooltipster.bundle.min.js': ['dist/js/plugin/tooltipster.bundle.js'],
				// '../markup/js/script.core.min.js': ['dist/js/script.core.js'],
				// '../markup/js/script.plugins.min.js': ['dist/js/script.plugins.js'],
				
			}
		}
	},

	// Sass Configuration
	sass: {
		options: {
			loadPath: ['bower_components/foundation/foundation.scss']
		},
		dist: {
			options: {
				sourcemap: 'none',
				style: 'compressed'
			},
			files: [{
				expand: true,
				cwd: 'dist/scss/',
				src: ['*.scss'],
				dest: '../markup/css/',
				ext: '.css'
			}]
		}
	},

	// Watch Configuration
	watch: {
		grunt: { files: ['Gruntfile.js'], tasks: ['default'] },

		sass: {
			files: 'dist/scss/*.scss',
			tasks: ['buildCss']
		},

		script: {
			files: 'dist/js/*.js',
			tasks: ['buildJs']
		},

		markup: {
			files: '*.html',
			tasks: ['htmlbuild']
		}
	},

	fixturesPath: './',
	sourcesPath: '../markup',

    htmlbuild: {
        dist: {
            src: '*.html',
            dest: '<%= sourcesPath %>/templates/',
            options: {
                beautify: true,
                prefix: '../',
                relative: false,
                sections: {
                    views: '<%= fixturesPath %>/*.html',
                    templates: '<%= fixturesPath %>/*.html',
                    layout: {
						header: '<%= fixturesPath %>/templates/header.html',
                    	footer: '<%= fixturesPath %>/templates/footer.html',
					}
                },
            }
        }
    }


});

// Load Grunt tasks
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-html-build');

// Register Grunt tasks
grunt.registerTask('buildCss', ['sass']);
grunt.registerTask('buildJs',  ['concat', 'uglify']);
grunt.registerTask('default',  ['buildCss', 'buildJs', 'watch', 'sass']);

}
