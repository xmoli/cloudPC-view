const Koa = require('koa')
const router = require('./routes.js')

const PORT = 9090

const app = new Koa()
app.use(router)

app.listen(PORT);
console.log('模拟服务器开启在端口：',PORT)
