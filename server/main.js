const Koa = require('koa')
const server = require('koa-static')
const proxy = require('koa-proxy')
const config = require('../server.config')
const path = require('path')

const app = new Koa();

app.use(
    server(
        path.join(__dirname, '../dist')
        )
    )

//反向代理后端api
app.use(proxy(config.server.koaProxy))

app.listen(config.server.port)

console.log("port at,", config.server.port)