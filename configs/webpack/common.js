const StyleLintPlugin = require('stylelint-webpack-plugin')
const webpack = require('webpack')
const { createLodashTransformer } = require('typescript-plugin-lodash')

const paths = require('./../paths')

const regexScript = /\.(js|jsx|mjs|ts|tsx)$/
const regexStyle = /\.(less|styl|scss|sass|sss)$/
const regexImage = /\.(bmp|gif|jpg|jpeg|png|svg|webp)$/
const regexFonts = /\.(woff|woff2|eot|ttf)$/

const isDev = process.env.NODE_ENV === 'development'

const staticAssetName = isDev ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]'

const minimizeCssOptions = {
  discardComments: {
    removeAll: true,
  },
}

const alias = {
  '@': paths.appSrcClient,
  '@state/*': `${paths.appSrcClient}/store/state/*`,
  '@state': `${paths.appSrcClient}/store/state`,
  '@constants': `${paths.appSrcClient}/constants.ts`,
  '@components/*': `${paths.appSrcClient}/components/*`,
  '@components': `${paths.appSrcClient}/components`,
  '@containers/*': `${paths.appSrcClient}/containers/*`,
  '@containers': `${paths.appSrcClient}/containers`,
  '@images/*': `${paths.appSrcClient}/images/*`,
  '@images': `${paths.appSrcClient}/images`,
  '@lib/*': `${paths.appSrcClient}/lib/*`,
  '@lib': `${paths.appSrcClient}/lib`,
  '@Home/*': `${paths.appSrcClient}/routes/Home/*`,
  '@Home': `${paths.appSrcClient}/routes/Home`,
  '@Login/*': `${paths.appSrcClient}/routes/Login/*`,
  '@Login': `${paths.appSrcClient}/routes/Login`,
  '@redux': `${paths.appSrcClient}/redux`,
  '@styles': `${paths.appSrcClient}/styles`,
  styles: `${paths.appSrcClient}/styles`,
  '@translations/*': `${paths.appSrcClient}/translations/*`,
  '@translations': `${paths.appSrcClient}/translations`,
  '@vendors/*': `${paths.appSrcClient}/vendors/*`,
  '@vendors': `${paths.appSrcClient}/vendors`,
}

const rulesScript = {
  test: regexScript,
  loader: 'babel-loader',
  rules: [
    {
      test: /\.(ts|tsx)$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        // transpileOnly: true,
        // experimentalWatchApi: true,
        getCustomTransformers: () => ({ before: [createLodashTransformer()] }),
      },
    },
    {
      test: /\.(js)$/,
      loader: 'source-map-loader',
    },
    {
      loader: 'cache-loader',
    },
  ],
  exclude: /node_modules/,
  options: {
    cacheDirectory: isDev,
    babelrc: true,
  },
}

const ruleStyle = {
  test: /\.css$/,
  rules: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'resolve-url-loader',
    },
  ],
}

const rulesPreStyle = {
  test: regexStyle,
  rules: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'typings-for-css-modules-loader',
      options: {
        sourceMap: false,
        importLoaders: 2,
        modules: true,
        localIdentName: isDev
          ? '[name]_[local]_[hash:base64:5]'
          : '[hash:base64:5]',
        minimize: isDev ? false : minimizeCssOptions,
        camelCase: true,
        namedExport: true,
        sass: true,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: './configs/postcss.config.js',
        },
      },
    },
    {
      loader: 'sass-loader',
    },
  ],
}

const rulesFonts = {
  test: regexFonts,
  loader: 'url-loader?limit=100000&name=[name]-[hash].[ext]',
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
          quality: 65,
        },
        // optipng.enabled: false will disable optipng
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: '65-90',
          speed: 4,
        },
        gifsicle: {
          interlaced: false,
        },
        webp: {
          quality: 75,
        },
      },
    },
  ],
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
      limit: 10000,
    },
  },
}

const rulesRaw = {
  test: /\.txt$/,
  loader: 'raw-loader',
}

const rulesExcludeAllFiles = {
  exclude: [
    regexScript,
    regexStyle,
    regexImage,
    /\.json$/,
    /\.txt$/,
    /\.md$/,
    /\.html$/,
  ],
  loader: 'file-loader',
  options: {
    name: staticAssetName,
  },
}

const rules = [
  rulesScript,
  rulesPreStyle,
  ruleStyle,
  // rulesFonts,
  rulesImage,
  rulesJson,
  rulesRaw,
  rulesVideo,
  rulesExcludeAllFiles,
  // Exclude dev modules from production build
  ...(isDev
    ? []
    : [
        {
          test: `${paths.appNodeModules}/react-deep-force-update/lib/index.js`,
          loader: 'null-loader',
        },
      ]),
]

const config = {
  output: {
    pathinfo: false,
    path: paths.appBuildClient,
    publicPath: '/',
    filename: isDev ? '[name].js' : '[name].[hash].js',
    chunkFilename: isDev ? '[name].js' : '[name].[hash].js',
  },
  resolve: {
    modules: ['node_modules', 'src'],
    alias: alias,
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.scss',
      '.sass',
      '.css',
      '.json',
      '.svg',
      '.jpeg',
      '.png',
    ],
  },
  module: {
    strictExportPresence: true,
    rules: rules,
  },
  plugins: [
    new StyleLintPlugin(),
    new webpack.IgnorePlugin(
      /^\.\/locale$/,
      /moment$/,
      /(scss|sass|css)\.d\.ts$/,
    ),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
        },
      },
    },
  },
}

module.exports = {
  rules,
  config,
  alias,
}
