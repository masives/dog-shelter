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
  console.log('Running webpack in mode: ', mode);
  console.log('config', getConfig(target));

  return webpackMerge(
    {
      mode
    },
    getConfig(target)
  );
};
