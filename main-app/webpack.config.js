const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
require('dotenv').config({ path: '../.env' });

module.exports = (env, argv) => {
  console.log(env, argv)
  const config = {
    entry: './index.js',
    mode: 'production',
    devtool: 'hidden-source-map',
    output: {
      publicPath: `${process.env.HOST}:3002/`,
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
        name: 'main_app',
        remotes: {
          'lib-app': `lib_app@${process.env.HOST}:3000/remoteEntry.js`,
          'component-app': `component_app@${process.env.HOST}:3001/remoteEntry.js`,
          'node_app': `node_app@${process.env.HOST}:3004/remoteEntry.js`,
        },
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      })
    ]
  }

  return config;
};
