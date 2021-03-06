const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  target: 'node',
  entry: {
    main: './src/server/index.ts'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.ts$/,
        loader: 'tslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.server.json'
          }
        },
        exclude: /node_modules/,
      }
    ]
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../../dist'),
    libraryTarget: 'commonjs'
  },
  externals: [/^(?!\.|\/).+/i],
  resolve: {
    extensions: ['.ts', '.js']
  }
};
