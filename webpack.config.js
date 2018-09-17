const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');

const getConfig = target => require(`./build-utils/${target}/webpack.development.js`);
module.exports = (
  { mode, target } = {
    mode: 'production',
    target: 'client'
  }
) => {
  return webpackMerge(
    {
      mode,
      plugins: [new webpack.ProgressPlugin()]
    },
    getConfig(target)
  );
};
