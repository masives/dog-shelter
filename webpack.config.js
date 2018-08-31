const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({
    mode
} = {
    mode: "production"
}) => {
    console.log('Running webpack in mode: ', mode)

    return {
        mode,
        entry: "./src/client/entry.jsx",
        output: {
            path: path.join(__dirname, 'dist/public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, ]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json'] // order of resolution from left to right on imports without extension (import App from './App)
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html'
            })
        ]
    }
}