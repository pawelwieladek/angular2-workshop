module.exports = {
  entry: './src/main.ts',
  output: {
    path: 'public/dist/',
    filename: 'main.js'
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
};
