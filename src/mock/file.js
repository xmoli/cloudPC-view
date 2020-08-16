export default {
    "POST|/api/v1/file/find": {
        "data|1-15": [{
            "name": "@csentence",
            "type|1": ["folder","pdf","excel","text","photo","audio","video","other"],
            "path|1-2": "/@name",
            "length": "@integer(1,5000)"
        }]
    },
    "GET|/api/v1/file": ()=>{
        let debug = {hello: "world"};
        return new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'})
    }
}