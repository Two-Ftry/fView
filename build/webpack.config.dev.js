/**
 * Created by jfhuang on 18/1/5.
 */

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    entry: {
        index: './example/_index.js'
    },
    output: {
        path: path.resolve(__dirname, '../example/dist'),
        filename: '[name].js'
    },
    // devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'my index.html',
            hash: true
        })
    ]
};

module.exports = config;