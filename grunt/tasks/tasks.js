var cbr = require('cbr');

module.exports = function (grunt) {

	function comicExtract() {
		var files = this.filesSrc;

		files.forEach(function (file) {
			var out = 'tmp/' + file.slice(0, -4);
			cbr(file, out, function(err, out) {
				if (err) {
					console.log('err');
					grunt.log.warn(err);
				}
				console.log('ok!');
				grunt.log.ok(file, 'extracted to ', out);
			});
		});
	}

	grunt.registerMultiTask('comic', 'Extract CBR and CBZ Files', comicExtract);
};
