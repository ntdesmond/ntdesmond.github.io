const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    cv: './src/cv.tsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'src', 'index.html'),
      filename: 'cv.html',
      title: 'CV',
      chunks: ['cv'],
    }),
  ],
};
