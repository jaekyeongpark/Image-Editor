module.exports = {
  presets: [
    ['@babel/preset-env'],
    ['@babel/preset-react', {
      runtime: 'automatic'  // 자동으로 React를 import
    }]
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@': './src'
      }
    }]
  ]
};
