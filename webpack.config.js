//http://christianalfoni.github.io/react-webpack-cookbook/Requiring-files.html
//https://github.com/iamfoxuriel/learn-reactjs
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/main.js')
    ],
    resolve: {
        alias: {
            'react': pathToReact
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
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
        }],
        noParse: [pathToReact]
    }
};

module.exports = config;