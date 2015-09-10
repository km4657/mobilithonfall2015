module.exports = function() {
    var config = {
	src: './src',
	build: './build',
	dist: './dist',
	srcList: [
        'src/templates/**/*',
        'src/app/**/*',
        'src/components/**/*',
        'src/fonts/**/*',
        'src/css/**/*',
        '!src/**/*test*'
    ]
    }
return config;
};
