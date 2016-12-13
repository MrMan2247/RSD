module.exports = {
    context: __dirname + "/js",
    entry: "./root.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    resolve: {
        modulesDirectories: ["node_modules"],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', query: { presets: ['es2015'] } }
        ]
    }
}