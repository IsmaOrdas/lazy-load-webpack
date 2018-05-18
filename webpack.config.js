const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    watch: true,
    entry: {
        main: ['babel-polyfill', './src/js/index.js']
    },
    output: {
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, "public"),
        filename: '[name].js',
        publicPath: ''
        
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["babel-preset-env", "babel-preset-stage-0"]
                    }
                }
            },
        ]
    },
    
}