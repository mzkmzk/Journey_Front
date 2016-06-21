module.exports = {
	entry: './Src/Index',
	output: {
		path: 'Public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                include: __dirname + '/Src',
            },
            {
                test: /\.scss/,
                loaders: ['style','css','sass'],
            },
            {
                test: /\.html/,
                loader: 'html',
            },
		],
	},
};
