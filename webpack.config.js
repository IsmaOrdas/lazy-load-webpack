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
    plugins: [
        new UglifyJsPlugin({
            uglifyOptions: {
              ecma: 6,
              warnings: false,
              output: {
                comments: false,
                beautify: false,
              },
              toplevel: false,
              nameCache: null,
              ie8: false,
              keep_classnames: undefined,
              keep_fnames: false,
              safari10: false,
            }
          })
    ]
    
}