const Router = require('koa-router')
const Mock =require('mockjs')

const router = new Router()

router.post('/user/login', async (ctx, next) => {
    ctx.body = Mock.mock({
        "data": {
            token: '@string'
        },
        "error": null
    })
})
router.post('/user/register', async (ctx, next) => {
    ctx.body = {
        data: true,
        error: false
    }
})
router.put('/scheduled-task', async (ctx, next) => {
    ctx.body = {
        status: true,
        error: false
    }
})
router.post('/scheduled-task', async (ctx, next) => {
    ctx.body = {
        status: true,
        error: false
    }
})
router.delete('/scheduled-task', async (ctx, next) => {
    ctx.body = {
        status: true,
        error: false
    }
})
router.get('/scheduled-task', async (ctx, next) => {
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
                "message": "@cparagraph",
                "mode": "@cname",
                "level": "@natural(1,5)",
                "time": "@date"
            }]
        }
    )
})
//********************file */
router.get('/v1/file', async (ctx, next)=> {
    ctx.body = Mock.mock(
        {
            "data|5-50": [{
                "name": "@ctitle",
                "path": "@ctitle",
                "length": "@natural(1,5000)",
            }]
        }
    )
})
router.post('/v1/file', async (ctx, next)=> {
    ctx.body = {
        "data": null,
        "error": false
    }
})
router.delete('/v1/file', async (ctx, next)=> {
    ctx.body = {
        "data": null,
        "error": false
    }
})
router.post('/v1/file/find', async (ctx, next)=> {
    ctx.body = Mock.mock(
        {
            "data|5-50": [{
                "name": "@ctitle",
                "path": "@ctitle",
                "length": "@natural(1,5000)",
            }]
        })
})

module.exports = router