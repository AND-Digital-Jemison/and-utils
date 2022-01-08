const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
module.exports = {
  entry: './index.js',
  mode: 'development',
  devtool: 'hidden-source-map',
  output: {
    publicPath: 'https://ec2-3-250-133-129.eu-west-1.compute.amazonaws.com:3000/',
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
};
