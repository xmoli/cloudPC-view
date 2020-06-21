const Router = require('koa-router')
const Mock =require('mockjs')

const router = new Router()

router.post('/api/user/login', async (ctx, next) => {
    ctx.body = Mock.mock({
        Token: '@string'
    })
})
router.get('/api/user/login', async (ctx, next) => {
    ctx.body = Mock.mock({
        Token: '@string'
    })
})

module.exports = router