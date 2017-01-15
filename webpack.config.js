var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap', 'font?format[]=truetype&format[]=woff&format[]=embedded-opentype']
        }, {
            test: /\.js$/,
            loader: "eslint-loader",
            exclude: /node_modules/
        }, {
            test: /\.png$/,
            loader: 'file?name=assets/icons/[name].[hash].[ext]'
        }]
    }
};
