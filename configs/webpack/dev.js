process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'
require('../env')

const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./common')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const paths = require('./../paths')

const HTTPS = process.env.HTTPS === 'true'
const HOST = process.env.HOST || 'localhost'
const PORT = parseInt(process.env.PORT, 10) || 3000
const OPEN_BROWSER = process.env.OPEN_BROWSER === 'true'

module.exports = merge(common.config, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch', // activate HMR for React
    `webpack-dev-server/client?http${HTTPS ? 's' : ''}://${HOST}:${PORT}`, // bundle the client for webpack-dev-server and connect to the provided endpoint
    'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
    paths.appIndexTsx // the entry point of our app
  ],
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
  ],
  devServer: {
    host: HOST,
    port: PORT,
    historyApiFallback: true,
    hot: true,
    open: OPEN_BROWSER,
    https: HTTPS
  },
  performance: {
    hints: false,
  },
})
