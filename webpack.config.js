/**
 * Created by EmmaWu on 2016/10/29.
 */

var webpack = require('webpack');


module.exports = {
    entry: './main.js',
    output: {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    preset: ['es2015', 'react']
                }
            }
        ]
    }
};