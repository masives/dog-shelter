const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    target: "node",
    entry: {
        main: "./src/server/index.ts"
    },
    module: {
        rules: [{
            test: /.ts$/,
            use: ['ts-loader', "eslint-loader"],
            exclude: /node_modules/
        }]
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}