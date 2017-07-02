
const webpack = require('webpack');
const path = require('path');
import PathOverridePlugin from 'path-override-webpack-plugin';

module.exports = (options) => {
  const config = {
    resolve: {
      modules: [
        'node_modules',
        path.join(__dirname, 'node_modules'),
        path.join(__dirname, 'src/scripts'),
        path.join(__dirname, 'src/scripts/libs'),
        path.join(__dirname, 'src/scripts/modules')
      ],
      extensions: ['.js', '.jsx', '.json', '.svg']
    },
    entry: {
      'patternlab-pattern': `${__dirname}/src/scripts/patternlab-pattern.js`,
      'patternlab-viewer': `${__dirname}/src/scripts/patternlab-viewer.js`,
      // styleguide: `${__dirname}/source/scripts/styleguide.js`,
      // critical: `${__dirname}/source/scripts/critical.js`
    },
    output: {
      path: `${__dirname}/dist/styleguide/js`,
      filename: '[name].min.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          enforce: 'pre',
          exclude: /node_modules/,
          // loader: require.resolve('eslint-loader'),
          // query: {
          //   configFile: path.join(__dirname, '.eslintrc')
          // }
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /critical\.js/,
          loader: require.resolve('babel-loader'),
        }
      ]
    },
    devtool: 'cheap-source-map',
    performance: {
      maxAssetSize: 1500000,
      maxEntrypointSize: 1500000
    },
    plugins: [
    ]
  };

  return config;
};
