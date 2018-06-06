const path = require("path")
process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'
require('../configs/env')
// const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin")
const paths = require('../configs/paths')
const isDev = process.env.NODE_ENV === 'development'
const common = require('../configs/webpack/common')
const merge = require('webpack-merge')

const regexScript = /\.(js|jsx|mjs|ts|tsx)$/
const regexStyle = /\.(css|less|styl|scss|sass|sss)$/
const regexImage = /\.(bmp|gif|jpg|jpeg|png|svg)$/
const staticAssetName = isDev ?
  '[path][name].[ext]?[hash:8]' :
  '[hash:8].[ext]'

const minimizeCssOptions = {
  discardComments: {
    removeAll: true
  }
}

const alias = {
  '@': paths.appSrcClient,
  '@constants/*': `${paths.appSrcClient}/constants/*`,
  '@constants': `${paths.appSrcClient}/constants`,
  '@components/*': `${paths.appSrcClient}/components/*`,
  '@components': `${paths.appSrcClient}/components`,
  '@containers/*': `${paths.appSrcClient}/containers/*`,
  '@containers': `${paths.appSrcClient}/containers`,
  '@images/*': `${paths.appSrcClient}/images/*`,
  '@lib/*': `${paths.appSrcClient}/lib/*`,
  '@lib': `${paths.appSrcClient}/lib`,
  '@Home/*': `${paths.appSrcClient}/routes/Home/*`,
  '@Home': `${paths.appSrcClient}/routes/Home`,
  '@Login/*': `${paths.appSrcClient}/routes/Login/*`,
  '@Login': `${paths.appSrcClient}/routes/Login`,
  '@redux': `${paths.appSrcClient}/redux`,
  '@styles': `${paths.appSrcClient}/styles`,
  'styles': `${paths.appSrcClient}/styles`,
  '@translations': `${paths.appSrcClient}/translations`,
  '@vendors/*': `${paths.appSrcClient}/vendors/*`,
  '@vendors': `${paths.appSrcClient}/vendors`,
}

const rulesScript = {
  test: regexScript,
  loader: require.resolve('babel-loader'),
  rules: [{
    test: /\.(ts|tsx)$/,
    loader: require.resolve('ts-loader')
  },
  {
    test: /\.(js)$/,
    loader: require.resolve('source-map-loader')
  }
  ],
  exclude: /node_modules/,
  options: {
    cacheDirectory: isDev,
    babelrc: true
  }
}

const rulesStyle = {
  test: regexStyle,
  rules: [{
    loader: 'style-loader'
  },
  {
    loader: 'typings-for-css-modules-loader',
    options: {
      sourceMap: false,
      importLoaders: 2,
      modules: true,
      localIdentName: isDev ? '[name]_[local]_[hash:base64:5]' : '[hash:base64:5]',
      minimize: isDev ? false : minimizeCssOptions,
      camelCase: true,
      namedExport: true,
      sass: true,
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      config: {
        path: './configs/postcss.config.js'
      }
    }
  },
  {
    loader: 'sass-loader'
  },
  ]
}

const rulesImage = {
  test: regexImage,
  // loader: "url-loader?limit=30000&name=[name]-[hash].[ext]"
  use: [
    'file-loader',
    {
      loader: 'image-webpack-loader',
      options: {
        mozjpeg: {
          progressive: true,
          quality: 65
        },
        // optipng.enabled: false will disable optipng
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: '65-90',
          speed: 4
        },
        gifsicle: {
          interlaced: false,
        },
        // the webp option will enable WEBP
        webp: {
          quality: 75
        }
      }
    },
  ]
}

const rulesJson = {
  test: /\.json$/,
  type: 'javascript/auto',
  use: 'json-loader',
}

const rulesVideo = {
  test: /\.(mp4|webm)$/,
  use: {
    loader: 'url-loader',
    options: {
      limit: 10000
    }
  }
}

const rulesRaw = {
  test: /\.txt$/,
  loader: 'raw-loader'
}

const rulesExcludeAllFiles = {
  exclude: [
    regexScript,
    regexStyle,
    regexImage,
    /\.json$/,
    /\.txt$/,
    /\.md$/,
    /\.html$/
  ],
  loader: 'file-loader',
  options: {
    name: staticAssetName
  }
}

module.exports = (baseConfig, env, config) => {

  config.module.rules.push(rulesScript)
  // config.plugins.push(new TSDocgenPlugin()) // optional
  config.resolve.extensions.push(".ts", ".tsx")
  return config
}