const path = require('path');

module.exports = {
  output: {
    filename: 'stream-pay-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
};