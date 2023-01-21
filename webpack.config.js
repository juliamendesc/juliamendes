module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
}
