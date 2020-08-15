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
    "post|api/v1/scheduled-task": //add
        wrapper({
            "id": "", //任务id
            "name":0, //任务名称
            "cron_expression":"",//cron 表达式
            "command":"",//执行指令
            "utime":"",//更新时间
            "ctime":"",//建立时间
        }, 'null'),
    "delete|/api/v1/scheduled-task": ok(),
    "get|/api/v1/scheduled-task": ok(),
    "get|/api/v1/scheduled-task/status": ok(),
    "delete|/api/v1/scheduled-task/status": 
        ok()
}