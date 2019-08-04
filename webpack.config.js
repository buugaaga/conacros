const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist', 'public')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      },
    },
    {
      test: /\.sass$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            plugins: [
              autoprefixer({
                overrideBrowserslist: [
                  "last 3 versions",
                  ">1%"
                ]
              })
            ]
          }
        },
        "sass-loader"
      ]
    },
    {
      test: /\.(png|jpe?g|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'images',
            name: '[path][name].[ext]'
          },
        },
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "stylesheets/main.css"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
}