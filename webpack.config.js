const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),  // static 파일 경로 설정
    },
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,  // CSS 파일을 처리하는 룰 추가
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')  // @를 src 폴더로 설정
    },
    extensions: ['.js', '.jsx']  // 확장자 생략 가능
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};
