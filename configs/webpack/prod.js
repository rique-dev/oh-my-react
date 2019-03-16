process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'
require('../env')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

const paths = require('../paths')
const common = require('./common')

module.exports = merge(common.config, {
  entry: [
    paths.appIndexTsx
  ],
  mode: 'production',
  devtool: 'eval',
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      minify: {
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        useShortDoctype: true,
        removeAttributeQuotes: true,
        caseSensitive: true,
        keepClosingSlash: true,
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        sortAttributes: true,
        sortClassName: true,
        minifyURLs: true,
        trimCustomFragments: true
      }
    }),
    ...(process.env.BUNDLE_BUILD_ANALYZER === 'true' ? [new BundleAnalyzerPlugin()] : []),
  ],
  performance: {
    assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)),
  },
})
