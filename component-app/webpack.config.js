const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
require('dotenv').config({ path: '../.env' });

module.exports = {
  entry: './index.js',
  mode: 'production',
  devtool: 'hidden-source-map',
  output: {
    publicPath: `${process.env.HOST}:3001/`,
    clean: true,
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.css', '.scss', '.jpg', 'jpeg', 'png'],
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'component_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button.jsx',
        './Dialog': './src/Dialog.jsx',
        './Logo': './src/Logo.jsx',
        './ToolTip': './src/ToolTip.jsx',
      },
      remotes: {
        'lib-app': `lib_app@${process.env.HOST}:3000/remoteEntry.js`,
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
