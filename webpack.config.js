
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: {
        index: './Src/View/Index/index',
        login: './Src/View/Login/login',
        setting: './Src/View/Setting/setting',
    },
    devtool: "cheap-module-source-map",
	output: {
		path: 'Public',
		filename: '[name].bundle.js'
	},
	module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                include: __dirname+ '/Src',
                exclude: __dirname+ '/Src/Utils'
            }
        ],
		loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: __dirname + '/Src',
            },
            {
                test: /\.scss$/,
                loaders: ['style','css','sass'],
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.woff$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.eot$/,
                loader: "file-loader"
            },
            {
                test: /\.svg$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            }
		],
	},
    plugins: [
        //因为总是加载所有被编译的文件,所以现在先啦到Publish里
        /**/new HtmlWebpackPlugin({
            filename: 'login.html',
            template: './Src/View/Login/login.html',
            chunks: ['login'],
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './Src/View/Index/index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'setting.html',
            template: './Src/View/Setting/setting.html',
            chunks: ['setting'],
        }),
    ],
};
