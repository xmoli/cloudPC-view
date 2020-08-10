# admin
    编译需要nodejs或者docker。上线需要后端服务和docker,也可以自己把编译后dist文件夹中的静态文件部署到服务器。

## Project setup
```
npm install
```

## 开发者模式下，配置开发者反向代理服务器

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
### 开启mock服务
``` 
npm run mock
```
### Compiles and hot-reloads for development
```
npm run serve
```

## 生产者模式下，配置开发者反向代理服务器
    注意：将url前缀"/api" 重写为 ""
    把nginx.conf中http://localhost:9090 替换成后端的服务器地址

### Compiles and minifies for production
```
docker build -t xmoli/alpine:cpv .
```
##编译成静态文件
```
npm run build
```
## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
