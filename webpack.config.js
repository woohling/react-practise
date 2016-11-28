/**
 * Created by EmmaWu on 2016/10/29.
 */

var webpack = require('webpack');
var path = require('path');
var srcPath = path.resolve(__dirname + '/todos');

module.exports = {
    context: srcPath,
    resolve: {
        root: srcPath
    },
    entry: 'index.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};