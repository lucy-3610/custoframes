const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Path to your entry JS file
  output: {
    filename: 'bundle.js', // Name of the bundled JS file
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // This cleans up the dist folder each build
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Match SASS/SCSS files
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to your HTML file
      filename: 'index.html', // Name of the output HTML file in the dist folder
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/images', to: 'assets/images' }
      ],
    }),
  ],
  mode: 'development', // Set to 'production' for production builds
};
