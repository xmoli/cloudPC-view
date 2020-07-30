# admin
    编译需要nodejs npm（yarn）。上线需要反向代理支持。

## Project setup
npm
```
npm install
```
yarn
```
yarn install
```

### 开发者模式下，配置开发者反向代理服务器

在首目录下，新建vue.config.js。
例子：将http://localhost:9090 替换成后端的服务器地址
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

### 生产者模式下，配置开发者反向代理服务器
    注意：将url前缀"/api" 重写为 ""
    新建server.config.js 将http://localhost:9090 替换成后端的服务器地址
```
module.exports ={
    server: {
        port: 80,
        koaProxy: {
            host: 'http://localhost:9090',
            map: function(path){
                return path.replace(/^\/api/, "")
            }
        }
    }
}
```
### Compiles and hot-reloads for development
npm
```
npm run serve
```
yarn
```
yarn serve
```

### Compiles and minifies for production
npm
```
npm run build
```
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
