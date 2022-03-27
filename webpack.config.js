const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const tailwindcss = require('tailwindcss');

const isProduction = process.env.NODE_ENV === 'production'

const config = {
  entry: './src/scss/main.scss',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './public'),
  },
  devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/scss'),
    },
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  'postcss-preset-env',
                  'autoprefixer',
                  tailwindcss,
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
}

module.exports = () => {
  if (isProduction) {
    config.mode = 'production'
  }

  return config
}
