module.exports = function() {
    var config = {
	src: './src',
	build: './build',
	dist: './dist',
	srcList: [
        'src/templates/**/*',
        'src/app/**/*',
        'src/rest-services/**/*',
        'src/components/**/*',
        'src/pages/**/*',
        'src/test/**/*',
        'src/fonts/**/*',
        'src/css/**/*',
        '!src/**/*_test.js'
    ]
    }
return config;
};
