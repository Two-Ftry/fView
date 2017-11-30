
const path = require('path');

const config = {
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/[name].[hash:6].js',
        chunkFilename: 'js/[name].[hash:6].js'
    }
}

module.exports = config;