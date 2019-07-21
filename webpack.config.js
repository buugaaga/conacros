const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: './src/index.js',
  
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            plugins: [
              autoprefixer({
                overrideBrowserslist: [
                  "last 2 versions",
                  ">1%"
                ]
              })
            ]
          }
        },
        "sass-loader"
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "public/stylesheets/main.css"
    })
  ]
}