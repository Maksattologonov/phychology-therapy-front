const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",

    devtool: 'inline-source-map',

    entry: path.resolve(__dirname, 'src', 'index.js'),

    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: '[name].[hash].js',
    },

    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },

    devServer: {
        host: 'localhost',
        port: 8000,
        historyApiFallback: true,
        open: true,
        hot: true
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                },
                vendor: {
                    chunks: 'initial',
                    test: 'vendor',
                    name: 'vendor',
                    enforce: true
                }
            }
        }
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            // favicon: 'public/favicon.ico'
        }),
        new CleanWebpackPlugin(),
    ],
};