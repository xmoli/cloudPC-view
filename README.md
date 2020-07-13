# admin
    需要nodejs npm yarn。反向代理。
## Project setup
```
yarn install
```

### 配置开发者反向代理服务器

在首目录下，新建vue.config.js。例子：
```
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: "http://localhost:9090",
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
