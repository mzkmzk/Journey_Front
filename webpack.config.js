module.exports = {
	entry: './Src/Index',
	output: {
		path: 'Public',
		filename: 'bundle.js'
	},
	module: {
        preLoaders: [
            {
                test: /\.js/,
                loader: 'eslint-loader',
                include: __dirname+ '/Src',
                exclude: __dirname+ '/Src/Utils'
            }
        ],
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
