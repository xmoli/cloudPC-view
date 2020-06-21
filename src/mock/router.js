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
router.get('/api/task-schedule', async (ctx, next) => {
    ctx.body = Mock.mock(
        [
        {
            'Id|+1': 0,
            'Name': '@string',
            'Status':  false,
            "CreateDate": "@date",
            "Period|1-31": 0,
        },
        {
            'Id|+1': 0,
            'Name': '@string',
            'Status':  false,
            "CreateDate": "@date",
            "Period|1-31": 0,
        },
        {
            'Id|+1': 0,
            'Name': '@string',
            'Status':  false,
            "CreateDate": "@date",
            "Period|1-31": 0,
        }
        ]
    )
})
module.exports = router