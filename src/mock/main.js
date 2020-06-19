
const Mock = require("mockjs")

const host = 'https://localhost/'

Mock.mock(host+'api/user/login', 'post', {
    Token: 'string'
})

Mock.mock(host+'api/scheduled-task', 'post', {
    'Id|+1': 0,
    Name: 'string',
    CronExpression: 'string',
    Command: 'string'

})