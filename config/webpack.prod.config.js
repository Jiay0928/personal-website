const HtmlWebpackPlugin = require('html-webpack-plugin');

// const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpack = require('webpack');

const path = require('path');
module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, '../src/index.tsx'),
    output: {
      path: path.resolve(__dirname, './public'),
      filename: '[name]-[contenthash].js',
      clean: true,
      assetModuleFilename: '[name][ext]'
    },
    performance: {
      hints: false
    },
    devServer: {
        // 静态文件目录
        static: {
          directory: path.join(__dirname, "../public")
        },
    
        compress: true,
        port: 8080, // default 8000
        open: true,
        hot: true,
          historyApiFallback: true

      },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/ ,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,//不需要去转译"node\_modules"这里面的文件。
      },
      {
        test: /\.css$/,
        use: [ 
           
          'style-loader',// 最后计算完的css，将会使用style-loader生成一个内容为最终解析完的css代码的style标签，放到head标签里
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          'css-loader' // css-loader加载器去解析这个文件，遇到“@import”等语句就将相应样式文件引入
        ]
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(svg|png|jpg|pdf|jpeg|ico)$/,
        type: 'asset/resource', 
      },
    ]
  },
  resolve: {
    extensions: ['.*', '.ts','.tsx','.js'],
    mainFiles:  ["index"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Jiaying's Personal Website",
      filename: 'index.html',
      template: 'public/index.html',// 定义的html为模板生成 从根路径开始查找
      inject: 'body',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CleanWebpackPlugin(),
    
    // Setting DefinePlugin affects React library size!
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    
  ],
  optimization: {
    minimize: true,
    runtimeChunk: true,
    splitChunks: {
        chunks: "async",
        minSize: 1000,
        minChunks: 2,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: false,
        cacheGroups: {
            default: {
                minChunks: 1,
                priority: -20,
                reuseExistingChunk: true,
            },
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10
            }
        }
    }
}
  
}