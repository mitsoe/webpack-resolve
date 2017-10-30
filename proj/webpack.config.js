const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        modules: [path.resolve(__dirname, "../test"), "node_modules"],
        alias: {
            Test: path.resolve(__dirname, '../test/')
        }
    }

};