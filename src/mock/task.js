function wrapper (obj,err) {
    return {
        "data": obj,
        "error": err
    }
}
function ok () {
    return {
        "data": null,
        "error": null
    }
}
export default {
    "GET|/api/scheduled-task": //add
        {
           "data|1-50": [{ 
                "id|+1": 1, //任务id
                "name": "@name", //任务名称
                "cron_expression":"",//cron 表达式
                "command":"",//执行指令
                "utime":"",//更新时间
                "ctime":"@time",//建立时间
            }]
        },
    "delete|/api/v1/scheduled-task": ok(),
    "get|/api/v1/scheduled-task": ok(),
    "get|/api/v1/scheduled-task/status": ok(),
    "delete|/api/v1/scheduled-task/status": 
        ok()
}