var path = require("path");

module.exports = {
  entry: [
    './test/test.js'
  ],
  output: {
    path: path.join(__dirname,'./test/test_build'),
    publicPath: path.join(__dirname,'./test/test_build'),
    filename: 'bundle_test.js'
  },
  
module: {
    rules: [
      {test: /\.css$/, 
        loader: "style-loader!css-loader" 
        },
      {test: /\.scss$/, 
          loaders: ["style-loader", "css-loader", "sass-loader"]
        },
      {test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env','stage-2','react'],
          plugins: []
        }
      } 
    ],
  },
  resolve: {
    alias: {},
    extensions: ['.js', '.jsx']
  },
  plugins: []
};



