
const HtmlWebPackPlugin = require('html-webpack-plugin'),//requiero el paquete
MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports={
    mode:'production', // estava en development yo lo pase a production
   output:{
    filename: 'main.[contenthash].js'

   },
   
   
    module:{
        rules:[
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                //   options: {
                //     presets: ['@babel/preset-env']
                //   }
                }
              },
    
        {   
            test: /\.css$/,
            exclude: /styles\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /styles\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        },
        {
            test:/\.html$/i,
            loader:'html-loader',
            options:{
                sources:false,
                minimize:false
            },

        },
        {
            test:/\.(png|svg|jpg|gif)$/,
            use:[
                {
                    loader:'file-loader',
                    options:{
                        esModule:false
                    }
                }
            ]
        }
        ]
    },


    
    plugins:[//donde pongo el paquete 
        new HtmlWebPackPlugin({//los pligin que quiero
            template: './src/index.html',//que archivo quiero tomar
            filename:'./index.html'//donde quiero colocarlo
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
            { from: 'src/assets', to: 'assets/' },
        ],
        }),
        new CleanWebpackPlugin(),
    ]
}