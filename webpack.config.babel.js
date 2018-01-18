const path = require('path');
const webpack = require('webpack');

export default () => ({
    entry: __dirname + '/src/js/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'cc-bootstrap-tree.min.js'
    },
    externals: {
        jquery: 'jQuery'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "eslint-loader"
            }
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({sourceMap: true})
    ],
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js']
    }
});