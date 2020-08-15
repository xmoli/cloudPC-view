let t = {
    "data": null,
    "error": null
}
t.data = {
    "path": "/",
    "length": 0
}
let t_file = t

t.data = null
let t_null = t

export default {
    "post|/api/v1/file": {//upload
        "data": {
            "path": "",
            "length":0
        },
        "error": null
    },
    "delete|/api/v1/file": {
        t_null
    },
    "post|/api/v1/file/find": {
        t_file
    },
    "get|/api/v1/file": {
        t_file
    }
}