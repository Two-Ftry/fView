/**
 * Created by jfhuang on 18/1/5.
 */

var path = require('path');

const config = {
    entry: {
        fview: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
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
    }
};

module.exports = config;