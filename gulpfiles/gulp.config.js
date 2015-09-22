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
        'src/assets/**/*',
        '!src/**/*_test.js'
    ]
    }
return config;
};
