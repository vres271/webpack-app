const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',  
  entry: './src/index.js',
  devtool: 'inline-source-map', 
  devServer: {
    static: './dist',
  },  
  plugins: [new HtmlWebpackPlugin({
    title:'Test APP',
    favicon:'src/favicon.ico',
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },      
    ],
  },  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};