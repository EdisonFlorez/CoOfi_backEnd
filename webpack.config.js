
const {VueLoaderPlugin} = require('vue-loader');
module.exports = {
    entry: "./src/app/index.js",
    output: {
        path:__dirname+'/src/public',
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],

    externals: {
        // tell `webpack` to resolve `vue` from root (window)
        vue: "Vue",
     },
     devServer: {
        // ...
        // might have to turn of this option since it throws error
        // not sure where it comes from though :(
        hot: false,
     }
};