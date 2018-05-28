const webpack = require('webpack');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const path=require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        staticMod:['antd','antd/dist/antd.css']
    },
    resolve:{
        alias:{
            $root:__dirname,
        },
    },
    // stats:'verbose',
    devtool: "source-map",
    // devtool: 'cheap-module-eval-source-map',
    devServer: {
        clientLogLevel: 'info',
        compress: true,
        contentBase:[
            './test/dev-dist',],
        hot:true,
        inline:true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true' //just in case
        }
    },
    output: {
        path: __dirname + '/static',
        // path:'https://localhost:8080',
        filename: "js/[name].js",
        library: '[name]_[hash]'
    },
    externals:{
        jquery:'$'
    },
    module: {
        rules: [


            {
                test:/\.(ttf|woff|svg|gif|jpg|png)\??.*$/,
                loader:'url-loader?limit=50000&name=../[hash:8][path][name].[ext]'
            },
            // {
            //     test: /\.css$/,
            //
            //     use: ExtractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: "css-loader?importLoader=1&modules&localIdentName=[local]",
            //         // use:"css-loader",
            //     })
            //
            // },
            {
                test: /\.css$/,

                use: [MiniCssExtractPlugin.loader,
                    "css-loader?importLoader=1&localIdentName=[local]"],

            },
            {
                test:/\.(vtsx|ts)$/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', ],
                            plugins:["transform-typescript",'babel-plugin-transform-vue-jsx',"babel-plugin-syntax-object-rest-spread"]
                        }

                    }
                ]

            },
            {
                test:/\.tsx$/,

                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env',
                            '@babel/preset-react'],
                            plugins:["babel-plugin-syntax-object-rest-spread","@babel/plugin-transform-typescript","@babel/plugin-proposal-class-properties",['react-css-modules']
                            ]
                        }

                    },

                ],

            },
            {
                test:/\.(jsx|js)$/,

                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins:["babel-plugin-syntax-object-rest-spread",
                                "@babel/plugin-proposal-class-properties",['react-css-modules']
                            ]
                        }

                    }
                ]

            },
        ]
    },

    plugins:[

        // new webpack.DllReferencePlugin({
        //     context: __dirname,
        //     manifest:require('./static/js/staticMod_manifest.json')
        // }),
        new webpack.DllPlugin({
            context: __dirname,
            name: "[name]_[hash]",
            path: './static/js/[name]_manifest.json'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new MiniCssExtractPlugin({filename:"css/[name].css"}),

        // new CompressionPlugin({
        //     test: /\.js$/,
        //     cache:true,
        // })
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "jquery",
        //
        // })
    ]
}
