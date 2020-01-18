const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

// variables
const isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';
const sourcePath = __dirname + '/src';
const outPath = __dirname + '/build';

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = (env) => {
  return {
    context: sourcePath,
    entry: {
      app: ['whatwg-fetch', 'formdata-polyfill', './main.tsx'],
    },
    output: {
      path: outPath,
      publicPath: '/',
      filename: 'main.[hash].js',
      // chunkFilename: '[chunkhash].js'
    },
    target: 'web',
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      // Fix webpack's default behavior to not load packages with jsnext:main module
      // (jsnext:main directs not usually distributable es6 format, but es6 sources)
      mainFields: ['module', 'browser', 'main'],
      alias: {
        app: path.resolve(__dirname, 'src/app/'),
      },
    },
    module: {
      rules: [
        // .ts, .tsx
        {
          test: /\.tsx?$/,
          use: [
            !isProduction && {
              loader: 'babel-loader',
              options: { plugins: ['react-hot-loader/babel', 'babel-plugin-styled-components'] },
            },
            'ts-loader',
          ].filter(Boolean),
        },
        // css
        {
          test: /\.css$/,
          use: [
            isProduction && false ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              query: {
                sourceMap: !isProduction,
                importLoaders: 1,
                localIdentName: isProduction ? '[hash:base64:5]' : '[local]__[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('postcss-import')({ addDependencyTo: webpack }),
                  require('postcss-url')(),
                  require('postcss-preset-env')({
                    /* use stage 2 features (defaults) */
                    stage: 2,
                  }),
                  require('postcss-reporter')(),
                  require('postcss-browser-reporter')({
                    disabled: isProduction,
                  }),
                ],
              },
            },
          ],
        },
        // svg
        {
          test: /\.svg/,
          use: 'raw-loader',
        },
        // static assets
        { test: /\.html$/, use: 'html-loader' },
        {
          test: /\.(jpe?g|gif|png|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                limit: 8000, // Convert images < 8kb to base64 strings
                // name: 'images/[hash]-[name].[ext]'
                name: function() {
                  return (env.NODE_ENV === 'devServer' ? '' : 'images/') + '[path][hash][name].[ext]';
                },
                publicPath: function(url) {
                  return (env.NODE_ENV === 'devServer' ? '/' : '/react-app/build/') + url;
                },
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new Dotenv(),
      new WebpackCleanupPlugin(),
      new MiniCssExtractPlugin({
        filename: 'main.css',
        disable: !isProduction,
      }),
      new HtmlWebpackPlugin({
        template: 'assets/index.html',
      }),
    ],
    devServer: {
      contentBase: sourcePath,
      hot: true,
      inline: true,
      overlay: true,
      historyApiFallback: {
        disableDotRule: true,
      },
      stats: 'minimal',
      clientLogLevel: 'warning',
    },
    // https://webpack.js.org/configuration/devtool/
    devtool: isProduction ? 'hidden-source-map' : 'cheap-module-eval-source-map',
    node: {
      // workaround for webpack-dev-server issue
      // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
      fs: 'empty',
      net: 'empty',
    },
  };
};
