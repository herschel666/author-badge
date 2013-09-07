module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({
		watch: {
			livereload: {
				options: {
					livereload: true
				},
				files: [
					'**/*.html'
				]
			}
		},

		connect: {
			server: {
				options: {
					port: 9001,
					livereload: true,
					keepalive: true
				}
			}
		}

	});

};
