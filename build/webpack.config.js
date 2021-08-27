const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
    entry:'./src/index.ts',
    output: {
        filename:'main.js'
    },
    resolve:{
      extensions:['.ts','.tsx','.js']
    },
    module:{
        rules:[{
            test:/\.tsx?$/,
            use:'ts-loader',
            exclude:/node_modules/
        }]
    },
    devtool:process.env.NODE_ENV == 'production' ? false :'inline-source-map',
    devServer:{
        port:8089,
        contentBase:'./dist',
        host:'localhost',
        stats:'errors-only',
        compress:false

    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/template/index.html"
        })
    ]
}