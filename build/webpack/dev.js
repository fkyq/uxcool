const webpack = require('webpack');
const path = require('path');
const configFn = require('./base');
const merge = require('webpack-merge');

const { getRoot, getPackageJSON } = require('../utils');

const root = getRoot();
const { pkgName, uxcool = {} } = getPackageJSON(path.resolve(root, 'package.json'));
const uxCoolSrcPath = uxcool.srcPath || '';
const srcPath = path.resolve(root, uxCoolSrcPath, 'src');

module.exports = (env = {}) => {
  process.env.NODE_ENV = 'development';
  return configFn(env).then(config =>
    merge(config, {
      entry: {
        [pkgName]: path.resolve(srcPath, 'index.js'),
      },
      plugins: [
        new webpack.EnvironmentPlugin({
          NODE_ENV: 'development',
        }),
      ],
  }));
};
