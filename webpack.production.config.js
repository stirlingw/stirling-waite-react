var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
    entry: {
        app: path.resolve(__dirname, 'app/main.js'),

        // Since react is installed as a node module, node_modules/react,
        // we can point to it directly, just like require('react');
        vendors: ['react']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/, // A regexp to test the require path. accepts either js or jsx
            exclude: /node_modules/,
            loader: 'babel-loader' // The module to load. "babel" is short for "babel-loader"
        },{
            test: /\.css$/, // Only .css files
            exclude: /node_modules/,
            loader: 'style!css' // Run both loaders
        }, {
            test: /\.(png|jpg)$/,
            exclude: /node_modules/,
            loader: 'url?limit=25000'
        }, {
            test: /\.woff$/,
            exclude: /node_modules/,
            loader: 'url?limit=100000'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};

module.exports = config;