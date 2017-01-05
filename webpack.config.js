/**
 * Created by EmmaWu on 2016/10/29.
 */

var webpack = require('webpack');
var path = require('path');
var srcPath = path.resolve(__dirname + '/reddit');
// var srcPath = path.resolve(__dirname + '/testJqueryPlugin');
// var plugins = [
//     new webpack.ProvidePlugin({
//         $: "jquery",
//         jQuery: "jquery",
//     })
// ];

module.exports = {
    context: srcPath,
    resolve: {
        root: srcPath
    },
    entry: 'index.js',
    output: {
        path: './dist',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        historyApiFallback: true,
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
            },
            {
                test: /\.css/,
                loader: 'css'
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loader: 'url?name=images/[name].[ext]&limit=30000' //30KB
            },
        ]
    }
};