const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
require('dotenv').config({ path: '../.env' });

module.exports = {
  entry: './index.js',
  mode: 'production',
  devtool: 'hidden-source-map',
  output: {
    publicPath: `${process.env.HOST}:3000/`,
    clean: true,
  },
  module: {},
  plugins: [
    new ModuleFederationPlugin({
      name: 'lib_app',
      filename: 'remoteEntry.js',
      exposes: {
        './react': 'react',
        './react-dom': 'react-dom',
      },
    }),
  ],
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  }
};
