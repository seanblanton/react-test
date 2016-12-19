var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Purify = require("purifycss-webpack-plugin");

function getDevTool() {
    if (process.env.NODE_ENV !== 'production') {
        return 'source-map'; //enables source map
    }

    return false;
}

module.exports = {
    entry: {
        main: './src/js/main.js'
    },
    output: {
        filename: './dist/js/[name].js'
    },
    devtool: getDevTool(),
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css!sass")
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('dist/css/[name].css', {
          allChunks: true
        }),
        new Purify({
            basePath: __dirname,
            paths: [
                // 'dist/**/*.html',
                // 'dist/**/*.js'
            ],
            resolveExtensions: ['.html','.js'],
            purifyOptions: {
                minify: false,
                rejected: false,
                info: true,
            }
        })
    ]
};
