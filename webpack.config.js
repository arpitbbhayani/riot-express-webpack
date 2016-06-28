var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public/js/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.tag$/,
                loader: 'tag',
                exclude: /node_modules/
            }
        ]
    }
}
