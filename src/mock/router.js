const Router = require('koa-router')
const Mock =require('mockjs')

const router = new Router()

router.post('/user/login', async (ctx, next) => {
    ctx.body = Mock.mock({
        Token: '@string'
    })
})
router.get('/user/login', async (ctx, next) => {
    ctx.body = Mock.mock({
        Token: '@string'
    })
})
router.put('/task-schedule', async (ctx, next) => {
    ctx.body = {
        status: true,
        error: false
    }
})
router.post('/task-schedule', async (ctx, next) => {
    ctx.body = {
        status: true,
        error: false
    }
})
router.delete('/task-schedule', async (ctx, next) => {
    ctx.body = {
        status: true,
        error: false
    }
})
router.get('/task-schedule', async (ctx, next) => {
    ctx.body = Mock.mock(
        {
            "data|5-30": [{
                "Id|+1": 100000,
                "Name": "@ctitle",
                'Status': "@boolean",
                'Period': "@date"
            }]
        }
    )
})
router.get('/log', async (ctx, next) => {
    ctx.body = Mock.mock(
        {
            "data|5-30": [{
                "Message": "@ctitle",
                "Node": "@cname",
                "Level": "@integer(1,5)",
                "Content": "@cparagraph",
                "Ctime": "@date"
            }]
        }
    )
})
module.exports = router