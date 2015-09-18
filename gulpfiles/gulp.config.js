module.exports = function() {
    var config = {
	src: './src',
	build: './build',
	dist: './dist',
	srcTestList: [
        'src/test/**/*'
    ],
	srcList: [
        'src/app/**/*',
        'src/rest-services/**/*',
        'src/components/**/*',
        'src/pages/**/*',
        'src/fonts/**/*',
        'src/css/**/*',
        '!src/**/*_test.js'
    ]
    }
return config;
};
