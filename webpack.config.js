const path = require('path');
const nodeExternals = require('webpack-node-externals');


module.exports = {
    externals: [ nodeExternals() ],
    entry: {
        index: path.resolve(__dirname, 'index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /.css$/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader?$!expose-loader?jQuery',
            },
        ],
    },
};