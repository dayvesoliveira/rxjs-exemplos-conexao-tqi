const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: 'Exemplos de RxJS'
    }),
    new CopyPlugin([
      { from: 'src/examples', to: 'examples/' }
    ]),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: ['./dist', './dist/exemples'],
    port: "4200",
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    open: true,
  }
};