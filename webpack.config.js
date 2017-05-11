

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const QiniuPlugin = require('qiniu-plugin')
const path = '/Users/maizhikun/Learning/apache_sites/Journey_Front'

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
                test: /\.(png|jpg|gif)$/,
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
    resolve: { //好像并没有什么用 事件上是差不多的 但是里面的写法也是跟其他链接不一样, http://www.alloyteam.com/2016/01/webpack-use-optimization/#prettyPhoto
        extensions: ['','.js','.jsx','es6','css','scss','png','jpg','jpeg'],
        alias: {
            'react': path+'/node_modules/react',
            'react-dom': path+'/node_modules/react-dom',
            'react-redux': path+'/node_modules/react-redux'
        }
    },
    plugins: [
        //因为总是加载所有被编译的文件,所以现在先啦到Publish里
        /**/new HtmlWebpackPlugin({
            filename: 'login.html',
            template: path + '/Src/View/Login/login.html',
            chunks: ['login'],
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path + '/Src/View/Index/index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'setting.html',
            template: './Src/View/Setting/setting.html',
            chunks: ['setting'],
        }),
        //压缩JS
        /*new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),*/
        //抽取公共模块 不行,好像一定要有制定chunks在 可以把通用的放在一个js里,然后每个页面去script它
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.js",
            chunks: ['react', 'react-dom'],
        }),
        //七牛插件
        /*new QiniuPlugin({

        // 七牛云的两对密匙 Access Key & Secret Key
        accessKey: '7SXiYZNWBQyXvS8eRg0PFNMlcRIxS9xQ2NaunjXn',

        secretKey: 'trgyS9ecNNBIogkKsOkipGQEe9TMYPNErSdDdKfO',

        // 七牛云存储空间名称
        bucket: 'journey',

        // 上传到七牛后保存的文件名
        path: 'rc/journey/0.0.1'

      }),*/
    ],
};
