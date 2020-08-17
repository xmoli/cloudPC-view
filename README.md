# web-admin

服务器任务调度系统的web页面。可以管理文件，cron任务，查看日志

## 环境
编译需要nodejs或者docker。上线需要后端服务和docker,也可以自己把编译后dist文件夹中的静态文件部署到服务器。可以查看[demo](https://licongli.gitee.io/cpv/)
[LICENSE](https://github.com/xmoli/web-admin/blob/master/LICENSE)

## Project setup
```
npm install
```

## 开发者模式下，配置开发者反向代理服务器

在首目录下vue.config.js中新加入。
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
### Compiles and hot-reloads for development
```
npm run serve
```

## 生产者模式下，配置开发者反向代理服务器
    注意：将url前缀"/api" 重写为 ""
    把nginx.conf中http://localhost:9090 替换成后端的服务器地址

### Compiles and minifies for production

```
npm run build
```
## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
