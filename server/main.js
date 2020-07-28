const Koa = require('koa')
const server = require('koa-static')
const proxy = require('koa-proxy')
const config = require('../server.config')

const app = new Koa();

app.use(server(__dirname+'../dist'))
app.use(proxy(config.server.koaProxy))
app.listen(config.server.port)

console.log("port at,", config.server.port)