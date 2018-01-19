import ExtractTextPlugin from 'extract-text-webpack-plugin';
import BabiliPlugin from 'babili-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

const treeLESS = new ExtractTextPlugin('css/[name].css');

export default () => ({
    entry: {
        'cc-bootstrap-tree': [
            __dirname + '/src/js/index.js',
            __dirname + '/src/less/bootstrap-tree.less'
        ],
        'cc-bootstrap-tree.min': [
            __dirname + '/src/js/index.js',
            __dirname + '/src/less/bootstrap-tree.less'
        ],
        'cc-bootstrap-tree-extra': [
            __dirname + '/src/less/extra.less'
        ],
        'cc-bootstrap-tree-extra.min': [
            __dirname + '/src/less/extra.less'
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
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
        },{
            test: /\.less$/,
            exclude: /node_modules/,
            use: treeLESS.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        url: false
                    }
                },{
                    loader: 'less-loader'
                }]
            })
        }]
    },
    plugins: [
        treeLESS,
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.min\.css$/
        }),
        new BabiliPlugin({}, {
            test: /\.min\.js$/
        }),
        new CopyWebpackPlugin([{
            from: 'src/img',
            to: 'img'
        }])
    ],
    resolve: {
        modules: [
            __dirname + '/node_modules',
            __dirname + '/src'
        ],
        extensions: [
            '.json',
            '.js',
            '.less'
        ]
    }
});